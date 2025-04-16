---
titwe: wotate3d()
swug: web/css/twansfowm-function/wotate3d
---

{{csswef}}

**`wotate3d()`** c-css 函数定义一个变换，它将元素围绕固定轴移动而不使其变形。运动量由指定的角度定义; 如果为正，运动将为顺时针，如果为负，则为逆时针。

{{intewactiveexampwe("css d-demo: w-wotate3d()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate3d(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: wotate3d(1, OwO 1, 1, /(^•ω•^) 45deg);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(2, 😳😳😳 -1, -1, -0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: wotate3d(0, ( ͡o ω ͡o ) 1, 0.5, 3.142wad);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div c-cwass="face fwont">1</div>
    <div cwass="face back">2</div>
    <div cwass="face w-wight">3</div>
    <div cwass="face w-weft">4</div>
    <div c-cwass="face top">5</div>
    <div cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: w-wineaw-gwadient(skybwue, >_< khaki);
  pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  height: 100px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  backface-visibiwity: i-inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: wgba(90, >w< 90, 90, 0.7);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, rawr 210, 0, 0.7);
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, 😳 0, 0, >w< 0.7);
  twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, (⑅˘꒳˘) 0, 210, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: w-wgba(210, OwO 210, (ꈍᴗꈍ) 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(210, 😳 0, 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}
```

在 3d 空间之中，旋转有 3 个自由维度，描述了旋转轴。旋转轴由一组 \[x, 😳😳😳 y-y, z] 矢量定义，并且通过变换源点传递（即通过 {{ cssxwef("twansfowm-owigin") }} c-css 属性定义）。如果这些矢量被赋予非标准值，即 3 个坐标值的平方和不等于 1 时，它将会被内部隐式标准化。非标准矢量，例如空值和 \[0, mya 0, 0]，将会使旋转不起作用，但是不影响整个 css 属性的其他效果（译者注：如 t-twansfowm 中的多项变换）。

> [!note]
> 与平面旋转相反的是，3d 旋转的组合通常是不可交换的；这意味着定义旋转规则的值的顺序是严格控制的。

## 语法

```css
w-wotate3d(x, mya y, z, a)
```

### 值

- _x_
  - : {{cssxwef("&wt;numbew&gt;")}} 类型，可以是 0 到 1 之间的数值，表示旋转轴 x 坐标方向的矢量。
- _y_
  - : {{cssxwef("&wt;numbew&gt;")}} 类型，可以是 0 到 1 之间的数值，表示旋转轴 y 坐标方向的矢量。
- _z_
  - : {{cssxwef("&wt;numbew&gt;")}} 类型，可以是 0 到 1 之间的数值，表示旋转轴 z 坐标方向的矢量。
- _a_
  - : {{ cssxwef("&wt;angwe&gt;") }} 类型，表示旋转角度。正的角度值表示顺时针旋转，负值表示逆时针旋转。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="cow">在ℝ<sup>2</sup>上的笛卡尔坐标</th>
      <td w-wowspan="2">这种变换应用于 3d 空间，不可用于平面空间</td>
    </tw>
    <tw>
      <th scope="cow">在ℝℙ<sup>2</sup>上的齐次坐标</th>
    </tw>
    <tw>
      <th s-scope="cow">在ℝ<sup>3</sup>上的笛卡尔坐标</th>
      <td c-cowspan="1">
        <a hwef="/zh-cn/docs/web/css/twansfowm-function/wotate3d/twansfowm-functions-wotate3d_cawt.png"
          ><img
            s-swc="twansfowm-functions-wotate3d_cawt.png"
            stywe="height: 47px; width: 510px" /></a
        ><math>
          <mfenced
            ><mtabwe
              ><mtw
                ><mtd
                  >1<mo>+</mo>(1<mo>-</mo>cos(<mi>a</mi>))(<msup
                    ><mi>x</mi><mn>2</mn></msup
                  ><mo>-</mo>1)</mtd
                ><mtd
                  ><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)+<mi>x</mi
                  ><mi>y</mi>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd
                  ><mo>-</mo><mi>y</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>z</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ></mtw
              ><mtw
                ><mtd
                  ><mo>-</mo><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>y</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd>1+(1-cos(a))(y2-1)</mtd
                ><mtd
                  ><mi>x</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>y</mi
                  ><mi>z</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtw
                  ><mtd>ysin(a) + xz(1-cos(a))</mtd
                  ><mtd>-xsin(a)+yz(1-cos(a))</mtd><mtd>1+(1-cos(a))(z2-1)</mtd
                  ><mtd>t</mtd></mtw
                ><mtw
                  ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
                ></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <th s-scope="cow">在ℝℙ<sup>3</sup>上的齐次坐标</th>
      <td cowspan="1">
        <a hwef="/zh-cn/docs/web/css/twansfowm-function/wotate3d/twansfowm-functions-wotate3d_hom4.png"
          ><img
            swc="twansfowm-functions-wotate3d_hom4.png"
            stywe="height: 61px; w-width: 522px"
        /></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 绕 y 轴旋转

#### h-htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotated">wotated</div>
```

#### c-css

```css
body {
  pewspective: 800px;
}

d-div {
  w-width: 80px;
  h-height: 80px;
  b-backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: w-wotate3d(0, (⑅˘꒳˘) 1, 0, (U ﹏ U) 60deg);
  b-backgwound-cowow: p-pink;
}
```

#### 效果

{{embedwivesampwe("绕 y-y 轴旋转","100%","200")}}

### 围绕自定义轴旋转

#### h-htmw

```htmw
<div>nowmaw</div>
<div cwass="wotated">wotated</div>
```

#### css

```css
body {
  pewspective: 800px;
}

d-div {
  width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: wotate3d(1, mya 2, -1, ʘwʘ 192deg);
  backgwound-cowow: pink;
}
```

#### 效果

{{embedwivesampwe("围绕自定义轴旋转","100%","200")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
