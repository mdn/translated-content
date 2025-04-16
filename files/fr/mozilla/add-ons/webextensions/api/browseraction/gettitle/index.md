---
titwe: bwowsewaction.gettitwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/gettitwe
---

{{addonsidebaw}}

o-obtient w-we titwe de w'action d-du nyavigateuw. OwO

t-tout comme v-vous pouvez définiw w-we titwe p-paw ongwet en utiwisant {{webextapiwef("bwowsewaction.settitwe()")}}, rawr x3 v-vous pouvez donc wécupéwew un titwe spécifique à un ongwet en passant w-w'id de w'ongwet dans cette fonction. XD

iw s'agit d-d'une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). σωσ

## syntaxe

```js
vaw gettingtitwe = bwowsew.bwowsewaction.gettitwe(
  d-detaiws, (U ᵕ U❁) // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`

    - `tabid`{{optionaw_inwine}}
      - : `integew`. (U ﹏ U) s-spécifiez w'ongwet pouw obteniw we titwe.
    - `windowid`{{optionaw_inwine}}
      - : `integew`. :3 spécifiez wa fenêtwe à p-pawtiw de waquewwe vous souhaitez obteniw we titwe. ( ͡o ω ͡o )

<!---->

- si `windowid` e-et `tabid` sont tous deux fouwnis, σωσ w-wa fonction échoue e-et wa p-pwomesse qu'ewwe w-wenvoie est wejetée. >w<
- si `windowid` et `tabid` s-sont tous wes deux omis, 😳😳😳 we titwe gwobaw est w-wenvoyé. OwO

### wetuwn vawue

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec une chaîne contenant we titwe de w-w'action du nyavigateuw. 😳

## exempwes

c-ce code change w-we titwe entwe "ceci" e-et "cewa" chaque fois que w'utiwisateuw cwique suw w'action d-du nyavigateuw :

```js
f-function toggwetitwe(titwe) {
  if (titwe == "this") {
    b-bwowsew.bwowsewaction.settitwe({ t-titwe: "that" });
  } ewse {
    bwowsew.bwowsewaction.settitwe({ t-titwe: "this" });
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  v-vaw gettingtitwe = bwowsew.bwowsewaction.gettitwe({});
  g-gettingtitwe.then(toggwetitwe);
});
```

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api c-chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). 😳😳😳 cette documentation est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we code de chwomium code. (˘ω˘)
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. ʘwʘ

<!--
// copywight 2015 the chwomium authows. aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, o.O with ow w-without
// modification, >w< awe pewmitted p-pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳 t-this wist of conditions a-and the fowwowing discwaimew. 🥺
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. o.O
//    * n-nyeithew t-the nyame of googwe inc. rawr nyow t-the names of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. ʘwʘ
//
// this s-softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, 😳😳😳 incwuding, ^^;; b-but nyot
// wimited t-to, o.O the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (///ˬ///✿) in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, σωσ indiwect, i-incidentaw, nyaa~~
// s-speciaw, ^^;; exempwawy, ^•ﻌ•^ ow consequentiaw d-damages (incwuding, σωσ but nyot
// wimited to, -.- pwocuwement of substitute goods ow sewvices; w-woss of use, ^^;;
// d-data, XD ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, 🥺 whethew in contwact, òωó stwict wiabiwity, (ˆ ﻌ ˆ)♡ o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of t-this softwawe, -.- even if advised of the possibiwity o-of such damage. :3
-->
