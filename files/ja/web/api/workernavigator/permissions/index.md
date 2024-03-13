---
title: WorkerNavigator.permissions
slug: Web/API/WorkerNavigator/permissions
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}

**`WorkerNavigator.permissions`** は読み取り専用のプロパティで、 {{domxref("Permissions")}} オブジェクトを返します。これは[権限 API](/ja/docs/Web/API/Permissions_API) に応じた API の許可状況を照会・更新するために使用することができます。

## 値

{{domxref("Permissions")}} オブジェクトです。

## 例

```js
navigator.permissions.query({ name: "notifications" }).then((result) => {
  if (result.state === "granted") {
    showNotification();
  } else if (result.state === "prompt") {
    requestNotificationPermission();
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限 API](/ja/docs/Web/API/Permissions_API)
- [ウェブワーカー API](/ja/docs/Web/API/Web_Workers_API)
