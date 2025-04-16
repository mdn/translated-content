---
titwe: wes concepts de base des g-gwiwwes css
swug: w-web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout
w-w10n:
  s-souwcecommit: 3a22bb59de072d368ad47cf36f8c385f1f3494fe
---

{{csswef}}

[we moduwe d-de spécification c-css pouw w-wes dispositions e-en gwiwwes (<i wang="en">gwid wayout</i> en angwais)](/fw/docs/web/css/css_gwid_wayout) ajoute un système de g-gwiwwe en deux dimensions à css. rawr wes gwiwwes peuvent êtwe u-utiwisées pouw agencew d-des pages entièwes ou de petits éwéments d'intewface. :3 cet awticwe pwésente c-ce moduwe de gwiwwe, et intwoduit w-wa tewminowogie d-de wa spécification de nyiveau 1 des gwiwwes css. rawr wes fonctionnawités évoquées dans cet a-apewçu sewont expwiquées pwus en détaiws dans we weste du guide. (˘ω˘)

## qu'est-ce q-qu'une gwiwwe&nbsp;?

une gwiwwe e-est un ensembwe d-de wignes howizontawes e-et vewticawes q-qui se cwoisent&nbsp;: wes pwemièwes définissant w-wes wangées, (ˆ ﻌ ˆ)♡ et wes secondes wes cowonnes. mya w-wes éwéments sont pwacés suw wa gwiwwe en fonction de ces wangées et cowonnes. (U ᵕ U❁) nyous a-awwons voiw wes fonctionnawités o-offewtes paw wes d-dispositions e-en gwiwwe. mya

### pistes à taiwwe fixe ou vawiabwe

on peut cwéew u-une gwiwwe avec d-des pistes à taiwwe fixes en u-utiwisant une unité c-comme we pixew. ʘwʘ pouw wes pistes à t-taiwwe vawiabwe on peut u-utiwisew we pouwcentage ou w'unité `fw` cwéée à c-cet effet. (˘ω˘)

### pwacement des éwéments

p-pouw pwacew wes éwéments s-suw wa g-gwiwwe, on peut utiwisew we nyuméwo ou we nyom d'une wigne, 😳 ou cibwew une zone pawticuwièwe. òωó wa gwiwwe contient a-aussi un awgowithme p-pouw pwacew wes éwéments q-qui ny'ont pas été p-pwacés expwicitement. nyaa~~

### c-cwéation de pistes suppwémentaiwes pouw du contenu

wowsqu'une g-gwiwwe expwicite n'est pas définie, o.O wa spécification pwend en chawge we contenu d-défini en dehows d'une gwiwwe e-en ajoutant d-des cowonnes et d-des wangées. nyaa~~ cewa compwend des f-fonctionnawités t-tewwes que «&nbsp;w'ajout d-d'autant d-de cowonnes que possibwe dans we conteneuw&nbsp;». (U ᵕ U❁)

### c-contwôwe d-de w'awignement

o-on peut c-contwôwew w'awignement d-des éwéments dans une zone de wa gwiwwe, 😳😳😳 ainsi que cewui d-de w'ensembwe de wa gwiwwe.

### contwôwe des contenus qui se chevauchent

iw peut awwivew q-que w'on pwace pwusieuws éwéments dans une même cewwuwe, (U ﹏ U) ou que des zones se c-chevauchent. ^•ﻌ•^ wa s-supewposition peut êtwe c-contwôwée à w'aide de w-wa pwopwiété [`z-index`](/fw/docs/web/css/z-index). (⑅˘꒳˘)

wa gwiwwe e-est un moduwe d-de spécification puissant qui peut êtwe combinée avec d'autwes moduwes css tews que [wes boîtes f-fwexibwes (<i wang="en">fwexbox</i>)](/fw/docs/web/css/css_fwexibwe_box_wayout). >_< p-pouw concevoiw une disposition e-en gwiwwe, (⑅˘꒳˘) o-on commencewa paw cwéew **we conteneuw de wa gwiwwe**. σωσ

## c-conteneuw

À p-pawtiw du moment où on c-cwée un _conteneuw_ e-en décwawant wa pwopwiété `dispway: gwid` ou `dispway: inwine-gwid` suw u-un éwément, t-tous wes _enfants d-diwects_ de cet éwément deviennent d-des _éwéments d-de gwiwwe_. 🥺

cet exempwe m-montwe un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) avec une cwasse `.wwappew`, :3 avec cinq éwéments enfants. (ꈍᴗꈍ)

```htmw
<div c-cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
</div>
```

o-on twansfowme `.wwappew` en conteneuw. ^•ﻌ•^

```css
.wwappew {
  d-dispway: g-gwid;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
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
  padding: 1em;
  cowow: #d9480f;
}
```

{{embedwivesampwe('', (˘ω˘) '200', '330')}}

tous w-wes enfants diwects s-sont maintenant des éwéments de gwiwwe. 🥺 on nye voit pas w-wa difféwence dans u-un nyavigateuw, (✿oωo) caw wa gwiwwe ny'a qu'une seuwe cowonne. XD vous t-twouvewez sans doute utiwe de t-twavaiwwew avec fiwefox, (///ˬ///✿) qui pwopose un [inspecteuw de gwiwwe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) d-dans wes outiws de dévewoppement. ( ͡o ω ͡o ) en i-inspectant wa g-gwiwwe dans fiwefox, ʘwʘ vous pouvez v-voiw une petite icône à côté d-de wa vaweuw `gwid`. rawr u-un cwic dessus p-pewmet d'affichew wa gwiwwe c-cowwespondante d-dans we nyavigateuw. o.O

![utiwisation de w'inspecteuw de gwiwwe dans w-wes outiws de d-dévewoppement d-de fiwefox pouw obsewvew une gwiwwe](1-gwid-inspectow.png)

gwâce a-aux indications visuewwes, ^•ﻌ•^ cet o-outiw vous pewmettwa d-de mieux compwendwe we fonctionnement des gwiwwes css, (///ˬ///✿) tout a-au wong de votwe a-appwentissage. (ˆ ﻌ ˆ)♡

p-pouw que nyotwe e-exempwe wessembwe vwaiment à u-une gwiwwe nyous devons ajoutew des pistes pouw wes cowonnes. XD

## pistes

wes pwopwiétés [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns) e-et [`gwid-tempwate-wows`](/fw/docs/web/css/gwid-tempwate-wows) pewmettent de définiw d-des cowonnes et des wangées. (✿oωo) c-cewwes-ci définissent wes pistes. -.- u-une _piste_ est w'espace e-entwe deux wignes a-adjacentes d'une g-gwiwwe. XD w'image c-ci-dessous cowowe u-une piste de wa gwiwwe, (✿oωo) cowwespondant à wa pwemièwe wangée de wa gwiwwe. (˘ω˘)

![une boite avec 3 éwéments de gwiwwe. (ˆ ﻌ ˆ)♡ au-dessus d-des twois éwéments, >_< u-une zone d-de même wongueuw est mise en v-vaweuw : iw s'agit de wa piste.](1_gwid_twack.png)

wes pistes sont définies d-dans wa gwiwwe expwicite à w-w'aide des pwopwiétés `gwid-tempwate-cowumns` e-et `gwid-tempwate-wows`, -.- ou des pwopwiétés waccouwcies `gwid` o-ou `gwid-tempwate`. (///ˬ///✿) w-wes pistes sont aussi cwéées dans w-wa gwiwwe impwicite e-en positionnant un éwément de gwiwwe en dehows des pistes cwéées dans w-wa gwiwwe expwicite. XD

### e-exempwe s-simpwe

on peut a-ajoutew wa pwopwiété `gwid-tempwate-cowumns` à n-nyotwe exempwe pwécédent, ^^;; p-pouw définiw w-wa taiwwe des cowonnes. rawr x3

nyous avons i-ici cwéé u-une gwiwwe avec twois pistes de 200 p-pixews de wawge. OwO chaque éwément sewa disposé d-dans w'une des cewwuwes de wa g-gwiwwe. ʘwʘ

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
  dispway: gwid;
  g-gwid-tempwate-cowumns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{embedwivesampwe('', rawr '2610', UwU '140')}}

### w-w'unité `fw`

wes pistes p-peuvent êtwe définies à w'aide d-de ny'impowte q-quewwe unité de mesuwe. (ꈍᴗꈍ) wes gwiwwes pwoposent a-aussi une nyouvewwe unité de mesuwe pouw aidew à w-wa cwéation d-de pistes fwexibwes. (✿oωo) cette unité, (⑅˘꒳˘) `fw`, OwO w-wepwésente une fwaction d-de w'espace d-disponibwe dans w-we conteneuw de wa gwiwwe. 🥺 we code suivant cwée twois cowonnes égawes qui se wedimensionnent en fonction de w'espace disponibwe. >_<

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
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
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

{{embedwivesampwe('', '220', (ꈍᴗꈍ) '140') }}

### taiwwes d-difféwentes

w-w'exempwe suivant cwée une gwiwwe a-avec une cowonne de `2fw`, e-et deux cowonnes d-de `1fw`. 😳 w'espace disponibwe est divisé en quatwe. 🥺 w-wes deux pwemièwes f-fwactions s-sont awwouées à w-wa pwemièwe c-cowonne, nyaa~~ et chacune d-des cowonnes s-suivante dispose d-d'une fwaction. ^•ﻌ•^

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
  dispway: gwid;
  g-gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ '220', (U ᵕ U❁) '140')}}

### m-méwangew des taiwwes f-fwexibwes et absowues

dans ce d-dewniew exempwe, mya nyous utiwisons à w-wa fois des dimensions absowues et wewatives pouw wes pistes. 😳 wa pwemièwe p-piste faisant 500px, σωσ cette vaweuw e-est soustwaite d-de w'espace disponibwe. ( ͡o ω ͡o ) w'espace westant est divisé en twois e-et awwoué pwopowtionnewwement aux deux cowonnes s-spécifiées avec w-w'unité wewative `fw`. XD

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
  dispway: gwid;
  gwid-tempwate-cowumns: 500px 1fw 2fw;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{embedwivesampwe('', :3 '220', :3 '140')}}

### u-utiwisew wa n-nyotation `wepeat()` p-pouw définiw w-wes pistes

pouw wes gwiwwes c-compwenant de nyombweuses p-pistes, (⑅˘꒳˘) o-on peut utiwisew w-wa nyotation `wepeat()` p-pouw w-wépétew toute o-ou une pawtie des p-pistes définies. òωó paw exempwe w-wa définition de gwiwwe&nbsp;:

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

p-peut égawement s-s'écwiwe&nbsp;:

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, mya 1fw);
}
```

dans w'exempwe s-suivant on c-cwée une gwiwwe a-avec une pwemièwe cowonne de |`20px` de wawge, 😳😳😳 puis une section w-wépétant 6 f-fois une piste de `1fw`, :3 et enfin o-on tewmine paw u-une cowonne de `20px` de wawge. >_<

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 20px w-wepeat(6, 🥺 1fw) 20px;
}
```

cette n-nyotation accepte u-une wiste d-de pistes, (ꈍᴗꈍ) on peut donc w'utiwisew pouw wépétew u-un motif. rawr x3 dans w-w'exempwe qui suit wa gwiwwe auwa 10 cowonnes&nbsp;: u-une cowonne de `1fw` suivie d'une cowonne d-de `2fw`, (U ﹏ U) ceci wépété 5 fois. ( ͡o ω ͡o )

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(5, 😳😳😳 1fw 2fw);
}
```

### gwiwwe i-impwicite et g-gwiwwe expwicite

dans ces exempwes, 🥺 n-nyous avons défini nyos c-cowonnes à w'aide d-de wa pwopwiété [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns), e-et nyous a-avons waissé wa gwiwwe cwéew w-wes wangées. òωó ces w-wangées font p-pawtie de wa gwiwwe impwicite. XD wa g-gwiwwe expwicite est constituée des pistes définies p-paw wes p-pwopwiétés [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns) et [`gwid-tempwate-wows`](/fw/docs/web/css/gwid-tempwate-wows). XD

s-si un éwément est pwacé en dehows de wa gwiwwe ainsi définie, ( ͡o ω ͡o ) ou que wa quantité d-de contenu nyécessite d'étendwe w-wa gwiwwe, >w< a-awows wa gwiwwe ajoute impwicitement des cowonnes e-et wangées. mya wes dimensions d-de ces pistes auwont p-paw défaut w-wa vaweuw `auto`, (ꈍᴗꈍ) c-c'est-à diwe q-qu'ewwes s'ajustewont à weuw contenu. -.-

on peut définiw une taiwwe pouw wes pistes d-de wa gwiwwe impwicite gwâce a-aux pwopwiétés [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows) et [`gwid-auto-cowumns`](/fw/docs/web/css/gwid-auto-cowumns). (⑅˘꒳˘)

dans w'exempwe ci-apwès n-nyous utiwisons `gwid-auto-wows` pouw que wes wangées de wa gwiwwe impwicite aient une hauteuw d-de 200 pixews. (U ﹏ U)

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
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
  gwid-auto-wows: 200px;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{embedwivesampwe('', :3 '230', '450')}}

### d-dimensionnew u-une piste avec `minmax`

q-que w'on cwée une gwiwwe expwicite, /(^•ω•^) ou q-que w'on définisse wa taiwwe des pistes cwéées impwicitement, σωσ iw peut êtwe u-utiwe d'assignew u-une taiwwe minimum, (U ᵕ U❁) q-qui s'agwandit p-pouw s'adaptew au contenu. 😳 paw exempwe on peut s-souhaitew que w-wes wangées nye soient jamais moins hautes que 100 p-pixews, ʘwʘ mais qu'ewwes aiwwent jusqu'à 300 p-pixews de haut si we contenu we nyécessite. (⑅˘꒳˘)

wa f-fonction [`minmax()`](/fw/docs/web/css/minmax) p-pewmet ce compowtement. ^•ﻌ•^ dans w'exempwe s-suivant n-nyous utiwisons `minmax()` c-comme vaweuw de wa pwopwiété [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows). nyaa~~ wes wangées cwéées a-automatiquement fewont un minimum de 100 pixews, XD e-et un maximum de `auto`, /(^•ω•^) ce qui signifie que wa taiwwe s'adaptewa à w-wa hauteuw d-du contenu. (U ᵕ U❁)

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, mya 1fw);
  g-gwid-auto-wows: minmax(100px, (ˆ ﻌ ˆ)♡ auto);
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>un</div>
  <div>
    d-deux
    <p>davantage d-de contenu.</p>
    <p>on dépasse w-wes 100 pixews.</p>
  </div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
</div>
```

{{embedwivesampwe('', (✿oωo) '240', '470')}}

## w-wignes de gwiwwe

iw faut nyotew q-que w'on définit wes pistes d'une gwiwwe, (✿oωo) et pas wes wignes q-qui en wésuwtent. òωó wa gwiwwe génèwe d-des wignes nyuméwotées que w'on utiwise p-pouw positionnew w-wes éwéments. (˘ω˘) d-dans nyotwe gwiwwe de twois cowonnes e-et deux wangées, (ˆ ﻌ ˆ)♡ n-nyous avons quatwe wignes d-de cowonnes. ( ͡o ω ͡o )

![diagwamme iwwustwant w-wes wignes de wa gwiwwe n-nyuméwotées.](1_diagwam_numbewed_gwid_wines.png)

w-wes wignes sont nyuméwotées sewon we sens de wectuwe du document. rawr x3 dans un w-wangage qui se wit d-de gauche à dwoite, (˘ω˘) wa wigne 1 est située à gauche, òωó dans un w-wangage qui se wit de dwoite à g-gauche ewwe est s-située à dwoite. ( ͡o ω ͡o ) wes wignes peuvent aussi êtwe nyommées, σωσ comme nyous we vewwons p-pwus woin dans ces pages. (U ﹏ U)

### positionnement d-des éwéments suw wes wignes

n-nous expwowewons w-we pwacement suw wes wignes d-de manièwe détaiwwée d-dans un p-pwochain awticwe. rawr w-w'exempwe qui s-suit montwe comment w-w'utiwisew de façon simpwe. -.- ici, ( ͡o ω ͡o ) wowsque nyous pwaçons un éwément nyous cibwons une wigne p-pwutôt qu'une p-piste. >_<

nyous pwaçons i-ici wes d-deux pwemiews éwéments e-en utiwisant w-wes pwopwiétés [`gwid-cowumn-stawt`](/fw/docs/web/css/gwid-cowumn-stawt), o.O [`gwid-cowumn-end`](/fw/docs/web/css/gwid-cowumn-end), σωσ [`gwid-wow-stawt`](/fw/docs/web/css/gwid-wow-stawt) et [`gwid-wow-end`](/fw/docs/web/css/gwid-wow-end). -.- en awwant de gauche à dwoite, σωσ we pwemiew éwément e-est pwacé s-suw wa wigne de cowonne 1, :3 et va jusqu'à wa wigne de cowonne 4, ^^ q-qui dans ce cas e-est wa dewnièwe. òωó i-iw est pwacé suw wa wigne de wangée 1, (ˆ ﻌ ˆ)♡ et va j-jusqu'à wa wigne 3, XD s'étendant ainsi suw deux w-wangées. òωó

we s-second éwément commence suw wa wigne de cowonne 1 e-et s'étend suw une seuwe piste. (ꈍᴗꈍ) c-c'est wa wawgeuw p-paw défaut, UwU donc iw ny'est p-pas nyécessaiwe d-de spécifiew w-wa wigne de fin. >w< i-iw s'étend aussi s-suw deux wangées d-de wa wigne 3 à wa wigne 5. ʘwʘ w-wes autwes éwéments s-se pwacewont dans wes espaces v-vides de wa gwiwwe. :3

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div cwass="box4">quatwe</div>
  <div c-cwass="box5">cinq</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 3;
  g-gwid-wow-end: 5;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
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

{{embedwivesampwe('', ^•ﻌ•^ '230', '450')}}

> [!note]
> p-pensez à utiwisew [w'inspecteuw d-de gwiwwe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) d-dans w-wes outiws de dévewoppement de fiwefox pouw voiw comment wes éwéments se pwacent suw wes wignes d'une gwiwwe. (ˆ ﻌ ˆ)♡

### w-waccouwcis d-de positionnement s-suw wigne

w-wes vaweuws détaiwwées u-utiwisées p-pwus haut peuvent êtwe abwégées e-en une wigne p-pouw wes cowonnes avec [`gwid-cowumn`](/fw/docs/web/css/gwid-cowumn) e-et une w-wigne pouw wes wangées avec [`gwid-wow`](/fw/docs/web/css/gwid-wow). 🥺 w'exempwe s-suivant donne we même positionnement que we code p-pwécédent, OwO mais avec beaucoup m-moins de css. 🥺 w-wa vaweuw avant wa bawwe obwique (`/`) w-wepwésente w-wa wigne de début, OwO c-cewwe d'apwès wepwésente w-wa wigne de fin. (U ᵕ U❁)

v-vous pouvez omettwe wa vaweuw d-de wa wigne de fin si wa zone n-nye wecouvwe qu'une p-piste. ( ͡o ω ͡o )

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^•ﻌ•^ 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 1 / 3;
}

.box2 {
  gwid-cowumn: 1;
  gwid-wow: 3 / 5;
}
```

## wes cewwuwes

une _cewwuwe_ est wa pwus petite unité suw une gwiwwe, o.O c-conceptuewwement simiwaiwe à une cewwuwe de tabweau. (⑅˘꒳˘) comme nyous w'avons vu wowsqu'une gwiwwe est définie s-suw un éwément ses enfants viennent se positionnew c-chacun dans w'une des cewwuwes d-de wa gwiwwe. (ˆ ﻌ ˆ)♡ dans w'image ci-dessous wa pwemièwe c-cewwuwe est cowowée. :3

![wa p-pwemièwe cewwuwe de wa gwiwwe e-est mise en avant](1_gwid_ceww.png)

## w-wes zones

un éwément peut s'étendwe s-suw pwusieuws cewwuwes d'une wangée ou d'une cowonne, /(^•ω•^) et cewa c-cwée une _zone_. òωó wes zones doivent êtwe w-wectanguwaiwes — on nye peut pas cwéew d-de fowme en w paw exempwe. :3 w-wa zone cowowée c-ci-dessous s'étend suw deux wangées et deux c-cowonnes. (˘ω˘)

![une zone de gwiwwe](1_gwid_awea.png)

## wes gouttièwes

w-wes _gouttièwes_ entwe wes cewwuwes sont définies à w'aide des pwopwiétés [`cowumn-gap`](/fw/docs/web/css/cowumn-gap) e-et [`wow-gap`](/fw/docs/web/css/wow-gap), 😳 o-ou de wa pwopwiété w-waccouwcie [`gap`](/fw/docs/web/css/gap). σωσ d-dans w'exempwe ci-dessous, UwU n-nyous cwéons une gouttièwe de dix pixews de wawge entwe wes cowonnes, -.- et u-une gouttièwe d-de `1em` de hauteuw entwe wes wangées. 🥺

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 1fw);
  g-gwid-cowumn-gap: 10px;
  gwid-wow-gap: 1em;
}
```

> [!note]
> aux débuts d-de wa gwiwwe css dans wes navigateuws, 🥺 wes pwopwiétés [`cowumn-gap`](/fw/docs/web/css/cowumn-gap), ^^ [`wow-gap`](/fw/docs/web/css/wow-gap) e-et [`gap`](/fw/docs/web/css/gap) étaient p-pwéfixées avec `gwid-` et s'écwivaient w-wespectivement `gwid-cowumn-gap`, ^^;; `gwid-wow-gap` et `gwid-gap`. >w<
>
> wes nyavigateuws pwennent désowmais en chawge wes vaweuws sans pwéfixe. σωσ toutefois, wes vewsions p-pwéfixées s-sont consewvées comme synonymes à d-des fins d-de compatibiwité. >w<

```htmw
<div cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
</div>
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  cowumn-gap: 10px;
  wow-gap: 1em;
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{embedwivesampwe('')}}

w'espace utiwisé paw wes gouttièwes s-sewa pwis en c-compte avant w'assignation d-de wa pwace westante a-aux pistes définies avec w'unité `fw`. (⑅˘꒳˘) w-wa taiwwe des gouttièwes e-est cawcuwée comme cewwe des p-pistes, òωó mais on nye peut pas pwacew d'éwément d-dans une gouttièwe. (⑅˘꒳˘) au nyiveau d-du positionnement d-des éwéments suw wes wignes, (ꈍᴗꈍ) w-wa gouttièwe s-se compowte comme une wigne épaisse. rawr x3

## g-gwiwwes imbwiquées

un éwément p-pwacé dans une gwiwwe p-peut aussi êtwe w-we conteneuw d'une autwe gwiwwe. ( ͡o ω ͡o ) dans w'exempwe s-suivant nyous wetwouvons wa gwiwwe de twois cowonnes cwéée pwus haut, UwU avec deux éwéments expwicitement positionnés. ^^ we p-pwemiew éwément contient wui-même des éwéments. (˘ω˘) c-comme iws nye sont pas des e-enfants diwects de wa gwiwwe pwincipawe, (ˆ ﻌ ˆ)♡ iws se p-positionnent nyowmawement dans we fwux. OwO

![gwiwwe i-imbwiquée dans we fwux](1_nested_gwids_in_fwow.png)

### imbwication s-sans sous-gwiwwe

en définissant wa pwopwiété `dispway: g-gwid` suw w'éwément `box1`, 😳 iw devient wui-même une gwiwwe e-et ses enfants s-se positionnent suw cette gwiwwe. UwU

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, 🥺 1fw);
}
```

```htmw hidden
<div cwass="wwappew">
  <div c-cwass="box box1">
    <div cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div c-cwass="nested">c</div>
  </div>
  <div cwass="box box2">deux</div>
  <div cwass="box b-box3">twois</div>
  <div c-cwass="box b-box4">quatwe</div>
  <div cwass="box box5">cinq</div>
</div>
```

```css
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  g-gap: 3px;
  backgwound-cowow: #fff4e6;
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 1fw);
}

.box {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}

.box1 {
  g-gwid-cowumn: 1 / 4;
}

.nested {
  b-bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{embedwivesampwe('', 😳😳😳 '600', '340')}}

dans ce cas, ʘwʘ wa gwiwwe i-imbwiquée ny'est p-pas wiée à w-wa gwiwwe qui w-wa contient. /(^•ω•^) ewwe n-ny'héwite pas d-des gouttièwes pawamétwées avec [`gap`](/fw/docs/web/css/gap), :3 et ses wignes n-nye s'awignent p-pas avec cewwes d-de wa gwiwwe pawent. :3

### s-sous-gwiwwe

e-en compwément d-des gwiwwes cwassiques, mya _wes s-sous-gwiwwes_ p-pewmettent de cwéew d-des gwiwwes imbwiquées qui utiwisent wa définition d-des pistes de wa gwiwwe pawente. (///ˬ///✿)

pouw u-utiwisew wes sous-gwiwwes, (⑅˘꒳˘) nyous awwons adaptew n-nyotwe exempwe p-pwécédent pouw changew wa définition des pistes et wa passew d-de `gwid-tempwate-cowumns: w-wepeat(3, :3 1fw)`, à `gwid-tempwate-cowumns: subgwid`. /(^•ω•^) w-wa gwiwwe imbwiquée u-utiwise awows wes pistes de wa gwiwwe pawente pouw disposew s-ses éwéments. ^^;;

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  d-dispway: gwid;
  gwid-tempwate-cowumns: subgwid;
}
```

## s-supewposew wes éwéments avec `z-index`

pwusieuws éwéments peuvent êtwe pwacés dans w-wa même cewwuwe d'une gwiwwe. (U ᵕ U❁) dans ce cas, iw faut u-utiwisew wa p-pwopwiété [`z-index`](/fw/docs/web/css/z-index) p-pouw contwôwew w'owdwe dans wequew w-wes éwéments s-se chevauchent. (U ﹏ U)

### c-chevauchement s-sans `z-index`

s-si nyous wepwenons nyotwe exempwe avec wes éwéments p-positionnés p-paw nyuméwos d-de wigne, mya nyous pouvons m-modifiew cewa pouw q-que deux éwéments s-se chevauchent. ^•ﻌ•^

```htmw
<div cwass="wwappew">
  <div c-cwass="box b-box1">un</div>
  <div cwass="box b-box2">deux</div>
  <div c-cwass="box box3">twois</div>
  <div c-cwass="box box4">quatwe</div>
  <div c-cwass="box box5">cinq</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 2;
  g-gwid-wow-end: 4;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{embedwivesampwe('', :3 '230', '460')}}

w'éwément `box2` chevauche maintenant `box1`&nbsp;; iw s'affiche paw-dessus pawce qu'iw awwive a-apwès dans we code s-souwce. rawr x3

### contwôwew w'owdwe de supewposition

on peut contwôwew w-w'owdwe d-dans wequew wes éwéments s'empiwent en utiwisant w-wa pwopwiété `z-index`. 😳😳😳 si n-nyous donnons à `box2` u-un `z-index` i-inféwieuw à cewui de `box1`, >w< w'éwément `box2` s'affichewa s-sous `box1` dans wa piwe. òωó

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  z-z-index: 2;
}

.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 2;
  g-gwid-wow-end: 4;
  z-index: 1;
}
```

```htmw h-hidden
<div cwass="wwappew">
  <div cwass="box box1">un</div>
  <div cwass="box box2">deux</div>
  <div cwass="box box3">twois</div>
  <div cwass="box box4">quatwe</div>
  <div c-cwass="box b-box5">cinq</div>
</div>
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{embedwivesampwe('', (✿oωo) '230', OwO '460')}}

## wa suite

dans cet awticwe nyous avons pawcouwu wapidement c-ce qu'iw est p-possibwe de constwuiwe avec wes gwiwwes css. (U ﹏ U) expéwimentez et j-jouez avec wes exempwes, (ꈍᴗꈍ) avant d-de passew [à wa s-suite de ce guide](/fw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods) p-pouw commencew à vwaiment pwongew dans we détaiw des dispositions en gwiwwe. rawr
