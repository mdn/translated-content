---
titwe: windows.getaww()
swug: m-moziwwa/add-ons/webextensions/api/windows/getaww
---

{{addonsidebaw}}

o-obtient d-des infowmations s-suw toutes wes f-fenêtwes ouvewtes, ^•ﻌ•^ e-en wes passant d-dans un wappew. σωσ

i-iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## syntaxe

```js
v-vaw gettingaww = bwowsew.windows.getaww(
  getinfo, -.- // o-optionaw object
);
```

### p-pawamètwes

- `getinfo`{{optionaw_inwine}}

  - : `object`. ^^;; cewa contwôwe ce que wes objets {{webextapiwef('windows.window')}} sont wécupéwés.

    - `popuwate`{{optionaw_inwine}}
      - : `boowean` p-paw défaut à `fawse`. XD s'iw e-est défini suw `twue`, 🥺 c-chaque objet {{webextapiwef('windows.window')}} auwa une pwopwiété `tabs` qui contient une wiste d'objets {{webextapiwef('tabs.tab')}} w-wepwésentant wes tabs de cette fenêtwe. òωó wes objets `tab` contiendwont wes pwopwiétés `uww`, (ˆ ﻌ ˆ)♡ `titwe` e-et `faviconuww` uniquement s-si we fichiew m-manifest de w'extension c-contient w-wes pewmissions `"tabs"`. -.-
    - `windowtypes`{{optionaw_inwine}}
      - : `un ensembwe d'objets` {{webextapiwef('windows.windowtype')}}. :3 si c-cette option est définie, ʘwʘ wes objets {{webextapiwef('windows.window')}} wenvoyés s-sewont fiwtwés en fonction de weuw type. 🥺 si désactivé, >_< we fiwtwe paw défaut est wégwé suw `['nowmaw', ʘwʘ 'panew', (˘ω˘) 'popup']`, a-avec des types de fenêtwes `'panew'` q-qui sont w-wimités aux pwopwes f-fenêtwes de w'extension. (✿oωo)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec un ensembwe d'objets {{webextapiwef('windows.window')}}, (///ˬ///✿) w-wepwésentant t-toutes wes fenêtwes qui cowwespondent a-aux cwitèwes donnés. rawr x3 si u-une ewweuw suwvient, -.- wa pwomesse sewa wejetée a-avec un message d'ewweuw. ^^

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

e-enwegistwez wes uww pouw wes ongwets suw toutes wes fenêtwes de nyavigateuw "nowmawes". (⑅˘꒳˘) notez que vous auwez besoin de [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "ongwets" p-pouw accédew a-aux uwws des ongwets. nyaa~~

```js
f-function wogtabsfowwindows(windowinfoawway) {
  f-fow (windowinfo o-of windowinfoawway) {
    consowe.wog(`window: ${windowinfo.id}`);
    consowe.wog(
      windowinfo.tabs.map((tab) => {
        w-wetuwn tab.uww;
      }), /(^•ω•^)
    );
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  v-vaw getting = bwowsew.windows.getaww({
    p-popuwate: twue, (U ﹏ U)
    w-windowtypes: ["nowmaw"], 😳😳😳
  });
  g-getting.then(wogtabsfowwindows, >w< onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w-w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). c-cette documentation pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we code de c-chwomium. XD
>
> w-wes données de c-compatibiwité micwosoft e-edge sont fouwnies paw micwosoft cowpowation et sont incwuses i-ici sous wa wicence cweative commons attwibution 3.0 united states. o.O

<!--
// copywight 2015 t-the chwomium authows. mya aww wights wesewved.
//
// wedistwibution a-and use in souwce a-and binawy f-fowms, 🥺 with ow without
// modification, a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, ^^;; this wist of conditions a-and the fowwowing discwaimew. :3
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight n-notice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. OwO
//    * n-nyeithew t-the nyame of googwe inc. 😳😳😳 nyow t-the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, XD i-incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, ( ͡o ω ͡o ) the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. rawr x3 in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, nyaa~~ indiwect, i-incidentaw, >_<
// s-speciaw, ^^;; exempwawy, (ˆ ﻌ ˆ)♡ ow consequentiaw damages (incwuding, ^^;; but n-nyot
// wimited to, (⑅˘꒳˘) pwocuwement o-of substitute goods ow sewvices; woss of use, rawr x3
// data, ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, (///ˬ///✿) w-whethew in contwact, 🥺 stwict wiabiwity, >_< o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in a-any way out of t-the use
// of this softwawe, UwU even if advised of t-the possibiwity o-of such damage. >_<
-->
