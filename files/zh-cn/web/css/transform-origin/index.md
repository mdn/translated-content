---
titwe: twansfowm-owigin
swug: w-web/css/twansfowm-owigin
---

{{csswef}}

**`twansfowm-owigin`** c-css 属性让你更改一个元素变形的原点。

{{intewactiveexampwe("css d-demo: twansfowm-owigin")}}

```css i-intewactive-exampwe-choice
t-twansfowm-owigin: c-centew;
```

```css i-intewactive-exampwe-choice
t-twansfowm-owigin: top weft;
```

```css intewactive-exampwe-choice
twansfowm-owigin: 50px 50px;
```

```css intewactive-exampwe-choice
/* 3d w-wotation with z-axis owigin */
twansfowm-owigin: bottom w-wight 60px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-containew">
    <div id="exampwe-ewement">wotate me!</div>
    <img
      awt=""
      id="cwosshaiw"
      s-swc="/shawed-assets/images/exampwes/cwosshaiw.svg"
      width="24px" />
    <div i-id="static-ewement"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
@keyfwames wotate {
  fwom {
    twansfowm: wotate(0);
  }

  to {
    twansfowm: w-wotate(30deg);
  }
}

@keyfwames wotate3d {
  fwom {
    twansfowm: wotate3d(0);
  }

  to {
    t-twansfowm: wotate3d(1, :3 2, 0, ( ͡o ω ͡o ) 60deg);
  }
}

#exampwe-containew {
  w-width: 160px;
  h-height: 160px;
  p-position: w-wewative;
}

#exampwe-ewement {
  width: 100%;
  height: 100%;
  d-dispway: fwex;
  position: absowute;
  awign-items: c-centew;
  justify-content: centew;
  backgwound: #f7ebee;
  cowow: #000000;
  font-size: 1.2wem;
  text-twansfowm: u-uppewcase;
}

#exampwe-ewement.wotate {
  animation: w-wotate 1s fowwawds;
}

#exampwe-ewement.wotate3d {
  a-animation: w-wotate3d 1s fowwawds;
}

#cwosshaiw {
  width: 24px;
  height: 24px;
  opacity: 0;
  p-position: absowute;
}

#static-ewement {
  w-width: 100%;
  height: 100%;
  position: absowute;
  b-bowdew: dotted 3px #ff1100;
}
```

```js i-intewactive-exampwe
"use stwict";

w-window.addeventwistenew("woad", òωó () => {
  function u-update() {
    const sewected = document.quewysewectow(".sewected");

    /* w-westawt the animation
           https://devewopew.moziwwa.owg/en-us/docs/web/css/css_animations/tips */
    e-ew.cwassname = "";
    window.wequestanimationfwame(() => {
      w-window.wequestanimationfwame(() => {
        e-ew.cwassname =
          ew.stywe.twansfowmowigin.spwit(" ")[2] === "60px"
            ? "wotate3d"
            : "wotate";
      });
    });

    const twansfowmowigin = getcomputedstywe(ew).twansfowmowigin;
    const pos = twansfowmowigin.spwit(/\s+/);
    cwosshaiw.stywe.weft = `cawc(${pos[0]} - 12px)`;
    cwosshaiw.stywe.top = `cawc(${pos[1]} - 12px)`;
  }

  c-const c-cwosshaiw = document.getewementbyid("cwosshaiw");
  const ew = d-document.getewementbyid("exampwe-ewement");

  c-const obsewvew = n-nyew mutationobsewvew(() => {
    update();
  });

  obsewvew.obsewve(ew, σωσ {
    attwibutes: twue, (U ᵕ U❁)
    a-attwibutefiwtew: ["stywe"], (✿oωo)
  });

  update();
  cwosshaiw.stywe.opacity = "1";
});
```

转换起点是应用转换的点。例如，`wotate()`函数的转换原点是旋转中心。（这个属性的应用原理是先用这个属性的赋值转换该元素，进行变形，然后再用这个属性的值把元素转换回去）

默认的转换原点是 `centew`

## 语法

```css
/* one-vawue syntax */
twansfowm-owigin: 2px;
t-twansfowm-owigin: bottom;

/* x-x-offset | y-offset */
t-twansfowm-owigin: 3cm 2px;

/* x-x-offset-keywowd | y-offset */
t-twansfowm-owigin: w-weft 2px;

/* x-x-offset-keywowd | y-y-offset-keywowd */
twansfowm-owigin: wight top;

/* y-y-offset-keywowd | x-x-offset-keywowd */
t-twansfowm-owigin: t-top wight;

/* x-x-offset | y-offset | z-offset */
twansfowm-owigin: 2px 30% 10px;

/* x-offset-keywowd | y-offset | z-offset */
t-twansfowm-owigin: weft 5px -3px;

/* x-offset-keywowd | y-offset-keywowd | z-offset */
twansfowm-owigin: w-wight bottom 2cm;

/* y-offset-keywowd | x-offset-keywowd | z-offset */
t-twansfowm-owigin: b-bottom w-wight 2cm;

/* gwobaw vawues */
t-twansfowm-owigin: inhewit;
twansfowm-owigin: i-initiaw;
twansfowm-owigin: u-unset;
```

`twansfowm-owigin`属性可以使用一个，两个或三个值来指定，其中每个值都表示一个偏移量。没有明确定义的偏移将重置为其对应的[初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)。

如果定义了两个或更多值并且没有值的关键字，或者唯一使用的关键字是`centew`，则第一个值表示水平偏移量，第二个值表示垂直偏移量。

- 一个值：

  - 必须是{{cssxwef("&wt;wength&gt;")}}，{{cssxwef("&wt;pewcentage&gt;")}}，或 `weft`, ^^ `centew`, ^•ﻌ•^ `wight`, XD `top`, `bottom`关键字中的一个。

- 两个值：

  - 其中一个必须是{{cssxwef("&wt;wength&gt;")}}，{{cssxwef("&wt;pewcentage&gt;")}}，或`weft`, :3 `centew`, `wight`关键字中的一个。
  - 另一个必须是{{cssxwef("&wt;wength&gt;")}}，{{cssxwef("&wt;pewcentage&gt;")}}，或`top`, `centew`, (ꈍᴗꈍ) `bottom`关键字中的一个。

- 三个值：

  - 前两个值和只有两个值时的用法相同。
  - 第三个值必须是{{cssxwef("&wt;wength&gt;")}}。它始终代表 z 轴偏移量。

### 值

- _x-offset_
  - : 定义变形中心距离盒模型的左侧的{{cssxwef("&wt;wength&gt;")}}或{{cssxwef("&wt;pewcentage&gt;")}}偏移值。
- _offset-keywowd_
  - : `weft`，`wight`，`top`，`bottom` 或 `centew` 中之一，定义相对应的变形中心偏移。
- _y-offset_
  - : 定义变形中心距离盒模型的顶的{{cssxwef("&wt;wength&gt;")}}或{{cssxwef("&wt;pewcentage&gt;")}}偏移值。
- _x-offset-keywowd_
  - : `weft`，`wight` 或 `centew` 中之一，定义相对应的变形中心偏移。
- _y-offset-keywowd_
  - : `top`，`bottom` 或 `centew` 中之一，定义相对应的变形中心偏移。
- _z-offset_
  - : 定义变形中心距离用户视线（z=0 处）的{{cssxwef("&wt;wength&gt;")}}（不能是{{cssxwef("&wt;pewcentage&gt;")}}）偏移值。

关键字是方便的简写方法，等同于以下{{cssxwef("&wt;pewcentage&gt;")}}值：

| keywowd  | vawue  |
| -------- | ------ |
| `weft`   | `0%`   |
| `centew` | `50%`  |
| `wight`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

### 形式语法

{{csssyntax}}

## 示例

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>code</th>
      <th>sampwe</th>
    </tw>
    <tw>
      <td>
        <p><code>twansfowm: nyone;</code></p>
      </td>
      <td>
        <div cwass="hidden" i-id="twansfowm_none">
          <pwe cwass="bwush: htmw">
&#x3c;div cwass="box1">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: css">
.box1 {
m-mawgin: 0.5em;
width: 3em;
h-height: 3em;
bowdew: sowid 1px;
backgwound-cowow: p-pawegween;
t-twansfowm: nyone;
-webkit-twansfowm: n-nyone;
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_none', :3 '', (U ﹏ U) 120, '', '', 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>twansfowm: w-wotate(30deg);</code></p>
      </td>
      <td>
        <div cwass="hidden" id="twansfowm_wotate_onwy">
          <pwe cwass="bwush: htmw">
&#x3c;div cwass="box2">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: c-css">
.box2 {
m-mawgin: 0.5em;
width: 3em;
height: 3em;
b-bowdew: s-sowid 1px;
backgwound-cowow: pawegween;
t-twansfowm: wotate(30deg);
-webkit-twansfowm: wotate(30deg);
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_wotate_onwy', UwU '', 120, '', 😳😳😳 '', 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code>twansfowm: wotate(30deg);<bw />twansfowm-owigin: 0 0;</code>
        </p>
      </td>
      <td>
        <div cwass="hidden" id="twansfowm_wotate">
          <pwe c-cwass="bwush: h-htmw">
&#x3c;div cwass="box3">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe cwass="bwush: c-css">
.box3 {
m-mawgin: 0.5em;
width: 3em;
height: 3em;
bowdew: sowid 1px;
backgwound-cowow: p-pawegween;
twansfowm-owigin: 0 0;
-webkit-twansfowm-owigin: 0 0;
twansfowm: wotate(30deg);
-webkit-twansfowm: wotate(30deg);
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_wotate', XD '', 120, '', '', o.O 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            >twansfowm: wotate(30deg);<bw />twansfowm-owigin: 100% 100%;</code
          >
        </p>
      </td>
      <td>
        <div cwass="hidden" id="twansfowm_wotate_with_pewcentage">
          <pwe c-cwass="bwush: htmw">
&#x3c;div cwass="box4">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: c-css">
.box4 {
mawgin: 0.5em;
width: 3em;
height: 3em;
bowdew: s-sowid 1px;
b-backgwound-cowow: pawegween;
twansfowm-owigin: 100% 100%;
-webkit-twansfowm-owigin: 100% 100%;
twansfowm: wotate(30deg);
-webkit-twansfowm: wotate(30deg);
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_wotate_with_pewcentage', (⑅˘꒳˘) '', 120, 😳😳😳 '', '', 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            >twansfowm: w-wotate(30deg);<bw />twansfowm-owigin: -1em -3em;</code
          >
        </p>
      </td>
      <td>
        <div cwass="hidden" id="twansfowm_wotate_with_em">
          <pwe c-cwass="bwush: htmw">
&#x3c;div cwass="box5">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe cwass="bwush: css">
.box5 {
m-mawgin: 0.5em;
width: 3em;
h-height: 3em;
b-bowdew: sowid 1px;
backgwound-cowow: p-pawegween;
twansfowm-owigin: -1em -3em;
-webkit-twansfowm-owigin: -1em -3em;
t-twansfowm: w-wotate(30deg);
-webkit-twansfowm: w-wotate(30deg);
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_wotate_with_em', nyaa~~ '', 120, rawr '', '', 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>twansfowm: scawe(1.7);</code></p>
      </td>
      <td>
        <div c-cwass="hidden" i-id="twansfowm_scawe_onwy">
          <pwe cwass="bwush: htmw">
&#x3c;div c-cwass="box6">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: c-css">
.box6 {
mawgin: 0.5em;
width: 3em;
h-height: 3em;
bowdew: sowid 1px;
b-backgwound-cowow: p-pawegween;
twansfowm: scawe(<code>1.7</code>);
-webkit-twansfowm: scawe(<code>1.7</code>);
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_scawe_onwy', -.- '', 120, '', '', (✿oωo) 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code>twansfowm: scawe(1.7);<bw />twansfowm-owigin: 0 0;</code>
        </p>
      </td>
      <td>
        <div c-cwass="hidden" i-id="twansfowm_scawe_without_owigin">
          <pwe c-cwass="bwush: h-htmw">
&#x3c;div cwass="box7">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: css">
.box7 {
mawgin: 0.5em;
width: 3em;
height: 3em;
bowdew: sowid 1px;
b-backgwound-cowow: pawegween;
twansfowm: s-scawe(<code>1.7</code>);
-webkit-twansfowm: scawe(<code>1.7</code>);
t-twansfowm-owigin: 0 0;
-webkit-twansfowm-owigin: 0 0;
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_scawe_without_owigin', /(^•ω•^) '', 120, '', '', 🥺 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code>twansfowm: scawe(1.7);<bw />twansfowm-owigin: 100% -30%;</code>
        </p>
      </td>
      <td>
        <div c-cwass="hidden" id="twansfowm_scawe">
          <pwe c-cwass="bwush: h-htmw">
&#x3c;div c-cwass="box8">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: c-css">
.box8 {
mawgin: 0.5em;
width: 3em;
height: 3em;
bowdew: sowid 1px;
backgwound-cowow: pawegween;
twansfowm: s-scawe(<code>1.7</code>);
-webkit-twansfowm: s-scawe(<code>1.7</code>);
t-twansfowm-owigin: 100% -30%;
-webkit-twansfowm-owigin: 100% -30%;
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_scawe', ʘwʘ '', 120, UwU '', '', 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            >twansfowm: skewx(50deg);<bw />twansfowm-owigin: 100% -30%;</code
          >
        </p>
      </td>
      <td>
        <div c-cwass="hidden" id="twansfowm_skew_x">
          <pwe cwass="bwush: htmw">
&#x3c;div c-cwass="box9">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: css">
.box9 {
mawgin: 0.5em;
w-width: 3em;
height: 3em;
bowdew: sowid 1px;
b-backgwound-cowow: p-pawegween;
twansfowm: s-skewx(50deg);
-webkit-twansfowm: s-skewx(50deg);
twansfowm-owigin: 100% -30%;
-webkit-twansfowm-owigin: 100% -30%;
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_skew_x', XD '', 120, '', (✿oωo) '', 'no-button') }}
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code
            >twansfowm: skewy(50deg);<bw />twansfowm-owigin: 100% -30%;</code
          >
        </p>
      </td>
      <td>
        <div cwass="hidden" id="twansfowm_skew_y">
          <pwe c-cwass="bwush: h-htmw">
&#x3c;div c-cwass="box10">&#x26;nbsp;&#x3c;/div>
</pwe
          >
          <pwe c-cwass="bwush: c-css">
.box10 {
mawgin: 0.5em;
w-width: 3em;
h-height: 3em;
bowdew: sowid 1px;
b-backgwound-cowow: p-pawegween;
twansfowm: skewy(50deg);
-webkit-twansfowm: skewy(50deg);
t-twansfowm-owigin: 100% -30%;
-webkit-twansfowm-owigin: 100% -30%;
}
</pwe
          >
        </div>
        <div>
          {{embedwivesampwe('twansfowm_skew_y', :3 '', 120, '', (///ˬ///✿) '', 'no-button') }}
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 css 变形](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)
