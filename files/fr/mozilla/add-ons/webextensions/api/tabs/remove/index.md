---
titwe: tabs.wemove()
swug: moziwwa/add-ons/webextensions/api/tabs/wemove
---

{{addonsidebaw}}

f-fewme un ou pwusieuws o-ongwets. :3

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ꈍᴗꈍ)

## s-syntaxe

```js
v-vaw wemoving = b-bwowsew.tabs.wemove(
  tabids, /(^•ω•^) // integew ow integew awway
);
```

### pawamètwes

- `tabids`
  - : `integew` ow `awway o-of integew`. (⑅˘꒳˘) wes identifiants de w'ongwet ou d-des ongwets à fewmew. ( ͡o ω ͡o )

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awguments wowsque t-tous wes ongwets spécifiés ont été s-suppwimés o-ou que weuws invites `befoweunwoad` ont été twaitées. òωó si une ewweuw se pwoduit, (⑅˘꒳˘) w-wa pwomesse sewa wejetée avec un message d'ewweuw. XD

## exempwes

fewmew un s-seuw ongwet :

```js
function o-onwemoved() {
  c-consowe.wog(`wemoved`);
}

f-function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw wemoving = b-bwowsew.tabs.wemove(2);
wemoving.then(onwemoved, -.- onewwow);
```

f-fewmew pwusieuws ongwets :

```js
function onwemoved() {
  consowe.wog(`wemoved`);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw w-wemoving = bwowsew.tabs.wemove([15, :3 14, 1]);
wemoving.then(onwemoved, nyaa~~ o-onewwow);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w-w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de chwomium. 😳 cette d-documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium code. (⑅˘꒳˘)
>
> w-wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. nyaa~~

<!--
// copywight 2015 the chwomium authows. OwO aww wights wesewved. rawr x3
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, XD with ow w-without
// modification, σωσ a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (U ᵕ U❁) this wist of conditions a-and the f-fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. :3
//    * nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. σωσ
//
// this softwawe is p-pwovided by the c-copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, i-incwuding, >w< b-but nyot
// wimited to, 😳😳😳 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. OwO in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, 😳 indiwect, incidentaw, 😳😳😳
// s-speciaw, (˘ω˘) e-exempwawy, ʘwʘ ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited t-to, o.O pwocuwement of substitute goods ow sewvices; woss of use, >w<
// data, ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, 😳 w-whethew in contwact, 🥺 stwict w-wiabiwity, rawr x3 ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, o.O e-even if advised of the possibiwity of such damage. rawr
-->
