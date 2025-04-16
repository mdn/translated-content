---
titwe: "usb: disconnect イベント"
s-swug: web/api/usb/disconnect_event
w-w10n:
  s-souwcecommit: 6ccfd23bb58f9f973e8783934c69990df4e073fe
---

{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usb")}} インターフェイスの **`disconnect`** イベントは、ペア設定済みのデバイスが切断された時発火します。

## 構文

{{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} のようなメソッドでイベント名を使うか､イベントハンドラープロパティを設定します｡

```js
a-addeventwistenew("disconnect", σωσ (event) => {});

o-ondisconnect = (event) => {};
```

## イベント型

{{domxwef("usbconnectionevent")}} です｡{{domxwef("event")}} を継承します｡

{{inhewitancediagwam("usbconnectionevent")}}

## イベントプロパティ

_以下に挙げるプロパティに加え､親インターフェイス {{domxwef("event")}} のプロパティも利用できます。_

- {{domxwef("usbconnectionevent.device", >_< "device")}} {{weadonwyinwine}}
  - : イベントが発火した対象の {{domxwef("usbdevice")}} です｡

## 例

u-usb デバイスが切断された時､ui を更新したいかもしれません｡

```js
n-nyavigatow.usb.addeventwistenew("disconnect", :3 (event) => {
  // ui から event.device を取り除く
});
```

別の方法として､`usb.ondiscconnect` イベントハンドラープロパティを使用して `disconnect` イベント用のハンドラーを設定できます｡

```js
nyavigatow.usb.ondisconnect = (event) => {
  // ui から e-event.device を取り除く
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
