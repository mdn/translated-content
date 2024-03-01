---
title: Event：type 属性
slug: Web/API/Event/type
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的只读属性 **`type`** 会返回一个字符串，表示该事件对象的事件类型。该名称在构造事件时设置，通常用于指代特定事件，如 `click`、`load` 或 `error`。

## 值

包含 {{domxref("Event")}} 类型的字符串。

## 示例

此示例在你每次按下键盘上的一个键或点击鼠标按钮时输出事件类型。

### HTML

```html
<p>按任意键或点击鼠标获取事件类型。</p>
<p id="log"></p>
```

### JavaScript

```js
function getEventType(event) {
  const log = document.getElementById("log");
  log.innerText = `${event.type}\n${log.innerText}`;
}

// 键盘事件
document.addEventListener("keydown", getEventType, false); // 第一个
document.addEventListener("keypress", getEventType, false); // 第二个
document.addEventListener("keyup", getEventType, false); // 第三个

// 鼠标事件
document.addEventListener("mousedown", getEventType, false); // 第一个
document.addEventListener("mouseup", getEventType, false); // 第二个
document.addEventListener("click", getEventType, false); // 第三个
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("EventTarget.addEventListener()") }}
- {{ domxref("EventTarget.removeEventListener()") }}
