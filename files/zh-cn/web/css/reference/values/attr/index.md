---
title: attr
slug: Web/CSS/Reference/Values/attr
---

## 概述

> [!NOTE]
> `attr()` 理论上能用于所有的 CSS 属性，但目前支持的仅有伪元素的 {{CSSxRef("content")}} 属性，其他的属性和高级特性目前是实验性的
>
> 译者注：如果发现浏览器兼容表里 attr() 的高级用法依旧没有良好的支持的话，本文大部分内容都是纸上谈兵

CSS 表达式 `attr()` 用来获取选择到的元素的某一 HTML 属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。

`attr()` 表达式可以用于任何 CSS 属性。 {{ experimental_inline() }}

## 语法

```css
/** 语法表示 */
attr(<attr-name> <attr-type>? , <fallback-value>?)

/* 简单用法 */
attr(data-count);
attr(title);

/** 带单位 */
attr(data-width px);
attr(data-font-size rem);
attr(data-height %);

/* 带类型 */
attr(data-count number);
attr(id type(<custom-ident>))
attr(src type(<url>));
attr(data-size type(<length> | <percentage>))

/* 带回退值 */
attr(data-count type(<number>), 0);
attr(src type(<url>), "");
attr(data-width type(<length>), inherit);
attr(data-something, "default");
```

### 解释

- `<attr-name>`
  - : 是 CSS 所引用的 HTML 属性名称。
  - : 如果在应用在元素的属性上使用，会引用该元素上给定的属性名称；如果应用于伪元素，则会在原始元素上查找。
- `<attr-type>`
  - : 指定如何解析获取的 HTML 属性，可以是 {{cssxref("type()")}}、{{cssxref("number")}} 或属性单位。默认为 `raw-string`。
  - : 如果使用 {{cssxref("type()")}}，将依照传递类型对属性进行解析。无法进行解析将触发回退。
    > [!NOTE]
    > 需要注意：因为 {{CSSxRef("url_value", "&lt;url&gt;")}} 可以引用未应用于样式，且包含敏感信息的属性。
    > 如果页面允许第三方 CSS，那么 CSS 可以随意发送存储在属性当中的任何信息，因此不能用于 `attr` 进行动态构造 URL。
  - : 如果使用 {{cssxref("number")}}，将去除前导与尾随空格，作为数字解析。无法解析将触发回退。
  - : 如果使用属性单位，如 `px`、`rem`、`%`、`deg` 等，将根据单位进行解析。无法解析将触发回退。
  - : 默认为 `raw-string`，将属性值作为字符串处理而不进行 CSS 解析。
    > [!NOTE]
    > 这个属性最初在 Chromium 浏览器中被命名为 `string` 得到支持，出于向后兼容考虑，两者都将被短暂支持。
- `<fallback-value>`
  - : 指定在属性值解析失败或无法解析为指定类型时的回退值。
  - : 如果省略 `<attr-type>` ，默认返回空字符串；如指定 `<attr-type>` ，则默认返回一个 {{cssxref("guaranteed_invalid_value", "保证无效值")}} 。
  - : 不能是另一个 `attr()` 表达式。
  - : 默认值可以不是 `attr()` 指定的类型，例如给定 `type(<length>)`，仍可以使用 `auto`。
  - : `attr(foo)` 和 `attr(foo,)` 是不一样的，前者表示省略回退值，后者表示传递一个空回退值。

## 示例

```css
p:before {
  content: attr(data-foo) " ";
}
```

```html
<p data-foo="hello">world</p>
```

### 结果

hello world

### 示例 1

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### Result

{{EmbedLiveSample("示例 1", "100%", 50)}}

### 示例 2

{{SeeCompatTable}}

#### HTML

```html
<div class="background" data-background="lime">
  如果浏览器并不支持 attr() 的高级用法，那么颜色将是红色而不是绿色
</div>
```

#### CSS

```css
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background type(<color>), red);
}
```

{{EmbedLiveSample("示例 2", "100%", 50)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Attribute selectors](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [HTML `data-*` attributes](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG `data-*` attributes](/zh-CN/docs/Web/SVG/Reference/Attribute/data-*)
