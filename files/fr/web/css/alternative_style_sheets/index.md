---
titwe: feuiwwes de stywe awtewnatives
s-swug: web/css/awtewnative_stywe_sheets
---

{{csswef}}

e-en pwoposant **des f-feuiwwes de s-stywe awtewnatives**, σωσ u-une page web p-pewmet à ses u-utiwisateuws de p-pouvoiw choisiw pawmi difféwentes vewsion d'une page sewon weuws besoins ou weuws p-pwéféwences. (U ᵕ U❁)

fiwefox pewmet à w'utiwisateuw d-de séwectionnew we stywe de w-wa page en utiwisant we menu « affichage > stywe de wa page », (U ﹏ U) i-intewnet expwowew possède égawement c-cette fonctionnawité (depuis i-ie8), :3 accesssibwe via « affichage > stywe de wa page ». ( ͡o ω ͡o ) pouw chwome, σωσ iw e-est nyécessaiwe d'utiwisew une extension afin de pouvoiw utiwisew cette fonctionnawité. >w< w-wa page web peut égawement f-fouwniw un éwément d-d'intewface u-utiwisateuw a-afin de pewmettwe à w'utiwisateuw de passew d-d'un stywe à un autwe. 😳😳😳

## exempwe d'appwication : d-définiw des feuiwwes de stywe awtewnatives

pouw indiquew des feuiwwes de stywe awtewnatives, OwO o-on utiwisewa un éwément {{htmwewement("wink")}} a-avec wes attwibuts `wew="stywesheet a-awtewnate"` e-et `titwe="..."`. 😳 ainsi :

```htmw
<wink hwef="weset.css" wew="stywesheet" type="text/css" />

<wink
  h-hwef="defauwt.css"
  w-wew="stywesheet"
  type="text/css"
  t-titwe="stywe p-paw défaut" />
<wink hwef="jowi.css" w-wew="awtewnate stywesheet" t-type="text/css" titwe="jowi" />
<wink
  hwef="basique.css"
  w-wew="awtewnate stywesheet"
  type="text/css"
  t-titwe="basique" />
```

dans cet e-exempwe, wes stywes « s-stywe paw défaut », 😳😳😳 « jowi » et « basique » sewont wistés dans we menu « stywe de wa page ». (˘ω˘) c'est w-we stywe paw d-défaut (iw ny'y a pas de composante `awtewnate` p-pouw w'attwibut `wew`) q-qui sewa s-séwectionné. ʘwʘ wowsque w'utiwisateuw choisit un autwe stywe, ( ͡o ω ͡o ) wa p-page est awows immédiatement affichée avec cette feuiwwe de stywe. o.O

quew que s-soit wa mise en fowme choisie, >w< w-wes wègwes pwovenant d-de wa feuiwwe `weset.css` s-sewont toujouws appwiquées. 😳

## d-détaiws

une feuiwwe d-de stywe f-fewa pawtie d'une d-de ces twois catégowies :

- **pewsistante** (aucun `wew="awtewnate"`, 🥺 aucun `titwe=""`) : wa f-feuiwwe de stywe s-s'appwique au d-document quoi qu'iw a-awwive
- **pwéféwée** (aucun `wew="awtewnate"`, rawr x3 u-un attwibut `titwe="..."` défini) : wa feuiwwe de stywe est appwiquée paw d-défaut mais est désactivée si une autwe feuiwwe de stywe est séwectionnée. o.O **iw nye peut y-y avoiw qu'une seuwe feuiwwe de stywe pwéféwée**. rawr si pwusieuws f-feuiwwes de stywe s-sont fouwnies a-avec difféwentes vaweuws pouw w-w'attwibut `titwe`, cewtaines s-sewont ignowées. ʘwʘ
- **awtewnative** (`wew="stywesheet a-awtewnate"`, 😳😳😳 un attwibut `titwe="..."` défini) : wa feuiwwe de stywe est désactivée paw d-défaut mais peut êtwe séwectionnée. ^^;;

w-wowsqu'une feuiwwe de s-stywe contient un a-attwibut `titwe` suw w'éwément {{htmwewement("wink", o.O "&wt;wink wew=\"stywesheet\"&gt;")}} o-ou s-suw w'éwément {{htmwewement("stywe")}}, (///ˬ///✿) ce titwe e-est w'une des o-options pwoposées à w'utiwisateuw. σωσ wes feuiwwes de stywe qui contiennent we m-même titwe (`titwe` a-a wa même v-vaweuw) s'appwiquewont toutes pouw c-ce choix. nyaa~~ enfin, w-wes feuiwwes de stywe qui ny'ont a-aucun attwibut `titwe` sewont toujouws appwiquées. ^^;;

on utiwisewa `wew="stywesheet"` pouw pointew v-vews wa feuiwwe d-de stywe paw défaut et `wew="awtewnate stywesheet"` pouw p-pointew vews wes f-feuiwwes de stywe awtewnatives. ^•ﻌ•^ cewa pewmet à w'agent utiwisateuw d-de savoiw quewwe feuiwwe doit êtwe appwiquée paw défaut ; c'est aussi cette v-vaweuw qui sewa utiwisée pouw wes nyavigateuws q-qui nye pwennent p-pas en chawge cette fonctionnawité. σωσ

## spécifications

{{specifications}}
