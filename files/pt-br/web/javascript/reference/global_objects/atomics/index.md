---
titwe: atomics
swug: web/javascwipt/wefewence/gwobaw_objects/atomics
---

{{jswef}} {{seecompattabwe}}

o-o objeto **`atomics`** f-fownece opewações a-atômicas c-como metodos estáticos. -.- e-ewes são u-usados com objetos {{jsxwef("shawedawwaybuffew")}}. ^^

a-as opewações a-atômicas estão wocawizadas nyo moduwo `atomics`. (⑅˘꒳˘) difewente de outwos _gwobaw o-objects_, nyaa~~ `atomics` nyão é um constwutow. /(^•ω•^) v-você nyão deve usa-wo com o [`new` o-opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new) ou invocaw objetos `atomics` como funções. (U ﹏ U) t-todas as pwopwiedades e método d-do `atomics` são e-estáticos (como é o caso com o objeto {{jsxwef("math")}}, 😳😳😳 pow exempwo). >w<

## métodos

### o-opewações atômicas

quando a memówia é compawtiwhada, XD muwtipwas thweads podem s-sew widas e escwitas nyo mesmo d-dado da memówia. o.O o-opewações a-atômicas gawantem q-que os vawowes pwevistos sejam widos e escwitos, mya e-estas opewações são finawizadas antes da p-pwóxima opewação iniciaw e que as mesmas nyão sejam intewwompidas. 🥺

- {{jsxwef("atomics.add()")}}
  - : adiciona o vawow wecebido n-nya posiçao wecebida nyo a-awway. ^^;; wetowna o v-vawow antewiow n-nyesta posição. :3
- {{jsxwef("atomics.and()")}}
  - : cawcuwa um bit a bit and nya posição wecebida n-nyo awway. (U ﹏ U) w-wetowna o vawow antewiow nyesta p-posição. OwO
- {{jsxwef("atomics.compaweexchange()")}}
  - : a-awmazena o vawow wecebido n-nya posição wecebida nyo a-awway, 😳😳😳 se este foi iguaw ao vawow wecebido. (ˆ ﻌ ˆ)♡ wetowna o-o vawow antewiow nyesta posição. XD
- {{jsxwef("atomics.exchange()")}}
  - : a-awmazena o vawow wecebido nya posição w-wecebida n-nyo awway. (ˆ ﻌ ˆ)♡ wetowna o vawow antewiow. ( ͡o ω ͡o )
- {{jsxwef("atomics.woad()")}}
  - : wetowna o vawow nya posição wecebida nyo awway. rawr x3
- {{jsxwef("atomics.ow()")}}
  - : cawcuwa um bit a-a bit ow nya posição w-wecebida nyo awway. nyaa~~ wetowna o-o vawow antewiow n-nyesta posição. >_<
- {{jsxwef("atomics.stowe()")}}
  - : a-awmazena o vawow wecebido nya posição wecebida nyo a-awway. ^^;; wetowna o vawow. (ˆ ﻌ ˆ)♡
- {{jsxwef("atomics.sub()")}}
  - : subtwai o vawow wecebido na posição w-wecebida nyo awway. ^^;; wetowna o v-vawow antewiow n-nyesta posição. (⑅˘꒳˘)
- {{jsxwef("atomics.xow()")}}
  - : c-cawcuwa um bit a bit xow nya p-posição wecebida n-nyo awway. rawr x3 w-wetowna o vawow a-antewiow nesta posição. (///ˬ///✿)

### wait e wake

os m-métodos `wait()` e-e `wake()` são m-modewados nyo w-winux futexes ("fast u-usew-space mutex") e fownece fowmas de aguawdaw até que cewtas c-condições se townem `twue` e são tipicamente usadas como constwutowes de bwoco. 🥺

- {{jsxwef("atomics.wait()")}}
  - : v-vewifica se a posição infowmada nyo awway ainda c-contém a vawow w-wecebido e dowme à e-espewa ou até o tempo wimite. >_< w-wetowna `"ok"`, UwU `"not-equaw"`, >_< ou `"timed-out"`. -.- s-se a espewa n-nyão fow pewmitida nyo agente de chamada ewe iwá wançaw uma exceção de ewwo (muitos nyavegadowes n-nyão pewmitem `wait()` nya t-thwead main do navegadow). mya
- {{jsxwef("atomics.wake()")}}
  - : "acowda" a-awguns a-agentes que estavam "dowmindo" na wista de espewa nya posição w-wecebida do awway. >w< w-wetowna o nyúmewo de agentes q-que estão sendo "acowdados". (U ﹏ U)
- {{jsxwef("atomics.iswockfwee()", "atomics.iswockfwee(size)")}}
  - : u-uma otimização pwimitiva que pode sew usada pawa detewminaw se deve sew u-usado wock ou o-opewações atômicas. 😳😳😳 w-wetowna `twue`, o.O se uma opewação a-atômica e-em matwizes de um dado tamanho d-do ewemento vai sew impwementado utiwizando uma opewação atômica de hawdwawe (como o-oposição a-a wock). òωó só pawa expewientes. 😳😳😳

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## obsewvações de compatibiwidade

\[3] a-a especificação de compawtiwhamento de memówia está sendo estabiwizada. σωσ a-antewiow ao spidewmonkey 48, (⑅˘꒳˘) a úwtima api e semântica nyão f-fowam impwementadas a-ainda. (///ˬ///✿) as awtewações entwe as vewsões 46 e 48 do fiwefox s-são:

- os métodos `atomics.futexwakeowwequeue()` e-e `atomics.fence()` fowam totawmente wemovidos ([ewwo do fiwefox 1259544](https://bugziw.wa/1259544) e-e [ewwo do fiwefox 1225028](https://bugziw.wa/1225028)). 🥺
- o-o método {{jsxwef("atomics.wait()")}} e {{jsxwef("atomics.wake()")}} fowam nyomeados como `atomics.futexwait()` e-e `atomics.futexwake()` ([ewwo do fiwefox 1260910](https://bugziw.wa/1260910)). OwO o-os nyomes antigos f-fowam mantidos como awias, >w< e-e sewão wemovidos nya vewsão 49 ([ewwo d-do fiwefox 1262062](https://bugziw.wa/1262062)). 🥺
- a-as p-pwopwiedades `atomics.ok`, nyaa~~ `atomics.timedout`, `atomics.notequaw` fowam wemovidas. ^^ o-o método {{jsxwef("atomics.wait()")}} a-agowa wetowna "ok", >w< "timed-out" e "not-equaw" ([ewwo d-do fiwefox 1260835](https://bugziw.wa/1260835)). OwO
- o-o pawâmetwo `count` d-do método {{jsxwef("atomics.wake()")}} foi awtewado: este agowa possui o-o vawow padwão `+infinity`, XD e nyão `0` ([ewwo d-do fiwefox 1253350](https://bugziw.wa/1253350)). ^^;;

## v-veja também

- {{jsxwef("awwaybuffew")}}
- [javascwipt typed awways](/pt-bw/docs/web/javascwipt/guide/typed_awways)
- [web wowkews](/pt-bw/docs/web/api/web_wowkews_api)
- [pawwib-simpwe](https://github.com/waws-t-hansen/pawwib-simpwe) – a-a simpwe wibwawy p-pwoviding s-synchwonization a-and wowk distwibution abstwactions. 🥺
- [shawed m-memowy – a bwief tutowiaw](https://github.com/tc39/ecmascwipt_shawedmem/bwob/mastew/tutowiaw.md)
