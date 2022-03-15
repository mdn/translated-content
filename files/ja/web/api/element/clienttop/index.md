---
title: Element.clientTop
slug: Web/API/Element/clientTop
tags:
  - API
  - CSSOM View
  - NeedsAgnostify
  - NeedsMarkupWork
  - プロパティ
  - リファレンス
browser-compat: api.Element.clientTop
translation_of: Web/API/Element/clientTop
---
{{ APIRef("DOM") }}

要素の上境界の幅をピクセル数で表します。これは要素の読み取り専用で整数型のプロパティです。

たまたま、 2 つの位置（`offsetTop` とクライアント領域の上端）の間にあるのは、要素の境界だけです。これは、 `offsetTop` が（マージンではなく）境界の上端の位置を示し、クライアント領域は境界の直下から始まるからです（クライアント領域はパディングを含みます）。したがって、 **clientTop** 値は常に "border-top-width" に対する `.getComputedStyle()` 値の整数部分と一致します。（実際には Math.round(parseFloat()) かもしれません。）例えば、計算された "border-top-width" が 0 の場合、 **`clientTop`** も 0 になります。

> **Note:** このプロパティは値を整数に丸めます。小数の値が必要な場合は、 {{ domxref("element.getBoundingClientRect()") }} を使用してください。

## 構文

```js
var top = element.clientTop;
```

## 例

次の例では、クライアント領域の背景が白で、 `border-top` が 24px の黒になっています。 `clientTop` の値は、マージン（黄色）領域の末端から、パディングとコンテンツ領域（白色）が始まるまでの距離、つまり 24px となります。

### HTML

```html
<div id="container">
  <div id="contained">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
```

### CSS

```css

#container {
  margin: 3rem;
  background-color: rgb(255, 255, 204);
  border: 4px dashed black;
}

#contained {
  margin: 1rem;
  border-top: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### 結果

{{EmbedLiveSample("Example", 400, 350)}}

## メモ

`clientTop` は MS IE DHTML オブジェクトモデルで最初に導入されました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
