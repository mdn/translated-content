---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Invoker Commands API")}}

**`CommandEvent`** 接口表示一个事件，当拥有有效的 {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} 和 {{domxref("HTMLButtonElement.command", "command")}} 属性的 {{domxref("HTMLButtonElement", "button")}} 元素即将调用一个交互元素时，该事件会通知用户。

它是 `HTMLElement` 的 {{domxref("HTMLElement.command_event", "command")}} 事件的事件对象，表示当调用者控件被激活时的操作（例如点击或按下）。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CommandEvent.CommandEvent", "CommandEvent()")}}
  - : 创建一个 `CommandEvent` 对象。

## 实例属性

_继承其父接口 {{DOMxRef("Event")}} 的属性。_

- {{domxref("CommandEvent.source")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("HTMLButtonElement")}}，表示触发此次调用的按钮。
- {{domxref("CommandEvent.command")}} {{ReadOnlyInline}}
  - : 一个字符串，表示源按钮的 {{domxref("HTMLButtonElement.command", "command")}} 属性值。

## 示例

### 基本示例

```html
<button commandfor="mypopover" command="show-popover">显示弹出框</button>

<div popover id="mypopover" role="[声明合适的 ARIA 角色]">
  <!-- 弹出框内容 -->
  <button commandfor="mypopover" command="hide-popover">隐藏弹出框</button>
</div>
```

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("弹出框即将显示");
  }
});
```

### 自定义示例

```html
<button commandfor="the-image" command="--rotate-left">左旋转</button>

<button commandfor="the-image" command="--rotate-right">右旋转</button>

<img id="the-image" src="photo.jpg" alt="[请添加合适的替代文本]" />
```

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  if (event.command === "--rotate-left") {
    event.target.style.rotate = "-90deg";
  } else if (event.command === "--rotate-right") {
    event.target.style.rotate = "90deg";
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Invoker Commands API", "调用者命令 API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
