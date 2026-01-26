---
title: "TrustedTypePolicy: name プロパティ"
short-title: name
slug: Web/API/TrustedTypePolicy/name
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`name`** は {{domxref("TrustedTypePolicy")}} インターフェイスの読み取り専用プロパティで、このポリシーの名前を返します。

## 値

このポリシーの名前の入った文字列です。

## 例

以下の例では、 `myEscapePolicy` というポリシーを {{domxref("TrustedTypePolicyFactory.createPolicy()")}} で作成し、このオブジェクトの `escapeHTMLPolicy` で表されます。このオブジェクトの `name` を呼び出すと、文字列 "myEscapePolicy" が返されます。

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

console.log(escapeHTMLPolicy.name); /* "myEscapePolicy" */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
