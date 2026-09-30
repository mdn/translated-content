---
title: "`background` プロパティ (CSS)"
short-title: background
slug: Web/CSS/Reference/Properties/background
l10n:
  sourceCommit: 3f221b9845703eb21db70cdc321f843d5c1c072b
---

**`background`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、色、画像、原点と寸法、反復方法など、背景に関するすべてのスタイルプロパティを一括で設定します。

{{InteractiveExample("CSS デモ: background")}}

```css interactive-example-choice
background: green;
```

```css interactive-example-choice
background: content-box radial-gradient(crimson, skyblue);
```

```css interactive-example-choice
background: no-repeat url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background: left 5% / 15% 60% repeat-x
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background:
  center / contain no-repeat
    url("/shared-assets/images/examples/firefox-logo.svg"),
  #eeeeee 35% url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

### リセットのみのサブプロパティ

このプロパティは、以下の CSS プロパティを初期値にリセットします。

- {{cssxref("background-blend-mode")}}

## 構文

```css
/* <background-color> を使用 */
background: green;

/* <bg-image> と <repeat-style> を使用 */
background: url("test.jpg") repeat-y;

/* <visual-box> と <'background-color'> を使用 */
background: border-box red;

/* 単一の画像、中央寄せかつ縮小 */
background: no-repeat center/80% url("../img/image.png");

/* グローバル値 */
background: inherit;
background: initial;
background: revert;
background: revert-layer;
background: unset;
```

### 値

- `<attachment>`
  - : {{cssxref("background-attachment")}} を参照。既定値は `scroll` です。
- `<visual-box>`
  - : {{cssxref("background-clip")}} および {{cssxref("background-origin")}} を参照。既定値はそれぞれ `border-box` および `padding-box` です。
- `<'background-color'>`
  - : {{cssxref("background-color")}} を参照。既定値は `transparent` です。
- `<bg-image>`
  - : {{Cssxref("background-image")}} を参照。既定値は `none` です。
- `<bg-position>`
  - : {{cssxref("background-position")}} を参照。既定値は 0% 0% です。
- `<repeat-style>`
  - : {{cssxref("background-repeat")}} を参照。既定値は `repeat` です。
- `<bg-size>`
  - : {{cssxref("background-size")}} を参照。既定値は `auto` です。

## 解説

`background` 一括指定プロパティを使用すると、すべての CSS 背景プロパティを 1 つの宣言で指定することができます。背景は、要素のコンテンツの下に配置されます。カンマで区切られた複数の背景値がある場合、それぞれが 1 つの背景レイヤーとなり、前回のレイヤーの上に重ねて描画されます。

`background` プロパティは、カンマで区切られた 1 つ以上の背景レイヤーとして指定されます。それぞれのレイヤーには、0 個、1 個、2 個の `<visual-box>` 要素と、0 個または 1 個の `<attachment>`、`<bg-image>`、`<bg-position>`、`<bg-size>`、および `<repeat-style>` 要素を含めることができます。`<bg-position>`、`<bg-size>`、`<repeat-style>` 要素が 2 つ指定された場合、1 つ目の値は水平方向の値に設定され、2 つ目の値は垂直方向の値に設定されます。1 つの値だけが設定された場合は、その値が両方のサイズに適用されます。

`<'background-color'>` 要素は、指定された最後の背景レイヤーにのみ含めることができます。

`background` 一括指定プロパティの値の宣言で設定されていない要素のプロパティは、デフォルト値に設定されます。

### 成分プロパティの順序

一部の要素のプロパティは値の型が共通しているため、一括指定ではそれらのプロパティの順序が重要になります。

`<bg-size>` の値は、`<bg-position>` の後に、`/` 文字で区切って記載することができます。例えば、`10px 10px / 80% 80%` という指定は、背景画像の高さと幅が要素の `80%` となり、要素の左上角から上方向に `10px`、左方向に `10px` の位置に配置されることを意味します。`<bg-position>` 内で、両方の値が長さ単位の場合、または一方が長さ単位で他方が `center` の場合、1 つ目の値は水平位置を、2 つ目の値は垂直位置を参照します。

それぞれの背景レイヤーでは、[`<visual-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#visual-box) の値を 0 個、1 個、2 個指定することができます。値が 1 個のみ指定された場合、{{cssxref("background-origin")}} と {{cssxref("background-clip")}} の両方が設定される。2 つの値が存在する場合、1 つ目の値が `background-origin` を、2 つ目の値が `background-clip` の値を指定します。`<visual-box>` の値が指定されていない場合、`background-origin` のデフォルトは `padding-box`、`background-clip` のデフォルトは `border-box` になります。

その他の背景プロパティについては順序の指定は必須ではありませんが、一貫性と可読性を高めるため、以下の順序を推奨します。なお、どの値も必須ではないことにご留意ください。

`<bg-image> <bg-position> / <bg-size> <repeat-style> <attachment> <bg-clip> <bg-origin> <'background-color'>`

以下の `background` は、すべてのデフォルト値をこの順序で明示的に設定します。

```css
background: none 0% 0% / auto auto repeat scroll border-box padding-box
  transparent;
```

順序が異なっていても、以下の 3 行の CSS は上記と同じ効果があります。

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### 画像の描画順

カンマ区切りで複数の背景が指定されている場合、それらは互いに重なり合う複数の背景レイヤーとして生成されます。リストの先頭にある背景が最上位レイヤーとなります。最上位レイヤーに透明な領域が含まれていない場合、表示されるのはこのレイヤーのみとなります。

最後のレイヤーは最下層のレイヤーです。背景色は常にこのレイヤーに含まれます。

### 文書全体に適用された本文の背景

文書の {{htmlelement("html")}} `:root` 要素の計算された `background-image` の値が `none` で、その `background-color` が `transparent` の場合、ブラウザーは {{htmlelement("body")}} 要素に設定された `background` スタイルを `:root` に引き継ぎ、`<body>` を `background: initial` が設定されているかのように扱います。言い換えれば、`<html>` 要素は `<body>` 要素に設定されたすべての `background` スタイルを取得し、`<body>` 要素の背景プロパティは初期値に設定されます。

この動作のため、仕様書の作成者は、文書の背景スタイルを `html` スタイルブロックではなく `body` スタイルブロックで設定することを推奨しています。ただし、抑制を使用するとこの動作が無効になる点に注意してください。`<html>` 要素または `<body>` 要素のいずれかで、{{cssxref("contain")}} プロパティが `none` 以外の何らかの値に設定されている場合、`background` プロパティおよびその個別指定プロパティの構成要素は、`<body>` 要素からルート要素である `<html>` 要素へ伝播されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要であり、スクリーンリーダーはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## 例

### 色キーワードと画像による背景の設定

#### HTML

```html live-sample___setting_backgrounds_with_color_keywords_and_images
<p class="top-banner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">これは段落です</p>
<p></p>
```

#### CSS

```css live-sample___setting_backgrounds_with_color_keywords_and_images
.warning {
  background: pink;
}

.top-banner {
  background: url("star-solid.gif") #99f repeat-y fixed;
}
```

#### 結果

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("box-decoration-break")}}
- [グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
- [複数の背景の使用](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
