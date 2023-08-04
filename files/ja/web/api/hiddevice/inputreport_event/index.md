---
title: "HIDDevice: inputreport イベント"
slug: Web/API/HIDDevice/inputreport_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの **`inputreport`** イベントは、HID デバイスから新しいレポートを受信した時に発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('inputreport', (event) => { });

oninputreport = (event) => { };
```

## イベント型

{{domxref("HIDInputReportEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("HIDInputReportEvent")}}

## イベントプロパティ

_このインターフェイスは、{{domxref("Event")}} から継承したプロパティも持ちます。_

- {{domxref("HIDInputReportEvent.data")}} {{ReadOnlyInline}}
  - : Input レポートから読み取ったデータが入った {{jsxref("DataView")}} です。HID インターフェイスがレポート ID を用いている場合、`reportId` は含まれません。
- {{domxref("HIDInputReportEvent.device")}} {{ReadOnlyInline}}
  - : この Input レポートを送信した HID インターフェイスを表す {{domxref("HIDDevice")}} のインスタンスです。
- {{domxref("HIDInputReportEvent.reportId")}} {{ReadOnlyInline}}
  - : レポートを識別する 1 バイトの接頭辞、もしくは HID インターフェイスがレポート ID を用いていない場合 0 です。

## 例

この例では、アプリケーションが Joy-Con Right デバイスでどのボタンが押されたかを検出するために `inputReport` イベントを監視する方法を示します。記事 [Connecting to uncommon HID devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

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
