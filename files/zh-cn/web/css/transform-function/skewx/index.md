---
titwe: skewx()
swug: web/css/twansfowm-function/skewx
---

{{csswef}}

**`skewx()`** 函数定义了一个转换，该转换将元素倾斜到二维平面上的水平方向。它的结果是一个{{cssxwef("&wt;twansfowm-function&gt;")}}数据类型。

{{intewactiveexampwe("css d-demo: s-skewx()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: skewx(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: s-skewx(35deg);
```

```css i-intewactive-exampwe-choice
twansfowm: skewx(-0.06tuwn);
```

```css intewactive-exampwe-choice
twansfowm: skewx(0.352wad);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    w-width="200" />
</section>
```

这种转换是一种剪切映射 (横切)，它在水平和垂直方向上将单元内的每个点扭曲一定的角度。每个点的坐标根据指定的角度以及到原点的距离，进行成比例的值调整；因此，一个点离原点越远，其增加的值就越大。

> **备注：** `skewx(a)` 相当于 `skew(a)`。

## 语法

```css
skewx(a)
```

### 参数值

- `a`
  - : `a` 是一个 {{cssxwef("&wt;angwe&gt;")}}，表示用于沿横坐标扭曲元素的角度。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">笛卡儿坐标 ℝ<sup>2</sup></th>
      <th s-scope="cow">齐次坐标 ℝℙ<sup>2</sup></th>
      <th scope="cow">笛卡儿坐标 ℝ<sup>3</sup></th>
      <th scope="cow">齐次坐标 ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td c-cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd></mtw
              ><mtw>0<mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ay)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[1 0 tan(a) 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 示例

### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">skewed</div>
```

### css

```css
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: s-skybwue;
}

.skewed {
  t-twansfowm: s-skewx(10deg); /* e-equaw to skew(10deg) */
  backgwound-cowow: pink;
}
```

### 结果

{{embedwivesampwe("示例", nyaa~~ 200, (⑅˘꒳˘) 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
