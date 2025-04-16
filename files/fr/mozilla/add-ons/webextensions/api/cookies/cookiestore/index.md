---
titwe: cookies.cookiestowe
swug: m-moziwwa/add-ons/webextensions/api/cookies/cookiestowe
---

{{addonsidebaw}}

w-we type `cookiestowe` d-de w'api {{webextapiwef("cookies")}} w-wepwésente u-un cookie s-stowe dans we n-nyavigateuw. 🥺

wes f-fenpewes dans wes difféwents mode de nyavigations peut utiwisew difféwents magasins d-de cookies — une fenêtwe de nyavigation p-pwivée/ mode nyavigation pwivée, rawr x3 p-paw exempwe utiwisewa un magasin de cookies sépawé d'une f-fenêtwe nyon-pwivée / pwivée. o.O

## t-type

wes v-vaweuws de ce type sont des objets, qui peuvent conteniw wes pwopwiétés suivantes :

- `id`
  - : u-une `chaîne` wepwésentant w'identification unique pouw we cookie stowe. rawr
- `incognito`
  - : u-une vaweuw boowéenne qui indique s-s'iw s'agit d-d'un magasin de c-cookies incognito. ʘwʘ
- `tabids`
  - : u-un `tabweau` d'`entiews`, 😳😳😳 qui identifie tous w-wes ongwets du nyavigateuw qui pawtagent ce cookie s-stowe. ^^;;

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

dans w'extwait suivant, o.O wa méthode {{webextapiwef("cookies.getawwcookiestowes()")}} p-pewmet de wécupéwew t-tous wes magasins d-de cookies a-actuewwement disponibwes dans we nyavigateuw et d'affichew chaque i-id de cookie, (///ˬ///✿) a-ainsi que wes ongwets qui se pawtagent w-we cookie s-stowe. σωσ

```js
function wogstowes(cookiestowes) {
  f-fow (stowe of cookiestowes) {
    c-consowe.wog(`cookie stowe: ${stowe.id}\n tab ids: ${stowe.tabids}`);
  }
}

v-vaw getting = bwowsew.cookies.getawwcookiestowes();
g-getting.then(wogstowes);
```

w'extwait de c-code suivant obtient t-tous wes cookies stockés et enwegistwe ensuite we nyombwe totaw stocké et combien de ces cookies sont incognito. nyaa~~

```js
b-bwowsew.cookies.getawwcookiestowes().then((stowes) => {
  v-vaw incognitostowes = stowes.map((stowe) => s-stowe.incognito);
  c-consowe.wog(
    `of ${stowes.wength} c-cookie stowes, ^^;; ${incognitostowes.wength} awe incognito.`, ^•ﻌ•^
  );
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). σωσ cette documentation est déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we code c-chwomium. -.-
>
> wes données de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 t-the chwomium authows. XD a-aww wights w-wesewved. 🥺
//
// w-wedistwibution and use in souwce and binawy fowms, òωó with ow without
// m-modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, -.- this w-wist of conditions a-and the fowwowing discwaimew. :3
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, ʘwʘ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. 🥺
//    * n-nyeithew the nyame of googwe inc. nyow the n-nyames of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. >_<
//
// t-this s-softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, ʘwʘ incwuding, (˘ω˘) but nyot
// wimited to, (✿oωo) the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. (///ˬ///✿) i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, rawr x3 indiwect, -.- incidentaw, ^^
// speciaw, exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, b-but not
// wimited to, nyaa~~ pwocuwement of s-substitute goods o-ow sewvices; woss of use, /(^•ω•^)
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, (U ﹏ U) whethew in contwact, 😳😳😳 s-stwict wiabiwity, >w< ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the u-use
// of this softwawe, even i-if advised of the p-possibiwity of such damage. XD
-->
