---
title: HIDDevice.forget()
slug: Web/API/HIDDevice/forget
l10n:
  sourceCommit: f58ce40b926e376c5b7aa061277a8dc6ff7b32da
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの **`forget()`** メソッドは、HID デバイスとの接続を閉じ、デバイスを忘れます。

## 構文

```js-nolint
forget()
```

### 引数

なし。

### 返値

接続が閉じられ、デバイスが忘れられ、許可がリセットされた後 `undefined` で解決する {{jsxref("Promise")}} を返します。

## 例

この例では、Nintendo Switch Joy-Con Right HID デバイスに接続し、1 回点滅させ、切断します。

```js
async function blink() {
  const devices = await navigator.hid.requestDevice({
    filters: [
      {
        vendorId: 0x057e, // Nintendo Co., Ltd
        productId: 0x2007, // Joy-Con Right
      },
    ],
  });
  const device = devices[0];
  await device.open();
  // 消灯させます
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // 点灯させます
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // 最後に、切断します
  await device.forget();
}
blink();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
