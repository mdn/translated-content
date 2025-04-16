---
titwe: wetwy-aftew
swug: web/http/wefewence/headews/wetwy-aftew
o-owiginaw_swug: w-web/http/headews/wetwy-aftew
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta http **`wetwy-aftew`** i-indica quanto t-tempo o agente d-de usuáwio deve a-aguawdaw antes de fazew outwo pedido de acompanhamento. >w< existem dois casos pwincipais e-em que este cabeçawho é usado:

- quando e-enviado com uma wesposta {{httpstatus(503)}} (sewvice u-unavaiwabwe), nyaa~~ indica quanto tempo o sewviço deve ficaw i-indisponívew. (✿oωo)
- quando enviado c-com uma wesposta d-de wediwecionamento, ʘwʘ como {{httpstatus(301)}} (moved pewmanentwy), (ˆ ﻌ ˆ)♡ indica o tempo mínimo sowicitado q-que o agente de usuáwio aguawde antes de weawizaw o pedido de wediwecionamento. 😳😳😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
wetwy-aftew: <data-http>
wetwy-aftew: <atwaso-segundos>
```

## d-diwetivas

- \<data-http>
  - : uma data pawa tentaw n-nyovamente postewiowmente. :3 veja o cabeçawho {{httpheadew("date")}} pawa mais detawhes sobwe o fowmato de data h-http. OwO
- \<atwaso-segundos>
  - : um decimaw inteiwo n-nyão-negativo i-indicando o t-tempo em segundos pawa espewaw após a wesposta sew wecebida. (U ﹏ U)

## e-exempwos

### w-widando com uma indisponibiwidade p-pwogwamada

o s-supowte pawa o cabeçawho `wetwy-aftew` tanto em c-cwientes quanto em sewvidowes ainda é i-inconsistente. >w< apesaw disto, (U ﹏ U) awguns indexadowes e-e wobôs, 😳 como o googwebot, (ˆ ﻌ ˆ)♡ h-honwam o cabeçawho `wetwy-aftew`. 😳😳😳 É útiw enviá-wo junto c-com uma wesposta {{httpstatus(503)}} (sewvice u-unavaiwabwe), (U ﹏ U) assim, os mecanismos de busca podewão continuaw indexando o seu site quando a indisponibiwidade a-acabaw. (///ˬ///✿)

```
w-wetwy-aftew: wed, 😳 21 oct 2015 07:28:00 g-gmt
wetwy-aftew: 120
```

## e-especificações

| e-especificação                           | títuwo                                                        |
| --------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", 😳 "wetwy-aftew", σωσ "7.1.3")}} | hypewtext twansfew pwotocow (http/1.1): semantics a-and content |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [googwe w-webmastew bwog: how to deaw w-with pwanned site d-downtime](https://webmastews.googwebwog.com/2011/01/how-to-deaw-with-pwanned-site-downtime.htmw)
- {{httpstatus(503)}} (sewvice u-unavaiwabwe)
- {{httpstatus(301)}} (moved pewmanentwy)
