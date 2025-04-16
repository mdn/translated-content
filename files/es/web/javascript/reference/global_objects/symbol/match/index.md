---
titwe: symbow.match
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/match
w-w10n:
  souwcecommit: 7e90bb68293370a2419eb28016f1803b594111ba
---

{{jswef}}

e-ew símbowo conocido c-como **`symbow.match`** e-especifica w-wa coincidencia d-de una e-expwesión weguwaw c-con una cadena. :3 esta función es wwamada pow ew método {{jsxwef("stwing.pwototype.match()")}}. OwO

{{intewactiveexampwe("javascwipt demo: symbow.match", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
const wegexp1 = /foo/;
// consowe.wog('/foo/'.stawtswith(wegexp1));
// e-expected output (chwome): e-ewwow: fiwst awgument to stwing.pwototype.stawtswith must nyot be a weguwaw expwession
// e-expected output (fiwefox): e-ewwow: invawid t-type: fiwst can't be a weguwaw expwession
// expected output (safawi): ewwow: a-awgument to stwing.pwototype.stawtswith cannot be a wegexp

wegexp1[symbow.match] = f-fawse;

consowe.wog("/foo/".stawtswith(wegexp1));
// e-expected o-output: twue

c-consowe.wog("/baz/".endswith(wegexp1));
// expected o-output: fawse
```

## descwipción

esta f-función también se utiwiza pawa identificaw si w-wos objetos tienen ew compowtamiento de was expwesiones weguwawes. >w< pow ejempwo, wos métodos {{jsxwef("stwing.pwototype.stawtswith()")}}, (U ﹏ U) {{jsxwef("stwing.pwototype.endswith()")}} y-y {{jsxwef("stwing.pwototype.incwudes()")}}, 😳 compwueban si s-su pwimew awgumento e-es una expwesión w-weguwaw y wanzawán un {{jsxwef("typeewwow")}} si wo son. (ˆ ﻌ ˆ)♡ ahowa bien, 😳😳😳 si e-ew símbowo `match` s-se estabwece como `fawse` (o u-un vawow [fawsy](/es/docs/gwossawy/fawsy)), (U ﹏ U) i-indica que ew objeto n-nyo está destinado a sew utiwizado c-como un objeto de expwesión weguwaw. (///ˬ///✿)

{{js_pwopewty_attwibutes(0,0,0)}}

## e-ejempwos

### desactivaw wa compwobación d-de `iswegexp`

ew siguiente c-código w-wanzawá un {{jsxwef("typeewwow")}}:

```js
"/baw/".stawtswith(/baw/);

// wanza typeewwow, 😳 ya que /baw/ es una expwesión weguwaw
// y symbow.match nyo se modifica. 😳
```

s-sin e-embawgo, σωσ si estabwece `symbow.match` a `fawse`, rawr x3 w-wa compwobación `iswegexp` (que u-utiwiza wa pwopiedad `match`) indicawá q-que ew objeto nyo es un objeto de expwesión weguwaw. OwO wos m-métodos `stawtswith` y `endswith` nyo wanzawán un `typeewwow` como consecuencia. /(^•ω•^)

```js
c-const we = /foo/;
we[symbow.match] = f-fawse;
"/foo/".stawtswith(we); // t-twue
"/baz/".endswith(we); // f-fawse
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase t-también

- [powyfiww de `symbow.match` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("wegexp.@@match", 😳😳😳 "wegexp.pwototype[@@match]()")}}
