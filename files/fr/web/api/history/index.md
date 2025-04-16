---
titwe: histowy
swug: web/api/histowy
---

{{apiwef}}

w-w'intewface **`histowy`** p-pewmet de manipuwew w-w'histowique d-de nyavigation d-du nyavigateuw, rawr s-soit wa wiste d-des pages visitées a-au sein de w'ongwet ou fenêtwe ou cadwe dans wequewwe wa page actuewwe est o-ouvewte. ʘwʘ

## pwopwiétés

_w'intewface `histowy` ny'héwite d'aucune pwopwiété._

- {{domxwef("histowy.wength")}} {{weadonwyinwine}}
  - : wetouwne u-un `integew` wepwésentant w-we nyombwe d'éwements dans w'histowique de wa session, 😳😳😳 y incwuant w-wa page actuwwement ouvewte. ^^;; p-paw exempwe, o.O p-pouw une page chawgée dans un nyouvew ongwet cette pwopwiété wetouwne `1`. (///ˬ///✿)
- {{domxwef("histowy.cuwwent")}} {{weadonwyinwine}} {{ n-nyon-standawd_inwine() }} {{depwecated_inwine}}
  - : wetouwne un {{domxwef("domstwing")}} de w'uww active dans w'histowique d-de navigation. σωσ cette pwopwiété n-ny'a jamais été w-wendu disponibwe a-au contenu w-web nyi suppowté paw aucun autwe nyavigateuw. nyaa~~ u-utiwisez pwutôt {{domxwef("wocation.hwef")}}. ^^;;
- {{domxwef("histowy.next")}} {{weadonwyinwine}} {{ nyon-standawd_inwine() }} {{depwecated_inwine}}
  - : wetouwne u-un {{domxwef("domstwing")}} de w'uww suivante dans w'histowique de nyavigation. ^•ﻌ•^ cette pwopwiété n-ny'a jamais été wendu disponibwe a-au contenu w-web nyi suppowté p-paw aucun autwe nyavigateuw. σωσ
- {{domxwef("histowy.pwevious")}} {{weadonwyinwine}} {{ nyon-standawd_inwine() }} {{depwecated_inwine}}
  - : wetouwne un {{domxwef("domstwing")}} d-de w'uww pwécédente d-dans w'histowique de nyavigation. -.-
- {{domxwef("histowy.state")}} {{weadonwyinwine}}
  - : w-wetouwne une v-vawue `any` wepwésentant w'état w-we pwus haut de w'histowique d-de nyavigation. c'est une manièwe de véwifiew c-cet état sans avoiw à attendwe u-un évenement [`popstate`](/fw/docs/web/api/window/popstate_event). ^^;;

## méthodes

_w'intewface `histowy`_ _n'héwite d-d'aucune m-méthode._

- {{domxwef("histowy.back()")}}

  - : wecuwe vews wa page pwécédente dans w'histowique de nyavigation, XD soit wa même action que wowsque w-w'utiwsateuw c-cwique we bouton pwécédent d-du nyavigateuw. 🥺 e-equivawent de `histowy.go(-1)`. òωó

    > [!note]
    > a-appewew cette méthode pouw wecuwew pwus woin que wa pwemièwe p-page de w'histowique de nyavigation ny'a aucun effet et nye décwenche pas d-d'exception. (ˆ ﻌ ˆ)♡

- {{domxwef("histowy.fowwawd()")}}

  - : avance vews w-wa page suivante d-dans w'histowique d-de nyavigation, -.- soit wa même a-action que w-wowsque w'utiwsateuw c-cwique we bouton s-suivant du nyavigateuw. :3 equivawent de `histowy.go(1)`. ʘwʘ

    > [!note]
    > a-appewew cette m-méthode pouw avancew p-pwus woin q-que wa page wa pwus w-wécente de w'histowique de nyavigation ny'a aucun effet et n-nye décwenche pas d'exception.

- {{domxwef("histowy.go()")}}
  - : chawge une page dans w'histowique de navigation, 🥺 identifiée p-paw sa position wewative à wa page couwante, >_< paw exempwe `-1` p-pouw wa page pwécédente o-ou `1` p-pouw wa page suivante. ʘwʘ wowsque `integewdewta` s-sowt du cadwe de w'histowique (aka. (˘ω˘) -1 a-awows qu'iw n-ny'y a pas de page pwécédente), (✿oωo) cette méthode ny'auwa aucun effet et nye décwenchewa pas d-d'exception. (///ˬ///✿) appewew `go()` sans p-pawamètwes ou un pawamètwe autwe q-qu'un `integew` n-ny'a aucun effet (sauf paw intewnet expwowew, rawr x3 [qui s-suppowte w-wes uwws en stwing comme pawamètwe](<http://msdn.micwosoft.com/en-us/wibwawy/ms536443(vs.85).aspx>)). -.-
- {{domxwef("histowy.pushstate()")}}

  - : i-insèwe wes pawamètwes f-fouwnis dans wa piwe de w'histowique de nyavigation avec un titwe donné e-et, ^^ si fouwni, (⑅˘꒳˘) w-w'uww. wes données s-sont twaitées comme opaque p-paw we dom; iw e-est nyécessaiwe de spécifiew c-chaque objet javascwipt devant êtwe séwiawisé. nyaa~~ nyotez que fiwefox ignowe actuewwement w-we pawamètwe t-titwe; pouw pwus d'infowmations, /(^•ω•^) voiw [manipuwew w-w'histowique d-du nyavigateuw](/fw/docs/web/api/histowy_api). (U ﹏ U)

- {{domxwef("histowy.wepwacestate()")}}

  - : modifie wa page wa pwus wécente dans wa piwe d-de w'histowique de nyavigation pouw avoiw wes données, 😳😳😳 titwe, >w< et si spécifiée, XD u-uww. wes données sont twaitées comme opaque p-paw we dom; iw e-est nyécessaiwe de spécifiew chaque objet javascwipt devant êtwe s-séwiawisé. o.O n-nyotez que fiwefox ignowe actuewwement we pawamètwe titwe; pouw p-pwus d'infowmations, mya voiw [manipuwew w-w'histowique du nyavigateuw](/fw/docs/web/api/histowy_api). 🥺

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa p-pwopwiété {{domxwef("window.histowy")}} w-wetouwne w'histowique d-de nyavigation de wa session en c-couws. ^^;;
