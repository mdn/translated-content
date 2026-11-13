---
title: ヘッド部には何が入る? ウェブページのメタデータ
short-title: ウェブページのメタデータ
slug: Learn_web_development/Core/Structuring_content/Webpage_metadata
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}

HTML の文書の{{glossary("Head", "ヘッド")}}部は、ページが読み込まれてもウェブブラウザーには表示されない部分です。この部分には、例えば、 {{htmlelement("title")}} といった情報や {{glossary("CSS")}} へのリンク（HTML を CSS で修飾する場合）、独自のファビコンへのリンク、そしてほかのメタデータ（HTML を誰が書いたのかとかその HTML を表現する重要なキーワードなど）の情報を含んでいます。

ウェブブラウザーは{{glossary("Head", "ヘッド")}}部の情報を、 HTML 文書を正しく描画するために使用します。この記事では、上記のすべてのことと、さらに、読者にマークアップ言語と頭に入れておくべきほかのコードについてよい基礎を与えます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        ひとつ前のレッスンで扱っているような、基本的な HTML の知識。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>HTML のヘッド部、および文書内のメタデータコンテナーとしてのその目的。</li>
          <li>文書の文字エンコード方式とタイトルの設定方法。</li>
          <li>検索エンジンへのメタデータの提供。</li>
          <li>ブラウザーやモバイルプラットフォームで使用するアイコンへのリンク。</li>
          <li>このスタイルシートとスクリプトファイルへのリンク。</li>
          <li>文書の言語を設定するために、 <code>lang</code> 属性を <code>&lt;html&gt;</code> 開始タグに設定する必要性。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML のヘッド部とは何か？

[前の記事で扱った HTML 文書](/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_文書の構造)をもう一度見てみましょう。

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

しかし、より大きなページでは、ヘッド部がかなり大きくなることがあります。好きなウェブサイトで、[開発者ツール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)を使用して、ヘッド部の中身を確認してみてください。ここでの目的は、ヘッド部に記載できるすべてのものの使用方法を紹介することではなく、ヘッド部に記載したい主要な要素の使用方法を教え、ある程度慣れてもらうことです。では、始めましょう。

## タイトルをつける

{{htmlelement("title")}} 要素についてはすでに見てきました。これは文書にタイトルを追加するのに使います。しかしこれは {{htmlelement("Heading_Elements", "h1")}} 要素と良く混同されます。こちらは body の中で最上位レベルの見出しを追加するものであり、時々ページタイトルとしても参照されます。しかしこれらは別のものです。

- {{htmlelement("Heading_Elements", "h1")}} 要素は、ブラウザーで読み込まれるとページに現れます。一般的に、これは 1 ページに 1 回使用し、ページ内容のタイトル（記事のタイトル、またはニュースの見出しなど、使用に適したもの）をマークアップするために使用すべきです。
- {{htmlelement("title")}} 要素は（文書のコンテンツではなく） HTML 文書全体のタイトルを表すメタデータです。

### 単純な例を検討する

1. この演習では、まず私たちの GitHub リポジトリーにアクセスして [title-example.html page](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html) のコピーをダウンロードしてください。これは次のいずれかでできます。
   1. ページのコードをコピー＆ペーストして、コードエディターの新規ファイルに入れて、ふさわしい場所に保存します
   2. ページの "Raw" を押すと、新しいタブに生のコードが出ます。次に、ブラウザーの \[名前を付けて保存...] メニューを選択して、ファイルの保存場所を選んでください。

2. ファイルをブラウザーで開きます。このようなものが見えるでしょう。

   ![ブラウザーのページタブに 'title' テキスト、文書本体のページ見出しに 'h1' テキストを持つウェブページ。](title-example.png)

   `<h1>` コンテンツが出ている場所と、`<title>` コンテンツが出ている場所がひと目で分かります。

3. また、コードをコードエディターで開き、これらの要素の内容を編集し、ブラウザーでページを更新してみてください。楽しみながらやってみてください。

`<title>` 要素はいろいろな方法で使われます。例えば、ページのブックマーク（_ブックマーク > このページをブックマーク_ または Firefox の URL バーのスターアイコンにて）してみると、提案されたブックマーク名として `<title>` コンテンツが記入されています。

![Firefox でブックマークされているウェブページ。ブックマーク名には、'title' 要素の内容が自動的に付与されています。](bookmark-example.png)

`<title>` の内容は後述するように、コンテンツは検索結果にも使われます。

## メタデータ: `<meta>` 要素

メタデータはデータを説明するデータで、HTML には文書にメタデータを追加する「公式な」方法があります — {{htmlelement("meta")}} 要素です。もちろん、この記事で取り上げている他の要素もメタデータとして考えることができます。ページの `<head>` に含めることができる `<meta>` 要素にはさまざまな種類がありますが、このコースではすべてを説明することはしません。代わりに、一般的な例をいくつか取り上げて、アイディアを提示します。

### HTML 文書の文字コードを指定する

上で見てきた例では、この行が含まれていました。

```html
<meta charset="utf-8" />
```

この要素は文書の文字エンコーディング、つまり文書が使用することを許可されている文字セットを指定します。 `utf-8` は普遍的な文字セットで、あらゆる人間の言語のほとんどすべての文字を含みます。これは、ウェブページがあらゆる言語の表示を扱うことができることを意味しています。したがって、作成するすべてのウェブページでこれを設定するのはよい考えです。例えば、このページは英語と日本語をうまく処理することができます。

![日本語と英語を含むウェブページで、文字コードをユニバーサル (utf-8) に設定した場合。どちらの言語も問題なく表示されます。](correct-encoding.png)

文字エンコーディングを、例えば `ISO-8859-1`（ラテン文字のアルファベットの文字セット）に指定すると、ページの表示はメチャクチャな見た目になります。

![英語と日本語を含むウェブページで、文字コードを latin に設定した場合。日本語の文字が正しく表示されません。](bad-encoding.png)

> [!NOTE]
> ブラウザーによっては（例えば Chrome では）自動的に正しくないエンコーディングを修正しますので、お使いのブラウザーによっては、この問題が見られないこともあります。それでもなお、その他のブラウザーでの問題を避けるため、とにかくページに `utf-8` エンコーディングを設定すべきです。

### 文字エンコーディングでの実験

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

### 検索エンジンで説明文をどのように使用するのかを探る

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

> [!NOTE]
> Google ではメインの MDN ホームページリンクの下にいくつか MDN Web Docs のサブページが見えるでしょう。これはサイトリンクと呼ばれ、[Google ウェブマスターツール](https://search.google.com/search-console/about) で設定されます。これは Google 検索エンジンでサイトの検索結果を改善する方法です。

> [!NOTE]
> 多くの `<meta>` 機能はもう使われていません。例えば、`<meta>` 要素の keyword (`<meta name="keywords" content="fill, in, your, keywords, here">`) — 検索エンジンが色々な検索用語と関連するページを決めるためのキーワードを与えると考えられています — は、スパマーが結果にバイアスをかける多数のキーワードを埋めるだけなので、検索エンジンから無視されます。

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

![MDN ホームページのオープングラフプロトコルデータを facebook で表示し、画像、タイトル、説明文を表示しています。](facebook-output.png)

## サイトに自分の好きなアイコンを追加

もっとサイトデザインを豊かにするために、メタデータにカスタムアイコンを追加して、特定のコンテキストで表示されるようにすることができます。このうち最もよく使われるものが **ファビコン** （ブラウザーの「お気に入り」や「ブックマーク」の一覧を指すために使われる "favorites icon" の略）です。

地味なファビコンは、何年も前から存在しています。 16 ピクセルの正方形のアイコンを複数の場所で使用する、この種のアイコンの最初のものです。ブラウザーによっては、開いているページを含むブラウザーのタブや、ブックマークパネルのブックマークされたページの横にファビコンが表示されることがあります。

ページにファビコンを追加するには次のようにします。

1. 対応している形式（`.ico`、`.gif`、`.png` など）で保存し、ウェブサイトのフォルダー内どこかに配置してください。
2. HTML の {{HTMLElement("head")}} ブロック内に、ファビコンファイルのパスを参照する {{htmlelement("link")}} 要素を追加します。

   ```html
   <link rel="icon" href="/favicon.ico" type="image/x-icon" />
   ```

> [!NOTE]
> この例では、ファビコンファイルへのパスは `/` で始まります。これは「サイトの最上位（またはルート）ディレクトリーでファイルを探せ」ということです。サイトの作成に使用しているシステムによって、ソースコード内のこのファイルの場所は異なる場合があります。ウェブフレームワークでは通常、`static` や `public` といった特別なフォルダー内をサイトルート内のファイル用に確保しています。
>
> ファイルパスの細かい仕組みについては、今はあまり気にしなくて大丈夫です。後で詳しく学びます（気になる場合は [URL とパスの基礎知識](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links#url_とパスに関する簡単な入門)を調べてください）。
>
> 最近のほとんどのブラウザーやソフトウェアアプリケーションは、サイトルートにある `favicon.ico` ファイルを自動的にファビコンとして使用するため、多くのサイトでは `<link>` 要素を記載することすら省略されています。ただし、ファビコンファイルを別の場所に配置したい場合には、明示的な要素が有益です。

ブックマークパネルでファビコンが表示されている例です。

![Firefox のブックマークパネル、ブックマークされた例の隣にファビコンが表示されている。](bookmark-favicon.png)

異なるコンテキストに応じて異なるアイコンを含めることも検討してください。例を示します。

```html
<link rel="icon" href="/favicon-48x48.[some hex hash].png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.[some hex hash].png" />
```

これは、 Apple の機器のホーム画面に保存されたときにアイコンを表示させる方法です。すべての端末でアイコンが適切に表示されるように、異なる端末ごとに異なるアイコンを指定することもできます。例えば次のようにします。

```html
<!-- iPad Pro の高解像度レティナ画面 -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!--  3 倍の解像度の iPhone -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- レティナではない iPad、iPad mini、など -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2 倍の解像度の iPhone 及びその他の端末 -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- 基本的なファビコン -->
<link rel="icon" href="/favicon.ico" />
```

コメントはそれぞれのアイコンの用途を説明しています。 — この要素は、ウェブサイトが iPad のホーム画面に保存された時の高解像度のアイコンの提供といったことをカバーしています。

これらすべてのアイコンを正しい方法で実装することについて、今はあまり心配する必要はありません。これはかなり高度な機能であり、このコースの進行にこの知識を持っている必要はありません。ここで重要なのは、他にもウェブサイトのソースコードを閲覧している際に、このようなことがあり得るということを知っておくことです。これらの値すべてについて、また、その選び方を学びたい場合は、 {{HTMLElement("link")}} 要素のリファレンスページをご覧ください。

## HTML に CSS と JavaScript を追加する

最近のほとんどすべてのウェブサイトでは、格好よく見せるために {{glossary("CSS")}} や動画や地図、ゲームなどといったインタラクティブな機能を追加するために {{glossary("JavaScript")}} を用いています。これらは最も一般的に用いられ、それぞれ {{htmlelement("link")}} 要素、 {{htmlelement("script")}} 要素で表します。

- {{htmlelement("link")}} 要素は必ず HTML 文書のヘッド部の中に置きます。二つの属性をとり、 rel="stylesheet" はこれが文書のスタイルシートであることを示し、 href はスタイルシートファイルへのパスを表します。

  ```html
  <link rel="stylesheet" href="my-css-file.css" />
  ```

- {{htmlelement("script")}} 要素もヘッド部に入れるべきであり、読み込みたい JavaScript のパスを含む `src` 属性と、基本的にページが HTML の構文解析を完了した後に JavaScript を読み込むようにブラウザーに指示する `defer` （[論理属性](/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#論理属性)）を記載する必要があります。`defer` 属性は、JavaScript を実行する前に HTML がすべて読み込まれていることを確認し、 JavaScript がまだページ上に存在しない HTML 要素にアクセスしようとした結果、エラーが発生しないようにするために有用なものです。ページでの JavaScript の読み込みを処理する方法は実際には[いくつかあります](/ja/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#スクリプトの読み込み方針)が、現代のブラウザーではこれが最も信頼できる方法です。

  ```html
  <script src="my-js-file.js" defer></script>
  ```

  > [!NOTE]
  > `<script>` 要素は{{glossary("void element", "空要素")}}のように見えるかもしれませんが、そうではありませんので、終了タグが必要です。また、外部のスクリプトファイルを読み込むのではなく、 `<script>` 要素の中にスクリプトを置くこともできます。

### あなたの番: ページに CSS と JavaScript を追加

1. 演習を始めるにあたって、 [meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html)、[script.js](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js)、[style.css](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css) をコピーして、ローカルの同じフォルダーに保存してください。ファイル名と拡張子が変わっていないことを確認してください。
2. HTML ファイルをブラウザーとテキストエディターで開いてください。
3. 先に述べた情報に従って、 {{htmlelement("link")}} 要素と {{htmlelement("script")}} 要素を HTML に書き加えてください。すると CSS と JavaScript が HTML に適用されます。

以上を正しく行い、 HTML を保存してブラウザーを更新したら、変化がみられるでしょう。

![CSS と JavaScript が適用されたページの例です。 CSS はページを緑色にし、 JavaScript はページに動的なリストを追加しています。](js-and-css.png)

- JavaScript が空のリストをページに追加しました。リスト内のどこかをクリックすると、ダイアログボックスが現れてリストの新しい要素となるテキストを入力するように求められます。 OK ボタンを押すと。リストに新しい要素が加わります。リストに既にある要素をクリックすると、ダイアログボックスが現れ要素の名前を変えることができます。
- CSS によって背景は緑になり文字が大きくなっています。 JavaScript によってページに加えられたいくつかのコンテンツもスタイルが適用されます（黒い境界線の付いた赤いバーは、 JS が生成したリストに CSS が追加したスタイルです）。

> [!NOTE]
> このアクティブラーニングで行き詰まって CSS/JS が適用できなくなってしまった場合は、 [css-and-js.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html) サンプルページをチェックしてみてください。

## 文書の主要な言語の設定

最後に、ページの言語を設定することができること（そしてそうすべきこと）に言及する価値があるでしょう。これは、 [lang 属性](/ja/docs/Web/HTML/Reference/Global_attributes/lang)を開始 HTML タグに追加することで実現することができます（[meta-example.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html) に表示され、以下に表示されています）。

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

これで HTML のヘッド部の弾丸ツアーは終了します。ここでできることは他にもたくさんありますが、この段階では徹底的なツアーでは退屈で混乱を招くことになるでしょうから、もっとも一般的なことに関する考えだけを紹介したかったのです。たった今、そこに到達しました。次の記事では、 [HTML テキストの基礎](/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)について説明します。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content")}}
