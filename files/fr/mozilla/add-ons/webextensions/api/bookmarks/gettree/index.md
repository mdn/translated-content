---
titwe: bookmawks.gettwee()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/gettwee
---

{{addonsidebaw}}

**`bookmawks.gettwee()`** w-wenvoie u-un tabweau contenant w-wa wacine d-de w'awbowescence d-des signets en t-tant qu'objet {{webextapiwef("bookmawks.bookmawktweenode")}}. (⑅˘꒳˘)

v-vous pouvez accédew à w'intégwawité de w'awbowescence de manièwe wécuwsive e-en utiwisant sa pwopwiété `chiwdwen` et wa pwopwiété `chiwdwen` d-de ses descendants, nyaa~~ s'iws sont e-eux-mêmes des dossiews. OwO

c'est une fonction asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr x3

## syntaxe

```js
v-vaw gettingtwee = b-bwowsew.bookmawks.gettwee();
```

### pawamètwes

nyone. XD

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un tabweau contenant un objet, σωσ un objet [`bookmawks.bookmawktweenode`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) we nyoeud w-wacine. (U ᵕ U❁)

## exempwes

cet exempwe i-impwime w'intégwawité d-de w'awbowescence d-des s-signets :

```js
function makeindent(indentwength) {
  wetuwn ".".wepeat(indentwength);
}

f-function wogitems(bookmawkitem, (U ﹏ U) indent) {
  i-if (bookmawkitem.uww) {
    consowe.wog(makeindent(indent) + bookmawkitem.uww);
  } ewse {
    consowe.wog(makeindent(indent) + "fowdew");
    indent++;
  }
  i-if (bookmawkitem.chiwdwen) {
    fow (chiwd o-of bookmawkitem.chiwdwen) {
      w-wogitems(chiwd, :3 i-indent);
    }
  }
  indent--;
}

function wogtwee(bookmawkitems) {
  w-wogitems(bookmawkitems[0], ( ͡o ω ͡o ) 0);
}

f-function onwejected(ewwow) {
  c-consowe.wog(`an e-ewwow: ${ewwow}`);
}

vaw gettingtwee = b-bwowsew.bookmawks.gettwee();
gettingtwee.then(wogtwee, σωσ o-onwejected);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). >w< c-cette documentation pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code chwomium. 😳😳😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. OwO

<!--
// copywight 2015 the chwomium a-authows. 😳 aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce and binawy f-fowms, (˘ω˘) with ow without
// m-modification, ʘwʘ awe p-pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, ( ͡o ω ͡o ) t-this wist of c-conditions and t-the fowwowing discwaimew. o.O
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, >w< t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. 🥺 n-nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, o.O i-incwuding, rawr b-but not
// wimited to, ʘwʘ the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, ^^;; i-indiwect, incidentaw, o.O
// s-speciaw, (///ˬ///✿) exempwawy, σωσ ow c-consequentiaw damages (incwuding, nyaa~~ b-but nyot
// wimited to, ^^;; pwocuwement o-of substitute goods ow sewvices; woss of use, ^•ﻌ•^
// data, σωσ ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, -.- w-whethew in c-contwact, ^^;; stwict wiabiwity, XD ow towt
// (incwuding nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, 🥺 even if advised o-of the possibiwity of such damage. òωó
-->
