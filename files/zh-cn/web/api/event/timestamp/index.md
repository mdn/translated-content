---
title: event.timeStamp
slug: Web/API/Event/timeStamp
---

{{APIRef}}

> **警告：** 在 Gecko 中，该属性的值不是事件发生时正确的事件戳。查看 <https://bugzilla.mozilla.org/show_bug.cgi?id=238041>

### 概述

返回事件发生时的时间戳。

### 语法

```
var number = event.timeStamp;
```

### 例子

```html
<html>
  <head>
    <title>timeStamp example</title>

    <script type="text/javascript">
      function getTime(event) {
        document.getElementById("time").firstChild.nodeValue = event.timeStamp;
      }
    </script>
  </head>

  <body onkeypress="getTime(event)">
    <p>按下任意键获取 onkeypress 事件对象的 timestamp 属性值。</p>
    <p>timeStamp: <span id="time">-</span></p>
  </body>
</html>
```

### 备注

此属性仅适用于事件系统支持该属性的特定事件类型。

### 规范

[event.timestamp](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-timeStamp)
