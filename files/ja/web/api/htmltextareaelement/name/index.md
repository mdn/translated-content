---
title: "HTMLTextAreaElement: name プロパティ"
slug: Web/API/HTMLTextAreaElement/name
l10n:
  sourceCommit: d064784c78ec30c87ec3c3d9681b147999fd782f
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLTextAreaElement")}} インターフェイスの **`name`** プロパティは、{{HTMLElement("textarea")}} 要素の名前を表します。要素の [`name`](/ja/docs/Web/HTML/Element/textarea#name) 属性を反映します。

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
