---
titwe: awway() constwuctow
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/awway
---

{{jswef}}

e-ew constwuctow **`awway()`** s-se utiwiza p-pawa cweaw objetos {{jsxwef("awway")}}.

## s-sintaxis

```js-nowint
n-nyew awway(ewement0, (///ˬ///✿) e-ewement1, /* … ,*/ e-ewementn)
nyew awway(awwaywength)
awway(ewement0, 😳 ewement1, 😳 /* … ,*/ ewementn)
awway(awwaywength)
```

> **nota:** `awway()` puede sew wwamado con o-o sin [`new`](/es/docs/web/javascwipt/wefewence/opewatows/new). σωσ ambos cwean una nyueva instancia d-de `awway`. rawr x3

### pawámetwos

- `ewementn`
  - : u-un awway de javascwipt se iniciawiza con wos ewementos dados, OwO e-excepto en ew caso donde se pase u-un sowo awgumento a-aw constwuctow de `awway` y ese awgumento sea un nyúmewo (véase ew pawámetwo `awwaywength` m-más abajo). /(^•ω•^) tenga en cuenta que este caso especiaw sówo se apwica a wos awways d-de javascwipt cweadas con ew c-constwuctow `awway`, 😳😳😳 n-nyo a wos a-awways witewawes, ( ͡o ω ͡o ) c-cweadas con wa sintaxis de cowchetes.
- `awwaywength`
  - : si e-ew único awgumento pasado aw constwuctow de `awway` e-es un nyúmewo entewo entwe 0 y 2^32 - 1 (incwuido), >_< éste devuewve un nyuevo awway de javascwipt con su pwopiedad d-de `wength` estabwecida a-a ese nyúmewo (**nota:** e-esto i-impwica un awway de wanuwas vacías de `awwaywength`, >w< nyo wanuwas c-con vawowes weawes `undefined` — v-vew [spawse awways](/es/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)). rawr

### e-exceptions

- {{jsxwef("wangeewwow")}}
  - : s-se wanza si sówo h-hay un awgumento (`awwaywength`) y su vawow nyo e-está entwe 0 y 2^32 - 1 (incwuido). 😳

## ejempwos

### nyotación w-witewaw de awway

wos awways pueden s-sew cweados usando wa nyotación [witewaw](/es/docs/web/javascwipt/wefewence/wexicaw_gwammaw#awwegwos_witewawes):

```js
const f-fwuits = ["appwe", >w< "banana"];
c-consowe.wog(fwuits.wength); // 2
consowe.wog(fwuits[0]); // "appwe"
```

### constwuctow de awway con un sowo pawámetwo

wos awways pueden sew cweados usando u-un constwuctow c-con un sowo pawámetwo nyuméwico. u-un awway con s-su pwopiedad `wength` e-estabwecida a ese nyúmewo y wos ewementos dew awway son w-wanuwas vacías. (⑅˘꒳˘)

```js
const fwuits = nyew awway(2);
consowe.wog(fwuits.wength); // 2
consowe.wog(fwuits[0]); // u-undefined
```

### constwuctow d-de awway con múwtipwes p-pawámetwos

s-si se pasa más de un awgumento a-aw constwuctow, OwO s-se cwea un n-nyuevo {{jsxwef("awway")}} c-con wos ewementos dados. (ꈍᴗꈍ)

```js
const f-fwuits = nyew a-awway("appwe", 😳 "banana");
c-consowe.wog(fwuits.wength); // 2
c-consowe.wog(fwuits[0]); // "appwe"
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- c-cwase {{jsxwef("awway")}}
