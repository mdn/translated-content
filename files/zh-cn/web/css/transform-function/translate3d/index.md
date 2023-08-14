---
title: translate3d()
slug: Web/CSS/transform-function/translate3d
---

{{CSSRef}}

`translate3d()` CSS 函数在 3D 空间内移动一个元素的位置。这个移动由一个三维向量来表达，分别表示他在三个方向上移动的距离。

## 语法

```
translate3d(tx, ty, tz)
```

## 常量

- `tx`
  - : 是一个 {{cssxref("&lt;length&gt;")}} 代表移动向量的横坐标。
- `ty`
  - : 是一个{{cssxref("&lt;length&gt;")}} 代表移动向量的纵坐标。
- `tz`
  - : 是一个 {{cssxref("&lt;length&gt;")}} 代表移动向量的 z 坐标。它不能是{{cssxref("&lt;percentage&gt;")}} 值；那样的移动是没有意义的。

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
      <td colspan="2" rowspan="2">
        <p>此变换适用于 3D 空间，并不适用于这两种情况。</p>
      </td>
      <td colspan="1" rowspan="2">
        <p>平移不是ℝ<sup>3</sup>中的线性变换，不能使用笛卡尔坐标矩阵表示。</p>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 单轴变化示例

#### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
<p>foo</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  transform: perspective(500px) translate3d(10px, 0px, 0px);
  /* equivalent to perspective(500px) translateX(10px)*/
  background-color: blue;
}
```

### 结果

{{EmbedLiveSample("单轴变化示例","100%","250")}}

### z 轴与 x 轴变化

#### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
<p>foo</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  transform: perspective(500px) translate3d(10px, 0px, 100px);
  background-color: blue;
}
```

### 结果

{{EmbedLiveSample("z 轴与 x 轴变化","100%","250")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
