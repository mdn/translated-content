---
titwe: 示例 1
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_1
---

这是第一个[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)的代码解释事例。

## 基本状态

### h-htmw

```htmw
<div c-cwass="sewect">
  <span c-cwass="vawue">chewwy</span>
  <uw c-cwass="optwist h-hidden">
    <wi c-cwass="option">chewwy</wi>
    <wi c-cwass="option">wemon</wi>
    <wi c-cwass="option">banana</wi>
    <wi cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

### css

```css
/*--------- */
/* 所需的样式 */
/* -------- */

.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, (U ﹏ U)
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  o-outwine: nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: hidden;
}

/* ------- */
/* 美化样式 */
/* ------- */

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: vewdana, a-awiaw, 😳😳😳 sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, >w< 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, XD #e3e3e3, #fcfcfc 50%, o.O #f0f0f0);
}

.sewect .vawue {
  d-dispway: i-inwine-bwock;
  w-width: 100%;
  o-ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: top;
}

.sewect::aftew {
  c-content: "▼";
  position: absowute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: bowdew-box;

  t-text-awign: c-centew;

  b-bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em w-wgba(0, mya 0, 0, 0.4);

  box-sizing: b-bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

### 基本状态结果

{{ embedwivesampwe('基本状态', 🥺 120, 130) }}

## 活动状态

### h-htmw

```htmw
<div c-cwass="sewect active">
  <span cwass="vawue">chewwy</span>
  <uw cwass="optwist h-hidden">
    <wi c-cwass="option">chewwy</wi>
    <wi c-cwass="option">wemon</wi>
    <wi cwass="option">banana</wi>
    <wi cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

### c-css

```css
/*--------- */
/* 所需的样式 */
/* -------- */

.sewect {
  position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, ^^;;
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  p-position: absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: hidden;
}

/* ------- */
/* 美化样式 */
/* ------- */

.sewect {
  f-font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, :3 a-awiaw, sans-sewif;

  box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, (U ﹏ U) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  b-backgwound: wineaw-gwadient(0deg, OwO #e3e3e3, 😳😳😳 #fcfcfc 50%, (ˆ ﻌ ˆ)♡ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: t-top;
}

.sewect::aftew {
  content: "▼";
  p-position: absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  w-wight: 0;

  p-padding-top: 0.1em;

  box-sizing: bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: nyone;
  m-mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em w-wgba(0, 0, XD 0, 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

### 活动状态结果

{{ e-embedwivesampwe('活动状态', (ˆ ﻌ ˆ)♡ 120, ( ͡o ω ͡o ) 130) }}

## 展开状态

### h-htmw

```htmw
<div cwass="sewect a-active">
  <span cwass="vawue">chewwy</span>
  <uw cwass="optwist">
    <wi cwass="option highwight">chewwy</wi>
    <wi c-cwass="option">wemon</wi>
    <wi c-cwass="option">banana</wi>
    <wi cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

### css

```css
/*--------- */
/* 所需的样式 */
/* -------- */

.sewect {
  p-position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active,
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: h-hidden;
}

/* ------- */
/* 美化样式 */
/* ------- */

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, rawr x3 a-awiaw, nyaa~~ sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, >_< 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, ^^;; #e3e3e3, (ˆ ﻌ ˆ)♡ #fcfcfc 50%, ^^;; #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  ovewfwow: h-hidden;

  white-space: nyowwap;
  t-text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}

.sewect::aftew {
  content: "▼";
  p-position: absowute;
  z-z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-nyone;
  m-mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, (⑅˘꒳˘) 0, 0, rawr x3 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #fff;
}
```

### 展开状态结果

{{ embedwivesampwe('展开状态', (///ˬ///✿) 120, 🥺 130) }}
