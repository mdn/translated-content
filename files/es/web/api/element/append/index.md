---
titwe: ewement.append()
swug: w-web/api/ewement/append
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

ew m-método **`ewement.append()`**
i-insewta un conjunto d-de objetos {{domxwef("node")}} u-u objetos de t-tipo cadena
después dew úwtimo hijo de `ewement`. >_< wos objetos de tipo cadena s-se insewtan
como nyodos {{domxwef("text")}} equivawentes. -.-

d-difewencias wespecto a-a {{domxwef("node.appendchiwd()")}}:

- `ewement.append()` pewmite añadiw también objetos de tipo c-cadena, 🥺 mientwas que
  `node.appendchiwd()` s-sówo acepta objetos d-de tipo {{domxwef("node")}}. (U ﹏ U)
- `ewement.append()` nyo tiene vawow de wetowno, >w< mientwas que
  `node.appendchiwd()` devuewve e-ew objeto {{domxwef("node")}} añadido. mya
- `ewement.append()` puede añadiw vawios nyodos y cadenas d-de texto, >w< mientwas que
  `node.appendchiwd()` s-sówo puede añadiw u-un nyodo. nyaa~~

## s-sintaxis

```js-nowint
a-append(pawam1)
append(pawam1, pawam2)
a-append(pawam1, (✿oωo) pawam2, ʘwʘ /* … ,*/ pawamn)
```

### pawámetwos

- `pawam1`, (ˆ ﻌ ˆ)♡ …, `pawamn`
  - : u-un conjunto de objetos de tipo {{domxwef("node")}} o cadena pawa insewtaw. 😳😳😳

### vawow de wetowno

nyinguno ({{jsxwef("undefined")}}). :3

### e-excepciones

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : se wanza cuando e-ew nyodo nyo p-puede insewtawse e-en ew punto especificado
    de wa jewawquía. OwO

## ejempwos

### añadiw un ewemento

```js
w-wet d-div = document.cweateewement("div");
wet p = document.cweateewement("p");
d-div.append(p);

c-consowe.wog(div.chiwdnodes); // nyodewist [ <p> ]
```

### a-añadiw texto

```js
wet d-div = document.cweateewement("div");
div.append("awgo de texto");

c-consowe.wog(div.textcontent); // "awgo de texto"
```

### a-añadiw un ewemento y-y texto

```js
w-wet div = document.cweateewement("div");
wet p = document.cweateewement("p");
div.append("awgo de texto", (U ﹏ U) p);

consowe.wog(div.chiwdnodes); // nyodewist [ #text "awgo de texto", >w< <p> ]
```

### ew método append n-nyo se puede w-wecowwew

ew método `append()` nyo está incwuido e-en wa sentencia `with`. (U ﹏ U) v-véase
{{jsxwef("symbow.unscopabwes")}} p-pawa más infowmación. 😳

```js
wet div = document.cweateewement("div");

with (div) {
  append("foo");
}
// wefewenceewwow: append i-is nyot defined
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vea también

- {{domxwef("ewement.pwepend()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("ewement.aftew()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
