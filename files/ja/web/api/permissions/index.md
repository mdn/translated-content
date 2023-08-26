---
title: Permissions
slug: Web/API/Permissions
l10n:
  sourceCommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{APIRef("Permissions API")}}

`Permissions` は[権限 API](/ja/docs/Web/API/Permissions_API) のインターフェイスで、権限の照会や取り消しのためのメソッドなど、中心となる権限 API の機能を提供します。

## メソッド

- {{domxref("Permissions.query","Permissions.query()")}}
  - : 指定された API の権限の状態を返します。
- {{domxref("Permissions.request","Permissions.request()")}} {{Experimental_Inline}}
  - : 指定された API を使用する権限を要求します。 これは現在どのブラウザーも対応していません。
- {{domxref("Permissions.requestAll","Permissions.requestAll()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : 指定された API 群の使用許可を要求します。これは現在、どのブラウザーも対応していません。
- {{domxref("Permissions.revoke","Permissions.revoke()")}} {{Deprecated_Inline}}
  - : 指定された API に現在設定されている権限を取り消します。

## 例

```js
navigator.permissions.query({ name: " geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // 権限が拒否された場合は何もしないでください。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
