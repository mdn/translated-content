---
title: MathML の作成
short-title: 作成
slug: Web/MathML/Guides/Authoring
l10n:
  sourceCommit: f08990ec1e823fbe54fed15f859d43405e978fd7
---

このページでは、タグと属性をテキスト形式で記述する MathML 言語を使って数学を記述する方法を説明します。 HTML や SVG と同様に、このテキストは複雑なコンテンツではとても冗長になるため、[軽量マークアップ言語](https://ja.wikipedia.org/wiki/軽量マークアップ言語)からのコンバーターや [WYSIWYG](https://ja.wikipedia.org/wiki/WYSIWYG) 数式エディターなどの[適切な作成ツール](https://www.w3.org/wiki/Math_Tools#Authoring_tools)が必要です。そのようなツールは数多く利用できるので、網羅的なリストを提供することは不可能です。代わりに、この記事では一般的な手法と例に焦点を当てます。

## MathML の使用

MathML の数式が作成ツールで生成されるとしても、文書内の数式を適切に統合するためのヒントをいくつか知っておくことが重要です。

### HTML ページ中の MathML

それぞれの MathML 数式はルート [`math`](/ja/docs/Web/MathML/Reference/Element/math) 要素で表され、HTML ページに直接埋め込むことができます。既定では、数式はインラインで表示され、高さが最小になるように調整されます。 `display="block"` 属性を使用すると、複雑な数式を普通に、自分自身で段落を作って表示することができます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>HTML での MathML</title>
  </head>
  <body>
    <h1>HTML での MathML</h1>

    <p>
      2 の平方根分の 1 （インラインスタイル）:
      <math>
        <mfrac>
          <mn>1</mn>
          <msqrt>
            <mn>2</mn>
          </msqrt>
        </mfrac>
      </math>
    </p>

    <p>
      2 の平方根分の 1 （display スタイル）:
      <math display="block">
        <mfrac>
          <mn>1</mn>
          <msqrt>
            <mn>2</mn>
          </msqrt>
        </mfrac>
      </math>
    </p>
  </body>
</html>
```

> [!NOTE]
> XML 文書（XHTML、EPUB、OpenDocumentなど）の中で MathML を使用するには、それぞれの `<math>` 要素に明示的に `xmlns="http://www.w3.org/1998/Math/MathML"` 属性を配置してください。

> [!NOTE]
> 電子メールやインスタントメッセージクライアントの中には、 HTML 形式でメッセージを送受信できるものがあります。そのため、 MathML タグがマークアップサニタイザーによってフィルタリングされない限り、そのようなメッセージの中に数式を埋め込むことは使用可能です。

#### MathML に対応していないブラウザー向けの代替策

MathML に対応していないブラウザーに対しては、代替機構を提供することが推奨されます。もし文書が基本的な数式しか持たないのであれば、小さな [mathml.css](https://github.com/fred-wang/mathml.css) スタイルシートで十分かもしれません。条件付きで読み込むには、文書内のヘッダーに 1 行挿入するだけです。

```html
<script src="https://fred-wang.github.io/mathml.css/mspace.js"></script>
```

ただ、もっと高度な表現も使いたいという場合にはもう少し大きい [MathJax](https://www.mathjax.org/) ライブラリーを用いると良いでしょう。

```html
<script src="https://fred-wang.github.io/mathjax.js/mpadded-min.js"></script>
```

また、 MathML に対応していないブラウザーに対しては、ページの上部に警告を表示し、上記の代替案のいずれかをユーザーに選ばせることもできます。

```html
<script src="https://fred-wang.github.io/mathml-warning.js/mpadded-min.js"></script>
```

> [!NOTE]
> これらの小さなスクリプトは、機能検出（[mspace](/ja/docs/Web/MathML/Reference/Element/mspace) または [mpadded](/ja/docs/Web/MathML/Reference/Element/mpadded) 要素の機能検出）を行います。これは、[ブラウザの検出](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) よりも推奨されています。また、これらはオープンソースライセンスで配布されていますので、ご自身のサーバーにコピーして、必要に応じて自由に改変してください。

#### 数学記号用のフォント

[MathML フォント](/ja/docs/Web/MathML/Guides/Fonts)の記事で説明したように、数学フォントは MathML コンテンツをレンダリングするのに役立ちます。そのため、[そのようなフォントのインストール手順](/ja/docs/Web/MathML/Guides/Fonts#インストール手順)を共有したり、[ウェブフォント](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts)として指定されたフォントを提供することは常によい考えです。

[MathFonts ページ](https://fred-wang.github.io/MathFonts/)は、そのようなウェブフォントを適切なスタイルシートとともに提供しています。例えば、以下の行を文書内のヘッダーに挿入するだけで、フォールバックのウェブフォントとともに現代の欧文フォントを選択することができます。

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

いくつかのフォントが提案されており、異なるスタイルを選択することができます。例えば STIX の場合は次のようになります。

```html
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/STIX/mathfonts.css" />
```

> [!NOTE]
> MathFonts のページにあるフォントとスタイルシートはオープンソースライセンスの下で配布されていますので、自分自身でコピーされたり、必要なものに変更したりするのは無料です。

## 簡易記法からの変換

この節では、[軽量マークアップ言語](ja.wikipedia.org/wiki/軽量マークアップ言語)（例えば有名な [LaTeX](https://ja.wikipedia.org/wiki/LaTeX) 言語など）から MathML を変換するいくつかのツールをレビューします。

### クライアント側での変換

この手法では、数式はウェブページで直接書かれ、JavaScript ライブラリーが MathML への変換を行います。これはおそらく最も簡単なオプションですが、いくつかの課題もあります。余分な JavaScript コードを読み込んで実行しなければならない、作者は予約文字をエスケープしなければならない、ウェブクローラーは MathML 出力にアクセスすることができないなど...。

[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)を用いてソースコードをホスティングし、対応する MathML 出力を確実に挿入し、 [shadow サブツリー](/ja/docs/Web/API/Web_components/Using_shadow_DOM)経由でレンダリングすることができます。例えば、 [TeXZilla](https://github.com/fred-wang/TeXZilla) の [`<la-tex>`](https://fred-wang.github.io/TeXZilla/examples/customElement.html) 要素を用いれば、上記の [MathML の例](#mathml_in_html_pages)を以下のように簡潔に書き換えることができます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 における MathML</title>
    <script src="https://fred-wang.github.io/TeXZilla/TeXZilla-min.js"></script>
    <script src="https://fred-wang.github.io/TeXZilla/examples/customElement.js"></script>
  </head>
  <body>
    <h1>HTML5 における MathML</h1>

    <p>
      2 の平方根分の 1 （インラインスタイル）:
      <la-tex>\frac{1}{\sqrt{2}}</la-tex>
    </p>

    <p>
      2 の平方根分の 1 （display スタイル）:
      <la-tex display="block">\frac{1}{\sqrt{2}}</la-tex>
    </p>
  </body>
</html>
```

LaTeXに慣れない場合は、 [ASCIIMath](https://asciimath.org/#syntax) や [jqMath](https://mathscribe.com/author/jqmath.html) などの構文も利用できます。 JavaScript ライブラリーを読み込んで、適切な区切り文字を使用してください。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>ASCII の MathML</title>
    …
    <!-- ASCIIMathML.js -->
    <script src="/path/to/ASCIIMathML.js"></script>
    …
    <!-- jqMath -->
    <script src="https://mathscribe.com/mathscribe/jquery-1.4.3.min.js"></script>
    <script src="https://mathscribe.com/mathscribe/jqmath-etc-0.4.6.min.js"></script>
    …
  </head>
  <body>
    …
    <p>2 の平方根分の 1 （インラインスタイル、ASCIIMath）: `1/(sqrt 2)`</p>
    …
    <p>2 の平方根分の 1 （インラインスタイル、jqMath）: $1/√2$</p>
    …
    <p>2 の平方根分の 1 （display スタイル、jqMath）: $$1/√2$$</p>
    …
  </body>
</html>
```

### コマンドラインのプログラム

ページ読み込み時に MathML 式を生成する代わりに、コマンドラインツールに頼ることができます。これにより、静的な MathML コンテンツを持つページがより速く読み込まれるようになります。[クライアント側での変換](#クライアント側での変換)のコンテンツを持つページ `input.html` をもう一度考えてみましょう。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 における MathML</title>
  </head>
  <body>
    <h1>HTML5 における MathML</h1>
    <p>2 の平方根分の 1 （インラインスタイル）: $\frac{1}{\sqrt{2}}$</p>
    <p>2 の平方根分の 1 （display スタイル）: $$\frac{1}{\sqrt{2}}$$</p>
  </body>
</html>
```

このページには [`script`](/ja/docs/Web/HTML/Reference/Elements/script) タグがありません。代わりに、 [Node.js](https://nodejs.org/) と [TeXZilla](https://github.com/fred-wang/TeXZilla/wiki/Using-TeXZilla#usage-from-the-command-line) を使用すると、以下のコマンドラインで変換が実行されます。

```bash
cat input.html | node TeXZilla.js streamfilter > output.html
```

このコマンドを実行すると、以下の HTML 出力を格納したファイル `output.html` が作成されます。ドルで区切られた数式は MathML に変換されています。

```html-nolint
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 における MathML</title>
  </head>
  <body>
    <h1>HTML5 における MathML</h1>

    <p>
      2 の平方根分の 1 （インラインスタイル）:
      <math><semantics><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><annotation encoding="TeX">\frac{1}{\sqrt{2}}</annotation></semantics></math>
    </p>

    <p>
      2 の平方根分の 1 （display スタイル）:
      <math display="block"><semantics><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><annotation encoding="TeX">\frac{1}{\sqrt{2}}</annotation></semantics></math>
    </p>
  </body>
</html>
```

任意の LaTeX 文書を MathML コンテンツを含む文書に変換することを目的とした、より洗練されたツールがあります。例えば、 [LaTeXML](https://math.nist.gov/~BMiller/LaTeXML/) を使って以下のコマンドを実行すると、 `foo.tex` が HTML や EPUB 文書に変換されます。

```bash
latexmlc --dest foo.html foo.tex # HTML 文書 foo.html を生成
latexmlc --dest foo.epub foo.tex # EPUB 文書 foo.epub を生成
```

`latexmlc` は `--javascript` 引数を受け付けます。この引数を使用することで、上記の[代替スクリプト](#mathml_に対応していないブラウザー向けの代替策)のいずれかを含めることができます。

```bash
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathml.css/mspace.js foo.tex  # Add the CSS fallback
latexmlc --dest foo.html --javascript=https://fred-wang.github.io/mathjax.js/mpadded-min.js foo.tex # Add the MathJax fallback
```

> [!NOTE]
> コマンドラインツールはサーバー側で使用することができます。例えば、 [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) は [Mathoid](https://github.com/wikimedia/mediawiki-services-mathoid) を介して LaTeX から MathML への変換を行います。

## グラフィカルインターフェイス

この節では、グラフィカルインターフェイスを提供するいくつかの編集ツールをレビューします。

### 入力ボックス

単純な手法は、[単純構文からのコンバーター](#単純構文からのコンバーター)を数学の単純な入力ボックスとして統合することです。例えば、 [Thunderbird](https://www.thunderbird.net/ja/) や [SeaMonkey](https://www.seamonkey-project.org/) には、ポップアップウィンドウを開くための **Insert > Math** コマンドが指定され、 LaTeX から MathML への入力フィールドとライブ MathML プレビューが表示されます：

![Thunderbird の LaTeX 入力ボックス](thunderbird.png)

> [!NOTE]
> また、 **Insert > HTML** コマンドを使用して、任意の MathML コンテンツを貼り付けることもできます。

[LibreOffice](https://www.libreoffice.org/) の数式エディター（ファイル → 新しい数式 → 数式）は使用可能な拡張を示しています。 _StartMath_ 構文の入力ボックスには、あらかじめ定義した数学的構文を挿入するための数式パネルが追加されています。

![StarMath 入力ボックス (Libre Office)](libreoffice.png)

> [!NOTE]
> libreoffice の MathML コードを入手するには、ドキュメントを `mml` として保存し、お気に入りのエディターで開いてください。

### WYSIWYG エディター

他にも、 WYSIWYG インターフェイスに直接統合された数式編集機能を指定されたエディターがあります。次のスクリーンショットは、 [LyX](https://www.lyx.org/) と [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html) のもので、どちらも HTML エクスポートに対応しています。

![Lyx example](lyx.png)

![TeXmacs example](texmacs.png)

> [!NOTE]
> 既定では、 Lyx と TeXmacs は HTML 出力に数式の画像を使用します。その代わりに MathML を選択するには、前者では[こちらの指示に従ってください](https://github.com/brucemiller/LaTeXML/wiki/Integrating-LaTeXML-into-TeX-editors#lyx)。後者では`ユーザー設定 > 変換 > 数式を MathML としてエクスポート`を選択してください。

## 光学文字認識・手書き文字認識

数学を入力する最後のオプションは、[光学式文字認識 (OCR)](https://ja.wikipedia.org/wiki/光学文字認識) や[手書き文字認識](https://ja.wikipedia.org/wiki/手書き文字認識)のユーザーインターフェイスによるものです。これらのツールのいくつかは数式に対応しており、 MathML としてエクスポートすることができます。以下のスクリーンショットは [MyScript のデモ](https://webdemo.myscript.com/views/math/index.html)を示しています。

![MyScript](myscript.png)
