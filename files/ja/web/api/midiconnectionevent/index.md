---
title: MIDIConnectionEvent
slug: Web/API/MIDIConnectionEvent
l10n:
  sourceCommit: 758ff14c18157e6be318a498083333558c1e50c1
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

[Web MIDI API](/ja/docs/Web/API/Web_MIDI_API) の **`MIDIConnectionEvent`** インターフェイスは、{{domxref("MIDIAccess")}} インターフェイスの {{domxref("MIDIAccess.statechange_event","statechange")}} イベントおよび {{domxref("MIDIPort")}} インターフェイスの {{domxref("MIDIPort.statechange_event","statechange")}} イベントに渡されるイベントです。これは、新しいポートが利用可能になった時と、利用可能だったポートが利用不可能になった時に毎回発生します。たとえば、MIDI デバイスがコンピューターに接続されたり切断されたりするたびに、このイベントが発火します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MIDIConnectionEvent.MIDIConnectionEvent", "MIDIConnectionEvent()")}}
  - : 新しい `MIDIConnectionEvent` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : 接続または切断されたポートを表す {{domxref("MIDIPort")}} インスタンスへの参照を返します。

## 例

{{domxref("Navigator.requestMIDIAccess()")}} メソッドは、{{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。ポートの状態が変わると、`MIDIConnectionEvent` が {{domxref("MIDIAccess.statechange_event", "statechange")}} イベントに渡されます。これにより、ポートの情報をコンソールに出力できます。

```js
navigator.requestMIDIAccess().then((access) => {
  access.onstatechange = (event) => {
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
