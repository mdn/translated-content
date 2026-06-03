---
title: "HTMLTextAreaElement: name プロパティ"
short-title: name
slug: Web/API/HTMLTextAreaElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLTextAreaElement")}} インターフェイスの **`name`** プロパティは、{{HTMLElement("textarea")}} 要素の名前を表します。要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/textarea#name) 属性を反映します。

## 値

要素の名前を表す文字列です。

## 例

```js
const textareaElement = document.querySelector("#message");
console.log(`Element's name: ${textareaElement.name}`);
textareaElement.name = "response"; // 要素の名前を設定または更新する
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement.value")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
