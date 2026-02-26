---
title: border-image-repeat
slug: Web/CSS/Reference/Properties/border-image-repeat
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`border-image-repeat`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[境界画像](/ja/docs/Web/CSS/Reference/Properties/border-image)の辺と中央部分の画像がどのように変倍され、タイル状に配置されるかを定義します。中央領域は、{{cssxref("border-image-slice")}} プロパティでキーワード "fill" を使用することで、表示させることができます。

{{InteractiveExample("CSS デモ: border-image-repeat")}}

```css interactive-example-choice
border-image-repeat: stretch;
```

```css interactive-example-choice
border-image-repeat: repeat;
```

```css interactive-example-choice
border-image-repeat: round;
```

```css interactive-example-choice
border-image-repeat: space;
```

```css interactive-example-choice
border-image-repeat: round stretch;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">これは周囲に境界があるボックスです。</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

## 構文

```css
/* キーワード値 */
border-image-repeat: stretch;
border-image-repeat: repeat;
border-image-repeat: round;
border-image-repeat: space;

/* 垂直 | 水平 */
border-image-repeat: round stretch;

/* グローバル値 */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: revert;
border-image-repeat: revert-layer;
border-image-repeat: unset;
```

`border-image-repeat` プロパティは、下記の値のリストにある値を 1 つまたは 2 つ使用して指定することができます。

- 値が **1 つ**指定された場合、**全四辺**に同じ動作が適用されます。
- 値が **2 つ**指定された場合、1 つ目の動作が**上、中、下**に、2 つ目が**左、右**に適用されます。

### 値

- `stretch`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域が引き伸ばされます。
- `repeat`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域の一部が切り取られることがあります。
- `round`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域が引き延ばされることがあります。
- `space`
  - : 2 つの境界の間を埋めるために、元画像の辺の領域を (繰り返して) 並べます。寸法を合わせるために領域間に間隔が置かれることがあります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 反復する境界画像

#### CSS

```css
#bordered {
  width: 12rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 40px solid;
  border-image: url("border.png") 27;
  border-image-repeat: stretch; /* live sample で変更可能 */
}
```

```html hidden
<div id="bordered">You can try out various border repetition rules on me!</div>

<select id="repetition">
  <option value="stretch">stretch</option>
  <option value="repeat">repeat</option>
  <option value="round">round</option>
  <option value="space">space</option>
  <option value="stretch repeat">stretch repeat</option>
  <option value="space round">space round</option>
</select>
```

```js hidden
const repetition = document.getElementById("repetition");
repetition.addEventListener("change", (evt) => {
  document.getElementById("bordered").style.borderImageRepeat =
    evt.target.value;
});
```

#### 結果

{{EmbedLiveSample("Repeating_border_images", "auto", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Border images in CSS: A key focus area for Interop 2023](/en-US/blog/border-images-interop-2023/) - MDN blog (2023)
