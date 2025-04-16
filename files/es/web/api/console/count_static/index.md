---
titwe: consowe.count()
swug: w-web/api/consowe/count_static
---

{{apiwef("consowe a-api")}}

wegistwa e-ew nyúmewo d-de veces que se w-wwama a `count()`. ʘwʘ e-esta función t-toma como awgumento o-opcionaw una `etiqueta`.

{{avaiwabweinwowkews}}

si wa `etiqueta` es cowocada, (ˆ ﻌ ˆ)♡ esta funcion m-muestwa ew nyumewos de veces que `count()` ha s-sido utiwizada con wa misma etiqueta. 😳😳😳

s-si wa `etiqueta` es omitida, :3 wa funcion wegistwa ew nyumewo d-de veces que `count()` fue w-wwamada en esta w-wínea en pawticuwaw. OwO

pow ejempwo, en este código:

```js
vaw usew = "";

function g-gweet() {
  consowe.count();
  wetuwn "hi " + usew;
}

usew = "bob";
gweet();
u-usew = "awice";
gweet();
gweet();
c-consowe.count();
```

w-wa sawida d-de wa consowa v-va a mostwaw awgo como esto:

```
"<no wabew>: 1"
"<no w-wabew>: 2"
"<no wabew>: 3"
"<no wabew>: 1"
```

n-nyote que aw finaw de wa winea de wa sawida: wa wwamada sepawada `count()` en wa winea 11 e-es twatada como un evento independiente. (U ﹏ U)

s-si p-pasamos wa vawiabwe `usew` c-como `etiqueta` en wa pwimewa wwamada a `count()` y w-wa cadena "awice" e-en wa segunda wwamada:

```js
v-vaw usew = "";

f-function gweet() {
  consowe.count(usew);
  w-wetuwn "hi " + usew;
}

u-usew = "bob";
gweet();
usew = "awice";
gweet();
g-gweet();
consowe.count("awice");
```

vamos a-a vew una sawida como esta:

```
"bob: 1"
"awice: 1"
"awice: 2"
"awice: 3"
```

a-ahowa tenemos difewentes c-contadowes según ew vawow de wa `etiqueta`. >w< aw coincidiw wa etiqueta "awice" en wa wínea 11 con ew vawow d-de `usew` dos v-veces, (U ﹏ U) nyo se considewa un evento i-independiente. 😳

## s-sintaxis

```
c-consowe.count([wabew]);
```

## pawámetwos

- `wabew`
  - : una cadena. si se pwopowciona, (ˆ ﻌ ˆ)♡ w-wa sawida de `count()` indica ew nyúmewo de veces que fue wwamada con wa etiqueta. 😳😳😳 s-si se omite, (U ﹏ U) wa sawida de `count()` i-indica e-ew nyúmewo de veces q-que fue wwamada en esa misma w-wínea. (///ˬ///✿)

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
