---
title: CSS を使った HTML の要素への色の適用
short-title: HTML の要素への色の適用
slug: Web/CSS/Guides/Colors/Applying_color
original_slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

[CSS](/ja/docs/Web/CSS) では、[HTML](/ja/docs/Web/HTML) [要素](/ja/docs/Web/HTML/Reference/Elements)に色を追加し好みの見た目にする方法が多岐に渡ります。
このガイドは、CSS を使用して HTML 要素に色を適用する方法を紹介する入門書です。このガイドには、[色を設定する CSS プロパティの一覧とその値](#色を設定できるプロパティ)、および[スタイルシート](#スタイルシートで色を値として指定)と[それ以外の方法](#色をつける他の方法)の両方で色を使用する方法を記載しています。

> [!NOTE]
> [色を賢く使用する](/ja/docs/Web/CSS/CSS_colors/Using_color_wisely)ことが重要です。常に適切な色を選択し、テキストと背景のコントラストを十分に確保して読みやすさを保証し、視覚能力が異なる人々のニーズを常に念頭に置いてください。

データ型としての CSS 色についてさらに詳しく知りたい場合は、[CSS `<color>` データ型](/ja/docs/Web/CSS/Reference/Values/color_value)リファレンスおよび [CSS 色値ガイド](/ja/docs/Web/CSS/CSS_colors/Color_values)を参照してください。

## 色を設定できるプロパティ

要素レベルでは、HTML のすべてのものに色を適用することができます。それよりも、テキストや境界線など、要素の中に描かれているものの種類で見てみましょう。それぞれについて、色を適用する CSS プロパティの一覧を見てみましょう。

基礎的なレベルでならば、{{cssxref("color")}} プロパティは HTML 要素の内容物の色を定義し、{{cssxref("background-color")}} は HTML 要素の背景色を定義すると言えます。これらのプロパティはほぼすべての要素で使用できます。

### テキスト

要素がレンダリングされるたびに、テキスト、その背景、およびテキストの装飾の色を決定するために以下のプロパティが使用されます。

- {{cssxref("color")}}
  - : テキストと[テキスト装飾](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (下線や上線、打ち消し線などを付加するもの) に使用する色です。

- {{cssxref("background-color")}}
  - : テキストの背景色です。

- {{cssxref("text-shadow")}}
  - : テキストに適用する影の効果を設定します。影の設定には、影のベース色 (他のパラメータに基づいて背景をぼかして混色する色) があります。より詳しくは基本的な[テキストとフォントの装飾](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)の[テキストのドロップシャドウ](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows)を参照してください。

- {{cssxref("text-decoration-color")}}
  - : テキスト装飾（下線、取り消し線など）の既定の色は [`currentcolor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) です。このキーワードは、`color` プロパティの現在の値を表します。ただし、`text-decoration-color` プロパティを使用して、その値を上書きし、異なる色を使用することができます。

- {{cssxref("text-emphasis-color")}}
  - : テキスト内の各文字に隣接する強調記号をレンダリングする際に使用する色です。これは主に、東アジア言語のテキストを描画する際に使用します。

- {{cssxref("caret-color")}}
  - : 要素の {{Glossary("caret", "キャレット")}} (テキスト入力カーソルとも表現されるもの) の描画に使用する色です。これは編集可能な要素でのみ有用であり、{{HTMLElement("input")}} や {{HTMLElement("textarea")}} または HTML の [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性が `true` に設定された要素に使用されます。

### ボックス

すべての要素は中身があるボックスであり、そのボックスの内容に加えて、背景と境界線もあります。

- [境界線](#境界線)
  - : ボックスの境界線の色を設定できる CSS プロパティ一覧は、[境界線](#境界線)の節を参照してください。

- {{cssxref("background-color")}}
  - : 要素の内容がない領域で使用される背景色です。

- {{cssxref("box-shadow")}}
  - : ボックスに挿入する影とドロップシャドウ効果を構成します。それぞれの影のオプションには、影の基本色（これはぼかされ、他の引数に基づいて背景と混合されます）が含まれます。

- {{cssxref("column-rule-color")}}
  - : [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)を使用しているときに、テキストの列を区切る線に使う色です。

- {{cssxref("outline-color")}}
  - : 要素の外側に輪郭を描画する際に使用する色です。この輪郭は、文書内の補助的な空間を確保しないという点で、ボーダーとは異なります。輪郭は[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)には参加せず、他のコンテンツと重複します。輪郭は一般的にフォーカスインジケーターとして使用され、現在どの要素がフォーカスを持っており、キーボード入力イベントを受信するかを示します。

### 境界線

あらゆる要素で、周囲に[境界線](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)を描画することができます。基本的な要素の境界線は、要素の内容物の辺を囲むように描かれた線です。
基本的な要素の境界は、要素の内容の端に描かれている線です。要素とその境界線の関係性については、[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)を、より詳しい境界線へのスタイルの適用については [CSS での境界線のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) を参照してください。

{{cssxref("border")}} 一括指定プロパティを使用することもできます。これは、境界線に関する (色以外の[線幅](/ja/docs/Web/CSS/Reference/Properties/border-width)、[線種](/ja/docs/Web/CSS/Reference/Properties/border-style)（実線、破線など) などの特性も含んだ）すべての設定をこれ一つで行えます。

- {{cssxref("border-color")}} 一括指定
  - : 要素の境界線の各辺に使用する単一の色を指定します。

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, {{cssxref("border-bottom-color")}}
  - : 要素の境界線の各辺に対応する色を指定できます。

- {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}
  - : これらは、境界線が囲むブロックの先頭と末尾に最も近い境界線の描画色を設定することができます。左から右への書き方（英語の書き方など）では、ブロック先頭の境界線は上端、ブロック末尾の境界線は下端になります。これは、インラインの先頭とインラインの末尾である左右の（ボックス内の各行のテキストの先頭と末尾の位置に対応する）端とは異なります。

- {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end-color")}}
  - : これらは、ボックス内のテキスト行の先頭と末尾に最も近い境界線の縁に色を付けられます。どちら側になるかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} プロパティによって異なり、ふつうは（ただし常にではなく）表示する言語の書字方向に基づいて調整されます。例えば、ボックスのテキストが右から左に描画される場合、`border-inline-start-color` は境界線の右側に適用されます。

## スタイルシートで色を値として指定

これで、[要素に色を設定できる CSS プロパティ](#色を設定できるプロパティ)がわかりましたので、ウェブサイトに色を追加することができます。この{{Glossary("stylesheet", "スタイルシート")}}で色を使用する例を見ていきましょう。この例では、前回ご紹介したプロパティをいくつか使用していますが、CSS で色を適用するという概念は、プロパティに関係なく同じです。

作成するコードを見ていく前に、まずは結果を見ていきましょう。

{{EmbedLiveSample("スタイルシートで色を値として指定", 650, 150)}}

### HTML

上記の例を生成する HTML は、次のとおりです。

```html
<div class="wrapper">
  <div class="boxLeft">
    <p>This is the first box.</p>
  </div>
  <div class="boxRight">
    <p>This is the second box.</p>
  </div>
</div>
```

ここでは、ラッパーの {{HTMLElement("div")}} の中に 2 つの子 `<div>` があり、それぞれに単一の子段落 ({{HTMLElement("p")}}) があります。それぞれの中身の `<div>`は、異なる外観とデザインが指定されています。

### CSS

上記の結果を作成する CSS を、1 つずつ見ていきましょう。

> [!NOTE]
> この例では、複数の[異なる CSS 色値型](/ja/docs/Web/CSS/CSS_colors/Color_values)を使用して、その使用方法を説明しています。これは、実稼働コードには推奨されません。CSS を書く際には、ご自身やチームにとって最もわかりやすい値型を使用してください。

```css
.wrapper {
  height: 110px;
  padding: 10px;
  display: flex;
  gap: 10px;
  text-align: center;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  border: 6px solid mediumturquoise;
}

div {
  flex: 1;
}
```

`.wrapper` クラスは、他のすべてのコンテンツを囲む {{HTMLElement("div")}} にスタイルを割り当てるために使っています。これにより、{{cssxref("height")}} を使用してコンテナーの高さが確定し、このブロックレベル要素の幅は既定では親の 100% になります。{{cssxref("display")}} を `flex` に設定し、`10px` の {{cssxref("gap")}} を追加すると、フレックスコンテナーが作成され、コンテナーのすべての要素の間に隙間を空けて子要素が並べられます。{{cssxref("flex")}} を使用すると、フレックスの子要素がコンテナーを埋めるように拡大します。フレックスコンテナーそのものにはまったく効果はありません。

ここでの議論でさらに興味深いのは、{{cssxref("border")}} プロパティで要素の外縁に境界線を設定していることです。この境界線は幅 6 ピクセルの実線で、[名前付き色](/ja/docs/Web/CSS/Reference/Values/named-color)は `mediumturquoise` です。

ラッパー内には、左ボックスと右ボックスがあります。

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

`.boxLeft` クラスは、左側のボックスのスタイルとして巧みに使われ、以下のようにボックスを左側に浮かせて色を設定しています。

- 背景色は、CSS の {{cssxref("background-color")}} プロパティを `rgb(245 130 130)` の {{CSSXref("color_value/rgb", "rgb()")}} 関数記法を使用して設定しています。
- ボックスの輪郭線が定義されています。一般的に使用される境界線 ({{cssxref("border")}}) とは異なり、輪郭線 ({{cssxref("outline")}}) はレイアウトにまったく影響を与えません。境界線のように空間を占有するのではなく、要素のボックスの外側に何かが存在する場合、その上に描画されます。この輪郭線は、2 ピクセルの太さの濃い赤色の線です。色を指定する際に、`darkred` キーワードを使用している点に注目してください。
- テキストの色を明示的に設定していないことに注意してください。この場合 {{cssxref("color")}} の値はそれを含んだ最も近い要素から継承されます。既定では、黒です。

```css
.boxRight {
  background-color: hwb(270deg 63% 13%);
  outline: 4px dashed #6e1478;
  color: hsl(0deg 100% 100%);
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8;
  text-decoration: underline wavy #8f8;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> ここでは `text-decoration-*` スタイルを個別に設定しましたが、これは Safari が {{cssxref("text-decoration")}} を一括指定プロパティとして対応していないためです。

最後に、`.boxRight` クラスは、右側に描画するボックスにいくつかのスタイルを設定します。 そして、以下の色が設定されます（[色値](/ja/docs/Web/CSS/CSS_colors/Color_values)の 5 つの異なる宣言方法を使用します）。

- `background-color` は {{CSSXref("color_value/hwb", "hwb()")}} 関数記法を使用して `hwb(270deg 63% 13%)` と設定しています。この色は中くらいの紫色です。
- ボックスの `outline` を使用して、ボックスを囲む 4 ピクセルの太さの破線を指定します。色は、6 桁の {{cssxref("hex-color")}} `#6e1478` を使用して、やや濃い紫色を指定します。
- 前景色（テキスト）は、 {{cssxref("color")}} プロパティで {{CSSXref("color_value/hsl", "hsl()")}} 関数記法を使用して、`hsl(0deg 100% 100%)` と指定します。これは、白色を指定する多くの方法のうちの 1 つです。
- {{cssxref("text-decoration")}} の一括指定でテキストの下に緑色の波線行を追加し、ブラウザー互換性を確保するために個別指定の部分も残しています。 3 桁の 16 進数カラーコード {{cssxref("hex-color")}} `#8f8`（`#88ff88` と同じ）を使用しました。
- 最後に、{{cssxref("text-shadow")}} を使用してテキストに少しだけ影をつけています。この `color` 引数は `black` と、{{cssxref("named-color")}} 値にしています。

私たちは、可能性を示すために 5 つの異なる色の構文を使用しました。実際の現場では、できればチームで推奨する色の表記法を選択し、一つのコードベースで作業する全員が同じ色の構文を使用することが望ましいでしょう。

### 色をつける他の方法

CSS が唯一の色を付けるためのウェブ技術ではありません。色に対応している、ウェブで使用可能なグラフィック技術があります。

- HTML の[キャンバス API](/ja/docs/Web/API/Canvas_API)
  - : キャンバス API では、2D のビットマップ画像を {{HTMLElement("canvas")}} 要素の中に描画できます。より詳しくは[キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)を参照してください。
- [SVG](/ja/docs/Web/SVG) (Scalable Vector Graphics)
  - : SVG ならば、特定の形状、パターン、線を描くコマンドで画像を描画できます。 SVG のコマンドは XML の形式となっており、直接ウェブページに埋め込めます。また、{{HTMLElement("img")}} 要素を使うと他の画像と同じような配置もできます。
- [WebGL](/ja/docs/Web/API/WebGL_API)
  - : Web Graphics Library は Open GL ES を基にした API で、ウェブ上に 2D や 3D のハイパフォーマンスなグラフィックを描画できます。より詳しくは [WebGL チュートリアル](/ja/docs/Web/API/WebGL_API/Tutorial)を参照してください。

> [!NOTE]
> すでに廃止されている HTML 属性には、`bgcolor` や `vlink` のように、色を値として受け入れるものがいくつかあります。これらの属性では、 {{cssxref("named-color")}} と 3 桁または 6 桁の {{cssxref("hex-color")}} 値のみを受け入れます。

## 関連情報

- [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) データ型
- [CSS 色値](/ja/docs/Web/CSS/CSS_colors/Color_values)ガイド
- [賢い色の使用](/ja/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS 色モジュール](/ja/docs/Web/CSS/Guides/Colors)
- [グラフィックの描画](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
- [ウェブのグラフィック](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images#ウェブ上のその他のグラフィック)
