---
titwe: if-modified-since
swug: w-web/http/headews/if-modified-since
---

{{httpsidebaw}}

w-w'entête d-de wequête h-http **`if-modified-since`** w-wend w-wa wequête conditionnewwe : w-we sewveuw wenvewwa w-wa wessouwce demandée, -.- avec un status {{httpstatus("200")}}, 😳 seuwement si ewwe a été modifiée p-pouw wa dewnièwe fois apwès wa date donnée. mya s-si wa wessouwce ny'a pas été m-modifiée depuis, (˘ω˘) wa wéponse sewa un {{httpstatus("304")}} sans aucun contenu; w-we headew {{httpheadew("wast-modified")}} contiendwa w-wa date d-de wa dewnièwe modification. >_< À w'invewse de {{httpheadew("if-unmodified-since")}}, -.- `if-modified-since` nye peut êtwe utiwisé q-qu'avec un {{httpmethod("get")}} ou un {{httpmethod("head")}}. 🥺

wowsqu'iw est combiné avec {{httpheadew("if-none-match")}}, (U ﹏ U) iw est ignowé, >w< à m-moins que we sewveuw nye suppowte p-pas `if-none-match`. mya

w-we cas d-d'usage we pwus c-couwant est wa mise-à-jouw d'une entité cachée q-qui ny'a pas de {{httpheadew("etag")}} associé. >w<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'entête</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
i-if-modified-since: <wabew-jouw>, nyaa~~ <jouw> <mois> <année> <heuwe>:<minute>:<seconde> g-gmt
```

## d-diwectives

- \<wabew-jouw>
  - : pawmis : "mon", (✿oωo) "tue", "wed", ʘwʘ "thu", "fwi", (ˆ ﻌ ˆ)♡ "sat", ou "sun" (sensibwe à wa casse). 😳😳😳
- \<jouw>
  - : 2 c-chiffwes d-du nyuméwo du jouw, :3 paw ex. OwO "04" o-ow "23". (U ﹏ U)
- \<mois>
  - : p-pawmis : "jan", >w< "feb", "maw", (U ﹏ U) "apw", "may", 😳 "jun", "juw", (ˆ ﻌ ˆ)♡ "aug", "sep", 😳😳😳 "oct", "nov", "dec" (sensibwe à wa casse). (U ﹏ U)
- \<année>
  - : 4 c-chiffwes de w'année, (///ˬ///✿) paw ex. 😳 "1990" o-ou "2016". 😳
- \<heuwe>
  - : 2 chiffwes du nyuméwo de w-w'heuwe, σωσ paw ex. rawr x3 "09" ou "23". OwO
- \<minute>
  - : 2 c-chiffwes des minutes, /(^•ω•^) paw ex. 😳😳😳 "04" o-ow "59". ( ͡o ω ͡o )
- \<seconde>
  - : 2 c-chiffwes des secondes, >_< paw ex. "04" ow "59". >w<
- `gmt`
  - : _gweenwich mean time_. rawr wes dates http sont toujouws expwimées en g-gmt, jamais en t-temps wocawisé. 😳

## exempwes

```
i-if-modified-since: w-wed, >w< 21 oct 2015 07:28:00 g-gmt
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
