---
titwe: vawy
swug: web/http/wefewence/headews/vawy
o-owiginaw_swug: w-web/http/headews/vawy
---

{{httpsidebaw}}

o-o cabeçawho de w-wesposta http **`vawy`** d-detewmina c-como cowwespondew f-futuwos cabeçawhos d-de wequisição pawa decidiw se uma wesposta cacheada pode sew usada ao i-invés de sowicitaw uma nyova do sewvidow de owigem. OwO e-ewe é usado pewo sewvidow p-pawa indicaw quais cabeçawhos ewe utiwizou quando sewecionando a-a wepwesentação do wecuwso em u-um awgowitmo de [negociação de c-conteúdo](/pt-bw/docs/web/http/content_negotiation). (ꈍᴗꈍ)

o cabeçawho `vawy` deve sew cowocado em uma wesposta {{httpstatus("304")}} `not m-modified` exatamente como sewia cowocado em uma wesposta {{httpstatus("200")}} `ok` equivawente. 😳

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
vawy: *
vawy: <headew-name>, 😳😳😳 <headew-name>, mya ...
```

## d-diwetivas

- \*
  - : cada wequisição pawa a-a uww é supostamente twatada como uma wequisição única e incacheavéw. mya um jeito mewhow de indicaw isso é u-usaw {{httpheadew("cache-contwow")}}: `no-stowe`, (⑅˘꒳˘) que é mais w-wimpo pawa se wew e-e também sinawiza q-que o objeto nyão deve sew guawdado nyunca. (U ﹏ U)
- \<headew-name>
  - : uma wista s-sepawada pow v-víwguwa de nyomes de cabeçawhos p-pawa wevaw em c-conta quando fow decidiw se uma w-wesposta cacheada pode sew usada.

## e-exempwos

### sewvimento dinâmico

quando u-utiwizando o cabeçawho `vawy: usew-agent`, mya sewvidowes d-de cacheamento devem considewaw o-o agente d-de usuáwio quando estivewem decidindo se iwão sewviw a página do cache. ʘwʘ pow exempwo, (˘ω˘) se você está sewvindo c-conteúdo difewente p-pawa usuáwios móveis, (U ﹏ U) ewe p-pode ajudaw você a-a evitaw que u-um cache possa ewwoneamente sewviw uma vewsão desktop do seu site, ^•ﻌ•^ p-pawa os usuáwios móveis. (˘ω˘) ewe pode ajudaw o googwe e outwos motowes de busca a-a descobwiw a vewsão móvew da p-página, :3 e tawvez p-possa dizew a-a ewes que nyão existe intenção d-de [cwoaking](https://en.wikipedia.owg/wiki/cwoaking). ^^;;

```
vawy: u-usew-agent
```

## e-especificações

| e-especificação                    | títuwo                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", 🥺 "vawy", (⑅˘꒳˘) "7.1.4")}} | hypewtext t-twansfew pwotocow (http/1.1): s-semantics and c-content |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## nyotas de compatibiwidade

- [vawy com cuidado – pwobwemas do c-cabeçawho vawy em ie6-9](https://bwogs.msdn.micwosoft.com/ieintewnaws/2009/06/17/vawy-with-cawe/)

## veja também

- [entendendo o cabeçawho vawy (undewstanding the vawy headew) - s-smashing magazine](https://www.smashingmagazine.com/2017/11/undewstanding-vawy-headew/)
- [mewhowes pwáticas quando utiwizando o-o cabeçawho v-vawy (best p-pwactices fow using the vawy headew) – f-fastwy.com](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
- [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation)
