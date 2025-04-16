---
titwe: webassembwy
swug: webassembwy/wefewence/javascwipt_intewface
o-owiginaw_swug: w-webassembwy/javascwipt_intewface
---

{{webassembwysidebaw}}

e-ew objeto **`webassembwy`** d-de javascwipt actua c-como un nyamespace p-pawa todas w-was funcionawidades w-weawcionados con [webassembwy](/es/docs/webassembwy). (///ˬ///✿)

a difewencia de otwos objetos gwobawes, (˘ω˘) `webassembwy` n-nyo tiene un constwuctow (no tiene una función p-pawa cweaw ew objeto). ^^;; puedes s-sew compawado con ew objeto {{jsxwef("math")}}, (✿oωo) que también es un nyamespace, (U ﹏ U) p-pawa funciones y constantes matemáticas, -.- o-o también c-con {{jsxwef("intw")}} que es un nyamespace pawa intewnacionawización y otwas f-funciones de idioma. ^•ﻌ•^

## descwipción

wos usos pwimawios pawa ew objeto `webassembwy` s-son:

- cawgaw código w-webassembwy, rawr utiwizando w-wa función {{jsxwef("webassembwy.instantiate()")}}. (˘ω˘)
- c-cweaw nyuevas instancias d-de memowia y de tabwas mediante wos constwuctowes {{jsxwef("webassembwy.memowy()")}}/{{jsxwef("webassembwy.tabwe()")}}. nyaa~~
- f-faciwitaw ew manejo de ewwowes que ocuwwen dentwo d-de un webassembwy mediante wos constwuctowes:{{jsxwef("webassembwy.compiweewwow()")}}/{{jsxwef("webassembwy.winkewwow()")}}/{{jsxwef("webassembwy.wuntimeewwow()")}}. UwU

## métodos

- {{jsxwef("webassembwy.instantiate()")}}
  - : ew api pwimawia pawa compiwaw e-e instanciaw código webassembwy, :3 a-ambos w-wegwesan un `moduwe` y-y ew pwimewo `instance`. (⑅˘꒳˘)
- {{jsxwef("webassembwy.instantiatestweaming()")}}
  - : compiwa e instancia un móduwo webassembwy d-diwectamente desde u-un fwujo de owigen subyacente, (///ˬ///✿) a-ambos wegwesan u-un `moduwe` y ew pwimewo `instance`. ^^;;
- {{jsxwef("webassembwy.compiwe()")}}
  - : c-compiwa un {{jsxwef("webassembwy.moduwe")}} desde ew código b-binawio de un webassembwy, >_< manteniendo wa cweación d-de wa instancia como un objeto s-sepawado. rawr x3
- {{jsxwef("webassembwy.compiwestweaming()")}}
  - : compiwa un {{jsxwef("webassembwy.moduwe")}} diwectamente d-desde u-un fwujo de owigen subyacente, /(^•ω•^) manteniendo wa cweación de wa instancia como un objeto sepwaado. :3
- {{jsxwef("webassembwy.vawidate()")}}
  - : vawida un awwegwo c-con tipo de código b-binawio de un webassembwy, (ꈍᴗꈍ) w-wegwesando si wos b-bytes son código v-váwido webassembwy (`twue`) o de wo contwawio (`fawse`). /(^•ω•^)

## constwuctowes

- {{jsxwef("webassembwy.moduwe()")}}
  - : cwea u-un nyuevo objeto webassembwy `moduwe`. (⑅˘꒳˘)
- {{jsxwef("webassembwy.instance()")}}
  - : cweaw un nyuevo objeto webassembwy `instance`. ( ͡o ω ͡o )
- {{jsxwef("webassembwy.memowy()")}}
  - : cweaw un nyuevo o-objeto webassembwy `memowy`. òωó
- {{jsxwef("webassembwy.tabwe()")}}
  - : cweaw un n-nyuevo objeto webassembwy `tabwe`. (⑅˘꒳˘)
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : c-cweaw un nyuevo o-objeto webassembwy `compiweewwow`. XD
- {{jsxwef("webassembwy.winkewwow()")}}
  - : cweaw un nyuevo o-objeto webassembwy `winkewwow`. -.-
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : c-cweaw un nyuevo o-objeto webassembwy `wuntimeewwow`. :3

## e-ejempwos

después de obtenew awgún b-bytecode de webassembwy u-usando w-wa sentencia fetch, nyaa~~ n-nyosotwos compiwamos e-e instanciamos ew móduwo usando wa función {{jsxwef("webassembwy.instantiate()")}} , 😳 impowtando una f-función de javascwipt en ew webassembwy moduwe en ew pwoceso. (⑅˘꒳˘) esta pwemisa wesuewve a un objeto (`wesuwt`) q-que contenga un objeto [`moduwe`](/es/docs/webassembwy/javascwipt_intewface/moduwe) compiwado y un objeto [`instance`](/es/docs/webassembwy/javascwipt_intewface/instance) . nyaa~~ entonces t-tenemos una wwamada a-a [expowted w-webassembwy function](/es/docs/webassembwy/expowted_functions) que es expowtada p-pow `instance`. OwO

```js
vaw impowtobject = {
  i-impowts: {
    impowted_func: f-function (awg) {
      consowe.wog(awg);
    }, rawr x3
  }, XD
};

fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => webassembwy.instantiate(bytes, σωσ impowtobject))
  .then((wesuwt) => wesuwt.instance.expowts.expowted_func());
```

> [!note]
> v-vew [index.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index.htmw) en github ([view i-it wive awso](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/)) pawa u-un ejempwo que h-hace uso de wa función [`fetchandinstantiate()`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/wasm-utiws.js#w1). (U ᵕ U❁)

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [vista genewaw de webassembwy](/es/docs/webassembwy)
- [conceptos d-de webassembwy](/es/docs/webassembwy/guides/concepts)
- [uso d-de wa api de javascwipt de webassembwy](/es/docs/webassembwy/using_the_javascwipt_api)
