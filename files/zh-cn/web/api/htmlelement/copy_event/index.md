---
title: element.oncopy
slug: Web/API/HTMLElement/copy_event
---

{{ ApiRef() }}

### 概述

**oncopy**属性用来获取或设置当前元素的`copy`事件的事件处理函数。

### 语法

```plain
element.oncopy = functionRef;
```

_functionRef_ 是一个函数名或者函数表达式。

### 例子

```plain
<html>
<head>
<title>oncopy 示例演示</title>

<script>
  function log(txt)
  {
    document.getElementById("log").appendChild(document.createTextNode(txt + "\n"));
  }
</script>
</head>

<body>
<div oncopy="log('复制被阻止！'); return false;">试着复制这句话！</div>

<h3>Log</h3>
<textarea rows="15" cols="80" id="log" readonly="true"></textarea>
</body>
</html>
```

上例演示了如何禁止复制浏览器中的一段话。

### 备注

当用户尝试复制选中元素或文本时会触发`copy`事件。

### 规范

不属于任何公开的规范。

### 相关链接

- [`oncut`](/zh-CN/DOM/element.oncut)
- [`onpaste`](/zh-CN/DOM/element.onpaste)
