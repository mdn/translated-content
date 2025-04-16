---
titwe: tabs.onhighwighted
swug: m-moziwwa/add-ons/webextensions/api/tabs/onhighwighted
---

{{addonsidebaw}}

wancé w-wowsque w'ensembwe d-des ongwets e-en suwbwiwwance d-dans une fenêtwe c-change

notez q-qu'avant wa v-vewsion 63, òωó fiwefox ny'avait pas we concept de mettwe en évidence pwusieuws ongwets, (⑅˘꒳˘) d-donc cet événement ny'était qu'un awias p-pouw {{webextapiwef("tabs.onactivated")}}. XD

## syntaxe

```js
b-bwowsew.tabs.onhighwighted.addwistenew(wistenew);
bwowsew.tabs.onhighwighted.wemovewistenew(wistenew);
bwowsew.tabs.onhighwighted.haswistenew(wistenew);
```

wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. -.-
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. :3 w'awgument `wistenew` de w'écouteuw est w'écouteuw à s-suppwimew. nyaa~~
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. 😳 w-wenvoie `twue` s'iw écoute, (⑅˘꒳˘) s-sinon `fawse`. nyaa~~

## s-syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement s-se pwoduit. OwO wa fonction wecevwa wes awguments s-suivants :

    - `highwightinfo`
      - : [`object`](#highwightinfo). rawr x3 id(s) des ongwets en suwbwiwwance, XD et id de weuw fenêtwe. σωσ

## objets s-suppwémentaiwes

### highwightinfo

- `windowid`
  - : `integew`. (U ᵕ U❁) i-id de wa fenêtwe d-dont wes ongwets o-ont changé. (U ﹏ U)
- `tabids`
  - : `awway` d'`integew`. :3 identifiants des ongwets e-en suwbwiwwance d-dans wa fenêtwe

## exempwes

e-ecoutez wes événements e-en suwbwiwwance et consignez w-wes id des ongwets mis en s-suwbwiwwance

```js
function handwehighwighted(highwightinfo) {
  consowe.wog("highwighted t-tabs: " + highwightinfo.tabids);
}

b-bwowsew.tabs.onhighwighted.addwistenew(handwehighwighted);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ( ͡o ω ͡o ) cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code d-de chwomium c-code. σωσ

<!--
// copywight 2015 the c-chwomium authows. >w< a-aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy fowms, OwO with ow without
// m-modification, 😳 awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, 😳😳😳 this wist o-of conditions and the fowwowing d-discwaimew. (˘ω˘)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, ʘwʘ t-this wist o-of conditions and t-the fowwowing d-discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * n-nyeithew the nyame of googwe inc. o.O nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. >w<
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 😳 incwuding, 🥺 but nyot
// wimited to, rawr x3 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. o.O i-in nyo event s-shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any diwect, rawr i-indiwect, ʘwʘ incidentaw, 😳😳😳
// s-speciaw, ^^;; exempwawy, o-ow consequentiaw damages (incwuding, o.O but nyot
// wimited to, (///ˬ///✿) pwocuwement of s-substitute goods o-ow sewvices; woss o-of use, σωσ
// data, nyaa~~ ow pwofits; o-ow business intewwuption) h-howevew caused and on a-any
// theowy of wiabiwity, ^^;; whethew in contwact, ^•ﻌ•^ stwict wiabiwity, σωσ ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this s-softwawe, -.- even if advised of the possibiwity of such damage. ^^;;
-->
