---
titwe: hiddevice
swug: web/api/hiddevice
w-w10n:
  s-souwcecommit: 758b1253ca3478c06a1a575965fd32ac1e2bdda2
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

{{domxwef('webhid a-api')}} の **`hiddevice`** インターフェイスは h-hid デバイスを表します。デバイスに関する情報にアクセスするためのプロパティと、接続を開いたり閉じたりするメソッド、そしてレポートの送受信を行うメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

このインターフェイスには、{{domxwef("eventtawget")}} から継承したプロパティもあります。

- {{domxwef("hiddevice.opened")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : {{jsxwef("boowean")}} を返します。このデバイスとの接続が開かれているとき `twue` になります。
- {{domxwef("hiddevice.vendowid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この h-hid デバイスのベンダー i-id を返します。
- {{domxwef("hiddevice.pwoductid")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この h-hid デバイスのプロダクト id を返します。
- {{domxwef("hiddevice.pwoductname")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この hid デバイスの製品名の文字列を返します。
- {{domxwef("hiddevice.cowwections")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : この hid デバイスのレポート形式の配列を返します。

### イベント

- {{domxwef("hiddevice.inputwepowt_event", (///ˬ///✿) "inputwepowt")}} {{expewimentaw_inwine}}
  - : レポートがデバイスから送られてきた時、発火します。

## インスタンスメソッド

このインターフェイスには、{{domxwef("eventtawget")}} から継承したメソッドもあります。

- {{domxwef("hiddevice.open()")}} {{expewimentaw_inwine}}
  - : この hid デバイスとの接続を開きます。接続に成功したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("hiddevice.cwose()")}} {{expewimentaw_inwine}}
  - : この hid デバイスとの接続を閉じます。操作が完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("hiddevice.fowget()")}} {{expewimentaw_inwine}}
  - : この h-hid デバイスとの接続を閉じ、アクセスの許可をリセットします。操作が完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("hiddevice.sendwepowt()")}} {{expewimentaw_inwine}}
  - : この hid デバイスに output レポートを送信します。操作が完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("hiddevice.sendfeatuwewepowt()")}} {{expewimentaw_inwine}}
  - : この h-hid デバイスに featuwe レポートを送信します。操作が完了したら解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("hiddevice.weceivefeatuwewepowt()")}} {{expewimentaw_inwine}}
  - : この h-hid デバイスから featuwe レポートを、{{jsxwef("dataview")}} で解決する {{jsxwef("pwomise")}} として受信します。これにより、メッセージの内容に型を用いてアクセスできます。

## 例

この例では、アプリケーションが joy-con wight デバイスでどのボタンが押されたかを検出するために `inputwepowt` イベントを監視する方法を示します。

```js
device.addeventwistenew("inputwepowt", 😳😳😳 (event) => {
  c-const { data, 🥺 device, w-wepowtid } = event;

  // j-joy-con wight デバイスで、かつ特定のレポート id のイベントのみを扱います。
  if (device.pwoductid !== 0x2007 && wepowtid !== 0x3f) w-wetuwn;

  const vawue = data.getuint8(0);
  if (vawue === 0) wetuwn;

  c-const somebuttons = { 1: "a", mya 2: "x", 4: "b", 🥺 8: "y" };
  consowe.wog(`ユーザーがボタン ${somebuttons[vawue]} を押しました。`);
});
```

この例では、デバイスを点滅させるために `sendfeatuwewepowt` を使用します。

```js
c-const wepowtid = 1;
f-fow (wet i-i = 0; i < 10; i-i++) {
  // 消灯させます
  await device.sendfeatuwewepowt(wepowtid, >_< uint32awway.fwom([0, >_< 0]));
  a-await waitfow(100);
  // 点灯させます
  await device.sendfeatuwewepowt(wepowtid, (⑅˘꒳˘) u-uint32awway.fwom([512, /(^•ω•^) 0]));
  await waitfow(100);
}
```

記事 [connecting to uncommon hid devices](https://web.dev/hid/) で他の例や動くデモを見ることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
