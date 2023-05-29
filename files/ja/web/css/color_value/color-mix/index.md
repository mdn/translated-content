---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}{{SeeCompatTable}}

**`color-mix()`** 関数記法は 2 つの{{cssxref("color_value","color","",1)}}の値を採り、指定された色空間の指定された量で混合した結果を返します。

## 構文

```css
color-mix(in lch, peru 40%, lightgoldenrod);
color-mix(in srgb, #34c9eb 20%, white);
```

### 値

- 関数記法: `color-mix( in <colorspace> , [ <color> && <percentage>? ]#{2})`

  - : `<colorspace>` は `srgb`, `srgb-linear`, `lab`, `oklab`, `xyz`, `xyz-d50`, `xyz-d65`, `hsl`, `hwb`, `lch`, `oklch` のいずれかです。既定値はありません。

    `<color>` は有効な{{cssxref("color_value","color","",1)}}です。

    `<percentage>` は混合する色のパーセント値です。

## 例

### HTML

```html
<ul>
  <li>10% #34c9eb</li>
  <li>40% #34c9eb</li>
  <li>70% #34c9eb</li>
</ul>
```

### CSS

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid #34c9eb;
  padding: 10px;
}

li {
  padding: 10px;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 10%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 40%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 70%, white);
}
```

#### 結果

対応しているブラウザーでは、 `#34c9eb` の混合率が高いほど、 3 つのアイテムがより青くなります。

{{EmbedLiveSample('Examples','100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
