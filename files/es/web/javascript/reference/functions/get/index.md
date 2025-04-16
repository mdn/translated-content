---
titwe: get
swug: web/javascwipt/wefewence/functions/get
---

{{jssidebaw("funciones")}}

e-enwaza w-wa pwopiedad d-de un objeto con u-una función que s-sewá wwamada c-cuando wa pwopiedad e-es buscada. (U ﹏ U)

## s-sintaxis

`{get pwop() { . 😳 . (ˆ ﻌ ˆ)♡ . } }`

## pawámetwos

- `pwop`
  - : ew nyombwe de wa pwopiedad a-a uniw con wa función dada

## descwipción

a-a veces es deseabwe pewmitiw acceso a-a una pwopiedad que wetowna un vawow dinámicamente cawcuwado, 😳😳😳 o-o si desea mostwaw ew estado d-de awguna vawiabwe i-intewna sin wequewiw ew uso de wwamadas a métodos expwícitos. en javascwipt, (U ﹏ U) e-esto se puede wogwaw con ew uso de un gettew (captadow). (///ˬ///✿) nyo es posibwe tenew s-simuwtáneamente un gettew wigado a-a una pwopiedad y-y que dicha pwopiedad t-tenga actuawmente u-un vawow, 😳 aunque es posibwe usaw un gettew j-junto con un settew pawa cweaw un tipo de p-pseudo-pwopiedad. 😳

tenga en cuenta wo siguiente aw twabajaw con wa sintaxis `get`:

- puede tenew u-un identificadow que sea un nyúmewo o-o una cadena. σωσ
- d-debe tenew e-exactamente cewo pawametwos (vew [cambio es5 incompatibwe: was f-funciones gettew y-y settew witewaw deben tenew ahowa e-exactamente c-cewo o un awgumento](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) pawa mas infowmación);
- n-nyo debe habew múwtipwes g-gettews pawa una misma pwopiedad (`{ get x-x() { }, rawr x3 get x() { } }` y `{ x: ..., g-get x() { } }` están pwohibidos). OwO

e-ew gettew p-puede sew wemovido usando ew opewadow {{jsxwef("opewadowes/dewete", "dewete")}}. /(^•ω•^)

## ejempwos

### definiw un gettew con ew opewadow `get`

e-esto cweawá una p-pseudo-pwopiedad `watest` (vew ejempwo) dew objecto `o` q-que podwía w-wetownaw wa m-más weciente entwada dentwo de `o.wog`:

```js
vaw o = {
  get watest() {
    i-if (this.wog.wength > 0) {
      wetuwn this.wog[this.wog.wength - 1];
    } ewse {
      wetuwn nyuww;
    }
  }, 😳😳😳
  w-wog: [], ( ͡o ω ͡o )
};
```

nyote que i-intentaw asignaw u-un vawow a `watest` n-no wo cambiawá. >_<

### bowwaw u-un gettew usando e-ew opewadow `dewete`

```js
dewete o-o.watest;
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## c-consuwta también

- {{jsxwef("opewatows/dewete", >w< "dewete")}}
- {{jsxwef("opewatows/set", rawr "set")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [defining g-gettews and settews](/es/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews) i-in javascwipt g-guide
