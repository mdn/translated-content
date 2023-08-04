---
title: "Element: transitionrun イベント"
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

**`transitionrun`** イベントは、 [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)が最初に生成されたとき、すなわち {{cssxref("transition-delay")}} が始まる前に発生します。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("transitionrun", (event) => {});

ontransitionrun = (event) => {};
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

このコードは `transitionrun` イベントのリスナーを追加します。

```js
el.addEventListener("transitionrun", () => {
  console.log(
    "トランジションは実行中ですが、まだトランジションは始まっていません。",
  );
});
```

同じことを、`ontransitionrun` プロパティを `addEventListener()` の代わりに使用して行います。

```js
el.ontransitionrun = () => {
  console.log(
    "トランジションの実行が開始され、トランジションの遅延時間が経過した時点でトランジションを開始します。",
  );
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
const el = document.querySelector(".transition");
const message = document.querySelector(".message");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun が発生";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart が発生";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend が発生";
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

違いは次の通りです。

- `transitionrun` は、トランジションが作成されたとき（つまり、遅延が始まるとき）に発生します。
- `transitionstart` は、実際のアニメーションが始まったとき（つまり、遅延が終わったとき）に発生します。

`transitionrun` は、トランジションが遅延時間内にキャンセルされた場合でも発生します。トランジションの遅延がない場合や、transition-delay が負の場合は、`transitionrun` と `transitionstart` の両方が発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("TransitionEvent")}} インターフェイス
- CSS プロパティ: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- 関連イベント: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
