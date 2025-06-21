---
title: "Bluetooth: getDevices() メソッド"
short-title: getDevices()
slug: Web/API/Bluetooth/getDevices
l10n:
  sourceCommit: 502e8c3f0be95c6f42afe6a72113b029b290b9e8
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

**`getDevices()`** は {{DOMxRef("Bluetooth")}} インターフェイスのメソッドで、このオリジンがアクセスを許可されている Bluetooth 機器を含む配列を返します。圏外だったり電源が切られていたりするものを含みます。

## 構文

```js-nolint
getDevices()
```

### 引数

なし。

### 返値

{{DOMxRef("BluetoothDevice")}} の配列で解決する {{JSxRef("Promise")}} を返します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : 現在の文書へのアクセスが[セキュリティへの配慮](/ja/docs/Web/API/Web_Bluetooth_API#セキュリティへの配慮)のため、すなわち[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)の {{HTTPHeader("Permissions-Policy/bluetooth", "bluetooth")}} ディレクティブによってブロックされているときなどに、このコンテキストでこの処理が許可されていない場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
