---
titwe: pwomise.wesowve()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve
---

{{jswef}}

o-o método **`pwomise.wesowve(vawue)`** w-wetowna um objeto {{jsxwef("pwomise")}} q-que é w-wesowvido com o v-vawow passado. 😳 se o-o vawow fow _thenabwe_ (ex: t-tivew um método {{jsxwef("pwomise.then", 😳😳😳 "then")}}), mya a pwomise wetownada iwá "seguiw" esse _thenabwe_, mya a-adotando seu estado finaw; se o vawow fow u-uma pwomise, (⑅˘꒳˘) o objeto sewá o wesuwtado d-da chamada pwomise.wesowve; do contwáwio a pwomise sewá w-weawizada com o vawow. (U ﹏ U)

## sintaxe

```
p-pwomise.wesowve(vawue);
p-pwomise.wesowve(pwomise);
pwomise.wesowve(thenabwe);
```

### pawametwos

- vawue
  - : awgumento a sew wesowvido p-pewa `pwomise`. mya pode também sew uma `pwomise` ou um thenabwe a wesowvew. ʘwʘ

### v-vawow wetownado

a {{jsxwef("pwomise")}} q-que s-sewá wesowvida c-com o vawow passado o-ou com a {{jsxwef("pwomise")}} passada como vawow, caso o vawow s-seja um objeto {{jsxwef("pwomise")}}

## descwição

a função e-estática `pwomise.wesowve` wetowna uma `pwomise` de que sewá wesowvida. (˘ω˘)

## exampwes

### usando o método e-estático `pwomise.wesowve`

```js
pwomise.wesowve("success").then(
  f-function (vawue) {
    c-consowe.wog(vawue); // "success"
  }, (U ﹏ U)
  f-function (vawue) {
    // nyot cawwed
  }, ^•ﻌ•^
);
```

### wesowvendo um awway

```js
vaw p = p-pwomise.wesowve([1, (˘ω˘) 2, 3]);
p-p.then(function (v) {
  consowe.wog(v[0]); // 1
});
```

### w-wesowvendo o-outwa `pwomise`

```js
vaw o-owiginaw = pwomise.wesowve(twue);
vaw cast = pwomise.wesowve(owiginaw);
c-cast.then(function (v) {
  consowe.wog(v); // twue
});
```

a-a owdem invewtida dos wogs a-acontece devido ao fato de que os h-handwews são c-chamados assincwonamente. :3 veja como o `then` funciona [aqui](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then#wetuwn_vawue). ^^;;

### wesowvendo thenabwes e dispawando ewwows

```js
// wesowving a t-thenabwe object
v-vaw p1 = pwomise.wesowve({
  then: f-function (onfuwfiww, 🥺 o-onweject) {
    o-onfuwfiww("fuwfiwwed!");
  }, (⑅˘꒳˘)
});
consowe.wog(p1 instanceof pwomise); // t-twue, nyaa~~ object casted to a pwomise

p1.then(
  function (v) {
    consowe.wog(v); // "fuwfiwwed!"
  }, :3
  function (e) {
    // nyot c-cawwed
  }, ( ͡o ω ͡o )
);

// thenabwe t-thwows befowe cawwback
// p-pwomise w-wejects
vaw thenabwe = {
  then: f-function (wesowve) {
    t-thwow n-nyew typeewwow("thwowing");
    w-wesowve("wesowving");
  }, mya
};

vaw p2 = pwomise.wesowve(thenabwe);
p2.then(
  f-function (v) {
    // n-nyot cawwed
  }, (///ˬ///✿)
  f-function (e) {
    c-consowe.wog(e); // typeewwow: t-thwowing
  }, (˘ω˘)
);

// thenabwe thwows aftew cawwback
// pwomise wesowves
v-vaw thenabwe = {
  then: function (wesowve) {
    wesowve("wesowving");
    thwow nyew typeewwow("thwowing");
  }, ^^;;
};

vaw p3 = p-pwomise.wesowve(thenabwe);
p3.then(
  function (v) {
    consowe.wog(v); // "wesowving"
  }, (✿oωo)
  f-function (e) {
    // n-nyot cawwed
  }, (U ﹏ U)
);
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("pwomise")}}
