---
title: Element：setCapture() 方法
slug: Web/API/Element/setCapture
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{Deprecated_Header}}{{non-standard_header}}{{ APIRef("DOM") }}

在处理 mousedown 事件的期间调用此方法以将所有的鼠标事件的目标都设置为该元素，直到释放鼠标按钮或者调用 {{domxref("document.releaseCapture()")}}。

> [!WARNING]
> 这个接口从未得到过很好的跨浏览器支持，你也许应使用 {{domxref("element.setPointerCapture")}}（来自指针事件 API）代替。

## 语法

```js-nolint
setCapture(retargetToElement)
```

### 参数

- `retargetToElement`
  - : 如果为 `true`，所有事件的目标都会被设置为这个元素；如果为 `false`，则事件也可以在这个元素的子元素上触发。

### 返回值

无（{{jsxref("undefined")}}）。

### 示例

在此示例中，当你在点中一个元素并且按住鼠标，然后再移动鼠标的时候，会显示鼠标的当前位置。

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>鼠标捕获示例</title>
    <style>
      #myButton {
        border: solid black 1px;
        color: black;
        padding: 2px;
        box-shadow: black 2px 2px;
      }
    </style>

    <script>
      function init() {
        const btn = document.getElementById("myButton");
        if (btn.setCapture) {
          btn.addEventListener("mousedown", mouseDown, false);
          btn.addEventListener("mouseup", mouseUp, false);
        } else {
          document.getElementById("output").textContent =
            "抱歉，当前浏览器似乎不支持 setCapture";
        }
      }

      function mouseDown(e) {
        e.target.setCapture();
        e.target.addEventListener("mousemove", mouseMoved, false);
      }

      function mouseUp(e) {
        e.target.removeEventListener("mousemove", mouseMoved, false);
      }

      function mouseMoved(e) {
        const output = document.getElementById("output");
        output.textContent = `位置：${e.clientX}, ${e.clientY}`;
      }
    </script>
  </head>
  <body onload="init()">
    <p>这是一个关于如何在 Gecko 2.0 中针对元素使用鼠标捕捉的示例。</p>
    <p><a id="myButton" href="#">在这里测试</a></p>
    <div id="output">还没有任何事件</div>
  </body>
</html>
```

[查看在线演示](https://mdn.dev/archives/media/samples/domref/mousecapture.html)

## 备注

这个元素可能无法被完全滚动到顶部或底部，这取决于其他元素的布局。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.releaseCapture()")}}
- {{domxref("element.setPointerCapture")}}
