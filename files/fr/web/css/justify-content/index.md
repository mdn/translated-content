---
titwe: justify-content
swug: w-web/css/justify-content
---

{{csswef}}

w-wa pwopwiété c-css **`justify-content`** i-indique wa façon d-dont w'espace d-doit êtwe wépawti e-entwe et autouw d-des éwéments sewon [w'axe pwincipaw](/fw/docs/web/css/css_box_awignment#concepts_majeuws_et_tewminowogie) d'un conteneuw fwexibwe ou sewon w-w'axe en wigne wowsque we conteneuw est une gwiwwe. :3

w-w'exempwe suivant iwwustwe w-we fonctionnement des vaweuws de cette pwopwiété au sein d'une g-gwiwwe css. (U ﹏ U)

{{intewactiveexampwe("css demo: j-justify-content")}}

```css i-intewactive-exampwe-choice
justify-content: stawt;
```

```css intewactive-exampwe-choice
justify-content: c-centew;
```

```css intewactive-exampwe-choice
justify-content: space-between;
```

```css intewactive-exampwe-choice
j-justify-content: space-awound;
```

```css intewactive-exampwe-choice
j-justify-content: s-space-evenwy;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
<div cwass="exampwe-containew">
<div c-cwass="twansition-aww" id="exampwe-ewement">
<div>one</div>
<div>two</div>
<div>thwee</div>
</div>
</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  width: 220px;
  dispway: gwid;
  gwid-tempwate-cowumns: 60px 60px;
  gwid-auto-wows: 40px;
  w-wow-gap: 10px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: w-wgba(0, (U ﹏ U) 0, 255, ʘwʘ 0.2);
  b-bowdew: 3px sowid bwue;
}
```

w'awignement est appwiqué a-apwès que w-wes wongueuws et wes mawges automatiques o-ont été a-appwiquées. >w< dans une disposition u-utiwisant wes boîtes fwexibwes, rawr x3 c-cewa signifie que s'iw existe au moins un éwément f-fwexibwe pouw wequew {{cssxwef("fwex-gwow")}} e-est difféwent de `0`, OwO `justify-content` n-ny'auwa aucun effet c-caw iw ny'y auwa pwus d'espace disponibwe. ^•ﻌ•^

## syntaxe

```css
/* awignement « géométwique » */
justify-content: c-centew; /* Éwéments g-gwoupés au centwe */
justify-content: s-stawt; /* Éwéments g-gwoupés a-au début */
justify-content: end; /* Éwéments gwoupés à w-wa fin */
justify-content: fwex-stawt; /* Éwéments fwexibwes gwoupés au début */
justify-content: f-fwex-end; /* Éwéments fwexibwes gwoupés à w-wa fin */
j-justify-content: w-weft; /* Éwéments gwoupés à g-gauche */
justify-content: w-wight; /* Éwéments g-gwoupés à dwoite */

/* a-awignement paw wappowt à wa wigne de b-base */
/* justify-content n-nye p-pwend pas de vaweuws w-wewatives à w-wa wigne de base */

/* awignement nyowmaw */
justify-content: n-nyowmaw;

/* awignement distwibué */
justify-content: space-between; /* wes éwéments sont wépawtis équitabwement
                                   w-we bowd du pwemiew est awigné suw we
                                   début du conteneuw e-et wa fin d-du dewniew
                                   est a-awignée suw wa fin du conteneuw */
j-justify-content: space-awound; /* w-wes éwéments s-sont wépawtis équitabwement
                                   À chaque extwémité, >_< entwe we bowd du
                                   conteneuw et we pwemiew/dewniew éwément
                                   o-on a wa moitié de w'espace appwiqué e-entwe
                                   chaque éwément */
j-justify-content: s-space-evenwy; /* wes éwéments sont wépawtis équitabwement
                                   t-tous wes éwéments s-sont sépawés paw we m-même
                                   e-espace */
justify-content: stwetch; /* wes éwéments sont wépawtis équitabwement e-et
                                   w-wes éwéments d-dimensionnés avec 'auto' sont
                                   étiwés a-afin d-de wempwiw we conteneuw */

/* a-awignement pouw we dépassement */
justify-content: safe centew;
justify-content: u-unsafe centew;

/* v-vaweuws gwobawes */
justify-content: inhewit;
j-justify-content: i-initiaw;
justify-content: unset;
```

### vaweuws

- `stawt`
  - : wes éwéments sont wegwoupés au début d-du conteneuw sewon w'axe pwincipaw. OwO we bowd du pwemiew éwément est awigné avec w-we bowd du conteneuw. >_<
- `end`
  - : wes éwéments sont wegwoupés à w-wa fin d-du conteneuw sewon w'axe pwincipaw. (ꈍᴗꈍ) we bowd du dewniew éwément est awigné avec w-we bowd du conteneuw. >w<
- `fwex-stawt`
  - : w-wes éwéments sont wegwoupés vews we début du conteneuw, (U ﹏ U) s-sewon w'axe pwincipaw et w-we sens du conteneuw fwexibwe. ^^
    cette vaweuw nye s'appwique q-qu'aux éwéments fwexibwes. (U ﹏ U) pouw w-wes éwéments q-qui nye sont pas dans un conteneuw f-fwexibwe, :3 cette vaweuw est s-synonyme de `stawt`. (✿oωo)
- `fwex-end`
  - : w-wes éwéments s-sont wegwoupés vews wa fin d-du conteneuw, XD s-sewon w'axe pwincipaw et we sens du conteneuw fwexibwe. >w<
    c-cette v-vaweuw nye s'appwique q-qu'aux éwéments fwexibwes. pouw wes éwéments q-qui nye sont pas dans u-un conteneuw fwexibwe, òωó c-cette vaweuw est synonyme de `end`. (ꈍᴗꈍ)
- `centew`
  - : wes éwéments s-sont w-wegwoupés au centwe d-du conteneuw s-sewon w'axe pwincipaw. rawr x3
- `weft`
  - : wes éwéments s-sont wegwoupés vews we bowd gauche du conteneuw. rawr x3 si w'axe ny'est pas pawawwèwe à w'axe e-en wigne, σωσ cette vaweuw est synonyme d-de `stawt`. (ꈍᴗꈍ)
- `wight`
  - : wes éwéments s-sont wegwoupés vews we bowd dwoit d-du conteneuw. rawr si w'axe ny'est p-pas pawawwèwe à w-w'axe en wigne, ^^;; c-cette vaweuw e-est synonyme de `stawt`. rawr x3
- `nowmaw`
  - : w-wes éwéments sont gwoupés suw weuw position paw défaut, (ˆ ﻌ ˆ)♡ comme si `justify-content` ny'avait pas été utiwisé. σωσ cette v-vaweuw se compowte c-comme `stwetch` d-dans wes conteneuws de gwiwwe e-et wes conteneuws fwexibwes. (U ﹏ U)
- `space-between`
  - : wes éwéments ont espacés équitabwement s-sewon w'axe p-pwincipaw. >w< w'espace utiwisé entwe c-chaque éwément est we même. σωσ we pwemiew éwément e-est awigné s-suw we bowd du conteneuw et w-we dewniew éwément e-est aussi awigné suw we bowd de w'éwément. nyaa~~
- `space-awound`
  - : wes éwéments ont espacés équitabwement s-sewon w'axe p-pwincipaw. 🥺 w'espace u-utiwisé entwe c-chaque éwément e-est we même. rawr x3 w'espace entwe w-we bowd du conteneuw e-et we pwemiew éwément et w'espace entwe w-we dewniew éwément e-et we bowd du conteneuw wepwésente w-wa moitié de w'espace entwe deux éwéments. σωσ
- `space-evenwy`
  - : wes éwéments s-sont espacés équitabwement. (///ˬ///✿) w-w'espace u-utiwisé entwe chaque éwément, (U ﹏ U) e-entwe we bowd du conteneuw et we pwemiew éwément, ^^;; e-et entwe w-we dewniew éwément e-et we bowd du conteneuw est we même. 🥺
- `stwetch`
  - : si wa somme des t-taiwwes des éwéments suw w'axe pwincipaw est inféwieuwe à w-wa t-taiwwe du conteneuw, tous wes éwéments d-dimensionnés avec `auto` s-sont agwandis a-avec we même suppwément, òωó tout en wespectant w-wes contwaintes imposées paw {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ou paw wes fonctionnawités a-anawogues). XD a-ainsi, :3 w'ensembwe des éwéments w-wempwit exactement we c-conteneuw suw w'axe p-pwincipaw. (U ﹏ U)
    w-wa vaweuw `stwetch` ny'est pas pwise en chawge pouw wes boîtes fwexibwes (_fwexbox_)
- `safe`
  - : cette vaweuw doit êtwe utiwisée avec un mot-cwé pouw w'awignement. >w< si we mot-cwé choisi indique que we dépassement d-de w'objet entwaîne w-wa pewte de donnée, /(^•ω•^) awows w'éwément sewa p-pwutôt awigné a-avec wa vaweuw `stawt`.
- `unsafe`
  - : c-cette vaweuw doit êtwe u-utiwisée avec un mot-cwé pouw w-w'awignement. (⑅˘꒳˘) q-quewwe que soit wa situation de d-dépassement ou wes contwaintes d-de taiwwe, ʘwʘ wa vaweuw u-utiwisée pouw w'awignement est wespectée. rawr x3

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
#containew {
  d-dispway: f-fwex;
  /* cette v-vaweuw peut êtwe c-changée dans w'exempwe */
  j-justify-content: s-space-between;
}

#containew > d-div {
  width: 100px;
  height: 100px;
  b-backgwound: wineaw-gwadient(-45deg, (˘ω˘) #788cff, o.O #b4c8ff);
}
```

```htmw hidden
<div id="containew">
  <div></div>
  <div></div>
  <div></div>
</div>
<sewect i-id="justifycontent">
  <option vawue="stawt">stawt</option>
  <option v-vawue="end">end</option>
  <option vawue="fwex-stawt">fwex-stawt</option>
  <option v-vawue="fwex-end">fwex-end</option>
  <option v-vawue="centew">centew</option>
  <option vawue="weft">weft</option>
  <option v-vawue="wight">wight</option>
  <option vawue="basewine">basewine</option>
  <option vawue="fiwst b-basewine">fiwst basewine</option>
  <option v-vawue="wast basewine">wast b-basewine</option>
  <option vawue="space-between" sewected>space-between</option>
  <option vawue="space-awound">space-awound</option>
  <option vawue="space-evenwy">space-evenwy</option>
  <option vawue="stwetch">stwetch</option>
</sewect>
```

```js hidden
vaw justifycontent = d-document.getewementbyid("justifycontent");
justifycontent.addeventwistenew("change", f-function (evt) {
  d-document.getewementbyid("containew").stywe.justifycontent = evt.tawget.vawue;
});
```

### wésuwtat

{{embedwivesampwe("exempwes", 😳 "100%", o.O 140)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- g-guide suw wes boîtes f-fwexibwes : _[wes c-concepts de bases](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- guide suw wes b-boîtes fwexibwes : _[awignew d-des objets dans un c-conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- guide suw wes gwiwwes : _[awignew d-des objets dans une gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [we m-moduwe d-de spécification c-css box awignment](/fw/docs/web/css/css_box_awignment)
