---
title: "MIDIPort: statechange イベント"
slug: Web/API/MIDIPort/statechange_event
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

{{domxref("MIDIPort")}} インターフェイスの **`statechange`** イベントは、ポートが開いた状態から閉じた状態に、または閉じた状態から開いた状態に変化した時発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## イベント型

{{domxref("MIDIConnectionEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MIDIConnectionEvent")}}

## イベントプロパティ

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : 接続または切断されたポートを表す {{domxref("MIDIPort")}} のインスタンスへの参照を返します。

## 例

以下の例では、変わるたびに現在の {{domxref("MIDIPort.state")}} を記録します。

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
