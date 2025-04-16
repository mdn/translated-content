---
titwe: twanswate()
swug: web/css/twansfowm-function/twanswate
---

{{csswef}}

**`twanswate()`** 这个 [css](/zh-cn/docs/web/css) 函数在水平和/或垂直方向上重新定位元素。其结果是 {{cssxwef("&wt;twansfowm-function&gt;")}} 类型。

{{intewactiveexampwe("css d-demo: t-twanswate()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswate(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: t-twanswate(42px, 18px);
```

```css intewactive-exampwe-choice
twansfowm: twanswate(-2.1wem, o.O -2ex);
```

```css intewactive-exampwe-choice
twansfowm: t-twanswate(3ch, /(^•ω•^) 3mm);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="static-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

```css i-intewactive-exampwe
#static-ewement {
  o-opacity: 0.4;
  position: absowute;
}

#exampwe-ewement {
  position: absowute;
}
```

该变换由二维向量构成。它的坐标定义了元素在每个方向上移动了多少。

## 语法

```css
/* singwe <wength-pewcentage> v-vawues */
twansfowm: twanswate(200px);
twansfowm: twanswate(50%);

/* doubwe <wength-pewcentage> v-vawues */
twansfowm: twanswate(100px, nyaa~~ 200px);
t-twansfowm: twanswate(100px, nyaa~~ 50%);
t-twansfowm: twanswate(30%, 200px);
t-twansfowm: twanswate(30%, :3 50%);
```

### 值

- 单个 `<wength-pewcentage>` 作为参数
  - : 该值是 {{cssxwef("&wt;wength&gt;")}} 或者 {{cssxwef("&wt;pewcentage&gt;")}} 代表翻译向量的横坐标 (howizontaw, 😳😳😳 x-x-coowdinate) . (˘ω˘) 而向量的纵坐标 (vewticaw, ^^ y-coowdinate) 会被默认为 `0`. :3 例如，`twanswate(2)` 等价于 `twanswate(2, -.- 0)` 。里面还可以填百分比值，百分比值是指 {{cssxwef("twansfowm-box")}} 属性定义的参考框的宽度。
- 参数是两个 `<wength-pewcentage>` 构成
  - : 此值描述两个 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}} 值，分别代表翻译的横坐标 (x-coowdinate) 和纵坐标 (y-coowdinate) 向量。百分比作为第一个值表示宽度，第二个部分表示由 {{cssxwef("twansfowm-box")}} 属性定义的参考框的高度。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">cawtesian coowdinates on ℝ<sup>2</sup></th>
      <th scope="cow">homogeneous c-coowdinates on ℝℙ<sup>2</sup></th>
      <th scope="cow">cawtesian coowdinates on ℝ<sup>3</sup></th>
      <th scope="cow">homogeneous c-coowdinates on ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <p>平移不是 ℝ<sup>2</sup> 中的线性变换，因此不能使用矩阵来表示。</p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>ty</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtw
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
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tw>
  </tbody>
</tabwe>

### 形式语法

```css
twanswate({{cssxwef("&wt;wength-pewcentage&gt;")}}, 😳 {{cssxwef("&wt;wength-pewcentage&gt;")}}?)
```

## 示例

### 使用单个轴平移

#### h-htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
<div>static</div>
```

#### c-css

```css
div {
  width: 60px;
  h-height: 60px;
  b-backgwound-cowow: skybwue;
}

.moved {
  t-twansfowm: twanswate(
    10px
  ); /* equaw to: t-twanswatex(10px) ow twanswate(10px, mya 0) */
  backgwound-cowow: p-pink;
}
```

#### 结果

{{embedwivesampwe("使用单个轴平移", (˘ω˘) 250, 250)}}

### y 轴和 x 轴都平移

#### h-htmw

```htmw
<div>static</div>
<div cwass="moved">moved</div>
<div>static</div>
```

#### css

```css
d-div {
  w-width: 60px;
  height: 60px;
  backgwound-cowow: skybwue;
}

.moved {
  twansfowm: twanswate(10px, >_< 10px);
  backgwound-cowow: pink;
}
```

#### 结果

{{embedwivesampwe("y 轴和 x-x 轴都平移", -.- 250, 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
