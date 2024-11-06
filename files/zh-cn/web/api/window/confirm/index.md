---
title: Window：confirm() 方法
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}}

`window.confirm()` 令浏览器显示一个带有可选的信息的对话框，并等待用户确认或取消该对话框。

在某些情况下（例如，当用户切换标签时）浏览器可能不会实际显示一个对话框，或者不等待用户确认或取消对话框。

## 语法

```js-nolint
confirm(message)
```

### 参数

- `message`
  - : 在确认对话框中要显示的字符串。

### 返回值

一个布尔值，表示是否选择了确定（`true`）或取消（`false`）。如果浏览器忽略了页面内的对话框，那么返回值总是 `false`。

## 示例

```js
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

会产生：

![Firefox 确认对话框](firefox_confirm_dialog.png)

## 注意事项

对话框是模态窗口——它们阻止用户访问程序界面的其他部分，直到对话框被关闭。出于这个原因，你不应该过度使用任何创建对话框（或模态窗口）的函数。无论如何，有很好的应[避免使用对话框进行确认](https://alistapart.com/article/neveruseawarning/)的理由。

另外，{{HTMLElement("dialog")}} 元素也可用于确认。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("dialog")}} 元素
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
