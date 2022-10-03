---
title: Media Source Extensions のためのアセットのトランスコード
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
---

Media Source Extensions を使用する場合、アセットをストリーミングする前に調整する必要がある可能性があります。 この記事では、要件を説明し、アセットを適切にエンコードするために使用できるツールチェーンを示します。

## 入門

1. 最初で最も重要な手順は、ユーザーのブラウザーがサポートするコンテナとコーデックでファイルを構成することです。
2. コーデックによっては、[ISO BMFF 仕様](https://www.w3.org/TR/mse-byte-stream-format-isobmff/)に準拠するためにファイルを断片化する必要がある場合があります。
3. （オプション）Dynamic Adaptive Streaming over HTTP（DASH、HTTP を介した動的適応的ストリーミング）を使用した適応的ビットレートストリーミングを使用する場合、アセットを複数の解像度にトランスコードする必要があります。 ほとんどの DASH クライアントは、対応する Media Presentation Description（MPD）マニフェストファイルを期待しています。 これは通常、複数の解像度のアセットファイルを生成するときに生成されます。

以下では、これらのすべての手順を説明しますが、最初にこれをかなり簡単に行うために使用できるツールチェーンを見てみましょう。

### サンプルメディア

ここにリストされている手順を実行したいが、実験するメディアがない場合は、Big Buck Bunny の予告編 \[0] を[ここ](http://wayback.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov)で入手できます。 Big Buck Bunny は、[Creative Commons Attribution 3.0](http://creativecommons.org/licenses/by/3.0/) ライセンスの下でライセンスされています。 このチュートリアル全体を通して、ダウンロードしたファイル名 `trailer_1080p.mov` を参照します。

\[0] (c) Copyright 2008, Blender Foundation / www.bigbuckbunny.org / <https://peach.blender.org/about/>

### 必要なツール

MSE を使用する場合、次のツールが必要です。

1. [ffmpeg](http://ffmpeg.org/) — メディアを必要な形式にトランスコードするためのコマンドラインユーティリティ。 [Download FFmpeg のページ](http://ffmpeg.org/download.html)であなたのシステムのバージョンをダウンロードできます。 アーカイブファイルから実行可能ファイルを抽出し、その場所を PATH ステートメントに追加します。 OSX ユーザーは、[homebrew](http://brew.sh/) を使用して ffmpeg をインストールすることもできます。
2. [Bento4](https://github.com/axiomatic-systems/Bento4) — アセットのメタデータを取得し、DASH のコンテンツを作成するための一連のコマンドラインユーティリティ。 インストールするには、OS と設定に応じて、提供されたプロジェクトファイル/ソースファイルからアプリを自分でビルド/コンパイルする必要があります。 詳細については、[構築手順](https://github.com/axiomatic-systems/Bento4#building)を参照してください。 構築済みファイルが[ここ](https://www.bento4.com/downloads/)にあります。 `bin` ディレクトリの内容を ffmpeg と同じ場所に入れておきます。
3. python2 — Bento4 が使います。

次のステップに進む前に、これらを正常にインストールしてください。

サンプルメディアは、Bento4 の `utils` ディレクトリに入れておき、ここで作業します。

> **メモ:** 構築済みの ffmpeg には、ライセンスの関係で libfdk_aac が組み込まれていません。 これを Bento4 がデフォルトで使うので、必要なら、ffmpeg をコンパイルする必要があります。 必要なければ、`mp4-dash-encode.py` のコマンドラインに `--audio-codec=aac` を追加してください。

### コンテナとコーデックのサポート

[MSE 仕様のセクション 1.1: Goals](https://www.w3.org/TR/media-source/#goals) で指定されているように、MSE は特定のメディア形式またはコーデックのサポートを必要としないように設計されています。 これは紙の上では事実ですが、ブラウザーのサポートは特定のコンテナ/コーデックの組み合わせによって異なります。

ブラウザーが特定のコンテナをサポートしているかどうかを確認するには、次のように MIME タイプの文字列を {{domxref("MediaSource.isTypeSupported")}} メソッドに渡します。

```js
MediaSource.isTypeSupported('audio/mp3'); // false
MediaSource.isTypeSupported('video/mp4'); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true
```

文字列はコンテナの MIME タイプであり、オプションでコーデックのリストが続きます。 MIME タイプは簡単に把握できますが、[mp4info](http://nickdesaulniers.github.io/mp4info/) ユーティリティを使用してコーデック文字列を取得できます。

現在、H.264 動画コーデックと AAC 音声コーデックを備えた MP4 コンテナは、すべての最新ブラウザーでサポートされていますが、他のブラウザーではサポートされていません。

サンプルメディアを QuickTime MOV コンテナから MP4 コンテナに変換するには、ffmpeg を使用できます。 MOV コンテナの音声コーデックは既に AAC であり、動画コーデックは H.264 であるため、トランスコードを実行しないように ffmpeg に指示できます。 代わりに、トランスコードを実行せずに音声トラックと動画トラックをコピーするだけです。 これは、トランスコードするよりも比較的高速です。

```
$ ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
$ ls
bunny.mp4         trailer_1080p.mov
```

### 断片化の確認

MP4 を適切にストリーミングするには、アセットが [ISO BMF](https://www.w3.org/TR/mse-byte-stream-format-isobmff/) 形式の MP4 である必要があります。 適切な断片化がなければ、特定の MP4 ファイルは MSE での動作が保証されません。 これは、コンテナ内にメタデータが分散され、まとめられていないことを意味します。

MP4 ファイルが適切な MP4 ストリームであるかどうかを確認するには、[mp4info](http://nickdesaulniers.github.io/mp4info/) ユーティリティを再度使用して MP4 のアトムを一覧表示できます。

> **メモ:** 断片化されたバージョンは、追加のメタデータがファイル全体に広がるため、元のバージョンよりわずかに大きくなります。 これは通常、ファイルサイズの 1% 以下の増加です。

### 断片化

まだ MP4 ではないアセットがある場合、ffmpeg は次のように `-movflags frag_keyframe+empty_moov` コマンドラインフラグを使用して、トランスコードプロセス中に適切に断片化された MP4 の発行を処理できます。

```bash
ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4
```

すでに MP4 を持っているが、適切に断片化されていない場合は、ffmpeg を改めて使用できます。

```
ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
```

どちらの場合でも、Chrome は次の追加のムービーフラグを設定する必要がある場合があります。

```bash
-movflags frag_keyframe+empty_moov+default_base_moof
```

適切に断片化された MP4 ファイルを用意するだけで開始できます。 適応的ビットレートストリーミングを使用する場合は、複数の解像度でエンコードを作成する必要があります。 MSE は柔軟に実装できるほど柔軟性がありますが、DASH は明確に指定されたアプリケーションプロトコルであるため、既存の DASH クライアントを使用することを強くお勧めします。

### DASH 用のコンテンツの作成

$PATH を介して ffmpeg と Bento4 のユーティリティにアクセスできる場合、Bento4 の `mp4-dash-encode.py` Python スクリプトを実行して、さまざまな解像度でコンテンツの複数のエンコーディングを生成できます。 Bento4 の `mp4-dash.py` Python スクリプトを使用して、クライアントが必要とする対応する MPD ファイルを生成できます。

次のコマンドを実行します（サンプル出力付き）。

```bash
$ python mp4-dash-encode.py -b 5 -v bunny_fragmented.mp4
Encoding 5 bitrates, min bitrate = 500.0 max bitrate = 2000.0
Media Source: Video: resolution=640x360
ENCODING bitrate: 500, resolution: 256x144
ENCODING bitrate: 875, resolution: 384x216
ENCODING bitrate: 1250, resolution: 480x270
ENCODING bitrate: 1625, resolution: 560x316
ENCODING bitrate: 2000, resolution: 640x360

$ python mp4-dash.py video_0*
Parsing media file 1: video_00500.mp4
Parsing media file 2: video_00875.mp4
Parsing media file 3: video_01250.mp4
Parsing media file 4: video_01625.mp4
Parsing media file 5: video_02000.mp4
Splitting media file (audio) video_00500.mp4
Splitting media file (video) video_00500.mp4
Splitting media file (video) video_00875.mp4
Splitting media file (video) video_01250.mp4
Splitting media file (video) video_01625.mp4
Splitting media file (video) video_02000.mp4

$ tree -L 2 output
output
├── audio
│   └── und
├── stream.mpd
└── video
    ├── 1
    ├── 2
    ├── 3
    ├── 4
    └── 5

8 directories, 1 file
```

> **メモ:** `mp4-dash-encode.py` は、ffmpeg のエラーメッセージを表示しないようにしています。 `-d` オプションを指定することで、それを見ることができます。

> **メモ:** エラーメッセージとして `"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"` が表示されたら、`mp4-dash-encode.py` を修正して `"-force_key_frames 'expr:eq(mod(n,%d),0)'"` から `"'"` を 2 つ取り除きます。

## まとめ

動画が適切にエンコードされ、適応的ビットレートメディアが生成されると、DASH と MSE を使用して Web で適応的ビットレートストリーミングを開始する準備が整いました。
