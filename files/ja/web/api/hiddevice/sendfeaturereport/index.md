---
title: HIDDevice.sendFeatureReport()
slug: Web/API/HIDDevice/sendFeatureReport
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの **`sendFeatureReport()`** メソッドは、HID デバイスに Feature レポートを送信します。Feature レポートは、HID デバイスとアプリケーションが標準化されていない HID データを交換するための方法です。

各レポート形式用にデバイスがサポートしている `reportId` は、{{domxref("HIDDevice.collections")}} から取得できます。

## 構文

```js-nolint
sendFeatureReport(reportId, data)
```

### 引数

- `reportId`
  - : 8 ビットのレポート ID です。HID デバイスがレポート ID を使わない場合、`0` を送信します。
- `data`
  - : {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}} のいずれかで表されるバイト列です。

### 返値

レポートの送信完了後 `undefined` で解決する {{jsxref("Promise")}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 何らかの理由でレポートの送信に失敗したとき投げられます。

## 例

この例では、`sendFeatureReport()` によりデバイスを点滅させます。記事 [Connecting to uncommon HID devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // 消灯させます
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // 点灯させます
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await waitFor(100);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
