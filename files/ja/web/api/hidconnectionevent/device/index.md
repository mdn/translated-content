---
title: HIDConnectionEvent.device
slug: Web/API/HIDConnectionEvent/device
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDConnectionEvent")}} インターフェイスの読み取り専用プロパティ **`device`** は、この接続イベントに関係する {{domxref("HIDDevice")}} のインスタンスを返します。

## 値

{{domxref("HIDDevice")}} です。

## 例

この例では、`connect` イベントと `disconnect` イベントにイベントリスナーを登録します。そして、コンソールに {{domxref("HIDDevice.productName")}} を出力します。

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID が接続されました : ${device.productName}`);
});

navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID が切断されました : ${device.productName}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
