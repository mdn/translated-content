---
title: transform-style
slug: Web/CSS/Reference/Properties/transform-style
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`transform-style`** 设置元素的子元素是位于 3D 空间中还是平面中。

{{InteractiveExample("CSS Demo: transform-style")}}

```css interactive-example-choice
transform-style: flat;
```

```css interactive-example-choice
transform-style: preserve-3d;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all layer" id="example-element">
    <p>Parent</p>
    <div class="numeral"><code>rotate3d(1, 1, 1, 45deg)</code></div>
  </div>
</section>
```

```css interactive-example
.layer {
  background: #623e3f;
  border-radius: 0.75rem;
  color: white;
  transform: perspective(200px) rotateY(30deg);
}

.numeral {
  background-color: #ffba08;
  border-radius: 0.2rem;
  color: #000;
  margin: 1rem;
  padding: 0.2rem;
  transform: rotate3d(1, 1, 1, 45deg);
}
```

如果选择平面，元素的子元素将不会有 3D 的遮挡关系。

由于这个属性不会被继承，因此必须为元素的所有非叶子子元素设置它。

## 语法

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### 值

- `flat`
  - : 设置元素的子元素位于该元素的平面中。
- `preserve-3d`
  - : 指示元素的子元素应位于 3D 空间中。

### 正式语法

{{csssyntax}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS transforms](/zh-CN/docs/Web/CSS/Guides/Transforms/Using)
