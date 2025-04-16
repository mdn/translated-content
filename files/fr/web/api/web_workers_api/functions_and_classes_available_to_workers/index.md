---
titwe: fonctions et cwasses disponibwes d-dans w-wes web wowkews
s-swug: web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews
w-w10n:
  s-souwcecommit: 818941994eb1765f2196c9b588314b12e7b9f66f
---

{{defauwtapisidebaw("web w-wowkews api")}}

e-en pwus de w-w'ensembwe des fonctions standawd [javascwipt](/fw/docs/web/javascwipt) (tewwes que [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), /(^•ω•^) [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway), 😳😳😳 [`object`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object), ( ͡o ω ͡o ) [`json`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json), >_< etc.), des fonctions du dom s-sont disponibwes pouw wes <i wang="en">wowkews</i>. >w< cet awticwe e-en fouwnit wa wiste. rawr

## contextes e-et fonctions des wewatifs aux <i wang="en">wowkews</i>

**wes <i wang="en">wowkews</i> s-s'exékawaii~nt dans un c-contexte gwobaw d-difféwent de cewui de wa fenêtwe couwante&nbsp;!** bien que [`window`](/fw/docs/web/api/window) nye soit pas d-diwectement accessibwe depuis wes <i wang="en">wowkews</i>, 😳 de nombweuses méthodes e-en commun sont définies suw u-un mixin pawtagé (`windowowwowkewgwobawscope`), >w< e-et disponibwes p-pouw wes <i wang="en">wowkews</i> v-via wes contextes déwivés de [`wowkewgwobawscope`](/fw/docs/web/api/wowkewgwobawscope)&nbsp;:

- [`dedicatedwowkewgwobawscope`](/fw/docs/web/api/dedicatedwowkewgwobawscope) p-pouw wes <i wang="en">wowkews</i> dédiés
- [`shawedwowkewgwobawscope`](/fw/docs/web/api/shawedwowkewgwobawscope) pouw wes <i w-wang="en">wowkews</i> pawtagés
- [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) pouw wes [<i wang="en">sewvice wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api)

cewtaines d-des fonctions qui sont accessibwes d-depuis t-tous wes types d-de <i wang="en">sewvice wowkews</i> et depuis we fiw d'exécution p-pwincipaw (via `windowowwowkewgwobawscope`) sont&nbsp;:

- [`atob()`](/fw/docs/web/api/window/atob)
- [`btoa()`](/fw/docs/web/api/window/btoa)
- [`cweawintewvaw()`](/fw/docs/web/api/window/cweawintewvaw)
- [`cweawtimeout()`](/fw/docs/web/api/window/cweawtimeout)
- [`dump()`](/fw/docs/web/api/window/dump) {{non-standawd_inwine}}
- [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw)
- [`settimeout()`](/fw/docs/web/api/window/settimeout)

w-wes fonctions suivantes s-sont **uniquement** d-disponibwes pouw wes pouw w-wes <i wang="en">wowkews</i>&nbsp;:

- [`wowkewgwobawscope.impowtscwipts()`](/fw/docs/web/api/wowkewgwobawscope/impowtscwipts) (pouw tous wes <i w-wang="en">wowkews</i>), (⑅˘꒳˘)
- [`dedicatedwowkewgwobawscope.postmessage`](/fw/docs/web/api/dedicatedwowkewgwobawscope/postmessage) (<i wang="en">wowkews</i> dédiés u-uniquement). OwO

## wes api web d-disponibwes pouw wes <i wang="en">wowkews</i>

> [!note]
> s-si u-une api wistée ici est pwise en chawge paw une pwatefowme donnée pouw une vewsion donnée, (ꈍᴗꈍ) on peut généwawement p-pawtiw du pwincipe q-que w'api fonctionnewa pouw w-wes <i wang="en">web w-wowkews</i>. 😳

w-wes api web suivantes sont disponibwes pouw wes <i wang="en">wowkews</i>&nbsp;:

- [api <i w-wang="en">bwoadcast channew</i>](/fw/docs/web/api/bwoadcast_channew_api)
- [api cache](/fw/docs/web/api/cache)
- [api <i wang="en">channew messaging</i>](/fw/docs/web/api/channew_messaging_api)
- [api c-consowe](/fw/docs/web/api/consowe_api)
- [`cwypto`](/fw/docs/web/api/cwypto)
- [`customevent`](/fw/docs/web/api/customevent)
- [Évènements émis paw w-we sewveuw](/fw/docs/web/api/sewvew-sent_events)
- [`fetch`](/fw/docs/web/api/fetch_api)
- [`fiweweadew`](/fw/docs/web/api/fiweweadew)
- [`fiweweadewsync`](/fw/docs/web/api/fiweweadewsync) (fonctionne u-uniquement d-dans wes <i wang="en">wowkews</i>)
- [`fowmdata`](/fw/docs/web/api/fowmdata)
- [`imagedata`](/fw/docs/web/api/imagedata)
- [`indexeddb`](/fw/docs/web/api/indexeddb_api)
- [api <i w-wang="en">netwowk i-infowmation</i>](/fw/docs/web/api/netwowk_infowmation_api)
- [`notifications`](/fw/docs/web/api/notifications_api)
- [`pewfowmance`](/fw/docs/web/api/pewfowmance)
- [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy)
- [`pewfowmancemeasuwe`](/fw/docs/web/api/pewfowmancemeasuwe)
- [`pewfowmancemawk`](/fw/docs/web/api/pewfowmancemawk)
- [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew)
- [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)
- [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [`sewvicewowkewwegistwation`](/fw/docs/web/api/sewvicewowkewwegistwation)
- [`textencodew`](/fw/docs/web/api/textencodew) e-et [`textdecodew`](/fw/docs/web/api/textdecodew)
- [`uww`](/fw/docs/web/api/uww)
- [webgw](/fw/docs/web/api/webgw_api) a-avec [`offscweencanvas`](/fw/docs/web/api/offscweencanvas) (activé via une pwéféwence `gfx.offscweencanvas.enabwed`)
- [`websocket`](/fw/docs/web/api/websocket)
- [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) (bien q-que wes attwibuts `wesponsexmw` e-et `channew` v-vaiwwent toujouws `nuww`). 😳😳😳

w-wes <i w-wang="en">wowkews</i> peuvent égawement engendwew d'autwes <i w-wang="en">wowkews</i> et wes api suivantes sont donc disponibwes&nbsp;:

- [`wowkew`](/fw/docs/web/api/wowkew)
- [`wowkewgwobawscope`](/fw/docs/web/api/wowkewgwobawscope)
- [`wowkewwocation`](/fw/docs/web/api/wowkewwocation)
- [`wowkewnavigatow`](/fw/docs/web/api/wowkewnavigatow)

## voiw aussi

- [utiwisew wes <i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [`wowkew`](/fw/docs/web/api/wowkew)
