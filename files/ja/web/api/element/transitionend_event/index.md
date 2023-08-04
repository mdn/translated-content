---
title: "Element: transitionend イベント"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

**`transitionend`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)が完了したときに発生します。トランジションが完了前に削除された場合、例えば {{cssxref("transition-property")}} が削除されたり、 {{cssxref("display")}} が `none` に設定されたりした場合、イベントは生成されません。

`transitionend` イベントは二つの方向で発生します。トランジション終了の状態まで遷移し終わったときと、既定またはトランジションがない状態まで完全に戻ったときです。トランジションに待ち時間や実行時間がない場合、両方が 0 秒またはどちらも宣言されていなかった場合、トランジションは発生せず、トランジションイベントは発生しません。 `transitioncancel` イベントが発生すると、 `transitionend` イベントは発生しません。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("transitionend", (event) => {});

ontransitionend = (event) => {};
```

## イベント型

{{domxref("TransitionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("TransitionEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : 文字列で、このトランジションに関連付けられた CSS プロパティの名前が入ります。
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : float` で、このイベントが発行されたときにトランジションが実行されていた時間を秒単位で表します。この値は {{cssxref("transition-delay")}} プロパティの影響を受けません。
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : 文字列で、アニメーションが実行する[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前が入ります。トランジションが擬似要素上で実行されず、要素上で実行される場合は空文字列 (`''`) です。

## 例

このコードはトランジションを定義している要素を取得し、`transitionend` イベントのリスナーを追加します。

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

同じことを、`ontransitionend` を使用して行う例です。

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### ライブ例

次の例では、単純な {{htmlelement("div")}} 要素に遅延を含むトランジションをスタイル設定しています。

```html
<div class="transition"></div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 2s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255, 0, 0, 0);
}
```

これにいくらかの JavaScript を追加して、[`transitionstart`](/ja/docs/Web/API/Element/transitionstart_event)、[`transitionrun`](/ja/docs/Web/API/Element/transitionrun_event)、[`transitioncancel`](/ja/docs/Web/API/Element/transitioncancel_event)、`transitionend` の各イベントが発生すると実行されるようにします。この例では、トランジションをキャンセルするには、トランジションが終了する前にトランジション中のボックスに宛てたマウスを外してください。トランジション終了イベントを発生させるには、トランジションが終了するまでトランジションの上にマウスを当てたままにしてください。

```js
const message = document.querySelector(".message");
const el = document.querySelector(".transition");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun が発生";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart が発生";
});

el.addEventListener("transitioncancel", () => {
  message.textContent = "transitioncancel が発生";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend が発生";
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

`transitionend` イベントは両方向に発生します。ボックスの回転が完了し、不透明度が方向に応じて 0 または 1 になったときです。

トランジションの遅延や継続時間がない場合、両方が 0s である場合、または両方とも宣言されていない場合、トランジションは発生せず、トランジションイベントは何も発行されません。

`transitioncancel` イベントが発行された場合、`transitionend` イベントは発行されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
