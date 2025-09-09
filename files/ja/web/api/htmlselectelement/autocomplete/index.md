---
title: "HTMLSelectElement: autocomplete プロパティ"
short-title: autocomplete
slug: Web/API/HTMLSelectElement/autocomplete
l10n:
  sourceCommit: 68cc84f475a189d25551619d62e6e29b3db161fe
---

{{ APIRef("HTML DOM") }}

**`autocomplete`** は {{DOMxRef("HTMLSelectElement")}} インターフェイスのプロパティで、ブラウザーによってコントロールの値が自動的に補完できるかどうかを示します。これは、 `<select>` 要素の [`autocomplete`](/ja/docs/Web/HTML/Reference/Elements/select#autocomplete) 属性を反映します。

## 値

文字列で、`autocomplete` 属性の値（`"on"`, `"off"`, [`<token-list>`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens)）、または指定されていない場合は空文字列 (`""`) です。

## 例

```js
const selectElement = document.getElementById("favorite-fruit");
console.log(textArea.autocomplete);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("select")}}
- {{HTMLElement("option")}}
- HTML の [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) 属性
- ARIA の [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) 属性
- [自動補完の無効化](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
