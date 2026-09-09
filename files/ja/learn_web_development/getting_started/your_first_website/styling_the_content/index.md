---
title: "CSS: コンテンツのスタイル設定"
short-title: コンテンツのスタイル設定
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (Cascading Style Sheets) は、ウェブページのスタイルを設定するコードです。この記事では、CSS の基礎知識 — その仕組みや、前回の記事で作成したコンテンツ構造の外観や使い心地を改善する方法 — について追ってみましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>CSS の目的と機能。</li>
          <li>CSS構文の基本的な部分 — ルールセット、セレクター、宣言、プロパティ、プロパティの数値。</li>
          <li>ボックスモデル、色やフォントの変更、HTML 要素の位置指定など、一般的な CSS 機能が含まれます。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS とは何か

HTML と同様、CSS はプログラミング言語ではありません。またマークアップ言語でもありません。**CSS はスタイルシート言語です。** CSS は HTML 要素のスタイルを設定するために使用されます。スタイルを設定したい要素を選択し、そのスタイルプロパティに値を指定することで、要素の外観を定義します。

[コンテンツの作成](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)の記事で紹介した基本的な HTML の例を、もう一度見てみましょう。

```html live-sample___basic-html live-sample___basic-css
<p>生きるための方法:</p>

<ul>
  <li>食う</li>
  <li>寝る</li>
  <li>繰り返す</li>
</ul>
```

これはそれ自体では次のように表示されます。

{{EmbedLiveSample("basic-html", "100%", "140px")}}

ここに CSS を少し追加することで、HTML の外観を変更することができます。次のスニペットは、{{htmlelement("p")}} 要素を選択し、異なる[フォント](/ja/docs/Web/CSS/Reference/Properties/font-family)と赤色のテキスト {{cssxref("color")}} を適用します。さらに、すべての {{htmlelement("li")}} 要素を選択し、それぞれに黄緑色の {{cssxref("background-color")}}、1 ピクセルの実線の黒い {{cssxref("border")}}、および 5 ピクセルの[下マージン](/ja/docs/Web/CSS/Reference/Properties/margin-bottom)を設定します。

```css live-sample___basic-css
p {
  font-family: sans-serif;
  color: red;
}

li {
  background-color: greenyellow;
  border: 1px solid black;
  margin-bottom: 5px;
}
```

HTML に CSS をつけて、このデモでは次のように表示されます。

{{EmbedLiveSample("basic-css", "100%", "160px")}}

ご覧のとおり、ほんの少しの CSS を加えるだけで、地味な見た目のリストの外観を変えることができました。

CSS には他にも、背景画像やグラデーションの指定、書体やスクロール動作の制御、アニメーションの追加、さらにはウェブページ全体のレイアウト構築に至るまで、さまざまな機能があります。

## CSS の HTML への適用

CSS を使用する際、まず確認すべきことは、CSS が HTML に正しく適用されているかどうかです。この節では、CSS **スタイルシート**を `first-website` に追加し、ページに適用します。

1. `first-website` フォルダー内に、`styles` という名前の新しいフォルダーをもう 1 つ作成します。
2. テキストエディターを使用して、以下の CSS を新しいファイルに貼り付けてください。これにより、`<p>` 要素の文字色が赤になります。このスタイルシートが HTML に正しく適用されているかどうかを確認するには、同様にコードから始めるのが便利です。

   ```css
   p {
     color: red;
   }
   ```

3. そのファイルを `styles` フォルダーの中に `style.css` ファイル名で保存してください。

4. `index.html` ファイルを開き、先頭（{{HTMLElement("head")}} タグと `</head>` タグの間）に以下の行を貼り付けてください。

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. `index.html` を保存し、ブラウザーで読み込んでください。次のように表示されるはずです。

![Mozilla のロゴといくつかの段落です。段落のテキストは、 CSS によって赤くスタイル付けされています。](website-screenshot-styled.png)

段落のテキストが赤くなっていれば、おめでとう！ CSS が動作しています。そうでない場合は、以上の手順をもう一度踏み、それぞれの手順を正しく実行しているかどうかを注意深く調べてください。

### CSS の構文の基本

前の CSS の例では、`p` は**セレクター**と呼ばれ、スタイル設定を行う要素を選択します。具体的には、`p` は HTML 内のすべての段落を選択します。中括弧 (`{ }`) 内の行は**宣言**と呼ばれ、特定のプロパティの値を設定します。この場合、**プロパティ**は `color` で、これは段落のテキストの色を制御し、設定される**プロパティ値**は `red` です。

この構造全体を**ルールセット**と呼びます。（ルールセットという用語は、多くの場合単にルールと呼ばれることもあります。）

別のルールセットを見ていきましょう。今回は、複数の宣言をつけています。

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

ルールセット内では、宣言同士を区切るためにセミコロン (`;`) を使用しなければならない。それぞれの宣言内では、プロパティとその値を区切るためにコロン (`:`) を使用しなければならない。

同時に、1 つのルールに複数のセレクターをカンマで区切って記述することで、複数の要素を選択することもできます。例を示します。

```css
p,
.my-class,
#my-id {
  color: red;
}
```

この CSS ルールには、特定の HTML 要素を選択する**要素**（または**要素型**）セレクターが含まれています。同時に、このチュートリアルの残りの部分とは関係のない、他の 2 種類のセレクターも記載されています。それらの機能について知りたい場合は、[基本的なセレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)のガイドをご覧ください。

> [!NOTE]
> Scrimba の [Write your first lines of CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> は、CSS の構文について、有益な対話的な入門ガイドを提供しています。

## テキストの改善

例に戻って、CSS を使用してテキストの見栄えを改善してみましょう。ページに新しいフォントを設定し、さまざまな要素のテキスト設定を変更していきます。

1. まず、以前保存した、 [Google フォントの出力](/ja/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#フォントの選択)を探します。
2. {{htmlelement("link")}} 要素を `index.html` の先頭のどこか（{{HTMLElement("head")}} タグと `</head>` タグの間）に追加します。次のようなものです。

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   このコードは、Google Fonts サービスでホストされているスタイルシートにページをリンクさせ、選択したフォントを読み込みます。

3. 次に `style.css` ファイルにある既存のルールを削除します。段落を赤く表示させる必要はなくなりました。
4. 以下の行を `style.css` へ追加します。

   ```css
   html {
     /* px は「ピクセル」の意味。ベースフォントサイズは 10 ピクセルの高さになった */
     font-size: 10px;
     /* "PLACEHOLDER" を、Google Fontsから取得した font-family プロパティの値に置き換える */
     font-family: PLACEHOLDER;
   }
   ```

   > [!NOTE]
   > CSS において、`/*` と `*/` の間に記述された何らかの内容はすべて **CSS コメント**となり、ブラウザーによって無視されます。CSS コメントは、ウェブページの表示に影響を与えることなく、コードやロジックに関する役立つメモを記載するための方法です。

5. `font-family` のプレースホルダー行を、Google Fonts のコードにある `font-family` 行に置き換えてください。例を示します。

   ```css
   font-family: "Roboto", sans-serif;
   ```

   `font-family` プロパティは、HTML に適用したいフォントを設定します。このルールは、ページ全体に対するグローバルな基本フォントとフォントサイズを定義します。{{HTMLElement("html")}} 要素内のすべての要素は、同じ `font-size` および `font-family` を継承します。

6. それでは、[`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)、{{htmlelement("li")}}、{{htmlelement("p")}} の各要素に、フォントやテキストのスタイルを設定してみましょう。それぞれの要素に対して、{{cssxref("font-size")}} の新しい値を設定します。同時に、{{cssxref("text-align")}} を使用して見出しを中央揃えにし、段落やリストアイテムの {{cssxref("line-height")}} と {{cssxref("letter-spacing")}} を増やして、本文のコンテンツを読みやすくしましょう。

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

7. コードを保存し、ブラウザーで HTML を読み込んでください（以前から開いていた場合は、ページを更新してください）。作成中のページは、次のような表示になるはずです。

   ![Mozilla のロゴといくつかの段落。 sans-serif フォントが設定され、フォントの大きさ、行の高さ、文字の間隔が調整され、メインページの見出しが中央に配置されています。](website-screenshot-font-small.png)

   > [!NOTE]
   > 見出しや本文のフォントサイズが同様に気に入るまで、`px` の値を調整してみてください。

## CSS はすべてボックスについてである

CSS を書いていて気づくことは、その多くがボックスに関するものだということです。ページ上のほとんどの HTML 要素は、他のボックスの上（または横）に配置されたボックスとして考えることができます。これらのボックスに対して、サイズ、色、位置指定などの値を設定することができます。これは[**ボックスモデル**](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)と呼ばれています。

![3 つのボックスがお互いの内側に配置されています。外側から内側に向かって、 margin, border, padding と書かれています。](box-model.png)

ページ上の空間を占めるそれぞれのボックスには、次のようなプロパティがあります。

- {{cssxref("padding")}}（パディング）: コンテンツの周囲のスペースです。以下の例では、段落テキストの周りのスペースです。
- {{cssxref("border")}}（境界）: パディングのすぐ外側にある実線です。
- {{cssxref("margin")}}（マージン）: 要素の外側の周りの空間です。

この節では、以下のプロパティも同時に使用しますが、その中には以前にも触れたものもあります。

- {{cssxref("width")}}: 要素の幅です。
- {{cssxref("background-color")}}: 要素のコンテンツおよびパディングの背後の色です。
- {{cssxref("color")}}: 要素のコンテンツ（通常はテキスト）の色。
- {{cssxref("text-shadow")}}: 要素内のテキストに適用されるドロップシャドウです。
- {{cssxref("display")}}: 要素の表示モードです（基本的には、ウェブページ上でその要素がどのように表示されるか、あるいは配置されるかを示します）。

それぞれの節では、次のことを行ってから実行してください。

1. 指定されたCSSコードを、`style.css` ファイルの末尾に追加してください。
2. ファイルを保存し、ブラウザーを更新して、CSS が HTML の表示にどのような影響を与えたかを確認してください。
3. CSS の仕組みがどのように動作するかを理解するために、指定された説明を読んでください。
4. 冒険心があるなら、プロパティの値を変えてみて、ページをさらに独自にカスタマイズしてみてください。

### ページの色を変更する

次のものを追加してください。

```css
html {
  background-color: #00539f;
}
```

このルールはページ全体の背景色に設定を行います。上記のカラーコードを、[ウェブサイトをどんな外見にするか](/ja/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#テーマカラーの選択)で選んだ色に変更しましょう。

### 本文のスタイル設定

次に、このルールを追加しましょう。

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

次は {{htmlelement("body")}} 要素です。ここにはいくつかの宣言がありますので、 1 行ずつ見て行きましょう。

- `width: 600px;`: これにより body は常に 600 ピクセルの幅になります。
- `margin: 0 auto;`: `margin` や `padding` などのプロパティに 2 つの値を設定すると、最初の値は要素の上下の辺に影響します（この場合は `0` になります）。2 番目の値は左右に影響します。`auto` は、残った水平方向の余白を左右に均等に分配する特殊な値です。
- `background-color: #FF9500;`: これは要素の背景色を設定します。このプロジェクトでは、`<body>` の背景色に赤みがかったオレンジ色を使用して、{{htmlelement("html")}} 要素に使用されている濃い青と対照をなすようにしています。
- `padding: 0 20px 20px 20px;`: これはパディングに 4 つの値を設定します。これは、コンテンツの周りに少しのスペースを確保するためです。今回は body の上にパディングを設定せず、左・下・右に 20 ピクセルを設定します。値は上・右・下・左の順に設定されます。
- `border: 5px solid black;`: これは境界の太さ、スタイル、色の値を設定します。この場合は、 body の全側面に 5 ピクセルの太さの黒ベタの境界線を設定します。

### 一括指定プロパティに関する補足

一度に複数のプロパティを設定する CSS のプロパティ値は、**一括指定プロパティ**と呼ばれます。例えば、`padding: 0 20px 20px 20px` は、以下の 4 つのプロパティと同等です。

```css
padding-top: 0;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

> [!NOTE]
> Scrimba の [Margin/padding shorthand](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> は、マージンとパディングの一括指定の使い方を手順を追って説明する対話的なレッスンです。

### ページのメインタイトルの位置指定とスタイル設定

それでは次のものを追加してください。

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

body の上部のひどい隙間に気づいたかもしれません。これは CSS をまったく適用していなくても、ブラウザーが `<h1>` 要素にデフォルトのスタイルを適用するためです。それは悪い考えのように見えるかもしれませんが、スタイルのないページにも一定の読みやすさを求めるためのものです。隙間をなくすために、 `margin: 0;` を設定してデフォルトのスタイルを上書きします。

次に見出しの上下のパディングを 20 ピクセルに設定し、見出しテキストが HTML の背景色と同じ色になるように設定します。

最後に、 `text-shadow` は要素のテキストコンテンツに影を適用します。

- 最初はピクセル値で、影のテキストからの**水平オフセット**、どれだけ横に移動するかを設定します。
- 2 番目はピクセル値で、影のテキストから**垂直オフセット**、どれだけ下に移動するかを設定します。
- 3 番目のピクセル値で、影を**ぼかす半径**を設定します。値が大きいほどぼやけた影を生成します。
- 4 番目の値は、影の基本色を設定します。

### 画像のセンタリング

最後に、このルールを挿入してください。

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

次に、画像を中央に配置して見栄えを良くします。body 要素の場合と同じ `margin: 0 auto` のテクニックを使用することができますが、CSS を正しく機能させるためには、いくつかの違いがあるため、追加の設定が必要になります。

{{htmlelement("body")}} 要素は **ブロック** 要素であり、ページ上で空間を占め、マージンやパディング、その他のボックスプロパティを設定できます。一方、{{htmlelement("img")}}（画像）要素は **インライン** 要素であり、デフォルトでブロック要素のようにマージンの値を設定することはできません。この画像で自動マージンのテクニックが動作するには、`display: block;` を使用して、ブロックレベルの挙動を指定する必要があります。

最後に、{{cssxref("max-width")}} プロパティを `100%` に設定します。これにより、画像が body に設定された `width`（600 ピクセル）よりも大きい場合でも、`600px` に制約され、それ以上横に広がらないようにします。

> [!NOTE]
> `display: block;` や、ブロックレベルとインラインの区別、 `max-width: 100%;` がまだ理解できなくても心配しないでください。 CSS の勉強を続けていくうちに意味が分かってくるはずです。

## まとめ

この記事のすべての指示に従った場合は、次のようなページが表示されます。

![Mozilla のロゴを中央に配置し、ヘッダーと段落を配置しています。これで、ページ全体の背景が青くなり、中央に配置されたメインコンテンツストリップの背景がオレンジになるなど、きれいなスタイルになりました。](website-screenshot-final.png)

[作成した結果はこちらから見ることができます](https://mdn.github.io/beginner-html-site-styled/)。行き詰った場合は、[GitHub 上の完成版のサンプルコード](https://github.com/mdn/beginner-html-site-styled/blob/main/styles/style.css)と作業内容を常に比較することができます。

この記事では、CSS についてごく表面的な部分しか触れていません。このコースの後半にある [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)コアモジュールでは、さらに多くのことを学ぶことができます。

## 関連情報

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba](https://scrimba.com?via=mdn) の _Learn HTML and CSS_ コースでは、5 つの素晴らしいプロジェクトの構築と展開を通じて、知識豊富な講師陣による楽しいインタラクティブなレッスンや課題による HTML と CSS を学ぶことができます。

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
