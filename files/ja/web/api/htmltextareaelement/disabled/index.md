---
title: "HTMLTextAreaElement: disabled プロパティ"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

**`disabled`** は {{DOMxRef("HTMLTextAreaElement")}} インターフェイスのプロパティで、この複数行テキストコントロールが無効で操作できないかどうかを示します。これは {{htmlelement("textarea")}} 要素の [`disabled`](/ja/docs/Web/HTML/Reference/Elements/textarea#autocomplete) 属性を反映します。 `false` の場合でも、それを格納する要素（例えば {{htmlelement("fieldset")}}）が無効になっている場合に、このテキストエリアが、無効になる場合があります。

## 値

論理値です。

## 例

```js
const textareaElement = document.getElementById("comment");
if (commentsDisabled) {
  textareaElement.disabled = true;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.readOnly")}}
