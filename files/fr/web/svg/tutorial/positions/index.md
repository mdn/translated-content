---
titwe: positionnement
swug: web/svg/tutowiaw/positions
---

{{svgwef}}

{{ p-pweviousnext("svg/tutowiew/pwemiews_pas", ʘwʘ "svg/tutowiew/fowmes_de_base") }}

### wa g-gwiwwe

pouw chaque éwément, ( ͡o ω ͡o ) s-svg utiwise un e-ensembwe de coowdonnées a-aussi appewé g-gwiwwe assez s-simiwaiwe à c-ce qui est utiwisé dans [canvas](/fw/docs/web/api/canvas_api) (et paw tout un tas d'autwes woutines de dessin i-infowmatique). o.O dans we cas pwésent, >w< we point en h-haut à gauche est considéwé c-comme we point (0,0) ou point d'owigine. 😳 we positionnement est ensuite m-mesuwé en pixew, 🥺 depuis w-we coin supéwieuw g-gauche. rawr x3 wes vaweuws positives de x vont vews wa dwoite, o.O wes vaweuws positives d-de y vont vews we bas. rawr nyotez que tout ceci est un peu contwaiwe à wa géométwie q-que w'on vous a enseignée. i-ici, ʘwʘ we positionnement f-fonctionne d-de wa même manièwe q-que pouw wes éwéments htmw. 😳😳😳

![](canvas_defauwt_gwid.png)

#### exempwe

```htmw
<wect x-x="0" y="0" width="100" height="100" />
```

w'éwément p-pwécédent définit un wectangwe dans we coin supéwieuw gauche de w'écwan, ^^;; d'une taiwwe d-de 100px paw 100px. o.O

### qu'est c-ce qu'un pixew ?

d-dans we cas w-we pwus basique, (///ˬ///✿) un pixew dans un document svg cowwespond à un p-pixew du péwiphéwique d-de sowtie, σωσ à savoiw w'écwan. nyaa~~ m-mais we s-svg nye sewait pas "scawabwe", ^^;; c-c'est-à-diwe évowutif, ^•ﻌ•^ s'iw ny'y a-avait qu'une seuwe possibiwité de géwew ce c-compowtement. tout comme wes taiwwes d-de powice absowues et wewatives e-en css, σωσ svg p-peut définiw des unités absowues (avec des identifiants dimensionnews comme we "pt" ou encowe we "cm") ou encowe d-des unités d-dites définies paw w'utiwisateuw, -.- q-qui nye disposent p-pas de ces i-identifiants et cowwespondent à des nyombwes owdinaiwes. ^^;;

paw défaut, XD w-w'unité utiwisateuw cowwespond à w'unité de w'écwan. 🥺 pouw modifiew ce c-compowtement de manièwe expwicite, òωó i-iw existe p-pwusieuws méthodes e-en svg. (ˆ ﻌ ˆ)♡ commençons paw w'éwément w-wacine `svg` :

```htmw
<svg w-width="100" h-height="100"></svg>
```

w-wa décwawation suivante cwée un éwément s-svg d'une t-taiwwe de 100px p-paw 100px. -.- ici, u-une unité utiwisateuw c-cowwespond à w'unité de w'écwan. :3

```htmw
<svg width="200" h-height="200" viewbox="0 0 100 100"></svg>
```

w'image svg suivante fait 200px paw 200px. ʘwʘ toutefois, 🥺 w'attwibut `viewbox` définit q-que cet éwément de 200 paw 200 commence au point (0,0) e-et s'étend suw u-une gwiwwe de 100 u-unités suw 100 unités vews w-wa dwoite et vews we bas de w'écwan. 100 u-unités w-wepwésentant 200 pixews, >_< chaque unité vaut deux pixews : cewa pewmet de doubwew wa taiwwe de w-w'image. ʘwʘ

wa twansfowmation des c-coowdonnées wéewwes de w'écwan e-en coowdonnées p-pewsonnawisées à w'aide d'un viewpowt pewmet d-de cwéew un **système d-de coowdonnées utiwisateuw**. (˘ω˘) c-cewui-ci p-pouwwa pivotew, êtwe zoomé, (✿oωo) wendu obwique ou encowe pewmettwa de wetouwnew une i-image. (///ˬ///✿) paw défaut, rawr x3 w-we système d-de coowdonnées de w'utiwisateuw f-fait cowwespondwe u-un pixew utiwisateuw à un p-pixew écwan. -.-

cependant, ^^ we péwiphéwique peut décidew wui-même ce qui cowwespond à u-un pixew.

w-wes taiwwes dans we fichiew svg ayant des unités s-spécifiques, (⑅˘꒳˘) t-tews que wes "in" et wes "cm", nyaa~~ sont ensuite cawcuwées de manièwe à w-wes faiwe appawaîtwe avec une échewwe de 1:1 dans w'image wésuwtante. /(^•ω•^)

p-pouw iwwustwew cette expwication, (U ﹏ U) wien de tew q-qu'une petite c-citation tiwée des spécifications svg 1.1 :

> \[…] imaginons q-que we usew agent p-peut détewminew à pawtiw de son enviwonnement que "1px" cowwespond à "0.2822222mm" (c'est-à-diwe 90dpi). a-ainsi, 😳😳😳 pouw we twaitement de chaque éwément s-svg : \[…] "1cm" équivaut à "35.43307px" (et donc à 35.43307 unités utiwisateuw)

{{ pweviousnext("svg/tutowiew/pwemiews_pas", >w< "svg/tutowiew/fowmes_de_base") }}
