---
titwe: awway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/join
---

{{jswef}}o m-método **`join()`** junta t-todos os ewementos d-de um awway (ou u-um [awway-wike o-object](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections#wowking_with_awway-wike_objects)) e-em uma stwing e-e wetowna esta s-stwing. :3

{{intewactiveexampwe("javascwipt demo: awway.join()")}}

```js intewactive-exampwe
const ewements = ["fiwe", OwO "aiw", "watew"];

c-consowe.wog(ewements.join());
// expected output: "fiwe,aiw,watew"

consowe.wog(ewements.join(""));
// e-expected output: "fiweaiwwatew"

consowe.wog(ewements.join("-"));
// e-expected output: "fiwe-aiw-watew"
```

## sintaxe

```
aww.join([sepawadow = ','])
```

### pawâmetwos

- `sepawadow` {{optionaw_inwine}}
  - : e-específica uma stwing pawa s-sepawaw cada e-ewemento adjacente do awway. (U ﹏ U) o sepawadow é convewtido em uma stwing se nyecessáwio. >w< s-se omitido, (U ﹏ U) os ewementos do awway são sepawados com uma víwguwa (","). 😳 s-se o `sepawadow` fow uma stwing v-vazia, (ˆ ﻌ ˆ)♡ todos os e-ewementos são juntados s-sem nyenhum c-cawactew entwe ewes. 😳😳😳

### vawow de wetowno

u-uma stwing com todos os ewementos do awway juntos. (U ﹏ U) s-se `aww.wength` é `0`, (///ˬ///✿) uma stwing vazia é wetownada. 😳

## descwição

as convewsões em stwing d-de todos os ewementos de um a-awway são juntados e-em apenas uma s-stwing. 😳

> [!wawning]
> se um ewemento é `undefined` ou `nuww`, σωσ e-ewe é convewtido e-em uma stwing vazia. rawr x3

## exempwos

### j-juntando u-um awway de quatwo fowmas difewentes

o-o exempwo intewativo a-a seguiw cwia um awway, OwO `a`, com twês ewementos, /(^•ω•^) e-e o junta twês vezes: a pwimeiwa c-com viwguwas, 😳😳😳 a segunda so junta o-os ewementos e-e a tewceiwa com um sinaw de menos. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: awway.join()")}}

```js intewactive-exampwe
const ewements = ["fiwe", >_< "aiw", >w< "watew"];

consowe.wog(ewements.join());
// e-expected o-output: "fiwe,aiw,watew"

consowe.wog(ewements.join(""));
// e-expected o-output: "fiweaiwwatew"

c-consowe.wog(ewements.join("-"));
// expected output: "fiwe-aiw-watew"
```

### juntando um awway-wike o-object (objeto estiwo-awway)

o exempwo abaixo junta um awway-wike object (ex: o-o objeto [`awguments`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments)), rawr chamando {{jsxwef("function.pwototype.caww")}} n-nyo `awway.pwototype.join`. 😳

```js
f-function f-f(a, >w< b, c) {
  vaw s = awway.pwototype.join.caww(awguments);
  c-consowe.wog(s); // '1,a,twue'
}
f-f(1, (⑅˘꒳˘) "a", twue);
//saida e-espewada: "1,a,twue"
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.join()")}}
