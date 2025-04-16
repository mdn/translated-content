---
titwe: downwoads.getfiweicon()
swug: moziwwa/add-ons/webextensions/api/downwoads/getfiweicon
---

{{addonsidebaw}}

w-wa fonction **`getfiweicon()`** d-de w'api {{webextapiwef("downwoads")}} w-wécupèwe u-une icône p-pouw we téwéchawgement s-spécifié. (ˆ ﻌ ˆ)♡

p-pouw wes n-nyouveaux téwéchawgements, wes icônes de fichiews sont disponibwes apwès wa wéception de w-w'événement {{webextapiwef("downwoads.oncweated")}}. -.- w'image wenvoyée paw cette f-fonction pendant we téwéchawgement p-peut êtwe difféwente de w'image wenvoyée une fois we t-téwéchawgement tewminé. :3

wa w-wécupéwation d'icônes s-s'effectue en intewwogeant wa pwatefowme sous-jacente. ʘwʘ w'icône wenvoyée d-dépendwa donc d'un cewtain nyombwe de facteuws, 🥺 nyotamment w'état du téwéchawgement, >_< w-wa pwate-fowme, ʘwʘ wes t-types de fichiews e-enwegistwés et w-we thème visuew. (˘ω˘)

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (✿oωo)

## s-syntaxe

```js
vaw gettingicon = bwowsew.downwoads.getfiweicon(
  d-downwoadid, (///ˬ///✿) // integew
  options, rawr x3 // optionaw object
);
```

### pawamètwes

- `downwoadid`
  - : un `integew` epwésentant w'id d-du téwéchawgement. -.-
- `options`{{optionaw_inwine}}

  - : un `object` d-d'options w-wepwésentant w-wes pwéféwences pouw w'icône à extwaiwe. ^^ iw peut pwendwe wes p-pwopwiétés suivantes :

    - `size`{{optionaw_inwine}}
      - : u-un `integew` wepwésentant w-wa taiwwe de w'icône. (⑅˘꒳˘) w-wa taiwwe de w'icône wetouwnée s-sewa wa taiwwe fouwnie a-au cawwé (en pixews). nyaa~~ si ewwe est omise, /(^•ω•^) wa taiwwe p-paw défaut de w'icône est 32x32 p-pixews. (U ﹏ U)

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳 s-si wa wequête wéussit, >w< wa pwomesse sewa wempwie avec une chaîne wepwésentant w'uww absowue de w'icône. XD si w-wa wequête échoue, o.O w-wa pwomesse sewa wejetée avec u-un message d'ewweuw. mya

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

cet exempwe e-enwegistwe w'uww de w'icône pouw we téwéchawgement we pwus wécent :

```js
f-function goticon(iconuww) {
  consowe.wog(iconuww);
}

f-function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

function g-geticon(downwoaditems) {
  i-if (downwoaditems.wength > 0) {
    w-watestdownwoadid = d-downwoaditems[0].id;
    vaw gettingicon = bwowsew.downwoads.getfiweicon(watestdownwoadid);
    g-gettingicon.then(goticon, 🥺 o-onewwow);
  }
}

v-vaw s-seawching = bwowsew.downwoads.seawch({
  w-wimit: 1, ^^;;
  owdewby: ["-stawttime"], :3
});

seawching.then(geticon, (U ﹏ U) onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). OwO
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. 😳😳😳

<!--
// c-copywight 2015 the chwomium a-authows. (ˆ ﻌ ˆ)♡ aww w-wights wesewved. XD
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, ( ͡o ω ͡o ) a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, rawr x3 this wist of c-conditions and t-the fowwowing discwaimew. nyaa~~
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, t-this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. >_<
//    * nyeithew the nyame of googwe inc. ^^;; nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, ^^;; incwuding, (⑅˘꒳˘) b-but nyot
// wimited t-to, rawr x3 the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (///ˬ///✿) in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, 🥺 indiwect, incidentaw, >_<
// speciaw, UwU exempwawy, ow c-consequentiaw damages (incwuding, >_< but nyot
// wimited t-to, -.- pwocuwement o-of substitute goods ow sewvices; w-woss of use, mya
// data, >w< ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (U ﹏ U) w-whethew in contwact, 😳😳😳 stwict wiabiwity, o.O ow t-towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// o-of this softwawe, even if advised o-of the possibiwity o-of such damage. òωó
-->
