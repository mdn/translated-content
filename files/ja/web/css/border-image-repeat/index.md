---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`border-image-repeat`** プロパティは、元画像の[辺の領域](/ja/docs/Web/CSS/border-image-slice#edge-regions)と[中央の領域](/ja/docs/Web/CSS/border-image-slice#middle-region)を、どうやって要素の[境界画像](/ja/docs/Web/CSS/border-image)に合うように合わせるかを定義します。 border-image-slice プロパティでキーワード "fill" を使用することで、中央の領域を表示することができます。

{{EmbedInteractiveExample("pages/css/border-image-repeat.html")}}

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

- [背景と境界](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
