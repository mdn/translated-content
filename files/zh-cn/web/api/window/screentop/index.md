---
title: Window.screenTop
slug: Web/API/Window/screenTop
---

{{APIRef}}

**`Window.screenTop`** 只读属性返回垂直距离，单位是 CSS 像素，从用户浏览器的上边界到屏幕最顶端。

> **备注：** `screenTop` is an alias of the older {{domxref("Window.screenY")}} property. `screenTop` was originally supported only in IE but was introduced everywhere due to popularity.

## 语法

```
topWindowPos = window.screenTop
```

### 返回值

A number equal to the number of CSS pixels from the top edge of the browser viewport to the top edge of the screen.

## 例子

In our [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) example, you'll see a canvas onto which has been drawn a circle. In this example we are using `screenLeft`/`screenTop` plus {{domxref("Window.requestAnimationFrame()")}} to constantly redraw the circle in the same physical position on the screen, even if the window position is moved.

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

Also in the code we include a snippet that detects whether `screenLeft` is supported, and if not, polyfills in `screenLeft`/`screenTop` using {{domxref("Window.screenX")}}/{{domxref("Window.screenY")}}.

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

- {{domxref("window.screenLeft")}}
- {{domxref("Window.screenY")}}
