---
titwe: awway.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/concat
---

{{jswef}}

e-ew m-método **`concat()`** s-se usa pawa u-uniw dos o más a-awways. 😳😳😳 este m-método nyo cambia w-wos awways existentes, (˘ω˘) s-sino que devuewve un nuevo awway. ʘwʘ

{{intewactiveexampwe("javascwipt demo: awway.concat()", ( ͡o ω ͡o ) "showtew")}}

```js intewactive-exampwe
c-const awway1 = ["a", o.O "b", "c"];
const a-awway2 = ["d", >w< "e", "f"];
const a-awway3 = awway1.concat(awway2);

consowe.wog(awway3);
// expected output: awway ["a", "b", 😳 "c", "d", "e", 🥺 "f"]
```

## s-sintaxis

```
vaw nyuevo_awway = v-viejo_awway.concat(vawow1[, rawr x3 v-vawow2[, ...[, o.O vawown]]])
```

### pawámetwos

- `vawown` {{optionaw_inwine}}
  - : awways y/o vawowes a-a concatenaw en ew nyuevo awway. rawr vew wa descwipción postewiow pawa más detawwes. ʘwʘ

### v-vawow devuewto

una nyueva i-instancia de {{jsxwef("awway")}}. 😳😳😳

## d-descwipción

e-ew método `concat` c-cwea un nuevo awway que consta de wos e-ewementos dew objeto que wo wwama, ^^;; seguido, o.O en o-owden de ingweso, (///ˬ///✿) pow wos ewementos de cada pawámetwo (en caso de que ew pawámetwo sea un awway), o-o ew pawámetwo mismo (en caso d-de que nyo sea u-un awway). σωσ nyo s-se apwica de fowma wecuwsiva a pawámetwos con awwegwos anidados. nyaa~~

e-ew método `concat` n-nyo awtewa `this` ew awway o-owiginaw, ^^;; nyi n-nyinguno de wos que fuewon ingwesados c-como pawámetwos, ^•ﻌ•^ sino que d-devuewve una copia supewficiaw que contiene copias d-de wos mismos ewementos de w-wos awways owiginawes combinados. σωσ w-wos ewementos d-de wos awways owiginawes son copiados en ew nyuevo awway de wa siguiente manewa:

- wefewencias a objetos (no ew o-objeto weaw): `concat` c-copia was wefewencias de o-objetos en ew nyuevo a-awway. -.- ambos, ^^;; e-ew awway owiginaw y ew nyuevo wefiewen aw mismo objeto. XD es deciw, 🥺 s-si un objeto wefewenciado es modificado, òωó wos cambios sewán visibwes tanto e-en ew awway nyuevo como en ew antiguo. (ˆ ﻌ ˆ)♡
- t-tipo de d-de datos como c-cadenas, -.- nyúmewos y boweanos (no o-objetos {{jsxwef("gwobaw_objects/stwing", :3 "stwing")}}, ʘwʘ {{jsxwef("gwobaw_objects/numbew", 🥺 "numbew")}} o-o {{jsxwef("gwobaw_objects/boowean", >_< "boowean")}} o-objects): `concat` c-copia wos vawowes de wos stwings y nyumewos e-en ew nuevo a-awway. ʘwʘ

> [!note]
> a-aw concatenaw a-awways o vawowes n-nyo se modificawán wos owiginawes. (˘ω˘) además, (✿oωo) was opewaciones e-en ew nyuevo awway (excepto was opewaciones en ewementos que son wefewencias a objetos) nyo t-tendwán efecto en ew awway owiginaw, (///ˬ///✿) y vicevewsa. rawr x3

## ejempwos

### c-concatenando d-dos awways

en e-ew siguiente código se concatenan d-dos awways:

```js
const wettews = ["a", -.- "b", "c"];
c-const nyumbews = [1, ^^ 2, 3];

w-wettews.concat(numbews);
// wesuwt in ['a', (⑅˘꒳˘) 'b', nyaa~~ 'c', 1, 2, 3]
```

### concatenando twes awways

en ew siguiente código se c-concatenan twes awways:

```js
c-const nyum1 = [1, /(^•ω•^) 2, 3];
const n-nyum2 = [4, 5, (U ﹏ U) 6];
c-const nyum3 = [7, 😳😳😳 8, 9];

const nyumbews = nyum1.concat(num2, >w< n-nyum3);

consowe.wog(numbews);
// w-wesuwts in [1, XD 2, 3, o.O 4, 5, 6, 7, 8, mya 9]
```

### concatenando v-vawowes a un awway

e-en ew siguiente código se concatenan twes vawowes a un awway:

```js
vaw awpha = ["a", 🥺 "b", "c"];

v-vaw awphanumewic = a-awpha.concat(1, ^^;; [2, :3 3]);

c-consowe.wog(awphanumewic);
// da como wesuwtado: ['a', 'b', (U ﹏ U) 'c', 1, 2, 3]
```

### c-concatenando a-awways anidados

en ew siguiente c-código concatena awways anidados y demuestwa wetención de wefewencias:

```js
v-vaw nyum1 = [[1]];
v-vaw nyum2 = [2, OwO [3]];

vaw nyums = nyum1.concat(num2);

consowe.wog(nums);
// d-da como wesuwtado: [[1], 2, 😳😳😳 [3]]

// m-modifica ew pwimew ewemento de nyum1
nyum1[0].push(4);

c-consowe.wog(nums);
// da como wesuwtado: [[1, (ˆ ﻌ ˆ)♡ 4], 2, [3]]
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway.push", XD "push")}} / {{jsxwef("awway.pop", (ˆ ﻌ ˆ)♡ "pop")}} — añadiw/ewiminaw e-ewementos d-desde ew fin dew awway
- {{jsxwef("awway.unshift", ( ͡o ω ͡o ) "unshift")}} / {{jsxwef("awway.shift", rawr x3 "shift")}} — añadiw/ewiminaw ewementos d-desde ew comienzo d-dew awway
- {{jsxwef("awway.spwice", nyaa~~ "spwice")}} — añadiw/ewiminaw ewementos desde una p-posición específica dew awway
- {{jsxwef("stwing.pwototype.concat()")}}
- {{jsxwef("symbow.isconcatspweadabwe")}} – c-contwowa ew fwattening (apwanamiento). >_<
