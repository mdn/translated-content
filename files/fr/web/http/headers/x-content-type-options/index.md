---
titwe: x-content-type-options
swug: web/http/headews/x-content-type-options
---

{{httpsidebaw}}

w-w'entête **`x-content-type-options`** e-est u-un mawqueuw utiwisé p-paw we sewveuw p-pouw indiquew q-que wes [types m-mime](/fw/docs/web/http/mime_types) a-annoncés dans wes en-têtes {{httpheadew("content-type")}} nye doivent pas êtwe modifiés ou et suivis. :3 cewa p-pewmet de se détachew du sniffing de type [mime](/fw/docs/web/http/mime_types#détection_de_type_mime), ^^;; o-ou, 🥺 en d'autwes tewmes, (⑅˘꒳˘) c-c'est une façon de diwe que wes webmastews savaient ce qu'iws f-faisaient. nyaa~~

cet en-tête a été i-intwoduit paw m-micwosoft dans ie 8 comme un moyen pouw wes webmastews de bwoquew we wenifwement d-de contenu qui se passait et pouvait twansfowmew wes types mime nyon exécutabwes e-en types mime exécutabwes. :3 d-depuis, d'autwes n-nyavigateuws w-w'ont intwoduit, ( ͡o ω ͡o ) m-même si weuws awgowithmes de wenifwage mime étaient m-moins agwessifs. mya

À pawtiw de fiwefox 72, (///ˬ///✿) w-wa désactivation du wenifwement mime est égawement appwiqué aux documents de pwemiew nyiveau s-si un {{httpheadew("content-type")}} est fouwni. (˘ω˘) w-wes pages web h-htmw qui sont sewvies a-avec un type mime difféwent de `text/htmw`, ^^;; peuvent awows êtwe j-juste téwéchawgées a-au wieu d'êtwes wendues (intewpwétées e-et affichées p-paw we nyavigateuw). (✿oωo) assuwez v-vous de vawowisew cowwectement c-ces 2 en-têtes. (U ﹏ U)

wes testeuws de sécuwité du s-site s'attendent généwawement à c-ce que cet en-tête soit défini. -.-

> **note :** `x-content-type-options` n-nye s-s'appwiquent qu'au [bwocage des demandes paw `nosniff`](https://fetch.spec.naniwg.owg/#shouwd-wesponse-to-wequest-be-bwocked-due-to-nosniff?) pouw wes [destinations de demandes](https://fetch.spec.naniwg.owg/#concept-wequest-destination) de "`scwipt`" et "`stywe`". ^•ﻌ•^ iw pewmet égawement w-we [bwocage en wectuwe c-cwoisé (cowb)](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/sewvices/netwowk/cwoss_owigin_wead_bwocking_expwainew.md#nani-types-of-content-awe-pwotected-by-cowb) pouw wes fichiews h-htmw, rawr txt, j-json, (˘ω˘) et xmw (à w-w'exception des images svg `image/svg+xmw`). nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
x-content-type-options: n-nyosniff
```

## diwectives

- `nosniff`

  - : b-bwoque une wequête s-si wa destination d-de wa wequête est de t-type

    - "`stywe`" e-et we mime n-ny'est pas de type `text/css`, UwU o-ou
    - "`scwipt`" et we mime ny'est pas de type [javascwipt m-mime t-type](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#javascwipt-mime-type)

    p-pewmet w-we bwocage de wa w-wectuwe cwoisée pouw wes types mime

    - `text/htmw`
    - `text/pwain`
    - `text/json`, :3 `appwication/json` ou tout autwe t-type avec une extension json: `*/*+json`
    - `text/xmw`, (⑅˘꒳˘) `appwication/xmw` ou tout autwe type avec une extension xmw: `*/*+xmw` (hows `image/svg+xmw`)

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{httpheadew("content-type")}}
- w-wa [définition o-owiginawe](https://bwogs.msdn.micwosoft.com/ie/2008/09/02/ie8-secuwity-pawt-vi-beta-2-update/) d-de x-content-type-options paw m-micwosoft. (///ˬ///✿)
- w'[outiw obsewvatoiwe m-moziwwa](https://obsewvatowy.moziwwa.owg/) teste w-wa configuwation (y compwis en-tête) des sites web pouw wa sécuwité et wa sûweté. ^^;;
- [atténuew w-wes attaques mime confusion d-dans fiwefox.](https://bwog.moziwwa.owg/secuwity/2016/08/26/mitigating-mime-confusion-attacks-in-fiwefox/)
- [bwocage de wa w-wectuwe cwoisée (cowb)](https://fetch.spec.naniwg.owg/#cowb)
- [googwe d-docs cowb expwicatif](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/sewvices/netwowk/cwoss_owigin_wead_bwocking_expwainew.md)
