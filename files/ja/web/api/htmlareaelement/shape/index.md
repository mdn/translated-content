---
title: "HTMLAreaElement: shape プロパティ"
short-title: shape
slug: Web/API/HTMLAreaElement/shape
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`shape`** は {{DOMxRef("HTMLAreaElement")}} インターフェイスのプロパティで、イメージマップ領域の形状を指定します。これは、 {{htmlelement("area")}} 要素の [`shape`](/ja/docs/Web/HTML/Reference/Elements/area#shape) 属性を反映します。

## 値

文字列です。 `rect`、`circle`、`poly` のいずれかです。

## 例

```js
const areaElement = document.getElementById("imageMapArea");
console.log(areaElement.shape);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXref("HTMLAreaElement.coords")}}
- {{DOMXref("HTMLAreaElement.alt")}}
- {{DOMXref("HTMLMapElement")}}
- {{HTMLElement("area")}}
- {{HTMLElement("map")}}
- {{HTMLElement("a")}}
