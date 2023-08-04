---
title: MouseEvent.relatedTarget
slug: Web/API/MouseEvent/relatedTarget
---

{{APIRef("DOM Events")}}

只读属性 **`MouseEvent.relatedTarget`** 是鼠标事件的次要目标（如果存在），它包括：

| 事件名称                                                       | `target`                                | `relatedTarget`                         |
| -------------------------------------------------------------- | --------------------------------------- | --------------------------------------- |
| [`focusin`](/zh-CN/docs/Web/API/Element/focusin_event)         | {{domxref("EventTarget")}} 获取焦点     | {{domxref("EventTarget")}} 失去焦点     |
| [`focusout`](/zh-CN/docs/Web/API/Element/focusout_event)       | {{domxref("EventTarget")}} 失去焦点     | The {{domxref("EventTarget")}} 获取焦点 |
| [`mouseenter`](/zh-CN/docs/Web/API/Element/mouseenter_event)   | 指针设备进入{{domxref("EventTarget")}}  | 指针设备离开{{domxref("EventTarget")}}  |
| [`mouseleave`](/zh-CN/docs/Web/API/Element/mouseleave_event)   | 指针设备离开 {{domxref("EventTarget")}} | 指针设备进入 {{domxref("EventTarget")}} |
| [`mouseout`](/zh-CN/docs/Web/API/Element/mouseout_event)       | 指针设备离开 {{domxref("EventTarget")}} | The {{domxref("EventTarget")}}          |
| [`mouseover`](/zh-CN/docs/Web/API/Element/mouseover_event)     | 指针设备进入 {{domxref("EventTarget")}} | 指针设备离开 {{domxref("EventTarget")}} |
| [`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event) | 指针设备进入 {{domxref("EventTarget")}} | 指针设备离开 {{domxref("EventTarget")}} |

如果事件没有次要目标，`relatedTarget` 将返回 `null`.

## 语法

```
var target = instanceOfMouseEvent.relatedTarget
```

### 返回值

{{domxref("EventTarget")}} 对象或者 `null`.

## 示例

尝试将你的鼠标移入移出红色和蓝色方块。

### HTML

```html
<body id="body">
  <div id="outer">
    <div id="red"></div>
    <div id="blue"></div>
  </div>
  <p id="log"></p>
</body>
```

### CSS

```css
#outer {
  width: 250px;
  height: 125px;
  display: flex;
}

#red {
  flex-grow: 1;
  background: red;
}

#blue {
  flex-grow: 1;
  background: blue;
}

#log {
  max-height: 120px;
  overflow-y: scroll;
}
```

### JavaScript

```js
const mouseoutLog = document.getElementById("log"),
  red = document.getElementById("red"),
  blue = document.getElementById("blue");

red.addEventListener("mouseover", overListener);
red.addEventListener("mouseout", outListener);
blue.addEventListener("mouseover", overListener);
blue.addEventListener("mouseout", outListener);

function outListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  mouseoutLog.innerText = `\nfrom ${event.target.id} into ${related} ${mouseoutLog.innerText}`;
}

function overListener(event) {
  let related = event.relatedTarget ? event.relatedTarget.id : "unknown";

  log.innerText = `\ninto ${event.target.id} from ${related} ${mouseoutLog.innerText}`;
}
```

### 结果

{{EmbedLiveSample("示例", 700, 280)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("MouseEvent") }}
- [Comparison of Event Targets](/zh-CN/docs/DOM/event/Comparison_of_Event_Targets)
