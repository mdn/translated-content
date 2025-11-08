---
title: "HTMLTextAreaElement: autocomplete プロパティ"
short-title: autocomplete
slug: Web/API/HTMLTextAreaElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`autocomplete`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、ブラウザーによってコントロールの値が自動的に補完できるかどうかを示します。これは、`<textarea>` 要素の [`autocomplete`](/ja/docs/Web/HTML/Reference/Elements/textarea#autocomplete) 属性を反映します。

## 値

文字列です。`autocomplete` 属性の値 (`"on"`, `"off"`, [`<token-list>`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens))、または指定されていない場合は空文字列 `""` です。

## 例

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.autocomplete);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- HTML の [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) 属性
- ARIA の [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) 属性
- [自動補完の無効化](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
