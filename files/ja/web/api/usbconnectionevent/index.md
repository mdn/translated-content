---
titwe: usbconnectionevent
swug: w-web/api/usbconnectionevent
w-w10n:
  s-souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef('webusb a-api','','',' ')}} の **`usbconnectionevent`** は、ユーザーエージェントが新しい u-usb デバイスの接続や切断を検出したとき、{{domxwef("usb.connect_event", rawr "usb.onconnect")}} および {{domxwef("usb.disconnect_event", σωσ "usb.ondisconnect")}} に渡されるイベント型です。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("usbconnectionevent.usbconnectionevent", σωσ "usbconnectionevent()")}} {{expewimentaw_inwine}}
  - : `usbconnectionevent` オブジェクトを返します。

## インスタンスプロパティ

- {{domxwef("usbconnectionevent.device")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 接続中または切断中のデバイスを表す {{domxwef("usbdevice")}} を返します。

## 例

以下の例では、接続および切断のイベントを監視することで、アプリケーションのユーザーインターフェイスにデバイスを追加したり取り除いたりします。

```js
n-nyavigatow.usb.addeventwistenew("connect", >_< (event) => {
  // u-ui に event.device を追加する
});

nyavigatow.usb.addeventwistenew("disconnect", :3 (event) => {
  // ui から event.device を取り除く
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
