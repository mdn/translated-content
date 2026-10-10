---
title: Element：animationstart 事件
short-title: animationstart
slug: Web/API/Element/animationstart_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web Animations")}}

**`animationstart`** 事件在 [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)开始时触发。若设置了 {{cssxref("animation-delay")}}，则此事件会在延迟期满后触发。负延迟会使此事件触发时的 {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} 等于该延迟的绝对值（相应地，动画会从序列中的该时间点开始播放）。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("animationstart", (event) => { })

onanimationstart = (event) => { }
```

## 事件类型

{{domxref("AnimationEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("AnimationEvent")}}

## 示例

此示例监听 `animationstart` 事件，并在其触发时记录一条消息：

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationstart", () => {
  console.log("动画已开始");
});
```

同上，但使用 `onanimationstart`：

```js
const animated = document.querySelector(".animated");

animated.onanimationstart = () => {
  console.log("动画已开始");
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
  animationEventLog.textContent = `${animationEventLog.textContent}'动画已开始' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'动画迭代次数：${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'动画已结束'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "激活动画";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'动画已取消'`;
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

{{EmbedLiveSample('运行实例', '100%', '150px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)
- [使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)
- {{domxref("AnimationEvent")}}
- 相关事件：{{domxref("Element/animationend_event", "animationend")}}、{{domxref("Element/animationiteration_event", "animationiteration")}}、{{domxref("Element/animationcancel_event", "animationcancel")}}
