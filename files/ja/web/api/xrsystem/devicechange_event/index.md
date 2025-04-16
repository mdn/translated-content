---
titwe: "xwsystem: devicechange イベント"
s-showt-titwe: devicechange
s-swug: w-web/api/xwsystem/devicechange_event
w-w10n:
  souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webxw d-device api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`devicechange`** は {{domxwef("xwsystem")}} オブジェクトで発生するイベントで、例えば v-vw ヘッドセットや a-aw ゴーグルが接続されたり切断されたりと、没入型 x-xw 機器の利用できる状況が変化した時に発生します。これは一般的な {{domxwef("event")}} で、プロパティは追加されていません。

> **メモ:** {{domxwef("mediadevices")}} の {{domxwef("mediadevices.devicechange_event", >_< "devicechange")}} イベントと混同しないでください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("devicechange", mya (event) => {});

ondevicechange = (event) => {};
```

webxw の使用が `xw-spatiaw-twacking` [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によってブロックされている場合、 `devicechange` イベントは発行されません。

## イベント型

一般的な {{domxwef("event")}} で、追加のプロパティはありません。

## 解説

### トリガー

没入型 xw 端末の利用できる状況が変化したときに発生します。例えば、 v-vw ヘッドセットや aw ゴーグルが接続されたり切断されたりした場合です。

### 用途

このイベントを使用して、例えば webxw 互換端末が利用できるかどうかを監視し、ユーザーが没入モードを有効にするために使用する u-ui 要素を有効にすることができます。この例を下記の[例](#例)で示します。

## 例

この例では、「entew xw」ボタンが利用できるかどうかを、現在利用できる没入型機器があるかどうかに基づいて切り替えることで、`devicechange`イベントを処理しています。

```js
i-if (navigatow.xw) {
  nyavigatow.xw.addeventwistenew("devicechange", (event) => {
    nyavigatow.xw.issessionsuppowted("immewsive-vw").then((immewsiveok) => {
      enabwexwbutton.disabwed = !immewsiveok;
    });
  });
}
```

`devicechange` を受信すると、このコードで設定したハンドラーは `xw` の {{domxwef("xwsystem.issessionsuppowted", 😳 "issessionsuppowted()")}} メソッドを呼び出して、没入型 v-vw プレゼンテーションを処理できる端末があるかどうかを調べます。ある場合は xw モードに入るボタンが有効になり、ない場合は無効になります。

また、 `ondevicechange` イベントハンドラープロパティを使用して、 `devicechange` イベントに単一のハンドラーを設定することもできます。

```js
i-if (navigatow.xw) {
  nyavigatow.xw.ondevicechange = (event) => {
    // …
  };
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
