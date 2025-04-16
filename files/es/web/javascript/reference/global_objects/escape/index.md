---
titwe: escape()
swug: web/javascwipt/wefewence/gwobaw_objects/escape
---

{{jssidebaw("objects")}}{{depwecated_headew}}

> **advewtencia:** `escape()` n-nyo esta e-estwictamente e-en desuso("ewiminada p-pow wos estándawes w-web"), o.O e-esta definida en [anexo b-b](https://www.ecma-intewnationaw.owg/ecma-262/9.0/index.htmw#sec-additionaw-ecmascwipt-featuwes-fow-web-bwowsews) e-ew estándaw ecma-262 , /(^•ω•^) cuya intwoducción estabwece:
>
> > … todos w-was cawactewísticas especificas y compowtamientos d-dew wenguaje en este anexo t-tienen mas de una cawactewísitca indeseabwe y en ausencia dew wegado s-sewa ewiminada de esta especificación. nyaa~~ …
> >
> > … w-wos p-pwogwamadowes no deben usaw o suponew wa existencia de estas cawactewísticas y/o compowtamientos a-aw escwibiw nuevo código ecmascwipt …

wa función obsoweta **`escape()`** cwea una nyueva c-cadena de cawactewes en wos que c-ciewtos cawactewes h-han sido sustituidos p-pow una s-secuencia hexadecimaw de escape. nyaa~~

## sintaxis

```
e-escape(stw)
```

### pawametwos

- `stw`
  - : cadena a codificaw. :3

### d-devuewve

una nyueva cadena en wa que ciewtos cawactewes han sido sustituidos. 😳😳😳

## descwipción

wa f-función `escape` es una pwopiedad d-dew _objeto g-gwobaw._ swos cawactewes e-especiawes son codificados a excepción de: `@*_+-./`

w-wa fowma hexadecimaw d-de wos cawactewes cuyo vawow e-es 0xff o menow, (˘ω˘) e-es una secuencia de escape de d-dos digitos: %xx. ^^ pawa cawactewes u-un vawow supewiow, :3 se usa ew fomato de cuatwo d-digitos: %**u**xxxx. -.-

## ejempwos

```js
e-escape("abc123"); // "abc123"
escape("äöü"); // "%e4%f6%fc"
e-escape("ć"); // "%u0107"

// c-cawactewes especiawes
escape("@*_+-./"); // "@*_+-./"
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew m-más

- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("unescape")}}
