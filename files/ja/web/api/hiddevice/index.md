---
title: HIDDevice
slug: Web/API/HIDDevice
l10n:
  sourceCommit: 758b1253ca3478c06a1a575965fd32ac1e2bdda2
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref('WebHID API')}} の **`HIDDevice`** インターフェイスは HID デバイスを表します。デバイスに関する情報にアクセスするためのプロパティと、接続を開いたり閉じたりするメソッド、そしてレポートの送受信を行うメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

このインターフェイスには、{{domxref("EventTarget")}} から継承したプロパティもあります。

- {{domxref("HIDDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{jsxref("boolean")}} を返します。このデバイスとの接続が開かれているとき `true` になります。
- {{domxref("HIDDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この HID デバイスのベンダー ID を返します。
- {{domxref("HIDDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この HID デバイスのプロダクト ID を返します。
- {{domxref("HIDDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この HID デバイスの製品名の文字列を返します。
- {{domxref("HIDDevice.collections")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この HID デバイスのレポート形式の配列を返します。

### イベント

- {{domxref("HIDDevice.inputreport_event", "inputreport")}} {{Experimental_Inline}}
  - : レポートがデバイスから送られてきた時、発火します。

## インスタンスメソッド

このインターフェイスには、{{domxref("EventTarget")}} から継承したメソッドもあります。

- {{domxref("HIDDevice.open()")}} {{Experimental_Inline}}
  - : この HID デバイスとの接続を開きます。接続に成功したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("HIDDevice.close()")}} {{Experimental_Inline}}
  - : この HID デバイスとの接続を閉じます。操作が完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("HIDDevice.forget()")}} {{Experimental_Inline}}
  - : この HID デバイスとの接続を閉じ、アクセスの許可をリセットします。操作が完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("HIDDevice.sendReport()")}} {{Experimental_Inline}}
  - : この HID デバイスに Output レポートを送信します。操作が完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("HIDDevice.sendFeatureReport()")}} {{Experimental_Inline}}
  - : この HID デバイスに Feature レポートを送信します。操作が完了したら解決する {{jsxref("Promise")}} を返します。
- {{domxref("HIDDevice.receiveFeatureReport()")}} {{Experimental_Inline}}
  - : この HID デバイスから Feature レポートを、{{jsxref("DataView")}} で解決する {{jsxref("Promise")}} として受信します。これにより、メッセージの内容に型を用いてアクセスできます。

## 例

この例では、アプリケーションが Joy-Con Right デバイスでどのボタンが押されたかを検出するために `inputReport` イベントを監視する方法を示します。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;

  // Joy-Con Right デバイスで、かつ特定のレポート ID のイベントのみを扱います。
  if (device.productId !== 0x2007 && reportId !== 0x3f) return;

  const value = data.getUint8(0);
  if (value === 0) return;

  const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
  console.log(`ユーザーがボタン ${someButtons[value]} を押しました。`);
});
```

この例では、デバイスを点滅させるために `sendFeatureReport` を使用します。

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

記事 [Connecting to uncommon HID devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
