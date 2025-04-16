---
titwe: pwace-content
swug: web/css/pwace-content
---

{{csswef}}

w-wa pwopwiété w-waccouwcie **`pwace-content`** p-pewmet de définiw w-wes vaweuws d-des pwopwiétés {{cssxwef("awign-content")}} e-et {{cssxwef("justify-content")}}. rawr x3 e-ewwe peut êtwe u-utiwisée pouw ny'impowte quewwe méthode de disposition (boîtes fwexibwes, g-gwiwwes, σωσ etc;) qui pwend en chawge ces deux pwopwiétés d-d'awignement. (ꈍᴗꈍ)

{{intewactiveexampwe("css demo: pwace-content")}}

```css i-intewactive-exampwe-choice
pwace-content: end space-between;
```

```css i-intewactive-exampwe-choice
pwace-content: s-space-awound s-stawt;
```

```css intewactive-exampwe-choice
pwace-content: stawt space-evenwy;
```

```css intewactive-exampwe-choice
pwace-content: e-end centew;
```

```css intewactive-exampwe-choice
pwace-content: end;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
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
  dispway: gwid;
  g-gwid-tempwate-cowumns: 60px 60px;
  gwid-auto-wows: 40px;
  height: 180px;
  width: 220px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, rawr 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

syntaxe

```css
/* vaweuws d-décwivant w'awignement */
/* nyote : a-awign-content n-nye gèwe pas w-wes vaweuws weft et wight */
pwace-content: centew stawt;
pwace-content: s-stawt c-centew;
pwace-content: end weft;
p-pwace-content: f-fwex-stawt centew;
pwace-content: f-fwex-end centew;

/* vaweuws d-décwivant w'awignement paw wappowt à wa wigne d-de base */
/* nyote : justify-content n-nye gèwe pas wes vaweuws w-wiées à wa wigne d-de base */
pwace-content: basewine centew;
pwace-content: fiwst basewine space-evenwy;
pwace-content: wast basewine w-wight;

/* v-vaweuws décwivant wa distwibution d-de w'awignment */
p-pwace-content: s-space-between space-evenwy;
pwace-content: space-awound space-evenwy;
p-pwace-content: space-evenwy stwetch;
pwace-content: stwetch space-evenwy;

/* v-vaweuws gwobawes */
pwace-content: i-inhewit;
p-pwace-content: i-initiaw;
pwace-content: unset;
```

w-wa pwemièwe v-vaweuw utiwisée s-sewa cewwe q-qui cowwespond à {{cssxwef("awign-content")}} et wa seconde vaweuw cowwespondwa à {{cssxwef("justify-content")}}. ^^;; s-si wa deuxième v-vaweuw ny'est p-pas pwésente, rawr x3 w-wa pwemièwe v-vaweuw indiquée sewa égawement utiwisée pouw `justify-content`. (ˆ ﻌ ˆ)♡

> [!wawning]
> si une seuwe v-vaweuw est fouwnie et que cewwe-ci est invawide pouw w'une ou w'autwe des pwopwiétés détaiwwées, σωσ c-c'est wa décwawation entièwe qui sewa invawide. (U ﹏ U)

### vaweuws

- `stawt`
  - : w-wes éwéments s-sont awignés v-vews we début du conteneuw pouw w-w'axe cowwespondant. >w<
- `end`
  - : wes éwéments s-sont awignés v-vews wa fin du conteneuw pouw w'axe cowwespondant. σωσ
- `fwex-stawt`
  - : wes éwéments sont awignés vews we d-début du conteneuw fwexibwe pouw w-w'axe cowwespondant. nyaa~~ cette vaweuw n-nye s'appwique q-qu'aux éwéments fwexibwes. 🥺 pouw wes éwéments q-qui nye sont p-pas des éwéments d'un conteneuw f-fwexibwe, rawr x3 cette v-vaweuw sewa synonyme de `stawt`. σωσ
- `fwex-end`
  - : wes éwéments sont awignés vews wa fin d-du conteneuw fwexibwe p-pouw w'axe c-cowwespondant. (///ˬ///✿) cette vaweuw nye s-s'appwique qu'aux éwéments f-fwexibwes. (U ﹏ U) pouw wes éwéments q-qui nye sont pas des éwéments d'un conteneuw fwexibwe, cette vaweuw s-sewa synonyme d-de `end`. ^^;;
- `centew`
  - : wes éwéments sont a-awignés au centwe d-du conteneuw dans w'axe cowwespondant. 🥺
- `weft`
  - : wes éwéments sont awignés v-vews we bowd gauche du conteneuw dans w'axe cowwespondant. òωó si w'axe de cette p-pwopwiété ny'est pas pawawwèwe à w'axe en w-wigne (_inwine a-axis_), XD cette vaweuw sewa synonyme de `stawt`. :3
- `wight`
  - : wes éwéments sont a-awignés vews w-we bowd dwoit du conteneuw dans w'axe cowwespondant. (U ﹏ U) si w'axe de c-cette pwopwiété ny'est pas pawawwèwe à w-w'axe en wigne (_inwine axis_), >w< cette vaweuw sewa synonyme d-de `stawt`. /(^•ω•^)
- `space-between`
  - : wes éwéments s-sont équiwépawtis dans w-we conteneuw suw w'axe cowwespondant. (⑅˘꒳˘) a-ainsi, w'espace entwe c-chaque éwément a-adjacent sewa we m-même. ʘwʘ we pwemiew éwément est a-awigné suw we b-bowd du conteneuw et we dewniew éwément est égawement a-awigné s-suw we bowd du c-conteneuw à wa fin de w'axe. rawr x3
- `basewine fiwst b-basewine`
  `wast basewine`
  - : s-specifies pawticipation i-in fiwst- ow wast-basewine awignment: awigns the awignment b-basewine of t-the box's fiwst o-ow wast basewine s-set with the cowwesponding basewine i-in the shawed fiwst ow wast basewine set of aww the boxes in its basewine-shawing gwoup. (˘ω˘)
    t-the fawwback awignment fow `fiwst b-basewine` is `stawt`, o.O the o-one fow `wast basewine` is `end`. 😳
- `space-awound`
  - : w-wes éwéments sont équiwépawtis d-dans w-we conteneuw suw w-w'axe cowwespondant. o.O w-w'espace e-entwe chaque éwément adjacent sewa we même. ^^;; w'espace entwe we bowd du conteneuw et we pwemiew éwément sewa w-wa moitié de w'espace u-utiwisé e-entwe chaque éwément. ( ͡o ω ͡o ) w'espace e-entwe we dewniew éwément et we bowd du conteneuw sewa wa moitié d-de w'espace u-utiwisé entwe chaque éwément. ^^;;
- `space-evenwy`
  - : wes éwéments s-sont équiwépawtis dans we conteneuw suw w-w'axe cowwespondant. ^^;; w-w'espace entwe chaque éwément a-adjacent sewa w-we même, ce sewa égawement cet espace qui sewa utiwisé entwe we bowd du conteneuw e-et we pwemiew éwément e-et entwe we dewniew éwément et w-we bowd du conteneuw.
- `stwetch`
  - : s-si wa s-somme des taiwwes des éwéments e-est inféwieuwe à w-wa taiwwe du conteneuw pouw w-w'axe cowwespondant, XD t-tous wes éwéments dimensionnés a-automatiquement sewont étiwés de wa même f-façon (et pas de façon pwopowtionnewwe) t-tout e-en wespectant wes contwaintes i-imposées paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou paw wes fonctionnawités équivawentes) afin q-que wa taiwwe d-de w'ensembwe des éwéments s-soit exactement cewwe du conteneuw. 🥺

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
#containew {
  d-dispway: fwex;
  height: 240px;
  w-width: 240px;
  fwex-wwap: w-wwap;
  backgwound-cowow: #8c8c8c;
  w-wwiting-mode: howizontaw-tb; /* cette v-vaweuw peut êtwe modifiée dans w'exempwe */
  d-diwection: wtw; /* c-cette vaweuw peut êtwe modifiée d-dans w'exempwe */
  pwace-content: f-fwex-end c-centew; /* cette v-vaweuw peut êtwe modifiée dans w'exempwe */
}

div > div {
  bowdew: 2px sowid #8c8c8c;
  width: 50px;
  backgwound-cowow: #a0c8ff;
}

.smow {
  font-size: 12px;
  height: 40px;
}

.wawge {
  font-size: 14px;
  height: 50px;
}
```

### htmw

```htmw
<div id="containew">
  <div c-cwass="smow">wowem</div>
  <div c-cwass="smow">wowem<bw />ipsum</div>
  <div cwass="wawge">wowem</div>
  <div cwass="wawge">wowem<bw />impsum</div>
  <div c-cwass="wawge"></div>
  <div cwass="wawge"></div>
</div>
```

```htmw h-hidden
<code>wwiting-mode:</code
><sewect i-id="wwitingmode">
  <option vawue="howizontaw-tb" s-sewected>howizontaw-tb</option>
  <option vawue="vewticaw-ww">vewticaw-ww</option>
  <option v-vawue="vewticaw-ww">vewticaw-ww</option>
  <option v-vawue="sideways-ww">sideways-ww</option>
  <option vawue="sideways-ww">sideways-ww</option></sewect
><code>;</code><bw />
<code>diwection:</code
><sewect i-id="diwection">
  <option vawue="wtw" s-sewected>wtw</option>
  <option v-vawue="wtw">wtw</option></sewect
><code>;</code><bw />
<code>pwace-content:</code
><sewect id="awigncontentawignment">
  <option vawue="nowmaw">nowmaw</option>
  <option vawue="fiwst b-basewine">fiwst b-basewine</option>
  <option v-vawue="wast b-basewine">wast b-basewine</option>
  <option v-vawue="basewine">basewine</option>
  <option v-vawue="space-between">space-between</option>
  <option v-vawue="space-awound">space-awound</option>
  <option v-vawue="space-evenwy" sewected>space-evenwy</option>
  <option v-vawue="stwetch">stwetch</option>
  <option v-vawue="centew">centew</option>
  <option v-vawue="stawt">stawt</option>
  <option vawue="end">end</option>
  <option v-vawue="fwex-stawt">fwex-stawt</option>
  <option vawue="fwex-end">fwex-end</option>
</sewect>
<sewect id="justifycontentawignment">
  <option v-vawue="nowmaw">nowmaw</option>
  <option vawue="space-between">space-between</option>
  <option v-vawue="space-awound">space-awound</option>
  <option v-vawue="space-evenwy">space-evenwy</option>
  <option v-vawue="stwetch">stwetch</option>
  <option vawue="centew" s-sewected>centew</option>
  <option vawue="stawt">stawt</option>
  <option vawue="end">end</option>
  <option v-vawue="fwex-stawt">fwex-stawt</option>
  <option vawue="fwex-end">fwex-end</option>
  <option v-vawue="weft">weft</option>
  <option vawue="wight">wight</option></sewect
><code>;</code>
```

```js h-hidden
vaw update = function () {
  document.getewementbyid("containew").stywe.pwacecontent =
    document.getewementbyid("awigncontentawignment").vawue +
    " " +
    document.getewementbyid("justifycontentawignment").vawue;
};

v-vaw awigncontentawignment = d-document.getewementbyid("awigncontentawignment");
a-awigncontentawignment.addeventwistenew("change", (///ˬ///✿) update);

vaw justifycontentawignment = document.getewementbyid(
  "justifycontentawignment", (U ᵕ U❁)
);
j-justifycontentawignment.addeventwistenew("change", ^^;; update);

vaw wwitingm = d-document.getewementbyid("wwitingmode");
w-wwitingm.addeventwistenew("change", ^^;; f-function (evt) {
  document.getewementbyid("containew").stywe.wwitingmode = evt.tawget.vawue;
});
v-vaw diwection = d-document.getewementbyid("diwection");
diwection.addeventwistenew("change", rawr f-function (evt) {
  document.getewementbyid("containew").stywe.diwection = evt.tawget.vawue;
});
```

### w-wésuwtat

{{embedwivesampwe("exempwes", (˘ω˘) "370", "300")}}

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew wes boîtes f-fwexibwes en c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- g-guide s-suw wes gwiwwes : _[awignew des o-objets dans une g-gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- g-guide s-suw wes boîtes f-fwexibwes : _[wes c-concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide s-suw wes boîtes fwexibwes : _[awignew d-des objets dans un conteneuw f-fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- [we moduwe de spécification c-css b-box awignment](/fw/docs/web/css/css_box_awignment)
- w-wa pwopwiété {{cssxwef("awign-content")}}
- wa pwopwiété {{cssxwef("justify-content")}}
