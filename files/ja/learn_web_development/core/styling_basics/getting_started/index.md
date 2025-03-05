---
title: CSS 入門
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

この記事では、かんたんな HTML コードに CSS を適用させ、その過程でこの言語についての実用的なことを学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >ソフトウェアのインストール</a
        >、
        <a
          href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >ファイルの扱い</a
        >についての基本的な知識、 HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML 入門</a
        >を学んでいること）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>CSS を HTML 文書に適用すること。</li>
          <li>基本的な CSS を書く実践的な経験。</li>
          <li>基本的なセレクター型と結合子の操作の知識。</li>
          <li>CSS に適用される状態の概念。</li>
          <li>その他の CSS 構文機能（アットルール、関数、一括指定プロパティ、ホワイトスペースなど）に慣れること。</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML からはじめよう

HTML 文書から始めましょう。下記からコードをコピーして、自分のコンピューターで作業することができます。下記のコードを、自分のコンピューター上のフォルダー内に、 `index.html` として保存してください。

```html-nolint live-sample___unstyled
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>CSS 入門</title>
  </head>

  <body>
    <h1>これは見出し 1 です</h1>

    <p>
      これはテキストの段落です。このテキストには
      <span>span 要素</span>と<a href="https://example.com"
      >リンク</a>があります。
    </p>

    <p>
      これは 2 つ目の段落です。ここには<em>強調された</em>要素があります。
    </p>

    <ul>
      <li>1 つ目のアイテム</li>
      <li>2 つ目のアイテム</li>
      <li><em>3 つ目</em>のアイテム</li>
    </ul>
  </body>
</html>
```

これは次のように表示されます。

{{EmbedLiveSample("unstyled", "", "240px")}}

> [!NOTE]
> もし簡単にファイルの作れないデバイスや環境でこの記事を読んでいても心配しないでください。上記のライブサンプルの "Play" ボタンをクリックすると、 MDN Playground で開きます。そこでは、下部に記載されている指示に従って CSS と HTML コードを編集し、結合された結果をライブで確認することができます。

## 文書に CSS を追加

一番最初にしなければならないことは、 HTML 文書に使用したい CSS ルールがあることを指示することです。 HTML 文書に CSS を適用するためによく使われる方法は、外部スタイルシート、内部スタイルシート、インラインスタイルの 3 つがあります。これらを見てみましょう。

### 外部スタイルシート

外部スタイルシートは、拡張子が `.css` の独立したファイルに CSS を格納します。これは、 CSS を文書に適用する最も一般的で便利な方法です。単一の CSS ファイルを複数のウェブページにリンクすると、すべて同じ CSS スタイルシートでスタイルを適用することができます。

HTML 文書と同じフォルダーにファイルをつくり、 `styles.css` として保存してください。

`styles.css` を `index.html` にリンクさせるには、HTML 文書にある {{htmlelement("head")}} 要素の中に次のコードを追記してください。

```html
<link rel="stylesheet" href="styles.css" />
```

{{htmlelement("link")}} 要素はブラウザーに、スタイルシートがあることを `rel` 属性で伝え、 `href` 属性の値でスタイルシートのある場所を伝えます。 `styles.css` に以下のルールを記述すれば、CSS が動作するかテストできます。使っているコードエディターで次ののコードを CSS ファイルに追記してください。

```css
h1 {
  color: red;
}
```

HTML ファイルと CSS ファイルを保存し、ブラウザーでこのページを再読み込みしてみましょう。文書の先頭にある見出し 1 が赤くなるはずです。もしそうなったら、おめでとうございます。 CSS の HTML への適用が成功です。もしそうならなかったら、すべてを正しく入力しているか慎重に確認してください。

#### 異なる場所へのスタイルシートの配置

上記の例では、 CSS ファイルは HTML 文書と同じフォルダー内にありますが、別の場所に配置してパスを調整することも可能です（[HTML の画像](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images)と同様）。以下に 3 つの例を示します。

```html-nolint
<!-- 現在のディレクトリーにある styles というサブディレクトリーに -->
<link rel="stylesheet" href="styles/style.css" />

<!-- 現在のディレクトリーにある styles というサブディレクトリーにある general というサブディレクトリーに -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- ディレクトリーのレベルを 1 つ戻り、それからその中の styles というサブディレクトリーに -->
<link rel="stylesheet" href="../styles/style.css" />
```

### 内部スタイルシート

内部スタイルシートは、 HTML 文書の中に配置します。内部スタイルシートを作成するには、 CSS を HTML 文書の {{htmlelement("head")}} の中にある {{htmlelement("style")}} 要素の中に入れてください。

HTML 文書内の `<head>` および `</head>` タグの間に、次のスニペットを追加してください。

```html
<style>
  p {
    color: purple;
  }
</style>
```

保存して再読み込みすると、すべての段落が紫色に変わります。

状況によっては、内部スタイルシートが便利な場合もあります。たとえば、コンテンツ管理システムを使用している場合、外部の CSS ファイルを変更することがブロックされているかもしれません。

しかし、複数のページを持つサイトでは、内部スタイルシートは効率の悪い作業方法になります。内部スタイルシートを使用して、複数のページに統一された CSS スタイルを適用するには、そのスタイルを使用するすべてのウェブページに内部スタイルシートをコピーしなければなりません。効率性の低下はサイトの保守にも影響します。内部スタイルシートの CSS では、1 つの簡単なスタイル変更でも、複数のウェブページの編集が必要になるリスクがあります。

次に行く前に、 HTML の例から `<style>` 要素とその中身を除去しておきましょう。

### インラインスタイル

インラインスタイルは、単一の HTML 要素のみに影響を与える CSS 宣言で、 `style` 属性の中に記述します。ここで実装してみましょう。

`style` 属性を HTML の {{htmlelement("span")}} 要素に追加すると、次のような形になります。

```html
<span style="color: purple; font-weight: bold">span 要素</span>
```

保存して再読み込みすると、 `<span>` 内のテキストだけが紫色で太字になります。 `style` 属性内に（セミコロンで区切って）さらに宣言を追加したり、他の要素にも `style` 属性を追加したりしてみてください。

試してみた後は、すべての `style` 属性を除去しておきましょう。

**この方法での CSS の使用は、可能な限り避けてください。** まず、 CSS の実装の中では最も保守の効率が悪いものです。一つのスタイルを変更するために、一つのウェブページ内で複数の編集が必要になるかもしれません。第二に、インライン CSS はプレゼンテーション用のコードを HTML やコンテンツに混ぜてしまうため、すべてが読んだり理解したりしにくいものになってしまいます。コードとコンテンツを分離すれば、ウェブサイトで働くすべての人にとって保守が容易になります。

インラインスタイルが一般的な状況はいくつかあります。作業環境が非常に制限されている場合は、インラインスタイルの使用に頼らざるを得ないかもしれません。例えば、 CMS では HTML の本文しか編集できない場合があります。また、できるだけ多くのメールクライアントとの互換性を実現するために、 HTML メールでインラインスタイルが多用されているのを見ることもあるでしょう。 JavaScript で動的にスタイルを適用する際にインラインスタイルを設定することも一般的です。

## よくあるセレクターの使用

この節では、よく見かけるセレクターのいくつかを簡単に紹介していきます。

### HTML 要素の選択

見出しを赤くすることで、 HTML 要素を対象としたスタイル設定を試しました。**要素セレクター**（または**型セレクター**）を対象としたのです。これは、 HTML 要素名を直接照合するセレクターです。文書内のすべての段落に焦点をあてるなら、セレクターとして `p` を使うことができます。すべての段落を緑色にするために次を使います。

```css
p {
  color: green;
}
```

セレクターをカンマで区切ることによって、同時に複数のセレクターを対象にすることができます。もしすべての段落とリストすべてを緑にしたければ、CSS のルールセットは次のようになります。

```css
p,
li {
  color: green;
}
```

以下の例を（"Play" をクリックして）試してみるか、またはローカルコピーで試してみてください。

```html-nolint hidden live-sample___started-types
<h1>これは見出し 1 です</h1>

<p>
  これはテキストの段落です。このテキストには <span>span 要素</span>と<a href="http://example.com">リンク</a>もあります。
</p>

<p>これは 2 つ目の段落です。ここには<em>強調された</em>要素があります。</p>

<ul>
  <li>1 つ目のアイテム</li>
  <li>2 つ目のアイテム</li>
  <li><em>3 つ目</em>のアイテム</li>
</ul>
```

```css live-sample___started-types
h1 {
  color: red;
}

p,
li {
}
```

{{EmbedLiveSample("started-types", "", "240px")}}

### クラスの追加

ここまで、HTML 要素名をもとにしたスタイル設定をしてきました。これは、文書内にあるその要素すべてをおなじ見ばえにしたいときには有効です。しかしそんな場合はほとんどないので、ほかを変えずに一部の要素だけを選ぶ方法を知っておく必要があります。もっとも一般的なのが、HTML 要素にクラスを追加し、それに焦点をあてる方法です。

1. HTML 文書内で、 [class 属性](/ja/docs/Web/HTML/Global_attributes/class)をリストの 2 番目のアイテムへ、こんな風に加えてください。

   ```html
   <ul>
     <li>1 つ目のアイテム</li>
     <li class="special">2 つ目のアイテム</li>
     <li><em>3 つ目</em>のアイテム</li>
   </ul>
   ```

2. ピリオドから始まるセレクターを作ることで、`special` クラスを対象にすることができます。以下のものを CSS に加えてください。

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

保存してからブラウザーを再読み込みし結果を見てみましょう。

ページ上でおなじ見た目にしたいリストアイテムに対して `special` クラスを適用できます。たとえば、段落内にある`<span>` 要素にも同じく、オレンジの太字にしたいかもしれません。これにも `class` 属性の値として `special` を加えてみてください。

### 文書内の場所に基づくスタイル設定

文書のどこにあるかで外見を変えたい時があります。それを助けるセレクターはいくつかありますが、いまは 2 種類だけ見てみましょう。HTML 文書には 2 つの `<em>` 要素があります。ひとつは段落の中に、もうひとつはリストアイテムの中に、です。`<li>` 要素の中にある `<em>` だけを選びたいとき、**子孫結合子**と呼ばれるセレクターを使うことができます。これは 2 つの異なるセレクターを空白で区切ることで設置できます。

CSS に次ののルールセットを追加してください。

```css
li em {
  color: rebeccapurple;
}
```

このセレクターは `<li>` 要素の中にある `<em>` 要素を選択します。よって HTML 文書の中で、3 番目のリストアイテム内にある `<em>` 要素は紫に変わっていますが、段落内にある `<em>` 要素は変更されていません。

HTML 文書内で、見出しの直後に来る段落を見出しと同じ階層レベルにしたいと思うことがあるかもしれません。このときはセレクター同士の間に `+` を入れます（**次兄弟結合子**）。

いま扱っている CSS に次ののルールセットを追加してみてください。

```css
h1 + p {
  font-size: 200%;
}
```

次のライブサンプルには、上に挙げた 2 つのルールセットが含まれています。ここに、段落内にある `span` 要素を赤くするルールセットを追加してください。正しくできれば第 1 段落の `span` 要素は赤くなり、最初のリストアイテムは色が変わらないはずです。

```html-nolint hidden live-sample___started-combinators
<h1>これは見出し 1 です</h1>

<p>
  これはテキストの段落です。このテキストには <span>span 要素</span>と<a href="http://example.com">リンク</a>もあります。
</p>

<p>これは 2 つ目の段落です。ここには<em>強調された</em>要素があります。</p>

<ul>
  <li>1 つ目のアイテム</li>
  <li>2 つ目のアイテム</li>
  <li><em>3 つ目</em>のアイテム</li>
</ul>
```

```css live-sample___started-combinators
li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}
```

{{EmbedLiveSample("started-combinators", "", "340px")}}

> [!NOTE]
> ごらんの通り、CSS には要素に焦点をあてるための方法がいくつかあります。このコースでは、これらのセレクターやその他多くのセレクターについて、後ほどすべて順を追って見ていきます。

### 状態に基づくスタイル設定

最後にこのチュートリアルで取り上げるのは、状態に基づいてスタイルを設定する方法です。かんたんな例はリンクのスタイル設定です。リンクをスタイル設定するとき、 [`<a>`](/ja/docs/Web/HTML/Element/a) (anchor) 要素に焦点をあてる必要があります。リンクされたページを開いていなかったり、開いた後だったり、マウスの矢印をかざしたり（ホバー）、キーボードで選択したり、クリックしたりといったように状態が変わります。こうしたさまざまな状態を CSS で選ぶことができます。以下だと、リンクされたページを開く前はピンクに、開いた後は緑になります。

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

ユーザーがリンクの上にマウスの矢印を持っていく（ホバー）とリンクの見た目を変えるようにできます。たとえば次ののルールセットだと、リンクの下線が消えます:

```css
a:hover {
  text-decoration: none;
}
```

下のライブ例では、プロパティ値をいろいろ変えることでさまざまなリンクの状態を試せます。すでに加えられているルールセットをみると、ピンクがとても明るくて読みづらいことがわかります。もっといい色に変えてみましょう。太字に変えられますか？

```html-nolint hidden live-sample___started-states
<h1>これは見出し 1 です</h1>

<p>
  これはテキストの段落です。このテキストには <span>span 要素</span>と<a href="http://example.com">リンク</a>もあります。
</p>

<p>これは 2 つ目の段落です。ここには<em>強調された</em>要素があります。</p>

<ul>
  <li>1 つ目のアイテム</li>
  <li>2 つ目のアイテム</li>
  <li><em>3 つ目</em>のアイテム</li>
</ul>
```

```css live-sample___started-states
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("started-states", "", "240px")}}

私たちは、リンクの上にカーソルを置いた際に表示される下線を除去しました。リンクのすべての状態から下線を除去することができます。ただし、実際のサイトでは、リンクがリンクであることを訪問者に確実に認識させることが重要であることを覚えておく価値があります。下線を付けたままにしておくことは、段落内のテキストがクリックできることを認識する上で、人々にとって重要な手がかりとなる可能性があります。これは、人々が使用することに慣れている動作です。 CSS のすべてにおいて、変更することで文書内のアクセシビリティが低下する可能性があるため、注意すべき場所で都度強調するようにしたいと思います。

> [!NOTE]
> MDN の記事で、[アクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility)についての注意をたびたび目にするでしょう。アクセシビリティについて語る際、私たちは、マウスやトラックパッド付きのコンピューター、タッチスクリーン付きの携帯電話、キーボードのみを使用して操作する人、あるいは文書内のコンテンツを読み上げるスクリーンリーダーを操作する人など、誰もが理解でき、利用できるウェブページの必要性を意味しています。

### セレクターと結合子の組み合わせ

次のように、複数のセレクターと結合子を組み合わせることができます。

```css
/* <article> 要素の内側にある <p> 要素の <span> 要素に焦点を当てるとき */
article p span {
}

/* <h1> 要素の直後に来る <ul> 要素の、そのまた直後に来る <p> 要素に焦点を当てるとき */
h1 + ul + p {
}
```

複数の形のセレクターも組み合わせられます。以下のコードを CSS に追加してみてください。

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

これは `<body>` 要素の中にある `<h1>` 要素の直後に来た `<p>` 要素の中にある `special` クラスの要素をスタイル設定します。このコードのうち、スタイルが適用されるのは `<span class="special">` のみです。

現時点では複雑に思えても心配しなくて大丈夫です。CSS を書いていくうちにすぐに理解できるようになります。

## その他の CSS の構文機能

これでいくつかの CSS 機能について学んだので、このコースの間に遭遇するであろう、他にもいくつかある CSS 構文機能について、概要を説明します。 これらの詳細についてさらに調べたい場合は、このページの上部にある検索フィールドに機能の名前を入力するか、MDN の [CSS リファレンス](/ja/docs/Web/CSS/Reference)を参照してください。

それぞれのケースでコードスニペットを試してみる場合は、例えば、これまでやってきたもののように、ローカルの例や MDN Playground に提供された HTML と CSS を追加してみてください。

### 関数

ほとんどの値は比較的単純なキーワードまたは数値ですが、値の中には関数の形を取るものもあります。

#### calc() 関数

この例には、 CSS 内で簡単な計算を実行できる `calc()` 関数があります。

```html-nolint live-sample___the_calc_function
<div class="outer"><div class="box">内部のボックスは 90% - 30px です。</div></div>
```

```css live-sample___the_calc_function
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

表示結果は次の通りです。

{{EmbedLiveSample('The_calc_function', '100%', 200)}}

関数は関数名と、関数の値を囲む括弧で構成されます。 上記の `calc()` の例の場合、値は包含ブロック幅の90%から30ピクセルを引いた値をボックスの幅として定義します。

#### 座標変換関数

さまざまな値のもう一つの例は、 {{cssxref("transform")}} プロパティのもので、 `rotate()` などです。

```html live-sample___transform_functions
<div class="box"></div>
```

```css live-sample___transform_functions
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

上記のコードの出力結果は次のようになります。

{{EmbedLiveSample('Transform_functions', '100%', 200)}}

以下の一覧にあるプロパティのさまざまな値を調べてください。 次の関数を使用して、さまざまな HTML 要素にスタイルを適用する CSS ルールを書いてみてください。

- {{cssxref("transform")}}
- {{cssxref("background-image")}}（特にグラデーション値）
- {{cssxref("color")}}（特に rgb と hsl 値）

### アットルール

CSS のアットルール (@rule) は、 CSS の動作方法を指定して提供します。よく見かける一般的なアットルールの 1 つに `@media` があります。これは、[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)を作成する際に使用します。メディアクエリーは、 CSS スタイル設定を適用するための条件を示す論理式を使用します。

次の例では、スタイルシートで `<body>` 要素に既定ではピンク色の背景を定義しています。しかし、その次のメディアクエリーでは、ブラウザーのビューポートが 30em より大きい場合、 `<body>` 要素に青色の背景を設定しています。

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

このコースの学習を進めていく中で、他のアットルールにも遭遇することでしょう。

### 一括指定プロパティ

一部のプロパティ、例えば {{cssxref("font")}}、{{cssxref("background")}}、{{cssxref("padding")}}、{{cssxref("border")}}、{{cssxref("margin")}} などは**一括指定プロパティ**と呼ばれています。これは、一括指定プロパティがいくつかの値を 1 行で設定するからです。

例えば、この 1 行のコードを見てください。

```css
/* padding や margin などの 4 値の一括指定では、値は上、右、下、左
   （上から時計回りに）の順に適用されます。他の一括指定の型もあります。
    例えば、 2 値の一括指定では、 padding/margin は上/下、
    次に左/右に設定します。 */
padding: 10px 15px 15px 5px;
```

これは次の 4 行のコードと同等です。

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

この 1 行は、

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

次の 5 行と同等です。

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

このコースの後半では、他にも多くの一括指定プロパティの例に遭遇するでしょう。今のところは、上記（または他にも知っているもの）の宣言を自分自身でコードに適用してみて、やり方に慣れてください。

### CSS のコメント

コーディング作業全般に言えることですが、 CSS にコメントを書くことは良い習慣です。これにより、後で修正や拡張を行う際に、コードがどのように動作するのかを思い出すことができます。また、他にも、コードを理解する手助けとなります。

CSS コメントは `/*` で始まり、`*/` で終わります。例えば下記では、コメントがコードの異なる節の始まりを示しています。 コードベースが大きくなるにつれ、移動が容易にできます。 このようなコメントが存在することで、コードエディターでコメントを検索することが、コードの節を効率的に見つける方法となります。

```css
/* 基本的な要素のスタイル設定の扱い */
/* ---------------------------- */
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* 読みやすくなるように、大きな画面やウィンドウでは
     グローバルフォントサイズを大きくする。 */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* DOM に含まれる特定の要素を扱う */
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

コードを「コメントアウト」することは、検査のためにコードの一部分を一時的に無効にするのに便利です。例えば、下記では `.special` のルールがコードの「コメントアウト」により無効になっています。

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

自分の CSS にコメントを追加してみてください。

### CSS におけるホワイトスペース

ホワイトスペースとは、実際の空白、タブ、改行を意味します。ブラウザーは HTML 内の余分なホワイトスペースを無視しますが、 CSS 内の余分なホワイトスペースも同様に無視します。ホワイトスペースの利点は、コードを読みやすくすることです。

例えば下記では、各宣言（および、ルールの先頭/末尾）がそれぞれ別の行に記述されています。これは CSS を記述する上で良い方法であると言えます。 CSS を保守したり理解したりしやすくなります。

```css
body {
  font:
    1em/150% Helvetica,
    Arial,
    sans-serif;
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
```

次の例では、同じ CSS をより圧縮された形式で示しており、余分なホワイトスペースをすべて除去したものです。 2 つの例は同じように作業しますが、下記の方が読みにくくなっています。

```css-nolint
body{font:1em/150% Helvetica,Arial,sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(min-width:70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

ホワイトスペースを削除するとエラーが発生する場合があることに留意してください。プロパティ名にはホワイトスペースは含まれませんが、値と値の間にホワイトスペースを想定しているプロパティ値では、その空白が削除されると値が不正なものとなります。例えば、以下の宣言は有効な CSS です。

```css
margin: 0 auto;
padding-left: 10px;
```

しかし、以下の宣言は不正です。

```css example-bad
margin: 0auto;
padding- left: 10px;
```

空白の使い方の間違いがわかりますか？ 最初の `0auto` は `margin` プロパティの有効な値として認識されません。 項目 `0auto` は、`0` と `auto` という 2 つの別々の値という意味です。 2 つ目として、ブラウザーは `padding-` を有効なプロパティとして認識しません。 正しいプロパティ名 (`padding-left`) には空白が挿入されています。

複数の値が別個の値であることが分かるように、少なくとも 1 つの空白で区切るようにしてください。プロパティ名とプロパティ値は、単一の連続した文字列として一緒にしておきます。

空白が CSS をどのように壊すかを確かめるには、検査用の CSS 内の空白をいろいろと試してみてください。

## まとめ

この記事では、CSS による文書のスタイル設定の仕方をいくつか見てきました。この知識は、残りのレッスンに移動した際に深堀りする予定です。しかし、これで、文書内の要素のさまざまな対象方法に基づいてテキストにスタイル設定を行い、 CSS を適用するのに十分な知識を得ることができました。

次に、皆さんに新しい知識を試すための課題を出しましょう。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
