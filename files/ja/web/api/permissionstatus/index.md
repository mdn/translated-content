---
title: PermissionStatus
slug: Web/API/PermissionStatus
---

{{APIRef("Permissions API")}}{{SeeCompatTable}}

[Permissions API](/ja/docs/Web/API/Permissions_API) の **`PermissionStatus`** インターフェイスは、オブジェクトの状態と、その状態への変更を監視するためのイベントハンドラを提供します。

## プロパティ

- {{domxref("PermissionStatus.state")}} {{readonlyinline}}
  - : 要求されたパーミッションの状態を返します。 `'granted'`（付与）、`'denied'`（拒否）、`'prompt'`（プロンプト）のいずれかです。
- {{domxref("PermissionStatus.status")}}{{readonlyinline}} {{deprecated_inline()}}
  - : 要求されたパーミッションの状態を返します。 `'granted'`、`'denied'`、`'prompt'` のいずれかです。 仕様の今後のバージョンは、これを {{domxref("PermissionStatus.state")}} に置き換えます。

### イベントハンドラ

- {{domxref("PermissionStatus.onchange")}}
  - : `PermissionStatus.status` が変わるたびに呼び出されるイベント。

## 例

```js
navigator.permissions
  .query({ name: "geolocation" })
  .then(function (permissionStatus) {
    console.log(
      "位置情報のパーミッションの状態は " + permissionStatus.state + " です。",
    );
    permissionStatus.onchange = function () {
      console.log(
        "位置情報のパーミッションの状態が " +
          this.state +
          " に変更されました。",
      );
    };
  });
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PermissionStatus")}}
