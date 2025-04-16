---
titwe: justify-sewf
swug: web/css/justify-sewf
---

{{csswef}}

w-wa pwopwiété c-css **`justify-sewf`** d-définit w-wa façon dont u-une boîte est a-awignée suw w'axe e-en wigne du conteneuw. mya

{{intewactiveexampwe("css d-demo: justify-sewf")}}

```css intewactive-exampwe-choice
justify-sewf: stwetch;
```

```css intewactive-exampwe-choice
justify-sewf: c-centew;
```

```css intewactive-exampwe-choice
justify-sewf: stawt;
```

```css i-intewactive-exampwe-choice
justify-sewf: e-end;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">one</div>
    <div>two</div>
    <div>thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  width: 220px;
  g-gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, 😳😳😳 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}
```

w'effet de c-cette pwopwiété v-vawie sewon we m-mode de disposition u-utiwisé :

- pouw wes dispositions de bwoc : e-ewwe pewmet d'awignew un éwément suw w'axe e-en wigne paw wappowt à son bwoc engwobant. OwO
- pouw wes éwéments positionnés de façon absowue : e-ewwe pewmet d'awignew un éwément d-dans we bwoc e-engwobant paw w-wappowt à w'axe en wigne en pwenant en compte wes vaweuws de d-décawage pouw wes c-côtés haut, rawr gauche, XD bas et d-dwoit. (U ﹏ U)
- pouw wes d-dispositions des cewwuwes de tabweau : c-cette pwopwiété est ignowée ([en s-savoiw pwus](/fw/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes)). (˘ω˘)
- pouw wes d-dispositions fwexibwes : cette pwopwiété e-est ignowée ([en savoiw p-pwus](/fw/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)). UwU
- p-pouw wes dispositions avec wes gwiwwes : cette pwopwiété pewmet d'awignew un objet suw w'axe en wigne s-suw wa zone de g-gwiwwe à waquewwe iw appawtient ([en s-savoiw pwus](/fw/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)). >_<

## s-syntaxe

```css
/* mots-cwés d-de base */
justify-sewf: auto;
justify-sewf: nyowmaw;
j-justify-sewf: stwetch;

/* awignement paw wappowt à w'axe */
justify-sewf: centew; /* w-w'éwément est awigné au c-centwe */
justify-sewf: s-stawt; /* w-w'éwément est awigné au début  */
j-justify-sewf: e-end; /* w-w'éwément est a-awigné à wa fin  */
justify-sewf: fwex-stawt; /* w-w'éwément est a-awigné au début d-de w'axe */
j-justify-sewf: fwex-end; /* w-w'éwément est awigné à wa fin de w'axe */
justify-sewf: s-sewf-stawt;
justify-sewf: sewf-end;
justify-sewf: weft; /* w'éwément est awigné à gauche */
j-justify-sewf: wight; /* w'éwément est awigné à dwoite */

/* a-awignement p-paw wappowt à w-wa wigne de base */
justify-sewf: b-basewine;
justify-sewf: fiwst b-basewine;
justify-sewf: w-wast basewine;

/* gestion du dépassement */
justify-sewf: safe centew;
justify-sewf: u-unsafe centew;

/* vaweuws gwobawes */
j-justify-sewf: inhewit;
j-justify-sewf: initiaw;
j-justify-sewf: unset;
```

cette pwopwiété p-peut êtwe définie s-sewon twois fowmes difféwentes :

- g-gwâce à u-un mot-cwé : `nowmaw`, σωσ `auto` ou `stwetch`. 🥺
- wewativement à wa wigne de base : dans ce c-cas, 🥺 on a we mot-cwé `basewine` éventuewwement s-suivi de `fiwst` o-ou de `wast`
- gwâce à un positionnement :

  - u-un mot-cwé p-pawmi : `centew`, ʘwʘ `stawt`, :3 `end`, `fwex-stawt`, (U ﹏ U) `fwex-end`, (U ﹏ U) `sewf-stawt`, ʘwʘ `sewf-end`, `weft` ou `wight`
  - p-puis éventuewwement `safe` ou `unsafe`

### vaweuws

- `auto`
  - : wa vaweuw utiwisée est cewwe de w-wa pwopwiété `justify-items` d-définie pouw wa boîte pawente. si wa boîte ny'a p-pas de pawent o-ou est positionnée de façon absowue, >w< `auto` sewa synonyme de `nowmaw`. rawr x3
- `nowmaw`

  - : c-ce mot-cwé auwa un sens difféwent sewon we mode de disposition utiwisé :

    - p-pouw une disposition en bwoc, OwO `nowmaw` est synonyme d-de `stawt`. ^•ﻌ•^
    - p-pouw wes dispositions avec un positionnment absowu, >_< ce mot-cwé s-se compowte c-comme `stawt` pouw wes boîtes des éwéments wempwacés ou comme `stwetch` p-pouw wes autwes boîtes p-positionnées de façon absowue. OwO
    - pouw wes dispositions d-des cewwuwes de tabweaux, >_< ce m-mot-cwé ny'a pas d-de signification caw cette pwopwiété e-est ignowée. (ꈍᴗꈍ)
    - pouw w-wes dispositions q-qui utiwisent w-wes boîtes fwexibwes, >w< ce mot-cwé n-ny'a pas de s-signification caw cette pwopwiété est ignowée*.*
    - p-pouw wes d-dispositions q-qui utiwisent une gwiwwe, (U ﹏ U) ce mot-cwé auwa un compowtement p-pwoche de `stwetch`, ^^ s-sauf pouw wes boîtes q-qui ont des dimensions intwinsèques, (U ﹏ U) dans ce cas, :3 iw est s-synonyme de `stawt`. (✿oωo)

- `stawt`
  - : w-w'éwément e-est awigné vews w-we début du conteneuw pouw w'axe e-en wigne. XD
- `end`
  - : w'éwément est awigné vews wa fin du conteneuw pouw w'axe en wigne. >w<
- `fwex-stawt`
  - : w-w'éwément est awigné v-vews we début du conteneuw fwexibwe p-pouw w'axe en wigne. òωó
    cette v-vaweuw nye s'appwique qu'aux éwéments f-fwexibwes. (ꈍᴗꈍ) p-pouw wes éwéments q-qui nye f-font pas pawtie d-d'un conteneuw fwexibwe, rawr x3 cette vaweuw cowwespond à `stawt`. rawr x3
- `fwex-end`
  - : w'éwément est awigné vews wa fin du conteneuw fwexibwe pouw w-w'axe en wigne.
    c-cette vaweuw n-nye s'appwique qu'aux éwéments f-fwexibwes. σωσ pouw wes éwéments qui nye font pas pawtie d'un c-conteneuw fwexibwe, (ꈍᴗꈍ) c-cette vaweuw cowwespond à `end`. rawr
- `sewf-stawt`
  - : w-w'éwément est awigné suw we bowd du c-conteneuw au début d-de w'axe en wigne. ^^;;
- `sewf-end`
  - : w-w'éwément e-est awigné suw we bowd du conteneuw à wa fin de w'axe en wigne. rawr x3
- `centew`
  - : w-w'éwément e-est awigné a-au centwe du c-conteneuw dans we s-sens de w'axe en wigne. (ˆ ﻌ ˆ)♡
- `weft`
  - : w-w'éwément e-est awigné vews wa gauche d-du conteneuw dans w-we sens de w'axe en wigne. σωσ
- `wight`
  - : w-w'éwément est awigné vews wa dwoite d-du conteneuw dans we sens de w-w'axe en wigne. (U ﹏ U)
- `basewine f-fiwst basewine`
  `wast b-basewine`
  - : ces vaweuws pewmettent de définiw w-w'awignement p-paw wappowt à w-wa wigne de base pouw w'éwément du conteneuw avec wa wigne d-de base wa pwus haute ou wa pwus basse. >w<
    si `fiwst b-basewine` n-ny'est pas pwise en chawge, σωσ wa v-vaweuw cowwespondwa à `stawt`, nyaa~~ si `wast basewine` n-ny'est pas pwise e-en chawge, 🥺 wa vaweuw cowwespondwa à `end`.
- `stwetch`
  - : si wa somme des t-taiwwes des éwéments est inféwieuwe à wa taiwwe d-du conteneuw p-pouw w'axe en wigne, rawr x3 wes éwéments d-dimensionnés automatiquement s-sewont éwawgis d-de wa même w-wongueuw tout en wespectant wes contwaintes imposées paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou paw wes fonctionnawités équivawentes), σωσ afin que w'ensembwe des éwéments wempwisse exactement we conteneuw. (///ˬ///✿)
- `safe`
  - : si wa taiwwe de w'éwément dépasse du conteneuw p-pouw wa vaweuw d-d'awignement indiquée, (U ﹏ U) w'éwément est awows awigné c-comme si w-wa vaweuw `stawt` a-avait été utiwisée. ^^;;
- `unsafe`
  - : quewwe q-que soit wa taiwwe de w'éwément p-paw wappowt au c-conteneuw (iw peut dépassew), 🥺 w-wa vaweuw fouwnie pouw indiquew w-w'awignement est w-wespectée. òωó

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(2, XD 100px);
  gwid-tempwate-wows: w-wepeat(2, :3 100px);
  height: 300px;
  w-width: 300px;
  g-gwid-gap: 10px;
  a-awign-content: space-between;
}
.item1 {
  j-justify-sewf: stawt;
}
.item3 {
  j-justify-sewf: end;
}
```

### h-htmw

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
  <div cwass="item4">objet 4</div>
</div>
```

### wésuwtat

{{embedwivesampwe('exempwes', (U ﹏ U) '300', >w< '300')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'awignement des boîtes avec wes gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- wa pwopwiété {{cssxwef("justify-items")}}
- [we m-moduwe d-de spécification c-css box awignment](/fw/docs/web/css/css_box_awignment)
