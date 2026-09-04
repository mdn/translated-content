---
title: :dir()
slug: Web/CSS/Reference/Selectors/:dir
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:dir()`** 根据元素中文本的书写方向匹配元素。

```css
/* 选择任何文本方向为从右到左的元素 */
:dir(rtl) {
  background-color: red;
}
```

`:dir()` 伪类仅使用文本方向的*语义*值，即文档中定义的方向性。它不会考虑由 CSS 属性（例如 {{cssxref("direction")}}）设置的*样式*方向。

> [!NOTE]
> 请注意，`:dir()` 伪类的行为与 `[dir=…]` [属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)并不相同。后者仅匹配具有 HTML [`dir`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/dir) 属性的元素，并会忽略那些虽然从父元素继承了方向但自身没有该属性的元素。（同样，`[dir=rtl]` 和 `[dir=ltr]` 也不会匹配 `auto` 值。）相比之下，`:dir()` 会匹配由{{glossary("user agent", "用户代理")}}计算得出的方向值，即使该值是继承而来的。

> [!NOTE]
> 在 HTML 中，文本方向由 [`dir`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/dir) 属性决定。其他类型的文档可能使用不同的方法来确定方向。

## 语法

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### 参数

`:dir()` 伪类需要一个参数，用于表示要匹配的文本方向。

- `ltr`
  - : 匹配从左到右的元素。
- `rtl`
  - : 匹配从右到左的元素。

## 示例

### HTML

```html
<div dir="rtl">
  <span>测试 1</span>
  <div dir="ltr">
    测试 2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 语言相关伪类：{{cssxref(":lang")}}
- HTML [`lang`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang) 属性
- HTML [`translate`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/translate) 属性
