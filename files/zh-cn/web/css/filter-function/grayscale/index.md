---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
---

{{CSSRef}}

**`grayscale()`** : 对图片进行灰度转换，它是 {{cssxref("&lt;filter-function&gt;")}} 的子属性。

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## 语法

```plain
grayscale(amount)
```

### 参数

- `amount`
  - : 转换值的大小，可以是{{cssxref("&lt;number&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}. 当值为 100% 时，灰度最大。0% 时与原图没有区别。0% 到 100% 之间的值会使灰度线性变化。amount 为空时使用值为`1`.

## 例子

```css
grayscale(0)     /* 无效果 */
grayscale(.7)    /* 70% 灰度 */
grayscale(100%)  /* 灰度最大 */
```

## 更多

- {{cssxref("&lt;filter-function&gt;")}}
