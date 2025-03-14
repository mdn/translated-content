---
title: image-orientation
slug: Web/CSS/image-orientation
---

{{CSSRef}}

CSS 属性 **`image-orientation`** 用来修正某些图片的预设方向。

> [!NOTE]
>
> - 该属性不是用来对图片进行任意角度旋转的，它是用来修正那些带有不正确的预设方向的图片的。因此该属性值会被四舍五入到 90 度的整数倍。
> - Similarly this property is not intented to handle the layout -> portrait changing. As `image-orientation` affects only images, it won't work: the changes must happen at the layout-level

{{cssinfo}}

## 语法

```css
/* 关键字值 */
image-orientation: none;
image-orientation: from-image; /* 使用图片的 EXIF 数据 */

/* 全局值 */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

### 属性值

- `from-image`
  - : 根据图片的 EXIF 数据来旋转图片，EXIF 中有一个控制图片旋转度的属性。
- `<angle>`
  - : 图片旋转值 {{cssxref("&lt;angle&gt;")}} , 会被自动四舍五入到 `90deg` (`0.25turn`) 的整数倍。
- `flip`
  - : 对图片进行水平翻转，先进行第二个参数执行的旋转，再进行此次翻转。

## 形式语法

{{cssinfo}}

## 形式定义

{{csssyntax}}

## 示例

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他和图片相关的 CSS 属性：{{cssxref("image-rendering")}}、{{cssxref("image-resolution")}}。
