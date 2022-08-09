---
title: Media Source Extensions のためのアセットのトランスコード
slug: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
tags:
  - DASH
  - Dynamic Adaptive Streaming over HTTP
  - Encoding
  - MSE
  - Media Source Extensions
  - adaptive
translation_of: Web/API/Media_Source_Extensions_API/Transcoding_assets_for_MSE
---
<p class="summary"><span class="seoSummary">Media Source Extensions を使用する場合、アセットをストリーミングする前に調整する必要がある可能性があります。 この記事では、要件を説明し、アセットを適切にエンコードするために使用できるツールチェーンを示します。</span></p>

<h2 id="Getting_started" name="Getting_started">入門</h2>

<ol>
 <li>最初で最も重要な手順は、ユーザーのブラウザーがサポートするコンテナとコーデックでファイルを構成することです。</li>
 <li>コーデックによっては、<a href="https://www.w3.org/TR/mse-byte-stream-format-isobmff/">ISO BMFF 仕様</a>に準拠するためにファイルを断片化する必要がある場合があります。</li>
 <li>（オプション）Dynamic Adaptive Streaming over HTTP（DASH、HTTP を介した動的適応的ストリーミング）を使用した適応的ビットレートストリーミングを使用する場合、アセットを複数の解像度にトランスコードする必要があります。 ほとんどの DASH クライアントは、対応する Media Presentation Description（MPD）マニフェストファイルを期待しています。 これは通常、複数の解像度のアセットファイルを生成するときに生成されます。</li>
</ol>

<p>以下では、これらのすべての手順を説明しますが、最初にこれをかなり簡単に行うために使用できるツールチェーンを見てみましょう。</p>

<h3 id="Sample_Media" name="Sample_Media">サンプルメディア</h3>

<p>ここにリストされている手順を実行したいが、実験するメディアがない場合は、Big Buck Bunny の予告編 [0] を<a href="http://wayback.archive.org/web/20161102172252id_/http://video.blendertestbuilds.de/download.php?file=download.blender.org/peach/trailer_1080p.mov">ここ</a>で入手できます。 Big Buck Bunny は、<a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a> ライセンスの下でライセンスされています。 このチュートリアル全体を通して、ダウンロードしたファイル名 <code>trailer_1080p.mov</code> を参照します。</p>

<p>[0] (c) Copyright 2008, Blender Foundation / www.bigbuckbunny.org / https://peach.blender.org/about/</p>

<h3 id="Tools_required" name="Tools_required">必要なツール</h3>

<p>MSE を使用する場合、次のツールが必要です。</p>

<ol>
 <li><a href="http://ffmpeg.org/">ffmpeg</a> — メディアを必要な形式にトランスコードするためのコマンドラインユーティリティ。 <a href="http://ffmpeg.org/download.html">Download FFmpeg のページ</a>であなたのシステムのバージョンをダウンロードできます。 アーカイブファイルから実行可能ファイルを抽出し、その場所を PATH ステートメントに追加します。 OSX ユーザーは、<a href="http://brew.sh/">homebrew</a> を使用して ffmpeg をインストールすることもできます。</li>
 <li><a href="https://github.com/axiomatic-systems/Bento4">Bento4</a> — アセットのメタデータを取得し、DASH のコンテンツを作成するための一連のコマンドラインユーティリティ。 インストールするには、OS と設定に応じて、提供されたプロジェクトファイル/ソースファイルからアプリを自分でビルド/コンパイルする必要があります。 詳細については、<a href="https://github.com/axiomatic-systems/Bento4#building">構築手順</a>を参照してください。 構築済みファイルが<a href="https://www.bento4.com/downloads/">ここ</a>にあります。 <code>bin</code> ディレクトリの内容を ffmpeg と同じ場所に入れておきます。</li>
 <li>python2 — Bento4 が使います。</li>
</ol>

<p>次のステップに進む前に、これらを正常にインストールしてください。</p>

<p>サンプルメディアは、Bento4 の <code>utils</code> ディレクトリに入れておき、ここで作業します。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 構築済みの ffmpeg には、ライセンスの関係で libfdk_aac が組み込まれていません。 これを Bento4 がデフォルトで使うので、必要なら、ffmpeg をコンパイルする必要があります。 必要なければ、<code>mp4-dash-encode.py</code> のコマンドラインに <code>--audio-codec=aac</code> を追加してください。</p>
</div>

<h3 id="Container_and_Codec_Support" name="Container_and_Codec_Support">コンテナとコーデックのサポート</h3>

<p><a href="https://www.w3.org/TR/media-source/#goals">MSE 仕様のセクション1.1: Goals</a> で指定されているように、MSE は特定のメディア形式またはコーデックのサポートを必要としないように設計されています。 これは紙の上では事実ですが、ブラウザーのサポートは特定のコンテナ/コーデックの組み合わせによって異なります。</p>

<p>ブラウザーが特定のコンテナをサポートしているかどうかを確認するには、次のように MIME タイプの文字列を {{domxref("MediaSource.isTypeSupported")}} メソッドに渡します。</p>

<pre class="brush: js">MediaSource.isTypeSupported('audio/mp3'); // false
MediaSource.isTypeSupported('video/mp4'); // true
MediaSource.isTypeSupported('video/mp4; codecs="avc1.4D4028, mp4a.40.2"'); // true</pre>

<p>文字列はコンテナの MIME タイプであり、オプションでコーデックのリストが続きます。 MIME タイプは簡単に把握できますが、<a href="http://nickdesaulniers.github.io/mp4info/">mp4info</a> ユーティリティを使用してコーデック文字列を取得できます。</p>

<p>現在、H.264 動画コーデックと AAC 音声コーデックを備えた MP4 コンテナは、すべての最新ブラウザーでサポートされていますが、他のブラウザーではサポートされていません。</p>

<p>サンプルメディアを QuickTime MOV コンテナから MP4 コンテナに変換するには、ffmpeg を使用できます。 MOV コンテナの音声コーデックは既に AAC であり、動画コーデックは H.264 であるため、トランスコードを実行しないように ffmpeg に指示できます。 代わりに、トランスコードを実行せずに音声トラックと動画トラックをコピーするだけです。 これは、トランスコードするよりも比較的高速です。</p>

<pre>$ ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy bunny.mp4
$ ls
bunny.mp4         trailer_1080p.mov</pre>

<h3 id="Checking_Fragmentation" name="Checking_Fragmentation">断片化の確認</h3>

<p>MP4 を適切にストリーミングするには、アセットが <a href="https://www.w3.org/TR/mse-byte-stream-format-isobmff/">ISO BMF</a> 形式の MP4 である必要があります。 適切な断片化がなければ、特定の MP4 ファイルは MSE での動作が保証されません。 これは、コンテナ内にメタデータが分散され、まとめられていないことを意味します。</p>

<p>MP4 ファイルが適切な MP4 ストリームであるかどうかを確認するには、<a href="http://nickdesaulniers.github.io/mp4info/">mp4info</a> ユーティリティを再度使用して MP4 のアトムを一覧表示できます。</p>

<div class="note">
<p><strong>注</strong>: 断片化されたバージョンは、追加のメタデータがファイル全体に広がるため、元のバージョンよりわずかに大きくなります。 これは通常、ファイルサイズの 1% 以下の増加です。</p>
</div>

<h3 id="Fragmenting" name="Fragmenting">断片化</h3>

<p>まだ MP4 ではないアセットがある場合、ffmpeg は次のように <code>-movflags frag_keyframe+empty_moov</code> コマンドラインフラグを使用して、トランスコードプロセス中に適切に断片化された MP4 の発行を処理できます。</p>

<pre class="brush: bash">$ ffmpeg -i trailer_1080p.mov -c:v copy -c:a copy -movflags frag_keyframe+empty_moov bunny_fragmented.mp4</pre>

<p>すでに MP4 を持っているが、適切に断片化されていない場合は、ffmpeg を改めて使用できます。</p>

<pre>$ ffmpeg -i non_fragmented.mp4 -movflags frag_keyframe+empty_moov fragmented.mp4
</pre>

<p>どちらの場合でも、Chrome は次の追加のムービーフラグを設定する必要がある場合があります。</p>

<pre class="brush: bash">-movflags frag_keyframe+empty_moov+default_base_moof</pre>

<p>適切に断片化された MP4 ファイルを用意するだけで開始できます。 適応的ビットレートストリーミングを使用する場合は、複数の解像度でエンコードを作成する必要があります。 MSE は柔軟に実装できるほど柔軟性がありますが、DASH は明確に指定されたアプリケーションプロトコルであるため、既存の DASH クライアントを使用することを強くお勧めします。</p>

<h3 id="Creating_Content_for_DASH" name="Creating_Content_for_DASH">DASH 用のコンテンツの作成</h3>

<p>$PATH を介して ffmpeg と Bento4 のユーティリティにアクセスできる場合、Bento4 の <code>mp4-dash-encode.py</code> Python スクリプトを実行して、さまざまな解像度でコンテンツの複数のエンコーディングを生成できます。 Bento4 の <code>mp4-dash.py</code> Python スクリプトを使用して、クライアントが必要とする対応する MPD ファイルを生成できます。</p>

<p>次のコマンドを実行します（サンプル出力付き）。</p>

<pre class="brush: bash">$ python mp4-dash-encode.py -b 5 -v bunny_fragmented.mp4
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

8 directories, 1 file</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: <code>mp4-dash-encode.py</code> は、ffmpeg のエラーメッセージを表示しないようにしています。 <code>-d</code> オプションを指定することで、それを見ることができます。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: エラーメッセージとして <code>"Invalid duration specification for force_key_frames: 'expr:eq(mod(n"</code> が表示されたら、<code>mp4-dash-encode.py</code> を修正して <code>"-force_key_frames 'expr:eq(mod(n,%d),0)'"</code> から <code>"'"</code> を2つ取り除きます。</p>
</div>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>動画が適切にエンコードされ、適応的ビットレートメディアが生成されると、DASH と MSE を使用して Web で適応的ビットレートストリーミングを開始する準備が整いました。</p>
