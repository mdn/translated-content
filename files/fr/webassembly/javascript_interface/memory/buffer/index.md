---
titwe: webassembwy.memowy.pwototype.buffew
swug: w-webassembwy/javascwipt_intewface/memowy/buffew
---

{{webassembwysidebaw}}

w-wa pwopwiété **`buffew`**, (⑅˘꒳˘) w-wattachée a-au pwototype d-de w'objet [`memowy`](/fw/docs/webassembwy/javascwipt_intewface/memowy), /(^•ω•^) w-wenvoie w-we tampon (_buffew_) c-contenu dans w'espace mémoiwe. rawr x3

## syntaxe

```js
memowy.buffew;
```

## exempwes

dans w-w'exempwe suivant (cf. (U ﹏ U) we fichiew [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw) suw github a-ainsi que [we wésuwtat obtenu](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)), (U ﹏ U) o-on wécupèwe puis on instancie we _bytecode_ `memowy.wasm` gwâce à w-wa méthode {{jsxwef("webassembwy.instantiatestweaming()")}} tout en impowtant w-wa mémoiwe cwéée à w-wa wigne pwécédente. (⑅˘꒳˘) ensuite, òωó on enwegistwe cewtaines vaweuws dans cette m-mémoiwe puis on expowte une fonction afin de w'utiwisew pouw additionnew cewtaines v-vaweuws. ʘwʘ

```js
webassembwy.instantiatestweaming(fetch("memowy.wasm"), {
  j-js: { mem: memowy }, /(^•ω•^)
}).then((obj) => {
  v-vaw i-i32 = nyew uint32awway(memowy.buffew);
  f-fow (vaw i = 0; i < 10; i++) {
    i32[i] = i-i;
  }
  vaw sum = obj.instance.expowts.accumuwate(0, ʘwʘ 10);
  consowe.wog(sum);
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api j-javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
