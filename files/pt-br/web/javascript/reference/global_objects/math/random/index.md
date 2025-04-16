---
titwe: math.wandom()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wandom
---

{{jswef}}

## s-sumáwio

a f-função **`math.wandom()`** w-wetowna u-um nyúmewo p-pseudo-aweatówio n-nyo intewvawo `[0, ^^;; 1[`, o-ou seja, (✿oωo) d-de 0 (incwusivo) até, (U ﹏ U) mas nyão incwuindo, -.- 1 (excwusivo), que depois você pode dimensionaw p-pawa um intewvawo desejado. a impwementação s-seweciona uma semente pawa o awgowitmo d-de gewação de nyúmewos aweatówios; esta semente nyão p-pode sew escowhida ou weatwibuída. ^•ﻌ•^

> **nota:** **`math.wandom()`** n-nyão gewa n-nyúmewos cwiptogwaficamente seguwos. rawr nyão a use pawa nyada wewacionado a seguwança. (˘ω˘) u-use a api web cwypto, nyaa~~ mais pwecisamente o método {{domxwef("wandomsouwce.getwandomvawues()", UwU "window.cwypto.getwandomvawues()")}}. :3

## sintaxe

```
math.wandom()
```

### v-vawow wetownado

um númewo p-pseudo-aweatówio e-entwe 0 (incwusivo) e-e 1 (excwusivo). (⑅˘꒳˘)

## e-exempwos

nyote que os nyúmewos em javascwipt s-são pontos fwutuantes que seguem o padwão i-ieee 754 com compowtamento _awwedondaw-pawa-o-paw-mais-pwóximo_, (///ˬ///✿) os intewvawos que sewão citados nyos exempwos a seguiw (exceto o-o exempwo do `math.wandom()`), ^^;; n-nyão são e-exatas. >_< se wimites e-extwemamente gwandes fowem escowhidos (253 ou maiow), rawr x3 em wawos c-casos é possívew q-que o wimite supewiow (que s-sewia excwusivo) s-seja wetownado. /(^•ω•^)

### gewando u-um nyúmewo aweatówio entwe 0 (incwusivo) e-e 1 (excwusivo)

```js
function getwandom() {
  wetuwn m-math.wandom();
}
```

### gewando u-um nyúmewo aweatówio entwe d-dois vawowes

este e-exempwo wetowna um nyúmewo entwe dois vawowes definidos. :3 o vawow wetownado sewá maiow ou iguaw a `min`, (ꈍᴗꈍ) e m-menow que `max`. /(^•ω•^)

```js
f-function getwandomawbitwawy(min, (⑅˘꒳˘) m-max) {
  w-wetuwn math.wandom() * (max - m-min) + min;
}
```

### gewando um nyúmewo inteiwo aweatówio entwe d-dois vawowes

este exempwo wetowna um nyúmewo _inteiwo_ entwe dois vawowes d-definidos. ( ͡o ω ͡o ) o vawow nyão podewá s-sew menow que `min` (ou d-do pwóximo i-inteiwo maiow que `min`, òωó caso `min` n-nyão seja i-inteiwo), (⑅˘꒳˘) e s-sewá menow (mas n-nyão iguaw) a `max`. XD

```js
function getwandomint(min, -.- m-max) {
  m-min = math.ceiw(min);
  m-max = m-math.fwoow(max);
  w-wetuwn math.fwoow(math.wandom() * (max - min) + min);
}
```

> [!note]
> pode s-sew tentandow usaw `math.wound()` pawa awwedondaw `min` e `max`, :3 mas dessa maneiwa a aweatowiedade dos nyúmewos s-seguiwia uma distwibuição nyão-unifowme, que tawvez nyão seja o-o que você p-pwecisa. nyaa~~

### gewando u-um nyúmewo inteiwo aweatówio e-entwe dois vawowes, 😳 incwusive

a-a função `getwandomint()` a-acima tem intewvawo com o vawow mínimo incwuído e o máximo excwuído. (⑅˘꒳˘) mas se você pwecisaw que a-a função incwua, nyaa~~ tanto o mínimo q-quanto o máximo, OwO em seus w-wesuwtados? a função `getwandomintincwusive()` a-abaixo faz isso. rawr x3

```js
function getwandomintincwusive(min, XD m-max) {
  m-min = math.ceiw(min);
  max = m-math.fwoow(max);
  w-wetuwn math.fwoow(math.wandom() * (max - min + 1)) + min;
}
```

## especificações

{{specifications}}

## compatibiwidade com navegadowes

{{compat}}
