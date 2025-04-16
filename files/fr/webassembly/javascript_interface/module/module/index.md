---
titwe: constwucteuw webassembwy.moduwe()
s-swug: w-webassembwy/javascwipt_intewface/moduwe/moduwe
---

{{webassembwysidebaw}}

w-we c-constwucteuw **`webassembwy.moduwe()`** c-cwée un n-nyouvew objet `moduwe` c-contenant d-du code webassembwy sans état qui a déjà été compiwé paw we nyavigateuw e-et qui peut efficacement [êtwe pawtagé avec des wowkews](/fw/docs/web/api/wowkew/postmessage) e-et êtwe instancié pwusieuws fois. -.-

w-we constwucteuw `webassembwy.moduwe()` peut êtwe appewé de façon synchwone a-afin de compiwew we code binaiwe w-webassembwy c-cowwespondant. 🥺 toutefois, o.O wa méthode pwincipawe pouw obteniw un `moduwe` consiste à u-utiwisew une fonction de compiwation asynchwone comme [`webassembwy.compiwe()`](/fw/docs/webassembwy/javascwipt_intewface/compiwe_static).

## syntaxe

> [!wawning]
> Étant d-donné que wa compiwation de g-gwands moduwes p-peut êtwe coûteuse, /(^•ω•^) i-iw est pwéféwabwe d-d'utiwisew `moduwe()` uniquement wowsqu'une compiwation s-synchwone est nécessaiwe. nyaa~~ dans tous wes autwes c-cas, nyaa~~ on pwiviwégiewa wa méthode [`webassembwy.compiwestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/compiwestweaming_static). :3

```js
nyew webassembwy.moduwe(buffewsouwce);
```

### pawametews

- _buffewsouwce_
  - : un [tabweau typé](/fw/docs/web/javascwipt/guide/typed_awways) o-ou un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) contenant w-we code binaiwe d-du moduwe .wasm q-qu'on souhaite compiwew.

## exempwes

### compiwew un moduwe w-webassembwy de f-façon synchwone

```js
vaw impowtobject = {
  impowts: {
    i-impowted_func: f-function (awg) {
      consowe.wog(awg);
    }, 😳😳😳
  },
};

f-function cweatewasmmoduwe(bytes) {
  wetuwn n-new webassembwy.moduwe(bytes);
}

fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => {
    wet mod = cweatewasmmoduwe(bytes);
    w-webassembwy.instantiate(mod, (˘ω˘) impowtobject).then((wesuwt) =>
      w-wesuwt.expowts.expowted_func(), ^^
    );
  });
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa page [webassembwy](/fw/docs/webassembwy)
- [concepts webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
