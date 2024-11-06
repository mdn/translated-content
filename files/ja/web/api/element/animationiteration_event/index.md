---
title: "Element: animationiteration イベント"
short-title: animationiteration
slug: Web/API/Element/animationiteration_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

**`animationiteration`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)の反復が 1 回分終了し、次の回が始まったときに発生します。このイベントは {{domxref("Element/animationend_event", "animationend")}} イベントと同時には発生せず、従って `animation-iteration-count` が 1 のアニメーションでは発生しません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("animationiteration", (event) => {});

onanimationiteration = (event) => {};
```

## イベント型

{{domxref("AnimationEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("AnimationEvent")}}

## イベントプロパティ

_親である {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : アニメーションを生成した {{cssxref("animation-name")}} の値を含む文字列です。
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : `float` で、このイベントが発行されたときにアニメーションが実行されていた時間（アニメーションが一時停止していた時間を除く）を秒単位で指定します。 `animationstart` イベントの場合、 `elapsedTime` は `0.0` です。ただし、{{cssxref("animation-delay")}} に負の値を指定した場合は、 `(-1 * delay)` を含む `elapsedTime` としてイベントが発行されます。
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : `'::'` で始まる文字列で、アニメーションを実行する[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)の名前を指定します。です。アニメーションが擬似要素上で動作しておらず、要素上で動作している場合は、空文字列 `''` となります。

## 例

このコードは `animationiteration` を使用して、アニメーションの反復が終了した回数を追跡します。

```js
const animated = document.querySelector(".animated");

let iterationCount = 0;

animated.addEventListener("animationiteration", () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
});
```

同様に、 `onanimationiteration` イベントハンドラープロパティを使用するとこうなります。

```js
const animated = document.querySelector(".animated");

let iterationCount = 0;

animated.onanimationiteration = () => {
  iterationCount++;
  console.log(`アニメーション反復回数: ${iterationCount}`);
};
```

### ライブ例

#### HTML

```html
<div class="animation-example">
  <div class="container">
    <p class="animation">You chose a cold night to visit our planet.</p>
  </div>
  <button class="activate" type="button">アニメーションを有効化</button>
  <div class="event-log"></div>
</div>
```

#### CSS

```css
.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    transform: translateX(100%) scaleX(3);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
```

#### JavaScript

```js
const animation = document.querySelector("p.animation");
const animationEventLog = document.querySelector(
  ".animation-example>.event-log",
);
const applyAnimation = document.querySelector(
  ".animation-example>button.activate",
);
let iterationCount = 0;

animation.addEventListener("animationstart", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "Activate animation";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
    ? "Cancel animation"
    : "Activate animation";
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationend_event", "animationend")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/animationiteration_event", "animationiteration")}}
- {{domxref("Window")}} を対象としたこのイベント: {{domxref("Window/animationiteration_event", "animationiteration")}}
