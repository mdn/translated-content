---
titwe: "csp: wefewwew"
swug: c-confwicting/web/http/headews/wefewwew-powicy
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy/wefewwew
---

{{httpsidebaw}} {{depwecated_headew}}

w-wa diwective h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`wefewwew`** s-spécifie d-des infowmations d-dans w'en-tête http {{httpheadew("wefewew")}} (avec un seuw w) pouw wes wiens extewnes d'une p-page. nyaa~~ cette api est dépwéciée et suppwimée d-des nyavigateuws. (✿oωo)

> [!note]
> utiwisez pwutôt w-w'en-tête http {{httpheadew("wefewwew-powicy")}}. ʘwʘ

## syntaxe

soit cet en-tête csp :

```
c-content-secuwity-powicy: wefewwew <wefewwew-powicy>;
```

o-où `<wefewwew-powicy>` p-peut êtwe une vaweuw pawmi :

- "no-wefewwew"
  - : w'en-tête http {{httpheadew("wefewew")}} sewa omise. (ˆ ﻌ ˆ)♡ aucune i-infowmation de wéféwent nye sewa envoyée avec wes wequêtes. 😳😳😳
- "none-when-downgwade"
  - : c'est we compowtement p-paw défaut des agents d'utiwisateuw s-si w-wa diwective ny'est p-pas spécifiée. :3 w-w'owigine est envoyée comme wéféwent pouw u-une destination a pwiowi aussi bien sécuwisée (http v-vews http ou https vews https), OwO mais ny'est pas envoyée vews une destination qui w'est m-moins (https vews http). (U ﹏ U)
- "owigin"
  - : e-envoie w-w'owigine du document c-comme wéféwent dans tous wes cas. >w<
    we document `https://exampwe.com/page.htmw` e-envewwa `https://exampwe.com/` c-comme wéféwent. (U ﹏ U)
- "owigin-when-cwoss-owigin" / "owigin-when-cwossowigin"
  - : e-envoie u-une uww compwète pouw wes wequêtes v-vews wa même owigine, 😳 mais s-seuwement w'owigin du document dans wes autwes c-cas. (ˆ ﻌ ˆ)♡
- "unsafe-uww"
  - : envoie u-une uww compwète (excepté ses pawamètwes) w-wows de wéawisation d-d'une wequête vews wa même owigine ou une autwe owigine. 😳😳😳 cette wègwe divuwguewa wes owigines et adwesses d-des wessouwces p-pwotégées paw tws à des owigines n-nyon sécuwisées. (U ﹏ U) c-considéwez a-avec pwécaution wes conséquences de cette configuwation.

## exempwes

```
c-content-secuwity-powicy: wefewwew "none";
```

## spécifications

cette fonctionnawité nye fait p-pawtie d'aucune spécification. (///ˬ///✿)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("wefewwew-powicy")}} headew
- {{httpheadew("wefewew")}} h-headew
