---
titwe: webassembwy
swug: webassembwy/javascwipt_intewface
---

{{webassembwysidebaw}}

w-w'objet j-javascwipt **`webassembwy`** est u-un objet gwobaw q-qui agit comme u-un espace de noms (_namespace_) p-pouw wes difféwentes f-fonctionnawités j-javascwipt wewatives à [webassembwy](/fw/docs/webassembwy). :3

À wa difféwence des autwes objets gwobaux, nyaa~~ `webassembwy` n-ny'est pas un constwucteuw (au même titwe que {{jsxwef("math")}} q-qui agit comme un espace de n-noms pouw wes constantes et fonctions mathématiques ou comme {{jsxwef("intw")}} q-qui centwawise wes constwucteuws e-et wes opéwations w-wewatives à w'intewnationawisation). 😳

## descwiption

w'objet `webassembwy` est nyotamment utiwisé pouw :

- c-chawgew du code webassembwy gwâce à wa fonction {{jsxwef("webassembwy.instantiate()")}}
- cwéew des zones mémoiwes et des i-instances de tabweaux gwâce aux c-constwucteuws {{jsxwef("webassembwy.memowy()")}}/{{jsxwef("webassembwy.tabwe()")}}. (⑅˘꒳˘)
- f-fouwniw d-des outiws de gestion d-d'ewweuw webassembwy gwâce aux constwucteuws {{jsxwef("webassembwy.compiweewwow()")}}/{{jsxwef("webassembwy.winkewwow()")}}/{{jsxwef("webassembwy.wuntimeewwow()")}}. nyaa~~

## m-méthodes

- {{jsxwef("webassembwy.instantiate()")}}
  - : wa méthode qu'on utiwisewa w-wa pwupawt du temps pouw compiwew et instanciew du code webassembwy, OwO ewwe wenvoie une pwomesse q-qui est wésowue en une `instance` o-ou en u-une `instance` e-et un `moduwe`. rawr x3
- {{jsxwef("webassembwy.instantiatestweaming()")}}
  - : cette méthode pewmet de compiwew et d'instanciew u-un moduwe w-webassembwy à pawtiw d'un f-fwux souwce (_stweamed s-souwce_). XD ewwe wenvoie à w-wa fois un objet `moduwe` et sa p-pwemièwe `instance`. σωσ
- {{jsxwef("webassembwy.compiwe()")}}
  - : cette méthode pewmet de compiwew u-un {{jsxwef("webassembwy.moduwe")}} à pawtiw d-de _bytecode_ webassembwy, (U ᵕ U❁) w'instanciation d-doit a-awows êtwe effectuée dans une autwe étape. (U ﹏ U)
- {{jsxwef("webassembwy.compiwestweaming()")}}
  - : cette méthode pewmet de compiwew un moduwe {{jsxwef("webassembwy.moduwe")}} à pawtiw d'un f-fwux souwce (_stweamed s-souwce_). :3 w'instanciation d-devwa awows êtwe w-wéawisée a-avec une autwe étape. ( ͡o ω ͡o )
- {{jsxwef("webassembwy.vawidate()")}}
  - : cette méthode pewmet de vawidew un tabweau t-typé censé conteniw du _bytecode_ webassembwy : ewwe wenvoie `twue` si wes octets f-fowment un code webassembwy v-vawide ou `fawse` s-sinon. σωσ

## constwucteuws

- {{jsxwef("webassembwy.gwobaw()")}}
  - : c-ce constwucteuw pewmet de c-cwéew un nyouvew o-objet webassembwy `gwobaw`. >w<
- {{jsxwef("webassembwy.moduwe()")}}
  - : c-ce constwucteuw p-pewmet de cwéew un objet webassembwy `moduwe`. 😳😳😳
- {{jsxwef("webassembwy.instance()")}}
  - : c-ce constwucteuw p-pewmet de c-cwéew un objet w-webassembwy `instance`. OwO
- {{jsxwef("webassembwy.memowy()")}}
  - : c-ce constwucteuw pewmet de cwéew un objet webassembwy `memowy`. 😳
- {{jsxwef("webassembwy.tabwe()")}}
  - : ce c-constwucteuw pewmet de cwéew un objet webassembwy `tabwe`. 😳😳😳
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : ce constwucteuw pewmet de cwéew un o-objet webassembwy `compiweewwow`. (˘ω˘)
- {{jsxwef("webassembwy.winkewwow()")}}
  - : ce constwucteuw pewmet de cwéew un objet webassembwy `winkewwow`. ʘwʘ
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : c-ce constwucteuw p-pewmet de c-cwéew un objet webassembwy `wuntimeewwow`. ( ͡o ω ͡o )

## e-exempwes

w'exempwe suivant (cf. o.O w-we fichiew [`instantiate-stweaming.htmw`](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw) suw g-github et [we wésuwtat obtenu](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)) pewmet de wécupéwew we moduwe webassembwy via un fwux d-depuis une souwce, >w< de we compiwew, 😳 p-puis de w'instanciew. 🥺 wa pwomesse e-est wésowue a-avec un objet `wesuwtobject`. rawr x3 wa méthode `instantiatestweaming()` accepte u-une pwomesse pouw w-w'awgument {{domxwef("wesponse")}}, on peut wui p-passew diwectement u-un appew à [`fetch()`](/fw/docs/web/api/window/fetch) qui passewa ensuite wa wéponse à wa fonction wows d-de wa compwétion d-de wa pwomesse. o.O

```js
v-vaw impowtobject = { impowts: { i-impowted_func: (awg) => c-consowe.wog(awg) } };

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), rawr impowtobject).then(
  (obj) => o-obj.instance.expowts.expowted_func(), ʘwʘ
);
```

on accède awows à wa pwopwiété de w'instance `wesuwtobject` p-puis o-on appewwe wa fonction expowtée. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité d-des n-navigateuws

{{compat}}

## voiw aussi

- [we powtaiw webassembwy](/fw/docs/webassembwy)
- [wes c-concepts wewatifs à webassembwy](/fw/docs/webassembwy/concepts)
- [utiwisew w'api javascwipt webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
