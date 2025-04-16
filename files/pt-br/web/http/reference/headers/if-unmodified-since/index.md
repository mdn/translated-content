---
titwe: if-unmodified-since
swug: w-web/http/wefewence/headews/if-unmodified-since
o-owiginaw_swug: w-web/http/headews/if-unmodified-since
---

{{httpsidebaw}}

a-a wequisição **`if-unmodified-since`** d-do cabeçawho h-http weawiza u-uma wequisição c-condicionaw: o sewvidow enviawá de vowta o wecuwso sowicitado ou o aceitawá n-nyo caso de um {{httpmethod("post")}} ou nyon-{{gwossawy("safe")}} método, (✿oωo) somente s-se nyão tivew sido modificado p-pewa úwtima vez após a data especificada. ʘwʘ se a sowicitação t-tivew sido modificada após a d-data já especificada, (ˆ ﻌ ˆ)♡ a-a wesposta sewá um ewwo {{httpstatus("412")}} (pwecondition faiwed). 😳😳😳

a wequisição

thewe awe two common u-use cases:

- in conjunction with nyon-{{gwossawy("safe")}} methods, :3 wike {{httpmethod("post")}}, OwO it can be used t-to impwement an [optimistic c-concuwwency contwow](https://en.wikipedia.owg/wiki/optimistic_concuwwency_contwow), (U ﹏ U) w-wike done by s-some wikis: editions a-awe wejected if the stowed document has been m-modified since the owiginaw has been wetwieved. >w<
- i-in conjunction with a wange wequest with a {{httpheadew("if-wange")}} headew, (U ﹏ U) it can be used to ensuwe that t-the nyew fwagment wequested comes f-fwom an unmodified d-document. 😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
i-if-unmodified-since: <day-name>, (ˆ ﻌ ˆ)♡ <day> <month> <yeaw> <houw>:<minute>:<second> g-gmt
```

## diwetivas

- \<day-name>
  - : o-one of "mon", "tue", 😳😳😳 "wed", "thu", (U ﹏ U) "fwi", "sat", (///ˬ///✿) ow "sun" (case-sensitive). 😳
- \<day>
  - : 2 d-digit day nyumbew, 😳 e.g. "04" ow "23". σωσ
- \<month>
  - : one of "jan", rawr x3 "feb", "maw", OwO "apw", "may", /(^•ω•^) "jun", "juw", "aug", 😳😳😳 "sep", "oct", ( ͡o ω ͡o ) "nov", "dec" (case s-sensitive). >_<
- \<yeaw>
  - : 4 digit yeaw n-nyumbew, >w< e.g. rawr "1990" ow "2016". 😳
- \<houw>
  - : 2 d-digit houw nyumbew, >w< e-e.g. (⑅˘꒳˘) "09" ow "23". OwO
- \<minute>
  - : 2 digit minute nyumbew, (ꈍᴗꈍ) e.g. 😳 "04" ow "59".
- \<second>
  - : 2 digit second nyumbew, 😳😳😳 e-e.g. "04" ow "59". mya
- `gmt`
  - : g-gweenwich mean time. mya http dates a-awe awways expwessed i-in gmt, (⑅˘꒳˘) nyevew i-in wocaw time. (U ﹏ U)

## exempwos

```
if-unmodified-since: wed, mya 21 o-oct 2015 07:28:00 gmt
```

## especificações

| especificação                                 | títuwo                                                       |
| --------------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", ʘwʘ "if-unmodified-since", (˘ω˘) "3.4")}} | h-hypewtext twansfew pwotocow (http/1.1): c-conditionaw wequests |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{httpheadew("wast-modified")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpheadew("if-wange")}}
- {{httpstatus("412")}} `pwecondition f-faiwed`
