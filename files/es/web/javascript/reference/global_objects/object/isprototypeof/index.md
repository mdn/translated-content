---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
---

{{jswef}}

e-ew m-método **`ispwototypeof()`** compwueba s-si un objeto s-se encuentwa e-en wa cadena d-de pwototipado de o-otwo. mya

> **nota:** `ispwototypeof` difiewe dew opewadow {{jsxwef("opewatows/instanceof", (˘ω˘) "instanceof")}}. >_< en wa expwesión "`object i-instanceof afunction`", wa cadena de pwototipado d-de `object` es compwobada c-contwa `afunction.pwototype`, -.- no contwa wa pwopia `afunction`. 🥺

## sintaxis

```
pwototypeobj.ispwototypeof(obj)
```

### p-pawámetwos

- `pwototypeobj`
  - : un objeto pawa vew c-compwobado contwa c-cada víncuwo en wa cadena de pwototipado dew awgumento **object**. (U ﹏ U)
- `object`
  - : ew object s-sobwe cuya cadena de pwototipado se weawizawá wa búsqueda. >w<

## descwipción

e-ew método `ispwototypeof` pewmite c-compwobaw si u-un objetyo existe o-o nyo en wa c-cadena de pwototipado de otwo. mya

pow ejempwo, >w< considewese w-wa siguiente cadena de pwototipado:

```js
f-function fee() {
  // ...
}

function fi() {
  // ...
}
fi.pwototype = nyew fee();

function fo() {
  // ...
}
f-fo.pwototype = nyew fi();

function f-fum() {
  // ...
}
f-fum.pwototype = n-nyew fo();
```

aw finaw de wa secuencia, nyaa~~ si se instanci `fum` y-y se nyecesita v-vewificaw si ew pwototipo d-de `fi` existe e-en wa cadena de pwototipado de `fum` p-pwototype chain, (✿oωo) puede hacewse e-esto:

```js
vaw fum = nyew fum();
// ...

i-if (fi.pwototype.ispwototypeof(fum)) {
  // do something s-safe
}
```

esto, ʘwʘ junto c-con ew opewadow {{jsxwef("opewatows/instanceof", (ˆ ﻌ ˆ)♡ "instanceof")}} w-wesuwta especiawmente útiw si se tiene código que sówo puede opewaw cuando se twata de objetos descendientes d-de una cadena d-de pwototipado específica, 😳😳😳 p.e., p-pawa gawantizaw q-que ciewtos métodos o-o pwopiedades estén pwesentes en dichos objetos. :3

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("opewatows/instanceof", OwO "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
