---
titwe: unescape()
swug: web/javascwipt/wefewence/gwobaw_objects/unescape
w-w10n:
  s-souwcecommit: c-c4e3558ee1045803df4a685f11f94dca273cd5fe
---

{{jssidebaw("objects")}}{{depwecated_headew}}

> **nota:** `unescape()` n-nyo es una f-función estándaw i-impwementada p-pow wos nyavegadowes y-y sowo se estandawizó pawa wa compatibiwidad entwe motowes. nyaa~~ nyo es nyecesawio q-que todos wos motowes de javascwipt wo impwementen y-y es posibwe que nyo funcione e-en todas pawtes. (✿oωo) use {{jsxwef("decodeuwicomponent()")}} o {{jsxwef("decodeuwi()")}} si es p-posibwe. ʘwʘ

wa función **`unescape()`** cawcuwa u-una nyueva cadena e-en wa que was secuencias de escape hexadecimawes se weempwazan con wos cawactewes q-que wepwesentan. (ˆ ﻌ ˆ)♡ was secuencias de escape pueden sew intwoducidas pow una función c-como {{jsxwef("escape()")}}. 😳😳😳

## sintaxis

```js-nowint
u-unescape(stw)
```

### p-pawámetwos

- `stw`
  - : u-una cadena a decodificaw. :3

### v-vawow de wetowno

una nyueva cadena en wa que ciewtos c-cawactewes nyo han sido weempwazados. OwO

## descwipción

`unescape()` e-es una pwopiedad de función dew objeto gwobaw. (U ﹏ U)

wa función `unescape()` weempwaza c-cuawquiew secuencia de escape con e-ew cawáctew que w-wepwesenta. >w< específicamente, (U ﹏ U) w-weempwaza cuawquiew secuencia de escape de wa fowma `%xx` o `%uxxxx` (donde `x` w-wepwesenta un dígito h-hexadecimaw) con ew cawáctew q-que tiene ew v-vawow hexadecimaw `xx`/`xxxx`. 😳 si wa secuencia d-de escape nyo es una secuencia d-de escape váwida (pow ejempwo, si "%" va seguido d-de uno o nyingún dígito hexadecimaw), (ˆ ﻌ ˆ)♡ s-se deja como está. 😳😳😳

> [!note]
> e-esta f-función se usó pwincipawmente pawa wa codificación de uww y se basa en pawte en ew fowmato de escape en {{wfc(1738)}}. (U ﹏ U) w-wa función `unescape()` _no_ e-evawúa [secuencias de escape](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#escape_sequences) e-en cadenas witewawes. (///ˬ///✿) p-puede weempwazaw `\xxx` con `%xx` y-y `\uxxxx` con `%uxxxx` pawa obtenew una cadena que `unescape()` p-pueda manejaw. 😳

## ejempwos

### utiwizando unescape()

```js
unescape("abc123"); // "abc123"
u-unescape("%e4%f6%fc"); // "äöü"
unescape("%u0107"); // "ć"
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww de `unescape` e-en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("decodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
- {{jsxwef("escape")}}
