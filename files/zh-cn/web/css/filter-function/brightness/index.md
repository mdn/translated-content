---
title: brightness()
slug: Web/CSS/filter-function/brightness
---

{{CSSRef}}

**`brightness()`** [CSS](/zh-CN/docs/Web/CSS)函数将线性乘数应用于输入图像，使其看起来更亮或更暗。结果是一个{{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## 语法

```plain
brightness(amount)
```

### 值

- `amount`
  - : 输出的亮度值取决于{{cssxref("&lt;number&gt;")}}或{{cssxref("&lt;percentage&gt;")}}的大小。低于`100%` 的值会使图片变暗，超过`100%`的值将会使其变亮。当值为`0%`时将会创建一个全黑的图像，当值为`100%`时不会有任何变化。该值为空时默认为`1`.

## 例子

```css
brightness(0%)   /* 全黑 */
brightness(0.4)  /* 40% 亮度 */
brightness(1)    /* 无效果 */
brightness(200%) /* 两倍亮度 */
```

## 参见

- {{cssxref("&lt;filter-function&gt;")}}
