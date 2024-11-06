---
title: MIDIInput
slug: Web/API/MIDIInput
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

[Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の **`MIDIInput`** インターフェイスは、MIDI 入力ポートからメッセージを受信します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは固有のプロパティを実装していませんが、{{domxref("MIDIPort")}} からプロパティを継承しています。_

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、{{domxref("MIDIPort")}} からメソッドを継承しています。_

### イベント

- {{domxref("MIDIInput.midimessage_event", "midimessage")}}
  - : 現在のポートが MIDI メッセージを受信した時発火します。

## 例

以下の例では、それぞれの `MIDIInput` の名前をコンソールに出力します。そして、すべての入力ポートで `midimessage` イベントを監視します。メッセージを受信したら、{{domxref("MIDIMessageEvent.data")}} プロパティをコンソールに出力します。

```js
inputs.forEach((input) => {
  console.log(input.name); /* MIDIPort から継承したプロパティ */
  input.onmidimessage = (message) => {
    console.log(message.data);
  };
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
