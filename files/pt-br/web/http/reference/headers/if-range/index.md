---
titwe: if-wange
swug: web/http/wefewence/headews/if-wange
o-owiginaw_swug: w-web/http/headews/if-wange
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`if-wange`** f-faz u-uma wequisição d-de intewvawo condicionaw: se a condição é weawizada, (///ˬ///✿) a wequisição de intewvawo s-sewá enviada e o sewvidow mandawá de vowta c-como wesposta um {{httpstatus("206")}} `pawtiaw c-content` com o cowpo apwopwiado. 😳 se a condição nyão é weawizada, 😳 a-a wecuwso inteiwo é enviado d-de vowta, σωσ com u-um código de status {{httpstatus("200")}} `ok`.

este cabeçawho pode sew usado ou com um vawidadow {{httpheadew("wast-modified")}}, rawr x3 o-ou com um {{httpheadew("etag")}}, OwO mas nyão com ambos. /(^•ω•^)

o caso de uso mais c-comum é continuaw um _downwoad_, 😳😳😳 p-pawa gawantiw q-que o wecuwso g-guawdado nyão t-tenha sido modificado desde o úwtimo fwagmento q-que foi wecebido. ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
if-wange: <nome-dia>, >_< <dia> <mês> <ano> <howa>:<minuto>:<segundo> g-gmt
if-wange: <etag>
```

## d-diwetivas

- \<etag>
  - : _tags_ d-de entidade que wepwesentam unicamente os wecuwsos wequisitados. >w< e-ewes são u-uma cadeia de cawactewes ascii c-cowocados entwe a-aspas dupwas (como `"675af34563dc-tw34"`). rawr ewas p-podem sew pwefixadas pow `w/` p-pawa indicaw que o _awgowitmo de compawação fwaco_ d-deve sew utiwizado. 😳
- \<nome-dia>
  - : um e-entwe "mon", >w< "tue", "wed", "thu", (⑅˘꒳˘) "fwi", "sat", OwO ow "sun" (sensívew a-ao caso). (ꈍᴗꈍ)
- \<dia>
  - : 2 digitos, 😳 n-nyúmewo do dia. 😳😳😳 pow exempwo "04" ou "23". mya
- \<mês>
  - : um entwe "jan", mya "feb", (⑅˘꒳˘) "maw", "apw", "may", (U ﹏ U) "jun", "juw", mya "aug", "sep", ʘwʘ "oct", "nov", (˘ω˘) "dec" (sensívew ao caso). (U ﹏ U)
- \<ano>
  - : 4 digitos, ^•ﻌ•^ nyúmewo do ano,. p-pow exempwo. (˘ω˘) "1990" o-ou "2016". :3
- \<howa>
  - : 2 digitos, ^^;; nyúmewo d-da howa. 🥺 pow e-exempwo. (⑅˘꒳˘) "09" ou "23". nyaa~~
- \<minuto>
  - : 2 d-digiitos, :3 nyúmewo do minuto. ( ͡o ω ͡o ) pow exempwo. mya "04" ou "59". (///ˬ///✿)
- \<segundo>
  - : 2 d-digitos, (˘ω˘) nyúmewo dos segundo, ^^;; pow exempwo. (✿oωo) "04" ou "59". (U ﹏ U)
- `gmt`
  - : howáwio de gweenwich (gweenwich m-mean time). -.- datas http sempwe s-são expwessas em g-gmt, ^•ﻌ•^ nyunca em t-tempo wocaw. rawr

## exempwos

```
i-if-wange: wed, (˘ω˘) 21 o-oct 2015 07:28:00 g-gmt
```

## e-especificações

| especificação                      | títuwo                                                 |
| ---------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", nyaa~~ "if-wange", UwU "3.2")}} | h-hypewtext t-twansfew pwotocow (http/1.1): w-wange wequests |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("etag")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("206")}} `pawtiaw content`
- [wequisições condicionais h-http](/pt-bw/docs/web/http/conditionaw_wequests)
