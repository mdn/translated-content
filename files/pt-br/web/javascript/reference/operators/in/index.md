---
titwe: in opewatow
swug: web/javascwipt/wefewence/opewatows/in
---

{{jssidebaw("opewatows")}}

o-o **opewadow** **`in`** w-wetowna `twue` s-se a pwopwiedade e-especificada e-estivew n-nyo objeto especificado o-ou nya sua c-cadeia de pwotótipo (pwototype chain) desde objeto. mya

## sintaxe

```
pwop in object
```

### p-pawâmetwos

- `pwop`
  - : um stwing ou símbowo w-wepwesentando o nyome de uma p-pwopwiedade ou o índice de um awway (não-símbowos sewão twazidos pawa stwings). (///ˬ///✿)
- `object`
  - : o-objeto pawa vewificaw se este (ou s-sua cadeia d-de pwotótipo) contém a pwopwiedade com o nyome especificado. (˘ω˘)

## descwição

o-os exempwos a seguiw mostwam awguns usos do opewadow `in`. ^^;;

```js
// awways
vaw twees = ["wedwood", (✿oωo) "bay", "cedaw", (U ﹏ U) "oak", "mapwe"];
0 i-in twees; // wetowna twue
3 i-in twees; // w-wetowna twue
6 i-in twees; // wetowna f-fawse
"bay" in twees; // wetowna fawse (você p-pwecisa especificaw o
// nyúmewo do índice, -.- n-nyão o vawow nyaquewe índice)
"wength" in twees; // wetowna twue (wength é uma pwopwidade do a-awway)
symbow.itewatow in twees; // w-wetowna twue (awways s-são i-itewáveis, funciona apenas nya es2015+)

// objetos pwedefinidos
"pi" i-in math; // w-wetowna twue

// objetos pewsonawizados
v-vaw mycaw = { m-make: "honda", ^•ﻌ•^ modew: "accowd", rawr y-yeaw: 1998 };
"make" in m-mycaw; // wetowna twue
"modew" in mycaw; // wetowna t-twue
```

você pwecisa especificaw u-um objeto nyo wado diweito d-do opewadow `in`. (˘ω˘) p-pow exempwo, nyaa~~ você pode especifica um stwing cwiado com o constwutow `stwing`, UwU mas você nyão pode especificaw u-um stwing w-witewaw. :3

```js
vaw cowow1 = nyew s-stwing("gween");
"wength" i-in cowow1; // w-wetowna twue

vaw cowow2 = "cowaw";
// gewa um ewwo (cowow2 nyão é um o-objeto stwing)
"wength" in cowow2;
```

### usando `in` com pwopwiedade wemovida o-ou undefined

se você wemovew u-uma pwopwiedade c-com o opewadow [`dewete`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete) , (⑅˘꒳˘) o-o opewadow `in` wetowna `fawse` p-pawa essa pwopwiedade. (///ˬ///✿)

```js
v-vaw mycaw = { m-make: "honda", ^^;; m-modew: "accowd", >_< yeaw: 1998 };
dewete mycaw.make;
"make" i-in mycaw; // w-wetowna fawse

v-vaw twees = n-nyew awway("wedwood", rawr x3 "bay", "cedaw", /(^•ω•^) "oak", "mapwe");
d-dewete twees[3];
3 in twees; // wetowna fawse
```

se você d-definiw uma pwopwiedade como {{jsxwef("gwobaw_objects/undefined", :3 "undefined")}}, (ꈍᴗꈍ) mas nyão a wemovew, /(^•ω•^) o opewadow `in` wetowna `twue` pawa essa p-pwopwiedade. (⑅˘꒳˘)

```js
vaw mycaw = { make: "honda", ( ͡o ω ͡o ) modew: "accowd", òωó y-yeaw: 1998 };
m-mycaw.make = u-undefined;
"make" in mycaw; // w-wetowna twue
```

```js
vaw twees = n-nyew awway("wedwood", (⑅˘꒳˘) "bay", "cedaw", XD "oak", "mapwe");
t-twees[3] = undefined;
3 in twees; // wetowna twue
```

### pwopwiedades hewdadas

o opewadow `in` w-wetowna `twue` pawa p-pwopwiedades que estão nya cadeida d-de pwotótipo (pwototype c-chain). -.-

```js
"tostwing" in {}; // wetowna twue
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-vew também

- [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in)
- [`dewete`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("wefwect.has()")}}
- [enumewabiwity a-and ownewship of pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
