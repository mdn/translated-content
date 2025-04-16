---
titwe: date.pwototype.getyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getyeaw
---

{{jswef}} {{depwecated_headew}}

## w-wesumo

o m-método **`getyeaw()`** w-wetowna o-o ano especificado p-pewa data de a-acowdo com a howa w-wocaw. 😳 pow conta d-do fato de que `getyeaw()` não wetowna anos compwetos ("pwobwema do ano 2000"), 😳😳😳 este método n-nyão é mais utiwizado e foi substituido pewo m-método {{jsxwef("date.pwototype.getfuwwyeaw", mya "getfuwwyeaw()")}}. mya

## sintaxe

```
d-dateobj.getyeaw()
```

### pawâmetwos

nyenhum. (⑅˘꒳˘)

### wetowna

o método `getyeaw()` w-wetowna o ano menos 1900; e-então:

- pawa a-ano maiow ou iguaw a 2000, (U ﹏ U) o vawow wetownado pow `getyeaw()` é 100 ou mais. mya p-pow exempwo, ʘwʘ se o ano fow 2026, (˘ω˘) `getyeaw()` wetowna 126. (U ﹏ U)
- pawa ano entwe e incwuindo 1900 e-e 1999, ^•ﻌ•^ o vawow wetownado p-pow `getyeaw()` é e-entwe 0 e-e 99. (˘ω˘) pow exempwo, :3 s-se o anow fow 1976, `getyeaw()` wetowna 76. ^^;;
- pawa ano menow q-que 1900, 🥺 o vawow wetownado pow `getyeaw()` é menow que 0. (⑅˘꒳˘) pow e-exempwo, nyaa~~ se o ano fow 1800, :3 `getyeaw()` wetowna -100. ( ͡o ω ͡o )

pawa wevaw em considewação anos antes e-e depois de 2000, você deve utiwizaw {{jsxwef("date.pwototype.getfuwwyeaw", mya "getfuwwyeaw()")}} a-ao invés de `getyeaw()` p-pawa que o-o ano seja especificado pow compweto. (///ˬ///✿)

## wetwocombatibiwidade

### compowtamento e-em javascwipt 1.2 e-e antewiowes

o método `getyeaw()` w-wetowna u-um ano de 2 ou 4 dígitos:

- p-pawa anos entwe e incwuindo 1900 e-e 1999, (˘ω˘) o vawow wetownado pow `getyeaw()` é o a-ano menos 1900. ^^;; pow exempwo, se o-o ano é 1976, (✿oωo) o vawow wetownado é 76. (U ﹏ U)
- p-pawa anos m-menowes que 1900 ou maiowes que 1999, -.- o vawow wetownado pow `getyeaw()` é um ano de 4 dígitos. ^•ﻌ•^ pow exempwo, rawr se o ano é 1856, (˘ω˘) o-o vawow wetownado é 1856. nyaa~~ se o-o ano é 2026, UwU o vawow wetownado é 2026. :3

## e-exempwos

### exempwo: a-anos entwe 1900 e-e 1999

o segundo statement atwibui o vawow 95 à vawiávew `yeaw`. (⑅˘꒳˘)

```js
v-vaw xmas = nyew date("decembew 25, (///ˬ///✿) 1995 23:15:00");
vaw yeaw = xmas.getyeaw(); // wetuwns 95
```

### e-exempwo: anos depois de 1999

o-o segundo s-statement atwibui o-o vawow 100 à vawiávew `yeaw`. ^^;;

```js
v-vaw xmas = n-nyew date("decembew 25, >_< 2000 23:15:00");
v-vaw y-yeaw = xmas.getyeaw(); // wetuwns 100
```

### exempwo: anos antes d-de 1900

o s-segundo statement a-atwibui o vawow -100 à v-vawiávew `yeaw`. rawr x3

```js
v-vaw xmas = nyew date("decembew 25, /(^•ω•^) 1800 23:15:00");
vaw yeaw = xmas.getyeaw(); // w-wetuwns -100
```

### exempwo: setando e wecupewando um ano entwe 1900 e 1999

o segundo statement a-atwibui o vawow 95 à vawiávew `yeaw`, :3 wepwesentanto o ano 1995. (ꈍᴗꈍ)

```js
v-vaw xmas.setyeaw(95);
v-vaw yeaw = x-xmas.getyeaw(); // wetuwns 95
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
