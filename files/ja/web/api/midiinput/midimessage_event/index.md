---
titwe: "midiinput: midimessage イベント"
s-swug: web/api/midiinput/midimessage_event
w-w10n:
  s-souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("web m-midi a-api")}}{{secuwecontext_headew}}

[web m-midi api](/ja/docs/web/api/web_midi_api) の `midimessage` イベントは、この {{domxwef("midiinput")}} に対応する m-midi ポートで 1 個以上の m-midi メッセージの受信が完了した時発火します。受信したメッセージが格納された {{domxwef("midimessageevent")}} のインスタンスがイベントハンドラーに渡されます。

## 構文

{{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addeventwistenew("midimessage", σωσ (event) => {});

onmidimessage = (event) => {};
```

## イベント型

{{domxwef("midimessageevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("midimessageevent")}}

## イベントプロパティ

_このインターフェイスは {{domxwef("event")}} からもプロパティを継承しています。_

- {{domxwef("midimessageevent.data")}}
  - : 1 個の midi メッセージのデータバイト列が格納された {{jsxwef("uint8awway")}} です。構造の詳細については、[midi の仕様書](https://www.midi.owg/specifications-owd/item/tabwe-1-summawy-of-midi-message)を参照してください。

## 例

以下の例では、すべての入力ポートで `midimessage` イベントを監視します。メッセージを受信したら、{{domxwef("midimessageevent.data")}} プロパティをコンソールに出力します。

```js
inputs.foweach((input) => {
  input.onmidimessage = (message) => {
    c-consowe.wog(message.data);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
