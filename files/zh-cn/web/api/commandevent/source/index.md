---
title: CommandEvent：source 属性
slug: Web/API/CommandEvent/source
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{APIRef("Invoker Commands API")}}

{{domxref("CommandEvent")}} 接口的只读属性 **`source`** 返回一个表示触发该命令的控件的 {{domxref("EventTarget")}}。

## 值

{{domxref("EventTarget")}} 对象。通常是一个 {{domxref("HTMLButtonElement")}}。

## 示例

在下面的简单示例中，我们设置了一个事件监听器，在发生 CommandEvent 时向按钮元素添加一个临时类：

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theButton = event.source;

    theButton.classList.add("just-pressed");

    setTimeout(() => {
      theButton.classList.remove("just-pressed");
    }, 1000);
  },
  { capture: true },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Invoker Commands API", "调用者命令 API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
