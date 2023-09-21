---
title: "Navigator: permissions プロパティ"
short-title: permissions
slug: Web/API/Navigator/permissions
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

**`Navigator.permissions`** は読み取り専用プロパティで、[権限 API](/ja/docs/Web/API/Permissions_API) の対象となる API のパーミッションの状態を照会および更新するために使用できる {{domxref("Permissions")}} オブジェクトを返します。

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

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [権限 API](/ja/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
