---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
---

{{CSSRef}}

**`background-blend-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背景画像が相互にどのように混合されるか、また要素の背景色とどのように混合されるかを設定します。

{{EmbedInteractiveExample("pages/css/background-blend-mode.html")}}

混合モードは {{cssxref("background-image")}} プロパティと同じ順番で定義してください。混合モードのリストと背景画像のリストの長さが異なる場合は、長さが合うまで繰り返しや切り落としが行われます。

## 構文

```
/* 1 値 */
background-blend-mode: normal;

/* 2 値、背景ごとにひとつずつ */
background-blend-mode: darken, luminosity;

/* グローバル値 */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: revert;
background-blend-mode: unset;
```

### 値

- {{cssxref("&lt;blend-mode&gt;")}}
  - : 適用する混合モードです。複数の値をカンマ区切りで置くことができます。

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

<h2 id="Examples">例</h2>

### 基本的な例

```css
.item {
  width: 300px;
  height: 300px;
  background: url("image1.png"), url("image2.png");
  background-blend-mode: screen;
}
```

### 様々な混合モードを試してみる

```html hidden
<div id="div"></div>
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

```css hidden
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = function (event) {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('Examples', "330", "350") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
