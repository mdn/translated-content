---
title: background
slug: Web/CSS/background
---

{{CSSRef("CSS Background")}}

**`background`** 是一种 [CSS](/zh-CN/docs/Web/CSS) 简写属性，用于一次性集中定义各种背景属性，包括 color, image, origin 与 size, repeat 方式等等。

{{EmbedInteractiveExample("pages/css/background.html")}}

此属性是一个 [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)，可以在一次声明中定义一个或多个属性：{{cssxref("background-clip")}}、{{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("background-origin")}}、{{cssxref("background-position")}}、{{cssxref("background-repeat")}}、{{cssxref("background-size")}}，和 {{cssxref("background-attachment")}}。

对于所有简写属性，任何没有被指定的值都会被设定为它们的 [初始值](/zh-CN/docs/Web/CSS/initial_value)。

## 语法

```css
/* 使用 <background-color> */
background: green;

/* 使用 <bg-image> 和 <repeat-style> */
background: url("test.jpg") repeat-y;

/* 使用 <box> 和 <background-color> */
background: border-box red;

/* 将背景设为一张居中放大的图片 */
background: no-repeat center/80% url("../img/image.png");
```

`background` 属性被指定多个背景层时，使用逗号分隔每个背景层。

每一层的语法如下：

- 在每一层中，下列的值可以出现 0 次或 1 次：

  - [`<attachment>`](#attachment)
  - [`<bg-image>`](#bg-image)
  - [`<position>`](#position)
  - [`<bg-size>`](#bg-size)
  - [`<repeat-style>`](#repeat-style)

- [`<bg-size>`](#bg-size) 只能紧接着 [`<position>`](#position) 出现，以"/"分割，如： "`center/80%`".
- [`<box>`](#box) 可能出现 0 次、1 次或 2 次。如果出现 1 次，它同时设定 {{cssxref("background-origin")}} 和 {{cssxref("background-clip")}}。如果出现 2 次，第一次的出现设置 {{cssxref("background-origin")}}，第二次的出现设置 {{cssxref("background-clip")}}。
- [`<background-color>`](#background-color) 只能被包含在最后一层。

> **备注：** {{cssxref("background-color")}} 只能在 background 的最后一个属性上定义，因为整个元素只有一种背景颜色。

## 值

下面的一个或多个值，可以按任意顺序放置：

- `<attachment>`
  - : 参见 {{ cssxref("background-attachment") }}
- `<box>`
  - : 参见 {{ cssxref("background-clip") }} 和 {{cssxref("background-origin")}}
- `<background-color>`
  - : 参见 {{ cssxref("background-color") }}
- `<bg-image>`
  - : 参见 {{ Cssxref("background-image") }}
- `<position>`
  - : 参见 {{ cssxref("background-position") }}
- `<repeat-style>`
  - : 参见 {{ cssxref("background-repeat") }}
- `<bg-size>`
  - : 参见 {{ cssxref("background-size") }}。

### 标准语法

{{csssyntax}}

## 示例

### HTML

```html
<p class="topbanner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">Here is a paragraph</p>
<p></p>
```

### CSS

```css
.warning {
  background: red;
}

.topbanner {
  background: url("starsolid.gif") #99f repeat-y fixed;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ cssxref("-moz-background-size") }}, {{ cssxref("-moz-background-inline-policy") }}
- [使用渐变背景](/zh-CN/docs/CSS/Using_CSS_gradients)
- [多重背景](/zh-CN/docs/CSS/Multiple_backgrounds)
