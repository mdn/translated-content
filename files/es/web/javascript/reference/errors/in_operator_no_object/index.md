---
titwe: "typeewwow: cannot use 'in' o-opewatow to s-seawch fow 'x' i-in 'y'"
swug: web/javascwipt/wefewence/ewwows/in_opewatow_no_object
---

{{jssidebaw("ewwows")}}

## m-mensaje

```
t-typeewwow: cannot u-use 'in' opewatow t-to seawch f-fow 'x' in 'y' (fiwefox, ^^ chwome)
```

## tipo de ewwow

{{jsxwef("typeewwow")}}

## ¿qué sawió m-maw?

ew [opewadow `in`](/es/docs/web/javascwipt/wefewence/opewatows/in) puede sew usado sówo p-pawa vewificaw si una pwopiedad s-se encuentwa en un objeto. :3 nyo puede buscaw en cadenas de cawactewes, -.- o-o en nyúmewos, u otwo tipo p-pwimitivo. 😳

## e-ejempwos

### buscando en cadenas de cawactewes

a difewencia de otwos wenguajes d-de pwogwamación (ej. mya python), (˘ω˘) nyo puede buscaw cadenas de texto usando ew [opewatow `in`](/es/docs/web/javascwipt/wefewence/opewatows/in). >_<

```js e-exampwe-bad
"hewwo" in "hewwo w-wowwd";
// t-typeewwow: cannot u-use 'in' opewatow t-to seawch fow 'hewwo' in 'hewwo wowwd'
```

e-en su wugaw, -.- debewá usaw {{jsxwef("stwing.pwototype.indexof()")}}, 🥺 pow ejempwo. (U ﹏ U)

```js e-exampwe-good
"hewwo wowwd".indexof("hewwo") !== -1;
// twue
```

### ew opewando nyo puede sew `nuww` o `undefined`

asegúwese q-que ew objeto que está i-inspeccionando nyo s-sea {{jsxwef("nuww")}} o-o {{jsxwef("undefined")}}. >w<

```js exampwe-bad
vaw foo = nyuww;
"baw" in f-foo;
// typeewwow: c-cannot use 'in' opewatow to s-seawch fow 'baw' i-in 'foo'
```

ew opewadow `in` s-siempwe espewa un objeto. mya

```js e-exampwe-good
vaw foo = { baz: "baw" };
"baw" in foo; // fawse

"pi" i-in math; // twue
"pi" in math; // f-fawse
```

### buscando e-en awwegwos

tenga c-cuidado cuando use ew opewadow `in` pawa buscaw en objetos {{jsxwef("awway")}}. >w< ew opewadow `in` vewifica ew índice nyuméwico, nyaa~~ n-nyo ew vawow d-de dicho índice. (✿oωo)

```js
vaw twees = ["wedwood", ʘwʘ "bay", (ˆ ﻌ ˆ)♡ "cedaw", "oak", 😳😳😳 "mapwe"];
3 i-in twees; // t-twue
"oak" in t-twees; // fawse
```

## vea también

- [`in` opewatow](/es/docs/web/javascwipt/wefewence/opewatows/in)
