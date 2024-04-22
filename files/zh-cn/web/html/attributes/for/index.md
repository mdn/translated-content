---
title: HTML 属性：for
slug: Web/HTML/Attributes/for
l10n:
  sourceCommit: a9ee909247680532544008dbc65a9f033fce4b39
---

{{HTMLSidebar}}

**`for`** 属性是 {{htmlelement("label")}} 和 {{htmlelement("output")}} 允许使用的属性。当用于 `<label>` 元素时，它表示该标签所描述的表单元素。当用于 `<output>` 元素时，它允许在代表输出中使用的值的元素之间建立明确的关系。

{{EmbedInteractiveExample("pages/tabbed/attribute-for.html", "tabbed-shorter")}}

## 使用说明

当作为 `<label>` 的属性使用时，`for` 属性的值是与之相关的表单元素的`id`。

```html
<label for="username">你的名字</label> <input type="text" id="username" />
```

作为 `<output>` 的属性使用时，`for` 属性的值是一个空格分隔的列表，其中包含用于创建输出的元素的 `id` 值。

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## 示例

请参阅 {{htmlelement("label")}} 和 {{htmlelement("output")}} 的元素页面上的使用示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
