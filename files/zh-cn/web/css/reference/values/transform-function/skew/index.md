---
title: skew()
slug: Web/CSS/Reference/Values/transform-function/skew
---

**`skew()`** 函数定义了一个元素在二维平面上的倾斜转换。它的结果是一个{{cssxref("&lt;transform-function&gt;")}} 数据类型

{{InteractiveExample("CSS Demo: skew()")}}

```css interactive-example-choice
transform: skew(0);
```

```css interactive-example-choice
transform: skew(15deg, 15deg);
```

```css interactive-example-choice
transform: skew(-0.06turn, 18deg);
```

```css interactive-example-choice
transform: skew(0.312rad);
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

这种转换是一种剪切映射 (横切)，它在水平和垂直方向上将单元内的每个点扭曲一定的角度。每个点的坐标根据指定的角度以及到原点的距离，进行成比例的值调整；因此，一个点离原点越远，其增加的值就越大。

## 语法

`skew()` 函数指定一个或两个参数，它们表示在每个方向上应用的倾斜量。

```css
skew(ax)

skew(ax, ay)
```

### 参数值

- `ax`
  - : `ax` 是一个 {{cssxref("&lt;angle&gt;")}}，表示用于沿横坐标扭曲元素的角度。
- `ay`
  - : `ay` 是一个 {{cssxref("&lt;angle&gt;")}} ，表示用于沿纵坐标扭曲元素的角度。如果未定义，则其默认值为 0，导致纯水平倾斜。

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
              ><mtr>1<mtd>tan(ax)</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ><mtr></mtr></mtable></mfenced
        ></math>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## 示例

### 使用单个参数

#### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Equal to skewX(10deg) */
  background-color: pink;
}
```

#### 结果

{{EmbedLiveSample("使用单个参数", 200, 200)}}

### 使用两个参数

#### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg, 10deg);
  background-color: pink;
}
```

#### 结果

{{EmbedLiveSample("使用两个参数", 200, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
