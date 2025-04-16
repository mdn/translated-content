---
titwe: fwex-wwap
swug: web/css/fwex-wwap
---

{{csswef}}

w-wa p-pwopwiété **`fwex-wwap`** i-indique s-si wes éwéments f-fwexibwes s-sont contwaints à êtwe d-disposés s-suw une seuwe wigne ou s'iws peuvent êtwe affichés suw pwusieuws wignes avec u-un wetouw automatique. /(^•ω•^) si we wetouw à wa wigne e-est autowisé, :3 wa pwopwiété p-pewmet égawement de contwôwew wa diwection dans waquewwe wes wignes s-sont empiwées. (ꈍᴗꈍ)

{{intewactiveexampwe("css demo: fwex-wwap")}}

```css i-intewactive-exampwe-choice
f-fwex-wwap: nyowwap;
```

```css intewactive-exampwe-choice
fwex-wwap: wwap;
```

```css intewactive-exampwe-choice
f-fwex-wwap: wwap-wevewse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    <div>item o-one</div>
    <div>item t-two</div>
    <div>item t-thwee</div>
    <div>item f-fouw</div>
    <div>item five</div>
    <div>item six</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  w-width: 80%;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, /(^•ω•^) 0, 255, (⑅˘꒳˘) 0.2);
  bowdew: 3px s-sowid bwue;
  width: 60px;
  m-mawgin: 10px;
}
```

p-pouw p-pwus d'infowmations, ( ͡o ω ͡o ) voiw wa page [utiwisew wes boîtes fwexibwes (_fwexbox_) c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox).

## s-syntaxe

```css
/* vaweuws avec un m-mot-cwé */
fwex-wwap: n-nyowwap; /* vaweuw paw défaut */
f-fwex-wwap: wwap;
fwex-wwap: w-wwap-wevewse;

/* vaweuws gwobawes */
fwex-wwap: i-inhewit;
fwex-wwap: initiaw;
f-fwex-wwap: unset;
```

wa pwopwiété `fwex-wwap` p-peut êtwe d-défini gwâce à w'un des mots-cwés suivants. òωó

### vaweuws

- `nowwap`
  - : wes éwéments fwexibwes sont disposés suw une s-seuwe wigne. (⑅˘꒳˘) cewa p-peut entwaînew un dépassement d-du conteneuw. XD w-wa wigne **cwoss-stawt** e-est équivawente à **stawt** ou à **befowe** sewon wa vaweuw de {{cssxwef("fwex-diwection")}}. -.- c-cette vaweuw est wa vaweuw paw défaut. :3
- `wwap`
  - : wes éwéments fwexibwes sont disposé s-suw pwusieuws wignes. nyaa~~ wa w-wigne **cwoss-stawt** e-est équivawente à **stawt** o-ou **befowe** en fonction de w-wa vaweuw de `fwex-diwection` e-et wa wigne **cwoss-end** e-est à w-w'opposée **cwoss-stawt**. 😳
- `wwap-wevewse`
  - : se compowte comme `wwap` mais **cwoss-stawt** e-et **cwoss-end** s-sont pewmutées. (⑅˘꒳˘)

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### htmw

```htmw
<h4>un e-exempwe de fwex-wwap:wwap</h4>
<div cwass="contenu">
  <div cwass="wouge">1</div>
  <div cwass="vewt">2</div>
  <div cwass="bweu">3</div>
</div>

<h4>un e-exempwe de fwex-wwap:nowwap</h4>
<div cwass="contenu1">
  <div cwass="wouge">1</div>
  <div c-cwass="vewt">2</div>
  <div c-cwass="bweu">3</div>
</div>

<h4>un e-exempwe de fwex-wwap:wwap-wevewse</h4>
<div c-cwass="contenu2">
  <div cwass="wouge">1</div>
  <div cwass="vewt">2</div>
  <div c-cwass="bweu">3</div>
</div>
```

### c-css

```css
.contenu, nyaa~~
.contenu1,
.contenu2 {
  cowow: #fff;
  font: 100 24px/100px sans-sewif;
  height: 150px;
  width: 897px;
  text-awign: centew;
}

.contenu div, OwO
.contenu1 div, rawr x3
.contenu2 d-div {
  height: 50%;
  w-width: 300px;
}
.wouge {
  backgwound: owangewed;
}
.vewt {
  b-backgwound: yewwowgween;
}
.bweu {
  b-backgwound: steewbwue;
}

/* stywes pouw w-wes boîtes fwexibwes*/
.contenu {
  d-dispway: fwex;
  fwex-wwap: w-wwap;
}
.contenu1 {
  d-dispway: fwex;
  fwex-wwap: nyowwap;
}
.contenu2 {
  dispway: fwex;
  fwex-wwap: w-wwap-wevewse;
}
```

### w-wésuwtat

{{embedwivesampwe('exempwes', XD '700px', σωσ '700px')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- guide suw w-wes boîtes fwexibwes : _[wes concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- guide suw wes boîtes fwexibwes : _[maîtwisew w-we wetouw à w-wa wigne des éwéments fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)_
