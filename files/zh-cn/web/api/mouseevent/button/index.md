---
title: MouseEvent.button
slug: Web/API/MouseEvent/button
---

{{APIRef("DOM Events")}}

**`MouseEvent.button`**是只读属性，它返回一个值，代表用户按下并触发了事件的鼠标按键。

这个属性只能够表明在触发事件的单个或多个按键按下或释放过程中哪些按键被按下了。因此，它对判断[`mouseenter`](/zh-CN/docs/Web/API/Element/mouseenter_event), [`mouseleave`](/zh-CN/docs/Web/API/Element/mouseleave_event), [`mouseover`](/zh-CN/docs/Web/API/Element/mouseover_event), [`mouseout`](/zh-CN/docs/Web/API/Element/mouseout_event) [`mousemove`](/zh-CN/docs/Web/API/Element/mousemove_event)这些事件并不可靠。

用户可能会改变鼠标按键的配置，因此当一个事件的 **`MouseEvent.button`** 值为 0 时，它可能不是由物理上设备最左边的按键触发的。但是对于一个标准按键布局的鼠标来说就会是左键。

> **备注：** {{domxref("MouseEvent.buttons")}} 属性可指示任意鼠标事件中鼠标的按键情况，因此不要把它和 MouseEvent.button 属性弄混淆了。

## 语法

```js
var buttonPressed = instanceOfMouseEvent.button;
```

### 返回值

一个数值，代表按下的鼠标按键：

- `0`：主按键，通常指鼠标左键或默认值（译者注：如 document.getElementById('a').click() 这样触发就会是默认值）
- `1`：辅助按键，通常指鼠标滚轮中键
- `2`：次按键，通常指鼠标右键
- `3`：第四个按钮，通常指浏览器后退按钮
- `4`：第五个按钮，通常指浏览器的前进按钮

对于配置为左手使用的鼠标，按键操作将正好相反。此种情况下，从右至左读取值。

## 示例

### HTML

```html
<button id="button" oncontextmenu="event.preventDefault();">
  Click here with your mouse...
</button>
<p id="log"></p>
```

### JavaScript

```js
let button = document.querySelector("#button");
let log = document.querySelector("#log");
button.addEventListener("mouseup", logMouseButton);

function logMouseButton(e) {
  if (typeof e === "object") {
    switch (e.button) {
      case 0:
        log.textContent = "Left button clicked.";
        break;
      case 1:
        log.textContent = "Middle button clicked.";
        break;
      case 2:
        log.textContent = "Right button clicked.";
        break;
      default:
        log.textContent = `Unknown button code: ${e.button}`;
    }
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref('"MouseEvent"')}}
