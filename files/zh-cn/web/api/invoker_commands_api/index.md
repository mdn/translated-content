---
title: 调用者命令 API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Invoker Commands API")}}

**调用者命令 API（Invoker Commands API）** 提供了一种为按钮分配行为的声明式方法，允许在按钮被触发时（点击或按键激活，例如按下空格键、回车键等）控制交互元素。

## 概念与用法

Web 上常见的模式是使用 {{HTMLElement("button")}} 元素来控制页面的各个方面，例如打开和关闭{{domxref("Popover API", "弹出框", "", "nocode")}}或 {{HTMLElement("dialog")}} 元素、格式化文本等。

过去，创建这些控件通常需要为按钮添加 JavaScript 事件监听器，然后调用它们所控制元素的 API。{{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} 和 {{domxref("HTMLButtonElement.command", "command")}} 属性为有限的一组操作提供了声明式实现方法。对于内置命令，这种方式的优势在于用户无需等待 JavaScript 下载和执行即可让按钮变为可交互。

## HTML 属性

- [`commandfor`](/zh-CN/docs/Web/HTML/Reference/Elements/button#commandfor)
  - : 将 {{htmlelement("button")}} 元素变为控制指定交互元素的按钮；其值为要控制元素的 ID。
- [`command`](/zh-CN/docs/Web/HTML/Reference/Elements/button#command)
  - : 指定由 `<button>` 控件通过 `commandfor` 属性控制的元素上要执行的操作。

## 接口

- {{domxref("CommandEvent")}}
  - : 表示通知用户命令已被发出的事件。它是 {{domxref("HTMLElement/command_event", "command")}} 事件的事件对象。该事件会在由 {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} 引用的元素上触发。

## 对其他接口的扩展

### 实例属性

- {{domxref("HTMLButtonElement.commandForElement")}}
  - : 获取和设置由按钮控制的元素。它是 [`commandfor`](/zh-CN/docs/Web/HTML/Reference/Elements/button#commandfor) HTML 属性的 JavaScript 等价物。
- {{domxref("HTMLButtonElement.command")}}
  - : 获取和设置按钮所控制元素上要执行的操作。反映 [`command`](/zh-CN/docs/Web/HTML/Reference/Elements/button#command) HTML 属性的值。

### 事件

- {{domxref("HTMLElement.command_event", "command")}} 事件
  - : 在由按钮引用的元素上触发。

## 示例

### 创建声明式弹出框

```html
<button commandfor="mypopover" command="toggle-popover">切换弹出框</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">关闭</button>
  弹出框内容
</div>
```

### 创建声明式对话框

```html
<button commandfor="mydialog" command="show-modal">显示模态对话框</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">关闭</button>
  对话框内容
</dialog>
```

### 创建自定义命令

```html
<button commandfor="my-img" command="--rotate-left">向左旋转</button>
<button commandfor="my-img" command="--rotate-right">向右旋转</button>
<img id="my-img" src="photo.jpg" alt="[在此处添加合适的替代文本]" />
```

```js
const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command === "--rotate-left") {
    myImg.style.rotate = "-90deg";
  } else if (event.command === "--rotate-right") {
    myImg.style.rotate = "90deg";
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLButtonElement.command", "command")}} 属性
- {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} 属性
- {{domxref("CommandEvent", "CommandEvent")}} 接口
