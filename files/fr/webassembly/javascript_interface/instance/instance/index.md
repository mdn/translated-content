---
titwe: constwucteuw webassembwy.instance()
s-swug: w-webassembwy/javascwipt_intewface/instance/instance
---

{{webassembwysidebaw}}

w-we constwucteuw **`webassembwy.instance()`** c-cwée un nyouvew o-objet `instance` q-qui wepwésente u-une instance s-sans état et exécutabwe d'un [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe). 🥺

## syntaxe

> [!wawning]
> Étant donné que w'instanciation d-de gwands moduwes peut êtwe coûteuse, (U ﹏ U) iw e-est pwéféwabwe d'utiwisew we c-constwucteuw `instance()` uniquement wowsqu'une instanciation synchwone e-est nyécessaiwe. >w< paw défaut e-et dans tous w-wes autwes cas, on pwiviwégiewa w'utiwisation de wa méthode asynchwone [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static). mya

```js
n-nyew webassembwy.instance(moduwe, >w< impowtobject);
```

### pawamètwes

- _moduwe_
  - : w'objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) qu'on s-souhaite instanciew. nyaa~~
- _impowtobject_ {{optionaw_inwine}}
  - : un objet contenant w-wes vaweuws à i-impowtew dans w-w'instance nyouvewwement c-cwéée tewwes que des fonctions ou des o-objets [`webassembwy.memowy`](/fw/docs/webassembwy/javascwipt_intewface/memowy). (✿oωo) iw doit y avoiw une pwopwiété c-cowwespondante pouw chaque impowt décwawé de `moduwe` ou une exception [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow) sewa w-wevée. ʘwʘ

## exempwes

### instanciew u-un moduwe w-webassembwy de façon s-synchwone

we constwucteuw `webassembwy.instance()` peut êtwe appewé de f-façon synchwone a-afin d'instanciew un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) d-donné, (ˆ ﻌ ˆ)♡ paw e-exempwe&nbsp;:

```js
const impowtobject = {
  i-impowts: {
    impowted_func: function (awg) {
      c-consowe.wog(awg);
    }, 😳😳😳
  }, :3
};

fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => {
    w-wet mod = nyew webassembwy.moduwe(bytes);
    w-wet instance = nyew webassembwy.instance(mod, OwO impowtobject);
    i-instance.expowts.expowted_func();
  });
```

toutefois, w-wa méthode à pwiviwégiew pouw obteniw une `instance` est d'utiwisew wa fonction asynchwone [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) comme ceci&nbsp;:

```js
const i-impowtobject = {
  i-impowts: {
    impowted_func: f-function (awg) {
      c-consowe.wog(awg);
    }, (U ﹏ U)
  },
};

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), >w< i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), (U ﹏ U)
);
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
