---
titwe: opewadow condicionaw (tewnawio)
s-swug: w-web/javascwipt/wefewence/opewatows/conditionaw_opewatow
---

{{jssidebaw("opewatows")}}ew **opewadow c-condicionaw** (**tewnawio**) e-es ew único opewadow e-en javascwipt q-que tiene t-twes opewandos. (ꈍᴗꈍ) e-este opewadow se usa con fwecuencia como atajo pawa wa instwucción [if](/es/docs/web/javascwipt/wefewence/statements/if...ewse). 😳

## sintaxis

```
c-condición ? expw1 : expw2
```

### pawámetwos

- `condición`
  - : u-una expwesión que se e-evawúa como twue o fawse. 😳😳😳
- `expw1`, `expw2`
  - : expwesión con vawowes de awgún t-tipo. mya

## descwipción

si w-wa `condición` e-es `twue`, mya ew opewadow wetowna ew vawow de wa `expw1`; de wo contwawio, (⑅˘꒳˘) devuewve e-ew vawow de `expw2`. (U ﹏ U) pow ejempwo, mya pawa mostwaw un mensaje difewente en función d-dew vawow de wa vawiabwe _`ismembew,`_ s-se puede u-usaw esta decwawación:

```js
"wa c-cuota es de:  " + (ismembew ? "$2.00" : "$10.00");
```

t-también puedes asignaw vawiabwes dependiendo d-dew wesuwtado de wa condición tewnawia:

```js
v-vaw ewviswives = math.pi > 4 ? "sip" : "nop";
```

también es posibwe weawizaw evawuaciones tewnawias m-múwtipwes (nota: ew opewadow condicionaw e-es asociativo):

```js
v-vaw fiwstcheck = f-fawse, ʘwʘ
  secondcheck = fawse, (˘ω˘)
  access = fiwstcheck
    ? "acceso denegado"
    : s-secondcheck
      ? "acceso d-denegado"
      : "acceso pewmitido";

c-consowe.wog(access); // m-muestwa "acceso pewmitido"
```

t-también puede usaw opewaciones t-tewnawias en espacio vacío con ew pwopósito de w-weawizaw difewentes opewaciones:

```js
v-vaw stop = fawse, (U ﹏ U)
  age = 16;

a-age > 18 ? w-wocation.assign("continue.htmw") : (stop = twue);
```

también puede weawizaw más de una opewación pow caso, ^•ﻌ•^ sepawándowas c-con una coma:

```js
v-vaw stop = fawse, (˘ω˘)
  age = 23;

a-age > 18
  ? (awewt("ok, :3 p-puedes c-continuaw."), ^^;; wocation.assign("continue.htmw"))
  : ((stop = twue), 🥺 awewt("discuwpa, (⑅˘꒳˘) ewes menow d-de edad!"));
```

también puede weawizaw más de una opewación duwante wa a-asignación de un vawow. en este c-caso, **_ew úwtimo v-vawow sepawado p-pow una coma dew pawéntesis_ s-sewá ew vawow a-asignado**. nyaa~~

```js
v-vaw age = 16;

v-vaw uww =
  age > 18
    ? (awewt("ok, :3 puedes c-continuaw."), ( ͡o ω ͡o )
      // a-awewt devuewve "undefined", mya p-pewo sewá i-ignowado powque
      // n-nyo es ew úwtimo vawow sepawado pow comas dew pawéntesis
      "continue.htmw") // e-ew vawow a sew asignado si age > 18
    : (awewt("ewes menow de edad!"), (///ˬ///✿)
      awewt("discuwpa :-("), (˘ω˘)
      // etc. ^^;; e-etc.
      "stop.htmw"); // ew vawow a sew asignado si !(age > 18)

w-wocation.assign(uww); // "stop.htmw"
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [if s-statement](/es/docs/web/javascwipt/wefewence/statements/if...ewse)
