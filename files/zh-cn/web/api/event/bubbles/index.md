---
title: Event：bubbles 属性
slug: Web/API/Event/bubbles
l10n:
  sourceCommit: 9428ff063d032a6ba39732cdbbb3d363d755ee9c
---

{{ApiRef("DOM")}}

{{domxref("Event")}} 接口的 **`bubbles`** 只读属性表明事件是否会沿 DOM 树向上冒泡。

> [!NOTE]
> 有关冒泡的更多信息，请参阅[事件冒泡](/zh-CN/docs/Learn_web_development/Core/Scripting/Event_bubbling)。

## 值

一个布尔值，若事件沿 DOM 树向上冒泡，则该属性为 `true`。

## 示例

```js
function handleInput(e) {
  // 检查事件是否沿冒泡阶段传播
  if (!e.bubbles) {
    passItOn(e);
  }

  // 已经冒泡
  doOutput(e);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Event.stopPropagation", "stopPropagation()")}} 方法用于阻止当前事件在捕获和冒泡阶段的进一步传播
- {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} 方法用于阻止在同一 DOM 层级上针对同一事件调用任何后续监听器
- {{domxref("Event.preventDefault", "preventDefault()")}} 方法用于在事件继续传播的同时，禁止浏览器在无监听器处理该事件时执行其默认操作
