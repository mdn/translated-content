---
title: Permissions
slug: Web/API/Permissions
l10n:
  sourceCommit: 805d398f95c9d1ad8769e65d56bbfe2a31205021
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

**`Permissions`** インターフェイスは、[権限 API](/ja/docs/Web/API/Permissions_API) の中核的な機能を提供します。これには、権限を照会したり取り消したりするメソッドなどが含まれます。

## インスタンスメソッド

- {{domxref("Permissions.query","Permissions.query()")}}
  - : 指定された API に対するユーザーの権限状態を返します。
- {{domxref("Permissions.revoke","Permissions.revoke()")}} {{Deprecated_Inline}}
  - : 指定された API に現在設定されている権限を取り消します。

## 例

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 権限が拒否された場合は何もしない
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
