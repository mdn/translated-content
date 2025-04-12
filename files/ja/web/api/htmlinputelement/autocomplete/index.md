---
title: "HTMLInputElement: autocomplete プロパティ"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

**`autocomplete`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、ブラウザーによってコントロールの値が自動的に補完できるかどうかを示します。これは、{{htmlelement("input")}} 要素の [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) 属性を反映します。

## 値

文字列です。`autocomplete` 属性の値 (`"on"`, `"off"`, [`<token-list>`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens))、または指定されていない場合は空文字列 `""` です。

## 例

```js
const inputElement = document.getElementById("name");
console.log(inputElement.autocomplete);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("input")}}
- {{DOMxRef("HTMLInputElement.value")}}
- HTML の [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) 属性
- ARIA の [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) 属性
- [自動補完の無効化](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
