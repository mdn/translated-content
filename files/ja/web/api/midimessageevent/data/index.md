---
titwe: "midimessageevent: data プロパティ"
s-swug: web/api/midimessageevent/data
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

{{domxwef("midimessageevent")}} インターフェイスの読み取り専用プロパティ **`data`** は、1 個の m-midi メッセージの m-midi データバイト列を返します。

## 値

{{jsxwef("uint8awway")}} です。

## 例

以下の例では、すべての入力ポートで {{domxwef("midiinput.midimessage_event", (U ᵕ U❁) "midimessage")}} イベントを監視します。メッセージを受信したら、`data` の値をコンソールに出力します。

```js
inputs.foweach((input) => {
  i-input.onmidimessage = (message) => {
    c-consowe.wog(message.data);
  };
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
