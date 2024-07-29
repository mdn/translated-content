---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

**`mask-border-slice`** [CSS](/zh-CN/docs/Web/CSS) 属性将 {{cssxref("mask-border-source")}} 设置的图像划分为多个区域。这些区域用于构成元素的[遮罩边框](/zh-CN/docs/Web/CSS/mask-border)部分。

## 语法

```css
/* 所有四条边 */
mask-border-slice: 30%;

/* 顶部和底部 | 左侧和右侧 */
mask-border-slice: 10% 30%;

/* 顶部 | 左侧和右侧 | 底部 */
mask-border-slice: 30 30% 45;

/* 顶部 | 右侧 | 底部 | 左侧 */
mask-border-slice: 7 12 14 5;

/* 使用 `fill` 关键字 */
mask-border-slice: 10% fill 7 12;

/* 全局值 */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: revert;
mask-border-slice: revert-layer;
mask-border-slice: unset;
```

`mask-border-slice` 属性可以使用 1 到 4 个 `<number-percentage>` 值指定，以表示每个图像切片的位置。负值无效；大于相应尺寸的值会被截止为 `100%`。

- 指定**一个**位置时，会在距离各自侧面相同的距离创建所有四个切片。
- 指定**两个**位置时，第一个值将创建从**顶部和底部**测量的切片，第二个值将创建从**左侧和右侧**测量的切片。
- 指定**三个**位置时，第一个值创建从**顶部**测量的切片，第二个值创建从**左侧和右侧**测量的切片，第三个值创建从**底部**测量的切片。
- 指定**四个**位置时，它们将依次（顺时针）创建从**顶部**、**右侧**、**底部**和**左侧**测量的切片。

如果使用了可选值 `fill`，则可以将其放置在声明中的任何位置。

### 值

- {{cssxref("&lt;number&gt;")}}
  - : 对于光栅图像，用*像素*表示边缘偏移；对于矢量图像，用*坐标*表示边缘偏移。对于矢量图像，该数字是相对于元素的大小而不是源图像的大小而言的，因此在这种情况下通常使用百分比更为可取。
- {{cssxref("&lt;percentage&gt;")}}
  - : 表示边缘偏移量占源图像大小的百分比：水平偏移量为图像的宽度，垂直偏移量为图像的高度。
- `fill`
  - : 保留中间图像区域。其宽度和高度的大小分别与顶部和左侧图像区域相匹配。

## 描述

切片过程总共创建九个区域：四个角、四条边和一个中间区域。四条切片线从各自的边上设置一定的距离，控制区域的大小。

![由 border-image 或 border-image-slice 属性定义的九个区域](border-image-slice.png)

- 1-4 区为边角区域。每个区域只使用一次，以形成最终边框图像的边角。
- 5-8 区为边缘区域。这些区域会在最终边框图像中进行[重复、缩放或其他修改](/zh-CN/docs/Web/CSS/mask-border-repeat)，以匹配元素的尺寸。
- 区域 9 是中间区域。默认情况下它被丢弃，但如果设置了关键字 `fill`，它就会像背景图片一样被使用。

{{cssxref("mask-border-repeat")}}、{{cssxref("mask-border-width")}} 和 {{cssxref("mask-border-outset")}} 属性决定了这些区域如何用于形成最终的蒙版边框。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基本用法

该属性似乎在任何地方都不受支持。最终开始受支持时，它将用于定义从源图像获取的切片的大小，并用于创建边框蒙版。

```css
mask-border-slice: 30 fill;
```

基于 Chromium 的浏览器支持此属性的过时版本 `mask-box-image-slice`，带有前缀：

```css
-webkit-mask-box-image-slice: 30 fill;
```

> **备注：** [`mask-border`](/zh-CN/docs/Web/CSS/mask-border) 页面提供了一个有效的示例（使用 Chromium 支持的过期前缀边框蒙版属性），因此你可以大致了解效果。

> [!NOTE]
> 如果希望元素的内容可见，则必须包含 fill 关键字。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
- [1 到 4 值语法的图解说明](/zh-CN/docs/Web/CSS/Shorthand_properties#棘手的边界情况)
