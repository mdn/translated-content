---
title: ErrorEvent：message 属性
slug: Web/API/ErrorEvent/message
l10n:
  sourceCommit: ac29130f454fc961f04bc9133b449771dc2f079e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

{{domxref("ErrorEvent")}} 接口的 **`message`** 只读属性返回包含描述问题的人类可读的错误信息。

## 值

字符串。

## 示例

```js
window.addEventListener("error", (ev) => {
  console.log("错误消息：" + ev.message);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
