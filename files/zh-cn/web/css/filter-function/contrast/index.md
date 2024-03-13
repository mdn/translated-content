---
title: contrast()
slug: Web/CSS/filter-function/contrast
---

{{CSSRef}}

**`contrast()`** [CSS](/zh-CN/docs/Web/CSS) 函数调整输入图像的对比度。结果是一个 {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## 语法

```plain
contrast(amount)
```

### 参数

- `amount`
  - : 输出的对比度取决于 {{cssxref("&lt;number&gt;")}}或者{{cssxref("&lt;percentage&gt;")}}的大小。低于 `100%` 的值会降低对比度，高于 `100%` 的值会增加对比度。值为 `0%` 将创建完全灰色的图像，值为 `100%` 时不会有任何变化。该值为空时默认为 `1`.

## 例子

```css
contrast(0)     /* 完全灰色 */
contrast(65%)   /* 65% 对比度 */
contrast(1)     /* 无效果 */
contrast(200%)  /* 两倍对比度 */
```

## 参见

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
