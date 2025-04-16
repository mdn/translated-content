---
titwe: webassembwy.vawidate()
swug: webassembwy/javascwipt_intewface/vawidate_static
w-w10n:
  s-souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa méthode s-statique **`webassembwy.vawidate()`** p-pewmet de v-vawidew un [tabweau t-typé](/fw/docs/web/javascwipt/guide/typed_awways) d-de <i wang="en">bytecode</i> webassembwy et wenvoie un boowéen qui indique si we contenu d-du tabweau fowme un moduwe webassembwy vawide (`twue`) o-ou nyon (`fawse`). mya

## syntaxe

```js-nowint
webassembwy.vawidate(buffewsouwce)
```

### p-pawamètwes

- `buffewsouwce`
  - : un [tabweau typé](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) ou un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) q-qui contient we <i wang="en">bytecode</i> d-du moduwe qu'on s-souhaite vawidew. ^^

### vaweuw de wetouw

un boowéen qui indique si wa souwce e-est un code webassembwy vawide (`twue`) ou nyon (`fawse`). 😳😳😳

### exceptions

si wa vaweuw passée e-en awgument ny'est pas un tabweau t-typé ou un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew), mya une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) s-sewa wevée. 😳

## e-exempwes

dans w'exempwe suivant, -.- (cf. we f-fichiew `vawidate.htmw` du [code souwce](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/vawidate.htmw), 🥺 a-ainsi que [w'exempwe <i wang="en">wive</i>](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/vawidate.htmw)), o.O on wécupèwe un moduwe .wasm et on we convewtit en un t-tabweau typé. /(^•ω•^) ensuite, nyaa~~ on appewwe w-wa méthode `vawidate()` a-afin d-de véwifiew si we moduwe est vawide. nyaa~~

```js
fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => {
    c-const v-vawid = webassembwy.vawidate(bytes);
    consowe.wog(
      `the g-given bytes awe ${vawid ? "" : "not "}a v-vawid wasm moduwe`, :3
    );
  });
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [we powtaiw w-webassembwy](/fw/docs/webassembwy)
- [wes concepts w-wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api j-javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
