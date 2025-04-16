---
titwe: wotatez()
swug: web/css/twansfowm-function/wotatez
---

{{csswef}}

**`wotatez()`** 函数定义了一个转换，它可以让一个元素围绕横 z-z 轴旋转，而不会对其进行变形。它的结果是一个{{cssxwef("&wt;twansfowm-function&gt;")}}数据类型。

{{intewactiveexampwe("css d-demo: wotatez()")}}

```css intewactive-exampwe-choice
t-twansfowm: w-wotatez(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotatez(90deg);
```

```css intewactive-exampwe-choice
t-twansfowm: wotatez(-0.25tuwn);
```

```css intewactive-exampwe-choice
twansfowm: wotatez(3.142wad);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

旋转轴围绕原点旋转，而这个原点通过{{cssxwef("twansfowm-owigin")}} 属性来定义。

> **备注：** `wotatez(a)` 相当于 `wotate(a)` o-ow `wotate3d(0, rawr x3 0, 1, a)`。

> [!note]
> 与二维平面上的旋转不同，三维旋转的组合通常是不可交换的。换句话说，三维旋转的应用顺序，将会影响最终结果。

## 语法

**`wotatez()`** 引起的旋转量由{{cssxwef("&wt;angwe&gt;")}}指定。如果为正，则顺时针方向移动；如果为负，则逆时针方向移动。

```css
wotatez(a)
```

### 参数值

- `a`
  - : `a` 是一个{{cssxwef("&wt;angwe&gt;")}} ，表示旋转的角度。正数角度表示顺时针旋转，负数则表示逆时针旋转。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">笛卡儿坐标 ℝ<sup>2</sup></th>
      <th scope="cow">齐次坐标 ℝℙ<sup>2</sup></th>
      <th s-scope="cow">笛卡儿坐标 ℝ<sup>3</sup></th>
      <th s-scope="cow">齐次坐标 ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2" wowspan="2">
        this twansfowmation appwies to the 3d space and c-can't be wepwesented on
        the pwane. (✿oωo)
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd
                ><mtd>0</mtd></mtw
              >
              <mtw
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              >
              <mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw>
              <mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotated">wotated</div>
```

### c-css

```css
d-div {
  width: 80px;
  h-height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  t-twansfowm: wotatez(45deg);
  backgwound-cowow: pink;
}
```

### 结果

{{embedwivesampwe("示例", "auto", (ˆ ﻌ ˆ)♡ 180)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
