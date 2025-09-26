---
title: HIDDevice.sendReport()
slug: Web/API/HIDDevice/sendReport
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの **`sendReport()`** メソッドは、Output レポートを HID デバイスに送信します。

各レポート形式用にデバイスがサポートしている `reportId` は、{{domxref("HIDDevice.collections")}} から取得できます。

## 構文

```js-nolint
sendReport(reportId, data)
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

この例は、Output レポートを用いて Joy-Con デバイスを鳴らす方法を示します。記事 [Connecting to uncommon HID devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

```js
// まず、振動を有効化するコマンドを送信します。
// 魔法のバイト列の出典は https://github.com/mzyy94/joycon-toolweb です。
const enableVibrationData = [1, 0, 1, 64, 64, 0, 1, 64, 64, 0x48, 0x01];
await device.sendReport(0x01, new Uint8Array(enableVibrationData));

// 次に、Joy-Con デバイスを鳴らすコマンドを送信します。
// 実際のバイト列はサンプル中にあります。
const rumbleData = [
  /* … */
];
await device.sendReport(0x10, new Uint8Array(rumbleData));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
