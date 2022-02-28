---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
tags:
  - API
  - CSSOM View
  - NeedsAgnostify
  - NeedsMarkupWork
  - プロパティ
  - リファレンス
browser-compat: api.Element.clientLeft
translation_of: Web/API/Element/clientLeft
---
{{ APIRef("DOM") }}

要素の左境界の幅をピクセル数で表します。これは、要素の書字方向が右書きで、オーバーフローがある場合、左の垂直スクロールバーがレンダリングされると垂直スクロールバーの幅を含みます。 `clientLeft` は、左マージンまたは左パディングを含みません。 `clientLeft` は読み取り専用です。

> **Note:** このプロパティは値を整数に丸めます。小数の値が必要な場合は、 {{ domxref("element.getBoundingClientRect()") }} を使用してください。

> **Note:** 要素に `display: inline` が設定されている場合、境界の幅に関わらず `clientLeft` は `0` を返します。

## 構文

```js
var left = element.clientLeft;
```

## 例

次の例では、クライアント領域の背景が白で、 `border-left` が 24px の黒になっています。 `clientLeft` の値は、マージン（黄色）領域の末端から、パディングとコンテンツ領域（白色）が始まるまでの距離、つまり 24px となります。

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
  border-left: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### 結果

{{EmbedLiveSample("Example", 400, 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
