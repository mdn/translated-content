---
title: "Navigator: permissions プロパティ"
short-title: permissions
slug: Web/API/Navigator/permissions
l10n:
  sourceCommit: ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{APIRef("Permissions API")}}

**`permissions`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、[権限 API](/ja/docs/Web/API/Permissions_API) の対象となる API のパーミッションの状態を照会および更新するために使用できる {{domxref("Permissions")}} オブジェクトを返します。

## 値

{{domxref("Permissions")}} オブジェクトです。

## 例

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showMap();
  } else if (result.state === "prompt") {
    showButtonToEnableMap();
  }
  // パーミッションが拒否された場合は、何もしないでください。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限 API](/ja/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
