---
title: skewY()
slug: Web/CSS/Reference/Values/transform-function/skewY
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`skewY()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)用于定义在二维平面上沿垂直方向倾斜元素的变换。其结果是 {{cssxref("&lt;transform-function&gt;")}} 数据类型。

{{InteractiveExample("CSS 演示：skewY()")}}

```css interactive-example-choice
transform: skewY(0);
```

```css interactive-example-choice
transform: skewY(35deg);
```

```css interactive-example-choice
transform: skewY(-0.06turn);
```

```css interactive-example-choice
transform: skewY(0.352rad);
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

此类变换是一种[剪切影射](https://zh.wikipedia.org/wiki/错切)，它会将元素内的每个点在垂直方向上按一定的角度进行扭曲。每个点的纵坐标（垂直方向，y 坐标）会根据指定的角度和该点到原点的距离按比例进行调整；因此，离原点越远的点，其被调整的值就越大。

## 语法

```css
skewY(a)
```

### 值

- `a`
  - : 一个表示沿纵坐标（垂直方向，y 坐标）扭曲元素的角度的 {{cssxref("&lt;angle&gt;")}}。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a> 上的<a href="/zh-CN/docs/Web/CSS/Reference/Values/transform-function#笛卡尔坐标">笛卡尔坐标</a></th>
      <th scope="col"><a href="https://zh.wikipedia.org/wiki/实射影平面">ℝℙ^2</a> 上的<a href="https://zh.wikipedia.org/wiki/齐次坐标">齐次坐标</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a> 上的笛卡尔坐标</th>
      <th scope="col"><a href="https://zh.wikipedia.org/wiki/实射影空间">ℝℙ^3</a> 上的齐次坐标</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} 1 & 0 \\ \tan(a) & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ \tan(a) & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ \tan(a) & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ \tan(a) & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[1 tan(a) 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## 形式语法

{{CSSSyntax}}

## 示例

### HTML

```html
<div>正常</div>
<div class="skewed">倾斜</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skewY(40deg);
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
- 各变换属性：
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - 注意：没有 `skew` 属性
