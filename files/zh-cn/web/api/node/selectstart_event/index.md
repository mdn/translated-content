---
title: Node：selectstart 事件
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef}}

[Selection API](/zh-CN/docs/Web/API/Selection) 的 **`selectstart`** 事件在用户进行一个新的选择时触发。

如果事件被取消，所选取内容将不会改变。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

```js
// addEventListener 版本
document.addEventListener("selectstart", () => {
  console.log("已开始选择");
});

// onselectstart 版本
document.onselectstart = () => {
  console.log("已开始选择");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document/selectionchange_event", "selectionchange")}}
