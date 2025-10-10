---
title: -webkit-device-pixel-ratio
slug: Web/CSS/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/@media#媒体特性) **`-webkit-device-pixel-ratio`** 是一个非标准的布尔型，它是标准 [`resolution`](/zh-CN/docs/Web/CSS/@media/resolution) 媒体特性的替代方案。

> [!NOTE]
> 如果可以，请改用标准的 [`resolution`](/zh-CN/docs/Web/CSS/@media/resolution) 媒体特性查询。虽然此前缀媒体特性是 WebKit 特性，但其他浏览器引擎也可能支持它。详见下文的[浏览器兼容性](#浏览器兼容性)。

## 语法

`-webkit-device-pixel-ratio` 特性被指定为一个 {{cssxref("&lt;number&gt;")}} 类型的值。它是一个范围特性，这意味着你还可以使用带前缀的 **`-webkit-min-device-pixel-ratio`** 和 **`-webkit-max-device-pixel-ratio`** 变体，分别用于查询最小值和最大值。

### 值

- {{cssxref("&lt;number&gt;")}}
  - : 用于表示每个 CSS [`px`](/zh-CN/docs/Web/CSS/length#绝对长度单位) 所对应的设备像素数量。虽然该值是一个 `<number>`（因此在语法上不允许带单位），但它的隐含单位是 [`dppx`](/zh-CN/docs/Web/CSS/resolution#单位)。

## 实现

```css
/* 隐含的单位是“dppx”： */
@media (-webkit-min-device-pixel-ratio: 2) {
  /* … */
}
/* 它等价于： */
@media (min-resolution: 2dppx) {
  /* … */
}

/* 类似于： */
@media (-webkit-max-device-pixel-ratio: 2) {
  /* … */
}
/* 它等价于： */
@media (max-resolution: 2dppx) {
  /* … */
}
```

## 示例

### HTML

```html
<p>这是对你设备像素密度的测试。</p>
```

### CSS

```css
/* 精确分辨率 */
@media (-webkit-device-pixel-ratio: 1) {
  p {
    color: red;
  }
}

/* 最小分辨率 */
@media (-webkit-min-device-pixel-ratio: 1.1) {
  p {
    font-size: 1.5em;
  }
}

/* 最大分辨率 */
@media (-webkit-max-device-pixel-ratio: 3) {
  p {
    background: yellow;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("resolution")}}
- [`-webkit-transform-2d`](/zh-CN/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/zh-CN/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transition`](/zh-CN/docs/Web/CSS/@media/-webkit-transition)
- [`-webkit-animation`](/zh-CN/docs/Web/CSS/@media/-webkit-animation)
- [W3C 建议的去前缀方法](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
