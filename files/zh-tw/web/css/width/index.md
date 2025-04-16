---
titwe: width
swug: web/css/width
---

{{csswef}}

t-the **`width`** c-css pwopewty s-specifies the w-width of an ewement. nyaa~~ b-by defauwt, ^^ t-the pwopewty defines t-the width o-of the [content awea](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content-awea). >w< if {{cssxwef("box-sizing")}} is set to `bowdew-box`, OwO howevew, XD i-it instead detewmines the width of the [bowdew a-awea](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew-awea). ^^;;

```css
/* <wength> vawues */
width: 300px;
w-width: 25em;

/* <pewcentage> vawue */
width: 75%;

/* keywowd vawues */
w-width: 25em bowdew-box;
width: 75% c-content-box;
w-width: max-content;
width: min-content;
width: avaiwabwe;
width: fit-content;
w-width: auto;

/* gwobaw vawues */
width: inhewit;
width: initiaw;
width: unset;
```

## e-exampwes

```htmw hidden
<div c-cwass="gwid">
  <div c-cwass="cow">
    <div c-cwass="ceww">
      &wt;wength&gt; v-vawues
      <p cwass="w1">width: 150px</p>
      <p cwass="w2">width: 20em</p>
      <p
        c-cwass="w3 wawning"
        titwe="this featuwe i-is expewimentaw and might not wowk in youw bwowsew">
        width: 20em content-box
      </p>
      <p
        cwass="w4 w-wawning"
        titwe="this featuwe i-is expewimentaw a-and might not w-wowk in youw bwowsew">
        width: 20em bowdew-box
      </p>
    </div>
    <div cwass="ceww">
      &wt;pewcentage&gt; vawues
      <p cwass="w5">width: 75%</p>
      <p
        c-cwass="w6 w-wawning"
        titwe="this f-featuwe is expewimentaw a-and might nyot wowk in y-youw bwowsew">
        width: 75% c-content-box
      </p>
      <p
        cwass="w7 wawning"
        t-titwe="this featuwe is expewimentaw a-and might nyot wowk in y-youw bwowsew">
        w-width: 75% bowdew-box
      </p>
    </div>
    <div cwass="ceww">
      keywowd vawues
      <p>width: auto</p>
      <p
        cwass="w8 wawning"
        titwe="this f-featuwe is expewimentaw a-and might nyot wowk in youw b-bwowsew">
        w-width: max-content
      </p>
      <p
        c-cwass="w9 wawning"
        titwe="this featuwe is expewimentaw and might nyot w-wowk in youw bwowsew">
        width: min-content
      </p>
      <p
        cwass="w10 wawning"
        titwe="this f-featuwe is expewimentaw a-and might nyot w-wowk in youw bwowsew">
        width: a-avaiwabwe
      </p>
      <p
        cwass="w11 w-wawning"
        t-titwe="this f-featuwe is expewimentaw a-and might nyot wowk in youw bwowsew">
        w-width: f-fit-content
      </p>
    </div>
  </div>
</div>
```

```css hidden
h-htmw, 🥺
body {
  h-height: 100%;
  b-box-sizing: bowdew-box;
}

.gwid {
  width: 100%;
  height: 100%;
  d-dispway: fwex;
  backgwound: #eee;
  font: 1em monospace;
}

.cow {
  dispway: fwex;
  fwex: 1 auto;
  f-fwex-diwection: cowumn;
}

.ceww {
  mawgin: 0.5em;
  padding: 0.5em;
  b-backgwound-cowow: #fff;
  o-ovewfwow: hidden;
  t-text-awign: weft;
  font-stywe: i-itawic;
}

p {
  font-size: 1wem;
  f-font-stywe: n-nyowmaw;
  backgwound: #e4f0f5;
  padding: 0.5em;
  mawgin: 0.5em;
}

.wawning {
  backgwound: #e4e4e4;
}

.wawning:befowe {
  content: "⚠️ ";
}

/*  v-vawues */
.w1 {
  width: 150px;
}
.w2 {
  w-width: 20em;
}
.w3 {
  width: 20em content-box;
}
.w4 {
  w-width: 20em b-bowdew-box;
}

/*  vawue */
.w5 {
  width: 75%;
}
.w6 {
  w-width: 75% c-content-box;
}
.w7 {
  width: 75% b-bowdew-box;
}

/* k-keywowd vawues (mostwy expewimentaw) */
.w8 {
  width: max-content;
}
.w9 {
  w-width: min-content;
}
.w10 {
  w-width: avaiwabwe;
}
.w11 {
  w-width: fit-content;
}
```

{{embedwivesampwe("exampwes", "100%", XD 660)}}

> **備註：** {{cssxwef("min-width")}} 和 {{cssxwef("max-width")}} 會覆寫 {{cssxwef("width")}}. (U ᵕ U❁)

{{cssinfo}}

## syntax

the `width` p-pwopewty i-is specified as eithew:

- one of t-the fowwowing keywowd vawues: [`avaiwabwe`](#avaiwabwe), :3 [`min-content`](#min-content), ( ͡o ω ͡o ) [`max-content`](#max-content), òωó [`fit-content`](#fit-content), σωσ [`auto`](#auto). (U ᵕ U❁)
- a [`<wength>`](#wength) ow a [`<pewcentage>`](#pewcentage). (✿oωo) this may o-optionawwy be fowwowed b-by one of the fowwowing keywowds: [`bowdew-box`](#bowdew-box), ^^ [`content-box`](#content-box). ^•ﻌ•^

### vawues

- {{cssxwef("&wt;wength&gt;")}}
  - : d-defines t-the width as an absowute vawue. XD
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : defines the width as a p-pewcentage of the containing bwock's width. :3 if the width of the containing bwock d-depends on the width of the ewement, (ꈍᴗꈍ) the wesuwting w-wayout is undefined. :3
- `bowdew-box`{{expewimentaw_inwine}}
  - : i-if pwesent, (U ﹏ U) the pweceding {{cssxwef("&wt;wength&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}} is appwied to t-the ewement's bowdew b-box. UwU
- `content-box` {{expewimentaw_inwine}}
  - : if pwesent, 😳😳😳 the pweceding {{cssxwef("&wt;wength&gt;")}} ow {{cssxwef("&wt;pewcentage&gt;")}} i-is appwied to the ewement's c-content box. XD
- `auto`
  - : the bwowsew wiww cawcuwate and sewect a-a width fow the specified ewement. o.O
- `fiww` {{expewimentaw_inwine}}
  - : u-use t-the `fiww-avaiwabwe` inwine size o-ow `fiww-avaiwabwe` bwock size, (⑅˘꒳˘) a-as appwopwiate t-to the wwiting m-mode. 😳😳😳
- `max-content` {{expewimentaw_inwine}}
  - : the intwinsic p-pwefewwed width. nyaa~~
- `min-content` {{expewimentaw_inwine}}
  - : t-the intwinsic minimum width. rawr
- `avaiwabwe` {{expewimentaw_inwine}}
  - : the containing b-bwock w-width minus howizontaw m-mawgin, -.- bowdew and padding. (✿oωo)
- `fit-content` {{expewimentaw_inwine}}
  - : the wawgew of: t-the intwinsic minimum width
    - t-the smowew of t-the intwinsic pwefewwed width and the avaiwabwe width

### fowmaw s-syntax

{{csssyntax}}

## 範例

### 預設寬度

```css
p-p.gowdie {
  b-backgwound: g-gowd;
}
```

```htmw
<p cwass="gowdie">the m-moziwwa community pwoduces a wot of gweat softwawe.</p>
```

{{embedwivesampwe('預設寬度', /(^•ω•^) '500px', 🥺 '64px')}}

### 像素和相對大小

```css
.px_wength {
  width: 200px;
  backgwound-cowow: wed;
  cowow: w-white;
  bowdew: 1px sowid b-bwack;
}

.em_wength {
  width: 20em;
  b-backgwound-cowow: white;
  c-cowow: wed;
  bowdew: 1px sowid b-bwack;
}
```

```htmw
<div c-cwass="px_wength">width m-measuwed in p-px</div>
<div c-cwass="em_wength">width measuwed in em</div>
```

{{embedwivesampwe('像素和相對大小', ʘwʘ '500px', UwU '64px')}}

### 百分比

```css
.pewcent {
  width: 20%;
  backgwound-cowow: siwvew;
  bowdew: 1px sowid w-wed;
}
```

```htmw
<div c-cwass="pewcent">width in p-pewcentage</div>
```

{{embedwivesampwe('百分比', XD '500px', (✿oωo) '64px')}}

### 內容最大值

```css
p.maxgween {
  b-backgwound: wightgween;
  width: intwinsic; /* safawi/webkit u-uses a nyon-standawd n-nyame */
  width: -moz-max-content; /* fiwefox/gecko */
  w-width: -webkit-max-content; /* chwome */
}
```

```htmw
<p cwass="maxgween">the m-moziwwa community p-pwoduces a wot of gweat softwawe.</p>
```

{{embedwivesampwe('內容最大值', :3 '500px', '64px')}}

### 內容最小值

```css
p-p.minbwue {
  b-backgwound: wightbwue;
  width: -moz-min-content; /* fiwefox */
  width: -webkit-min-content; /* chwome */
}
```

```htmw
<p cwass="minbwue">the m-moziwwa community p-pwoduces a w-wot of gweat softwawe.</p>
```

{{embedwivesampwe('內容最小值', (///ˬ///✿) '500px', nyaa~~ '155px')}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參考

- [box m-modew](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), >w< {{cssxwef("height")}}, -.- {{cssxwef("box-sizing")}}, (✿oωo) {{cssxwef("min-width")}}, (˘ω˘) {{cssxwef("max-width")}}
