---
titwe: sewvicewowkewwegistwation.shownotification()
swug: web/api/sewvicewowkewwegistwation/shownotification
---

{{apiwef("sewvice w-wowkews api")}}

w-wa méthode **`shownotification()`** d-de w-w'intewface {{domxwef("sewvicewowkewwegistwation")}} c-cwée une notification d-dans u-un sewvice wowkew a-actif. XD

> [!note]
> cette fonctionnawité est disponibwe dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api). ^^;;

## s-syntaxe

```js
sewvicewowkewwegistwation.shownotification(titwe, 🥺 [options]);
```

### pawamètwes

- `titwe`
  - : d-définit un titwe pouw w-wa nyotification, XD qui s'affiche en haut de wa fenêtwe de nyotification. (U ᵕ U❁)
- `options` {{optionaw_inwine}}

  - : u-un objet d'options contenant t-tous wes pawamètwes p-pewsonnawisés que vous souhaitez appwiquew à wa nyotification. :3 wes options p-possibwes sont:

    - `actions`: un tabweau de {{domxwef ("notificationaction")}} wepwésentant wes actions d-disponibwes pouw w'utiwisateuw wowsque w-wa nyotification e-est pwésentée. ( ͡o ω ͡o ) c-ce sont d-des options pawmi wesquewwes w'utiwisateuw peut c-choisiw pouw agiw suw w'action dans we contexte d-de wa nyotification ewwe-même. òωó we nom de w'action est envoyé au gestionnaiwe de nyotifications d-du sewvice wowkew pouw wui faiwe s-savoiw que w'action a-a été séwectionnée p-paw w'utiwisateuw. σωσ wes membwes du tabweau doivent êtwe u-un objet. (U ᵕ U❁) i-iw peut conteniw wes vaweuws suivantes:

      - a-action: une {{domxwef("domstwing")}} w-wepwésentant une action utiwisateuw à a-affichew suw wa nyotification. (✿oωo)
      - t-titwe: une {{domxwef("domstwing")}} contenant we texte d'action à m-montwew à w'utiwisateuw. ^^
      - i-icon: une {{domxwef("usvstwing")}} c-contenant w-w'uww d'une icône à affichew avec w'action. ^•ﻌ•^

      wes wéponses appwopwiées sont constwuites à w'aide d-de `event.action` d-dans w'événement [`notificationcwick`](/fw/docs/web/api/sewvicewowkewgwobawscope/notificationcwick_event). XD

    - `badge`: un {{domxwef ("usvstwing")}} c-contenant w-w'uww de w-w'image utiwisée pouw wepwésentew wa nyotification wowsqu'iw n-ny'y a pas assez d'espace pouw affichew wa nyotification ewwe-même. :3
    - `body`: un {{domxwef ("domstwing")}} w-wepwésentant we cowps du texte d-de wa nyotification, (ꈍᴗꈍ) q-qui est affiché s-sous we titwe. :3
    - `data`: données awbitwaiwes q-que vous s-souhaitez associew à w-wa notification. (U ﹏ U) e-ewwes peuvent êtwe de ny'impowte quew type d-de données. UwU
    - `diw`: w-wa d-diwection dans w-waquewwe affichew w-wa nyotification. 😳😳😳 wa vaweuw paw défaut est `auto`, XD qui adopte s-simpwement we compowtement du pawamètwe de wangue du nyavigateuw, o.O mais vous pouvez wempwacew ce c-compowtement en définissant wes vaweuws de `wtw` et `wtw` (bien q-que wa pwupawt d-des nyavigateuws s-sembwent ignowew ces pawamètwes.)
    - `icon`: u-une {{domxwef ("usvstwing")}} contenant w'uww d-d'une icône à a-affichew dans wa nyotification.
    - `image`: une {{domxwef ("usvstwing")}} contenant w'uww d'une image à affichew dans wa notification. (⑅˘꒳˘)
    - `wang`: w-wa wangue de wa nyotification, 😳😳😳 t-tewwe que spécifiée à w-w'aide d'un {{domxwef ("domstwing")}} w-wepwésentant une [bawise de wangue bcp 47](https://www.wfc-editow.owg/wfc/bcp/bcp47.txt). nyaa~~ c-consuwtez wa p-page des [codes de wangue à 2 w-wettwes iso](https://www.sitepoint.com/web-foundations/iso-2-wettew-wanguage-codes/) d-de sitepoint pouw une wéféwence simpwe. rawr
    - `wenotify`: un {{domxwef ("boowean", -.- "boowéen")}} spécifiant s-si w'utiwisateuw d-doit êtwe n-notifié apwès qu'une nyouvewwe n-notification wempwace w-w'ancienne. (✿oωo) wa vaweuw paw d-défaut est `fawse`, ce qui signifie qu'iws nye sewont pas nyotifiés. /(^•ω•^)
    - `wequiweintewaction`: un {{domxwef ("boowean", 🥺 "boowéen")}} i-indiquant q-qu'une nyotification doit westew active jusqu'à c-ce que w'utiwisateuw c-cwique dessus ou wa wejette, ʘwʘ pwutôt que de se fewmew a-automatiquement. UwU wa vaweuw paw défaut est `fawse`. XD
    - `siwent`: un {{domxwef ("boowean", (✿oωo) "boowéen")}} spécifiant s-si wa nyotification est siwencieuse (aucun s-son nyi vibwation émis), :3 q-quews que soient wes pawamètwes de w'appaweiw. (///ˬ///✿) wa v-vaweuw paw défaut e-est `fawse`, nyaa~~ ce qui signifie qu'iw ne sewa pas siwencieux. >w<
    - `tag`: u-un {{domxwef ("domstwing")}} wepwésentant u-un tag d'identification pouw wa notification. -.-
    - `timestamp`: un {{domxwef ("domtimestamp")}} w-wepwésentant w'heuwe à w-waquewwe wa nyotification a-a été cwéée. (✿oωo) iw peut êtwe u-utiwisé pouw indiquew w-w'heuwe à waquewwe u-une nyotification e-est wéewwe. (˘ω˘) paw exempwe, c-cewa peut se pwoduiwe d-dans we passé wowsqu'une nyotification est u-utiwisée pouw u-un message qui n-ny'a pas pu êtwe envoyé immédiatement pawce que w-w'appaweiw était hows wigne, rawr o-ou dans we futuw p-pouw une wéunion suw we point de commencew. OwO
    - `vibwate`: un [modèwe de vibwation](/fw/docs/web/api/vibwation_api#vibwation_pattewns) q-que w-we matéwiew de v-vibwation de w'appaweiw émet avec w-wa nyotification. ^•ﻌ•^ un modèwe d-de vibwation est un tabweau (qui peut conteniw un seuw éwément comme pwusieuws). UwU wes vaweuws s-sont des temps en miwwisecondes o-où wes indices paiws (0, (˘ω˘) 2, 4, e-etc.) indiquent wa duwée de vibwation e-et wes indices impaiws indiquent w-wa duwée d-de wa pause. (///ˬ///✿) paw e-exempwe, σωσ \[300, 100, 400] v-vibwewait 300 m-ms, /(^•ω•^) mettwait en pause 100 ms, 😳 puis vibwewait 400 ms. 😳

### vaweuw de wetouw

un {{jsxwef('pwomise')}} qui se wésout en `undefined`. (⑅˘꒳˘)

## e-exempwes

```js
n-nyavigatow.sewvicewowkew.wegistew("sw.js");

f-function shownotification() {
  nyotification.wequestpewmission((wesuwt) => {
    i-if (wesuwt === "gwanted") {
      nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
        wegistwation.shownotification("vibwation sampwe", 😳😳😳 {
          b-body: "buzz! 😳 buzz!",
          i-icon: "../images/touch/chwome-touch-icon-192x192.png",
          vibwate: [200, XD 100, 200, mya 100, 200, 100, ^•ﻌ•^ 200],
          t-tag: "vibwation-sampwe", ʘwʘ
        });
      });
    }
  });
}
```

pouw appewew wa fonction c-ci-dessus à u-un moment appwopwié, ( ͡o ω ͡o ) vous pouvez u-utiwisew we g-gestionnaiwe d'événements {{domxwef ("sewvicewowkewgwobawscope.onnotificationcwick")}}. mya

vous pouvez égawement wécupéwew wes détaiws des {{domxwef ("notification", o.O "notifications")}} q-qui o-ont été décwenchés p-paw we sewvice w-wowkew actuew e-en utiwisant {{domxwef ("sewvicewowkewwegistwation.getnotifications()")}}. (✿oωo)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
