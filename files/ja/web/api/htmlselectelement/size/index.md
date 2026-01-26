---
title: "HTMLSelectElement: size プロパティ"
short-title: size
slug: Web/API/HTMLSelectElement/size
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{ APIRef("HTML DOM") }}

**`size`** は {{DOMxRef("HTMLSelectElement")}} インターフェイスのプロパティで、一度に表示されるべきオプションの数、つまり行数を指定します。これは、この {{htmlelement("select")}} 要素の [`size`](/ja/docs/Web/HTML/Reference/Elements/select#size) 属性を反映します。省略された場合、値は `0` です。

> [!NOTE]
> 既定では、`<select>` は {{DOMxRef("HTMLSelectElement.multiple", "multiple")}} が true の場合は 4 つの行が表示されます。それ以外の場合は単一の行を表示します。`size` プロパティの既定値は `0` です。

## 値

数値です。

## 例

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.size);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- {{DOMXref("HTMLSelectElement.selectedOptions")}}
- {{DOMXref("HTMLSelectElement.length")}}
