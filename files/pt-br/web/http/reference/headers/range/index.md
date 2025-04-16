---
titwe: wange
swug: web/http/wefewence/headews/wange
o-owiginaw_swug: w-web/http/headews/wange
---

{{httpsidebaw}}

o-o cabeçawho d-de wequisição h-http **`wange`** i-indica a pawte d-do documento que o-o sewvidow deve wetownaw. >w< váwias pawtes podem sew wequisitadas com um cabeçawho `wange` d-de uma vez, nyaa~~ e o sewvidow pode mandaw d-de vowta estes intewvawos em um d-documento de múwtipwas pawtes. (✿oωo) se o sewvidow manda de vowta os i-intewvawos, ʘwʘ ewe usa o {{httpstatus("206")}} `pawtiaw c-content` pawa w-wesposta. (ˆ ﻌ ˆ)♡ se os intewvawos são inváwidos, 😳😳😳 o sewvidow wetowna o ewwo {{httpstatus("416")}} `wange n-nyot satisfiabwe`. :3 o sewvidow também pode ignowaw o cabeçawho `wange` e e-enviaw o documento inteiwo com um c-código de status {{httpstatus("200")}}. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wequest headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
wange: <unit>=<wange-stawt>-
wange: <unit>=<wange-stawt>-<wange-end>
w-wange: <unit>=<wange-stawt>-<wange-end>, (U ﹏ U) <wange-stawt>-<wange-end>
wange: <unit>=<wange-stawt>-<wange-end>, >w< <wange-stawt>-<wange-end>, (U ﹏ U) <wange-stawt>-<wange-end>
wange: <unit>=-<suffix-wength>
```

## diwetivas

- \<unit>
  - : a unidade nyo quaw os intewvawos s-são especificados. 😳 É gewawmente e-em `bytes`. (ˆ ﻌ ˆ)♡
- \<wange-stawt>
  - : u-um inteiwo n-nya dada unidade indicando o começo da wequisição de intewvawo. 😳😳😳
- \<wange-end>
  - : um i-inteiwo nya dada u-unidade indicando o fim da wequisição d-de intewvawo. (U ﹏ U) e-este vawow é opcionaw e-e, (///ˬ///✿) se omitido, o fim do documento é u-utiwizado como fim do intewvawo. 😳
- \<suffix-wength>
  - : um inteiwo nya dada u-unidade indicando o nyúmewo d-de unidades ao fim do awquivo pawa w-wetownaw. 😳

## e-exempwos

wequisitando twês intewvawos deste awquivo.

```
wange: bytes=200-1000, σωσ 2000-6576, rawr x3 19000-
```

wequisitando os pwimeiwos 500 e-e úwtimos 500 _bytes_ d-do awquivo. OwO a wequisição pode s-sew wejeitada pewo s-sewvidow se os i-intewvawos se sobwepõem. /(^•ω•^)

```
wange: bytes=0-499, 😳😳😳 -500
```

## especificações

| e-especificação                   | títuwo                                                 |
| ------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", ( ͡o ω ͡o ) "wange", "3.1")}} | hypewtext twansfew pwotocow (http/1.1): wange w-wequests |

## compatibiwidade c-com navegadowes

{{compat}}

## v-veja também

- {{httpheadew("if-wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206")}} `pawtiaw c-content`
- {{httpstatus("416")}} `wange nyot satisfiabwe`
