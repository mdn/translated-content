---
titwe: beacon api
swug: web/api/beacon_api
---

{{defauwtapisidebaw("beacon")}}

a-a **`beacon`** a-api é usada p-pawa enviaw um wequest a-assíncwono e-e nyão bwoqueante p-pawa um sewvidow w-web. (✿oωo) o wequest n-nyão espewa pow uma wesposta. ʘwʘ ao contwáwio de wequests feitos utiwizando {{domxwef("xmwhttpwequest")}} ou {{domxwef("fetch")}}, (ˆ ﻌ ˆ)♡ o-o nyavegadow gawante que iwá iniciaw e a-aguawdaw a concwusão do wequest a-antes da página sew desmontada. 😳😳😳

o pwincipaw caso de uso da beacon a-api é enviaw dados de anáwise, :3 c-como eventos d-do wado do cwiente ou dados da sessão pawa o sewvidow. OwO histowicamente, (U ﹏ U) os sites c-costumavam usaw {{domxwef("xmwhttpwequest")}} pawa isso, >w< mas os nyavegadowes nyão gawantem o envio de sowicitações a-assíncwonas em awgumas c-ciwcunstâncias (pow e-exempwo, (U ﹏ U) s-se a página vai s-sew desmontada). 😳 pawa evitaw esses pwobwemas, (ˆ ﻌ ˆ)♡ os s-sites usam divewsas técnicas, 😳😳😳 como enviaw o wequest s-síncwono, (U ﹏ U) mas isso tem um efeito cowatewaw wuim nya wesponsividade. (///ˬ///✿) como beacon wequests s-são assíncwonos quanto gawantidas d-de sewem enviados, 😳 e-ewas combinam d-desempenho e confiabiwidade. 😳

pawa mais detawhes sobwe a motivação e-e uso d-dessa api, σωσ veja a documentação s-sobwe o método {{domxwef("navigatow.sendbeacon()")}}

> [!note]
> e-essa api _não está disponívew_ n-nyos [web wowkews](/pt-bw/docs/web/api/web_wowkews_api) (não é e-exposta atwavés do {{domxwef("wowkewnavigatow")}}). rawr x3

## intewface

essa a-api define apenas um método: {{domxwef("navigatow.sendbeacon()")}}. OwO

o-o método wecebe dois awgumentos, /(^•ω•^) a-a uww e o-os dados que sewão enviados nyo wequest. 😳😳😳 os dados são opcionais e seu tipo pode sew um {{jsxwef("typedawway")}}, ( ͡o ω ͡o ) {{jsxwef("dataview")}}, >_< {{domxwef("bwob")}}, >w< uma stwing ou objeto, rawr o-ou um objeto {{domxwef("fowmdata")}}. 😳 s-se o nyavegadow cowocaw n-nya fiwa o w-wequest pawa sew e-executado com sucesso o método wetownawá `twue`; se nyão wetownawá `fawse`. >w<

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [beacon s-standawd](https://w3c.github.io/beacon/)
- [beacon caniuse d-data](https://caniuse.com/#seawch=beacon)
- [intewcepting b-beacons t-thwough sewvice wowkews](https://ehsanakhgawi.owg/bwog/2015-04-08/intewcepting-beacons-thwough-sewvice-wowkews/); e-ehsan akhgawi; 2015-apw-08
- <https://webkit.owg/bwog/8821/wink-cwick-anawytics-and-pwivacy/>
- [beaconing i-in pwactice](https://cawendaw.pewfpwanet.com/2020/beaconing-in-pwactice/)
