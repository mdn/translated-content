---
title: opacity()
slug: Web/CSS/filter-function/opacity
---

{{CSSRef}}

The **`opacity()`** [CSS](/zh-CN/docs/Web/CSS) 函数在输入的图片实例上应用透明度属性，它的结果是一个 {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-opacity.html")}}

> **备注：** 这个函数与其他既有的{{Cssxref("opacity")}}属性类似，区别在于有了 filters，有些浏览器会提供硬件加速以获取更好的性能表现。

## 语法

```plain
opacity(amount)
```

### 参数

- `amount`
  - : 转化的数值，要求是一个 {{cssxref("&lt;number&gt;")}} 或一个 {{cssxref("&lt;percentage&gt;")}}（百分比）。值为 `0%` 是完全透明的，值为 100% 会保留原来的效果。值在 0% 与 100% 之间效果为线性变化的，参数的最小差值为 1。

## Examples

```css
opacity(0%)   /* 完全透明*/
opacity(50%)  /* 50% 透明 */
opacity(1)    /* 无效果 */
```

## See also

- {{cssxref("&lt;filter-function&gt;")}}
- CSS {{cssxref("opacity")}} property
