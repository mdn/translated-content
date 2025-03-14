---
title: "HTMLSelectElement: multiple プロパティ"
short-title: multiple
slug: Web/API/HTMLSelectElement/multiple
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

**`multiple`** は {{DOMxRef("HTMLSelectElement")}} インターフェイスのプロパティで、ユーザーがオプションのリストから複数のオプションを選択できることを指定します。これは、{{htmlelement("select")}} 要素の [`multiple`](/ja/docs/Web/HTML/Element/select#multiple) 属性を反映しています。

## 値

論理値です。

## 例

```js
const selectElement = document.getElementById("comment");
console.log(selectElement.multiple);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("select")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.length")}}
- {{DOMXref("HTMLSelectElement.selectedIndex")}}
