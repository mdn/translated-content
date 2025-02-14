---
title: TouchEvent：altKey 属性
slug: Web/API/TouchEvent/altKey
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Touch Events") }}

{{domxref("TouchEvent")}} 接口的只读 **`altKey`** 属性但会一个布尔值，指示在创建触摸事件时是否启用 <kbd>alt</kbd>（Alternate）键。如果启用了 <kbd>alt</kbd> 键，则属性为 `true`。否则为 `false`。

此属性为 {{ReadOnlyInline}}。

## 值

一个布尔值，如果为此事件启用了 <kbd>alt</kbd> 键则为 `true`；如果未启用 <kbd>alt</kbd> 键则为 `false`。

## 示例

这个例子展示了如何访问 {{domxref("TouchEvent")}} 的修饰键属性：`TouchEvent.altKey`、{{domxref("TouchEvent.ctrlKey")}}、{{domxref("TouchEvent.metaKey")}} 和 {{domxref("TouchEvent.shiftKey")}}。

在以下代码片段中，{{domxref("Element/touchstart_event", "touchstart")}} 事件处理器记录了事件的修饰键状态。

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // 记录事件的修饰键状态
    console.log(`altKey = ${e.altKey}`);
    console.log(`ctrlKey = ${e.ctrlKey}`);
    console.log(`metaKey = ${e.metaKey}`);
    console.log(`shiftKey = ${e.shiftKey}`);
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
