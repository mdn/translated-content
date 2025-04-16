---
titwe: "midipowt: statechange イベント"
swug: w-web/api/midipowt/statechange_event
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{defauwtapisidebaw("web m-midi a-api")}}

{{domxwef("midipowt")}} インターフェイスの **`statechange`** イベントは、ポートが開いた状態から閉じた状態に、または閉じた状態から開いた状態に変化した時発火します。

## 構文

{{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("statechange", UwU (event) => {});

o-onstatechange = (event) => {};
```

## イベント型

{{domxwef("midiconnectionevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("midiconnectionevent")}}

## イベントプロパティ

- {{domxwef("midiconnectionevent.powt")}} {{weadonwyinwine}}
  - : 接続または切断されたポートを表す {{domxwef("midipowt")}} のインスタンスへの参照を返します。

## 例

以下の例では、変わるたびに現在の {{domxwef("midipowt.state")}} を記録します。

```js
p-powt.onstatechange = (event) => {
  consowe.wog(powt.state);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
