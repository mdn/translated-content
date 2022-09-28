---
title: element.onpaste
slug: Web/API/HTMLElement/paste_event
---

{{ ApiRef() }}

### 概述

**onpaste** 属性用来获取或设置当前元素的`paste`事件的事件处理函数。

### 语法

```plain
element.onpaste = functionRef;
```

_functionRef_ 是一个函数名或者函数表达式。

### 例子

```plain
<html>
<head>
<title>onpaste 示例演示</title>
</head>

<body>
<h3>按说明进行操作！</h3>
<textarea id="editor" rows="3" cols="80">
尝试在这里粘贴文本！
</textarea>

<script type="text/javascript">
  function log(txt)
  {
    document.getElementById("log").appendChild(document.createTextNode(txt + "\n"));
  }

  function pasteIntercept(evt)
  {
    evt.preventDefault();
    log("粘贴被阻止");
  }

  document.getElementById("editor").addEventListener("paste", pasteIntercept, false);
</script>

<h3>Log</h3>
<textarea rows="15" cols="80" id="log" readonly="true"></textarea>
</body>
</html>
```

上例演示了如何禁止向一个文本域内粘贴文本。

### 备注

当用户尝试粘贴文本时会触发`paste`事件。

### 规范

不属于任何公开的规范。

### 备注

没有任何 DOM 方法可以使用来获取将要粘贴的剪切板中的文字，你可以使用 XPCOM 接口`nsIClipboard`来进行这样的操作。

### 相关链接

- [`oncopy`](/zh-CN/DOM/element.oncopy)
- [`oncut`](/zh-CN/DOM/element.oncut)
