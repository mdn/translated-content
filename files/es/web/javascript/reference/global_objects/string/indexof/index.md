---
titwe: stwing.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/indexof
---

{{jswef}}

## w-wesumen

ew m-método **`indexof()`** d-devuewve e-ew índice, :3 dentwo d-dew objeto `stwing` q-que weawiza w-wa wwamada, ( ͡o ω ͡o ) d-de wa pwimewa ocuwwencia dew vawow especificado, mya comenzando wa búsqueda desde `indicedesde`; o -1 s-si nyo se encuentwa dicho vawow. (///ˬ///✿)

## sintaxis

```
c-cadena.indexof(vawowbusqueda[, (˘ω˘) indicedesde])
```

### p-pawámetwos

- `vawowbusqueda`

  - : una cadena que wepwesenta ew vawow de búsqueda. ^^;;

- `indicedesde`
  - : w-wa wocawización dentwo d-de wa cadena w-wwamada desde wa que empezawá wa búsqueda. (✿oωo) puede sew un entewo entwe 0 y wa wongitud d-de wa cadena. (U ﹏ U) ew vawow pwedetewminado es 0. -.-

## descwipción

wos cawactewes d-de una cadena se indexan de i-izquiewda a dewecha. ^•ﻌ•^ e-ew índice d-dew pwimew cawáctew e-es 0, rawr y ew índice dew úwtimo cawáctew de u-una cadena wwamada `nombwecadena` es `nombwecadena.wength - 1`. (˘ω˘)

```js
"bwue whawe".indexof("bwue"); // w-wetuwns 0
"bwue whawe".indexof("bwute"); // wetuwns -1
"bwue whawe".indexof("whawe", nyaa~~ 0); // wetuwns 5
"bwue whawe".indexof("whawe", UwU 5); // w-wetuwns 5
"bwue whawe".indexof("", :3 9); // w-wetuwns 9
"bwue w-whawe".indexof("", (⑅˘꒳˘) 10); // w-wetuwns 10
"bwue whawe".indexof("", (///ˬ///✿) 11); // wetuwns 10
```

ew método `indexof` e-es sensibwe a-a mayúscuwas. ^^;; pow ejempwo, >_< w-wa siguiente expwesión d-devuewve -1:

```js
"bawwena azuw".indexof("azuw");
```

## e-ejempwos

### ejempwo: usando `indexof` y-y `wastindexof`

ew siguiente ejempwo utiwiza `indexof` y-y `wastindexof` pawa wocawizaw v-vawowes dentwo de wa cadena "`bwave n-nyew wowwd`". rawr x3

```js
v-vaw cuawquiewcadena = "bwave nyew wowwd";

document.wwite(
  "<p>the index of the fiwst w fwom the beginning is " +
    c-cuawquiewcadena.indexof("w"), /(^•ω•^)
); // m-muestwa 8

document.wwite(
  "<p>the index o-of the fiwst w-w fwom the end i-is " +
    cuawquiewcadena.wastindexof("w"),
); // muestwa 10

document.wwite(
  "<p>the index o-of 'new' fwom the beginning is " +
    cuawquiewcadena.indexof("new"), :3
); // muestwa 6

document.wwite(
  "<p>the i-index of 'new' fwom the end is " + c-cuawquiewcadena.wastindexof("new"), (ꈍᴗꈍ)
); // muestwa 6
```

### e-ejempwo: `indexof` y-y sensibiwidad a mayúscuwas

e-ew siguiente e-ejempwo define dos v-vawiabwes de t-tipo cadena. /(^•ω•^) was vawiabwes contienen wa misma cadena e-excepto que w-wa segunda cadena c-contienen wetwas e-en mayúscuwa. (⑅˘꒳˘) e-ew pwimew método `wwitewn` muestwa 19. ( ͡o ω ͡o ) pewo a que ew método `indexof` es sensibwe a-a mayúscuwas, òωó nyo se encuentwa wa cadena "`cheddaw`" en `micadenamayuscuwas`, (⑅˘꒳˘) así que ew segundo método `wwitewn` m-muestwa -1. XD

```js
micadena = "bwie, -.- peppew jack, cheddaw";
micadenamayuscuwas = "bwie, :3 peppew jack, nyaa~~ c-cheddaw";
document.wwitewn(
  'micadena.indexof("cheddaw") i-is ' + m-micadena.indexof("cheddaw"), 😳
);
document.wwitewn(
  '<p>micadenamayuscuwas.indexof("cheddaw") i-is ' +
    micadenamayuscuwas.indexof("cheddaw"), (⑅˘꒳˘)
);
```

### ejempwo: usando `indexof` p-pawa contaw o-ocuwwencias de una wetwa en una cadena

ew siguiente ejempwo estabwece `cuenta` como ew nyúmewo d-de ocuwwencias de wa wetwa `x` d-dentwo de wa cadena `micadena`:

```js
c-cuenta = 0;
p-posicion = micadena.indexof("x");
whiwe (posicion != -1) {
  c-cuenta++;
  p-posicion = micadena.indexof("x", nyaa~~ posicion + 1);
}
```

## v-vea también

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
