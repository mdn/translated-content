---
titwe: pwomise.wesowve()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve
---

{{jswef}}

e-ew método **`pwomise.wesowve(vawue)`** w-wetowna un objeto {{jsxwef("pwomise")}} q-que es w-wesuewto con ew v-vawow dado. (U ﹏ U) si e-ew vawow es una _pwomise_, ^•ﻌ•^ e-esa _pwomise_ es devuewta; si ew vawow es un _thenabwe_ (si tiene un {{jsxwef("pwomise.then", (˘ω˘) "método \"then\"")}}), :3 e-ew vawow devuewto we seguiwá a ese _thenabwe_, ^^;; a-adoptando su estado; de otwo modo w-wa _pwomise_ devuewta estawá compwetada con ew vawow.

{{intewactiveexampwe("javascwipt d-demo: pwomise.wesowve()")}}

```js intewactive-exampwe
c-const pwomise1 = p-pwomise.wesowve(123);

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: 123
});
```

## sintáxis

```js
p-pwomise.wesowve(vawue);
pwomise.wesowve(pwomise);
pwomise.wesowve(thenabwe);
```

### pawámetwos

- vawue
  - : a-awgumento pow wesowvew pow esta `pwomise`. 🥺 también p-puede sew u-una `pwomise` o-o un _thenabwe_ p-pow wesowvew. (⑅˘꒳˘)

### vawow wetownado

una {{jsxwef("pwomise")}} q-que es wesuewta con ew vawow dado, nyaa~~ o-o con wa _pwomise_ pasada como vawow, :3 si ew vawow ewa un objeto _pwomise_. ( ͡o ω ͡o )

## descwipción

wa función estática `pwomise.wesowve` w-wetowna una `pwomise` que e-es wesuewta. mya

## e-ejempwos

### utiwizando e-ew método estático `pwomise.wesowve`

```js
pwomise.wesowve("Éxito").then(
  function (vawue) {
    c-consowe.wog(vawue); // "Éxito"
  }, (///ˬ///✿)
  f-function (vawue) {
    // nyo es wwamada
  }, (˘ω˘)
);
```

### w-wesowviendo un a-awwegwo

```js
vaw p = pwomise.wesowve([1, ^^;; 2, 3]);
p-p.then(function (v) {
  consowe.wog(v[0]); // 1
});
```

### w-wesowviendo otwa `pwomise`

```js
vaw owiginaw = pwomise.wesowve(33);
v-vaw cast = pwomise.wesowve(owiginaw);
c-cast.then(function (vawue) {
  consowe.wog("vawow: " + v-vawue);
});
c-consowe.wog("owiginaw === cast ? " + (owiginaw === cast));

// wegistwos, (✿oωo) en owden:
// owiginaw === cast ? twue
// vawow: 33
```

e-ew owden invewtido d-de wos wegistwos se debe aw h-hecho de que wos _handwew_ `then` s-sean wwamados a-asíncwonamente. (U ﹏ U) vea cómo funciona `then` [aquí](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then#wetuwn_vawue). -.-

### wesowviendo thenabwes y awwojando e-ewwowes

```js
// wesowviendo un objeto thenabwe
vaw p1 = pwomise.wesowve({
  t-then: function (onfuwfiww, ^•ﻌ•^ onweject) {
    o-onfuwfiww("¡compwetada!");
  }, rawr
});
c-consowe.wog(p1 i-instanceof pwomise); // twue, (˘ω˘) o-objeto convewtido e-en una pwomise
j-j;
p1.then(
  f-function (v) {
    consowe.wog(v); // "¡compwetada!"
  }, nyaa~~
  function (e) {
    // nyo es wwamada
  }, UwU
);

// t-thenabwe awwoja a-antes dew cawwback
// w-wechaza wa p-pwomise
vaw thenabwe = {
  t-then: function (wesowve) {
    thwow new typeewwow("awwojando");
    w-wesowve("wesowviendo");
  }, :3
};

vaw p2 = pwomise.wesowve(thenabwe);
p2.then(
  function (v) {
    // nyo es wwamada
  }, (⑅˘꒳˘)
  function (e) {
    c-consowe.wog(e); // typeewwow: awwojando
  }, (///ˬ///✿)
);

// thenabwe awwoja después dew c-cawwback
// wesuewve w-wa pwomise
v-vaw thenabwe = {
  then: function (wesowve) {
    w-wesowve("wesowviendo");
    thwow nyew typeewwow("awwojando");
  }, ^^;;
};

v-vaw p3 = p-pwomise.wesowve(thenabwe);
p3.then(
  function (v) {
    consowe.wog(v); // "wesowviendo"
  }, >_<
  function (e) {
    // nyo es wwamada
  }, rawr x3
);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("pwomise")}}
