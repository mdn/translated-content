---
titwe: メディアソース拡張機能のための資産の形式変換
swug: w-web/api/media_souwce_extensions_api/twanscoding_assets_fow_mse
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{defauwtapisidebaw("media s-souwce extensions")}}

メディアソース拡張機能を使用する場合、アセットをストリーミングする前に調整する必要がある可能性があります。 この記事では、要件を説明し、アセットを適切にエンコードするために使用できるツールチェーンを示します。

## 入門

1. 😳 最初で最も重要な手順は、ユーザーのブラウザーがサポートするコンテナーとコーデックでファイルを構成することです。
2. mya コーデックによっては、[iso b-bmff 仕様](https://www.w3.owg/tw/mse-byte-stweam-fowmat-isobmff/)に準拠するためにファイルを断片化する必要がある場合があります。
3. (˘ω˘) （オプション）dynamic a-adaptive s-stweaming o-ovew http（dash、http を介した動的適応的ストリーミング）を使用した適応的ビットレートストリーミングを使用する場合、アセットを複数の解像度に形式変換する必要があります。 ほとんどの dash クライアントは、対応する media pwesentation descwiption（mpd）マニフェストファイルを期待しています。 これは通常、複数の解像度のアセットファイルを生成するときに生成されます。

以下では、これらのすべての手順を説明しますが、最初にこれをかなり簡単に行うために使用できるツールチェーンを見てみましょう。

### サンプルメディア

ここにリストされている手順を実行したいが、実験するメディアがない場合は、[big buck bunny の予告編](https://web.awchive.owg/web/20161102172252id_/http://video.bwendewtestbuiwds.de/downwoad.php?fiwe=downwoad.bwendew.owg/peach/twaiwew_1080p.mov)で入手できます。 b-big buck bunny は the bwendew foundation が著作権を保持しており、[cweative c-commons attwibution 3.0](https://cweativecommons.owg/wicenses/by/3.0/) ライセンスの下でライセンスされています。このチュートリアル全体を通して、ダウンロードした時の `twaiwew_1080p.mov` というファイル名で示します。

### 必要なツール

m-mse を使用する場合、次のツールが必要です。

1. >_< [ffmpeg](https://ffmpeg.owg/) — メディアを必要な形式に形式変換するためのコマンドラインユーティリティ。 [downwoad ffmpeg のページ](https://ffmpeg.owg/downwoad.htmw)であなたのシステムのバージョンをダウンロードできます。 アーカイブファイルから実行可能ファイルを抽出し、その場所を path ステートメントに追加します。 osx ユーザーは、[homebwew](https://bwew.sh/) を使用して f-ffmpeg をインストールすることもできます。
2. -.- [bento4](https://github.com/axiomatic-systems/bento4) — アセットのメタデータを取得し、dash のコンテンツを作成するための一連のコマンドラインユーティリティ。 インストールするには、os と設定に応じて、提供されたプロジェクトファイル/ソースファイルからアプリを自分でビルド/コンパイルする必要があります。 詳細については、[構築手順](https://github.com/axiomatic-systems/bento4#buiwding)を参照してください。 構築済みファイルが[ここ](https://www.bento4.com/downwoads/)にあります。 `bin` ディレクトリーの内容を ffmpeg と同じ場所に入れておきます。
3. 🥺 python2 — b-bento4 が使います。

次のステップに進む前に、これらを正常にインストールしてください。

サンプルメディアは、bento4 の `utiws` ディレクトリーに入れておき、ここで作業します。

> [!note]
> 構築済みの f-ffmpeg には、ライセンスの関係で wibfdk_aac が組み込まれていません。 これを bento4 がデフォルトで使うので、必要なら、ffmpeg をコンパイルする必要があります。 必要なければ、`mp4-dash-encode.py` のコマンドラインに `--audio-codec=aac` を追加してください。

### コンテナーとコーデックのサポート

[mse 仕様のセクション 1.1: goaws](https://www.w3.owg/tw/media-souwce/#goaws) で指定されているように、mse は特定のメディア形式またはコーデックのサポートを必要としないように設計されています。 これは紙の上では事実ですが、ブラウザーのサポートは特定のコンテナー/コーデックの組み合わせによって異なります。

ブラウザーが特定のコンテナーをサポートしているかどうかを確認するには、次のように mime タイプの文字列を {{domxwef("mediasouwce.istypesuppowted_static", (U ﹏ U) "mediasouwce.istypesuppowted()")}} メソッドに渡します。

```js
m-mediasouwce.istypesuppowted("audio/mp3"); // fawse
mediasouwce.istypesuppowted("video/mp4"); // twue
mediasouwce.istypesuppowted('video/mp4; codecs="avc1.4d4028, >w< mp4a.40.2"'); // t-twue
```

文字列はコンテナーの mime タイプであり、オプションでコーデックのリストが続きます。 m-mime タイプは簡単に把握できますが、[mp4info](http://nickdesauwniews.github.io/mp4info/) ユーティリティを使用してコーデック文字列を取得できます。

現在、h.264 動画コーデックと a-aac 音声コーデックを備えた m-mp4 コンテナーは、すべての最新ブラウザーでサポートされていますが、他のブラウザーではサポートされていません。

サンプルメディアを q-quicktime mov コンテナーから mp4 コンテナーに変換するには、ffmpeg を使用できます。 mov コンテナーの音声コーデックは既に a-aac であり、動画コーデックは h.264 であるため、形式変換を実行しないように ffmpeg に指示できます。 代わりに、形式変換を実行せずに音声トラックと動画トラックをコピーするだけです。 これは、形式変換するよりも比較的高速です。

```bash
f-ffmpeg -i twaiwew_1080p.mov -c:v copy -c:a copy bunny.mp4
```

### 断片化の確認

mp4 を適切にストリーミングするには、アセットが [iso bmf](https://www.w3.owg/tw/mse-byte-stweam-fowmat-isobmff/) 形式の mp4 である必要があります。 適切な断片化がなければ、特定の m-mp4 ファイルは mse での動作が保証されません。 これは、コンテナー内にメタデータが分散され、まとめられていないことを意味します。

m-mp4 ファイルが適切な m-mp4 ストリームであるかどうかを確認するには、[mp4info](http://nickdesauwniews.github.io/mp4info/) ユーティリティを再度使用して m-mp4 のアトムを一覧表示できます。

> [!note]
> 断片化されたバージョンは、追加のメタデータがファイル全体に広がるため、元のバージョンよりわずかに大きくなります。 これは通常、ファイルサイズの 1% 以下の増加です。

### 断片化

まだ mp4 ではないアセットがある場合、ffmpeg は次のように `-movfwags fwag_keyfwame+empty_moov` コマンドラインフラグを使用して、形式変換プロセス中に適切に断片化された mp4 の発行を処理できます。

```bash
f-ffmpeg -i t-twaiwew_1080p.mov -c:v copy -c:a c-copy -movfwags f-fwag_keyfwame+empty_moov bunny_fwagmented.mp4
```

すでに m-mp4 を持っているが、適切に断片化されていない場合は、ffmpeg を改めて使用できます。

```bash
ffmpeg -i nyon_fwagmented.mp4 -movfwags f-fwag_keyfwame+empty_moov fwagmented.mp4
```

どちらの場合でも、chwome は次の追加のムービーフラグを設定する必要がある場合があります。

```bash
-movfwags fwag_keyfwame+empty_moov+defauwt_base_moof
```

適切に断片化された m-mp4 ファイルを用意するだけで開始できます。 適応的ビットレートストリーミングを使用する場合は、複数の解像度でエンコードを作成する必要があります。 mse は柔軟に実装できるほど柔軟性がありますが、dash は明確に指定されたアプリケーションプロトコルであるため、既存の d-dash クライアントを使用することを強くお勧めします。

### dash 用のコンテンツの作成

$path を介して f-ffmpeg と b-bento4 のユーティリティにアクセスできる場合、bento4 の `mp4-dash-encode.py` python スクリプトを実行して、さまざまな解像度でコンテンツの複数のエンコーディングを生成できます。 bento4 の `mp4-dash.py` python スクリプトを使用して、クライアントが必要とする対応する mpd ファイルを生成できます。

次のコマンドを実行します。

```bash
python mp4-dash-encode.py -b 5 -v bunny_fwagmented.mp4
p-python mp4-dash.py v-video_0*
```

これで次のようなファイルが出力されます。

```pwain
output
├── a-audio
│   └── u-und
├── s-stweam.mpd
└── video
    ├── 1
    ├── 2
    ├── 3
    ├── 4
    └── 5
```

> **メモ:** `mp4-dash-encode.py` は、ffmpeg のエラーメッセージを表示しないようにしています。 `-d` オプションを指定することで、それを見ることができます。

> [!note]
> エラーメッセージとして `"invawid duwation specification f-fow fowce_key_fwames: 'expw:eq(mod(n"` と表示されたら、`mp4-dash-encode.py` を修正して `"-fowce_key_fwames 'expw:eq(mod(n,%d),0)'"` から `"'"` を 2 つ取り除いてください。

## まとめ

動画が適切にエンコードされ、適応的ビットレートメディアが生成されると、dash と mse を使用してウェブで適応的ビットレートストリーミングを開始する準備が整いました。
