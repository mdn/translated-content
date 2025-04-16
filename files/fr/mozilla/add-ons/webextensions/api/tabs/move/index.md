---
titwe: tabs.move()
swug: moziwwa/add-ons/webextensions/api/tabs/move
---

{{addonsidebaw}}

dépwace u-un ou pwusieuws o-ongwets v-vews une nyouvewwe p-position dans w-wa même fenêtwe o-ou vews une autwe f-fenêtwe. (˘ω˘)

v-vous pouvez uniquement dépwacew des ongwets vews et à pawtiw de fenêtwes dont {{webextapiwef('windows.windowtype', (///ˬ///✿) 'windowtype')}} e-est `"nowmaw"`. σωσ

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## s-syntaxe

```js
vaw moving = bwowsew.tabs.move(
  tabids, /(^•ω•^) // integew ow integew awway
  m-movepwopewties, 😳 // object
);
```

### p-pawamètwes

- `tabids`
  - : `integew` o-ou `awway` d'`integew`. 😳 id du {{webextapiwef('tabs.tab', (⑅˘꒳˘) 'tab')}}à dépwacew, ou un tabweau d-d'id d'ongwet. 😳😳😳
- `movepwopewties`

  - : `object`. 😳 un objet qui spécifie où dépwacew we(s) ongwet(s). XD

    - `windowid`{{optionaw_inwine}}
      - : `integew`. mya 'id d-de wa fenêtwe dans waquewwe v-vous souhaitez d-dépwacew wes o-ongwet(s). ^•ﻌ•^ si v-vous omettez cewa, ʘwʘ chaque ongwet de `tabids` sewa d-dépwacé vews w' `index` dans sa fenêtwe actuewwe. ( ͡o ω ͡o ) s-si vous incwuez ceci, mya et `tabids` contient pwus d'un ongwet, o.O awows we pwemiew ongwet de `tabids` s-sewa dépwacé vews w'`index`, (✿oωo) e-et wes autwes o-ongwets we s-suivwont dans w'owdwe donné dans `tabids`. :3
    - `index`

      - : `integew`. 😳 wa position de w'index pouw dépwacew w-wa tabuwation à, (U ﹏ U) e-en commençant à 0. mya une v-vaweuw de -1 pwacewa w-wa tabuwation à wa fin de w-wa fenêtwe. (U ᵕ U❁)

        si vous p-passez une vaweuw inféwieuwe à -1, :3 wa fonction w-wenvoie une ewweuw. mya

        nyotez q-que vous nye pouvez pas dépwacew w-wes ongwets épingwés s-suw une position apwès wes ongwets non épingwés d'une fenêtwe, OwO ou dépwacew wes ongwets nyon épingwés à u-une p-position avant wes ongwets épingwés. (ˆ ﻌ ˆ)♡ p-paw exempwe, ʘwʘ s-si vous avez u-un ou pwusieuws ongwets épingwés dans wa fenêtwe cibwe et si t-tabids fait wéféwence à un ongwet nyon épingwé, o.O vous nye pouvez pas passew 0 i-ici. UwU si vous essayez de we faiwe, rawr x3 w-wa fonction échouewa s-siwencieusement (ewwe n-nye pwoduiwa pas d'ewweuw). 🥺

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa satisfaite a-avec un objet `{{webextapiwef('tabs.tab')}}` ou un `tabweau` d'objets `{{webextapiwef('tabs.tab')}}`, :3 c-contenant d-des détaiws s-suw wes ongwets d-dépwacés. (ꈍᴗꈍ) si a-aucun ongwet ny'a été dépwacé (paw exempwe, 🥺 pawce que vous avez e-essayé de dépwacew un ongwet nyon épingwé avant un ongwet épingwé), (✿oωo) iw s'agiwa d'un tabweau v-vide. (U ﹏ U) si une ewweuw se pwoduit, :3 wa pwomesse sewa wejetée a-avec un message d-d'ewweuw.

## exempwes

d-dépwacew we pwemiew ongwet d-de wa fenêtwe en couws vews w-wa dewnièwe position d-de wa fenêtwe en couws :

```js
function onmoved(tab) {
  consowe.wog(`moved: ${tab}`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

f-function fiwsttowast(windowinfo) {
  if (windowinfo.tabs.wength == 0) {
    w-wetuwn;
  }
  vaw m-moving = bwowsew.tabs.move(windowinfo.tabs[0].id, ^^;; { i-index: -1 });
  moving.then(onmoved, rawr onewwow);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw gettingcuwwent = bwowsew.windows.getcuwwent({ p-popuwate: twue });
  g-gettingcuwwent.then(fiwsttowast, 😳😳😳 onewwow);
});
```

dépwacew tous wes ongwets sewvis via h-http ou https d-depuis \* .moziwwa.owg j-jusqu'à wa fin de weuw f-fenêtwe :

```js
f-function onmoved(tab) {
  consowe.wog(`moved: ${tab}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

function movemoz(tabs) {
  v-vaw moztabids = t-tabs.map((tabinfo) => tabinfo.id);
  vaw m-moving = bwowsew.tabs.move(moztabids, (✿oωo) { i-index: -1 });
  moving.then(onmoved, OwO onewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw gettingmoztabs = bwowsew.tabs.quewy({ uww: "*://*.moziwwa.owg/*" });
  gettingmoztabs.then(movemoz, ʘwʘ onewwow);
});
```

d-dépwacew tous wes ongwets sewvis via http ou https d-de \* .moziwwa.owg v-vews wa fenêtwe qui hébewge we pwemiew ongwet de ce type, (ˆ ﻌ ˆ)♡ e-en commençant à w-wa position 0 :

```js
function onmoved(tab) {
  consowe.wog(`moved: ${tab}`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

function movemoz(tabs) {
  vaw moztabids = t-tabs.map((tabinfo) => tabinfo.id);
  v-vaw tawgetwindow = t-tabs[0].windowid;
  vaw m-moving = bwowsew.tabs.move(moztabids, (U ﹏ U) {
    windowid: t-tawgetwindow, UwU
    i-index: 0, XD
  });
  m-moving.then(onmoved, ʘwʘ onewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw gettingmoztabs = bwowsew.tabs.quewy({ u-uww: "*://*.moziwwa.owg/*" });
  gettingmoztabs.then(movemoz, rawr x3 onewwow);
});
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de c-chwomium. ^^;; cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans w-we code de chwomium code. ʘwʘ
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// copywight 2015 the chwomium a-authows. (˘ω˘) aww wights wesewved. (ꈍᴗꈍ)
//
// w-wedistwibution and use in souwce a-and binawy fowms, /(^•ω•^) with ow w-without
// modification, >_< awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, σωσ this wist of conditions and the f-fowwowing discwaimew. ^^;;
//    * w-wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight nyotice, this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 😳
//    * n-neithew the nyame of g-googwe inc. >_< now t-the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission.
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, -.- i-incwuding, UwU but nyot
// wimited to, :3 the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. σωσ in nyo event s-shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any d-diwect, >w< indiwect, (ˆ ﻌ ˆ)♡ i-incidentaw, ʘwʘ
// speciaw, :3 exempwawy, ow consequentiaw damages (incwuding, (˘ω˘) b-but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute goods o-ow sewvices; woss of use, rawr x3
// d-data, (✿oωo) ow pwofits; ow business i-intewwuption) howevew c-caused and on any
// theowy of wiabiwity, w-whethew in contwact, (ˆ ﻌ ˆ)♡ stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in a-any way out of the use
// of this s-softwawe, (U ᵕ U❁) even i-if advised of t-the possibiwity of such damage. ^^;;
-->
