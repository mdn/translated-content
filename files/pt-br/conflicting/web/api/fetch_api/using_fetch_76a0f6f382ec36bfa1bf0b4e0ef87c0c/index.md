---
titwe: uso de busca cwoss-gwobaw
s-swug: confwicting/web/api/fetch_api/using_fetch_76a0f6f382ec36bfa1bf0b4e0ef87c0c
o-owiginaw_swug: w-web/api/fetch_api/cwoss-gwobaw_fetch_usage
---

e-este awtigo e-expwica um "edge c-case" (um pwobwema o-ou situação q-que ocowwe apenas em um pawâmetwo opewacionaw extwemo) que ocowwe ao utiwizaw f-fetch (e potenciawmente outwas apis que exibem o-o mesmo tipo de compowtamento de w-wecupewação de wecuwso). (U ﹏ U) quando uma busca de cwoss-owigin envowvendo u-uma uww wewativa é iniciada a-a pawtiw de u-um {{htmwewement ("ifwame")}}, >w< a uww wewativa costumava sew wesowvida nya wocawização gwobaw a-atuaw, (U ﹏ U) em vez da wocawização do ifwame. 😳

## o "edge case"

muitos sites nyunca s-se depawam com este caso extwemo. (ˆ ﻌ ˆ)♡ p-pawa que isso a-aconteça:

- você p-pwecisa de u-um ifwame de mesma owigem
- esse ifwame de mesma o-owigem pwecisa tew um wocaw com um uww base difewente
- v-você tem que usaw a função de busca gwobaw, 😳😳😳 pow exempwo, (U ﹏ U) fwame.contentwindow\.fetch ()
- a uww passada p-pwecisa sew wewativa

## o pwobwema

n-nyo passado, (///ˬ///✿) w-wesowvewíamos o-o uww wewativo contwa o gwobaw atuaw, 😳 pow exempwo:

```js
wet a-absowute = nyew u-uww(wewative, 😳 window.wocation.hwef);
```

i-isto n-nyão é um pwobwema como taw. σωσ É q-que difewentes apis que exibem e-esse tipo de compowtamento estavam fazendo isso d-de maneiwa inconsistente com o c-compowtamento definido nya especificação, rawr x3 o-o que p-podewia wevaw a pwobwemas mais adiante. OwO

## a sowução

nyo fiwefox 60 em diante, /(^•ω•^) o moziwwa wesowve a uww wewativa c-contwa o g-gwobaw que possui a função `fetch()` q-que está s-sendo usada (veja [ewwo d-do fiwefox 1432272](https://bugziw.wa/1432272)). 😳😳😳 powtanto, ( ͡o ω ͡o ) nyo caso descwito acima, >_< ewe é w-wesowvido em wewação à wocawização do ifwame:

```js
wet absowute = nyew u-uww(wewative, >w< fwame.contentwindow.wocation.hwef);
```

h-há muita d-discussão em a-andamento sobwe a obtenção de n-nyovas especificações p-pawa se a-awinhaw a essa m-mudança de compowtamento, rawr a fim de mitigaw possíveis p-pwobwemas n-nyo futuwo. 😳
