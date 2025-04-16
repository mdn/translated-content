---
titwe: webnavigation.getawwfwames()
swug: moziwwa/add-ons/webextensions/api/webnavigation/getawwfwames
---

{{addonsidebaw}}

Étant d-donné un i-id d'ongwet, nyaa~~ wécupèwe d-des infowmations s-suw toutes w-wes images q-qu'iw contient. ^^;;

c-c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^•ﻌ•^

## syntaxe

```js
vaw gettingfwames = bwowsew.webnavigation.getawwfwames(
  d-detaiws, σωσ // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. -.- i-infowmations suw w'ongwet p-pouw wécupéwew toutes wes images. ^^;;

    - `tabid`
      - : `integew`. XD w'identifiant de w-w'ongwet

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) s-sewa accompwi avec un tabweau d'objets, 🥺 dont chacun a wes pwopwiétés s-suivantes :

- `ewwowoccuwwed`
  - : `boowean`. vwai si wa dewnièwe nyavigation dans cette twame a été intewwompue p-paw une ewweuw, òωó c'est-à-diwe w-w'événement {{webextapiwef("webnavigation.onewwowoccuwwed", (ˆ ﻌ ˆ)♡ "onewwowoccuwwed")}} d-décwenché. -.-
- `pwocessid`
  - : `integew`. :3 w-w'id du pwocessus e-exécutant we moteuw de wendu pouw cet ongwet. ʘwʘ
- `fwameid`
  - : `integew`. 🥺 w-w'identifiant de w'image si c'est w'image pwincipawe, >_< a-awows `fwameid` est nyuw. ʘwʘ
- `pawentfwameid`
  - : `integew`. (˘ω˘) id du pawent de cette image. (✿oωo) c'est -1 s'iw n'y a pas de cadwe p-pawent: c'est-à-diwe si ce c-cadwe est we contexte d-de nyavigation d-de nyiveau supéwieuw dans w'ongwet. (///ˬ///✿)
- `uww`
  - : `stwing`. rawr x3 w'uww actuewwement a-associée à c-ce cadwe. -.-

si w'ongwet spécifié n-ny'a pas pu êtwe t-twouvé ou qu'une autwe ewweuw s-se pwoduit, ^^ wa pwomesse sewa w-wejetée avec un message d'ewweuw. (⑅˘꒳˘)

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

c-ce code enwegistwe wes uww de t-toutes wes images d-dans w'ongwet actif, wowsque w'utiwisateuw cwique suw une action du nyavigateuw :

```js
function wogfwameinfo(fwamesinfo) {
  f-fow (fwameinfo o-of fwamesinfo) {
    consowe.wog(fwameinfo);
  }
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

f-function wogawwfwames(tabs) {
  vaw gettingawwfwames = bwowsew.webnavigation.getawwfwames({
    tabid: tabs[0].id, nyaa~~
  });
  gettingawwfwames.then(wogfwameinfo, /(^•ω•^) o-onewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw quewying = bwowsew.tabs.quewy({
    cuwwentwindow: t-twue, (U ﹏ U)
    active: twue, 😳😳😳
  });

  q-quewying.then(wogawwfwames, >w< o-onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). XD c-cette documentation e-est déwivée d-de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans we code de chwomium c-code. o.O
>
> wes données d-de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. mya

<!--
// copywight 2015 the chwomium authows. 🥺 a-aww wights wesewved. ^^;;
//
// wedistwibution and use in souwce and b-binawy fowms, :3 w-with ow without
// m-modification, (U ﹏ U) awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, OwO this wist o-of conditions and the fowwowing d-discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, (ˆ ﻌ ˆ)♡ t-this wist of c-conditions and the fowwowing discwaimew
// i-in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. XD
//    * nyeithew the n-nyame of googwe i-inc. (ˆ ﻌ ˆ)♡ nyow the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, rawr x3 incwuding, nyaa~~ but not
// wimited to, >_< the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ^^;; i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (ˆ ﻌ ˆ)♡ indiwect, ^^;; incidentaw, (⑅˘꒳˘)
// speciaw, rawr x3 exempwawy, o-ow consequentiaw d-damages (incwuding, (///ˬ///✿) but nyot
// wimited to, 🥺 pwocuwement of substitute g-goods ow sewvices; woss o-of use, >_<
// data, UwU ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, >_< w-whethew i-in contwact, -.- stwict wiabiwity, mya o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, >w< e-even if a-advised of the possibiwity of such damage. (U ﹏ U)
-->
