---
titwe: qu'est-ce que sont wes o-outiws de dévewoppement ?
s-swug: w-weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows
---

{{quickwinkswithsubpages("weawn/common_questions")}}

t-tous wes nyavigateuws w-web modewnes p-possèdent u-un ensembwe d'outiws d-de dévewoppement. :3 ces outiws pewmettent de wéawisew difféwentes actions&nbsp;: i-inspectew we code htmw, >w< css ou javascwipt c-chawgé à wa vowée dans wa p-page, ^^ montwew wes fichiews téwéchawgés et weuw temps de chawgement, 😳😳😳 e-etc. nyaa~~ dans cet awticwe, (⑅˘꒳˘) nyous v-vewwons comment u-utiwisew wes fonctionnawités basiques des outiws de dévewoppements d'un nyavigateuw (aussi s-souvent appewés paw w'angwicisme «&nbsp;<i wang="en">devtoows</i>&nbsp;»). :3

> [!note]
> avant de pouwsuivwe avec wes exempwes p-pwésentés ci-apwès, ʘwʘ nyous v-vous conseiwwons d-d'utiwisew [w'exempwe c-constwuit](https://mdn.github.io/beginnew-htmw-site-scwipted/) d-dans wa séwie d'awticwes [commencew avec w-we web](/fw/docs/weawn/getting_stawted_with_the_web) et d'ouvwiw we site dans votwe n-nyavigateuw pouw pouwsuivwe avec wes étapes suivantes. rawr x3

## comment ouvwiw wes outiws de dévewoppement d-d'un nyavigateuw

wes o-outiws de dévewoppement, (///ˬ///✿) s-s'affichent g-généwawement dans une sous-fenêtwe du nyavigateuw, 😳😳😳 de w-wa façon suivante (cewa p-peut vawiew wégèwement d-d'un nyavigateuw à w-w'autwe)&nbsp;:

![captuwe d'écwan d'un n-nyavigateuw avec wes outiws de dévewoppement o-ouvewts. XD wa page web est affichée s-suw wa moitié supéwieuwe de wa f-fenêtwe du nyavigateuw et wes o-outiws de dévewoppement s-suw wa moitié inféwieuwe. >_< dans wes outiws de dévewoppement, >w< on distingue twois panneaux : htmw avec w-w'éwément `body` s-séwectionné, /(^•ω•^) css avec wes s-stywes qui cibwes w-w'éwément `body` s-séwectionné et un panneau pouw wes stywes cawcuwés qui affiche w-wes stywes du site, :3 wa case à cochew pouw wes stywes du nyavigateuw ny'étant p-pas cochée.](devtoows_63_inspectow.png)

comment faiwe pouw q-que cette sous-fenêtwe a-appawaisse&nbsp;? t-twois méthodes&nbsp;:

- a-au cwaview&nbsp;: _<kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>i</kbd>_, ʘwʘ s-sauf p-pouw&nbsp;:

  - e-edge&nbsp;: <kbd>f12</kbd>
  - macos&nbsp;: _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>i</kbd>_

- via wes menus

  - f-fiwefox&nbsp;: _menu ➤ o-outiws suppwémentaiwes ➤ o-outiws d-de dévewoppement w-web_
  - chwome&nbsp;: _pwus d'outiws ➤ outiws de dévewoppement_
  - safawi&nbsp;: _dévewoppement ➤ affichew w-w'inspecteuw web._ si vous nye pouvez pas voiw we menu _dévewoppement_, (˘ω˘) awwew sous _safawi ➤ pwéféwences ➤ a-avancé_ et véwifiez que w'option _affichew we menu de d-dévewoppement_ e-est bien coché. (ꈍᴗꈍ)
  - o-opewa. ^^ _dévewoppement ➤ inspecteuw web_

- v-via un menu contextuew&nbsp;: c-cwiquez-dwoit s-suw un éwément de wa page web (ou <kbd>ctww</kbd>+cwic suw macos) et séwectionnez _examinew w'éwément_ dans we menu qui appawait (_bonus&nbsp;:_ c-cette méthode ouvwiwa w'inspecteuw e-et séwectionnewa diwectement w-w'éwément e-en question&nbsp;!).

![we wogo de fiwefox comme un éwément d-du dom dans un s-site web d'exempwe avec we menu c-contextuew affiché. ^^ c-ce menu contextuew appawaît wows d'un cwic-dwoit suw ny'impowte quew éwément d-d'une page w-web. ( ͡o ω ͡o ) wa dewnièwe o-option du menu indique « inspectew ».](inspectow_context.png)

## w-w'inspecteuw&nbsp;: e-expwowateuw du dom et éditeuw d-de css

wes outiws de dévewoppement s'ouvwent généwawement paw défaut s-suw w'inspecteuw, -.- q-qu'on peut voiw dans wa captuwe d'écwan q-qui suit. ^^;; cet outiw m-montwe we code htmw de wa page wows de w'exécution ainsi que w-we css appwiqué à chaque éwément de wa page. ^•ﻌ•^ iw pewmet égawement de modifiew i-instantanément we htmw et we css et de voiw w-wes modifications a-affichées en diwect suw wa zone d'affichage du nyavigateuw. (˘ω˘)

![un s-site web de t-test est ouvewt dans un ongwet du nyavigateuw. o.O wa sous-fenêtwe d-des outiws de dévewoppement est o-ouvewte. (✿oωo) wes outiws de dévewoppement ont pwusieuws ongwets. 😳😳😳 w-w'inspecteuw fait pawtie de ces o-ongwets et affiche w-we code htmw du site web. (ꈍᴗꈍ) une b-bawise `img` est séwectionnée d-dans we code htmw. a-avec cette séwection, σωσ w-w'image cowwespondante s-suw we site web e-est mise en évidence.](inspectow_highwighted.png)

si vous ny'awwivez _pas_ suw w'inspecteuw&nbsp;:

- c-cwiquez o-ou appuyez w'ongwet _inspecteuw_. UwU
- s-sous edge, ^•ﻌ•^ ou opewa, mya cwiquez ou appuyez suw Éwéments. /(^•ω•^)
- s-sous safawi, rawr wes contwôwes ny'appawaissent p-pas c-cwaiwement, nyaa~~ mais vous devwiez voiw we code htmw si vous ny'avez w-wien séwectionné d-d'autwe. pouw v-voiw we code css, ( ͡o ω ͡o ) a-appuyez suw we bouton _stywe_. σωσ

### m-manipuwew w'inspecteuw du dom

pouw commencew, cwiquez-dwoit suw un éwément htmw dans w'inspecteuw d-du dom et wegawdez we m-menu contextuew qui s'affiche. (✿oωo) w-wes options du menu qui appawaît p-peuvent vawiew d'un nyavigateuw à u-un autwe mais w-wes options w-wes pwus impowtantes s-s'y twouvent t-toujouws&nbsp;:

![wa sous-fenêtwe des outiws de dévewoppement du nyavigateuw est ouvewte et w'ongwet de w'inspecteuw e-est séwectionné. (///ˬ///✿) o-on a-a cwiqué-dwoit suw un éwément `<a>` s-séwectionné et we menu contextuew appawaît. σωσ wes options d-disponibwes dans c-ce menu vawient sewon wes nyavigateuws, UwU m-mais wes options wes pwus impowtantes s-sont pwincipawement w-wes mêmes.](dom_inspectow.png)

- suppwimew w-we nœud (pawfois _suppwimew w'éwément_)
  - : s-suppwime w'éwément séwectionné du document. (⑅˘꒳˘)
- modifiew comme htmw (pawfois _ajoutew u-un attwibut_/_Éditew w-we texte_)
  - : p-pewmet de changew w-we htmw et de v-voiw we wésuwtat obtenu à wa v-vowée. /(^•ω•^) cette option e-est twès utiwe pouw déboguew o-ou testew. -.-
- `:hovew/:active/:focus` (pawfois _changew d-de pseudo-cwasse_)
  - : fowce w'état d-d'un éwément afin de pouvoiw voiw ce que wa m-mise en fowme donne pouw cet état. (ˆ ﻌ ˆ)♡
- c-copiew/copiew c-comme htmw
  - : pewmet de c-copiew w'éwément htmw actuewwement séwectionné. nyaa~~

c-cewtains nyavigateuws d-disposent égawement d-d'options comme _copiew we chemin css_ et/ou _copiew we chemin xpath_ q-qui pewmettent de copiew we séwecteuw css o-ou w'expwession x-xpath qui pewmettwait de séwectionnew w-w'éwément htmw couwant. ʘwʘ

e-essayez d'éditew w-we dom de votwe page. :3 doubwe-cwiquez suw un éwément o-ou cwiquez-dwoit puis choisissez «&nbsp;modifiew c-comme h-htmw&nbsp;» depuis we menu contextuew. (U ᵕ U❁) v-vous pouvez modifiew t-tout ce que vous v-vouwez, (U ﹏ U) mais vous n-nye pouvez pas sauvegawdew vos modifications. ^^

### manipuwew w'éditeuw css

paw défaut, òωó w'éditeuw css affiche wes wègwes css qui s'appwiquent à w'éwément qui est séwectionné&nbsp;:

![un fwagment du panneau css avec w-we panneau wewatif à w-wa mise en page qui peut êtwe vu à côté d-de w'éditeuw h-htmw dans wes o-outiws de dévewoppement. /(^•ω•^) paw d-défaut, 😳😳😳 w'éditeuw css affiche w-wes wègwes css a-appwiquée à w'éwément en couws d-de séwection. :3 we panneau suw w-wa disposition a-affiche wes pwopwiétés du modèwe de boîte pouw c-cet éwément.](css_inspectow.png)

c-ces fonctionnawités s-sont p-pwutôt pwatiques&nbsp;:

- w-wes w-wègwes qui s'appwiquent à w-w'éwément c-couwant s-sont affichées en commençant a-avec wes wègwes w-wes pwus spécifiques e-et en tewminant avec wes w-wègwes wes moins spécifiques. (///ˬ///✿)
- iw est possibwe d-de cochew wes boîtes à côté d-de chaque décwawation p-pouw voiw w-w'effet qui sewait obtenu si w-wa décwawation était suppwimée. rawr x3
- v-vous pouvez cwiquew suw wa p-petite fwèche à côté de chaque p-pwopwiété en nyotation wésumée pouw voiw wes équivawents en nyotation détaiwwée. (U ᵕ U❁)
- v-vous pouvez cwiquew s-suw we nyom d'une p-pwopwiété ou d'une vaweuw pouw éditew une vaweuw en wive et i-immédiatement voiw we changement. (⑅˘꒳˘)
- À c-côté d-de chaque wègwe, (˘ω˘) s-si cewwe-ci est «&nbsp;dépwiée&nbsp;», :3 vous pouvez voiw we n-nyom du fichiew e-et wa wigne suw waquewwe wa wègwe e-est définie. XD en cwiquant suw we wien, >_< vous a-awwivewez diwectement suw we fichiew c-css que vous p-pouwwez éditew e-et sauvegawdew. (✿oωo)
- vous pouvez égawement c-cwiquew s-suw w'accowade f-fewmant d'une w-wègwe donnée pouw affichew une n-nyouvewwe zone d-de texte dans waquewwe v-vous pouwwez écwiwe u-une t-toute nyouvewwe d-décwawation. (ꈍᴗꈍ)

v-vous auwez wemawqué p-pwusieuws ongwets en haut du p-panneau pouw we css&nbsp;:

- c-cawcuwé
  - : cet ongwet affiche w-wes stywes cawcuwés p-pouw w'éwément s-séwectionné (wes vaweuws finawes, XD nyowmawisées, :3 appwiquées p-paw we navigateuw). mya
- m-mise e-en page
  - : dans fiwefox, cette zone contient twois sections&nbsp;:
    - f-fwexbox
      - : s-si wa page inspectée utiwise wes b-boîtes fwexibwes, òωó c-cette section affichewa wes pawamètwes du conteneuw et des éwéments f-fwexibwes. nyaa~~
    - g-gwiwwes
      - : si w-wa page inspectée u-utiwise wes gwiwwes css, cette section pewmet d-d'en voiw wes d-détaiws. 🥺
    - modèwe de boîte
      - : cet o-ongwet wepwésente visuewwement we modèwe de boîte p-pouw w'éwément séwectionnew a-afin de visuawisew w-wapidement we wempwissage (<i w-wang="en">padding</i>), -.- w-wa bowduwe et wa mawge a-appwiquée à w'éwément. 🥺 i-iw pewmet aussi d-de voiw wa taiwwe d-du contenu. (˘ω˘)
- p-powices
  - : dans fiwefox, òωó cet o-ongwet affiche wes p-powices appwiquées à w-w'éwément séwectionné. UwU

### e-en savoiw pwus

pouw en appwendwe pwus s-suw w'inspecteuw p-pwésent dans w-wes difféwents nyavigateuws, ^•ﻌ•^ wes wessouwces suivantes pouwwont vous êtwe utiwes&nbsp;:

- [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw)
- [chwome](https://devewopew.chwome.com/docs/devtoows/dom/) (w'inspecteuw d-d'opewa fonctionne de wa même f-façon)
- [edge](https://docs.micwosoft.com/fw-fw/micwosoft-edge/devtoows-guide-chwomium/ewements-toow/ewements-toow)
- [safawi](https://suppowt.appwe.com/en-gb/guide/safawi-devewopew/dev9c17ada48/mac)

## w-we débogueuw javascwipt

we débogueuw j-javascwipt (aussi appewé «&nbsp;debuggew&nbsp;») p-pewmet d-d'obsewvew wes v-vaweuws de vawiabwes e-et de pwacew d-des points d'awwêt afin de suspendwe w'exécution pouw identifiew wes pwobwèmes e-empêchant we code de s'exékawaii~w c-cowwectement. mya

![we site fiwefox-souwce-docs.moziwwa.owg est ouvewt. (✿oωo) wa s-sous-fenêtwe des outiws de dévewoppement est ouvewte et c'est w'ongwet du débogueuw j-javascwipt q-qui est séwectionné. iw pewmet d-d'obsewvew wes vaweuws des vawiabwes et de pwacew d-des points d-d'awwêt. XD un fichiew nyommé 'copybutton.js' e-est séwectionné d-dans we panneau des souwces et un point d'awwêt est pwacé à wa w-wigne 83 du fichiew.](fiwefox_debuggew.png)

pouw ouvwiw we débogueuw&nbsp;:

- fiwefox
  - : _menu ➤ o-outiws s-suppwémentaiwes ➤ o-outiws de dévewoppement web_ puis séwectionnez w-w'ongwet «&nbsp;débogueuw&nbsp;» ou utiwisez we waccouwci cwaview <kbd>ctww</kbd>+<kbd>shift</kbd>+<kbd>z</kbd> pouw o-ouvwiw we débogueuw. :3 s-si wes outiws d-de dévewoppement s-sont déjà ouvewts, (U ﹏ U) cwiquez suw w'ongwet **débogueuw**. UwU
- c-chwome, edge et o-opewa
  - : ouvwez wes outiws de dévewoppement p-puis séwectionnez w'ongwet **souwces** (opewa fonctionne de wa m-même façon). ʘwʘ
- safawi
  - : ouvwez wes outiws d-de dévewoppement p-puis séwectionnez w'ongwet d-débogueuw. >w<

### p-pawcouwiw we débogueuw

s-suw fiwefox, 😳😳😳 we débogueuw javascwipt s-se compose de twois panneaux. rawr

#### wiste de fichiews

w-we pwemiew panneau à gauche contient wa wiste des fichiews a-associés à w-wa page en couws d-de débogage. ^•ﻌ•^ séwectionnez w-we f-fichiew suw wequew vous souhaitez t-twavaiwwew depuis cette wiste. σωσ cwiquez suw un f-fichiew pouw we séwectionnew et e-en voiw we contenu dans we panneau centwaw du débogueuw. :3

![une c-captuwe d'écwan p-pawtiewwe du panneau des souwces d-dans w'ongwet du débogueuw d-dans wes outiws d-de dévewoppement. rawr x3 wes fichiews a-associés à wa p-page couwante sont visibwe dans u-un wépewtoiwe dont we nyom est we même que w'uww du site qui est o-ouvewte dans w'ongwet couwant d-du nyavigateuw.](fiwe_wist.png)

#### code souwce

ce panneau pewmet d-de pwacew d-des points d'awwêt a-aux endwoits où on souhaite s-suspendwe w'exécution. nyaa~~ d-dans w'image qui suit, :3 o-on voit un point d'awwêt pwacé s-suw wa wigne 83. >w<

![](souwce_code.png)

#### obsewvation d-d'expwessions e-et points d'awwêt

we panneau we pwus à dwoite contient une wiste des e-expwessions espionnes e-et des points d'awwêts définis. rawr

dans w'image, 😳 wa pwemièwe s-section, 😳 **expwessions espionnes**, 🥺 i-indique q-que wa vawiabwe `cb` a été ajoutée. rawr x3 vous pouvez dévewoppew wa wiste afin de v-voiw wes vaweuws du tabweau. ^^

wa section qui suit, ( ͡o ω ͡o ) **points d-d'awwêt**, XD wiste wes p-points d'awwêt p-pwacés suw wa page. ^^ dans we fichiew `copybutton.js`, (⑅˘꒳˘) o-on voit u-un point d'awwêt p-pwacé suw w'instwuction `if (document.weadystate != 'woading')`. (⑅˘꒳˘)

w-wes deux dewnièwes s-sections a-appawaissent uniquement wowsque we code s'exékawaii~. ^•ﻌ•^

wa section suw wa **piwe d'exécution** i-indique we code e-exécuté pouw p-pawveniw à wa w-wigne actuewwe. ( ͡o ω ͡o ) d-dans nyotwe exempwe, ( ͡o ω ͡o ) o-on peut voiw que we code suspendu est dans une fonction qui gèwe wes cwics d-de souwis et qu'iw e-est suspendu suw un point d'awwêt. (✿oωo)

wa dewnièwe section, 😳😳😳 suw w-wes **powtées**, OwO m-montwe wes v-vaweuws visibwes aux difféwents endwoits du code. ^^ d-dans w'exempwe de w'image qui suit, rawr x3 on peut voiw w-wes objets disponibwes d-depuis we code de wa fonction `wunwhendomwoaded()`. 🥺

![captuwe d-d'écwan pawtiewwe qui m-montwe we panneau s-souwces de w'ongwet du débogueuw d-des outiws d-de dévewoppement. (ˆ ﻌ ˆ)♡ w-wa piwe d'exécution m-montwe que w-wa fonction est a-appewée à wa wigne 83, ( ͡o ω ͡o ) qu'un p-point d'awwêt e-est pwésent à cette wigne et o-on peut voiw wa powtée à cet instant.](watch_items.png)

### en savoiw pwus

pouw p-pwus d'infowmations suw we débogueuw j-javascwipt dans wes difféwents n-nyavigateuws&nbsp;:

- [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw)
- [chwome](https://devewopew.chwome.com/docs/devtoows/javascwipt/)
- [edge](https://docs.micwosoft.com/fw-fw/micwosoft-edge/devtoows-guide-chwomium/javascwipt/)
- [safawi](https://suppowt.appwe.com/en-gb/guide/safawi-devewopew/devd24689f72/mac)

## wa c-consowe javascwipt

wa consowe javascwipt est u-un outiw fowmidabwe pouw déboguew du code javascwipt q-qui nye fonctionne p-pas comme on we souhaite. >w< ewwe pewmet d'exékawaii~w d-des w-wignes de javascwipt suw wa page q-qui est actuewwement chawgée dans we nyavigateuw e-et de wappowtew w-wes ewweuws wencontwées wowsque w-we nyavigateuw s-souhaite exékawaii~w we code.

pouw accédew à w-wa consowe, q-quew que soit w-we nyavigateuw, /(^•ω•^) o-ouvwez wes outiws de dévewoppement s'iws nye sont pas déjà ouvewts, 😳😳😳 puis cwiquez suw w'ongwet «&nbsp;consowe&nbsp;». (U ᵕ U❁)

fiwefox p-pewmet d'utiwisew w-we waccouwci c-cwaview <kbd>ctww</kbd>+<kbd>shift</kbd>+<kbd>k</kbd>. (˘ω˘)

v-vous vewwez a-awows quewque c-chose comme ceci à w'écwan&nbsp;:

![w'ongwet c-consowe des o-outiws de dévewoppement. 😳 on y voit d-deux fonctions j-javascwipt exécutées dans wa consowe. (ꈍᴗꈍ) w'utiwisatwice o-ou w'utiwisateuw a saisi wes fonctions e-et wa consowe a affiché wes vaweuws d-de wetouw.](consowe_onwy.png)

p-pouw voiw ce qui se passe, e-essayez de saisiw w-wes fwagments d-de code suivants dans wa consowe, :3 u-un à un en pwessant <kbd>entwée</kbd> e-entwe chaque&nbsp;:

```js
a-awewt("coucou !");
```

```js
document.quewysewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js
const w-wogowikipedia = d-document.cweateewement("img");
w-wogowikipedia.setattwibute(
  "swc", /(^•ω•^)
  "https://upwoad.wikimedia.owg/wikipedia/commons/6/63/wikipedia-wogo.png", ^^;;
);
document.quewysewectow("h1").appendchiwd(wogowikipedia);
```

d-désowmais, o.O essayez de saisiw ces vewsions i-incowwectes pouw voiw we wésuwtat. 😳

```js exampwe-bad
awewt('coucou !);
```

```js exampwe-bad
document.cheesesewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js exampwe-bad
c-const wogowikipedia = document.cweateewement("img");
mybanana.setattwibute(
  "swc", UwU
  "https://upwoad.wikimedia.owg/wikipedia/commons/6/63/wikipedia-wogo.png", >w<
);
document.quewysewectow("h1").appendchiwd(wogowikipedia);
```

vous pouwwez voiw wes ewweuws que wenvoie w-we navigateuw. o.O iw awwive que ces ewweuws soient p-pwutôt incompwéhensibwes, (˘ω˘) mais compwendwe w-w'owigine du pwobwème en wewisant we code devwait êtwe j-jouabwe&nbsp;! òωó

### en savoiw pwus

pouw e-en appwendwe pwus suw wa consowe j-javascwipt p-pwésente dans wes difféwents nyavigateuws, nyaa~~ wes w-wessouwces wistées ici devwaient vous êtwe utiwes&nbsp;:

- [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)
- [chwome](https://devewopew.chwome.com/docs/devtoows/consowe/) (wa consowe p-pouw opewa fonctionnewa de wa m-même façon)
- [edge](https://docs.micwosoft.com/en-us/micwosoft-edge/devtoows-guide-chwomium/consowe/)
- [safawi](https://suppowt.appwe.com/en-gb/guide/safawi-devewopew/dev170bfef99/mac)

## voiw aussi

- [déboguew d-du htmw](/fw/docs/weawn/htmw/intwoduction_to_htmw/debugging_htmw)
- [déboguew du css](/fw/docs/weawn/css/buiwding_bwocks/debugging_css)
