---
title: blur()
slug: Web/CSS/filter-function/blur
---

{{CSSRef}}

**`blur()`** [CSS](/zh-CN/docs/Web/CSS) 方法将[高斯模糊](https://en.wikipedia.org/wiki/Gaussian_blur)应用于输出图片。结果为 {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## 语法

```plain
blur(radius)
```

### 值

- `radius`
  - : 模糊的半径，值为{{cssxref("&lt;length&gt;")}}。它定义了高斯函数的标准偏差值，即屏幕上有多少像素相互融合; 因此，较大的值会产生更多模糊。值为 0 会使输入保持不变。该值为空则为 0。

## 示例

```css
blur(0)        /* No effect */
blur(8px)      /* Blur with 8px radius */
blur(1.17rem)  /* Blur with 1.17rem radius */
```

## 参见

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
