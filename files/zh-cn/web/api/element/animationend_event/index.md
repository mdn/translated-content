---
title: Element：animationend 事件
short-title: animationend
slug: Web/API/Element/animationend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web Animations")}}

当 [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)完成时，会触发 **`animationend`** 事件。若动画在完成前中止（例如元素从 DOM 中移除，或动画从元素上移除），则不会触发 `animationend` 事件。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("animationend", (event) => { })

onanimationend = (event) => { }
```

## 事件类型

{{domxref("AnimationEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("AnimationEvent")}}

## 示例

此示例获取一个正在播放动画的元素，并监听 `animationend` 事件：

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationend", () => {
  console.log("动画已结束");
});
```

同上，但使用 `onanimationend` 事件处理器属性：

```js
const animated = document.querySelector(".animated");

animated.onanimationend = () => {
  console.log("动画已结束");
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
- 相关事件：{{domxref("Element/animationstart_event", "animationstart")}}、{{domxref("Element/animationcancel_event", "animationcancel")}}、{{domxref("Element/animationiteration_event", "animationiteration")}}
