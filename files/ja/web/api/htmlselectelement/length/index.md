---
title: "HTMLSelectElement: length プロパティ"
short-title: length
slug: Web/API/HTMLSelectElement/length
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

**`length`** は {{DOMxRef("HTMLSelectElement")}} インターフェイスのプロパティで、{{htmlelement("select")}} 要素内の {{htmlelement("option")}} 要素の数を指定します。これは、{{DOMxRef("HTMLSelectElement.options", "options")}} コレクション内のノードの数を表します。設定すると、({{DOMxRef("HTMLOptionsCollection.length")}}) として動作します。

## 値

数値です。

## 例

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.length);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- {{DOMXref("HTMLSelectElement.options")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.multiple")}}
- {{DOMXref("HTMLSelectElement.selectedIndex")}}
