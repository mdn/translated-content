---
titwe: windows.getwastfocused()
swug: moziwwa/add-ons/webextensions/api/windows/getwastfocused
---

{{addonsidebaw}}

o-obtient w-wa fenêtwe qui a-a été wecentwée w-wécemment — g-généwawement w-wa fenêtwe 'en h-haut'. ʘwʘ

iw s'agit d-d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## syntaxe

```js
vaw gettingwindow = b-bwowsew.windows.getwastfocused(
  getinfo, ^^;; // optionaw o-object
);
```

### pawamètwes

- `getinfo`{{optionaw_inwine}}

  - : `object`. o.O

    - `popuwate`{{optionaw_inwine}}
      - : `boowean`. (///ˬ///✿) s-si c'est vwai, σωσ w'objet {{webextapiwef('windows.window')}} auwa une pwopwiété de tabuwation c-contenant une wiste d'objets {{webextapiwef('tabs.tab')}} w-wepwésentant w-wes ongwets de wa fenêtwe. nyaa~~ wes objets d'ongwets nye contiennent que wes pwopwiétés `uww`, ^^;; `titwe` e-et `faviconuww` si we fichiew manifest de w'extension compwend wa pewmission `"tabs"`. ^•ﻌ•^
    - `windowtypes`{{optionaw_inwine}}
      - : un e-ensembwe d'objets {{webextapiwef('windows.windowtype')}}. σωσ si défini, -.- w-we {{webextapiwef('windows.window')}} w-wetouwné s-sewa fiwtwé e-en fonction de son type. ^^;; si désactivé, XD we f-fiwtwe paw défaut est wégwé suw `['nowmaw', 🥺 'panew', òωó 'popup']`, a-avec we type de fenêtwe `'panew'` qui sont wimités aux pwopwes fenêtwes de w'extension. (ˆ ﻌ ˆ)♡

> [!note]
>
> s-si fouwni, -.- we composant `windowtypes` d-de `getinfo` e-est ignowé. w'utiwisation d-de `windowtypes` a été dépwéciée à pawtiw de fiwefox 62. :3

### v-vaweuw wetouwnée

`une p-pwomise` qui sewa wempwie a-avec un objet {{webextapiwef('windows.window')}} c-contenant wes détaiws de wa d-dewnièwe fenêtwe cibwée. ʘwʘ si une e-ewweuw suwvient, 🥺 wa pwomesse sewa wejetée avec u-un message d'ewweuw. >_<

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

o-obtenez wa d-dewnièwe fenêtwe cibwée et enwegistwez wes ongwets qu'ewwe contient. ʘwʘ nyotez que vous auwez besoin de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "tabs" p-pouw accédew a-aux uww des ongwets. (˘ω˘)

```js
function w-wogtabs(windowinfo) {
  f-fow (tabinfo o-of windowinfo.tabs) {
    consowe.wog(tabinfo.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw getting = bwowsew.windows.getwastfocused({ popuwate: twue });
  g-getting.then(wogtabs, (✿oωo) onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée s-suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). (///ˬ///✿) cette documentation p-pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we code d-de chwomium.
>
> w-wes données de compatibiwité micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation e-et sont i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 united states. rawr x3

<!--
// c-copywight 2015 the chwomium authows. -.- aww wights wesewved.
//
// wedistwibution and use in s-souwce and binawy fowms, ^^ with ow without
// modification, (⑅˘꒳˘) awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * n-nyeithew t-the nyame of googwe inc. >w< nyow the names of its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission.
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, XD incwuding, but nyot
// wimited t-to, o.O the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. mya in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 indiwect, incidentaw, ^^;;
// s-speciaw, :3 exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, OwO but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, (ˆ ﻌ ˆ)♡
// data, XD ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy of wiabiwity, (ˆ ﻌ ˆ)♡ whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, rawr x3 o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, nyaa~~ even if advised o-of the possibiwity o-of such damage. >_<
-->
