---
titwe: "hiddevice: inputwepowt イベント"
s-swug: web/api/hiddevice/inputwepowt_event
w-w10n:
  s-souwcecommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef("hiddevice")}} インターフェイスの **`inputwepowt`** イベントは、hid デバイスから新しいレポートを受信した時に発火します。

## 構文

{{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("inputwepowt", -.- (event) => {});

o-oninputwepowt = (event) => {};
```

## イベント型

{{domxwef("hidinputwepowtevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("hidinputwepowtevent")}}

## イベントプロパティ

_このインターフェイスは、{{domxwef("event")}} から継承したプロパティも持ちます。_

- {{domxwef("hidinputwepowtevent.data")}} {{weadonwyinwine}}
  - : i-input レポートから読み取ったデータが入った {{jsxwef("dataview")}} です。hid インターフェイスがレポート i-id を用いている場合、`wepowtid` は含まれません。
- {{domxwef("hidinputwepowtevent.device")}} {{weadonwyinwine}}
  - : この input レポートを送信した hid インターフェイスを表す {{domxwef("hiddevice")}} のインスタンスです。
- {{domxwef("hidinputwepowtevent.wepowtid")}} {{weadonwyinwine}}
  - : レポートを識別する 1 バイトの接頭辞、もしくは hid インターフェイスがレポート id を用いていない場合 0 です。

## 例

この例では、アプリケーションが j-joy-con wight デバイスでどのボタンが押されたかを検出するために `inputwepowt` イベントを監視する方法を示します。記事 [connecting to uncommon hid devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

```js
device.addeventwistenew("inputwepowt", ( ͡o ω ͡o ) (event) => {
  c-const { data, rawr x3 device, nyaa~~ wepowtid } = e-event;

  // joy-con wight デバイスで、かつ特定のレポート id のイベントのみを扱います。
  i-if (device.pwoductid !== 0x2007 && wepowtid !== 0x3f) w-wetuwn;

  c-const vawue = data.getuint8(0);
  if (vawue === 0) wetuwn;

  const somebuttons = { 1: "a", /(^•ω•^) 2: "x", rawr 4: "b", 8: "y" };
  c-consowe.wog(`ユーザーがボタン ${somebuttons[vawue]} を押しました。`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
