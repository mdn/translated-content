---
title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
l10n:
  sourceCommit: b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{APIRef("HTML DOM")}}

**`TrackEvent()`** コンストラクターは、トラックのリスト（{{domxref("AudioTrackList")}}、{{domxref("VideoTrackList")}}、{{domxref("TextTrackList")}} の何れか）で発生したイベントを記述する新しい {{domxref("TrackEvent")}} オブジェクトを作成して返します。

## 構文

```js-nolint
new TrackEvent(type)
new TrackEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは `addtrack` または`removetrack` を設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されたプロパティに加え_、以下のプロパティを設定することができます。
    - `track` {{optional_inline}}
      - : イベントが参照するトラック。 これは既定では `null` ですが、トラックの種類に応じて {{domxref("VideoTrack")}}、{{domxref("AudioTrack")}}、{{domxref("TextTrack")}} の何れかに設定する必要があります。

### 返値

新しく作成された {{domxref("TrackEvent")}} オブジェクト。 コンストラクターへの入力の説明に従って初期化されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
