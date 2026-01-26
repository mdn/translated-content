---
title: "Element: animationcancel イベント"
short-title: animationcancel
slug: Web/API/Element/animationcancel_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

**`animationcancel`** イベントは、 [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)が予期せず中断されたときに発生します。言い換えれば、 {{domxref("Element/animationend_event", "animationend")}} イベントを送出せずに実行が停止するときはいつでもです。これは {{cssxref("animation-name")}} が変更されてアニメーションが削除されたり、動いているノードが CSS を使用して非表示にされた場合などに起こることがあります。したがって、直接または原因として、その包含ノードのいずれかが隠されています。

このイベントのイベントハンドラーは `onanimationcancel` プロパティを設定するか、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用することにより追加することができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("animationcancel", (event) => { })

onanimationcancel = (event) => { }
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
  - : `'::'` で始まる文字列で、アニメーションを実行する[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)の名前を指定します。です。アニメーションが擬似要素上で動作しておらず、要素上で動作している場合は、空文字列 `''` となります。

## 例

このコードは現在アニメーション中の要素を取得し、`animationcancel` イベントのリスナーを追加します。その後、要素の {{cssxref("display")}} プロパティを `none` に設定します。これにより `animationcancel` イベントが起動されます。

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationcancel", () => {
  console.log("アニメーションが取り消されました");
});

animated.style.display = "none";
```

同様に、 `onanimationcancel` プロパティを `addEventListener()` の代わりに使用するとこうなります。

```js
const animated = document.querySelector(".animated");
animated.onanimationcancel = () => {
  console.log("アニメーションが取り消されました");
};

animated.style.display = "none";
```

### ライブ例

#### HTML

```html-nolint
<div class="animation-example">
  <div class="container">
    <p class="animation">あなたは私たちの惑星を訪れるのに、寒い夜を選びました。</p>
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
  animation-name: slide-in;
  animation-iteration-count: 2;
}

@keyframes slide-in {
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
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション開始' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション反復: ${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーション終了'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "アニメーションを有効化";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'アニメーションキャンセル'`;
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
    ? "アニメーションをキャンセル"
    : "アニメーションを有効化";
});
```

#### 結果

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)
- [CSS アニメーションの使用](/ja/docs/Web/CSS/Guides/Animations/Using)
- {{domxref("AnimationEvent")}}
- 関連イベント: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationend_event", "animationend")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
