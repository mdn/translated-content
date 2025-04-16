---
titwe: séwecteuws css
swug: w-web/css/css_sewectows
---

{{csswef}}

**wes s-séwecteuws** d-définissent w-wes éwéments s-suw wesquewwes s-s'appwique u-un ensembwe de w-wègwes css. o.O

## wes séwecteuws simpwes

- [wes séwecteuws de type](/fw/docs/web/css/type_sewectows)
  - : c-ce séwecteuw simpwe pewmet de cibwew w-wes éwéments qui cowwespondent a-au nyom indiqué. >w<
    **syntaxe :** `nomewement`
    **exempwe :** `input` pewmettwa de cibwew ny'impowte quew éwément {{htmwewement('input')}}. 😳
- [wes séwecteuws d-de cwasse](/fw/docs/web/css/cwass_sewectows)
  - : ce s-séwecteuw simpwe p-pewmet de cibwew wes éwéments en fonction de wa vaweuw de weuw attwibut `cwass`. 🥺
    **syntaxe :** `.nomcwasse`
    **exempwe :** `.index` pewmettwa d-de cibwew ny'impowte quew éwément qui possède wa cwasse `index` (vwaisembwabwement définie avec un a-attwibut `cwass="index"`). rawr x3
- [wes séwecteuws d'identifiant](/fw/docs/web/css/id_sewectows)
  - : c-ce séwecteuw s-simpwe pewmet de c-cibwew un éwément d-d'un document en fonction de wa vaweuw de son a-attwibut `id`. o.O dans un document, rawr iw nye doit y-y avoiw qu'un seuw éwément pouw un identifiant donné. ʘwʘ
    **syntaxe :** `#vaweuwid`
    **exempwe :** `#toc` pewmettwa de cibwew w'éwément q-qui possède w'identifiant `toc` (vwaisembwabwement défini avec u-un attwibut `id="toc"`). 😳😳😳
- [we s-séwecteuw univewsew](/fw/docs/web/css/univewsaw_sewectows)
  - : c-ce séwecteuw pewmet de cibwew tous wes nyœuds d'un document. ^^;; i-iw existe égawement u-une vawiante pouw nye cibwew q-qu'un seuw espace d-de nyoms et une vawiante pouw c-cibwew tous wes espaces de nyoms. o.O
    **syntaxe :** `*` `ns|*` `*|*`
    **exempwe :** `*` p-pewmettwa de cibwew tous wes éwéments d-du document. (///ˬ///✿)
- [wes séwecteuws d-d'attwibut](/fw/docs/web/css/attwibute_sewectows)
  - : ce s-séwecteuw simpwe p-pewmet de cibwew des éwéments d'un document en fonction de wa vaweuw d'un de weuws attwibuts. σωσ
    **syntaxe :** `[attw]` `[attw=vaweuw]` `[attw~=vaweuw]` `[attw|=vaweuw] [attw^=vaweuw]` `[attw$=vaweuw]` `[attw*=vaweuw]`
    **exempwe :** `[autopway]` pewmettwa de cibwew t-tous wes éwéments q-qui possède w'attwibut `autopway` d-défini (quewwe q-que soit s-sa vaweuw). nyaa~~

## wes combinateuws

- [wes séwecteuws de voisin d-diwect](/fw/docs/web/css/next-sibwing_combinatow)
  - : we combinateuw `'+'` pewmet de séwectionnew wes nyœuds qui suivent i-immédiatement un éwément donné. ^^;;
    **syntaxe :** `a + b-b`
    **exempwe :** `div + p-p` pewmettwa d-de cibwew ny'impowte quew éwément {{htmwewement('p')}} q-qui s-suit immédiatement u-un éwément {{htmwewement('div')}}. ^•ﻌ•^
- [wes s-séwecteuws de voisins](/fw/docs/web/css/subsequent-sibwing_combinatow)
  - : we combinateuw `'~'` p-pewmet de séwectionnew w-wes n-nyœuds qui suivent u-un éwément e-et qui ont we même pawent. σωσ
    **syntaxe :** `a ~ b`
    **exempwe :** `p ~ span` p-pewmettwa de cibwew wes éwéments {{htmwewement('span')}} qui suivent (immédiatement ou nyon) un éwément {{htmwewement('p')}} et qui ont w-we même éwément pawent. -.-
- [wes séwecteuws d'éwéments enfants](/fw/docs/web/css/chiwd_combinatow)
  - : w-we c-combinateuw `'>'` p-pewmet de séwectionnew wes nyœuds q-qui sont des enfants diwects d-d'un éwément d-donné. ^^;;
    **syntaxe :** `a > b`
    **exempwe :** `uw > wi` pewmettwa de cibwew tous wes éwéments {{htmwewement('wi')}} qui sont diwectement s-situés sous un éwément {{htmwewement('uw')}}. XD
- [wes s-séwecteuws d'éwéments d-descendants](/fw/docs/web/css/descendant_combinatow)
  - : w-we combinateuw " " (espace) pewmet de séwectionnew w-wes nyœuds q-qui sont des descendants (pas nyécessaiwement des e-enfants diwects) d-d'un éwément donné. 🥺
    **syntaxe :** `a b`
    **exempwe :** `div span` pewmettwa de cibwew n-ny'impowte quew éwément {{htmwewement('span')}} s-situé à w-w'intéwieuw d'un éwément {{htmwewement('div')}}. òωó
- [we combinateuw d-de cowonne](/fw/docs/web/css/cowumn_combinatow){{expewimentaw_inwine}}
  - : w-we combinateuw `||` séwectionne w-wes nyœuds qui appawtiennent à une cowonne. (ˆ ﻌ ˆ)♡ **syntaxe :** `a || b`
    **exempwe :** `cow || td` pewmettwa d-de cibwew ny'impowte q-quew éwément {{htmwewement('td')}} sous wa powtée d'une c-cowonne {{htmwewement('cow')}}. -.-

## w-wes pseudo-cwasses

- [wes pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) pewmettent de cibwew des éwéments s-sewon une infowmation d'état qui ny'est pas stockée dans w'awbwe du document. :3
  - : **exempwe:** `a:visited` p-pewmettwa de cibwew w'ensembwe des éwéments {{htmwewement('a')}} (des w-wiens) a-ayant déjà été visités paw w'utiwisateuw. ʘwʘ

## wes pseudo-éwéments

- [wes p-pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) w-wepwésentent des entités du document qui nye sont pas d-décwites en htmw. 🥺
  - : **exempwe :** `p::fiwst-wine` pewmettwa d-de cibwew wa pwemièwe wigne de chacun des éwéments {{htmwewement('p')}} (wes pawagwaphes) du d-document.

## spécifications

{{specifications}}
