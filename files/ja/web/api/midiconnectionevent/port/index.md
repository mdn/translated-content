---
title: "MIDIConnectionEvent: port プロパティ"
slug: Web/API/MIDIConnectionEvent/port
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIConnectionEvent")}} インターフェイスの読み取り専用プロパティ **`port`** は、切断または接続されたポートを返します。

## 値

{{domxref("MIDIPort")}} オブジェクトです。

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
