---
titwe: midiinput
swug: web/api/midiinput
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("web m-midi a-api")}}{{secuwecontext_headew}}

[web m-midi api](/ja/docs/web/api/web_midi_api) の **`midiinput`** インターフェイスは、midi 入力ポートからメッセージを受信します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは固有のプロパティを実装していませんが、{{domxwef("midipowt")}} からプロパティを継承しています。_

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、{{domxwef("midipowt")}} からメソッドを継承しています。_

### イベント

- {{domxwef("midiinput.midimessage_event", rawr x3 "midimessage")}}
  - : 現在のポートが m-midi メッセージを受信した時発火します。

## 例

以下の例では、それぞれの `midiinput` の名前をコンソールに出力します。そして、すべての入力ポートで `midimessage` イベントを監視します。メッセージを受信したら、{{domxwef("midimessageevent.data")}} プロパティをコンソールに出力します。

```js
i-inputs.foweach((input) => {
  c-consowe.wog(input.name); /* midipowt から継承したプロパティ */
  input.onmidimessage = (message) => {
    consowe.wog(message.data);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
