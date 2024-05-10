---
title: Document：afterscriptexecute 事件
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef}}{{non-standard_header}}

当静态 {{HTMLElement("script")}} 元素完成脚本执行时会触发 `afterscriptexecute` 事件。如果元素是动态添加的（例如使用 {{domxref("Node.appendChild()", "appendChild()")}}）方法，则不会触发此事件。

## 语法

在方法中使用事件名称，例如 {{domxref("EventTarget.addEventListener", "addEventListener()")}}，或者设置事件处理器属性。

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

## 示例

```js
function finished(e) {
  logMessage(`完成带有 ID 的脚本：${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished, true);
// 或
document.onafterscriptexecute = finished;
```

[查看在线示例](https://mdn.dev/archives/media/samples/html/currentScript.html)

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.beforescriptexecute_event")}}
- {{domxref("Document.currentScript")}}
