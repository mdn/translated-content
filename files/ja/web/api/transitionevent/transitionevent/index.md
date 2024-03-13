---
title: "TransitionEvent: TransitionEvent() コンストラクター"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSSOM")}}

**`TransitionEvent()`** コンストラクターは新しい {{domxref("TransitionEvent")}} オブジェクトを返します。これはトランジションに関するイベントを表します。

## 構文

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字小文字を区別し、ブラウザーは `transitionrun`, `transitionstart`, `transitionend`, `transitioncancel` のいずれかを設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 {{domxref("Event/Event", "Event()")}} で定義されているプロパティに加えて、以下のプロパティを持つことができます。
    - `propertyName` {{optional_inline}}
      - : 文字列で、トランジションに関連付けられた CSS プロパティの名前を格納します。
        既定値は `""` です。
    - `elapsedTime` {{optional_inline}}
      - : アニメーションが一時停止していた時間を除き、このイベントが発行されたときにアニメーションが実行されている時間を秒単位で表す数値です。
        `"animationstart"` イベントでは、 `elapsedTime` はふつう `0.0` ですが、 [`animation-delay`](/ja/docs/Web/CSS/animation-delay) が負の値である場合は、 `elapsedTime` が `(-1 * delay)` であるイベントが発行されます。
        既定値は `0.0` です。
    - `pseudoElement` {{optional_inline}}
      - : 文字列で、既定値は `"::"` です。アニメーションが実行される[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前が入ります。
        アニメーションが擬似要素ではなく要素で実行されている場合は、空文字列 `""` になります。
        既定値は `""` です。

### 返値

新しい {{domxref("TransitionEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}
