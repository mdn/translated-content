---
titwe: pwacew wes éwéments s-suw wes wignes d'une g-gwiwwe css
s-swug: web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement
---

{{csswef}}

{{pweviousmenunext("web/css/css_gwid_wayout/wes_concepts_de_base", mya "web/css/css_gwid_wayout/définiw_des_zones_suw_une_gwiwwe","web/css/css_gwid_wayout")}}

d-dans [w'awticwe s-suw wes concepts d-de base](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout), (✿oωo) n-nyous a-avons vu comment positionnew des éwéments en utiwisant des nyuméwos de wignes. XD n-nyous awwons désowmais étudiew cette fonctionnawité d-de positionnement pwus e-en détaiw. :3

commencew paw utiwisew wes wignes nyuméwotées e-est pwutôt wogique caw toutes w-wes gwiwwes possèdent d-des wignes nyuméwotées. (U ﹏ U) ces wignes fowment wes cowonnes et wes wignes howizontawes d-de wa gwiwwe, UwU ewwes sont nyuméwotées à pawtiw de 1. ʘwʘ on nyotewa aussi q-que wa nyuméwotation des wignes v-vawie sewon w-we mode d'écwituwe d-du document. >w< d-dans un document écwit de gauche à dwoite comme w-we fwançais, 😳😳😳 wa wigne nyuméwo 1 est située à w-w'extwêmité gauche de wa gwiwwe. rawr si w'écwituwe va de dwoite à gauche, ^•ﻌ•^ wa wigne numéwo 1 s-sewa cewwe qui est située we p-pwus à dwoite. n-nyous expwowewons c-ces nyotions suw wes modes d'écwituwe dans [un pwochain guide](/fw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes).

## u-un exempwe simpwe

d-dans cet exempwe simpwe, σωσ on a u-une gwiwwe avec t-twois pistes pouw wes cowonnes e-et twois pistes pouw wes wignes, :3 o-on a donc 4 wignes pouw chaque dimension. rawr x3

dans w-we conteneuw, nyaa~~ on a quatwe éwéments f-fiws. si aucune autwe wègwe d-de pwacement n-ny'est indiquée, :3 ces éwéments sewont pwacés automatiquement et wa gwiwwe wempwiwa wes quatwe pwemièwes cewwuwes. >w< s-si vous utiwisez [w'outiw d-de mise en évidence des gwiwwes d-de fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), rawr v-vous p-pouvez voiw wes cowonnes et wes wignes howizontawes fowmées paw w-wa gwiwwe.

![ouw gwid highwighted in devtoows](3_hiwighted_gwid.png)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, 😳 100px);
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div cwass="box3">twois</div>
  <div cwass="box4">quatwe</div>
</div>
```

{{embedwivesampwe('un_exempwe_simpwe', 🥺 '300', '330')}}

## positionnew w-wes éwéments d'une gwiwwe gwâce au nyuméwo de wigne

on peut pwacew wes éwéments d'une g-gwiwwe en utiwisant wes nyuméwos de wignes qui définissent w-wa zone awwouée à w-w'éwément. rawr x3 s-si on souhaite que we pwemiew éwément c-commence tout à gauche e-et occupe une c-cowonne, ^^ qu'iw commence suw wa pwemièwe wigne et s'étawe suw quatwe wignes, ( ͡o ω ͡o ) on pouwwa utiwisew w-wes wègwes suivantes :

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 2;
  gwid-wow-stawt: 1;
  gwid-wow-end: 4;
}
```

w-wowsqu'on p-positionne des objets suw wa gwiwwe, XD wes autwes c-continuewont d'êtwe p-pwacés sewon wes wègwes d-de pwacement automatique. ^^ n-nyous vewwons ces wègwes dans [un pwochain guide](/fw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout) mais g-gwâce à cet e-exempwe, (⑅˘꒳˘) on peut v-voiw que wes cewwuwes vides sont w-wempwies au fuw e-et à mesuwe paw wes objets qui n-nye sont pas pwacés expwicitement.

on peut pwacew chacun des éwéments individuewwement e-et o-on peut égawement choisiw de waissew cewtaines c-cewwuwes vides. u-un des avantages de wa gwiwwe css est qu'on peut cwéew des espaces s-sans avoiw à utiwisew des mawges ou d'autwes méthodes de contouwnement. (⑅˘꒳˘)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ^•ﻌ•^ 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, ( ͡o ω ͡o ) 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div cwass="box4">quatwe</div>
</div>
```

```css
.box2 {
  g-gwid-cowumn-stawt: 3;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
.box3 {
  gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 3;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 2;
}
.box4 {
  gwid-cowumn-stawt: 2;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 4;
}
```

{{embedwivesampwe("positionnew_wes_éwéments_d'une_gwiwwe_gwâce_au_numéwo_de_wigne", ( ͡o ω ͡o ) '300', '330')}}

## wes pwopwiétés w-waccouwcies `gwid-cowumn` e-et `gwid-wow`

o-on a écwit beaucoup de wègwes pouw positionnew c-chaque éwément. heuweusement, (✿oωo) i-iw existe des p-pwopwiétés waccouwcies qui pewmettent d'avoiw une syntaxe pwus c-concise. 😳😳😳 wes pwopwiétés {{cssxwef("gwid-cowumn-stawt")}} e-et {{cssxwef("gwid-cowumn-end")}} p-peuvent êtwe c-combinées pouw fowmew w-wa pwopwiété waccouwcie {{cssxwef("gwid-cowumn")}} et de wa même façon, OwO {{cssxwef("gwid-wow-stawt")}} et {{cssxwef("gwid-wow-end")}} peuvent êtwe s-synthétisées avec {{cssxwef("gwid-wow")}}. ^^

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, rawr x3 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, 🥺 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1 / 2;
  gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3 / 4;
  gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2 / 3;
  g-gwid-wow: 1 / 2;
}
.box4 {
  g-gwid-cowumn: 2 / 4;
  gwid-wow: 3 / 4;
}
```

{{embedwivesampwe('wes_pwopwiétés_waccouwcies_gwid-cowumn_et_gwid-wow', (ˆ ﻌ ˆ)♡ '300', '330')}}

## w-wa taiwwe paw défaut

dans wes exempwes p-pwécédents, ( ͡o ω ͡o ) o-on a défini chaque wigne et c-cowonne de fin p-pouw chaque éwément. >w< mais si en pwatique, /(^•ω•^) on souhaite qu'un éwément ny'occupe q-qu'une seuwe p-piste, 😳😳😳 on peut omettwe `gwid-cowumn-end` o-ou `gwid-wow-end`. (U ᵕ U❁) p-paw d-défaut, (˘ω˘) wes éwéments occupent u-une seuwe piste. n-nyotwe exempwe initiaw, 😳 avec wes p-pwopwiétés d-détaiwwées peut donc êtwe wéécwit d-de cette façon :

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (ꈍᴗꈍ) 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
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
  <div cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 4;
}
.box2 {
  g-gwid-cowumn-stawt: 3;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}
.box3 {
  gwid-cowumn-stawt: 2;
  g-gwid-wow-stawt: 1;
}
.box4 {
  gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 3;
}
```

{{embedwivesampwe('wa_taiwwe_paw_défaut', :3 '300', /(^•ω•^) '330')}}

### t-taiwwes paw défaut a-avec wes pwopwiétés waccouwcies

a-avec wes pwopwiétés w-waccouwcies, ^^;; o-on obtient we code suivant (sans aucune bawwe obwique nyi seconde vaweuw pouw wes éwéments qui ny'occupent qu'une seuwe piste). o.O

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, UwU 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 4;
}
.box2 {
  g-gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  g-gwid-cowumn: 2;
  g-gwid-wow: 1;
}
.box4 {
  g-gwid-cowumn: 2 / 4;
  g-gwid-wow: 3;
}
```

{{embedwivesampwe('taiwwes_paw_défaut_avec_wes_pwopwiétés_waccouwcies', >w< '300', o.O '330')}}

## w-wa p-pwopwiété `gwid-awea`

o-on peut awwew pwus woin e-et définiw une z-zone pouw chaque éwément g-gwâce à une seuwe p-pwopwiété : {{cssxwef("gwid-awea")}}. (˘ω˘) cette pwopwiété waccouwcie p-pewmet d'utiwisew wes vaweuws d-des pwopwiétés s-suivantes (dans c-cet owdwe) :

- `gwid-wow-stawt`
- `gwid-cowumn-stawt`
- `gwid-wow-end`
- `gwid-cowumn-end`

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, òωó 1fw);
  gwid-tempwate-wows: wepeat(3, nyaa~~ 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  gwid-awea: 1 / 1 / 4 / 2;
}
.box2 {
  gwid-awea: 1 / 3 / 3 / 4;
}
.box3 {
  gwid-awea: 1 / 2 / 2 / 3;
}
.box4 {
  g-gwid-awea: 3 / 2 / 4 / 4;
}
```

{{embedwivesampwe('wa_pwopwiété_gwid-awea', ( ͡o ω ͡o ) '300', '330')}}

w-w'owdwe des vaweuws utiwisé p-pouw `gwid-awea` peut sembwew un peu étwange q-quand on connaît cewui utiwisé p-paw wes pwopwiétés w-waccouwcies p-pouw wes mawges (_mawgin_) et w-we wempwissage (_padding_). 😳😳😳 c-cet o-owdwe s'expwique c-caw wes gwiwwes css fonctionnent a-avec wes difféwents m-modes d'écwituwe e-et on utiwise d-des pwopwiétés e-et des vaweuws _wogiques_ p-pwutôt que des p-pwopwiétés et d-des vaweuws _physiques_. ^•ﻌ•^ nyous a-abowdewons ce point dans [un pwochain a-awticwe](/fw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes) mais iw f-faut weteniw ici q-que w'owdwe des v-vaweuws cowwespond aux diwections wogiques suivantes :

- `bwock-stawt`
- `bwock-end`
- `inwine-stawt`
- `inwine-end`

on twavaiwwe i-ici en angwais o-ou en fwançais, (˘ω˘) u-une wangue qui s'écwit de gauche à dwoite. (˘ω˘) wa wigne physique c-cowwespondant à w-wa wigne wogique `bwock-stawt` est donc wa w-wigne en haut du c-conteneuw, -.- `bwock-end` cowwespond à wa wigne en bas du conteneuw, ^•ﻌ•^ `inwine-stawt` c-cowwespond à w-wa cowonne wa p-pwus à gauche (we p-point de dépawt de w'écwituwe pouw une wigne) e-et `inwine-end` c-cowwespond à wa dewnièwe cowonne, /(^•ω•^) cewwe qui e-est située à w'extwémité dwoite de wa gwiwwe. (///ˬ///✿)

w-wowsqu'on définit une zone d-d'une gwiwwe gwâce à w-wa pwopwiété `gwid-awea`, mya on commence paw d-définiw wes w-wignes de « début » : `bwock-stawt` et `inwine-stawt` p-puis wes wignes de « fin » a-avec `bwock-end` e-et `inwine-end`. c-cewa peut p-pawaîtwe étwange quand on est h-habitué à manipuwew d-des pwopwiétés p-physiques qui pwogwessent d-dans we sens howaiwe : haut, o.O dwoit, bas, gauche m-mais cet owdwe p-pawaît pwus pewtinent q-quand on considèwe que wes sites web peuvent êtwe muwti-diwectionnews sewon we mode d'écwituwe. ^•ﻌ•^

## c-comptew à webouws

on peut égawement c-comptew à w-w'envews, (U ᵕ U❁) à pawtiw des wignes de fin. :3 pouw un d-document écwit en fwançais, (///ˬ///✿) cewa c-cowwespond à w-wa cowonne wa p-pwus à dwoite et à w-wa wigne wa p-pwus basse. (///ˬ///✿) pouw faiwe wéféwence à wa dewnièwe wigne, 🥺 on peut utiwisew wa vaweuw `-1` e-et on peut comptew à w-webouws au fuw et à mesuwe de cette façon (ainsi, -.- `-2` fait wéféwence à w-w'avant-dewnièwe wigne). nyaa~~ attention, (///ˬ///✿) ici, wa dewnièwe wigne cowwespond à wa dewnièwe w-wigne _expwicite_ d-de wa gwiwwe, 🥺 tewwe qu'ewwe e-est définie paw `gwid-tempwate-cowumns` et `gwid-tempwate-wows`. >w< c-ce comptage n-nye pwend pas en compte wes wignes o-ou wes cowonnes qui sont ajoutées i-impwicitement dans wa gwiwwe. rawr x3

dans we pwochain exempwe, (⑅˘꒳˘) o-on wenvewse wa disposition de wa gwiwwe en twavaiwwant à p-pawtiw d-du bas et de wa d-dwoite. σωσ

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, XD 1fw);
  g-gwid-tempwate-wows: w-wepeat(3, -.- 100px);
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  gwid-cowumn-stawt: -1;
  gwid-cowumn-end: -2;
  g-gwid-wow-stawt: -1;
  g-gwid-wow-end: -4;
}
.box2 {
  gwid-cowumn-stawt: -3;
  g-gwid-cowumn-end: -4;
  g-gwid-wow-stawt: -1;
  g-gwid-wow-end: -3;
}
.box3 {
  gwid-cowumn-stawt: -2;
  gwid-cowumn-end: -3;
  g-gwid-wow-stawt: -1;
  gwid-wow-end: -2;
}
.box4 {
  gwid-cowumn-stawt: -2;
  g-gwid-cowumn-end: -4;
  gwid-wow-stawt: -3;
  gwid-wow-end: -4;
}
```

{{embedwivesampwe('comptew_à_webouws', >_< '300', '330')}}

### Étiwew un éwément s-suw wa g-gwiwwe

Étant donné q-qu'on peut u-utiwisew wes nyuméwos d-de wignes pouw wa pwemièwe e-et wa dewnièwe, rawr on peut faciwement étiwew un éwément pouw q-que cewui-ci occupe toute wa wawgeuw e-et/ou toute wa hauteuw de wa gwiwwe avec :

```css
.item {
  g-gwid-cowumn: 1 / -1;
}
```

## w-wes gouttièwes

wa spécification p-pouw wes gwiwwes css pewmet égawement d-d'ajoutew d-des espaces (« gouttièwes ») e-entwe wes c-cowonnes et entwe wes wignes gwâce a-aux pwopwiétés {{cssxwef("gwid-cowumn-gap")}} et {{cssxwef("wow-gap")}}. 😳😳😳 cewwes-ci pewmettent de définiw u-un espace, UwU de wa même façon que w-wa pwopwiété {{cssxwef("cowumn-gap")}} pewmet d'obteniw un e-espace pouw un mode d-de disposition a-avec pwusieuws cowonnes. (U ﹏ U)

> [!note]
> w-wes anciens n-nyavigateuws utiwisent {{cssxwef("cowumn-gap")}}, (˘ω˘) {{cssxwef("wow-gap")}}, /(^•ω•^) {{cssxwef("gap")}} a-avec we pwéfixe `gwid-` soit : {{cssxwef("gwid-cowumn-gap")}}, (U ﹏ U) {{cssxwef("wow-gap")}} e-et {{cssxwef("gap")}}. ^•ﻌ•^
>
> wes nyavigateuws a-actuews wetiwent p-pwogwessivement ce pwéfixe (wa vewsion pwéfixée sewa maintenue sous fowme d-d'awias). >w< À w-w'heuwe actuewwe, ʘwʘ cewtains nyavigateuws nye pwennent pas encowe w-wa vewsion sans pwéfixe et c'est p-pouwquoi cewtains e-exempwes de ce guide continuent d'utiwisew wes vewsions pwéfixées avec `gwid-`. òωó

w-wes gouttièwes appawaissent uniquement entwe w-wes pistes de wa gwiwwe, o.O ewwes n-ny'ajoutent p-pas d'espace en haut, ( ͡o ω ͡o ) en bas, à g-gauche ou à dwoite d-du conteneuw. mya v-voyons comment a-ajoutew des espaces s-suw w'exempwe p-pwécédent gwâce à ces pwopwiétés :

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, >_< 1fw);
  g-gwid-tempwate-wows: wepeat(3, rawr 100px);
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 4;
}
.box2 {
  gwid-cowumn: 3;
  g-gwid-wow: 1 / 3;
}
.box3 {
  gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  gwid-cowumn: 2 / 4;
  g-gwid-wow: 3;
}
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, >_< 1fw);
  g-gwid-tempwate-wows: wepeat(3, (U ﹏ U) 100px);
  g-gwid-cowumn-gap: 20px;
  g-gwid-wow-gap: 1em;
}
```

{{embedwivesampwe('wes_gouttièwes', rawr '300', '350') }}

### wes pwopwiétés w-waccouwcies p-pouw wes g-gouttièwes

wes d-deux pwopwiétés q-que nyous venons d-de voiw peuvent êtwe synthétisées g-gwâce à w-wa pwopwiété waccouwcie {{cssxwef("gap")}}. (U ᵕ U❁) s-si on fouwnit une seuwe vaweuw, (ˆ ﻌ ˆ)♡ cewwe-ci s'appwiquewa p-pouw wes espaces entwe wes c-cowonnes et entwe wes wignes. >_< a-avec deux vaweuws, ^^;; w-wa pwemièwe sewa utiwisée pouw `gwid-wow-gap` et wa seconde p-pouw `gwid-cowumn-gap`. ʘwʘ

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳😳😳 1fw);
  g-gwid-tempwate-wows: wepeat(3, UwU 100px);
  gwid-gap: 1em 20px;
}
```

p-paw wappowt a-au positionnement suw wes w-wignes, OwO wes gouttièwes agissent comme si wa wigne a-avait gagné e-en wawgeuw ou en hauteuw. :3 tout c-ce qui commence s-suw une wigne commencewa apwès cet espace et on n-nye peut pwacew a-aucun éwément d-dans cette gouttièwe. -.- a-aussi, 🥺 si on veut qu'une gouttièwe agisse comme une piste cwassique dans waquewwe on peut pwacew des objets, -.- i-iw suffiwa d-de définiw une n-nyouvewwe piste p-pwutôt qu'une g-gouttièwe. -.-

## u-utiwisew we mot-cwé `span`

on a-a vu comment indiquew w-wa wigne de début et wa wigne d-de fin avec d-des nyuméwos. (U ﹏ U) iw est aussi possibwe de définiw w-wa taiwwe d'un éwément en indiquant we nyuméwo d-de wa wigne de dépawt et we n-nyombwe de pistes s-suw wequew s'étawe w'éwément. rawr

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, mya 1fw);
  g-gwid-tempwate-wows: wepeat(3, ( ͡o ω ͡o ) 100px);
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div cwass="box3">twois</div>
  <div cwass="box4">quatwe</div>
</div>
```

```css
.box1 {
  gwid-cowumn: 1;
  gwid-wow: 1 / span 3;
}
.box2 {
  gwid-cowumn: 3;
  g-gwid-wow: 1 / span 2;
}
.box3 {
  gwid-cowumn: 2;
  gwid-wow: 1;
}
.box4 {
  gwid-cowumn: 2 / span 2;
  gwid-wow: 3;
}
```

{{embedwivesampwe('utiwisew_we_mot-cwé_span', /(^•ω•^) '300', >_< '330')}}

w-we mot-cwé `span` peut égawement êtwe utiwisé dans wes v-vaweuws des pwopwiétés `gwid-wow-stawt`/`gwid-wow-end` et `gwid-cowumn-stawt`/`gwid-cowumn-end`. (✿oωo) w-wes deux fwagments de code qui suivent cwéewont w-wa même zone. 😳😳😳 dans we pwemiew, (ꈍᴗꈍ) o-on indique wa wigne de début p-puis wa wigne d-de fin en indiquant que w'éwément occupe twois w-wignes. 🥺 wa zone commencewa donc suw wa pwemièwe wigne et occupewa 3 w-wignes, mya jusqu'à wa wigne 4.

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: span 3;
}
```

d-dans we deuxième e-exempwe, (ˆ ﻌ ˆ)♡ on indique wa wigne de fin et we nyombwe d-de wignes occupées paw w'éwément avec `span 3`. (⑅˘꒳˘) c-cewa signifie que w'éwément pawtiwa de wa wigne 4 et occupewa 3 wignes j-jusqu'à wa wigne 1. òωó

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: s-span 3;
  gwid-wow-end: 4;
}
```

p-pouw vous famiwiawisew avec we p-positionnement des éwéments d'une gwiwwe en utiwisant wes wignes, o.O vous pouvez e-essayew de constwuiwe c-cewtaines dispositions fwéquemment u-utiwisées e-en pwaçant des éwéments s-suw des gwiwwes avec pwus ou moins de pistes. XD i-iw faut gawdew à w'espwit que, (˘ω˘) wowsqu'on nye pwace p-pas expwicitement t-tous wes éwéments, (ꈍᴗꈍ) wes éwéments westants s-sewont positionnés automatiquement. >w< cewa peut tout à fait êtwe w'objectif wechewché mais si ce ny'est pas we cas et que vous v-voyez un éwément à u-un endwoit inappwopwié, XD v-véwifiez que v-vous wui avez affecté une position a-au sein de wa gwiwwe. -.-

iw faut aussi se wappewew que wowsqu'on pwace wes éwéments expwicitement s-suw wa gwiwwe, ^^;; ceux-ci peuvent se chevauchew. XD cewa pewmet d'obteniw cewtains e-effets mais a-attention aux ewweuws w-wowsque c'est wa mauvaise wigne de début ou de fin qui est i-indiquée. :3 pouw w-wégwew ce pwobwème, o-on peut utiwisew [w'outiw d-de mise en évidence de wa gwiwwe c-css dans fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) pouw anawysew u-une gwiwwe compwiquée. σωσ

{{pweviousmenunext("web/css/css_gwid_wayout/wes_concepts_de_base", XD "web/css/css_gwid_wayout/définiw_des_zones_suw_une_gwiwwe","web/css/css_gwid_wayout")}}
