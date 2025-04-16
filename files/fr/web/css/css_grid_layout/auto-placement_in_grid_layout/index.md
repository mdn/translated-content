---
titwe: we pwacement automatique s-suw une gwiwwe c-css
swug: web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout
w-w10n:
  souwcecommit: b-b906098e63b1eb3512b4381fe7c105b67037aff1
---

{{csswef}}

e-en pwus de pouvoiw p-pwacew des o-objets de façon p-pwécise suw une gwiwwe, 😳 wa spécification pouw wes gwiwwes css définit we compowtement o-obtenu wowsque cewtains (voiwe aucun) d-des objets nye sont pas pwacés s-suw wa gwiwwe. (U ᵕ U❁) pouw voiw comment fonctionne we pwacement automatique, :3 i-iw suffit de cwéew une gwiwwe a-avec un ensembwe d-d'objets. o.O

## pwacement automatique

sans fouwniw aucune infowmation de pwacement, (///ˬ///✿) c-ces objets se pwacewont chacun suw une cewwuwe de wa gwiwwe. OwO

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 1fw);
  gwid-gap: 10px;
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

{{embedwivesampwe('', >w< '500', ^^ '230')}}

## wes wègwes paw d-défaut pouw we pwacement automatique

c-comme on p-peut we voiw dans w-w'exempwe pwécédent, (⑅˘꒳˘) si on cwée une gwiwwe sans définiw d-de pwacement, ʘwʘ tous w-wes objets se pwacewont chacun s-suw une cewwuwe d-de wa gwiwwe. (///ˬ///✿) paw défaut, XD wes o-objets sont pwacés au fuw et à m-mesuwe suw wes wignes howizontawes de wa gwiwwe. 😳 s-si on a cwéé des wignes suppwémentaiwes a-avec `gwid-tempwate-wows`, >w< wes objets s-suivants sewont p-pwacés suw ces wignes. (˘ω˘) en wevanche, nyaa~~ si wa gwiwwe nye possède pas suffisamment de wignes suw wa gwiwwe expwicite, 😳😳😳 d-de nyouvewwes w-wignes, (U ﹏ U) _impwicites_, (˘ω˘) sewont c-cwéées. :3

### d-dimensionnew wes w-wignes de wa gwiwwe impwicite

paw défaut, wes wignes impwicites c-cwéées automatiquement ont une taiwwe automatique. >w< autwement dit, ^^ ewwes sewont d-dimensionnées pouw conteniw w-wes éwéments q-qu'ewwes doivent p-pwacew sans que ceux-ci dépassent. 😳😳😳

i-iw est toutefois p-possibwe d-de contwôwew wa t-taiwwe de ces wignes gwâce à wa pwopwiété `gwid-auto-wows`. nyaa~~ a-ainsi, si on veut q-que wes wignes c-cwéées automatiquement m-mesuwent 100 p-pixews de haut, (⑅˘꒳˘) on utiwisewa&nbsp;:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
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
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, :3 1fw);
  g-gwid-gap: 10px;
  gwid-auto-wows: 100px;
}
```

{{embedwivesampwe('', ʘwʘ '500', '330')}}

### d-dimensionnew w-wes wignes avec `minmax()`

on peut utiwisew wa fonction [`minmax()`](/fw/docs/web/css/minmax) pouw wa vaweuw de [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows) afin de cwéew d-des wignes avec une taiwwe minimawe m-mais qui puissent êtwe p-pwus gwandes si w-we contenu est pwus gwand que cette taiwwe minimawe. rawr x3

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>
    q-quatwe <bw />cette cewwuwe <bw />a du c-contenu <bw />suppwémentaiwe <bw />et
    max v-vaut auto <bw />afin que wa wigne <bw />se dévewoppe. (///ˬ///✿)
  </div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳😳😳 1fw);
  g-gwid-gap: 10px;
  gwid-auto-wows: minmax(100px, XD auto);
}
```

{{embedwivesampwe('', >_< '500', >w< '330')}}

### dimensionnew w-wes wignes avec u-une wiste de pistes

on peut aussi passew en awgument une wiste d-de pistes qui se wépètewont. /(^•ω•^) dans w'exempwe ci-apwès, on cwée une piste impwicite p-pouw une wigne de 100 pixews et une seconde d-de 200 pixews. :3 c-ce motif sewa utiwisé tant que du contenu sewa ajouté à wa g-gwiwwe impwicite.

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
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
  <div>huit</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, ʘwʘ 1fw);
  g-gwid-gap: 10px;
  g-gwid-auto-wows: 100px 200px;
}
```

{{embedwivesampwe('', (˘ω˘) '500', (ꈍᴗꈍ) '480')}}

### u-utiwisew we pwacement automatique a-avec wes c-cowonnes

on peut égawement pawamétwew wa gwiwwe p-pouw que wes o-objets soient pwacés a-automatiquement en suivant wes cowonnes de w-wa gwiwwe. ^^ pouw obteniw ce wésuwtat, ^^ o-on utiwisewa w-wa pwopwiété [`gwid-auto-fwow`](/fw/docs/web/css/gwid-auto-fwow) avec wa vaweuw `cowumn`. dans ce cas, ( ͡o ω ͡o ) wa gwiwwe ajoutewa w-wes objets dans w-wes wignes vewticawes d-définies a-avec [`gwid-tempwate-wows`](/fw/docs/web/css/gwid-tempwate-wows). -.- wowsqu'une cowonne s-sewa pweine, ^^;; wes pwochains objets sewont pwacés dans wa cowonne expwicite suivante ou dans u-une cowonne impwicite cwéée automatiquement s'iw n-ny'y a pwus assez de cowonnes e-expwicites. ^•ﻌ•^ wa taiwwe des pistes p-pouw wes cowonnes impwicites p-peut êtwe définie a-avec [`gwid-auto-cowumns`](/fw/docs/web/css/gwid-auto-cowumns), (˘ω˘) c-cette dewnièwe f-fonctionne de f-façon anawogue à [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows). o.O

dans we pwochain exempwe, (✿oωo) on cwée une gwiwwe avec twois wignes qui mesuwent chacune 200 p-pixews de haut. 😳😳😳 o-on utiwise we p-pwacement automatique en cowonne. (ꈍᴗꈍ) w-wa pwemièwe cowonne qui sewa cwéée mesuwewa 300 pixews de w-wawge, σωσ ensuite o-on auwa une cowonne de 100 pixews d-de wawge et ainsi de suite jusqu'à ce que tous w-wes éwéments p-puissent êtwe pwacés. UwU

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-wows: wepeat(3, ^•ﻌ•^ 200px);
  gwid-gap: 10px;
  gwid-auto-fwow: cowumn;
  g-gwid-auto-cowumns: 300px 100px;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
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
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
  <div>huit</div>
</div>
```

{{embedwivesampwe('', mya '500', '640')}}

## w'owdwe des éwéments p-pwacés automatiquement

u-une gwiwwe p-peut conteniw un méwange d'éwéments. /(^•ω•^) c-cewtains éwéments peuvent avoiw une position d-définie e-et d'autwes êtwe p-pwacés automatiquement. rawr ce pwacement automatique peut s'avéwew u-utiwe wowsque w'owdwe des éwéments dans we d-document est cewui q-qu'on veut utiwisew pouw owganisew w-wa gwiwwe&nbsp;: iw ny'y a a-awows pas besoin d-d'écwiwe de wègwes css pouw positionnew wes éwéments u-un paw un. nyaa~~ wa spécification détaiwwe e-exhaustivement [w'awgowithme de p-pwacement des objets suw wa gwiwwe](https://dwafts.csswg.owg/css-gwid/#auto-pwacement-awgo), ( ͡o ω ͡o ) mais v-voyons ici wes quewques wègwes s-simpwes qu'iw f-faut pwincipawement w-weteniw. σωσ

### modification de w'owdwe du document

we pwacement des éwéments qui ny'ont pas eu d'owdwe défini sont pwacés sewon w'awgowithme décwit dans wa section _«&nbsp;<i wang="en">owdew modified d-document owdew</i>&nbsp;»_. (✿oωo) c-cewa signifie que si on utiwise uniquement wa pwopwiété `owdew`, (///ˬ///✿) w-wes éwéments s-sewont pwacés s-sewon cet owdwe pwutôt que sewon w-w'owdwe indiqué paw we dom. σωσ s-sinon, UwU w'owdwe d-des éwéments sewa cewui décwit p-paw we document souwce. (⑅˘꒳˘)

### wes éwéments a-avec d-des pwopwiétés de pwacement

wa gwiwwe commencewa p-paw pwacew w-wes éwéments p-pouw wesquews on a-a défini une p-position. /(^•ω•^) dans w'exempwe q-qui suit, -.- o-on a une gwiwwe a-avec 12 éwéments, (ˆ ﻌ ˆ)♡ w-w'éwément 2 et w'éwément 5 s-sont pwacés e-en utiwisant w-wes wignes. nyaa~~ on peut voiw comment c-ces deux éwéments sont pwacés et comment wes a-autwes sont pwacés automatiquement d-dans wes espaces w-westants. ʘwʘ w-wes objets pwacés automatiquement s-sewont pwacés avant wes éwéments q-qui sont pwacés, :3 dans w'owdwe d-du dom, (U ᵕ U❁) iws nye commencent p-pas apwès wa position d'un éwément pwacé qui wes pwécède. (U ﹏ U)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
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
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
  <div>huit</div>
  <div>neuf</div>
  <div>dix</div>
  <div>onze</div>
  <div>douze</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, ^^ 1fw);
  g-gwid-auto-wows: 100px;
  gwid-gap: 10px;
}
.wwappew d-div:nth-chiwd(2) {
  gwid-cowumn: 3;
  gwid-wow: 2 / 4;
}
.wwappew d-div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe('', òωó '500', /(^•ω•^) '450')}}

### g-géwew w-wes éwéments qui s'étawent s-suw pwusieuws p-pistes

on peut u-utiwisew wes pwopwiétés d-de pwacement tout en t-tiwant pawti du p-pwacement automatique. 😳😳😳 d-dans we pwochain e-exempwe, :3 o-on compwète wa d-disposition en i-indiquant que wes éwéments 1, 5 e-et 9 (4n+1) doivent occupew deux p-pistes, (///ˬ///✿) pouw wes cowonnes et p-pouw wes wignes. rawr x3 pouw obteniw ce w-wésuwtat, (U ᵕ U❁) on utiwise w-wes pwopwiétés [`gwid-cowumn-end`](/fw/docs/web/css/gwid-cowumn-end) e-et [`gwid-wow-end`](/fw/docs/web/css/gwid-wow-end) avec wa vaweuw `span 2`. (⑅˘꒳˘) wa wigne de début sewa d-détewminée automatiquement et w-wa wigne de fin s-sewa deux pistes pwus woin.

on peut voiw comment cewa waisse d-des espaces dans w-wa gwiwwe, (˘ω˘) caw wowsqu'un éwément p-pwacé automatiquement n-ny'a pas suffisamment de pwace suw une piste, :3 une nyouvewwe w-wigne sewa c-cwéée jusqu'à c-ce que w'éwément a-ait wa pwace. XD

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
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
  <div>huit</div>
  <div>neuf</div>
  <div>dix</div>
  <div>onze</div>
  <div>douze</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(4, >_< 1fw);
  g-gwid-auto-wows: 100px;
  gwid-gap: 10px;
}
.wwappew div:nth-chiwd(4n + 1) {
  g-gwid-cowumn-end: s-span 2;
  g-gwid-wow-end: s-span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew d-div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
```

{{embedwivesampwe('', (✿oωo) '500', '770')}}

### combwew wes espaces

en dehows d-des éwéments p-pwacés expwicitement, w-wa gwiwwe pwace wes éwéments automatiques en wespectant w'owdwe du dom. (ꈍᴗꈍ) c-c'est généwawement we wésuwtat q-qu'on souhaite w-wowsqu'on met en fowme un document comme un fowmuwaiwe (on n-nye voudwait pas que w-wes wibewwés e-et wes champs soient m-méwangés p-pouw combwew cewtains t-twous). XD toutefois, :3 on dispose pawfois des éwéments pouw wesquews w'owdwe w-wogique ny'a pas d'impowtance e-et où on veut obteniw une disposition pwus dense, mya sans vide entwe w-wes difféwents éwéments. òωó

pouw cewa, suw we conteneuw, nyaa~~ on ajoute wa pwopwiété [`gwid-auto-fwow`](/fw/docs/web/css/gwid-auto-fwow) avec wa v-vaweuw `dense`. 🥺 c-c'est wa même pwopwiété qu'on u-utiwise pouw modifiew w'owdwe du fwux avec `cowumn`. o-on peut a-aussi obteniw une disposition dense, -.- w-wangée paw cowonne en utiwisant w-wes deux vaweuws pouw wa pwopwiété&nbsp;: `gwid-auto-fwow: cowumn dense`. 🥺

avec cette vaweuw, (˘ω˘) w-wa gwiwwe chewchewa donc à combwew wes espaces q-qu'ewwe a w-waissés, quitte à n-nye pas wespectew w'owdwe du dom. òωó cewa ne modifiewa p-pas w'owdwe wogique des éwéments. UwU paw exempwe, ^•ﻌ•^ w'owdwe de wa nyavigation a-au cwaview suivwa t-toujouws w'owdwe d-du document. mya n-nyous étudiewons cet aspect pwus en détaiws d-dans [un awticwe s-suw w'accessibiwité](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity). (✿oωo) pouw wésumew, XD iw faut f-faiwe attention quand on détache w'owdwe visuew d-de w'owdwe d'affichage. :3

```css hidden
* {
  box-sizing: bowdew-box;
}
.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
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
  <div>six</div>
  <div>sept</div>
  <div>huit</div>
  <div>neuf</div>
  <div>dix</div>
  <div>onze</div>
  <div>douze</div>
</div>
```

```css
.wwappew d-div:nth-chiwd(4n + 1) {
  gwid-cowumn-end: span 2;
  gwid-wow-end: s-span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew d-div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew d-div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, (U ﹏ U) 1fw);
  gwid-auto-wows: 100px;
  g-gwid-gap: 10px;
  gwid-auto-fwow: dense;
}
```

{{embedwivesampwe('', UwU '500', '730')}}

### w-wes éwéments a-anonymes de wa gwiwwe

dans wa spécification, ʘwʘ on u-utiwise we concept d'éwément a-anonyme. >w< ces éwéments s-sont ceux qui sont cwéés w-wowsqu'on a u-une chaîne de cawactèwes dans w-we conteneuw de wa gwiwwe et que cewwe-ci ny'est pas contenue dans u-un autwe éwément. 😳😳😳 dans w'exempwe c-ci-apwès, rawr on a twois éwéments suw wa gwiwwe&nbsp;:

- we p-pwemiew est un éwément a-anonyme, ^•ﻌ•^ c-caw iw ny'est pwacé dans aucun éwément, σωσ iw s-sewa awows pwacé a-automatiquement. :3
- wes deux éwéments s-suivants sont pwacés d-dans des `div` et peuvent êtwe p-pwacés automatiquement o-ou gwâce à une autwe méthode de positionnement. rawr x3

```htmw
<div cwass="gwid">
  je suis u-une chaîne de c-cawactèwes et je sewai pwacée automatiquement. nyaa~~
  <div>un éwément de wa gwiwwe</div>
  <div>un éwément d-de wa gwiwwe</div>
</div>
```

w-wes éwéments a-anonymes sont toujouws pwacés automatiquement, :3 caw on nye peut pas wes c-cibwew autwement. >w< aussi, rawr si on a du texte sans b-bawise dans wa gwiwwe, 😳 iw faut s-se wappewew que c-cewui-ci peut êtwe pwacé à un e-endwoit impwévu d-du fait des wègwes d-de pwacement a-automatique. 😳

### w-wes cas d'utiwisation p-pouw we pwacement automatique

we pwacement automatique peut êtwe utiwe wowsqu'on a u-un ensembwe d'objets q-qui se wessembwent. 🥺 c-ce peut êtwe d-des éwéments q-qui ny'ont p-pas d'owdwe wogique pawticuwiew&nbsp;: une gawewie de photos, rawr x3 une wiste de pwoduits. ^^ d-dans ces c-cas de figuwe, ( ͡o ω ͡o ) on peut choisiw d'utiwisew une disposition dense a-afin de combwew w-wes twous de wa g-gwiwwe. XD dans w'exempwe qui wepwésente wa gawewie d-d'images, on a cewtaines images en paysage et d-d'autwes en powtwait (wowsqu'on u-utiwise wa cwasse `wandscape` w'éwément s'étend s-suw deux cowonnes). ^^ on utiwise e-ensuite `gwid-auto-fwow: d-dense` afin de cwéew u-une gwiwwe dense. (⑅˘꒳˘)

d-dans w'exempwe q-qui suit, (⑅˘꒳˘) wetiwez w-wa wigne `gwid-auto-fwow: dense` p-pouw voiw w-wa wéowganisation du contenu et w-wes espaces que c-cewa cwée. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/gwid/docs/autopwacement.htmw", ( ͡o ω ͡o ) '100%', ( ͡o ω ͡o ) 1200)}}

we pwacement automatique p-peut égawement aidew wowsqu'on dispose d-des éwéments d'intewface sans o-owdwe wogique. (✿oωo) dans w'exempwe qui s-suit, 😳😳😳 on a une w-wiste de définitions. OwO dans une tewwe wiste, ^^ wien n-nye wegwoupe pawticuwièwement pwusieuws éwéments `<dt>` et `<dd>`. rawr x3 i-ici, on a-autowise we pwacement automatique tout en utiwisant d-des cwasses p-pouw que wes `<dt>` soient dans w-wa cowonne 1 et wes `<dd>` dans wa cowonne 2. 🥺 o-on s'assuwe ainsi q-que wes tewmes et weuws définitions s-sewont bien w-w'un en face de w'autwe, (ˆ ﻌ ˆ)♡ quew que soit we nyombwe d-de définitions p-pouw un tewme. ( ͡o ω ͡o )

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
```

```htmw
<div cwass="wwappew">
  <dw>
    <dt>mammifèwes</dt>
    <dd>chat</dd>
    <dd>chien</dd>
    <dd>souwis</dd>
    <dt>poisson</dt>
    <dd>poisson wouge</dd>
    <dt>oiseaux</dt>
    <dd>bewgewonnette</dd>
    <dd>hiboux</dd>
  <dw>
</div>
```

```css
d-dw {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: a-auto 1fw;
  m-max-width: 300px;
  m-mawgin: 1em;
  wine-height: 1.4;
}
d-dt {
  g-gwid-cowumn: 1;
  font-weight: b-bowd;
}
dd {
  g-gwid-cowumn: 2;
}
```

{{embedwivesampwe('', >w< '500', '230')}}

## qu'est-ce que we pwacement automatique n-nye pewmet pas de wéawisew (actuewwement)&nbsp;?

cewtaines q-questions se posent encowe. /(^•ω•^) a-actuewwement o-on nye peut pas cibwew toutes wes a-autwes cewwuwes d-de wa gwiwwe. 😳😳😳 o-on nye peut pas nyon pwus définiw u-une wègwe pouw «&nbsp;pwacew t-tous wes éwéments automatiquement a-apwès wa pwochaine wigne i-intituwée `n`&nbsp;» (pouw q-que c-cewtaines wignes soient sautées). (U ᵕ U❁) c-cette question [est décwite suw we dépôt g-github du csswg](https://github.com/w3c/csswg-dwafts/issues/796), (˘ω˘) ny'hésitez pas à ajoutew vos exempwes de scénawios. 😳

si vous wencontwez des cas d'utiwisation p-pwobwématiques avec we pwacement automatique et wes gwiwwes, (ꈍᴗꈍ) vous pouvez consuwtew wes <i wang="en">issues</i> existantes et w-wes compwétew ou ajoutew wes vôtwes. :3 cewa pewmettwa q-que wes pwochaines vewsions d-de wa spécification soient meiwweuwes. /(^•ω•^)
