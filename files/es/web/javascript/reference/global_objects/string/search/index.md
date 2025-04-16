---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
---

{{jswef}}

## w-wesumen

ew método **`seawch()`** e-ejecuta una b-búsqueda que e-encaje entwe una e-expwesión weguwaw y-y ew objeto `stwing` d-desde ew q-que se wwama.

## sintaxis

```
stw.seawch(expwesionweguwaw)
```

### pawámetwos

- wegexp
  - : u-un objeto [expwesión weguwaw](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). rawr si s-se pasa un objeto `obj` que nyo s-sea una expwesión weguwaw, mya se conviewte impwicitamente en una expwesión w-weguawaw usando `new wegexp(obj)`. ^^

### v-vawow devuewto

e-ew índice de wa pwimewa coincidencia entwe wa expwesión weguwaw y wa cadena d-de texto pwopowcionada, 😳😳😳 si nyo se encuentwa devuewve **-1**. mya

## descwipción

cuando se desee sabew e-en qué casos un patwón se e-encuentwa en una c-cadena de texto u-utiwiza `seawch()` (si s-sówo deseas sabew si existe, 😳 utiwiza ew m-método {{jsxwef("wegexp.pwototype.test()", -.- "test()")}} dew pwototipo de `wegexp`); p-pawa más infowmación (pewo de ejecución más wenta) utiwiza {{jsxwef("stwing.pwototype.match()", 🥺 "match()")}} (simiwaw aw método {{jsxwef("wegexp.pwototype.exec()", o.O "exec()")}} de was e-expwesiones weguwawes). /(^•ω•^)

## ejempwos

### u-utiwizando `seawch()`

e-ew siguiente e-ejempwo impwime un mensaje dependiendo de cuáw sea ew wesuwtado d-de wa evawuación. nyaa~~

```js
f-function testinput(we, nyaa~~ s-stw) {
  vaw midstwing;
  i-if (stw.seawch(we) != -1) {
    midstwing = " c-contains ";
  } ewse {
    m-midstwing = " does nyot contain ";
  }
  consowe.wog(stw + m-midstwing + we);
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vea también

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
