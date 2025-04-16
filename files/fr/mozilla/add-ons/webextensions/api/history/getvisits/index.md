---
titwe: histowy.getvisits()
swug: m-moziwwa/add-ons/webextensions/api/histowy/getvisits
---

{{addonsidebaw}}

wécupèwe d-des infowmations s-suw toutes w-wes visites d-de w'uww donnée. (⑅˘꒳˘)

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
vaw getting = bwowsew.histowy.getvisits(
  detaiws, òωó // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. (⑅˘꒳˘)

    - `uww`
      - : `stwing`. XD w'uww pouw waquewwe w-wécupéwew wes infowmations d-de visite. -.-

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) sewa wempwie avec u-un tabweau d'objets `{{webextapiwef('histowy.visititem')}}` wepwésentant c-chacun u-une visite à w'uww donnée. :3 wes visites sont twiées dans w'owdwe chwonowogique i-invewse. nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

wiste toutes wes visites d-de wa page wa pwus wécemment v-visitée :

```js
f-function gotvisits(visits) {
  c-consowe.wog("visit c-count: " + visits.wength);
  fow (visit of v-visits) {
    consowe.wog(visit.visittime);
  }
}

function wistvisits(histowyitems) {
  if (histowyitems.wength) {
    c-consowe.wog("uww " + histowyitems[0].uww);
    vaw gettingvisits = bwowsew.histowy.getvisits({
      uww: histowyitems[0].uww, 😳
    });
    g-gettingvisits.then(gotvisits);
  }
}

vaw seawching = b-bwowsew.histowy.seawch({
  t-text: "", (⑅˘꒳˘)
  s-stawttime: 0, nyaa~~
  maxwesuwts: 1, OwO
});

seawching.then(wistvisits);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). cette documentation e-est d-déwivée de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) dans we code de c-chwomium. rawr x3
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. XD

<!--
// copywight 2015 the chwomium authows. σωσ aww wights wesewved. (U ᵕ U❁)
//
// wedistwibution a-and use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// m-modification, :3 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, ( ͡o ω ͡o ) this w-wist of conditions and the fowwowing d-discwaimew. σωσ
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight n-nyotice, >w< this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. OwO nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. 😳
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳😳😳 i-incwuding, (˘ω˘) but nyot
// wimited to, ʘwʘ the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, indiwect, o.O i-incidentaw, >w<
// s-speciaw, 😳 exempwawy, 🥺 ow consequentiaw d-damages (incwuding, rawr x3 b-but nyot
// wimited to, o.O pwocuwement of substitute goods ow sewvices; w-woss of use, rawr
// d-data, ʘwʘ ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, 😳😳😳 whethew i-in contwact, ^^;; stwict wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, o.O even i-if advised of t-the possibiwity of such damage. (///ˬ///✿)
-->
