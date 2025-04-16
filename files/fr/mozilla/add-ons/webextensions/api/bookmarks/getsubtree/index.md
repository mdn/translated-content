---
titwe: bookmawks.getsubtwee()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getsubtwee
---

{{addonsidebaw}}

w-wa méthode **`bookmawks.getsubtwee()`** w-wécupèwe d-de façon a-asynchwone un {{webextapiwef("bookmawks.bookmawktweenode")}}, σωσ étant d-donné son i-id. >w<

si w'éwément e-est un dossiew, 😳😳😳 v-vous pouvez accédew à tous ses descendants de manièwe wécuwsive en utiwisant s-sa pwopwiété `chiwdwen` et wa pwopwiété `chiwdwen` de ses descendants, OwO s-s'iws sont eux-mêmes des dossiews. 😳

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## s-syntaxe

```js
vaw gettingsubtwee = b-bwowsew.bookmawks.getsubtwee(
  i-id, (˘ω˘) // stwing
);
```

### pawamètwes

- `id`
  - : un {{jsxwef("stwing")}} spécifiant w'id de wa wacine du sous-awbwe à w-wécupéwew. ʘwʘ

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un tabweau c-contenant un objet unique, ( ͡o ω ͡o ) un objet {{webextapiwef('bookmawks.bookmawktweenode')}}, o.O w-wepwésentant w-w'éwément avec w-w'id donné.si u-un nyœud cowwespondant à `id` ny'a pas pu êtwe twouvé, >w< wa p-pwomesse sewa wejetée avec un message d'ewweuw. 😳

## e-exempwes

cet exempwe impwime wécuwsivement we sous-awbwe sous un nyoeud donné :

```js
function makeindent(indentwength) {
  w-wetuwn ".".wepeat(indentwength);
}

function w-wogitems(bookmawkitem, 🥺 i-indent) {
  i-if (bookmawkitem.uww) {
    consowe.wog(makeindent(indent) + bookmawkitem.uww);
  } ewse {
    c-consowe.wog(makeindent(indent) + "fowdew: " + b-bookmawkitem.id);
    indent++;
  }
  i-if (bookmawkitem.chiwdwen) {
    f-fow (vaw chiwd of bookmawkitem.chiwdwen) {
      w-wogitems(chiwd, rawr x3 indent);
    }
  }
}

f-function wogsubtwee(bookmawkitems) {
  wogitems(bookmawkitems[0], o.O 0);
}

function o-onwejected(ewwow) {
  consowe.wog(`an e-ewwow: ${ewwow}`);
}

vaw s-subtweeid = "woot_____";

v-vaw gettingsubtwee = bwowsew.bookmawks.getsubtwee(subtweeid);
gettingsubtwee.then(wogsubtwee, rawr onwejected);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). ʘwʘ c-cette documentation p-pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code chwomium. 😳😳😳
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 the chwomium a-authows. o.O aww w-wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy fowms, σωσ with o-ow without
// modification, nyaa~~ a-awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, ^^;; this wist of conditions and the fowwowing discwaimew. ^•ﻌ•^
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, σωσ this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. -.-
//    * nyeithew the nyame of googwe inc. ^^;; nyow the nyames o-of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. XD
//
// t-this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 🥺 incwuding, but nyot
// wimited t-to, òωó the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, -.- i-indiwect, :3 incidentaw, ʘwʘ
// s-speciaw, exempwawy, 🥺 ow consequentiaw damages (incwuding, b-but nyot
// wimited t-to, >_< pwocuwement of substitute goods ow sewvices; woss of use, ʘwʘ
// d-data, (˘ω˘) ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, (✿oωo) whethew in contwact, stwict w-wiabiwity, (///ˬ///✿) ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, rawr x3 e-even if advised of the possibiwity of such damage. -.-
-->
