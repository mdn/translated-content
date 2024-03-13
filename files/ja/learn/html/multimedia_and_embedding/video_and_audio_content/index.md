---
title: 動画と音声のコンテンツ
slug: Learn/HTML/Multimedia_and_embedding/Video_and_audio_content
l10n:
  sourceCommit: af0e71822122feda89495ab9215c131bbe34d65c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}

ウェブページに簡単な画像を追加するのができるようになったので、次のステップは HTML 文書に動画と音声のプレイヤーを追加することです。この記事では {{htmlelement("video")}} と {{htmlelement("audio")}} 要素を使って実現することを見ていきます。それから動画にキャプションや字幕を追加する方法を見て完了します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >インストール済みの基本的なソフトウェア</a
        >、基本的な
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイル操作</a
        >の知識、 HTML の基礎知識になじんでいること（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >にあるような）、および
        <a href="/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
          >HTML の画像</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        動画や音声のコンテンツをウェブページに埋め込み、動画にキャプションや字幕を追加する方法を学びます。
      </td>
    </tr>
  </tbody>
</table>

## ウェブでの動画と音声

オンラインの動画や音声の最初の登場は、 [Flash](https://ja.wikipedia.org/wiki/Adobe_Flash) や [Silverlight](https://ja.wikipedia.org/wiki/Microsoft_Silverlight) といった独占的なプラグインベースの技術によって可能となりました。これらはどちらもセキュリティやアクセシビリティの問題があり、現在では廃れています。 HTML のネイティブのソリューションである {{htmlelement("video")}} と {{htmlelement("audio")}} 要素と {{Glossary("JavaScript")}} が利用できるようになったからです。それらを操作するための {{Glossary("API")}} があります。ここでは、 JavaScript については触れません。 HTML で実現できる基本的な基礎知識だけを紹介します。

音声/動画ファイルの作成方法は、完全に別のスキルが必要なため、ここでは教えません。私たちは、自分自身で実験するために、[音声や動画のファイルの例とコード](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) を提供しています。

> **メモ:** ここで始める前に、 [YouTube](https://www.youtube.com/)、[Dailymotion](http://www.dailymotion.com)、[Vimeo](https://vimeo.com/) のような OVP （オンライン動画プロバイダー）と [Soundcloud](https://soundcloud.com/) のようなオンライン音声プロバイダーがあることも知っておく必要があります。そのような企業は、動画をホストして消費するための便利で簡単な方法を提供するので、莫大な帯域幅の消費を心配する必要はありません。 OVP は通常、ウェブページに動画や音声を埋め込むための既製コードを提供しています。その道を行くなら、この記事で取り上げるいくつかの困難を避けることができます。この種のサービスについては、次の記事でもう少し詳しく説明します。

### \<video> 要素

{{htmlelement("video")}} 要素を使用すると、動画をとても簡単に埋め込むことができます。本当に簡単な例は次のようになります。

```html
<video src="rabbit320.webm" controls>
  <p>
    お使いのブラウザーは HTML 動画をサポートしていません。その代わりに<a
      href="rabbit320.webm"
      >動画へのリンク</a
    >があります。
  </p>
</video>
```

機能は次のとおりです。

- [`src`](/ja/docs/Web/HTML/Element/video#src)
  - : {{htmlelement("img")}} 要素と同じように、`src` （ソース）属性には、埋め込みたい動画へのパスが含まれています。これは、まったく同じように動作します。
- [`controls`](/ja/docs/Web/HTML/Element/video#controls)
  - : ユーザーは、動画や音声の再生を制御できる必要があります（特に[てんかん](https://ja.wikipedia.org/wiki/%E3%81%A6%E3%82%93%E3%81%8B%E3%82%93#%E7%96%AB%E5%AD%A6)を患っている人にとっては重要です）。`controls` 属性を使用してブラウザー独自のコントロールインターフェイスを組み込むか、適切な [JavaScript API](/ja/docs/Web/API/HTMLMediaElement) を使用してインターフェイスを構築する必要があります。少なくとも、インターフェイスにはメディアの開始と停止、および音量の調整が含まれている必要があります。
- `<video>` タグ内の段落
  - : これは**代替コンテンツ**と呼ばれ、ページにアクセスしているブラウザーが `<video>` 要素に対応していない場合に表示され、古いブラウザーのための代替手段を提供することができるようになります。この場合、動画ファイルへの直接リンクを提供していますので、ユーザーは使用するブラウザーに関係なく、少なくとも何らかの方法で動画にアクセスすることができます。

埋め込み動画は次のようになります。

![小さな白いウサギの動画を表示するシンプルなビデオプレーヤー](simple-video.png)

ここで[サンプルをライブで試す](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)ことができます([ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)も参照してください)。

### 複数のソース形式を使用して互換性を向上させる

上記の例には問題があります。ブラウザーの対応する動画（音声）形式が様々であるため、動画が再生されない可能性があるのです。幸い、この問題を防ぐためにできることがあります。

#### メディアファイルの内容

まず、用語をすばやく見てみましょう。MP3、MP4、WebM などの形式は **[コンテナー形式](/ja/docs/Web/Media/Formats/Containers)** と呼ばれています。それらは、音声トラック、映像トラック（動画の場合）、および提示されるメディアを記述するメタデータなど、歌または動画全体を構成する様々な部分を含みます。

ある WebM ファイルに、メイン映像トラックと別アングルのトラック、英語とスペイン語の音声、英語のコメンタリートラックの音声がある映画が含まれている場合、下図のような概念で考えることができます。また、長編映画の字幕、映画のスペイン語字幕、コメンタリーの英語字幕を含むテキストトラックも記載されています。

[![メディアファイルの中身をトラック単位で概念化した図。](containersandtracks.png)](containersandtracks.png)

コンテナー内の音声トラックと映像トラックは、そのメディアをエンコードするために使用されるコーデックに適した形式のデータを保持します。音声トラックと映像トラックでは、異なる形式が使用されます。それぞれの音声トラックは [音声コーデック](/ja/docs/Web/Media/Formats/Audio_codecs) を使用してエンコードされ、一方映像トラックは、 （おそらく予想通り） [映像コーデック](/ja/docs/Web/Media/Formats/Video_codecs)を使用してエンコードされます。前にお話ししたように、さまざまなブラウザーでは、多様な動画と音声の形式、および多様なコンテナー形式（MP3、MP4、WebM など、さまざまな種類の動画と音声を順番に入力することができる形式）に対応しています。

例えば、

- WebM コンテナーは、通常、 Vorbis または Opus の音声と VP8/VP9 映像をパッケージ化します。これはすべての現代のブラウザーが対応していますが、古いバージョンでは動作しません。
- MP4 コンテナーは、 AAC または MP3 音声を H.264 映像とパッケージ化することがよくあります。これはすべての現代のブラウザーが対応しています。
- Ogg コンテナーは、g Vorbis 音声と Theora 映像を使用する傾向があります。これは Firefox と Chrome が最もよく対応していますが、基本的により質の良い WebM 形式に取って代わられつつあります。

いくつかの特殊なケースもあります。例えば、音声の種類によっては、コーデックのデータはコンテナーなしで、または簡易的なコンテナーで格納されることがよくあります。そのような例の 1 つが FLAC コーデックで、最も一般的には、生の FLAC トラックだけの FLAC ファイルに格納されます。

もう1つは、常に人気のある MP3 ファイルです。「MP3 ファイル」とは、実際には、 MPEG-1 Audio Layer III (MP3) 音声トラックが MPEG または MPEG-2 コンテナーに格納されたものです。これは特に面白いことに、ほとんどのブラウザーが MPEG メディアを {{HTMLElement("video")}} および {{HTMLElement("audio")}} 要素で使用することに対応していませんが、 MP3 はその人気のために対応していることがあります。

オーディオプレーヤーは、 MP3 または Ogg ファイルの音声トラックを直接再生する傾向があります。これらはコンテナーを必要としません。

#### ブラウザーが対応しているメディアファイル

> **メモ:** MP3 や MP4/H.264 などの一般的な形式は優れていますが、特許に阻まれています。つまり、ベースとなっている技術の一部または全部に応じた特許が存在するのです。米国では、 MP3 は 2017 年まで、 H.264 は少なくとも 2027 年までの特許が適用されています。
>
> これらの特許のために、これらのコーデックに対応するために実装しようとするブラウザーは、通常、膨大なライセンス料を支払わなければなりません。さらに、制限のあるソフトウェアを避けて、オープンな形式だけを使用することを好む人々もいます。このような法的・選好的な理由から、ウェブ開発者は、視聴者全員を取り込むために複数の形式に対応しなければならないことが分かっています。

前節で説明したコーデックは、映像と音声を管理可能なファイルに圧縮するために存在します。生の映像と音声は非常に大きいからです。各ブラウザーには一連の **{{Glossary("Codec","コーデック")}}**、例えば Vorbis や H.264 などが含まれており、圧縮された音声や映像のデータをバイナリーデータに戻すために使用されます。各コーデックには利点と欠点があり、また各コンテナーにも長所と欠点があるため、どのコンテナーを使用するかの判断に影響を与えることがあります。

ブラウザーの対応するコンテナーファイル形式がそれぞれ異なるだけでなく、コーデックの選択もそれぞれ異なるため、事態は少し複雑になります。ウェブサイトや アプリがユーザーのブラウザで動作する可能性を最大限に高めるには、使用する それぞれのメディアファイルを複数の形式で提供する必要があるかもしれません。自分のサイトとユーザーのブラウザーで共通の形式がない場合、メディアは再生されません。

アプリのメディアを、リーチしたいブラウザー、プラットフォーム、機器のあらゆる組み合わせで表示できるようにすることは複雑なため、コーデックとコンテナーの最適な組み合わせを選ぶことは、複雑な作業になる可能性があります。ニーズに合ったコンテナーファイル形式の選択については、[正しいコンテナーの選択](/ja/docs/Web/Media/Formats/Containers#正しいコンテナーの選択)を参照してください。同様に、コンテンツや対象となる視聴者に合わせて最初に使用するメディアコーデックの選択については、[映像コーデックの選択](/ja/docs/Web/Media/Formats/Video_codecs#choosing_a_video_codec)や[音声コーデックの選択](/ja/docs/Web/Media/Formats/Audio_codecs#choosing_an_audio_codec)が参考になります。

もう一つ覚えておいていただきたいのは、モバイル用のブラウザーは、デスクトップ版と同じ形式をすべて対応しているわけではない場合があるのと同様、デスクトップ版で対応していない形式にも追加で対応している場合があるということです。さらに、デスクトップとモバイルのブラウザーは、メディア再生の処理をオフロードするように設計されている場合があります（すべてのメディアに対して、または内部で処理できない特定の型に対してのみ、オフロードする）。つまり、メディアへの対応は、ユーザーがインストールしているソフトウェアに部分的に依存しているのです。

だから私たちはこれをどうやってやるのか? 以下の[更新された例](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)を見てください（それを[ここでライブで試して](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)みてください）。

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    お使いのブラウザーはこの動画に対応していません。こちらは代わりの<a
      href="rabbit320.mp4"
      >動画へのリンク</a
    >です。
  </p>
</video>
```

ここでは実際の {{HTMLElement("video")}} タグから `src` 属性を取り出し、独自のソースを指す別々の {{htmlelement("source")}} 要素を追加しました。この場合、ブラウザーは {{HTMLElement("source")}} 要素を走査し、対応するコーデックがある最初の要素を再生します。 WebM や MP4 のソースを含めれば、最近のほとんどのプラットフォームやブラウザーで動画を再生できるはずです。

それぞれの `<source>` 要素には [`type`](/ja/docs/Web/HTML/Element/source#type) 属性もあります。これはオプションですが、記載しておくことをお勧めします。 `type` 属性には `<source>` で指定したファイルの {{glossary("MIME type","MIME タイプ")}}が含まれており、ブラウザーは `type` を使用して、理解できない動画をすぐにスキップすることができます。もし `type` が記載されていなければ、ブラウザーは各ファイルを読み込んで、動作するものが見つかるまで再生しようとしますが、これは明らかに時間がかかり、リソースを不必要に使用することになります。

[対応しているメディア形式のガイド](/ja/docs/Web/Media/Formats)を参照すると、必要とする最適なコンテナーやコーデックの選択に役に立ち、それぞれを指定するための MIME タイプを調べることができます。

### その他の \<video> 機能

HTML 動画に含めることができる他の多くの機能があります。以下の 3 番目の例を見てください。

```html
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  preload="auto"
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    お使いのブラウザーはこの動画に対応していません。代わりに<a
      href="rabbit320.mp4"
      >動画へのリンク</a
    >をお使いください。
  </p>
</video>
```

これにより、次のような出力が得られます。

![再生する前にポスター画像を表示する動画プレーヤー。 ポスター画像には "HTML video example, OMG hell yeah!" と書いてあります。](poster_screenshot_updated.png)

新しい機能は次のとおりです。

- [`width`](/ja/docs/Web/HTML/Element/video#width) と [`height`](/ja/docs/Web/HTML/Element/video#height)
  - : これらの属性または {{Glossary("CSS")}} を使用して動画サイズを制御することができます。どちらの場合も、動画は元の縦横比 (**アスペクト比**) を維持します。アスペクト比が設定したサイズによって維持されない場合、動画は水平方向にスペースを埋めるように拡大し、デフォルトでは満たされていないスペースには無地の背景色が与えられます。
- [`autoplay`](/ja/docs/Web/HTML/Element/video#autoplay)
  - : この属性は、ページの残りの部分がロードされている間に音声または動画の再生をすぐに開始します。ユーザーに実際に迷惑をかけることがあるので、サイトで動画 (または音声) を自動再生することはお勧めしません。
- [`loop`](/ja/docs/Web/HTML/Element/video#loop)
  - : この属性は、動画 (または音声) が終了するたびに再生を開始させます。これは迷惑になることもありますので、本当に必要な場合にのみ使用してください。
- [`muted`](/ja/docs/Web/HTML/Element/video#muted)
  - : この属性を使用すると、デフォルトで音声をオフにしてメディアを再生します。
- [`poster`](/ja/docs/Web/HTML/Element/video#poster)
  - : この属性は、動画の再生前に表示される画像の URL を値としてとります。これは、スプラッシュ画面または広告画面に使用するためのものです。
- [`preload`](/ja/docs/Web/HTML/Element/video#preload)

  - : この属性は、大きなファイルをバッファリングする要素で使用されます。3 つの値のいずれかを取ることができます。

    - `"none"` はファイルをバッファリングしません
    - `"auto"` はメディアファイルをバッファリングする
    - `"metadata"` はファイルのメタデータのみをバッファリングする

上記の例は [Github でライブで再生する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)ことができます ([ソースコード](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)も参照してください)。ライブバージョンには `autoplay` 属性は含まれていません — ページが読み込まれるとすぐに動画が再生され始めると、ポスターを見ることはできません!

### \<audio> 要素

{{htmlelement("audio")}} 要素は、{{htmlelement("video")}} 要素とまったく同じように動作しますが、以下に説明するように若干の違いがあります。典型的な例は次のようになります。

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    お使いのブラウザーはこの音声ファイルに対応していません。代わりに<a
      href="viper.mp3"
      >音声へのリンク</a
    >をお使いください。
  </p>
</audio>
```

これはブラウザーで次のようなものを生成します。

![再生ボタン、タイマー、音量コントロール、および進行状況バーを備えたシンプルなオーディオプレーヤー](audio-player.png)

> **メモ:** Github で[音声デモをライブで実行する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)こともできます (オーディオプレーヤーの[ソースコード](https://github.com/mdn/learning-area/blob/gh-pages/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)も参照してください)。

ビジュアルコンポーネントがないため、動画プレーヤーよりもスペースが小さくなります。音声を再生するコントロールを表示するだけで済みます。 HTML 動画とのその他の相違点は次のとおりです。

- {{htmlelement("audio")}} 要素は `width` 属性や `height` 属性に対応していません。ビジュアルコンポーネントがないため、幅や高さを割り当てることはありません。
- また、`poster` 属性にも対応していません。これも、ビジュアルコンポーネントがないからです。

これ以外について `<audio>` は、`<video>` と同じ機能にすべて対応しています。詳細については、上記の節を参照してください。

## 動画のテキストトラックの表示

さて、今回は知っておくと実に有用な、少し高度な概念について説明します。多くの人は、ウェブで見つけた音声や動画の内容を、少なくともある時間帯は聞くことができない、あるいは聞きたくないと思っています。例えば、

- 多くの人は聴覚障害（難聴や聴覚障害など）を持っているため、音声をはっきり聞くことができません（全く聞こえない場合もあります）。
- 他にも、騒がしい環境（スポーツ観戦中の混雑したバーなど）にいるため、音声が聞こえない人もいます。
- 同様に、音声を保有すると気が散ってしまうような環境（図書館やパートナーが眠ろうとしているときなど）では、字幕を使用することはとても有用です。
- 動画の言語の話者ではない人は、メディアの内容を理解するために、文字起こしや翻訳が必要になることもあります。

音声や動画の中で話されている言葉を文字起こししたものを、このような人たちに提供できたらいいと思いませんか？ HTML 動画のおかげで、それが可能になりました。そのためには、 [WebVTT](/ja/docs/Web/API/WebVTT_API) ファイル形式と {{htmlelement("track")}} 要素を使用します。

> **メモ:** 「文字起こし」とは、「話し言葉をテキストとして書き留める」という意味です。出来上がったテキストが「文字起こししたもの」です。

WebVTT は、複数の文字列と、それぞれの文字列が動画の中で表示されるべき時間、さらには限定的なスタイル設定/位置情報などのメタデータを含むテキストファイルを書くための形式です。これらの文字列は**キュー**と呼ばれ、異なる目的で使用されるいくつかの種類のキューがあります。最も一般的なキューは以下の通りです。

- 字幕 (subtitles)
  - : 音声で話された言葉がわからない人のための、外国語の素材の翻訳。
- キャプション (captions)
  - : 音声が聞こえない人にも何が起こっているのかを理解してもらうために、台詞や重要な音の説明を同期して文字起こししたものです。
- 音声ガイド (timed descriptions)
  - : 目の不自由なユーザーに重要な映像を説明するために、メディアプレーヤーが読み上げるテキスト。

典型的な WebVTT ファイルは次のようになります。

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
これが最初の字幕です。

2
00:00:30.739 --> 00:00:34.074
これは二番目です。

…
```

これを HTML メディアの再生と一緒に表示するには、以下を行う必要があります。

1. 適切な場所に `.vtt` ファイルとして保存します。
2. {{htmlelement("track")}} 要素で `.vtt` ファイルにリンクします。`<track>` は `<audio>` または `<video>` 内に配置する必要がありますが、すべての `<source>` 要素の後に配置する必要があります。[`kind`](/ja/docs/Web/HTML/Element/track#kind) 属性を使用して、キューが `subtitles`、`captions`、または `descriptions` のいずれであるかを指定します。さらに、[`srclang`](/ja/docs/Web/HTML/Element/track#srclang) 属性を使用して、字幕が書かれた言語をブラウザーに伝えます。最後に、[`label`](/ja/docs/Web/HTML/Element/track#label) を追加して、読み手が検索している言語を識別しやすくします。

ここに例があります。

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

これにより、字幕が表示された動画になります。これは次のようなものです。

![再生、停止、音量、キャプションのオン/オフなどのスタンドコントロールを備えたビデオプレーヤー。 動画の再生には、槍のような武器を持つ男のシーンが表示され、キャプションには "Esta hoja tiene pasado oscuro." と表示されます。](video-player-with-captions.png)

詳しくは、[HTML 動画にキャプションと字幕を追加する](/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)をご覧ください。Github には Ian Devlin によって書かれた[この記事の例](http://iandevlin.github.io/mdn/video-player-with-captions/)があります ([ソースコード](https://github.com/iandevlin/iandevlin.github.io/tree/main/mdn/video-player-with-captions)も参照してください)。この例では、JavaScript を使用してさまざまな字幕を選択できるようにしています。字幕をオンにするには、\[CC] ボタンを押して、英語、ドイツ語、スペイン語のオプションを選択する必要があります。

> **メモ:** テキストトラックは検索エンジンが特にテキスト上で成功するため、 {{glossary("SEO")}} にも役立ちます。テキストトラックを使用すると、検索エンジンは動画の途中地点に直接リンクすることもできます。

### アクティブラーニング: 自分の音声と動画を埋め込む

このアクティブラーニングでは、（理想的には）世界に出て行って、自分自身で動画や音声を録音してほしいと思います。最近のほとんどの携帯電話では、とても簡単に音声や動画を録音でき、それをコンピューターに転送できれば、それを使用することができます。動画の場合は WebM や MP4、音声の場合は MP3 や Ogg に変換する必要がありますが、 [Miro Video Converter](http://www.mirovideoconverter.com/) や [Audacity](https://sourceforge.net/projects/audacity/) など、手間をかけずにできるプログラムが十分に用意されています。ぜひ、一度やってみてください。

動画や音声を入手できない場合は、この[サンプル](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content)を自由に使用してこの演習を行うことができます。サンプルコードを参照のために使用することもできます。

次のことをしましょう。

1. 音声と動画のファイルをコンピュータの新しいディレクトリーに保存します。
2. 同じディレクトリーに `index.html` と呼ばれる新しい HTML ファイルを作成します。
3. ページに {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素を追加します。それらにデフォルトのブラウザーコントロールを表示させます。
4. 両方の要素に {{HTMLElement("source")}} 要素を付けて、ブラウザーが最もよくサポートするフォーマットを見つけて読み込むようにします。これらは [`type`](/ja/docs/Web/HTML/Element/source#type) 属性を含むべきです。
5. `<video>` 要素に、動画が再生される前に表示されるポスターを指定します。自分のポスターのグラフィックを作成して楽しんでください。

さらに、テキストトラックを研究し、動画にキャプションを追加する方法をうまくいくようにすることもできます。

## スキルをテストしましょう

この記事の終わりまで到達しましたが、最も大事な情報を覚えていますか？移動する前に、この情報を取得したかのテストを見ることができます — [スキルテスト: マルチメディアと埋め込み](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding) を見てください。 なお、このテストの 3 番目の評価問題は、[次の記事](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)で取り上げられるいくつかの技術の知識を前提としますので、挑戦する前にそれを読んでおくとよいでしょう。

## まとめ

以上、ウェブページに動画や音声を保有する楽しさを味わっていただけたでしょうか？次の記事では、{{htmlelement("iframe")}} や {{htmlelement("object")}} といった技術を使用して、ウェブ上の[コンテンツを埋め込む他の方法](/ja/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)について見ていきましょう。

## 関連情報

- HTML メディア要素: {{htmlelement("audio")}}, {{htmlelement("video")}}, {{htmlelement("source")}}, {{htmlelement("track")}}
- [HTML5 の動画へのキャプションと字幕の追加](/ja/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [音声と動画の配信](/ja/docs/Web/Guide/Audio_and_video_delivery): HTML と JavaScript を使用して音声と動画を Web ページに配置することに関する詳細。
- [音声と動画の加工](/ja/docs/Web/Guide/Audio_and_video_manipulation): JavaScript を使用して音声や動画を操作する方法について詳しく説明します（たとえばフィルターを追加するなど）。
- [ウェブメディア技術](/ja/docs/Web/Media)
- [ウェブ上のメディア種別とファイル形式のガイド](/ja/docs/Web/Media/Formats)
- [イベントリファレンス > メディア](/ja/docs/Web/Events#メディア)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Images_in_HTML", "Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding")}}
