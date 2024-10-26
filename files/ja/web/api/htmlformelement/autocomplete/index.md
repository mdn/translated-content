---
title: "HTMLFormElement: autocomplete プロパティ"
short-title: autocomplete
slug: Web/API/HTMLFormElement/autocomplete
l10n:
  sourceCommit: 4c81451d326b3bea82a02d912b9320273ad8572d
---

{{ APIRef("HTML DOM") }}

**`autocomplete`** は {{DOMxRef("HTMLFormElement")}} インターフェイスのプロパティで、ブラウザーによってこのフォームのコントロールの値が自動的に補完できるかどうかを示します。これは、{{htmlelement("form")}} 要素の [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性を反映します。

## 値

文字列です。 `"off"` の値は明示的に `"off"` が設定された場合で、それ以外は常に `"on"` です。

## 例

```js
const formElement = document.getElementById("name");
console.log(formElement.autocomplete);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("form")}}
- HTML の [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性
- ARIA の [`aria-autocomplete`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) 属性
- [自動補完の無効化](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
