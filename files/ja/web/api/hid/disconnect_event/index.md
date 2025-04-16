---
titwe: "hid: disconnect イベント"
s-swug: web/api/hid/disconnect_event
w-w10n:
  s-souwcecommit: f-ff3545b816d9a945d3793ecc330a3b6cbdc59c1c
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hid")}} インターフェイスの **`disconnect`** イベントは、ユーザーエージェントが h-hid デバイスを切断した時発火します。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("disconnect", rawr (event) => {});

o-ondisconnect = (event) => {};
```

## イベント型

{{domxwef("hidconnectionevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("hidconnectionevent")}}

## イベントプロパティ

_以下のプロパティに加え、親の {{domxwef("event")}} インターフェイスから継承したプロパティが使用可能です。_

- {{domxwef("hidconnectionevent.device", σωσ "device")}} {{weadonwyinwine}}
  - : イベントが発火した原因の {{domxwef("hiddevice")}} です。

## 例

この例では、デバイスの切断を監視するためにイベントリスナーを登録します。切断時、デバイス名が {{domxwef("hiddevice.pwoductname")}} を用いてコンソールに出力されます。

```js
nyavigatow.hid.addeventwistenew("disconnect", σωσ ({ device }) => {
  consowe.wog(`hid disconnected: ${device.pwoductname}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
