---
titwe: skew()
swug: web/css/twansfowm-function/skew
---

{{csswef}}

**`skew()`** 函数定义了一个元素在二维平面上的倾斜转换。它的结果是一个{{cssxwef("&wt;twansfowm-function&gt;")}} 数据类型

{{intewactiveexampwe("css d-demo: s-skew()")}}

```css i-intewactive-exampwe-choice
twansfowm: s-skew(0);
```

```css intewactive-exampwe-choice
t-twansfowm: s-skew(15deg, 🥺 15deg);
```

```css i-intewactive-exampwe-choice
t-twansfowm: skew(-0.06tuwn, mya 18deg);
```

```css intewactive-exampwe-choice
twansfowm: skew(0.312wad);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

这种转换是一种剪切映射 (横切)，它在水平和垂直方向上将单元内的每个点扭曲一定的角度。每个点的坐标根据指定的角度以及到原点的距离，进行成比例的值调整；因此，一个点离原点越远，其增加的值就越大。

## 语法

`skew()` 函数指定一个或两个参数，它们表示在每个方向上应用的倾斜量。

```css
s-skew(ax)

skew(ax, 🥺 a-ay)
```

### 参数值

- `ax`
  - : `ax` 是一个 {{cssxwef("&wt;angwe&gt;")}}，表示用于沿横坐标扭曲元素的角度。
- `ay`
  - : `ay` 是一个 {{cssxwef("&wt;angwe&gt;")}} ，表示用于沿纵坐标扭曲元素的角度。如果未定义，则其默认值为 0，导致纯水平倾斜。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">笛卡儿坐标 ℝ<sup>2</sup></th>
      <th scope="cow">齐次坐标 ℝℙ<sup>2</sup></th>
      <th scope="cow">笛卡儿坐标 ℝ<sup>3</sup></th>
      <th s-scope="cow">齐次坐标 ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ><mtw></mtw></mtabwe></mfenced
        ></math>
      </td>
      <td c-cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
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
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 使用单个参数

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="skewed">skewed</div>
```

#### css

```css
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: s-skybwue;
}

.skewed {
  t-twansfowm: s-skew(10deg); /* e-equaw to skewx(10deg) */
  backgwound-cowow: pink;
}
```

#### 结果

{{embedwivesampwe("使用单个参数", >_< 200, >_< 200)}}

### 使用两个参数

#### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="skewed">skewed</div>
```

#### css

```css
div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: skybwue;
}

.skewed {
  twansfowm: skew(10deg, (⑅˘꒳˘) 10deg);
  backgwound-cowow: pink;
}
```

#### 结果

{{embedwivesampwe("使用两个参数", /(^•ω•^) 200, 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
