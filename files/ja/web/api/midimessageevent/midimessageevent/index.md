---
title: "MIDIMessageEvent: MIDIMessageEvent() コンストラクター"
slug: Web/API/MIDIMessageEvent/MIDIMessageEvent
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

**`MIDIMessageEvent()`** コンストラクターは、新しい {{domxref("MIDIMessageEvent")}} オブジェクトを生成します。イベントは {{domxref("MIDIInput")}} が 1 個以上の MIDI メッセージの受信を完了した時に生成されるため、通常このコンストラクターは使用されません。

## 構文

```js-nolint
new MIDIMessageEvent(type)
new MIDIMessageEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは常に `MIDIMessageEvent` に設定します。
- `options` {{optional_inline}}
  - : _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加えて_、以下のプロパティを持ちうるオブジェクトです。
    - `data`
      - : MIDI メッセージのデータバイト列が格納された {{jsxref("Uint8Array")}} のインスタンスです。

### 返値

新しい {{domxref("MIDIMessageEvent")}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
