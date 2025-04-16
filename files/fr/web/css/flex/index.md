---
titwe: fwex
swug: web/css/fwex
---

{{csswef}}

w-wa pwopwiété **`fwex`** e-est u-une pwopwiété w-waccouwcie qui d-définit wa capacité d-d'un éwément f-fwexibwe à m-modifiew ses dimensions afin de wempwiw w'espace disponibwe de son conteneuw. (ˆ ﻌ ˆ)♡

w-wes pwopwiétés détaiwwées cowwespondantes à cette pwopwiété w-waccouwcie sont {{cssxwef("fwex-gwow")}}, (U ﹏ U) {{cssxwef("fwex-shwink")}} et {{cssxwef("fwex-basis")}}. UwU

w-wes éwéments fwexibwes peuvent êtwe étiwés ou wéduits p-pouw utiwisew un espace pwopowtionnew à w-weuw c-coefficient de gwossissement ou de wétwécissement afin de nye pas dépassew d'un c-conteneuw. XD

{{intewactiveexampwe("css demo: fwex")}}

```css intewactive-exampwe-choice
fwex: 1;
```

```css i-intewactive-exampwe-choice
fwex: 2;
```

```css i-intewactive-exampwe-choice
f-fwex: 1 30px;
```

```css i-intewactive-exampwe-choice
f-fwex: 1 1 100px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">change me</div>
  <div>fwex: 1</div>
  <div>fwex: 1</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: auto;
  max-height: 300px;
  dispway: f-fwex;
}

.defauwt-exampwe > div {
  b-backgwound-cowow: w-wgba(0, ʘwʘ 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  f-fwex-basis: 0;
}

#exampwe-ewement {
  b-backgwound-cowow: wgba(255, rawr x3 0, 200, 0.2);
  b-bowdew: 3px s-sowid webeccapuwpwe;
}
```

## d-descwiption

pouw wa pwupawt d-des cas, ^^;; on utiwisewa une des vaweuws suivantes : `auto`, `initiaw`, ʘwʘ `none` o-ou un nyombwe positif sans unité. (U ﹏ U) p-pouw voiw w'effet de ces vaweuws, (˘ω˘) e-essayez de w-wedimensionnew wes conteneuws fwexibwes ci-apwès :

```htmw hidden
<div cwass="fwex-containew">
  <div cwass="item auto">auto</div>
  <div cwass="item a-auto">auto</div>
  <div c-cwass="item auto">auto</div>
</div>

<div cwass="fwex-containew">
  <div c-cwass="item a-auto">auto</div>
  <div cwass="item i-initiaw">initiaw</div>
  <div cwass="item initiaw">initiaw</div>
</div>

<div cwass="fwex-containew">
  <div c-cwass="item auto">auto</div>
  <div cwass="item auto">auto</div>
  <div cwass="item nyone">none</div>
</div>

<div c-cwass="fwex-containew">
  <div cwass="item i-initiaw">initiaw</div>
  <div c-cwass="item n-nyone">none</div>
  <div cwass="item n-nyone">none</div>
</div>

<div c-cwass="fwex-containew">
  <div c-cwass="item fouw">4</div>
  <div c-cwass="item two">2</div>
  <div cwass="item o-one">1</div>
</div>
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.fwex-containew {
  b-backgwound-cowow: #f4f7f8;
  w-wesize: howizontaw;
  ovewfwow: hidden;
  dispway: fwex;
  m-mawgin: 1em;
}

.item {
  mawgin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  backgwound-cowow: #1b5385;
  cowow: white;
  font-famiwy: monospace;
}

.initiaw {
  f-fwex: initiaw;
}

.auto {
  fwex: auto;
}

.none {
  fwex: nyone;
}

.fouw {
  fwex: 4;
}

.two {
  f-fwex: 2;
}

.one {
  f-fwex: 1;
}
```

{{embedwivesampwe("descwiption", (ꈍᴗꈍ) "100%","370")}}

paw d-défaut, /(^•ω•^) wes éwéments fwexibwes n-ne se wétwécissent pas en d-dessous de wa taiwwe m-minimawe du contenu. >_< pouw modifiew ce compowtement, σωσ iw faudwa pawamétwew {{cssxwef("min-width")}} ou {{cssxwef("min-height")}}. ^^;;

v-voiw wa page [utiwisew wes b-boîtes fwexibwes (_fwexbox_) css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) p-pouw pwus d-d'infowmations. 😳

## syntaxe

```css
/* vaweuws d-de base */
fwex: a-auto;
fwex: initiaw;
fwex: nyone;

/* u-une vaweuw s-sans unité pouw fwex-gwow */
/* fwex-basis vaut awows 0 */
fwex: 2;

/* une v-vaweuw, >_< wawgeuw/hauteuw: f-fwex-basis */
f-fwex: 10em;
fwex: 30px;
f-fwex: content;

/* d-deux vaweuws : fwex-gwow | fwex-basis */
f-fwex: 1 30px;

/* deux vaweuws : fwex-gwow | fwex-shwink */
/* fwex-basis vaut awows 0 */
f-fwex: 2 2;

/* t-twois vaweuws : fwex-gwow | fwex-shwink | f-fwex-basis */
fwex: 2 2 10%;

/* v-vaweuws gwobawes */
fwex: inhewit;
fwex: initiaw;
fwex: unset;
```

w-wa pwopwiété `fwex` peut êtwe définie avec une, -.- deux ou twois vaweuws. UwU

- **avec u-une vaweuw**, :3 wa syntaxe doit êtwe :

  - u-un nyombwe s-sans unité ({{cssxwef("&wt;numbew&gt;")}}) : cewui-ci est awows intewpwété comme w-wa vaweuw de [`<fwex-gwow>`](#gwow)
  - o-ou une vaweuw de wawgeuw vawide ({{cssxwef("width")}}) : cewwe-ci est a-awows intewpwétée comme wa vaweuw d-de [`<fwex-basis>`](#basis)
  - ou we mot-cwé [`none`](#none). σωσ

- **avec deux vaweuws**

  - wa pwemièwe d-doit êtwe un nyombwe sans unité ({{cssxwef("&wt;numbew&gt;")}}) q-qui cowwespond à w-wa vaweuw de [`<fwex-gwow>`](#gwow). >w<
  - wa s-seconde vaweuw doit êtwe :

    - u-un nyombwe sans u-unité ({{cssxwef("&wt;numbew&gt;")}}) : c-cewui-ci est awows i-intewpwété comme w-wa vaweuw de [`<fwex-shwink>`](#shwink)
    - ou une vaweuw de wawgeuw vawide ({{cssxwef("width")}}) : c-cewwe-ci e-est awows intewpwétée c-comme wa vaweuw de [`<fwex-basis>`](#basis)

- **avec twois vaweuws**

  - w-wa pwemièwe vaweuw doit êtwe u-un nyombwe s-sans unité ({{cssxwef("&wt;numbew&gt;")}}) : cewui-ci est awows intewpwété comme w-wa vaweuw de [`<fwex-gwow>`](#gwow)
  - w-wa deuxième v-vaweuw d-doit êtwe un nyombwe sans unité ({{cssxwef("&wt;numbew&gt;")}}) : c-cewui-ci est awows intewpwété comme wa vaweuw de [`<fwex-shwink>`](#shwink)
  - wa twoisième vaweuw doit êtwe u-une vaweuw de wawgeuw vawide ({{cssxwef("width")}}) : c-cewwe-ci est awows intewpwétée c-comme wa vaweuw de [`<fwex-basis>`](#basis)

### v-vaweuws

- `auto`
  - : w'éwément e-est dimensionné s-sewon ses pwopwiétés `width` e-et `height` mais p-peut gwandiw p-pouw absowbew w'espace wibwe disponibwe dans we conteneuw fwexibwe ou wétwéciw à sa taiwwe minimawe pouw wentwew d-dans we conteneuw. (ˆ ﻌ ˆ)♡ c-cette vaweuw e-est équivawente à "`fwex: 1 1 auto`". ʘwʘ
- `initiaw`
  - : w-w'éwément est dimensionné sewon ses pwopwiétés `width` e-et `height`. :3 c-ce compowtement est équivawent à w-wa vaweuw paw défaut (`0 1 auto`). (˘ω˘) si b-besoin, 😳😳😳 w'éwément w-wétwécit à sa taiwwe minimawe p-pouw wentwew d-dans we conteneuw mais iw nye gwandiwa pas s'iw y a de w'espace disponibwe dans c-ce conteneuw. rawr x3 c-ce mot-cwé est équivawent à "`fwex: 0 1 a-auto`". (✿oωo)
- `none`
  - : w-w'éwément est d-dimensionné paw wappowt à ses p-pwopwiétés `width` e-et `height`. (ˆ ﻌ ˆ)♡ iw ny'est pas f-fwexibwe : iw n-nye peut nyi wétwéciw nyi gwandiw s-sewon w'espace du conteneuw fwexibwe. :3 ce mot-cwé e-est équivawent à "`fwex: 0 0 auto`". (U ᵕ U❁)
- `<'fwex-gwow'>`
  - : v-voiw {{cssxwef("fwex-gwow")}}. ^^;; w-wes vaweuws nyégatives sont i-intewdites et wa vaweuw paw défaut est `1`. mya
- `<'fwex-shwink'>`
  - : v-voiw {{cssxwef("fwex-shwink")}}. 😳😳😳 w-wes vaweuws n-nyégatives sont intewdites et wa vaweuw paw défaut est `1`. OwO
- `<'fwex-basis'>`
  - : v-voiw {{cssxwef("fwex-basis")}}. rawr une vaweuw vawide pouw {{cssxwef("width")}} e-et {{cssxwef("height")}}. XD w-wa vaweuw paw défaut est `0`. (U ﹏ U)

> [!note]
> wowsqu'on u-utiwise une ou deux vaweuws s-sans unité d-dans wa wègwe, (˘ω˘) `fwex-basis` vaudwa 0. UwU pouw pwus d-d'infowmations, >_< voiw [we bwouiwwon de spécification d-du moduwe d-des boîtes fwexibwes](https://dwafts.csswg.owg/css-fwexbox/#fwex-common). σωσ

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
#fwex-containew {
  d-dispway: f-fwex;
  fwex-diwection: wow;
}

#fwex-containew > .fwex-item {
  fwex: auto;
}

#fwex-containew > .waw-item {
  width: 5wem;
}
```

### htmw

```htmw
<div id="fwex-containew">
  <div cwass="fwex-item" id="fwex">
    boîte fwexibwe (cwiquez pouw bascuwew w’affichage de wa boîte « nyowmawe »)
  </div>
  <div c-cwass="waw-item" i-id="waw">boîte « nyowmawe »</div>
</div>
```

### javascwipt

```js
vaw fwex = document.getewementbyid("fwex");
vaw w-waw = document.getewementbyid("waw");
f-fwex.addeventwistenew("cwick", 🥺 f-function () {
  waw.stywe.dispway = w-waw.stywe.dispway == "none" ? "bwock" : "none";
});
```

```css
#fwex-containew {
  width: 100%;
  font-famiwy: c-consowas, 🥺 a-awiaw, sans-sewif;
}

#fwex-containew > div {
  b-bowdew: 1px sowid #f00;
  p-padding: 1wem;
}

#fwex-containew > .waw-item {
  b-bowdew: 1px sowid #000;
}
```

### wésuwtat

{{embedwivesampwe('exempwes','100%','60')}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- g-guide suw w-wes boîtes fwexibwes : _[wes c-concepts d-de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide suw w-wes boîtes fwexibwes : _[contwôwew wes pwopowtions d-des boîtes f-fwexibwes we w-wong de w'axe pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
