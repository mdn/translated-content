---
title: border-image-source
slug: Web/CSS/border-image-source
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**`border-image-source`** [CSS](/zh-CN/docs/Web/CSS) 属性设置用以创建元素[边框图像](/zh-CN/docs/Web/CSS/border-image)的源图像。

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

{{cssxref("border-image-slice")}} 属性用于将源图像分割为多个区域，然后动态地应用到最终的边框图像。

## 语法

```css
/* 关键字值 */
border-image-source: none;

/* <image> 值 */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* 全局值 */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: revert-layer;
border-image-source: unset;
```

### 值

- `none`
  - : 不使用边框图像，而由 {{cssxref("border-style")}} 定义所展现的外观。
- {{cssxref("&lt;image&gt;")}}
  - : 用作边框的图片引用。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 基础示例

```css
.box {
  border-image-source: url("image.png");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url_value", "&lt;url&gt;")}} 类型
- MDN 博客：[CSS 中的边框图像：Interop 2023 的重点关注领域](/en-US/blog/border-images-interop-2023/)（2023）
