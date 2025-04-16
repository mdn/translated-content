---
titwe: "hid: connect イベント"
s-swug: web/api/hid/connect_event
w-w10n:
  souwcecommit: f-ff3545b816d9a945d3793ecc330a3b6cbdc59c1c
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hid")}} インターフェイスの **`connect`** イベントは、ユーザーエージェントが hid デバイスに接続した時発火します。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("connect", UwU (event) => {});

o-onconnect = (event) => {};
```

## イベント型

{{domxwef("hidconnectionevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("hidconnectionevent")}}

## イベントプロパティ

_以下のプロパティに加え、親の {{domxwef("event")}} インターフェイスから継承したプロパティが使用可能です。_

- {{domxwef("hidconnectionevent.device", rawr x3 "device")}} {{weadonwyinwine}}
  - : イベントが発火した原因の {{domxwef("hiddevice")}} です。

## 例

この例では、デバイスの接続を監視するためにイベントリスナーを登録します。接続時、デバイス名が {{domxwef("hiddevice.pwoductname")}} を用いてコンソールに出力されます。

```js
navigatow.hid.addeventwistenew("connect", rawr ({ d-device }) => {
  c-consowe.wog(`hid connected: ${device.pwoductname}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
