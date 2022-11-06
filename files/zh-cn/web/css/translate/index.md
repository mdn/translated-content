---
title: translate
slug: Web/CSS/translate
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`translate`** 允许你单独声明平移变换，并独立于 {{cssxref("transform")}} 属性。这在一些典型的用户界面上更好用，而且这样就无需在 `transform` 中声明该函数并记住转换函数的确切顺序了。

## 语法

```css
/* Keyword values */
translate: none;

/* Single values */
translate: 100px;
translate: 50%;

/* Two values */
translate: 100px 200px;
translate: 50% 105px;

/* Three values */
translate: 50% 105px 5rem;
```

### 值

- 单个长度/百分比值
  - : 一个长度值或百分比，表示二维平移，与声明了 X 轴和 Y 轴的平移一样（此时省略的第二个值默认为 0）。等同于在 `translate()` 函数（2D 平移）中指定单个值。
- 两个长度/百分比值
  - : 两个长度值或百分比表示在二维上分别按照指定 X 轴和 Y 轴的值进行的平移。等同于在 `translate()` 函数（2D 平移）中函数指定两个值。
- 三个长度/百分比值
  - : 三个长度值或百分比，表示分别指定 X 轴、Y 轴、Z 轴的值进行三维平移。等同于`translate3d()` 函数（3D 平移）。
- `none`
  - : 表示不应用平移效果。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div>
  <p class="translate">Translation</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.translate {
  transition: translate 1s;
}

div:hover .translate {
  translate: 200px 50px;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

注意：skew 不是一个独立的变换属性。
