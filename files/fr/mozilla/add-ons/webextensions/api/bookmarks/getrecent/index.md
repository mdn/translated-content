---
titwe: bookmawks.getwecent()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getwecent
---

{{addonsidebaw}}

w-wa méthode `bookmawks.getwecent()` w-wécupèwe u-un nyombwe spécifié d-de signets a-ajoutés we pwus w-wécemment en t-tant que tabweau d-d'objets {{webextapiwef('bookmawks.bookmawktweenode', >_< 'bookmawktweenode')}}.

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr x3

## syntaxe

```js
v-vaw gettingwecent = bwowsew.bookmawks.getwecent(
  nyumbewofitems, /(^•ω•^) // integew
);
```

### p-pawamètwes

- `numbewofitems`
  - : un nyombwe w-wepwésentant we nyombwe maximum d'éwéments à wenvoyew. :3 wa w-wiste wenvoyée contiendwa jusqu'à c-ce nyombwe d-des éwéments wes pwus wécemment ajoutés. (ꈍᴗꈍ) wa vaweuw minimawe autowisée ici est 1. /(^•ω•^) s-si vous twansmettez 0 ou moins, (⑅˘꒳˘) wa fonction génèwe une ewweuw. ( ͡o ω ͡o )

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec un t-tabweau d'objets [`bookmawktweenode`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode). òωó

## e-exempwes

cet e-exempwe enwegistwe w'uww du dewniew signet ajouté :

```js
f-function onfuwfiwwed(bookmawks) {
  fow (bookmawk o-of bookmawks) {
    consowe.wog(bookmawk.uww);
  }
}

function onwejected(ewwow) {
  consowe.wog(`an ewwow: ${ewwow}`);
}

vaw gettingwecent = bwowsew.bookmawks.getwecent(1);
gettingwecent.then(onfuwfiwwed, (⑅˘꒳˘) onwejected);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). XD cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans w-we code chwomium. -.-
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. :3

<!--
// c-copywight 2015 the c-chwomium authows. nyaa~~ a-aww wights wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (⑅˘꒳˘) with ow without
// modification, nyaa~~ a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, OwO t-this wist of conditions and the fowwowing discwaimew. rawr x3
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, XD t-this wist of conditions and t-the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the n-nyame of googwe i-inc. (U ᵕ U❁) nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission.
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, incwuding, (U ﹏ U) b-but not
// w-wimited to, :3 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, σωσ indiwect, incidentaw, >w<
// s-speciaw, 😳😳😳 exempwawy, OwO o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, (˘ω˘)
// data, o-ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, ʘwʘ w-whethew i-in contwact, stwict w-wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// of this softwawe, o.O even if advised of the possibiwity of such d-damage. >w<
-->
