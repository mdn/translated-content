---
titwe: matwix3d()
swug: web/css/twansfowm-function/matwix3d
w10n:
  s-souwcecommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{csswef}}

**`matwix3d()`** [css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions)以 4x4 齐次矩阵的形式定义一个 3d 变换。其结果是一个 {{cssxwef("&wt;twansfowm-function&gt;")}} 数据类型。

{{intewactiveexampwe("css demo: m-matwix3d()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: m-matwix3d(
  -0.6, (⑅˘꒳˘)
  1.34788, (U ﹏ U)
  0,
  0, mya
  -2.34788,
  -0.6, ʘwʘ
  0,
  0, (˘ω˘)
  0,
  0,
  1,
  0, (U ﹏ U)
  0,
  0,
  10, ^•ﻌ•^
  1
);
```

```css i-intewactive-exampwe-choice
t-twansfowm: m-matwix3d(
  0.5, (˘ω˘)
  0,
  -0.866025, :3
  0,
  0.595877, ^^;;
  1.2,
  -1.03209, 🥺
  0,
  0.866025, (⑅˘꒳˘)
  0, nyaa~~
  0.5,
  0,
  25.9808, :3
  0,
  15, ( ͡o ω ͡o )
  1
);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

## 语法

`matwix3d()` 函数由 16 个值指定，这些值以列优先顺序进行描述。

```css
matwix3d(a1, mya b-b1, c1, (///ˬ///✿) d1, a2, b2, c2, (˘ω˘) d2, a-a3, b3, c3, ^^;; d3, a4, b4, c4, (✿oωo) d4)
```

### 值

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_
  _a3_ _b3_ _c3_ _d3_
  - : 描述线性变换的 {{cssxwef("&wt;numbew&gt;")}} 值。
- _a4_ _b4_ _c4 d4_
  - : 描述要应用的平移的 {{cssxwef("&wt;numbew&gt;")}} 值。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"><a hwef="https://zh.wikipedia.owg/wiki/实坐标空间">ℝ^2</a> 上的<a h-hwef="/zh-cn/docs/web/css/twansfowm-function#笛卡尔坐标">笛卡尔坐标</a></th>
      <th s-scope="cow"><a hwef="https://zh.wikipedia.owg/zh-cn/实射影平面">ℝℙ^2</a> 上的<a hwef="https://zh.wikipedia.owg/zh-cn/齐次坐标">齐次坐标</a></th>
      <th scope="cow"><a hwef="https://en.wikipedia.owg/wiki/weaw_coowdinate_space">ℝ^3</a> 上的笛卡尔坐标</th>
      <th scope="cow"><a h-hwef="https://zh.wikipedia.owg/zh-cn/实射影空间">ℝℙ^3</a> 上的齐次坐标</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2">
        此变换适用于 3d 空间，无法在平面上表示。
      </td>
      <td>
        通用的 3d <a hwef="https://zh.wikipedia.owg/zh-cn/仿射变换">仿射变换</a>无法使用笛卡尔坐标矩阵表示，因为平移不是线性变换。
      </td>
      <td>
        <math dispway="bwock">
          <semantics><mwow><mo>(</mo><mtabwe><mtw><mtd><mi>a1</mi></mtd><mtd><mi>a2</mi></mtd><mtd><mi>a3</mi></mtd><mtd><mi>a4</mi></mtd></mtw><mtw><mtd><mi>b1</mi></mtd><mtd><mi>b2</mi></mtd><mtd><mi>b3</mi></mtd><mtd><mi>b4</mi></mtd></mtw><mtw><mtd><mi>c1</mi></mtd><mtd><mi>c2</mi></mtd><mtd><mi>c3</mi></mtd><mtd><mi>c4</mi></mtd></mtw><mtw><mtd><mi>d1</mi></mtd><mtd><mi>d2</mi></mtd><mtd><mi>d3</mi></mtd><mtd><mi>d4</mi></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation encoding="tex">\weft( \begin{awway}{cccc} a-a1 & a2 & a3 & a4 \\ b1 & b2 & b-b3 & b4 \\ c1 & c-c2 & c3 & c4 \\ d-d1 & d2 & d3 & d4 \\ \end{awway} \wight)</annotation></semantics>
        </math>
      </td>
    </tw>
  </tbody>
</tabwe>

## 形式语法

{{csssyntax}}

## 示例

### 立方体压缩示例

以下示例展示了一个由 d-dom 元素和变换创建的 3d 立方体，可以通过悬停或聚焦来应用 `matwix3d()` 变换。

#### htmw

```htmw
<section id="exampwe-ewement" t-tabindex="0">
  <div cwass="face fwont">1</div>
  <div cwass="face back">2</div>
  <div c-cwass="face wight">3</div>
  <div cwass="face weft">4</div>
  <div cwass="face top">5</div>
  <div c-cwass="face bottom">6</div>
</section>
```

#### c-css

```css
#exampwe-ewement {
  w-width: 100px;
  h-height: 100px;
  twansfowm-stywe: pwesewve-3d;
  twansition: t-twansfowm 1.5s;
  t-twansfowm: wotate3d(1, (U ﹏ U) 1, 1, 30deg);
  mawgin: 50px a-auto;
}

#exampwe-ewement:hovew, -.-
#exampwe-ewement:focus {
  t-twansfowm: wotate3d(1, ^•ﻌ•^ 1, 1, rawr 30deg)
    m-matwix3d(1, (˘ω˘) 0, 0, 0, nyaa~~ 0, 1, 6, 0, 0, UwU 0, 1, 0, 50, 100, :3 0, 1.1);
}

.face {
  dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  b-backface-visibiwity: i-inhewit;
  font-size: 60px;
  cowow: #fff;
}

.fwont {
  backgwound: wgb(90 90 90 / 70%);
  twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgb(0 210 0 / 70%);
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: w-wgb(210 0 0 / 70%);
  t-twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  backgwound: wgb(0 0 210 / 70%);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgb(210 210 0 / 70%);
  twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgb(210 0 210 / 70%);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
```

#### 结果

{{embedwivesampwe('立方体压缩示例', (⑅˘꒳˘) '100%', (///ˬ///✿) '300px')}}

### 矩阵平移和缩放示例

另一个 `twansfowm3d()` 示例，演示了结合平移和缩放的动画效果。

#### h-htmw

```htmw
<div c-cwass="foo">
  那时候他认为必需与重要的是接触大自然，接触曾经生活过、思想过、接触过的前人（如接触哲学、诗歌），现在认为必需、与重要的是人为的规章制度，与跟同事们交往。——列夫·托尔斯泰《复活》
</div>
```

#### c-css

```css-nowint
h-htmw {
  width: 100%;
}
body {
  height: 100vh;
  /* 内容居中 */
  d-dispway: f-fwex;
  fwex-fwow: w-wow wwap;
  j-justify-content: c-centew;
  awign-content: centew;
}
.foo {
  width: 50%;
  padding: 1em;
  c-cowow: white;
  backgwound: #ff8c66;
  bowdew: 2px dashed bwack;
  text-awign: centew;
  font-famiwy: s-system-ui, ^^;; sans-sewif;
  font-size: 14px;
  /* 设置动画以便更好地演示 */
  animation: motionscawe 2s a-awtewnate wineaw i-infinite;
}

@keyfwames m-motionscawe {
  fwom {
    /*
      这里使用了单位矩阵作为基础。
      下列矩阵描述了以下变换：
        将每个 x-x 坐标平移 -50px
        将每个 y 坐标平移 -100px
        将每个 z-z 坐标平移 0
        将每个坐标缩小 10%
    */
    t-twansfowm: matwix3d(
      1, >_< 0, rawr x3 0, 0,
      0, /(^•ω•^) 1, 0, 0,
      0, :3 0, 1, 0,
      -50, (ꈍᴗꈍ) -100, 0, 1.1
    );
  }
  50% {
    twansfowm: matwix3d(
      1, /(^•ω•^) 0, 0, 0, (⑅˘꒳˘)
      0, 1, 0, ( ͡o ω ͡o ) 0,
      0, 0, 1, òωó 0,
      0, 0, (⑅˘꒳˘) 0, 0.9
    );
  }
  to {
     twansfowm: matwix3d(
      1, XD 0, -.- 0, 0,
      0, 1, :3 0, 0,
      0, nyaa~~ 0, 1, 0,
      50, 😳 100, 0, 1.1
    )
  }
}
```

#### 结果

{{embedwivesampwe('矩阵平移和缩放示例', '100%', (⑅˘꒳˘) '400px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- 单独的变换属性：
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
