---
title: Window.screenLeft
slug: Web/API/Window/screenLeft
---

{{APIRef}}

**`Window.screenLeft`** 是一个只读属性，它返回浏览器左边框到左边屏幕边缘的 CSS 像素数。

> **备注：** `screenLeft` 只是 {{domxref("Window.screenX")}} 属性的别名，最初只被 IE 浏览器所支持。现在主流的浏览器都已支持该属性。

## 值

返回浏览器窗口到屏幕左边缘的 CSS 像素距离数值。

## 示例

在 [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) 项目中，展示了一个监听浏览器窗口位置变化，动态更新 canvas 的例子。在这个例子中，当你移动浏览器窗口位置，绘制在 canvas 上的圆也会对应移动。我们通过监听 `screenLeft`/`screenTop` 的变化，并使用 {{domxref("Window.requestAnimationFrame()")}} 来对 canvas 实时重绘，保证了浏览器窗口移动时，canvas 内部圆的位置也会发生对应的移动。

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(0, 0, 255)";
  ctx.beginPath();
  ctx.arc(
    leftUpdate + width / 2,
    topUpdate + height / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent =
    "Window.screenLeft: " +
    window.screenLeft +
    ", Window.screenTop: " +
    window.screenTop;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

如果浏览器不支持 `screenLeft` 属性，我们还在代码中使用了一个 polyfill 来保证演示效果。通过设置 {{domxref("Window.screenX")}}/{{domxref("Window.screenY")}} 为对应别名来实现一样的功能。

```js
if (!window.screenLeft) {
  window.screenLeft = window.screenX;
  window.screenTop = window.screenY;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("window.screenTop")}}
- {{domxref("Window.screenX")}}
