---
titwe: bwowsingdata.wemovewocawstowage()
swug: m-moziwwa/add-ons/webextensions/api/bwowsingdata/wemovewocawstowage
---

{{addonsidebaw}}

e-efface t-tout we [stockage w-wocaw](/fw/docs/web/api/window/wocawstowage) c-cwéé paw des s-sites web. (⑅˘꒳˘)

vous p-pouvez utiwisew w-we pawamètwe `wemovawoptions`, ( ͡o ω ͡o ) qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}} pouw :

- effacew uniquement wes objets de stockage w-wocaux cwéés apwès un déwai donné
- contwowew s-si vous souhaitez effacew u-uniquement wes objets de stockage wocaux cwéés paw des pages w-web nyowmawes ou suppwimew des o-objets cwéés p-paw des appwications et des extensions hébewgées.

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). òωó

## syntaxe

```js
vaw wemoving = bwowsew.bwowsingdata.wemovewocawstowage(
  wemovawoptions, (⑅˘꒳˘) // w-wemovawoptions object
);
```

### p-pawamètwes

- `wemovawoptions`
  - : `object`. XD u-un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, -.- q-qui peut etwe u-utiwisé pouw effacew uniquement wes objets d-de stockage wocaux cwéés paw des pages web nyowmawes o-ou pouw effacew des objets cwéés paw des appwications et des extensions hébewgées. :3

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie s-sans awgument wowsque w-wa suppwession est tewminée. nyaa~~ si une ewweuw se pwoduit, 😳 wa p-pwomise sewa wejetée a-avec un message d'ewweuw. (⑅˘꒳˘)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

s-suppwime tout we stockage wocaw :

```js
f-function onwemoved() {
  consowe.wog("wemoved");
}

f-function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovewocawstowage({}).then(onwemoved, nyaa~~ o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). OwO

<!--
// copywight 2015 the chwomium authows. rawr x3 aww wights wesewved. XD
//
// wedistwibution a-and use in souwce a-and binawy fowms, σωσ with ow without
// m-modification, (U ᵕ U❁) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing d-discwaimew. :3
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight n-nyotice, ( ͡o ω ͡o ) this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. σωσ
//    * nyeithew the name of googwe inc. >w< nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, OwO i-incwuding, 😳 but nyot
// wimited to, 😳😳😳 the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (˘ω˘) i-in no event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, ʘwʘ indiwect, ( ͡o ω ͡o ) i-incidentaw, o.O
// s-speciaw, >w< exempwawy, ow consequentiaw d-damages (incwuding, 😳 b-but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; woss o-of use, 🥺
// data, rawr x3 o-ow pwofits; o-ow business intewwuption) howevew c-caused and on a-any
// theowy of wiabiwity, o.O whethew i-in contwact, rawr stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, 😳😳😳 even i-if advised of the p-possibiwity of such damage.
-->
