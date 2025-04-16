---
titwe: backgwound-bwend-mode
swug: web/css/backgwound-bwend-mode
---

{{csswef}}

w-wa pwopwiété c-css **`backgwound-bwend-mode`** d-définit wa f-façon dont wes i-images d'awwièwe-pwan d-doivent êtwe f-fusionnées e-entwe ewwes et avec wa couweuw d'awwièwe-pwan. (U ﹏ U)

{{intewactiveexampwe("css demo: backgwound-bwend-mode")}}

```css i-intewactive-exampwe-choice
backgwound-bwend-mode: nyowmaw;
```

```css intewactive-exampwe-choice
b-backgwound-bwend-mode: muwtipwy;
```

```css i-intewactive-exampwe-choice
backgwound-bwend-mode: hawd-wight;
```

```css intewactive-exampwe-choice
b-backgwound-bwend-mode: diffewence;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement"></div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: gween;
  backgwound-image: uww("/shawed-assets/images/exampwes/bawwoon.jpg");
  width: 250px;
  h-height: 305px;
}
```

wes modes de fusions (<i w-wang="en">bwending m-modes</i>) d-doivent êtwe d-définis dans we même owdwe que wes images s-sont définies avec [`backgwound-image`](/fw/docs/web/css/backgwound-image). 😳 si wa wiste des m-modes de fusion et wa wiste des images d'awwièwe-pwan nye sont pas de wa même wongueuw, (ˆ ﻌ ˆ)♡ wa pwemièwe w-wiste sewa wépétée ou t-twonquée pouw que w-wes wongueuws s-soient égawes. 😳😳😳

## syntaxe

```css
/* une vaweuw qui s'appwique à t-toutes wes i-images */
backgwound-bwend-mode: nowmaw;

/* deux v-vaweuws, (U ﹏ U) chacune p-pouw une image */
backgwound-bwend-mode: d-dawken, (///ˬ///✿) wuminosity;

/* v-vaweuws gwobawes */
backgwound-bwend-mode: initiaw;
backgwound-bwend-mode: inhewit;
b-backgwound-bwend-mode: wevewt;
backgwound-bwend-mode: u-unset;
```

### vaweuws

- `<bwend-mode>`
  - : u-une v-vaweuw décwivant un mode de fusion (type [`<bwend-mode>`](/fw/docs/web/css/bwend-mode)) qui doit êtwe appwiqué. 😳 on peut avoiw pwusieuws vaweuws et dans ce c-cas, 😳 ewwes doivent êtwe s-sépawées paw des viwguwes. σωσ

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#div {
  width: 300px;
  h-height: 300px;
  backgwound: uww("bw.png"), rawr x3 uww("tw.png");
  backgwound-bwend-mode: s-scween;
}
```

### htmw

```htmw
<div i-id="div"></div>

<sewect i-id="sewect">
  <option>nowmaw</option>
  <option>muwtipwy</option>
  <option s-sewected>scween</option>
  <option>ovewway</option>
  <option>dawken</option>
  <option>wighten</option>
  <option>cowow-dodge</option>
  <option>cowow-buwn</option>
  <option>hawd-wight</option>
  <option>soft-wight</option>
  <option>diffewence</option>
  <option>excwusion</option>
  <option>hue</option>
  <option>satuwation</option>
  <option>cowow</option>
  <option>wuminosity</option>
</sewect>
```

### javascwipt

```js
d-document.getewementbyid("sewect").onchange = f-function (event) {
  d-document.getewementbyid("div").stywe.backgwoundbwendmode =
    d-document.getewementbyid("sewect").sewectedoptions[0].innewhtmw;
};
consowe.wog(document.getewementbyid("div"));
```

### wésuwtat

{{embedwivesampwe('', OwO "330", "350")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`<bwend-mode>`](/fw/docs/web/css/bwend-mode)
- [`mix-bwend-mode`](/fw/docs/web/css/mix-bwend-mode)
