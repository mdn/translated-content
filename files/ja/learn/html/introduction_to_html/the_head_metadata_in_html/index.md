---
title: ヘッド部には何が入る? HTML のメタデータ
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
l10n:
  sourceCommit: 4eed7cfb25979c09def6634b836eddc1485ce57b
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

HTML の文書の{{glossary("Head", "ヘッド")}}部は、ページが読み込まれてもウェブブラウザーには表示されない部分です。この部分には、例えば、 {{htmlelement("title")}} といった情報や {{glossary("CSS")}} へのリンク（HTML を CSS で修飾する場合）、独自のファビコンへのリンク、そしてほかのメタデータ（HTML を誰が書いたのかとかその HTML を表現する重要なキーワードなど）の情報を含んでいます。ウェブブラウザーは{{glossary("Head", "ヘッド")}}部の情報を、 HTML 文書を正しく描画するために使用します。この記事では、上記のすべてのことと、さらに、読者にマークアップ言語と頭に入れておくべきほかのコードについてよい基礎を与えます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >で扱っているような、基本的な HTML の知識。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        HTML のヘッド部について学ぶこと。ヘッド部の目的は何か、そしてヘッド部が含む情報の中で最も重要なのは何か、加えてそれが HTML 文書の中でどれほどの影響を持つか。
      </td>
    </tr>
  </tbody>
</table>

## HTML のヘッド部とは何か？

[前の記事で扱った HTML 文書](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_文書の構成)をもう一度見てみましょう。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

HTML のヘッド部は {{htmlelement("head")}} 要素の内容です。 {{htmlelement("body")}} 要素の内容（これはブラウザーに読み込まれた時に表示されます）とは違い、ヘッド部の内容はページに表示されません。その代わり、ヘッド部の仕事は文書の{{glossary("Metadata", "メタデータ")}}を含んでいます。上記の例では、ヘッド部はとても小さいものです。

```html
<head>
  <meta charset="utf-8" />
  <title>My test page</title>
</head>
```

しかし、より大きなページでは、ヘッド部がかなり大きくなることがあります。好きなウェブサイトで、[開発者ツール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)を使用して、ヘッド部の中身を確認してみてください。ここでの目的は、ヘッド部に記載できるすべてのものの使用方法を紹介することではなく、ヘッド部に記載したい主要な要素の使用方法を教え、ある程度慣れてもらうことです。では、始めましょう。

## タイトルをつける

{{htmlelement("title")}} 要素についてはすでに見てきました。これは文書にタイトルを追加するのに使います。しかしこれは {{htmlelement("Heading_Elements", "h1")}} 要素と良く混同されます。こちらは body の中で最上位レベルの見出しを追加するものであり、時々ページタイトルとしても参照されます。しかしこれらは別のものです。

- {{htmlelement("Heading_Elements", "h1")}} 要素は、ブラウザーで読み込まれるとページに現れます。一般的に、これは 1 ページに 1 回使用し、ページ内容のタイトル（記事のタイトル、またはニュースの見出しなど、使用に適したもの）をマークアップするために使用すべきです。
- {{htmlelement("title")}} 要素は（文書のコンテンツではなく） HTML 文書全体のタイトルを表すメタデータです。

### アクティブラーニング: 単純な例を検討する

1. このアクティブラーニングを始めるのに、我々の GitHub リポジトリーに移動して [title-example.html page](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) のコピーをダウンロードしてください。これは次のいずれかでできます。

   1. ページのコードをコピー＆ペーストして、コードエディターの新規ファイルに入れて、ふさわしい場所に保存します
   2. ページの "Raw" を押すと、新しいタブに生のコードが出ます。次に、ブラウザーの \[名前を付けて保存...] メニューを選択して、、ファイルの保存場所を選んでください。

2. ファイルをブラウザーで開きます。このようなものが見えるでしょう。

   ![ブラウザーのページタブに 'title' テキスト、文書本体のページ見出しに 'h1' テキストを持つウェブページ。](title-example.png)

   `<h1>` コンテンツが出ている場所と、`<title>` コンテンツが出ている場所がひと目で分かります。

3. また、コードをコードエディターで開き、これらの要素の内容を編集し、ブラウザーでページを更新してみてください。楽しみながらやってみてください。

`<title>` 要素はいろいろな方法で使われます。例えば、ページのブックマーク（_ブックマーク > このページをブックマーク_ または Firefox の URL バーのスターアイコンにて）してみると、提案されたブックマーク名として `<title>` コンテンツが記入されています。

![Firefox でブックマークされているウェブページ。ブックマーク名には、'title' 要素の内容が自動的に付与されています。](bookmark-example.png)

`<title>` の内容は後述するように、コンテンツは検索結果にも使われます。

## メタデータ: `<meta>` 要素

メタデータはデータを説明するデータで、HTML には文書にメタデータを追加する「公式な」方法があります — {{htmlelement("meta")}} 要素です。もちろん、この記事で解説しているその他のものもメタデータと考えられます。様々な種類の `<meta>` 要素がページの `<head>` に入りますが、この段階では、ややこしすぎるため、すべては説明しません。その代わり、よく見かけるいくつかのものを説明し、理解を与えます。

### HTML 文書の文字コードを指定する

上で見てきた例では、この行が含まれていました。

```html
<meta charset="utf-8" />
```

この要素は文書の文字エンコーディング、つまり文書が使用することを許可されている文字セットを指定します。 `utf-8` は普遍的な文字セットで、あらゆる人間の言語のほとんどすべての文字を含みます。これは、ウェブページがあらゆる言語の表示を扱うことができることを意味しています。したがって、作成するすべてのウェブページでこれを設定するのはよい考えです。例えば、このページは英語と日本語をうまく処理することができます。

![日本語と英語を含むウェブページで、文字コードをユニバーサル (utf-8) に設定した場合。どちらの言語も問題なく表示されます。](correct-encoding.png)文字エンコーディングを、例えば `ISO-8859-1` （ラテン文字のアルファベットの文字セット）に指定すると、ページの表示はメチャクチャな見た目になります。

![英語と日本語を含むウェブページで、文字コードを latin に設定した場合。日本語の文字が正しく表示されません。](bad-encoding.png)

> **メモ:** ブラウザーによっては（例えば Chrome では）自動的に正しくないエンコーディングを修正しますので、お使いのブラウザーによっては、この問題が見られないこともあります。それでもなお、その他のブラウザーでの問題を避けるため、とにかくページに `utf-8` エンコーディングを設定すべきです。

### アクティブラーニング: 文字エンコーディングで実験する

これを試すには、`<title>` についての前の節で得たシンプルな HTML テンプレート ([title-example.html page](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)) をもう一度見てみて、 meta charset の値を `ISO-8859-1` に変えて、日本語を追加してみます。私たちの使ったコードは次のものです。

```html
<p>Japanese example: ご飯が熱い。</p>
```

### 作成者と説明の追加

多くの `<meta>` 要素は `name` と `content` 属性が含まれます。

- `name` は meta 要素の種類を指定します。含まれる情報の種類です。
- `content` は実際のメタコンテンツを指定します。

ページに入れるのが便利な 2 つのメタ要素は、ページの著者 (author) を定義するものと、ページの説明 (description) を与えるものです。例を見てみます。

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing websites and applications." />
```

作者 (author) を明示することは多くの点で有益です。内容に関して質問がある場合、誰がそのページを書いたのかを把握することができ、連絡を取りたい場合に便利だからです。コンテンツ管理システムの中には、ページの作者情報を自動的に抽出して、そのために利用できるようにする機能があるものもあります。

ページの内容に関連したキーワードを含む説明 (description) を指定すると、検索エンジンで行われる関連検索で、ページをより上位にできる可能性があるため役立ちます（この行為に対する用語は [Search Engine Optimization](/ja/docs/Glossary/SEO) （検索エンジン最適化）または {{glossary("SEO")}}といいます）。

### アクティブラーニング:検索エンジンにおける description の扱い

description は検索エンジンの結果ページにも使われます。練習でこれを見ていきましょう。

1. [Mozilla Developer Network のフロントページ](/ja/)に移動します。
2. ページのソースを見ます（ページで右クリックし、コンテキストメニューから \[ページソースを表示] を選択）。

3. description の meta タグを見てみます。このようなものです（変わっているかもしれませんが）。

   ```html
   <meta
     name="description"
     content="The MDN Web Docs site
     provides information about Open Web technologies
     including HTML, CSS, and APIs for both websites and
     progressive web apps." />
   ```

4. ここでお好きな検索エンジンで "MDN Web Docs" を検索します（ここでは Google を使っています）。 description の `<meta>` と `<title>` 要素のコンテンツが検索結果で使われています。確かに値打ちがあります。

   ![Yahoo での "Mozilla Developer Network" の検索結果](mdn-search-result.png)

> **メモ:** Google ではメインの MDN ホームページリンクの下にいくつか MDN Web Docs のサブページが見えるでしょう。これはサイトリンクと呼ばれ、[Google ウェブマスターツール](https://search.google.com/search-console/about) で設定されます。これは Google 検索エンジンでサイトの検索結果を改善する方法です。

> **メモ:** 多くの `<meta>` 機能はもう使われていません。例えば、`<meta>` 要素の keyword (`<meta name="keywords" content="fill, in, your, keywords, here">`) — 検索エンジンが色々な検索用語と関連するページを決めるためのキーワードを与えると考えられています — は、スパマーが結果にバイアスをかける多数のキーワードを埋めるだけなので、検索エンジンから無視されます。

### メタデータの他の種類

ウェブを旅していると、他にもさまざまな型のメタデータを見つけることができます。ウェブサイト上で目にする機能の多くは、独占的に作成されたもので、特定のサイト（SNS サイトなど）が使用する特定の情報の断片を提供してもらうために設計されたものです。

例えば、 [Open Graph Data](https://ogp.me/) は Facebook が開発した、ウェブサイトにより豊富なメタデータを与えるメタデータプロトコルです。 MDN Web Docs のソースコードでは、次のようなものがあります。

```html
<meta
  property="og:image"
  content="https://developer.mozilla.org/mdn-social-share.png" />
<meta
  property="og:description"
  content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both websites
and HTML Apps." />
<meta property="og:title" content="Mozilla Developer Network" />
```

この効果として、 Facebook で MDN Web Docs にリンクしたとき、リンクに画像と説明が表示されます。ユーザーにとってより便利になります。

![MDN ホームページの Open Graph プロトコルデータを facebook で表示し、画像、タイトル、説明文を表示しています。](facebook-output.png)

Twitter も同様に、 [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) という独自のメタデータを持っており、サイトの URL が twitter.com で表示されたときに同様の効果を実現しています。例えばこのようになります。

```html
<meta name="twitter:title" content="Mozilla Developer Network" />
```

## サイトに自分の好きなアイコンをつける

もっとサイトデザインを豊かにするために、メタデータにカスタムアイコンを追加して、特定のコンテキストで表示されるようにすることができます。このうち最もよく使われるものが **ファビコン** （ブラウザーの「お気に入り」や「ブックマーク」の一覧を指すために使われる "favorites icon" の略）です。

地味なファビコンは、何年も前から存在しています。 16 ピクセルの正方形のアイコンを複数の場所で使用する、この種のアイコンの最初のものです。ブラウザーによっては、開いているページを含むブラウザーのタブや、ブックマークパネルのブックマークされたページの横にファビコンが表示されることがあります。

ページにファビコンを追加するには次のようにします。

1. サイトのインデックスページと同じディレクトリーに、 `.ico` 形式で保存します（多くのブラウザーは `.gif` や `.png` のような、より一般的な形式のファビコンにも対応しています）。
2. HTML の {{HTMLElement("head")}} ブロックに次の行を入れて参照します。

   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon" />
   ```

ブックマークパネルでファビコンが表示されている例です。

![The Firefox bookmarks panel, showing a bookmarked example with a favicon displayed next to it.](bookmark-favicon.png)

最近では考慮するべきアイコンの種類がほかにもたくさんあります。例えば、 MDN Web Docs ホームページのソースコードには以下の行があります。

```html
<!-- 第 3 世代の iPad の高解像度レティナ画面 -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="144x144"
  href="https://developer.mozilla.org/static/img/favicon144.png" />
<!-- iPhone の高解像度レティナ画面 -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="https://developer.mozilla.org/static/img/favicon114.png" />
<!-- 第 1、2 世代の iPad -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="72x72"
  href="https://developer.mozilla.org/static/img/favicon72.png" />
<!-- レティナではない iPhone、iPod Touch、Android 2.1 以降の端末 -->
<link
  rel="apple-touch-icon-precomposed"
  href="https://developer.mozilla.org/static/img/favicon57.png" />
<!-- 基本的なファビコン -->
<link
  rel="icon"
  href="https://developer.mozilla.org/static/img/favicon32.png" />
```

コメントはそれぞれのアイコンの用途を説明しています。 — この要素は、ウェブサイトが iPad のホーム画面に保存された時のすばらしい高解像度なアイコンの提供といったことをカバーしています。

これらの種類のアイコンをすべて実装することを今すぐには心配しないでください。これはかなり高度な機能であり、コースを進めるためにこのような知識があることを期待することはありません。そのため、他のウェブサイトのソースコードを閲覧しているときに、このようなものがあることに気付いたときのために、その内容を知っておくことが主な目的です。

> **メモ:** もし、サイトがセキュリティを向上させるために Content Security Policy (CSP) を使用している場合、ポリシーがファビコンに適用されます。ファビコンが読み込まれないという問題に遭遇したら、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーの [`img-src` ディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)がアクセスを妨害していないかを確認してください。

## HTML に CSS と JavaScript を追加する

最近のほとんどすべてのウェブサイトでは、格好よく見せるために {{glossary("CSS")}} や動画や地図、ゲームなどといったインタラクティブな機能を追加するために {{glossary("JavaScript")}} を用いています。これらは最も一般的に用いられ、それぞれ {{htmlelement("link")}} 要素、 {{htmlelement("script")}} 要素で表します。

- {{htmlelement("link")}} 要素は必ず HTML 文書のヘッド部の中に置きます。二つの属性をとり、 rel="stylesheet" はこれが文書のスタイルシートであることを示し、 href はスタイルシートファイルへのパスを表します。

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- {{htmlelement("script")}} 要素もヘッド部に入れるべきであり、読み込みたいJavaScriptのパスを含む `src` 属性と、基本的にページが HTML の解析を完了した後にJavaScriptを読み込むようにブラウザーに指示する `defer` を記載する必要があります。これは、JavaScriptを実行する前に HTML がすべて読み込まれていることを確認し、 JavaScript がまだページ上に存在しない HTML 要素にアクセスしようとした結果、エラーが発生しないようにするために有用なものです。ページでの JavaScript の読み込みを処理する方法は実際にはいくつかありますが、現代のブラウザーではこれが最も信頼できる方法です（他にも、[スクリプトの読み込み方針](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#スクリプトの読み込み方針)を参照してください）。

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > **メモ:** `<script>` 要素は{{glossary("void element", "空要素")}}のように見えるかもしれませんが、そうではありませんので、終了タグが必要です。また、外部のスクリプトファイルを読み込むのではなく、 `<script>` 要素の中にスクリプトを置くこともできます。

### アクティブラーニング: ページに CSS と JavaScript を追加する

1. アクティブラーニングを始めるにあたって、私たちの [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js) ,[style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) をコピーしてローカルの同じフォルダに保存してください。ファイル名と拡張子が変わっていないことを確認してください。
2. HTML ファイルをブラウザーとテキストエディターで開いてください。
3. 先に述べた情報に従って、 {{htmlelement("link")}} 要素と {{htmlelement("script")}} 要素を HTML に書き加えてください。すると CSS と JavaScript が HTML に適用されます。

以上を正しく行い、 HTML を保存してブラウザーを更新したら、変化がみられるでしょう。

![CSS と JavaScript が適用されたページの例です。 CSS はページを緑色にし、 JavaScript はページに動的なリストを追加しています。](js-and-css.png)

- JavaScript が空のリストをページに追加しました。リスト内のどこかをクリックすると、ダイアログボックスが現れてリストの新しい要素となるテキストを入力するように求められます。 OK ボタンを押すと。リストに新しい要素が加わります。リストに既にある要素をクリックすると、ダイアログボックスが現れ要素の名前を変えることができます。
- CSS によって背景は緑になり文字が大きくなっています。 JavaScript によってページに加えられたいくつかのコンテンツもスタイルが適用されます（黒い境界線の付いた赤いバーは、 JS が生成したリストに CSS が追加したスタイルです）。

> **メモ:** このアクティブラーニングで行き詰まって CSS/JS が適用できなくなってしまった場合は、 [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) サンプルページをチェックしてみてください。

## 文書の主要な言語の設定

最後に、ページの言語を設定することができること（そしてそうすべきこと）に言及する価値があるでしょう。これは、 [lang 属性](/ja/docs/Web/HTML/Global_attributes/lang)を開始 HTML タグに追加することで実現することができます（[meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) に表示され、以下に表示されています）。

```html
<html lang="en-US">
  …
</html>
```

これは様々なところで役に立ちます。言語が設定されていれば、 検索エンジンによる HTML 文書のタグ付けがより効果的になりますし（たとえば、言語固有の結果を正しく表示できるようになるなど）、読み上げソフトを使用している視覚障碍者にとっても有用です （"six" はフランス語と英語の両方に存在しますが、発音が異なります）。

文書のサブセクションを異なる言語として認識されるように設定することもできます。たとえば、次のようにすると日本語の部分を日本語として認識されるように設定できます。

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

これらのコードは [ISO 639-1](https://ja.wikipedia.org/wiki/ISO_639-1) 規格で定義されています。それらについての詳細は、 [HTML と XML の言語タグ](https://www.w3.org/International/articles/language-tags/)にあります。

## まとめ

これで HTML のヘッド部の弾丸ツアーは終了します。ここでできることは他にもたくさんありますが、この段階では徹底的なツアーでは退屈で混乱を招くことになるでしょうから、もっとも一般的なことに関する考えだけを紹介したかったのです。たった今、そこに到達しました。次の記事では、 [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)について説明します。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
