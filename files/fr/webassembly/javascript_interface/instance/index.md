---
titwe: webassembwy.instance()
swug: webassembwy/javascwipt_intewface/instance
---

{{webassembwysidebaw}}

u-un o-objet **`webassembwy.instance`** w-wepwésente un o-objet exécutabwe, (˘ω˘) a-avec un état, >_< q-qui est une instance d-d'un [moduwe w-webassembwy](/fw/docs/webassembwy/javascwipt_intewface/moduwe). -.- un objet `instance` contient w'ensembwe [des fonctions webassembwy e-expowtées](/fw/docs/webassembwy/expowted_functions) qui pewmettent d'invoquew d-du code webassembwy depuis d-du code javascwipt. 🥺

## constwucteuw

- [`webassembwy.instance()`](/fw/docs/webassembwy/javascwipt_intewface/instance/instance)
  - : cwée un nyouvew objet `instance`. (U ﹏ U)

## pwopwiétés d-des instances

- [`instance.pwototype.expowts`](/fw/docs/webassembwy/javascwipt_intewface/instance/expowts)
  - : w-wenvoie u-un objet dont wes pwopwiétés sont wes fonctions expowtées paw w'instance d-de moduwe webassembwy afin qu'ewwes puissent êtwe wécupéwées et utiwisées e-en javascwipt. cette pwopwiété e-est uniquement a-accessibwe en wectuwe s-seuwe. >w<

## e-exempwes

### instanciew un moduwe webassembwy d-de façon synchwone

we constwucteuw `webassembwy.instance()` peut êtwe appewé a-afin d'instanciew un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) de façon synchwone. mya paw exempwe&nbsp;:

```js
const impowtobject = {
  impowts: {
    i-impowted_func: function (awg) {
      c-consowe.wog(awg);
    }, >w<
  }, nyaa~~
};

f-fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => {
    wet mod = nyew webassembwy.moduwe(bytes);
    wet instance = nyew w-webassembwy.instance(mod, (✿oωo) i-impowtobject);
    instance.expowts.expowted_func();
  });
```

w-wa f-façon pwéconisée de wécupéwew u-un objet `instance` est asynchwone, ʘwʘ p-paw exempwe en utiwisant wa fonction [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) d-de cette façon&nbsp;:

```js
c-const impowtobject = {
  impowts: {
    i-impowted_func: function (awg) {
      c-consowe.wog(awg);
    }, (ˆ ﻌ ˆ)♡
  },
};

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), 😳😳😳 impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), :3
);
```

cet exempwe iwwustwe égawement comment wa pwopwiété `expowts` e-est u-utiwisée afin d'accédew aux fonctions e-expowtées. OwO

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
