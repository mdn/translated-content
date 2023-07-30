---
title: GlobalEventHandlers.onanimationcancel
slug: Web/API/Element/animationcancel_event
---

{{APIRef("CSS3 Animations")}}

animationcancel 是一个事件处理操作，这个事件在[CSS Animation](/zh-CN/docs/Web/CSS/CSS_animations)属性意外中断时派发出来 (换句话说，任何时候 animation 停止运行不会发出一个 animationend 事件，比如，当 animation-name 改变以后，animation 就会被移除，或者动画节点隐藏—当前元素或者任何包含的节点隐藏)—使用 css 时。

## 语法

```
var animCancelHandler = target.onanimationcancel;

target.onanimationcancel = {{jsxref("Function")}}
```

## 示例

### HTML

```html
<div class="main">
  <div id="box">
    <div id="text" onanimationcancel="handleCancelEvent">Box</div>
  </div>
</div>

<div class="button" id="toggleBox">Hide the Box</div>

<pre id="log"></pre>
```

### CSS

```css hidden
:root {
  --boxwidth: 50px;
}

.main {
  width: 300px;
  height: 300px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 0;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

#text {
  width: 46px;
  padding: 10px;
  position: relative;
  text-align: center;
  align-self: center;
  color: white;
  font:
    bold 1.4em "Lucida Grande",
    "Open Sans",
    sans-serif;
}
```

Leaving out some bits of the CSS that don't matter for the discussion here, let's take a look at the styles for the box that we're animating. First is the box itself, with all its properties, including {{cssxref("animation")}}, defined. We go ahead and describe the animation in-place here because the animation is intended to begin as soon as the page loads, rather than based on an event.

```css
#box {
  width: var(--boxwidth);
  height: var(--boxwidth);
  left: 0;
  top: 0;
  border: 1px solid #7788ff;
  margin: 0;
  position: relative;
  background-color: #2233ff;
  display: flex;
  justify-content: center;
  animation: 5s ease-in-out 0s infinite alternate both slideBox;
}
```

The animation's keyframes are described next, plotting a course from the top-left corner of the content box to the bottom-right corner.

```css
@keyframes slideBox {
  from {
    left: 0;
    top: 0;
  }
  to {
    left: calc(100% - var(--boxwidth));
    top: calc(100% - var(--boxwidth));
  }
}
```

Since the animation is described as taking place an infinite number of times, alternating direction each time, the box will glide back and forth between the two corners until stopped or the page is closed.

### JavaScript

Before we get to the animation code, we define a function which logs information to a box on the user's screen. We'll use this to show information about the events we receive. Note the use of {{domxref("AnimationEvent.animationName")}} and {{domxref("AnimationEvent.elapsedTime")}} to get information about the event which occurred.

```js
function log(msg, event) {
  let logBox = document.getElementById("log");

  logBox.innerHTML += msg;

  if (event) {
    logBox.innerHTML +=
      " <code>" +
      event.animationName +
      "</code> at time " +
      event.elapsedTime.toFixed(2) +
      " seconds.";
  }

  logBox.innerHTML += "\n";
}
```

Then we set up the `handleCancelEvent()` function, which is called in response to the `animationcancel` event, as set up in the HTML above. All we do here is log information to the console, but you might find other use cases, such as starting a new animation or effect, or terminating some dependent operation.

```js
function handleCancelEvent(event) {
  log("Animation canceled", event);
}
```

Then we add a method to handle toggle {{cssxref("display")}} between `"flex"` and `"none"` and establish it as the handler for a [`click`](/zh-CN/docs/Web/API/Element/click_event) event on the "Hide/Show" the Box button:

```js
function toggleBox() {
  if (box.style.display == "none") {
    box.style.display = "flex";
    document.getElementById("toggleBox").innerHTML = "Hide the box";
  } else {
    box.style.display = "none";
    document.getElementById("toggleBox").innerHTML = "Show the box";
  }
}
```

Toggling the box to `display: none` has the effect of aborting its animation. In browsers that support `animationcancel`, the event is fired and this handler is called.

> **备注：** At this time, no major browser supports `animationcancel`.

### 结果

Assembled together, you get this:

{{ EmbedLiveSample('示例', 500, 400) }}

If your browser supports `animationcancel`, hiding the box using the button will cause a message to be displayed about the event.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("AnimationEvent")}}
