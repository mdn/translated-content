---
title: "MIDIMessageEvent: data プロパティ"
slug: Web/API/MIDIMessageEvent/data
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIMessageEvent")}} インターフェイスの読み取り専用プロパティ **`data`** は、1 個の MIDI メッセージの MIDI データバイト列を返します。

## 値

{{jsxref("Uint8Array")}} です。

## 例

以下の例では、すべての入力ポートで {{domxref("MIDIInput.midimessage_event", "midimessage")}} イベントを監視します。メッセージを受信したら、`data` の値をコンソールに出力します。

```js
inputs.forEach((input) => {
  input.onmidimessage = (message) => {
    console.log(message.data);
  };
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
