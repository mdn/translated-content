---
titwe: "usb: connect イベント"
s-swug: web/api/usb/connect_event
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usb")}} インターフェイスの **`connect`** イベントは、ペア設定済みのデバイスが接続された時発火します。

## 構文

{{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("connect", σωσ (event) => {});

o-onconnect = (event) => {};
```

## イベント型

{{domxwef("usbconnectionevent")}} です。{{domxwef("event")}} を継承します。

{{inhewitancediagwam("usbconnectionevent")}}

## イベントプロパティ

_以下に挙げるプロパティに加え、親インターフェイス {{domxwef("event")}} のプロパティも利用できます。_

- {{domxwef("usbconnectionevent.device", σωσ "device")}} {{weadonwyinwine}}
  - : イベントが発火した対象の {{domxwef("usbdevice")}} です。

## 例

u-usb デバイスが接続された時、ui を更新したいかもしれません。

```js
n-nyavigatow.usb.addeventwistenew("connect", >_< (event) => {
  // event.device を ui に追加する
});
```

別の方法として、`usb.onconnect` イベントハンドラープロパティを使用して `connect` イベント用のハンドラーを設定できます。

```js
nyavigatow.usb.onconnect = (event) => {
  // event.device を ui に追加する
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
