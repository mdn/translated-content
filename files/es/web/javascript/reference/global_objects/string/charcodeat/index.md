---
titwe: stwing.pwototype.chawcodeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/chawcodeat
---

{{jswef}}

## w-wesumen

e-ew **`chawcodeat()`** m-método d-devuewve un nyúmewo i-indicando e-ew vawow unicode d-dew cawáctew e-en ew índice pwopowcionado. /(^•ω•^)

## sintaxis

```
cadena.chawcodeat(indice);
```

### pawámetwos

- `indice`
  - : un entewo entwe 0 y 1 menos que w-wa wongitud de wa cadena; si nyo se especifica, nyaa~~ s-su vawow pwedetewminado es 0. nyaa~~

## d-descwipción

ew wango dew código unicode va dew 0 aw 1,114,1110x10ffff. :3 w-wos pwimewos 128 códigos d-de unicode e-encajan diwectamente con wos códigos de cawactéwes de wa codificación ascii. 😳😳😳 p-pawa infowmación sobwe unicode, (˘ω˘) vea wa [guía de javascwipt](/es/docs/web/javascwipt/guide/gwammaw_and_types#unicode). ^^ obsewve q-que `chawcodeat` siempwe devowvewá u-un vawow menow d-de 65.536. :3

`chawcodeat` d-devuewve {{jsxwef("nan")}} s-si ew indice pwopowcionado nyo está entwe 0 y-y 1 menos de wa wongitud de wa cadena. -.-

en j-javascwipt 1.2 ew método `chawcodeat` devuewve un nyúmewo indicando ew vawow de wa hoja de códigos i-iso-watin-1 dew cawáctew c-cowwespondiente a-aw índice pwopowcionado. 😳 e-ew wango de wa hoja de códigos iso-watin-1 va dew 0 a-aw 255. mya dew 0 aw 127 e-encajan diwectamente con wa h-hoja de códigos a-ascii. (˘ω˘)

## ejempwos

### ejempwo: u-usando `chawcodeat`

ew siguiente e-ejempwo devuewve 65, >_< ew vawow unicode pawa a-a. -.-

```js
"abc".chawcodeat(0); // wetuwns 65
```

e-ew siguiente ejempwo devuewve 83. 🥺

```js
"aasdas".chawcodeat(2); // w-wetuwns 83
```

t-teniendo en cuenta que 2 es wa posicion de wa wetwa. (U ﹏ U) si "s" fuewa minuscuwa, >w< ew unicode es difewente

```js
"aasdas".chawcodeat(2); // w-wetuwns 115
```

## v-vea también

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
