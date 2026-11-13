---
title: translateX()
slug: Web/CSS/Reference/Values/transform-function/translateX
---

translateX() 函数表示在二维平面上水平方向移动元素。其结果的数据类型是 {{cssxref("&lt;transform-function&gt;")}}。

{{InteractiveExample("CSS 演示：translateX()")}}

```css interactive-example-choice
transform: translateX(0);
```

```css interactive-example-choice
transform: translateX(42px);
```

```css interactive-example-choice
transform: translateX(-2.1rem);
```

```css interactive-example-choice
transform: translateX(3ch);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="static-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

```css interactive-example
#static-element {
  opacity: 0.4;
  position: absolute;
}

#example-element {
  position: absolute;
}
```

> [!NOTE]
> `translateX(tx)`等同于 [translate](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/translate)(tx, 0) 或者 [translate3d](/zh-CN/docs/Web/CSS/Reference/Values/transform-function/translate3d)(tx, 0, 0)。

## 语法

```css
translateX(t)
```

### 参数

- `t`
  - : 代表了向量平移的横坐标长度{{cssxref("&lt;length&gt;")}}。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">ℝ<sup>2</sup>空间中的笛卡尔坐标</th>
      <th scope="col">在ℝℙ<sup>2</sup>上的投影坐标</th>
      <th scope="col">在ℝ<sup>3</sup>上的笛卡尔坐标</th>
      <th scope="col">在ℝℙ<sup>3</sup>上的投影坐标</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <p>
          在ℝ<sup>2 </sup
          >空间中的平移并非线性变化，因此不能表示为笛卡尔坐标矩阵。
        </p>
      </td>
      <td>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr>1 <mtd>0 </mtd><mtd>t</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr>0 <mtd>1 </mtd><mtd>0</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
      </td>
      <td colspan="1" rowspan="2">
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr>1 <mtd>0 </mtd><mtd>t</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr>0 <mtd>1 </mtd><mtd>0</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
      </td>
      <td colspan="1" rowspan="2">
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr>1 <mtd>0 </mtd><mtd>0 </mtd><mtd>t</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr>0 <mtd>1 </mtd><mtd>0 </mtd><mtd>0</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr
                  ><mtd>0 </mtd><mtd>0 </mtd><mtd>1 </mtd><mtd>0</mtd></mtr
                ></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr
                  ><mtd>0 </mtd><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr
                ></mtable
              ></mfenced
            ></math
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 t 0]</code></td>
    </tr>
  </tbody>
</table>

## 示例

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateX(10px); /* 等同于 translate(10px) */
  background-color: pink;
}
```

### 结果

{{EmbedLiveSample("示例", 250, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
