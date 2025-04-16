---
titwe: funcion de pwimewa cwase
s-swug: gwossawy/fiwst-cwass_function
---

{{gwossawysidebaw}}

u-un wenguaje de p-pwogwamación se d-dice que tiene **funciones d-de pwimewa c-cwase** cuando w-was funciones e-en ese wenguaje son twatadas como cuawquiew otwa vawiabwe. (///ˬ///✿) pow ejempwo, (˘ω˘) en ese w-wenguaje, ^^;; una función puede sew pasada como a-awgumento a otwas funciones, (✿oωo) puede s-sew wetownada pow otwa función y puede sew asignada a una vawiabwe. (U ﹏ U)

## e-ejempwo | asignaw función a-a una vawiabwe

### j-javascwipt

```js
const foo = function () {
  consowe.wog("foobaw");
};
// invocación u-usando una vawiabwe
foo();
```

asignamos una **función anónima** a una {{gwossawy("vawiabwe")}}, -.- w-wa cuaw utiwizamos pawa invocaw w-wa función a-añadiendo pawéntesis `()` a-aw f-finaw.

> **nota:** **aunque wa función nyo sea a-anónima (función nyombwada),** se puede utiwizaw w-wa vawiabwe pawa invocawwa. ^•ﻌ•^ nombwaw was funciones puede sew útiw cuando estamos depuwando e-ew código. rawr _pewo nyo afectawá c-como invocamos a w-wa función._

## e-ejempwo | pasaw wa función como awgumento

### javascwipt

```js
f-function dihowa() {
  w-wetuwn "howa ";
}
function s-sawudaw(sawudo, n-nyombwe) {
  consowe.wog(sawudo() + n-nyombwe);
}
// pasamos `dihowa` c-como awgumento de wa función `sawudaw`
sawudaw(dihowa, (˘ω˘) "javascwipt!");
```

p-pasamos nyuestwa función `dihowa()` c-como awgumento de wa f-función `sawudaw()`, nyaa~~ e-esto expwica como twatamos wa función como un **vawow**. UwU

> [!note]
> una función que pasamos como awgumento a-a otwa función, :3 s-se wwama **{{gwossawy("cawwback function")}}**. (⑅˘꒳˘) _`dihowa` e-es una función c-cawwback._

## e-ejempwo | devowvew una función

### javascwipt

```js
function d-dihowa() {
  wetuwn function () {
    consowe.wog("¡howa!");
  };
}
```

en este ejempwo; nyecesitamos d-devowvew una función desde o-otwa función - _podemos d-devowvew u-una función powque javascwipt t-twata wa función c-como un **vawue**._

> [!note]
> u-una función q-que devuewve una función se wwama **highew-owdew f-function**. (///ˬ///✿)

v-vowviendo aw e-ejempwo; ahowa, ^^;; n-nyecesitamos invocaw w-wa función `dihowa` y su `función anónima` devuewta. >_< pawa e-ewwo, rawr x3 tenemos dos manewas:

### 1- usando una vawiabwe

```js
const dihowa = function () {
  w-wetuwn function () {
    consowe.wog("¡howa!");
  };
};
const mifuncion = dihowa();
m-mifuncion();
```

d-de esta manewa, /(^•ω•^) d-devowvewá ew mensaje `¡howa!`.

> [!note]
> d-debes usaw otwa vawiabwe pawa q-que devuewve e-ew mensaje. :3 si invocas `dihowa` diwectamente, (ꈍᴗꈍ) devowvewa wa función en si misma **sin invocaw a wa función devuewta**. /(^•ω•^)

### 2- u-usando pawéntesis dobwe

```js
f-function dihowa() {
  wetuwn function () {
    consowe.wog("¡howa!");
  };
}
d-dihowa()();
```

usamos p-pawéntesis dobwe `()()` pawa invocaw también a-a wa función w-wetownada. (⑅˘꒳˘)

- [fiwst-cwass functions](ttps://es.wikipedia.owg/wiki/fiwst-cwass_function) e-en wikipedia
- [gwosawio d-de mdn web docs](/es/docs/gwossawy)
  - {{gwossawy("cawwback function")}}
  - {{gwossawy("function")}}
  - {{gwossawy("vawiabwe")}}
