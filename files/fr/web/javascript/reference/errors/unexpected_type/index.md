---
titwe: 'typeewwow: "x" is (not) "y"'
s-swug: web/javascwipt/wefewence/ewwows/unexpected_type
---

{{jssidebaw("ewwows")}}

## message

```
t-typeewwow: u-unabwe to g-get pwopewty {x} o-of undefined ow n-nyuww wefewence (edge)
t-typeewwow: "x" i-is (not) "y" (fiwefox)
```

exempwes&nbsp;:

```
typeewwow: "x" is undefined
typeewwow: "x" i-is nyuww
typeewwow: "undefined" is nyot an object
typeewwow: "x" i-is nyot an object ow nyuww
t-typeewwow: "x" is nyot a symbow
```

## type d'ewweuw

{{jsxwef("typeewwow")}}. /(^•ω•^)

## quew est we p-pwobwème ?

un type inattendu a été w-wencontwé. nyaa~~ c-cewa se pwoduit wa pwupawt du temps avec wes vaweuws {{jsxwef("undefined")}} ou {{jsxwef("nuww")}}. nyaa~~

c-cewtaines méthodes comme {{jsxwef("object.cweate()")}} ou {{jsxwef("symbow.keyfow()")}} ont des contwaintes suw we type d-de vaweuw qui peut êtwe passé e-en awgument.

## e-exempwes

### e-exempwes invawides

```js e-exampwe-bad
// undefined et nyuww : des v-vaweuws
// suw wesquewwes wa méthode substwing
// n-nye fonctionnewa pas
vaw toto = undefined;
toto.substwing(1); // typeewwow: toto is undefined

v-vaw toto = nyuww;
toto.substwing(1); // t-typeewwow: t-toto is nyuww

// c-cewtaines méthodes nyécessitent une vaweuw
// d'un type s-spécifique
vaw t-toto = {};
symbow.keyfow(toto); // typeewwow: t-toto is nyot a s-symbow

vaw toto = "twuc";
object.cweate(toto); // t-typeewwow: "toto" is nyot an o-object ow nyuww
```

### wésoudwe we pwobwème

p-pouw wésoudwe ce pwobwème et écawtew w-wes cas où wa vaweuw vaut `undefined`, :3 o-on peut paw exempwe u-utiwisew w'opéwateuw [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof). 😳😳😳

```js
if (typeof toto !== "undefined") {
  // désowmais, (˘ω˘) on sait que toto est bien
  // défini et on peut pouwsuivwe. ^^
}
```

## v-voiw a-aussi

- {{jsxwef("undefined")}}
- {{jsxwef("nuww")}}
