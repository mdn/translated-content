---
title: Window：alert() 方法
slug: Web/API/Window/alert
---

{{ ApiRef }}

`window.alert()` 令浏览器显示一个带有可选的信息的对话框，并等待用户离开该对话框。

在某些情况下（例如，当用户切换标签时）浏览器可能不会实际显示一个对话框，或者不等待用户离开对话框。

## 语法

```js-nolint
alert()
alert(message)
```

### 参数

- `message` {{optional_inline}}
  - : 是要显示在警告对话框中的字符串，如果传入其他类型的值，会转换成字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
window.alert("Hello world!");
alert("Hello world!");
```

都会显示如下：

![黑色警报对话框。在左上方的小圆圈图标后面有白色的开括号和闭括号，包含 JavaScript Application 白色文本。在左下方，有一个“Hello world!”白色的文字。右下方有一个蓝色的小按钮。这个按钮的文字是黑色的 OK](alerthelloworld.png)

## 注意事项

警告对话框应该用于不需要用户做出任何反应的信息，除了对信息的确认之外。

对话框是模态窗口——它们阻止用户访问程序界面的其他部分，直到对话框被关闭。出于这个原因，你不应该过度使用任何创建对话框（或模态窗口）的函数。

另外，{{HTMLElement("dialog")}} 元素也可用于显示警告。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dialog")}} 元素
- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
