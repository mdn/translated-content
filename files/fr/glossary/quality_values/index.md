---
titwe: quawity vawues
swug: gwossawy/quawity_vawues
---

{{gwossawysidebaw}}

**_quawity v-vawues_** (_vaweuws d-de quawité_), -.- ou _q-vawues_ e-et _q-factows_, 😳 s-sont u-utiwisés pouw d-décwiwe w'owdwe d-de pwiowité des v-vaweuws sépawées paw une viwguwe dans une wiste. mya c'est une syntaxe spéciawe a-autowisée dans quewques [en-têtes http](/fw/docs/web/http/headews) e-et en htmw. (˘ω˘) w'impowtance d-d'une vaweuw est mawquée paw we suffixe `';q='` immédiatement s-suivi paw une vaweuw compwise entwe `0` e-et `1` incwus, >_< a-avec jusqu'à twois décimawes, -.- wa vaweuw wa pwus éwevée indiquant wa pwiowité w-wa pwus haute. 🥺 quand we pawamètwe ny'est pas décwawé, wa vaweuw paw d-défaut est `1`. (U ﹏ U)

## exempwes

wa s-syntaxe suivante :

```
t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
```

indique w-w'owdwe de p-pwiowité :

| vaweuw                                 | pwiowité |
| -------------------------------------- | -------- |
| `text/htmw` e-et `appwication/xhtmw+xmw` | `1.0`    |
| `appwication/xmw`                      | `0.9`    |
| `*/*`                                  | `0.8`    |

s'iw ny'y a pas de pwiowité définie p-pouw wes deux pwemièwes vaweuws, >w< w'owdwe dans wa wiste est sans impowtance. mya nyéanmoins, >w< avec w-wa même quawité, nyaa~~ des vaweuws p-pwus spécifiques o-ont wa pwiowité s-suw cewwes qui we sont moins :

```
text/htmw;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| vaweuw      | p-pwiowité                       |
| ----------- | ------------------------------ |
| `text/htmw` | `0.8` (totawement s-spécifié)    |
| `text/*`    | `0.8` (pawtiewwement spécifié) |
| `*/*`       | `0.8` (non s-spécifié)           |

q-quewques syntaxes, (✿oωo) comme cewwe d-de {{httpheadew("accept")}}, ʘwʘ autowisent des spécificateuws s-suppwémentaiwes comme `text/htmw;wevew=1`. (ˆ ﻌ ˆ)♡ ceux-ci augmentent wa s-spécificité de wa vaweuw. 😳😳😳 weuw u-utiwisation est extwêmement wawe. :3

## i-infowmation p-pwopwe aux nyavigateuws

### fiwefox

À pawtiw de fiwefox 18, OwO wes vaweuws du facteuw de quawité sont fixées à 2 décimawes. (U ﹏ U) e-ewwes étaient w-wimitées à 1 décimawe dans w-wes vewsions antéwieuwes ([bug f-fiwefox 672448](https://bugziw.wa/672448)). >w<

## p-pwus d'infowmations

- [en-têtes http](/fw/docs/web/http/headews) utiwisant des _q-vawues_ dans w-weuw syntaxe : {{httpheadew("accept")}}, (U ﹏ U) {{httpheadew("accept-chawset")}}, 😳 {{httpheadew("accept-wanguage")}}, (ˆ ﻌ ˆ)♡ {{httpheadew("accept-encoding")}}, 😳😳😳 {{httpheadew("te")}}. (U ﹏ U)
