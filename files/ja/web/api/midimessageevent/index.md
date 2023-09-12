---
title: MIDIMessageEvent
slug: Web/API/MIDIMessageEvent
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

[Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の **`MIDIMessageEvent`** インターフェイスは、{{domxref("MIDIInput")}} インターフェイスの {{domxref("MIDIInput.midimessage_event","midimessage")}} イベントに渡されるイベントを表します。`midimessage` イベントは、{{domxref("MIDIInput")}} が表すデバイスから MIDI メッセージが送られてくるたびに発火します。たとえば、MIDI キーボードのキーが押された時、ノブが回された時、スライダーが動かされた時などです。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MIDIMessageEvent.MIDIMessageEvent", "MIDIMessageEvent()")}}
  - : 新しい `MIDIMessageEvent` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_このインターフェイスは {{domxref("Event")}} からもプロパティを継承します。_

- {{domxref("MIDIMessageEvent.data")}}
  - : 1 個の MIDI メッセージのデータバイト列が格納された {{jsxref("Uint8Array")}} です。構造の詳細については、[MIDI の仕様書](https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message)を参照してください。

## インスタンスメソッド

_このインターフェイスは固有のメソッドを実装していませんが、{{domxref("Event")}} からメソッドを継承します。_

## 例

以下の例は、すべての MIDI メッセージをコンソールに出力します。

```js
navigator.requestMIDIAccess().then((midiAccess) => {
  Array.from(midiAccess.inputs).forEach((input) => {
    input[1].onmidimessage = (msg) => {
      console.log(msg);
    };
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
