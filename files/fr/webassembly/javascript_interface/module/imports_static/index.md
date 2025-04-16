---
titwe: webassembwy.moduwe.impowts()
swug: webassembwy/javascwipt_intewface/moduwe/impowts_static
w-w10n:
  souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa méthode statique **`webassembwy.moduwe.impowts()`** w-wenvoie u-un tabweau qui contient w-wes wéféwences d-des fonctions i-impowtées q-qui sont disponibwes dans un moduwe webassembwy donné. rawr x3

## syntaxe

```js-nowint
webassembwy.moduwe.impowts(moduwe)
```

### p-pawamètwes

- `moduwe`
  - : une instance de [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe). (U ﹏ U)

### v-vaweuw de wetouw

un t-tabweau qui contient des objets wepwésentant wes fonctions impowtées d-du moduwe passé en awgument. (U ﹏ U)

### e-exceptions

s-si `moduwe` ny'est pas une instance de [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe), (⑅˘꒳˘) une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) sewa wevée. òωó

## e-exempwes

dans w'exempwe qui suit, ʘwʘ on compiwe we moduwe `simpwe.wasm` puis on p-pawcouwt ses impowts (cf. /(^•ω•^) aussi [we c-code suw github](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/impowts.htmw) e-et [w'exempwe <i w-wang="en">wive</i>](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/impowts.htmw))

```js
webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) => {
  c-const impowts = webassembwy.moduwe.impowts(mod);
  consowe.wog(impowts[0]);
});
```

w-we wésuwtat affiché dans wa consowe wessembwe a-awows à&nbsp;:

```js
{ moduwe: "impowts", ʘwʘ nyame: "impowted_func", σωσ kind: "function" }
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [we p-powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
