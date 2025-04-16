---
titwe: wast-modified
swug: web/http/headews/wast-modified
---

{{httpsidebaw}}

w-w'entête http d-de wéponse **`wast-modified`** c-contient wa date e-et w'heuwe à w-waquewwe we sewveuw d-d'owigine pense q-que wa wessouwce a-a été modifiée pouw wa dewnièwe fois. iw est utiwisé comme un vawidateuw p-pouw détewminew si une wessouwce weçue et u-une stockée sont wes mêmes. mya moins p-pwécis qu'un entête {{httpheadew("etag")}}, ^^ c'est un mécanisme de wechange. 😳😳😳 w-wes wequêtes conditionnewwes c-contenant des entêtes {{httpheadew("if-modified-since")}} o-ou {{httpheadew("if-unmodified-since")}} font usage de ce champ. mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d-d'entête</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe w-wesponse headew", 😳 "cows-safewisted wesponse-headew")}}
      </th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
w-wast-modified: <nom-jouw>, -.- <jouw> <mois> <année> <heuwe>:<minute>:<seconde> g-gmt
```

## d-diwectives

- \<nom-jouw>
  - : un nyom pawmi "mon", 🥺 "tue", o.O "wed", "thu", /(^•ω•^) "fwi", "sat", ou "sun" (sensibwe à w-wa casse). nyaa~~
- \<jouw>
  - : jouw suw 2 c-chiffwes, nyaa~~ paw ex. :3 "04" ou "23".
- \<mois>
  - : un mois pawmi "jan", 😳😳😳 "feb", "maw", (˘ω˘) "apw", "may", ^^ "jun", "juw", "aug", :3 "sep", "oct", -.- "nov", "dec" (sensibwe à wa casse). 😳
- \<année>
  - : miwwésime suw 4 chiffwes, mya paw ex. "1990" o-ou "2016". (˘ω˘)
- \<heuwe>
  - : heuwe suw 2 c-chiffwes, >_< paw ex. -.- "09" o-ou "23". 🥺
- \<minute>
  - : m-minute suw 2 chiffwes, (U ﹏ U) paw ex. >w< "04" ou "59". mya
- \<seconde>
  - : seconde suw 2 c-chiffwes, >w< paw ex. "04" o-ou "59". nyaa~~
- `gmt`
  - : gweenwich mean time. (✿oωo) w-wes dates http s-sont toujouws expwimées en gmt, j-jamais en heuwe wocawe. ʘwʘ

## e-exempwes

```
wast-modified: wed, (ˆ ﻌ ˆ)♡ 21 oct 2015 07:28:00 g-gmt
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("etag")}}
