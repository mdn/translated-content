---
title: MouseEvent：shiftKey 属性
slug: Web/API/MouseEvent/shiftKey
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}}

**`MouseEvent.shiftKey`** 只读属性是用于指示在某个鼠标事件发生时，<kbd>shift</kbd> 键是否被按下的布尔值。

## 值

布尔值，其中 `true` 表示按键已按下，而 `false` 表示按键*未*按下。

## 示例

此示例会在触发 {{domxref("Element/click_event", "click")}} 事件时记录 `shiftKey` 属性。

### HTML

```html
<p>单击任意位置以测试 <code>shiftKey</code> 属性。</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `按下 shift 键：${e.shiftKey}`;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("MouseEvent") }}
