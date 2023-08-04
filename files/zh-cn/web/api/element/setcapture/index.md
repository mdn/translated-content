---
title: element.setCapture
slug: Web/API/Element/setCapture
---

{{ ApiRef() }}

### 概要

在处理一个 mousedown 事件过程中调用这个方法来把全部的鼠标事件重新定向到这个元素，直到鼠标按钮被释放或者 {{ domxref("document.releaseCapture()") }} 被调用。

### 语法

```plain
element.setCapture(retargetToElement);
```

- `retargetToElement`
  - : 如果被设置为 `true`, 所有事件被直接定向到这个元素; 如果是 `false`, 事件也可以在这个元素的子元素上触发。

### 示例

在这个例子中，当你在一个元素中点击并且按住鼠标，然后再使用鼠标拖动的时候，当前鼠标位置的坐标就会被绘制出来。

```html
<html>
  <head>
    <title>鼠标捕捉示例</title>
    <style type="text/css">
      #myButton {
        border: solid black 1px;
        color: black;
        padding: 2px;
        -moz-box-shadow: black 2px 2px;
      }
    </style>

    <script type="text/javascript">
      function init() {
        var btn = document.getElementById("myButton");
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
      }

      function mouseDown(e) {
        e.target.setCapture();
        e.target.addEventListener("mousemove", mouseMoved, false);
      }

      function mouseUp(e) {
        e.target.removeEventListener("mousemove", mouseMoved, false);
      }

      function mouseMoved(e) {
        var output = document.getElementById("output");
        output.innerHTML = "鼠标的当前位置：" + e.clientX + ", " + e.clientY;
      }
    </script>
  </head>
  <body onload="init()">
    <p>这是一个关于如何在 Gecko 2.0 中针对元素使用鼠标捕捉的示例。</p>
    <p>
      <a id="myButton" href="javascript:buttonClicked()"
        >点我并且按住鼠标滑动</a
      >
    </p>
    <div id="output">还没有任何事件哦！</div>
  </body>
</html>
```

[查看在线演示](/samples/domref/mousecapture.html)

### 注意

这个元素可能不会完全被滚动到顶部或者底部，这取决于其他元素的布局。

### 规范

无

## 参见

- {{ domxref("document.releaseCapture()") }}
