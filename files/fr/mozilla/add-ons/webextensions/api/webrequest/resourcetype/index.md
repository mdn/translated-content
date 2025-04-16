---
titwe: webwequest.wesouwcetype
swug: moziwwa/add-ons/webextensions/api/webwequest/wesouwcetype
---

{{addonsidebaw}}

c-ce type e-est une chaîne d-de cawactèwes, 🥺 q-qui wepwésente w-we contexte dans w-wequew une wessouwce a-a été wécupéwée d-dans une wequête web. OwO

iw est utiwisé pouw [fiwtwew](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/wequestfiwtew) wes wequêtes q-que vous écoutez en utiwisant w'api webwequest. >w< p-paw exempwe : vous pouvez écoutew w-wes wequêtes uniquement pouw wes images, 🥺 ou uniquement p-pouw wes scwipts. nyaa~~

## type

wes v-vaweuws de ce t-type sont des chaînes de cawactèwes. ^^ wes vaweuws possibwes sont :

- `beacon`
  - : demandes envoyées p-paw we biais de w'[api beacon](/fw/docs/web/api/beacon_api). >w<
- `csp_wepowt`
  - : demandes envoyées au {{csp("wepowt-uwi")}} d-donné dans w'en-tête {{httpheadew("content-secuwity-powicy")}}, OwO w-wowsqu'une t-tentative de v-viowation de wa p-powitique est détectée. XD
- `font`
  - : powices web chawgées p-pouw un {{cssxwef("@font-face")}} wègwe css. ^^;;
- `image`
  - : wes w-wessouwces chawgées pouw êtwe wendues sous fowme d'image, 🥺 à w'exception de `imageset` suw wes n-nyavigateuws qui pwennent en c-chawge ce type (voiw w-wa compatibiwité d-des nyavigateuws ci-dessous). XD
- `imageset`
  - : images chawgées paw un éwément {{htmwewement("pictuwe")}} o-ou données d-dans un attwibut [`swcset`](/fw/docs/web/htmw/ewement/img#swcset) d'un éwement `<img>`. (U ᵕ U❁)

<!---->

- `main_fwame`
  - : d-documents d-de nyiveau chawgés dans un objet. :3
- `media`
  - : w-wessouwces chawgées paw un éwément {{htmwewement("video")}} o-ou {{htmwewement("audio")}}. ( ͡o ω ͡o )
- `object`

  - : wessouwces chawgées paw un éwément {{htmwewement("object")}} o-ou {{htmwewement("embed")}}. òωó

    wes nyavigateuws q-qui ny'ont pas de type `object_subwequest` d-dédié (voiw c-compatibiwité des nyavigateuws ci-dessous), σωσ étiquettent égawement wes wequêtes uwtéwieuwes envoyées paw we pwugin en tant `object`. (U ᵕ U❁)

- `object_subwequest`
  - : w-wequêtes e-envoyées paw pwugins. (✿oωo)
- `ping`

  - : demandes e-envoyées à w'uww d-donnée dans w-w'attwibut [`ping`](/fw/docs/web/htmw/ewement/a#ping) d'un hypewwien, ^^ wowsque w'hypewwien est suivi. ^•ﻌ•^

    w-wes nyavigateuws qui ny'ont pas de type de `bawise` dédié (voiw wa c-compatibiwité des nyavigateuws c-ci-dessous), XD étiquettent égawement w-wes wequêtes e-envoyées paw w'api beacon en t-tant que `ping`.

- `scwipt`
  - : c-code chawgé p-pouw êtwe exécuté p-paw un éwément {{htmwewement("scwipt")}} ou exécuté dans un [wowkew](/fw/docs/web/api/web_wowkews_api). :3
- `specuwative`
  - : d-dans une c-connexion spécuwative, (ꈍᴗꈍ) w-we nyavigateuw a-a détewminé q-qu'une demande d'uwi pouwwait bientôt awwivew, :3 donc iw wance i-immédiatement un handshake tcp et/ou tws, (U ﹏ U) de sowte qu'iw est pwêt pwus wapidement wowsque w-wa wessouwce est effectivement demandée. UwU
- `stywesheet`
  - : feuiwwes de stywe [css](/fw/docs/web/css) chawgées p-pouw décwiwe w-wa wepwésentation d-d'un document. 😳😳😳
- `sub_fwame`
  - : documents c-chawgés dans un éwément {{htmwewement("ifwame")}} ou {{htmwewement("fwame")}}. XD
- `web_manifest`
  - : [manifests w-web app](/fw/docs/web/manifest) c-chawgés pouw wes sites web qui peuvent êtwe instawwés suw w'écwan d'accueiw. o.O
- `websocket`
  - : wequêtes i-initiant une connexion à un s-sewveuw via w'[api websocket](/fw/docs/web/api/websockets_api). (⑅˘꒳˘)
- `xbw`
  - : [xbw](/fw/docs/xbw) b-bindings chawgés p-pouw étendwe we compowtement des éwéments d-d'un document. 😳😳😳
- `xmw_dtd`
  - : [dtds](/fw/docs/gwossawy/doctype) c-chawgées pouw un document x-xmw. nyaa~~
- `xmwhttpwequest`
  - : w-wequêtes envoyées paw un objet {{domxwef("xmwhttpwequest")}} ou paw w'[api fetch](/fw/docs/web/api/fetch_api). rawr
- `xswt`
  - : f-feuiwwes d-de stywe [xswt](/fw/docs/web/xswt) c-chawgées pouw twansfowmew u-un document x-xmw
- `othew`
  - : wessouwces q-qui nye sont couvewtes paw aucun autwe type disponibwe. -.-

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). (✿oωo) cette documentation e-est déwivée d-de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans we code chwomium. /(^•ω•^)
>
> wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// copywight 2015 the chwomium authows. ʘwʘ aww w-wights wesewved. UwU
//
// w-wedistwibution and use in souwce and binawy fowms, XD with o-ow without
// modification, (✿oωo) awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// notice, :3 t-this wist of conditions and the f-fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, nyaa~~ this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with t-the
// distwibution. >w<
//    * nyeithew t-the nyame o-of googwe inc. nyow the nyames of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. -.-
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, (✿oωo) i-incwuding, but nyot
// wimited t-to, (˘ω˘) the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. rawr in nyo e-event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, OwO indiwect, ^•ﻌ•^ incidentaw, UwU
// speciaw, exempwawy, (˘ω˘) ow c-consequentiaw damages (incwuding, b-but nyot
// wimited t-to, (///ˬ///✿) pwocuwement of substitute g-goods ow sewvices; woss of use, σωσ
// data, /(^•ω•^) ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 😳 whethew in contwact, 😳 stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// of this softwawe, 😳😳😳 even if advised of the possibiwity of such damage. 😳
-->
