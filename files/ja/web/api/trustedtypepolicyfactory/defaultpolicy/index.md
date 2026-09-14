---
title: "TrustedTypePolicyFactory: defaultPolicy プロパティ"
short-title: defaultPolicy
slug: Web/API/TrustedTypePolicyFactory/defaultPolicy
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

**`defaultPolicy`** は {{domxref("TrustedTypePolicyFactory")}} インターフェイスの読み取り専用プロパティで、既定の {{domxref("TrustedTypePolicy")}} または空であれば null を返します。

詳しくは[既定のポリシー](/ja/docs/Web/API/Trusted_Types_API#既定のポリシー)を参照してください。

## 値

{{domxref("TrustedTypePolicy")}} または `null` です。

## 例

以下の最初の行は、既定のポリシーが作成されていないため `null` を返します。既定のポリシーが作成されると、`defaultPolicy` を呼び出すとそのポリシーオブジェクトが返されます。

```js
console.log(trustedTypes.defaultPolicy); // null
const dp = trustedTypes.createPolicy("default", {});
console.log(trustedTypes.defaultPolicy); // TrustedTypePolicy オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
