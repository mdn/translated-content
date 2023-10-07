---
title: "AnimationEvent: AnimationEvent() コンストラクター"
short-title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Animations")}}

**`AnimationEvent()`** コンストラクターは、アニメーションに関するイベントを表す新しい {{domxref("AnimationEvent")}} オブジェクトを返します。

## 構文

```js-nolint
new AnimationEvent(type)
new AnimationEvent(type, options)
```

### 引数

- `type`
  - : `AnimationEvent` の型名を表す文字列です。
    大文字と小文字を区別し、ブラウザーでは `animationstart`, `animationend`, `animationiteration` のいずれかに設定されます。
- `options` {{optional_inline}}
  - : オブジェクトで、_{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `animationName` {{optional_inline}}
      - : トランジションに関連付けられた {{cssxref("animation-name")}} の値を含む文字列です。遷移に関連付けられた CSS プロパティの値です。既定値は `""` です。
    - `elapsedTime` {{optional_inline}}
      - : `float` で、このイベントが発行されたときにアニメーションが動作していた時間（アニメーションが一時停止していた時間を除く）を秒単位で与えます。
        `animationstart` イベントの場合、 `elapsedTime` は `0.0` です。ただし、 {{cssxref("animation-delay")}} に負の値を指定した場合は除きます。
        この場合、イベントは `elapsedTime` に `(-1 * delay)` が含まれた状態で発行されます。既定で `0.0` となります。
    - `pseudoElement` {{optional_inline}}
      - : 文字列で、アニメーションを動作させる[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前を含む、 `"::"` で始まる名前です。もしアニメーションが擬似要素上で動作せず、要素そのもの上で動作するる場合は、空文字列 `""` を指定します。 既定では `""` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- アニメーション関連の CSS プロパティとアットルール: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}
- 所属先の {{domxref("AnimationEvent")}} インターフェイス
