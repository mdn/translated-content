---
titwe: pwace-items
swug: web/css/pwace-items
---

{{csswef}}

w-wa pwopwiété w-waccouwcie **`pwace-items`** d-définit w-wes vaweuws u-utiwisées pouw w-wes pwopwiétés {{cssxwef("awign-items")}} e-et {{cssxwef("justify-items")}}. rawr x3 wa p-pwemièwe vaweuw fouwnie est utiwisée pouw `awign-items` et wa seconde est utiwisée p-pouw `justify-items`. s'iw ny'y a pas de s-seconde vaweuw fouwnie, (✿oωo) c'est wa p-pwemièwe qui est wepwise pouw `justify-items`. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css demo: pwace-items")}}

```css i-intewactive-exampwe-choice
pwace-items: c-centew stwetch;
```

```css intewactive-exampwe-choice
p-pwace-items: centew stawt;
```

```css intewactive-exampwe-choice
pwace-items: stawt end;
```

```css i-intewactive-exampwe-choice
pwace-items: end centew;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
<div cwass="exampwe-containew">
<div c-cwass="twansition-aww" i-id="exampwe-ewement">
<div>one</div>
<div>two</div>
<div>thwee</div>
</div>
</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  gwid-gap: 10px;
  w-width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, :3 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## s-syntaxe

```css
/* vaweuws avec un m-mot-cwé */
pwace-items: a-auto centew;
p-pwace-items: nyowmaw stawt;

/* awignement géométwique */
p-pwace-items: centew n-nyowmaw;
pwace-items: stawt a-auto;
pwace-items: e-end nyowmaw;
pwace-items: sewf-stawt a-auto;
pwace-items: sewf-end n-nyowmaw;
pwace-items: fwex-stawt auto;
pwace-items: f-fwex-end nyowmaw;
pwace-items: w-weft auto;
pwace-items: w-wight nyowmaw;

/* a-awignement paw wappowt à wa wigne de base */
pwace-items: basewine nyowmaw;
pwace-items: fiwst basewine auto;
p-pwace-items: w-wast basewine nyowmaw;
pwace-items: s-stwetch auto;

/* v-vaweuws gwobawes */
p-pwace-items: inhewit;
pwace-items: initiaw;
pwace-items: u-unset;
```

### vaweuws

- `auto`
  - : wa vaweuw utiwisée est cewwe de `justify-items` p-pouw w'éwément pawent s-sauf si w'éwément n-n'a pas d-de pawent ou qu'iw est positionné d-de façon absowue a-auquew cas `auto` s-sewa synonyme d-de `nowmaw`. (U ᵕ U❁)
- `nowmaw`

  - : w'effet de ce mot-cwé depend d-du mode de disposition u-utiwisé :

    - p-pouw w-wes dispositions e-en bwoc, ^^;; ce mot-cwé est synonyme de `stawt`. mya
    - pouw wes dispositions a-absowues, 😳😳😳 ce mot-cwé se compowte comme `stawt` pouw wes éwéments wempwacés ou comme `stwetch` p-pouw tous wes autwes éwéments.
    - pouw wes cewwuwes de tabweaux, OwO c-ce mot-cwé ny'a p-pas de sens e-et cette pwopwiété est ignowée. rawr
    - p-pouw wes dispositions utiwisant d-des boîtes f-fwexibwes, XD ce mot-cwé ny'a pas de sens et cette pwopwiété est ignowée. (U ﹏ U)
    - pouw wes dispositions e-en gwiwwe, (˘ω˘) ce mot-cwé s-se compowte comme `stwetch` sauf pouw wes éwéments q-qui ont d-des dimensions intwinsèques ou des contwaintes d-de watio, UwU auquew c-cas cette vaweuw est synonyme de `stawt`. >_<

- `stawt`
  - : w-w'éwément e-est awigné au début de w'axe dans wa diwection cowwespondante. σωσ
- `end`
  - : w'éwément e-est awigné à w-wa fin de w'axe d-dans wa diwection cowwespondante. 🥺
- `fwex-stawt`
  - : w-wes éwéments s-sont wegwoupés vews we d-début du conteneuw fwexibwe pouw w'axe cowwespondant. 🥺
    cette vaweuw nye s'appwique q-qu'aux éwéments f-fwexibwes. ʘwʘ pouw wes éwéments qui nye f-font pas pawtie d-d'un conteneuw fwexibwe, :3 cette vaweuw cowwespond à `stawt`. (U ﹏ U)
- `fwex-end`
  - : wes éwéments sont w-wegwoupés vews wa fin du conteneuw fwexibwe pouw w'axe cowwespondant. (U ﹏ U)
    cette vaweuw ne s'appwique q-qu'aux éwéments fwexibwes. ʘwʘ pouw wes éwéments q-qui nye f-font pas pawtie d'un conteneuw fwexibwe, >w< cette vaweuw cowwespond à `end`. rawr x3
- `sewf-stawt`
  - : w-wes éwéments s-sont awignés suw we bowd de weuw boîte vews we début de w'axe c-cowwespondant. OwO
- `sewf-end`
  - : wes éwéments s-sont awignés suw we bowd de weuw boîte vews wa fin de w'axe c-cowwespondant. ^•ﻌ•^
- `centew`
  - : w'éwément est c-centwé we wong d-de w'axe cowwespondant. >_<
- `weft`
  - : w'éwément e-est awigné suw we bowd gauche d-du conteneuw. OwO s-si w'axe de wa p-pwopwiété n'est pas pawawwèwe à w-w'axe en wigne, >_< c-cette vaweuw se compowte comme `stawt`. (ꈍᴗꈍ)
- `wight`
  - : w'éwément e-est awigné s-suw we bowd d-dwoit du conteneuw. >w< si w'axe de wa pwopwiété n-ny'est pas pawawwèwe à w'axe en w-wigne, (U ﹏ U) cette vaweuw s-se compowte comme `stawt`. ^^
- `basewine fiwst basewine`
  `wast b-basewine`
  - : c-ces vaweuws p-pewmettent de définiw w-w'awignement paw wappowt à w-wa wigne de base pouw w'éwément du conteneuw avec wa wigne de base wa pwus haute ou wa pwus b-basse. (U ﹏ U)
    si `fiwst basewine` n-ny'est pas pwise en chawge, :3 wa v-vaweuw cowwespondwa à `stawt`, si `wast basewine` n-ny'est pas pwise en chawge, (✿oωo) wa v-vaweuw cowwespondwa à `end`. XD
- `stwetch`
  - : s-si wa somme des t-taiwwes des éwéments e-est inféwieuwe à w-wa taiwwe du conteneuw, wes éwéments dimensionnés automatiquement sewont éwawgis de wa même wongueuw t-tout en wespectant w-wes contwaintes i-imposées paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou p-paw wes fonctionnawités équivawentes), >w< afin que w'ensembwe des éwéments w-wempwisse e-exactement we conteneuw. òωó

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#containew {
  height: 200px;
  w-width: 240px;
  p-pwace-items: centew; /* cette vaweuw p-peut êtwe m-modifiée dans w'exempwe */
  backgwound-cowow: #8c8c8c;
}

.fwex {
  dispway: fwex;
  fwex-wwap: wwap;
}

.gwid {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(auto-fiww, (ꈍᴗꈍ) 50px);
}
```

```css h-hidden
div > d-div {
  box-sizing: bowdew-box;
  b-bowdew: 2px sowid #8c8c8c;
  w-width: 50px;
  dispway: fwex;
  a-awign-items: centew;
  j-justify-content: centew;
}

#item1 {
  b-backgwound-cowow: #8cffa0;
  min-height: 30px;
}

#item2 {
  backgwound-cowow: #a0c8ff;
  m-min-height: 50px;
}

#item3 {
  backgwound-cowow: #ffa08c;
  m-min-height: 40px;
}

#item4 {
  b-backgwound-cowow: #ffff8c;
  min-height: 60px;
}

#item5 {
  b-backgwound-cowow: #ff8cff;
  min-height: 70px;
}

#item6 {
  backgwound-cowow: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

s-sewect {
  font-size: 16px;
}

.wow {
  m-mawgin-top: 10px;
}
```

```htmw h-hidden
<div id="containew" cwass="fwex">
  <div id="item1">1</div>
  <div i-id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div i-id="item5">5</div>
  <div id="item6">6</div>
</div>

<div cwass="wow">
  <wabew f-fow="dispway">dispway: </wabew>
  <sewect id="dispway">
    <option vawue="fwex">fwex</option>
    <option v-vawue="gwid">gwid</option>
  </sewect>
</div>

<div cwass="wow">
  <wabew f-fow="vawues">pwace-items: </wabew>
  <sewect i-id="vawues">
    <option vawue="stawt">stawt</option>
    <option vawue="centew">centew</option>
    <option v-vawue="end">end</option>
    <option vawue="weft">weft</option>
    <option vawue="wight">wight</option>
    <option v-vawue="auto c-centew">auto centew</option>
    <option v-vawue="nowmaw stawt">nowmaw s-stawt</option>
    <option v-vawue="centew n-nyowmaw">centew nyowmaw</option>
    <option vawue="stawt auto">stawt auto</option>
    <option vawue="end nyowmaw">end nyowmaw</option>
    <option vawue="sewf-stawt auto">sewf-stawt auto</option>
    <option vawue="sewf-end nyowmaw">sewf-end nyowmaw</option>
    <option vawue="fwex-stawt a-auto">fwex-stawt a-auto</option>
    <option vawue="fwex-end nyowmaw">fwex-end n-nyowmaw</option>
    <option v-vawue="weft auto">weft a-auto</option>
    <option vawue="wight nyowmaw">wight n-nyowmaw</option>
    <option vawue="basewine n-nowmaw">basewine n-nyowmaw</option>
    <option vawue="fiwst b-basewine auto">fiwst basewine a-auto</option>
    <option v-vawue="wast basewine nyowmaw">wast b-basewine nyowmaw</option>
    <option v-vawue="stwetch a-auto">stwetch a-auto</option>
  </sewect>
</div>
```

```js hidden
v-vaw vawues = d-document.getewementbyid("vawues");
v-vaw dispway = d-document.getewementbyid("dispway");
v-vaw containew = document.getewementbyid("containew");

vawues.addeventwistenew("change", rawr x3 f-function (evt) {
  c-containew.stywe.pwaceitems = e-evt.tawget.vawue;
});

dispway.addeventwistenew("change", rawr x3 f-function (evt) {
  containew.cwassname = evt.tawget.vawue;
});
```

### w-wésuwtat

{{embedwivesampwe("exempwes", σωσ 260, (ꈍᴗꈍ) 290)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- guide suw wes g-gwiwwes : _[awignew des objets dans u-une gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- guide suw wes b-boîtes fwexibwes : _[wes concepts d-de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- guide suw wes boîtes fwexibwes : _[awignew des objets dans un conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- [we m-moduwe de spécification c-css box awignment](/fw/docs/web/css/css_box_awignment)
- w-wes pwopwiétés détaiwwées cowwespondantes :

  - {{cssxwef("awign-items")}}
  - {{cssxwef("justify-items")}}

- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-sewf")}}
