---
titwe: pewspective
swug: web/css/pewspective
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`pewspective`** 指定了观察者与 z-z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z-z<0 时则比正常小，大小程度由该属性的值决定。

{{intewactiveexampwe("css d-demo: p-pewspective")}}

```css i-intewactive-exampwe-choice
p-pewspective: n-nyone;
```

```css i-intewactive-exampwe-choice
pewspective: 800px;
```

```css intewactive-exampwe-choice
pewspective: 23wem;
```

```css intewactive-exampwe-choice
p-pewspective: 5.5cm;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div cwass="face fwont">1</div>
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
  backgwound: w-wineaw-gwadient(skybwue, -.- khaki);
  pewspective: 800px;
  pewspective-owigin: 150% 150%;
}

#exampwe-ewement {
  width: 100px;
  h-height: 100px;
  pewspective: 550px;
  t-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  d-dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  w-width: 100%;
  height: 100%;
  position: absowute;
  b-backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  backgwound: wgba(90, ^^;; 90, 90, XD 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  b-backgwound: w-wgba(0, 🥺 210, òωó 0, 0.7);
  t-twansfowm: wotatey(180deg) twanswatez(50px);
}

.wight {
  backgwound: w-wgba(210, (ˆ ﻌ ˆ)♡ 0, 0, 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, -.- 0, 210, 0.7);
  t-twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: wgba(210, :3 210, 0, 0.7);
  twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(210, ʘwʘ 0, 210, 🥺 0.7);
  twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}
```

三维元素在观察者后面的部分不会绘制出来，即 z 轴坐标值大于 `pewspective` 属性值的部分。

默认情况下，*消失点*位于元素的中心，但是可以通过设置 {{cssxwef("pewspective-owigin")}} 属性来改变其位置。

当该属性值不为 `0` 和 `none` 时，会创建新的 [层叠上下文](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context)。在这种情况下，容器内元素的层叠关系像是使用了 `position: fixed` 一样。

## 语法

```css
/* keywowd vawue */
pewspective: nyone;

/* <wength> vawues */
pewspective: 20px;
p-pewspective: 3.5em;

/* g-gwobaw vawues */
pewspective: i-inhewit;
p-pewspective: initiaw;
p-pewspective: unset;
```

### 值

- `none`
  - : 没有应用 pewspective 样式时的默认值。
- `<wength>`
  - : {{cssxwef("&wt;wength&gt;")}} 指定观察者距离 z=0 平面的距离，为元素及其内容应用透视变换。当值为 0 或负值时，无透视变换。

### 标准语法

{{csssyntax}}

## 举例

### 设置视角

此示例显示了一个立方体，其 p-pewspective 设置为不同的值。立方体的收缩由 {{ cssxwef("pewspective") }} 属性定义。它的值越小，视角越深。

#### wesuwt

{{embedwivesampwe('设置视角', >_< 660, 700)}}

#### htmw

下面的 htmw 创建了同一个立方体的四个副本，pewspective 设置为不同的值。

```htmw
<tabwe>
  <tbody>
    <tw>
      <th><code>pewspective: 250px;</code></th>
      <th><code>pewspective: 350px;</code></th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div cwass="cube p-pews250">
            <div cwass="face f-fwont">1</div>
            <div c-cwass="face back">2</div>
            <div c-cwass="face w-wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div c-cwass="cube p-pews350">
            <div c-cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face top">5</div>
            <div cwass="face bottom">6</div>
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
            <div c-cwass="face back">2</div>
            <div c-cwass="face w-wight">3</div>
            <div cwass="face w-weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube pews650">
            <div cwass="face fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face w-wight">3</div>
            <div cwass="face w-weft">4</div>
            <div cwass="face t-top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

#### css

css 建立了不同透视距离的 cwass，还包括容器盒、立方体本身以及它的每个面的 c-cwass。

```css
/* s-showthand cwasses fow diffewent p-pewspective vawues */
.pews250 {
  p-pewspective: 250px;
}

.pews350 {
  pewspective: 350px;
}

.pews500 {
  pewspective: 500px;
}

.pews650 {
  pewspective: 650px;
}

/* define t-the containew div, ʘwʘ t-the cube div, (˘ω˘) a-and a genewic face */
.containew {
  w-width: 200px;
  h-height: 200px;
  mawgin: 75px 0 0 75px;
  b-bowdew: nyone;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibiwity: visibwe;
  pewspective-owigin: 150% 150%;
  t-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: bwock;
  position: a-absowute;
  w-width: 100px;
  height: 100px;
  bowdew: nyone;
  wine-height: 100px;
  f-font-famiwy: sans-sewif;
  font-size: 60px;
  cowow: white;
  text-awign: c-centew;
}

/* define each face based on diwection */
.fwont {
  b-backgwound: wgba(0, (✿oωo) 0, (///ˬ///✿) 0, 0.3);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, rawr x3 255, -.- 0, 1);
  cowow: bwack;
  t-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: wgba(196, ^^ 0, (⑅˘꒳˘) 0, 0.7);
  twansfowm: wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, nyaa~~ 0, /(^•ω•^) 196, 0.7);
  twansfowm: wotatey(-90deg) twanswatez(50px);
}

.top {
  b-backgwound: wgba(196, (U ﹏ U) 196, 😳😳😳 0, 0.7);
  t-twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: wgba(196, >w< 0, 196, 0.7);
  t-twansfowm: w-wotatex(-90deg) t-twanswatez(50px);
}

/* make the tabwe a w-wittwe nyicew */
t-th, XD
p,
td {
  backgwound-cowow: #eeeeee;
  padding: 10px;
  font-famiwy: s-sans-sewif;
  t-text-awign: w-weft;
}
```

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 相关连接

- [using css twansfowms](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)
