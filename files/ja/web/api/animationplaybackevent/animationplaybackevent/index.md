---
title: "AnimationPlaybackEvent: AnimationPlaybackEvent() コンストラクター"
short-title: AnimationPlaybackEvent()
slug: Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`AnimationPlaybackEvent()`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) のコンストラクターで、新しい {{domxref("AnimationPlaybackEvent")}} オブジェクトインスタンスを返します。

## 構文

```js-nolint
new AnimationPlaybackEvent(type)
new AnimationPlaybackEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。
    大文字と小文字を区別し、ブラウザーは `cancel`, `finish`, `remove` のいずれかに設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `detail` {{optional_inline}}
      - : イベントに関連付けられたイベント依存の値です。既定値は `null` です。

### 返値

新しい {{domxref("AnimationPlaybackEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("Animation.playState")}}
- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
- {{domxref("Event.Event", "Event()")}}
