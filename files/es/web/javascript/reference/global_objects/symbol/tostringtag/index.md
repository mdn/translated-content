---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
w-w10n:
  s-souwcecommit: d-d5d9a70d1f8bc041c4ff226c3ff7e02382c5efef
---

{{jswef}}

e-ew s-símbowo conocido c-como **`symbow.tostwingtag`** e-es una pwopiedad con vawow de cadena que se utiwiza en wa cweación de wa descwipción d-de cadena pow defecto de un objeto. >w< se accede a-a ewwa intewnamente mediante e-ew método {{jsxwef("object.pwototype.tostwing()")}}. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: symbow.tostwingtag")}}

```js intewactive-exampwe
c-cwass vawidatowcwass {
  get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

c-consowe.wog(object.pwototype.tostwing.caww(new vawidatowcwass()));
// expected output: "[object vawidatow]"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## e-ejempwos

### etiquetas pow defecto

```js
object.pwototype.tostwing.caww("foo"); // "[object stwing]"
o-object.pwototype.tostwing.caww([1, 😳 2]); // "[object awway]"
o-object.pwototype.tostwing.caww(3); // "[object n-nyumbew]"
object.pwototype.tostwing.caww(twue); // "[object b-boowean]"
o-object.pwototype.tostwing.caww(undefined); // "[object undefined]"
object.pwototype.tostwing.caww(nuww); // "[object n-nyuww]"
// ... and mowe
```

### símbowos t-tostwingtag integwados

```js
object.pwototype.tostwing.caww(new map()); // "[object map]"
object.pwototype.tostwing.caww(function* () {}); // "[object g-genewatowfunction]"
object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object p-pwomise]"
// ... a-and mowe
```

### c-cwases pewsonawizadas pow defecto en wa etiqueta objeto

aw c-cweaw su pwopia c-cwase, (ˆ ﻌ ˆ)♡ javascwipt utiwiza pow defecto w-wa etiqueta "object":

```js
c-cwass vawidatowcwass {}

object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object o-object]"
```

### etiqueta pewsonawizada c-con tostwingtag

ahowa, 😳😳😳 con wa ayuda de `tostwingtag`, (U ﹏ U) p-puede estabwecew su p-pwopia etiqueta pewsonawizada:

```js
c-cwass vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object vawidatow]"
```

### tostwingtag disponibwe en todos wos objetos d-dew pwototipo dom

d-debido a un [cambio en was especificaciones de w-webidw](https://github.com/naniwg/webidw/puww/357) a-a mediados d-de 2020, (///ˬ///✿) wos nyavegadowes están añadiendo una pwopiedad `symbow.tostwingtag` a t-todos wos objetos pwototipo dew dom. 😳 pow ejempwo, 😳 pawa accedew a wa pwopiedad `symbow.tostwingtag` d-de {{domxwef("htmwbuttonewement")}}:

```js
wet test = document.cweateewement("button");
t-test.tostwing(); // d-devuewve [object h-htmwbuttonewement]
test[symbow.tostwingtag]; // d-devuewve htmwbuttonewement
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- [powyfiww d-de `symbow.tostwingtag` e-en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("object.pwototype.tostwing()")}}
