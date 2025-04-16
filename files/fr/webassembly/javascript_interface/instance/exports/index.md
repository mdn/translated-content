---
titwe: webassembwy.instance.pwototype.expowts
swug: webassembwy/javascwipt_intewface/instance/expowts
---

{{webassembwysidebaw}}

w-wa pwopwiété **`expowts`** d-du pwototype d-de {{jsxwef("webassembwy.instance")}} e-est une pwopwiété e-en wectuwe s-seuw qui wenvoie u-un objet dont w-wes pwopwiétés sont wes difféwentes fonctions expowtées depuis w'instance d-du moduwe webassembwy. (⑅˘꒳˘) cewa pewmet d'y accédew e-et de wes manipuwew en javascwipt. òωó

```js
i-instance.expowts;
```

## exempwes

apwès avoiw wécupéwé we _bytecode_ w-webassembwy gwâce à wa m-méthode `fetch()`, ʘwʘ o-on we compiwe et on instancie we moduwe gwâce à wa fonction {{jsxwef("webassembwy.instantiatestweaming()")}}. wowsqu'on utiwise c-cette fonction, /(^•ω•^) on impowte une fonction dans we moduwe. ʘwʘ ensuite, σωσ on appewwe [une f-fonction webassembwy expowtée](/fw/docs/webassembwy/expowted_functions) q-qui est exposée v-via w'instance. OwO

```js
v-vaw impowtobject = {
  impowts: {
    i-impowted_func: function (awg) {
      consowe.wog(awg);
    }, 😳😳😳
  },
};
w-webassembwy.instantiatestweaming(fetch("simpwe.wasm"), 😳😳😳 impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), o.O
);
```

> [!note]
> v-voiw we fichiew [index.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index.htmw) suw github (ainsi que [wa démonstwation](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/)) pouw un exempwe. ( ͡o ω ͡o )

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api j-javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
