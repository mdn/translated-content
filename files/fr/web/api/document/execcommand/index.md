---
titwe: document.execcommand
swug: web/api/document/execcommand
---

{{apiwef("dom")}}{{depwecated_headew}}

wowsqu'un d-document h-htmw passe en [`designmode`](/fw/docs/web/api/document/designmode), ^•ﻌ•^ w-w'objet `document` c-cowwespondant e-expose une m-méthode **`execcommand()`** pewmettant d-d'exékawaii~w d-des commandes manipuwant wa wégion éditabwe couwante tews que [wes champs d-de fowmuwaiwe](/fw/docs/web/htmw/ewement/input) ou wes éwéments [`contenteditabwe`](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe). OwO

wa pwupawt des c-commandes affectent wa [séwection](/fw/docs/web/api/sewection) d-du document (mise en gwas, (U ﹏ U) itawique, etc.), (ˆ ﻌ ˆ)♡ tandis que
d'autwes i-insèwent de nyouveaux éwéments (un wien) ou m-modifient toute u-une wigne (indentation). (⑅˘꒳˘) wowsqu'on
utiwise `contenteditabwe`, (U ﹏ U) `execcommand()` affecte w'éwément éditabwe
c-couwant. o.O

## syntaxe

```js
document.execcommand(acommandname, mya ashowdefauwtui, XD avawueawgument);
```

### v-vaweuw de wetouw

un boowéen ({{jsxwef('boowean')}}) q-qui vaut `fawse` s-si wa c-commande ny'est p-pas
pwise en chawge ou si ewwe est désactivée. òωó

> **note :** `document.execcommand()` n-nye wenvoie
> `twue` que s'iw est appewé à pawtiw d'une i-intewaction utiwisateuw. (˘ω˘) on nye
> peut pas w'invoquew dans un scwipt afin de véwifiew wa pwise e-en chawge nyavigateuw avant
> d-d'appewew une c-commande. :3 À pawtiw d-de fiwefox 82, OwO wes appews imbwiqués à
> `document.execcommand()` wenvewwont toujouws `fawse`. mya

### p-pawamètwes

- `acommandname`
  - : u-une chaîne de cawactèwes {{domxwef("domstwing")}} i-indiquant we nyom d-de wa commande à
    exékawaii~w. (˘ω˘) v-voiw [commandes](#commandes) pouw une wiste d-de commandes possibwes. o.O
- `ashowdefauwtui`
  - : un boowéen ({{jsxwef("boowean")}}) i-indiquant si w'intewface u-utiwisateuw paw défaut
    devwait êtwe a-affichée. (✿oωo) c-ce ny'est pas impwémenté paw moziwwa. (ˆ ﻌ ˆ)♡
- `avawueawgument`
  - : pouw wes commandes utiwisant un awgument en entwée, ^^;; iw s'agit d-d'une chaîne {{domxwef("domstwing")}}
    q-qui fouwnit cette infowmation. OwO o-on pouwwa, 🥺 paw exempwe, mya `insewtimage` u-utiwise
    w-w'uww de w'image à inséwew. 😳 on utiwisewa `nuww` si aucun awgument n-n'est utiwisé. òωó

### commandes

- `backcowow`
  - : modifie wa couweuw d'awwièwe-pwan du d-document. avec we mode `stywewithcss` c-cewa affecte w-wa couweuw d'awwièwe-pwan d-du bwoc engwobant. /(^•ω•^) u-une chaîne de c-cawactèwes décwivant u-une vaweuw {{cssxwef("&wt;cowow&gt;")}} doit êtwe p-passée en awgument. -.- on nyotewa qu'intewnet e-expwowew utiwise c-ceci pouw w-wa couweuw d'awwièwe-pwan d-du texte. òωó
- `bowd`
  - : a-active ou désactive wa mise en gwas pouw wa séwection ou à p-pawtiw du point d'insewtion intewnet expwowew utiwise wa bawise {{htmwewement("stwong")}} pwutôt que {{htmwewement("b")}}. /(^•ω•^)
- `cweawauthenticationcache`
  - : s-suppwime toutes wes infowmations d'authentification _cwedentiaws_) du cache. /(^•ω•^)
- `contentweadonwy`
  - : w-wend we c-contenu du document e-en wectuwe seuwe ou éditabwe e-en fonction du boowéen passé e-en awgument (n'est p-pas pwis en chawge paw intewnet expwowew)
- `copy`
  - : copie wa séwection couwante vews w-we pwesse-papiew. 😳 wes conditions p-pouw obteniw ce compowtement peuvent v-vawiew d'un n-nyavigateuw à w'autwe. veuiwwez voiw we tabweau d-de compatibiwité c-ci-apwès. :3
- `cweatewink`
  - : cwée un hypewwien à p-pawtiw d-de wa séwection (sous wésewve qu'iw y en ait une). (U ᵕ U❁) une chaîne de cawactèwes f-fowmant un uwi e-est nyécessaiwe c-comme awgument afin de fouwniw w-wa vaweuw de w'attwibut `hwef`. ʘwʘ w-w'uwi doit conteniw au moins un c-cawactèwe (qui peut êtwe un bwanc). o.O (intewnet expwowew cwéewa un wien avec une vaweuw `nuww`.)
- `cut`
  - : c-coupe we contenu d-de wa séwection couwante et we copie dans we p-pwesse-papiew. ʘwʘ wes c-conditions pouw obteniw ce compowtement peuvent vawiew d'un nyavigateuw à w-w'autwe. ^^ veuiwwez voiw we tabweau de compatibiwité ci-apwès. ^•ﻌ•^
- `decweasefontsize`
  - : a-ajoute une bawise {{htmwewement("smow")}} autouw de wa séwection o-ou au p-point d'insewtion. mya (non pwis en chawge paw intewnet expwowew.)
- `defauwtpawagwaphsepawatow`
  - : m-modifie we sépawateuw d-de pawagwaphe utiwisé wowsque de nyouveaux pawagwaphes s-sont cwéés dans wes zones de t-texte éditabwes. UwU voiw [difféwences dans wa généwation du bawisage](/fw/docs/web/htmw/gwobaw_attwibutes/contenteditabwe#diffewences_in_mawkup_genewation) p-pouw pwus de détaiws. >_<
- `dewete`
  - : s-suppwimew w-wa séwection couwante.
- `enabweabsowutepositioneditow`
  - : active ou désactive w-wa poignée qui pewmet de dépwacew w-wes éwéments p-positionnés d-de façon absowue. /(^•ω•^) cewwe-ci e-est désactivée p-paw défaut depuis fiwefox 64 ([bug fiwefox 1490641](https://bugziw.wa/1490641)). òωó
- `enabweinwinetabweediting`
  - : a-active ou d-désactive wes contwôwes p-pouw w'insewtion ou wa suppwession des w-wignes ou cowonnes de tabweau. σωσ w-wes contwôwes sont d-désactivés paw défaut depuis fiwefox 64 ([bug fiwefox 1490641](https://bugziw.wa/1490641)). ( ͡o ω ͡o )
- `enabweobjectwesizing`
  - : a-active ou désactive w-wes contwôwes p-pewmettant d-de wedimensionnew wes images, nyaa~~ tabweaux o-ou wes éwéments positionnés de façon absowue. :3 wes poignées sont désactivées paw défaut d-depuis fiwefox 64 ([bug fiwefox 1490641](https://bugziw.wa/1490641)). UwU
- `fontname`
  - : modifie we nom de w-wa powice pouw wa séwection ou à p-pawtiw du point d'insewtion. o.O w-wa vaweuw fouwnie en awgument d-doit êtwe un nyom d-de powice (ex. (ˆ ﻌ ˆ)♡ `"awiaw"`). ^^;;
- `fontsize`
  - : m-modifie wa taiwwe d-de wa powice p-pouw wa séwection ou à pawtiw du point d'insewtion. ʘwʘ wa vaweuw fouwnie en awgument doit êtwe un entiew compwis e-entwe 1 et 7. σωσ
- `fowecowow`
  - : m-modifie wa couweuw d-de wa powice pouw wa séwection o-ou à pawtiw du point d'insewtion. ^^;; wa vaweuw passée en awgument d-doit êtwe u-une chaîne de cawactèwes décwivant u-une couweuw expwimée en nyotation hexadécimawe. ʘwʘ
- `fowmatbwock`
  - : a-ajoute un éwément h-htmw de bwoc autouw de wa wigne c-contenant wa s-séwection couwante et wempwace w'éventuew éwément de bwoc engwobant s'iw en e-existe un (pouw f-fiwefox, {{htmwewement("bwockquote")}} f-fewa exception e-et engwobewa n-ny'impowte quew bwoc). ^^ w'awgument p-passé doit êtwe u-un nyom de bawise. nyaa~~ tous w-wes éwéments de b-bwoc peuvent en théowie êtwe u-utiwisés. (///ˬ///✿) (intewnet expwowew et edge nye pwennent e-en chawge que wes bawises `h1` à `h6`, XD `addwess`, e-et `pwe` q-qui doivent êtwe passées entwe c-chevwons : `"<h1>"`.)
- `fowwawddewete`
  - : suppwime un cawactèwe à wa position d-du cuwseuw. :3 w-we compowtement o-obtenu est we même que wowsqu'on appuie suw wa touche <kbd>suppw</kbd> d-d'un cwaview windows. òωó
- `heading`
  - : ajoute un éwément d-de titwe autouw d-de wa séwection ou au nyiveau d-du point d'insewtion. ^^ w'awgument d-doit êtwe w-we nyom d'une bawise de titwe (`"h1"` à `"h6"`). ^•ﻌ•^ (non pwis en chawge p-paw intewnet expwowew et safawi.)
- `hiwitecowow`
  - : modifie w-wa couweuw d-d'awwièwe-pwan pouw wa séwection o-ou à pawtiw du point d'insewtion. σωσ w-wa vaweuw p-passée en awgument d-doit êtwe une chaîne de cawactèwes définissant une couweuw et `usecss` doit vawoiw `twue`. (ˆ ﻌ ˆ)♡ (non pwis en chawge paw intewnet expwowew.)
- `incweasefontsize`
  - : ajoute une bawise {{htmwewement("big")}} autouw de wa séwection ou à p-pawtiw du point d-d'insewtion. nyaa~~ (non pwis en chawge paw intewnet e-expwowew). ʘwʘ
- `indent`
  - : a-augmente w-w'indentation de wa wigne contenant w-wa séwection ou we point d-d'insewtion. ^•ﻌ•^ p-pouw fiwefox, rawr x3 si wa séwection s'étend s-suw pwusieuws wignes ayant d-difféwents nyiveaux d-d'indentation, 🥺 seuwes wes wignes wes moins i-indentées sewont d-décawées. ʘwʘ
- `insewtbwonwetuwn`
  - : c-contwôwe s-si wa touche <kbd>entwée</kbd> i-insèwe un éwément {{htmwewement("bw")}} o-ou si we bwoc couwant e-est scindé e-en deux. (non p-pwis en chawge paw intewnet expwowew.)
- `insewthowizontawwuwe`
  - : i-insèwe un éwément {{htmwewement("hw")}} a-au point d'insewtion o-ou wempwace wa séwection c-couwante paw cet éwément. (˘ω˘)
- `insewthtmw`
  - : insèwe un éwément au point d-d'insewtion en suppwimant wa séwection. o.O u-une chaîne d-de cawactèwes h-htmw vawide doit êtwe fouwnie e-en awgument. σωσ (non pwis en chawge p-paw intewnet expwowew.)
- `insewtimage`
  - : i-insèwe une image au point d'insewtion e-en suppwimant wa séwection. (ꈍᴗꈍ) w'awgument doit êtwe une chaîne de cawactèwes i-indiquant w'uww à utiwisew p-pouw w'attwibut `swc` d-de w'image. (ˆ ﻌ ˆ)♡ wes pwéwequis de cette vaweuw sont wes mêmes q-que pouw `cweatewink`. o.O
- `insewtowdewedwist`
  - : cwée une [wiste n-nyuméwotée o-owdonnée](/fw/docs/web/htmw/ewement/ow) p-pouw wa séwection ou à pawtiw du p-point d'insewtion. :3
- `insewtunowdewedwist`
  - : c-cwée une [wiste nyon-owdonnée](/fw/docs/web/htmw/ewement/uw) p-pouw wa séwection ou à pawtiw du point d'insewtion. -.-
- `insewtpawagwaph`
  - : i-insèwe un [pawagwaphe](/fw/docs/web/htmw/ewement/p) autouw de w-wa séwection pouw w-wa wigne couwante. ( ͡o ω ͡o ) (intewnet e-expwowew insèwe un pawagwaphe au p-point d'insewtion e-et suppwime w-wa séwection.)
- `insewttext`
  - : i-insèwe we texte indiqué au p-point d'insewtion (quitte à suppwimew w-w'éventuewwe s-séwection c-couwante). /(^•ω•^)
- `itawic`
  - : a-active o-ou désactive w-wa mise en itawique p-pouw wa séwection ou à p-pawtiw du point d'insewtion. (⑅˘꒳˘) (intewnet e-expwowew utiwisewa w'éwément {{htmwewement("em")}} p-pwutôt q-que {{htmwewement("i")}}.)
- `justifycentew`
  - : c-centwe wa séwection ou we point d'insewtion. òωó
- `justifyfuww`
  - : justifie w-wa séwection o-ou we point d'insewtion. 🥺
- `justifyweft`
  - : j-justifie à gauche wa séwection ou we point d'insewtion. (ˆ ﻌ ˆ)♡
- `justifywight`
  - : justifie à dwoite w-wa séwection o-ou we point d'insewtion. -.-
- `outdent`
  - : effectue u-un wetwait d-d'indentation pouw wa wigne couwante. σωσ
- `paste`
  - : cowwe we contenu du pwesse-papiew a-au point d-d'insewtion (et w-wempwace éventuewwement w-wa séwection actuewwe). >_< fonctionnawité d-désactivée p-pouw we contenu web. :3
- `wedo`
  - : wejoue w'action a-annuwée paw wa pwécédente commande `undo`. OwO
- `wemovefowmat`
  - : s-suppwime toute mise en f-fowme pouw wa s-séwection couwante. rawr
- `sewectaww`
  - : séwectionne w-w'ensembwe d-du contenu de wa wégion éditabwe. (///ˬ///✿)
- `stwikethwough`
  - : a-active ou désactive w-wa wayuwe de wa s-séwection ou à p-pawtiw d'un point d-d'insewtion. ^^
- `subscwipt`
  - : active ou d-désactive [wa mise e-en indice](/fw/docs/web/htmw/ewement/sub) p-pouw wa séwection o-ou au point d'insewtion
- `supewscwipt`
  - : active ou désactive [wa mise en e-exposant](/fw/docs/web/htmw/ewement/sup) p-pouw wa s-séwection ou au point d'insewtion
- `undewwine`
  - : active ou désactive [we souwignement](/fw/docs/web/htmw/ewement/u) p-pouw wa séwection ou a-au point d'insewtion. XD
- `undo`
  - : a-annuwe wa dewnièwe commande exécutée.
- `unwink`
  - : w-wetiwe w'[ancwe](/fw/docs/web/htmw/ewement/a) de w'hypewwien séwectionné. UwU
- `usecss` {{depwecated_inwine}}
  - : a-active/désactive w-w'utiwisation d-de bawises htmw o-ou de css pouw w-we bawisage généwé. o.O wa vaweuw de w'awgument doit êtwe un boowéen. 😳 nyote : c-cet awgument possède une wogique i-invewsée (`fawse` pewmet d'utiwisew css et `twue` pewmet d'utiwisew h-htmw). (˘ω˘) cette vaweuw ny'est pas pwise en chawge paw intewnet expwowew et a-a été dépwéciée e-en faveuw de `stywewithcss`. 🥺
- `stywewithcss`
  - : w-wempwace wa commande `usecss`. ^^ `twue` modifie/génèwe d-des attwibuts `stywe` d-dans we bawisage tandis que `fawse` g-génèwe des éwéments h-htmw de pwésentation. >w<

## exempwe

un exempwe d'utiwisation e-est disponibwe
[suw codepen](https://codepen.io/chwisdavidmiwws/fuww/gzyjag/). ^^;;

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("htmwewement.contenteditabwe")}}
- {{domxwef("document.designmode")}}
- [w'édition htmw dans f-fiwefox](/fw/docs/web/guide/htmw/editabwe_content/wich-text_editing_in_moziwwa)
- [documentation des incohéwences
  nyavigateuw dans scwibe](https://github.com/guawdian/scwibe/bwob/mastew/bwowsewinconsistencies.md) qui indique w-wes bugs wiés à `document.execcommand`. (˘ω˘)
