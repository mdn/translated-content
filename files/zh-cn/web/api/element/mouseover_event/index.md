---
title: GlobalEventHandlers.onmouseover
slug: Web/API/Element/mouseover_event
---

{{ ApiRef("HTML DOM") }}

### 概述

**onmouseover**属性用来获取或设置当前元素的 mouseover 事件的事件处理函数。

### 语法

```plain
element.onmouseover = event handling code
```

### 例子

```html
<!doctype html>
<html>
<head>
<title>onmouseover/onmouseout event example</title>
<script type="text/javascript">
    function initElement()
    {
        var p = document.getElementById("foo");

        p.onmouseover = showMouseOver;
        p.onmouseout = showMouseOut;
    };

    function showMouseOver()
    {
        var notice = document.getElementById("notice");
        notice.innerHTML = '检测到鼠标移进';
    }

    function showMouseOut()
    {
        var notice = document.getElementById("notice");
        notice.innerHTML = '检测到鼠标移出';
    }


</script>
<style type="text/css">
    #foo {
    border: solid blue 2px;
    }
</style>
</head>
<body onload="initElement()";>
    <span id="foo">移动鼠标，在该元素上移进移出</span>
    <div id="notice"></div>
</body>
</html>
```

### 备注

当鼠标移动到一个元素上时，会在这个元素上触发 mouseover 事件。

### 规范

DOM Level 0 不属于任何规范。
