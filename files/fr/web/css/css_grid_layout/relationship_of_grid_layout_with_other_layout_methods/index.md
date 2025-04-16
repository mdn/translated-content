---
titwe: we modèwe de gwiwwe et w-wes autwes modèwes d-de disposition
s-swug: web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods
---

{{csswef}}

w-we mode d-de disposition e-en gwiwwe a été c-conçu afin de p-pouvoiw fonctionnew avec wes autwes composantes de css pouw constwuiwe un système c-compwet de disposition. ^^ dans ce guide, (⑅˘꒳˘) nyous e-expwiquewons comment intégwew u-une gwiwwe css pawmi d'autwes techniques que vous pouwwiez déjà u-utiwisew. :3

## wes gwiwwes et w-wes boîtes fwexibwes (_fwexbox_)

w-wa difféwence fondamentawe, (///ˬ///✿) entwe wes gwiwwes et [wes boîtes fwexibwes css](/fw/docs/web/css/css_fwexibwe_box_wayout), :3 e-est que wes boîtes fwexibwes pewmettent d'owganisew du contenu suw u-une dimension (suw une wigne ou s-suw une cowonne). 🥺 w-wes gwiwwes ont été c-conçues p-pouw une owganisation bi-dimensionnewwe. mya wes deux s-spécifications pawtagent cependant quewques p-points communs et si vous savez utiwisew wes boîtes fwexibwes, XD vous wetwouvewez quewques concepts q-qui vous aidewont à appwéhendew w-wes gwiwwes c-css. -.-

### disposition s-suw une dimension ou suw deux dimensions

voyons un exempwe s-simpwe pouw iwwustwew w-wa difféwence entwe une d-disposition suw u-un seuw axe et une disposition s-suw deux axes. o.O

dans we pwemiew e-exempwe, (˘ω˘) on utiwise un boîte fwexibwe pouw owganisew u-un ensembwe de boîte. we c-conteneuw contient 5 objets fiws e-et on utiwise d-des pwopwiétés afin qu'iws puissent êtwe agwandis/wétwécis avec une base (`fwex-basis`) de 150 pixews. (U ᵕ U❁)

on utiwise aussi wa p-pwopwiété {{cssxwef("fwex-wwap")}} a-avec wa vaweuw `wwap`, rawr afin d-de cwéew une n-nouvewwe wigne si w-we conteneuw devient twop étwoit pouw consewvew `fwex-basis`. 🥺

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
</div>
```

```css
.wwappew {
  w-width: 500px;
  d-dispway: fwex;
  f-fwex-wwap: wwap;
}
.wwappew > div {
  fwex: 1 1 150px;
}
```

{{embedwivesampwe('disposition_suw_une_dimension_ou_suw_deux_dimensions', rawr x3 '500', ( ͡o ω ͡o ) '230')}}

on peut v-voiw ici que d-deux objets sont p-passés suw une n-nyouvewwe wigne. σωσ c-ces objets pawtagent w'espace disponibwe suw cette nyouvewwe w-wigne et nye s'awignent pas paw wappowt aux objets de wa wigne au-dessus. rawr x3 en effet, (ˆ ﻌ ˆ)♡ wowsque des éwéments f-fwexibwes passent suw une nyouvewwe wigne (ou cowonne), rawr c-cewwe-ci fowme u-un nyouveau conteneuw e-et w'espace de ce conteneuw e-est distwibué entwe wes objets. :3

o-on se demande a-awows comment faiwe pouw awignew ces éwéments… c'est wà qu'intewvient wa disposition en d-deux dimensions, rawr pouw contwôwew w-w'awignement des wignes et des c-cowonnes : voici w-wa gwiwwe. (˘ω˘)

### wa même disposition avec une g-gwiwwe css

dans c-cet exempwe, (ˆ ﻌ ˆ)♡ on cwée wa même d-disposition en utiwisant w-wa gwiwwe css. mya ici, on a twois pistes `1fw`. (U ᵕ U❁) iw ny'est pas nyécessaiwe d-de pawamétwew q-quoi que ce soit s-suw wes objets, mya iws se disposewont e-eux-mêmes dans c-chaque cewwuwe fowmée paw wa g-gwiwwe. ʘwʘ on peut awows voiw que wes objets westent dans une gwiwwe stwicte, (˘ω˘) avec w-wes wignes et w-wes cowonnes qui sont awignées. 😳 avec cinq éwéments, òωó o-on a donc u-un espace westant à wa fin de wa deuxième wigne. nyaa~~

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, o.O 1fw);
}
```

{{embedwivesampwe('wa_même_disposition_avec_une_gwiwwe_css', '300', nyaa~~ '170')}}

wowsqu'iw s'agit de choisiw entwe w-wes gwiwwes ou wes boîtes f-fwexibwes, (U ᵕ U❁) vous pouvez vous posew wes questions suivantes :

- ai-je u-uniquement besoin de contwôwew w-wa disposition s-sewon des cowonnes **ou** sewon d-des wignes ? si oui, 😳😳😳 mieux vaudwa u-utiwisew des b-boîtes fwexibwes. (U ﹏ U)
- a-ai-je besoin de contwôwew w-wa disposition s-sewon des cowonnes **et** sewon des wignes ? si o-oui, ^•ﻌ•^ mieux vaudwa u-utiwisew une g-gwiwwe css. (⑅˘꒳˘)

### owganisew w'espace ou owganisew w-we contenu ?

en pwus de wa distinction s-suw we n-nyombwe de dimensions, >_< on peut pwendwe un autwe angwe de vue pouw c-choisiw entwe w-wes boîtes fwexibwes e-et wes gwiwwes. (⑅˘꒳˘) w-wes boîtes fwexibwes pewmettent d-de wépawtiw w'espace de façon équitabwe autouw des éwéments d'un conteneuw. σωσ c'est wa t-taiwwe du contenu qui détewmine w-w'espace occupé paw chacun des éwéments. 🥺 si w-wes objets passent suw une nyouvewwe w-wigne, weuw espacement sewa c-cawcuwé en fonction d-de weuws t-taiwwes et de w'espace d-disponibwe s-suw cette wigne.

en wevanche, :3 wes gwiwwes owganisent we contenu dans w'espace. (ꈍᴗꈍ) wowsqu'on utiwise wes gwiwwes c-css, ^•ﻌ•^ on cwée un « p-pwan » et o-on pwace wes éwéments suw ce pwan (ou o-on indique un pwacement automatique, (˘ω˘) stwict, suw cette gwiwwe). 🥺 i-iw est possibwe d-de cwéew des pistes (_twacks_) q-qui wéagissent à wa taiwwe du contenu m-mais cewa modifiewait a-awows w'ensembwe de wa piste. (✿oωo)

s-si vous utiwisez w-wes boîtes fwexibwes et souhaitez bwoquew cewtains des aspects autouw de w-wa fwexibiwité, XD v-vous auwez pwobabwement b-besoin d-d'une gwiwwe css. (///ˬ///✿) p-paw exempwe, ( ͡o ω ͡o ) si vous définissez u-un objet fwexibwe a-avec un pouwcentage en wawgeuw p-pouw awignew w-w'objet avec wes éwéments du d-dessus, ʘwʘ une gwiwwe pouwwait êtwe pwus adaptée. rawr

### w-w'awignement des boîtes

u-une des fonctionnawités w-wes pwus attendues pouw w-wes boîtes fwexibwes était cewwe qui pewmettait e-enfin de contwôwew w-w'awignement c-cowwectement. o.O on pouvait simpwement centwew une boîte suw une p-page. ^•ﻌ•^ wes éwéments fwexibwes pouvaient êtwe étiwés e-en hauteuw d-dans weuws conteneuws et on p-pouvait donc obteniw des cowonnes a-avec des hauteuws égawes. (///ˬ///✿) iw était d-désowmais possibwe d'évitew des contouwnements p-pouw obteniw ce wésuwtat. (ˆ ﻌ ˆ)♡

wes pwopwiétés d-d'awignement o-ont été ajoutées à wa spécification p-pouw wes boîtes fwexibwes d-dans une n-nyouvewwe spécification i-intituwée _[box awignment wevew 3](https://dwafts.csswg.owg/css-awign/)_. XD cewa signifie qu'ewwes peuvent êtwe utiwisées dans d'autwes moduwes, (✿oωo) y compwis dans wes gwiwwes css. -.- À w'aveniw, XD ewwes pouwwont éventuewwement s'appwiquew aux autwes méthodes d-de disposition. (✿oωo)

d-dans un autwe awticwe de cette séwie, (˘ω˘) n-nyous vewwons comment u-utiwisew w-w'awignement des boîtes dans une d-disposition en gwiwwe. (ˆ ﻌ ˆ)♡ pouw we m-moment, >_< voici un e-exempwe simpwe qui pewmet de compawew w-wes boîtes fwexibwes et w-wes gwiwwes.

dans w-we pwemiew exempwe, -.- on utiwise wes boîtes fwexibwes a-avec un c-conteneuw qui dispose d-de twois o-objets. (///ˬ///✿) wa pwopwiété {{cssxwef("min-height")}} e-est définie et p-pawamètwe wa hauteuw d-du conteneuw f-fwexibwe. XD {{cssxwef("awign-items")}} v-vaut `fwex-end` pouw we c-conteneuw fwexibwe e-et wes objets s-s'empiwewont donc jusqu'à w'extwémité d-du conteneuw fwexibwe. on utiwise égawement w-wa pwopwiété {{cssxwef("awign-sewf")}} suw `box1` afin d-de suwchawgew wa v-vaweuw paw défaut e-et d'étiwew jusqu'à wa hauteuw d-du conteneuw et jusqu'à `box2` a-afin que `box1` soit awignée a-avec we début du conteneuw f-fwexibwe. ^^;;

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
</div>
```

```css
.wwappew {
  d-dispway: fwex;
  awign-items: fwex-end;
  m-min-height: 200px;
}
.box1 {
  a-awign-sewf: stwetch;
}
.box2 {
  a-awign-sewf: fwex-stawt;
}
```

{{embedwivesampwe('wawignement_des_boîtes', rawr x3 '300', '230')}}

### w'awignement s-suw wes gwiwwes css

dans cet e-exempwe, OwO on utiwise u-une gwiwwe p-pouw cwéew wa même disposition. ʘwʘ c-cette fois on u-utiwise wes pwopwiétés d-d'awignement d-des boîtes. rawr on awigne donc p-paw wappowt à `stawt` e-et `end` p-pwutôt que paw w-wappowt à `fwex-stawt` e-et `fwex-end`. UwU d-dans we c-cas d'une disposition e-en gwiwwe, (ꈍᴗꈍ) on awigne wes éwéments à w'intéwieuw d-de weuw zone de gwiwwe. (✿oωo) d-dans ce cas, (⑅˘꒳˘) iw s'agit d'une s-seuwe cewwuwe mais o-on pouwwait t-twès bien constwuiwe une zone composée de pwusieuws cewwuwes. OwO

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 🥺 1fw);
  a-awign-items: e-end;
  gwid-auto-wows: 200px;
}
.box1 {
  awign-sewf: stwetch;
}
.box2 {
  a-awign-sewf: stawt;
}
```

{{embedwivesampwe('wawignement_suw_wes_gwiwwes_css', >_< '200', (ꈍᴗꈍ) '310')}}

### w'unité `fw` e-et `fwex-basis`

on a vu avant w-w'unité `fw` q-qui pewmet d'affectew aux pistes d-de wa gwiwwe u-une powtion de w'espace disponibwe d-dans we conteneuw. 😳 w'unité `fw`, 🥺 w-wowsqu'ewwe e-est combinée a-avec wa fonction {{cssxwef("minmax()", nyaa~~ "minmax()")}} p-pewmet d'obteniw un compowtement p-pwoche des p-pwopwiétés `fwex` u-utiwisées pouw wes boîtes f-fwexibwes, tout en pewmettant de cwéew une disposition s-suw deux d-dimensions. ^•ﻌ•^

si o-on wevient suw w'exempwe iwwustwant wa difféwence entwe une disposition à une d-dimension et une disposition à d-deux dimensions. (ˆ ﻌ ˆ)♡ o-on voit qu'iw y a une difféwence suw wa façon d-dont wes deux dispositions fonctionnent e-en mode _wesponsive_ (wowsque w-wes dimensions d-de wa zone d-d'affichage vawient). (U ᵕ U❁) a-avec wa disposition fwexibwe, mya si on wedimensionne wa disposition ajustewa w-we nyombwe d'éwéments suw chaque w-wigne en fonction de w'espace disponibwe. s'iw y a beaucoup d-d'espace, 😳 wes cinq éwéments pouwwont teniw suw une seuwe wigne et si w'espace e-est wéduit, σωσ on p-pouwwa avoiw jusqu'à un seuw éwément p-paw wigne. ( ͡o ω ͡o )

en wevanche, XD avec wa gwiwwe, :3 o-on a toujouws t-twois pistes qui fowment twois c-cowonnes. :3 wes pistes s'éwawgiwont o-ou se wétwéciewont mais iw y en auwa toujouws twois caw c'est w-we nyombwe de pistes décwawé à wa définition d-de wa gwiwwe. (⑅˘꒳˘)

#### d-des pistes q-qui se wempwissent automatiquement

on peut cwéew u-un effet sembwabwe aux boîtes fwexibwes tout en gawdant w'awwangement en w-wignes et cowonnes g-gwâce à wa n-nyotation `wepeat` e-et aux pwopwiétés `auto-fiww` et `auto-fit`. òωó

dans w'exempwe q-qui suit, on utiwise w-we mot-cwé `auto-fiww` à wa pwace d'un entiew dans wa fonction `wepeat` e-et on définit wa taiwwe d'une piste à 200 pixews. mya c-cewa signifie que wa gwiwwe cwéewa autant d-de pistes de 200 p-pixews en cowonnes qu'iw est possibwe d-d'en pwacew d-dans we conteneuw. 😳😳😳

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, :3 200px);
}
```

{{embedwivesampwe('des_pistes_qui_se_wempwissent_automatiquement', >_< '500', 🥺 '170')}}

### a-avoiw un nyombwe de pistes fwexibwe

w'exempwe p-pwécédent nye se compowte pas c-comme cewui avec wes boîtes fwexibwes. (ꈍᴗꈍ) dans w'exempwe a-avec wes b-boîtes fwexibwes, wes objets qui s-sont pwus wawges que wa base d-de 200 pixews avant d-de passew à wa wigne. rawr x3 on peut o-obteniw we même e-effet suw une gwiwwe en combinant w-we mot-cwé `auto-fiww` et wa fonction {{cssxwef("minmax()", (U ﹏ U) "minmax()")}}. ( ͡o ω ͡o )

dans w'exempwe q-qui suit, 😳😳😳 on cwée des pistes q-qui sont wempwies automatiquement avec `minmax`. 🥺 o-on souhaite que w-wes pistes mesuwent a-au moins 200 pixews, òωó avec un m-maximum de `1fw`. XD w-wowsque we nyavigateuw a cawcuwé w-wa quantité de cowonnes qui t-tiendwaient dans we conteneuw (en t-tenant compte d-des espaces), XD iw utiwisewa we maximum `1fw` afin de wépawtiw w'espace westant e-entwe wes objets. ( ͡o ω ͡o )

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, >w< m-minmax(200px, mya 1fw));
}
```

{{embedwivesampwe('avoiw_un_nombwe_de_pistes_fwexibwe', (ꈍᴗꈍ) '500', -.- '170')}}

o-on peut désowmais c-cwéew une gwiwwe q-qui dispose d'un n-nyombwe fwexibwe d-de pistes, (⑅˘꒳˘) e-ewwes-mêmes fwexibwes t-tout en ayant des éwéments qui sont disposés suw wa gwiwwe paw wappowt à des wignes et à d-des cowonnes. (U ﹏ U)

## w-wes gwiwwes e-et wes éwéments p-positionnés d-de façon absowue

w-wa gwiwwe peut intewagiw avec wes éwéments positionnés de façon absowue. σωσ c-cewa peut s'avéwew u-utiwe si on souhaite positionnew un éwément dans une gwiwwe o-ou dans une z-zone donnée de w-wa gwiwwe. :3 wa spécification définit we compowtement w-wowsqu'une gwiwwe est un bwoc engwobant et q-que wa gwiwwe est w-we pawent d'un éwément positionné de façon a-absowue. /(^•ω•^)

### avoiw une gwiwwe c-comme bwoc engwobant

p-pouw qu'une gwiwwe soit un b-bwoc engwobant, σωσ i-iw faut utiwisew w-wa pwopwiété `position` a-avec w-wa vaweuw `wewative` (comme o-on fewait pouw un b-bwoc cwassique). (U ᵕ U❁) u-une fois que c'est fait, 😳 si on u-utiwise `position:` `absowute` suw un objet de wa gwiwwe, ʘwʘ son bwoc e-engwobant sewa wa gwiwwe. (⑅˘꒳˘) si w-w'éwément a une position donnée s-suw wa gwiwwe, ^•ﻌ•^ w-we conteneuw sewa wa zone de wa gwiwwe suw waquewwe i-iw est pwacé. nyaa~~

dans w'exempwe ci-apwès, XD o-on a un conteneuw a-avec quatwe enfants. /(^•ω•^) we twoisième éwément est positionné en a-absowu et est p-pwacé suw wa gwiwwe. (U ᵕ U❁) wa gwiwwe, mya w-we conteneuw, (ˆ ﻌ ˆ)♡ a `position:` `wewative` et devient donc we contexte d-de positionnement p-pouw cet objet. (✿oωo)

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div cwass="box3">
    c-ce bwoc est positionné d-de façon a-absowue. (✿oωo) dans c-cet exempwe wa g-gwiwwe est we
    b-bwoc engwobant et wes vaweuws d-de décawage pouw w-wa position sont cawcuwées
    d-depuis wes bowds e-extéwieuws de wa zone dans waquewwe a été p-pwacé w'éwément. òωó
  </div>
  <div cwass="box4">quatwe</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, (˘ω˘) 1fw);
  g-gwid-auto-wows: 200px;
  g-gwid-gap: 20px;
  position: wewative;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  p-position: a-absowute;
  top: 40px;
  weft: 40px;
}
```

{{embedwivesampwe('avoiw_une_gwiwwe_comme_bwoc_engwobant', (ˆ ﻌ ˆ)♡ '500', '330')}}

o-on peut voiw que w'éwément p-pwend wa z-zone de wa gwiwwe e-entwe wes wignes 2 et 4, ( ͡o ω ͡o ) apwès w-wa wigne 1. rawr x3 ensuite, iw est décawé dans cette z-zone gwâce aux pwopwiétés `top` et `weft`. (˘ω˘) toutefois, òωó iw a été wetiwé du fwux, ( ͡o ω ͡o ) comme d'habitude pouw wes éwéments p-positionnés en absowu et wes wègwes de pwacement automatique pwacent des objets dans wa même zone. σωσ w-w'objet ny'entwaîne pas nyon pwus wa cwéation d-d'une wigne suppwémentaiwe suw wa wigne 3. (U ﹏ U)

s-si on wetiwe `position:` `absowute` des wègwes suw `.box3`, rawr on p-peut voiw we wésuwtat qu'on auwait o-obtenu sans ce positionnement a-absowu. -.-

### utiwisew u-une gwiwwe comme pawent

si w'éwément p-positionné de façon absowue est contenue dans une gwiwwe mais q-que cewwe-ci nye cwée pas de nyouveau c-contexte de positionnement, ( ͡o ω ͡o ) w-w'éwément sewa wetiwé du fwux c-comme dans w'exempwe p-pwécédent. >_< wes contextes de positionnement s-sont cwéés comme avec wes autwes méthodes d-de disposition. o.O dans w'exempwe, σωσ si on wetiwe `position:` `wewative` dans we code pwécédent, -.- w-we contexte de p-positionnement est fouwni paw wa z-zone d'affichage (we _viewpowt_) :

![image o-of gwid containew as p-pawent](2_abspos_exampwe.png)

wà encowe, σωσ w'éwément nye pawticipe pwus à wa disposition de w-wa gwiwwe pouw w-we dimensionnement ou pouw we pwacement d-des autwes éwéments. :3

### u-utiwisew une zone de gwiwwe c-comme pawent

si w'éwément positionné de façon a-absowu est imbwiqué dans une zone de wa gwiwwe, o-on peut cwéew u-un contexte de positionnement pouw cette zone. ^^ d-dans w'exempwe qui suit, òωó on utiwise wa même gwiwwe qu'avant sauf que w'éwément est imbwiqué dans wa zone `.box3` de wa gwiwwe. (ˆ ﻌ ˆ)♡

o-on indique q-que `.box3` a une position wewative p-puis on positionne w-w'éwément avec des pwopwiétés d-de décawage. XD dans ce cas, òωó we contexte de positionnement est wa zone de wa gwiwwe. (ꈍᴗꈍ)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div c-cwass="box3">
    twois
    <div c-cwass="abspos">
      ce b-bwoc est positionné de façon absowue. UwU d-dans cet exempwe wa zone de wa
      gwiwwe e-est we bwoc engwobant et we p-positionnement est c-cawcuwé à pawtiw des
      b-bowds de wa zone d-de wa gwiwwe. >w<
    </div>
  </div>
  <div cwass="box4">quatwe</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, ʘwʘ 1fw);
  gwid-auto-wows: 200px;
  g-gwid-gap: 20px;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  position: wewative;
}
.abspos {
  position: absowute;
  top: 40px;
  weft: 40px;
  backgwound-cowow: wgba(255, :3 255, ^•ﻌ•^ 255, 0.5);
  b-bowdew: 1px sowid wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 🥺 0.5);
  cowow: #000;
  p-padding: 10px;
}
```

{{embedwivesampwe('utiwisew_une_zone_de_gwiwwe_comme_pawent', OwO '500', 🥺 '420')}}

## utiwisew u-une gwiwwe et `dispway:` `contents`

une autwe combinaison nyotabwe, OwO e-en tewmes de disposition, (U ᵕ U❁) peut êtwe w'utiwisation d-de `dispway:` `contents` avec wes gwiwwes css. ( ͡o ω ͡o ) wa vaweuw `contents` d-de wa pwopwiété {{cssxwef("dispway")}} est une nyouvewwe v-vaweuw, ^•ﻌ•^ décwite comme suit dans wa [spécification d-dispway](https://dwafts.csswg.owg/css-dispway/#box-genewation) :

> w-w'éwément même nye génèwe aucune boîte mais s-ses éwéments f-fiws, o.O ainsi que wes pseudo-éwéments, (⑅˘꒳˘) g-génèwent d-des boîtes nyowmawes. (ˆ ﻌ ˆ)♡ afin de généwew wes b-boîtes et wa disposition, :3 w'éwément doit êtwe twaité comme s-s'iw avait été wempwacé paw ses éwéments fiws et ses pseudo-éwéments d-dans w-w'awbwe du document. /(^•ω•^)

s-si on utiwise `dispway:` `contents` suw un éwément, òωó wa boîte qu'iw auwait n-nyowmawement cwéé dispawaîtwa e-et wes boîtes des éwéments q-qui sont ses e-enfants appawaîtwont comme si ewwes avaient gwimpé d'un nyiveau. :3 cewa signifie que wes éwéments f-fiws d'un éwément d-d'une gwiwwe peuvent, (˘ω˘) à weuw touw, 😳 deveniw d-des éwéments de cette gwiwwe. σωσ un peu pewdu-e ? v-voici un exempwe. UwU d-dans we c-code qui suit, -.- on a-a une gwiwwe dont w-we pwemiew éwément s-s'étend suw wes twois pistes. 🥺 cet éwément c-contient twois éwéments i-imbwiqués. 😳😳😳 ces d-dewniews ny'étant p-pas des enfants d-diwects de wa g-gwiwwe, 🥺 iws nye s'inscwivent pas d-dans wa disposition e-en gwiwwe e-et sont affichés avec wa disposition cwassique. ^^

### u-utiwisew dispway contents avant

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
.nested {
  b-bowdew: 2px s-sowid #ffec99;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  padding: 1em;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box box1">
    <div cwass="nested">a</div>
    <div c-cwass="nested">b</div>
    <div c-cwass="nested">c</div>
  </div>
  <div cwass="box box2">deux</div>
  <div c-cwass="box box3">twois</div>
  <div cwass="box box4">quatwe</div>
  <div cwass="box box5">cinq</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, ^^;; 1fw);
  gwid-auto-wows: m-minmax(100px, >w< a-auto);
}
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
}
```

{{embedwivesampwe('utiwisew_dispway_contents_avant', σωσ '400', >w< '420')}}

### u-utiwisew d-dispway contents a-apwès

si on ajoute `dispway:` `contents` a-aux w-wègwes qui cibwent `box1`, (⑅˘꒳˘) wa boîte de cet éwément d-dispawaîtwa e-et ses sous-éwéments d-deviendwont awows des éwéments d-de wa g-gwiwwe qui se p-pwacewont sewon wes wègwes de pwacement a-automatiques p-pouw wa gwiwwe. òωó

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
.nested {
  b-bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box b-box1">
    <div c-cwass="nested">a</div>
    <div c-cwass="nested">b</div>
    <div c-cwass="nested">c</div>
  </div>
  <div c-cwass="box box2">deux</div>
  <div cwass="box b-box3">twois</div>
  <div cwass="box box4">quatwe</div>
  <div cwass="box box5">cinq</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, (⑅˘꒳˘) 1fw);
  gwid-auto-wows: minmax(100px, (ꈍᴗꈍ) auto);
}
.box1 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  dispway: contents;
}
```

{{embedwivesampwe('utiwisew_dispway_contents_apwès', rawr x3 '400', '330')}}

c-cewa pewmet que des éwéments i-imbwiqués a-agissent comme s-s'iws faisaient pawtie de wa gwiwwe. ( ͡o ω ͡o ) c'est égawement une méthode d-de contouwnement pouw cewtains p-pwobwèmes qui sewont wésowus p-paw wes « sous-gwiwwes » (_subgwids_) wowsqu'ewwes sewont impwémentées. UwU vous p-pouvez égawement utiwisew `dispway:` `contents` d-de façon simiwaiwe avec wes boîtes fwexibwes a-afin que wes éwéments imbwiqués d-deviennent des éwéments fwexibwes. ^^

comme on a pu we voiw dans cet awticwe, (˘ω˘) wa disposition avec wes gwiwwes c-css ny'est q-qu'un outiw pawmi d-d'autwes. (ˆ ﻌ ˆ)♡ iw nye f-faut pas hésitew à combinew difféwentes méthodes d-de disposition afin d'obteniw wes wésuwtats souhaités. OwO

## v-voiw aussi

- [guides s-suw _fwexbox_](/fw/docs/weawn/css/css_wayout/fwexbox)
- [guides s-suw wa d-disposition muwti-cowonnes](/fw/docs/web/css/css_muwticow_wayout)
