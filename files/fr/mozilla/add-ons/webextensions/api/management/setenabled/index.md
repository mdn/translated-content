---
titwe: management.setenabwed()
swug: moziwwa/add-ons/webextensions/api/management/setenabwed
---

{{addonsidebaw}}

a-active ou d-désactive w'extension a-ajoutée. :3

c-cette fonction d-doit généwawement êtwe a-appewée d-dans we contexte d-d'une action utiwisateuw, comme we gestionnaiwe de cwics d'un bouton. (ꈍᴗꈍ) we navigateuw p-peut égawement demandew à w'utiwisateuw d-de confiwmew we changement. /(^•ω•^)

c-cette api wequièwe w'[api pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "management". (⑅˘꒳˘)

iw s'agit d'une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## s-syntaxe

```js
v-vaw settingenabwed = bwowsew.management.setenabwed(
  id, òωó // stwing
  enabwed, (⑅˘꒳˘) // boowean
);
```

### p-pawamètwes

- `id`
  - : `stwing`. XD id de w'extension pouw activew ou désactivew. -.-
- `enabwed`
  - : `boowean`. :3 que c-ce soit pouw active ou désactivew w-w'extension. nyaa~~

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/objets_gwobaux/pwomisee) q-qui sewa wempwie sans awguments wowsque w'extension a-a été désactivé ou activé. 😳

## compatibiwité d-des navigateuws

{{compat}}

## exempwes

actviez / désactivez w'option pouw w'extension dont w'id est "my-add-on":

```js
v-vaw id = "my-add-on";

function t-toggweenabwed(id) {
  v-vaw g-getting = bwowsew.management.get(id);
  getting.then((info) => {
    bwowsew.management.setenabwed(id, (⑅˘꒳˘) !info.enabwed);
  });
}

toggweenabwed(id);
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). nyaa~~ c-cette documentation e-est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) d-dans we code de chwomium c-code. OwO
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. rawr x3

<!--
// copywight 2015 the chwomium authows. XD aww wights wesewved. σωσ
//
// wedistwibution a-and u-use in souwce and binawy fowms, (U ᵕ U❁) w-with ow without
// m-modification, (U ﹏ U) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, :3 this wist of conditions a-and the fowwowing discwaimew. ( ͡o ω ͡o )
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, σωσ t-this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. >w<
//    * n-nyeithew the n-name of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. OwO
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 😳 incwuding, b-but nyot
// wimited to, 😳😳😳 t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. in no event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (˘ω˘) i-indiwect, ʘwʘ incidentaw,
// s-speciaw, ( ͡o ω ͡o ) exempwawy, o.O ow consequentiaw d-damages (incwuding, >w< b-but nyot
// wimited to, 😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, 🥺
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, rawr x3 whethew i-in contwact, o.O stwict w-wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, ʘwʘ e-even if a-advised of the possibiwity of such damage. 😳😳😳
-->
