---
title: "Element：scrollend 事件"
short-title: scrollend
slug: Web/API/Element/scrollend_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM View API")}}

**`scrollend`** 事件在元素滚动完成时触发。
当滚动位置不再有挂起的更新、且用户已完成其手势操作时，即视为滚动完成。

滚动位置的更新包括平滑或即时的鼠标滚轮滚动、键盘滚动、scroll-snap 事件，或其他会导致滚动位置更新的 API 和手势。
触摸平移或触控板滚动等用户手势，在指针或按键释放之前不会被视为完成。
如果滚动位置没有发生变化，则不会触发 scrollend 事件。

如需检测 Document 内部的滚动何时完成，请参见 `Document` 的 {{domxref("Document/scrollend_event", "scrollend")}} 事件。

## 语法

在 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

### 在事件监听器中使用 `scrollend`

下面的示例展示了如何使用 `scrollend` 事件来检测用户何时停止了滚动：

```css hidden
#scroll-box {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#scroll-box-title {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#large-element {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
```

```html
<div id="scroll-box">
  <p id="scroll-box-title">Scroll me!</p>
  <p id="large-element"></p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "scroll event fired, waiting for scrollend...";
});

element.addEventListener("scrollend", (event) => {
  output.textContent = "scrollend event fired!";
});
```

{{EmbedLiveSample("在事件监听器中使用_scrollend", "100%", 130)}}

### 使用 `onscrollend` 事件处理器属性

下面的示例展示了如何使用 `onscrollend` 事件处理器属性来检测用户何时停止了滚动：

```css hidden
#scroll-box {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#scroll-box-title {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#large-element {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
```

```html
<div id="scroll-box">
  <p id="scroll-box-title">Scroll me!</p>
  <p id="large-element"></p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.textContent = "Element scroll event fired, waiting for scrollend...";
};

element.onscrollend = (event) => {
  output.textContent = "Element scrollend event fired!";
};
```

{{EmbedLiveSample("使用_onscrollend_事件处理器属性", "100%", 130)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Element `scroll` 事件](/zh-CN/docs/Web/API/Element/scroll_event)
- [Document `scrollend` 事件](/en-US/docs/Web/API/Document/scrollend_event)
- [Document `scroll` 事件](/zh-CN/docs/Web/API/Document/scroll_event)
