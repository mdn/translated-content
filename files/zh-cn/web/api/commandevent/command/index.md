---
title: CommandEvent：command 属性
slug: Web/API/CommandEvent/command
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("Invoker Commands API")}}

{{domxref("CommandEvent")}} 接口的只读属性 **`command`** 返回一个表示派发该事件的元素的 {{domxref("HTMLButtonElement.command", "command")}} 属性值的字符串。

## 值

字符串。

## 示例

在下面的简单示例中，我们设置了一个事件监听器来监听“show-modal”命令：

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theAction = event.command;

    if (theAction === "show-modal") {
      console.log("展示模态对话框");
    }
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
