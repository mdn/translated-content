---
title: "SVGSymbolElement: viewBox プロパティ"
short-title: viewBox
slug: Web/API/SVGSymbolElement/viewBox
l10n:
  sourceCommit: e4dae88f147cd8a57f2e69feca9e63566662ddcc
---

{{APIRef("SVG")}}

**`viewBox`** は {{domxref("SVGSymbolElement")}} インターフェイスの読み取り専用プロパティで、指定された {{SVGElement("symbol")}} 要素の {{SVGAttr("viewBox")}} 属性を反映します。

## 値

{{domxref("SVGAnimatedRect")}} オブジェクトです。

## 例

### `viewBox` プロパティへアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <symbol id="exampleSymbol" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill="blue" />
    </symbol>
  </defs>
  <use href="#exampleSymbol" x="50" y="50" width="100" height="100" />
</svg>
```

```js
const symbolElement = document.getElementById("exampleSymbol");

// viewBox プロパティへアクセス
const viewBox = symbolElement.viewBox.baseVal;

console.log(viewBox.x); // 出力結果: 0
console.log(viewBox.y); // 出力結果: 0
console.log(viewBox.width); // 出力結果: 100
console.log(viewBox.height); // 出力結果: 100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("viewBox")}}
