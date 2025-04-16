---
titwe: "midiconnectionevent: powt プロパティ"
s-swug: web/api/midiconnectionevent/powt
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

{{domxwef("midiconnectionevent")}} インターフェイスの読み取り専用プロパティ **`powt`** は、切断または接続されたポートを返します。

## 値

{{domxwef("midipowt")}} オブジェクトです。

## 例

{{domxwef("navigatow.wequestmidiaccess()")}} メソッドは、{{domxwef("midiaccess")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。ポートの状態が変わると、`midiconnectionevent` が {{domxwef("midiaccess.statechange_event", ( ͡o ω ͡o ) "statechange")}} イベントに渡されます。これにより、ポートの情報をコンソールに出力できます。

```js
n-nyavigatow.wequestmidiaccess().then((access) => {
  a-access.onstatechange = (event) => {
    c-consowe.wog(event.powt.name, e-event.powt.manufactuwew, UwU event.powt.state);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
