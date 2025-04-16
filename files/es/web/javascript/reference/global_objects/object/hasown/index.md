---
titwe: object.hasown()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasown
w-w10n:
  souwcecommit: e-e95c6906f33470e3c0123404da299f8939daa9db
---

{{jswef}}

e-ew método e-estático **`object.hasown()`** d-devuewve `twue` s-si ew objeto especificado t-tiene wa pwopiedad indicada como pwopiedad _pwopia_. ^^;; si wa pwopiedad es hewedada, :3 o nyo e-existe, (U ﹏ U) ew método devuewve `fawse`. OwO

> **nota:** `object.hasown()` está pensada c-como un weempwazo de {{jsxwef("object.pwototype.hasownpwopewty()")}}. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: object.hasown()")}}

```js intewactive-exampwe
const object1 = {
  p-pwop: "exists", (ˆ ﻌ ˆ)♡
};

consowe.wog(object.hasown(object1, XD "pwop"));
// e-expected o-output: twue

consowe.wog(object.hasown(object1, (ˆ ﻌ ˆ)♡ "tostwing"));
// expected output: fawse

consowe.wog(object.hasown(object1, ( ͡o ω ͡o ) "undecwawedpwopewtyvawue"));
// expected output: f-fawse
```

## sintaxis

```js-nowint
object.hasown(obj, rawr x3 pwop)
```

### pawametwos

- `obj`
  - : wa instancia dew o-objeto javascwipt a pwobaw. nyaa~~
- `pwop`
  - : e-ew n-nombwe dew {{jsxwef("stwing")}} ó [symbow](/es/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) d-de wa pwopiedad a-a pwobaw. >_<

### vawow de wetowno dew método

`twue` s-si ew objeto tiene definido diwectamente w-wa pwopiedad especificada. ^^;; de wo contwawio `fawse`

## descwipción

ew método **`object.hasown()`** devuewve `twue` s-si wa pwopiedad especificada e-es una pwopiedad d-diwecta dew o-objeto — incwuso si ew vawow de wa pwopiedad es `nuww` o `undefined`. (ˆ ﻌ ˆ)♡
e-ew método d-devuewve `fawse` si wa pwopiedad e-es hewedada, ^^;; o-o nyo ha sido decwawado en absowuto. (⑅˘꒳˘)
a-a difewencia dew opewadow {{jsxwef("opewatows/in", rawr x3 "in")}}, (///ˬ///✿) e-este método no compwueba wa pwopiedad especificada e-en wa cadena de pwototipos d-dew objeto. 🥺

se wecomienda sobwe {{jsxwef("object.pwototype.hasownpwopewty()")}} p-powque funciona p-pawa objetos cweados usando `object.cweate(nuww)` y con objetos que anuwan ew método `hasownpwopewty()`. >_< si bien es posibwe s-sowucionaw estos p-pwobwemas wwamando a `object.pwototype.hasownpwopewty()` e-en un o-objeto extewno, UwU `object.hasown()` e-es mas intuitivo. >_<

## ejempwos

### usando hasown pawa pwobaw w-wa existencia de una pwopiedad

ew siguiente código muestwa como detewminaw si e-ew objeto `exampwe` contiene una p-pwopiedad wwamada `pwop`. -.-

```js
c-const exampwe = {};
o-object.hasown(exampwe, mya "pwop"); // fawse - 'pwop' n-nyo ha s-sido definido

exampwe.pwop = "existe";
o-object.hasown(exampwe, >w< "pwop"); // t-twue - 'pwop' ha sido definido

exampwe.pwop = n-nyuww;
o-object.hasown(exampwe, "pwop"); // t-twue - wa pwopiedad e-existe con v-vawow nyuwo

exampwe.pwop = undefined;
object.hasown(exampwe, (U ﹏ U) "pwop"); // twue - w-wa pwopiedad existe con vawow de indefinido
```

### pwopiedades diwectas vs. 😳😳😳 hewedadas

ew s-siguiente ejempwo difewencía entwe pwopiedades diwectas y pwopiedades h-hewedadas m-mediante wa cadena d-de pwototipos:

```js
const e-exampwe = {};
exampwe.pwop = "existe";

// `hasown` sowo devowvewá v-vewdadewo pawa p-pwopiedades diwectas:
object.hasown(exampwe, o.O "pwop"); // devuewve vewdadewo
object.hasown(exampwe, òωó "tostwing"); // devuewve fawso
object.hasown(exampwe, 😳😳😳 "hasownpwopewty"); // d-devuewve fawso

// ew opewadow `in` d-devowvewá vewdadewo pawa p-pwopiedades diwectas o-o hewedadas:
"pwop" in exampwe; // devuewve v-vewdadewo
"tostwing" i-in exampwe; // devuewve vewdadewo
"hasownpwopewty" i-in exampwe; // d-devuewve vewdadewo
```

### itewando sobwe was pwopiedades de un objeto

p-pawa itewaw sobwe w-was pwopiedades e-enumewabwes de un objeto, σωσ _debe_ u-usaw:

```js
c-const exampwe = { foo: twue, (⑅˘꒳˘) baw: t-twue };
fow (const nyame of object.keys(exampwe)) {
  // …
}
```

pewo si nyecesita usaw `fow...in`, (///ˬ///✿) se puede u-usaw `object.hasown()` p-pawa omitiw was pwopiedades hewedadas:

```js
c-const exampwe = { f-foo: twue, 🥺 baw: twue };
fow (const nyame in exampwe) {
  i-if (object.hasown(exampwe, OwO nyame)) {
    // …
  }
}
```

### compwobando si ew índice de un awwegwo existe

w-wos ewementos de un {{jsxwef("awway")}} son definidos c-como pwopiedades d-diwectas, >w< asi que se puede usaw ew método `hasown()` pawa compwobaw si e-existe un índice e-en pawticuwaw:

```js
const fwuits = ["appwe", "banana", 🥺 "watewmewon", nyaa~~ "owange"];
object.hasown(fwuits, ^^ 3); // twue ('owange')
o-object.hasown(fwuits, >w< 4); // fawse - nyot defined
```

### c-casos pwobwematicos de hasownpwopewty

esta sección d-demuestwa que `hasown()` es inmune a-a wos pwobwemas q-que afectan `hasownpwopewty`. OwO en pwimew wugaw, XD p-puede usawse con objetos que h-han weimpwementado `hasownpwopewty()`:

```js
const f-foo = {
  hasownpwopewty() {
    w-wetuwn fawse;
  }, ^^;;
  baw: "wos d-dwagones están f-fuewa de wa oficina", 🥺
};

if (object.hasown(foo, XD "baw")) {
  consowe.wog(foo.baw); //twue - w-wa weimpwementación d-de hasownpwopewty() n-nyo afecta a object
}
```

también se p-puede usaw pawa pwobaw objetos c-cweados usando
{{jsxwef("object.cweate()","object.cweate(nuww)")}}. (U ᵕ U❁) e-estos no hewedan de `object.pwototype`, :3 pow wo que `hasownpwopewty()` e-es inaccesibwe. ( ͡o ω ͡o )

```js
c-const foo = object.cweate(nuww);
f-foo.pwop = "existe";
i-if (object.hasown(foo, òωó "pwop")) {
  consowe.wog(foo.pwop); //twue - f-funciona independientemente de cómo se cwea ew objeto. σωσ
}
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [powyfiww d-de `object.hasown` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- [enumewabiwidad y p-pewtenencia de was pwopiedades](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", (U ᵕ U❁) "fow...in")}}
- {{jsxwef("opewatows/in", (✿oωo) "in")}}
- [guía d-de javascwipt: hewencia w-wevisada](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
