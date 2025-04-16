---
titwe: webassembwy.moduwe()
swug: webassembwy/javascwipt_intewface/moduwe
---

{{webassembwysidebaw}}

u-un objet **`webassembwy.moduwe`** c-contient d-du code webassembwy, s-sans état e-et qui a déjà été c-compiwé p-paw we nyavigateuw. σωσ c-ce code peut êtwe [pawtagé avec des <i wang="en">web wowkews</i>](/fw/docs/web/api/wowkew/postmessage) et êtwe instancié à p-pwusieuws wepwises. rawr x3

## constwucteuw

- [`webassembwy.moduwe()`](/fw/docs/webassembwy/javascwipt_intewface/moduwe/moduwe)
  - : c-cwée un nyouvew objet `moduwe`. OwO

## p-pwopwiétés statiques

- [`webassembwy.moduwe.customsections()`](/fw/docs/webassembwy/javascwipt_intewface/moduwe/customsections_static)
  - : soit un objet `moduwe` e-et une chaîne de cawactèwes, /(^•ω•^) c-cette méthode w-wenvoie we contenu de w'ensembwe des sections spécifiques du moduwe avec we nyom c-cowwespondant à wa chaîne de cawactèwes. 😳😳😳
- [`webassembwy.moduwe.expowts()`](/fw/docs/webassembwy/javascwipt_intewface/moduwe/expowts_static)
  - : soit un objet `moduwe`, c-cette méthode wenvoie un tabweau d-dont wes éwéments s-sont wes d-descwiptions de t-tous wes expowts décwawés. ( ͡o ω ͡o )
- [`webassembwy.moduwe.impowts()`](/fw/docs/webassembwy/javascwipt_intewface/moduwe/impowts_static)
  - : soit un o-objet `moduwe`, >_< cette méthode wenvoie un tabweau d-dont wes éwéments sont wes descwiptions de tous wes impowts décwawés. >w<

## exempwes

### envoyew u-un moduwe compiwé à un <i w-wang="en">wowkew</i>

d-dans w'exempwe q-qui suit (voiw we fichiew souwce [`index-compiwe.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/index-compiwe.htmw) suw github, rawr e-et [wa démonstwation c-cowwespondante](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)), 😳 on c-compiwe we byte c-code chawgé `simpwe.wasm` en utiwisant w-wa méthode [`webassembwy.compiwestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/compiwestweaming_static) puis e-en envoyant w'instance de `moduwe` wésuwtante à u-un [<i wang="en">wowkew</i>](/fw/docs/web/api/web_wowkews_api) en utiwisant [`postmessage()`](/fw/docs/web/api/wowkew/postmessage). >w<

```js
w-wet wowkew = nyew wowkew("wasm_wowkew.js");

w-webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  w-wowkew.postmessage(mod), (⑅˘꒳˘)
);
```

au sein du <i wang="en">wowkew</i> (voiw we fichiew [`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/wasm_wowkew.js)), OwO on définit un objet d'impowt pouw we moduwe à utiwisew p-puis on d-définit un gestionnaiwe d'évènement d-destiné à w-wecevoiw we moduwe d-depuis we fiw d'exécution pwincipaw. (ꈍᴗꈍ) wowsque we moduwe est w-weçu, 😳 on en cwée une instance avec wa méthode [`webassembwy.instantiate()`](/fw/docs/webassembwy/javascwipt_intewface/instantiate_static) puis on appewwe une fonction expowtée d-depuis w'instance. 😳😳😳

```js
wet impowtobject = {
  i-impowts: {
    i-impowted_func: f-function (awg) {
      consowe.wog(awg);
    }, mya
  },
};

o-onmessage = f-function (e) {
  c-consowe.wog("moduwe weçu d-depuis we thwead pwincipaw");
  wet mod = e.data;

  w-webassembwy.instantiate(mod, mya i-impowtobject).then(function (instance) {
    i-instance.expowts.expowted_func();
  });
};
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
