---
title: head には何が入る? HTML のメタデータ
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
tags:
  - Beginner
  - CodingScripting
  - Guide
  - HTML
  - Meta
  - favicon
  - head
  - lang
  - metadata
translation_of: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

HTML の文書の {{glossary("Head", "head")}} 部分は、ページが読み込まれてもウェブブラウザーには表示されない部分です。この部分には、例えば、 {{htmlelement("title")}} といった情報や {{glossary("CSS")}} へのリンク (もし HTML を CSS で修飾したいならば)、独自のファビコンへのリンク、そしてほかのメタデータ (HTML を誰が書いたのかとかその HTML を表現する重要なキーワードなど) の情報を含んでいます。この記事では、上記のすべてのことと、さらに、読者にマークアップ言語と頭に入れておくべきほかのコードについてよい基礎を与えます。

| 前提知識: | 基本的な HTML の知識。 [HTML を始めよう](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)で扱うようなもの。                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | HTML の head について学ぶこと。 head の目的は何か、そして head が含む情報の中で最も重要なのは何か、加えてそれが HTML 文書の中でどれほどの影響を持つか。 |

## HTML の head とは何か？

[前の記事で扱った HTML 文書](/ja/Learn/HTML/Introduction_to_HTML/Getting_started#Anatomy_of_an_HTML_document)をもう一度見てみましょう。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

HTML の head は {{htmlelement("head")}} 要素のコンテンツです — {{htmlelement("body")}} 要素のコンテンツ (これはブラウザーに読み込まれた時に表示されます) とは違っていて、head のコンテンツはページに表示されません。その代わり、head の仕事は文書の {{glossary("Metadata", "メタデータ")}} を含んでいます。上記の例では、head はとても小さいです。

```html
<head>
  <meta charset="utf-8">
  <title>My test page</title>
</head>
```

しかし、大きなページでは、 head にたくさんの項目があることもあります — お気に入りのウェブサイトに移動して、[ウェブ開発ツール](/ja/docs/Learn/Discover_browser_developer_tools)を使って head コンテンツを確認してみます。ここでの狙いは head に置くことのできるすべての使い方を示すことではなく、むしろ head に入れたくなるのが最も明らかなものの使い方を教えて、なじんでもらうことです。始めましょう。

## タイトルをつける

{{htmlelement("title")}} 要素についてはすでに見てきました — これは文書にタイトルを追加するのに使います。しかしこれは {{htmlelement("h1")}} 要素 (これは body コンテンツの最上位レベルの見出し(head)を追加します — 時々ページタイトルとしても参照されます) と混同されます。しかしこれらは別のものです!

- {{htmlelement("h1")}} 要素はブラウザーに読み込まれた時にページに現れます — 一般的にページごとに 1 回使われて、ページコンテンツのタイトルをマークアップします (ストーリーのタイトルや、ニュースのヘッドラインや、使い方にふさわしいなんでも)。
- {{htmlelement("title")}} 要素は (文書のコンテンツではなく) 全体の HTML 文書のタイトルを表すメタデータです。

### アクティブラーニング: 単純な例を検討する

1.  このアクティブラーニングを始めるのに、我々の GitHub リポジトリに移動して [title-example.html page](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html) のコピーをダウンロードして頂きたいです。これは次のいずれかでできます

    1.  ページのコードをコピー&ペーストして、コードエディターの新規ファイルに入れて、ふさわしい場所に保存します
    2.  ページの "Raw" を押すと、新しいタブに生のコードが出ます。次に、ブラウザーメニューから _ファイル > 名前を付けて保存..._ を選んで、ファイルの保存場所を選びます

2.  ファイルをブラウザーで開きます。このようなものが見えるでしょう:

    ![A simple web page with the title set to <title> element, and the <h1> set to <h1> element.](title-example.png)\<h1> コンテンツが出ている場所と、`<title>` コンテンツが出ている場所がひと目で分かります!

3.  自分のコードエディターで開いて、この要素を編集して、ブラウザーで再読み込みしてもよいです。楽しんでみてください。

`<title>` 要素はいろいろな方法で使われます。例えば、ページのブックマーク (_ブックマーク > このページをブックマーク または Firefox の URL バーのスターアイコンにて_) してみると、提案されたブックマーク名として `<title>` コンテンツが記入されています。

![A webpage being bookmarked in firefox; the bookmark name has been automatically filled in with the contents of the <title> element ](bookmark-example.png)

`<title>` の内容は後述するように、コンテンツは検索結果にも使われます。

## メタデータ: \<meta>要素

メタデータはデータを説明するデータで、 HTML には文書にメタデータを追加する「公式な」方法があります — {{htmlelement("meta")}} 要素です。もちろん、この記事で話しているその他のものもメタデータと考えられます。ページの \<head> に入る `<meta>` 要素にはさまざまな種類がありますが、この段階では、ややこしすぎるため、すべては説明しません。その代わり、よく見かけるいくつかのものを説明し、理解を与えます。

### HTML 文書の文字コードを指定する

上で見てきた例では、この行が含まれていました。

```html
<meta charset="utf-8">
```

この要素は単に文書のキャラクターエンコーディングを指定しています — それは文書が使うことが許されるキャラクターセットです。`utf-8` はあらゆる言語からとてもたくさんの文字を含む汎用的なキャラクターセットです。つまりウェブページがあらゆる言語の表示を取り扱えるのです; このため、作成するすべてのウェブページにこれをセットするのが良いです！例えば、ページで英語と日本語を正しく扱うことができます:

![a web page containing English and Japanese characters, with the character encoding set to universal, or utf-8. Both languages display fine,](correct-encoding.png)文字エンコーディングを、例えば `ISO-8859-1` (ラテン文字のアルファベットの文字セット) に指定すると、ページの表示はメチャクチャな見た目になります。

![a web page containing English and Japanese characters, with the character encoding set to latin. The Japanese characters don't display correctly](bad-encoding.png)

> **Note:** ブラウザーによっては (例 Chrome) 自動的に正しくないエンコーディングを修正しますので、お使いのブラウザーによっては、この問題が見られないこともあります。それでもなお、その他のブラウザーでの問題を避けるため、とにかくページに `utf-8` エンコーディングを設定すべきです。

### アクティブラーニング: 文字エンコーディングで実験する

これを試すには、`<title>` についての前の節で得たシンプルな HTML テンプレート ([title-example.html page](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html)) をもう一度見てみて、 meta charset の値を `ISO-8859-1` に変えて、日本語を追加してみます。私達の使ったコードは次のものです:

```html
<p>Japanese example: ご飯が熱い。</p>
```

### 作成者と説明を追加する

多くの `<meta>` 要素は `name` と `content` 属性が含まれます:

- `name` は meta 要素の種類を指定します。含まれる情報の種類です。
- `content` は実際のメタコンテンツを指定します。

ページに入れるのが便利な 2 つのメタ要素は、ページの著者(author)を定義するものと、ページの説明(description)を与えるものです。例を見てみます:

```html
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```

著者 (author) の指定はいくつかの点で役立ちます。コンテンツに関する質問があって問い合わせしたい場合、誰がそのページを書いたのかに答えられます。 CMS (コンテンツ管理システム) によっては自動的にページの作者の情報を抽出して、このような目的で利用するための機能があります。

ページの内容に関連したキーワードを含む説明 (description) を指定すると、検索エンジンで行われる関連検索で、ページをより上位にできる可能性があるため役立ちます (この行為に対する用語は [Search Engine Optimization](/ja/docs/Glossary/SEO) (検索エンジン最適化) または {{glossary("SEO")}}といいます)。

### アクティブラーニング:検索エンジンにおける description の扱い

description は検索エンジンの結果ページにも使われます。練習でこれを見ていきましょう。

1.  [Mozilla Developer Network のフロントページ](/ja/)に移動します。
2.  ページのソースを見ます (ページ上で右クリックまたは&#x20;

    <kbd>Ctrl</kbd>

    &#x20;を押しながらクリックして、コンテキストメニューからページのソースを表示を選びます)。

3.  description の meta タグを見てみます。それはこのようなものです。

    ```html
    <meta name="description" content="The MDN Web Docs site
      provides information about Open Web technologies
      including HTML, CSS, and APIs for both Web sites and
      progressive web apps.">
    ```

4.  ここでお好きな検索エンジンで "MDN Web Docs" を検索します (ここでは Google を使っています) 。 description の `<meta>` と `<title>` 要素のコンテンツが検索結果で使われています — 確かに値打ちがあります。

    ![A Yahoo search result for "Mozilla Developer Network"](mdn-search-result.png)

> **Note:** Google ではメインの MDN ホームページリンクの下にいくつか MDN Web Docs のサブページが見えるでしょう— これはサイトリンクと呼ばれ、[Google's webmaster tools](http://www.google.com/webmasters/tools/) で設定されます — これは Google 検索エンジンでサイトの検索結果を良くする方法です。

> **Note:** 多くの `<meta>` 機能はもう使われていません。例えば、 keyword の `<meta>` 要素 (`<meta name="keywords" content="fill, in, your, keywords, here">`) — 検索エンジンが色々な検索用語と関連するページを決めるためのキーワードを与えると考えられています — は、スパマーが結果にバイアスをかける多数のキーワードを埋めるだけなので、検索エンジンから無視されます。

### メタデータの他の種類

ウェブを旅するにつれ、他の種類のメタデータも見つかるでしょう。ウェブサイトで見る多くの機能はプロプライエタリな作成物で、使うことのできる特定の情報をあるサイト (例えば SNS) に与えます。

例えば、 [Open Graph Data](http://ogp.me/) は Facebook が開発した、ウェブサイトに豊富なメタデータを与えるメタデータプロトコルです。 MDN Web Docs のソースコードでは、次のようなものがあります。

```html
<meta property="og:image" content="https://developer.mozilla.org/static/img/opengraph-logo.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">
```

この効果として、 facebook で MDN Web Docs にリンクしたとき、リンクに画像と説明が表示されます。ユーザーにとってより便利になります。

![Open graph protocol data from the MDN homepage as displayed on facebook, showing an image, title, and description.](facebook-output.png)Twitter も同様のプロプラエタリなメタデータを持ちます。 URL が twitter.com で表示される時に同様な効果となります。例えば。

```html
<meta name="twitter:title" content="Mozilla Developer Network">
```

## サイトに自分の好きなアイコンをつける

もっとサイトデザインを豊かにするために、メタデータにカスタムアイコンを追加して、特定のコンテキストで表示されるようにすることができます。このうち最もよく使われるものが **ファビコン** (ブラウザーの「お気に入り」や「ブックマーク」の一覧を指すために使われる "favorites icon" の略) です。

つつましいファビコンは何年も使われてきています。16 ピクセル四方のアイコンが最初の種類であり、様々な場所で使われました。各ページを開いているブラウザータブの中や、ブックマークパネル内のブックマークページの隣でファビコン表示が見られるでしょう。

ページにファビコンを追加するには:

1.  サイトの index ページと同じディレクトリーに、 `.ico` 形式で保存します (大半のブラウザーは `.gif` や `.png` のような、より一般的な形式のファビコンにも対応していますが、 ICO 形式を使えば Internet Explorer 6 以降の古いブラウザーでも動作することが保証されます)。
2.  HTML の {{HTMLElement("head")}} ブロックに下記の行を入れて参照します。

    ```html
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    ```

ブックマークパネルでファビコンが表示される例です。

![The Firefox bookmarks panel, showing a bookmarked example with a favicon displayed next to it.](bookmark-favicon.png)

最近では考慮するべきアイコンの種類がほかにもたくさんあります。例えば、 MDN Web Docs ホームページのソースコードには以下の行があります。

```html
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.mozilla.org/static/img/favicon144.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.mozilla.org/static/img/favicon114.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.mozilla.org/static/img/favicon72.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.mozilla.org/static/img/favicon57.png">
<!-- basic favicon -->
<link rel="shortcut icon" href="https://developer.mozilla.org/static/img/favicon32.png">
```

コメントはそれぞれのアイコンの用途を説明しています。 — この要素は、ウェブサイトが iPad のホーム画面に保存された時のすばらしい高解像度なアイコンの提供といったことをカバーしています。

こうした種類のアイコンをいますぐすべて実装することに心配しすぎないでください — これはかなり高度な機能で、このコースが進んでも分からないはずです。ここでの主な目的は、他のウェブサイトのソースコードを見た時に出くわした場合にこれらが何か知ることです。

> **Note:** もし、サイトがセキュリティを向上させるために Content Security Policy (CSP) を使用している場合、ポリシーがファビコンに適用されます。ファビコンが読み込まれないという問題に遭遇したら、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーの [`img-src` ディレクティブ](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)がアクセスを妨害していないかを確認してください。

## HTML に CSS と JavaScript を追加する

最近のほとんどすべてのウェブサイトでは、格好よく見せるために {{glossary("CSS")}} や動画や地図、ゲームなどといったインタラクティブな機能を追加するために {{glossary("JavaScript")}} を用いています。これらは最も一般的に用いられ、それぞれ {{htmlelement("link")}} 要素、 {{htmlelement("script")}} 要素で表します。

- {{htmlelement("link")}} 要素は必ず HTML 文書の head の中に置きます。二つの属性をとり、 rel="stylesheet" はこれが文書のスタイルシートであることを示し、 href はスタイルシートファイルへのパスを表します。

  ```html
  <link rel="stylesheet" href="my-css-file.css">
  ```

- {{htmlelement("script")}} 要素は head におく必要はありません。実際、文書の最後の body の後 (`</body>` タグを閉じる前) に置かれることが多いです。これはブラウザーは全ての HTML の内容をすべて読み込んだ後 JavaScript を適用しようとすることをはっきりさせるためです (もし、 JavaScript がまだ存在しない要素にアクセスしようとしたらブラウザーはエラーを返します。)。

  ```html
  <script src="my-js-file.js"></script>
  ```

  **メモ**: `<script>` 要素は空要素のように見えるかもしれませんが、そうではありませんので、終了タグが必要です。また、外部のスクリプトファイルを読み込むのではなく、 `<script>` 要素の中にスクリプトを置くこともできます。

### アクティブラーニング: ページに CSS と JavaScript を追加する

1.  アクティブラーニングを始めるにあたって、私たちの [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/script.js) ,[style.css](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/style.css) をコピーしてローカルの同じフォルダに保存してください。ファイル名と拡張子が変わっていないことを確認してください。
2.  HTML ファイルをブラウザーとテキストエディタで開いてください。
3.  先に述べた情報に従って、 {{htmlelement("link")}} 要素と {{htmlelement("script")}} 要素を HTML に書き加えてください。すると CSS と JavaScript が HTML に適用されます。

以上を正しく行い、 HTML を保存してブラウザーを更新したら、変化がみられるでしょう。

![Example showing a page with CSS and JavaScript applied to it. The CSS has made the page go green, whereas the JavaScript has added a dynamic list to the page.](js-and-css.png)

- JavaScript が空のリストをページに追加しました。リスト内のどこかをクリックすると、ダイアログボックスが現れてリストの新しい要素となるテキストを入力するように求められます。 OK ボタンを押すと。リストに新しい要素が加わります。リストに既にある要素をクリックすると、ダイアログボックスが現れ要素の名前を変えることができます。
- CSS によって背景は緑になり文字が大きくなっています。 JavaScript によってページに加えられたいくつかのコンテンツもスタイルが適用されます (黒い境界線の付いた赤いバーは、 JS が生成したリストに CSS が追加したスタイルです)。

> **Note:** この演習で行きづまって CSS/JS が適用できなくなってしまった場合は、 [css-and-js.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/css-and-js.html) サンプルページをチェックしてみてください。

## 文書の主要な言語の設定

最後に、ページの言語を設定することができること (そしてそうすべきこと) に言及する価値があるでしょう。これは、 [lang 属性](/ja/docs/Web/HTML/Global_attributes/lang)を開始 HTML タグに追加することで実現することができます ([meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html) に表示され、以下に表示されています)。

```html
<html lang="en-US">
```

これは様々なところで役に立ちます。言語が設定されていれば、 検索エンジンによる HTML 文書のタグ付けがより効果的になりますし (たとえば、言語固有の結果を正しく表示できるようになるなど)、読み上げソフトを使用している視覚障碍者にとっても有用です ("six" はフランス語と英語の両方に存在しますが、発音が異なります)。

文書のサブセクションを異なる言語として認識されるように設定することもできます。たとえば、次のようにすると日本語のセクションを日本語として認識されるように設定できます。

```html
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
```

これらのコードは [ISO 639-1](https://ja.wikipedia.org/wiki/ISO_639-1) 規格で定義されています。それらについての詳細は、 [HTML と XML の言語タグ](https://www.w3.org/International/articles/language-tags/)にあります。

## まとめ

これで HTML head の弾丸ツアーは終了します。ここでできることは他にもたくさんありますが、この段階では徹底的なツアーでは退屈で混乱を招くことになるでしょうから、もっとも一般的なことに関する考えだけを紹介したかったのです。たった今、そこに到達しました。次回の記事では、HTML テキストの基礎について説明します。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール内の文書

- [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Head とは？HTML のメタデータ](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [ハイパーリンクを作成する](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [上級のテキスト整形](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [文書とウェブサイトの構造](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [HTML をデバッグする](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [手紙をマークアップする](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [コンテンツページを構造化する](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
