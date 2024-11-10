---
title: "ElementInternals: validationMessage プロパティ"
short-title: validationMessage
slug: Web/API/ElementInternals/validationMessage
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

**`validationMessage`** は {{domxref("ElementInternals")}} インターフェイスの読み取り専用プロパティで、この要素の検証メッセージを返します。

## 値

この要素の検証メッセージを含む文字列です。

## 例

次の例では、検証メッセージを {{domxref("ElementInternals.setValidity()")}} で設定し、`validationMessage` で返しています。

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
console.log(this.internals_.validationMessage); // "my message"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
