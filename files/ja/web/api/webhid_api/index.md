---
title: WebHID API
slug: Web/API/WebHID_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{DefaultAPISidebar("WebHID API")}}{{SeeCompatTable}}

ヒューマンインターフェイスデバイス (HID) はデバイスの一種で、人間から入力を受け取ったり、人間に出力を提示したりするものです。また、インストールの手続きを単純にするために設計された、ホストとデバイスの間の双方向のコミュニケーションのための標準である HID プロトコルのことも指します。HID プロトコルはもともと USB デバイス用に開発されましたが、その後 Bluetooth などの他の多くのプロトコルの上に実装されました。

## インターフェイス

- {{domxref("HID")}}
  - : HID デバイスへの接続およびアタッチした HID デバイスのリストアップを行うメソッドと、HID デバイスの接続を扱うイベントハンドラーを提供します。
- {{domxref("HIDDevice")}}
  - : HID デバイスを表します。1 個の物理デバイスが複数の `HIDDevice` オブジェクトで表されることもあります。
- {{domxref("HIDInputReportEvent")}}
  - : 割り当てられた HID デバイスのいずれかから Input レポートを受信した時、{{domxref("HIDDevice.inputreport_event")}} に渡されます。
- {{domxref("HIDConnectionEvent")}}
  - : デバイスが接続されたり切断されたりした時、{{domxref("HID.connect_event", "HID.onconnect")}} や {{domxref("HID.disconnect_event", "HID.ondisconnect")}} に渡されます。

## 例

{{domxref("HID.requestDevice","requestDevice()")}} メソッドを用いてデバイスに接続できます。この場合、利用可能な全てのデバイスの中から選択することになります。

```js
const device = await navigator.hid.requestDevice({ filters: [] });
// デバイスを選択するためのリストと「接続」「キャンセル」のボタンがある「... が HID デバイスへの接続を要求しています」というタイトルのポップアップが現れます。
// 1個選択し、「接続」ボタンをクリックしてください。すると、選択されたデバイスが入った配列が device に格納されます。
```

これまでにこのウェブサイトによるアクセスが許可された全てのデバイスを取得し、デバイス名をコンソールに出力できます。

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productName}`);
});
```

任意の HID デバイスの切断に反応するイベントリスナーを登録できます。

```js
navigator.hid.addEventListener("disconnect", (event) => {
  console.log(`HID disconnected: ${event.device.productName}`);
  console.dir(event);
});
// 例えば、キーボードが切断される時、コンソールに以下のログが記録されるでしょう。
// HID disconnected: USB Keyboard
// {
//    bubbles: false
//    cancelBubble: false
//    cancelable: false
//    composed: false
//    currentTarget: HID {onconnect: null, ondisconnect: null}
//    defaultPrevented: false
//    device: HIDDevice {oninputreport: null, opened: false, vendorId: 6700, productId: 11555, productName: "USB Keyboard", …}
//    eventPhase: 0
//    isTrusted: true
//    path: []
//    returnValue: true
//    srcElement: HID {onconnect: null, ondisconnect: null}
//    target: HID {onconnect: null, ondisconnect: null}
//    timeStamp: 18176.600000023842
//    type: "disconnect"
// }

// 上記のイベントは HIDConnectionEvent インターフェイスのインスタンスです。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
