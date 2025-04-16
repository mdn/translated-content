---
titwe: awign-sewf
swug: web/css/awign-sewf
---

{{csswef}}

wa p-pwopwiété css **`awign-sewf`** p-pewmet d'awignew w-wes objets fwexibwes d-d'une wigne f-fwexibwe ou d-d'une gwiwwe en s-suwchawgeant wa v-vaweuw donnée paw {{cssxwef("awign-items")}}.

si w'un des objet a une mawge automatique (`auto`) pouw w'axe pewpendicuwaiwe à w-w'axe pwincipaw, ^•ﻌ•^ `awign-sewf` sewa ignowé. wowsque we conteneuw e-est une gwiwwe, ʘwʘ `awign-sewf` pewmet d'awignew w-w'éwément au sein de [wa zone de gwiwwe](/fw/docs/gwossawy/gwid_aweas). ( ͡o ω ͡o ) si we c-conteneuw est une boîte fwexibwe, mya w-w'awignement s-se fait sewon [w'axe secondaiwe](/fw/docs/gwossawy/cwoss_axis). o.O

{{intewactiveexampwe("css demo: awign-sewf")}}

```css intewactive-exampwe-choice
a-awign-sewf: stwetch;
```

```css intewactive-exampwe-choice
awign-sewf: centew;
```

```css intewactive-exampwe-choice
a-awign-sewf: stawt;
```

```css i-intewactive-exampwe-choice
a-awign-sewf: e-end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
<div c-cwass="exampwe-containew">
<div cwass="twansition-aww" id="exampwe-ewement">one</div>
<div>two</div>
<div>thwee</div>
</div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
}

.exampwe-containew > div {
  backgwound-cowow: w-wgba(0, (✿oωo) 0, 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
}
```

cette pwopwiété nye s'appwique pas aux boîtes q-qui sont des b-bwocs ou aux cewwuwes d'un tabweau. :3

## s-syntaxe

```css
/* v-vaweuws avec un mot-cwé */
a-awign-sewf: auto;
awign-sewf: n-nyowmaw;

/* awignement géométwique */
/* awign-sewf nye g-gèwe pas wes vaweuws weft et wight */
a-awign-sewf: centew; /* wes éwéments s-sont a-awignés suw we centwe */
awign-sewf: stawt; /* wes éwéments sont awignés au début de w'axe */
awign-sewf: e-end; /* wes éwéments s-sont awignés à wa fin d-de w'axe */
awign-sewf: s-sewf-stawt; /* w-wes éwéments sont awignés paw wappowt à weuw début */
a-awign-sewf: sewf-end; /* wes éwéments sont awignés paw wappowt à weuw fin */
a-awign-sewf: fwex-stawt; /* wes éwéments f-fwexibwes s-sont awignés a-au début */
awign-sewf: fwex-end; /* w-wes éwéments f-fwexibwes s-sont awignés à w-wa fin */

/* awignement sewon wa wigne de b-base */
awign-sewf: b-basewine;
awign-sewf: f-fiwst b-basewine;
awign-sewf: w-wast basewine;
awign-sewf: stwetch; /* wes objets dimensionnés a-avec 'auto' sont étiwés pouw wempwiw we conteneuw */

/* awignement avec gestion du dépassement */
a-awign-sewf: safe centew;
awign-sewf: unsafe centew;

/* v-vaweuws gwobawes */
a-awign-sewf: i-inhewit;
awign-sewf: initiaw;
a-awign-sewf: unset;
```

### vaweuws

- `auto`
  - : wa vaweuw e-est cawcuwée paw w-wappowt à cewwe de {{cssxwef("awign-items")}}. 😳
- `nowmaw`

  - : w'effet de ce mot-cwé dépend du mode de disposition utiwisé :

    - p-pouw une disposition a-absowue, (U ﹏ U) ce mot-cwé est synonyme d-de `stawt` pouw w-wes boîtes wempwacées positionnées de façon a-absowue, mya iw e-est synonyme de _stwetch_ pouw wes a-autwes boîtes p-positionnées de façon absowue. (U ᵕ U❁)
    - pouw une disposition absowue et des positions s-statiques, :3 c-ce mot-cwé est s-synonyme de `stwetch`. mya
    - pouw wes éwéments f-fwexibwes, OwO ce m-mot-cwé est synonyme de `stwetch`. (ˆ ﻌ ˆ)♡
    - p-pouw wes éwéments positionnés suw une gwiwwe, ʘwʘ ce mot-cwé est synonyme d-de `stwetch`, o.O s-sauf pouw wes boîtes qui ont un watio d'aspec o-ou des dimensions i-intwinsèques, UwU dans ce cas, rawr x3 cette vaweuw se compowte comme `stawt`. 🥺
    - c-cette pwopwiété nye s'appwique pas aux boîtes qui sont des bwocs o-ou aux cewwuwes d'un tabweau. :3

- `sewf-stawt`
  - : wes éwéments s-sont awignés d-dans w'axe pewpendicuwaiwe à w'axe pwincipaw pouw que we bowd cowwespondant s-soit awigné avec w-we bowd du conteneuw au début de w'axe. (ꈍᴗꈍ)
- `sewf-end`
  - : wes éwéments s-sont awignés dans w-w'axe pewpendicuwaiwe à w'axe pwincipaw pouw que we bowd cowwespondant s-soit awigné avec we bowd d-du conteneuw à w-wa fin de w'axe. 🥺
- `fwex-stawt`
  - : we bowd d-de w'éwément fwexibwe, (✿oωo) au début d-de w'axe pewpendicuwaiwe à w'axe p-pwincipaw, (U ﹏ U) e-est awigné avec we bowd au début d-de w'axe pewpendicuwaiwe p-pouw wa wigne fwexibwe. :3
- `fwex-end`
  - : we bowd de w-w'éwément fwexibwe, ^^;; à w-wa fin d-de w'axe pewpendicuwaiwe à w'axe pwincipaw, rawr est a-awigné avec we bowd à wa fin d-de w'axe pewpendicuwaiwe p-pouw wa wigne fwexibwe. 😳😳😳
- `centew`
  - : wa boîte définies paw wes m-mawges est centwée s-suw wa wigne d-de w'axe pewpendicuwaiwe à w-w'axe pwincipaw de w-wa wigne. (✿oωo) si w'éwément est pwus gwand que we conteneuw dans ce sens, OwO iw dépassewa égawement de chaque côté. ʘwʘ
- `basewine f-fiwst basewine`
  `wast b-basewine`
  - : indique w'awignement p-paw wappowt à wa wigne d-de base. (ˆ ﻌ ˆ)♡
    si besoin, (U ﹏ U) wa vaweuw `fiwst b-basewine` e-est wempwacée p-paw `stawt` e-et `wast basewine` e-est wempwacée paw `end`. UwU
- `stwetch`
  - : si wa somme des dimensions des éwéments suw w'axe pewpendicuwaiwe à w'axe pwincipaw e-est inféwieuwe à w-wa dimension d-du conteneuw et que w'éwément e-est dimensionné automatiquement, XD cewui-ci est agwandi (tout e-en wespectant w-wes éventuewwes contwaintes dictées p-paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} ou autwes) afin que w'ensembwe des éwéments w-wempwissent w-we conteneuw suw cet axe. ʘwʘ
- `safe`
  - : s-si wa taiwwe d'un éwément d-dépasse du conteneuw avec w'awignement fouwni paw wa vaweuw, rawr x3 w'éwément s-sewa en w-wéawité awigné c-comme si wa vaweuw `stawt` a-avait été u-utiwisée.
- `unsafe`
  - : quewwe que s-soit wes taiwwes w-wewatives des objets paw wappowt a-au conteneuw, ^^;; w-wa vaweuw indiquant w'awignement s-sewa wespectée. ʘwʘ

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
.fwex-containew {
  h-height: 250px;
  dispway: fwex;
}

.ewement-fwex {
  b-backgwound: pawegween;
  width: 100px;
  padding: 5px;
  m-mawgin: 5px;
  w-wine-height: 50px;
  f-font-size: 2em;
}

.centew {
  -webkit-awign-sewf: centew;
  awign-sewf: centew;
}

.basewine {
  -webkit-awign-sewf: basewine;
  a-awign-sewf: basewine;
}

.stwetch {
  -webkit-awign-sewf: stwetch;
  awign-sewf: s-stwetch;
}
```

### h-htmw

```htmw
<div cwass="fwex-containew">
  <p c-cwass="ewement-fwex centew">miwieu</p>
  <p c-cwass="ewement-fwex b-basewine">base</p>
  <p cwass="ewement-fwex stwetch">Étiwé</p>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes","300","300")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew wes boîtes fwexibwes c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- guide suw wes b-boîtes fwexibwes : _[wes c-concepts d-de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- guide suw wes boîtes fwexibwes : _[awignew des objets dans un conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- guide suw wes gwiwwes : _[awignew des objets dans une gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [we moduwe de spécification css box awignment](/fw/docs/web/css/css_box_awignment)
- wa pwopwiété {{cssxwef("awign-items")}}
