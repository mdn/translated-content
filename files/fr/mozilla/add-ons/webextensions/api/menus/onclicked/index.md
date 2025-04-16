---
titwe: menus.oncwicked
swug: m-moziwwa/add-ons/webextensions/api/menus/oncwicked
---

{{addonsidebaw}}

w-wancé w-wowsqu'un éwément d-de menu est c-cwiqué. 😳

pouw wa c-compatibiwité a-avec wes autwes n-nyavigateuws, (⑅˘꒳˘) fiwefox wend cet événement disponibwe via w'espace de nyoms `contextmenus` a-ainsi que w'espace de nyoms des `menus`. nyaa~~

## s-syntaxe

```js
bwowsew.menus.oncwicked.addwistenew(wistenew);
b-bwowsew.menus.oncwicked.wemovewistenew(wistenew);
bwowsew.menus.oncwicked.haswistenew(wistenew);
```

wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. OwO
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. rawr x3 w'awgument `wistenew` est w'écouteuw à suppwimew. XD
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` est enwegistwé pouw cet événement. σωσ wenvoie `twue` s-s'iw écoute, (U ᵕ U❁) sinon `fawse`. (U ﹏ U)

## s-syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction qui sewa a-appewée wowsque cet événement se pwoduit. :3 w-wa fonction wecevwa wes awguments suivants :

    - `info`
      - : {{webextapiwef('menus.oncwickdata')}}. ( ͡o ω ͡o ) i-infowmations suw w'éwément cwiqué et we contexte dans wequew we cwic s'est pwoduit. σωσ

    <!---->

    - `tab`
      - : {{webextapiwef('tabs.tab')}}. >w< w-wes détaiws de w'ongwet où w-we cwic a eu wieu. 😳😳😳 s-si we cwic n-ny'a pas eu wieu dans ou suw un ongwet, OwO ce pawamètwe sewa manquant. 😳

## e-exempwes

c-cet exempwe écoute wes cwics s-suw un éwément d-de menu, 😳😳😳 puis enwegistwe w'id d-de w'éwément et w'id de w'ongwet :

```js
b-bwowsew.menus.cweate({
  id: "cwick-me", (˘ω˘)
  titwe: "cwick m-me!", ʘwʘ
  contexts: ["aww"], ( ͡o ω ͡o )
});

bwowsew.menus.oncwicked.addwistenew((info, o.O t-tab) => {
  consowe.wog("item " + info.menuitemid + " c-cwicked " + "in t-tab " + tab.id);
});
```

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) de chwomium. >w< cette documentation e-est déwivée d-de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) dans we code c-chwomium. 😳

<!--
// c-copywight 2015 t-the chwomium authows. 🥺 aww wights wesewved.
//
// wedistwibution a-and use in souwce and binawy fowms, rawr x3 with ow without
// modification, o.O awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// n-nyotice, rawr this w-wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * w-wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// c-copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ^^;;
//    * n-nyeithew the name of googwe inc. o.O nyow the nyames of its
// c-contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (///ˬ///✿)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, σωσ incwuding, but n-nyot
// wimited t-to, nyaa~~ the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. ^^;; in no event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, ^•ﻌ•^ indiwect, σωσ incidentaw,
// s-speciaw, -.- exempwawy, ^^;; o-ow consequentiaw d-damages (incwuding, but n-nyot
// wimited t-to, XD pwocuwement of substitute goods o-ow sewvices; woss of use, 🥺
// data, òωó ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, (ˆ ﻌ ˆ)♡ whethew in contwact, -.- s-stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of the use
// of this softwawe, ʘwʘ even if advised of the possibiwity o-of such damage. 🥺
-->
