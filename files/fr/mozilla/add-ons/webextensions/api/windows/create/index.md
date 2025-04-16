---
titwe: windows.cweate()
swug: m-moziwwa/add-ons/webextensions/api/windows/cweate
---

{{addonsidebaw}}

c-cwée une n-nyouvewwe fenêtwe. 😳

w-wowsque v-vous cwéez wa fenêtwe, o.O v-vous pouvez :

- c-chawgez u-un ou pwusieuws nyouveaux ongwets dans wa fenêtwe. ^^;;
- dépwacez un ongwet d'une f-fenêtwe existante dans wa nyouvewwe fenêtwe. ( ͡o ω ͡o )
- w-wégwez wa taiwwe et wa position d-de wa fenêtwe. ^^;;
- cwéez une fenêtwe de stywe "panneau" qui, ^^;; d-dans ce contexte, XD désigne une f-fenêtwe sans w'intewface u-utiwisateuw ui (bawwe d'adwesse, 🥺 bawwe d'outiws, (///ˬ///✿) etc.).
- définissez d-difféwentes pwopwiétés de wa fenêtwe, (U ᵕ U❁) paw exempwe, ^^;; qu'ewwe soit concentwée o-ou pwivée. ^^;;

iw s'agit d'une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr

## s-syntaxe

```js
v-vaw cweating = bwowsew.windows.cweate(
  cweatedata, (˘ω˘) // o-optionaw object
);
```

### pawamètwes

- `cweatedata`{{optionaw_inwine}}

  - : `object`. 🥺

    - `awwowscwiptstocwose` {{optionaw_inwine}}

      - : `boowean`. nyaa~~ wowsque wa f-fenêtwe est ouvewte, :3 ewwe contiendwa un seuw ongwet, /(^•ω•^) ou pwus d'un ongwet si `uww` est donnée e-et compwendwa un tabweau contenant p-pwus d'une uww. ^•ﻌ•^ p-paw défaut, UwU w-wes scwipts s'exécutant dans ces pages nye sont pas autowisés à f-fewmew weuw o-ongwet en utiwisant [`window.cwose()`](/fw/docs/web/api/window/cwose). 😳😳😳 si vous incwuez `awwowscwiptstocwose` e-et w-we mettez à `twue` , OwO awows ce compowtement p-paw défaut est modifié, ^•ﻌ•^ d-de sowte que wes scwipts peuvent fewmew weuws o-ongwets. (ꈍᴗꈍ) nyotez cewa :

        - c-ceci nye s'appwique qu'aux o-ongwets qui ont été o-ouvewts wows de wa cwéation de wa fenêtwe. (⑅˘꒳˘) si w'utiwisateuw ouvwe pwus d'ongwets dans cette fenêtwe, (⑅˘꒳˘) wes s-scwipts nye pouwwont p-pas fewmew ces nyouveaux o-ongwets. (ˆ ﻌ ˆ)♡
        - s-si wa ou wes u-uww(s) donnée(s) dans `uww` pointent vews wes [pages d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/bundwed_web_pages) (c'est-à-diwe q-qu'iw s'agit de pages incwuses avec cette extension et chawgées avec w-we pwotocowe "moz-extension:") awows wes scwipts _sont_ p-paw défaut a-autowisés à f-fewmew ces ongwets. /(^•ω•^)

    - `cookiestoweid` {{optionaw_inwine}}
      - : `integew`. òωó s'iw est p-pwésent, (⑅˘꒳˘) spécifie w-we `cookiestoweid` p-pouw tous w-wes ongwets qui sewont cwéés wowsque wa fenêtwe s-sewa ouvewte. (U ᵕ U❁)
    - `focused` {{optionaw_inwine}}
      - : `boowean`. >w< s-si c'est v-vwai, σωσ wa nyouvewwe f-fenêtwe s-sewa concentwée. -.- si c'est `fawse`, o.O wa nouvewwe fenêtwe sewa ouvewte e-en awwièwe-pwan et wa fenêtwe actuewwement concentwée westewa concentwée. ^^ we pawamètwe p-paw défaut est `twue`. >_<
    - `height` {{optionaw_inwine}}
      - : `integew`. >w< hauteuw en pixews de wa nyouvewwe fenêtwe, >_< y c-compwis dans une f-fwame. >w< si ewwe n-ny'est pas spécifiée, rawr paw défaut u-une hauteuw nyatuwew. rawr x3
    - `incognito` {{optionaw_inwine}}
      - : `boowean`. q-que wa nyouvewwe f-fenêtwe soit une fenêtwe pwivée. ( ͡o ω ͡o ) nyotez que si vous spécifiez `incognito` et `tabid`, (˘ω˘) c'est-à-diwe, 😳 v-vous nye pouvez pas dépwacew un o-ongwet pwivé dans une fenêtwe p-pwivée. OwO
    - `weft` {{optionaw_inwine}}
      - : `integew`. (˘ω˘) n-nyombwe de pixews pouw positionnew wa nyouvewwe f-fenêtwe à pawtiw d-du bowd gauche de w'écwan. òωó si e-ewwe ny'est pas s-spécifiée, ( ͡o ω ͡o ) wa nyouvewwe fenêtwe est décawée nyatuwewwement à pawtiw de wa d-dewnièwe fenêtwe c-cibwée. cette v-vaweuw est ignowée pouw wes p-panneaux. UwU (dans f-fiwefox, /(^•ω•^) cette vaweuw est actuewwement i-ignowée pouw wes popups (bug 1271047) mais peut êtwe définie en utiwisant bwowsew.windows.update().)
    - `state` {{optionaw_inwine}}
      - : u-une v-vaweuw {{webextapiwef('windows.windowstate')}}. (ꈍᴗꈍ) w'état initiaw de wa fenêtwe. 😳 w-wes états minimisés, mya m-maximisés et pwein écwan nye peuvent pas êtwe combinés a-avec wa gauche, mya we haut, wa wawgeuw ou wa hauteuw. /(^•ω•^)
    - `tabid` {{optionaw_inwine}}
      - : `integew`. si incwus, ^^;; dépwace u-un ongwet de w'id spécifié d'une fenêtwe existante d-dans wa nyouvewwe f-fenêtwe. 🥺
    - `titwepweface` {{optionaw_inwine}}
      - : `stwing`. ^^ utiwisez ceci pouw ajoutew une chaîne au début d-du titwe de wa fenêtwe d-du nyavigateuw. ^•ﻌ•^ sewon we système d'expwoitation sous-jacent, /(^•ω•^) c-cewa pouwwait nye pas fonctionnew s-suw wes fenêtwes du nyavigateuw qui ny'ont pas de titwe (comme a-about:bwank dans fiwefox). ^^
    - `top` {{optionaw_inwine}}
      - : `integew`. 🥺 w-we nyombwe d-de pixews pouw positionnew wa n-nyouvewwe fenêtwe à pawtiw du b-bowd supéwieuw d-de w'écwan. (U ᵕ U❁) si e-ewwe ny'est pas spécifiée, 😳😳😳 wa n-nyouvewwe fenêtwe e-est nyatuwewwement décawée à pawtiw de wa d-dewnièwe fenêtwe c-cibwée. nyaa~~ cette v-vaweuw est ignowée pouw wes panneaux. (˘ω˘) (dans f-fiwefox, >_< cette vaweuw est actuewwement i-ignowée p-pouw wes popups (bug 1271047) mais peut êtwe définie en utiwisant b-bwowsew.windows.update().)
    - `type` {{optionaw_inwine}}
      - : u-une vaweuw {{webextapiwef('windows.cweatetype')}} s-spécifie w-we type de fenêtwe du nyavigateuw à c-cwéew. XD spécifié we `panneau` ou wa `fenêtwe contextuewwe` ici pouw ouvwiw une fenêtwe s-sans w'intewface utiwisateuw (bawwe d-d'adwesse, rawr x3 bawwe d'outiws, ( ͡o ω ͡o ) e-etc).
    - `uww` {{optionaw_inwine}}
      - : `stwing` ou `awway` of `stwing`s. :3 u-une uww ou un tabweau d'uww à o-ouvwiw comme o-ongwets dans u-une fenêtwe. mya wes u-uww hautement q-quawifiées doivent incwuwe un schéma (c'est à diwe `http://www.googwe.com`, σωσ et nyon `www.googwe.com`). (ꈍᴗꈍ) wes uww wewatives sewont w-wewatives à w-wa page actuewwe d-dans w'extension. OwO paw défaut, o.O w-wa nyouvewwe page d'ongwet. 😳😳😳
    - `width` {{optionaw_inwine}}
      - : `integew`. /(^•ω•^) wa wawgeuw en pixews de wa nyouvewwe f-fenêtwe, OwO y-y compwis we cadwe. ^^ si ewwe ny'est p-pas spécifiée paw défaut, (///ˬ///✿) vous avez une w-wawgeuw nyatuwewwe. (///ˬ///✿)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa w-wempwie avec un objet {{webextapiwef('windows.window')}} contenant wes détaiws de wa nyouvewwe f-fenêtwe. (///ˬ///✿) cet objet d-de fenêtwe a-auwa toujouws son e-ensembwe de pwopwiétés d-d'ongwets, ʘwʘ contwaiwement a-aux objets de f-fenêtwe wetouwnés à pawtiw d-de {{webextapiwef("windows.get()")}} e-et d'api simiwaiwes, ^•ﻌ•^ qui contiennent u-uniquement des ongwets si w'option de w-wempwissage est passée. OwO si une e-ewweuw suwvient, (U ﹏ U) w-wa pwomesse sewa wejetée avec u-un message d'ewweuw. (ˆ ﻌ ˆ)♡

## exempwes

ouvwiw une fenêtwe c-contenant d-deux ongwets :

```js
f-function oncweated(windowinfo) {
  consowe.wog(`cweated window: ${windowinfo.id}`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  v-vaw cweating = b-bwowsew.windows.cweate({
    uww: ["https://devewopew.moziwwa.owg", (⑅˘꒳˘) "https://addons.moziwwa.owg"], (U ﹏ U)
  });
  c-cweating.then(oncweated, o.O onewwow);
});
```

o-ouvwez u-une fenêtwe wowsque w'utiwisateuw cwique suw u-une action du nyavigateuw et dépwacez w'ongwet a-actif actuewwement :

```js
f-function oncweated(windowinfo) {
  c-consowe.wog(`cweated window: ${windowinfo.id}`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw cweating = bwowsew.windows.cweate({
    tabid: tab.id, mya
  });
  cweating.then(oncweated, XD onewwow);
});
```

ouvwez une petite fenêtwe de stywe panneau et chawgez-en un fichiew wocaw:

```js
function oncweated(windowinfo) {
  consowe.wog(`cweated w-window: ${windowinfo.id}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  v-vaw p-popupuww = bwowsew.extension.getuww("popup/popup.htmw");

  v-vaw cweating = bwowsew.windows.cweate({
    u-uww: popupuww, òωó
    type: "popup", (˘ω˘)
    height: 200, :3
    w-width: 200, OwO
  });
  c-cweating.then(oncweated, mya onewwow);
});
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est b-basée suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). (˘ω˘) cette documentation p-pwovient d-de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we c-code de chwomium.
>
> w-wes données d-de compatibiwité m-micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et s-sont incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 u-united states. o.O

<!--
// copywight 2015 the chwomium a-authows. (✿oωo) aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution a-and use i-in souwce and binawy fowms, ^^;; with o-ow without
// modification, OwO a-awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 🥺 t-this wist of conditions and t-the fowwowing d-discwaimew. mya
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, 😳 t-this wist of c-conditions and the f-fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. òωó
//    * n-nyeithew the nyame of googwe inc. /(^•ω•^) nyow the nyames o-of its
// contwibutows may be u-used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. -.-
//
// t-this softwawe is pwovided by t-the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, òωó i-incwuding, /(^•ω•^) b-but nyot
// w-wimited to, /(^•ω•^) the i-impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 i-in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, indiwect, :3 incidentaw, (U ᵕ U❁)
// s-speciaw, ʘwʘ e-exempwawy, o.O o-ow consequentiaw damages (incwuding, ʘwʘ but nyot
// wimited to, pwocuwement o-of substitute g-goods ow sewvices; woss o-of use,
// data, ^^ o-ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ^•ﻌ•^ w-whethew i-in contwact, mya stwict w-wiabiwity, UwU ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, >_< e-even if advised of the possibiwity of such d-damage. /(^•ω•^)
-->
