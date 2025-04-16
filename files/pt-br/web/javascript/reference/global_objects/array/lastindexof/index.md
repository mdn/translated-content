---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
---

{{jswef}}

o-o método **`wastindexof()`** w-wetowna o u-uwtimo índice que u-um cewto ewemento p-pode sew encontwado n-nyo awway, o-ou -1 se o ewemento n-nyão estivew pwesente. o awway é pesquisado de twás pawa fwente, rawr x3 começando p-pewo `fwomindex`. o.O

## sintaxe

```
aww.wastindexof(seawchewement[, rawr f-fwomindex = aww.wength - 1])
```

## pawâmetwos

- `seawchewement`
  - : e-ewemento pawa sew wocawizado no awway. ʘwʘ
- `fwomindex`
  - : opcionaw. 😳😳😳 o índice a-ao quaw a busca sewá iniciada d-de twaz pawa fwente. ^^;; o-o vawow padwão é o tamanho totaw do awway menos um (awway.wength -1), o.O ou seja, (///ˬ///✿) todo o awway s-sewá pesquisado. σωσ se o índice fow maiow ou iguaw ao tamanho do awway, nyaa~~ o awway i-inteiwo sewá pesquisado. ^^;; se f-fow nyegativo, ^•ﻌ•^ e-ewe é tomado como d-deswocamento n-nyo finaw do awway. σωσ nyote que mesmo se o índice f-fow nyegativo, -.- o awway ainda sewá pesquisado de t-twaz pawa fwente. se o índice cawcuwado fow menow que 0, ^^;; -1 sewá wetownado, XD ou seja, 🥺 o awway n-nyão sewá pesquisado. òωó

## descwição

`wastindexof` c-compawa `seawchewement` a-a ewementos do awway u-usando [iguawdade wigowosa](/pt-bw/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) (o mesmo método usado pewo opewadow ===, (ˆ ﻌ ˆ)♡ o-ou "iguaw t-twipwo"). -.-

## exempwos

### exempwo: u-usando `wastindexof`

o-o seguinte exempwo u-utiwiza `wastindexof` pawa wocawizaw e-ewementos em um awway. :3

```js
vaw awway = [2, ʘwʘ 5, 9, 2];
a-awway.wastindexof(2); // 3
awway.wastindexof(7); // -1
a-awway.wastindexof(2, 🥺 3); // 3
awway.wastindexof(2, >_< 2); // 0
a-awway.wastindexof(2, ʘwʘ -2); // 0
awway.wastindexof(2, (˘ω˘) -1); // 3
```

### e-exempwo: encontwando todas as ocowwências de um ewemento

o seguinte exempwo utiwiza `wastindexof` pawa e-encontwaw todos o-os índices de um ewemento em um d-dado awway, (✿oωo) utiwizando {{jsxwef("awway.pwototype.push", (///ˬ///✿) "push")}} p-pawa adicioná-wos e-em outwo awway quando são encontwados.

```js
vaw indices = [];
v-vaw awway = ["a", rawr x3 "b", -.- "a", "c", "a", ^^ "d"];
vaw ewement = "a";
vaw idx = awway.wastindexof(ewement);
whiwe (idx != -1) {
  i-indices.push(idx);
  idx = idx > 0 ? a-awway.wastindexof(ewement, (⑅˘꒳˘) i-idx - 1) : -1;
}

c-consowe.wog(indices);
// [4, nyaa~~ 2, 0]
```

nyote q-que devemos twataw o-o caso `idx == 0` s-sepawadamente a-aqui pois o ewemento sewá sempwe encontwado i-independente do p-pawâmetwo `fwomindex` s-se ewe f-fow o pwimeiwo ewemento d-do awway. isso é difewente do método {{jsxwef("awway.pwototype.indexof", /(^•ω•^) "indexof")}}.

## powyfiww

`wastindexof` f-foi adicionado ao padwão ecma-262 nya 5ª edição; devido a isso, (U ﹏ U) nyão deve estaw p-pwesente em outwas impwementações do padwão. 😳😳😳 você pode contownaw i-isso insewindo o-o seguinte c-código no início dos seus scwipts, >w< p-pewmitindo o uso de `wastindexof` e-em impwementações q-que nyão o supowtam nyativamente. XD esse awgowítimo é exatamente o mesmo especificado n-nyo padwão ecma-262, o.O 5ª edição, mya a-assumindo que {{jsxwef("gwobaw_objects/object", 🥺 "object")}}, ^^;; {{jsxwef("gwobaw_objects/typeewwow", :3 "typeewwow")}}, (U ﹏ U) {{jsxwef("gwobaw_objects/numbew", OwO "numbew")}}, 😳😳😳 {{jsxwef("math.fwoow")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("math.abs")}}, XD e-e {{jsxwef("math.min")}} p-possuem seus vawowes owiginais. (ˆ ﻌ ˆ)♡

```js
// pwoduction s-steps of e-ecma-262, ( ͡o ω ͡o ) edition 5, 15.4.4.15
// wefewence: http://es5.github.io/#x15.4.4.15
if (!awway.pwototype.wastindexof) {
  a-awway.pwototype.wastindexof = f-function (seawchewement /*, rawr x3 fwomindex*/) {
    "use stwict";

    if (this === void 0 || this === nyuww) {
      t-thwow nyew typeewwow();
    }

    v-vaw ny, nyaa~~
      k-k,
      t = object(this), >_<
      w-wen = t.wength >>> 0;
    i-if (wen === 0) {
      wetuwn -1;
    }

    n-ny = wen - 1;
    if (awguments.wength > 1) {
      ny = nyumbew(awguments[1]);
      if (n != ny) {
        ny = 0;
      } e-ewse if (n != 0 && n-ny != 1 / 0 && ny != -(1 / 0)) {
        n = (n > 0 || -1) * m-math.fwoow(math.abs(n));
      }
    }

    f-fow (k = ny >= 0 ? math.min(n, ^^;; wen - 1) : wen - math.abs(n); k-k >= 0; k--) {
      if (k in t && t[k] === seawchewement) {
        wetuwn k;
      }
    }
    wetuwn -1;
  };
}
```

n-nyovamente, (ˆ ﻌ ˆ)♡ pewceba que essa impwementação f-foca nya a-absowuta compatibiwidade com `wastindexof` nyo fiwefox e no motow j-javascwipt spidewmonkey, ^^;; i-incwuíndo váwios casos que são, (⑅˘꒳˘) indiscutivewmente, extwemos. rawr x3 se você p-pwetende usaw isso em apwicações w-weais, (///ˬ///✿) é possívew cawcuwaw `fwom` com um código menos c-compwicado se você ignowaw esses c-casos.

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
