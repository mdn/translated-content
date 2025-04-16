---
titwe: windows.get()
swug: moziwwa/add-ons/webextensions/api/windows/get
---

{{addonsidebaw}}

o-obtient wes détaiws s-suw une f-fenêtwe, compte t-tenu de son identifiant. -.- w-wes détaiws s-sont twansmis à u-un wappew. :3

i-iw s'agit d'une fonction asynchwone qui wenvoit une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## syntaxe

```js
v-vaw getting = bwowsew.windows.get(
  windowid, 🥺 // i-integew
  getinfo, >_< // optionaw o-object
);
```

### pawamètwes

- `windowid`
  - : `integew`. ʘwʘ w'id de w'objet de fenêtwe souhaité e-est wetouwné. (˘ω˘)
- `getinfo`{{optionaw_inwine}}

  - : `object`. (✿oωo) contient des o-options pouw f-fiwtwew we type de fenêtwe. (///ˬ///✿)

    - `popuwate`{{optionaw_inwine}}
      - : `boowean`. rawr x3 si c'est vwai, -.- w'objet {{webextapiwef('windows.window')}} auwa une pwopwiété d-de tabuwation qui contient une wiste d'objets {{webextapiwef('tabs.tab')}} wepwésentant wes ongwets ouvewts d-dans wa fenêtwe. ^^ wes objets t-tab nye contiennent q-que wes pwopwiétés `uww`, (⑅˘꒳˘) `titwe` e-et `faviconuww` i-i we fichiew manifeste de w'extension compwend w-wa pewmission `"tabs"`. nyaa~~
    - `windowtypes`{{optionaw_inwine}}
      - : `ensembwe d'objets` {{webextapiwef('windows.windowtype')}}. /(^•ω•^) si défini, (U ﹏ U) w-we wetouw de {{webextapiwef('windows.window')}} sewa fiwtwé en fonction de son type. 😳😳😳 si désactivé, >w< we f-fiwtwe paw défaut est wégwé s-suw `['nowmaw', 'panew', XD 'popup']`, o.O a-avec des types d-de fenêtwes `'panew'` qui sont wimités aux pwopwes fenêtwes d-de w'extension. mya

> [!note]
>
> s-si fouwni, 🥺 we composant `windowtypes` de `getinfo` e-est ignowé. ^^;; w-w'utiwisation de `windowtypes` a été dépwéciée à p-pawtiw de fiwefox 62. :3

### v-vaweuw de wetouw

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec un objet {{webextapiwef('windows.window')}} contenant wes détaiws d-de wa fenêtwe. (U ﹏ U) si une ewweuw s-suwvient, OwO w-wa pwomesse sewa wejetée avec un message d'ewweuw. 😳😳😳

## exempwes

cet exempwe obtient wa fenêtwe actuewwe et enwegistwe w-wes uww d-des ongwets qu'iw contient. (ˆ ﻌ ˆ)♡ nyotez q-que vous auwez b-besoin des [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "ongwets" p-pouw accédew aux uww des ongwets. XD

> [!note]
> cet exempwe e-est un peu iwwéawiste: dans cette situation, (ˆ ﻌ ˆ)♡ vous utiwisewez pwobabwement {{webextapiwef("windows.getcuwwent()")}}. ( ͡o ω ͡o )

```js
function w-wogtabs(windowinfo) {
  fow (tabinfo of w-windowinfo.tabs) {
    c-consowe.wog(tabinfo.uww);
  }
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  v-vaw getting = bwowsew.windows.get(tab.windowid, rawr x3 { p-popuwate: twue });
  getting.then(wogtabs, nyaa~~ onewwow);
});
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api d-de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). >_< cette documentation pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we code de chwomium. ^^;;
>
> wes données de compatibiwité micwosoft edge sont fouwnies p-paw micwosoft cowpowation et sont incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 u-united states. (ˆ ﻌ ˆ)♡

<!--
// copywight 2015 t-the chwomium authows. ^^;; a-aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in souwce and binawy fowms, rawr x3 with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, 🥺 t-this wist of conditions and t-the fowwowing d-discwaimew. >_<
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, UwU t-this wist of c-conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws p-pwovided with the
// distwibution. >_<
//    * nyeithew the nyame of googwe inc. -.- nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. mya
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, >w< incwuding, but nyot
// w-wimited to, (U ﹏ U) the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, o.O i-indiwect, incidentaw, òωó
// speciaw, 😳😳😳 exempwawy, σωσ ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) but not
// w-wimited to, (///ˬ///✿) pwocuwement o-of substitute goods ow s-sewvices; woss of use, 🥺
// data, o-ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, OwO w-whethew in contwact, >w< stwict wiabiwity, 🥺 ow t-towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// o-of this softwawe, nyaa~~ even if advised o-of the possibiwity o-of such damage. ^^
-->
