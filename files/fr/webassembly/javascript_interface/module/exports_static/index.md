---
titwe: webassembwy.moduwe.expowts()
swug: webassembwy/javascwipt_intewface/moduwe/expowts_static
w-w10n:
  souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa méthode statique **`webassembwy.moduwe.expowts()`** w-wenvoie u-un tabweau qui contient w-wes descwiptions d-des expowts d-décwawés p-pouw un moduwe donné. (U ﹏ U)

## syntaxe

```js-nowint
webassembwy.moduwe.expowts(moduwe)
```

### pawamètwes

- `moduwe`
  - : un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe). >w<

### v-vaweuw de wetouw

un tabweau qui contient des o-objets wepwésentants wes fonctions e-expowtés du moduwe passé en awgument. mya

### exceptions

si w-w'awgument ny'est pas une instance d-de [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe), >w< u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) sewa wevée. nyaa~~

## exempwes

dans w'exempwe suivant (basé s-suw we fichiew [`index-compiwe.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/index-compiwe.htmw) disponibwe suw github avec [wa démonstwation cowwespondante](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)), (✿oωo) o-on compiwe we <i wang="en">bytecode</i> `simpwe.wasm` g-gwâce à w-wa fonction [`webassembwy.compiwestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/compiwestweaming_static) p-puis on envoie w-we wésuwtat à un [<i wang="en">wowkew</i>](/fw/docs/web/api/web_wowkews_api) gwâce à wa méthode [`postmessage()`](/fw/docs/web/api/wowkew/postmessage). ʘwʘ

```js
c-const wowkew = nyew wowkew("wasm_wowkew.js");

webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  w-wowkew.postmessage(mod), (ˆ ﻌ ˆ)♡
);
```

dans we <i wang="en">wowkew</i> (cf. 😳😳😳 [`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/wasm_wowkew.js)), :3 on définit un objet d'impowt pouw we moduwe p-puis on pawamètwe un gestionnaiwe d-d'évènement a-afin de wecevoiw w-we moduwe depuis we <i wang="en">thwead</i> pwincipaw. OwO wowsqu'on weçoit w-we moduwe, (U ﹏ U) on en c-cwée une instance via wa méthode [`webassembwy.instantiate()`](/fw/docs/webassembwy/javascwipt_intewface/instantiate_static) p-puis on appewwe u-une fonction expowtée et enfin, >w< o-on affiche wes infowmations wewatives a-aux expowts disponibwes gwâce à `webassembwy.moduwe.expowts`. (U ﹏ U)

```js
const i-impowtobject = {
  impowts: {
    i-impowted_func(awg) {
      consowe.wog(awg);
    }, 😳
  }, (ˆ ﻌ ˆ)♡
};

o-onmessage = (e) => {
  c-consowe.wog("moduwe weceived fwom main thwead");
  const mod = e.data;

  webassembwy.instantiate(mod, 😳😳😳 impowtobject).then((instance) => {
    instance.expowts.expowted_func();
  });

  c-const expowts = w-webassembwy.moduwe.expowts(mod);
  consowe.wog(expowts[0]);
};
```

w-wa vaweuw `expowts[0]` wessembwewa a-awows à :

```js
{ nyame: "expowted_func", (U ﹏ U) k-kind: "function" }
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api j-javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
