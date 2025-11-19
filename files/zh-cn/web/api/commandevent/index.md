---
title: CommandEvent
slug: Web/API/CommandEvent
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Invoker Commands API")}}

**`CommandEvent`** 接口表示一个事件，当拥有有效的 {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} 和 {{domxref("HTMLButtonElement.command", "command")}} 属性的 {{domxref("HTMLButtonElement", "button")}} 元素即将调用一个交互元素时，该事件会通知用户。

它是 `HTMLElement` 的 {{domxref("HTMLElement.command_event", "command")}} 事件的事件对象，表示当调用者控件被激活时的操作（例如点击或按下）。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("CommandEvent.CommandEvent", "CommandEvent()")}}
  - : 创建一个 `CommandEvent` 对象。

## 实例属性

_此接口继承其父接口 {{DOMxRef("Event")}} 的属性。_

- {{domxref("CommandEvent.source")}} {{ReadOnlyInline}}
  - : 表示触发此次调用的按钮的 {{domxref("HTMLButtonElement")}}。
- {{domxref("CommandEvent.command")}} {{ReadOnlyInline}}
  - : 表示源按钮的 {{domxref("HTMLButtonElement.command", "command")}} 属性值的字符串。

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

### 使用自定义命令值

此实例使用[带有自定义值的 `commands`](/zh-CN/docs/Web/HTML/Reference/Elements/button#自定义值) 创建了三个按钮。

```html
<div class="controls">
  <button commandfor="the-image" command="--rotate-left">左旋转</button>
  <button commandfor="the-image" command="--reset">重置</button>
  <button commandfor="the-image" command="--rotate-right">右旋转</button>
</div>

<img
  id="the-image"
  src="/shared-assets/images/examples/dino.svg"
  alt="恐龙头部旋转了 0 度" />
```

```css hidden
.controls {
  margin-block-end: 20px;
}
```

使用 [`command` 事件](/zh-CN/docs/Web/API/HTMLElement/command_event)将事件监听器附加到图像上。当点击其中一个按钮时，监听器会根据分配给按钮的自定义 `command` 值运行代码，旋转图像并更新其 `alt` 文本以指示图像的新角度。

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0", 10);
  if (event.command === "--reset") {
    rotate = 0;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-left") {
    rotate = rotate === -270 ? 0 : rotate - 90;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate = rotate === 270 ? 0 : rotate + 90;
    event.target.style.rotate = `${rotate}deg`;
  }
  event.target.alt = `恐龙头部旋转了 ${rotate} 度`;
});
```

{{EmbedLiveSample('使用自定义命令值', '100%', "220")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Invoker Commands API", "调用者命令 API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
