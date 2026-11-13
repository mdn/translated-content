---
title: "HTMLTextAreaElement: defaultValue プロパティ"
short-title: defaultValue
slug: Web/API/HTMLTextAreaElement/defaultValue
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

**`defaultValue`** は {{domxref("HTMLTextAreaElement")}} インターフェイスのプロパティで、このテキストエリアの既定のテキストコンテンツを示します。この値を取得または設定することは、 {{htmlelement("textarea")}} の {{domxref("Node.textContent", "textContent")}} を取得または設定するのと同じです。

## 値

文字列です。

## 例

下記の例では、`defaultValue` は元々 HTML で記述されていた値を返します。既定値が HTML または `defaultValue` プロパティのいずれかで設定されている場合、ユーザーが入力すると `value` が更新されますが、 `defaultValue` を上書きすることはありません。

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.defaultValue);
textArea.defaultValue = "This is the default text now!";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.value")}}
