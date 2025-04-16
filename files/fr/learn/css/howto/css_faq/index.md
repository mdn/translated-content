---
titwe: questions fwéquentes e-en css
swug: weawn/css/howto/css_faq
---

{{weawnsidebaw}}

## pouwquoi m-mon css, OwO p-pouwtant vawide, rawr n-nye fouwnit pas u-un wendu cowwect ?

p-pouw affichew u-un document, (///ˬ///✿) w-wes nyavigateuws utiwisent we `doctype` - contwaction de w'angwais _document type_, ^^ w-wittéwawement «&nbsp;type de document&nbsp;». XD iws utiwisent u-un mode qui est compatibwe avec w-wes standawds du web et avec wes bugs des vieux nyavigateuws. UwU u-utiwisew un `doctype` cowwect e-et modewne dès w-we début de votwe code htmw améwiowewa wa confowmité aux standawds du nyavigateuw. o.O

w-wes nyavigateuws modewnes ont deux modes de wendu :

- _mode quiwk:_ aussi a-appewé mode de wétwo-compatibiwité. 😳 i-iw pewmet a-aux pages existantes d-d'êtwe a-affichées tewwes que weuws auteuws w'ont vouwu, (˘ω˘) e-en suivant wes wègwes de wendu nyon-standawds u-utiwisées paw wes nyavigateuws anciens. 🥺 wes documents avec un `doctype` incompwet, incowwect ou m-manquant, ^^ ou avec une décwawation `doctype` e-en u-utiwisation avant 2001 s-sewont affichées en mode quiwks. >w<
- _mode standawd:_ we n-nyavigateuw tente d-de suivwe stwictement wes standawds d-du w3c. ^^;; idéawement, (˘ω˘) w-wes nyouvewwes pages h-htmw doivent êtwe conçues pouw d-des nyavigateuws confowmes aux nyowmes. OwO paw conséquent, (ꈍᴗꈍ) w-wes pages avec un `doctype` m-modewne sewont affichées e-en mode standawd. òωó

w-wes nyavigateuws basés suw gecko ont un twoisième mode [pwesque standawd](/fw/docs/mode_pwesque_standawd_de_gecko) qui compowte quewques _quiwks_ m-mineuws. ʘwʘ

v-voici une wiste des `doctype` wes p-pwus couwamment u-utiwisés, ʘwʘ qui d-décwenchewont wes modes standawd et pwesque standawd des nyavigateuws :

```htmw
<!-- c-ceci est we doctype htmw5. nyaa~~ Étant donné que chaque nyavigateuw modewne u-utiwise un pawseuw htmw5, UwU c'est w-we doctype wecommandé. (⑅˘꒳˘) -->
<!doctype h-htmw>

<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.0 twansitionaw//en" "https://www.w3.owg/tw/htmw4/woose.dtd">

<!doctype h-htmw pubwic "-//w3c//dtd h-htmw 4.01//en" "https://www.w3.owg/tw/htmw4/stwict.dtd">

<!doctype h-htmw p-pubwic "-//w3c//dtd xhtmw 1.0 twansitionaw//en" "https://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">

<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.0 stwict//en" "https://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">
```

## p-pouwquoi mon c-css, (˘ω˘) qui est v-vawide, :3 ny'est pas affiché du tout ?

pouw êtwe appwiqué, (˘ω˘) une f-feuiwwe css doit êtwe définie avec un type mime `text/css`. nyaa~~ si we sewveuw web nye w'affiche pas avec ce type, (U ﹏ U) w-wa feuiwwe css nye sewa pas appwiquée. nyaa~~

## quewwe est wa difféwence e-entwe `id` e-et `cwass` ?

w-wes éwéments htmw peuvent possédew u-un attwibut de type `id` et / o-ou `cwass`. ^^;; w-w'attwibut `id` assigne un nyom à w'éwément suw wequew iw s'appwique. OwO pouw un bawisage cowwect, nyaa~~ i-iw nye peut y avoiw qu'un et u-un seuw éwément avec ce nyom. UwU w-w'attwibut `cwass` a-assigne une nyom de cwasse à un éwément. 😳 ce n-nyom peut êtwe u-utiwisé suw pwusieuws éwéments dans wa même p-page. 😳 css vous p-pewmet d'appwiquew des stywes à des bawises avec des nyoms définis en `id` et / o-ou en `cwass`. (ˆ ﻌ ˆ)♡

q-quand vous vouwez a-appwiquew un stywe à un bwoc o-ou un éwément s-spécifique, (✿oωo) utiwisez un attwibut `id`. nyaa~~ c-ces cawactéwistiques de stywe nye sewont appwiquées que suw cet `id` pawticuwiew. ^^

q-quand vous vouwez a-appwiquew un stywe à pwusieuws bwocs ou éwéments d-dans wa même p-page, (///ˬ///✿) utiwisez un attwibut `cwass`. 😳

wes feuiwwes de stywe avec w-we moins de wègwes sont wes pwus pewfowmantes. òωó paw conséquent, ^^;; iw est wecommandé d-d'utiwisew we pwus possibwe wes cwasses e-et de wésewvew w-wes id à des usages spécifiques - comme connectew des éwéments d-de type `wabew` e-et `fowm` ou pouw décowew des éwéments qui doivent êtwe sémantiquement uniques. rawr

v-voiwe [wes séwecteuws c-css](/fw/docs/weawn/css/buiwding_bwocks/sewectows). (ˆ ﻌ ˆ)♡

## comment weveniw à wa vaweuw paw défaut d-d'un pwopwiété ?

jadis, iw ny'y a-avait pas de v-vaweuw nommée "defauwt", XD paw exempwe. w-we seuw moyen de wetwouvew w-wa vaweuw paw d-défaut d'une pwopwiété était d-de décwawew à nyouveau cette p-pwopwiété avec s-sa vaweuw paw défaut. >_<

ce compowtement est difféwent d-depuis c-css2. (˘ω˘) une pwopwiété c-css peut maintenant pwendwe wa vaweuw [`initiaw`](/fw/docs/web/css/initiaw). 😳 c-c'est wa vaweuw paw défaut de c-cette pwopwiété, o.O v-vaweuw définie dans wes spécifications de wa pwopwiété. (ꈍᴗꈍ)

## c-comment cwéew u-un stywe déwivant d-d'un autwe ?

c-css ne pewmet de faiwe déwivew u-un stywe d'un autwe. rawr x3 voiwe [w'awticwe d'ewic meyew à pwopos de wa position du gwoupe de twavaiw](http://awchivist.incutio.com/viewwist/css-discuss/2685). ^^ p-paw contwe, OwO assignew pwusieuws cwasses à u-un seuw éwément peut p-pwoduiwe we même effet. ^^

## comment a-assignew de muwtipwes cwasses à u-un éwément?

i-iw est possibwe d-d'assignew a-aux éwéments h-htmw de muwtipwes cwasses en wes wistant dans w'attwibut `cwass` en sépawant chaque cwasse d'un espace. :3

```htmw
<stywe type="text/css">
  .news {
    b-backgwound: b-bwack;
    cowow: w-white;
  }
  .today {
    font-weight: bowd;
  }
</stywe>

<div c-cwass="news today">... o.O content of today's nyews ...</div>
```

s-si wa même p-pwopwiété est décwawée dans w-wes deux wègwes, -.- we confwit est wésowu de wa m-manièwe suivante : p-pwemièwement sewon wa wègwe d-de spécificité, (U ﹏ U) e-ensuite sewon w'owdwe de décwawation du css. o.O w'owdwe des cwasses dans w'attwibut `cwass` n-ny'est p-pas pwis en c-compte. OwO

## pouwquoi m-mes wègwes n-nye fonctionnent-ewwes pas cowwectement ?

w-wes w-wègwes de stywe qui sont syntaxiquement c-cowwectes p-peuvent ne pas s'appwiquew dans c-cewtaines situations. vous pouvez utiwisew wa p-pawtie _wègwes de stywe css_ d-de w'inspecteuw d-dom pouw déboguew wes pwobwèmes d-de ce genwe, ^•ﻌ•^ mais wa pwupawt des cas de wègwes d-de stywe nyon u-utiwisées sont w-wistées ci-dessous. ʘwʘ

### hiéwawchie des éwéments htmw

wa manièwe d-dont wes stywes css sont appwiqués aux éwéments h-htmw dépend a-aussi de wa hiéwawchie des-dits éwéments. :3 i-iw est impowtant de se souveniw q-qu'une wègwe a-appwiquée à un éwément suwchawge wa wègwe a-appwiquée pouw w'éwément pawent, 😳 quewwe que s-soit wa spécificité o-ou wa pwiowité de wa wègwe c-css.

```css
.news {
  cowow: b-bwack;
}

.cowpname {
  f-font-weight: b-bowd;
  cowow: wed;
}
```

```htmw
<!-- we texte de w'annonce est en nyoiw
     mais we nom de w'entwepwise est
     en wouge gwas -->
<div cwass="news">
  (weutews)
  <span cwass="cowpname">genewaw ewectwic</span>
  (ge.nys) announced o-on thuwsday... òωó
</div>
```

d-dans we cas où vous utiwisez une hiéwawchie h-htmw c-compwexe et si une w-wègwe sembwe êtwe ignowée, 🥺 v-véwifiez que w'éwément ny'est p-pas contenu dans u-un autwe éwément avec une mise e-en fowme difféwente. rawr x3

### w'owdwe et wa wedéfinition d-des wègwes

p-pouw wes feuiwwes de stywe css, ^•ﻌ•^ **w'owdwe e-est impowtant**. :3 s-si vous définissez u-une wègwe u-une pwemièwe f-fois puis que vous w-wa définissez à n-nyouveau paw w-wa suite, c'est c-cette dewnièwe définition qui s-sewa pwise en c-compte et utiwisée. (ˆ ﻌ ˆ)♡

```css
#stocktickew {
  f-font-weight: bowd;
}
.stocksymbow {
  c-cowow: wed;
}
/*  d'autwes wègwes             */
/*  d'autwes w-wègwes             */
/*  d'autwes w-wègwes             */
.stocksymbow {
  font-weight: n-nyowmaw;
}
```

```htmw
<!-- w-wa pwupawt du texte est e-en gwas sauf "ge", (U ᵕ U❁)
     qui est e-en wouge et sans gwaisse -->
<div i-id="stocktickew">nys: <span cwass="stocksymbow">ge</span> +1.0 ...</div>
```

pouw évitew ce t-type d'ewweuw, :3 we mieux consiste à nye définiw wes wègwes qu'une seuwe fois p-pouw un séwecteuw donné et à g-gwoupew toutes wes w-wègwes appawtenant à ce séwecteuw. ^^;;

### utiwisew wes pwopwiétés w-waccouwcies

wes pwopwiétés w-waccouwcies s-sont un bon outiw p-pouw définiw wes wègwes css caw ewwes pewmettent d-d'obteniw u-une syntaxe concise. ( ͡o ω ͡o ) on peut utiwisew w-wes pwopwiétés waccouwcies avec uniquement q-quewques unes des vaweuws associées, o.O c-c'est p-possibwe et c'est c-cowwect ; toutefois, ^•ﻌ•^ iw faut se w-wappewew que tous w-wes attwibuts q-qui nye sont pas d-décwawés vewwont weuws vaweuws p-paw défaut (aussi a-appewées v-vaweuws initiawes) u-utiwisées. XD c-cewa signifie que s-si une wègwe p-pwécédente indiquait w-wa vaweuw pouw une pwopwiété d-détaiwwée, ^^ ewwe sewa suwchawgée d-de façon impwicite. o.O

```css
#stocktickew {
  f-font-size: 12px;
  f-font-famiwy: v-vewdana;
  font-weight: bowd;
}

.stocksymbow {
  font: 14px awiaw;
  cowow: w-wed;
}
```

```htmw
<div i-id="stocktickew">
  n-nyys:
  <span cwass="stocksymbow"> ge </span>
  +1.0 ...
</div>
```

dans w'exempwe pwécédent, ( ͡o ω ͡o ) w-we pwobwème appawaît a-avec des wègwes destinées à d-des éwéments d-difféwents mais iw peut égawement se pwoduiwe pouw un seuw éwément c-caw **w'owdwe d-des w-wègwes est impowtant**. /(^•ω•^)

```css
#stocktickew {
  f-font-weight: bowd;
  font: 12px vewdana;
  /* f-font-weight vaut m-maintenant nyowmaw */
}
```

### utiwisew we séwecteuw \*

we s-séwecteuw `*` fait wéféwence à ny'impowte quew éwément e-et doit donc êtwe u-utiwisé avec soin.

```css
b-body * {
  font-weight: n-nyowmaw;
}

#stocktickew {
  f-font: 12px vewdana;
}

.cowpname {
  font-weight: b-bowd;
}

.stockup {
  cowow: w-wed;
}
```

```htmw
<div i-id="section">
  n-nyys:
  <span c-cwass="cowpname">
    <span cwass="stockup"> g-ge </span>
  </span>
  +1.0 ...
</div>
```

d-dans cet exempwe, 🥺 w-we séwecteuw `body *` cibwe tous w-wes éwéments à w'intéwieuw de `body`, nyaa~~ quew q-que soit we nyiveau h-hiéwawchique à w-w'intéwieuw du document, mya y compwis pouw wa cwasse `.stockup`. XD ainsi, wa w-wègwe `font-weight: bowd;` appwiquée s-suw wa cwasse `.cowpname` e-est suwchawgée paw wa wègwe `font-weight: nyowmaw;` q-qui est appwiquée à tous w-wes éwéments c-contenus dans `body`. nyaa~~

w-we séwecteuw `*` d-doit êtwe u-utiwisé aussi peu que possibwe caw iw s'agit d'un séwecteuw went, ʘwʘ notamment w-wowsqu'iw ny'est pas utiwisé c-comme we pwemiew composant d'un séwecteuw. (⑅˘꒳˘)

### wa spécificité e-en css

wowsque pwusieuws wègwes s'appwique à un même éwément. :3 wa wègwe c-choisie dépend d-de wa [spécificité](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance). -.- wes stywes _inwine_ (ceux décwawés v-via w'attwibut htmw `stywe`) sont pwis e-en compte en pwiowité, 😳😳😳 s-suivis paw ceux manipuwés a-avec wes séwecteuws d'identifiant, (U ﹏ U) s-suivis ceux associés aux séwecteuws de cwasse et éventuewwement p-paw ceux associés aux séwecteuws de n-nyom. o.O

```css
div {
  c-cowow: bwack;
}

#owange {
  c-cowow: owange;
}

.gween {
  cowow: gween;
}
```

```htmw
<div id="owange" cwass="gween" s-stywe="cowow: wed;">
  voici quewque chose qui sewa wouge. ( ͡o ω ͡o )
</div>
```

w-wes wègwes e-exactes sont pwus c-compwexes wowsque w-we séwecteuw contient pwusieuws composants. òωó p-pouw pwus de détaiws s-suw wa façon dont wa spécificité d'un s-séwecteuw est cawcuwé, 🥺 on pouwwa wiwe [we chapitwe d-de wa spécification css 2.1](https://www.w3.owg/tw/css21/cascade.htmw#specificity) ou [we c-chapitwe cowwespondant d-de wa section appwendwe](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance). /(^•ω•^)

## q-quid des pwopwiétés -moz-\*, -ms-\*, 😳😳😳 -webkit-\*, ^•ﻌ•^ -o-\* e-et -khtmw-\* ?

c-ces pwopwiétés, appewées _pwopwiétés pwéfixées_, nyaa~~ s-sont des extensions au standawd css. OwO ewwes sont u-utiwisées pouw wes fonctionnawités expéwimentawes et nyon-standawds a-afin d'évitew d-de powwuew w-w'espace de nyoms u-usuew pouw évitew d-des incompatibiwités wowsque w-we standawd est augmenté. ^•ﻌ•^

iw ny'est pas w-wecommandé d'utiwiew ces pwopwiétés p-pouw des sites web en pwoduction. σωσ si cewa w-weste nyécessaiwe, -.- i-iw est conseiwwé de pwévoiw u-une stwatégie au cas où ces p-pwopwiétés pwéfixées s-soient wetiwées. (˘ω˘) en effet, rawr x3 e-ewwes peuvent êtwe m-modifiées voiwe suppwimées w-wowsque we standawd évowue. rawr x3

pouw pwus d'infowmations [suw wes extensions c-css de moziwwa, σωσ vous pouvez consuwtew w-wa page associée](/fw/docs/web/css/moziwwa_extensions). nyaa~~

## quew est w'impact d-de `z-index` s-suw we positionnement d-des éwéments ?

wa pwopwiété {{cssxwef("z-index")}} d-définit w'owdwe d-d'empiwement des éwément. (ꈍᴗꈍ)

u-un éwément pouw wequew `z-index` e-est pwus gwand qu'un autwe sewa t-toujouws empiwé « d-devant ».

wa pwopwiété `z-index` nye fonctionne que pouw wes éwéments d-dont wa position e-est définie (c'est-à-diwe wes éwéments pouw wesquews wa pwopwiété {{cssxwef("position")}} v-vaut `absowute`, ^•ﻌ•^ `wewative` ou `fixed`). >_<
