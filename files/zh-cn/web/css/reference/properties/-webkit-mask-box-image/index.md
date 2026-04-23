---
title: "`-webkit-mask-box-image` CSS 属性"
short-title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{ Non-standard_header() }}

**`-webkit-mask-box-image`** [CSS](/zh-CN/docs/Web/CSS) 属性是一个非标准的带前缀[简写](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)，用于为元素的边框盒设置遮罩图像。

> [!NOTE]
> 此属性不属于标准，也未纳入任何标准轨道。请考虑改用 {{cssxref("mask-border")}} 属性。

## 构成属性

该属性是以下 CSS 属性的简写：

- {{cssxref("mask-border-source", "-webkit-mask-border-source")}}
- {{cssxref("mask-border-outset", "-webkit-mask-border-outset")}}
- {{cssxref("mask-border-repeat", "-webkit-mask-border-repeat")}}

其取值包括用作遮罩边框的 `<image>`，以及可选的四个边框外扩值和最多两种边框重复样式。

## 语法

```css
/* 默认值 */
-webkit-mask-box-image: none;

/* 图像 */
-webkit-mask-box-image: url("image.png");

/* 图像与边缘偏移 */
-webkit-mask-box-image: url("image.png") 10 20 20 10;
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px;

/* 图像与重复方式 */
-webkit-mask-box-image: url("image.png") space repeat;

/* 图像、边缘偏移与重复方式 */
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px space repeat;

/* 全局值 */
-webkit-mask-box-image: inherit;
-webkit-mask-box-image: initial;
-webkit-mask-box-image: revert;
-webkit-mask-box-image: revert-layer;
-webkit-mask-box-image: unset;
```

### 值

- {{cssxref("&lt;image&gt;")}}
  - : 作为遮罩图像使用的图像资源的位置、{{cssxref("gradient")}} 或其他 {{cssxref("&lt;image&gt;")}} 取值。
- `none`
  - : 表示边框盒不使用遮罩图像。
- {{cssxref("&lt;length&gt;")}}
  - : 遮罩图像偏移的大小。可用单位见 {{cssxref("&lt;length&gt;")}}。
- {{cssxref("&lt;percentage&gt;")}}
  - : 遮罩图像的偏移为百分比，相对于边框盒对应方向的尺寸（宽度或高度）。
- {{cssxref("&lt;number&gt;")}}
  - : 遮罩图像偏移的像素大小。
- `repeat`
  - : 遮罩图像重复足够多次以铺满边框盒。若遮罩图像无法被边框盒尺寸整除分块，末端可能出现不完整的图像。
- `stretch`
  - : 拉伸遮罩图像使其恰好填满边框盒。
- `round`
  - : 将遮罩图像略作拉伸并重复，使边框盒末端不会出现不完整的遮罩图像。
- `space`
  - : 在不拉伸的前提下尽可能多次重复遮罩图像。边框盒末端不会出现不完整的遮罩图像。

外扩值（或称边缘偏移）按上、右、下、左的顺序，表示从图像相应边缘起算的距离。可取值为 {{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;number&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}，其中数字会按像素长度解释。

若写出边框重复样式，则按 `<repeat-x> <repeat-y>` 的顺序解释；若只声明一个值，则两个轴使用相同取值。其行为与 {{cssxref("background-repeat")}} 类似，但不支持 `cover` 和 `contain`。

## 形式定义

- [初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)：`none`
- 适用于：所有元素
- [继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)：否
- [计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)：按指定值

## 形式语法

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## 示例

### 设置图像

```css
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### 偏移并填充图像

```css
.example-two {
  -webkit-mask-box-image: url("logo.png") 100px 100px 0px 0px round round;
}
```

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}

## 参见

- CSS {{cssxref("mask-border")}} 属性
- CSS {{cssxref("border-image")}} 属性
- [Safari CSS 参考：`-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
