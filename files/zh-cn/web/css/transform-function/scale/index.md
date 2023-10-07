---
title: scale()
slug: Web/CSS/transform-function/scale
---

{{CSSRef}}

CSS 函数 `scale()` 用于修改元素的大小。可以通过向量形式定义的缩放值来放大或缩小元素，同时可以在不同的方向设置不同的缩放值。

{{EmbedInteractiveExample("pages/css/function-scale.html")}}

该变换通过一个二维向量确定在一个方向缩放的多少。如果缩放向量的两个坐标是相等的，那么所讲是均等的，或者说是各向同的，同时元素的形状是被保持的。这种情况下进行的是位似变换。

当坐标值处于区间 `[-1, 1]` 之外时，该变换将在相应的坐标方向上放大该元素，当处在区间之中时，该变换将在相应的坐标方向上缩小该元素。当值为 1 时将不进行任何处理，当为负数时，将进行*像素点反射*之后再进行大小的修改。

> **备注：** `scale()` 仅适用于在欧几里德平面（二维平面）上的变换。如果需要进行空间中的缩放，必须使用 `scale3D()` 。

## 语法

```css
scale(sx)
```

或

```css
scale(sx, sy)
```

## 值

- _sx_
  - : {{cssxref("&lt;number&gt;")}}，表示缩放向量的横坐标。
- _sy_
  - : {{cssxref("&lt;number&gt;")}} ，表示缩放向量的纵坐标。如果未设置，则他的默认值被设置为 _**sx**_。从而使得元素在保持原有形状下均等缩放

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">ℝ<sup>2</sup>上的笛卡尔坐标变换</th>
      <th scope="col">ℝℙ<sup>2</sup>上的齐次坐标变换</th>
      <th scope="col">ℝ<sup>3</sup>上的笛卡尔坐标变换</th>
      <th scope="col">ℝℙ<sup>3</sup>上的齐次坐标变换</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>sx</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>sy</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## 示例

### 单一维度缩放

#### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  /* 等同于变换：scaleX(2) scaleY(2);*/
  transform: scale(2);
  background-color: blue;
}
```

#### 结果

{{EmbedLiveSample("单一维度缩放","100%","200")}}

### 在 X 和 Y 两个维度缩放并移动缩放中心

#### HTML

```html
<p>foo</p>
<p class="transformed">bar</p>
```

#### CSS

```css
p {
  width: 50px;
  height: 50px;
  background-color: teal;
}

.transformed {
  /* 等同于 scaleX(2) scaleY(0.5) */
  transform: scale(2, 0.5);
  transform-origin: left;
  background-color: blue;
}
```

#### 结果

{{EmbedLiveSample("在 X 和 Y 两个维度缩放并移动缩放中心","100%","200")}}

## 规范

{{Specifications}}
