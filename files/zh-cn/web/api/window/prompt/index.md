---
title: window.prompt
slug: Web/API/Window/prompt
---

{{ ApiRef() }}

### 概述

显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字。

### 语法

```js
result = window.prompt(text, value);
```

- `result` 用来存储用户输入文字的字符串，或者是 null。
- `text` 用来提示用户输入文字的字符串，如果没有任何提示内容，该参数可以省略不写。
- `value` 文本输入框中的默认值，该参数也可以省略不写。不过在 Internet Explorer 7 和 8 中，省略该参数会导致输入框中显示默认值"undefined"。

### 例子

```js
var sign = prompt("你是什么星座的？");
if (sign == "天蝎座"){
   alert("哇！我也是天蝎座的耶！");
}
// 有多种使用 prompt 方法的方式
var sign = window.prompt(); // 打开空的提示窗口
var sign = prompt();       // 打开空的提示窗口
var sign = window.prompt('你觉得很幸运吗？'); // 打开显示提示文本为"你觉得很幸运吗？"的提示窗口
var sign = window.prompt('你觉得很幸运吗？','是的'); // 打开显示提示文本为"你觉得很幸运吗？"并且输入框默认值为"是的"的提示窗口
```

当用户点击"确定"按钮后，文本输入框中的文字被返回。如果文本输入框中为空，则返回一个空字符串。如果用户点击"取消"按钮，则返回 null。

### 注意

一个 prompt 对话框，包含一个单行文本框，一个“取消”按钮，一个“确定”按钮，在对话框关闭时，返回用户输入到文本框内的值 (可能为空)。

prompt 和 alert 以及类似的对话框都是模态窗口，它们会阻止用户激活程序其他部分的界面，直到该对话框关闭。因此，你不应该过度使用该方法。(译注：在 content 上下文，Firefox 4 以上版本使用非模态的对话框)。Chrome 上下文执行的脚本 (例如扩展开发) 应该使用 XPCOM [nsIPromptService](/zh-CN/XPCOM_Interface_Reference/nsIPromptService) 来替代 window\.prompt。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 参见

[alert](/zh-CN/DOM/window.alert), [confirm](/zh-CN/DOM/window.confirm)
