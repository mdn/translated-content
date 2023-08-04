---
title: 元素：animationend 事件
slug: Web/API/Element/animationend_event
---

{{APIRef}}

**`animationend`**（**动画结束**）事件在 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations)完成时触发。如果在动画完成前中止了动画，例如将元素从 DOM 中移除，或将动画从元素上移除，`animationend` 事件不会触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("animationend", (event) => {});

onanimationend = (event) => {};
```

## 事件类型

{{domxref("AnimationEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("AnimationEvent")}}

## 事件属性

_也从其父接口 {{domxref("Event")}} 继承属性_。

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : 一个字符串，包含了生成动画的 {{cssxref("animation-name")}} 的值。
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : 一个浮点数（`float`），表示动画运行的时间（以秒为单位）。此事件的这个属性并不包括动画暂停的时间。对于 `animationstart` 事件，`elapsedTime` 的值为 `0.0`（除非将 {{cssxref("animation-delay")}} 设置成了一个负值，在这种情况下，`elapsedTime` 为 `(-1 * delay)`）。
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : 一个字符串，以 `'::'` 开头，包含了动画运行时所在的[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)的名称。如果动画不是在伪元素而是在元素上运行，则为空字符串：`''`。

## 示例

该实例获取一个正在绘制动画的元素，并监听 `animationend` 事件。

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
});
```

同上，但使用 `onanimationend` 事件处理器属性：

```js
const animated = document.querySelector(".animated");

animated.onanimationend = () => {
  console.log("Animation ended");
};
```

### 运行实例

#### HTML

```html
<div class="animation-example">
  <div class="container">
    <p class="animation">你选择了一个寒冷的夜晚到访我们的星球。</p>
  </div>
  <button class="activate" type="button">激活动画</button>
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
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
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
  animationEventLog.textContent = `${animationEventLog.textContent}'动画开始' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'动画迭代轮次：${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'动画结束'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "激活动画";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'动画已被取消'`;
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active ? "取消动画" : "激活动画";
});
```

#### 结果

{{ EmbedLiveSample('运行实例', '100%', '150px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations)
- [使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- 相关事件：{{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
- 以 {{domxref("Document")}} 为目标的此事件：{{domxref("Document/animationend_event", "animationend")}}
- 以 {{domxref("Window")}} 为目标的此事件：{{domxref("Window/animationend_event", "animationend")}}
