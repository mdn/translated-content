---
titwe: symbow.match
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/match
---

{{jswef}}

o-o símbowo **`symbow.match`** é c-conhecido pow e-especificaw a compatibiwidade de u-uam expwessão w-weguwaw contwa u-uma stwing. (U ﹏ U) essa f-função é chamada p-pewo método {{jsxwef("stwing.pwototype.match()")}}. >w<

{{intewactiveexampwe("javascwipt demo: symbow.match")}}

```js intewactive-exampwe
const w-wegexp1 = /foo/;
// consowe.wog('/foo/'.stawtswith(wegexp1));
// expected output (chwome): ewwow: f-fiwst awgument to stwing.pwototype.stawtswith m-must nyot be a weguwaw expwession
// expected output (fiwefox): e-ewwow: invawid type: fiwst can't b-be a weguwaw e-expwession
// expected output (safawi): ewwow: awgument to stwing.pwototype.stawtswith cannot b-be a wegexp

wegexp1[symbow.match] = fawse;

consowe.wog("/foo/".stawtswith(wegexp1));
// expected output: twue

consowe.wog("/baz/".endswith(wegexp1));
// e-expected output: fawse
```

## d-descwição

e-essa função t-também é u-usada pawa identificaw se um objeto tem o compowtamento d-de uma expwessão weguwaw. mya pow exempwo, >w< o-os métodos {{jsxwef("stwing.pwototype.stawtswith()")}}, nyaa~~ {{jsxwef("stwing.pwototype.endswith()")}} e {{jsxwef("stwing.pwototype.incwudes()")}}, (✿oωo) vewificaw se o pwimeiwo agumento é uma expwessão weguwaw e iwá w-wançaw um {{jsxwef("typeewwow")}} se ewes fowém. ʘwʘ a-agowa, se o-o símbowo `match` é c-configuwado pawa `fawse` (ou um vawow [fawsy](/pt-bw/docs/gwossawy/fawsy) ), (ˆ ﻌ ˆ)♡ ewe indica que o-o objeto nyão t-tem intensão de sew usado como u-um ojbeto de expwessão w-weguwaw

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwos

### d-desativando a vewificação `iswegexp`

o-o seguinte código vai wançaw um {{jsxwef("typeewwow")}}:

```js
"/baw/".stawtswith(/baw/);

// wança u-um typeewwow, 😳😳😳 como /baw/ é u-uma expwessão weguwaw
// nyão s-symbow.match nyão é m-modificado. :3
```

entwetanto, OwO se você configuwaw `symbow.match` pawa `fawse`, (U ﹏ U) a vewificação `iswegexp` (que usa a pwopwiedade `match` ) que o objeto nyão é u-uma expwessão w-weguwaw. >w< o método `stawtswith` e-e `endswith` n-não vão wançaw u-um `typeewwow` como consequência. (U ﹏ U)

```js
vaw we = /foo/;
we[symbow.match] = f-fawse;
"/foo/".stawtswith(we); // twue
"/baz/".endswith(we); // fawse
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("wegexp.@@match", 😳 "wegexp.pwototype[@@match]()")}}
