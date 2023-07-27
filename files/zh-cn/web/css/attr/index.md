---
title: attr
slug: Web/CSS/attr
---

{{CSSRef}}

## 概述

> **备注：** `attr()` 理论上能用于所有的 CSS 属性但目前支持的仅有伪元素的 {{CSSxRef("content")}} 属性，其他的属性和高级特性目前是实验性的
>
> 译者注：如果发现浏览器兼容表里 attr() 的高级用法依旧没有良好的支持的话，本文大部分内容都是纸上谈兵

CSS 表达式 `attr()` 用来获取选择到的元素的某一 HTML 属性值，并用于其样式。它也可以用于伪元素，属性值采用伪元素所依附的元素。

`attr()` 表达式可以用于任何 CSS 属性。 {{ experimental_inline() }}

## 用法

```
语法：attr( attribute-name <type-or-unit>? [, <fallback> ]? )
```

### 解释

- `attribute-name`
  - : 是 CSS 所引用的 HTML 属性名称。
- `<type-or-unit>`

  - : 表示所引用的属性值的单位。如果该单位相对于所引用的属性值不合法，那么`attr()`表达式也不合法。若省略，则默认值为`string`。其合法值包括：

    | 关键字                                                                                                           | 类型                              | 备注                                                                                                                                                                                                                                                                                     | 默认值                                                   |
    | ---------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
    | `string`                                                                                                         | {{cssxref("&lt;string&gt;")}}     | 属性值将被解析为 {{cssxref("&lt;string&gt;")}}                                                                                                                                                                                                                                           | 空字符串                                                 |
    | `color` {{ experimental_inline() }}                                                                              | {{cssxref("&lt;color&gt;")}}      | 属性值将被解析为#xxx、#xxxxxx 或关键字的形式，且必须为合法 CSS {{cssxref("&lt;string&gt;")}} 值。前缀与后缀空格将被截掉。                                                                                                                                                                | 当前颜色                                                 |
    | `url` {{ experimental_inline() }}                                                                                | {{ cssxref("&lt;uri&gt;") }}      | 属性值将被解析为可用于`url()`函数的字符串。相对 URL 是根据 HTML 文档的路径解析，而不是样式文件所在的路径。前缀与后缀空格将被截掉。                                                                                                                                                       | URL `about:invalid`，表示资源不存在。                    |
    | `integer` {{ experimental_inline() }}                                                                            | {{cssxref("&lt;integer&gt;")}}    | 属性值将被解析为 CSS {{cssxref("&lt;integer&gt;")}}。若不是合法值（不是整数或超出 CSS 属性规定的数字范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                                       | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `number` {{ experimental_inline() }}                                                                             | {{cssxref("&lt;number&gt;")}}     | 属性值将被解析为 CSS {{cssxref("&lt;number&gt;")}}。若不是合法值（不是数字或超出 CSS 属性规定的数字范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                                        | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `length` {{ experimental_inline() }}                                                                             | {{cssxref("&lt;length&gt;")}}     | 属性值将被解析为 CSS {{cssxref("&lt;length&gt;")}}，带单位，比如 `12.5em`。若不是合法值（不是长度值或超出 CSS 属性规定的范围），则使用默认值。若属性值是一个相对长度， `attr()`会将其计算为绝对长度。前缀与后缀空格将被截掉。                                                            | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` {{ experimental_inline() }} | {{cssxref("&lt;length&gt;")}}     | 属性值将被解析为 CSS {{cssxref("&lt;number&gt;")}}，不带单位，如 `12.5`，并被解释为带有所规定单位的 {{cssxref("&lt;length&gt;")}} 值。若不是合法值（不是长度值或超出 CSS 属性规定的范围），则使用默认值。若属性值是一个相对长度， `attr()`会将其计算为绝对长度。前缀与后缀空格将被截掉。 | `0`，或该属性允许的最小值（如果 0 是不合法的值）。       |
    | `angle` {{ experimental_inline() }}                                                                              | {{ cssxref("&lt;angle&gt;") }}    | 属性值将被解析为 CSS {{ cssxref("&lt;angle&gt;") }}，带单位，如`30.5deg`。若不是合法值（不是角度值或超出 CSS 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                    | `0deg`，或该属性允许的最小值（如果 0deg 是不合法的值）。 |
    | `deg`, `grad`, `rad` {{ experimental_inline() }}                                                                 | {{ cssxref("&lt;angle&gt;") }}    | 属性值将被解析为 CSS {{cssxref("&lt;number&gt;")}}，不带单位，如`12.5`)，并被解释为带有所规定单位的 {{ cssxref("&lt;angle&gt;") }} 值。若不是合法值（不是角度值或超出 CSS 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                       | `0deg`，或该属性允许的最小值（如果 0deg 是不合法的值）。 |
    | `time` {{ experimental_inline() }}                                                                               | {{cssxref("&lt;time&gt;")}}       | 属性值将被解析为 CSS {{cssxref("&lt;time&gt;")}}，带单位，如`30.5ms`。若不是合法值（不是时间值或超出 CSS 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                        | `0s`，或该属性允许的最小值（如果 0s 是不合法的值）。     |
    | `s`, `ms` {{ experimental_inline() }}                                                                            | {{cssxref("&lt;time&gt;")}}       | 属性值将被解析为 CSS {{cssxref("&lt;time&gt;")}}，不带单位，如`30.5`，并被解释为带有所规定单位的 {{cssxref("&lt;time&gt;")}} 值。。若不是合法值（不是时间值或超出 CSS 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                           | `0s`，或该属性允许的最小值（如果 0s 是不合法的值）。     |
    | `frequency` {{ experimental_inline() }}                                                                          | {{cssxref("&lt;frequency&gt;")}}  | 属性值将被解析为 CSS {{cssxref("&lt;frequency&gt;")}}，带单位，如`12.5kHz`)。若不是合法值（不是频率值或超出 CSS 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                                                                                 | `0Hz`，或该属性允许的最小值（如果 0Hz 是不合法的值）。   |
    | `Hz`, `kHz` {{ experimental_inline() }}                                                                          | {{cssxref("&lt;frequency&gt;")}}  | 属性值将被解析为 CSS {{cssxref("&lt;frequency&gt;")}}，不带单位，如`12.5`)，并被解释为带有所规定单位的{{cssxref("&lt;frequency&gt;")}}值。若不是合法值（不是频率值或超出 CSS 属性规定的范围），则使用默认值。前缀与后缀空格将被截掉。                                                    | `0Hz`，或该属性允许的最小值（如果 0Hz 是不合法的值）。   |
    | `%` {{ experimental_inline() }}                                                                                  | {{cssxref("&lt;percentage&gt;")}} | 属性值将被解析为 CSS {{cssxref("&lt;number&gt;")}}，不带单位，如`12.5`)，并被解释为带有所规定单位的 {{cssxref("&lt;percentage&gt;")}}值。若不是合法值（不是数字或超出 CSS 属性规定的范围），则使用默认值。若属性值用作长度，`attr()`将其计算为绝对长度。前缀与后缀空格将被截掉。         | `0%`，或该属性允许的最小值（如果 0% 是不合法的值）。     |

- `<fallback>`
  - : 如果 HTML 元素缺少所规定的属性值或属性值不合法，则使用`fallback`值。该值必须合法，且不能包含另一个`attr()`表达式。如果`attr()`不是所在 CSS 属性值的唯一值，其`<fallback>`值必须为`<type-or-unit>`所指定的类型，否则 CSS 会使用相应`<type-or-unit>`定义的默认值（见上表）。

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
  颜色应该是红色而不是绿色因为浏览器并不支持 attr() 的高级用法
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
  background-color: attr(data-background color, red);
}
```

{{EmbedLiveSample("示例 2", "100%", 50)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Attribute selectors](/zh-CN/docs/Web/CSS/Attribute_selectors)
- [HTML `data-*` attributes](/zh-CN/docs/Web/HTML/Global_attributes/data-*)
- [SVG `data-*` attributes](/zh-CN/docs/Web/SVG/Attribute/data-*)
