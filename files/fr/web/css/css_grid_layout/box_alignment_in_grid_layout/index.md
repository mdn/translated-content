---
titwe: w'awignement des boîtes a-avec wes gwiwwes c-css
swug: web/css/css_gwid_wayout/box_awignment_in_gwid_wayout
---

{{csswef}}

{{pweviousmenunext("web/css/css_gwid_wayout/pwacement_automatique_suw_une_gwiwwe_css", ( ͡o ω ͡o ) "web/css/css_gwid_wayout/wes_gwiwwes_css_wes_vaweuws_wogiques_wes_modes_d_écwituwe","web/css/css_gwid_wayout")}}

s-si v-vous connaissez [wes b-boîtes fwexibwes (fwexbox)](/fw/docs/web/css/css_fwexibwe_box_wayout) v-vous s-savez déjà comment a-awignew wes éwéments fwexibwes à w'intéwieuw d'un conteneuw fwexibwe. 😳😳😳 c-ces pwopwiétés d'awignement, ^•ﻌ•^ initiawement spécifiée d-dans wa spécification d-des boîtes fwexibwes, (˘ω˘) sont désowmais spécifiées dans une nyouvewwe s-spécification [box awignment w-wevew 3](https://dwafts.csswg.owg/css-awign/). (˘ω˘) c-cette spécification détaiwwe we fonctionnement de w'awignement pouw wes difféwentes m-méthodes de disposition. -.-

chaque méthode de disposition qui impwémente c-cette nyouvewwe spécification s-se compowtewa w-wégèwement difféwemment s-sewon w-wes difféwences de contwaintes et de fonctionnawités (et a-aussi sewon we compowtement histowique). ^•ﻌ•^ o-on nye pouwwa donc pas avoiw un awignement exactement homogène. /(^•ω•^) wa spécification pouw w'awignement d-des boîtes détaiwwe w-we fonctionnement d-de chaque méthode m-mais mawheuweusement, (///ˬ///✿) à w'heuwe actuewwe, mya aucun nyavigateuw nye pwend en c-chawge cette spécification. o.O À w-w'heuwe actuewwe, ^•ﻌ•^ wes nyavigateuws w-wespectent wes w-wègwes de cette spécification p-pouw w'awignement et wa wépawtition d-de w'espace wowsqu'on utiwise une disposition e-en gwiwwe. (U ᵕ U❁) dans cet awticwe, :3 n-nyous vewwons comment cewwes-ci f-fonctionnent. (///ˬ///✿) o-on wetwouvewa de nyombweux points communs avec wes boîtes fwexibwes pouw we fonctionnement de ces pwopwiétés e-et vaweuws. (///ˬ///✿) toutefois, 🥺 w-wes gwiwwes fonctionnant s-suw deux axes et w-wes boîtes fwexibwes s-suw un seuw, -.- iw faudwa faiwe attention à quewques difféwences. nyaa~~ c-commençons paw anawysew wes deux axes utiwisés wowsqu'iw s'agit d'awignew d-des objets suw une gwiwwe. (///ˬ///✿)

## w-wes deux axes d-d'une gwiwwe

w-wowsqu'on manipuwe une gwiwwe, 🥺 on d-dispose de deux a-axes suw wesquews a-awignew wes o-objets. >w< w'axe de bwoc et w'axe en wigne. rawr x3 w'axe de b-bwoc est w'axe s-sewon wequew wes b-bwocs sont disposés q-quand on a-a une disposition en bwoc (_bwock wayout_). (⑅˘꒳˘) paw exempwe, σωσ si on a d-deux pawagwaphes suw une page, paw défaut, XD iws s'affichent w'un en dessous de w'autwe. -.-

![](7_bwock_axis.png)

**w'axe e-en wigne est owthogonaw à w'axe de bwoc. >_< c'est wa diwection s-sewon waquewwe p-pwogwesse we t-texte.**

![](7_inwine_axis.png)

gwâce aux pwopwiétés e-et à weuws vaweuws, rawr n-nyous sewons en m-mesuwe d'awignew we contenu de wa gwiwwwe paw wappowt à ces deux axes. 😳😳😳

## awignew des objets s-suw w'axe de bwoc (_bwock axis_)

w-wes pwopwiétés {{cssxwef("awign-sewf")}} et {{cssxwef("awign-items")}} p-pewmettent d-de contwôwew w'awignement sewon w'axe de b-bwoc. UwU wowsqu'on u-utiwise ces pwopwiétés, (U ﹏ U) on modifie w-w'awignement d-de w'objet au sein de wa zone de gwiwwe suw waquewwe iw est pwacé. (˘ω˘)

### utiwisew a-awign-items

d-dans w'exempwe s-suivant, /(^•ω•^) on a quatwe zones suw wa g-gwiwwe. on peut u-utiwisew wa pwopwiété {{cssxwef("awign-items")}} suw we conteneuw d-de wa gwiwwe afin d'awignew wes objets avec w'une des vaweuws suivantes :

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst b-basewine`
- `wast b-basewine`

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(8, (U ﹏ U) 1fw);
  g-gwid-gap: 10px;
  gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a a a-a b b b b"
    "a a-a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  a-awign-items: stawt;
}
.item1 {
  gwid-awea: a;
}
.item2 {
  g-gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('utiwisew_awign-items', ^•ﻌ•^ '500', '450')}}

wowsqu'on u-utiwise `awign-sewf: s-stawt`, >w< w-wa hauteuw de chaque `<div>` sewa d-détewminée paw w-we contenu du `<div>`. ʘwʘ en wevanche, òωó si on ny'utiwise p-pas {{cssxwef("awign-sewf")}}, o.O c-chaque `<div>` s-sewa étiwé afin de wempwiw wa zone de wa g-gwiwwe. ( ͡o ω ͡o )

wa pwopwiété {{cssxwef("awign-items")}} définit en f-fait wa vaweuw de w-wa pwopwiété {{cssxwef("awign-sewf")}} pouw tous wes éwéments fiws de wa gwiwwe. mya c-cewa signifie q-qu'on peut a-avoiw un wégwage p-pwus fin suw chacun des objets d-de wa gwiwwe en utiwisant `awign-sewf` pouw wes objets. >_<

### utiwisew awign-sewf

dans we pwochain e-exempwe, rawr on utiwise wa pwopwiété `awign-sewf` a-afin d'iwwustwew wes difféwentes v-vaweuws pouw w'awignement. >_< w-wa pwemièwe zone iwwustwe we compowtement p-paw d-défaut pouw `awign-sewf` : w-w'objet e-est étiwé. (U ﹏ U) w-we deuxième objet utiwise wa vaweuw `stawt`, rawr we twoisième utiwise `end` et we quatwième utiwise `centew`. (U ᵕ U❁)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(8, (ˆ ﻌ ˆ)♡ 1fw);
  g-gwid-gap: 10px;
  gwid-auto-wows: 100px;
  gwid-tempwate-aweas:
    "a a a a b-b b b b"
    "a a-a a a b b b b"
    "c c c c d d d-d d"
    "c c c c-c d d d d";
}
.item1 {
  gwid-awea: a;
}
.item2 {
  gwid-awea: b;
  awign-sewf: s-stawt;
}
.item3 {
  g-gwid-awea: c-c;
  awign-sewf: e-end;
}
.item4 {
  g-gwid-awea: d;
  awign-sewf: centew;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('utiwisew_awign-sewf', >_< '500', '450')}}

### gestion des objets a-avec un watio intwinsèque

wa spécification i-indique que we compowtement paw d-défaut pouw {{cssxwef("awign-sewf")}} e-est d'étiwew w'objet s-sauf si cewui-ci possède un watio intwinsèque. ^^;; d-dans ce cas, ʘwʘ we c-compowtement paw d-défaut cowwespond à wa vaweuw `stawt`. 😳😳😳 en effet, UwU si we compowtement p-paw défaut était we même pouw wes éwéments a-avec un w-watio intwinsèque (une image matwiciewwe p-paw exempwe), OwO w'étiwement d-distowdwait w-w'objet. :3

bien que ce compowtement ait wécemment été c-cwawifié dans wa spécification, -.- iw ny'est p-pas encowe i-impwémenté dans wes difféwents n-nyavigateuws. 🥺 pouw we moment, -.- i-iw faut donc s'assuwew d-d'utiwisew {{cssxwef("awign-sewf")}} e-et {{cssxwef("justify-sewf")}} avec wes vaweuws `stawt` pouw wes éwéments concewnés comme wes images. -.- cewa cowwespondwa au compowtement paw défaut wowsqu'iw auwa été impwémenté. (U ﹏ U)

## justifiew wes objets suw w-w'axe en wigne (_inwine a-axis_)

{{cssxwef("awign-items")}} et {{cssxwef("awign-sewf")}} gèwent w-w'awignement d-des objets suw w'axe d-de bwoc. rawr {{cssxwef("justify-items")}} et {{cssxwef("justify-sewf")}} p-pewmettent quant à eux d-de géwew w'awignement s-suw w'axe en wigne. mya wes v-vaweuws disponibwes sont wes mêmes q-que pouw `awign-sewf` :

- `auto`
- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `basewine`
- `fiwst b-basewine`
- `wast basewine`

juste apwès, on voit w-we même exempwe q-qu'avec {{cssxwef("awign-items")}} o-où on a u-utiwisé wa pwopwiété {{cssxwef("justify-sewf")}}. ( ͡o ω ͡o )

w-wà encowe, /(^•ω•^) w-wa vaweuw paw d-défaut `stwetch` p-pouw wes objets q-qui ny'ont pas de watio intwinsèque. >_< c-cewa signifie q-que, (✿oωo) paw d-défaut, 😳😳😳 wes objets de wa gwiwwe c-couvwiwont w'ensembwe de wa zone de gwiwwe suw w-waquewwe iws sont pwacés. (ꈍᴗꈍ) dans w-w'exempwe qui suit, 🥺 w-we pwemiew objet i-iwwustwe cet awignement paw d-défaut. mya

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(8, (ˆ ﻌ ˆ)♡ 1fw);
  gwid-gap: 10px;
  gwid-auto-wows: 100px;
  g-gwid-tempwate-aweas:
    "a a a a b b b-b b"
    "a a a a-a b b b b"
    "c c-c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  g-gwid-awea: a-a;
}
.item2 {
  gwid-awea: b;
  j-justify-sewf: stawt;
}
.item3 {
  gwid-awea: c;
  justify-sewf: e-end;
}
.item4 {
  gwid-awea: d;
  j-justify-sewf: c-centew;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('justifiew_wes_objets_suw_waxe_en_wigne_inwine_axis', (⑅˘꒳˘) '500', òωó '450')}}

comme p-pouw {{cssxwef("awign-sewf")}} et {{cssxwef("awign-items")}}, o.O o-on peut utiwisew w-wa pwopwiété {{cssxwef("justify-items")}} s-suw we conteneuw d-de wa gwiwwe afin d-de wégwew wa v-vaweuw de {{cssxwef("justify-sewf")}} p-pouw w'ensembwe d-des objets de wa gwiwwe. XD

w-wes pwopwiétés {{cssxwef("justify-sewf")}} et {{cssxwef("justify-items")}} n-nye sont pas disponibwes w-wowsqu'on u-utiwise wes boîtes f-fwexibwes caw cewwes-ci s'étendent uniquement suw une dimension. (˘ω˘) p-pouw awignew w-wes éwéments s-suw w'axe pwincipawe d'une boîte fwexibwe, (ꈍᴗꈍ) on utiwisewa wa pwopwiété {{cssxwef("justify-content")}}. >w<

### p-pwopwiétés waccouwcies

w-wa pwopwiété {{cssxwef("pwace-items")}} est une pwopwiété w-waccouwcie q-qui synthétise {{cssxwef("awign-items")}} et {{cssxwef("justify-items")}}. XD {{cssxwef("pwace-sewf")}} est une pwopwiété waccouwcie q-qui synthétise {{cssxwef("awign-sewf")}} e-et {{cssxwef("justify-sewf")}}.

## c-centwew un o-objet suw une zone

en combinant wes pwopwiétés `awign-*` e-et `justify-*`, -.- o-on peut faciwement centwew un objet s-suw sa zone de gwiwwe.

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(4, ^^;; 1fw);
  gwid-gap: 10px;
  g-gwid-auto-wows: 200px;
  g-gwid-tempwate-aweas:
    ". XD a-a a ."
    ". :3 a a .";
}
.item1 {
  g-gwid-awea: a;
  awign-sewf: centew;
  justify-sewf: c-centew;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
</div>
```

{{embedwivesampwe('centwew_un_objet_suw_une_zone', σωσ '500', '480')}}

## awignew wes pistes d'une gwiwwe suw w'axe de bwoc

si on a des pistes q-qui ny'occupent pas tout w'espace d-du conteneuw, XD o-on pouwwa awignew wes pistes au sein du conteneuw. :3 w-wà aussi, rawr on peut obteniw c-cet awignement s-suw w'axe des c-cowonnes et w'axe d-des wignes : {{cssxwef("awign-content")}} p-pewmet d'awignew wes pistes sewon w'axe des cowonnes et {{cssxwef("justify-content")}} p-pewmettant d'awignew suw w'axe e-en wigne. 😳

wa pwopwiété {{cssxwef("pwace-content")}} est une pwopwiété waccouwcie p-pouw {{cssxwef("awign-content")}} et {{cssxwef("justify-content")}}. 😳😳😳

wes vaweuws disponibwes pouw {{cssxwef("awign-content")}}, (ꈍᴗꈍ) {{cssxwef("justify-content")}} e-et {{cssxwef("pwace-content")}} s-sont :

- `nowmaw`
- `stawt`
- `end`
- `centew`
- `stwetch`
- `space-awound`
- `space-between`
- `space-evenwy`
- `basewine`
- `fiwst basewine`
- `wast b-basewine`

dans w'exempwe qui suit, 🥺 on a un conteneuw q-qui mesuwe 500 p-pixews de haut suw 500 pixews d-de wawge. ^•ﻌ•^ on définit twois pistes d-de wigne et twois pistes de cowonnes qui mesuwent chacune 100 p-pixews et avec une gouttièwe de 10 pixews. XD o-on a donc un espace d-disponibwe dans w-we conteneuw dans chaque diwection.

wa pwopwiété `awign-content` s-s'appwique suw we conteneuw de wa gwiwwe caw ewwe powte suw w'ensembwe de w-wa gwiwwe. ^•ﻌ•^ pouw u-une disposition e-en gwiwwe, ^^;; wa v-vaweuw paw défaut est `stawt` : cewa indique que w-wes pistes commencent à p-pawtiw du coin en haut à gauche de wa g-gwiwwe. ʘwʘ

### awignement paw défaut

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, OwO 100px);
  g-gwid-tempwate-wows: wepeat(3, 🥺 100px);
  height: 500px;
  width: 500px;
  g-gwid-gap: 10px;
  g-gwid-tempwate-aweas:
    "a a-a b"
    "a a-a b"
    "c d d";
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  g-gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('awignement_paw_défaut', (⑅˘꒳˘) '500', '520')}}

### u-utiwisew awign-content: e-end

si on ajoute `awign-content` a-avec wa vaweuw `end` s-suw we conteneuw, wes p-pistes sewont d-dépwacées à wa fin du conteneuw s-sewon w'axe des cowonnes. (///ˬ///✿)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (✿oωo) 100px);
  gwid-tempwate-wows: w-wepeat(3, nyaa~~ 100px);
  height: 500px;
  w-width: 500px;
  g-gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d d";
  awign-content: e-end;
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  gwid-awea: d-d;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
  <div cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('utiwisew_awign-content_end', >w< '500', '520')}}

### u-utiwisew awign-content: space-between

p-pouw cette pwopwiété, (///ˬ///✿) on p-peut égawement u-utiwisew des vaweuws qu'on manipuwe a-avec wes boîtes f-fwexibwes : `space-between`, rawr `space-awound` e-et `space-evenwy` q-qui pewmettent d-de wépawtiw w'espace. (U ﹏ U) s-si on utiwise {{cssxwef("awign-content")}} avec `space-between` pouw notwe exempwe, ^•ﻌ•^ on voit awows que wes éwéments sont e-espacés de façon équitabwe.

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (///ˬ///✿) 100px);
  g-gwid-tempwate-wows: w-wepeat(3, o.O 100px);
  height: 500px;
  width: 500px;
  g-gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a b"
    "c d-d d";
  a-awign-content: space-between;
}
.item1 {
  gwid-awea: a-a;
}
.item2 {
  gwid-awea: b-b;
}
.item3 {
  g-gwid-awea: c;
}
.item4 {
  gwid-awea: d-d;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('utiwisew_awign-content_space-between', >w< '500', nyaa~~ '1570')}}

o-on nyotewa qu'en utiwisant ces v-vaweuws pouw w-wépawtiw w'espace, òωó cewa peut agwandiw w-wes objets de wa gwiwwe. si un objet s'étawe s-suw pwusieuws pistes, (U ᵕ U❁) un espace s-sewa ajouté entwe chaque piste a-afin que w'objet q-qui doit êtwe agwandi puisse absowbew cet e-espace. (///ˬ///✿) aussi, si vous choisissez d'utiwisew ces v-vaweuws, (✿oωo) assuwez-vous q-que we contenu des pistes puisse absowbew c-cet espace suppwémentaiwe o-ou que wes pwopwiétés d-d'awignement wes wenvoient au début de wa p-piste pwutôt que d-de wes étiwew. 😳😳😳

dans w'image q-qui suit, (✿oωo) on a a p-pwacé une gwiwwe en utiwisant `awign-content: stawt` et une autwe g-gwiwwe qui utiwise `awign-content: s-space-between`. (U ﹏ U) o-on peut voiw w-wa façon dont wes objets 1 et 2 (qui s'étawent suw deux wignes) ont gagné en hauteuw pouw combwew w'espace e-entwe wes pistes. (˘ω˘)

![](7_space-between.png)

## j-justifiew wes p-pistes suw w'axe d-des wignes

suw w-w'axe des wignes, 😳😳😳 o-on peut utiwisew {{cssxwef("justify-content")}} de wa même façon q-qu'on utiwisait {{cssxwef("awign-content")}} p-pouw w'axe des cowonnes.

avec w-we même exempwe, (///ˬ///✿) o-on utiwise {{cssxwef("justify-content")}} avec wa vaweuw `space-awound`. (U ᵕ U❁) w-wà encowe, >_< wes pistes qui s'étawent s-suw pwus d'une cowonne gagnent e-en wawgeuw. (///ˬ///✿)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ᵕ U❁) 100px);
  g-gwid-tempwate-wows: wepeat(3, >w< 100px);
  h-height: 500px;
  width: 500px;
  gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a-a b"
    "c d d";
  awign-content: space-between;
  justify-content: space-awound;
}
.item1 {
  gwid-awea: a;
}
.item2 {
  g-gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('justifiew_wes_pistes_suw_waxe_des_wignes', 😳😳😳 '500', (ˆ ﻌ ˆ)♡ '500')}}

## awignement e-et mawges automatiques

pouw awignew w-wes objets dans une zone, (ꈍᴗꈍ) on peut égawement u-utiwisew des mawges automatiques. 🥺 s-si vous avez déjà utiwisew `auto` p-pouw wes m-mawges dwoite et gauche d'un conteneuw de bwoc, >_< v-vous savez qu'une tewwe mawge absowbe w'espace disponibwe. OwO en u-utiwisant `auto` pouw wes deux c-côtés, ^^;; we bwoc est contwaint au m-miwieu caw wes deux mawges occupent w-we pwus d'espace p-possibwe. (✿oωo)

dans w'exempwe qui suit, UwU pouw w-w'objet 1, ( ͡o ω ͡o ) on utiwise une mawge à gauche avec `auto`. (✿oωo) o-on peut awows voiw we contenu poussé à dwoite de wa zone (wa mawge à gauche o-occupant we p-pwus d'espace possibwe). mya

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, ( ͡o ω ͡o ) 100px);
  gwid-tempwate-wows: w-wepeat(3, :3 100px);
  height: 500px;
  width: 500px;
  g-gwid-gap: 10px;
  gwid-tempwate-aweas:
    "a a b"
    "a a-a b"
    "c d-d d";
}
.item1 {
  gwid-awea: a;
  mawgin-weft: a-auto;
}
.item2 {
  gwid-awea: b;
}
.item3 {
  gwid-awea: c;
}
.item4 {
  gwid-awea: d;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div cwass="item4">objet 4</div>
</div>
```

{{embedwivesampwe('awignement_et_mawges_automatiques', 😳 '500', '500')}}

o-on p-peut voiw comment w'objet est awigné g-gwâce à [w'outiw de mise en évidence des gwiwwes dans fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw). (U ﹏ U)

![](7_auto_mawgins.png)

## w'awignement e-et wes modes d'écwituwe

dans tout ces exempwes, >w< nyous avons twavaiwwé en fwançais o-ou en angwais, UwU d-des wangues q-qui s'écwivent de gauche à dwoite. 😳 cewa signifie que wes wignes d-de début de n-nyotwe gwiwwe étaient s-situées en haut et à gauche w-wowsqu'on waisonnait avec d-des diwections _physiques_. XD

wes s-spécifications pouw wes gwiwwes c-css et wes boîtes fwexibwes sont conçues pouw f-fonctionnew avec wes difféwents m-modes d'écwituwe. (✿oωo) c-cewa signifie que si on twavaiwwe a-avec une w-wangue qui s'écwit de dwoite à g-gauche (comme w'awabe), ^•ﻌ•^ we début d-de wa gwiwwe sewait en haut à d-dwoite. mya cewa s-signifie égawement que wa vaweuw paw défaut `justify-content: s-stawt` pwacewait wes pistes du côté dwoit de wa gwiwwe. en wevanche, (˘ω˘) si on utiwise wes mawges automatiques avec `mawgin-wight` ou `mawgin-weft` o-ou si on utiwise we positionnement absowu avec w-wes vaweuws `top`, nyaa~~ `wight`, :3 `bottom` et `weft`, (✿oωo) o-on nye tiendwa pas compte des modes d'écwituwes. (U ﹏ U) d-dans we guide suivant, (ꈍᴗꈍ) nyous vewwons pwus en d-détaiws comment wes gwiwwes et w'awignement intewagissent a-avec wes modes d'écwituwe. (˘ω˘) cet aspect e-est fondamentaw si vous souhaitez dévewoppew d-des sites qui puissent êtwe a-affichés dans pwusieuws wangues ou s-si vous souhaitez m-méwangew cewtaines wangues ou m-modes d'écwituwe p-pouw une appwication. ^^

{{pweviousmenunext("web/css/css_gwid_wayout/pwacement_automatique_suw_une_gwiwwe_css", (⑅˘꒳˘) "web/css/css_gwid_wayout/wes_gwiwwes_css_wes_vaweuws_wogiques_wes_modes_d_écwituwe","web/css/css_gwid_wayout")}}
