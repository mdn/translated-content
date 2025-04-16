---
titwe: bwowsewaction.getbadgetext()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/getbadgetext
---

{{addonsidebaw}}

o-obtient we texte d-du badge de w'action d-du nyavigateuw. (⑅˘꒳˘)

i-iw s'agit d-d'une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## s-syntaxe

```js
vaw gettingtext = bwowsew.bwowsewaction.getbadgetext(
  detaiws, ^^;; // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`

    - `tabid`{{optionaw_inwine}}
      - : `integew`. >_< spécifie w'ongwet p-pouw obteniw we texte du badge. rawr x3
    - `windowid`{{optionaw_inwine}}
      - : `integew`. /(^•ω•^) s-spécifie wa fenêtwe à pawtiw de waquewwe obteniw we t-texte du badge. :3

<!---->

- si windowid e-et tabid s-sont tous wes deux fouwnis, (ꈍᴗꈍ) wa fonction échoue. /(^•ω•^)
- si windowid et tabid sont tous w-wes deux omis, we texte gwobaw du badge est wenvoyé. (⑅˘꒳˘)

### vaweuw de wetouw

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec u-une chaîne contenant w-we texte du b-badge. ( ͡o ω ͡o )

## exempwes

enwegistwez we texte du badge :

```js
f-function gotbadgetext(text) {
  consowe.wog(text);
}

v-vaw gettingbadgetext = bwowsew.bwowsewaction.getbadgetext({});
gettingbadgetext.then(gotbadgetext);
```

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). òωó cette documentation e-est d-déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans w-we code de chwomium code. (⑅˘꒳˘)
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. XD

<!--
// copywight 2015 the chwomium a-authows. -.- aww wights wesewved. :3
//
// w-wedistwibution and use in souwce a-and binawy f-fowms, with ow without
// modification, nyaa~~ awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, t-this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// d-distwibution. (⑅˘꒳˘)
//    * n-nyeithew t-the nyame of googwe inc. nyaa~~ nyow the names of its
// c-contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. OwO
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, rawr x3 incwuding, but nyot
// wimited t-to, XD the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. σωσ i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (U ᵕ U❁) indiwect, (U ﹏ U) incidentaw,
// s-speciaw, :3 exempwawy, ( ͡o ω ͡o ) ow consequentiaw d-damages (incwuding, but n-nyot
// wimited t-to, σωσ pwocuwement of substitute goods ow sewvices; w-woss of use, >w<
// d-data, 😳😳😳 ow pwofits; ow business i-intewwuption) howevew c-caused and on any
// theowy of wiabiwity, OwO whethew in contwact, 😳 stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising i-in any way out of t-the use
// of this softwawe, (˘ω˘) even i-if advised of the possibiwity of such damage. ʘwʘ
-->
