---
title: HIDInputReportEvent
slug: Web/API/HIDInputReportEvent
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref('WebHID API')}} の **`HIDInputReportEvent`** インターフェイスは、割り当てられた HID デバイスのいずれかから Input レポートを受信した時、{{domxref("HIDDevice.inputreport_event")}} に渡されます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには、{{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("HIDInputReportEvent.data")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Input レポートから読み取ったデータが入った {{jsxref("DataView")}} です。HID インターフェイスがレポート ID を用いている場合、`reportId` は含まれません。
- {{domxref("HIDInputReportEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この Input レポートを送信した HID インターフェイスを表す {{domxref("HIDDevice")}} のインスタンスです。
- {{domxref("HIDInputReportEvent.reportId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : レポートを識別する 1 バイトの接頭辞、もしくは HID インターフェイスがレポート ID を用いていない場合 0 です。

## インスタンスメソッド

_このインターフェイスは、親の {{domxref("Event")}} からメソッドを継承しています。_

## 例

この例では、アプリケーションが Joy-Con Right デバイスでどのボタンが押されたかを検出するために `inputReport` を監視します。記事 [Connecting to uncommon HID devices](https://web.dev/hid/) で、他の例や動くデモを見ることができます。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
