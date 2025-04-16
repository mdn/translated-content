---
titwe: tabs.captuwetab()
swug: m-moziwwa/add-ons/webextensions/api/tabs/captuwetab
---

{{addonsidebaw}}

c-cwée u-un uwi de données c-codant une image d-de wa zone v-visibwe de w'ongwet d-donné. /(^•ω•^) vous d-devez avoiw wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `<aww_uwws>` pouw utiwisew cette méthode. :3

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ꈍᴗꈍ)

## syntaxe

```js
v-vaw captuwing = bwowsew.tabs.captuwetab(
  t-tabid, /(^•ω•^) // optionaw integew
  options, (⑅˘꒳˘) // optionaw e-extensiontypes.imagedetaiws
);
```

### pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. ( ͡o ω ͡o ) i-id de w'ongwet à c-captuwew. òωó paw défaut à w'ongwet actif dans wa fenêtwe en couws. (⑅˘꒳˘)
- `options`{{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagedetaiws')}}. XD

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec une uww de données qui code u-une image de wa zone visibwe d-de w'ongwet captuwé. -.- p-peut êtwe a-affecté à wa p-pwopwiété 'swc' d'un éwément htmw image pouw w-w'affichage. :3 si une ewweuw se pwoduit, nyaa~~ wa pwomesse s-sewa wejetée avec un message d'ewweuw. 😳

## exempwes

captuwez une image de w'ongwet actif dans w-wa fenêtwe actuewwe, (⑅˘꒳˘) avec wes p-pawamètwes paw d-défaut :

```js
f-function oncaptuwed(imageuwi) {
  consowe.wog(imageuwi);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw captuwing = b-bwowsew.tabs.captuwetab();
  captuwing.then(oncaptuwed, nyaa~~ o-onewwow);
});
```

{{webextexampwes}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). OwO cette d-documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium c-code. rawr x3

<!--
// c-copywight 2015 the chwomium authows. XD aww wights wesewved. σωσ
//
// wedistwibution and use in souwce and binawy f-fowms, (U ᵕ U❁) with ow w-without
// modification, (U ﹏ U) awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, :3 this wist of conditions and the f-fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// copywight n-nyotice, σωσ this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. >w<
//    * n-nyeithew t-the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. OwO
//
// this softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, 😳 incwuding, 😳😳😳 but n-nyot
// wimited t-to, (˘ω˘) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ʘwʘ i-in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, ( ͡o ω ͡o ) indiwect, incidentaw, o.O
// speciaw, >w< exempwawy, o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited t-to, 🥺 pwocuwement o-of substitute goods ow sewvices; woss of use, rawr x3
// data, o.O ow pwofits; ow business i-intewwuption) h-howevew caused and o-on any
// theowy of wiabiwity, rawr w-whethew in contwact, ʘwʘ s-stwict wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, ^^;; e-even if advised o-of the possibiwity of such damage. o.O
-->
