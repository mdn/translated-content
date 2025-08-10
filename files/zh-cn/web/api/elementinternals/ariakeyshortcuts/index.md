---
title: ElementInternals：ariaKeyShortcuts 属性
slug: Web/API/ElementInternals/ariaKeyShortcuts
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

{{domxref("ElementInternals")}} 接口的 **`ariaKeyShortcuts`** 属性反映了 [`aria-keyshortcuts`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) 属性的值，该属性表示作者为激活或聚焦元素而实现的键盘快捷键。

> [!NOTE]
> 在 `ElementInternals` 上设置 aria 属性允许在自定义元素上定义默认语义。这些语义可能会被 Web 开发者定义的属性覆盖，但确保当开发者删除这些属性或完全未添加时，仍保留默认语义。有关更多信息，请参阅 [Accessibility Object Model 解释器](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object)。

## 值

字符串。

## 示例

在此示例中，`ariaKeyShortcuts` 的值设置为“Alt+Shift+A”。

```js
this.internals_.ariaKeyShortcuts = "Alt+Shift+A";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
