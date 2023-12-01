---
title: "Element: transitioncancel イベント"
short-title: transitioncancel
slug: Web/API/Element/transitioncancel_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

**`transitioncancel`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)がキャンセルされたときに発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("transitioncancel", (event) => {});

ontransitioncancel = (event) => {};
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

このコードはトランジションを定義している要素を取得し、`transitioncancel` イベントのリスナーを追加します。

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitioncancel", () => {
  console.log("Transition canceled");
});
```

同じことを、`ontransitioncancel` プロパティを `addEventListener()` の代わりに使用して行った例です。

```js
const transition = document.querySelector(".transition");

transition.ontransitioncancel = () => {
  console.log("Transition canceled");
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

これにいくらかの JavaScript を追加して、[`transitionstart`](/ja/docs/Web/API/Element/transitionstart_event)、[`transitionrun`](/ja/docs/Web/API/Element/transitionrun_event)、`transitioncancel`、[`transitionend`](/ja/docs/Web/API/Element/transitionend_event) の各イベントが発生すると実行されるようにします。この例では、トランジションをキャンセルするには、トランジションが終了する前にトランジション中のボックスに宛てたマウスを外してください。トランジション終了イベントを発生させるには、トランジションが終了するまでトランジションの上にマウスを当てたままにしてください。

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

`transitioncancel` イベントは `transitionrun` イベントが発生した後、`transitionend` イベントが発生する前にトランジションがどちらかの方向に取り消された場合に発行されます。

トランジションの遅延や継続時間がない場合、両方が 0s である場合、または両方とも宣言されていない場合、トランジションは発生せず、トランジションイベントは何も発行されません。

`transitioncancel` イベントが発行された場合、`transitionend` イベントは発行されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitionend_event", "transitionend")}}
