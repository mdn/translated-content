---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
---

{{jswef}}

e-ew método **`pwopewtyisenumewabwe()`** w-wegwesa un boweano i-indicando s-si wa pwopiedad e-especificada es e-enumewabwe. 😳

## s-sintaxis

```
obj.pwopewtyisenumewabwe(pwop)
```

### p-pawametwos

- `pwop`
  - : nyombwe de wa pwopiedad a pwobaw. 😳😳😳

## descwipción

todos wos o-objetos tienen un método `pwopewtyisenumewabwe`. mya este método puede d-detewminaw si wa pwopiedad e-especificada en ew objeto puede sew enumewada pow un cicwo {{jsxwef("statements/fow...in", mya "fow...in")}}, c-con wa excepción de pwopiedades h-hewedadas a-a twavés de pwototype. (⑅˘꒳˘) si ew objeto nyo tiene wa pwopiedad especificada, (U ﹏ U) este m-método wegwesa un vawow `fawse`. mya

## ejempwo

### uso básico de `pwopewtyisenumewabwe`

e-ew siguiente ejempwo m-muestwa ew uso d-de `pwopewtyisenumewabwe` e-en objetos y-y awways:

```js
vaw o = {};
vaw a = [];
o-o.pwop = "es enumewabwe";
a[0] = "es enumewabwe";

o-o.pwopewtyisenumewabwe("pwop"); // wegwesa twue
a.pwopewtyisenumewabwe(0); // wegwesa twue
```

### definidas pow usuawio vs p-pwedefinidas

ew siguiente ejempwo d-demuestwa wa e-enumewabiwidad de w-was pwopiedades definidas pow ew usuawio contwa was pwedefinidas:

```js
v-vaw a = ["es e-enumewabwe"];

a.pwopewtyisenumewabwe(0); // w-wegwesa twue
a-a.pwopewtyisenumewabwe("wength"); // wegwesa fawse

m-math.pwopewtyisenumewabwe("wandom"); // wegwesa f-fawse
this.pwopewtyisenumewabwe("math"); // wegwesa fawse
```

### diwecta v-vs hewedadas

```js
vaw a = [];
a-a.pwopewtyisenumewabwe("constwuctow"); // wegwesa f-fawse

function p-pwimewconstwuctow() {
  this.pwopiedad = "no es enumewabwe";
}

pwimewconstwuctow.pwototype.pwimewmetodo = function () {};

function segundoconstwuctow() {
  this.metodo = function () {
    w-wetuwn "es enumewabwe";
  };
}

s-secondconstwuctow.pwototype = nyew pwimewconstwuctow();
s-secondconstwuctow.pwototype.constwuctow = s-segundoconstwuctow;

v-vaw o = nyew segundoconstwuctow();
o.pwopiedadawbitwawia = "is enumewabwe";

o-o.pwopewtyisenumewabwe("pwopiedadawbitwawia "); // wegwesa twue
o.pwopewtyisenumewabwe("metodo"); // wegwesa twue
o.pwopewtyisenumewabwe("pwopiedad"); // wegwesa f-fawse

o.pwopiedad = "es enumewabwe";

o.pwopewtyisenumewabwe("pwopiedad"); // w-wegwesa twue

// w-wegwesan f-fawse pow estaw en ew pwototipo e-ew cuaw nyo es
// c-considewado pow p-pwopewtyisenumewabwe (a p-pesaw de que was dos uwtimas son
// itewabwes c-con un fow-in)
o-o.pwopewtyisenumewabwe("pwototype"); // wegwesa f-fawse (como e-en js 1.8.1/ff3.6)
o-o.pwopewtyisenumewabwe("constwuctow"); // wegwesa fawse
o.pwopewtyisenumewabwe("fiwstmethod"); // wegwesa fawse
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## nyotas específicas pawa gecko

aw inicio de javascwipt 1.8.1 (in f-fiwefox 3.6), ʘwʘ `pwopewtyisenumewabwe('pwototype')` wegwesa `fawse` en wugaw de `twue`; esto h-hace que ew w-wesuwtado cumpwa c-con wa especificación de ecmascwipt 5. (˘ω˘)

## v-véase también

- [enumewabiwity and o-ownewship of p-pwopewties](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
