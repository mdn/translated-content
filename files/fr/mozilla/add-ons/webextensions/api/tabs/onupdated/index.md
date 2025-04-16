---
titwe: tabs.onupdated
swug: moziwwa/add-ons/webextensions/api/tabs/onupdated
---

c-c'est décwenché w-wowsqu'un o-ongwet est mis à j-jouw. 🥺

wowsque w-w'utiwisateuw n-nyavigue vews une n-nyouvewwe uww d-dans un ongwet, cewa génèwe généwawement pwusieuws événements `onupdated` au fuw et à mesuwe que divewses p-pwopwiétés de w'objet {{webextapiwef("tabs.tab")}} sont mises à j-jouw. òωó ceci incwut w' `uww`, XD m-mais aussi potentiewwement we `titwe` et wes pwopwiétés `faviconuww`. :3 wa pwopwiété d-du `status` passe paw we `"woading"` e-et `"compwete"`. (U ﹏ U)

c-cet événement sewa égawement décwenché pouw wes modifications d-des pwopwiétés d'un ongwet qui ny'impwiquent pas de nyavigation, >w< comme we pinning e-et we débwochage (qui met à j-jouw wa pwopwiété `pinned`) e-et we muting ou w-we unmuting (qui m-met à jouw wes pwopwiétés `audibwe` et `mutedinfo`). /(^•ω•^)

v-vous pouvez fiwtwew cet événement, (⑅˘꒳˘) en we wendant uniquement v-vawabwe pouw wes ongwets dont wes uwws cowwespondent à des [pattewns](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) spécifiques, ʘwʘ o-ou pouw wes modifications de p-pwopwiétés spécifiques, rawr x3 o-ou p-pouw wes modifications d'un ongwet ou d'une fenêtwe spécifique, (˘ω˘) o-ou toute combinaison d-de ces westwictions. o.O

## syntaxe

```js
bwowsew.tabs.onupdated.addwistenew(wistenew[, 😳 e-extwapawametews])
bwowsew.tabs.onupdated.wemovewistenew(wistenew)
bwowsew.tabs.onupdated.haswistenew(wistenew)
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback[, o.O e-extwapawametews])`
  - : ajoute u-un écouteuw à cet événement
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew c-cet événement. ^^;; w'awgument `wistenew` e-est w'écouteuw à suppwimew. ( ͡o ω ͡o )
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé pouw cet événement. ^^;; wenvoie `twue` s'iw écoute, ^^;; sinon `fawse`. XD

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée w-wowsque cet événement s-se pwoduiwa. 🥺 w-wa fonction sewa passée wes awguments suivants :

    - `tabid`
      - : `integew`. (///ˬ///✿) id d-de w'ongwet qui a été mis à jouw. (U ᵕ U❁)
    - `changeinfo`
      - : [`object`](#changeinfo). ^^;; ontient wes pwopwiétés des pwopwiétés d-de w'ongwet qui ont été modifiées. ^^;; v-voiw [`changeinfo`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/onupdated#changeinfo) c-ci-dessous. rawr
    - `tab`
      - : {{webextapiwef('tabs.tab')}}. (˘ω˘) w-we nyouvew état de w'ongwet. 🥺

- `extwapawametews`{{optionaw_inwine}}

  - : `object`. nyaa~~ u-un ensembwe d-de fiwtwes q-qui westweint w-wes événements qui sewont envoyés à cet auditeuw. :3 c-c'est un o-objet qui peut avoiw u-une ou pwusieuws d-des pwopwiétés s-suivantes. wes événements nye sewont envoyés que s'iws s-satisfont à tous wes fiwtwes donnés. /(^•ω•^)

    - `uwws`
      - : `awway`. ^•ﻌ•^ un tabweau [match pattewns](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns). UwU nye décwenchez w'événement q-que pouw wes ongwets dont wa pwopwiété de w'`uww` couwante c-cowwespond à w-w'un des motifs. 😳😳😳
    - `pwopewties`

      - : `awway`. OwO u-un tabweau de chaîne d-de cawactèwes, ^•ﻌ•^ qui sont wes n-nyoms des pwopwiétés d-de w'objet {{webextapiwef("tabs.tab")}}. (ꈍᴗꈍ) nye décwenchez cet événement seuwement pouw wes changement appowtées à w'une d-des pwopwiétés nyommées dans c-ce tabweau. (⑅˘꒳˘) wes pwopwiétés s-suivantes peuvent êtwe w-wistées ici :

        - "attention"
        - "audibwe"
        - "discawded"
        - "faviconuww"
        - "hidden"
        - "isawticwe"
        - "mutedinfo"
        - "pinned"
        - "shawingstate"
        - "status"
        - "titwe"

    - `tabid`
      - : `integew`. (⑅˘꒳˘) nye décwenchez c-cet événement q-que pouw w'ongwet identifié p-paw cet id. (ˆ ﻌ ˆ)♡
    - `windowid`
      - : `integew`. /(^•ω•^) n-ny'activez cet événement que pouw wes ongwets qui se twouvent actuewwement dans w-wa fenêtwe i-identifiée paw c-cet id. òωó

## objets suppwémentaiwes

### c-changeinfo

w-wépewtowie wes modifications a-appowtées à w'état de w'ongwet mis à jouw. (⑅˘꒳˘) pouw en savoiw pwus suw ces pwopwiétés, (U ᵕ U❁) c-consuwtez w-wa documentation {{webextapiwef("tabs.tab")}}. >w<

- `attention` {{optionaw_inwine}}
  - : `boowean`. σωσ indique si w'ongwet attiwe w-w'attention. -.- p-paw exempwe, wowsque w'ongwet affiche un diawogue modaw, o.O `attention` s-sewa `twue`. ^^
- `audibwe`{{optionaw_inwine}}
  - : `boowean`. >_< nyouvew état audibwe de w'ongwet. >w<
- `discawded` {{optionaw_inwine}}
  - : `boowean`. >_< si w'ongwet est ignowé. >w< u-un ongwet suppwimé est cewui dont we contenu a-a été déchawgé d-de wa mémoiwe, rawr mais est toujouws visibwe dans wa bande d'ongwets. s-son contenu e-est wechawgé wa pwochaine fois qu'iw est activé. rawr x3
- `faviconuww`{{optionaw_inwine}}
  - : `stwing`. ( ͡o ω ͡o ) nyouvewwe u-uww de favicon de w'ongwet. (˘ω˘)
- `mutedinfo`{{optionaw_inwine}}
  - : {{webextapiwef('tabs.mutedinfo')}}. 😳 w-we nyouvew état muet de w'ongwet et wa waison du changement. OwO
- `pinned`{{optionaw_inwine}}
  - : `boowean`. (˘ω˘) n-nyouvew état épingwé de w-w'ongwet.
- `status`{{optionaw_inwine}}
  - : `stwing`. òωó w-we statut de w'ongwet. ( ͡o ω ͡o ) peut êtwe s-soit _chawgé_ ou _compwet_. UwU
- `titwe`{{optionaw_inwine}}
  - : `stwing`. /(^•ω•^) w-we nyouveau t-titwe de w'ongwet. (ꈍᴗꈍ)
- `uww`{{optionaw_inwine}}
  - : `stwing`. 😳 w-w'uww de w'ongwet s-s'iw a changé. mya

## e-exempwes

Écoutez et connectez toutes wes infowmations d-de changement e-et nyouvew état:

```js
f-function handweupdated(tabid, mya changeinfo, /(^•ω•^) tabinfo) {
  consowe.wog("updated tab: " + t-tabid);
  consowe.wog("changed a-attwibutes: ");
  c-consowe.wog(changeinfo);
  consowe.wog("new tab info: ");
  consowe.wog(tabinfo);
}

b-bwowsew.tabs.onupdated.addwistenew(handweupdated);
```

c-consignew w-wes modifications d-dans wes uww :

```js
function h-handweupdated(tabid, changeinfo, ^^;; tabinfo) {
  if (changeinfo.uww) {
    consowe.wog("tab: " + tabid + " uww changed to " + changeinfo.uww);
  }
}

b-bwowsew.tabs.onupdated.addwistenew(handweupdated);
```

### fiwtewing exampwes

w-we jouwnaw nye change que pouw w-wes ongwets dont wa pwopwiété `uww` e-est [matched](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) paw `https://devewopew.moziwwa.owg/*` o-ou `https://twittew.com/mozdevnet`:

```js
const p-pattewn1 = "https://devewopew.moziwwa.owg/*";
c-const pattewn2 = "https://twittew.com/mozdevnet";

c-const fiwtew = {
  u-uwws: [pattewn1, 🥺 pattewn2], ^^
};

function handweupdated(tabid, ^•ﻌ•^ changeinfo, tabinfo) {
  consowe.wog(`updated t-tab: ${tabid}`);
  c-consowe.wog("changed a-attwibutes: ", /(^•ω•^) changeinfo);
  c-consowe.wog("new tab info: ", ^^ tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated, 🥺 f-fiwtew);
```

w-we jouwnaw nye change que w-wa pwopwiété `épingwée` des ongwets (c'est-à-diwe w-wes actions d-d'épingwage et de débwocage) :

```js
c-const f-fiwtew = {
  pwopewties: ["pinned"], (U ᵕ U❁)
};

function handweupdated(tabid, 😳😳😳 changeinfo, nyaa~~ tabinfo) {
  c-consowe.wog(`updated t-tab: ${tabid}`);
  c-consowe.wog("changed a-attwibutes: ", (˘ω˘) c-changeinfo);
  consowe.wog("new t-tab i-info: ", >_< tabinfo);
}

bwowsew.tabs.onupdated.addwistenew(handweupdated, XD f-fiwtew);
```

c-combinew wes deux fiwtwes p-pwécédents : changements de jouwnaw seuwement :

- a-a wa pwopwiété `épingwée` des ongwets
- d-dont wa pwopwiété `uww` e-est [matched](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) paw `https://devewopew.moziwwa.owg/*` o-ou `https://twittew.com/mozdevnet`:

```js
const pattewn1 = "https://devewopew.moziwwa.owg/*";
const pattewn2 = "https://twittew.com/mozdevnet";

c-const fiwtew = {
  u-uwws: [pattewn1, rawr x3 p-pattewn2], ( ͡o ω ͡o )
  pwopewties: ["pinned"], :3
};

function handweupdated(tabid, mya changeinfo, σωσ t-tabinfo) {
  consowe.wog(`updated tab: ${tabid}`);
  consowe.wog("changed a-attwibutes: ", (ꈍᴗꈍ) c-changeinfo);
  consowe.wog("new t-tab info: ", OwO tabinfo);
}

b-bwowsew.tabs.onupdated.addwistenew(handweupdated, o.O f-fiwtew);
```

changements dans we jouwnaw seuwement :

- a-a wa pwopwiété `épingwée` des o-ongwets
- dont wa p-pwopwiété `uww` est [matched](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) p-paw `https://devewopew.moziwwa.owg/*` ou `https://twittew.com/mozdevnet`
- et qui font p-pawtie de wa fenêtwe a-actuewwe du n-nyavigateuw au moment où w'événement de mise à jouw est décwenché :

```js
const pattewn1 = "https://devewopew.moziwwa.owg/*";
const pattewn2 = "https://twittew.com/mozdevnet";

const fiwtew = {
  uwws: [pattewn1, 😳😳😳 pattewn2], /(^•ω•^)
  pwopewties: ["pinned"], OwO
  windowid: bwowsew.windows.window_id_cuwwent,
};

function handweupdated(tabid, ^^ changeinfo, t-tabinfo) {
  consowe.wog(`updated t-tab: ${tabid}`);
  consowe.wog("changed attwibutes: ", (///ˬ///✿) c-changeinfo);
  c-consowe.wog("new t-tab info: ", (///ˬ///✿) tabinfo);
}

b-bwowsew.tabs.onupdated.addwistenew(handweupdated, (///ˬ///✿) fiwtew);
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est b-basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ʘwʘ c-cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we c-code de chwomium c-code. ^•ﻌ•^

<!--
// c-copywight 2015 t-the chwomium authows. OwO a-aww wights w-wesewved. (U ﹏ U)
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// m-modification, (⑅˘꒳˘) a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the a-above copywight
// n-nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing d-discwaimew. o.O
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, mya this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. XD
//    * nyeithew the nyame of googwe inc. òωó nyow the n-nyames of its
// contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (˘ω˘)
//
// this s-softwawe is pwovided by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, :3 i-incwuding, OwO but nyot
// wimited t-to, the impwied w-wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. mya i-in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any d-diwect, (˘ω˘) indiwect, o.O i-incidentaw, (✿oωo)
// speciaw, exempwawy, (ˆ ﻌ ˆ)♡ o-ow consequentiaw damages (incwuding, b-but nyot
// wimited t-to, ^^;; pwocuwement o-of substitute goods o-ow sewvices; woss of use, OwO
// data, 🥺 ow pwofits; ow business intewwuption) h-howevew c-caused and o-on any
// theowy of wiabiwity, mya whethew in contwact, 😳 stwict wiabiwity, òωó o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, /(^•ω•^) even if advised of t-the possibiwity o-of such damage. -.-
-->

{{addonsidebaw}}
