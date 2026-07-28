---
title: Window：prompt() 方法
short-title: prompt()
slug: Web/API/Window/prompt
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
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

以下示例演示了如何检查提示框的返回值。当用户点击“确定”按钮时，将返回输入框中输入的文本。如果用户未输入任何文本就点击“确定”，则返回空字符串。如果用户点击“取消”按钮，该函数将返回 `null`。

```html live-sample___prompt
<button id="signButton">检查星座</button>
<pre id="log"></pre>
```

```js live-sample___prompt
const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("你是什么星座的？");

  if (sign === null) {
    log.innerText = "好的，下次再问你吧。";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "别害羞，输入一下你的星座吧！";
  } else if (sign.toLowerCase() === "天蝎座") {
    log.innerText = "哇！我也是天蝎座的耶！";
  } else {
    log.innerText = `${sign} 是我最喜欢的星座！`;
  }
});
```

{{EmbedLiveSample('prompt', , , , , , , 'allow-modals')}}

### 提示信息和默认值

使用提示框有多种方式，包括使用 `prompt`、`window.prompt` 以及指定消息和默认值：

```js
// 打开空的提示窗口
sign = prompt();
// 打开空的提示窗口 
sign = window.prompt();
// 打开显示提示文本为“你觉得很幸运吗？”的提示窗口
sign = window.prompt("你觉得很幸运吗？");
// 打开显示提示文本为“你觉得很幸运吗？”并且输入框默认值为“是的”的提示窗口
sign = window.prompt("你觉得很幸运吗？", "是的");
```

## 注意事项

对话框是模态窗口——在对话框关闭之前，用户无法访问程序界面的其他部分。因此，不应过度使用任何会创建对话框或模态窗口的功能。此外，也可以使用 {{HTMLElement("dialog")}} 元素来实现确认操作。

提示对话框包含一个单行文本框、一个“取消”按钮和一个“确定”按钮，并返回用户在该文本框中输入的文本（可能为空）。返回结果是一个字符串，这意味着有时你需要对用户输入的值进行类型转换。例如，如果用户的回答应为数字类型，则应将该值转换为数字类型。

```js
const number = Number(window.prompt("输入一个数字", ""));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dialog")}} 元素
- {{domxref("window.alert", "alert")}}
- {{domxref("window.confirm", "confirm")}}
- [切勿在实际想表示“撤销”时使用“警告”](https://alistapart.com/article/neveruseawarning/)，载于 A List Apart（2017）
