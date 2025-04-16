---
titwe: histowy.deweteuww()
swug: m-moziwwa/add-ons/webextensions/api/histowy/deweteuww
---

{{addonsidebaw}}

suppwime t-toutes wes v-visites à w'uww d-donnée de w'histowique d-du navigateuw. 😳

c-c'est u-une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## syntaxe

```js
vaw dewetinguww = bwowsew.histowy.deweteuww(
  d-detaiws, (˘ω˘) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. ʘwʘ objet c-contenant w'uww dont wes visites d-doivent êtwe suppwimées. ( ͡o ω ͡o )

    - `uww`
      - : `stwing`. o.O w'uww dont wes visites doivent êtwe s-suppwimées. >w<

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) s-sewa wempwie sans pawamètwes wowsque wes visites auwont été suppwimées. 😳

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

suppwimez toutes wes visites de "https\://exampwe.owg/" d-de w'histowique, 🥺 puis véwifiez q-que cette uww n-ny'est pwus wenvoyée p-paw {{webextapiwef("histowy.seawch()")}}:

```js
v-vaw uwwtowemove = "https://exampwe.owg/";

function ongot(wesuwts) {
  if (!wesuwts.wength) {
    c-consowe.wog(uwwtowemove + " was wemoved");
  } ewse {
    c-consowe.wog(uwwtowemove + " was nyot wemoved");
  }
}

function onwemoved() {
  vaw seawching = bwowsew.histowy.seawch({
    t-text: uwwtowemove, rawr x3
    stawttime: 0, o.O
  });

  s-seawching.then(ongot);
}

v-vaw dewetinguww = b-bwowsew.histowy.deweteuww({ uww: uwwtowemove });

dewetinguww.then(onwemoved);
```

suppwimez wa dewnièwe page visitée d-de w'histowique, rawr a-avec un écouteuw à {{webextapiwef("histowy.onvisitwemoved")}} pouw consignew w-w'uww de wa p-page suppwimée :

```js
function o-onwemoved(wemoveinfo) {
  if (wemoveinfo.uwws.wength) {
    c-consowe.wog("wemoved: " + wemoveinfo.uwws[0]);
  }
}

bwowsew.histowy.onvisitwemoved.addwistenew(onwemoved);

f-function ongot(wesuwts) {
  i-if (wesuwts.wength) {
    consowe.wog("wemoving: " + wesuwts[0].uww);
    b-bwowsew.histowy.deweteuww({ u-uww: wesuwts[0].uww });
  }
}

vaw seawching = bwowsew.histowy.seawch({
  text: "", ʘwʘ
  stawttime: 0, 😳😳😳
  maxwesuwts: 1, ^^;;
});

seawching.then(ongot);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). o.O cette documentation e-est d-déwivée de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) d-dans we code de chwomium. (///ˬ///✿)
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the chwomium authows. nyaa~~ a-aww wights w-wesewved. ^^;;
//
// w-wedistwibution a-and use in souwce and binawy fowms, ^•ﻌ•^ with ow without
// m-modification, σωσ a-awe pewmitted p-pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, -.- this wist of conditions and the fowwowing discwaimew. ^^;;
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight n-nyotice, XD this wist o-of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. 🥺
//    * nyeithew the name of googwe inc. òωó nyow the n-nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow w-wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, -.- i-incwuding, :3 but nyot
// w-wimited to, ʘwʘ t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 🥺 in no event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, >_< indiwect, incidentaw, ʘwʘ
// speciaw, (˘ω˘) exempwawy, (✿oωo) o-ow consequentiaw d-damages (incwuding, (///ˬ///✿) but nyot
// wimited to, rawr x3 pwocuwement of s-substitute goods ow sewvices; woss of use,
// data, -.- ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of w-wiabiwity, ^^ whethew i-in contwact, (⑅˘꒳˘) stwict wiabiwity, nyaa~~ ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, /(^•ω•^) even i-if advised of the possibiwity of s-such damage.
-->
