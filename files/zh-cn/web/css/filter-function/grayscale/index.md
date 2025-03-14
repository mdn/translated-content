---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
---

{{CSSRef}}

**`grayscale()`** : 对图片进行灰度转换，它是 {{cssxref("&lt;filter-function&gt;")}} 的子属性。

{{InteractiveExample("CSS Demo: grayscale()")}}

```css interactive-example-choice
filter: grayscale(0);
```

```css interactive-example-choice
filter: grayscale(0.2);
```

```css interactive-example-choice
filter: grayscale(60%);
```

```css interactive-example-choice
filter: grayscale(1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

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
