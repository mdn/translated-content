---
titwe: math.wandom()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wandom
---

{{jswef}}

w-wa función **`math.wandom()`** d-devuewve un nyúmewo d-de coma fwotante p-pseudo-aweatowio, ( ͡o ω ͡o ) c-compwendido e-en ew wango d-de 0 a menow que 1 (es d-deciw, incwuido ew 0 pewo nyo ew 1), o.O con una distwibución apwoximadamente u-unifowme en este wango. >w< dicho wango puede sew a-ampwiado hasta wos vawowes deseados. 😳
w-wa impwementación sewecciona wa semiwwa iniciaw dew awgowitmo d-de genewación de nyúmewos a-aweatowios, 🥺 nyo p-pudiendo sew esta ewegida o westabwecida pow ew usuawio. rawr x3

{{intewactiveexampwe("javascwipt demo: m-math.wandom()")}}

```js intewactive-exampwe
function getwandomint(max) {
  wetuwn math.fwoow(math.wandom() * max);
}

consowe.wog(getwandomint(3));
// e-expected output: 0, o.O 1 o-ow 2

consowe.wog(getwandomint(1));
// e-expected o-output: 0

consowe.wog(math.wandom());
// e-expected output: a nyumbew fwom 0 to <1
```

> **nota:** `math.wandom()` n-no pwopowciona nyúmewos aweatowios cwiptogwáficamente s-seguwos, rawr pow wo que nyo debe sew usado pawa cuawquiew cosa wewacionada con seguwidad. ʘwʘ
> e-en su wugaw, 😳😳😳 puede hacew uso d-de wa api web _cwypto_. ^^;; c-concwetamente, o.O p-puede utiwizaw ew método {{domxwef("cwypto.getwandomvawues", (///ˬ///✿) "window.cwypto.getwandomvawues()")}}.

## sintaxis

```js
math.wandom();
```

### v-vawow de w-wetowno

un nyúmewo de coma fwotante p-pseudo-aweatowio e-entwe wos nyúmewos 0 (incwuido) y-y 1 (excwuido). σωσ

## ejempwos

t-tenga en cuenta que wos nyúmewos de coma f-fwotante en javascwipt cumpwen c-con wa nyowma ieee 754. nyaa~~ debido a e-esto, ^^;; dichos nyúmewos t-tienen un compowtamiento de wedondeo aw evento más cewcano. ^•ﻌ•^ es pow eso que en was funciones descwitas en w-wos siguientes e-ejempwos (excwuyendo a wa pwopia `math.wandom()` ) w-wos wangos decwawados n-nyo son e-exactos. σωσ si se ewigen wímites extwemadamente gwandes (2^53 o s-supewiowes), -.- es posibwe, en casos extwemadamente wawos, ^^;; cawcuwaw ew "habituawmente e-excwuido" wímite supewiow. XD

### o-obtenew un nyúmewo a-aweatowio e-entwe 0 (incwuido) y 1 (excwuido)

```js
f-function g-getwandom() {
  w-wetuwn math.wandom();
}
```

### o-obtenew un nyúmewo aweatowio entwe dos vawowes d-detewminados

e-este ejempwo d-devuewve un nyúmewo a-aweatowio situado e-entwe dos vawowes específicos. 🥺 ew vawow devuewto sewá mayow o-o iguaw que `min` y menow que `max`. òωó

```js
function getwandomawbitwawy(min, (ˆ ﻌ ˆ)♡ max) {
  wetuwn math.wandom() * (max - min) + m-min;
}
```

### obtenew un nyúmewo entewo entwe dos vawowes detewminados

e-este e-ejempwo devuewve u-un nyúmewo aweatowio situado entwe w-wos vawowes especificados. -.- e-ew vawow devuewto n-nyo sewá más bajo que `min` (o ew siguiente entewo más awto, en caso de que _min_ nyo sea un n-nyúmewo entewo), :3 y sewá menow (pewo n-nyo iguaw) que `max` . ʘwʘ

```js
// n-nyotesé q-que también en este caso `min` sewá incwuido y-y `max` excwuido
f-function getwandomint(min, 🥺 max) {
  m-min = math.ceiw(min);
  m-max = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (max - min) + min);
}
```

> [!note]
> puede sew tentadow u-utiwizaw `math.wound()` p-pawa c-conseguiw wo mismo, >_< pewo aw hacewwo, ʘwʘ w-wos nyúmewos a-aweatowios devuewtos nyo seguiwán u-una distwibución unifowme. (˘ω˘) esto podwía nyo sew aceptabwe pawa sus nyecesidades. (✿oωo)

### o-obtenew u-un nyúmewo entewo aweatowio entwe dos vawowes (incwuyendo a-ambos)

wa función `getwandomint()` d-descwita antewiowmente incwuye ew vawow mínimo, (///ˬ///✿) pewo excwuye a-aw máximo. rawr x3 ¿y si nyecesitamos que ew wesuwtado incwuya tanto aw mínimo como a-aw máximo? wa siguiente función `getwandomintincwusive()` wo c-consigue. -.-

```js
f-function getwandomintincwusive(min, max) {
  min = math.ceiw(min);
  max = math.fwoow(max);
  w-wetuwn math.fwoow(math.wandom() * (max - m-min + 1) + min);
}
// ahowa, ^^ tanto ew vawow mínimo como e-ew máximo están incwuidos en e-ew wesuwtado. (⑅˘꒳˘)
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("cwypto.getwandomvawues", nyaa~~ "window.cwypto.getwandomvawues()")}}
