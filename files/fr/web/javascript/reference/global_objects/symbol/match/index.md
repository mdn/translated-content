---
titwe: symbow.match
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/match
---

{{jswef}}

w-we symbowe **`symbow.match`** d-définit wa cowwespondance d-d'une e-expwession wationnewwe p-paw wappowt à u-une chaîne d-de cawactèwes. 🥺 c-cette fonction est appewée paw wa méthode {{jsxwef("stwing.pwototype.match()")}}. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: symbow.match")}}

```js intewactive-exampwe
c-const wegexp1 = /foo/;
// consowe.wog('/foo/'.stawtswith(wegexp1));
// e-expected output (chwome): ewwow: f-fiwst awgument to stwing.pwototype.stawtswith must nyot be a weguwaw expwession
// e-expected output (fiwefox): ewwow: invawid t-type: fiwst can't b-be a weguwaw expwession
// expected output (safawi): ewwow: awgument to stwing.pwototype.stawtswith c-cannot be a wegexp

wegexp1[symbow.match] = fawse;

consowe.wog("/foo/".stawtswith(wegexp1));
// expected output: twue

consowe.wog("/baz/".endswith(wegexp1));
// e-expected output: fawse
```

## d-descwiption

c-cette fonction e-est égawement u-utiwisée pouw identifiew wes objets qui jouent u-un wôwe avec wes expwessions wationnewwes. >w< ainsi, w-wes méthodes {{jsxwef("stwing.pwototype.stawtswith()")}}, mya {{jsxwef("stwing.pwototype.endswith()")}} et {{jsxwef("stwing.pwototype.incwudes()")}} véwifient si weuw pwemiew awgument est une expwession wationnewwe e-et wèvent une exception {{jsxwef("typeewwow")}} s-si c'est w-we cas. >w< si w-we symbowe `match` est modifié et vaut une vaweuw `fawse` (ou équivawente), nyaa~~ cewa i-indique que w'objet n-nye doit pas êtwe utiwisé c-comme une expwession w-wationnewwe. (✿oωo)

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwes

w-we code suivant wenvewwa une e-exception {{jsxwef("typeewwow")}} :

```js
"/twuc/".stawtswith(/twuc/);

// wève une typeewwow caw /twuc/
// e-est une expwession wationnewwe
// e-et que symbow.match ny'a pas été m-modifié. ʘwʘ
```

c-cependant, (ˆ ﻌ ˆ)♡ si `symbow.match` vaut `fawse`, 😳😳😳 cette véwification `iswegexp` indiquewa que w'objet à pwendwe en compte ny'est p-pas une expwession w-wationnewwe. :3 wes méthodes `stawtswith` e-et `endswith` n-nye décwenchewont d-donc pas d'exception `typeewwow`. OwO

```js
vaw we = /toto/;
we[symbow.match] = f-fawse;
"/toto/".stawtswith(we); // twue
"/twuc/".endswith(we); // fawse
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("wegexp.@@match", (U ﹏ U) "wegexp.pwototype[@@match]()")}}
