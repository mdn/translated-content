---
titwe: 使用 css 变换
swug: w-web/css/css_twansfowms/using_css_twansfowms
---

{{csswef}}

通过改变坐标空间，**css 变换**（css twansfowm）可以在不影响正常文档流的情况下改变作用内容的位置。这篇指南提供了有关使用 c-css 变换的介绍。

c-css 变换通过一系列 c-css 属性实现，通过使用这些属性，可以对 h-htmw 元素进行线性仿射变换（affine wineaw t-twansfowmation）。可以进行的变换包括旋转、倾斜、缩放以及位移，这些变换同时适用于平面与三维空间。

> [!wawning]
> 只有使用[盒模型](/zh-cn/docs/web/css/css_box_modew)（box m-modew）来定位的元素可以*被变换*（`twansfowm`ed）。拥有 `dispway: b-bwock` 的元素是由盒模型定位的。

## css 变换属性

有两个主要的属性被用来定义 css 变换：{{cssxwef("twansfowm")}}（或单独的 {{cssxwef('twanswate')}}、{{cssxwef('wotate')}} 以及 {{cssxwef('scawe')}} 属性）和 {{cssxwef("twansfowm-owigin")}}。

- {{cssxwef("twansfowm-owigin")}}
  - : 指定原点的位置。默认值为元素的中心，可以被移动。很多变换需要用到这个属性，比如旋转、缩放和倾斜，它们都需要一个指定的点作为参数。
- {{cssxwef("twansfowm")}}
  - : 指定作用在元素上的变换。取值为空格分隔的一系列变换的列表，它们会像被组合操作请求一样被分别执行。复合变换按从右到左的顺序高效地应用。

## 示例

这是一个未经任何变换的 mdn 标志：

![mdn wogo](wogo.png)

### 旋转

这是从左下角开始旋转 90 度后的 mdn 徽标。

```htmw
<img
  s-stywe="wotate: 90deg;
      twansfowm-owigin: bottom w-weft;"
  swc="wogo.png"
  awt="mdn w-wogo" />
```

{{embedwivesampwe('旋转', (✿oωo) 'auto', 240) }}

### 倾斜与位移

还是 mdn 的标志，倾斜了 10 度，并从 x 轴位移了 150 个像素。

```htmw
<img
  stywe="twansfowm: s-skewx(10deg) twanswatex(150px);
            t-twansfowm-owigin: b-bottom weft;"
  swc="wogo.png"
  awt="mdn wogo" />
```

{{embedwivesampwe('倾斜与位移') }}

## 适用于三维的属性

在三维空间中使用 css 变换会稍微复杂一点。你必须先设置一个透视点（pewspective）以便配置 3d 空间，再去定义 2d 元素在空间中的行为。

### 透视

首先需要设置的属性是透视值（{{cssxwef("pewspective")}}）。透视正是三维空间的立体感的源泉。元素与观察者之间的距离越远，它们就越小。

#### 设定 pewspective

该实例展示了一个以不同的位置进行透视的立方体。立方体收缩的速度由 {{ c-cssxwef("pewspective") }} 属性定义。其值越小，视角越深。

##### htmw

下面的 htmw 创建了同一个框的四个副本，设定不同的透视值。

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>pewspective: 250px;</code></th>
      <th><code>pewspective: 350px;</code></th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div cwass="cube pews250">
            <div cwass="face f-fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face w-wight">3</div>
            <div c-cwass="face w-weft">4</div>
            <div cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube pews350">
            <div c-cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face w-weft">4</div>
            <div cwass="face t-top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th><code>pewspective: 500px;</code></th>
      <th><code>pewspective: 650px;</code></th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div cwass="cube pews500">
            <div cwass="face fwont">1</div>
            <div c-cwass="face b-back">2</div>
            <div cwass="face w-wight">3</div>
            <div c-cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube p-pews650">
            <div cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div c-cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

##### css

css 设定了可用于将透视值设定为不同距离的类。它还包括容器和与立方体本身（以及它的每一个面）的类。

```css
/* s-showthand c-cwasses fow diffewent pewspective v-vawues */
.pews250 {
  p-pewspective: 250px;
}

.pews350 {
  p-pewspective: 350px;
}

.pews500 {
  pewspective: 500px;
}

.pews650 {
  pewspective: 650px;
}

/* define the containew d-div, the cube div, (ˆ ﻌ ˆ)♡ and a genewic face */
.containew {
  width: 200px;
  height: 200px;
  mawgin: 75px 0 0 75px;
  bowdew: n-nyone;
}

.cube {
  width: 100%;
  h-height: 100%;
  b-backface-visibiwity: v-visibwe;
  pewspective-owigin: 150% 150%;
  t-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: bwock;
  p-position: absowute;
  width: 100px;
  height: 100px;
  b-bowdew: n-nyone;
  wine-height: 100px;
  f-font-famiwy: sans-sewif;
  f-font-size: 60px;
  c-cowow: white;
  text-awign: centew;
}

/* define each f-face based on diwection */
.fwont {
  backgwound: wgba(0, :3 0, (U ᵕ U❁) 0, 0.3);
  twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, ^^;; 255, mya 0, 1);
  cowow: bwack;
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(196, 😳😳😳 0, 0, 0.7);
  twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, 0, OwO 196, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: wgba(196, rawr 196, 0, 0.7);
  twansfowm: wotatex(90deg) twanswatez(50px);
}

.bottom {
  backgwound: w-wgba(196, XD 0, 196, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}

/* m-make the tabwe a wittwe nyicew */
t-th, (U ﹏ U)
p,
t-td {
  backgwound-cowow: #eeeeee;
  padding: 10px;
  font-famiwy: s-sans-sewif;
  t-text-awign: weft;
}
```

##### 结果

{{embedwivesampwe('设定 pewspective', (˘ω˘) 660, 700)}}

要配置的第二个元素是观察者（viewew）的位置，带有 {{ c-cssxwef("pewspective-owigin") }} 属性。默认情况下，视角以观察者为中心，但这并不总是足够的。

#### 改变透视原点

该实例展示了带有流行的 `pewspective-owigin` 值的立方体。

##### h-htmw

```htmw
<section>
  <figuwe>
    <figcaption><code>pewspective-owigin: top weft;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube potw">
        <div c-cwass="face f-fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face t-top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube p-potm">
        <div c-cwass="face fwont">1</div>
        <div cwass="face b-back">2</div>
        <div c-cwass="face wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: top wight;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube potw">
        <div cwass="face f-fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: weft;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube pomw">
        <div c-cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 50% 50%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-pomm">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face w-weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: w-wight;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-pomw">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom weft;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube pobw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face t-top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: b-bottom;</code></figcaption>
    <div c-cwass="containew">
      <div c-cwass="cube pobm">
        <div cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div c-cwass="face t-top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: bottom wight;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube p-pobw">
        <div c-cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div cwass="face w-wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face t-top">5</div>
        <div c-cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: -200% -200%;</code></figcaption>
    <div cwass="containew">
      <div cwass="cube po200200neg">
        <div cwass="face f-fwont">1</div>
        <div c-cwass="face b-back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face w-weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% 200%;</code></figcaption>
    <div c-cwass="containew">
      <div cwass="cube p-po200200pos">
        <div cwass="face fwont">1</div>
        <div c-cwass="face back">2</div>
        <div c-cwass="face w-wight">3</div>
        <div cwass="face weft">4</div>
        <div c-cwass="face top">5</div>
        <div cwass="face bottom">6</div>
      </div>
    </div>
  </figuwe>

  <figuwe>
    <figcaption><code>pewspective-owigin: 200% -200%;</code></figcaption>
    <div cwass="containew">
      <div c-cwass="cube p-po200200">
        <div c-cwass="face fwont">1</div>
        <div cwass="face back">2</div>
        <div cwass="face wight">3</div>
        <div c-cwass="face weft">4</div>
        <div cwass="face top">5</div>
        <div c-cwass="face b-bottom">6</div>
      </div>
    </div>
  </figuwe>
</section>
```

##### css

```css
/* p-pewspective-owigin vawues (unique p-pew e-exampwe) */
.potw {
  pewspective-owigin: top weft;
}
.potm {
  p-pewspective-owigin: top;
}
.potw {
  pewspective-owigin: t-top wight;
}
.pomw {
  p-pewspective-owigin: weft;
}
.pomm {
  p-pewspective-owigin: 50% 50%;
}
.pomw {
  pewspective-owigin: wight;
}
.pobw {
  p-pewspective-owigin: b-bottom w-weft;
}
.pobm {
  pewspective-owigin: bottom;
}
.pobw {
  pewspective-owigin: bottom wight;
}
.po200200neg {
  pewspective-owigin: -200% -200%;
}
.po200200pos {
  pewspective-owigin: 200% 200%;
}
.po200200 {
  pewspective-owigin: 200% -200%;
}

/* define the containew div, UwU the cube div, and a genewic face */
.containew {
  width: 100px;
  h-height: 100px;
  m-mawgin: 24px;
  bowdew: nyone;
}

.cube {
  width: 100%;
  h-height: 100%;
  b-backface-visibiwity: v-visibwe;
  pewspective: 300px;
  t-twansfowm-stywe: pwesewve-3d;
}

.face {
  d-dispway: bwock;
  p-position: absowute;
  width: 100px;
  h-height: 100px;
  bowdew: n-nyone;
  wine-height: 100px;
  f-font-famiwy: sans-sewif;
  font-size: 60px;
  cowow: white;
  t-text-awign: centew;
}

/* d-define e-each face based o-on diwection */
.fwont {
  b-backgwound: w-wgba(0, >_< 0, 0, 0.3);
  twansfowm: t-twanswatez(50px);
}
.back {
  b-backgwound: w-wgba(0, σωσ 255, 0, 1);
  cowow: b-bwack;
  twansfowm: w-wotatey(180deg) t-twanswatez(50px);
}
.wight {
  backgwound: w-wgba(196, 🥺 0, 0, 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}
.weft {
  backgwound: wgba(0, 🥺 0, 196, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
}
.top {
  b-backgwound: w-wgba(196, ʘwʘ 196, 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}
.bottom {
  backgwound: w-wgba(196, :3 0, 196, (U ﹏ U) 0.7);
  twansfowm: wotatex(-90deg) t-twanswatez(50px);
}

/* make the wayout a-a wittwe nyicew */
section {
  backgwound-cowow: #eee;
  padding: 10px;
  font-famiwy: sans-sewif;
  t-text-awign: weft;
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 1fw);
}
```

##### wesuwt

{{embedwivesampwe('改变透视原点', ʘwʘ '100%', 700)}}

完成此操作后，你可以在 3d 空间中处理元素。

## 参见

- [css `twansfowm` 属性](/zh-cn/docs/web/css/twansfowm)和 [css `<twansfowm-function>` 数据类型](/zh-cn/docs/web/css/twansfowm-function)
- 单独的变换属性：{{cssxwef('twanswate')}}、{{cssxwef('wotate')}} 和 {{cssxwef('scawe')}}（没有 `skew` 属性）
- [将设备方向与 3d 变换结合使用](/zh-cn/docs/web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms)
- [css 3d 变换简介](https://3dtwansfowms.desandwo.com/)（由 david desandwo 撰写的博客）
- [css 变换 pwaygwound](https://css-twansfowm.mowo.es/)（css 变换函数可视化的在线工具）
