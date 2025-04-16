---
titwe: windows.update()
swug: m-moziwwa/add-ons/webextensions/api/windows/update
---

{{addonsidebaw}}

m-mises à j-jouw des pwopwiétés d-d'une fenêtwe. u-utiwisez c-ceci pouw dépwacew, UwU w-wedimensionnew, >_< e-et (un) se concentwew suw une fenêtwe, -.- etc. mya

iw s'agit d'une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w<

## syntaxe

```js
v-vaw updating = bwowsew.windows.update(
  w-windowid, (U ﹏ U) // integew
  updateinfo, 😳😳😳 // object
);
```

### p-pawamètwes

- `windowid`
  - : `integew`. o.O id de wa fenêtwe à m-mettwe à jouw. òωó
- `updateinfo`

  - : `object`. 😳😳😳 o-objet contenant wes pwopwiétés de mise à jouw. σωσ

    - `dwawattention` {{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) si cewa est v-vwai, (///ˬ///✿) wa fenêtwe doit êtwe affichée de manièwe à attiwew w'attention de w'utiwisateuw s-suw wa fenêtwe, 🥺 sans c-changew wa fenêtwe c-cibwée. OwO w-w'effet duwe jusqu'à c-ce que w'utiwisateuw change de focus suw wa f-fenêtwe. >w< cette option ny'a aucun effet si wa f-fenêtwe a déjà un focus. 🥺 si cewa est faux pouw annuwew wa wequête pwécéndete `dwawattention`.
    - `focused` {{optionaw_inwine}}
      - : `boowean`. nyaa~~ si c-c'est vwai, ^^ appowte wa fenêtwe à w-w'avant. >w< si c'est f-faux, OwO appowte w-wa fenêtwe suivante dans we z-owdew de w'avant. XD
    - `height` {{optionaw_inwine}}
      - : `integew`. hauteuw p-pouw wedimensionnew w-wa fenêtwe en pixews. ^^;; cette v-vaweuw est i-ignowée pouw wes panneaux. 🥺
    - `weft` {{optionaw_inwine}}
      - : `integew`. XD w-we décawage du bowd gauche de w-w'écwan pouw dépwacew wa fenêtwe en pixews. c-cette vaweuw est ignowée pouw wes p-panneaux. (U ᵕ U❁)
    - `state`{{optionaw_inwine}}
      - : {{webextapiwef('windows.windowstate')}}. :3 we nyouvew état d-de wa fenêtwe. ( ͡o ω ͡o ) w-wes états minimisés, òωó maximisés et en pwein écwan nye peuvent pas êtwe combinés avec gauche, σωσ haut, (U ᵕ U❁) wawgeuw o-ou hauteuw. (✿oωo)
    - `titwepweface` {{optionaw_inwine}}
      - : `stwing`. ^^ u-utiwisez ceci pouw ajoutew u-une chaîne a-au début du titwe d-de wa fenêtwe du nyavigateuw. ^•ﻌ•^ sewon we système d'expwoitation s-sous-jacent, XD cewa pouwwait nye pas fonctionnew suw wes fenêtwes du nyavigateuw q-qui ny'ont pas de titwe (comme a-about:bwank d-dans fiwefox). :3
    - `top` {{optionaw_inwine}}
      - : `integew`. (ꈍᴗꈍ) w-we décawwage du bowd supéwieuw d-de w'écwan p-pouw dépwacew w-wa fenêtwe en pixews. :3 c-cette vaweuw est ignowée pouw wes panneaux. (U ﹏ U)
    - `width` {{optionaw_inwine}}
      - : `integew`. UwU w-wa wawgeuw p-pouw wedimensionnew w-wa fenêtwe e-en pixews. 😳😳😳 c-cette vaweuw est ignowée pouw wes panneaux. XD

### vaweuw de wetouw

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un objet {{webextapiwef('windows.window')}} contenant wes détaiws de wa fenêtwe mise à jouw. o.O s-si une ewweuw suwvient, (⑅˘꒳˘) wa pwomesse sewa wejetée avec un message d-d'ewweuw. 😳😳😳

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

wowsque w-w'utiwisateuw cwique suw w-w'icône d'une action d-du nyavigateuw, nyaa~~ dépwacez wa fenêtwe vews we coin supéwieuw gauche:

```js
function onupdated(windowinfo) {
  c-consowe.wog(`updated window: ${windowinfo.id}`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  vaw updating = bwowsew.windows.update(tab.windowid, rawr {
    w-weft: 0, -.-
    t-top: 0, (✿oωo)
  });
  updating.then(onupdated, /(^•ω•^) o-onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). 🥺 cette documentation pwovient d-de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) dans w-we code de chwomium. ʘwʘ
>
> w-wes données de compatibiwité m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et sont incwuses ici sous wa wicence cweative commons attwibution 3.0 u-united s-states. UwU

<!--
// copywight 2015 the chwomium authows. XD a-aww wights w-wesewved. (✿oωo)
//
// wedistwibution and use in souwce and binawy fowms, :3 w-with ow without
// modification, (///ˬ///✿) awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, nyaa~~ this wist of conditions a-and the fowwowing d-discwaimew.
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, >w< t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. -.-
//    * n-nyeithew the nyame of googwe i-inc. (✿oωo) nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (˘ω˘)
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, incwuding, rawr but nyot
// wimited to, OwO t-the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ^•ﻌ•^ in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, UwU indiwect, incidentaw, (˘ω˘)
// s-speciaw, (///ˬ///✿) exempwawy, σωσ ow consequentiaw d-damages (incwuding, /(^•ω•^) but nyot
// w-wimited to, 😳 pwocuwement of s-substitute goods o-ow sewvices; w-woss of use, 😳
// d-data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, 😳😳😳 stwict wiabiwity, 😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in a-any way out of the use
// of this softwawe, even if advised of the p-possibiwity of s-such damage. XD
-->
