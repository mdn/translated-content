---
title: "MIDIConnectionEvent: MIDIConnectionEvent() コンストラクター"
slug: Web/API/MIDIConnectionEvent/MIDIConnectionEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

**`MIDIConnectionEvent()`** コンストラクターは、新しい {{domxref("MIDIConnectionEvent")}} オブジェクトを生成します。イベントは新しいポートが利用可能になった時に生成され、オブジェクトが {{domxref("MIDIAccess.statechange_event", "statechange")}} イベントに渡されるので、通常このコンストラクターは使用されません。

## 構文

```js-nolint
new MIDIConnectionEvent(type)
new MIDIConnectionEvent(type, midiConnectionEventInit)
```

### 引数

- `type`
  - : `"connect"` または `"disconnect"` のいずれかの文字列です。
- `midiConnectionEventInit` {{optional_inline}}
  - : 以下のフィールドを含む辞書です。
    - `port`
      - : 接続または切断されたポートを表す {{domxref("MIDIPort")}} のインスタンスです。
    - `bubbles` {{optional_inline}}
      - : イベントがバブリングするかを表す論理値です。デフォルトは `false` です。
    - `cancelable` {{optional_inline}}
      - : イベントがキャンセル可能かを表す論理値です。デフォルトは `false` です。
    - `composed` {{optional_inline}}
      - : イベントがシャドールートより外側のリスナーで発火するかを表す論理値です。(詳細は {{domxref("Event.composed")}} を参照してください) デフォルトは `false` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
