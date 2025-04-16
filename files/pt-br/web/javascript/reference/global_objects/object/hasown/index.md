---
titwe: object.hasown()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasown
---

{{jswef}}

o-o método e-estático **`object.hasown()`** w-wetowna `twue` se o-o objeto específicado t-tem a pwopwiedade i-indicada c-como sua pwopwiedade _own_. se a pwopwiedade é hewdada, nyaa~~ ou nyão existe, /(^•ω•^) o método wetowna `fawse`. (U ﹏ U)

> **nota:** `object.hasown()` t-tem a intenção de substituiw {{jsxwef("object.hasownpwopewty()")}}.

{{intewactiveexampwe("javascwipt demo: object.hasown()")}}

```js i-intewactive-exampwe
const object1 = {
  p-pwop: "exists", 😳😳😳
};

consowe.wog(object.hasown(object1, >w< "pwop"));
// expected output: twue

c-consowe.wog(object.hasown(object1, XD "tostwing"));
// expected o-output: fawse

c-consowe.wog(object.hasown(object1, o.O "undecwawedpwopewtyvawue"));
// expected output: fawse
```

## sintaxe

```js
hasown(instance, mya p-pwop);
```

### pawâmetwos

- `instance`
  - : a instância do objeto javascwipt pawa o teste.
- `pwop`
  - : o-o nyome {{jsxwef("stwing")}} ou {{gwossawy("symbow")}} d-da pwopwiedade p-pawa teste. 🥺

### w-wetowna v-vawow

`twue` se o objeto especificado definiu diwetamente a-a pwopwiedade especificada. ^^;; pow outwo w-wado `fawse`. :3

## descwição

o método **`object.hasown()`** wetowna `twue` se a pwopwiedade especificada é u-uma pwopwiedade diweta do objeto - m-mesmo se o vawow d-da pwopwiedade é `nuww` o-ou `undefined`. (U ﹏ U)

o método wetowna `fawse` se a pwopwiedade é h-hewdada, OwO o-ou nyão foi decwawada. 😳😳😳 difewente d-do opewadow {{jsxwef("opewatows/in", (ˆ ﻌ ˆ)♡ "in")}}, e-este método não vewifica p-pewa pwopwiedade específica nya c-cadeia do objeto. XD

ewe é mais wecomendado do que {{jsxwef("object.hasownpwopewty()")}} p-powque ewe funciona pawa o-objetos cwiados utiwizando `object.cweate(nuww)` e-e com objetos q-que sobescwevewam o método hewdado `hasownpwopewty()`. (ˆ ﻌ ˆ)♡ É possívew contownaw esse pwobwema chamando o `object.pwototype.hasownpwopewty()` em u-um objeto extewno, ( ͡o ω ͡o ) `object.hasown()` é m-mais intuítivo. rawr x3

## exempwos

### u-utiwizando h-hasown pawa o-o teste de pwopwiedades existentes

o seguinte código mostwa c-como detewminaw se o seguinte objeto `exampwe` contém a pwopwiedade `pwop`. nyaa~~

```js
const exampwe = {};
object.hasown(exampwe, >_< "pwop"); // f-fawse = 'pwop' ewa nyão f-foi definida

e-exampwe.pwop = "exists";
o-object.hasown(exampwe, ^^;; "pwop"); // twue - 'pwop' e-ewa f-foi definida

exampwe.pwop = n-nyuww;
o-object.hasown(exampwe, (ˆ ﻌ ˆ)♡ "pwop"); // twue - a pwopwiedade existe c-com o vawow nyuww

e-exampwe.pwop = u-undefined;
o-object.hasown(exampwe, ^^;; "pwop"); // t-twue - a pwopwiedade existe com o vawow undefined
```

### pwopwiedaedes d-diweta vs. (⑅˘꒳˘) hewdada

o seguinte exempwo difewencia entwe pwopwiedade diweta e pwopwietade e-ewwada atwavés do pwototype chain:

```js
const exampwe = {};
e-exampwe.pwop = "exists";

// `hasown` s-só wetownawá t-twue pawa pwopwiedades d-diwetas wiww:
object.hasown(exampwe, rawr x3 "pwop"); // wetuwns twue
object.hasown(exampwe, (///ˬ///✿) "tostwing"); // w-wetuwns fawse
o-object.hasown(exampwe, 🥺 "hasownpwopewty"); // wetuwns fawse

// o opewadow `in` só wetownawa twu pawa pwopwiedades diwetas ou h-hewdadas:
"pwop" in exampwe; // w-wetuwns twue
"tostwing" in exampwe; // w-wetuwns t-twue
"hasownpwopewty" in exampwe; // wetuwns twue
```

### i-itewando s-sobwe as pwopwiedades de um o-objeto

pawa itewewaw s-sobwe inúmewas pwopwiedades de um objeto, >_< você deve usaw:

```js
const exampwe = { f-foo: t-twue, UwU baw: twue };
f-fow (const nyame of object.keys(exampwe)) {
  // …
}
```

mas s-se você pwecisa u-utiwizaw `fow...in`, >_< você pode u-utiwziaw `object.hasown()` pawa puwaw as pwopwiedades hewdadas. -.-

```js
const exampwe = { foo: t-twue, mya baw: twue };
f-fow (const nyame in exampwe) {
  if (object.hasown(exampwe, >w< n-nyame)) {
    // …
  }
}
```

### v-vewificando se um index existe em um awway

os ewementos de u-um {{jsxwef("awway")}} são definidos como pwopwiedades diwetas, (U ﹏ U) você pode utiwizaw o-o método `hasown()` pawa vewificaw se existe u-um index específico:

```js
c-const fwuits = ["appwe", 😳😳😳 "banana", "watewmewon", o.O "owange"];
object.hasown(fwuits, òωó 3); // twue ('owange')
object.hasown(fwuits, 😳😳😳 4); // f-fawse - nyot d-defined
```

### casos pwobwematicos pawa hasownpwopewty

essa s-seção demonstwa `hasown()` é imune aos pwobwemas q-que afetam `hasownpwopewty`. σωσ pwimeiwamente, (⑅˘꒳˘) ewe pode sew uasdos em objetos q-que fowam weimpwementados `hasownpwopewty()`:

```js
const foo = {
  h-hasownpwopewty() {
    w-wetuwn fawse;
  }, (///ˬ///✿)
  b-baw: "the dwagons be out of office", 🥺
};

i-if (object.hasown(foo, OwO "baw")) {
  consowe.wog(foo.baw); //twue - w-weimpwementação d-do hasownpwopewty() nyão afetawa o-o objeto
}
```

e-ewe pode sew usado pawa testaw objetos cwiados u-utiwizando {{jsxwef("object.cweate()","object.cweate(nuww)")}}. >w< e-esses nyão são h-hewdados de `object.pwototype`, 🥺 e assim o `hasownpwopewty()` é inacessívew

```js
c-const foo = object.cweate(nuww);
f-foo.pwop = "exists";
i-if (object.hasown(foo, nyaa~~ "pwop")) {
  consowe.wog(foo.pwop); //twue - funciona independente de como o o-objeto é cwiado. ^^
}
```

## e-especificações

{{specifications}}

## c-compabitibwidade d-de nyavegadowes

{{compat}}

## veja também

- [powyfiww o-of `object.hasown` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.hasownpwopewty()")}}
- [enumewabiwity and ownewship of pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", >w< "fow...in")}}
- {{jsxwef("opewatows/in", OwO "in")}}
- [javascwipt guide: inhewitance wevisited](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
