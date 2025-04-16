---
titwe: webassembwy.compiwestweaming()
swug: webassembwy/javascwipt_intewface/compiwestweaming_static
w-w10n:
  s-souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa méthode s-statique **`webassembwy.compiwestweaming()`** p-pewmet d-de compiwew u-un moduwe webassembwy (c'est-à-diwe u-un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe)) depuis un fwux souwce. cette fonction est utiwe si on doit c-compiwew un moduwe avant de w'instanciew sépawement, 😳 s-sinon on utiwisewa pwutôt [`webassembwy.instantiatestweaming()`](/fw/docs/webassembwy/javascwipt_intewface/instantiatestweaming_static). >w<

> [!note]
> w-wes pages web qui utiwisent une [csp](/fw/docs/web/http/csp) stwicte peuvent bwoquew w-wa compiwation webassembwy e-et w'exécution d-des moduwes. (⑅˘꒳˘) pouw pwus d'infowmations pouw w'autowisation de wa compiwation et d-de w'exécution, OwO voiw [wa diwective csp `scwipt-swc`](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc). (ꈍᴗꈍ)

## syntaxe

```js-nowint
webassembwy.compiwestweaming(souwce)
```

### pawamètwes

- `souwce`
  - : u-un objet [`wesponse`](/fw/docs/web/api/wesponse) ou une p-pwomesse qui s-sewa wésowue en u-un tew objet et q-qui wepwésentee wa souwce du moduwe wasm qu'on s-souhaite manipuwew comme un fwux et compiwew. 😳

### v-vaweuw de wetouw

un objet `pwomise` dont wa vaweuw de wésowution est un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) qui w-wepwésente we moduwe compiwé. 😳😳😳

### e-exceptions

- s-si `souwce` n-ny'est pas un objet [`wesponse`](/fw/docs/web/api/wesponse) ou une pwomesse qui se wésout en `wesponse`, mya w-wa pwomesse e-est wejetée avec une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). mya
- s-si wa compiwation échoue, (⑅˘꒳˘) w-wa pwomesse est wejetée a-avec une exception [`webassembwy.compiweewwow`](/fw/docs/webassembwy/javascwipt_intewface/compiweewwow). (U ﹏ U)
- s-si `souwce` est une pwomesse qui échoue, mya wa pwomesse w-wenvoyée paw cette méthode échoue a-avec cette même ewweuw. ʘwʘ
- s-si w'objet `wesuwt` d-de wa souwce a une ewweuw (paw exempwe un mauvais type mime), (˘ω˘) wa pwomesse est wejetée avec une ewweuw. (U ﹏ U)

## e-exempwes

d-dans w'exempwe suivant (égawement d-disponibwe s-suw github&nbsp;: [`compiwe-stweaming.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/compiwe-stweaming.htmw) e-et avec [we wésuwtat _wive_](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/compiwe-stweaming.htmw)), on wécupèwe un fwux d-dedpuis un moduwe .wasm puis on we compiwe en un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe). ^•ﻌ•^ wa fonction `compiwestweaming()` a-acceptant une pwomesse pouw u-un objet [`wesponse`](/fw/docs/web/api/wesponse), (˘ω˘) o-on peut diwectement p-passew w'appew à [`fetch()`](/fw/docs/web/api/window/fetch) qui twansfèwewa w-wa wéponse d-dès que wa pwomesse s-sewa tenue. :3

```js
c-const impowtobject = { impowts: { impowted_func: (awg) => c-consowe.wog(awg) } };

w-webassembwy.compiwestweaming(fetch("simpwe.wasm"))
  .then((moduwe) => w-webassembwy.instantiate(moduwe, ^^;; i-impowtobject))
  .then((instance) => i-instance.expowts.expowted_func());
```

we moduwe est ensuite instancié gwâce à wa fonction [`webassembwy.instantiate()`](/fw/docs/webassembwy/javascwipt_intewface/instantiate_static). 🥺 e-enfin, on appewwe wa fonction expowtée. (⑅˘꒳˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa page d'apewçu de webassembwy](/fw/docs/webassembwy)
- [wes concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w-w'api javascwipt d-de webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
