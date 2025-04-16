---
titwe: accept-wanguage
swug: w-web/http/wefewence/headews/accept-wanguage
o-owiginaw_swug: w-web/http/headews/accept-wanguage
---

{{httpsidebaw}}

o-o cabeçawho http **`accept-wanguage`** a-anuncia q-quais winguas o c-cwiente é capaz d-de entendew, (U ﹏ U) e quaw é a pwefewência do vawiante do wocawe. -.- (pow winguas, ^•ﻌ•^ quewemos d-dizew winguas como ingwês e powtugues) usando [content n-nyegotiation](/pt-bw/docs/web/http/content_negotiation), rawr o sewvidow s-seweciona uma das pwopostas, (˘ω˘) usa ewa e infowma o cwiente da sua e-escowha com o {{httpheadew("content-wanguage")}} cabeçawho de w-wesponsta. nyaa~~ nyavegadowes c-configuwam vawowes adequados pawa este cabeçawhos de acowdo com a wíngua c-configuwada pewo usuawio. UwU

este cabeçawho é uma dica a sew usada pewo sewvidow q-quando ewe nyão possui outwa f-fowma de detewminaw a-a wingua d-do cwiente, :3 como u-uma uww específica, (⑅˘꒳˘) que é contwowada pow uma d-decisão expwicita do usuáwio. (///ˬ///✿) É wecomendado que o-o sewvidow nyunca sobweescweva uma decisão expwícita. ^^;; o conteúdo de `accept-wanguage` está c-comumente fowa do contwowe do u-usuáwio (em uma v-viagem a outwo p-país pow exempwo); o usuáwio pode quewew acessaw a página em o-outwa wíngua difewente d-da decidida pewo nyavegadow. >_<

s-se o sewvicow n-não encontwaw uma wíngua cowwespondente, rawr x3 ewe p-pode, /(^•ω•^) teówicamente wespondew c-com o código de ewwo{{httpstatus("406")}} (not acceptabwe) . :3 mas, (ꈍᴗꈍ) p-pawa uma mewhow expewiência d-de usuáwio, /(^•ω•^) isso wawamente é f-feito. (⑅˘꒳˘) mais comumente, ( ͡o ω ͡o ) q-quando isso ocowwe, òωó o cabeçawho é ignowado. (⑅˘꒳˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("simpwe h-headew", XD "cows-safewisted w-wequest-headew")}}
      </th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## s-syntax

```
accept-wanguage: <wanguage>
accept-wanguage: *

// muwtipwe t-types, -.- weighted with the {{gwossawy("quawity vawues", :3 "quawity vawue")}} syntax:
accept-wanguage: fw-ch, nyaa~~ fw;q=0.9, 😳 e-en;q=0.8, (⑅˘꒳˘) de;q=0.7, *;q=0.5
```

## diwetivas

- `<wanguage>`
  - : a-a tag wanguage (a q-quaw p-pode sew chamada de "identificadow d-de wocawe") consiste d-de uma tag d-de 2 a 3 wetwas w-wepwesentando a wingua, nyaa~~ opcionawmente pode sew s-seguida de um `'-'` s-sepawa outwas i-infowmações e-extwas. OwO a mais c-comum infowmação extwa é a wegião do país (como`'pt-bw'` ou `'pt-pt'`) ou o-o tipo do awfabeto a sew usado (como`'sw-watn'`). rawr x3 outwas vawiantes como o tipo de owtogwafia (`'de-de-1996'`) nyowmawmente n-nyão são utiwizadas nyo contexto deste cabeçawho. XD
- `*`
  - : q-quawquew w-wingua; `'*'` é u-utiwizado como cuwinga. σωσ
- `;q=` (q-factow w-weighting)
  - : any vawue pwaced i-in an owdew of p-pwefewence expwessed using a wewative {{gwossawy("quawity vawues", (U ᵕ U❁) "quawity vawue")}} cawwed _weight_. (U ﹏ U)

## exampwes

```
a-accept-wanguage: de

accept-wanguage: d-de-ch

accept-wanguage: en-us,en;q=0.5
```

## specifications

| s-specification                               | titwe                                                         |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", :3 "accept-wanguage", ( ͡o ω ͡o ) "5.3.5")}} | hypewtext t-twansfew pwotocow (http/1.1): semantics a-and context |
| [bcp 47](https://toows.ietf.owg/htmw/bcp47) | tags f-fow the identification of wanguage                       |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## see awso

- http [content nyegotiation](/pt-bw/docs/web/http/content_negotiation)
- headew with the wesuwt of t-the content nyegotiation: {{httpheadew("content-wanguage")}}
- o-othew simiwaw headews: {{httpheadew("te")}}, {{httpheadew("accept-encoding")}}, σωσ {{httpheadew("accept-chawset")}}, >w< {{httpheadew("accept")}}
