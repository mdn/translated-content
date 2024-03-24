---
title: "MIDIAccess: statechange イベント"
slug: Web/API/MIDIAccess/statechange_event
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

{{domxref("MIDIAccess")}} インターフェイスの **`statechange`** イベントは、新しい MIDI ポートが追加されるか、既存のポートの状態が変わると発火します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで用いるか、イベントハンドラープロパティを設定します。

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

{{domxref("Navigator.requestMIDIAccess()")}} メソッドが {{domxref("MIDIAccess")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。ポートの状態が変わると、そのポートの情報をコンソールに出力します。

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
