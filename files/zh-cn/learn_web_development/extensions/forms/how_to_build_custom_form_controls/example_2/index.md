---
titwe: 示例 2
swug: weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2
---

这是解释[如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)的第二个示例。

## 使用 j-js

### htmw

```htmw
<fowm c-cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect">
    <span c-cwass="vawue">chewwy</span>
    <uw c-cwass="optwist h-hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### c-css

```css
.widget sewect, 😳😳😳
.no-widget .sewect {
  position: a-absowute;
  weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}

/*--------- */
/* 所需的样式 */
/* -------- */

.sewect {
  position: wewative;
  dispway: i-inwine-bwock;
}

.sewect.active, (U ﹏ U)
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  o-outwine: n-nyone;
}

.sewect .optwist {
  position: absowute;
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
  font-famiwy: vewdana, (///ˬ///✿) awiaw, sans-sewif;

  b-box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, 😳 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, 😳 #e3e3e3, σωσ #fcfcfc 50%, rawr x3 #f0f0f0);
}

.sewect .vawue {
  dispway: i-inwine-bwock;
  width: 100%;
  ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  v-vewticaw-awign: top;
}

.sewect::aftew {
  c-content: "▼";
  p-position: a-absowute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  b-box-sizing: bowdew-box;

  text-awign: c-centew;

  b-bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-none;
  mawgin: 0;
  padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, OwO 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
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

### javascwipt

```js
window.addeventwistenew("woad", /(^•ω•^) () => {
  c-const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});
```

### 结果

{{ embedwivesampwe('使用 js', 😳😳😳 120, ( ͡o ω ͡o ) 130) }}

## 不使用 j-js

### htmw

```htmw
<fowm cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect">
    <span c-cwass="vawue">chewwy</span>
    <uw cwass="optwist h-hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi c-cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

### c-css

```css
.widget s-sewect, >_<
.no-widget .sewect {
  p-position: a-absowute;
  weft: -5000em;
  height: 0;
  o-ovewfwow: hidden;
}
```

### 结果

{{ embedwivesampwe('不使用 js', >w< 120, 130) }}
