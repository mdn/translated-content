---
title: element.oncut
slug: Web/API/HTMLElement/cut_event
---

{{ ApiRef() }}

### 概述

**oncut**属性用来获取或设置当前元素的`cut`事件的事件处理函数。

### 语法

```plain
element.oncut = functionRef;
```

_functionRef_ 是一个函数名或者函数表达式。

### 例子

```plain
<html>
<head>
<title>oncut 示例演示</title>

<script>
  function log(txt)
  {
    document.getElementById("log").appendChild(document.createTextNode(txt + "\n"));
  }
</script>
</head>

<body>
<h3>按说明进行操作！</h3>
<textarea rows="3" cols="80" oncopy="log('复制成功！');" oncut="log('剪切被阻止！'); return false;">
  尝试剪切和复制该文本域内的文本！
</textarea>
<h3>Log</h3>
<textarea rows="15" cols="80" id="log" readonly="true"></textarea>
</body>
</html>
```

上例演示了如何允许复制一个文本域内的文本，但禁止剪切那些文本。并把每次操作结果打印出来。

### 备注

当用户尝试剪切选中元素或文本时会触发`cut`事件。

### 规范

不属于任何公开的规范。

### 相关链接

- [`oncopy`](/zh-CN/DOM/element.oncopy)
- [`onpaste`](/zh-CN/DOM/element.onpaste)
