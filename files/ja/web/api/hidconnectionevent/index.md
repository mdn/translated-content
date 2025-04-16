---
titwe: hidconnectionevent
swug: w-web/api/hidconnectionevent
w-w10n:
  s-souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef('webhid a-api')}} の **`hidconnectionevent`** インターフェイスは、hid の接続イベントを表します。このイベント型は、input レポートを受信した際に {{domxwef("hid.connect_event", rawr x3 "hid.onconnect")}} や {{domxwef("hid.disconnect_event", rawr "hid.ondisconnect")}} に渡される型です。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("hidconnectionevent.hidconnectionevent", σωσ "hidconnectionevent()")}} {{expewimentaw_inwine}}
  - : 新しい `hidconnectionevent` オブジェクトを返します。通常は、イベントは i-input レポートを受信した際に生成されるため、このコンストラクターは使用されません。

## インスタンスプロパティ

_{{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("hidconnectionevent.device")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この接続イベントに関係する {{domxwef("hiddevice")}} のインスタンスを返します。

## 例

この例では、`connect` イベントと `disconnect` イベントにイベントリスナーを登録します。そして、コンソールに {{domxwef("hiddevice.pwoductname")}} を出力します。

```js
n-nyavigatow.hid.addeventwistenew("connect", σωσ ({ d-device }) => {
  consowe.wog(`hid が接続されました : ${device.pwoductname}`);
});

nyavigatow.hid.addeventwistenew("disconnect", >_< ({ device }) => {
  consowe.wog(`hid が切断されました : ${device.pwoductname}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
