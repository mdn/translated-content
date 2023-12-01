---
title: translate()
slug: Web/CSS/transform-function/translate
---

{{CSSRef}}

**`translate()`** 这个 [CSS](/zh-CN/docs/Web/CSS) 函数在水平和/或垂直方向上重新定位元素。其结果是 {{cssxref("&lt;transform-function&gt;")}} 类型。

{{EmbedInteractiveExample("pages/css/function-translate.html")}}

该变换由二维向量构成。它的坐标定义了元素在每个方向上移动了多少。

## 语法

```css
/* Single <length-percentage> values */
transform: translate(200px);
transform: translate(50%);

/* Double <length-percentage> values */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### 值

- 单个 `<length-percentage>` 作为参数
  - : 该值是 {{cssxref("&lt;length&gt;")}} 或者 {{cssxref("&lt;percentage&gt;")}} 代表翻译向量的横坐标 (horizontal, x-coordinate) . 而向量的纵坐标 (vertical, y-coordinate) 会被默认为 `0`. 例如，`translate(2)` 等价于 `translate(2, 0)` 。里面还可以填百分比值，百分比值是指 {{cssxref("transform-box")}} 属性定义的参考框的宽度。
- 参数是两个 `<length-percentage>` 构成
  - : 此值描述两个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 值，分别代表翻译的横坐标 (x-coordinate) 和纵坐标 (y-coordinate) 向量。百分比作为第一个值表示宽度，第二个部分表示由 {{cssxref("transform-box")}} 属性定义的参考框的高度。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ<sup>2</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>2</sup></th>
      <th scope="col">Cartesian coordinates on ℝ<sup>3</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <p>平移不是 ℝ<sup>2</sup> 中的线性变换，因此不能使用矩阵来表示。</p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

### 形式语法

```css
translate({{cssxref("&lt;length-percentage&gt;")}}, {{cssxref("&lt;length-percentage&gt;")}}?)
```

## 示例

### 使用单个轴平移

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(
    10px
  ); /* Equal to: translateX(10px) or translate(10px, 0) */
  background-color: pink;
}
```

#### 结果

{{EmbedLiveSample("使用单个轴平移", 250, 250)}}

### y 轴和 x 轴都平移

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### 结果

{{EmbedLiveSample("y 轴和 x 轴都平移", 250, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
