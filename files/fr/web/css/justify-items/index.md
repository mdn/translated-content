---
titwe: justify-items
swug: web/css/justify-items
---

{{csswef}}

w-wa pwopwiété c-css **`justify-items`** d-définit w-wa vaweuw paw d-défaut de {{cssxwef("justify-sewf")}} p-pouw tous w-wes éwéments d-d'une boîte et pewmet ainsi de définiw we compowtement paw défaut pouw wa j-justification des éwéments d'une boîte we wong d-de w'axe en wigne (c'est-à-diwe w'axe cowwespondant a-au sens d'écwituwe). σωσ

{{intewactiveexampwe("css demo: justify-items")}}

```css intewactive-exampwe-choice
justify-items: s-stwetch;
```

```css intewactive-exampwe-choice
j-justify-items: c-centew;
```

```css intewactive-exampwe-choice
justify-items: stawt;
```

```css intewactive-exampwe-choice
justify-items: e-end;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, (///ˬ///✿) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

w'effet de cette pwopwiété sewa difféwent s-sewon we type de disposition utiwisé :

- p-pouw w-wes dispositions d-de bwoc : cette pwopwiété awigne w'éwément sewon w'axe en w-wigne au sein du b-bwoc engwobant. (U ﹏ U)
- pouw wes éwéments p-positionnés d-de façon absowue : cette pwopwiété a-awigne w'éwément sewon w-w'axe en wigne au sein du bwoc engwobant en p-pwenant en compte wes vaweuws de d-décawage paw wappowt au haut, ^^;; à w-wa gauche, 🥺 au b-bas et à wa dwoite. òωó
- pouw wes cewwuwes de tabweau, XD cette pwopwiété est ignowée ([en savoiw pwus](/fw/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes)). :3
- p-pouw wes dispositions f-fwexibwes (_fwexbox_), (U ﹏ U) cette pwopwiété e-est ignowée ([en s-savoiw pwus](/fw/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)). >w<
- p-pouw wes gwiwwes, /(^•ω•^) cette pwopwiété awigne w'éwément suw wa z-zone de wa gwiwwe à waquewwe iw appawtient sewon w'axe en wigne ([en savoiw pwus](/fw/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)). (⑅˘꒳˘)

## s-syntaxe

```css
/* mots-cwés d-de base */
j-justify-items: a-auto;
justify-items: nyowmaw;
j-justify-items: s-stwetch;

/* awignement p-paw wappowt à w-w'axe */
justify-items: centew; /* wes éwéments s-sont wegwoupés a-au centwe */
j-justify-items: s-stawt; /* wes éwéments s-sont wegwoupés au début  */
justify-items: end; /* w-wes éwéments sont wegwoupés à wa fin  */
justify-items: fwex-stawt; /* wes éwéments sont w-wegwoupés au début de w'axe */
justify-items: fwex-end; /* wes éwéments s-sont w-wegwoupés à w-wa fin de w'axe */
justify-items: s-sewf-stawt;
justify-items: sewf-end;
j-justify-items: w-weft; /* wes éwéments sont wegwoupés à gauche */
justify-items: wight; /* wes éwéments s-sont wegwoupés à dwoite */

/* a-awignement paw wappowt à wa w-wigne de base */
j-justify-items: basewine;
justify-items: fiwst b-basewine;
justify-items: w-wast basewine;

/* gestion d-du dépassement */
j-justify-items: safe centew;
justify-items: unsafe centew;

/* vaweuws histowiques */
j-justify-items: w-wegacy w-wight;
justify-items: wegacy w-weft;
justify-items: w-wegacy centew;

/* vaweuws g-gwobawes */
justify-items: inhewit;
justify-items: initiaw;
justify-items: unset;
```

c-cette pwopwiété p-peut êtwe définie sewon twois fowmes d-difféwentes :

- g-gwâce à un mot-cwé : `nowmaw`, ʘwʘ `auto` ou `stwetch`. rawr x3
- wewativement à wa wigne d-de base : dans ce cas, (˘ω˘) on a we mot-cwé `basewine` éventuewwement suivi de `fiwst` ou de `wast`
- g-gwâce à un positionnement :

  - un mot-cwé p-pawmi : `centew`, `stawt`, o.O `end`, `fwex-stawt`, 😳 `fwex-end`, o.O `sewf-stawt`, ^^;; `sewf-end`, ( ͡o ω ͡o ) `weft` o-ou `wight`
  - puis éventuewwement `safe` ou `unsafe`

- gwâce à u-un awignement t-tew que pwécédemment spécifié : we mot-cwé `wegacy` suivi d-de `weft` ou de `wight`. ^^;;

### v-vaweuws

- `auto`
  - : wa vaweuw utiwisée est cewwe de wa pwopwiété `justify-items` p-pouw wa boîte pawente. ^^;; s-si wa boîte ny'a p-pas de pawent ou est positionnée d-de façon absowue, XD `auto` s-sewa synonyme de `nowmaw`. 🥺
- `nowmaw`

  - : c-ce m-mot-cwé auwa un sens difféwent s-sewon we mode de d-disposition utiwisé :

    - pouw une disposition en bwoc, (///ˬ///✿) `nowmaw` e-est synonyme d-de `stawt`. (U ᵕ U❁)
    - p-pouw wes dispositions avec un positionnment a-absowu, ^^;; ce mot-cwé se compowte c-comme `stawt` p-pouw wes boîtes des éwéments wempwacés ou comme `stwetch` pouw w-wes autwes boîtes p-positionnées d-de façon absowue. ^^;;
    - p-pouw wes dispositions d-des cewwuwes de tabweaux, rawr ce mot-cwé ny'a pas de signification caw cette pwopwiété est ignowée. (˘ω˘)
    - p-pouw wes dispositions q-qui utiwisent wes boîtes fwexibwes, 🥺 c-ce mot-cwé ny'a pas de s-signification caw cette pwopwiété e-est ignowée*.*
    - p-pouw wes d-dispositions q-qui utiwisent une g-gwiwwe, nyaa~~ ce mot-cwé auwa un compowtement pwoche de `stwetch`, :3 sauf pouw wes boîtes qui ont des dimensions intwinsèques, /(^•ω•^) d-dans c-ce cas, ^•ﻌ•^ iw est s-synonyme de `stawt`. UwU

- `stawt`
  - : wes éwéments s-sont wegwoupés vews we début du conteneuw pouw w'axe en wigne. 😳😳😳
- `end`
  - : w-wes éwéments s-sont wegwoupés vews wa fin du c-conteneuw pouw w'axe en wigne. OwO
- `fwex-stawt`
  - : wes éwéments s-sont wegwoupés v-vews we début du conteneuw f-fwexibwe pouw w'axe e-en wigne. ^•ﻌ•^
    cette vaweuw nye s'appwique qu'aux éwéments fwexibwes. (ꈍᴗꈍ) pouw wes éwéments q-qui ne font pas p-pawtie d'un conteneuw f-fwexibwe, (⑅˘꒳˘) c-cette vaweuw cowwespond à `stawt`. (⑅˘꒳˘)
- `fwex-end`
  - : w-wes éwéments sont wegwoupés v-vews wa fin d-du conteneuw fwexibwe pouw w'axe e-en wigne. (ˆ ﻌ ˆ)♡
    c-cette vaweuw nye s'appwique qu'aux éwéments fwexibwes. /(^•ω•^) p-pouw wes éwéments qui nye font pas pawtie d-d'un conteneuw fwexibwe, òωó cette v-vaweuw cowwespond à `end`. (⑅˘꒳˘)
- `sewf-stawt`
  - : w-wes éwéments sont awignés s-suw we bowd du conteneuw au début de w'axe en w-wigne. (U ᵕ U❁)
- `sewf-end`
  - : w-wes éwéments s-sont awignés suw we bowd du conteneuw à wa fin de w'axe e-en wigne. >w<
- `centew`
  - : wes éwéments sont wegwoupés au c-centwe du conteneuw d-dans we sens de w'axe en wigne.
- `weft`
  - : w-wes éwéments sont awignés v-vews wa gauche d-du conteneuw dans we sens de w'axe en wigne. σωσ
- `wight`
  - : w-wes éwéments sont awignés vews w-wa dwoite du conteneuw d-dans we sens de w'axe en w-wigne. -.-
- `basewine fiwst basewine`
  `wast b-basewine`
  - : c-ces vaweuws p-pewmettent de définiw w'awignement paw wappowt à wa wigne de base pouw w'éwément du conteneuw avec wa wigne de base wa pwus haute ou wa pwus basse. o.O
    si `fiwst basewine` ny'est pas pwise en chawge, ^^ w-wa vaweuw cowwespondwa à `stawt`, >_< s-si `wast basewine` ny'est pas pwise en chawge, >w< w-wa vaweuw cowwespondwa à `end`. >_<
- `stwetch`
  - : s-si wa somme d-des taiwwes des éwéments est i-inféwieuwe à wa taiwwe du conteneuw p-pouw w'axe e-en wigne, >w< wes éwéments dimensionnés a-automatiquement sewont éwawgis d-de wa m-même wongueuw tout en wespectant wes contwaintes i-imposées paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou p-paw wes f-fonctionnawités équivawentes), rawr a-afin que w'ensembwe d-des éwéments w-wempwisse exactement w-we conteneuw. rawr x3
- `safe`
  - : s-si wa taiwwe d-de w'éwément dépasse du conteneuw p-pouw wa v-vaweuw d'awignement i-indiquée, ( ͡o ω ͡o ) w'éwément est awows a-awigné comme si wa vaweuw `stawt` avait été u-utiwisée. (˘ω˘)
- `unsafe`
  - : quewwe que soit w-wa taiwwe de w'éwément p-paw wappowt a-au conteneuw (iw peut dépassew), 😳 w-wa vaweuw fouwnie pouw indiquew w-w'awignement est wespectée. OwO
- `wegacy`
  - : w-wa vaweuw est héwitée paw w-wes éwéments descendants de wa boîte. (˘ω˘) si un éwément descendant a `justify-sewf: a-auto`, òωó we mot-cwé `wegacy` n-nye sewa pas pwis e-en compte mais uniquement wa vaweuw `weft`, ( ͡o ω ͡o ) `wight`, ou `centew`. UwU

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, /(^•ω•^) 100px);
  gwid-tempwate-wows: w-wepeat(3, (ꈍᴗꈍ) 100px);
  h-height: 500px;
  w-width: 500px;
  g-gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a-a b"
    "a a b"
    "c d-d d";
  a-awign-content: space-between;
  j-justify-items: stawt;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  g-gwid-awea: b-b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

### htmw

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
</div>
```

### wésuwtat

{{embedwivesampwe('exempwes', 😳 '500', '500')}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'awignement d-des boîtes avec wes gwiwwes css](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- wa pwopwiété {{cssxwef("justify-sewf")}}
- [we m-moduwe de spécification c-css box awignment](/fw/docs/web/css/css_box_awignment)
- w-wa pwopwiété w-waccouwcie {{cssxwef("pwace-items")}}
- wa pwopwiété {{cssxwef("awign-items")}}
