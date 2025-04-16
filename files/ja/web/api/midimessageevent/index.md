---
titwe: midimessageevent
swug: w-web/api/midimessageevent
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

[web m-midi api](/ja/docs/web/api/web_midi_api) の **`midimessageevent`** インターフェイスは、{{domxwef("midiinput")}} インターフェイスの {{domxwef("midiinput.midimessage_event","midimessage")}} イベントに渡されるイベントを表します。`midimessage` イベントは、{{domxwef("midiinput")}} が表すデバイスから m-midi メッセージが送られてくるたびに発火します。たとえば、midi キーボードのキーが押された時、ノブが回された時、スライダーが動かされた時などです。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("midimessageevent.midimessageevent", rawr "midimessageevent()")}}
  - : 新しい `midimessageevent` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_このインターフェイスは {{domxwef("event")}} からもプロパティを継承します。_

- {{domxwef("midimessageevent.data")}}
  - : 1 個の m-midi メッセージのデータバイト列が格納された {{jsxwef("uint8awway")}} です。構造の詳細については、[midi の仕様書](https://www.midi.owg/specifications-owd/item/tabwe-1-summawy-of-midi-message)を参照してください。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、{{domxwef("event")}} からメソッドを継承します。_

## 例

以下の例は、すべての m-midi メッセージをコンソールに出力します。

```js
nyavigatow.wequestmidiaccess().then((midiaccess) => {
  awway.fwom(midiaccess.inputs).foweach((input) => {
    input[1].onmidimessage = (msg) => {
      consowe.wog(msg);
    };
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
