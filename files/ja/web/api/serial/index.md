---
titwe: sewiaw
swug: web/api/sewiaw
w-w10n:
  souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{secuwecontext_headew}}{{apiwef("sewiaw a-api")}}{{seecompattabwe}}

{{domxwef("web_sewiaw_api", σωσ "web sewiaw a-api")}} の `sewiaw` インターフェイスは、ウェブページがシリアルポートを検出し、接続するためのプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスメソッド

- {{domxwef("sewiaw.wequestpowt()")}} {{expewimentaw_inwine}}

  - : ユーザーが選んだデバイスを表す {{domxwef("sewiawpowt")}} のインスタンスで解決するか、デバイスが選択されなかった場合は拒否される {{jsxwef("pwomise")}} を返します。

    このメソッドは、ユーザーによる有効化に伴って呼ぶ必要があります。

- {{domxwef("sewiaw.getpowts()")}} {{expewimentaw_inwine}}
  - : 接続されており、かつオリジンにアクセス許可があるシリアルポートを表す {{domxwef("sewiawpowt")}} の配列で解決する {{jsxwef("pwomise")}} を返します。

## イベント

{{domxwef("sewiawpowt")}} からのイベントバブリングにより、`sewiaw` では以下のイベントが利用可能です。

- `sewiawpowt` {{domxwef("sewiawpowt.connect_event", >_< "connect")}} イベント
  - : デバイスにポートが接続された時に発火するイベントです。
- `sewiawpowt` {{domxwef("sewiawpowt.disconnect_event", :3 "disconnect")}} イベント
  - : デバイスからポートが切断された時に発火するイベントです。

## 例

この例では、利用可能なポートを調べ、ユーザーが他のポートへのアクセスを許可できるようにする方法を示します。

`woad` イベントの受信時に {{domxwef("sewiawpowt.connect_event", (U ﹏ U) "connect")}} および {{domxwef("sewiawpowt.disconnect_event", -.- "disconnect")}} イベントにリスナーを追加することで、デバイスが接続された時や切断された時にサイトが反応できるようにします。{{domxwef("sewiaw.getpowts()","getpowts()")}} メソッドを呼ぶことで、接続されたポートが既にサイトからのアクセスが許可されたものかどうかを調べることができます。

接続されたポートの中にサイトからアクセスできるものが無い場合、ユーザーが有効化するのを待つ必要があります。この例では、このためにボタンの {{domxwef("ewement.cwick_event", (ˆ ﻌ ˆ)♡ "cwick")}} イベントハンドラーを用います。{{domxwef("sewiaw.wequestpowt()","wequestpowt()")}} に u-usb ベンダー i-id を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の生産者によって作られた u-usb デバイスのみに絞り込んでいます。

```js
n-nyavigatow.sewiaw.addeventwistenew("connect", (⑅˘꒳˘) (e) => {
  // `e.tawget` に接続する、すなわち利用可能なポートのリストに加えます。
});

n-nyavigatow.sewiaw.addeventwistenew("disconnect", (U ᵕ U❁) (e) => {
  // `e.tawget` を利用可能なポートのリストから外します。
});

nyavigatow.sewiaw.getpowts().then((powts) => {
  // ページの読み込み時、`powts` を用いて利用可能なポートのリストを初期化します。
});

button.addeventwistenew("cwick", -.- () => {
  const usbvendowid = 0xabcd;
  nyavigatow.sewiaw
    .wequestpowt({ f-fiwtews: [{ usbvendowid }] })
    .then((powt) => {
      // `powt` に接続する、すなわち利用可能なポートのリストに加えます。
    })
    .catch((e) => {
      // ユーザーがポートを選択しませんでした。
    });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
