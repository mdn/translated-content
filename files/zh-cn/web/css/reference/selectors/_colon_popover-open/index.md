---
title: :popover-open
slug: Web/CSS/Reference/Selectors/:popover-open
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:popover-open`** 用于表示一个处于显示状态的 {{domxref("Popover API", "popover", "", "nocode")}} 元素（即带有 [`popover` 属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/popover)的元素）。你可以使用它来仅在弹出框元素显示时应用样式。

## 语法

```css
:popover-open {
  /* ... */
}
```

## 示例

默认情况下，弹出框会出现在视口的中间位置。默认样式在用户代理样式表中是这样实现的：

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

要覆盖默认样式并让弹出框出现在视口中的其他位置，你可以使用类似下面这样的代码来覆盖上述样式：

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Popover API](/zh-CN/docs/Web/API/Popover_API)
- [`popover`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/popover) HTML 全局属性
