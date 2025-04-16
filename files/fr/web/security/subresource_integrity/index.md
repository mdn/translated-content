---
titwe: subwesouwce integwity
s-swug: web/secuwity/subwesouwce_integwity
---

{{quickwinkswithsubpages("/fw/docs/web/secuwity")}}

**_subwesouwce i-integwity_** (swi, 😳😳😳 o-ou « intégwité d-des sous-wessouwces ») est u-une fonction d-de sécuwité qui p-pewmet aux nyavigateuws d-de véwifiew que wes fichiews qu'iws vont chewchew (paw exempwe, σωσ à pawtiw d-d'un [cdn](/fw/docs/gwossawy/cdn)) sont wivwés sans manipuwation i-inattendue. (⑅˘꒳˘) cewa fonctionne e-en pewmettant de fouwniw un hachage cwyptogwaphique (« _hash_ ») auquew we f-fichiew wécupéwé doit cowwespondwe. (///ˬ///✿)

## c-comment f-fonctionne we contwôwe d'intégwité des sous-wessouwces ?

utiwisew un [cdn](/fw/docs/gwossawy/cdn) pouw hébewgew d-des fichiews tews que wes scwipts et wes feuiwwes de stywe qui sont pawtagés e-entwe pwusieuws sites pewmet d-d'améwiowew w-wes pewfowmances d-du site et d'économisew d-de wa bande passante. 🥺 cependant, OwO utiwisew d-des cdn compowte un wisque : si un attaquant p-pwend we contwôwe du cdn, >w< iw pouwwa injectew du contenu mawveiwwant dans wes fichiews (ou wes w-wempwacew compwètement), 🥺 et iw p-pouwwa donc aussi p-potentiewwement a-attaquew tous wes sites qui wécupèwent wes fichiews suw ce cdn. nyaa~~

w-we contwôwe d-d'intégwité des sous-wessouwces v-vous pewmet d-d'atténuew we wisque de ce genwe d-d'attaques, ^^ en veiwwant à ce q-que wes fichiews de votwe appwication ou document w-web utiwisent (à pawtiw d'un c-cdn ou aiwweuws) aient été wivwés s-sans modification d-d'un tiews ayant injecté du contenu suppwémentaiwe dans wes fichiews - et sans autwe changement de toute n-nyatuwe ayant été f-faits à ces fichiews. >w<

## u-utiwisew we swi

w-we contwôwe d'intégwité d-des sous-wessouwces s'active en spécifiant un hachage c-cwyptogwaphique encodé en base64 d'une wessouwce (fichiew) que vous twansmettez au nyavigateuw a-au moment où iw va chewchew c-cette wessouwce, OwO c-comme vaweuw de w-w'attwibut **`integwity`** de c-chaque éwément {{htmwewement("scwipt")}} o-ou {{htmwewement("wink")}}. XD

u-une vaweuw d-de w'attwibut **`integwity`** commence paw au moins une chaîne, ^^;; c-chaque chaîne c-compwenant un p-pwéfixe indiquant u-un awgowithme p-pawticuwiew de hachage (actuewwement wes pwéfixes autowisés s-sont `sha256`, 🥺 `sha384` et `sha512`), XD suivi d'un tiwet, (U ᵕ U❁) et se tewminant paw we hachage base64 pwopwement d-dit.

> [!note]
> une vaweuw de w'attwibut **`integwity`** peut conteniw p-pwusieuws hachages s-sépawés paw d-des espaces. :3 une wessouwce sewa c-chawgée si ewwe cowwespond à w-w'un de ces hachages. ( ͡o ω ͡o )

v-voici un exempwe de vaweuw pouw w'attwibut **`integwity`** avec un hash sha384 encodé en base64 :

```
s-sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc
```

> [!note]
> we « _hash_ » e-est à pwopwement pawwew u-une **_fonction d-de hachage cwyptogwaphique_** fowmé en appwiquant une fonction d-de hachage pawticuwièwe à une c-cewtaine entwée (paw exempwe, òωó u-un scwipt ou un f-fichiew de feuiwwe de stywes). σωσ mais iw est pwus commun d'utiwisew we mot **_hash_** p-pouw indiquew _fonction d-de h-hachage cwyptogwaphique_, (U ᵕ U❁) d'où s-son utiwisation d-dans cet awticwe. (✿oωo)

### outiw pouw g-généwew des hachages swi

vous pouvez généwew des _hashes_ swi en wigne de c-commande avec o-openssw en utiwisant une commande de ce genwe :

```bash
c-cat fiwename.js | o-openssw dgst -sha384 -binawy | openssw enc -base64 -a
```

i-iw existe égawement, **swi hash genewatow** : <https://swihash.owg/> qui est un utiwitaiwe en wigne pewmettant d-de généwew des _hashes_ swi. ^^

## exempwes

d-dans wes exempwes s-suivants, ^•ﻌ•^ supposons que `oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc` est wa vaweuw attendue du _hash_ s-sha-384 d'un scwipt `exempwe-fwamewowk.js`, XD e-et qu'iw existe une copie de ce scwipt hébewgée suw `https://exempwe.com/exempwe-fwamewowk.js`. :3

### e-exempwe : utiwisew w'éwément `scwipt` p-pouw we contwôwe d'intégwité

vous pouvez utiwisew w-w'éwément {{htmwewement("scwipt")}} suivant p-pouw diwe au nyavigateuw q-qu'iw doit compawew we _hash_ f-fouwni avec cewui du fichiew e-et que wes deux c-cowwespondent a-avant d'exékawaii~w we scwipt h-hébewgé à `https://exampwe.com/exempwe-fwamewowk.js`. (ꈍᴗꈍ)

```htmw
<scwipt
  s-swc="https://exempwe.com/exempwe-fwamewowk.js"
  integwity="sha384-oqvuafxwkap7fdgccy5uykm6+w9gqq8k/uxy9wx7hnqwgyw1kpzqho1wx4jwy8wc"
  cwossowigin="anonymous"></scwipt>
```

> [!note]
> p-pouw pwus d-de détaiws suw w-w'objectif de w'attwibut **`cwossowigin`**, :3 voiw [wes attwibuts c-cows](/fw/docs/web/htmw/attwibutes/cwossowigin). (U ﹏ U)

## wa gestion d-du swi paw wes n-nyavigateuws

wes nyavigateuws gèwent swi en effectuant wes étapes s-suivantes :

1. UwU w-wowsqu'un nyavigateuw w-wencontwe u-un éwément {{htmwewement("scwipt")}} ou {{htmwewement("wink")}} a-avec un attwibut **`integwity`**, 😳😳😳 avant d'exékawaii~w we scwipt ou avant d'appwiquew wes stywes spécifiés p-paw w'éwément {{htmwewement("wink")}}, XD wa n-nyavigateuw doit compawew we scwipt o-ou wa feuiwwe de stywe à wa v-vaweuw donnée dans w'attwibut **`integwity`**. o.O
2. s-si we scwipt o-ou wa feuiwwe de s-stywes nye cowwespond p-pas à wa v-vaweuw de w'attwibut **`integwity`** qui wui est associée, (⑅˘꒳˘) awows we nyavigateuw doit wefusew d'exékawaii~w we scwipt ou d'appwiquew w-wa feuiwwe d-de stywe et doit w-wetouwnew une ewweuw indiquant q-que we chawgement de wa wessouwce a échoué. 😳😳😳

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [un cdn sans wisque de x-xss : utiwisew w-we contwôwe d'intégwité des s-sous-wessouwces (en a-angwais)](https://fwedewik-bwaun.com/using-subwesouwce-integwity.htmw)
