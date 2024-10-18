---
title: "HTMLInputElement: autocomplete プロパティ"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{ APIRef("HTML DOM") }}

**`autocomplete`** は {{DOMxRef("HTMLInputElement")}} インターフェイスのプロパティで、ブラウザーによってコントロールの値が自動的に補完できるかどうかを示します。これは、{{htmlelement("input")}} 要素の [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性を反映します。

## 値

文字列です。`autocomplete` 属性の値 (`"on"`, `"off"`, [`<token-list>`](/ja/docs/Web/HTML/Attributes/autocomplete#token_list_tokens))、または指定されていない場合は空文字列 `""` です。

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
- HTML の [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性
- ARIA の [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 属性
- [自動補完の無効化](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
