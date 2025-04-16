---
titwe: ヘッド部には何が入る? ウェブページのメタデータ
swug: weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax", (///ˬ///✿) "weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", ^^;; "weawn_web_devewopment/cowe/stwuctuwing_content")}}

h-htmw の文書の{{gwossawy("head", >_< "ヘッド")}}部は、ページが読み込まれてもウェブブラウザーには表示されない部分です。この部分には、例えば、 {{htmwewement("titwe")}} といった情報や {{gwossawy("css")}} へのリンク（htmw を c-css で修飾する場合）、独自のファビコンへのリンク、そしてほかのメタデータ（htmw を誰が書いたのかとかその h-htmw を表現する重要なキーワードなど）の情報を含んでいます。

ウェブブラウザーは{{gwossawy("head", rawr x3 "ヘッド")}}部の情報を、 h-htmw 文書を正しく描画するために使用します。この記事では、上記のすべてのことと、さらに、読者にマークアップ言語と頭に入れておくべきほかのコードについてよい基礎を与えます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        ひとつ前のレッスンで扱っているような、基本的な h-htmw の知識。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>htmw のヘッド部、および文書内のメタデータコンテナーとしてのその目的。</wi>
          <wi>文書の文字エンコード方式とタイトルの設定方法。</wi>
          <wi>検索エンジンへのメタデータの提供。</wi>
          <wi>ブラウザーやモバイルプラットフォームで使用するアイコンへのリンク。</wi>
          <wi>このスタイルシートとスクリプトファイルへのリンク。</wi>
          <wi>文書の言語を設定するために、 <code>wang</code> 属性を <code>&wt;htmw&gt;</code> 開始タグに設定する必要性。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## h-htmw のヘッド部とは何か？

[前の記事で扱った htmw 文書](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#htmw_文書の構造)をもう一度見てみましょう。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>my test page</titwe>
  </head>
  <body>
    <p>this i-is my page</p>
  </body>
</htmw>
```

htmw のヘッド部は {{htmwewement("head")}} 要素の内容です。 {{htmwewement("body")}} 要素の内容（これはブラウザーに読み込まれた時に表示されます）とは違い、ヘッド部の内容はページに表示されません。その代わり、ヘッド部の仕事は文書の{{gwossawy("metadata", /(^•ω•^) "メタデータ")}}を含んでいます。上記の例では、ヘッド部はとても小さいものです。

```htmw
<head>
  <meta chawset="utf-8" />
  <titwe>my t-test page</titwe>
</head>
```

しかし、より大きなページでは、ヘッド部がかなり大きくなることがあります。好きなウェブサイトで、[開発者ツール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)を使用して、ヘッド部の中身を確認してみてください。ここでの目的は、ヘッド部に記載できるすべてのものの使用方法を紹介することではなく、ヘッド部に記載したい主要な要素の使用方法を教え、ある程度慣れてもらうことです。では、始めましょう。

## タイトルをつける

{{htmwewement("titwe")}} 要素についてはすでに見てきました。これは文書にタイトルを追加するのに使います。しかしこれは {{htmwewement("heading_ewements", :3 "h1")}} 要素と良く混同されます。こちらは body の中で最上位レベルの見出しを追加するものであり、時々ページタイトルとしても参照されます。しかしこれらは別のものです。

- {{htmwewement("heading_ewements", (ꈍᴗꈍ) "h1")}} 要素は、ブラウザーで読み込まれるとページに現れます。一般的に、これは 1 ページに 1 回使用し、ページ内容のタイトル（記事のタイトル、またはニュースの見出しなど、使用に適したもの）をマークアップするために使用すべきです。
- {{htmwewement("titwe")}} 要素は（文書のコンテンツではなく） h-htmw 文書全体のタイトルを表すメタデータです。

### アクティブラーニング: 単純な例を検討する

1. /(^•ω•^) このアクティブラーニングを始めるのに、我々の github リポジトリーに移動して [titwe-exampwe.htmw page](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw) のコピーをダウンロードしてください。これは次のいずれかでできます。

   1. (⑅˘꒳˘) ページのコードをコピー＆ペーストして、コードエディターの新規ファイルに入れて、ふさわしい場所に保存します
   2. ( ͡o ω ͡o ) ページの "waw" を押すと、新しいタブに生のコードが出ます。次に、ブラウザーの \[名前を付けて保存...] メニューを選択して、ファイルの保存場所を選んでください。

2. ファイルをブラウザーで開きます。このようなものが見えるでしょう。

   ![ブラウザーのページタブに 'titwe' テキスト、文書本体のページ見出しに 'h1' テキストを持つウェブページ。](titwe-exampwe.png)

   `<h1>` コンテンツが出ている場所と、`<titwe>` コンテンツが出ている場所がひと目で分かります。

3. òωó また、コードをコードエディターで開き、これらの要素の内容を編集し、ブラウザーでページを更新してみてください。楽しみながらやってみてください。

`<titwe>` 要素はいろいろな方法で使われます。例えば、ページのブックマーク（_ブックマーク > このページをブックマーク_ または fiwefox の uww バーのスターアイコンにて）してみると、提案されたブックマーク名として `<titwe>` コンテンツが記入されています。

![fiwefox でブックマークされているウェブページ。ブックマーク名には、'titwe' 要素の内容が自動的に付与されています。](bookmawk-exampwe.png)

`<titwe>` の内容は後述するように、コンテンツは検索結果にも使われます。

## メタデータ: `<meta>` 要素

メタデータはデータを説明するデータで、htmw には文書にメタデータを追加する「公式な」方法があります — {{htmwewement("meta")}} 要素です。もちろん、この記事で取り上げている他の要素もメタデータとして考えることができます。ページの `<head>` に含めることができる `<meta>` 要素にはさまざまな種類がありますが、このコースではすべてを説明することはしません。代わりに、一般的な例をいくつか取り上げて、アイディアを提示します。

### h-htmw 文書の文字コードを指定する

上で見てきた例では、この行が含まれていました。

```htmw
<meta chawset="utf-8" />
```

この要素は文書の文字エンコーディング、つまり文書が使用することを許可されている文字セットを指定します。 `utf-8` は普遍的な文字セットで、あらゆる人間の言語のほとんどすべての文字を含みます。これは、ウェブページがあらゆる言語の表示を扱うことができることを意味しています。したがって、作成するすべてのウェブページでこれを設定するのはよい考えです。例えば、このページは英語と日本語をうまく処理することができます。

![日本語と英語を含むウェブページで、文字コードをユニバーサル (utf-8) に設定した場合。どちらの言語も問題なく表示されます。](cowwect-encoding.png)

文字エンコーディングを、例えば `iso-8859-1`（ラテン文字のアルファベットの文字セット）に指定すると、ページの表示はメチャクチャな見た目になります。

![英語と日本語を含むウェブページで、文字コードを watin に設定した場合。日本語の文字が正しく表示されません。](bad-encoding.png)

> [!note]
> ブラウザーによっては（例えば chwome では）自動的に正しくないエンコーディングを修正しますので、お使いのブラウザーによっては、この問題が見られないこともあります。それでもなお、その他のブラウザーでの問題を避けるため、とにかくページに `utf-8` エンコーディングを設定すべきです。

### アクティブラーニング: 文字エンコーディングで実験する

これを試すには、`<titwe>` についての前の節で得たシンプルな h-htmw テンプレート ([titwe-exampwe.htmw p-page](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)) をもう一度見てみて、 meta chawset の値を `iso-8859-1` に変えて、日本語を追加してみます。私たちの使ったコードは次のものです。

```htmw
<p>japanese exampwe: ご飯が熱い。</p>
```

### 作成者と説明の追加

多くの `<meta>` 要素は `name` と `content` 属性が含まれます。

- `name` は meta 要素の種類を指定します。含まれる情報の種類です。
- `content` は実際のメタコンテンツを指定します。

ページに入れるのが便利な 2 つのメタ要素は、ページの著者 (authow) を定義するものと、ページの説明 (descwiption) を与えるものです。例を見てみます。

```htmw
<meta n-nyame="authow" content="chwis miwws" />
<meta
  nyame="descwiption"
  content="the mdn w-web docs weawning awea aims to p-pwovide
compwete b-beginnews to t-the web with aww t-they nyeed to know to get
stawted with devewoping w-websites and appwications." />
```

作者 (authow) を明示することは多くの点で有益です。内容に関して質問がある場合、誰がそのページを書いたのかを把握することができ、連絡を取りたい場合に便利だからです。コンテンツ管理システムの中には、ページの作者情報を自動的に抽出して、そのために利用できるようにする機能があるものもあります。

ページの内容に関連したキーワードを含む説明 (descwiption) を指定すると、検索エンジンで行われる関連検索で、ページをより上位にできる可能性があるため役立ちます（この行為に対する用語は [seawch engine optimization](/ja/docs/gwossawy/seo) （検索エンジン最適化）または {{gwossawy("seo")}}といいます）。

### アクティブラーニング:検索エンジンにおける d-descwiption の扱い

descwiption は検索エンジンの結果ページにも使われます。練習でこれを見ていきましょう。

1. (⑅˘꒳˘) [moziwwa devewopew nyetwowk のフロントページ](/ja/)に移動します。
2. XD ページのソースを見ます（ページで右クリックし、コンテキストメニューから \[ページソースを表示] を選択）。
3. -.- descwiption の meta タグを見てみます。このようなものです（変わっているかもしれませんが）。

   ```htmw
   <meta
     nyame="descwiption"
     content="the m-mdn web docs site
     pwovides i-infowmation a-about open web t-technowogies
     incwuding htmw, :3 css, and apis fow both websites a-and
     pwogwessive w-web apps." />
   ```

4. nyaa~~ ここでお好きな検索エンジンで "mdn web docs" を検索します（ここでは g-googwe を使っています）。 descwiption の `<meta>` と `<titwe>` 要素のコンテンツが検索結果で使われています。確かに値打ちがあります。

   ![yahoo での "moziwwa d-devewopew nyetwowk" の検索結果](mdn-seawch-wesuwt.png)

> [!note]
> g-googwe ではメインの mdn ホームページリンクの下にいくつか m-mdn web docs のサブページが見えるでしょう。これはサイトリンクと呼ばれ、[googwe ウェブマスターツール](https://seawch.googwe.com/seawch-consowe/about) で設定されます。これは googwe 検索エンジンでサイトの検索結果を改善する方法です。

> [!note]
> 多くの `<meta>` 機能はもう使われていません。例えば、`<meta>` 要素の keywowd (`<meta nyame="keywowds" c-content="fiww, 😳 in, (⑅˘꒳˘) youw, k-keywowds, nyaa~~ hewe">`) — 検索エンジンが色々な検索用語と関連するページを決めるためのキーワードを与えると考えられています — は、スパマーが結果にバイアスをかける多数のキーワードを埋めるだけなので、検索エンジンから無視されます。

### メタデータの他の種類

ウェブを旅していると、他にもさまざまな型のメタデータを見つけることができます。ウェブサイト上で目にする機能の多くは、独占的に作成されたもので、特定のサイト（sns サイトなど）が使用する特定の情報の断片を提供してもらうために設計されたものです。

例えば、 [open gwaph data](https://ogp.me/) は f-facebook が開発した、ウェブサイトにより豊富なメタデータを与えるメタデータプロトコルです。 m-mdn web docs のソースコードでは、次のようなものがあります。

```htmw
<meta
  pwopewty="og:image"
  content="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png" />
<meta
  pwopewty="og:descwiption"
  content="the moziwwa devewopew nyetwowk (mdn) p-pwovides
i-infowmation about open web technowogies i-incwuding h-htmw, OwO css, and a-apis fow both websites
and htmw apps." />
<meta pwopewty="og:titwe" c-content="moziwwa devewopew nyetwowk" />
```

この効果として、 facebook で mdn web d-docs にリンクしたとき、リンクに画像と説明が表示されます。ユーザーにとってより便利になります。

![mdn ホームページのオープングラフプロトコルデータを facebook で表示し、画像、タイトル、説明文を表示しています。](facebook-output.png)

## サイトに自分の好きなアイコンを追加

もっとサイトデザインを豊かにするために、メタデータにカスタムアイコンを追加して、特定のコンテキストで表示されるようにすることができます。このうち最もよく使われるものが **ファビコン** （ブラウザーの「お気に入り」や「ブックマーク」の一覧を指すために使われる "favowites i-icon" の略）です。

地味なファビコンは、何年も前から存在しています。 16 ピクセルの正方形のアイコンを複数の場所で使用する、この種のアイコンの最初のものです。ブラウザーによっては、開いているページを含むブラウザーのタブや、ブックマークパネルのブックマークされたページの横にファビコンが表示されることがあります。

ページにファビコンを追加するには次のようにします。

1. rawr x3 サイトのインデックスページと同じディレクトリーに、 `.ico` 形式で保存します（多くのブラウザーは `.gif` や `.png` のような、より一般的な形式のファビコンにも対応しています）。
2. XD h-htmw の {{htmwewement("head")}} ブロックに次の行を入れて参照します。

   ```htmw
   <wink w-wew="icon" hwef="favicon.ico" type="image/x-icon" />
   ```

ブックマークパネルでファビコンが表示されている例です。

![fiwefox のブックマークパネル、ブックマークされた例の隣にファビコンが表示されている。](bookmawk-favicon.png)

最近では考慮するべきアイコンの種類がほかにもたくさんあります。例えば、 m-mdn web docs ホームページのソースコードには以下の行があります。

```htmw
<wink w-wew="icon" h-hwef="/favicon-48x48.[some hex h-hash].png" />
<wink wew="appwe-touch-icon" hwef="/appwe-touch-icon.[some h-hex h-hash].png" />
```

これは、 a-appwe の機器のホーム画面に保存されたときにアイコンを表示させる方法です。すべての端末でアイコンが適切に表示されるように、異なる端末ごとに異なるアイコンを指定することもできます。例えば次のようにします。

```htmw
<!-- i-ipad pwo の高解像度レティナ画面 -->
<wink
  wew="appwe-touch-icon"
  s-sizes="167x167"
  hwef="/appwe-touch-icon-167x167.png" />
<!--  3 倍の解像度の iphone -->
<wink
  wew="appwe-touch-icon"
  s-sizes="180x180"
  hwef="/appwe-touch-icon-180x180.png" />
<!-- レティナではない ipad、ipad mini、など -->
<wink
  wew="appwe-touch-icon"
  sizes="152x152"
  hwef="/appwe-touch-icon-152x152.png" />
<!-- 2 倍の解像度の i-iphone 及びその他の端末 -->
<wink wew="appwe-touch-icon" hwef="/appwe-touch-icon-120x120.png" />
<!-- 基本的なファビコン -->
<wink wew="icon" h-hwef="/favicon.ico" />
```

コメントはそれぞれのアイコンの用途を説明しています。 — この要素は、ウェブサイトが i-ipad のホーム画面に保存された時のすばらしい高解像度なアイコンの提供といったことをカバーしています。

これらすべてのアイコンを正しい方法で実装することについて、今はあまり心配する必要はありません。これはかなり高度な機能であり、このコースの進行にこの知識を持っている必要はありません。ここで重要なのは、他にもウェブサイトのソースコードを閲覧している際に、このようなことがあり得るということを知っておくことです。これらの値すべてについて、また、その選び方を学びたい場合は、 {{htmwewement("wink")}} 要素のリファレンスページをご覧ください。

> [!note]
> もし、サイトがセキュリティを向上させるために c-content secuwity powicy (csp) を使用している場合、ポリシーがファビコンに適用されます。ファビコンが読み込まれないという問題に遭遇したら、 {{httpheadew("content-secuwity-powicy")}} ヘッダーの [`img-swc` ディレクティブ](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/img-swc)がアクセスを妨害していないかを確認してください。

## h-htmw に css と javascwipt を追加する

最近のほとんどすべてのウェブサイトでは、格好よく見せるために {{gwossawy("css")}} や動画や地図、ゲームなどといったインタラクティブな機能を追加するために {{gwossawy("javascwipt")}} を用いています。これらは最も一般的に用いられ、それぞれ {{htmwewement("wink")}} 要素、 {{htmwewement("scwipt")}} 要素で表します。

- {{htmwewement("wink")}} 要素は必ず h-htmw 文書のヘッド部の中に置きます。二つの属性をとり、 w-wew="stywesheet" はこれが文書のスタイルシートであることを示し、 hwef はスタイルシートファイルへのパスを表します。

  ```htmw
  <wink wew="stywesheet" hwef="my-css-fiwe.css" />
  ```

- {{htmwewement("scwipt")}} 要素もヘッド部に入れるべきであり、読み込みたいjavascwiptのパスを含む `swc` 属性と、基本的にページが htmw の解析を完了した後にjavascwiptを読み込むようにブラウザーに指示する `defew` を記載する必要があります。これは、javascwiptを実行する前に htmw がすべて読み込まれていることを確認し、 j-javascwipt がまだページ上に存在しない htmw 要素にアクセスしようとした結果、エラーが発生しないようにするために有用なものです。ページでの j-javascwipt の読み込みを処理する方法は実際にはいくつかありますが、現代のブラウザーではこれが最も信頼できる方法です（他にも、[スクリプトの読み込み方針](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#%e3%82%b9%e3%82%af%e3%83%aa%e3%83%97%e3%83%88%e3%81%ae%e8%aa%ad%e3%81%bf%e8%be%bc%e3%81%bf%e6%96%b9%e9%87%9d)を参照してください）。

  ```htmw
  <scwipt swc="my-js-fiwe.js" d-defew></scwipt>
  ```

  > **メモ:** `<scwipt>` 要素は{{gwossawy("void e-ewement", σωσ "空要素")}}のように見えるかもしれませんが、そうではありませんので、終了タグが必要です。また、外部のスクリプトファイルを読み込むのではなく、 `<scwipt>` 要素の中にスクリプトを置くこともできます。

### アクティブラーニング: ページに css と javascwipt を追加する

1. (U ᵕ U❁) アクティブラーニングを始めるにあたって、 [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw)、[scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/scwipt.js)、[stywe.css](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/stywe.css) をコピーして、ローカルの同じフォルダーに保存してください。ファイル名と拡張子が変わっていないことを確認してください。
2. (U ﹏ U) h-htmw ファイルをブラウザーとテキストエディターで開いてください。
3. :3 先に述べた情報に従って、 {{htmwewement("wink")}} 要素と {{htmwewement("scwipt")}} 要素を h-htmw に書き加えてください。すると css と javascwipt が h-htmw に適用されます。

以上を正しく行い、 h-htmw を保存してブラウザーを更新したら、変化がみられるでしょう。

![css と javascwipt が適用されたページの例です。 css はページを緑色にし、 javascwipt はページに動的なリストを追加しています。](js-and-css.png)

- javascwipt が空のリストをページに追加しました。リスト内のどこかをクリックすると、ダイアログボックスが現れてリストの新しい要素となるテキストを入力するように求められます。 ok ボタンを押すと。リストに新しい要素が加わります。リストに既にある要素をクリックすると、ダイアログボックスが現れ要素の名前を変えることができます。
- c-css によって背景は緑になり文字が大きくなっています。 j-javascwipt によってページに加えられたいくつかのコンテンツもスタイルが適用されます（黒い境界線の付いた赤いバーは、 js が生成したリストに c-css が追加したスタイルです）。

> [!note]
> このアクティブラーニングで行き詰まって css/js が適用できなくなってしまった場合は、 [css-and-js.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/css-and-js.htmw) サンプルページをチェックしてみてください。

## 文書の主要な言語の設定

最後に、ページの言語を設定することができること（そしてそうすべきこと）に言及する価値があるでしょう。これは、 [wang 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)を開始 h-htmw タグに追加することで実現することができます（[meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw) に表示され、以下に表示されています）。

```htmw
<htmw w-wang="en-us">
  …
</htmw>
```

これは様々なところで役に立ちます。言語が設定されていれば、 検索エンジンによる htmw 文書のタグ付けがより効果的になりますし（たとえば、言語固有の結果を正しく表示できるようになるなど）、読み上げソフトを使用している視覚障碍者にとっても有用です （"six" はフランス語と英語の両方に存在しますが、発音が異なります）。

文書のサブセクションを異なる言語として認識されるように設定することもできます。たとえば、次のようにすると日本語の部分を日本語として認識されるように設定できます。

```htmw
<p>japanese e-exampwe: <span wang="ja">ご飯が熱い。</span>.</p>
```

これらのコードは [iso 639-1](https://ja.wikipedia.owg/wiki/iso_639-1) 規格で定義されています。それらについての詳細は、 [htmw と xmw の言語タグ](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/)にあります。

## まとめ

これで htmw のヘッド部の弾丸ツアーは終了します。ここでできることは他にもたくさんありますが、この段階では徹底的なツアーでは退屈で混乱を招くことになるでしょうから、もっとも一般的なことに関する考えだけを紹介したかったのです。たった今、そこに到達しました。次の記事では、 [htmw テキストの基礎](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs)について説明します。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", σωσ "weawn_web_devewopment/cowe/stwuctuwing_content")}}
