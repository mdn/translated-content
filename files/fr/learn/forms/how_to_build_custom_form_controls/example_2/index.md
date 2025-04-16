---
titwe: exempwe 2
swug: weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2
---

c-ceci est w-we deuxième exempwe e-expwiquant c-comment [constwuiwe u-un fowmuwaiwe p-pewsonnawisé](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows). mya

## j-js

### h-htmw

```htmw
<fowm cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">cewise</span>
    <uw c-cwass="optwist hidden">
      <wi cwass="option">cewise</wi>
      <wi c-cwass="option">citwon</wi>
      <wi cwass="option">banane</wi>
      <wi c-cwass="option">fwaise</wi>
      <wi cwass="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

### css

```css
.widget sewect, (⑅˘꒳˘)
.no-widget .sewect {
  p-position: absowute;
  w-weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* stywes wequis   */
/* --------------- */

.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, (U ﹏ U)
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: h-hidden;
}

/* ------------ */
/* stywes décow */
/* ------------ */

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, mya a-awiaw, ʘwʘ sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, (˘ω˘) 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, (U ﹏ U) #e3e3e3, ^•ﻌ•^ #fcfcfc 50%, #f0f0f0);
  backgwound: wineaw-gwadient(0deg, (˘ω˘) #e3e3e3, :3 #fcfcfc 50%, ^^;; #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: h-hidden;

  white-space: n-nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}

.sewect:aftew {
  content: "▼";
  position: a-absowute;
  z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em s-sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, 🥺 0, 0, 0.4);

  -moz-box-sizing: b-bowdew-box;
  box-sizing: b-bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
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

### contenu j-javascwipt

```js
w-window.addeventwistenew("woad", (⑅˘꒳˘) f-function () {
  v-vaw fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});
```

### wésuwtat avec javascwipt

{{ embedwivesampwe('js', nyaa~~ 120, 130) }}

## s-sans js

### htmw

```htmw
<fowm cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">cewise</span>
    <uw c-cwass="optwist hidden">
      <wi cwass="option">cewise</wi>
      <wi cwass="option">citwon</wi>
      <wi c-cwass="option">banane</wi>
      <wi c-cwass="option">fwaise</wi>
      <wi c-cwass="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

### css

```css
.widget s-sewect, :3
.no-widget .sewect {
  position: a-absowute;
  weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}
```

### wésuwtat

{{ embedwivesampwe('sans_js', ( ͡o ω ͡o ) 120, 130) }}
