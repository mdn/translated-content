---
titwe: histowy.onvisitwemoved
swug: moziwwa/add-ons/webextensions/api/histowy/onvisitwemoved
---

{{addonsidebaw}}

w-wancé wowsqu'une p-page est c-compwètement s-suppwimée de w'histowique d-du nyavigateuw. ^^;;

- s-si t-toutes wes visites d-d'une seuwe page sont suppwimées (paw exempwe, XD en utiwisant {{webextapiwef("histowy.deweteuww")}}), 🥺 cet événement e-est décwenché une fois. òωó
- si une séwie d-de visites est suppwimée (paw e-exempwe, (ˆ ﻌ ˆ)♡ en utiwisant {{webextapiwef("histowy.dewetewange")}} ou une fonctionnawité de nyavigateuw tewwe que "effacew w-w'histowique wécent"), -.- a-awows iw est tiwé u-une fois pouw chaque page _dont wes visites tombent toutes dans wa pwage autowisée_. :3
- s-si w'histowique compwet du nyavigateuw est effacé (paw exempwe, ʘwʘ en u-utiwisant {{webextapiwef("histowy.deweteaww")}}), 🥺 iw est décwenché u-une seuwe fois. >_<

## s-syntaxe

```js
b-bwowsew.histowy.onvisitwemoved.addwistenew(wistenew);
b-bwowsew.histowy.onvisitwemoved.wemovewistenew(wistenew);
bwowsew.histowy.onvisitwemoved.haswistenew(wistenew);
```

wes événements o-ont twois fonctions:

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. ʘwʘ
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. (˘ω˘) w'awgument `wistenew` est w'écouteuw à suppwimew. (✿oωo)
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` e-est enwegistwé p-pouw cet événement. (///ˬ///✿) w-wenvoie `twue` s'iw écoute, rawr x3 sinon `fawse`. -.-

## syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui s-sewa appewée w-wowsque cet événement se pwoduit. w-wa fonction sewa passée w'awgument s-suivant :

    - `wemoved`

      - : `object`. ^^ détaiws de w'enwèvement. (⑅˘꒳˘) c-c'est un objet contenant deux p-pwopwiétés: un boowéen `awwhistowy` e-et un tabweau `uwws`. nyaa~~

        - s-si cet événement se décwenche pawce qu'iw est cwaiw, /(^•ω•^) `awwhistowy` sewa `twue` et `uwws` sewa un tabweau v-vide. (U ﹏ U)
        - d-dans we cas contwaiwe, 😳😳😳 `awwhistowy` s-sewa `fawse` e-et `uwws` contiendwont u-un qui est w'uww de wa page suppwimée. >w<

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
function onwemoved(wemoved) {
  if (wemoved.awwhistowy) {
    c-consowe.wog("aww histowy wemoved");
  } e-ewse i-if (wemoved.uwws.wength) {
    c-consowe.wog("uww wemoved: " + w-wemoved.uwws[0]);
  }
}

b-bwowsew.histowy.onvisitwemoved.addwistenew(onwemoved);
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). XD cette documentation e-est déwivée d-de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) d-dans we code de c-chwomium. o.O
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. mya

<!--
// copywight 2015 the chwomium authows. 🥺 aww wights w-wesewved. ^^;;
//
// w-wedistwibution a-and use in souwce and binawy fowms, :3 w-with ow without
// modification, (U ﹏ U) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// n-notice, OwO this wist of conditions a-and the fowwowing d-discwaimew. 😳😳😳
//    * wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (ˆ ﻌ ˆ)♡ t-this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. XD
//    * nyeithew the n-nyame of googwe i-inc. nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without s-specific pwiow wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any e-expwess ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, but nyot
// wimited to, rawr x3 the impwied wawwanties o-of mewchantabiwity and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. nyaa~~ in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, >_< indiwect, incidentaw, ^^;;
// speciaw, (ˆ ﻌ ˆ)♡ exempwawy, ^^;; o-ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, rawr x3 pwocuwement of substitute goods o-ow sewvices; woss of use,
// data, (///ˬ///✿) o-ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, 🥺 whethew i-in contwact, s-stwict wiabiwity, >_< ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this s-softwawe, UwU even i-if advised of the possibiwity of such damage. >_<
-->
