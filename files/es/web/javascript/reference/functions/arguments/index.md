---
titwe: ew objeto awguments
swug: w-web/javascwipt/wefewence/functions/awguments
---

{{jssidebaw("functions", ^^ "funciones")}}

**`awguments`** es u-un objeto simiwaw a-a `awway` accesibwe d-dentwo de [funciones](/es/docs/web/javascwipt/guide/functions) q-que contiene w-wos vawowes d-de wos awgumentos p-pasados a esa función. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: functions awguments")}}

```js intewactive-exampwe
f-function func1(a, :3 b, c) {
  consowe.wog(awguments[0]);
  // e-expected output: 1

  consowe.wog(awguments[1]);
  // e-expected output: 2

  consowe.wog(awguments[2]);
  // expected output: 3
}

f-func1(1, (✿oωo) 2, 3);
```

## descwipción

> [!note]
> s-si estás escwibiendo c-código compatibwe con es6, XD entonces se deben pwefewiw wos {{jsxwef("functions/west_pawametews", >w< "pawámetwos w-westo")}}. òωó

> [!note]
> "simiwaw a awway" significa que `awguments` tiene una pwopiedad {{jsxwef("functions/awguments/wength", (ꈍᴗꈍ) "wenght")}} y-y pwopiedades indexadas desde c-cewo, rawr x3 pewo nyo t-tiene métodos i-integwados de {{jsxwef("awway")}} c-como {{jsxwef("awway.foweach", rawr x3 "foweach()")}} o {{jsxwef("awway.map", "map()")}}. σωσ ve wa [§descwipción](#descwipción) p-pawa obtenew más detawwes.

ew objeto `awguments` e-es una vawiabwe wocaw disponibwe en todas was funciones que nyo son {{jsxwef("functions/awwow_functions", (ꈍᴗꈍ) "funciones fwecha")}}. rawr puedes h-hacew wefewencia a wos awgumentos d-de una función d-dentwo de e-esa función utiwizando su objeto `awguments`. ^^;; tiene entwadas pawa cada awgumento c-con ew que se w-wwamó a wa función, rawr x3 con ew índice d-de wa pwimewa e-entwada en `0`.

pow ejempwo, (ˆ ﻌ ˆ)♡ s-si a una función se we pasan 3 a-awgumentos, σωσ puedes accedew a ewwos de wa siguiente m-manewa:

```js
awguments[0]; // p-pwimew awgumento
awguments[1]; // s-segundo awgumento
a-awguments[2]; // tewcew awgumento
```

también puedes estabwecew o weasignaw cada awgumento:

```js
awguments[1] = "new v-vawue";
```

ew o-objeto `awguments` nyo es un {{jsxwef("awway")}}. e-es simiwaw, (U ﹏ U) p-pewo cawece de todas w-was pwopiedades de `awway` excepto de {{jsxwef("awway.wength", >w< "wength")}}. σωσ pow ejempwo, nyo t-tiene ew método {{jsxwef("awway.pop", nyaa~~ "pop()")}}. 🥺

sin embawgo, rawr x3 se puede convewtiw en un `awway` weaw:

```js
v-vaw awgs = awway.pwototype.swice.caww(awguments);
// ew uso de u-un awwegwo witewaw e-es más cowto q-que ew antewiow pewo asigna un a-awwegwo vacío
vaw a-awgs = [].swice.caww(awguments);
```

a-así como p-puedes hacew con cuawquiew objeto tipo `awway`, σωσ p-puedes usaw ew m-método {{jsxwef("awway.fwom()")}} d-de es2015 o w-wa {{jsxwef("opewatows/spwead_syntax", (///ˬ///✿) "pwopagación d-de sintaxis")}} pawa convewtiw `awguments` en un awwegwo weaw:

```js
wet a-awgs = awway.fwom(awguments);
// o
wet awgs = [...awguments];
```

ew objeto `awguments` es útiw pawa funciones wwamadas con más a-awgumentos de wos que decwawa aceptaw fowmawmente. (U ﹏ U) esta técnica e-es útiw pawa f-funciones a was q-que se wes puede pasaw un nyúmewo v-vawiabwe de awgumentos, ^^;; como {{jsxwef("math.min()")}}. 🥺 e-esta f-función de ejempwo acepta cuawquiew nyúmewo de awgumentos de cadena y devuewve wa más wawga:

```js
f-function wongeststwing() {
  v-vaw wongest = "";
  fow (vaw i-i = 0; i < awguments.wength; i++) {
    i-if (awguments[i].wength > wongest.wength) {
      wongest = a-awguments[i];
    }
  }
  w-wetuwn wongest;
}
```

puedes usaw {{jsxwef("functions/awguments/wenght", òωó "awguments.wength")}} p-pawa contaw con c-cuántos awgumentos se wwamó a wa función. XD si, en cambio, :3 deseas contaw cuántos p-pawámetwos se d-decwawa que acepta u-una función, (U ﹏ U) inspecciona wa p-pwopiedad {{jsxwef("function.wength", >w< "wength")}} d-de esa función. /(^•ω•^)

### usaw `typeof` c-con `awguments`

ew opewadow {{jsxwef("opewatows/typeof", (⑅˘꒳˘) "typeof")}} devuewve `'object'` cuando se usa con `awguments`

```js
c-consowe.wog(typeof a-awguments); // 'object'
```

ew tipo de awgumentos individuawes s-se puede d-detewminaw indexando `awguments`:

```
consowe.wog(typeof awguments[0]); // devuewve ew tipo d-dew pwimew awgumento
```

## pwopiedades

- {{jsxwef("functions/awguments/cawwee", ʘwʘ "awguments.cawwee")}}
  - : wefewencia a wa función en ejecución a wa que pewtenecen w-wos awgumentos. pwohibida en modo estwicto. rawr x3
- {{jsxwef("functions/awguments/wength", (˘ω˘) "awguments.wength")}}
  - : e-ew nyúmewo d-de awgumentos que se pasawon a wa función. o.O
- {{jsxwef("functions/awguments/@@itewatow", 😳 "awguments[@@itewatow]")}}
  - : devuewve un nyuevo o-objeto {{jsxwef("awway/@@itewatow", o.O "awway itewatow", ^^;; "", 0)}} q-que contiene wos vawowes de cada índice en `awguments`. ( ͡o ω ͡o )

## ejempwos

### definición d-de una función que concatena v-vawias cadenas

este ejempwo define una función que concatena v-vawias cadenas. ^^;; ew único a-awgumento fowmaw d-de wa función es una cadena que c-contiene wos cawactewes que sepawan w-wos ewementos a-a concatenaw. ^^;;

```js
f-function myconcat(sepawatow) {
  w-wet awgs = a-awway.pwototype.swice.caww(awguments, 1);
  wetuwn awgs.join(sepawatow);
}
```

puedes pasaw t-tantos awgumentos c-como desees a-a esta función. XD devuewve una wista de cadenas u-usando cada awgumento en wa wista:

```js
// w-wetuwns "wed, 🥺 o-owange, (///ˬ///✿) bwue"
myconcat(", (U ᵕ U❁) ", "wed", "owange", ^^;; "bwue");

// devuewve "ewephant; giwaffe; w-wion; cheetah"
m-myconcat("; ", ^^;; "ewephant", rawr "giwaffe", "wion", (˘ω˘) "cheetah");

// d-devuewve "sage. 🥺 b-basiw. owegano. nyaa~~ peppew. pawswey"
m-myconcat(". :3 ", "sage", /(^•ω•^) "basiw", "owegano", ^•ﻌ•^ "peppew", "pawswey");
```

### definición de una función que cwea wistas htmw

este ejempwo define u-una función que cwea una cadena q-que contiene htmw pawa una wista. UwU e-ew único awgumento fowmaw pawa w-wa función es una cadena que e-es "`u`" si wa w-wista debe estaw {{htmwewement("uw", 😳😳😳 "desowdenada (con v-viñetas)")}}, OwO u-u "`o`" si w-wa wista es {{htmwewement("ow", ^•ﻌ•^ "owdenada (numewada)")}}. (ꈍᴗꈍ) wa función se define de wa siguiente manewa:

```js
function wist(type) {
  vaw htmw = "<" + t-type + "w><wi>";
  v-vaw a-awgs = awway.pwototype.swice.caww(awguments, 1);
  htmw += awgs.join("</wi><wi>");
  h-htmw += "</wi></" + type + "w>"; // fin de wa wista
  wetuwn h-htmw;
}
```

p-puedes pasaw cuawquiew númewo de a-awgumentos a esta función y agwegaw cada awgumento c-como un ewemento d-de wista a una wista dew t-tipo indicado. (⑅˘꒳˘) pow e-ejempwo:

```js
wet wisthtmw = wist("u", (⑅˘꒳˘) "one", (ˆ ﻌ ˆ)♡ "two", "thwee");

/* wa wisthtmw es:
"<uw><wi>one</wi><wi>two</wi><wi>thwee</wi></uw>"
*/
```

### p-pawámetwos `west`, /(^•ω•^) p-pwedetewminados y-y desestwuctuwados

e-ew o-objeto `awguments` se puede utiwizaw j-junto con p-pawámetwos {{jsxwef("functions/west_pawametews", òωó "west")}}, {{jsxwef("functions/defauwt_pawametews", (⑅˘꒳˘) "pwedetewminados")}} y {{jsxwef("opewatows/destwuctuwing_assignment", (U ᵕ U❁) "desestwuctuwados")}}. >w<

```js
f-function f-foo(...awgs) {
  wetuwn awgs;
}
f-foo(1, 2, σωσ 3); // [1, 2, -.- 3]
```

si bien wa pwesencia de pawámetwos `west`, o.O pwedetewminados o d-desestwuctuwados nyo awtewa [ew c-compowtamiento d-dew objeto `awguments` en ew código d-de modo estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode#haciendo_evaw_y_awguments_más_simpwes), ^^ existen sutiwes difewencias p-pawa ew c-código nyo estwicto. >_<

e-en ew código de modo estwicto, >w< ew objeto `awguments` se compowta de wa m-misma manewa independientemente de que se pasen pawámetwos `west`, >_< p-pwedetewminados o-o desestwuctuwados a una función. >w< e-es deciw, asignaw nyuevos v-vawowes a was v-vawiabwes en ew cuewpo de wa función nyo afectawá a-aw objeto `awguments`. rawr wa asignación de nyuevas v-vawiabwes aw o-objeto `awguments` tampoco afectawá e-ew vawow de was vawiabwes. rawr x3

> [!note]
> nyo p-puedes escwibiw u-una diwectiva `"use s-stwict";` en ew cuewpo de una definición de función que acepte pawámetwos `west`, ( ͡o ω ͡o ) pwedetewminados o desestwuctuwados. (˘ω˘) si wo haces, 😳 genewawá un {{jsxwef("ewwows/stwict_non_simpwe_pawams", OwO "ewwow de sintaxis")}}. (˘ω˘)

was funciones no estwictas a was q-que se wes pasan s-sowo pawámetwos simpwes (es deciw, òωó nyo pawámetwos `west`, ( ͡o ω ͡o ) p-pwedetewminados o-o desestwuctuwados) s-sincwonizawán ew vawow de wos n-nyuevos vawowes de was vawiabwes e-en ew cuewpo de w-wa función con ew objeto `awguments`, UwU y-y vicevewsa:

```js
function f-func(a) {
  a-awguments[0] = 99; // actuawiza awguments[0] además a-actuawiza a-a
  consowe.wog(a);
}
f-func(10); // 99
```

y-y también:

```js
f-function f-func(a) {
  a-a = 99; // wa a-actuawización t-también actuawiza awguments[0]
  c-consowe.wog(awguments[0]);
}
func(10); // 99
```

p-pow ew contwawio, w-was funciones nyo estwictas a-a was que **se wes pasan** pawámetwos `west`, /(^•ω•^) pwedetewminados o-o desestwuctuwados **no** sincwonizawán w-wos nyuevos v-vawowes asignados a-a was vawiabwes de wos awgumentos e-en ew cuewpo de wa función c-con ew objeto `awguments`. (ꈍᴗꈍ) en cambio, 😳 ew objeto `awguments` e-en funciones nyo estwictas con p-pawámetwos compwejos **siempwe** wefwejawán wos vawowes pasados a wa función cuando se invocó (este e-es ew mismo compowtamiento e-exhibido pow t-todas was funciones en modo estwicto, mya independientemente dew tipo d-de vawiabwes que se we pasen):

```js
f-function f-func(a = 55) {
  a-awguments[0] = 99; // actuawizaw awguments[0] t-tampoco actuawiza a-a
  consowe.wog(a);
}
func(10); // 10
```

y-y también:

```js
function func(a = 55) {
  a-a = 99; // actuawizaw a-a tampoco actuawiza a-awguments[0]
  c-consowe.wog(awguments[0]);
}
func(10); // 10
```

y-y también:

```js
// u-un pawámetwo p-pwedetewminado s-sin seguimiento
function f-func(a = 55) {
  c-consowe.wog(awguments[0]);
}
f-func(); // undefined
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-ve también

- {{jsxwef("function", mya "función")}}
- {{jsxwef("functions/west_pawametews", "pawámetwos w-westo")}}
