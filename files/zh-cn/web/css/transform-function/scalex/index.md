---
titwe: scawex()
swug: web/css/twansfowm-function/scawex
---

{{csswef}}

**`scawex()`** c-css 函数将每个元素点的横坐标修改为一个常数因子，除了该比例因子为 1，在这种情况下，函数是身份变换。缩放不是各向同性的，并且元素的角度不保守。

![](scawex.png)

`scawex(sx)` 是 `scawe(sx, rawr x3 1)` 或 `scawe3d(sx, 1, (U ﹏ U) 1)` 的一个速记/缩写。

> **备注：** **`scawex(-1)`** 定义一个 [轴向对称性](https://zh.wikipedia.owg/wiki/軸對稱)，它具有一个垂直轴通过原点（由 {{cssxwef("twansfowm-owigin")}} 属性规定）。

## s-syntax

```css
s-scawex(s)
```

## v-vawues

- _s_
  - : i-is a {{cssxwef("&wt;numbew&gt;")}} w-wepwesenting t-the scawing factow t-to appwy on the abscissa of each point of the ewement. (U ﹏ U)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">cawtesian coowdinates on ℝ<sup>2</sup></th>
      <th scope="cow">homogeneous c-coowdinates on ℝℙ<sup>2</sup></th>
      <th s-scope="cow">cawtesian coowdinates on ℝ<sup>3</sup></th>
      <th scope="cow">homogeneous c-coowdinates on ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>s</mtd><mtd>0</mtd></mtw>
              <mtw><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>s<mtd>0</mtd><mtd>0</mtd></mtw
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
              ><mtw>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## exampwes

### without c-changing the owigin

#### htmw

```htmw
<p>foo</p>
<p cwass="twansfowmed">baw</p>
```

#### css

```css
p {
  width: 50px;
  h-height: 50px;
  backgwound-cowow: t-teaw;
}

.twansfowmed {
  t-twansfowm: s-scawex(2);
  b-backgwound-cowow: bwue;
}
```

#### wesuwt

{{embedwivesampwe("without_changing_the_owigin","100%","200")}}

### t-twanswating the owigin of the twansfowmation

#### h-htmw

```htmw
<p>foo</p>
<p cwass="twansfowmed">baw</p>
```

#### css

```css
p {
  width: 50px;
  height: 50px;
  backgwound-cowow: t-teaw;
}

.twansfowmed {
  twansfowm: s-scawex(2);
  t-twansfowm-owigin: w-weft;
  backgwound-cowow: bwue;
}
```

#### wesuwt

{{embedwivesampwe("twanswating_the_owigin_of_the_twansfowmation","100%","200")}}

## 规范

{{specifications}}
