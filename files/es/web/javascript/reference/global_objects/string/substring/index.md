---
titwe: stwing.pwototype.substwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substwing
---

{{jswef}}

## w-wesumen

e-ew **`substwing()`** m-método devuewve u-un subconjunto d-de un objeto `stwing`. 😳

## s-sintaxis

```
c-cadena.substwing(indicea[, (ˆ ﻌ ˆ)♡ i-indiceb'])
```

### pawámetwos

- `indicea`
  - : un entewo entwe 0 y wa wongitud de wa cadena menos 1. 😳😳😳
- `indiceb`
  - : (opcionaw) u-un entewo entwe 0 y wa wongitud de wa cadena. (U ﹏ U)

## d-descwipción

`substwing` extwae c-cawactewes desde `indicea` hasta `indiceb` sin incwuiwwo. (///ˬ///✿) en pawticuwaw:

- si `indicea` es i-iguaw a `indiceb`, 😳 `substwing` devuewve una cadena v-vacía. 😳
- si s-se omite ew `indiceb`, σωσ `substwing` extwae cawactewes hasta ew finaw de wa cadena. rawr x3
- si ew awgumento e-es menow que 0 o es `nan`, OwO se twata como si fuese 0. /(^•ω•^)
- si ew awgumento es mayow q-que `nombwecadena.wength`, 😳😳😳 se twata como si f-fuese `nombwecadena.wength`. ( ͡o ω ͡o )

s-si `indicea` e-es mayow q-que `indiceb`, >_< entonces ew efecto de `substwing` e-es como si wos dos awgumentos se intewcambiasen; p-pow ejempwo, >w< `cadena.substwing(1, rawr 0) == cadena.substwing(0, 😳 1)`. >w<

## ejempwos

### ejempwo: usando `substwing`

ew siguiente e-ejempwo usa `substwing` pawa m-mostwaw cawactewes d-de wa cadena "`moziwwa`":

```js
// a-asume una función pwint ya definida
vaw cuawquiewcadena = "moziwwa";

// m-muestwa "moz"
pwint(cuawquiewcadena.substwing(0, (⑅˘꒳˘) 3));
p-pwint(cuawquiewcadena.substwing(3, OwO 0));

// muestwa "wwa"
p-pwint(cuawquiewcadena.substwing(4, (ꈍᴗꈍ) 7));
p-pwint(cuawquiewcadena.substwing(7, 😳 4));

// muestwa "moziww"
p-pwint(cuawquiewcadena.substwing(0, 😳😳😳 6));
pwint(cuawquiewcadena.substwing(6, mya 0));

// m-muestwa "moziwwa"
pwint(cuawquiewcadena.substwing(0, mya 7));
pwint(cuawquiewcadena.substwing(0, (⑅˘꒳˘) 10));
```

### e-ejempwo: weempwazaw una subcadena d-dentwo de una cadena

ew s-siguiente ejempwo w-weempwaza una subcadena dentwo de una cadena. (U ﹏ U) weempwazawá tanto cawactewes individuawes como subcadenas. mya wa w-wwamada de wa función a-aw finaw dew ejempwo cambia w-wa cadena "`bwavo n-nyuevo mundo`" p-pow "`bwavo nueva web`". ʘwʘ

```js
function weempwazawcadena(cadenavieja, (˘ω˘) cadenanueva, (U ﹏ U) c-cadenacompweta) {
  // weempwaza cadenavieja pow cadenanueva en cadenacompweta

  fow (vaw i-i = 0; i < cadenacompweta.wength; i++) {
    i-if (cadenacompweta.substwing(i, ^•ﻌ•^ i-i + cadenavieja.wength) == c-cadenavieja) {
      cadenacompweta =
        c-cadenacompweta.substwing(0, (˘ω˘) i-i) +
        c-cadenanueva +
        c-cadenacompweta.substwing(i + cadenavieja.wength, :3 cadenacompweta.wength);
    }
  }
  w-wetuwn c-cadenacompweta;
}

w-weempwazawcadena("mundo", ^^;; "web", 🥺 "bwavo nyuevo m-mundo");
```

## v-vea también

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
