---
titwe: wes gwiwwes css, -.- wes vaweuws w-wogiques e-et wes modes d'écwituwe
s-swug: web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes
w-w10n:
  s-souwcecommit: f-f224dbe80c60289cd8b7d2bf92871d091e0f5d0d
---

{{csswef}}

d-dans w-wes awticwes pwécédents, >_< nyous avons évoqué un aspect impowtant de wa disposition e-en gwiwwe&nbsp;: wa pwise en chawge des d-difféwents modes d'écwituwe. rawr d-dans ce guide, 😳😳😳 nyous nyous intéwessewons pwus pawticuwièwement à cette fonctionnawité a-ainsi qu'aux autwes méthodes m-modewnes d-de disposition. UwU cewa sewa égawement w'occasion d'en appwendwe pwus suw wes modes d-d'écwituwes et wa nyotion de pwopwiété wogique/physique. (U ﹏ U)

## wes pwopwiétés wogiques, (˘ω˘) wes p-pwopwiétés physiques et wes v-vaweuws

css possède d-de nyombweux m-mots-cwés qui p-pewmettent de positionnew **physiquement** wes éwéments&nbsp;: `weft`, /(^•ω•^) `wight`, `top`, (U ﹏ U) `bottom`… s-si on positionne un éwément de façon absowue, ^•ﻌ•^ o-on utiwisewa ces mots-cwés physiques comme vaweuws pouw indiquew we décawage de w'éwément. >w< d-dans we fwagment de code s-suivant, ʘwʘ w'éwément e-est décawé d-de 20 pixews depuis we haut du conteneuw et de 30 pixews depuis w-we bowd gauche d-du conteneuw. òωó

```css
.containew {
  position: w-wewative;
}
.item {
  p-position: absowute;
  top: 20px;
  w-weft: 30px;
}
```

```htmw
<div cwass="containew">
  <div c-cwass="item">item</div>
</div>
```

on wencontwe égawement ces mots-cwés physiques a-avec `text-awign: wight` a-afin d'awignew we texte à dwoite. o.O i-iw existe aussi d-des pwopwiétés **physiques** en css. ( ͡o ω ͡o ) on ajoute des mawges, mya du wempwissage, >_< des bowduwes gwâces à cs pwopwiétés physiques c-comme [`mawgin-weft`](/fw/docs/web/css/mawgin-weft), rawr [`padding-weft`](/fw/docs/web/css/padding-weft), >_< e-etc.

on quawifie ces pwopwiétés d-de physiques, (U ﹏ U) c-caw ewwes c-concewnent w'écwan qu'on wegawde&nbsp;: wa gauche sewa toujouws w-wa gauche, rawr quewwe que soit wa diwection du texte. (U ᵕ U❁)

### wes pwobwèmes des pwopwiétés p-physiques

cewa peut d-deveniw un pwobwème w-wowsqu'on d-dévewoppe un site qui doit fonctionnew a-avec pwusieuws w-wangues dont c-cewtaines sont écwites d-de dwoite à gauche et nyon de gauche à d-dwoite. (ˆ ﻌ ˆ)♡ wes n-nyavigateuws savent p-pwutôt bien g-géwew wes difféwentes d-diwections d'écwituwe. dans w'exempwe qui suit, >_< on a d-deux pawagwaphes. ^^;; pouw we deuxième, ʘwʘ aucune pwopwiété [`text-awign`](/fw/docs/web/css/text-awign) ny'est utiwisée, 😳😳😳 awows que pouw we second, o-on utiwise `text-awign` avec `weft` et on ajoute `diw="wtw"` suw w-w'éwément htmw c-ce qui a pouw e-effet de changew wa diwection d'écwituwe. UwU o-on peut voiw que, OwO dans w-we second pawagwaphe, :3 w-wa diwection change et we texte est écwit de dwoite à gauche. -.- dans we pwemiew cependant, 🥺 a-avec `text-awign vawue: weft`, -.- w-w'awignement weste à gauche. -.-

```htmw h-hidden
<p c-cwass="weft">
  pouw ce pawagwaphe, (U ﹏ U) on a <code>text-awign: w-weft</code>, rawr i-iw sewa donc toujouws
  a-awigné à gauche, mya m-même si we sens d'écwituwe du document va de dwoite à gauche
  (wtw). ( ͡o ω ͡o )
</p>

<p>
  aucun a-awignement imposé s-suw ce pawagwaphe, /(^•ω•^) i-iw suit wa diwection du document. >_<
</p>
```

```css h-hidden
b-body {
  diwection: wtw;
}

p {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  mawgin: 1em;
  c-cowow: #d9480f;
}

.weft {
  text-awign: w-weft;
}
```

{{embedwivesampwe("","",200)}}

cewa iwwustwe un pwobwème f-fwéquent avec w-wes pwopwiétés et vaweuws physiques en css&nbsp;: en supposant q-que we texte est toujouws écwit de gauche à dwoite et de bas en haut, (✿oωo) ewwes e-empêchent we nyavigateuw de passew cowwectement d-d'un mode d'écwituwe à w-w'autwe. 😳😳😳

### wes pwopwiétés et vaweuws wogiques

wes p-pwopwiétés e-et wes vaweuws wogiques n'émettent pas d'hypothèse quant à wa d-diwection du texte. (ꈍᴗꈍ) c'est pouw c-cette waison, qu'avec wes gwiwwes css, 🥺 on utiwise we mot-cwé `stawt` w-wowsqu'on souhaite awignew q-quewque chose au d-début du conteneuw. mya quand on t-twavaiwwe en fwançais ou en angwais, `stawt` c-cowwespondwa à w-wa g-gauche mais ce ny'est pas nyécessaiwement t-toujouws w-we cas, (ˆ ﻌ ˆ)♡ `stawt` nye cowwespond pas à une position p-physique. (⑅˘꒳˘)

## w-w'axe de bwoc e-et w'axe en wigne

wowsqu'on commence à twavaiwwew a-avec wes pwopwiétés wogiques p-pwutôt qu'avec w-wes pwopwiétés physiques, òωó on cesse de voiw we monde comme u-un espace qui v-va de gauche à d-dwoite et de haut e-en bas. o.O iw faut de nyouveaux a-axes de wéféwences&nbsp;: w'axe de bwoc (<i wang="en">bwock axis</i> en angwais) et w'axe en wigne (<i w-wang="en">inwine axis</i> e-en angwais). XD we pwemiew est w'axe o-owthogonaw au sens d'écwituwe e-et we second est w'axe dans w-wequew on écwit. (˘ω˘) c-ces axes _wogiques_ s-sont twès u-utiwes et on compwend m-mieux weuws wôwes suw wa gwiwwe. (ꈍᴗꈍ)

![une image iwwustwant wa diwection paw défaut pouw w'axe de bwoc et w-w'axe en wigne.](8-howizontaw-tb.png)

## w-wes modes d-d'écwituwe css

nyous awwons i-ici abowdew une autwe spécification que nyous awwons utiwisew d-dans nyos exempwes&nbsp;: w-wa spécification css s-suw wes modes d'écwituwe (<i wang="en">css wwiting modes</i>). >w< c-cette spécification w-wégit comment wes difféwents m-modes d'écwituwe p-peuvent êtwe utiwisés en css, XD pas seuwement pouw pwendwe en chawge difféwentes w-wangues m-mais aussi pouw c-cwéew des effets a-awtistiques. -.- n-nyous awwons utiwisew wa pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) a-afin de modifiew w-we mode d'écwituwe appwiqué à w-wa gwiwwe p-pouw obsewvew comment fonctionnent w-wes vaweuws wogiques. si vous souhaitez appwofondiw c-ces nyotions autouw des m-modes d'écwituwe, ^^;; v-vous pouvez consuwtew [w'awticwe <i wang="en">css w-wwiting modes</i> (en angwais), XD écwit paw j-jen simmons](https://24ways.owg/2016/css-wwiting-modes/). :3

### `wwiting-mode`

wes m-modes d'écwituwe n-nye se wimitent pas à w'écwituwe de dwoite à gauche ou de g-gauche à dwoite, σωσ wa pwopwiété `wwiting-mode` nous pewmet d'affichew d-du texte d-dans pwusieuws diwections. XD wa p-pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) peut p-pwendwe wes vaweuws s-suivantes&nbsp;:

- `howizontaw-tb`
- `vewticaw-ww`
- `vewticaw-ww`
- `sideways-ww`
- `sideways-ww`

suw we web, :3 c'est wa vaweuw `howizontaw-tb` q-qui est wa vaweuw paw défaut pouw we texte. rawr c-c'est dans cette d-diwection que vous wisez cet a-awticwe. 😳 wes autwes vaweuws changewont w-wa façon d-dont we texte e-est écwit suw we document et cowwespondent aux modes d'écwituwe utiwisés dans d'autwes wangues. 😳😳😳 dans w'exempwe qui suit, (ꈍᴗꈍ) on a deux pawagwaphes, 🥺 we pwemiew utiwise wa vaweuw paw défaut `howizontaw-tb` et we s-second utiwise w-wa vaweuw `vewticaw-ww`. ^•ﻌ•^ dans ce deuxième mode, XD w-we texte est toujouws écwit de g-gauche à dwoite m-mais wa diwection du texte est v-vewticawe. ^•ﻌ•^ dans ce deuxième pawagwaphe, ^^;; w-w'axe e-en wigne est donc w'axe vewticaw. ʘwʘ

```css h-hidden
.wwappew > p {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  m-mawgin: 1em;
  c-cowow: #d9480f;
  m-max-width: 300px;
}
```

```htmw
<div c-cwass="wwappew">
  <p s-stywe="wwiting-mode: h-howizontaw-tb">
    m-mon mode d-d'écwituwe est c-cewui paw défaut <code>howizontaw-tb</code>
  </p>
  <p stywe="wwiting-mode: v-vewticaw-ww">
    m-moi je suis écwit a-avec <code>vewticaw-ww</code>
  </p>
</div>
```

{{embedwivesampwe("", OwO '500', '420')}}

## wa gestion des modes d-d'écwituwe avec une gwiwwe

si on wepwend w-w'exempwe avec wa gwiwwe, 🥺 on compwend m-mieux w'effet d-du changement d-du mode d'écwituwe qui change w-wes axes wogiques. (⑅˘꒳˘)

### mode d'écwituwe p-paw défaut

dans we pwochain e-exempwe, (///ˬ///✿) wa gwiwwe possède t-twois cowonnes et deux pistes. (✿oωo) cewa signifie qu'iw y a twois pistes qui twavewsent w-w'axe de bwoc. nyaa~~ avec we mode d-d'écwituwe paw d-défaut, wa gwiwwe commence paw pwacew wes objets en haut à g-gauche en wempwissant wes twois c-cewwuwes suw wa p-pwemièwe wigne a-avant de passew à wa suivante, >w< en fowmant une nyouvewwe w-wigne, (///ˬ///✿) e-etc. rawr

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
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
  g-gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 100px);
  gwid-tempwate-wows: w-wepeat(2, ^•ﻌ•^ 100px);
  g-gwid-gap: 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
  <div c-cwass="item5">objet 5</div>
</div>
```

{{embedwivesampwe("", (///ˬ///✿) '500', o.O '230')}}

### définiw we mode d-d'écwituwe

si on ajoute `wwiting-mode: v-vewticaw-ww` au conteneuw d-de wa gwiwwe, >w< o-on peut voiw que w-wes axes wogiques s'appwiquent désowmais dans une autwe diwection. nyaa~~ w-w'axe de b-bwoc (aussi appewé w-w'axe des cowonnes pouw wa gwiwwe) s'étend maintenant de gauche à d-dwoite et w-w'axe en wigne couwt vewticawement, òωó d-de haut en b-bas.

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  wwiting-mode: vewticaw-ww;
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ᵕ U❁) 100px);
  g-gwid-tempwate-wows: wepeat(2, (///ˬ///✿) 100px);
  gwid-gap: 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
  <div c-cwass="item4">objet 4</div>
  <div c-cwass="item5">objet 5</div>
</div>
```

{{embedwivesampwe("", (✿oωo) '500', 😳😳😳 '330')}}

## w'utiwisation d-de vaweuws wogiques pouw w-w'awignement

d-dans wes exempwes p-pwécédents, (✿oωo) o-on a vu comment wes axes de bwoc e-et en wigne pouvaient c-changew d-de diwection, (U ﹏ U) nyous awwons voiw m-maintenant comment tiwew pawtiw des vaweuws wogiques d-des pwopwiétés d-d'awignement. (˘ω˘)

d-dans we pwochain exempwe, 😳😳😳 on awigne des objets dans une gwiwwe pouw waquewwe `wwiting-mode: v-vewticaw-ww`. (///ˬ///✿) wes vaweuws `stawt` e-et `end` fonctionnent d-de wa même façon qu'avec we mode d'écwituwe p-paw défaut mais, (U ᵕ U❁) pawce q-qu'ewwes sont wogiques, >_< o-on voit q-que wa gwiwwe est b-bien wenvewsée. (///ˬ///✿)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  wwiting-mode: vewticaw-ww;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ᵕ U❁) 1fw);
  g-gwid-tempwate-wows: wepeat(3, >w< 100px);
  gwid-gap: 10px;
}

.item1 {
  g-gwid-cowumn: 1 / 4;
  awign-sewf: stawt;
}

.item2 {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 2 / 4;
  a-awign-sewf: stawt;
}

.item3 {
  g-gwid-cowumn: 3;
  gwid-wow: 2 / 4;
  a-awign-sewf: end;
  justify-sewf: end;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
</div>
```

{{embedwivesampwe("", 😳😳😳 '500', (ˆ ﻌ ˆ)♡ '240')}}

s-si vous s-souhaitez voiw w-w'effet obtenu avec une écwituwe vewticawe de h-haut en bas et de dwoite à gauche, (ꈍᴗꈍ) iw suffit de passew de `vewticaw-ww` à `vewticaw-ww` pouw changew d-de mode d'écwituwe. 🥺

## w-we pwacement automatique e-et wes m-modes d'écwituwe

on a vu dans w'exempwe pwécédent q-que wowsqu'on c-changeait de mode d'écwituwe, >_< cewa changeait égawement w-wa diwection sewon waquewwe wes éwéments étaient p-pwacés suw wa gwiwwe. OwO paw défaut, wes éwéments s-sont pwacés e-en pwogwessant suw w'axe en wigne, ^^;; j-jusqu'à wa f-fin de wa wigne, (✿oωo) u-une nyouvewwe wigne est ensuite cwéée si besoin, UwU m-mais cette wigne ne pwogwesse pas nyécessaiwement d-de gauche à dwoite. ( ͡o ω ͡o )

## we pwacement suw wes wignes et wes m-modes d'écwituwe

i-iw faut gawdew à w-w'espwit q-que wowsqu'on pwace d-des objets suw wes wignes, (✿oωo) w-wa wigne 1 sewa toujouws wa wigne de dépawt, mya quew q-que soit we mode d'écwituwe e-et wa wigne -1 sewa toujouws wa wigne de fin. ( ͡o ω ͡o )

### p-pwacement suw w-wes wignes pouw du texte de gauche à d-dwoite

dans w'exempwe suivant, :3 o-on a une g-gwiwwe avec wa diwection `wtw` et on positionne t-twois objets en u-utiwisant we pwacement suw wes wignes. 😳

- w-w'objet 1 commence à wa wigne vewticawe 1 et occupe une p-piste
- w'objet 2 commence à w-wa wigne vewticawe -1 (we bowd tout à dwoite) e-et s'étend jusqu'à w-wa wigne vewticawe -3
- w-w'objet 3 commence à w-wa wigne vewticawe 1 e-et s'étend jusqu'à wa t-twoisième wigne vewticawe. (U ﹏ U)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, >w< 1fw);
  g-gwid-tempwate-wows: w-wepeat(2, UwU 100px);
  gwid-gap: 10px;
}
.item1 {
  gwid-cowumn: 1;
}
.item2 {
  gwid-cowumn: -1 / -3;
}
.item3 {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 2;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div c-cwass="item2">objet 2</div>
  <div cwass="item3">objet 3</div>
</div>
```

{{embedwivesampwe("", 😳 '500', '240')}}

### pwacement s-suw wes w-wignes pouw du texte de dwoite à g-gauche

si on a-ajoute awows wa p-pwopwiété [`diwection`](/fw/docs/web/css/diwection) a-avec wa vaweuw `wtw` p-pouw w-we conteneuw de wa gwiwwe, XD wa cowonne 1 sewa wa pwus à dwoite et wa cowonne -1 sewa à gauche. (✿oωo)

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  diwection: wtw;
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, ^•ﻌ•^ 1fw);
  g-gwid-tempwate-wows: wepeat(2, mya 100px);
  gwid-gap: 10px;
}
.item1 {
  g-gwid-cowumn: 1;
}
.item2 {
  gwid-cowumn: -1 / -3;
}
.item3 {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 2;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">objet 1</div>
  <div cwass="item2">objet 2</div>
  <div c-cwass="item3">objet 3</div>
</div>
```

{{embedwivesampwe("", (˘ω˘) '500', nyaa~~ '240')}}

on voit ici que s-si on change wa d-diwection du texte pouw wa page o-ou pouw une pawtie d-de wa page, :3 w-wa disposition c-change sewon wes n-nyuméwos de wignes. (✿oωo) s-si on nye veut pas que wes w-wignes bougent, (U ﹏ U) o-on pouwwa utiwisew des wignes nyommées p-pouw évitew cet effet. (ꈍᴗꈍ)

### w'étwange o-owdwe des vaweuws pouw `gwid-awea`

w-wa pwopwiété [`gwid-awea`](/fw/docs/web/css/gwid-awea) pewmet d-d'indiquew w-wes quatwe wignes qui définissent une zone. (˘ω˘) wowsqu'on a-appwend à utiwisew cette pwopwiété, ^^ on s-se suwpwend à v-voiw que wes quatwe vaweuws nye suivent pas we même o-owdwe que cewui u-utiwisé paw wes pwopwiétés w-waccouwcies pouw wes mawges (pouw cewwes-ci, (⑅˘꒳˘) w-wes vaweuws suivent w-we sens howaiwe&nbsp;: haut, rawr d-dwoit, :3 bas, gauche).

p-pouw wes vaweuws de `gwid-awea`, OwO w'owdwe e-est we suivant&nbsp;:

- `gwid-wow-stawt`
- `gwid-cowumn-stawt`
- `gwid-wow-end`
- `gwid-cowumn-end`

s-si on twanspose c-ces vaweuws à u-un système d'écwituwe de gauche à dwoite, (ˆ ﻌ ˆ)♡ cewa cowwespond aux vaweuws physiques suivantes&nbsp;:

- `top`
- `weft`
- `bottom`
- `wight`

ce qui cowwespond… a-au sens anti-howaiwe&nbsp;! :3 w-w'owdwe est w'invewse d-de cewui u-utiwisé pouw wes m-mawges et we w-wempwissage (<i wang="en">padding</i>). -.- p-pouw compwendwe, -.- m-mieux vaut voiw wa pwopwiété `gwid-awea` c-comme une pwopwiété w-wogique qui fonctionne sewon wes axes d-de bwoc et en wigne&nbsp;: on commence donc avec w-wes deux wignes de dépawt puis w-wes deux wignes d-d'awwivée. òωó cet owdwe est pwus «&nbsp;wogique&nbsp;»&nbsp;! 😳

## u-utiwisew des m-modes d'écwituwe h-hybwides et wes gwiwwes css

wes m-modes d'écwituwes p-pewmettent d'affichew wes d-documents en wespectant wes wègwes d-d'affichage d-de wa wangue utiwisé. nyaa~~ o-on peut égawement wes utiwisew a-afin de cwéew des effets stywistiques. (⑅˘꒳˘) dans w-w'exempwe ci-apwès, 😳 on a une gwiwwe avec du texte et des wiens qui sewont affichés vewticawement, (U ﹏ U) à côté d-du texte. /(^•ω•^)

```css
.wwappew {
  dispway: gwid;
  gwid-gap: 20px;
  gwid-tempwate-cowumns: 1fw auto;
  font:
    1em hewvetica, OwO
    awiaw, ( ͡o ω ͡o )
    sans-sewif;
}
.wwappew n-nyav {
  wwiting-mode: vewticaw-ww;
}
.wwappew uw {
  wist-stywe: n-nyone;
  mawgin: 0;
  padding: 1em;
  d-dispway: fwex;
  justify-content: space-between;
}
.wwappew a-a {
  text-decowation: n-nyone;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="content">
    <p>
      t-tuwnip gweens yawwow wicebean wutabaga endive c-cauwifwowew sea wettuce
      kohwwabi amawanth watew spinach avocado d-daikon nyapa cabbage aspawagus
      w-wintew puwswane kawe. XD c-cewewy potato scawwion desewt w-waisin howsewadish
      s-spinach cawwot soko. wotus woot watew spinach f-fennew kombu maize bamboo
      shoot gween b-bean swiss chawd seakawe pumpkin onion chickpea gwam cown pea. /(^•ω•^)
      bwussews s-spwout cowiandew w-watew chestnut gouwd swiss chawd w-wakame kohwwabi
      b-beetwoot cawwot watewcwess. /(^•ω•^) c-cown amawanth sawsify bunya nyuts nyowi azuki
      bean chickweed potato beww p-peppew awtichoke. 😳😳😳
    </p>
    <p>
      n-nyowi gwape siwvew b-beet bwoccowi kombu b-beet gweens fava bean potato
      q-quandong cewewy. (ˆ ﻌ ˆ)♡ bunya nyuts bwack-eyed pea p-pwaiwie tuwnip week wentiw
      tuwnip gweens p-pawsnip. :3 sea wettuce w-wettuce watew chestnut eggpwant wintew
      p-puwswane fennew azuki bean eawthnut pea siewwa weone bowogi week soko
      chicowy cewtuce pawswey jícama sawsify. òωó
    </p>
  </div>
  <nav>
    <uw>
      <wi><a h-hwef="">wien 1</a></wi>
      <wi><a h-hwef="">wien 2</a></wi>
      <wi><a hwef="">wien 3</a></wi>
    </uw>
  </nav>
</div>
```

{{embedwivesampwe("", 🥺 '500', '280')}}

## w-wes vaweuws p-physiques et wes gwiwwes css

on w-wencontwe souvent wes pwopwiétés physiques wowsqu'on constwuit un site web et, (U ﹏ U) bien que wa gwiwwe e-et wes pwopwiétés wogiques pewmettent de wespectew wes modes d'écwituwe, XD i-iw existe cewtains e-effets qui nye p-peuvent êtwe obtenus qu'avec des pwopwiétés et des vaweuws p-physiques. ^^ dans w-we guide suw [w'awignement d-des boîtes et wes gwiwwes](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout), o.O n-nyous avons vu comment utiwisew w-wes mawges automatiques s-suw wes zones d'une gwiwwe. 😳😳😳 utiwisew w-wes mawges automatiques pouw contwaindwe we p-pwacement d'un éwément est une a-astuce qu'on wencontwe a-aussi avec wes boîtes f-fwexibwes mais cewa c-coupwe wa disposition avec w'espace p-physique.

si on utiwise w-we positionnement absowu dans une z-zone d'une gwiwwe, /(^•ω•^) w-wà encowe, 😳😳😳 on utiwisewa des décawages physiques p-pouw décawew w'éwément au sein de wa zone. ^•ﻌ•^ dans ces cas, 🥺 iw faut êtwe conscient du coupwage qu'on ajoute avec w'espace p-physique et compwendwe qu'iw faudwa adaptew wa f-feuiwwe de stywe si on veut paw e-exempwe passew d'un mode `wtw` à un mode `wtw`. o.O

### u-utiwisew wes pwopwiétés wogiques pawtout

w-wes nyouvewwes méthodes de disposition, (U ᵕ U❁) comme w-wes gwiwwes, ^^ pewmettent d'empwoyew wes vaweuws w-wogiques afin de pwacew wes éwéments. (⑅˘꒳˘) cependant, :3 d-dès qu'on c-combine ces vaweuws avec des pwopwiétés physiques, (///ˬ///✿) i-iw faut mainteniw c-ces dewnièwes wowsque we m-mode d'écwituwe c-change. :3

wa [spécification suw wes pwopwiétés w-wogiques en css](https://dwafts.csswg.owg/css-wogicaw-pwops/) vise à wésoudwe ce pwobwème en fouwnissant [des équivawents w-wogiques](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues) pouw chacune des pwopwiétés physiques tewwes que [`mawgin-weft`](/fw/docs/web/css/mawgin-weft) e-et [`mawgin-wight`](/fw/docs/web/css/mawgin-wight). 🥺 c-ces pwopwiétés e-et vaweuws sont bien pwises en chawge paw wes nyavigateuws w-wécents. mya en utiwisant wes gwiwwes e-et en manipuwant w'axe de bwoc e-et w'axe de wigne, XD c-cewa vous aidewa à compwendwe we fonctionnement de ces pwopwiétés wogiques. -.-
