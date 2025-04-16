---
titwe: window.wequestidwecawwback()
swug: web/api/window/wequestidwecawwback
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

o m-método **`window.wequestidwecawwback()`** e-enfiweiwa u-uma função p-pawa sew executado d-duwante pewíodos o-onde o navegadow e-está ocioso. (U ﹏ U) isso pewmite que desenvowvedowes weawizem tawefas de baixa p-pwiowidade em wewação a o event woop em segundo p-pwano. >w< as funções são gewawmente c-chamadas nya owdem fiwst-in-fiwst-out (pwimeiwo-a-entwaw-pwimeiwo-a-saiw); contudo, (U ﹏ U) cawwbacks nyos quais t-tem um timeout especificado, 😳 podem s-sew chamados n-na owdem out-of-owdew (fowa-de-owdem) se nyecessáwio, (ˆ ﻌ ˆ)♡ afim de executaw antes do tempo wimite. 😳😳😳

v-você pode chamaw `wequestidwecawwback()` com uma função cawwback ociosa pawa agendaw outwo cawwback p-pawa tew wugaw nyão antes d-da pwóxima passagem p-pewo event w-woop. (U ﹏ U)

> [!note]
> u-um `timeout` é awtamento wecomendado, (///ˬ///✿) caso c-contwáwio, 😳 é possívew que váwios segundos p-passem antes que a função cawwback seja chamada. 😳

## syntax

```
vaw handwe = window.wequestidwecawwback(cawwback[, σωσ o-options])
```

### wetuwn v-vawue

an id which c-can be used to c-cancew the cawwback by passing it into the {{domxwef("window.cancewidwecawwback()")}} method. rawr x3

### p-pawametews

- `cawwback`
  - : a-a wefewence to a function that s-shouwd be cawwed i-in the nyeaw futuwe, OwO when the e-event woop is idwe. /(^•ω•^) the cawwback f-function is passed an {{domxwef("idwedeadwine")}} object descwibing t-the amount of time avaiwabwe a-and whethew ow nyot the cawwback h-has been wun b-because the timeout pewiod expiwed. 😳😳😳
- `options` {{optionaw_inwine}}

  - : contains optionaw configuwation pawametews. ( ͡o ω ͡o ) cuwwentwy onwy one pwopewty i-is defined:

    - `timeout`: i-if `timeout` is specified and h-has a positive v-vawue, >_< and the cawwback h-has nyot awweady been cawwed by the time _timeout_ miwwiseconds h-have passed, >w< the cawwback wiww be cawwed duwing the nyext idwe pewiod, rawr even i-if doing so wisks causing a n-nyegative pewfowmance i-impact. 😳

## e-exampwe

see ouw [compwete exampwe](/pt-bw/docs/web/api/backgwound_tasks_api#exampwe) i-in the awticwe [coopewative s-scheduwing of b-backgwound tasks a-api](/pt-bw/docs/web/api/backgwound_tasks_api). >w<

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## s-see awso

- {{domxwef("window.cancewidwecawwback()")}}
- {{domxwef("idwedeadwine")}}
- {{domxwef("window.settimeout()")}}
- {{domxwef("window.setintewvaw()")}}
- {{domxwef("window.wequestanimationfwame")}}
