---
title: Element.onfullscreenchange
slug: Web/API/Element/fullscreenchange_event
---

元素接口的 **`onfullscreenchange`** 属性是在元素过渡到或过渡到全屏模式时触发的全屏更改事件的事件处理程序。

## 语法

```plain
targetDocument.onfullscreenchange = fullscreenChangeHandler;
```

### 值

当事件处理程序处于 `fullscreenchange` 模式的时候，表明游戏元素被改变了或者是退出了全屏模式

## Example

本示例建立一个`fullscreenchange` 处理程序，`handleFullscreenChange ()`。此函数通过检查 [`event.target`](/zh-CN/docs/Web/API/Event/target) 的值来确定调用它的元素，然后将文档的[`fullscreenElement`](/zh-CN/docs/Web/API/Document/fullscreenElement) 值与元素进行比较，以查看它们是否为同一节点。

这给了我们一个值，即 `isFullscreen`, 我们将其传递到一个名为 `adjustMyControls()` 的函数，我们想象它是一个函数，可以对应用的用户界面进行调整，以便在全屏模式下而不是在窗口。

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  elem.onfullscreenchange = handleFullscreenChange;
  if (!document.fullscreenElement) {
    elem
      .requestFullscreen()
      .then({})
      .catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
        );
      });
  } else {
    document.exitFullscreen();
  }
}

function handleFullscreenChange(event) {
  let elem = event.target;
  let isFullscreen = document.fullscreenElement === elem;

  adjustMyControls(isFullscreen);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- [`fullscreenchange`](/zh-CN/docs/Web/Events/fullscreenchange)
- [`Element.onfullscreenerror`](/zh-CN/docs/Web/API/Element/onfullscreenerror)
- The [`Document`](/zh-CN/docs/Web/API/Document) equivalent: [`onfullscreenchange`](/zh-CN/docs/Web/API/Document/onfullscreenchange).
