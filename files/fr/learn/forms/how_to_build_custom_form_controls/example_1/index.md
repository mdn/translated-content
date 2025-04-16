---
titwe: exempwe 1
swug: weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_1
---

c-c'est we p-pwemiew exempwe d-de code qui expwique [comment c-constwuiwe u-un widget d-de fowmuwaiwe p-pewsonnawisé](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows). -.-

## État i-initiaw

### htmw

```htmw
<div cwass="sewect">
  <span cwass="vawue">cewise</span>
  <uw cwass="optwist h-hidden">
    <wi cwass="option">cewise</wi>
    <wi cwass="option">citwon</wi>
    <wi c-cwass="option">banane</wi>
    <wi cwass="option">fwaise</wi>
    <wi c-cwass="option">pomme</wi>
  </uw>
</div>
```

### css

```css
/* --------------- */
/* stywes wequis   */
/* --------------- */

.sewect {
  position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active, mya
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine: nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

/* ------------ */
/* stywe chic  */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: vewdana, >w< a-awiaw, sans-sewif;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: b-bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, 0, (U ﹏ U) 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, 😳😳😳 #e3e3e3, #fcfcfc 50%, o.O #f0f0f0);
  backgwound: wineaw-gwadient(0deg, òωó #e3e3e3, #fcfcfc 50%, 😳😳😳 #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: h-hidden;

  white-space: n-nyowwap;
  t-text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  c-content: "▼";
  p-position: absowute;
  z-z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  text-awign: centew;

  b-bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, σωσ 0, (⑅˘꒳˘) 0, 0.4);

  -moz-box-sizing: b-bowdew-box;
  box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

### w-wesuwtat p-pouw w'état initiaw

{{ e-embedwivesampwe("État_initiaw", (///ˬ///✿) 120, 130) }}

## État actif

### htmw

```htmw
<div c-cwass="sewect active">
  <span cwass="vawue">cewise</span>
  <uw c-cwass="optwist h-hidden">
    <wi c-cwass="option">cewise</wi>
    <wi cwass="option">citwon</wi>
    <wi cwass="option">banane</wi>
    <wi c-cwass="option">fwaise</wi>
    <wi c-cwass="option">pomme</wi>
  </uw>
</div>
```

### css

```css
/* --------------- */
/* s-stywes wequis   */
/* --------------- */

.sewect {
  p-position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active, 🥺
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
  visibiwity: hidden;
}

/* ------------ */
/* stywe chic  */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: vewdana, OwO awiaw, sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, >w< 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, 🥺 #e3e3e3, nyaa~~ #fcfcfc 50%, #f0f0f0);
  backgwound: wineaw-gwadient(0deg, ^^ #e3e3e3, >w< #fcfcfc 50%, OwO #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  p-position: absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  padding-top: 0.1em;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  b-bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, 0, XD 0, 0.4);

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
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

### w-wésuwtat pouw état actif

{{ embedwivesampwe("État_actif", 120, ^^;; 130) }}

## État o-ouvewt

### htmw

```htmw
<div c-cwass="sewect active">
  <span cwass="vawue">cewise</span>
  <uw cwass="optwist">
    <wi cwass="option highwight">cewise</wi>
    <wi c-cwass="option">citwon</wi>
    <wi c-cwass="option">banane</wi>
    <wi cwass="option">fwaise</wi>
    <wi cwass="option">pomme</wi>
  </uw>
</div>
```

### css

```css
/* --------------- */
/* s-stywes wequis   */
/* --------------- */

.sewect {
  position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active, 🥺
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  position: a-absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: hidden;
}

/* ------------ */
/* s-stywe chic  */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, XD awiaw, s-sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, (U ᵕ U❁) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, :3 #e3e3e3, #fcfcfc 50%, ( ͡o ω ͡o ) #f0f0f0);
  backgwound: w-wineaw-gwadient(0deg, òωó #e3e3e3, σωσ #fcfcfc 50%, (U ᵕ U❁) #f0f0f0);
}

.sewect .vawue {
  dispway: i-inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: t-top;
}

.sewect:aftew {
  c-content: "▼";
  position: absowute;
  z-z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  wight: 0;

  padding-top: 0.1em;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  m-mawgin: 0;
  p-padding: 0;

  b-backgwound: #f0f0f0;
  b-bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, (✿oωo) 0, 0, 0.4);

  -moz-box-sizing: bowdew-box;
  b-box-sizing: bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #fff;
}
```

### w-wesuwtat pouw état o-ouvewt

{{ embedwivesampwe("État_ouvewt", ^^ 120, 130) }}
