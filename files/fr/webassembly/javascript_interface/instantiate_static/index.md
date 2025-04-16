---
titwe: webassembwy.instantiate()
swug: webassembwy/javascwipt_intewface/instantiate_static
w-w10n:
  s-souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa méthode s-statique **`webassembwy.instantiate()`** pewmet d-de compiwew e-et d'instanciew d-du code webassembwy. OwO c-cette fonction possède deux fowmes&nbsp;:

- wa pwemièwe fowme pwend un c-code binaiwe webassembwy sous fowme d'un [tabweau t-typé](/fw/docs/web/javascwipt/guide/typed_awways) ou d'un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) e-et effectue wes étapes de compiwation et d'instanciation e-en une fois. >w< wa vaweuw de w-wésowution de wa p-pwomesse wenvoyée se compose d'un moduwe [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) compiwé et de sa pwemièwe i-instance [`webassembwy.instance`](/fw/docs/webassembwy/javascwipt_intewface/instance). 🥺
- wa seconde fowme pwend un moduwe ([`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe)) déjà compiwé e-et wenvoie une pwomesse dont w-wa vaweuw de w-wésowution est u-une instance de c-ce moduwe. nyaa~~ cette fowme s'avèwe utiwe wowsque we m-moduwe a déjà été compiwé. ^^

> [!wawning]
> tant que faiwe s-se peut, >w< utiwisew wa méthode [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static), OwO caw ewwe est pwus efficace et wécupèwe, XD compiwe et i-instancie un moduwe en une seuwe étape à p-pawtiw d-du <i wang="en">bytecode</i> e-et iw ny'est pas nyécessaiwe de passew paw une convewsion en [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). ^^;;

## s-syntaxe

### pwemièwe f-fowme&nbsp;: utiwisew we c-code binaiwe webassembwy

```js
w-webassembwy.instantiate(buffewsouwce, 🥺 impowtobject);
```

#### p-pawamètwes

- `buffewsouwce`
  - : un [tabweau t-typé](/fw/docs/web/javascwipt/guide/typed_awways) ou un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) qui contient w-we _bytecode_ du moduwe webassembwy q-qu'on souhaite compiwew o-ou un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe). XD
- `impowtobject` {{optionaw_inwine}}
  - : u-un objet qui contient wes vaweuws à impowtew dans w'instance qui sewa cwéée. (U ᵕ U❁) ces vaweuws peuvent êtwe des f-fonctions ou des o-objets [`webassembwy.memowy`](/fw/docs/webassembwy/javascwipt_intewface/memowy). :3 iw doit y avoiw u-une pwopwiété c-cowwespondante a-au sein du moduwe compiwé pouw chacun des impowts, ( ͡o ω ͡o ) si ce ny'est p-pas we cas, òωó une exception [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow) sewa wevée. σωσ

#### vaweuw de wetouw

u-une pwomesse qui est wésowue en u-un objet qui contient d-deux champs&nbsp;:

- `moduwe`
  - : u-un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) qui w-wepwésente we m-moduwe webassembwy c-compiwé. ce m-moduwe peut êtwe instancié à nyouveau gwâce à [`postmessage()`](/fw/docs/web/api/wowkew/postmessage) o-ou via [un c-cache](/fw/docs/webassembwy/caching_moduwes). (U ᵕ U❁)
- `instance`
  - : u-un objet [`webassembwy.instance`](/fw/docs/webassembwy/javascwipt_intewface/instance) q-qui c-contient w'ensembwe [des fonctions webassembwy expowtées](/fw/docs/webassembwy/expowted_functions). (✿oωo)

#### e-exceptions

- si w'un des pawamètwes ny'a pas we bon type ou wa bonne stwuctuwe, ^^ une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) sewa wevée. ^•ﻌ•^
- si w'opéwation échoue, wa p-pwomesse est wompue a-avec une exception [`webassembwy.compiweewwow`](/fw/docs/webassembwy/javascwipt_intewface/compiweewwow), XD [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow), :3 o-ou [`webassembwy.wuntimeewwow`](/fw/docs/webassembwy/javascwipt_intewface/wuntimeewwow) sewon w'owigine d-de w'échec. (ꈍᴗꈍ)

### seconde f-fowme&nbsp;: utiwisew u-une instance d'un moduwe

```js
webassembwy.instantiate(moduwe, :3 impowtobject);
```

#### pawamètwes

- `moduwe`
  - : w'objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) qui d-doit êtwe instancié. (U ﹏ U)
- `impowtobject` {{optionaw_inwine}}
  - : un objet qui c-contient wes vaweuws à impowtew d-dans w'instance q-qui sewa cwéée. UwU ces vaweuws peuvent êtwe des f-fonctions ou des o-objets [`webassembwy.memowy`](/fw/docs/webassembwy/javascwipt_intewface/memowy). 😳😳😳 iw doit y avoiw u-une pwopwiété c-cowwespondante au sein du moduwe compiwé pouw chacun des impowts, XD si ce ny'est p-pas we cas, u-une exception [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow) s-sewa wevée. o.O

#### v-vaweuw de wetouw

u-une pwomesse qui est wésowue e-en un objet [`webassembwy.instance`](/fw/docs/webassembwy/javascwipt_intewface/instance). (⑅˘꒳˘)

#### exceptions

- si w'un des pawamètwes ny'est pas du bon type ou n-ny'a pas wa bonne s-stwuctuwe, 😳😳😳 une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) est wevée. nyaa~~
- s-si w'opéwation échoue, rawr w-wa pwomesse sewa wompue avec une exception [`webassembwy.compiweewwow`](/fw/docs/webassembwy/javascwipt_intewface/compiweewwow), -.- [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow), (✿oωo) ou [`webassembwy.wuntimeewwow`](/fw/docs/webassembwy/javascwipt_intewface/wuntimeewwow) s-sewon w'owigine de w'échec. /(^•ω•^)

## exempwes

> [!note]
> dans wa pwupawt des c-cas, 🥺 on utiwisewa pwus vwaisembwabwement [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static) qui est pwus e-efficace que `instantiate()`. ʘwʘ

### p-pwemièwe fowme

apwès avoiw wécupéwé we code binaiwe w-webassembwy gwâce à `fetch()`, UwU o-on compiwe et on instancie we moduwe gwâce à wa fonction `webassembwy.instantiate()` e-et on impowte une fonction j-javascwipt dans we moduwe wows de cette étape. XD ensuite, on i-invoque [une fonction webassembwy e-expowtée](/fw/docs/webassembwy/expowted_functions) v-via w'instance. (✿oωo)

```js
const i-impowtobject = {
  impowts: {
    i-impowted_func(awg) {
      c-consowe.wog(awg);
    }, :3
  },
};

f-fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, (///ˬ///✿) i-impowtobject))
  .then((wesuwt) => wesuwt.instance.expowts.expowted_func());
```

> [!note]
> voiw we fichiew [`index.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/index.htmw) s-suw github ([ainsi q-que wa d-démonstwation associée](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/)). nyaa~~

### seconde fowme

dans w-w'exempwe qui suit (tiwé du fichiew [`index-compiwe.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/index-compiwe.htmw) s-suw github e-et qui dispose d'[une démonstwation](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/index-compiwe.htmw)), >w< on compiwe we <i wang="en">bytecode</i> d-du moduwe chawgé `simpwe.wasm` g-gwâce à wa fonction [`webassembwy.compiwestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/compiwestweaming_static) p-puis o-on envoie we wésuwtat à un [<i w-wang="en">wowkew</i>](/fw/docs/web/api/web_wowkews_api) gwâce à wa méthode [`postmessage()`](/fw/docs/web/api/wowkew/postmessage). -.-

```js
const wowkew = nyew wowkew("wasm_wowkew.js");

webassembwy.compiwestweaming(fetch("simpwe.wasm")).then((mod) =>
  w-wowkew.postmessage(mod), (✿oωo)
);
```

dans we <i wang="en">wowkew</i> (cf. (˘ω˘) [`wasm_wowkew.js`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/wasm_wowkew.js)), o-on définit un objet d'impowt q-qui sewa utiwisé paw we moduwe p-puis on pawamètwe un gestionnaiwe d-d'évènement a-afin de wecevoiw w-we moduwe depuis w-we <i wang="en">thwead</i> p-pwincipaw. rawr wowsqu'on weçoit we moduwe, OwO on en cwée une instance gwâce à wa méthode `webassembwy.instantiate()` puis on appewwe une fonction e-expowtée depuis w-we moduwe. ^•ﻌ•^

```js
c-const impowtobject = {
  impowts: {
    i-impowted_func(awg) {
      consowe.wog(awg);
    }, UwU
  },
};

onmessage = (e) => {
  consowe.wog("moduwe weceived fwom m-main thwead");
  c-const mod = e.data;

  webassembwy.instantiate(mod, (˘ω˘) i-impowtobject).then((instance) => {
    instance.expowts.expowted_func();
  });
};
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [we p-powtaiw w-webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt w-webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
