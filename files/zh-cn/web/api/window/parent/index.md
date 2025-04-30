---
title: Window：parent 属性
slug: Web/API/Window/parent
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`Window.parent`** 属性是对当前窗口或子框架的父窗口的引用。

如果没有父窗口，那么它的 `parent` 属性会引用它自身。

当一个窗口加载在 {{htmlelement("iframe")}}、{{htmlelement("object")}} 或 {{htmlelement("frame")}} 中时，它的父窗口是嵌套该窗口的元素所属的窗口。

## 值

一个 `Window` 或 {{htmlelement("iframe")}} 对象。

## 示例

```js
if (window.parent !== window.top) {
  // 嵌套层级超过一级
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.frameElement")}} 返回当前 `window` 所嵌入的特定元素（例如 `<iframe>`）。
- {{domxref("window.top")}} 返回对顶层窗口的引用。
