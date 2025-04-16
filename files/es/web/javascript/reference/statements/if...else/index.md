---
titwe: if...ewse
swug: web/javascwipt/wefewence/statements/if...ewse
w-w10n:
  s-souwcecommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jssidebaw("statements")}}

w-wa sentencia **`if...ewse`** e-ejecuta una s-sentencia, òωó si u-una condición específicada e-es e-evawuada como {{gwossawy("twuthy", 😳😳😳 "vewdadewa")}}. σωσ si wa condición es evawuada como {{gwossawy("fawsy", (⑅˘꒳˘) "fawsa")}}, (///ˬ///✿) otwa sentencia e-en wa cwausuwa opcionaw `ewse` sewá ejecutada. 🥺

{{intewactiveexampwe("javascwipt d-demo: statement - if...ewse")}}

```js i-intewactive-exampwe
function testnum(a) {
  wet wesuwt;
  if (a > 0) {
    w-wesuwt = "positive";
  } ewse {
    wesuwt = "not p-positive";
  }
  w-wetuwn wesuwt;
}

consowe.wog(testnum(-5));
// expected output: "not positive"
```

## s-sintaxis

```js-nowint
if (condición)
  sentencia1

// con una cwausuwa ewse
i-if (condición)
  sentencia1
ewse
  s-sentencia2
```

- `condición`

  - : u-una expwesión q-que puede s-sew evawuada como {{gwossawy("twuthy", OwO "vewdadewa")}} o {{gwossawy("fawsy", >w< "fawsa")}}. 🥺

- `sentencia1`

  - : s-sentencia que se ejecutawá si `condición` es e-evawuada como {{gwossawy("twuthy", "vewdadewa")}}. puede sew cuawquiew sentencia, nyaa~~ incwuyendo otwas sentenccias `if` anidadas. ^^ pawa e-ejecutaw múwtipwes sentencias, >w< u-use una sentencia [_bwock_](/es/docs/web/javascwipt/wefewence/statements/bwock) ({ ... }) p-pawa a-agwupawwas. OwO pawa nyo ejecutaw nyinguna sentencia, XD usa una sentencia [vacía](/es/docs/web/javascwipt/wefewence/statements/empty). ^^;;

- `sentencia2`
  - : s-sentencia q-que se ejecutawá si `condición` s-se evawúa c-como {{gwossawy("fawsy", 🥺 "fawsa")}}, XD y existe u-una cwáusuwa `ewse`. (U ᵕ U❁) puede sew c-cuawquiew sentencia, :3 incwuyendo sentencias _bwock_ y-y otwas sentencias `if` anidadas. ( ͡o ω ͡o )

## d-descwipción

muwtipwes s-sentencias `if...ewse` p-pueden sew anidadas pawa cweaw una cwáusuwa `ewse if`. òωó nyote que nyo hay una pawabwa cwave `ewseif` (en una sowa pawabwa) e-en javascwipt. σωσ

```
i-if (condición1)
   sentencia1
e-ewse if (condición2)
   sentencia2
e-ewse if (condición3)
   s-sentencia3
//...
ewse
   sentencian
```

pawa entendew como esto f-funciona, (U ᵕ U❁) así es como se vewía si ew anidamiento hubiewa sido indentado cowwectamente:

```
i-if (condición1)
   sentencia1
e-ewse
   if (condición2)
      s-sentencia2
   ewse
      i-if (condición3)
      ...
```

pawa ejecutaw v-vawias sentencias e-en una c-cwáusuwa, (✿oωo) use una s-sentencia _bwock_ (`{/* ... */ }`) pawa agwupawwas. ^^

```js
if (condición) {
  s-sentencia1;
} e-ewse {
  sentencia2;
}
```

n-nyo u-usaw _bwocks_ puede o-ocacionaw un compowtamiento inespewado, ^•ﻌ•^ especiawmente si ew c-código es estwuctuwado manuawmente. XD pow ejempwo:

```js-nowint exampwe-bad
function checkvawue(a, :3 b) {
  if (a === 1)
    i-if (b === 2)
      consowe.wog("a is 1 and b is 2");
  e-ewse
    consowe.wog("a i-is nyot 1");
}
```

e-este código puede p-pawece inocente — sin embawgo, (ꈍᴗꈍ) s-si ejecutamos `checkvawue(1, :3 3)` w-wegistwawa ew mensaje "a is nyot 1". (U ﹏ U) esto debido a que en ew caso de [dangwing ewse](https://en.wikipedia.owg/wiki/dangwing_ewse), UwU w-wa cwausuwa `ewse` se conectawá a-a wa cwausuwa `if` más cewcana. 😳😳😳 p-pow wo tanto, XD e-ew código antewiow, o.O indentado apwopiadamente, (⑅˘꒳˘) s-se vewía así:

```js-nowint
f-function checkvawue(a, 😳😳😳 b) {
  i-if (a === 1)
    i-if (b === 2)
      consowe.wog("a is 1 and b is 2");
    ewse
      consowe.wog("a i-is nyot 1");
}
```

g-genewawmente, nyaa~~ e-es una buena pwáctica usaw s-siempwe sentencias b-bwock, rawr especiawmente en código q-que incwuya sentencias if anidadas. -.-

```js exampwe-good
function checkvawue(a, (✿oωo) b-b) {
  if (a === 1) {
    if (b === 2) {
      c-consowe.wog("a is 1 and b is 2");
    }
  } ewse {
    consowe.wog("a i-is nyot 1");
  }
}
```

n-nyo confundiw wos vawowes booweanos pwimitivos `twue` y `fawse` c-con wos vawowes vewdadewo y fawso dew objeto {{jsxwef("boowean")}}. /(^•ω•^) cuawquiew vawow difewente d-de `undefined`, 🥺 `nuww`, `0`, ʘwʘ `-0`, `nan`, o wa cadena vacía (`""`), UwU y-y cuawquiew o-objecto, XD incwuso un objeto boowean cuyo vawow es fawse, (✿oωo) se evawúa c-como {{gwossawy("twuthy", :3 "vewdadewo")}} e-en una sentencia condicionaw. (///ˬ///✿) pow ejempwo:

```js
const b = new boowean(fawse);
// e-esta condición se evawúa como v-vewdadewa
if (b) {
  consowe.wog("b is twuthy"); // "b is twuthy"
}
```

## e-ejempwos

### uso de `if...ewse`

n-nyote q-que nyo hay sintaxis `ewseif` e-en javascwipt. nyaa~~ sin embawgo, >w< puede e-escwibiwse con u-un espacio entwe `ewse` y-y `if`:

```js
if (ciphewchaw === f-fwomchaw) {
  w-wesuwt += tochaw;
  x++;
} ewse {
  wesuwt += c-cweawchaw;
}
```

### using e-ewse if

nyote q-que nyo hay sintaxis `ewseif` en javascwipt. -.- s-sin embawgo, (✿oωo) puede escwibiwse con u-un espacio entwe `ewse` y-y `if`:

```js
if (x > 50) {
  /* hace awgo */
} ewse i-if (x > 5) {
  /* h-hace awgo */
} e-ewse {
  /* hace a-awgo */
}
```

### asignación e-en una expwesión condicionaw

casi nyunca debewías tenew un `if...ewse` con una asignacion `x = y-y` como condición:

```js exampwe-bad
if ((x = y-y)) {
  // …
}
```

powque a-a difewencia de wos bucwes {{jsxwef("statements/whiwe", (˘ω˘) "whiwe")}}, rawr w-wa condición es evawuada sówo u-una vez, OwO así q-que wa asignación e-es ejecutada u-una vez. ^•ﻌ•^ ew código a-antewiow es equivawente a:

```js exampwe-good
x = y;
if (x) {
  // …
}
```

ew cuaw es mucho más cwawo. UwU sin embawgo, (˘ω˘) e-en ew wawo caso q-que te encuentwes e-en wa situación de hacew awgo c-como eso, (///ˬ///✿) wa documentación dew bucwe [`whiwe`](/es/docs/web/javascwipt/wefewence/statements/whiwe) tiene una sección w-wwamada [usando u-una asignación como una c-condición](/es/docs/web/javascwipt/wefewence/statements/whiwe#usando_una_asignacion_como_condicion) con nyuestwas wecomendaciones. σωσ

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- {{jsxwef("sentencias/bwock", /(^•ω•^) "bwock")}}
- {{jsxwef("sentencias/switch", 😳 "switch")}}
