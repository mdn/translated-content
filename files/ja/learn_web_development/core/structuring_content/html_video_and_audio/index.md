---
title: 動画と音声のコンテンツ
short-title: 動画と音声
slug: Learn_web_development/Core/Structuring_content/HTML_video_and_audio
l10n:
  sourceCommit: daad50a992d56b23573fdd50517c75df176747cf
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}

ウェブページに簡単な画像を追加するのができるようになったので、次のステップは HTML 文書に動画と音声のプレイヤーを追加することです。この記事では {{htmlelement("video")}} と {{htmlelement("audio")}} 要素を使って実現することを見ていきます。それから動画にキャプションや字幕を追加する方法を見て完了します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。 <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >見出しと段落</a
        >および<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Lists"
          >リスト</a
        >などのテキストレベルの意味付け。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li><code>&lt;video&gt;</code> や <code>&lt;audio&gt;</code> タグの基本的な構文</li>
          <li>動画と音声の特定の属性（コントロールやミュートなど）</li>
          <li><code>&lt;source&gt;</code> 要素を使用してさまざまな動画または音声ソースを提供すること。</li>
          <li>キャプションや字幕などのテキストトラックを使用方法の基本。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ウェブでの動画と音声

オンラインの動画や音声の最初の登場は、 [Flash](https://ja.wikipedia.org/wiki/Adobe_Flash) や [Silverlight](https://ja.wikipedia.org/wiki/Microsoft_Silverlight) といった独占的なプラグインベースの技術によって可能となりました。これらはどちらもセキュリティやアクセシビリティの問題があり、現在では廃れています。 HTML のネイティブのソリューションである {{htmlelement("video")}} と {{htmlelement("audio")}} 要素と {{Glossary("JavaScript")}} が利用できるようになったからです。それらを操作するための {{Glossary("API")}} があります。ここでは、 JavaScript については触れません。 HTML で実現できる基本的な基礎知識だけを紹介します。

音声/動画ファイルの作成方法は、完全に別のスキルが必要なため、ここでは教えません。私たちは、自分自身で実験するために、[音声や動画のファイルの例とコード](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content) を提供しています。

> [!NOTE]
> ここで始める前に、 [YouTube](https://www.youtube.com/)、[Dailymotion](http://www.dailymotion.com)、[Vimeo](https://vimeo.com/) のような OVP （オンライン動画プロバイダー）と [Soundcloud](https://soundcloud.com/) のようなオンライン音声プロバイダーがあることも知っておく必要があります。そのような企業は、動画をホストして消費するための便利で簡単な方法を提供するので、莫大な帯域幅の消費を心配する必要はありません。 OVP は通常、ウェブページに動画や音声を埋め込むための既製コードを提供しています。その道を行くなら、この記事で取り上げるいくつかの困難を避けることができます。この種のサービスについては、次の記事でもう少し詳しく説明します。

### \<video> 要素

{{htmlelement("video")}} 要素を使用すると、動画をとても簡単に埋め込むことができます。本当に簡単な例は次のようになります。

```html
<video src="rabbit320.webm" controls>
  <p>
    お使いのブラウザーは HTML 動画に対応していません。その代わりに<a
      href="rabbit320.webm"
      >動画へのリンク</a
    >があります。
  </p>
</video>
```

機能は次のとおりです。

- [`src`](/ja/docs/Web/HTML/Reference/Elements/video#src)
  - : {{htmlelement("img")}} 要素と同じように、`src` （ソース）属性には、埋め込みたい動画へのパスが含まれています。これは、まったく同じように動作します。
- [`controls`](/ja/docs/Web/HTML/Reference/Elements/video#controls)
  - : ユーザーは、動画や音声の再生を制御できる必要があります（特に[てんかん](https://ja.wikipedia.org/wiki/%E3%81%A6%E3%82%93%E3%81%8B%E3%82%93#%E7%96%AB%E5%AD%A6)を患っている人にとっては重要です）。`controls` 属性を使用してブラウザー独自のコントロールインターフェイスを組み込むか、適切な [JavaScript API](/ja/docs/Web/API/HTMLMediaElement) を使用してインターフェイスを構築する必要があります。少なくとも、インターフェイスにはメディアの開始と停止、および音量の調整が含まれている必要があります。
- `<video>` タグ内の段落
  - : これは**代替コンテンツ**と呼ばれ、ページにアクセスしているブラウザーが `<video>` 要素に対応していない場合に表示され、古いブラウザーのための代替手段を提供することができるようになります。この場合、動画ファイルへの直接リンクを提供していますので、ユーザーは使用するブラウザーに関係なく、少なくとも何らかの方法で動画にアクセスすることができます。

埋め込み動画は次のようになります。

![小さな白いウサギの動画を表示するシンプルなビデオプレーヤー](simple-video.png)

ここで[サンプルをライブで試す](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)ことができます([ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/simple-video.html)も参照してください)。

### 複数のソース形式を使用して互換性を向上させる

上記の例には問題があります。ブラウザーの対応する動画（音声）形式が様々であるため、動画が再生されない可能性があるのです。幸い、この問題を防ぐためにできることがあります。

#### メディアファイルの内容

まず、用語をすばやく見てみましょう。OGG、WAV、MP4、WebM などの形式は **[コンテナー形式](/ja/docs/Web/Media/Guides/Formats/Containers)** と呼ばれています。それらは、音声トラック、映像トラック（動画の場合）、および提示されるメディアを記述するメタデータなど、歌または動画全体を構成する様々な部分を含みます。

ある WebM ファイルに、メイン映像トラックと別アングルのトラック、英語とスペイン語の音声、英語のコメンタリートラックの音声がある映画が含まれている場合、下図のような概念で考えることができます。また、長編映画の字幕、映画のスペイン語字幕、コメンタリーの英語字幕を含むテキストトラックも記載されています。

![メディアファイルの中身をトラック単位で概念化した図。](containersandtracks.png)

コンテナー内の音声トラックと映像トラックは、そのメディアをエンコードするために使用されるコーデックに適した形式のデータを保持します。音声トラックと映像トラックでは、異なる形式が使用されます。それぞれの音声トラックは [音声コーデック](/ja/docs/Web/Media/Guides/Formats/Audio_codecs) を使用してエンコードされ、一方映像トラックは、 （おそらく予想通り） [映像コーデック](/ja/docs/Web/Media/Guides/Formats/Video_codecs)を使用してエンコードされます。前にお話ししたように、さまざまなブラウザーでは、多様な動画と音声の形式、および多様なコンテナー形式（OGG、MP4、WebM など、さまざまな種類の動画と音声を順番に入力することができる形式）に対応しています。

例えば、

- WebM コンテナーは、通常、 Vorbis または Opus の音声と VP8/VP9 映像をパッケージ化します。これはすべての現代のブラウザーが対応していますが、古いバージョンでは動作しません。
- MP4 コンテナーは、 AAC または MP3 音声を H.264 映像とパッケージ化することがよくあります。これはすべての現代のブラウザーが対応しています。
- Ogg コンテナーは、g Vorbis 音声と Theora 映像を使用する傾向があります。これは Firefox と Chrome が最もよく対応していますが、基本的により質の良い WebM 形式に取って代わられつつあります。

いくつかの特殊なケースもあります。例えば、音声の種類によっては、コーデックのデータはコンテナーなしで、または簡易的なコンテナーで格納されることがよくあります。そのような例の 1 つが FLAC コーデックで、最も一般的には、生の FLAC トラックだけの FLAC ファイルに格納されます。

もう一つの例は、広く普及している「MP3 ファイル」です。「MP3 ファイル」とは、MPEG-1 Audio Layer III 圧縮方式でエンコードされた音声ファイルです。メタデータを含めることができるのですが、単体の MPEG または MPEG-2 コンテナー内にカプセル化されていません。 {{htmlelement("audio")}} 要素や {{htmlelement("video")}} 要素で広範に対応されていることは、その持続的な人気を如実に物語っています。

オーディオプレーヤーは、 MP3 または Ogg ファイルの音声トラックを直接再生する傾向があります。これらはコンテナーを必要としません。

#### ブラウザーが対応しているメディアファイル

> [!NOTE]
> MP3 や MP4/H.264 などの一般的な形式は優れていますが、特許に阻まれています。つまり、ベースとなっている技術の一部または全部に応じた特許が存在するのです。米国では、 MP3 は 2017 年まで、 H.264 は少なくとも 2027 年までの特許が適用されています。
>
> これらの特許のために、これらのコーデックに対応するために実装しようとするブラウザーは、通常、膨大なライセンス料を支払わなければなりません。さらに、制限のあるソフトウェアを避けて、オープンな形式だけを使用することを好む人々もいます。これらの法的および選好的な理由により、ウェブ開発者はすべての視聴者に動画を体験してもらうために、複数の形式に対応せざるを得ない状況になっています。

前節で説明したコーデックは、映像と音声を管理可能なファイルに圧縮するために存在します。生の映像と音声は非常に大きいからです。各ブラウザーには一連の **{{Glossary("Codec","コーデック")}}**、例えば Vorbis や H.264 などが含まれており、圧縮された音声や映像のデータをバイナリーデータに戻すために使用されます。各コーデックには利点と欠点があり、また各コンテナーにも長所と欠点があるため、どのコンテナーを使用するかの判断に影響を与えることがあります。

ブラウザーの対応するコンテナーファイル形式がそれぞれ異なるだけでなく、コーデックの選択もそれぞれ異なるため、事態は少し複雑になります。ウェブサイトや アプリがユーザーのブラウザーで動作する可能性を最大限に高めるには、使用する それぞれのメディアファイルを複数の形式で提供する必要があるかもしれません。自分のサイトとユーザーのブラウザーで共通の形式がない場合、メディアは再生されません。

アプリのメディアを、リーチしたいブラウザー、プラットフォーム、機器のあらゆる組み合わせで表示できるようにすることは複雑なため、コーデックとコンテナーの最適な組み合わせを選ぶことは、複雑な作業になる可能性があります。ニーズに合ったコンテナーファイル形式の選択については、[正しいコンテナーの選択](/ja/docs/Web/Media/Guides/Formats/Containers#正しいコンテナーの選択)を参照してください。同様に、コンテンツや対象となる視聴者に合わせて最初に使用するメディアコーデックの選択については、[映像コーデックの選択](/ja/docs/Web/Media/Guides/Formats/Video_codecs#choosing_a_video_codec)や[音声コーデックの選択](/ja/docs/Web/Media/Guides/Formats/Audio_codecs#choosing_an_audio_codec)が参考になります。

もう一つ覚えておいていただきたいのは、モバイル用のブラウザーは、デスクトップ版と同じ形式をすべて対応しているわけではない場合があるのと同様、デスクトップ版で対応していない形式にも追加で対応している場合があるということです。さらに、デスクトップとモバイルのブラウザーは、メディア再生の処理をオフロードするように設計されている場合があります（すべてのメディアに対して、または内部で処理できない特定の型に対してのみ、オフロードする）。つまり、メディアへの対応は、ユーザーがインストールしているソフトウェアに部分的に依存しているのです。

だから私たちはこれをどうやってやるのか? 以下の[更新された例](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)を見てください（それを[ここでライブで試して](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-video-formats.html)みてください）。

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    お使いのブラウザーはこの動画に対応していません。代わりの<a
      href="rabbit320.mp4"
      >動画へのリンク</a
    >があります。
  </p>
</video>
```

ここでは実際の {{HTMLElement("video")}} タグから `src` 属性を取り出し、独自のソースを指す別々の {{htmlelement("source")}} 要素を追加しました。この場合、ブラウザーは {{HTMLElement("source")}} 要素を走査し、対応するコーデックがある最初の要素を再生します。 WebM や MP4 のソースを含めれば、最近のほとんどのプラットフォームやブラウザーで動画を再生できるはずです。

それぞれの `<source>` 要素には [`type`](/ja/docs/Web/HTML/Reference/Elements/source#type) 属性もあります。これはオプションですが、記載しておくことをお勧めします。 `type` 属性には `<source>` で指定したファイルの {{glossary("MIME type","MIME タイプ")}}が含まれており、ブラウザーは `type` を使用して、理解できない動画をすぐにスキップすることができます。もし `type` が記載されていなければ、ブラウザーは各ファイルを読み込んで、動作するものが見つかるまで再生しようとしますが、これは明らかに時間がかかり、リソースを不必要に使用することになります。

[対応しているメディア形式のガイド](/ja/docs/Web/Media/Guides/Formats)を参照すると、必要とする最適なコンテナーやコーデックの選択に役に立ち、それぞれを指定するための MIME タイプを調べることができます。

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

- [`width`](/ja/docs/Web/HTML/Reference/Elements/video#width) と [`height`](/ja/docs/Web/HTML/Reference/Elements/video#height)
  - : これらの属性または {{Glossary("CSS")}} を使用して動画サイズを制御することができます。どちらの場合も、動画は元の縦横比 (**アスペクト比**) を維持します。アスペクト比が設定したサイズによって維持されない場合、動画は水平方向にスペースを埋めるように拡大し、デフォルトでは満たされていないスペースには無地の背景色が与えられます。
- [`autoplay`](/ja/docs/Web/HTML/Reference/Elements/video#autoplay)
  - : この属性は、ページの残りの部分が読み込まれている間に音声または動画の再生をすぐに開始します。ユーザーに実際に迷惑をかけることがあるので、サイトで動画 (または音声) を自動再生することはお勧めしません。
- [`loop`](/ja/docs/Web/HTML/Reference/Elements/video#loop)
  - : この属性は、動画 (または音声) が終了するたびに再生を開始させます。これは迷惑になることもありますので、本当に必要な場合にのみ使用してください。
- [`muted`](/ja/docs/Web/HTML/Reference/Elements/video#muted)
  - : この属性を使用すると、デフォルトで音声をオフにしてメディアを再生します。
- [`poster`](/ja/docs/Web/HTML/Reference/Elements/video#poster)
  - : この属性は、動画の再生前に表示される画像の URL を値としてとります。これは、スプラッシュ画面または広告画面に使用するためのものです。
- [`preload`](/ja/docs/Web/HTML/Reference/Elements/video#preload)
  - : 大容量ファイルのバッファリングに使用されます。次の 3 つの値のいずれかを取ります。
    - `"none"` はファイルをバッファリングしません
    - `"auto"` はメディアファイルをバッファリングする
    - `"metadata"` はファイルのメタデータのみをバッファリングする

上記の例は [Github でライブで再生する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)ことができます ([ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/extra-video-features.html)も参照してください)。ライブバージョンには `autoplay` 属性は含まれていません — ページが読み込まれるとすぐに動画が再生され始めると、ポスターを見ることはできません!

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

> [!NOTE]
> Github で[音声デモをライブで実行する](https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)こともできます (オーディオプレーヤーの[ソースコード](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/video-and-audio-content/multiple-audio-formats.html)も参照してください)。

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

> [!NOTE]
> 「文字起こし」とは、「話し言葉をテキストとして書き留める」という意味です。出来上がったテキストが「文字起こししたもの」です。

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
2. {{htmlelement("track")}} 要素で `.vtt` ファイルにリンクします。`<track>` は `<audio>` または `<video>` 内に配置する必要がありますが、すべての `<source>` 要素の後に配置する必要があります。[`kind`](/ja/docs/Web/HTML/Reference/Elements/track#kind) 属性を使用して、キューが `subtitles`、`captions`、`descriptions` のいずれであるかを指定します。さらに、[`srclang`](/ja/docs/Web/HTML/Reference/Elements/track#srclang) 属性を使用して、字幕が書かれた言語をブラウザーに伝えます。最後に、[`label`](/ja/docs/Web/HTML/Reference/Elements/track#label) を追加して、読み手が検索している言語を識別しやすくします。

こちらが例です。

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

このことを試すには、ファイルを[ローカルの HTTP サーバー](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)にホストする必要があります。ブラウザーの出力には、字幕が表示された動画が表示されます。完全なアプリケーションとそのソースコードについては、[HTML5 の動画へのキャプションと字幕の追加](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)を参照してください。この例では、ユーザーが異なる字幕を選択できるように JavaScript を使用しています。字幕を有効にするには、"CC" ボタンを押して、英語 (English)、ドイツ語 (Deutsch)、スペイン語 (Español) のいずれかのオプションを選択する必要があります。

> [!NOTE]
> テキストトラックは検索エンジンが特にテキスト上で成功するため、 {{glossary("SEO")}} にも役立ちます。テキストトラックを使用すると、検索エンジンは動画の途中地点に直接リンクすることもできます。

### 自分の音声と動画を埋め込む

この課題では、外に出て自分自身で動画や音声を録音してみあｍしょう。スマートフォンをお持ちなら、それを使用して音声と映像を録音し、コンピューターに転送して試してみましょう。動画の場合、WebM や MP4 に、音声の場合には MP3 や Ogg に変換する必要があるかもしれませんがでこの作業をすることができる [CloudConvert](https://cloudconvert.com/mp4-converter) （オンライン）や [Audacity](https://sourceforge.net/projects/audacity/) （デスクトップアプリケーション）など、十分なツールがあります。ぜひ試してみてください！

> [!NOTE]
> 動画や音声を入手できない場合は、この[音声および動画のサンプルファイル](https://github.com/mdn/learning-area/tree/main/html/multimedia-and-embedding/video-and-audio-content)を自由に使用してこの演習を行うことができます。

次のことをしましょう。

1. 音声と動画のファイルをコンピューターの新しいディレクトリーに保存します。
2. 同じディレクトリー内に、[始めるテンプレート](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)を基にした新しい HTML ファイルを作成し、`index.html` という名前を付けます。
3. ページに {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素を追加します。それらにデフォルトのブラウザーコントロールを表示させます。
4. 両方の要素に {{HTMLElement("source")}} 要素を付けて、ブラウザーが最もよくサポートするフォーマットを見つけて読み込むようにします。これらは [`type`](/ja/docs/Web/HTML/Reference/Elements/source#type) 属性を含むべきです。
5. 非対応ブラウザー向けに、タグ内にメディアへの直接リンクを提供する代替の `<p>` 要素を両方とも用意しましょう。
6. `<video>` 要素に、動画が再生される前に表示されるポスターを指定します。自分のポスターのグラフィックを作成して楽しんでください。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html
<video controls poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>
    このブラウザーは HTML 動画に対応していません。<a href="rabbit320.mp4"
      >動画へのリンク</a
    >はこちらです。
  </p>
</video>

<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>
    このブラウザーは HTML 音声に非対応です。代わりに音声ファイルへの<a href="viper.mp3">リンク</a>をこちらに用意しました。
  </p>
</audio>
```

</details>

## まとめ

これで終了です。ウェブページでの動画や音声の操作を楽しんでいただけたでしょうか？次は、HTML の動画と音声に関する情報の理解と記憶の程度を調べるための試験を行いましょう。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Images", "Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content")}}
