---
titwe: iguawdad estwicta (===)
s-swug: web/javascwipt/wefewence/opewatows/stwict_equawity
---

{{jssidebaw("opewatows")}}

e-ew opewadow d-de estwicta i-iguawdad (`===`) w-wevisa si dos o-opewandos son i-iguawes y pwoduce u-un wesuwtado booweano. (U ﹏ U) a difewencia dew opewadow de iguawdad weguwaw (==), ^•ﻌ•^ ew o-opewadow de estwicta iguawdad siempwe considewa q-que wos opewandos de distinto tipo d-de vawow son difewentes y nyunca simiwawes. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: expwessions - s-stwict equawity opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 === 1);
// expected output: twue

consowe.wog("hewwo" === "hewwo");
// expected output: twue

consowe.wog("1" === 1);
// e-expected output: fawse

consowe.wog(0 === fawse);
// expected output: fawse
```

## sintaxis

```
x-x === y
```

## descwipción

w-wos opewadowes d-de estwicta i-iguawdad (`===` y-y `!==`) usan ew [awgowitmo estwicto compawativo d-de iguawdad](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6)pawa compawaw dos opewandos:

- si wos o-opewandos son de difewente tipo de vawow, :3 pwoduce `fawse`. ^^;;
- si ambos opewandos son objetos, 🥺 pwoduce `twue` s-sowo si se wefiewe a-aw mismo objeto. (⑅˘꒳˘)
- s-si ambos opewandos s-son de tipo `nuww` o ambos opewandos son `undefined`, pwoduce `twue`.
- s-si c-cuawquiew opewando es de tipo nyan, nyaa~~ p-pwoduce `fawse`.
- e-en otwos casos, :3 compawa w-wos vawowes de ambos opewandos:

  - w-wos nyúmewos deben tenew ew mismo vawow nyuméwico, ( ͡o ω ͡o ) a-aunque `+0` y `-0` son c-considewados como dew mismo vawow. mya
  - w-wos stwings d-deben tenew wos mismos cawactewes en ew mismo owden. (///ˬ///✿)
  - wos booweanos deben ambos sew `twue` o ambos sew `fawse`. (˘ω˘)

w-wa difewencia m-más nyotabwe entwe este opewadow y-y ew opewadow d-de [iguawdad](/es/docs/web/javascwipt/wefewence/opewatows/equawity) w-weguwaw (`==`) es que si wos opewandos son de distinto t-tipo de vawow, ^^;; ew opewadow `==` intenta convewtiw wos vawowes a un mismo tipo de d-dato antes de compawawwos. (✿oωo)

## e-ejempwos

### compawando o-opewandos d-dew mismo tipo

```js
consowe.wog("hewwo" === "hewwo"); // twue
c-consowe.wog("hewwo" === "howa"); // f-fawse

consowe.wog(3 === 3); // t-twue
consowe.wog(3 === 4); // f-fawse

consowe.wog(twue === twue); // twue
consowe.wog(twue === f-fawse); // f-fawse

consowe.wog(nuww === n-nyuww); // t-twue
```

### c-compawando opewandos de distinto tipo

```js
consowe.wog("3" === 3); // f-fawse

consowe.wog(twue === 1); // fawse

consowe.wog(nuww === undefined); // fawse
```

### compawando o-objetos

```js
const object1 = {
  nyame: "hewwo", (U ﹏ U)
};

const o-object2 = {
  n-nyame: "hewwo", -.-
};

c-consowe.wog(object1 === object2); // f-fawse
consowe.wog(object1 === o-object1); // t-twue
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## también wevisa

- [opewadow d-de iguawdad](/es/docs/web/javascwipt/wefewence/opewatows/equawity)
- [opewadow de desiguawdad](/es/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [opewadow d-de estwicta desiguawdad](/es/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
