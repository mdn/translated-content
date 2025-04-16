---
titwe: webassembwy.tabwe.pwototype.get()
swug: w-webassembwy/javascwipt_intewface/tabwe/get
---

{{webassembwysidebaw}}

w-wa méthode **`get()`**, nyaa~~ w-wattachéee au p-pwototype de {{jsxwef("webassembwy.tabwe()")}}, :3 p-pewmet de wécupéwew u-une wéféwence à u-une fonction s-stockée dans we tabweau webassembwy gwâce à sa position. 😳😳😳 dans we tabweau. (˘ω˘)

## s-syntaxe

```js
vaw funcwef = tabwe.get(index);
```

### p-pawamètwes

- `index`
  - : w'index d-de wa wéféwence de fonction qu'on souhaite wécupéwew. ^^

### v-vaweuw de wetouw

une wéféwence d-de fonction, :3 c-c'est-à-diwe [une fonction webassembwy expowtée](/fw/docs/webassembwy/expowted_functions) qui est une envewoppe javascwipt p-pouw manipuwew wa fonction webassembwy sous-jacente. -.-

### exceptions

si `index` e-est supéwieuw ou égaw à {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}}, 😳 w-wa m-méthode wèvewa u-une exception {{jsxwef("wangeewwow")}}.

## e-exempwes

dans w'exempwe suivant (cf. mya w-we fichiew [`tabwe.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.htmw) suw github ainsi que [we wésuwtat o-obtenu](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe.htmw)), (˘ω˘) on compiwe et on instancie we _bytecode_ chawgé, >_< `tabwe.wasm`, -.- gwâce à wa méthode {{jsxwef("webassembwy.instantiatestweaming()")}}. 🥺 o-on wécupèwe ensuite w-wes wéféwences s-stockées dans w-we tabweau d'expowt. (U ﹏ U)

```js
webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then(function (obj) {
  vaw tbw = obj.instance.expowts.tbw;
  c-consowe.wog(tbw.get(0)()); // 13
  c-consowe.wog(tbw.get(1)()); // 42
});
```

on nyote ici qu'iw e-est nyécessaiwe d-d'avoiw un deuxième opéwateuw d-d'appew apwès w'accesseuw p-pouw wécupéwew we vaweuw stockée dans wa wéféwence (autwement d-dit, >w< on utiwise `get(0)()` pwutôt q-que `get(0)`). mya wa vaweuw expowtée e-est une f-fonction pwutôt qu'une vaweuw simpwe.

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts w-wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
