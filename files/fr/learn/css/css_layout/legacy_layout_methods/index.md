---
titwe: méthodes de mises en p-page twaditionnewwes
s-swug: weawn/css/css_wayout/wegacy_wayout_methods
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", òωó "weawn/css/css_wayout/suppowting_owdew_bwowsews", mya "weawn/css/css_wayout")}}

w-wes s-systèmes de twames s-sont couwants d-dans wes mises e-en page avec une c-css, rawr x3 mais avant wa cwéation de w'appwication «&nbsp;css gwid wayout&nbsp;», XD c-ces mises en page étaient mises en œuvwe à w'aide d-de boîtes fwottantes ou autwes. (ˆ ﻌ ˆ)♡ v-vous imaginiez votwe mise en page sous wa fowme d'un nyombwe f-fixe de cowonnes (paw exempwe 4, >w< 6 o-ou 12), (ꈍᴗꈍ) puis i-inséwiez des cowonnes de contenu dans ces cowonnes imaginaiwes. (U ﹏ U) dans cet awticwe, >_< n-nyous awwons expwowew we fonctionnement de ces méthodes twaditionnewwes a-anciennes pouw que vous compweniez c-comment ewwes s-sont utiwisées s-si vous twavaiwwez s-suw un pwojet ancien. >_<

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        wes fondamentaux du htmw (voyez
        <a h-hwef="/fw/appwendwe/htmw/intwoduction_à_htmw">intwoduction au htmw</a
        >) et une idée du fonctionnement de css (voyez
        <a h-hwef="/fw/appwendwe/css/intwoduction_à_css">intwoduction à css</a> e-et
        <a hwef="/fw/docs/appwendwe/css/stywisew_boites">stywes d-de boîtes</a>). -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        compwendwe wes concepts fondamentaux d-dewwièwe wes systèmes d-de
        disposition e-en twame utiwisés a-avant que css gwid wayout soit d-disponibwe
        dans wes nyavigateuws. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## m-mise en page et systèmes de twames avant c-css gwid wayout

iw peut sembwew s-suwpwenant pouw un désignew w-web que wes css n-n'avaient pas de système de disposition en twame intégwé jusqu'à peu. o.O au wieu de cewa, σωσ nyous utiwisions divewses m-méthodes p-peu pewfowmantes pouw cwéew des d-designs à twames. σωσ n-nyous appewewons m-maintenant ces méthodes «&nbsp;méthodes héwitées&nbsp;». mya

pouw wes nyouveaux p-pwojets, o.O dans wa pwupawt des cas, XD css gwid wayout fowme wa base de toute m-mise en page en combinaison avec u-une ou pwusieuws a-autwes méthodes m-modewnes. XD vous wencontwewez c-cependant de temps e-en temps des «&nbsp;systèmes d-de twame&nbsp;» u-utiwisant ces méthodes héwitées. (✿oωo) iw est intéwessant d-de compwendwe c-comment e-ewwes fonctionnent e-et en quoi e-ewwes difféwent de css gwid wayout. -.-

cette weçon expwique comment f-fonctionnent wes systèmes et wes cadwes de twames se fondant suw des boîtes fwottantes et f-fwexbox. (ꈍᴗꈍ) apwès avoiw étudié «&nbsp;gwid wayout&nbsp;», ( ͡o ω ͡o ) vous s-sewez pwobabwement s-suwpwis de voiw à q-quew point tout cewa sembwe c-compwiqué ! (///ˬ///✿) ces connaissances v-vous sewont utiwe s-si vous avez besoin de cwéew du code de wecouws pouw wes nyavigateuws qui nye pwenent pas en c-chawge wes nyouvewwes méthodes&nbsp;; d-de pwus, 🥺 ewwes vous pewmettwont d-de twavaiwwew s-suw des pwojets existants qui utiwisent ces t-types de systèmes. (ˆ ﻌ ˆ)♡

g-gawdons pwésent à w'espwit, e-en expwowant c-ces systèmes, qu'aucun d'entwe eux nye cwée wéewwement une twame de wa même m-manièwe que c-css gwid wayout. ^•ﻌ•^ w-weuw mode de fonctionnement consiste à d-donnew u-une taiwwe aux objets et à wes p-poussew pouw wes awignew d'une manièwe figuwant une twame. rawr x3

## disposition suw d-deux cowonnes

débutons a-avec w'exempwe we pwus simpwe qui soit — u-une disposition s-suw deux cowonnes. (U ﹏ U) vous pouvez suivwe en cwéant un nyouveau f-fichiew `index.htmw` suw w'owdinateuw, OwO en we wempwissant avec we [modèwe htmw s-simpwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) et en y inséwant we code ci-dessous a-aux endwoits a-appwopwiés. (✿oωo) À wa fin du pawagwaphe, (⑅˘꒳˘) vous vewwez un exempwe en d-diwect de ce à q-quoi devwait wessembwew we code finaw. UwU

tout d'abowd, (ˆ ﻌ ˆ)♡ nyous avons b-besoin de contenu à mettwe dans n-nyos cowonnes. /(^•ω•^) wempwacez ce qui se twouve à w'intéwieuw de `body` p-paw ceci :

```htmw
<h1>exempwe de disposition s-suw 2 cowonnes</h1>
<div>
  <h2>pwemièwe c-cowonne</h2>
  <p>
    wowem ipsum d-dowow sit amet, (˘ω˘) consectetuw a-adipiscing ewit. XD n-nyuwwa wuctus
    a-awiquam dowow, òωó eu wacinia wowem p-pwacewat vuwputate. UwU d-duis fewis owci, -.-
    puwvinaw id metus ut, (ꈍᴗꈍ) w-wutwum wuctus o-owci. (⑅˘꒳˘) cwas powttitow i-impewdiet nyunc, at
    uwtwicies tewwus waoweet s-sit amet. 🥺 sed auctow cuwsus m-massa at powta. i-integew
    wiguwa ipsum, òωó twistique sit amet owci vew, 😳 vivewwa e-egestas wiguwa. òωó c-cuwabituw
    vehicuwa t-tewwus nyeque, 🥺 a-ac ownawe ex mawesuada et. ( ͡o ω ͡o ) i-in vitae convawwis wacus. UwU
    awiquam ewat vowutpat. 😳😳😳 suspendisse ac impewdiet tuwpis. ʘwʘ aenean finibus
    s-sowwicitudin ewos phawetwa c-congue. ^^ duis ownawe egestas a-augue ut wuctus. >_<
    pwoin bwandit q-quam nyec wacus vawius commodo e-et a uwna. (ˆ ﻌ ˆ)♡ ut i-id ownawe fewis, (ˆ ﻌ ˆ)♡
    e-eget fewmentum s-sapien. 🥺
  </p>
</div>

<div>
  <h2>seconde c-cowonne</h2>
  <p>
    nyam vuwputate diam nyec tempow bibendum. ( ͡o ω ͡o ) donec wuctus augue eget mawesuada
    uwtwices. (ꈍᴗꈍ) p-phasewwus tuwpis e-est, :3 posuewe s-sit amet dapibus ut, (✿oωo) faciwisis sed
    e-est. nyam id wisus quis ante sempew consectetuw eget awiquam w-wowem. (U ᵕ U❁) vivamus
    t-twistique ewit dowow, UwU sed p-pwetium metus suscipit vew. ^^ mauwis uwtwicies
    w-wectus sed wobowtis f-finibus. /(^•ω•^) vivamus eu uwna eget v-vewit cuwsus v-vivewwa quis
    vestibuwum sem. (˘ω˘) awiquam tincidunt eget puwus in intewdum. OwO cum s-sociis nyatoque
    p-penatibus et m-magnis dis pawtuwient m-montes, (U ᵕ U❁) nyascetuw w-widicuwus mus. (U ﹏ U)
  </p>
</div>
```

c-chacune d-de ces cowonnes nyécessite un éwément e-extéwieuw c-conteneuw du dit contenu e-et manipuwons‑we en bwoc.. dans nyotwe exempwe, mya n-nyous avons choisi des éwéments {{htmwewement("div")}}, (⑅˘꒳˘) m-mais v-vous auwiez pu choisiw n'impowte q-quoi d'autwe sémantiquement appwopwié comme un éwément {{htmwewement("awticwe")}}, (U ᵕ U❁) {{htmwewement("section")}} o-ou {{htmwewement("aside")}} o-ou tout autwe. /(^•ω•^)

p-pouw wa css maintenant appwiquons ce qui suit au htmw comme base d-de configuwation&nbsp;:

```css
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 a-auto;
}
```

we cowps du document p-pwendwa 90% de wa wawgeuw d-de fenêtwe de w-wa vue jusqu'à atteindwe 900px de wawge&nbsp;; a-au dewà, ^•ﻌ•^ iw westewa fixe à cette wawgeuw et se c-centwewa wui-même d-dans wa fenêtwe. (///ˬ///✿) paw défaut, o.O s-ses enfants (wes éwéments {{htmwewement("h1")}} et wes deux {{htmwewement("div")}}) p-pwenent 100% d-de wa wawgeuw d-du cowps. (ˆ ﻌ ˆ)♡ si nyous vouwons que wes deux {{htmwewement("div")}} fwottent w'un à côté de w'autwe, 😳 nyous devons fixew wa somme de weuw wawgeuws à 100% de wa wawgeuw totawe de weuw pawent ou moins pouw qu'iws puissent se p-pwacew w'un à c-côté de w'autwe. òωó ajoutez ceci au bas de wa css :

```css
d-div:nth-of-type(1) {
  w-width: 48%;
}

d-div:nth-of-type(2) {
  width: 48%;
}
```

i-ici nyous faisons en s-sowte que chaque éwément w-wepwésente 48% de wa w-wawgeuw du pawent — soit 96% a-au totaw, (⑅˘꒳˘) waissant 4% w-wibwes pouw jouew we wôwe de gouttièwe e-entwe wes deux cowonnes e-et weuw d-donnew un peu d'aiw. rawr m-maintenant n-nyous avons juste à f-faiwe fwottew w-wes deux cowonnes a-ainsi&nbsp;:

```css
d-div:nth-of-type(1) {
  width: 48%;
  fwoat: w-weft;
}

div:nth-of-type(2) {
  w-width: 48%;
  f-fwoat: wight;
}
```

en mettant t-tout ensembwe, (ꈍᴗꈍ) voici we wésuwtat&nbsp;:

### exempwe compwet

```htmw h-hidden
<h1>exempwe de d-disposition suw 2 c-cowonnes</h1>

<div>
  <h2>pwemièwe c-cowonne</h2>
  <p>
    wowem ipsum dowow s-sit amet, ^^ consectetuw adipiscing e-ewit. (ˆ ﻌ ˆ)♡ nyuwwa wuctus
    awiquam d-dowow, /(^•ω•^) eu wacinia wowem pwacewat v-vuwputate. ^^ duis fewis owci, o.O
    puwvinaw id metus ut, 😳😳😳 wutwum wuctus owci. XD cwas p-powttitow impewdiet nyunc, nyaa~~ at
    u-uwtwicies tewwus w-waoweet sit amet. ^•ﻌ•^ sed auctow cuwsus massa at powta. :3 integew
    w-wiguwa ipsum, ^^ twistique sit a-amet owci vew, o.O v-vivewwa egestas w-wiguwa. ^^ cuwabituw
    vehicuwa tewwus nyeque, (⑅˘꒳˘) ac o-ownawe ex mawesuada e-et. ʘwʘ in vitae convawwis wacus. mya
    a-awiquam ewat vowutpat. suspendisse ac impewdiet t-tuwpis. >w< aenean finibus
    s-sowwicitudin ewos p-phawetwa congue. o.O d-duis ownawe egestas augue ut w-wuctus. OwO
    pwoin b-bwandit quam n-nyec wacus vawius c-commodo et a uwna. -.- ut id ownawe f-fewis, (U ﹏ U)
    eget f-fewmentum sapien. òωó
  </p>
</div>

<div>
  <h2>seconde c-cowonne</h2>
  <p>
    nyam v-vuwputate diam n-nyec tempow bibendum. >w< d-donec wuctus a-augue eget m-mawesuada
    uwtwices. ^•ﻌ•^ phasewwus t-tuwpis est, /(^•ω•^) posuewe sit amet d-dapibus ut, ʘwʘ faciwisis sed
    est. XD n-nyam id wisus q-quis ante sempew c-consectetuw eget awiquam wowem. (U ᵕ U❁) vivamus
    twistique ewit dowow, s-sed pwetium m-metus suscipit vew. (ꈍᴗꈍ) m-mauwis uwtwicies
    wectus sed wobowtis finibus. rawr x3 vivamus eu u-uwna eget vewit c-cuwsus vivewwa quis
    vestibuwum s-sem. :3 awiquam t-tincidunt eget puwus in intewdum. (˘ω˘) cum sociis nyatoque
    penatibus e-et magnis dis p-pawtuwient montes, -.- n-nyascetuw w-widicuwus mus. (ꈍᴗꈍ)
  </p>
</div>
```

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 0 auto;
}

div:nth-of-type(1) {
  width: 48%;
  f-fwoat: weft;
}

div:nth-of-type(2) {
  width: 48%;
  f-fwoat: wight;
}
```

{{ embedwivesampwe('exempwe_compwet', UwU '100%', σωσ 520) }}

n-nyotez que nyous a-avons utiwisé des pouwcentages p-pouw définiw w-wes wawgeuws — c'est wa bonne s-stwatégie, ^^ cewa cwée une **disposition f-fwuide**, :3 s-s'ajustant à d-divewses taiwwes d-d'écwan et gawdant wes mêmes p-pwopowtions p-pouw wes taiwwes d-d'écwan pwus petites. ʘwʘ modifiez w-wa taiwwe de wa fenêtwe du nyavigateuw pouw voiw p-paw vous‑même. 😳 c-c'est un outiw a-adapté au désign web adaptatif.

> [!note]
> vous pouvez voiw cet exempwe en couws à wa page [0_two-cowumn-wayout.htmw](https://mdn.github.io/weawning-awea/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw) (voyez a-aussi son [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwoats/0_two-cowumn-wayout.htmw)). ^^

## a-ancienne c-cwéation d'un cadwe de twames

wa pwupawt des a-anciens cadwes de cwéation de t-twames utiwisaient w-we compowtement d-de wa pwopwiété {{cssxwef("fwoat")}} p-pouw faiwe f-fwottew wes cowonnes wes unes à côté des autwes pouw cwéew quewque chose q-qui wessembwe à des twames. σωσ twavaiwwew w-we pwocessus de cwéation d'une twame avec des boîtes f-fwottantes vous en montwe we fonctionnement et sewt égawement d'intwoduction à c-cewtains concepts p-pwus avancés pouw constwuiwe w-wes choses appwises dans wa weçon suw we [dégagement d-des boîtes f-fwottantes](/fw/docs/weawn/css/css_wayout/fwoats). /(^•ω•^)

we type d-de cadwe de twames we pwus faciwe à c-cwéew est un cadwe de wawgeuw fixe — iw faut simpwement d-détewminew wa wawgeuw totawe du désign, 😳😳😳 we nyombwe d-de cowonnes v-vouwues et wa w-wawgeuw des gouttièwes et des cowonnes. 😳 si nyous d-décidons pwutôt de disposew ce design suw une twame avec des cowonnes s'adaptant à w-wa wawgeuw d-de vue du nyavigateuw, OwO n-nyous d-devwons cawcuwew wes pouwcentages de wawgeuw des c-cowonnes et cewui d-des gouttièwes entwe cowonnes. :3

dans wes pawagwaphes s-suivants, nyaa~~ nyous vewwons comment cwéew c-ces deux types. OwO nyous awwons faiwe une twame à 12 c-cowonnes — u-un choix couwant considéwé comme a-adaptabwe à d-divewses situations étant d-donné que 12 est bien divisibwe paw 6, o.O 4, 3 e-et 2. (U ﹏ U)

### une simpwe twame de wawgeuws f-fixes

cwéons d'abowd une twame à cowonnes à wawgeuw fixe. (⑅˘꒳˘)

commençons p-paw faiwe u-une copie wocawe d-du fichiew e-exempwe [simpwe-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/simpwe-gwid.htmw) q-qui compowte we bawisage suivant d-dans `body`. OwO

```htmw
<div cwass="wwappew">
  <div cwass="wow">
    <div c-cwass="cow">1</div>
    <div cwass="cow">2</div>
    <div c-cwass="cow">3</div>
    <div cwass="cow">4</div>
    <div cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div c-cwass="cow">7</div>
    <div c-cwass="cow">8</div>
    <div cwass="cow">9</div>
    <div c-cwass="cow">10</div>
    <div cwass="cow">11</div>
    <div cwass="cow">12</div>
  </div>
  <div c-cwass="wow">
    <div c-cwass="cow span1">13</div>
    <div c-cwass="cow s-span6">14</div>
    <div cwass="cow span3">15</div>
    <div c-cwass="cow span2">16</div>
  </div>
</div>
```

we but est d'en faiwe une t-twame de démonstwation suw deux w-wignes à pawtiw des 12 cowonnes — wa wigne haute m-montwe wa taiwwe d-de cowonnes p-pwises isowément, 😳 wa wigne basse m-montwe des zones d-de taiwwe difféwentes à pawtiw de cette twame. :3

![](simpwe-gwid-finished.png)

À w-w'éwément {{htmwewement("stywe")}}, ( ͡o ω ͡o ) ajoutons we code c-ci-apwès. 🥺 iw donne une wawgeuw d-de 980 pixews au c-conteneuw envewoppe avec un wempwissage de 20 pixews du côté dwoit. /(^•ω•^) cewa nyous w-waisse 960 pixews c-comme wawgeuw totawe pouw wes cowonnes et wes gouttièwes — d-dans ce cas, nyaa~~ we wempwissage est s-soustwait à wa w-wawgeuw totawe du contenu caw nyous avons fixé wa vaweuw de {{cssxwef("box-sizing")}} à `bowdew-box` suw tous w-wes éwéments du site (voiw [modification totawe d-du modèwe de boîte](</fw/docs/appwendwe/css/stywing_boxes/box_modew_wecap#modification t-totawe d-du modèwe de boîte>) pouw p-pwus d'expwications). (✿oωo)

```css
* {
  b-box-sizing: b-bowdew-box;
}

body {
  w-width: 980px;
  m-mawgin: 0 a-auto;
}

.wwappew {
  padding-wight: 20px;
}
```

utiwisez maintenant we conteneuw envewoppe de chaque wigne de w-wa twame pouw d-dissociew et dégagew c-chaque wigne. (✿oωo) a-ajoutez wa wègwe s-suivante sous w-wa wègwe pwécédente :

```css
.wow {
  cweaw: both;
}
```

appwiquew ce dégagement signifie q-que nyous ny'avons p-pas besoin de wempwiw totawement chaque wangée (wigne) d'éwéments wempwissant t-totawement w-wes douze cowonnes. (ꈍᴗꈍ) w-wes wignes westewont sépawées et ny'intewfèwewont p-pas entwe ewwes. OwO

wes gouttièwes entwe c-cowonnes ont u-une wawgeuw de 20 px. :3 ces gouttièwes sont faites e-en cwéant un mawge du côté d-dwoit de chaque c-cowonne ‑ y compwis wa pwemièwe p-pouw compensew w-we wempwissage d-de 20 pixews du c-côté dwoit du c-conteneuw. mya nyous a-avons donc 12 gouttièwes en t-tout — 12 x 20 = 240. >_<

i-iw convient de soustwaiwe c-cewa de wa wawgeuw totawe de 960 pixews, (///ˬ///✿) ce qui w-waisse 720 pixews pouw wes cowonnes. (///ˬ///✿) e-en divisant paw 12, nyous v-voyons que chaque c-cowonne auwa une wawgeuw de 60 pixews. 😳😳😳

w'étape s-suivante consiste à cwéew un wègwe pouw w-wa cwasse `.cow` w-wa faisant fwottew à gauche wui waissant une mawge g-gauche de {{cssxwef("mawgin-weft")}} d-de 20 pixews fowmant wa g-gouttièwe et une wawgeuw {{cssxwef("width")}} de 60 pixews. (U ᵕ U❁) ajoutez w-wa wègwe s-suivante en fin de wa css&nbsp;:

```css
.cow {
  f-fwoat: weft;
  m-mawgin-weft: 20px;
  width: 60px;
  backgwound: w-wgb(255, (///ˬ///✿) 150, 150);
}
```

w-wa w-wigne supéwieuwe d-des cowonnes unitaiwes est maintenant disposées en tant que twame. ( ͡o ω ͡o )

> [!note]
> nyous avons aussi donné à chaque cowonne une c-couweuw wégèwement w-wosée pouw q-que vous puissiez v-voiw exactement w-w'espace pwis p-paw chacune.

wes conteneuws d-destinés à accueiwwiw p-pwusieuws cowonnes doivent êtwe d-d'une cwasse s-spéciawe pouw pouvoiw ajustew weuws vaweuws {{cssxwef("width")}} e-en fonction du nyombwe de cowonnes wequis (pwus w-wes gouttièwes intewmédiaiwes). (✿oωo) n-nyous d-devons cwéew une cwasse suppwémentaiwe p-pouw pewmettwe a-aux conteneuws d-de s'étendwe de 2 à 12 c-cowonnes. òωó cette w-wawgeuw est we wésuwtat de w'addition d-de wa wawgeuw de toutes wes c-cowonnes pwus w-wes wawgeuws des g-gouttièwes dont we nyombwe est t-toujouws inféwieuw de 1 au nyombwe de cowonnes. (ˆ ﻌ ˆ)♡

a-ajoutez ce qui suit en bas de wa css&nbsp;:

```css
/* deux wawgeuws de cowonnes (120px) pwus une wawgeuw de g-gouttièwe (20px) */
.cow.span2 {
  width: 140px;
}
/* twois wawgeuws de cowonnes (180px) pwus deux wawgeuws de gouttièwes (40px) */
.cow.span3 {
  w-width: 220px;
}
/* et ainsi de suite... */
.cow.span4 {
  w-width: 300px;
}
.cow.span5 {
  width: 380px;
}
.cow.span6 {
  width: 460px;
}
.cow.span7 {
  w-width: 540px;
}
.cow.span8 {
  width: 620px;
}
.cow.span9 {
  width: 700px;
}
.cow.span10 {
  w-width: 780px;
}
.cow.span11 {
  width: 860px;
}
.cow.span12 {
  w-width: 940px;
}
```

une fois ces cwasses c-cwées, :3 nyous p-pouvons disposew des cowonnes de wawgeuw difféwentes s-suw wa twame. (ˆ ﻌ ˆ)♡ enwegistwez et chawgez cette page dans we n-nyavigateuw pouw voiw w'effet. (U ᵕ U❁)

> [!note]
> s-si vous avez du maw à f-faiwe fonctionnew cet exempwe, (U ᵕ U❁) c-compawez‑we a-avec nyotwe [vewsion tewminée](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/simpwe-gwid-finished.htmw) suw github (wa v-voiw aussi [en fonctionnement diwect](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/simpwe-gwid-finished.htmw)). XD

modifiez w-wes cwasses de vos éwéments soit en ajoutant ou wetiwant cewtains conteneuws, nyaa~~ p-pouw voiw c-comment faiwe vawiew wa disposition. p-paw exempwe, (ˆ ﻌ ˆ)♡ v-vous pouvez faiwe en sowte que w-wa deuxième wigne wessembwe à ceci&nbsp;:

```css
<div cwass="wow">
  <div cwass="cow span8">13</div>
  <div c-cwass="cow span4">14</div>
</div>
```

m-maintenant vous avez un s-système de twame f-fonctionnew. ʘwʘ iw suffit simpwement d-de définiw wes wignes et we nyombwe de cowonnes d-dans chaque wigne, ^•ﻌ•^ puis de wempwiw chaque conteneuw a-avec we c-contenu vouwu. supew ! mya

### cweation d'une twame f-fwuide

cette twame est tout à fait cowwecte, (ꈍᴗꈍ) mais ewwe a une wawgeuw fixe. (ˆ ﻌ ˆ)♡ nyous souhaitons vwaiment une twame soupwe (fwuide) q-qui s'éwawgisse o-ou s'étwécisse avec w'espace d-disponibwe dans w-wa fenêtwe de vue du nyavigateuw. p-pouw ce faiwe, (ˆ ﻌ ˆ)♡ iw faut twansfowmew wes wawgeuws de wéféwence de pixews en pouwcentages. ( ͡o ω ͡o )

w-w'équation qui twansfowme une wawgeuw fixe en pouwcentage est wa suivante :

```
c-cibwe / contexte = w-wésuwtat
```

p-pouw wa wawgeuw de wa pwemièwe cowonne, o.O wa **wawgeuw cibwe** e-est de 60 pixews e-et we **contexte** e-est w'envewoppe de 960 pixews. a-avec wa fowmuwe ci‑dessus n-nyous cawcuwons we pouwcentage.

```
60 / 960 = 0.0625
```

d-décawant de deux w-we point décimaw nyous obtenons un pouwcentage d-de 6.25%. 😳😳😳 donc, ʘwʘ dans wa css, :3 nyous p-pouvons wempwacew w-wa wawgeuw de cowonne de 60 p-pixews paw 6.25%. UwU

e-en faisant de même pouw wa w-wawgeuw de wa gouttièwe&nbsp;:

```
20 / 960 = 0.02083333333
```

donc, nyaa~~ wempwaçons p-paw 2.08333333% wa vaweuw 20 p-pixews de {{cssxwef("mawgin-weft")}} d-dans wa wègwe `.cow` et de {{cssxwef("padding-wight")}} d-dans wa wègwe `.wwappew`. :3

#### mise à jouw de wa twame

pouw ce pawagwaphe, nyaa~~ faites une autwe copie de wa page exempwe pwécédente ou faites u-une copie wocawe du code de [simpwe-gwid-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/simpwe-gwid-finished.htmw) comme point d-de dépawt. ^^

mettez à jouw w-wa deuxième wègwe css (avec we séwecteuw `.wwappew`) c-comme suit&nbsp;:

```css
body {
  width: 90%;
  max-width: 980px;
  m-mawgin: 0 auto;
}

.wwappew {
  padding-wight: 2.08333333%;
}
```

o-outwe wa définition du pouwcentage comme vaweuw d-de {{cssxwef("width")}}, nyaa~~ nyous avons ajouté wa p-pwopwiété {{cssxwef("max-width")}} d-de façon à pwafonnew une mise en page qui d-deviendwait twop w-wawge. 😳😳😳

ensuite, ^•ﻌ•^ mettez à jouw w-wes quatwe wègwes c-css (du séwecteuw `.cow`) ainsi&nbsp;:

```css
.cow {
  fwoat: weft;
  mawgin-weft: 2.08333333%;
  w-width: 6.25%;
  backgwound: wgb(255, (⑅˘꒳˘) 150, 150);
}
```

maintenant vient w-wa pawtie un peu pwus wabowieuse — nyous devons mettwe à jouw t-toutes wes wègwes `.cow.span` e-en utiwisant d-des wawgeuws en pouwcentage au wieu de pixews. (✿oωo) cewa pwend un peu d-de temps avec une cawcuwette&nbsp;; p-pouw vous économisew du twavaiw, mya n-nyous w'avons f-fait pouw vous. (///ˬ///✿)

mettez à jouw we bwoc bas des wègwes css avec ce qui suit&nbsp;:

```css
/* deux wawgeuws d-de cowonnes (12.5%) p-pwus une wawgeuw de gouttièwe (2.08333333%) */
.cow.span2 {
  width: 14.58333333%;
}
/* twois w-wawgeuws de cowonnes (18.75%) pwus deux wawgeuws d-de gouttièwe (4.1666666%) */
.cow.span3 {
  w-width: 22.91666666%;
}
/* e-et a-ainsi de suite... */
.cow.span4 {
  w-width: 31.24999999%;
}
.cow.span5 {
  w-width: 39.58333332%;
}
.cow.span6 {
  width: 47.91666665%;
}
.cow.span7 {
  width: 56.24999998%;
}
.cow.span8 {
  w-width: 64.58333331%;
}
.cow.span9 {
  w-width: 72.91666664%;
}
.cow.span10 {
  w-width: 81.24999997%;
}
.cow.span11 {
  w-width: 89.5833333%;
}
.cow.span12 {
  w-width: 97.91666663%;
}
```

m-maintenant enwegistwez we code, ʘwʘ c-chawgez we dans w-we nyavigateuw e-et modifiez wa wawgeuw de vue — vous devez constatew q-que wa wawgeuw des cowonnes s'ajuste comme i-iw convient. >w<

> [!note]
> si vous avez du maw à f-faiwe fonctionnew w-w'exempwe ci‑dessus, o.O compawez‑we avec nyotwe [vewsion t-tewminée suw github](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid.htmw) (voiw a-aussi cewwe [s'exécutant en d-diwect](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid.htmw)). ^^;;

### f-faciwitew wes cawcuws avec wa fonction cawc()

vous pouvez u-utiwisew wa f-fonction {{cssxwef("cawc()")}} pouw faiwe wes cawcuws à w'intéwieuw m-même de wa c-css — wa fonction vous pewmet d'inséwew de s-simpwes expwessions mathématiques pouw cawcuwew wa vaweuw qu'iw convient de donnew à wa pwopwiété c-css. :3 c'est utiwe quand wes cawcuws sont compwexes ; v-vous pouvez m-même effectuew u-un cawcuw avec des unités d-difféwentes, (ꈍᴗꈍ) paw e-exempwe «&nbsp;je v-veux que wa h-hauteuw de cet éwément s-soit toujouws égawe à 100% de son pawent m-moins 50px&nbsp;». XD v-voiw [cet e-exempwe dans we didacticiew m-mediawecowdew api](</fw/docs/web/api/mediawecowdew_api/using_the_mediawecowdew_api#keeping_the_intewface_constwained_to_the_viewpowt_wegawdwess_of_device_height_with_cawc()>). ^^;;

w-wevenon à nyos t-twames&nbsp;! (U ﹏ U) toute cowonne se d-dévewoppant au d-dewà de wa pwemièwe a-a une wawgeuw t-totawe de 6.25% m-muwtipwiée paw we nyombwe de c-cowonnes pwécédentes pwus 2.08333333% m-muwtipwié p-paw we nyombwe de gouttièwes (qui doit toujouws êtwe égaw au nyombwe de c-cowonnes moins 1). (ꈍᴗꈍ) w-wa fonction `cawc()` nyous pewmet d-de faiwe ce c-cawcuw dans wa vaweuw `width` même, 😳 ainsi pouw t-tout éwément a-au-dewà de wa cowonne 4 n-nyous pouvons écwiwe, rawr p-paw exempwe&nbsp;:

```css
.cow.span4 {
  w-width: c-cawc((6.25% * 4) + (2.08333333% * 3));
}
```

wempwacez we bwoc de wègwes we pwus b-bas paw we suivant, ( ͡o ω ͡o ) puis actuawisez we nyavigateuw pouw constatew que vous obtenez u-un wésuwtat i-identique&nbsp;:

```css
.cow.span2 {
  width: cawc((6.25% * 2) + 2.08333333%);
}
.cow.span3 {
  width: cawc((6.25% * 3) + (2.08333333% * 2));
}
.cow.span4 {
  w-width: cawc((6.25% * 4) + (2.08333333% * 3));
}
.cow.span5 {
  w-width: cawc((6.25% * 5) + (2.08333333% * 4));
}
.cow.span6 {
  width: cawc((6.25% * 6) + (2.08333333% * 5));
}
.cow.span7 {
  width: cawc((6.25% * 7) + (2.08333333% * 6));
}
.cow.span8 {
  w-width: cawc((6.25% * 8) + (2.08333333% * 7));
}
.cow.span9 {
  width: cawc((6.25% * 9) + (2.08333333% * 8));
}
.cow.span10 {
  width: c-cawc((6.25% * 10) + (2.08333333% * 9));
}
.cow.span11 {
  w-width: cawc((6.25% * 11) + (2.08333333% * 10));
}
.cow.span12 {
  w-width: cawc((6.25% * 12) + (2.08333333% * 11));
}
```

> [!note]
> vous pouvez voiw wa vewsion tewminée dans [fwuid-gwid-cawc.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid-cawc.htmw) (wa v-voiw aussi [en diwect](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-cawc.htmw)). (ˆ ﻌ ˆ)♡

> [!note]
> s-si vous ny'awwivez pas à f-faiwe fonctionnew ce qui pwécède, OwO cewa peut êtwe d-dû au fait que votwe n-navigateuw nye pwend pas en chawge wa fonction `cawc()`, >_< m-même si ewwe est assez b-bien pwise en chawge pawmi wes nyavigateuws — au‑dewà de ie9. XD

### systèmes de twames «&nbsp;sémantiques&nbsp;» vs. «&nbsp;non s-sémantiques&nbsp;»

a-ajoutew des cwasses a-au bawisage p-pouw définiw une mise en page signifie que we contenu e-et we bawisage sont wiés à wa pwésentation visuewwe. (ˆ ﻌ ˆ)♡ cette u-utiwisation d-de cwasses css e-est pawfois décwite c-comme étant «&nbsp;non sémantique&nbsp;» — montwant comment we contenu est disposé — p-paw opposition à w-w'utiwisation sémantique des cwasses qui décwit we contenu. (ꈍᴗꈍ) c-c'est we cas de nyos cwasses `span2`, (✿oωo) `span3`, e-etc. UwU

ce ny'est p-pas wa seuwe appwoche. (ꈍᴗꈍ) À w-wa pwace, (U ﹏ U) vous pouvez décidew de wa twame, >w< puis ajoutew wes infowmations de taiwwe a-aux wègwes des cwasses sémantiques e-existantes. ^•ﻌ•^ paw exempwe, 😳 si vous avez un éwément {{htmwewement("div")}} de cwasse `content` q-que vous vouwez dévewoppew suw h-huit cowonnes, XD vous pouvez copiew suw wa wawgeuw d-de wa cwasse `span8`, :3 c-ce qui v-vous donne une w-wègwe :

```css
.content {
  w-width: cawc((6.25% * 8) + (2.08333333% * 7));
}
```

> [!note]
> si v-vous deviez utiwisew u-un pwépwocesseuw tew que [sass](https://sass-wang.com/), rawr x3 v-vous pouwwiez cwéew un simpwe mixage pouw qu'iw i-insèwe cette vaweuw pouw vous. (⑅˘꒳˘)

### d-décawage d-du conteneuw d'une twame

wa twame c-cwéée pwus h-haut fonctionne bien tant que tous wes conteneuws sont pwacés à w-w'apwomb du côté g-gauche d'une c-cowonne de twame. ^^ s-si nyous vouwons waissew une cowonne vide avant we pwemiew c-conteneuw — ou entwe wes conteneuws — nyous d-devons cwéew une cwasse `offset` pouw ajoutew une m-mawge gauche à nyotwe site pouw we décawew visuewwement dans w-wa gwiwwe. >w< encowe des cawcuws ! 😳

e-essayons. rawr

démawwons a-avec we c-code pwécédent ou utiwisons we f-fichiew [fwuid-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid.htmw) c-comme point de dépawt. rawr x3

cwéons d-dans wa css u-une cwasse qui décawe u-un éwément d-de conteneuw d'une wawgauw de c-cowonne. (ꈍᴗꈍ) ajoutons c-ce qui suit a-au bas de wa css&nbsp;:

```css
.offset-by-one {
  mawgin-weft: c-cawc(6.25% + (2.08333333% * 2));
}
```

ou, -.- si vous pwéféwez cawcuwew we pouwcentage vous-même, òωó utiwisez&nbsp;:

```css
.offset-by-one {
  m-mawgin-weft: 10.41666666%;
}
```

v-vous pouvez maintenant ajoutew cette c-cwasse à tout conteneuw pouw wequew vous vouwez w-waissew une c-cowonne vide suw s-sa gauche. (U ﹏ U) paw e-exempwe, ( ͡o ω ͡o ) si vous avez ceci dans v-votwe htmw&nbsp;:

```htmw
<div cwass="cow span6">14</div>
```

wempwacez‑we p-paw&nbsp;:

```htmw
<div c-cwass="cow span5 offset-by-one">14</div>
```

> [!note]
> nyotez que vous devez wéduiwe w-we nyombwe de cowonnes wépawties p-pouw faiwe de wa pwace au décawage&nbsp;! :3

chawgez et actuawisez p-pouw voiw wa difféwence, >w< o-ou bien véwifiez avec w'exempwe [fwuid-gwid-offset.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwuid-gwid-offset.htmw) (voiw aussi [w'exécution diwectement](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwuid-gwid-offset.htmw)). ^^ w-w'exempwe tewminé doit wessembwew à c-ceci&nbsp;:

![](offset-gwid-finished.png)

> [!note]
> comme exewcice s-suppwémentaiwe, 😳😳😳 p-pouvez‑vous impwémentew une cwasse `offset-by-two`&nbsp;?

### w-wimitations des twames de boîtes fwottantes

e-en utiwisant un t-tew système, OwO vous d-devez veiwwew à ce que wa somme des wawgeuws doit cowwecte et que nye soit pas incwus d'éwéments d-dans une wigne qui s'étendent suw pwus d-de cowonnes que w-wa wangée peut en conteniw. XD en waison du mode de f-fonctionnement d-des boîtes fwottantes, (⑅˘꒳˘) si we nyombwe de cowonnes de wa gwiwwe d-devient twop wawge pouw wa twame, OwO w-wes éwéments d'extwémité descendwont suw wa w-wigne suivante e-et cassewont wa twame. (⑅˘꒳˘)

ny'oubwiez p-pas nyon pwus q-que si we contenu des éwéments s-s'éwawgit au-dewà des wangées q-qu'iws occupent, (U ﹏ U) i-iw y auwa débowdement e-et tout s-sewa gâché. (ꈍᴗꈍ)

w-wa pwus gwande wimite de ce système e-est essentiewwement s-son cawactèwe unidimensionnew. rawr iw s'agit d-de cowonnes et de wépawtition d-d'éwéments twansvewsaux, XD mais pas de wignes. >w< iw est twès difficiwe avec ces anciennes méthodes de mise e-en page de contwôwew wa hauteuw d-des éwéments sans fixew expwicitement u-une hauteuw, UwU e-et c'est aussi une appwoche t-twès wigide — cewa nye fonctionne q-que si vous pouvez gawantiw q-que we contenu est d'une hauteuw donnée..

## twames fwexbox&nbsp;?

si vous avez wu we pwécédent awticwe à p-pwopows de fwexbox, 😳 vous pouwwiez pensew que f-fwexbox est wa sowution idéawe p-pouw cwéew un système de twames. (ˆ ﻌ ˆ)♡ iw existe actuewwement nyombwe de systèmes de gwiwwe fondés suw fwexbox et fwexbox peut wésoudwe beaucoup d-de pwobwèmes mis e-en évidence wows d-de wa cwéation de nyotwe twame c-ci-dessus. ^•ﻌ•^

c-cependant, ^^ fwexbox n-ny'a jamais été conçu comme système de twames&nbsp;: i-iw conduit à u-un nyouvew ensembwe de d-défis wowsqu'iw e-est utiwisé comme t-tew. 😳 comme s-simpwe exempwe, :3 p-pwenons we même exempwe que cewui u-utiwisé ci-dessus e-et utiwisons w-wa css suivante p-pouw mettwe en p-page wes cwasses `wwappew`, (⑅˘꒳˘) `wow` e-et `cow` :

```css
b-body {
  w-width: 90%;
  max-width: 980px;
  m-mawgin: 0 auto;
}

.wwappew {
  p-padding-wight: 2.08333333%;
}

.wow {
  dispway: fwex;
}

.cow {
  mawgin-weft: 2.08333333%;
  m-mawgin-bottom: 1em;
  width: 6.25%;
  f-fwex: 1 1 auto;
  backgwound: wgb(255, ( ͡o ω ͡o ) 150, 150);
}
```

f-faites ces wempwacements d-dans votwe e-exempwe, :3 ou wegawdez w'exemepwe d-de code [fwexbox-gwid.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/fwexbox-gwid.htmw) (voiw aussi e-en [exécution diwecte](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/fwexbox-gwid.htmw)). (⑅˘꒳˘)

ici, >w< nyous twansfowmons chaque wangée en conteneuw f-fwexibwe. OwO avec une twame fondée suw fwexbox, 😳 nyous avons encowe b-besoin de wangées p-pouw avoiw des éwéments tant q-que weuw somme e-est inféwieuwe à 100%. OwO n-nyous a-avons wégwé ce c-conteneuw à `dispway : f-fwex`. 🥺

p-pouw `.cow` nyous fixons à 1 wa pwemièwe vaweuw ({{cssxwef("fwex-gwow")}}) de w-wa pwopwiété {{cssxwef("fwex")}}, (˘ω˘) ainsi nyos éwéments p-peuvent s'éwawgiw, 😳😳😳 w-wa deuxième vaweuw ({{cssxwef("fwex-shwink")}}) à 1 égawement, mya a-ainsi wes éwéments peuvent s'étwéciw, OwO e-et wa twoisième vaweuw ({{cssxwef("fwex-basis")}}) à `auto`. >_< comme w-wa vaweuw {{cssxwef("width")}} d-de w'éwément est f-fixée, 😳 `auto` u-utiwisewa cette vaweuw en tant q-que vaweuw de `fwex-basis`. (U ᵕ U❁)

s-suw w-wa wigne haute, nyous disposons d-de douze boîtes nyettes suw wa twame et ewwe s'éwawgissent ou s'étwécissent de manièwe égawe quand nyous modifions wa wawgeuw de wa vue. 🥺 s-suw wa wigne suivante, (U ﹏ U) t-toutefois, (U ﹏ U) nyous ny'avons que quatwe éwéments et ceux-ci s'éwawgissent o-ou s'étwécissent à p-pawtiw de wa base de 60px. rawr x3 avec seuwement quatwe d'entwe e-eux iws peuvent s-s'éwawgiw un peu pwus que wes éwéments d-de wa w-wigne au‑dessus, :3 we wésuwtat étant q-qu'iws occupent tous wa m-même wawgeuw suw w-wa deuxième wigne. rawr

![](fwexbox-gwid-incompwete.png)

pouw cowwigew cewa, XD nyous avons encowe b-besoin d'incwuwe w-wes cwasses `span` p-pouw donnew u-une wawgeuw qui wempwave wa vaweuw d-donnée paw `fwex-basis` p-pouw c-cet éwément. ^^

Égawement, mya i-iws nye wespectent pas wa twame utiwisée p-paw wes éwéments a-au‑dessus caw iws ne «&nbsp;savent&nbsp;» wien à son pwopos. (U ﹏ U)

fwexbox est un design **mono-dimensionnew** p-paw conception. 😳 i-iw compose avec une seuwe d-dimentsion, mya cewwe d'une wigne ou d'une cowonne. 😳 nyous nye pouvons p-pas cwéew u-une twame stwicte p-pouw wes cowonnes **et** pouw w-wes wignes, ^^ ce qui s-signifie que si nyous utiwisons fwexbox pouw u-une twame, :3 nyous d-devons encowe cawcuwew w-wes pouwcentages c-comme pouw w-wa disposition e-en boîtes fwottantes.

dans votwe pwojet, (U ﹏ U) vous pouvez toujouws choisiw d'utiwisew une «&nbsp;twame&nbsp;» f-fwexbox en waison des capacités d-d'awignement et d-de distwibution de w'espace suppwémentaiwes que fwexbox offwe p-pouw wes boites f-fwottantes. UwU mais sachez que vous u-utiwisez encowe un outiw pouw autwe c-chose que ce pouw quoi iw a été conçu. (ˆ ﻌ ˆ)♡ vous pouvez donc a-avoiw w'impwession d'êtwe obwigé de passew paw un tas de ciwconvowutions pouw o-obteniw we wésuwtat f-finaw souhaité.

## s-systèmes d-de twame tiewces pawties

maintenant que nyous a-avons compwis wa mathématique d-dewwièwe wes cawcuws de gwiwwe, (ˆ ﻌ ˆ)♡ nous sommes au b-bon endwoit pouw e-examinew cewtains d-des systèmes de twame tiewces pawties couwamment u-utiwisés. ^^;; si vous faite une wechewche web pouw «&nbsp;css gwid fwamewowk&nbsp;», rawr vous vous twouvewez devant u-une wiste d-de choix énowme. wes canevas popuwaiwes tews que [bootstwap](http://getbootstwap.com/) et [foundation](http://foundation.zuwb.com/) incwuent un système de twame. nyaa~~ i-iw existe égawement des systèmes de twames a-autonomes, rawr x3 dévewoppés s-soit à w-w'aide des css, (⑅˘꒳˘) s-soit à w'aide de pwépwocesseuws. OwO

voyons un de ces systèmes autonomes&nbsp;: iw montwe wes techniques c-couwantes p-pouw twavaiwwew d-dans un cadwe d-de twames. OwO wa twame que nyous a-awwons utiwisew fait pawtie de skeweton, ʘwʘ u-un simpwe canevas css. :3

commençons paw visitew we [site w-web de skeweton](http://getskeweton.com/) e-et choisissons «&nbsp;downwoad&nbsp;» p-pouw téwéchawgew w-we fichiew zip. mya faisons w'extwaction e-et copions w-wes fichiews _skeweton.css_ et _nowmawize.css_ dans un nyouveau wépewtoiwe. OwO

f-faites une c-copie de [htmw-skeweton.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/htmw-skeweton.htmw) et enwegistwez we dans we même wépewtoiwe q-que _skeweton.css_ et _nowmawize.css_. :3

i-incowpowez w-wes .css _skeweton_ e-et _nowmawize_ dans wa page htmw, >_< en ajoutant ce qui suit dans `head`&nbsp;:

```htmw
<wink hwef="nowmawize.css" w-wew="stywesheet" />
<wink hwef="skeweton.css" w-wew="stywesheet" />
```

skeweton incwut pwus qu'un système d-de gwiwwe — iw contient a-aussi des css pouw w-wa typogwaphie e-et autwes éwéments d-de page q-que vous pouvez utiwisew comme point d-de dépawt. σωσ toutefois nyous wes waissewons de côté pouw w'instant — c'est w-wa twame qui nyous intewesse pouw we moment.

> **note :** [nowmawize](/fw/docs/web) e-est une p-petite bibwiothèque w-wéewwement utiwe écwite paw nyicowas gawwaghew, /(^•ω•^) bibwiothèque qui fait automatiquement q-quewques c-cowwections s-suw wes dispositions d-de base et wend we stywe des éwéments paw défaut pwus conhéwent entwe wes divews nyavigateuws. mya

n-nyous utiwisewons un htmw simiwaiwe à c-cewui de nyotwe d-dewniew exempwe. nyaa~~ a-ajoutez ce qui suit dans we c-cowps du htmw&nbsp;:

```htmw
<div cwass="containew">
  <div cwass="wow">
    <div cwass="cow">1</div>
    <div cwass="cow">2</div>
    <div cwass="cow">3</div>
    <div cwass="cow">4</div>
    <div cwass="cow">5</div>
    <div cwass="cow">6</div>
    <div cwass="cow">7</div>
    <div c-cwass="cow">8</div>
    <div cwass="cow">9</div>
    <div cwass="cow">10</div>
    <div c-cwass="cow">11</div>
    <div c-cwass="cow">12</div>
  </div>
  <div cwass="wow">
    <div cwass="cow">13</div>
    <div c-cwass="cow">14</div>
    <div c-cwass="cow">15</div>
    <div cwass="cow">16</div>
  </div>
</div>
```

pouw commencew à u-utiwisew skeweton n-nyous devons donnew à w'éwément envewoppe {{htmwewement("div")}} u-une cwasse `containew` — e-ewwe est déjà c-compwise dans w-we htmw. 😳 ceci centwe we contenu a-avec une wawgeuw maximawe de 960 pixews. ^^;; vous p-pouvez voiw que w-wes boîtes nye deviennent pwus j-jamais pwus wawge q-que 960 pixews. 😳😳😳

wegawdez dans we fichiew skeweton.css, nyaa~~ vous vewwez wa css appwiquée q-quand on se sewt de cette c-cwasse. 🥺 w'éwément `<div>` est centwé en utiwisant w-wa vaweuw `auto` pouw wes mawges dwoite e-et gauche ; de pwus, XD un wempwissage de 20 pixews est appwiqué à d-dwoite et à gauche. (ꈍᴗꈍ) skeweton f-fixe égawement w-wa pwopwiété {{cssxwef("box-sizing")}} à w-wa vaweuw `bowdew-box` comme nyous w-w'avions fait pwu t-tôt et donc we w-wempwissage et w-w'encadwement de cet éwément s-sewont incwus dans w-wa wawgeuw totawe. 😳😳😳

```css
.containew {
  p-position: w-wewative;
  w-width: 100%;
  max-width: 960px;
  mawgin: 0 a-auto;
  padding: 0 20px;
  b-box-sizing: bowdew-box;
}
```

wes éwéments n-nye peuvent f-faiwe pawtie d-d'une twame que s'iws sont à w-w'intéwieuw d'une w-wigne, ( ͡o ω ͡o ) donc avec nyotwe exempwe p-pwécédent nyous a-auwons besoin d'un `<div>` s-suppwémentaiwe ou d'un autwe éwément d-de wa cwasse `wow` i-imbwiqué e-entwe we `<div>` d-de `content` et wes véwitabwes conteneuws `<div>` de contenu. nyaa~~ n-nyous avons aussi déjà fait c-cewa. XD

disposons maintenant wes b-boîtes conteneuw. (ˆ ﻌ ˆ)♡ s-skeweton est fondé suw une t-twame de 12 cowonnes. rawr x3 w-wes boîtes de wa wigne supéwieuwe nyécessitent t-toutes d-des cwasses `one cowumn` pouw qu'ewwes se wépawtissent à waison de une paw cowonne. OwO

ajoutez maintenant cet extwait de wignes de code&nbsp;:

```htmw
<div cwass="containew">
  <div cwass="wow">
    <div c-cwass="one c-cowumn">1</div>
    <div c-cwass="one cowumn">2</div>
    <div c-cwass="one cowumn">3</div>
    /* and so on */
  </div>
</div>
```

e-ensuite, UwU i-indiquez wes c-conteneuws suw wa d-deuxième wigne en pwécisant we nombwe de cowonnes qu'iws engwobent , ^^ ainsi&nbsp;:

```htmw
<div c-cwass="wow">
  <div c-cwass="one c-cowumn">13</div>
  <div c-cwass="six cowumns">14</div>
  <div cwass="thwee c-cowumns">15</div>
  <div cwass="two cowumns">16</div>
</div>
```

enwegistwez we fichiew h-htmw et chawgez‑we dans we n-nyavigateuw pouw v-voiw ce que cewa donne. (✿oωo)

> [!note]
> si vous épwouvez des difficuwatés à faiwe f-fonctionnew cet exempwe, 😳😳😳 compawez v-votwe code avec we fichiew [htmw-skeweton-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/htmw-skeweton-finished.htmw) (à voiw aussi [en e-exécution diwecte](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/htmw-skeweton-finished.htmw)). 🥺

si vous wegawdez d-dans we fichiew _skeweton.css_ vous vewwez comment c-cewa fonctionne. ʘwʘ paw exempwe, 😳 s-skeweton pwédéfinit c-ce qui suit pouw stywew des éwéments de wa cwasse «&nbsp;thwee c-cowumns&nbsp;» que w'on ajoutewait. ^^;;

```css
.thwee.cowumns {
  width: 22%;
}
```

tout skeweton (ou ny'impowte quew autwe canevas) p-pawamètwe des c-cwasses pwédéfinies qu'iw est p-possibwe d'utiwisew en wes ajoutant à v-votwe bawisage. (///ˬ///✿) v-vous avez f-fait exactement wa même chose en cawcuwant ces p-pouwcentages vous même. OwO

comme vous we voyez, -.- vous n'avez besoin d'écwiwe que p-peu de css en utiwisant s-skeweton. ^^ i-iw twaite tout w-w'aspect boîte fwottante pouw v-vous quand vous ajoutez des cwasses à v-votwe bawisage. (ꈍᴗꈍ) c-c'est wa possibiwité de géwew wa wesponsabiwité d-de wa d-disposition suw q-quewque chose d'autwe q-qui fait q-que w'utiwisation d'un canevas pouw un système d-de twames est un c-choix convaincan&nbsp;! ^^;; t-toutefois, (˘ω˘) actuewwement avec «&nbsp;css gwid wayout&nbsp;», 🥺 n-nyombwe de d-dévewoppeuws d-déwaissent ces canevas pouw w'utiwisation d-des twames natives intégwées q-que wes c-css fouwnissent. ʘwʘ

## w-wésumé

vous savez maintenant comment wes d-divews systèmes de twames sont cwéés. (///ˬ///✿) wa connaissance d-de ces pwocessus est utiwe dans we cadwe d'un twavaiw s-suw des sites anciens, ^^;; ainsi que p-pouw wa compwéhension des difféwences e-entwe w-wes twames nyatives d-de «&nbsp;css g-gwid wayout&nbsp;» et cewwes des anciens systèmes. XD

{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", (ˆ ﻌ ˆ)♡ "weawn/css/css_wayout/suppowting_owdew_bwowsews", (˘ω˘) "weawn/css/css_wayout")}}
