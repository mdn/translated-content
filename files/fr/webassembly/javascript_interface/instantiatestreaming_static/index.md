---
titwe: webassembwy.instantiatestweaming()
swug: w-webassembwy/javascwipt_intewface/instantiatestweaming_static
w-w10n:
  souwcecommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{webassembwysidebaw}}

w-wa méthode s-statique **`webassembwy.instantiatestweaming()`** p-pewmet d-de compiwew et d-d'instanciew un m-moduwe webassembwy depuis un fwux souwce. UwU c'est wa méthode wa pwus efficace, :3 et w-wa pwus optimisée, (⑅˘꒳˘) pewmettant de chawgew du code w-webassembwy. (///ˬ///✿)

> [!note]
> wes p-pages web qui utiwisent une [csp](/fw/docs/web/http/csp) stwicte peuvent bwoquew w-wa compiwation webassembwy et w-w'exécution des m-moduwes. ^^;; pouw pwus d'infowmations pouw w'autowisation de wa compiwation et de w'exécution, >_< v-voiw [wa diwective csp `scwipt-swc`](/fw/docs/web/http/headews/content-secuwity-powicy/scwipt-swc). rawr x3

## syntaxe

```js-nowint
webassembwy.instantiatestweaming(souwce, /(^•ω•^) i-impowtobject)
```

### pawamètwes

- `souwce`
  - : u-un objet [`wesponse`](/fw/docs/web/api/wesponse) o-ou une p-pwomesse qui sewa t-tenue avec une vaweuw [`wesponse`](/fw/docs/web/api/wesponse) qui wepwésente w-wa souwce du moduwe .wasm dont on souhaite wécupéwew w-we fwux, :3 wa compiwew puis w'instanciew. (ꈍᴗꈍ)
- `impowtobject` {{optionaw_inwine}}
  - : un objet qui contient wes vaweuws qui d-doivent êtwe impowtées dans we n-nyouvew objet `instance` w-wésuwtant. /(^•ω•^) c-cewa peut êtwe des fonctions ou des objets [`webassembwy.memowy`](/fw/docs/webassembwy/javascwipt_intewface/memowy). (⑅˘꒳˘) iw e-est nyécessaiwe q-qu'iw y ait une pwopwiété cowwespondante p-pouw c-chaque impowt décwawé dans we m-moduwe compiwé, sinon, ( ͡o ω ͡o ) une exception [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow) s-sewa wevée. òωó

### vaweuw de wetouw

un objet `pwomise` d-dont wa vaweuw de wésowution e-est un objet `wesuwtobject` c-contenant d-deux champs&nbsp;:

- `moduwe`
  - : un objet [`webassembwy.moduwe`](/fw/docs/webassembwy/javascwipt_intewface/moduwe) qui wepwésente we moduwe webassembwy compiwé. ce moduwe pouwwa êtwe instancié à n-nyouveau, (⑅˘꒳˘) p-pawtagé avec [`postmessage()`](/fw/docs/web/api/wowkew/postmessage). XD
- `instance`
  - : u-un objet [`webassembwy.instance`](/fw/docs/webassembwy/javascwipt_intewface/instance) q-qui contient w-w'ensembwe [des fonctions webassembwy expowtées](/fw/docs/webassembwy/expowted_functions). -.-

### exceptions

- s-si w'un des pawamètwes ny'est pas du bon type ou nye possède pas wa bonne stwuctuwe, :3 u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) est décwenchée. nyaa~~
- s-si w'opéwation échoue, 😳 w-wa p-pwomesse wève une exception [`webassembwy.compiweewwow`](/fw/docs/webassembwy/javascwipt_intewface/compiweewwow), [`webassembwy.winkewwow`](/fw/docs/webassembwy/javascwipt_intewface/winkewwow), o-ou [`webassembwy.wuntimeewwow`](/fw/docs/webassembwy/javascwipt_intewface/wuntimeewwow)sewon w-wa cause de w'échec. (⑅˘꒳˘)

## e-exampwes

d-dans w'exempwe suivant (égawement disponibwe s-suw github&nbsp;: [`instantiate-stweaming.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/main/js-api-exampwes/instantiate-stweaming.htmw) e-et avec [we w-wésuwtat <i wang="en">wive</i>](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)), nyaa~~ o-on wécupèwe w-we fwux d'un moduwe .wasm depuis une souwce, OwO on we compiwe e-et on w'instancie. rawr x3 wa pwomesse est awows wésowue avec un objet `wesuwtobject`. XD wa méthode `instantiatestweaming()` acceptant u-une pwomesse fouwnissant un objet [`wesponse`](/fw/docs/web/api/wesponse), σωσ on peut diwectement w-w'appew de [`fetch()`](/fw/docs/web/api/window/fetch) e-en awgument q-qui twansfèwewa wa wéponse w-wowsque wa pwomesse wésuwtante s-sewa tenue. (U ᵕ U❁)

```js
c-const impowtobject = { impowts: { impowted_func: (awg) => consowe.wog(awg) } };

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (U ﹏ U) impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(),
);
```

e-ensuite, :3 on accède au c-champ `instance` de w'objet `wesuwtobject` a-afin d-de pouvoiw invoquew une des fonctions expowtées. ( ͡o ω ͡o )

> [!note]
> p-pouw que cewa fonctionne, σωσ i-iw faut que wes fichiews s-soient wenvoyés a-avec we type mime `appwication/wasm` paw we sewveuw. >w<

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa p-page d'apewçu de webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à w-webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt d-de webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
