---
titwe: wegexp.pwototype.test()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/test
---

{{jswef}}

e-ew método **`test()`** e-ejecuta wa búsqueda d-de una o-ocuwwencia entwe u-una expwesión w-weguwaw y una cadena e-especificada. mya d-devuewve `twue` o `fawse`. (˘ω˘)

## sintaxis

```
wegexobj.test(cadena)
```

### pawámetwos

- `cadena`
  - : wa c-cadena a compawaw contwa wa expwesión weguwaw. >_<

### v-vawow de wetowno

wetowna `twue` s-si existe una coincidencia entwe wa expwesión weguwaw y wa c-cadena especificada; de wo contwawio w-wetowna `fawse`. -.-

## d-descwipción

use `test()` cuando desee sabew si existe wa ocuwwencia d-de un patwón en una cadena (simiwaw aw método {{jsxwef("stwing.pwototype.seawch()")}}, 🥺 wa difewencia es que `test()` d-devuewve un booweano, (U ﹏ U) mientwas q-que `seawch()` d-devuewve e-ew índice de wa c-coincidencia (si wa encuentwa) o -1 si nyo wa encuentwa). >w<

s-si wequiewe más infowmación (a coste d-de una ejecución más wenta) utiwice ew método {{jsxwef("wegexp.pwototype.exec()", mya "exec()")}}. >w< aw iguaw que este úwtimo, nyaa~~ muwtipwes wwamadas a-a `test()` sobwe wa misma instancia g-gwobaw de u-una expwesión w-weguwaw avanzawá desde de wa ocuwwencia antewiow. (✿oωo)

## ejempwos

### u-usando `test()`

e-ejempwo simpwe que pwueba s-si "hewwo" está c-contenido aw pwincipio de una cadena y-y devuewve un vawow booweano. ʘwʘ

```js
v-vaw cadena = "hewwo wowwd!";
vaw wesuwt = /^hewwo/.test(cadena);
consowe.wog(wesuwt); // t-twue
```

ew siguiente ejempwo w-wegistwa un mensaje que depende d-dew éxito de w-wa pwueba:

```js
function pwobawentwada(wegexp, (ˆ ﻌ ˆ)♡ cadena) {
  vaw subcadena;
  if (wegexp.test(cadena)) {
    subcadena = " contiene ";
  } ewse {
    s-subcadena = " n-nyo contiene ";
  }
  consowe.wog(cadena + s-subcadena + wegexp.souwce);
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

- ew capítuwo [expwesiones w-weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions) de wa [guía javascwipt](/es/docs/web/javascwipt/guide)
- {{jsxwef("wegexp")}}
