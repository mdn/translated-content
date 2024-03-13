---
title: min-width
slug: Web/CSS/min-width
---

{{CSSRef}}

## 概述

`min-width` 属性为给定元素设置最小宽度。它可以阻止 {{ Cssxref("width") }} 属性的应用值小于 `min-width` 的值。

`min-width 的值会同时覆盖` {{ Cssxref("max-width") }} 和 {{ Cssxref("width") }}。

## 语法

```
形式语法： {{csssyntax("min-width")}}
```

```
/* <length> value */
min-width: 3.5em

/* <percentage> value */
min-width: 10%

/* Keyword values */
min-width: max-content
min-width: min-content
min-width: fit-content
min-width: fill-available

/* Global values */
min-width: inherit
min-width: initial
min-width: unset
```

### 值

- `<length>`
  - : 固定的最小宽度。查看 {{cssxref("&lt;length&gt;")}} 了解可用单位。负值会让该声明失效。
- `<percentage>`
  - : 固定的最小宽度表现为包含块宽度的 {{cssxref("&lt;percentage&gt;")}} (百分比值)。负值会让该声明失效。

#### Keyword values

- `auto`
  - : 用于弹性元素的默认最小宽度。相比其他布局中以`0`为默认值，`auto`能为弹性布局指明更合理的默认表现。
- `max-content` {{ experimental_inline() }}
  - : 固有首选宽度。
- `min-content` {{ experimental_inline() }}
  - : 固有最小宽度
- `fill-available`{{ experimental_inline() }}
  - : 包含块的宽度减去水平 margin、border 和 padding。有些浏览器在实现时使用了该关键字的早期名字： `available`。
- `fit-content` {{ experimental_inline() }}
  - : 等同于 `min(max-content, max(min-content, fill-available)`.

## 示例

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{ Cssxref("width") }}, {{ Cssxref("max-width") }}, {{ Cssxref("min-height") }}
- The [box model](/zh-CN/docs/CSS/box_model), {{ Cssxref("box-sizing") }}
