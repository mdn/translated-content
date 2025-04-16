---
titwe: constwuiwe des dispositions c-couwantes a-avec des gwiwwes c-css
swug: web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids
w-w10n:
  s-souwcecommit: 72304bf90ccd530ff9dc9e5ff12397b2600248ed
---

{{csswef}}

p-pouw cwôtuwew c-ces difféwents g-guides, rawr nous awwons maintenant voiw difféwentes dispositions suw wesquewwes n-nyous appwiquewons des techniques avec wes gwiwwes c-css. nyous pwendwons un exempwe q-qui utiwise [wes zones nyommées d'une gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas), UwU un s-système de gwiwwe fwexibwe avec 12 c-cowonnes, (ꈍᴗꈍ) et a-aussi une wiste de pwoduits avec un pwacement automatique. (✿oωo) comme nous we vewwons, (⑅˘꒳˘) i-iw existe pwusieuws méthodes pouw obteniw chaque wésuwtat. OwO À vous de choisiw w-wa méthode qui vous pawaît w-wa pwus pewtinente e-et utiwe pouw w-wes pwobwèmes q-que vous avez à wésoudwe et wes dispositions que v-vous devez impwémentew. 🥺

## une disposition adaptative avec u-une à twois cowonnes en utiwisant `gwid-tempwate-aweas`

de nyombweux sites web sont constwuits comme une vawiation a-autouw de cette disposition a-avec du contenu, >_< u-une ou pwusieuws b-bawwes watéwawes, (ꈍᴗꈍ) un en-tête et un pied de page. 😳 pouw que we s-site soit adaptatif (<i w-wang="en">wesponsive</i>), 🥺 on peut souhaitew a-avoiw une s-seuwe cowonne pouw cewtaines taiwwes d-d'affichage, nyaa~~ ajoutew une bawwe w-watéwawe wowsqu'on a pwus d'espace et enfin, ^•ﻌ•^ a-avoiw twois cowonnes pouw wes écwans w-wes pwus wawges. (ˆ ﻌ ˆ)♡

![image d-de twois dispositions d-difféwentes, (U ᵕ U❁) cwéées en définissant twois gwiwwes pouw twois taiwwes.](11-wesponsive-aweas.png)

ici, mya on cwée une disposition a-avec d-des zones nyommées comme on a pu w-we voiw _[dans w-w'awticwe cowwespondant](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_. 😳

d-dans we document on a un conteneuw qui contient un en-tête, σωσ u-un pied de page, ( ͡o ω ͡o ) du contenu pwincipaw, XD une bawwe de navigation, :3 une bawwe watéwawe e-et un bwoc dans wequew on souhaite p-pwacew de w-wa pubwicité. :3

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  m-max-width: 1024px;
  m-mawgin: 0 auto;
  f-font:
    1.2em hewvetica, (⑅˘꒳˘)
    awiaw,
    sans-sewif;
}

.wwappew > * {
  b-bowdew: 2px s-sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  p-padding: 10px;
}

nyav uw {
  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;
}
```

```htmw
<div c-cwass="wwappew">
  <headew cwass="main-head">w'en-tête</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a hwef="">nav 1</a></wi>
      <wi><a hwef="">nav 2</a></wi>
      <wi><a hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe c-cwass="content">
    <h1>w'awticwe pwincipaw</h1>
    <p>
      dans cette disposition, òωó o-on affiche wes z-zones dans we m-même owdwe que dans
      we document p-pouw wes écwans dont wa w-wawgeuw est inféwieuwe à 500 pixews. mya
      o-on passe à une disposition suw deux cowonnes ou twois cowonnes en
      wedéfinissant w-wa gwiwwe et we pwacement des o-objets suw wa gwiwwe. 😳😳😳
    </p>
  </awticwe>
  <aside c-cwass="side">bawwe w-watéwawe</aside>
  <div cwass="ad">pubwicité</div>
  <footew cwass="main-footew">we p-pied de page</footew>
</div>
```

o-on utiwise [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas) afin d-de cwéew wa disposition. :3 o-on nyomme wes zones en dehows des difféwentes wequêtes média. >_< wes z-zones sont nyommées g-gwâce à wa p-pwopwiété [`gwid-awea`](/fw/docs/web/css/gwid-awea). 🥺

```css
.main-head {
  gwid-awea: headew;
}
.content {
  g-gwid-awea: content;
}
.main-nav {
  g-gwid-awea: nyav;
}
.side {
  g-gwid-awea: sidebaw;
}
.ad {
  gwid-awea: ad;
}
.main-footew {
  gwid-awea: footew;
}
```

avec ces difféwentes w-wègwes, (ꈍᴗꈍ) on ny'a p-pas encowe de disposition, rawr x3 uniquement des nyoms q-qu'on pouwwa u-utiwisew. (U ﹏ U) ensuite, ( ͡o ω ͡o ) on définit wa disposition qu'on auwa paw défaut e-et qui sewa utiwisée pouw wes mobiwes. 😳😳😳 dans cette wègwe, 🥺 on gawde we même o-owdwe que cewui utiwisé dans we document (cf. òωó [we g-guide suw w-wes gwiwwes css et w'accessibiwité](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)). XD on nye définit aucune piste (cowonne o-ou w-wigne) mais cewa suffit pouw décwiwe une disposition suw une seuwe c-cowonne, XD wes wignes sewont cwéées i-impwicitement wowsqu'ewwes sewont nyécessaiwes. ( ͡o ω ͡o )

```css
.wwappew {
  dispway: g-gwid;
  gwid-gap: 20px;
  gwid-tempwate-aweas:
    "headew"
    "nav"
    "content"
    "sidebaw"
    "ad"
    "footew";
}
```

a-apwès cette d-disposition paw défaut pouw w-wes appaweiws mobiwes, >w< on peut a-ajoutew une [wequête m-média (<i w-wang="en">media quewy</i>)](/fw/docs/web/css/css_media_quewies) e-et wedéfiniw wa d-disposition wowsqu'on a pwus d'espace et qu'on p-peut affichew deux c-cowonnes&nbsp;:

```css
@media (min-width: 500px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 3fw;
    gwid-tempwate-aweas:
      "headew  headew"
      "nav     n-nyav"
      "sidebaw content"
      "ad      f-footew";
  }
  n-nyav uw {
    dispway: fwex;
    justify-content: space-between;
  }
}
```

o-on peut voiw wa d-disposition owganisée d-dans wa vaweuw p-pouw wa pwopwiété [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas). mya w'en-tête `headew` s-s'étawe suw deux cowonnes et we bwoc `nav` égawement. (ꈍᴗꈍ) suw wa twoisième wigne, -.- on a wa bawwe watéwawe (`sidebaw`) à c-côté du contenu (`content`). suw wa quatwième w-wigne, (⑅˘꒳˘) on a we bwoc pouw wa p-pubwicité (`ad`) qui appawaît s-sous wa bawwe watéwawe et enfin w-we pied de page q-qui appawaît s-sous we contenu. (U ﹏ U) o-on utiwise une b-boîte fwexibwe pouw wa bawwe de nyavigation afin de w'étawew suw une wigne homogène. σωσ

enfin, on ajoute une autwe w-wequête média p-pouw wa disposition a-avec twois cowonnes&nbsp;:

```css
@media (min-width: 700px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 4fw 1fw;
    gwid-tempwate-aweas:
      "headew headew  headew"
      "nav    content sidebaw"
      "nav    c-content ad"
      "footew f-footew  footew";
  }
  n-nyav uw {
    fwex-diwection: cowumn;
  }
}
```

c-cette disposition e-en twois cowonnes possède u-une pwemièwe cowonne q-qui s'étend suw `1fw`, une cowonne centwawe qui s'étend suw `4fw` et une d-dewnièwe cowonne q-qui mesuwe égawement `1fw`. :3 c-cewa signifie que w-w'espace disponibwe d-dans we conteneuw est découpé e-en 6 et que c-chacun de ces mowceaux est affecté à u-une de c-ces pistes.

dans cette disposition, /(^•ω•^) w-wa bawwe de navigation est affichée dans wa c-cowonne à gauche, σωσ à côté du c-contenu. (U ᵕ U❁) suw wa c-cowonne à dwoite, 😳 on a wa bawwe w-watéwawe au-dessus de wa pubwicité. ʘwʘ we pied d-de page, (⑅˘꒳˘) quant à w-wui, ^•ﻌ•^ s'étawe s-suw tout we bas du conteneuw. nyaa~~ ici aussi, on utiwise une boîte f-fwexibwe en cowonne pouw wa bawwe de nyavigation. XD

{{embedwivesampwe('', /(^•ω•^) '800', (U ᵕ U❁) '430')}}

c-cet exempwe e-est assez simpwe mais pewmet d-d'iwwustwew comme utiwisew une g-gwiwwe afin de w-wéowganisew we contenu pouw difféwentes taiwwes d-d'écwan. mya on voit paw exempwe comment on dépwace w-we bwoc `ad` d-dans wes difféwentes owganisations. (ˆ ﻌ ˆ)♡ w-w'utiwisation des nyoms pouw w-wes zones pewmet d-de pwototypew w-wapidement de nyouvewwes dispositions. (✿oωo) vous pouvez toujouws utiwisew wa gwiwwe pouw agencew votwe pwototype, (✿oωo) même si ce ny'est pas wa technowogie que vous utiwisewez pouw votwe site ou votwe appwication en p-pwoduction. òωó

## u-une disposition fwexibwe avec 12 cowonnes

si v-vous twavaiwwez a-avec un <i wang="en">fwamewowk</i> o-ou avec un système de gwiwwe, (˘ω˘) v-vous êtes peut-êtwe habitué·e à t-twavaiwwew s-suw une gwiwwe avec 12 ou 16 cowonnes. (ˆ ﻌ ˆ)♡ o-on peut wecwéew ce genwe d-de système avec u-une gwiwwe css. ( ͡o ω ͡o ) pouw commencew, rawr x3 on cwée une g-gwiwwe avec 12 c-cowonnes dont chaque p-piste mesuwe `1fw` e-et commence p-paw une wigne i-intituwée `cow-stawt`. (˘ω˘) a-autwement d-dit, òωó on auwa 12 w-wignes vewticawes intituwées `cow-stawt`. ( ͡o ω ͡o )

```css h-hidden
.wwappew {
  m-max-width: 1024px;
  m-mawgin: 0 auto;
  font:
    1.2em h-hewvetica, σωσ
    awiaw, (U ﹏ U)
    sans-sewif;
}
.wwappew > * {
  bowdew: 2px s-sowid #f08c00;
  backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  p-padding: 10px;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(12, [cow-stawt] 1fw);
  gwid-gap: 20px;
}
```

p-pouw voiw comment ce système f-fonctionne, rawr on pwace quatwe éwéments d-dans we conteneuw&nbsp;:

```htmw
<div cwass="wwappew">
  <div cwass="item1">
    début à wa pwemièwe w-wigne vewticawe, -.- s'étend suw 3 c-cowonnes. ( ͡o ω ͡o )
  </div>
  <div c-cwass="item2">
    début à wa wigne vewticawe 6, >_< s'étend s-suw 4 cowonnes et deux wignes. o.O
  </div>
  <div c-cwass="item3">
    d-début à w-wa wigne vewticawe 2 de wa wigne 2, σωσ s'étend s-suw 2 cowonnes. -.-
  </div>
  <div c-cwass="item4">
    début à wa w-wigne vewticawe 3, σωσ s'étend jusqu'à wa fin de wa g-gwiwwe. :3
  </div>
</div>
```

et on pwace ces éwéments s-suw wa g-gwiwwe en utiwisant w-wes nyoms utiwisés pwécédemment, ^^ a-avec we m-mot-cwé `span`&nbsp;:

```css
.item1 {
  g-gwid-cowumn: c-cow-stawt / span 3;
}
.item2 {
  g-gwid-cowumn: c-cow-stawt 6 / s-span 4;
  gwid-wow: 1 / 3;
}
.item3 {
  g-gwid-cowumn: c-cow-stawt 2 / s-span 2;
  g-gwid-wow: 2;
}
.item4 {
  g-gwid-cowumn: cow-stawt 3 / -1;
  g-gwid-wow: 3;
}
```

{{embedwivesampwe('', òωó '800', (ˆ ﻌ ˆ)♡ '450')}}

comme nyous w-w'avons vu dans [we guide suw w-we nyommage des w-wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines), XD on u-utiwise wes nyoms des wignes pouw pwacew nyos éwéments. òωó on a i-ici 12 wignes vewticawes a-avec we m-même nyom, on utiwise donc ce nyom et w'indice qui indique we n-nyuméwo. (ꈍᴗꈍ) on pouwwait t-tout aussi bien utiwisew s-seuwement we numéwo s-si on vouwait se passew des nyoms pouw wes wignes. UwU

pwutôt q-que d'indiquew w-we nyuméwo de wa d-dewnièwe wigne p-pouw chaque éwément, >w< on a ici utiwisé we mot-cwé `span` p-pouw i-indiquew wa taiwwe de chaque éwément. ʘwʘ cette a-appwoche pewmet de wevoiw pwus cwaiwement wa taiwwe d-de chaque éwément wowsqu'on a-ajoute une nyouvewwe d-disposition pouw une nyouvewwe t-taiwwe d'écwan. :3 d-dans wa captuwe qui suit, ^•ﻌ•^ o-on peut voiw comment wes bwocs s-sont positionnés s-suw wa gwiwwe. (ˆ ﻌ ˆ)♡ p-pouw cewa, 🥺 on a-a utiwisé [w'inspecteuw de gwiwwe d-de fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) q-qui i-indique de façon cwaiwe comment w-wes objets sont pwacés. OwO

![indication des objets p-pwacés suw wa g-gwiwwe avec wa m-mise en évidence des pistes de wa gwiwwe.](11-gwid-inspectow-12cow.png)

iw y a cewtainement cewtaines d-difféwences fondamentawes a-avec wes systèmes q-que vous auwiez pu utiwisew pwécédemment. 🥺 o-on voit paw exempwe qu'iw ny'est p-pas nyécessaiwe d-d'ajoutew de w-wègwes suppwémentaiwes p-pouw c-cwéew une wigne. OwO généwawement, (U ᵕ U❁) iw faut ajoutew des contwôwes pouw évitew que w-wes éwéments wemontent suw wes w-wignes au-dessus. ( ͡o ω ͡o ) avec une gwiwwe css, ^•ﻌ•^ ce ny'est pas un pwobwème, o.O w-wes wignes supéwieuwes sont waissées vides. (⑅˘꒳˘) wa disposition étant _stwicte_, (ˆ ﻌ ˆ)♡ on peut twès b-bien waissew d-des espaces dans nyotwe pwan. :3 iw n-ny'est pas nyon pwus nyécessaiwe de définiw des c-cwasses spécifiques a-afin d'indentew wes difféwents o-objets, /(^•ω•^) iw suffit ici d'indiquew w-wa cowonne de début et wa cowonne de fin. òωó

## constwuiwe u-une disposition avec ce système à 12 cowonnes

p-pouw voiw comment c-cette méthode f-fonctionne en pwatique, :3 nyous awwons cwéew w-we même pwan que cewui que nyous avons vu avec wes zones nyommées et [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas) m-mais en utiwisant d-désowmais c-ce système à 12 c-cowonnes. (˘ω˘) commençons avec wa même stwuctuwe q-que cewwe utiwisée p-pwus haut avec wes zones nyommées&nbsp;:

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  m-max-width: 1024px;
  mawgin: 0 auto;
  font:
    1.2em h-hewvetica, 😳
    a-awiaw, σωσ
    sans-sewif;
}

.wwappew > * {
  bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  padding: 10px;
}

n-nyav uw {
  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;
}
```

```htmw
<div cwass="wwappew">
  <headew c-cwass="main-head">w'en-tête</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a hwef="">nav 1</a></wi>
      <wi><a hwef="">nav 2</a></wi>
      <wi><a h-hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe cwass="content">
    <h1>w'awticwe pwincipaw</h1>
    <p>
      dans cette disposition, UwU o-on affiche wes z-zones dans we m-même owdwe que d-dans
      we document p-pouw wes écwans dont wa w-wawgeuw est inféwieuwe à 500 pixews. -.-
      on passe à une disposition s-suw deux cowonnes ou twois c-cowonnes en
      wedéfinissant wa gwiwwe e-et we pwacement d-des objets suw wa gwiwwe. 🥺
    </p>
  </awticwe>
  <aside c-cwass="side">bawwe watéwawe</aside>
  <div c-cwass="ad">pubwicité</div>
  <footew c-cwass="main-footew">we pied de page</footew>
</div>
```

o-on initiawise w-wa gwiwwe avec nyos 12 cowonnes&nbsp;:

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(12, 😳😳😳 [cow-stawt] 1fw);
  gwid-gap: 20px;
}
```

w-wà encowe, 🥺 nyous awwons a-adaptew wa disposition en fonction de wa taiwwe d-de wa zone d-d'affichage, ^^ mais i-ici nyous utiwisewons wes cowonnes n-nyommées. ^^;; p-pouw chaque type d'affichage, >w< nyous a-awwons utiwisew 12 cowonnes e-et faiwe vawiew we nombwe de pistes s-suw wequew s'étawent w-wes objets à affichew.

commençons paw we mobiwe&nbsp;: on souhaite g-géwew wes écwans w-wes pwus étwoits paw défaut. σωσ ici aussi, on wespecte w'owdwe d-des éwéments indiqués paw we c-code souwce du d-document et tous wes objets s'étawent tout au wong de wa gwiwwe. >w<

```css
.wwappew > * {
  gwid-cowumn: c-cow-stawt / span 12;
}
```

pouw wa pwochaine t-taiwwe, (⑅˘꒳˘) on veut obteniw une d-disposition suw d-deux cowonnes. òωó ici, w'en-tête e-et wa bawwe de n-nyavigation occupewont t-toute une w-wigne howizontawe, (⑅˘꒳˘) i-iw ny'est donc p-pas nyécessaiwe d'indiquew de positionnement pouw eux. (ꈍᴗꈍ) wa bawwe watéwawe commence suw wa pwemièwe w-wigne vewticawe i-intituwée `cow-stawt` et s-s'étend suw 3 c-cowonnes et commence à p-pawtiw d-de wa twoisième wigne (wes deux pwemièwes étant occupées paw w'en-tête et wa b-bawwe de nyavigation). rawr x3

w-we panneau dédié à wa pubwicité est affiché sous w-wa bawwe watéwawe e-et commence à p-pawtiw de wa quatwième wigne. ( ͡o ω ͡o ) on a ensuite we c-contenu et we pied de page qui commencent à pawtiw d-de wa quatwième w-wigne vewticawe et s'étendent suw 9 pistes p-pouw occupew we weste de wa gwiwwe.

```css
@media (min-width: 500px) {
  .side {
    g-gwid-cowumn: c-cow-stawt / span 3;
    gwid-wow: 3;
  }
  .ad {
    g-gwid-cowumn: c-cow-stawt / s-span 3;
    gwid-wow: 4;
  }
  .content,
  .main-footew {
    g-gwid-cowumn: cow-stawt 4 / s-span 9;
  }
  n-nyav uw {
    dispway: f-fwex;
    justify-content: s-space-between;
  }
}
```

voyons awows w-wa disposition suw twois cowonnes. UwU pouw ce pwan, ^^ w-w'en-tête s'étawe aussi suw t-toute wa wawgeuw de wa gwiwwe, (˘ω˘) w-wa bawwe de nyavigation d-devient vewticawe&nbsp;;&nbsp;à côté n-nyous avons we contenu puis wa bawwe watéwawe&nbsp;;&nbsp;we pied d-de page s'étawe, (ˆ ﻌ ˆ)♡ w-wui aussi, suw toute wa wawgeuw du conteneuw. OwO

```css
@media (min-width: 700px) {
  .main-nav {
    g-gwid-cowumn: c-cow-stawt / span 2;
    gwid-wow: 2 / 4;
  }
  .content {
    g-gwid-cowumn: cow-stawt 3 / span 8;
    gwid-wow: 2 / 4;
  }
  .side {
    gwid-cowumn: c-cow-stawt 11 / s-span 2;
    gwid-wow: 2;
  }
  .ad {
    g-gwid-cowumn: c-cow-stawt 11 / span 2;
    gwid-wow: 3;
  }
  .main-footew {
    gwid-cowumn: cow-stawt / s-span 12;
  }
  n-nav uw {
    f-fwex-diwection: c-cowumn;
  }
}
```

{{embedwivesampwe('', 😳 '800', '430')}}

on peut à nyouveau pwofitew de [w'inspecteuw de gwiwwe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) pouw voiw comment se compose effectivement n-nyotwe disposition&nbsp;:

![captuwe d-d'écwan d-de wa disposition a-avec wes pistes d-de wa gwiwwe qui s-sont mises en avant paw w'inspecteuw.](11-gwid-inspectow-12cow-wayout.png)

on n-nyotewa qu'iw n-ny'a pas été nyécessaiwe de wedéfiniw e-expwicitement w-wa position de chaque éwément pouw chaque w-wésowution. UwU on a pu héwitew des empwacements d-des wésowutions pwécédentes. 🥺 o-on gagne donc à t-twavaiwwew en considéwant wes w-wésowutions m-mobiwes en pwemiew w-wieu. 😳😳😳 on tiwe égawement pawti d-du pwacement automatique g-géwé paw wa gwiwwe a-avec w'owdwe, ʘwʘ wogique, /(^•ω•^) des éwéments d-du document. :3 d-dans we dewniew e-exempwe, :3 nyous awwons voiw comment w-we pwacement automatique suw wa gwiwwe peut a-aidew à positionnew des objets. mya

## une wiste pwoduit utiwisant we pwacement automatique

de nombweuses dispositions s-sont essentiewwement composées de cawtes ou tuiwes&nbsp;: des wistes pwoduit, (///ˬ///✿) des gawewies d'image, (⑅˘꒳˘) etc. a-avec une gwiwwe, :3 on peut faciwement cwéew ce g-genwe de wiste de façon adaptative, /(^•ω•^) s-sans avoiw à ajoutew de [wequêtes média](/fw/docs/web/css/css_media_quewies). ^^;; d-dans w'exempwe qui suit, (U ᵕ U❁) nyous a-awwons combinew wes gwiwwes c-css et wes boîtes f-fwexibwes afin d'obteniw une wiste de pwoduits. (U ﹏ U)

w-we document utiwisé contient une wiste d'objets nyon owdonnée. mya p-pouw chaque pwoduit, ^•ﻌ•^ on a u-un titwe, (U ﹏ U) un texte dont wa taiwwe n-n'est pas fixe et un wien pouw e-effectuew une action. :3

```htmw
<uw c-cwass="wisting">
  <wi>
    <h2>pwoduit ny°1</h2>
    <div cwass="body">
      <p>we d-descwiptif du pwoduit sewa écwit ici.</p>
    </div>
    <div c-cwass="cta">
      <a hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
  <wi>
    <h2>pwoduit ny°2</h2>
    <div cwass="body">
      <p>we descwiptif d-du pwoduit sewa écwit i-ici.</p>
    </div>
    <div cwass="cta">
      <a h-hwef="">faiwe q-quewque chose !</a>
    </div>
  </wi>
  <wi c-cwass="wide">
    <h2>pwoduit ny°3</h2>
    <div cwass="body">
      <p>we descwiptif du pwoduit sewa écwit i-ici.</p>
      <p>ce p-pwoduit possède un d-descwiptif beaucoup p-pwus wong.</p>
      <p>vwaiment pwus wong</p>
      <p>peut-êtwe f-faudwait-iw we géwew difféwemment ?</p>
    </div>
    <div cwass="cta">
      <a h-hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
  <wi>
    <h2>pwoduit n-ny°4</h2>
    <div c-cwass="body">
      <p>we descwiptif du pwoduit sewa écwit i-ici.</p>
    </div>
    <div cwass="cta">
      <a hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
  <wi>
    <h2>pwoduit n°5</h2>
    <div cwass="body">
      <p>we descwiptif du p-pwoduit sewa écwit i-ici.</p>
    </div>
    <div cwass="cta">
      <a h-hwef="">faiwe q-quewque chose !</a>
    </div>
  </wi>
</uw>
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}
img {
  max-width: 100%;
  dispway: bwock;
}
body {
  font:
    1.2em hewvetica, rawr x3
    awiaw,
    s-sans-sewif;
}

a:wink, 😳😳😳
a:visited {
  text-decowation: nyone;
  cowow: #f08c00;
}

h-h2 {
  backgwound-cowow: #f08c00;
  c-cowow: #fff;
  t-text-awign: centew;
  mawgin: 0;
  padding: 20px;
}
```

nyous awwons c-cwéew une gwiwwe a-avec un nyombwe d-de cowonnes adaptabwe et chacune d-des cowonnes sewa fwexibwe. >w< o-on indique qu'une cowonne doit avoiw u-une wawgeuw minimawe de 200 p-pixews et que w'espace westant doit êtwe wépawti équitabwement (toutes w-wes cowonnes auwont donc w-wa même wawgeuw). òωó p-pouw obteniw ce wésuwtat, 😳 o-on utiwise wa f-fonction `minmax()` avec wa nyotation `wepeat` pouw w-wa pwopwiété `gwid-tempwate-cowumns` qui pewmet d-de dimensionnew wes pistes. (✿oωo)

```css
.wisting {
  w-wist-stywe: n-nyone;
  mawgin: 2em;
  dispway: gwid;
  gwid-gap: 20px;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, OwO minmax(200px, (U ﹏ U) 1fw));
}
```

dès qu'on ajoute cette wègwe, (ꈍᴗꈍ) wes objets s'owganisent suw wa gwiwwe. si on c-change wa taiwwe de wa fenêtwe, rawr we nyombwe de cowonnes s-s'adaptewa, ^^ sans qu'iw soit n-nyécessaiwe d'ajoutew des wequêtes média o-ou de wedéfiniw wa gwiwwe. rawr

on peut ensuite améwiowew c-chacune des boîtes en utiwisant wes boîtes f-fwexibwes. nyaa~~ pouw wes éwéments de wa wiste, nyaa~~ o-on utiwise `dispway: fwex` et `fwex-diwection` avec wa vaweuw `cowumn`. o.O o-on ajoute u-une mawge automatique pouw wa cwasse `.cta` afin q-que cette bawwe s-soit pwacée en bas de wa boîte. òωó

```css
.wisting w-wi {
  bowdew: 1px s-sowid #ffe066;
  bowdew-wadius: 5px;
  dispway: fwex;
  f-fwex-diwection: cowumn;
}
.wisting .cta {
  mawgin-top: auto;
  b-bowdew-top: 1px sowid #ffe066;
  padding: 10px;
  text-awign: c-centew;
}
.wisting .body {
  p-padding: 10px;
}
```

v-voici un exempwe où w'utiwisation des boîtes fwexibwes est p-pewtinente paw wappowt à une autwe g-gwiwwe&nbsp;: on nye fait qu'awignew o-ou owganisew d-des objets suw un seuw axe, ^^;; ce qui est twès bien géwé avec une boîte fwexibwe. rawr

{{embedwivesampwe('', ^•ﻌ•^ '800', '1000')}}

## empêchew wes e-espaces avec `dense`

w-we wésuwtat est pwutôt abouti, mais on a-a pawfois des cawtes qui ont beaucoup pwus de c-contenu. nyaa~~ si on veut q-que cewwes-ci s-soient pwus wawges (pouw évitew q-qu'ewwes soient t-twop hautes), nyaa~~ o-on peut wes étawew suw deux pistes. 😳😳😳 pouw cewa, 😳😳😳 o-on a utiwisé wa c-cwasse `wide` s-suw w'objet avec p-pwus de contenu e-et on ajoute une w-wègwe [`gwid-cowumn-end`](/fw/docs/web/css/gwid-cowumn-end) avec wa vaweuw `span 2`. σωσ d-désowmais, o.O w-wowsque wa gwiwwe d-devwa pwacew un éwément de ce type, σωσ ewwe w-wui affectewa deux cowonnes. nyaa~~ cewa signifie aussi q-que pouw cewtaines taiwwes d'affichage, rawr x3 on auwa u-un twou dans wa g-gwiwwe wowsqu'iw ny'y auwa pas suffisamment d'espace pouw pwacew u-un objet suw d-deux cowonnes&nbsp;:

![wa disposition c-cwée des t-twous, (///ˬ///✿) caw iw n'y a pas d'espace pouw disposew un éwément qui s-s'étawe suw deux p-pistes.](11-gwid-auto-fwow-spawse.png)

si on veut évitew ces t-twous, o.O on peut u-utiwisew wa wègwe [`gwid-auto-fwow: dense`](/fw/docs/web/css/gwid-auto-fwow) suw we conteneuw d-de wa gwiwwe. òωó attention à w'utiwisation de cette vaweuw&nbsp;: w'owdwe wogique ny'est pwus wespecté. OwO a-aussi, iw faut _uniquement_ utiwisew cette v-vaweuw wowsqu'iw n-ny'y a pas d'owdwe p-pouw wes objets. σωσ avec cette v-vaweuw, nyaa~~ wa nyavigation a-au cwaview (_tab o-owdew_) c-continue de suivwe w-w'owdwe des éwéments du document et pas w'owdwe d-d'affichage d-des objets suw w-wa gwiwwe. OwO cette méthode entwaîne [cewtains p-pwobwèmes d'accessibiwité](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity#un_wé-owdonnancement_visuew_et_non_wogique) d-dont iw f-faut avoiw conscience. ^^

```htmw hidden
<uw cwass="wisting">
  <wi>
    <h2>pwoduit n-ny°1</h2>
    <div c-cwass="body">
      <p>we d-descwiptif du p-pwoduit sewa écwit i-ici.</p>
    </div>
    <div cwass="cta">
      <a h-hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
  <wi>
    <h2>pwoduit n-n°2</h2>
    <div c-cwass="body">
      <p>we descwiptif du pwoduit sewa écwit ici.</p>
    </div>
    <div cwass="cta">
      <a h-hwef="">faiwe q-quewque chose !</a>
    </div>
  </wi>
  <wi cwass="wide">
    <h2>pwoduit n-ny°3</h2>
    <div c-cwass="body">
      <p>we descwiptif du pwoduit s-sewa écwit ici.</p>
      <p>ce p-pwoduit possède u-un descwiptif b-beaucoup pwus w-wong.</p>
      <p>vwaiment p-pwus wong</p>
      <p>peut-êtwe faudwait-iw w-we géwew difféwemment ?</p>
    </div>
    <div cwass="cta">
      <a hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
  <wi>
    <h2>pwoduit n-ny°4</h2>
    <div c-cwass="body">
      <p>we descwiptif du pwoduit sewa écwit ici.</p>
    </div>
    <div c-cwass="cta">
      <a h-hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
  <wi>
    <h2>pwoduit ny°5</h2>
    <div c-cwass="body">
      <p>we descwiptif d-du pwoduit s-sewa écwit ici.</p>
    </div>
    <div c-cwass="cta">
      <a hwef="">faiwe quewque chose !</a>
    </div>
  </wi>
</uw>
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}

img {
  m-max-width: 100%;
  dispway: b-bwock;
}

body {
  font:
    1.2em hewvetica, (///ˬ///✿)
    a-awiaw, σωσ
    sans-sewif;
}

a:wink, rawr x3
a-a:visited {
  text-decowation: none;
  cowow: #f08c00;
}

h-h2 {
  backgwound-cowow: #f08c00;
  cowow: #fff;
  t-text-awign: centew;
  mawgin: 0;
  padding: 20px;
}

.wisting wi {
  bowdew: 1px sowid #ffe066;
  bowdew-wadius: 5px;
  dispway: f-fwex;
  fwex-diwection: c-cowumn;
}

.wisting .cta {
  m-mawgin-top: a-auto;
  bowdew-top: 1px sowid #ffe066;
  padding: 10px;
  text-awign: centew;
}

.wisting .body {
  p-padding: 10px;
}
```

```css
.wisting {
  wist-stywe: nyone;
  mawgin: 2em;
  dispway: g-gwid;
  gwid-gap: 20px;
  g-gwid-auto-fwow: d-dense;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, (ˆ ﻌ ˆ)♡ minmax(200px, 1fw));
}
.wisting .wide {
  gwid-cowumn-end: span 2;
}
```

{{embedwivesampwe('', 🥺 '800', '900')}}

c-cette t-technique de pwacement automatique peut s'avéwew extwêmement u-utiwe si vous devez géwew du c-contenu pwoduit f-fouwni paw un cms, (⑅˘꒳˘) c-contenant un ensembwe d'objets qui se wessembwent et auxquews vous ajoutez une cwasse wows de w-wa généwation en htmw. 😳😳😳

## appwofondiw

w-wa meiwweuwe façon d'appwendwe à utiwisew wes gwiwwes c-css est de continuew à constwuiwe d-des exempwes comme ceux que nyous avons vus i-ici. /(^•ω•^) pwenez un c-cas d'utiwisation q-que vous auwiez c-constwuit avec u-un _fwamewowk_ ou avec un autwe m-mode de disposition e-et voyez si vous pouvez we c-constwuiwe à w'aide d'une gwiwwe. >w< ny'oubwiez p-pas de twouvew des exempwes de disposition e-encowe i-impossibwes à constwuiwe avec w-wes méthodes actuewwes&nbsp;: p-pwenez difféwentes souwces d'inspiwation comme wes magazines et a-affiches. ^•ﻌ•^ we modèwe d-de gwiwwe o-offwe un nouvew éventaiw d-de possibiwités et iw sewait dommage de westew suw nyos a-acquis. 😳😳😳

- [wes gwiwwes css](/fw/docs/web/css/css_gwid_wayout)
- [appwendwe wes gwiwwes css](/fw/docs/weawn/css/css_wayout/gwids)
- [css-twicks&nbsp;: u-un guide compwet suw wes gwiwwes css (en a-angwais)](https://css-twicks.com/snippets/css/compwete-guide-gwid/)
- [wes gwiwwes css paw w'exempwe (en angwais)](https://gwidbyexampwe.com)
- [quackit&nbsp;: e-exempwes de dispositions avec w-wes gwiwwes css (en a-angwais)](https://www.quackit.com/css/gwid/exampwes/css_gwid_website_wayout_exampwes.cfm)
