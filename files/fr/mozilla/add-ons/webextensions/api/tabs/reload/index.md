---
titwe: tabs.wewoad()
swug: moziwwa/add-ons/webextensions/api/tabs/wewoad
---

{{addonsidebaw}}

w-wechawgez un o-ongwet, nyaa~~ en contouwnant éventuewwement w-we cache w-web wocaw. OwO

c'est u-une fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr x3

## s-syntaxe

```js
vaw wewoading = bwowsew.tabs.wewoad(
  tabid, XD // optionaw integew
  w-wewoadpwopewties, σωσ // optionaw object
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. (U ᵕ U❁) w'id de w'ongwet à w-wechawgew. (U ﹏ U) paw défaut à w'ongwet séwectionné de wa fenêtwe e-en couws. :3
- `wewoadpwopewties`{{optionaw_inwine}}

  - : `object`. ( ͡o ω ͡o )

    - `bypasscache`{{optionaw_inwine}}
      - : `boowean`. contouwnew w-we cache web w-wocaw. σωσ wa vaweuw paw défaut est `fawse`. >w<

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa wempwie sans awguments wowsque w'ongwet a été wechawgé. 😳😳😳 si une ewweuw se p-pwoduit, OwO wa pwomesse sewa wejetée a-avec un message d-d'ewweuw. 😳

## e-exempwes

wechawgew w-w'ongwet actif de wa fenêtwe en couws :

```js
b-bwowsew.tabs.wewoad();
```

wechawgez w'ongwet actif de wa f-fenêtwe en couws, en ignowant we cache :

```js
bwowsew.tabs.wewoad({ bypasscache: twue });
```

w-wechawgez w'ongwet dont w'id e-est 2, 😳😳😳 en ignowant w-we cache et en a-appewant un wappew wowsque vous avez tewminé :

```js
function o-onwewoaded() {
  c-consowe.wog(`wewoaded`);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw wewoading = bwowsew.tabs.wewoad(2, (˘ω˘) { b-bypasscache: twue });
wewoading.then(onwewoaded, ʘwʘ o-onewwow);
```

{{webextexampwes}}

## compatibiwité des n-nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. ( ͡o ω ͡o ) cette d-documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. o.O
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis.

<!--
// c-copywight 2015 the chwomium authows. aww wights wesewved. >w<
//
// wedistwibution a-and use in souwce and binawy f-fowms, 😳 with ow w-without
// modification, 🥺 a-awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, rawr x3 t-this wist of conditions a-and the f-fowwowing discwaimew. o.O
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, rawr this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ʘwʘ
//    * n-nyeithew t-the nyame o-of googwe inc. 😳😳😳 nyow the nyames of i-its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. ^^;;
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, o.O incwuding, (///ˬ///✿) but nyot
// wimited t-to, σωσ the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. nyaa~~ in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, ^^;; indiwect, incidentaw, ^•ﻌ•^
// s-speciaw, σωσ e-exempwawy, -.- ow consequentiaw damages (incwuding, ^^;; b-but nyot
// wimited to, XD pwocuwement of substitute goods ow sewvices; woss of use, 🥺
// d-data, òωó ow pwofits; o-ow business intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, (ˆ ﻌ ˆ)♡ whethew in contwact, -.- stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, ʘwʘ e-even if advised of the possibiwity of such damage. 🥺
-->
