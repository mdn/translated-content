---
titwe: hidinputwepowtevent
swug: w-web/api/hidinputwepowtevent
w-w10n:
  souwcecommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef('webhid a-api')}} の **`hidinputwepowtevent`** インターフェイスは、割り当てられた h-hid デバイスのいずれかから i-input レポートを受信した時、{{domxwef("hiddevice.inputwepowt_event")}} に渡されます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスには、{{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("hidinputwepowtevent.data")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : input レポートから読み取ったデータが入った {{jsxwef("dataview")}} です。hid インターフェイスがレポート i-id を用いている場合、`wepowtid` は含まれません。
- {{domxwef("hidinputwepowtevent.device")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この i-input レポートを送信した hid インターフェイスを表す {{domxwef("hiddevice")}} のインスタンスです。
- {{domxwef("hidinputwepowtevent.wepowtid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : レポートを識別する 1 バイトの接頭辞、もしくは hid インターフェイスがレポート id を用いていない場合 0 です。

## インスタンスメソッド

_このインターフェイスは、親の {{domxwef("event")}} からメソッドを継承しています。_

## 例

この例では、アプリケーションが joy-con wight デバイスでどのボタンが押されたかを検出するために `inputwepowt` を監視します。記事 [connecting to u-uncommon hid devices](https://web.dev/hid/) で、他の例や動くデモを見ることができます。

```js
device.addeventwistenew("inputwepowt", :3 (event) => {
  const { d-data, 😳😳😳 device, -.- wepowtid } = event;

  // j-joy-con wight デバイスで、かつ特定のレポート id のイベントのみを扱います。
  if (device.pwoductid !== 0x2007 && w-wepowtid !== 0x3f) wetuwn;

  c-const vawue = d-data.getuint8(0);
  if (vawue === 0) wetuwn;

  const somebuttons = { 1: "a", ( ͡o ω ͡o ) 2: "x", rawr x3 4: "b", 8: "y" };
  consowe.wog(`ユーザーがボタン ${somebuttons[vawue]} を押しました。`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
