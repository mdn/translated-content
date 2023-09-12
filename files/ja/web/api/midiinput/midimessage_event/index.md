---
title: "MIDIInput: midimessage イベント"
slug: Web/API/MIDIInput/midimessage_event
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web MIDI API")}}{{securecontext_header}}

[Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の `midimessage` イベントは、この {{domxref("MIDIInput")}} に対応する MIDI ポートで 1 個以上の MIDI メッセージの受信が完了した時発火します。受信したメッセージが格納された {{domxref("MIDIMessageEvent")}} のインスタンスがイベントハンドラーに渡されます。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("midimessage", (event) => {});

onmidimessage = (event) => {};
```

## イベント型

{{domxref("MIDIMessageEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MIDIMessageEvent")}}

## イベントプロパティ

_このインターフェイスは {{domxref("Event")}} からもプロパティを継承しています。_

- {{domxref("MIDIMessageEvent.data")}}
  - : 1 個の MIDI メッセージのデータバイト列が格納された {{jsxref("Uint8Array")}} です。構造の詳細については、[MIDI の仕様書](https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message)を参照してください。

## 例

以下の例では、すべての入力ポートで `midimessage` イベントを監視します。メッセージを受信したら、{{domxref("MIDIMessageEvent.data")}} プロパティをコンソールに出力します。

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
