---
title: 動画と音声のコンテンツ
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
tags:
  - Article
  - Audio
  - Beginner
  - Guide
  - HTML
  - Video
  - captions
  - subtitles
  - track
  - ガイド
  - 初心者
  - 動画
  - 記事
  - 音声
translation_of: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

Web ページに簡単な画像を追加するのができるようになったので、次のステップは HTML 文書に動画と音声のプレイヤーを追加することです! この記事では {{htmlelement("video")}} と {{htmlelement("audio")}} 要素を使ってそうすることを見ていきます。それから動画にキャプションや字幕を追加する方法を見て完了します。

| 前提条件: | 基本的なコンピュータリテラシー、[インストールされた基本ソフトウェア](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)、[ファイル操作](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)の基本知識、HTML の基礎知識([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started))、および [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)。 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 動画や音声のコンテンツを Web ページに埋め込み、動画にキャプションや字幕を追加する方法を学びます。                                                                                                                                                                                                                                                                                                        |

## Web での動画と音声

Web 開発者は、あらゆる種類の動画 (動画ファイルはテキストや画像よりもはるかに大きい) をサポートするのに十分な速さがある帯域幅を使い始めた 2000 年代初頭以来、Web 上で動画や音声を長時間使用したいと考えていました。初期段階では、HTML などのネイティブな Web テクノロジーでは動画や音声を Web に埋め込むことができなかったため、[Flash](https://ja.wikipedia.org/wiki/Adobe_Flash) (および後で [Silverlight](https://ja.wikipedia.org/wiki/Microsoft_Silverlight)) などの独自技術 (またはプラグインベース) が一般的になりました。この種の技術はうまくいきましたが、HTML/CSS の機能、セキュリティの問題、アクセシビリティの問題でうまく機能しないなど、さまざまな問題がありました。

もし正しく行っていれば、ネイティブな解決策はこれの多くを解決します。幸いにも、数年後、{{glossary("HTML5")}} 仕様には、{{htmlelement("video")}} 要素と {{htmlelement("audio")}} 要素、およびそれらを制御するためのいくつかのぴかぴかの新しい {{Glossary("JavaScript")}} {{Glossary("API")}} が追加されました。ここでは JavaScript を見ていません — HTML で実現できる基本的な基礎だけです。

音声や動画のファイルを作成する方法は教えません — 完全に異なる知識や技能が必要です。あなたが実験のための[音声や動画のファイルとサンプルコード](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content)を手に入れることができない場合に備えて、それを提供しています。

> **Note:** ここから始める前に、[YouTube](https://www.youtube.com/)、[Dailymotion](http://www.dailymotion.com)、[Vimeo ](https://vimeo.com/)のような {{glossary("OVP")}} (オンライン動画プロバイダ) と [Soundcloud](https://soundcloud.com/) のようなオンライン音声プロバイダがあることも知っておく必要があります。そのような企業は、動画をホストして消費するための便利で簡単な方法を提供するので、莫大な帯域幅の消費を心配する必要はありません。OVP は通常、Web ページに動画や音声を埋め込むための既製コードを提供しています。その道を行くなら、この記事で取り上げるいくつかの困難を避けることができます。この種のサービスについては、次の記事でもう少し詳しく説明します。

### \<video> 要素

{{htmlelement("video")}} 要素を使用すると、動画を非常に簡単に埋め込むことができます。本当に簡単な例は次のようになります。

```html
<video src="rabbit320.webm" controls>
  <p>お使いのブラウザーは HTML5 動画をサポートしていません。その代わりに<a href="rabbit320.webm">動画へのリンク</a>があります。</p>
</video>
```

機能は次のとおりです。

- {{htmlattrxref("src","video")}}
  - : {{htmlelement("img")}} 要素と同じように、`src` (ソース) 属性には、埋め込みたい動画へのパスが含まれています。これは、まったく同じように動作します。
- {{htmlattrxref("controls","video")}}
  - : ユーザは、動画や音声の再生を制御できる必要があります (特に[てんかん](https://ja.wikipedia.org/wiki/%E3%81%A6%E3%82%93%E3%81%8B%E3%82%93#%E7%96%AB%E5%AD%A6)を患っている人にとっては重要です)。`controls` 属性を使用してブラウザー独自のコントロールインターフェイスを組み込むか、適切な [JavaScript API](/ja/docs/Web/API/HTMLMediaElement) を使用してインターフェイスを構築する必要があります。少なくとも、インターフェイスにはメディアの開始と停止、および音量の調整が含まれている必要があります。
- `<video>` タグ内の段落
  - : これは**代替コンテンツ**と呼ばれ、ページにアクセスしているブラウザーが `<video>` 要素をサポートしていない場合に表示され、古いブラウザーでの代替手段となります。これはあなたが好きなことができます。この場合、動画ファイルへの直接リンクが提供されているため、使用しているブラウザーに関係なく、ユーザは少なくとも何らかの方法でアクセスできます。

埋め込み動画は次のようになります。

![小さな白いウサギの動画を表示するシンプルなビデオプレーヤー](simple-video.png)

ここで[サンプルをライブで試す](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)ことができます([ソースコード](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)も参照してください)。

### 複数のフォーマットをサポートする

上の例では、Safari や Internet Explorer などのブラウザーで上記のライブのリンクにアクセスしたなら、すでに気づいているかもしれない問題があります。動画は再生されません! これは、さまざまなブラウザーが異なる動画 (および音声) のフォーマットをサポートしているためです。

用語をすばやく説明しましょう。MP3、MP4、WebM などの形式は**コンテナフォーマット**と呼ばれます。それらは、音声トラック、動画トラック (動画の場合)、および提示されるメディアを記述するメタデータなど、歌または動画全体を構成する異なる部分を含みます。

音声トラックと動画トラックもさまざまなフォーマットになっています。たとえば:

- WebM コンテナは、通常、VP8/VP9 動画で Ogg Vorbis 音声をパッケージ化します。これは主に Firefox と Chrome でサポートされています。
- MP4 コンテナは、H.264 動画で AAC または MP3 音声をパッケージ化することがよくあります。これは主に Internet Explorer と Safari でサポートされています。
- 古い Ogg コンテナは、Ogg Vorbis 音声と Ogg Theora 動画と一緒に行く傾向があります。これは主に Firefox と Chrome でサポートされていましたが、基本的には良質の WebM フォーマットに取って代わられています。

オーディオプレーヤーは、音声トラックを直接再生する傾向があります。たとえば、MP3 または Ogg ファイル。これらはコンテナを必要としません。

> **Note:** [音声と動画のコーデックの互換性表](/ja/docs/Web/HTML/Supported_media_formats#Browser_compatibility)からわかるように、それほど単純ではありません。さらに、多くのモバイルプラットフォームのブラウザーは、サポート対象のシステムのメディアプレーヤーに再生するためにそれを渡すことで、サポートされていないフォーマットを再生することができます。しかしこれは今のところできます。

上記のフォーマットは、動画と音声を管理可能なファイルに圧縮するために存在します (生の動画と音声は非常に大きい)。ブラウザーには、Vorbis や H.264 などの**{{Glossary("Codec","コーデック")}}**が含まれています。これらのコーデックは、圧縮された音声と動画を 2 進数字に変換して戻すために使用されます。上記のように、残念ながらブラウザーはすべて同じコーデックをサポートしているわけではないので、メディアの制作ごとに複数のファイルを用意する必要があります。メディアをデコードするために適切なコーデックがない場合、再生されません。

> **Note:** なぜこのような状況が存在するのだろうか。**MP3** (音声用)と **MP4/H.264** (動画用) はどちらも広くサポートされており、良質です。しかし、それらはまた、特許を握られている — 米国特許は、MP3 は 2017 年まで、H.264 は 2027 年までカバーしています。つまり、特許を保有していないブラウザーは、これらのフォーマットをサポートするために膨大な金額を支払う必要があります。さらに、多くの人々は、制限されたソフトウェアを原則として避け、オープンフォーマットを支持しています。このため、さまざまなブラウザーに複数のフォーマットを提供する必要があります。

だから私たちはこれをどうやってやるのか? 以下の[更新された例](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)を見てください (それを[ここでライブで試して](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)みてください)。

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>お使いのブラウザーは HTML5 動画をサポートしていません。その代わりに<a href="rabbit320.mp4">動画へのリンク</a>があります。</p>
</video>
```

ここでは実際の `<video>` タグから `src` 属性を取り出し、独自のソースを指す別々の {{htmlelement("source")}} 要素を追加しました。この場合、ブラウザーは `<source>` 要素を通過し、サポートするコーデックがある最初の要素を再生します。WebM や MP4 のソースを含めれば、最近のほとんどのプラットフォームやブラウザーで動画を再生できるはずです。

各 `<source>` 要素には `type` 属性もあります。これはオプションですが、動画ファイルの {{glossary("MIME type","MIME タイプ")}}が含まれており、ブラウザーがこれらを読み込んで理解できない動画をすぐにスキップすることができます。それらが含まれていない場合、ブラウザーは各ファイルを読み込んで再生しようとしますが、より多くの時間とリソースを必要とします。

> **Note:** [サポートされているメディアフォーマットの記事](/ja/docs/Web/HTML/Supported_media_formats)には、一般的な {{glossary("MIME type","MIME タイプ")}}がいくつか含まれています。

### その他の \<video> 機能

HTML5 動画に含めることができる他の多くの機能があります。以下の 3 番目の例を見てください。

```html
<video controls width="400" height="400"
       autoplay loop muted
       poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>お使いのブラウザーは HTML5 動画をサポートしていません。その代わりに<a href="rabbit320.mp4">動画へのリンク</a>があります。</p>
</video>
```

これにより、次のような出力が得られます。

![再生する前にポスター画像を表示するビデオプレーヤー。 ポスター画像には "HTML5 video example, OMG hell yeah!" と書いてあります。](extra-video-features.png)新しい機能は次のとおりです。

- {{htmlattrxref("width","video")}} と {{htmlattrxref("height","video")}}
  - : これらの属性または {{Glossary("CSS")}} を使用して動画サイズを制御することができます。どちらの場合も、動画は元の縦横比 (**アスペクト比**) を維持します。アスペクト比が設定したサイズによって維持されない場合、動画は水平方向にスペースを埋めるように拡大し、デフォルトでは満たされていないスペースには無地の背景色が与えられます。
- {{htmlattrxref("autoplay","video")}}
  - : この属性は、ページの残りの部分がロードされている間に音声または動画の再生をすぐに開始します。ユーザに実際に迷惑をかけることがあるので、サイトで動画 (または音声) を自動再生することはお勧めしません。
- {{htmlattrxref("loop","video")}}
  - : この属性は、動画 (または音声) が終了するたびに再生を開始させます。これは迷惑になることもありますので、本当に必要な場合にのみ使用してください。
- {{htmlattrxref("muted","video")}}
  - : この属性を使用すると、デフォルトで音声をオフにしてメディアを再生します。
- {{htmlattrxref("poster","video")}}
  - : この属性は、動画の再生前に表示される画像の URL を値としてとります。これは、スプラッシュ画面または広告画面に使用するためのものです。
- {{htmlattrxref("preload","video")}}

  - : この属性は、大きなファイルをバッファリングする要素で使用されます。3 つの値のいずれかを取ることができます。

    - `"none"` はファイルをバッファリングしません
    - `"auto"` はメディアファイルをバッファリングする
    - `"metadata"` はファイルのメタデータのみをバッファリングする

上記の例は [Github でライブで再生する](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)ことができます ([ソースコード](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)も参照してください)。ライブバージョンには `autoplay` 属性は含まれていません — ページが読み込まれるとすぐに動画が再生され始めると、ポスターを見ることはできません!

### \<audio> 要素

{{htmlelement("audio")}} 要素は、{{htmlelement("video")}} 要素とまったく同じように動作しますが、以下に説明するように若干の違いがあります。典型的な例は次のようになります。

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3">
  <source src="viper.ogg" type="audio/ogg">
  <p>お使いのブラウザーは HTML5 音声をサポートしていません。代わりに<a href="viper.mp3">音声へのリンク</a>があります。</p>
</audio>
```

これはブラウザーで次のようなものを生成します。

![再生ボタン、タイマー、音量コントロール、および進行状況バーを備えたシンプルなオーディオプレーヤー](audio-player.png)

> **Note:** Github で[音声デモをライブで実行する](http://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)こともできます (オーディオプレーヤーの[ソースコード](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)も参照してください)。

ビジュアルコンポーネントがないため、ビデオプレーヤーよりもスペースが少なくなります — 音声を再生するコントロールを表示するだけで済みます。HTML5 動画とのその他の相違点は次のとおりです。

- {{htmlelement("audio")}} 要素は `width` 属性や `height` 属性をサポートしていません — ビジュアルコンポーネントがないため、幅や高さを割り当てることはありません。
- また、`poster` 属性もサポートしていません — ビジュアルコンポーネントはありません。

これ以外について `<audio>` は、`<video>` と同じ機能をすべてサポートしています。詳細については、上記のセクションを参照してください。

## 動画のテキストトラックを表示する

ここでは、もっと知りたいと思う、やや高度なコンセプトについて説明します。多くの人々は、少なくともある時点では、Web 上で見つけた音声や動画のコンテンツを聞くことができない、または聞きたくない。たとえば:

- 多くの人が聴覚障害を持っているため、音声は聞こえません。
- 他の人は、騒々しい環境 (スポーツゲームが表示されているときの混雑したバーのような) や、静かな場所 (図書館など) にいると他の人を邪魔したくないため、音声を聞くことができないことがあります。
- 動画の言語を話さない人には、テキストの写しや翻訳がメディアのコンテンツを理解するのに役立つかもしれません。

音声や動画で話されている言葉の写しをこれらの人々に提供できるのはうれしいことではないでしょうか? HTML5 動画のおかげで、[WebVTT](/ja/docs/Web/API/Web_Video_Text_Tracks_Format) フォーマットと {{htmlelement("track")}} 要素を使用することができます。

> **Note:** "転記" と "写し" とは、話し言葉をテキストとして書き留めることを意味します。

WebVTT は、複数のテキスト文字列を含むテキストファイルを書くための形式です。動画内の何時に各テキスト文字列を表示するかや、限られたスタイリング/位置情報などのメタデータが一緒に含まれています。これらのテキスト文字列は**キュー**と呼ばれ、さまざまな目的のためにさまざまなタイプを表示できます。最も一般的なものは次のとおりです。

- 字幕 (subtitles)
  - : 音声で話されている言葉を理解していない人々のための外国の翻訳材料。
- キャプション (captions)
  - : 対話や重要な物音の描写の同期化で、音声を聞くことができない人が何が起こっているのかを理解できるようにする。
- 時限記述 (timed descriptions)
  - : 視覚障害者にサービスを提供するために、音声に変換するためのテキスト。

典型的な WebVTT ファイルは次のようになります。

```html
WEBVTT

1
00:00:22.230 --> 00:00:24.606
これが最初の字幕です。

2
00:00:30.739 --> 00:00:34.074
これは二番目です。

  ...
```

これを HTML メディアの再生と一緒に表示するには、以下を行う必要があります。

1.  適切な場所に `.vtt` ファイルとして保存します。
2.  {{htmlelement("track")}} 要素で `.vtt` ファイルにリンクします。`<track>` は `<audio>` または `<video>` 内に配置する必要がありますが、すべての `<source> `要素の後に配置する必要があります。{{htmlattrxref("kind","track")}} 属性を使用して、キューが `subtitles`、`captions`、または `descriptions` のいずれであるかを指定します。さらに、{{htmlattrxref("srclang","track")}} 属性を使用して、字幕が書かれた言語をブラウザーに伝えます。

ここに例があります。

```html
<video controls>
    <source src="example.mp4" type="video/mp4">
    <source src="example.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```

これにより、字幕が表示された動画になります。これは次のようなものです。

![再生、停止、音量、キャプションのオン/オフなどのスタンドコントロールを備えたビデオプレーヤー。 動画の再生には、槍のような武器を持つ男のシーンが表示され、キャプションには "Esta hoja tiene pasado oscuro." と表示されます。](video-player-with-captions.png)

詳しくは、[HTML5 動画にキャプションと字幕を追加する](/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)をご覧ください。Github には Ian Devlin によって書かれた[この記事の例](http://iandevlin.github.io/mdn/video-player-with-captions/)があります ([ソースコード](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)も参照してください)。この例では、JavaScript を使用してさまざまな字幕を選択できるようにしています。字幕をオンにするには、\[CC] ボタンを押して、英語、ドイツ語、スペイン語のオプションを選択する必要があります。

> **Note:** テキストトラックは検索エンジンが特にテキスト上で成功するため、{{glossary("SEO")}} にも役立ちます。テキストトラックを使用すると、検索エンジンは動画の途中地点に直接リンクすることもできます。

### アクティブラーニング: 自分の音声と動画を埋め込む

この能動的学習のために、(理想的には) あなたが世界に出て自分の動画や音声を録画するのが好ましいです — 最近の携帯電話では、音声や動画を非常に簡単に録音することができ、コンピュータに転送することができれば使用できます。動画の場合は WebM と MP4、音声の場合は MP3 と Ogg に行き着くには、変換する必要があるかもしれませんが、[Miro Video Converter](http://www.mirovideoconverter.com/) や [Audacity](https://sourceforge.net/projects/audacity/) など、あまり多くの手間をかけることなく、これを行うための十分なプログラムがあります。さあ、行ってください!

動画や音声を入手できない場合は、この[サンプル](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/video-and-audio-content)を自由に使用してこの演習を行うことができます。サンプルコードを参照のために使用することもできます。

次のことをしましょう。

1.  音声と動画のファイルをコンピュータの新しいディレクトリーに保存します。
2.  同じディレクトリーに `index.html` と呼ばれる新しい HTML ファイルを作成します。
3.  ページに `<audio>` 要素と `<video>` 要素を追加します。それらにデフォルトのブラウザーコントロールを表示させます。
4.  両方の要素に `<source>` 要素を付けて、ブラウザーが最もよくサポートするフォーマットを見つけて読み込むようにします。これらは `type` 属性を含むべきです。
5.  `<video>` 要素に、動画が再生される前に表示されるポスターを指定します。自分のポスターのグラフィックを作成して楽しんでください。

追加のボーナスとして、テキストトラックの研究や動画にキャプションを追加する方法などがあります。

## まとめ

それはラップです。Web ページで動画や音声を楽しみながら楽しく遊びました! 次の記事では、{{htmlelement("iframe")}} や {{htmlelement("object")}} などの技術を使用して、Web にコンテンツを埋め込む他の方法について説明します。

## 関連情報

- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- {{htmlelement("source")}}
- {{htmlelement("track")}}
- [HTML5 の動画へのキャプションと字幕の追加](/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [音声と動画の配信](/ja/docs/Web/Guide/Audio_and_video_delivery): HTML と JavaScript を使用して音声と動画を Web ページに配置することに関する詳細。
- [音声と動画の加工](/ja/docs/Web/Guide/Audio_and_video_manipulation): JavaScript を使用して音声や動画を操作する方法について詳しく説明します (たとえばフィルタを追加するなど)。
- [マルチメディアを翻訳する](http://www.inwhatlanguage.com/blog/translate-video-audio/)ための自動オプション。(英語)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

## このモジュール

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [\<object> から \<iframe> へ — その他の埋め込み技術](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Web にベクターグラフィックスを追加する](/ja/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla のスプラッシュページ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)

<!---->

<!---->
