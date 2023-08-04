---
title: skewX()
slug: Web/CSS/transform-function/skewX
---

{{CSSRef}}

**`skewX()`** 函数定义了一个转换，该转换将元素倾斜到二维平面上的水平方向。它的结果是一个{{cssxref("&lt;transform-function&gt;")}}数据类型。

{{EmbedInteractiveExample("pages/css/function-skewX.html")}}

这种转换是一种剪切映射 (横切)，它在水平和垂直方向上将单元内的每个点扭曲一定的角度。每个点的坐标根据指定的角度以及到原点的距离，进行成比例的值调整；因此，一个点离原点越远，其增加的值就越大。

> **备注：** `skewX(a)` 相当于 `skew(a)`。

## 语法

```css
skewX(a)
```

### 参数值

- `a`
  - : `a` 是一个 {{cssxref("&lt;angle&gt;")}}，表示用于沿横坐标扭曲元素的角度。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">笛卡儿坐标 ℝ<sup>2</sup></th>
      <th scope="col">齐次坐标 ℝℙ<sup>2</sup></th>
      <th scope="col">笛卡儿坐标 ℝ<sup>3</sup></th>
      <th scope="col">齐次坐标 ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd></mtr
              ><mtr>0<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 tan(a) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## 示例

### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skewX(10deg); /* Equal to skew(10deg) */
  background-color: pink;
}
```

### 结果

{{EmbedLiveSample("示例", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
