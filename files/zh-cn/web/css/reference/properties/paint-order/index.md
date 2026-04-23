---
title: paint-order
slug: Web/CSS/Reference/Properties/paint-order
---

[CSS](/zh-CN/docs/Web/CSS) **`paint-order`** 属性可以让你控制文本区域和图形绘制的填充和绘制（和 markers）的顺序

## 语法

```css
/*默认 */
paint-order: normal;

/* 单一属性 */
paint-order: stroke; /* 先描边，然后填充，markers*/
paint-order: markers; /* 先绘制 markers, 然后填充，描边 */

/* 多属性 */
paint-order: stroke fill; /* 先描边，然后填充，然后 markers */
paint-order: markers stroke fill; /* 先 markers, 然后 stroke, 然后 fill */
```

如果没有指定值，默认顺序将是 `fill`, `stroke`, `markers`.

当只指定一个值的时候，这个值将会被首先渲染，然后剩下的两个值将会以默认顺序渲染，当只指定两个值的时候，这两个值会以指定的顺序渲染，接着渲染剩下的未指定的那个。

> [!NOTE]
> 在这个属性的值当中，markers 只有当在绘制 SVG 图形时引用了 `marker-*`属性（例如 [`marker-start`](/zh-CN/docs/Web/SVG/Reference/Attribute/marker-start)）和 [`<marker>`](/zh-CN/docs/Web/SVG/Reference/Element/marker) 元素才能进行控制。他们不适用于 HTML 文本，所以，这样的话，你只能决定 `stroke` 和 `fill` 的顺序。

### 属性值

- `normal`
  - : 用正常的顺序渲染不同的元素
- `stroke`,
  `fill`,

  `markers`
  - : 指定一部分或者全部这些属性的渲染顺序

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p>Stroke in front</p>

<p class="stroke-behind">Stroke behind</p>
```

### CSS

```css
p {
  font-family: sans-serif;
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
  -webkit-text-stroke: 5px red;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

### 结果

{{EmbedLiveSample('示例', '100%', 165)}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}
