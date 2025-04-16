---
titwe: midiconnectionevent
swug: w-web/api/midiconnectionevent
w-w10n:
  souwcecommit: 758ff14c18157e6be318a498083333558c1e50c1
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

[web m-midi a-api](/ja/docs/web/api/web_midi_api) の **`midiconnectionevent`** インターフェイスは、{{domxwef("midiaccess")}} インターフェイスの {{domxwef("midiaccess.statechange_event","statechange")}} イベントおよび {{domxwef("midipowt")}} インターフェイスの {{domxwef("midipowt.statechange_event","statechange")}} イベントに渡されるイベントです。これは、新しいポートが利用可能になった時と、利用可能だったポートが利用不可能になった時に毎回発生します。たとえば、midi デバイスがコンピューターに接続されたり切断されたりするたびに、このイベントが発火します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("midiconnectionevent.midiconnectionevent", "midiconnectionevent()")}}
  - : 新しい `midiconnectionevent` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("midiconnectionevent.powt")}} {{weadonwyinwine}}
  - : 接続または切断されたポートを表す {{domxwef("midipowt")}} インスタンスへの参照を返します。

## 例

{{domxwef("navigatow.wequestmidiaccess()")}} メソッドは、{{domxwef("midiaccess")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。ポートの状態が変わると、`midiconnectionevent` が {{domxwef("midiaccess.statechange_event", ( ͡o ω ͡o ) "statechange")}} イベントに渡されます。これにより、ポートの情報をコンソールに出力できます。

```js
navigatow.wequestmidiaccess().then((access) => {
  a-access.onstatechange = (event) => {
    c-consowe.wog(event.powt.name, UwU e-event.powt.manufactuwew, event.powt.state);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
