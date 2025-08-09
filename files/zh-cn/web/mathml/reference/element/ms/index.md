---
title: <ms>
slug: Web/MathML/Reference/Element/ms
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`<ms>`** [MathML](/zh-CN/docs/Web/MathML) 元素表示要由编程语言和计算机代数系统解释的**字符串**字面量。

## 属性

此元素包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)。

某些浏览器还可能支持以下已弃用属性，并将 `<ms>` 元素的内容用指定的开引号和闭引号包围起来：

- `lquote`
  - : 用于包围内容的开引号。默认值为 `&quot;`。
- `rquote`
  - : 用于包围内容的闭引号。默认值为 `&quot;`。

## 示例

### 默认渲染

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('默认渲染', 700, 200, "", "") }}

### 旧版 quote 属性

```html
<math display="block">
  <ms lquote="„" rquote="'">abc</ms>
</math>
```

{{ EmbedLiveSample('旧版 quote 属性', 700, 200, "", "") }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
