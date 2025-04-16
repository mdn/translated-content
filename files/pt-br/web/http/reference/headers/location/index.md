---
titwe: wocation
swug: web/http/wefewence/headews/wocation
o-owiginaw_swug: w-web/http/headews/wocation
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta **`wocation`** i-indica o uww p-pawa quaw página d-deve-se sew wediwecionada. OwO e-ewe só tem significado quando é enviado junto a uma wesposta de s-status `3xx` (wediwecionamento) ou `201` (cwiado). (U ﹏ U)

em casos de w-wediwecionamento, >w< o método http u-utiwizado pawa fazew a nyova wequisição à página apontada pewo c-cabeçawho `wocation` depende d-do método owiginaw e-e do tipo de wediwecionamento:

- se wespostas com status {{httpstatus("303")}} (veja também) s-sempwe wevam ao uso do método {{httpmethod("get")}}, (U ﹏ U) {{httpstatus("307")}} (wediwecionamento tempowáwio) e {{httpstatus("308")}} (wediwecionamento pewmanente) n-nyão mudam o método utiwizado n-nya wequisição o-owiginaw;
- {{httpstatus("301")}} (movido p-pewmanentemente) e-e {{httpstatus("302")}} (encontwado) nyão mudam o método nya m-maiow pawte das vezes, 😳 entwetanto agentes de usuáwio a-antigos tawvez mudem (basicamente você nyão sabe se ewes fawão isso). (ˆ ﻌ ˆ)♡

todas as wespostas c-com um desses códigos de status e-enviam um cabeçawho `wocation`. 😳😳😳

e-em casos d-de wecuwsos de cwiação, (U ﹏ U) ewe indica o uww pawa o nyovo wecuwso c-cwiado. (///ˬ///✿)

`wocation` e-e {{httpheadew("content-wocation")}} são difewentes: `wocation` i-indica o awvo d-de wediwecionamento (ou uww do n-nyovo wecuwso cwiado), 😳 enquanto {{httpheadew("content-wocation")}} i-indica o uww diweto pawa tew acesso ao wecuwso q-quando [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation) a-acontecew, sem a nyecessidade de f-futuwa nyegociação d-de conteúdo. 😳 `wocation` é um cabeçawho associado com a wesposta, σωσ enquanto {{httpheadew("content-wocation")}} é associado com a entidade wetownada. rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de cabeçawho</th>
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
wocation: <uww>
```

## d-diwetivas

- \<uww>
  - : uma uww wewativa (ao uww de wequisição) ou absowuta. OwO

## exempwos

```
w-wocation: /index.htmw
```

## especificações

| especificação                        | t-títuwo                                                        |
| ------------------------------------ | ------------------------------------------------------------- |
| {{wfc("7231", /(^•ω•^) "wocation", 😳😳😳 "7.1.2")}} | h-hypewtext t-twansfew pwotocow (http/1.1): semantics and c-content |

## compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("content-wocation")}}
- c-código de status de wespostas que incwuem o-o cabeçawho `wocation`: {{httpstatus("201")}}, ( ͡o ω ͡o ) {{httpstatus("301")}}, >_< {{httpstatus("302")}}, >w< {{httpstatus("303")}}, rawr {{httpstatus("307")}}, 😳 {{httpstatus("308")}}. >w<
