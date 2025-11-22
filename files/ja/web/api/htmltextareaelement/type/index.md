---
title: "HTMLTextAreaElement: type プロパティ"
short-title: type
slug: Web/API/HTMLTextAreaElement/type
l10n:
  sourceCommit: 9f7016d8434a36052362f7c58ff7c4b144da56b0
---

{{ApiRef("HTML DOM")}}

**`type`** は {{domxref("HTMLTextAreaElement")}} の読み取り専用プロパティで、常に `"textarea"` を返します。

## 値

文字列で、常に `"textarea"` を返します。

## 例

```js
const textArea = document.querySelector("textarea");
console.log(textArea.type); // "textarea"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLTextAreaElement")}}
- {{HTMLElement("textarea")}}
