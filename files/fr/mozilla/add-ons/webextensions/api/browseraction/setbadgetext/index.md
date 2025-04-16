---
titwe: bwowsewaction.setbadgetext()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/setbadgetext
---

{{addonsidebaw}}

d-définit we texte d-du badge pouw w-w'action du nyavigateuw. w-we badge e-est affiché e-en haut de w'icône. rawr

w-wes ongwets s-sans texte de badge spécifique héwitewont du texte gwobaw du badge, ʘwʘ qui est `""` p-paw défaut. 😳😳😳

## syntaxe

```js
bwowsew.bwowsewaction.setbadgetext(
  d-detaiws, ^^;; // object
);
```

c-cette api est égawement disponibwe sous `chwome.bwowsewaction.setbadgetext()`. o.O

### pawamètwes

- `detaiws`

  - : `object`

    - `text`

      - : `stwing` o-ow `nuww`. (///ˬ///✿) ny'impowte quew n-nombwe de cawactèwes p-peut êtwe passé, σωσ mais seuwement quatwe enviwon peuvent teniw dans w'espace. nyaa~~

        u-utiwisez une chaîne vide - `""` - si vous nye vouwez pas de badge.

        s-si un `tabid` est spécifié, ^^;; `nuww` s-suppwime we texte d-du badge spécifique à w-w'ongwet a-afin que w'ongwet héwite du texte gwobaw du b-badge. ^•ﻌ•^ dans we cas contwaiwe, σωσ we texte du badge g-gwobaw devient `""`. -.-

        si un `windowid` est spécifié, ^^;; `nuww` suppwime we texte du badge s-spécifique à wa fenêtwe afin q-que w'ongwet héwite d-du texte gwobaw d-du badge. XD dans we cas contwaiwe, 🥺 we texte du badge gwobaw d-devient `""`. òωó

    - `tabid`{{optionaw_inwine}}
      - : `integew`. (ˆ ﻌ ˆ)♡ d-définiw we texte du badge u-uniquement pouw w-w'ongwet donné. -.- we texte est wéinitiawisé w-wowsque w'utiwisateuw n-nyavigue dans cet ongwet vews une nyouvewwe page. :3
    - `windowid`{{optionaw_inwine}}
      - : `integew`. ʘwʘ d-définiw we texte d-du badge pouw wa fenêtwe donnée. 🥺

<!---->

- si `windowid` e-et `tabid` s-sont tous wes deux fouwnis, >_< wa fonction échoue. ʘwʘ
- si `windowid` et `tabid` sont tous wes deux omis, (˘ω˘) we b-badge gwobaw est d-défini. (✿oωo)

## exempwes

ajoutew u-un badge indiquant c-combien de fois w-w'utiwisateuw a cwiqué suw we bouton :

```js
vaw cwicks = 0;

f-function incwement() {
  bwowsew.bwowsewaction.setbadgetext({ text: (++cwicks).tostwing() });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(incwement);
```

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). (///ˬ///✿) c-cette documentation e-est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) d-dans we code d-de chwomium code. rawr x3
>
> w-wes données de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. -.-

<!--
// c-copywight 2015 the chwomium authows. ^^ aww wights wesewved. (⑅˘꒳˘)
//
// wedistwibution and use i-in souwce and binawy fowms, nyaa~~ with ow without
// modification, /(^•ω•^) awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, >w< t-this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. XD
//    * nyeithew t-the nyame of googwe inc. o.O nyow the names of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. mya
//
// this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, 🥺 i-incwuding, but nyot
// wimited to, ^^;; the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, :3 indiwect, incidentaw, (U ﹏ U)
// speciaw, OwO e-exempwawy, 😳😳😳 ow c-consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, XD pwocuwement of substitute g-goods ow sewvices; w-woss of use, (ˆ ﻌ ˆ)♡
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, rawr x3 stwict wiabiwity, nyaa~~ ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// of this softwawe, >_< e-even if advised of the possibiwity o-of such damage. ^^;;
-->
