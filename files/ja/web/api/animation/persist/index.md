---
title: "Animation: persist() メソッド"
short-title: persist()
slug: Web/API/Animation/persist
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}

`persist()` は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の {{domxref("Animation")}} インターフェイスのメソッドで、アニメーションを明示的に維持し、 他のアニメーションに置き換わったときに[自動的に削除](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)されるのを防ぎます。

## 構文

```js-nolint
persist()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `persist()` の使用

この例には、 3 つのボタンがあります。

- "Add persistent animation" と "Add transient animation" はそれぞれ、赤い四角に新しい座標変換アニメーションを追加します。最初のアニメーションは左から右へ、 2 つ目は右から左へ、といった具合に、アニメーションは交互に向きを変えます。"Add persistent animation" は作成したアニメーションに `persist()` を呼び出します。

- 3 つ目のボタン "Cancel an animation" は、最近追加したアニメーションを取り消される可能性があります。

この例では、キャンセルされる可能性のないすべてのアニメーションのリストが、追加された順に、それぞれのアニメーションの `replaceState` とともに表示されます。

#### HTML

```html
<div id="animation-target"></div>
<button id="start-persistent">Add persistent animation</button>
<button id="start-transient">Add transient animation</button>
<button id="cancel">Cancel an animation</button>
<ol id="stack"></ol>
```

```html hidden
<template id="list-item-template">
  <li>
    <span class="replaceState"></span>,
    <span class="description"></span>
  </li>
</template>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transform: translate(100px);
}
```

#### JavaScript

```js
const target = document.getElementById("animation-target");
const persistentButton = document.getElementById("start-persistent");
const transientButton = document.getElementById("start-transient");
const cancelButton = document.getElementById("cancel");
persistentButton.addEventListener("click", () => startAnimation(true));
transientButton.addEventListener("click", () => startAnimation(false));
cancelButton.addEventListener("click", cancelTop);
const stack = [];

let offset = -100;

function startAnimation(persist) {
  offset = -offset;
  const animation = target.animate(
    { transform: `translate(${100 + offset}px)` },
    { duration: 500, fill: "forwards" },
  );
  stack.push(animation);
  if (persist) {
    animation.persist();
  }
  // Add the animation to the displayed stack (implementation not shown)
  show(animation, offset);
}

function cancelTop() {
  stack.pop()?.cancel();
}
```

```js hidden
const stackDisplay = document.getElementById("stack");
const template =
  document.getElementById("list-item-template").content.firstElementChild;
const nodes = new Map();

function show(animation, offset) {
  const direction = offset < 0 ? "left" : "right";
  const li = template.cloneNode(true);
  const description = li.querySelector(".description");
  const replaceState = li.querySelector(".replaceState");
  description.textContent = direction;
  replaceState.textContent = animation.replaceState;
  nodes.set(animation, { li, description, replaceState });
  stackDisplay.append(li);
  animation.addEventListener("cancel", () => {
    nodes.get(animation).li.remove();
    nodes.delete(animation);
  });
  animation.addEventListener("remove", () => {
    nodes.get(animation).replaceState.textContent = animation.replaceState;
  });
}
```

#### 結果

新しい transient アニメーションを追加すると、前回追加した transient アニメーションが置き換わることに注意してください。それらのアニメーションは自動的に除去され、 `replaceState` は `"removed"` となります。しかし、 persistent アニメーションは除去されません。

{{htmlelement("div")}} の位置は最新のアクティブまたは persistent アニメーションによって決定されます。

{{EmbedLiveSample("using_persist","",300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}: ウェブページのアニメーションを制御することができるその他のメソッドやプロパティ
- {{domxref("Animation.replaceState")}}
- {{domxref("Animation.remove_event","remove")}} event
