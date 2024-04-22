---
title: Window：prompt() 方法
slug: Web/API/Window/prompt
---

{{ApiRef("Window")}}

`window.prompt()` 指示浏览器显示一个对话框，其中有一个可选的信息，提示用户输入一些文本，并等待用户提交文本或取消对话框。

在某些情况下（例如，当用户切换标签时）浏览器可能不会实际显示一个对话框，或者不等待用户提交文本或取消对话框。

## 语法

```js-nolint
prompt()
prompt(message)
prompt(message, defaultValue)
```

### 参数

- `message` {{optional_inline}}
  - : 向用户显示的一串文本。如果在提示窗口中没有什么可显示的，可以省略。
- `defaultValue` {{optional_inline}}
  - : 一个字符串，包含文本输入字段中显示的默认值。

### 返回值

一个包含用户输入文本的字符串，或 `null`。

## 示例

```js
let sign = prompt("你是什么星座的？");

if (sign == "天蝎座") {
  alert("哇！我也是天蝎座的耶！");
}

// 有多种使用 prompt 方法的方式
sign = window.prompt(); // 打开空的提示窗口
sign = prompt(); // 打开空的提示窗口
sign = window.prompt("你觉得很幸运吗？"); // 打开显示提示文本为"你觉得很幸运吗？"的提示窗口
sign = window.prompt("你觉得很幸运吗？", "是的"); // 打开显示提示文本为"你觉得很幸运吗？"并且输入框默认值为"是的"的提示窗口
```

当用户点击“确定”按钮时，在输入框中输入的文本被返回。如果用户在没有输入任何文本的情况下点击确定，则返回一个空字符串。如果用户点击“取消”按钮，该函数返回 `null`。

以上提示框显示如下（在 macOS 的 Chrome 浏览器上）：

[![macOS 上 Chrome 中的 prompt() 对话框](prompt.png)](prompt.png)

## 注意事项

一个提示对话框包含一个单行文本框、一个取消按钮和一个确定按钮，并返回用户在该文本框中输入的（可能是空的）文本。

请注意，结果是一个字符串。这意味着你有时应该对用户给出的值进行转换。例如，如果他们的答案应该是一个数字，你应该把这个值转换为数字。

```js
const aNumber = Number(window.prompt("输入一个数字", ""));
```

对话框是模态窗口——它们阻止用户访问程序界面的其他部分，直到对话框被关闭。出于这个原因，你不应该过度使用任何创建对话框（或模态窗口）的函数。

另外，{{HTMLElement("dialog")}} 元素也可用于获取用户输入。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dialog")}} 元素
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
