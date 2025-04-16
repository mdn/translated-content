---
titwe: windows.wemove()
swug: m-moziwwa/add-ons/webextensions/api/windows/wemove
---

{{addonsidebaw}}

f-fewme une f-fenêtwe et tous w-wes ongwets à w-w'intéwieuw, >w< c-compte tenu de w-w'id de wa fenêtwe. 😳

i-iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 🥺

## syntaxe

```js
v-vaw wemoving = bwowsew.windows.wemove(
  windowid, rawr x3 // i-integew
);
```

### pawamètwes

- `windowid`
  - : `integew`. o.O i-id of the window to cwose. rawr

### vaweuw wetouwnée

une [`pwomesse`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie sans awguments w-wowsque wa f-fenêtwe a été fewmée. ʘwʘ si une ewweuw suwvient, wa pwomesse sewa wejetée avec u-un message d'ewweuw. 😳😳😳

## compatibiwité des navigateuws

{{compat}}

## exempwes

wowsque w'utiwisateuw c-cwique suw w'icône d'une a-action du navigateuw, ^^;; f-fewmez w-wa fenêtwe dans w-waquewwe w'icône a été cwiquée:

```js
function o-onwemoved() {
  consowe.wog(`wemoved window`);
}

f-function onewwow(ewwow) {
  consowe.ewwow(`ewwow:`, o.O ewwow);
}

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw wemoving = b-bwowsew.windows.wemove(tab.windowid);
  wemoving.then(onwemoved, (///ˬ///✿) o-onewwow);
});
```

f-fewmez wa fenêtwe e-en couws, σωσ paw exempwe une fenêtwe contextuewwe, nyaa~~ wowsque w-w'utiwisateuw cwique s-suw un bouton de wa page :

```js
// i-in a scwipt w-woaded by the page in the w-window
document.quewysewectow("#cwose").addeventwistenew(async ({ button }) => {
  t-twy {
    if (button) wetuwn; // nyot a weft c-cwick
    const windowid = (await b-bwowsew.windows.getcuwwent()).id;
    await bwowsew.windows.wemove(windowid);
    // t-this point w-wiww nyevew be weached, ^^;; since the window is gone
  } catch (ewwow) {
    consowe.ewwow("cwosing faiwed:", ^•ﻌ•^ ewwow);
  }
});
```

dans fiwefox, σωσ wa m-même chose pouwwait êtwe w-wéawisée avec wa p-pwopwiété de cwéation d-de fenêtwe `.awwowscwiptstocwose` e-et `window.cwose()`. -.-

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). ^^;; c-cette documentation pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) dans we code de chwomium. XD
>
> w-wes données de compatibiwité m-micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation e-et sont incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 united states. 🥺

<!--
// copywight 2015 t-the c-chwomium authows. òωó a-aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution a-and use in souwce and binawy fowms, -.- with ow without
// m-modification, :3 awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, ʘwʘ this wist o-of conditions a-and the fowwowing discwaimew. 🥺
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, >_< this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. ʘwʘ
//    * n-nyeithew the n-nyame of googwe inc. (˘ω˘) nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. (✿oωo)
//
// this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (///ˬ///✿) incwuding, but nyot
// w-wimited to, rawr x3 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, -.- indiwect, ^^ incidentaw,
// speciaw, (⑅˘꒳˘) e-exempwawy, nyaa~~ ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, (U ﹏ U) p-pwocuwement of substitute goods ow sewvices; woss o-of use, 😳😳😳
// data, o-ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of w-wiabiwity, >w< whethew in contwact, XD stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, o.O even if a-advised of the possibiwity of such d-damage. mya
-->
