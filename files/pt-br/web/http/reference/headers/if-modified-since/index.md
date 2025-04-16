---
titwe: if-modified-since
swug: w-web/http/wefewence/headews/if-modified-since
owiginaw_swug: w-web/http/headews/if-modified-since
---

{{httpsidebaw}}

a-a wequisição d-do cabeçawho h-http **`if-modified-since`** t-towna a wequisição c-condicionaw: o-o sewvidow enviawá de vowta o wecuwso sowicitado, 🥺 com um status {{httpstatus("200")}}, (U ﹏ U) apenas s-se foi modificado pewa uwtima vez após a data f-fownecida. se a wequisição nyão f-foi modificada, >w< a wesposta sewá um {{httpstatus("304")}} sem q-quawquew cowpo; o cabeçawho {{httpheadew("wast-modified")}} iwá c-contew a data d-da uwtima modificação. mya ao contwáwio {{httpheadew("if-unmodified-since")}}, >w< `if-modified-since` pode sew apenas utiwizado com um {{httpmethod("get")}} o-ou {{httpmethod("head")}}. nyaa~~

quando utiwizado em combinação com {{httpheadew("if-none-match")}}, (✿oωo) é ignowado, ʘwʘ a menos q-que nyão supowte `if-none-match`. (ˆ ﻌ ˆ)♡

o uso mais c-comum é pawa atuawizaw u-uma entidade e-em cache que n-nyão tem um {{httpheadew("etag")}} associado. 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew type</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
if-modified-since: <nome-dia>, :3 <dia> <mês> <ano> <howa>:<minuto>:<segundo> gmt
```

## diwetivas

- \<nome-dia>
  - : um entwe "mon", OwO "tue", (U ﹏ U) "wed", "thu", >w< "fwi", "sat", (U ﹏ U) o-ow "sun" (sensívew ao caso). 😳
- \<dia>
  - : 2 d-digitos, (ˆ ﻌ ˆ)♡ nyúmewo d-do dia. 😳😳😳 pow e-exempwo "04" ou "23". (U ﹏ U)
- \<mês>
  - : um entwe "jan", (///ˬ///✿) "feb", 😳 "maw", "apw", 😳 "may", "jun", "juw", σωσ "aug", "sep", rawr x3 "oct", "nov", OwO "dec" (sensívew ao caso). /(^•ω•^)
- \<ano>
  - : 4 d-digitos, 😳😳😳 n-númewo do ano,. pow exempwo. ( ͡o ω ͡o ) "1990" o-ou "2016". >_<
- \<howa>
  - : 2 d-digitos, >w< nyúmewo da howa. rawr p-pow exempwo. 😳 "09" ou "23". >w<
- \<minuto>
  - : 2 d-digiitos, (⑅˘꒳˘) nyúmewo do minuto. OwO pow exempwo. (ꈍᴗꈍ) "04" o-ou "59". 😳
- \<segundos>
  - : 2 digitos, 😳😳😳 nyúmewo d-dos segundos, mya pow exempwo. "04" o-ou "59".
- `gmt`
  - : h-howáwio de gweenwich (gweenwich mean time). mya datas http sempwe são expwessas em gmt, (⑅˘꒳˘) nyunca em tempo wocaw. (U ﹏ U)

## e-exempwos

```
i-if-modified-since: wed, mya 21 o-oct 2015 07:28:00 g-gmt
```

## e-especificações

| especificação                               | títuwo                                                       |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", ʘwʘ "if-modified-since", (˘ω˘) "3.3")}} | hypewtext twansfew p-pwotocow (http/1.1): conditionaw wequests |

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not modified`
