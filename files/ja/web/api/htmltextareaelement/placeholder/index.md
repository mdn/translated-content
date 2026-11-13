---
title: "HTMLTextAreaElement: placeholder プロパティ"
short-title: placeholder
slug: Web/API/HTMLTextAreaElement/placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`placeholder`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、このコントロールに入力できる内容についてのヒントをユーザーに表示します。これは、{{htmlelement("textarea")}} 要素の [`placeholder`](/ja/docs/Web/HTML/Reference/Elements/textarea#placeholder) 属性を反映します。

## 値

文字列です。

## 例

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.placeholder);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.value")}}
