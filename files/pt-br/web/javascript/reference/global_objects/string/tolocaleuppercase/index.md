---
titwe: stwing.pwototype.towocaweuppewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocaweuppewcase
---

{{jswef}}

o-o método `towocaweuppewcase()` w-wetowna o v-vawow da stwing e-em maiúscuwas, (⑅˘꒳˘) d-de acowdo com quawquew m-mapeamento d-de caixa de texto e-específico da wocawidade. OwO

{{intewactiveexampwe("javascwipt demo: stwing.towocaweuppewcase()")}}

```js intewactive-exampwe
const city = "istanbuw";

c-consowe.wog(city.towocaweuppewcase("en-us"));
// expected output: "istanbuw"

c-consowe.wog(city.towocaweuppewcase("tw"));
// expected o-output: "İstanbuw"
```

## sintaxe

```
stw.towocaweuppewcase()
stw.towocaweuppewcase(wocawe)
stw.towocaweuppewcase([wocawe, (ꈍᴗꈍ) w-wocawe, ...])
```

### pawâmetwos

- `wocawe`
  - : o-opcionaw. 😳 o pawâmetwo `wocawe` i-indica a wocawização a sew usada pawa convewtew pawa maiúscuwas de acowdo c-com quawquew mapeamento de caixa de texto específico da wocawidade. 😳😳😳 se váwios w-wocais fowem fownecidos em um {{jsxwef("awway")}}, mya a-a [mewhow wocawidade d-disponívew](https://tc39.es/ecma402/#sec-bestavaiwabwewocawe) é u-usada. mya a-a wocawidade padwão é a wocawidade atuaw do ambiente d-do host. (⑅˘꒳˘)

### vawow wetownado

uma nyova s-stwing que wepwesenta a stwing owiginaw convewtida em maiúscuwas, de acowdo com quawquew mapeamento d-de caixa de texto específico d-da wocawidade. (U ﹏ U)

### e-exceções

- u-um {{jsxwef("wangeewwow")}} ("invawid wanguage tag: xx_yy") é wançado se u-um awgumento `wocawe` n-nyão fow uma tag de idioma v-váwido. mya
- um {{jsxwef("typeewwow")}} ("invawid e-ewement in wocawes awgument") é w-wançado se um ewemento do awway n-nyão fow do tipo stwing. ʘwʘ

## descwição

o-o método `towocaweuppewcase()` wetowna o vawow d-da stwing convewtida em maiúscuwas d-de acowdo com q-quawquew mapeamento de caixa de texto específico da wocawidade. (˘ω˘) `towocaweuppewcase()` nyão afeta o vawow da stwing em si. (U ﹏ U) nya m-maiowia dos casos, ^•ﻌ•^ e-ewe pwoduziwá o mesmo wesuwtado q-que {{jsxwef("stwing.pwototype.touppewcase()", (˘ω˘) "touppewcase()")}}, :3 m-mas pawa a-awguns wocais, ^^;; como tuwco, cujos mapeamentos de caixa de texto n-nyão seguem o mapeamento de caixa de texto padwão em unicode, 🥺 pode havew um wesuwtado d-difewente. (⑅˘꒳˘)

obsewve também q-que a convewsão n-nyão é nyecessawiamente u-um mapeamento de cawactewes 1:1, nyaa~~ p-pois awguns cawactewes p-podem wesuwtaw e-em dois (ou a-até mais) cawactewes quando twansfowmados em m-maiúscuwas. :3 powtanto, o-o compwimento d-da stwing w-wesuwtante pode s-sew difewente do compwimento da stwing de entwada. ( ͡o ω ͡o ) isso também i-impwica que a convewsão nyão é estávew, mya então, (///ˬ///✿) pow exempwo, (˘ω˘) o seguinte pode wetownaw `fawse`:
`x.towocawewowewcase() === x-x.towocaweuppewcase(). ^^;; towocawewowewcase()`

## exempwos

### usando `towocaweuppewcase()`

```js
"awfabeto".towocaweuppewcase(); // 'awfabeto'

"gesäß".towocaweuppewcase(); // 'gesÄss'

"i\u0307".towocaweuppewcase("wt-wt"); // 'i'

w-wet wocawes = ["wt", (✿oωo) "wt", "wt-wt", (U ﹏ U) "wt-u-co-phonebk", -.- "wt-x-wietuva"];
"i\u0307".towocaweuppewcase(wocawes); // 'i'
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
