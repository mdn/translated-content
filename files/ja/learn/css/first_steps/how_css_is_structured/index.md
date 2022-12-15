---
title: CSS の全体像
slug: Learn/CSS/First_steps/How_CSS_is_structured
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

CSS の概要と基本的な使い方について理解できたので、今度は CSS の構造をもう少し詳しく見てみましょう。

| 前提条件: | 基本的なコンピュータリテラシー、 [基本的なソフトウェアのインストール](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)、 基本的な [ファイル操作](/ja/Learn/Getting_started_with_the_web/Dealing_with_files)、 HTML の基本 ([HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)で学習)、[基本的な CSS の動作](/ja/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works) |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | CSS の基本的な構文の構造を詳細に学ぶ。                                                                                                                                                                                                                                                                                                                                                |

## CSS を HTML に適用する

まず、文書に CSS を適用する方法として、外部スタイルシートを使う方法、内部スタイルシートを使う方法、インラインスタイルを使う方法の 3 つの方法を見てみましょう。

### 外部スタイルシート

外部スタイルシートには `.css` という拡張子を持つ別のファイルに CSS が含まれています。これは、文書に CSS を持ち込む最も一般的で便利な方法です。1 つの CSS ファイルを複数のウェブページにリンクして、すべてのウェブページを同じ CSS スタイルシートでスタイル付けすることができます。 [CSS 入門](/ja/docs/Learn/CSS/First_steps/Getting_started)では、外部のスタイルシートをウェブページにリンクしました。

HTML の `<link>` 要素から外部 CSS スタイルシートを参照しています。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

CSS ファイルはこのようになります。

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

{{htmlelement("link")}} 要素の `href` 属性は、ファイルシステム上のファイルを参照する必要があります。上の例では、 CSS ファイルは HTML 文書と同じフォルダーにありますが、どこか別の場所に配置してパスを調整することもできます。以下に 3 つの例を示します。

```html
<!-- 現在のディレクトリーの中の styles というサブディレクトリーの中 -->
<link rel="stylesheet" href="styles/style.css">

<!-- カレントディレクトリーの中にある styles というサブディレクトリーの中にある、 general というサブディレクトリーの中 -->
<link rel="stylesheet" href="styles/general/style.css">

<!-- ひとつ上のレベルのディレクトリーに行き、その下にある styles というサブディレクトリーの中 -->
<link rel="stylesheet" href="../styles/style.css">
```

### 内部スタイルシート

内部スタイルシートは、 HTML 文書の中に配置します。内部スタイルシートを作成するには、 CSS を HTML 文書の {{htmlelement("head")}} の中にある {{htmlelement("style")}} 要素の中に入れてください。

例えば、 HTML はこのようになります。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

状況によっては、内部スタイルシートが便利な場合もあります。たとえば、コンテンツ管理システムを使用している場合、外部の CSS ファイルを変更することがブロックされているかもしれません。

しかし、複数のページを持つサイトでは、内部スタイルシートは効率の悪い作業方法になります。内部スタイルシートを使用して、複数のページに統一された CSS スタイルを適用するには、そのスタイルを使用するすべてのウェブページに内部スタイルシートをコピーしなければなりません。効率性の低下はサイトの保守にも影響します。内部スタイルシートの CSS では、1 つの簡単なスタイル変更でも、複数のウェブページの編集が必要になるリスクがあります。

### インラインスタイル

インラインスタイルは、単一の HTML 要素のみに影響を与える CSS 宣言で、 `style` 属性の中に記述します。 HTML 文書におけるインラインスタイルの実装は次のようになります。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**この方法での CSS の使用は、可能な限り避けてください。**まず、 CSS の実装の中では最も保守の効率が悪いものです。一つのスタイルを変更するために、一つのウェブページ内で複数の編集が必要になるかもしれません。第二に、インライン CSS はプレゼンテーション用のコードを HTML やコンテンツに混ぜてしまうため、すべてが読んだり理解したりしにくいものになってしまいます。コードとコンテンツを分離すれば、ウェブサイトで働くすべての人にとって保守が容易になります。

インラインスタイルが一般的な状況はいくつかあります。作業環境が非常に制限されている場合は、インラインスタイルの使用に頼らざるを得ないかもしれません。例えば、 CMS では HTML の本文しか編集できない場合があります。また、できるだけ多くのメールクライアントとの互換性を実現するために、 HTML メールでインラインスタイルが多用されているのを見ることもあるでしょう。

## CSS を試してみる

次の演習では、コンピューターにフォルダーを作成してください。フォルダーには好きな名前をつけてください。以下のテキストをコピーして、フォルダーの中に 2 つのファイルを作成してください。

**index.html:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My CSS experiments</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <p>Create your test HTML here</p>

  </body>
</html>
```

**styles.css:**

```css
/* Create your test CSS here */

p {
  color: red;
}
```

試してみたい CSS を見つけたら、 HTML の `<body>` の内容をスタイル付けする HTML に置き換え、テスト用の CSS コードを CSS ファイルに追加してください。

別の方法として、以下のインタラクティブなエディターを使用することもできます。

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

楽しみながら、先に進んでいきましょう。

## セレクター

セレクターは CSS に欠かせない構成要素です。[CSS 入門](/ja/docs/Learn/CSS/First_steps/Getting_started)のチュートリアルでは、すでにさまざまな種類のセレクターを見てきました。セレクターは、 HTML 文書のなかでスタイルを適用する対象を指定するものです。もし CSS が期待通りにコンテンツに適用されなかったら、セレクターが一致すると思っていた方法で一致していないのかもしれません。

それぞれの CSS 規則の先頭には、セレクターまたはセレクターのリストを書きます。これによって、ブラウザーにどの要素に CSS 規則を適用するかを指示します。次のコード例は、いずれも有効なセレクター、またはセレクターのリストです。

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

上記のセレクターを使った CSS 規則を作ってみてください。セレクターによってスタイル付けされる HTML を追加します。上記の構文に馴染みのないものがあれば、 MDN を検索してみてください。

> **メモ:** 次のモジュールの記事 [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors) で、セレクターについてより詳しく学ぶことができます。

### 詳細度

2 つのセレクターが同じ HTML 要素を選択するシナリオに遭遇するかもしれません。以下のスタイルシートを考えてみましょう。 `p` セレクターで段落のテキストを青に設定します。しかし、選択された要素のテキストを赤に設定するクラスもあります。

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

HTML 文書の中に `special` のクラスを持つ段落があるとします。両方の規則が適用されます。どちらのセレクターが優先されるでしょうか？段落のテキストが青と赤のどちらになると思いますか？

```html
<p class="special">What color am I?</p>
```

CSS 言語には、競合が発生した場合にどちらのセレクターが強いかを制御するための規則があります。これらの規則は**カスケード** (cascade) と**詳細度** (specificity) と呼ばれています。以下のコードブロックでは、 `p` セレクターに対して 2 つの規則が定義されていますが、段落テキストは青くなります。これは、段落テキストを青に設定する宣言がスタイルシートの後に現れているからです。後のスタイルは、それより前のスタイルシートに現れた競合するスタイルを置き換えます。これが**カスケード**規則です。

```css
p {
  color: red;
}

p {
  color: blue;
}
```

しかし、クラスセレクターと要素セレクターの間に競合がある前の例では、クラスが優先され、赤い段落テキストがレンダリングされます。スタイルシートの後方に競合するスタイルが表示されているにもかかわらず、どうしてこのようなことが起こるのでしょうか？クラスは、要素セレクターよりも**詳細度**が高いことになっており、より具体的であると評価されるので、他の競合するスタイル宣言をキャンセルしたのです。

この実験を自分でやってみましょう。 HTML を追加して、2 つの `p { ... }` 規則をスタイルシートに追加します。次に、最初の `p` セレクターを `.special` に変更して、それがスタイルをどのように変えるかを見てみましょう。

詳細度とカスケードの規則は、最初は複雑に見えるかもしれません。これらの規則は、 CSS に慣れてくると理解しやすくなります。次のモジュールの [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) の章では、詳細度の計算方法を含めて詳しく説明しています。

今のところ、詳細度が存在することを覚えておいてください。スタイルシートの他の何かがより高い詳細度を持っているために、 CSS が期待通りに適用されないことがあります。 1 つの要素に複数の規則が適用される可能性があることを認識することは、この種の問題を解決するための最初のステップです。

## プロパティと値

もっとも基本的なレベルでは、 CSS は 2 つの部品でできています。

- **プロパティ**: スタイルに関して変更できる何らかの特徴をあらわす、人間が理解できる識別子です。例えば、 {{cssxref("font-size")}}, {{cssxref("width")}}, {{cssxref("background-color")}} などです。
- **値**: 各プロパティには値が割り当てられています。この値は、プロパティをどのようにスタイル付けするかを示します。

次の例では、一組のプロパティと値を強調表示しています。プロパティ名は `color` で、値は `blue` です。

![A declaration highlighted in the CSS](declaration.png)

プロパティが値と組み合わせられているとき、この組み合わせを _CSS 宣言_ (CSS declaration) と呼びます。 CSS 宣言は _CSS 宣言ブロック_ (CSS Declaration Blocks) の中に入っています。次のコード例では CSS の宣言ブロックを強調しています。

![A highlighted declaration block](declaration-block.png)

そして、 CSS 宣言ブロックは*セレクター*と組になって _CSS 規則セット_ (または _CSS 規則_) になります。1 つは `h1` セレクター用、もう 1 つは `p` セレクター用です。色付きのハイライトは `h1` 規則を識別します。

![The rule for h1 highlighted](rules.png)

CSS プロパティを特定の値に設定することが、文書のレイアウトとスタイルを定義する主な方法です。 CSS エンジンは、どの宣言がページの各要素に適用されるかを計算します。

> **警告:** CSS のプロパティと値は大文字と小文字を区別します。それぞれのプロパティと値の組はコロン (`:`) で区切られます。

**以下に挙げたプロパティの様々な値を調べてみてください。それぞれの HTML 要素にスタイルを適用する CSS 規則を書いてみてください。**

- {{cssxref("font-size")}}
- {{cssxref("width")}}
- {{cssxref("background-color")}}
- {{cssxref("color")}}
- {{cssxref("border")}}

> **警告:** プロパティが不明だった場合、または指定されたプロパティの値が妥当ではなかった場合は、宣言が*無効*なものとして扱われます。ブラウザーの CSS エンジンはこれを完全に無視します。

> **警告:** CSS (および他のウェブ標準) では、言語ごとに綴りに揺れがあったり確実でない場合には、アメリカ綴りを標準とすることが合意されています。例えば、 `color` は `color` と綴るべきであり、 `colour` では動作しません。

### 関数

ほとんどの値は比較的単純なキーワードや数値ですが、関数の形をとる値もあります。例として、`calc()` 関数があります。これは CSS 内で簡単な数式を行うことができます。

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

これは次のように表示されます。

{{EmbedLiveSample('calc_example', '100%', 200)}}

関数は、関数名と、関数に渡す値を囲む括弧で構成されています。上記の `calc()` の例では、値は、このボックスの幅を含むブロックの幅の 90% から 30 ピクセルを引いた値と定義しています。計算の結果は、事前に計算して静的な値として入力できるものではありません。

他の例としては、 {{cssxref("transform")}} のさまざまな値、たとえば `rotate()` などがあります。

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

上記のコードの出力は次のようになります。

{{EmbedLiveSample('transform_example', '100%', 200)}}

以下に挙げたプロパティのそれぞれの値を調べてみましょう。ぞれぞれの HTML 要素にスタイルを適用する CSS 規則を記述してみましょう。

- {{cssxref("transform")}}
- {{cssxref("background-image")}}、特に gradient の値
- {{cssxref("color")}}、特に rgb/rgba/hsl/hsla の値

## アット規則

CSS の[アット規則](/ja/docs/Web/CSS/At-rule) は、 CSS が実行すること、またはそれがどのように動作するべきかの指示を提供します。いくつかのアット規則は、キーワードと値だけのシンプルなものです。例えば、 `@import` はスタイルシートを別の CSS スタイルシートにインポートします。

```css
@import 'styles2.css';
```

よく目にするであろうアット規則が `@media` があり、[メディアクエリ](/ja/docs/Web/CSS/Media_Queries)を作成するために使用されます。メディアクエリは CSS スタイルを提供する条件を使用します。

以下の例では、スタイルシートは `<body>` 要素に既定でピンクの背景を定義しています。しかし、ブラウザーのビューポートが 30em よりも広い場合は、青い背景を定義するメディアクエリが続いています。

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

これ以外のアット規則にも、これからのチュートリアルで遭遇するでしょう。

**ビューポートの幅に基づいてスタイルを変更するメディアクエリを追加できるかどうかを確認してください。ブラウザーウィンドウの幅を変更して結果を確認してみてください。**

## 一括指定

{{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, {{cssxref("margin")}} のようなプロパティは**一括指定プロパティ** (shorthand properties) と呼ばれています。これは一括指定プロパティが複数の値を 1 行で設定するからです。

例えば、コードのこの 1 行を見てください。

```css
/* 4 つの値による一括定義、例えば padding や margin
   では、値が適用される順序は top, right, bottom, left の順 (top から時計回り) です。
   他の種類の一括指定もあり、例えば 2 つの値による一括指定を padding/margin に設定すると、
   top/bottom と left/right になります。*/
padding: 10px 15px 15px 5px;
```

これは以下の 4 行のコードと同等です。

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

次の 1 行を見てください。

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

以下の 5 行と同等です。

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

コースの後半では、他にも多くの一括指定プロパティの例に遭遇します。 MDN の [CSS リファレンス](/ja/docs/Web/CSS/Reference)は、あらゆる一括指定プロパティについてのより詳しい情報を得るための良いリソースです。

**自分の CSS の練習でこれらの前述) 使用してみて、それがどのように動作するかをよりよく理解するようにしてください。また、様々な値を使って実験してみてください。**

> **警告:** CSS の一括指定を使用する際に、省略した値がどのようにリセットされるかはあまり目立たない側面です。 CSS 一括指定で指定されていない値は初期値に戻ります。これは、 CSS 一括指定で省略された値は、**以前に設定された値を上書きしてしまう**可能性があることを意味します。

## コメント

どんなコーディング作業でもそうですが、 CSS と一緒にコメントを書くのがベストプラクティスです。これは、後で修正や強化のために戻ってきたときに、コードがどのように動作するかを思い出すのに役立ちます。また、他の人がコードを理解するのにも役立ちます。

CSS のコメントは `/*` で始まり `*/` で終わります。以下の例では、コメントはコードのそれぞれの区間のの先頭をマークしています。これは、コードベースが大きくなるにつれて、コードベースを移動するのに役立ちます。このようなコメントの付け方をすると、コードエディターでコメントを検索することで、コードの区間を効率的に見つけることができます。

```css
/* 基本的な要素のスタイル付けを扱う */
/* -------------------------------------------------------------------------------------------- */
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* 大きな画面やウィンドウで読みやすいように、グローバルフォントの大きさを
     大きくします。 */
  body {
    font-size: 130%;
  }
}

h1 {font-size: 1.5em;}

/* DOM で入れ子になっている特定の要素を処理します。 */
/* -------------------------------------------------------------------------------------------- */
div p, #id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

コードを「コメントアウト」すると、試験的にコードの区間を一時的に無効にするのにも便利です。以下の例では、 `.special` の規則はコードを「コメントアウト」することで無効化されています。

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

**CSS にコメントを追加してみましょう。**

## ホワイトスペース

ホワイトスペースとは、半角スペース、タブ、改行を意味します。ブラウザーが HTML のホワイトスペースを無視するように、ブラウザーは CSS の中のホワイトスペースを無視します。ホワイトスペースの価値は、読みやすさを向上させるためにあります。

下の例では、それぞれの宣言 (と規則の先頭/末尾) が個別の行で行われています。これは間違いなく、CSS を書くのに良い方法です。これにより、CSS の保守や理解が容易になります。

```css
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

次の例は、同等の CSS をより圧縮したものです。2 つの例は同じように動作しますが、下の例の方が読みにくいでしょう。

```css
body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) { body {font-size: 130%;} }

h1 {font-size: 1.5em;}

div p, #id:first-line {background-color: red; border-radius: 3px;}
div p {margin: 0; padding: 1em;}
div p + p {padding-top: 0;}
```

自分のプロジェクトでは、個人的な好みに応じてコードを書式化します。チームプロジェクトでは、チームやプロジェクトに独自のスタイルガイドがあるかもしれません。

> **警告:** CSS 宣言ではホワイトスペースが値を区切っていますが、**プロパティ名にホワイトスペースが含まれることはありません。**

**例えば、以下の宣言は正しい CSS です。**

```css
margin: 0 auto;
padding-left: 10px;
```

**次の例は誤った CSS です:**

```css
margin: 0auto;
padding- left: 10px;
```

**`0auto` という書き方をブラウザーは正しい値と解釈してくれません。なぜなら、`margin` プロパティの値 `0`、および `auto` はふたつの別々の値だからです。`padding-`もまた、ブラウザーが認識できる正しいプロパティ名ではありません。**

**CSS のプロパティに対する複数の値どうしを区別するためには、最低でも 1 個以上の空白をあいだにおく必要があります。また、プロパティの名称や値のひとつひとつは、その一部分だけを切り離したりせず続けて書かなければなりません。**

**自分の CSS のなかで空白をさまざまに入れてみて、どうすれば CSS が正しく機能して、どうすれば機能しなくなるかたしかめてみましょう。**

## 次のステップ

**ブラウザーが HTML や CSS を解釈してウェブページに作り替えていくながれを多少なりとも知っておくことは開発の役にたちます。そこで、次の記事 「[CSS はどう働くか？」](/ja/docs/Learn/CSS/First_steps/How_CSS_works) では、ブラウザーが Web ページを生成する過程についてみていきましょう。**

**{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}**

## このモジュール内

1. [CSS とは何か？](/ja/docs/Learn/CSS/First_steps/What_is_CSS)
2. [CSS 入門](/ja/docs/Learn/CSS/First_steps/Getting_started)
3. [CSS の全体像](/ja/docs/Learn/CSS/First_steps/How_CSS_is_structured)
4. [CSS はどう働くか？](/ja/docs/Learn/CSS/First_steps/How_CSS_works)
5. [新しい知識を使う](/ja/docs/Learn/CSS/First_steps/Using_your_new_knowledge)
