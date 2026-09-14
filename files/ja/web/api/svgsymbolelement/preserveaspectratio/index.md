---
title: "SVGSymbolElement: preserveAspectRatio プロパティ"
short-title: preserveAspectRatio
slug: Web/API/SVGSymbolElement/preserveAspectRatio
l10n:
  sourceCommit: e4dae88f147cd8a57f2e69feca9e63566662ddcc
---

{{APIRef("SVG")}}

**`preserveAspectRatio`** は {{domxref("SVGSymbolElement")}} インターフェイスの読み取り専用プロパティで、指定された {{SVGElement("symbol")}} 要素の {{SVGAttr("preserveAspectRatio")}} 属性を反映します。これは、`symbol` のコンテンツが、アスペクト比を維持したまま、指定された空間に収まるようにどのように変倍されるべきかを定義します。

## 値

{{domxref("SVGAnimatedPreserveAspectRatio")}} オブジェクトです。

## 例

指定された SVG を例にとると、`preserveAspectRatio` プロパティを使用することで、`symbol` 要素の変倍の挙動を確認することができます。

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <symbol
      id="exampleSymbol"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMinYMin meet">
      <circle cx="50" cy="50" r="50" fill="blue" />
    </symbol>
  </defs>
  <use href="#exampleSymbol" x="50" y="50" width="100" height="100" />
</svg>
```

次のように `preserveAspectRatio` 属性にアクセスすることができます。

```js
const symbolElement = document.getElementById("exampleSymbol");

// preserveAspectRatio プロパティにアクセス
const aspectRatio = symbolElement.preserveAspectRatio.baseVal;

console.log(aspectRatio.align); // 出力結果: 2 (xMinYMin)
console.log(aspectRatio.meetOrSlice); // 出力結果: 1 (meet)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("preserveAspectRatio")}}
