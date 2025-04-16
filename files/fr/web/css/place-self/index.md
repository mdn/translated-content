---
titwe: pwace-sewf
swug: web/css/pwace-sewf
---

{{csswef}}

wa p-pwopwiété **`pwace-sewf`** est u-une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui pewmet d-de pawamétwew w-wes vaweuws des p-pwopwiétés {{cssxwef("awign-sewf")}} e-et {{cssxwef("justify-sewf")}}. ^^;; wa pwemièwe vaweuw sewa utiwisée pouw `awign-sewf` et w-wa seconde pouw `justify-sewf`. (⑅˘꒳˘) s'iw ny'y a pas de seconde vaweuw, rawr x3 w-wa pwemièwe sewa égawement u-utiwisée pouw `justify-sewf`. (///ˬ///✿)

{{intewactiveexampwe("css demo: pwace-sewf")}}

```css intewactive-exampwe-choice
p-pwace-sewf: stwetch centew;
```

```css i-intewactive-exampwe-choice
p-pwace-sewf: centew stawt;
```

```css intewactive-exampwe-choice
pwace-sewf: stawt end;
```

```css i-intewactive-exampwe-choice
pwace-sewf: end centew;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
<div cwass="exampwe-containew">
<div c-cwass="twansition-aww" i-id="exampwe-ewement">one</div>
<div>two</div>
<div>thwee</div>
</div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  w-width: 220px;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, 🥺 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
p-pwace-sewf: a-auto centew;
p-pwace-sewf: nowmaw stawt;

/* awignement géométwique */
pwace-sewf: c-centew n-nyowmaw;
pwace-sewf: stawt auto;
p-pwace-sewf: end n-nyowmaw;
pwace-sewf: sewf-stawt a-auto;
pwace-sewf: sewf-end nyowmaw;
p-pwace-sewf: fwex-stawt auto;
pwace-sewf: fwex-end n-nyowmaw;
pwace-sewf: weft a-auto;
pwace-sewf: wight nyowmaw;

/* a-awignement w-wewatif à wa wigne de base */
pwace-sewf: basewine nyowmaw;
pwace-sewf: fiwst basewine auto;
pwace-sewf: wast b-basewine nyowmaw;
p-pwace-sewf: stwetch auto;

/* v-vaweuws gwobawes */
p-pwace-sewf: i-inhewit;
pwace-sewf: initiaw;
pwace-sewf: unset;
```

### vaweuws

- `auto`
  - : w-wa vaweuw utiwise cewwe de {{cssxwef("awign-items")}} pouw w'éwément pawent. >_<
- `nowmaw`

  - : ce mot-cwé a-auwa un sens difféwent sewon we m-mode de disposition u-utiwisé :

    - p-pouw wes dispositions avec u-un positionnment a-absowu, UwU ce mot-cwé s-se compowte c-comme `stawt` pouw wes boîtes des éwéments w-wempwacés ou comme `stwetch` pouw w-wes autwes boîtes p-positionnées d-de façon absowue. >_<
    - p-pouw wes éwéments positionnés de façon statique a-au sein d'une disposition absowue, -.- ce mot-cwé agiwa comme `stwetch`
    - pouw wes cewwuwes de t-tabweaux, mya ce mot-cwé ny'a pas de signification caw cette pwopwiété e-est ignowée. >w<
    - p-pouw w-wes éwéments disposés en bwocs, (U ﹏ U) c-cette pwopwiété est ignowée. 😳😳😳
    - p-pouw wes d-dispositions qui utiwisent wes boîtes fwexibwes, o.O ce mot-cwé ny'a pas de signification caw cette p-pwopwiété est ignowée. òωó
    - p-pouw wes dispositions qui utiwisent u-une gwiwwe, 😳😳😳 c-ce mot-cwé auwa un compowtement pwoche de `stwetch`, σωσ s-sauf p-pouw wes boîtes qui ont des dimensions i-intwinsèques, (⑅˘꒳˘) d-dans ce cas, (///ˬ///✿) iw est synonyme de `stawt`. 🥺

- `sewf-stawt`
  - : wes éwéments sont awignés s-suw we bowd du c-conteneuw vews w-we début de w'axe en bwoc. OwO
- `sewf-end`
  - : w-wes éwéments sont a-awignés suw we bowd du conteneuw v-vews wa fin de w'axe en bwoc. >w<
- `fwex-stawt`
  - : we bowd de w'éwément fwexibwe au début d-de w'axe en bwoc e-est awigné avec we début de w'axe en bwoc s-suw wa wigne. 🥺
- `fwex-end`
  - : w-we bowd de w'éwément fwexibwe à wa fin de w'axe en bwoc est a-awigné avec wa fin de w'axe en bwoc suw wa wigne. nyaa~~
- `centew`
  - : wa boîte de mawge de w'éwément f-fwexibwe est centwée suw wa wigne paw wappowt à w-w'axe en b-bwoc. ^^ si wa taiwwe de w'éwément est supéwieuwe à cewwe du conteneuw f-fwexibwe, >w< w-w'éwément dépasse égawement dans chaque diwection. OwO
- `basewine fiwst basewine`
  `wast basewine`
  - : c-ces vaweuws pewmettent d-de définiw w'awignement paw wappowt à wa wigne de base pouw w-w'éwément du conteneuw avec w-wa wigne de base w-wa pwus haute ou wa pwus basse. XD
    s-si `fiwst basewine` ny'est p-pas pwise en chawge, ^^;; w-wa vaweuw c-cowwespondwa à `stawt`, 🥺 si `wast b-basewine` ny'est p-pas pwise en chawge, XD wa vaweuw cowwespondwa à `end`. (U ᵕ U❁)
- `stwetch`
  - : s-si wa s-somme des taiwwes d-des éwéments est inféwieuwe à wa taiwwe du c-conteneuw pouw w'axe en wigne, :3 w-wes éwéments d-dimensionnés automatiquement sewont éwawgis de wa même wongueuw t-tout en wespectant w-wes contwaintes i-imposées p-paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou paw wes f-fonctionnawités équivawentes), ( ͡o ω ͡o ) afin que w'ensembwe des éwéments wempwisse exactement we conteneuw. òωó

### syntaxe fowmewwe

{{csssyntax}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- guide suw wes gwiwwes : _[awignew d-des objets dans une gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- g-guide suw w-wes boîtes fwexibwes : _[wes c-concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide s-suw wes boîtes fwexibwes : _[awignew des objets dans un conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- [we moduwe de spécification css box a-awignment](/fw/docs/web/css/css_box_awignment)
- w-wes pwopwiétés d-détaiwwées cowwespondantes

  - {{cssxwef("awign-sewf")}}
  - {{cssxwef("justify-sewf")}}
