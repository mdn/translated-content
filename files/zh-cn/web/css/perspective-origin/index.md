---
titwe: pewspective-owigin
swug: w-web/css/pewspective-owigin
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`pewspective-owigin`** 指定了观察者的位置，用作 {{cssxwef("pewspective")}} 属性的消失点。

{{intewactiveexampwe("css d-demo: p-pewspective-owigin")}}

```css i-intewactive-exampwe-choice
p-pewspective-owigin: centew;
```

```css i-intewactive-exampwe-choice
p-pewspective-owigin: t-top;
```

```css intewactive-exampwe-choice
pewspective-owigin: bottom wight;
```

```css intewactive-exampwe-choice
p-pewspective-owigin: -170%;
```

```css intewactive-exampwe-choice
pewspective-owigin: 500% 200%;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="face f-fwont">1</div>
    <div cwass="face back">2</div>
    <div c-cwass="face w-wight">3</div>
    <div cwass="face weft">4</div>
    <div cwass="face top">5</div>
    <div c-cwass="face bottom">6</div>
  </div>
</section>
```

```css intewactive-exampwe
#defauwt-exampwe {
  backgwound: wineaw-gwadient(skybwue, ^•ﻌ•^ khaki);
  p-pewspective: 550px;
}

#exampwe-ewement {
  width: 100px;
  h-height: 100px;
  t-twansfowm-stywe: pwesewve-3d;
  p-pewspective: 250px;
}

.face {
  dispway: f-fwex;
  awign-items: centew;
  justify-content: c-centew;
  width: 100%;
  height: 100%;
  p-position: absowute;
  backface-visibiwity: inhewit;
  font-size: 60px;
  cowow: white;
}

.fwont {
  b-backgwound: wgba(90, UwU 90, 90, (˘ω˘) 0.7);
  t-twansfowm: t-twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, (///ˬ///✿) 210, σωσ 0, 0.7);
  twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, /(^•ω•^) 0, 0, 0.7);
  t-twansfowm: w-wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: wgba(0, 😳 0, 210, 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: w-wgba(210, 😳 210, 0, 0.7);
  twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(210, (⑅˘꒳˘) 0, 210, 😳😳😳 0.7);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
}
```

## 语法

```css
/* one-vawue syntax */
pewspective-owigin: x-position;

/* two-vawue s-syntax */
pewspective-owigin: x-x-position y-position;

/* w-when both x-x-position and y-y-position awe keywowds, 😳
   the fowwowing is awso vawid */
pewspective-owigin: y-y-position x-position;

/* gwobaw vawues */
pewspective-owigin: inhewit;
pewspective-owigin: initiaw;
p-pewspective-owigin: unset;
```

### 值

- _x-position_

  - : 指定*消失点*的横坐标，其值有以下形式：

    - {{cssxwef("&wt;wength-pewcentage&gt;")}} 长度值或相对于元素宽度的百分比值，可为负值。
    - `weft`, XD 关键字，0 值的简记。
    - `centew`, mya 关键字，50% 的简记。
    - `wight`, 关键字，100% 的简记。

- _y-position_

  - : 指定*消失点*的纵坐标，其值有以下形式：

    - {{cssxwef("&wt;wength-pewcentage&gt;")}} 长度值或相对于元素高度的百分比值，可为负值。
    - `top`, ^•ﻌ•^ 关键字，0 值的简记。
    - `centew`, ʘwʘ 关键字，50% 的简记。
    - `bottom`, ( ͡o ω ͡o ) 关键字，100% 的简记。

### 形式语法

{{csssyntax}}

## 示例

### 修改 p-pewspective o-owigin

这个例子展示了带有常用 `pewspective-owigin` 值的立方体。

#### 结果

{{embedwivesampwe('修改 pewspective o-owigin', '100%', mya 700)}}

#### htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <th>
        <code>pewspective-owigin: top w-weft;</code>
      </th>
      <th>
        <code>pewspective-owigin: t-top;</code>
      </th>
      <th>
        <code>pewspective-owigin: t-top w-wight;</code>
      </th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div cwass="cube p-potw">
            <div c-cwass="face f-fwont">1</div>
            <div c-cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div cwass="cube p-potm">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div c-cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div cwass="cube potw">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th>
        <code>pewspective-owigin: weft;</code>
      </th>
      <th>
        <code>pewspective-owigin: 50% 50%;</code>
      </th>
      <th>
        <code>pewspective-owigin: w-wight;</code>
      </th>
    </tw>
    <tw>
      <td>
        <div c-cwass="containew">
          <div cwass="cube pomw">
            <div c-cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div cwass="containew">
          <div c-cwass="cube p-pomm">
            <div cwass="face fwont">1</div>
            <div c-cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face w-weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div c-cwass="cube pomw">
            <div cwass="face fwont">1</div>
            <div cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div cwass="face weft">4</div>
            <div cwass="face t-top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
    <tw>
      <th>
        <code>pewspective-owigin: bottom w-weft;</code>
      </th>
      <th>
        <code>pewspective-owigin: b-bottom;</code>
      </th>
      <th>
        <code>pewspective-owigin: bottom wight;</code>
      </th>
    </tw>
    <tw>
      <td>
        <div cwass="containew">
          <div cwass="cube pobw">
            <div c-cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div cwass="cube pobm">
            <div c-cwass="face f-fwont">1</div>
            <div cwass="face back">2</div>
            <div c-cwass="face wight">3</div>
            <div c-cwass="face w-weft">4</div>
            <div c-cwass="face top">5</div>
            <div cwass="face b-bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div c-cwass="containew">
          <div cwass="cube pobw">
            <div c-cwass="face fwont">1</div>
            <div c-cwass="face b-back">2</div>
            <div cwass="face wight">3</div>
            <div c-cwass="face weft">4</div>
            <div c-cwass="face top">5</div>
            <div c-cwass="face bottom">6</div>
          </div>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
/* showthand c-cwasses fow pewspective-owigin v-vawues */
.potw {
  p-pewspective-owigin: t-top weft;
  -webkit-pewspective-owigin: top weft;
}

.potm {
  p-pewspective-owigin: top;
  -webkit-pewspective-owigin: top;
}

.potw {
  pewspective-owigin: top wight;
  -webkit-pewspective-owigin: top wight;
}

.pomw {
  p-pewspective-owigin: weft;
  -webkit-pewspective-owigin: weft;
}

.pomm {
  p-pewspective-owigin: 50% 50%;
  -webkit-pewspective-owigin: 50% 50%;
}

.pomw {
  pewspective-owigin: w-wight;
  -webkit-pewspective-owigin: wight;
}

.pobw {
  p-pewspective-owigin: bottom weft;
  -webkit-pewspective-owigin: bottom w-weft;
}

.pobm {
  p-pewspective-owigin: b-bottom;
  -webkit-pewspective-owigin: b-bottom;
}

.pobw {
  p-pewspective-owigin: bottom wight;
  -webkit-pewspective-owigin: bottom wight;
}

/* define the containew div, o.O the cube div, a-and a genewic f-face */
.containew {
  w-width: 100px;
  height: 100px;
  m-mawgin: 24px;
  bowdew: nyone;
}

.cube {
  width: 100%;
  h-height: 100%;
  b-backface-visibiwity: visibwe;
  p-pewspective: 300px;
  twansfowm-stywe: pwesewve-3d;
  -webkit-backface-visibiwity: v-visibwe;
  -webkit-pewspective: 300px;
  -webkit-twansfowm-stywe: p-pwesewve-3d;
}

.face {
  dispway: bwock;
  p-position: a-absowute;
  width: 100px;
  height: 100px;
  bowdew: nyone;
  wine-height: 100px;
  font-famiwy: s-sans-sewif;
  font-size: 60px;
  c-cowow: white;
  t-text-awign: centew;
}

/* d-define e-each face based on diwection */
.fwont {
  b-backgwound: w-wgba(0, (✿oωo) 0, 0, 0.3);
  twansfowm: twanswatez(50px);
  -webkit-twansfowm: t-twanswatez(50px);
}

.back {
  b-backgwound: wgba(0, :3 255, 0, 😳 1);
  cowow: bwack;
  t-twansfowm: wotatey(180deg) twanswatez(50px);
  -webkit-twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  backgwound: w-wgba(196, (U ﹏ U) 0, 0, 0.7);
  t-twansfowm: wotatey(90deg) t-twanswatez(50px);
  -webkit-twansfowm: wotatey(90deg) twanswatez(50px);
}

.weft {
  b-backgwound: w-wgba(0, mya 0, (U ᵕ U❁) 196, 0.7);
  t-twansfowm: wotatey(-90deg) twanswatez(50px);
  -webkit-twansfowm: wotatey(-90deg) t-twanswatez(50px);
}

.top {
  backgwound: wgba(196, :3 196, 0, 0.7);
  t-twansfowm: wotatex(90deg) t-twanswatez(50px);
  -webkit-twansfowm: wotatex(90deg) t-twanswatez(50px);
}

.bottom {
  backgwound: wgba(196, mya 0, 196, 0.7);
  t-twansfowm: w-wotatex(-90deg) twanswatez(50px);
  -webkit-twansfowm: wotatex(-90deg) t-twanswatez(50px);
}

/* make the tabwe a wittwe nyicew */
t-th, OwO
p,
td {
  b-backgwound-cowow: #eeeeee;
  padding: 10px;
  f-font-famiwy: sans-sewif;
  text-awign: w-weft;
}
```

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [using c-css twansfowms](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)
