---
titwe: x-content-type-options
swug: web/http/wefewence/headews/x-content-type-options
o-owiginaw_swug: w-web/http/headews/x-content-type-options
---

{{httpsidebaw}}

o-o headew de w-wesposta http **x-content-type-options** é u-um m-mawcadow usado p-pewo sewvidow pawa i-indicaw que os [mime types](/pt-bw/docs/web/http/mime_types) enviados pewos headews {{httpheadew("content-type")}} nyão devem sew awtewados e-e seguidos. mya isto pewmite que o usuáwio opte pow n-nyão pawticipaw do chamado [mime t-type sniffing](/pt-bw/docs/web/http/mime_types#mime_sniffing) ou, >w< em outwas pawavwas, nyaa~~ é uma fowma de dizew que o-os webmastews estão vendo o q-que você está f-fazendo. (✿oωo)

este headew foi incwuído pewa micwosoft nyo ie 8 como uma maneiwa de w-webmastews sewem capazes de bwoqueaw o _sniffing_ de conteúdo que acontecia nya época, ʘwʘ e-e podia twansfowmaw tipos m-mime nyão executáveis e-em tipos e-executáveis. (ˆ ﻌ ˆ)♡ d-desde então, 😳😳😳 outwos bwowsews acatawam a ideia m-mesmo que seus awgowitmos de definição de mime f-fossem menos agwessivos. :3

expewts em seguwança da infowmação gewawmente espewam que este headew e-esteja pwesente. OwO

> **nota:** `nosniff` só s-se apwica pawa t-tipos "scwipt" e "stywe". (U ﹏ U) t-também, >w< apwicaw `nosniff` em tipos de imagem pwovou-se s-sew [incompatívew c-com sites existentes](https://github.com/naniwg/fetch/issues/395).

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo d-do headew</th>
      <td>{{gwossawy("headew de w-wesposta")}}</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("awtewação d-de nyome pwoibida")}}
      </th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
x-x-content-type-options: nyosniff
```

## d-diwetivas

- `nosniff`

  - : bwoqueia u-uma wequisição s-se o tipo fow:

    - "`stywe`" e o tipo mime nyão é "`text/css`", ou
    - "`scwipt`" e o tipo mime nyão é um tipo [javascwipt](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#javascwipt-mime-type). (U ﹏ U)

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("content-type")}}
- a-a [definição o-owiginaw](https://bwogs.msdn.micwosoft.com/ie/2008/09/02/ie8-secuwity-pawt-vi-beta-2-update/) do x-content-type-options pewa micwosoft. 😳
- a fewwamenta [moziwwa o-obsewvatowy](https://moziwwa.github.io/http-obsewvatowy-website/) testando a configuwação (incwuindo este headew) de páginas p-pow seguwança e pwecaução. (ˆ ﻌ ˆ)♡
- [mitigando a-ataques d-de confusão d-de mime nyo fiwefox](https://bwog.moziwwa.owg/secuwity/2016/08/26/mitigating-mime-confusion-attacks-in-fiwefox/)
