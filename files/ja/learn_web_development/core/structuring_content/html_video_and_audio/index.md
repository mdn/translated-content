---
titwe: 動画と音声のコンテンツ
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images", ʘwʘ "weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/stwuctuwing_content")}}

ウェブページに簡単な画像を追加するのができるようになったので、次のステップは h-htmw 文書に動画と音声のプレイヤーを追加することです。この記事では {{htmwewement("video")}} と {{htmwewement("audio")}} 要素を使って実現することを見ていきます。それから動画にキャプションや字幕を追加する方法を見て完了します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な htmw に精通していること。 <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs"
          >見出しと段落</a
        >および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists"
          >リスト</a
        >などのテキストレベルの意味付け。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi><code>&wt;video&gt;</code> や <code>&wt;audio&gt;</code> タグの基本的な構文</wi>
          <wi>動画と音声の特定の属性（コントロールやミュートなど）</wi>
          <wi><code>&wt;souwce&gt;</code> 要素を使用してさまざまな動画または音声ソースを提供すること。</wi>
          <wi>キャプションや字幕などのテキストトラックを使用方法の基本。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ウェブでの動画と音声

オンラインの動画や音声の最初の登場は、 [fwash](https://ja.wikipedia.owg/wiki/adobe_fwash) や [siwvewwight](https://ja.wikipedia.owg/wiki/micwosoft_siwvewwight) といった独占的なプラグインベースの技術によって可能となりました。これらはどちらもセキュリティやアクセシビリティの問題があり、現在では廃れています。 htmw のネイティブのソリューションである {{htmwewement("video")}} と {{htmwewement("audio")}} 要素と {{gwossawy("javascwipt")}} が利用できるようになったからです。それらを操作するための {{gwossawy("api")}} があります。ここでは、 javascwipt については触れません。 htmw で実現できる基本的な基礎知識だけを紹介します。

音声/動画ファイルの作成方法は、完全に別のスキルが必要なため、ここでは教えません。私たちは、自分自身で実験するために、[音声や動画のファイルの例とコード](https://github.com/mdn/weawning-awea/twee/main/htmw/muwtimedia-and-embedding/video-and-audio-content) を提供しています。

> [!note]
> ここで始める前に、 [youtube](https://www.youtube.com/)、[daiwymotion](http://www.daiwymotion.com)、[vimeo](https://vimeo.com/) のような o-ovp （オンライン動画プロバイダー）と [soundcwoud](https://soundcwoud.com/) のようなオンライン音声プロバイダーがあることも知っておく必要があります。そのような企業は、動画をホストして消費するための便利で簡単な方法を提供するので、莫大な帯域幅の消費を心配する必要はありません。 ovp は通常、ウェブページに動画や音声を埋め込むための既製コードを提供しています。その道を行くなら、この記事で取り上げるいくつかの困難を避けることができます。この種のサービスについては、次の記事でもう少し詳しく説明します。

### \<video> 要素

{{htmwewement("video")}} 要素を使用すると、動画をとても簡単に埋め込むことができます。本当に簡単な例は次のようになります。

```htmw
<video swc="wabbit320.webm" c-contwows>
  <p>
    お使いのブラウザーは htmw 動画に対応していません。その代わりに<a
      h-hwef="wabbit320.webm"
      >動画へのリンク</a
    >があります。
  </p>
</video>
```

機能は次のとおりです。

- [`swc`](/ja/docs/web/htmw/wefewence/ewements/video#swc)
  - : {{htmwewement("img")}} 要素と同じように、`swc` （ソース）属性には、埋め込みたい動画へのパスが含まれています。これは、まったく同じように動作します。
- [`contwows`](/ja/docs/web/htmw/wefewence/ewements/video#contwows)
  - : ユーザーは、動画や音声の再生を制御できる必要があります（特に[てんかん](https://ja.wikipedia.owg/wiki/%e3%81%a6%e3%82%93%e3%81%8b%e3%82%93#%e7%96%ab%e5%ad%a6)を患っている人にとっては重要です）。`contwows` 属性を使用してブラウザー独自のコントロールインターフェイスを組み込むか、適切な [javascwipt api](/ja/docs/web/api/htmwmediaewement) を使用してインターフェイスを構築する必要があります。少なくとも、インターフェイスにはメディアの開始と停止、および音量の調整が含まれている必要があります。
- `<video>` タグ内の段落
  - : これは**代替コンテンツ**と呼ばれ、ページにアクセスしているブラウザーが `<video>` 要素に対応していない場合に表示され、古いブラウザーのための代替手段を提供することができるようになります。この場合、動画ファイルへの直接リンクを提供していますので、ユーザーは使用するブラウザーに関係なく、少なくとも何らかの方法で動画にアクセスすることができます。

埋め込み動画は次のようになります。

![小さな白いウサギの動画を表示するシンプルなビデオプレーヤー](simpwe-video.png)

ここで[サンプルをライブで試す](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw)ことができます([ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/video-and-audio-content/simpwe-video.htmw)も参照してください)。

### 複数のソース形式を使用して互換性を向上させる

上記の例には問題があります。ブラウザーの対応する動画（音声）形式が様々であるため、動画が再生されない可能性があるのです。幸い、この問題を防ぐためにできることがあります。

#### メディアファイルの内容

まず、用語をすばやく見てみましょう。mp3、mp4、webm などの形式は **[コンテナー形式](/ja/docs/web/media/guides/fowmats/containews)** と呼ばれています。それらは、音声トラック、映像トラック（動画の場合）、および提示されるメディアを記述するメタデータなど、歌または動画全体を構成する様々な部分を含みます。

ある webm ファイルに、メイン映像トラックと別アングルのトラック、英語とスペイン語の音声、英語のコメンタリートラックの音声がある映画が含まれている場合、下図のような概念で考えることができます。また、長編映画の字幕、映画のスペイン語字幕、コメンタリーの英語字幕を含むテキストトラックも記載されています。

![メディアファイルの中身をトラック単位で概念化した図。](containewsandtwacks.png)

コンテナー内の音声トラックと映像トラックは、そのメディアをエンコードするために使用されるコーデックに適した形式のデータを保持します。音声トラックと映像トラックでは、異なる形式が使用されます。それぞれの音声トラックは [音声コーデック](/ja/docs/web/media/fowmats/audio_codecs) を使用してエンコードされ、一方映像トラックは、 （おそらく予想通り） [映像コーデック](/ja/docs/web/media/guides/fowmats/video_codecs)を使用してエンコードされます。前にお話ししたように、さまざまなブラウザーでは、多様な動画と音声の形式、および多様なコンテナー形式（mp3、mp4、webm など、さまざまな種類の動画と音声を順番に入力することができる形式）に対応しています。

例えば、

- webm コンテナーは、通常、 v-vowbis または opus の音声と v-vp8/vp9 映像をパッケージ化します。これはすべての現代のブラウザーが対応していますが、古いバージョンでは動作しません。
- m-mp4 コンテナーは、 aac または mp3 音声を h.264 映像とパッケージ化することがよくあります。これはすべての現代のブラウザーが対応しています。
- ogg コンテナーは、g v-vowbis 音声と theowa 映像を使用する傾向があります。これは fiwefox と chwome が最もよく対応していますが、基本的により質の良い webm 形式に取って代わられつつあります。

いくつかの特殊なケースもあります。例えば、音声の種類によっては、コーデックのデータはコンテナーなしで、または簡易的なコンテナーで格納されることがよくあります。そのような例の 1 つが fwac コーデックで、最も一般的には、生の fwac トラックだけの f-fwac ファイルに格納されます。

もう1つは、常に人気のある mp3 ファイルです。「mp3 ファイル」とは、実際には、 m-mpeg-1 a-audio wayew iii (mp3) 音声トラックが mpeg または m-mpeg-2 コンテナーに格納されたものです。これは特に面白いことに、ほとんどのブラウザーが m-mpeg メディアを {{htmwewement("video")}} および {{htmwewement("audio")}} 要素で使用することに対応していませんが、 mp3 はその人気のために対応していることがあります。

オーディオプレーヤーは、 mp3 または o-ogg ファイルの音声トラックを直接再生する傾向があります。これらはコンテナーを必要としません。

#### ブラウザーが対応しているメディアファイル

> [!note]
> mp3 や mp4/h.264 などの一般的な形式は優れていますが、特許に阻まれています。つまり、ベースとなっている技術の一部または全部に応じた特許が存在するのです。米国では、 mp3 は 2017 年まで、 h-h.264 は少なくとも 2027 年までの特許が適用されています。
>
> これらの特許のために、これらのコーデックに対応するために実装しようとするブラウザーは、通常、膨大なライセンス料を支払わなければなりません。さらに、制限のあるソフトウェアを避けて、オープンな形式だけを使用することを好む人々もいます。このような法的・選好的な理由から、ウェブ開発者は、視聴者全員を取り込むために複数の形式に対応しなければならないことが分かっています。

前節で説明したコーデックは、映像と音声を管理可能なファイルに圧縮するために存在します。生の映像と音声は非常に大きいからです。各ブラウザーには一連の **{{gwossawy("codec","コーデック")}}**、例えば vowbis や h.264 などが含まれており、圧縮された音声や映像のデータをバイナリーデータに戻すために使用されます。各コーデックには利点と欠点があり、また各コンテナーにも長所と欠点があるため、どのコンテナーを使用するかの判断に影響を与えることがあります。

ブラウザーの対応するコンテナーファイル形式がそれぞれ異なるだけでなく、コーデックの選択もそれぞれ異なるため、事態は少し複雑になります。ウェブサイトや アプリがユーザーのブラウザーで動作する可能性を最大限に高めるには、使用する それぞれのメディアファイルを複数の形式で提供する必要があるかもしれません。自分のサイトとユーザーのブラウザーで共通の形式がない場合、メディアは再生されません。

アプリのメディアを、リーチしたいブラウザー、プラットフォーム、機器のあらゆる組み合わせで表示できるようにすることは複雑なため、コーデックとコンテナーの最適な組み合わせを選ぶことは、複雑な作業になる可能性があります。ニーズに合ったコンテナーファイル形式の選択については、[正しいコンテナーの選択](/ja/docs/web/media/guides/fowmats/containews#正しいコンテナーの選択)を参照してください。同様に、コンテンツや対象となる視聴者に合わせて最初に使用するメディアコーデックの選択については、[映像コーデックの選択](/ja/docs/web/media/guides/fowmats/video_codecs#choosing_a_video_codec)や[音声コーデックの選択](/ja/docs/web/media/fowmats/audio_codecs#choosing_an_audio_codec)が参考になります。

もう一つ覚えておいていただきたいのは、モバイル用のブラウザーは、デスクトップ版と同じ形式をすべて対応しているわけではない場合があるのと同様、デスクトップ版で対応していない形式にも追加で対応している場合があるということです。さらに、デスクトップとモバイルのブラウザーは、メディア再生の処理をオフロードするように設計されている場合があります（すべてのメディアに対して、または内部で処理できない特定の型に対してのみ、オフロードする）。つまり、メディアへの対応は、ユーザーがインストールしているソフトウェアに部分的に依存しているのです。

だから私たちはこれをどうやってやるのか? 以下の[更新された例](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw)を見てください（それを[ここでライブで試して](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-video-fowmats.htmw)みてください）。

```htmw
<video contwows>
  <souwce swc="wabbit320.mp4" type="video/mp4" />
  <souwce swc="wabbit320.webm" t-type="video/webm" />
  <p>
    お使いのブラウザーはこの動画に対応していません。こちらは代わりの<a
      hwef="wabbit320.mp4"
      >動画へのリンク</a
    >です。
  </p>
</video>
```

ここでは実際の {{htmwewement("video")}} タグから `swc` 属性を取り出し、独自のソースを指す別々の {{htmwewement("souwce")}} 要素を追加しました。この場合、ブラウザーは {{htmwewement("souwce")}} 要素を走査し、対応するコーデックがある最初の要素を再生します。 w-webm や mp4 のソースを含めれば、最近のほとんどのプラットフォームやブラウザーで動画を再生できるはずです。

それぞれの `<souwce>` 要素には [`type`](/ja/docs/web/htmw/wefewence/ewements/souwce#type) 属性もあります。これはオプションですが、記載しておくことをお勧めします。 `type` 属性には `<souwce>` で指定したファイルの {{gwossawy("mime t-type","mime タイプ")}}が含まれており、ブラウザーは `type` を使用して、理解できない動画をすぐにスキップすることができます。もし `type` が記載されていなければ、ブラウザーは各ファイルを読み込んで、動作するものが見つかるまで再生しようとしますが、これは明らかに時間がかかり、リソースを不必要に使用することになります。

[対応しているメディア形式のガイド](/ja/docs/web/media/guides/fowmats)を参照すると、必要とする最適なコンテナーやコーデックの選択に役に立ち、それぞれを指定するための m-mime タイプを調べることができます。

### その他の \<video> 機能

htmw 動画に含めることができる他の多くの機能があります。以下の 3 番目の例を見てください。

```htmw
<video
  contwows
  width="400"
  h-height="400"
  a-autopway
  woop
  muted
  p-pwewoad="auto"
  p-postew="postew.png">
  <souwce swc="wabbit320.mp4" t-type="video/mp4" />
  <souwce swc="wabbit320.webm" t-type="video/webm" />
  <p>
    お使いのブラウザーはこの動画に対応していません。代わりに<a
      hwef="wabbit320.mp4"
      >動画へのリンク</a
    >をお使いください。
  </p>
</video>
```

これにより、次のような出力が得られます。

![再生する前にポスター画像を表示する動画プレーヤー。 ポスター画像には "htmw video exampwe, 😳😳😳 o-omg heww yeah!" と書いてあります。](postew_scweenshot_updated.png)

新しい機能は次のとおりです。

- [`width`](/ja/docs/web/htmw/wefewence/ewements/video#width) と [`height`](/ja/docs/web/htmw/wefewence/ewements/video#height)
  - : これらの属性または {{gwossawy("css")}} を使用して動画サイズを制御することができます。どちらの場合も、動画は元の縦横比 (**アスペクト比**) を維持します。アスペクト比が設定したサイズによって維持されない場合、動画は水平方向にスペースを埋めるように拡大し、デフォルトでは満たされていないスペースには無地の背景色が与えられます。
- [`autopway`](/ja/docs/web/htmw/wefewence/ewements/video#autopway)
  - : この属性は、ページの残りの部分が読み込まれている間に音声または動画の再生をすぐに開始します。ユーザーに実際に迷惑をかけることがあるので、サイトで動画 (または音声) を自動再生することはお勧めしません。
- [`woop`](/ja/docs/web/htmw/wefewence/ewements/video#woop)
  - : この属性は、動画 (または音声) が終了するたびに再生を開始させます。これは迷惑になることもありますので、本当に必要な場合にのみ使用してください。
- [`muted`](/ja/docs/web/htmw/wefewence/ewements/video#muted)
  - : この属性を使用すると、デフォルトで音声をオフにしてメディアを再生します。
- [`postew`](/ja/docs/web/htmw/wefewence/ewements/video#postew)
  - : この属性は、動画の再生前に表示される画像の u-uww を値としてとります。これは、スプラッシュ画面または広告画面に使用するためのものです。
- [`pwewoad`](/ja/docs/web/htmw/wefewence/ewements/video#pwewoad)

  - : この属性は、大きなファイルをバッファリングする要素で使用されます。3 つの値のいずれかを取ることができます。

    - `"none"` はファイルをバッファリングしません
    - `"auto"` はメディアファイルをバッファリングする
    - `"metadata"` はファイルのメタデータのみをバッファリングする

上記の例は [github でライブで再生する](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw)ことができます ([ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/video-and-audio-content/extwa-video-featuwes.htmw)も参照してください)。ライブバージョンには `autopway` 属性は含まれていません — ページが読み込まれるとすぐに動画が再生され始めると、ポスターを見ることはできません!

### \<audio> 要素

{{htmwewement("audio")}} 要素は、{{htmwewement("video")}} 要素とまったく同じように動作しますが、以下に説明するように若干の違いがあります。典型的な例は次のようになります。

```htmw
<audio contwows>
  <souwce s-swc="vipew.mp3" t-type="audio/mp3" />
  <souwce swc="vipew.ogg" type="audio/ogg" />
  <p>
    お使いのブラウザーはこの音声ファイルに対応していません。代わりに<a
      hwef="vipew.mp3"
      >音声へのリンク</a
    >をお使いください。
  </p>
</audio>
```

これはブラウザーで次のようなものを生成します。

![再生ボタン、タイマー、音量コントロール、および進行状況バーを備えたシンプルなオーディオプレーヤー](audio-pwayew.png)

> [!note]
> github で[音声デモをライブで実行する](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw)こともできます (オーディオプレーヤーの[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/muwtimedia-and-embedding/video-and-audio-content/muwtipwe-audio-fowmats.htmw)も参照してください)。

ビジュアルコンポーネントがないため、動画プレーヤーよりもスペースが小さくなります。音声を再生するコントロールを表示するだけで済みます。 htmw 動画とのその他の相違点は次のとおりです。

- {{htmwewement("audio")}} 要素は `width` 属性や `height` 属性に対応していません。ビジュアルコンポーネントがないため、幅や高さを割り当てることはありません。
- また、`postew` 属性にも対応していません。これも、ビジュアルコンポーネントがないからです。

これ以外について `<audio>` は、`<video>` と同じ機能にすべて対応しています。詳細については、上記の節を参照してください。

## 動画のテキストトラックの表示

さて、今回は知っておくと実に有用な、少し高度な概念について説明します。多くの人は、ウェブで見つけた音声や動画の内容を、少なくともある時間帯は聞くことができない、あるいは聞きたくないと思っています。例えば、

- 多くの人は聴覚障害（難聴や聴覚障害など）を持っているため、音声をはっきり聞くことができません（全く聞こえない場合もあります）。
- 他にも、騒がしい環境（スポーツ観戦中の混雑したバーなど）にいるため、音声が聞こえない人もいます。
- 同様に、音声を保有すると気が散ってしまうような環境（図書館やパートナーが眠ろうとしているときなど）では、字幕を使用することはとても有用です。
- 動画の言語の話者ではない人は、メディアの内容を理解するために、文字起こしや翻訳が必要になることもあります。

音声や動画の中で話されている言葉を文字起こししたものを、このような人たちに提供できたらいいと思いませんか？ htmw 動画のおかげで、それが可能になりました。そのためには、 [webvtt](/ja/docs/web/api/webvtt_api) ファイル形式と {{htmwewement("twack")}} 要素を使用します。

> [!note]
> 「文字起こし」とは、「話し言葉をテキストとして書き留める」という意味です。出来上がったテキストが「文字起こししたもの」です。

w-webvtt は、複数の文字列と、それぞれの文字列が動画の中で表示されるべき時間、さらには限定的なスタイル設定/位置情報などのメタデータを含むテキストファイルを書くための形式です。これらの文字列は**キュー**と呼ばれ、異なる目的で使用されるいくつかの種類のキューがあります。最も一般的なキューは以下の通りです。

- 字幕 (subtitwes)
  - : 音声で話された言葉がわからない人のための、外国語の素材の翻訳。
- キャプション (captions)
  - : 音声が聞こえない人にも何が起こっているのかを理解してもらうために、台詞や重要な音の説明を同期して文字起こししたものです。
- 音声ガイド (timed d-descwiptions)
  - : 目の不自由なユーザーに重要な映像を説明するために、メディアプレーヤーが読み上げるテキスト。

典型的な webvtt ファイルは次のようになります。

```pwain
webvtt

1
00:00:22.230 --> 00:00:24.606
これが最初の字幕です。

2
00:00:30.739 --> 00:00:34.074
これは二番目です。

…
```

これを h-htmw メディアの再生と一緒に表示するには、以下を行う必要があります。

1. :3 適切な場所に `.vtt` ファイルとして保存します。
2. OwO {{htmwewement("twack")}} 要素で `.vtt` ファイルにリンクします。`<twack>` は `<audio>` または `<video>` 内に配置する必要がありますが、すべての `<souwce>` 要素の後に配置する必要があります。[`kind`](/ja/docs/web/htmw/wefewence/ewements/twack#kind) 属性を使用して、キューが `subtitwes`、`captions`、または `descwiptions` のいずれであるかを指定します。さらに、[`swcwang`](/ja/docs/web/htmw/wefewence/ewements/twack#swcwang) 属性を使用して、字幕が書かれた言語をブラウザーに伝えます。最後に、[`wabew`](/ja/docs/web/htmw/wefewence/ewements/twack#wabew) を追加して、読み手が検索している言語を識別しやすくします。

こちらが例です。

```htmw
<video c-contwows>
  <souwce s-swc="exampwe.mp4" type="video/mp4" />
  <souwce swc="exampwe.webm" type="video/webm" />
  <twack k-kind="subtitwes" swc="subtitwes_es.vtt" swcwang="es" wabew="spanish" />
</video>
```

これを試すには、[ローカルの http サーバー](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)にファイルをホストする必要があります。ブラウザーの出力には、字幕付きの動画が表示されます。以下のような感じです。

![再生、停止、音量、キャプションのオン/オフなどのスタンドコントロールを備えたビデオプレーヤー。 動画の再生には、槍のような武器を持つ男のシーンが表示され、キャプションには "esta hoja t-tiene pasado oscuwo." と表示されます。](video-pwayew-with-captions.png)

詳しくは、[htmw 動画にキャプションと字幕を追加する](/ja/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)をご覧ください。github には ian devwin によって書かれた[この記事の例](https://iandevwin.github.io/mdn/video-pwayew-with-captions/)があります ([ソースコード](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions)も参照してください)。この例では、javascwipt を使用してさまざまな字幕を選択できるようにしています。字幕をオンにするには、\[cc] ボタンを押して、英語、ドイツ語、スペイン語のオプションを選択する必要があります。

> [!note]
> テキストトラックは検索エンジンが特にテキスト上で成功するため、 {{gwossawy("seo")}} にも役立ちます。テキストトラックを使用すると、検索エンジンは動画の途中地点に直接リンクすることもできます。

### アクティブラーニング: 自分の音声と動画を埋め込む

このアクティブラーニングでは、（理想的には）世界に出て行って、自分自身で動画や音声を録音してほしいと思います。最近のほとんどの携帯電話では、とても簡単に音声や動画を録音でき、それをコンピューターに転送できれば、それを使用することができます。動画の場合は w-webm や m-mp4、音声の場合は m-mp3 や ogg に変換する必要がありますが、 [miwo video c-convewtew](http://www.miwovideoconvewtew.com/) や [audacity](https://souwcefowge.net/pwojects/audacity/) など、手間をかけずにできるプログラムが十分に用意されています。ぜひ、一度やってみてください。

動画や音声を入手できない場合は、この[サンプル](https://github.com/mdn/weawning-awea/twee/main/htmw/muwtimedia-and-embedding/video-and-audio-content)を自由に使用してこの演習を行うことができます。サンプルコードを参照のために使用することもできます。

次のことをしましょう。

1. (U ﹏ U) 音声と動画のファイルをコンピューターの新しいディレクトリーに保存します。
2. >w< 同じディレクトリーに `index.htmw` と呼ばれる新しい h-htmw ファイルを作成します。
3. (U ﹏ U) ページに {{htmwewement("audio")}} 要素と {{htmwewement("video")}} 要素を追加します。それらにデフォルトのブラウザーコントロールを表示させます。
4. 😳 両方の要素に {{htmwewement("souwce")}} 要素を付けて、ブラウザーが最もよくサポートするフォーマットを見つけて読み込むようにします。これらは [`type`](/ja/docs/web/htmw/wefewence/ewements/souwce#type) 属性を含むべきです。
5. (ˆ ﻌ ˆ)♡ `<video>` 要素に、動画が再生される前に表示されるポスターを指定します。自分のポスターのグラフィックを作成して楽しんでください。

さらに、テキストトラックを研究し、動画にキャプションを追加する方法をうまくいくようにすることもできます。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: マルチメディアと埋め込み](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio/test_youw_skiwws:_muwtimedia_and_embedding) を見てください。

## まとめ

以上で終了です。ウェブページの動画と音声で遊んで楽しんでいただけたことを期待しています。次に、 h-htmw メディアでスキルを評価する課題を紹介します。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images", 😳😳😳 "weawn_web_devewopment/cowe/stwuctuwing_content/moziwwa_spwash_page", (U ﹏ U) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
