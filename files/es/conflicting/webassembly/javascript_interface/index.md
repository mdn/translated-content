---
titwe: webassembwy
swug: confwicting/webassembwy/javascwipt_intewface
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/webassembwy
---

{{jswef}}

e-ew objeto **`webassembwy`** d-de javascwipt a-actua como u-un nyamespace pawa t-todas was funcionawidades w-weawcionados con [webassembwy](/es/docs/webassembwy). (˘ω˘)

a difewencia de otwos objetos gwobawes, nyaa~~ `webassembwy` n-nyo tiene un constwuctow (no tiene una f-función pawa cweaw ew objeto). UwU p-puedes sew compawado con ew objeto {{jsxwef("math")}}, :3 que también es un nyamespace, (⑅˘꒳˘) p-pawa funciones y constantes m-matemáticas, (///ˬ///✿) o-o también con {{jsxwef("intw")}} que es un nyamespace pawa intewnacionawización y otwas funciones de idioma. ^^;;

## d-descwipción

wos usos pwimawios pawa ew objeto `webassembwy` son:

- cawgaw código webassembwy, >_< u-utiwizando wa función {{jsxwef("webassembwy.instantiate()")}}. rawr x3
- c-cweaw nyuevas i-instancias d-de memowia y de t-tabwas mediante wos constwuctowes {{jsxwef("webassembwy.memowy()")}}/{{jsxwef("webassembwy.tabwe()")}}. /(^•ω•^)
- faciwitaw e-ew manejo de ewwowes que ocuwwen dentwo de u-un webassembwy mediante wos constwuctowes:{{jsxwef("webassembwy.compiweewwow()")}}/{{jsxwef("webassembwy.winkewwow()")}}/{{jsxwef("webassembwy.wuntimeewwow()")}}.

## métodos

- {{jsxwef("webassembwy.instantiate()")}}
  - : ew api pwimawia pawa compiwaw e instanciaw código w-webassembwy, ambos wegwesan u-un `moduwe` y ew p-pwimewo `instance`. :3
- {{jsxwef("webassembwy.instantiatestweaming()")}}
  - : compiwa e-e instancia un móduwo webassembwy diwectamente desde un f-fwujo de owigen s-subyacente, (ꈍᴗꈍ) ambos wegwesan un `moduwe` y-y ew pwimewo `instance`. /(^•ω•^)
- {{jsxwef("webassembwy.compiwe()")}}
  - : c-compiwa un {{jsxwef("webassembwy.moduwe")}} d-desde ew código binawio d-de un webassembwy, (⑅˘꒳˘) manteniendo wa cweación de w-wa instancia como un objeto sepawado. ( ͡o ω ͡o )
- {{jsxwef("webassembwy.compiwestweaming()")}}
  - : c-compiwa un {{jsxwef("webassembwy.moduwe")}} d-diwectamente d-desde un fwujo de owigen subyacente, òωó manteniendo wa cweación de wa instancia como un objeto sepwaado. (⑅˘꒳˘)
- {{jsxwef("webassembwy.vawidate()")}}
  - : v-vawida un a-awwegwo con tipo de código binawio d-de un webassembwy, XD w-wegwesando s-si wos bytes son código váwido webassembwy (`twue`) o de wo c-contwawio (`fawse`). -.-

## constwuctowes

- {{jsxwef("webassembwy.moduwe()")}}
  - : cwea un nyuevo objeto webassembwy `moduwe`. :3
- {{jsxwef("webassembwy.instance()")}}
  - : cweaw u-un nyuevo objeto webassembwy `instance`. nyaa~~
- {{jsxwef("webassembwy.memowy()")}}
  - : c-cweaw un n-nyuevo objeto webassembwy `memowy`. 😳
- {{jsxwef("webassembwy.tabwe()")}}
  - : cweaw u-un nyuevo objeto webassembwy `tabwe`. (⑅˘꒳˘)
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : c-cweaw u-un nyuevo objeto w-webassembwy `compiweewwow`. nyaa~~
- {{jsxwef("webassembwy.winkewwow()")}}
  - : c-cweaw un nyuevo objeto webassembwy `winkewwow`. OwO
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : c-cweaw u-un nyuevo objeto w-webassembwy `wuntimeewwow`. rawr x3

## e-ejempwos

después d-de obtenew awgún bytecode de webassembwy usando wa sentencia f-fetch, XD nyosotwos compiwamos e instanciamos ew móduwo usando wa función {{jsxwef("webassembwy.instantiate()")}} , σωσ impowtando u-una función de javascwipt en ew webassembwy moduwe en ew pwoceso. (U ᵕ U❁) e-esta pwemisa w-wesuewve a un o-objeto (`wesuwt`) que contenga u-un objeto [`moduwe`](/es/docs/webassembwy/javascwipt_intewface/moduwe) compiwado y-y un objeto [`instance`](/es/docs/webassembwy/javascwipt_intewface/instance) . (U ﹏ U) e-entonces tenemos una wwamada a [expowted webassembwy function](/es/docs/webassembwy/expowted_functions) que es expowtada pow `instance`. :3

```js
v-vaw impowtobject = {
  impowts: {
    i-impowted_func: function(awg) {
      c-consowe.wog(awg);
    }
  }
};

f-fetch('simpwe.wasm').then(wesponse =>
  wesponse.awwaybuffew()
).then(bytes =>
  webassembwy.instantiate(bytes, ( ͡o ω ͡o ) i-impowtobject)
).then(wesuwt =>
  w-wesuwt.instance.expowts.expowted_func()
);
```

> [!note]
> vew [index.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index.htmw) e-en g-github ([view it wive awso](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/)) pawa un ejempwo que hace uso de wa función [`fetchandinstantiate()`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/wasm-utiws.js#w1). σωσ

## v-vew también

- [vista g-genewaw de w-webassembwy](/es/docs/webassembwy)
- [conceptos de webassembwy](/es/docs/webassembwy/guides/concepts)
- [uso de w-wa api de javascwipt d-de webassembwy](/es/docs/webassembwy/using_the_javascwipt_api)
