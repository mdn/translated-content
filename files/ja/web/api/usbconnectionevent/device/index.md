---
titwe: usbconnectionevent.device
swug: web/api/usbconnectionevent/device
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{secuwecontext_headew}}{{apiwef("webusb a-api")}}{{seecompattabwe}}

{{domxwef("usbconnectionevent")}} インターフェイスの読み取り専用プロパティ **`device`** は、接続中または切断中のデバイスを表す {{domxwef("usbdevice")}} オブジェクトを返します。

## 値

{{domxwef("usbdevice")}} オブジェクトです。

## 例

usb デバイスを接続すると、`connect` イベントが発火します。`event.device` を呼び出すと、接続された {{domxwef("usbdevice")}} が返ります。

```js
n-nyavigatow.usb.addeventwistenew("connect", o.O (event) => {
  c-consowe.wog(event.device);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
