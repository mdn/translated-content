---
title: "ElementInternals: labels プロパティ"
short-title: labels
slug: Web/API/ElementInternals/labels
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`labels`** は {{domxref("ElementInternals")}} インターフェイスのプロパティで、要素に関連付けられたラベルを返します。

## 値

この要素に関連付けられたすべてのラベル要素の入った {{domxref("NodeList")}} です。

## 例

次の例は、カスタムチェックボックスコンポーネントに {{HTMLElement("label")}} 要素をリンクしたものです。
`labels` の値をコンソールに出力すると、このラベルを表す1つのエントリーを持つ {{domxref("NodeList")}} が返されます。

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label>
</form>
```

```js
let element = document.getElementById("custom-checkbox");
console.log(element.internals_.label);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
