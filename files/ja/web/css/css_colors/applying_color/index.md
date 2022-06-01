---
title: CSS を使った HTML の要素への色の適用
slug: Web/CSS/CSS_Colors/Applying_color
tags:
  - Beginner
  - CSS
  - CSS 色
  - Guide
  - HTML
  - HTML 色
  - HTML スタイル
  - Styling HTML
  - color
translation_of: Web/HTML/Applying_color
original_slug: Web/HTML/Applying_color
---
{{HTMLRef}}

この記事は、HTML での CSS の色を使用するそれぞれの方法を紹介する入門編です。

色使いは人間の表現の基本形です。子どもは絵がうまくなる前から色に触れています。恐らくこれこそが、人がウェブサイト開発を学ぶときにまず色を触る理由でしょう。[CSS](/ja/docs/Web/CSS) では、[HTML](/ja/docs/Web/HTML) [要素](/ja/docs/Web/HTML/Element)に色を追加し好みの見た目にする方法が多岐に渡ります。

ここでは、色を使用する際に必要なことのほとんどに触れていきます。[色をつけることができるものと、それに関係する CSS プロパティの一覧](#色を付けることができるもの)、[色の記述方法](#色の記述方法)、実際に[スタイルシートとスクリプトの両方で色を使用する方法](#色の活用)などです。また、ユーザーに色を選んでもらう方法についても見ていきます。

それから、[賢い色の使い方](#賢い色の使い方)について短い論述をします。これは、様々な視覚の人がいることを意識した、適切な色の選択方法です。

## 色を付けることができるもの

要素レベルでは、HTML のすべてのものに色を適用することができます。それよりも、テキストや境界線など、要素の中に描かれているものの種類で見てみましょう。それぞれについて、色を適用する CSS プロパティの一覧を見てみましょう。

基礎的なレベルでならば、{{cssxref("color")}} プロパティは HTML 要素の内容物の色を定義し、{{cssxref("background-color")}} は HTML 要素の背景色を定義すると言えます。これらのプロパティはほぼすべての要素で使用できます。

### テキスト

要素がレンダリングされるたびに、テキスト、その背景、およびテキストの装飾の色を決定するために以下のプロパティが使用されます。

- {{cssxref("color")}}
  - : テキストと[テキスト装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (下線や上線、打ち消し線などを付加するもの) に使用する色です。
- {{cssxref("background-color")}}
  - : テキストの背景色です。
- {{cssxref("text-shadow")}}
  - : テキストに適用する影の効果を設定します。影の設定には、影のベース色 (他のパラメータに基づいて背景をぼかして混色する色) があります。より詳しくは基本的な[テキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)の[テキストのドロップシャドウ](/ja/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows)を参照してください。
- {{cssxref("text-decoration-color")}}
  - : 既定では、テキストの装飾 (下線、打ち消し線など) の色には `color` プロパティを使用します。しかし、`text-decoration-color` プロパティを用いると、この挙動を上書きして異なる色を使用できます。
- {{cssxref("text-emphasis-color")}}
  - : テキストの各文字に隣接した圏点の描画に使用する色です。主に東アジア言語の文字描画で使用します。
- {{cssxref("caret-color")}}
  - : 要素の {{Glossary("caret", "キャレット")}} (テキスト入力カーソルとも表現されるもの) の描画に使用する色です。これは編集可能な要素でのみ有用であり、{{HTMLElement("input")}} や {{HTMLElement("textarea")}} または HTML の {{htmlattrxref("contenteditable")}} 属性が設定された要素に使用されます。

### ボックス

すべての要素は中身があるボックスであり、そのボックスの内容に加えて、背景と境界線もあります。

- [境界線](#境界線)
  - : ボックスの境界線の色を設定できる CSS プロパティ一覧は、[境界線](#境界線)の節を参照してください。
- {{cssxref("background-color")}}
  - : 要素の内容がない領域で使用される背景色です。
- {{cssxref("column-rule-color")}}
  - : テキストの列を区切る線に使う色です。
- {{cssxref("outline-color")}}
  - : 要素の外側に輪郭線を描くときに使う色です。この輪郭線は境界線とは異なり、文書内でその空間を確保しません (そのため他のコンテンツと重なる可能性があります)。一般的には、入力イベントを受け取る要素を示すフォーカスインジケーターに使用されます。

### 境界線

あらゆる要素で、周囲に[境界線](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)を描画することができます。基本的な要素の境界線は、要素の内容物の辺を囲むように描かれた線です。
基本的な要素の境界は、要素の内容の端に描かれている線です。要素とその境界線の関係性については、[ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)の[ボックスのプロパティ](/ja/docs/Learn/CSS/Building_blocks/The_box_model#ボックスのプロパティ)を、より詳しい境界線へのスタイルの適用については [CSS での境界線のスタイル付け](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) を参照してください。

{{cssxref("border")}} 一括指定プロパティを使用することもできます。これは、境界線に関する (色以外の[線幅](/ja/docs/Web/CSS/border-width)、[線種](/ja/docs/Web/CSS/border-style) (実線、破線など) などの特性も含んだ) すべての設定をこれ一つで行えます。

- {{cssxref("border-color")}}
  - : 要素の境界線の各辺に使用する単一の色を指定します。
- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, {{cssxref("border-bottom-color")}}
  - : 要素の境界線の各辺に対応する色を指定できます。
- {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}
  - : これらは、境界線が囲むブロックの先頭と末尾に最も近い境界線の描画色を設定することができます。左から右への書き方 (英語の書き方など) では、ブロック先頭の境界線は上端、ブロック末尾の境界線は下端になります。これは、インラインの先頭とインラインの末尾である左右の (ボックス内の各行のテキストの先頭と末尾の位置に対応する) 端とは異なります。
- {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end-color")}}
  - : これらは、ボックス内のテキスト行の先頭と末尾に最も近い境界線の縁に色を付けられます。これは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} プロパティに依存しますが、どちら側になるかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} プロパティによって異なります。例えば、ボックスのテキストが右から左に描画される場合、`border-inline-start-color` は境界線の右側に適用されます。

### 色をつける他の方法

CSS が唯一の色を付けるためのウェブ技術ではありません。色に対応している、ウェブで使用可能なグラフィック技術があります。

- HTML [Canvas API](/ja/docs/Web/API/Canvas_API)
  - : Canvas API では、2D のビットマップ画像を {{HTMLElement("canvas")}} 要素の中に描画できます。より詳しくは [Canvas チュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)を参照してください。
- [SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics)
  - : SVG ならば、特定の形状、パターン、線を描くコマンドで画像を描画できます。 SVG のコマンドは XML の形式となっており、直接ウェブページに埋め込めます。また、img 要素を使うと他の画像と同じような配置もできます。
- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : Web Graphics Library は Open GL ES を基にした API で、ウェブ上に 2D や 3D のハイパフォーマンスなグラフィックを描画できます。より詳しくは [WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)を参照してください。

## 色の記述方法

CSS で色を表現するには、アナログの概念である「色」の概念を、コンピュータが解釈できるようなデジタル形式に翻訳する方法が必要です。これは通常、原色の集合それぞれをどのくらい混ぜるか、どのくらいの明るさにするかなど、色を構成要素に分解することで行います。ここでは、CSS で色を表現するいくつかの方法を示します。

色の値型の詳細は、CSS の {{cssxref("&lt;color&gt;")}} 単位のリファレンスを参照してください。

### キーワード

標準的な色名が定義されており、使用したい色を表すキーワードがあれば、色の数値表現の代わりにこれらのキーワードを使用することができます。色キーワードには原色と副色 (`red`、`blue`、`orange` など)、灰色 (`black` から `white` までの `darkgray` や `lightgrey` といった色を含む)、これらを混ぜた色である `lightseagreen`、`cornflowerblue`、`rebeccapurple` が含まれます。

利用可能な全ての色キーワードの一覧は、[<color>](/ja/docs/Web/CSS/color_value) の[色キーワード](/ja/docs/Web/CSS/color_value#色キーワード)を参照してください。

### RGB 値

CSS での RGB の色表現は 3 通りあります。

#### 16 進数文字列表記

16 進数文字列表記は、色の各要素 (赤、緑、青) を表すために 16 進数の数字で色を表します。また、4 つ目の要素のアルファチャネル (または不透明度) を含められます。各色要素は、0 〜 255 (0x00 と 0xFF) の間の数値、または任意で 0 ～ 15 (0x0 と 0xF) の間の数値として表せます。全要素は同じ桁数で指定する必要があります。1 桁の表記を使用した場合、描画時の最終的な色は `"#D"` が `"#DD"` になるように各構成要素の桁を 2 回繰り返して計算します。

16 進数文字列表記の色は、常に文字 `"#"` で始まります。その後にカラーコードの 16 進数が来ます。文字列の大文字小文字は区別されません。

- `"#rrggbb"`
  - : 16 進数の完全不透明色を指定します。赤色成分が `0xrr`、緑色成分が `0xgg`、青色成分が `0xbb` です。
- `"#rrggbbaa"`
  - : 16 進数の色を指定します。赤色成分が `0xrr`、緑色成分が `0xgg`、青色成分が `0xbb` です。アルファチャンネルは `0xaa` で指定します。この値が小さいほど透明に近づきます。
- `"#rgb"`
  - : 16 進数の完全不透明色を指定します。赤色成分が `0xrr`、緑色成分が `0xgg`、青色成分が `0xbb` です。
- `"#rgba"`
  - : 16 進数の色を指定します。赤色成分が `0xrr`、緑色成分が `0xgg`、青色成分が `0xbb` です。アルファチャンネルは `0xaa` で指定します。この値が小さいほど透明に近づきます。

例として、明るい青の不透明色は `"#0000ff"` や `"#00f"` で表現できます。25% 不透明にするには、`"#0000ff44"` や `"#00f4"` のようにします。

#### RGB 関数表記

RGB (赤/緑/青) 関数表記法は、16 進文字列表記法と同様に赤、緑、青の各成分 (任意では不透明度のアルファチャンネル成分) を用いて色を表現しますが、文字列ではなく CSS 関数 {{cssxref("color_value", "rgb()", "#rgb()")}} で色を定義します。この関数は、入力引数として赤、緑、青の各成分の値と、任意の第 4 引数のアルファチャンネル値を受け取ります。

これらの引数の正常値は以下の通りです。

- `red`、`green`、`blue`
  - : 0 以上 255 以下の {{cssxref("&lt;integer&gt;")}} 型の値か、0% から 100% の {{cssxref("&lt;percentage&gt;")}} 型の値です。
- `alpha`
  - : アルファチャンネルは、0.0 (完全透過) から 1.0 (完全不透明) の間の数値です。また、 パーセントも指定でき、これは 0% が 0.0 と同じで 100% が 1.0 と同じです。

例えば、不透明度 50% の明るい赤は `rgb(255, 0, 0, 0.5)` や `rgb(100%, 0, 0, 50%)` のように表現できます。

<h3 id="HSL_functional_notation">HSL 関数表記</h3>

デザイナーやアーティストは {{interwiki("wikipedia", "HSL and HSV", "HSL")}} (Hue/Saturation/Luminosity) で作業しようとすることがあります。ウェブにおける HSL 色は、HSL 関数表記で表現します。CSS の `hsl()` 関数の表現方法は、`rgb()` 関数とよく似ています。

以下の図は HSL 色円筒を表しています。色相 (Hue) は、可視スペクトルの色を表す円形の色相環に沿った位置に基づいて実際の色を定義します。彩度 (Saturation) は、灰色の強さ、もしくはその色相で取りうる最も濃い色に対する割合です。輝度 (または明度) の値が高くなると、色は最も暗い色から最も明るい色 (黒から白) へと変化します。画像の提供元は、[Wikipedia](https://www.wikipedia.org/) の [SharkD](http://commons.wikimedia.org/wiki/User:SharkD) さんより、[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) ライセンスで配布されているものです。

![HSL 色円筒](640px-hsl_color_solid_cylinder.png)

HSL カラーの色相 (H) 成分の値は、赤から黄、緑、水、青、マゼンタ (そして 360° で再び赤に戻る) までの角度で、ベースの色を特定します。度 (`deg`)、ラジアン (`rad`)、グラジアン (`grad`)、回転 (`turn`) など、CSS がサポートする任意の {{cssxref("&lt;angle&gt;")}} 単位で値を指定できます。しかしこれでは、鮮やかさや濁り、色の明るさや暗さを制御できません。

色の彩度 (S) 成分は、最終的な色を指定の色相が構成する割合を指定します。残りの輝度 (L) 成分は、灰色の強さを定義します。

以下のように、完璧な絵の具の色を作るかのように考えてみましょう。

1.  ユーザーの画面で表現できる最も強い青など、その色で最も強いベースの絵の具から始めます。これが**色相** (H) 要素で、ベースとして使用したい鮮やかな色相環の周りの角度を表す値です。
2.  次に、欲しい色の明るさに対応するグレースケールの絵の具を選びます。非常に明るくて白に近い色にしたいのか、それとも非常に暗くて黒に近い色にしたいのか、それともその中間のどこかにしたいのか。これはパーセンテージで指定し、0% が完全な黒、100% が完全な白となります。(彩度や色相に関係なく)。この値の間には文字通り灰色の領域があります。
3.  灰色の絵の具と完全に鮮やかな色が手に入ったので、これらを混ぜ合わせる必要があります。色の彩度 (S) 成分は、最終的な色のうち完全に鮮やかな色が構成するパーセントを示します。残りは、彩度を表すグレーの絵の具となります。

任意でアルファチャンネルを追加して、色を 100% 以下の不透明度にすることもできます。

こちらは、HSL 表記のサンプル色です。

```css hidden
table {
  border: 1px solid black;
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding:4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0, 0%, 75%);
}
```

```html
<table>
 <thead>
  <tr>
   <th scope="col">Color in HSL notation</th>
   <th scope="col">Example</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>hsl(90deg, 100%, 50%)</code></td>
   <td style="background-color: hsl(90deg, 100%, 50%);">&nbsp;</td>
  </tr>
  <tr>
   <td><code>hsl(90, 100%, 50%)</code></td>
   <td style="background-color: hsl(90, 100%, 50%);">&nbsp;</td>
  </tr>
  <tr>
   <td><code>hsl(0.15turn, 50%, 75%)</code></td>
   <td style="background-color: hsl(0.15turn, 50%, 75%);">&nbsp;</td>
  </tr>
  <tr>
   <td><code>hsl(0.15turn, 90%, 75%)</code></td>
   <td style="background-color: hsl(0.15turn, 90%, 75%);">&nbsp;</td>
  </tr>
  <tr>
   <td><code>hsl(0.15turn, 90%, 50%)</code></td>
   <td style="background-color: hsl(0.15turn, 90%, 50%);">&nbsp;</td>
  </tr>
  <tr>
   <td><code>hsl(270deg, 90%, 50%)</code></td>
   <td style="background-color: hsl(270deg, 90%, 50%);">&nbsp;</td>
  </tr>
 </tbody>
</table>
```

{{EmbedLiveSample("HSL_functional_notation", 300, 260)}}

> **Note:** 色相の単位を省略した場合は度 (`deg`) と見なされます。

## 色の活用

要素に色を適用する CSS プロパティの存在と、色の記述に使用可能な形式が分かったので、これをまとめて色を活用し始めてみましょう。[着色できる物](#着色できる物)のリストを見て把握できたと思いますが、CSS で色を付けられる物はたくさんあります。ここでは、{{Glossary("stylesheet", "スタイルシート")}}内で色を使う場合と、{{Glossary("JavaScript")}} コードで要素のスタイルを変更するために色を追加したり変更したりする場合の、2 つの側面から見ていきます。

<h3 id="Specifying_colors_in_stylesheets">スタイルシートでの色指定</h3>

要素に色を適用する最も簡単な方法は、要素の描画に使用する CSS で色を指定することです。前述のプロパティをすべて使用するわけではありませんが、いくつかの例を見てみましょう。色を使う場所によらず、考え方は同じです。

先にこれからやることの結果を見てから、サンプルを見ていきます。

{{EmbedLiveSample("Specifying_colors_in_stylesheets", 650, 150)}}

#### HTML

上記の例を作成するための HTML は、この通りです。

```html
<div class="wrapper">
  <div class="box boxLeft">
    <p>
      This is the first box.
    </p>
  </div>
  <div class="box boxRight">
    <p>
      This is the second box.
    </p>
  </div>
</div>
```

これはとてもシンプルで、{{HTMLElement("div")}} をコンテンツのラッパーとして使用し、さらに 2 つの `<div>` で構成しています。

魔法はいつも、CSS で起こります。上記の HTML で定義したレイアウトに、色を適用していきます。

#### CSS

上記の結果を作り出す CSS を一つずつ見ていけば、面白い部分も一つずつ見られるでしょう。

```css
.wrapper {
  width: 620px;
  height: 110px;
  margin: 0;
  padding: 10px;
  border: 6px solid mediumturquoise;
}
```

`.wrapper` クラスは、他のすべてのコンテンツを囲む {{HTMLElement("div")}} にスタイルを割り当てるために使っています。これは {{cssxref("width")}} と {{cssxref("height")}} を使ってコンテナのサイズを決定し、さらに {{cssxref("margin")}} と {{cssxref("padding")}} を使っています。

ここでの論述でさらに興味深いのは、{{cssxref("border")}} プロパティで要素の縁に境界線を設定していることです。この境界線は幅 6 ピクセルの実線で、色は `mediumturquoise` です。

2 つの色付きボックスには共通のプロパティがいくつかありますので、そのプロパティを定義するクラス `.box` を作成します。

```css
.box {
  width: 290px;
  height: 100px;
  margin: 0;
  padding: 4px 6px;
  font: 28px "Marker Felt", "Zapfino", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

簡単に言えば、`.box` は各ボックスのサイズとその中で使用するフォントの構成を確立しています。また、[CSS フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)も利用して簡単に各ボックスのコンテンツを中央揃えしています。{{cssxref("display", "display: flex")}} で `flex` モードを有効にし、{{cssxref("justify-content")}} と {{cssxref("align-items")}} を `center` に設定しています。あとは、2 つのボックスそれぞれに異なるプロパティを定義するクラスを作るだけです。

```css
.boxLeft {
  float: left;
  background-color: rgb(245, 130, 130);
  outline: 2px solid darkred;
}
```

`.boxLeft` クラスは、左側のボックスのスタイルとして巧みに使われ、以下のようにボックスを左側に浮かせて色を設定しています。

- CSS {{cssxref("background-color")}} プロパティを `rgb(245, 130, 130)` の値に変更することで、ボックスの背景色を設定しています。
- ボックスに輪郭線を定義しています。一般的によく使われる `border` とは異なり、{{cssxref("outline")}} はレイアウトに全く影響しません。この輪郭線は、2 ピクセルの太さの、濃い赤色の実線です。色の指定に `darkred` キーワードを使用していることにご注意ください。
- 注意として、テキストの色は明示的に設定していません。この場合 {{cssxref("color")}} の値はそれを含んだ最も近い要素から継承されます。すなわち、既定である黒色です。

```css
.boxRight {
  float: right;
  background-color: hsl(270deg, 50%, 75%);
  outline: 4px dashed rgb(110, 20, 120);
  color: hsl(0deg, 100%, 100%);
  text-decoration: underline wavy #88ff88;
  text-shadow: 2px 2px 3px black;
}
```

> **Note:** こちらを Safari で表示しようとしても、正常に表示されません。なぜなら、Safari は `text-decoration: underline wavy #88ff88` をサポートしていないからです。

最後に、`.boxRight` クラスで右に描画されるボックス固有のプロパティを記述します。これは、先のボックスの隣に表示されるように、ボックスを右に浮かす設定をしています。そして、以下のように色を設定しています。

- `background-color` は `hsl(270deg, 50%, 75%)` で指定した HSL 値を設定しています。この色は中くらいの紫色です。
- ボックスの `outline` は、 ボックスを太さ 4 ピクセルの破線で囲み、色はやや濃い紫色 (`rgb(110, 20, 120)`) となるように指定しています。
- 前景 (テキスト) の色は、{{cssxref("color")}} プロパティを `hsl(0deg, 100%, 100%)` にすることで指定してあります。これは白色を指定する方法のうちの一つです。
- {{cssxref("text-decoration")}} でテキストの下に緑の波線を引いています。
- 最後に、{{cssxref("text-shadow")}} を使用してテキストに少しだけ影をつけています。この `color` 引数は `black` にしています。

<h2 id="Letting_the_user_pick_a_color">ユーザーに色を選択させる</h2>

ウェブサイト上では、ユーザーに色を選択させる必要がある場合があります。カスタマイズ可能なユーザーインターフェースがある場合や、お絵かきアプリを実装している場合などが考えられるでしょう。編集可能なテキストがあってユーザーにテキストの色を選択させる、あるいはアプリでフォルダーやアイテムに色を割り当てることができる場合があるかもしれません。古くは、独自の{{interwiki("wikipedia", "カラーピッカー")}}を実装する必要がありましたが、HTML では {{HTMLElement("input")}} 要素を通じて {{htmlattrxref("type", "input")}} 属性の値を `"color"` にすれば、ブラウザーがカラーピッカーを提供できるようになりました。

`<input>` 要素は、先で取り上げた [16 進数文字列表記](#16_進数文字列表記)でのみ色を表します。

<h3 id="Example_Picking_a_color">例: 色の選択</h3>

ユーザーが色を選択できる簡単な例を見てみましょう。ユーザーが色を調整すると、サンプルの周囲の境界線が新しい色を反映するように変化します。色を選び終えると、カラーピッカーの値が表示されます。

{{EmbedLiveSample("Example_Picking_a_color", 525, 275)}}

> **Note:** macOS では、カラーピッカーウインドウを閉じると色の選択が完了したことになります。

#### HTML

この HTML は、({{HTMLElement("label")}} 要素で作成したラベル付きの) カラーピッカーコントロールと、空の段落要素 ({{HTMLElement("p")}}) を含むボックスを作成します。この段落要素に JavaScript コードからテキストを出力する予定です。

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker">
  <p id="output"></p>
</div>
```

#### CSS

この CSS では、ボックスのサイズと見た目の基本的なスタイルを設定しています。境界線には 2 ピクセルの幅を設定していますが、色は下記の JavaScript のおかげで変化します。

```css
#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245, 220, 225);
  padding: 4px 6px;
  font: 16px "Lucida Grande", "Helvetica", "Arial", "sans-serif"
}
```

#### JavaScript

このスクリプトは、境界線の開始色をカラーピッカーの値と同じに更新するタスクを処理します。[`<input type="color">`](/ja/docs/Web/HTML/Element/input/color) 要素からの入力を処理するために、2 つのイベントハンドラーを追加しています。

```js
let colorPicker = document.getElementById("colorPicker");
let box = document.getElementById("box");
let output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", function(event) {
  box.style.borderColor = event.target.value;
}, false);

colorPicker.addEventListener("change", function(event) {
  output.innerText = "Color set to " + colorPicker.value + ".";
}, false);
```

この {{domxref("HTMLElement/input_event", "input")}} イベントは要素の値が変更されるたびに送信されます。このイベントが来るたびに、ボックスの境界線の色をカラーピッカーの現在値に合わせます。

カラーピッカーの値が確定したときに、{{domxref("HTMLElement/change_event", "change")}} イベントを受信します。ID が `"output"` である `<p>` 要素の内容を、最後に選択した色を表す文字列に設定することで応答します。

## 賢く色を使う

ウェブサイトのデザインで正しい色選びをする際には、芸術、デザイン、少なくとも基本的な色理論に精通していないと、格段に複雑な工程となるでしょう。間違った色の選択は、サイトが醜くなったり、さらに悪いことにコントラストや相反する色の問題でコンテンツが読めなくなってしまうことがあります。また、間違った色を使用してしまうことで、特定の視覚的問題、特に色覚異常を持つ人々がコンテンツを全く利用できなくなる恐れがあります。

### 適切な色を見つける

何らかの芸術やデザインを触れずに、丁度よく正しい色を思い付くことは難しいでしょう。幸いなことに、あなたの手助けになりえる便利なツールがあります。これらは意思決定を助ける良きデザイナーを持つことには代わりませんが、火付け役にはなるでしょう。

#### ベースカラー

最初のステップは、**ベースカラー**を選ぶことです。これは、何らかの形であなたのウェブサイトやサイトの主題を定義する色です。緑がお茶を連想させるように、また青は空や海と関係があるように考えるところから、サイトを表すのに適切なベースカラー選びを始めると良いでしょう。ベースカラーを選ぶ方法はたくさんありますが、以下のようないくつかのアイデアがあります。

- 商品やアイデアで識別される既存の色や、伝えたい感情を代表する色など、コンテンツのトピックに自然に関連する色。
- コンテンツが表す物に関連付いたイメージから来る色。特定の項目や製品に関するウェブサイトを作成する場合は、それらに物理的に存在する色を選びます。
- ウェブサイトを探して既存のカラーパレットや画像をたくさん見ることで、インスピレーションを得ます。

ベースカラーを決める際には、ウェブコンテンツから色を選択できるブラウザー拡張機能が特に便利です。拡張機能の中には、こういった作業を支援するために特別に設計されたものもあります。例えば、ウェブサイトの [ColorZilla](https://www.colorzilla.com/) はウェブから色を選ぶためのスポイトツールの拡張機能 ([Chrome](https://www.colorzilla.com/chrome) / [Firefox](https://www.colorzilla.com/firefox)) を提供しています。また、様々なサイズの領域やページの選択すた領域のピクセルの色の平均を取ることもできます。

> **Note:** 色の平均を取る利点は、一見同じ色に見えるものが、実際には驚くほど多様な数の関連色が協調して使用され、目的の効果を生み出すために混色されていることが多いためです。これらのピクセル内から 1 つだけ選んでしまうと、それだけでは非常に場違いな色になることがあります。

#### パレットを豊かにする

ベースカラーが決まれば、ベースカラーに色理論を適用して、ベースカラーと一緒に使用する適切なカラーパレットを構築します。さらなる適切な色の決定に役立つオンラインツールもたくさんあります。これらの多くはフィルターをかけた色表示もサポートしているので、さまざまな色盲の人がどう見えるかを確認できます。これがなぜ重要なのかについては、[色とアクセシビリティ](#color_and_accessibility)で簡単に説明しています。

以下はいくつかの例 (このリストが最終改訂された時点では、すべて無料で使用できるもの) です。

- [MDN のカラーピッカーツール](/ja/docs/Web/CSS/CSS_Colors/Color_picker_tool)
- [Paletton](http://paletton.com)
- [Adobe Color CC オンライン色相環](https://color.adobe.com/create/color-wheel)

パレットをデザインする際には、これらのツールが典型的に生成する色に加えて、白 (またはほぼ白)、黒 (またはほぼ黒)、グレーの濃淡などの中核となる中性的な色を加える必要があることも念頭に置いてください。

> **Note:** 通常は、可能な限り色の数を少なくした方がはるかに良くなります。ページ上の全てに色を加えるのではなく色をアクセントに使うと、内容が読みやすくなり使った色のインパクトが増します。

### 色理論に関する参考文献

色理論の全面的な履修はこの記事の範囲を超えていますが、色理論に関する記事も豊富に用意されており、最寄りの学校や大学にも講座があるでしょうから、ぜひ参考にしてみてください。色理論に関する有用なリソースをいくつかご紹介します。

- [Color Science](https://www.khanacademy.org/partner-content/pixar/color) ([カーンアカデミー](https://www.khanacademy.org/) と [ピクサー](https://www.pixar.com/) の共著)
  - : 色とは何か、色の認識のされ方、色を使ったアイデアの表現方法などの概念を紹介するオンライン講座です。ピクサーのアーティストやデザイナーが講師を務めています。
- Wikipedia の {{interwiki("wikipedia", "en:Color theory")}}
  - : ウィキペディアの色理論に関する記事で、技術的観点の素晴らしい情報がたくさんあります。色選びの参考にはなりませんが、有用な情報が満載です。

### 色とアクセシビリティ

色が{{Glossary("accessibility", "アクセシビリティ")}}の問題となることがあります。色の不適切および不注意な使用は、利用者の何割かが適切に使用できないウェブサイトやアプリになり、トラフィックの損失、ビジネスの損失、さらには広報の問題につながる可能性があります。そのため、色の使い方を慎重に検討することは重要です。

少なくとも{{interwiki("wikipedia", "色覚異常")}}についての基礎的な調査はしておいた方が良いでしょう。いくつかの種類がありますが、最も一般的なのは赤緑色覚異常で、赤と緑の色を区別しづらいものです。他にも、特定の色の違いを見分けることができないものから、全く色が見えないものまであります。

> **Note:** 最も重要なルール: 色だけで情報を知る手段を使ってはいけません。例えば、ある操作の成功や失敗を示すために、図形の色を白から緑、失敗を示すために赤に変えた場合、赤緑の色盲のユーザーはサイトを適切に利用できません。代わりにテキストと色を併用すれば、誰もが起こったことを理解できるようになるでしょう。

色覚異常については、以下の記事をご覧ください。

- [Medline Plus: Color Blindness](https://medlineplus.gov/colorblindness.html) (<span class="module__title__link">アメリカ国立衛生研究所)</span>
- [American Academy of Ophthamology: What Is Color Blindness?](https://www.aao.org/eye-health/diseases/what-is-color-blindness)
- [Color Blindness &amp; Web Design](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html) (Usability.gov: アメリカ保健福祉省)

### パレットデザインの例

サイトの適切なカラーパレットを選ぶにあたって、簡単な例を考えてみましょう。火星で開かれる新しいゲームのウェブサイトを構築すると想像してみてください。そこで、[火星の写真を Google 検索](https://www.google.com/search?q=Mars&tbm=isch)してみましょう。火星のカラーリングの良い例がたくさんあるはずです。私たちは慎重にモックアップや映画の写真を避け、火星で撮影された写真を使うことにしました。そして、このゲームは惑星の表面で行われるため、人類が過去数十年にわたって表面に滞在させている火星着陸機の一つが撮影した写真を使用することにしました。カラーピッカーツールを使って、この選んだ色のサンプルを採ります。

スポイトツールを使って好みの色を特定し、件の色は `#D79C7A` であることを確認しました。これは火星表面のステレオタイプな錆びたオレンジレッドの色です。

ベースカラーを選択したら、パレットを構築する必要があります。そこで、[Paletton](http://www.paletton.com/) を使って他の色を考えてみることにしました。Paletton を開くと、以下のような画面が出てきます。

![Paletton を読み込んだ直後。](paletton1.png)

次に、ツールの左下隅にある "Base RGB" の欄に色の 16 進数コード (`D79C7A`) を入力します。

![ベースカラーの入力後](paletton2.png)

火星の写真から選んだ色をベースにした単色パレットが出てきました。何らかの理由で関連色がたくさん必要な場合は、そういった色も良い色になる可能性はあります。しかし、私たちが本当に欲しいのはアクセントカラー、ベースカラーに添えて目立つ色です。これを見つけるには、パレットの種類の選択メニューにある "add complementary" のトグル (現在は "Monochromatic") をクリックします。右下のアクセントカラーをクリックすると、補色が `#508D7C` であることが計算されます。

![補色も含まれるようになりました。](paletton3.png)

提案された色が気に入らない場合は、配色を変更して、もっと良さそうな色を確かめることができます。例えば、提案の緑青色が気に入らない場合、トライアド配色のアイコンをクリックすれば以下のように表示されます。

![トライアド配色を選択](paletton4.png)

右上のあの灰色っぽい青はなかなか良さそうですね。クリックすると、`#556E8D` でした。これをアクセントカラーとして、見出しやタブの強調表示のようにものを目立たせる目的で控えめに使用します。

![トライアド配色を選択](paletton-color-detail.png)

これで、ベースカラーとアクセントカラーができました。さらに、グラデーションなどが必要な場合に備えて、それぞれの色の補色をいくつか用意します。これらの色を後から利用できるように、何らかの形式で出力しておきます。

これらの色を決めてなお、適切な中間的な色も選択する必要があります。一般的なデザインでは、テキストが鮮明で読みやすい十分なコントラストがありつつ、目に厳しいほどのコントラストではないというスイートスポットを見つけようとします。どちらかの方に行き過ぎてしまいがちなので、色を選んで使用例に着手したら、必ずフィードバックをもらうようにしましょう。コントラストが低すぎるとテキストが背景に洗い流されて読めなくなりがちです。またコントラストが高すぎると、ユーザーはサイトを見ているだけで、見栄えが悪く不愉快に感じるでしょう。

### 色、背景、コントラスト、印刷

画面上では良いように見えるものが、紙の上では全く違って見えるかもしれません。さらに、往々にしてインクは高価なものです。ユーザーがページを印刷している場合、重要なのはテキストであるにも関わらず、背景すべてが貴重なインクを使い切るわけにはいきません。ほとんどのブラウザーは既定で、文書印刷時に背景画像を除きます。

背景色や画像が慎重に選択されている場合や、背景がコンテンツの有用性に決定的な影響を与える場合、CSS {{cssxref("color-adjust")}} プロパティを使用して、コンテンツの外観を調整しないようにブラウザーに指示できます。

`color-adjust`、`economy` の既定値は、ブラウザーが必要に応じて外観を変更することができるかどうかを示します。ブラウザーは文書を描画する出力機器の種類に応じて、コンテンツの読みやすさや印刷の経済効率を最適化しようとします。

`color-adjust` を `exact` にすると、色や画像があった場合でも、それを使用することで適した動作の要素になる特別なデザインであることを、ブラウザーに伝えられます。これを設定すると、ブラウザーは要素の外観に手を加えることなく、CSS で指定された通りに要素を描画します。

> **Note:** `color-adjust: exact` を与えても CSS がその通りに使用されるとは限りません。ブラウザー出力を変更するユーザー設定 (印刷ダイアログボックスの「背景を印刷しない」チェックボックスなど) が提供されている場合、`color-adjust` の値はそれによって上書きされます。

## 関連情報

- [グラフィックの描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [ウェブのグラフィック](/ja/docs/Web/Guide/Graphics)
- [MDN のカラーピッカーツール](/ja/docs/Web/CSS/CSS_Colors/Color_picker_tool)
