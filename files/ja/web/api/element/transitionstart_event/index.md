---
title: "Element: transitionstart イベント"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

**`transitionstart`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)が実際に始まったとき、すなわち {{cssxref("transition-delay")}} が終了した後に発生します。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("transitionstart", (event) => {});

ontransitionstart = (event) => {};
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

このコードは `transitionstart` イベントのリスナーを追加します。

```js
element.addEventListener("transitionstart", () => {
  console.log("トランジション開始");
});
```

同じことを、`ontransitionstart` プロパティを `addEventListener()` の代わりに使用して行います。

```js
element.ontransitionstart = () => {
  console.log("トランジション開始");
};
```

### ライブ例

次の例では、単純な {{htmlelement("div")}} 要素に遅延を含むトランジションをスタイル設定しています。

```html
<div class="transition">ここにポインターを当ててください</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgba(255, 0, 0, 1);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgba(255, 0, 0, 0);
}
```

これにいくらかの JavaScript を追加して、{{domxref("Element/transitionstart_event", "transitionstart")}} および {{domxref("Element/transitionrun_event", "transitionrun")}} イベントが発生すると実行されるようにします。

```js
const transition = document.querySelector(".transition");
const message = document.querySelector(".message");

transition.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun が発生";
});

transition.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart が発生";
});

transition.addEventListener("transitionend", () => {
  message.textContent = "transitionend が発生";
});
```

{{ EmbedLiveSample('Live example', '100%', '170') }}

違いは次の通りです。

- `transitionrun` は、トランジションが作成されたとき（つまり、遅延が始まるとき）に発生します。
- `transitionstart` は、実際のアニメーションが始まったとき（つまり、遅延が終わったとき）に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
