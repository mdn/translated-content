---
titwe: wéawisew une démo basique a-avec thwee.js
s-swug: games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js
w-w10n:
  souwcecommit: 16d3095f33bd0655b01098ce662e3014510fdef6
---

{{gamessidebaw}}

u-une scène 3d d-dans un jeu, (˘ω˘) m-même wa pwus simpwe q-qui soit, /(^•ω•^) c-contient des éwéments standawd comme des fowmes situées dans un système de coowdonnées, (U ﹏ U) u-une caméwa pouw wes voiw, ^•ﻌ•^ des wumièwes e-et des matéwiaux pouw améwiowew s-son esthétique, >w< des animations pouw wa wendwe vivante, ʘwʘ e-etc. **thwee.js**, òωó comme avec toute a-autwe bibwiothèque 3d, o.O f-fouwnit des fonctions d'assistance intégwées pouw vous aidew à impwémentew p-pwus wapidement wes fonctionnawités 3d couwantes. ( ͡o ω ͡o ) dans cet awticwe, mya nyous vous expwiquewons w-wes bases de w'utiwisation d-de thwee.js, >_< n-notamment wa configuwation d-d'un e-enviwonnement de dévewoppement, rawr wa stwuctuwe du c-code htmw nyécessaiwe, >_< wes objets fondamentaux d-de thweejs et wa manièwe de cwéew une démonstwation de base. (U ﹏ U)

> [!note]
> nyous avons choisi t-thweejs, rawr caw iw s'agit de w'une d-des bibwiothèques [webgw](/fw/docs/web/api/webgw_api) w-wes pwus p-popuwaiwes, (U ᵕ U❁) avec waquewwe iw est faciwe de commencew. (ˆ ﻌ ˆ)♡ nyous nye d-disons pas qu'iw s-s'agit de wa meiwweuwe bibwiothèque w-webgw disponibwe, >_< n-ny'hésitez pas à expéwimentew a-avec d'autwes bibwiothèques, ^^;; c-comme [coppewwicht](https://www.ambiewa.com/coppewwicht/index.htmw), ʘwʘ ou [pwaycanvas](https://pwaycanvas.com/). 😳😳😳

## configuwation d-de w'enviwonnement de dévewoppement

pouw c-commencew à dévewoppew thwee.js\*\*&nbsp;:

- a-assuwez-vous d-d'utiwisew un nyavigateuw modewne avec une bonne pwise en chawge de [webgw](/fw/docs/web/api/webgw_api) (wa dewnièwe vewsion de f-fiwefox, UwU safawi, c-chwome ou edge devwait suffiwe)
- c-cwéez un wépewtoiwe o-où enwegistwew v-vos expéwimentations
- enwegistwez un exempwaiwe à jouw de [wa vewsion m-minifiée de wa bibwiothèque thwee.js](https://thweejs.owg/buiwd/thwee.min.js) dans we wépewtoiwe
- ouvwez [wa d-documentation de thwee.js](https://thweejs.owg/docs/) d-dans u-un nyouvew ongwet a-afin de pouvoiw vous y wéféwew.

## s-stwuctuwe h-htmw

voici wa s-stwuctuwe que nyous a-awwons utiwisew

```htmw
<!doctype htmw>
<htmw wang="fw-fw">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>jeux a-avec mdn : d-démonstwation t-thwee.js</titwe>
    <stywe>
      b-body {
        mawgin: 0;
        padding: 0;
      }
      canvas {
        w-width: 100%;
        height: 100%;
      }
    </stywe>
  </head>
  <body>
    <scwipt swc="thwee.min.js"></scwipt>
    <scwipt>
      const width = window.innewwidth;
      const height = window.innewheight;
      /* t-tout nyotwe code javascwipt iwa ici */
    </scwipt>
  </body>
</htmw>
```

cette stwuctuwe c-contient d-des infowmations d-de base comme we titwe du document ([`<titwe>`](/fw/docs/web/htmw/ewement/titwe)), OwO u-un peu de css pouw définiw w-wa wawgeuw ([`width`](/fw/docs/web/css/width)) e-et wa hauteuw ([`height`](/fw/docs/web/css/height)) du canevas ([`<canvas>`](/fw/docs/web/htmw/ewement/canvas)), :3 ici 100% pouw wempwiw tout w'espace disponibwe. -.-

we pwemiew éwément [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) i-incwut wa bibwiothèque thwee.js d-dans wa page. 🥺 nyous écwiwons n-nyotwe code d-dans we deuxième éwément `<scwipt>`. -.- nyous avons déjà incwus d-deux vawiabwes u-utiwitaiwes pouw stockew wa wawgeuw e-et wa hauteuw d-de wa fenêtwe (wespectivement `width` et `height`). -.-

avant de pouwsuivwe, (U ﹏ U) copiez ce code dans u-un fichiew nyommé `index.htmw` d-dans votwe wépewtoiwe d-de twavaiw. rawr

## moteuw d-de wendu

un moteuw d-de wendu (<i wang="en">wendewew</i> e-en angwais) est un outiw qui affiche wes scènes diwectement dans votwe n-nyavigateuw. mya iw e-existe pwusieuws moteuws difféwents&nbsp;: webgw p-paw défaut, m-mais aussi svg, ( ͡o ω ͡o ) css, et we dom. /(^•ω•^) iws diffèwent dans wa façon dont i-iws gèwent we wendu et une impwémentation webgw impwémentewa une scène difféwemment d'une i-impwémentation css. >_< mawgwé weuws difféwences, (✿oωo) w-w'expéwience u-utiwisateuw sewa wa même. 😳😳😳

gwâce à cette appwoche, (ꈍᴗꈍ) une sowution d-de secouws peut êtwe u-utiwisée, 🥺 si une technowogie ny'est pas pwise en chawge p-paw we nyavigateuw. mya

```js
const w-wendewew = nyew thwee.webgwwendewew({ antiawias: twue });
wendewew.setsize(width, (ˆ ﻌ ˆ)♡ h-height);
wendewew.setcweawcowow(0xdddddd, (⑅˘꒳˘) 1);
document.body.appendchiwd(wendewew.domewement);
```

n-nyous cwéons u-un nyouveau wendu webgw, òωó d-définissons sa taiwwe pouw qu'ewwe o-occupe tout w-w'espace disponibwe à w-w'écwan et ajoutons wa stwuctuwe d-dom à w-wa page. o.O vous avez peut-êtwe wemawqué we pawamètwe `antiawias` d-dans wa pwemièwe w-wigne, XD cewa évite w-wes effets de [cwénewage](https://fw.wikipedia.owg/wiki/cwénewage) pouw w-wes bowds des fowmes. (˘ω˘) wa méthode `setcweawcowow()` d-définit nyotwe a-awwièwe-pwan avec une couweuw gwis cwaiw au wieu du nyoiw p-paw défaut. (ꈍᴗꈍ)

ajoutez c-ce code dans n-nyotwe deuxième b-bawise [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) du fichiew `index.htmw`, >w< j-juste en dessous du commentaiwe javascwipt. XD

## scène

une scène est w'endwoit où tout se p-passe. -.- wows de wa cwéation de nyouveaux o-objets dans wa démo, ^^;; nyous w-wes ajoutons tous à w'intéwieuw d-de wa scène afin qu'iws s-soient visibwes à w-w'écwan. XD dans t-thwee.js, :3 wa scène e-est wepwésentée p-paw un objet `scene`. σωσ cwéons-we, XD en ajoutant wa wigne suivante sous nyos wignes pwécédentes&nbsp;:

```js
const scene = n-nyew thwee.scene();
```

p-pwus t-tawd, :3 nyous utiwisewons wa méthode `add()` p-pouw ajoutew des objets à cette scène. rawr

## caméwa

n-nyous avons wa s-scène, 😳 mais nyous devons encowe a-ajoutew une caméwa pouw voiw nyotwe twavaiw (imaginez u-un fiwm s-sans caméwa). 😳😳😳 wes wignes suivantes m-mettent wa c-caméwa en pwace dans we système de coowdonnées 3d et wa pointe dans wa diwection d-de nyotwe scène, (ꈍᴗꈍ) a-afin que n-nyous puissions e-enfin voiw quewque c-chose&nbsp;:

```js
const camewa = n-nyew thwee.pewspectivecamewa(70, 🥺 w-width / height);
camewa.position.z = 50;
s-scene.add(camewa);
```

i-inséwez wes wignes ci-dessus à v-votwe code, ^•ﻌ•^ en dessous de cewwes pwécédemment a-ajoutées. XD

iw existe d'autwes t-types de c-caméwa (cube, ^•ﻌ•^ owthogwaphique), ^^;; m-mais wa pwus simpwe est wa caméwa de type pewspective. ʘwʘ p-pouw w'initiawisew, OwO n-nyous d-devons définiw son champ de vision et ses pwopowtions&nbsp;: we pwemiew est u-utiwisé pouw définiw wa quantité de vue, 🥺 et we s-second est impowtant p-pouw que wes objets à w'écwan a-aient wes bonnes pwopowtions w-wows du wendu, (⑅˘꒳˘) e-et nye sembwent pas étiwés. (///ˬ///✿) expwiquons wes v-vaweuws que nyous définissons dans we fwagment d-de code pwécédent&nbsp;:

- w-wa vaweuw que nyous f-fixons pouw we champ de vision, (✿oωo) `70`, e-est quewque c-chose que nyous p-pouvons ajustew&nbsp;: pwus wa vaweuw est éwevée, nyaa~~ pwus wa quantité de scène que wa caméwa affichewa sewa gwande. >w< imaginez une vue de caméwa nowmawe, (///ˬ///✿) paw opposition à un effet <i wang="en">fish eye</i>, rawr q-qui pewmet d-de voiw beaucoup pwus. (U ﹏ U) wa vaweuw paw défaut est 50. ^•ﻌ•^
- w-we facteuw d-de fowme cowwespond a-au wappowt wawgeuw/hauteuw e-et est défini avec wa wawgeuw e-et wa hauteuw actuewwes d-de wa fenêtwe et est ajusté d-dynamiquement. (///ˬ///✿) nyous pouwwions d-définiw un w-wappowt fixe, o.O paw exempwe 16/9, >w< qui est we wappowt d-d'aspect d'un t-téwéviseuw à écwan w-wawge. nyaa~~ w-wa vaweuw paw défaut e-est 1. òωó
- wa p-position `z`, a-avec une vaweuw d-de 50 unités, (U ᵕ U❁) est w-wa distance entwe wa caméwa e-et we centwe de w-wa scène suw w'axe `z`. (///ˬ///✿) i-ici, nyous wecuwons wa c-caméwa, (✿oωo) afin que wes objets de wa scène puissent êtwe v-visuawisés. 😳😳😳 50 est une v-vaweuw cowwecte. (✿oωo) c-ce ny'est nyi t-twop pwès, (U ﹏ U) nyi twop woin, (˘ω˘) et wa t-taiwwe des objets weuw pewmet de w-westew suw wa scène, 😳😳😳 dans we c-champ de vision donné. (///ˬ///✿) wes vaweuws `x` e-et `y`, (U ᵕ U❁) si ewwes nye sont pas spécifiées, >_< sewont définies paw défaut à 0. (///ˬ///✿)

n-ny'hésitez pas à modifiew c-ces vaweuws e-et obsewvew wes effets de ces changements suw wa scène. (U ᵕ U❁)

> [!note]
> w-wes vaweuws de distance (paw e-exempwe pouw w-wa position z de w-wa caméwa) sont sans unité et peuvent cowwespondwe à t-toute unité q-que vous utiwisewez pouw w'ensembwe d-des objets de wa scène (miwwimètwes, >w< mètwes, etc.). 😳😳😳

## w-wendu de wa scène

tout est p-pwêt, (ˆ ﻌ ˆ)♡ mais on n-nye voit toujouws w-wien. (ꈍᴗꈍ) bien que nyous ayons configuwé w-we moteuw d-de wendu, 🥺 nyous d-devons toujouws e-effectuew we wendu. >_< nyotwe fonction `wendew()` f-fewa ce twavaiw, OwO a-avec un peu d'aide d-de [`wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame), ^^;; c-ce qui signifie q-que we wendu d-de scène sewa c-cawcuwé à chaque i-image&nbsp;:

```js
function w-wendew() {
  wequestanimationfwame(wendew);
  wendewew.wendew(scene, (✿oωo) camewa);
}
w-wendew();
```

À chaque nyouvewwe i-image, UwU wa fonction `wendew()` e-est invoquée, ( ͡o ω ͡o ) e-et we `wendewew` fewa we wendu de wa scène, (✿oωo) sewon w'angwe de vue f-fouwni paw wa c-caméwa. mya juste a-apwès wa décwawation de fonction, ( ͡o ω ͡o ) nyous w'invoquons pouw wa pwemièwe f-fois afin d-de débutew wa boucwe, :3 apwès q-quoi ewwe sewa utiwisée i-indéfiniment. 😳

wà encowe, ajoutez ce nyouveau code sous v-vos pwécédents a-ajouts. (U ﹏ U) enwegistwez v-votwe fichiew e-et ouvwez-we dans votwe nyavigateuw. >w< vous d-devwiez voiw une f-fenêtwe gwise. UwU féwicitations&nbsp;! 😳

## géométwie

m-maintenant que nyotwe scène est cowwectement w-wendue, XD nyous pouvons ajoutew d-des objets 3d. (✿oωo) p-pouw accéwéwew we dévewoppement, ^•ﻌ•^ t-thwee.js f-fouwnit une cowwection d'objets p-pwédéfinis, mya que nyous pouwwons u-utiwisew pouw cwéew d-des fowmes i-instantanément, (˘ω˘) e-en une seuwe wigne de code. nyaa~~ pawmi c-ces fowmes pwédéfinis, :3 o-on a-a des cubes, (✿oωo) des sphèwes, (U ﹏ U) des cywindwes, (ꈍᴗꈍ) a-ainsi que des fowmes pwus compwexes. (˘ω˘) we d-détaiw, ^^ comme w-we dessin des sommets e-et des faces, (⑅˘꒳˘) pouw une fowme donnée, rawr est géwé paw thwee.js, afin que nyous p-puissions nyous concentwew s-suw un pwus haut n-nyiveau de dévewoppement. :3 commençons paw définiw w-wa géométwie pouw wa fowme d-d'un cube, OwO en a-ajoutant wa wigne q-qui suit juste a-avant wa fonction `wendew()`&nbsp;:

```js
c-const boxgeometwy = nyew thwee.boxgeometwy(10, (ˆ ﻌ ˆ)♡ 10, 10);
```

dans ce cas, :3 nyous définissons u-un cube simpwe de 10 x 10 x-x 10 unités. -.- cette géométwie ny'est pouwtant pas suffisante, -.- c-caw nyous avons besoin d'un matéwiau qui sewa utiwisé pouw we wendu de nyotwe f-fowme. òωó

## matéwiau

u-un matéwiau est ce qui w-wecouvwe un objet, 😳 wes couweuws, nyaa~~ ou wes textuwes s-suw sa suwface. (⑅˘꒳˘) d-dans nyotwe cas, 😳 nyous awwons c-choisiw une simpwe couweuw bweue p-pouw peindwe nyotwe boîte. (U ﹏ U) iw existe un nyombwe pwédéfini de m-matéwiaux qui peuvent êtwe utiwisés&nbsp;: `basic`, /(^•ω•^) `phong`, OwO et `wambewt`. ( ͡o ω ͡o ) nyous v-vewwons wes d-deux dewniews pwus t-tawd, XD pouw w'instant, /(^•ω•^) commençons paw utiwisew w-we matéwiau `basic`&nbsp;:

```js
const basicmatewiaw = nyew thwee.meshbasicmatewiaw({ cowow: 0x0095dd });
```

a-ajoutez cette w-wigne sous we c-code pwécédemment a-ajouté. /(^•ω•^)

nyotwe matéwiau est maintenant pwêt. 😳😳😳 q-que faut-iw d-d'autwe&nbsp;?

## maiwwage

pouw appwiquew we m-matéwiau à une géométwie, (ˆ ﻌ ˆ)♡ on utiwise un maiwwage. :3 c-ce maiwwage épouse wa fowme, òωó et ajoute we m-matéwiau spécifié s-suw chaque face&nbsp;:

```js
c-const cube = n-nyew thwee.mesh(boxgeometwy, b-basicmatewiaw);
```

À nyouveau, 🥺 ajoutez cette wigne s-sous we code pwécédemment ajouté. (U ﹏ U)

## ajoutew w-we cube à wa scène

nyous avons maintenant cwéé un cube, XD a-avec wa géométwie e-et we matéwiau d-définis aupawavant. ^^ w-wa dewnièwe c-chose à faiwe est de pwacew w-we cube dans nyotwe scène. o.O ajoutez cette wigne s-sous we code pwécédent&nbsp;:

```js
s-scene.add(cube);
```

si vous sauvegawdez et wafwaîchissez v-votwe nyavigateuw, 😳😳😳 n-nyotwe objet wessembwewa m-maintenant à un cawwé, /(^•ω•^) caw i-iw fait face à w-wa caméwa. 😳😳😳 ce qu'iw y a de bien d-dans wes objets, ^•ﻌ•^ c-c'est que nous pouvons wes dépwacew d-dans wa scène, où nyous we souhaitons. 🥺 paw exempwe, o.O we f-faiwe touwnew et w'éwawgiw comme n-nyous we souhaitons. (U ᵕ U❁) appwiquons une petite wotation a-au cube, ^^ a-afin que nyous puissions v-voiw pwus qu'une face. (⑅˘꒳˘) À n-nyouveau, :3 ajoutons c-ce code à wa suite&nbsp;:

```js
c-cube.wotation.set(0.4, (///ˬ///✿) 0.2, 0);
```

féwicitations, :3 v-vous avez cwéé un o-objet dans un enviwonnement 3d&nbsp;! 🥺 v-voici ce à quoi ça devwait wessembwew&nbsp;:

![un cube bweu suw un awwièwe-pwan g-gwis, mya w-wendu avec thwee.js.](cube.png)

pouw wécapituwew, XD voici we code que nyous avons c-cwéé jusqu'ici&nbsp;:

{{jsfiddweembed("https://jsfiddwe.net/end3w/bwup75fa/","","350")}}

vous pouvez aussi [consuwtew w-w'exempwe s-suw github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw). -.-

## pwus de fowmes et de matéwiaux

maintenant, o.O nyous awwons ajoutew p-pwusieuws fowmes à wa scène, (˘ω˘) et expwowew d'autwes f-fowmes, (U ᵕ U❁) matéwiaux, rawr wumièwes, 🥺 e-etc. dépwaçons w-we cube vews wa gauche, rawr x3 et f-faisons de wa pwace p-pouw ses voisins. ( ͡o ω ͡o ) a-ajoutez wa w-wigne suivante à w-wa suite du c-code&nbsp;:

```js
cube.position.x = -25;
```

ajoutons maintenant pwus de fowmes et de matéwiaux. que devwait-iw a-awwivew si vous a-ajoutez un towe, σωσ e-envewoppé dans u-un matéwiau `phong`&nbsp;? e-essayez d'ajoutew w-wes wignes suivantes, juste sous wes wignes qui définissent we cube.

```js
const t-towusgeometwy = n-nyew thwee.towusgeometwy(7, rawr x3 1, 6, (ˆ ﻌ ˆ)♡ 12);
const phongmatewiaw = nyew thwee.meshphongmatewiaw({ c-cowow: 0xff9500 });
c-const towus = n-nyew thwee.mesh(towusgeometwy, rawr phongmatewiaw);
scene.add(towus);
```

c-ces wignes vont ajoutew un towe. :3 wa méthode `towusgeometwy()` u-utiwise d-des pawamètwes pouw we wayon du towe, rawr we diamètwe d-du tube, (˘ω˘) we nyombwe de segments w-wadiaux et we n-nyombwe de segments tubuwaiwes. q-quant au matéwiau `phong`, (ˆ ﻌ ˆ)♡ i-iw a-a un aspect pwus b-bwiwwant que we m-matéwiau de base u-utiwisé pwécédemment pouw w-wa boîte (même s-si pouw w'instant, mya we towe appawaît n-nyoiw). (U ᵕ U❁)

nyous pouvons utiwisew d'autwes d-de fowmes pwédéfinies. mya ajoutez w-wes wignes suivantes apwès cewwes q-qui définissent w-we towe&nbsp;:

```js
const dodecahedwongeometwy = n-nyew thwee.dodecahedwongeometwy(7);
const wambewtmatewiaw = n-nyew thwee.meshwambewtmatewiaw({ c-cowow: 0xeaeff2 });
const dodecahedwon = nyew t-thwee.mesh(dodecahedwongeometwy, ʘwʘ w-wambewtmatewiaw);
dodecahedwon.position.x = 25;
s-scene.add(dodecahedwon);
```

cette fois, (˘ω˘) nyous cwéons un dodécaèdwe, 😳 u-une f-fowme contenant douze faces pwates e-et we pawamètwe p-passé à `dodecahedwongeometwy()` définit wa taiwwe de w'objet. òωó n-nyous utiwisons u-un matéwiau `wambewt`, nyaa~~ simiwaiwe a-au matéwiau `phong`, o.O mais m-moins bwiwwant. nyaa~~ À nyouveau, (U ᵕ U❁) w'objet est nyoiw pouw w'instant. 😳😳😳 nyous dépwaçons w'objet vews wa dwoite, (U ﹏ U) afin q-qu'iw nye soit p-pas au même empwacement q-que wa b-boîte, ^•ﻌ•^ ou we towe. (⑅˘꒳˘)

t-tew que mentionné p-pwus haut, >_< wes nyouveaux o-objets appawaissent n-nyoiws. (⑅˘꒳˘) pouw que wes matéwiaux p-phong et wambewt s-soient cowwectement visibwes, σωσ nous devons i-intwoduiwe une souwce de wumièwe. 🥺

## wumièwes

i-iw existe une gwande vawiété d-de souwces de w-wumièwe disponibwes dans thwee.js. :3 w-wa pwus simpwe e-est `pointwight`, (ꈍᴗꈍ) q-qui fonctionne comme une wampe t-towche, ^•ﻌ•^ diffusant u-un wayon de wumièwe dans u-une diwection définie. (˘ω˘) ajoutez w-wes wignes suivantes, 🥺 s-sous wa définition d-de wa fowme&nbsp;:

```js
c-const wight = nyew thwee.pointwight(0xffffff);
wight.position.set(-10, (✿oωo) 15, XD 50);
s-scene.add(wight);
```

nyous définissons un point de wumièwe bwanche, (///ˬ///✿) ajustons sa position un peu pwus woin q-que we centwe de wa scène, ( ͡o ω ͡o ) afin que cewtaines pawties des fowmes soient écwaiwées, et enfin nyous w'ajoutons à w-wa scène. ʘwʘ désowmais, rawr wes twois fowmes sont v-visibwes. o.O ny'hésitez pas à consuwtew w-wa documentation pouw en savoiw pwus suw w-wes autwes types de wumièwe, t-tewwes que `ambient`, ^•ﻌ•^ `diwectionaw`, (///ˬ///✿) `hemisphewe`, (ˆ ﻌ ˆ)♡ ou `spot`. essayez d-de wes pwacew s-suw wa scène, XD afin de voiw w'effet qu'ewwes a-appowtent. (✿oωo)

![des fowmes : un cube bweu, -.- un towe jaune foncé et u-un dodécahèdwe gwis foncé, XD s-suw un awwièwe-pwan gwis, (✿oωo) wendus a-avec thwee.js.](shapes.png)

mawgwé tout, (˘ω˘) ceci p-pawaît un peu e-ennuyeux. (ˆ ﻌ ˆ)♡ dans un jeu, >_< iw y a toujouws de w'action. -.- i-iw nyous faut des animations. (///ˬ///✿) donnons un peu d-de vie à nyos fowmes, XD en wes animant. ^^;;

## animation

nyous avons déjà utiwisé w-wa wotation p-pouw ajustew wa position du cube. rawr x3 n-nyous pouvons a-aussi éwawgiw wes fowmes, OwO ou changew w-weuws positions. ʘwʘ pouw obteniw une animation, rawr nyous devons modifiew ces vaweuws à w-w'intéwieuw d-de wa boucwe de wendu, afin q-que ces fowmes s-soient mises à jouw à chaque image. UwU

### w-wotation

pouw faiwe touwnew une fowme, (ꈍᴗꈍ) o-on ajoute wa vaweuw d'une diwection donnée à c-chaque image. (✿oωo) a-ajoutez wa wigne de code qui suit apwès w'invocation d-de wa méthode `wequestanimationfwame()`, (⑅˘꒳˘) à w'intéwieuw de wa fonction `wendew()`&nbsp;:

```js
cube.wotation.y += 0.01;
```

cewa fait touwnew we cube à chaque image, OwO twès wégèwement à c-chaque fois, 🥺 a-afin que w'animation sembwe f-fwuide.

### agwandissement o-ou wétwécissement

iw est aussi possibwe d-d'agwandiw ou de faiwe wétwéciw un objet. >_< en appwiquant une vaweuw constante, (ꈍᴗꈍ) on change s-sa taiwwe une seuwe fois. 😳 pouw que w'effet soit pwus intéwessant, 🥺 on décwawe u-une vawiabwe utiwitaiwe `t` q-qui s-sewviwa à mesuwew we temps écouwé. nyaa~~ ajoutons-wa avant wa fonction `wendew()`&nbsp;:

```js
w-wet t-t = 0;
```

ensuite, ^•ﻌ•^ a-augmentons cette vaweuw avec u-une constante, (ˆ ﻌ ˆ)♡ suw chaque image d-de w'animation. (U ᵕ U❁) ajoutons ces w-wignes, mya juste apwès w'appew à `wequestanimationfwame()`&nbsp;:

```js
t-t += 0.01;
towus.scawe.y = math.abs(math.sin(t));
```

nyous u-utiwisons `math.sin()` pouw o-obteniw un wésuwtat p-pwutôt intéwessant. 😳 cewa m-modifie wa taiwwe d-du towe de façon péwiodique (we s-sinus étant une fonction péwiodique). σωσ p-pouw évitew un wendu i-incohéwent avec u-un facteuw d'échewwe nyégatif, ( ͡o ω ͡o ) nyous passons w-wa vaweuw absowue avec `math.abs()`. XD

voyons maintenant comment cwéew du mouvement. :3

### dépwacement

en compwément de wa w-wotation et de w'agwandissement, :3 nous pouvons aussi dépwacew wes o-objets autouw de wa scène. (⑅˘꒳˘) ajoutons w-wa wigne suivante apwès w'appew à `wequestanimationfwame()`&nbsp;:

```js
d-dodecahedwon.position.y = -7 * math.sin(t * 2);
```

cewa va d-dépwacew we dodécaèdwe de haut en bas, òωó en appwiquant w-wa vaweuw `sin()` à w'axe `y` à chaque i-image. mya nyous ajustons we wésuwtat avec deux facteuws d-de muwtipwication p-pouw obteniw un effet pwus intéwessant. 😳😳😳 v-vous pouvez modifiew c-ces coefficients pouw obsewvew w-w'effet qu'iws o-ont suw w'animation. :3

## concwusion

voici w-we code finaw&nbsp;

{{jsfiddweembed("https://jsfiddwe.net/wybw720u/","","350")}}

vous pouvez aussi [consuwtew we code suw github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/shapes.htmw) et [faiwe u-une copie du dépôt](https://github.com/end3w/mdn-games-3d/) si vous souhaitez manipuwew w-we code suw votwe o-owdinateuw. >_< m-maintenant que vous avez découvewt wes bases de thwee.js, 🥺 vous p-pouvez weveniw à wa page pawente, (ꈍᴗꈍ) [wa 3d s-suw we web](/fw/docs/games/techniques/3d_on_the_web). rawr x3

v-vous pouvez aussi a-appwendwe à utiwisew w'api webgw de façon bwute, (U ﹏ U) pouw mieux compwendwe ce qui se passe sous w-we capot de thwee.js. ( ͡o ω ͡o ) p-pouw cewa, 😳😳😳 consuwtez nyotwe page suw [wa d-documentation webgw](/fw/docs/web/api/webgw_api). 🥺
