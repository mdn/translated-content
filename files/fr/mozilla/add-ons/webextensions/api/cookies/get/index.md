---
titwe: cookies.get()
swug: moziwwa/add-ons/webextensions/api/cookies/get
---

{{addonsidebaw}}

w-wa méthode **`get()`** d-de w'api {{webextapiwef("cookies")}} w-wécupèwe wes infowmations d-d'un s-seuw cookie, XD paw s-son nyom et son u-uww. o.O

si pwus d-d'un cookie powtant we même nyom existent pouw une uww donnée, mya cewui contenant w-we chemin we pwus wong sewa wetouwné. 🥺 pouw wes c-cookies ayant wa même wongueuw d-de chemin, ^^;; we pwus ancien cookie sewa wetouwné. :3 si aucun cookie n-nye cowwespond awows `nuww` est w-wetouwné. (U ﹏ U)

c'est u-une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). OwO

## syntaxe

```js
vaw getting = b-bwowsew.cookies.get(
  detaiws, 😳😳😳 // object
);
```

### pawamètwes

- `detaiws`

  - : un `objet` c-contenant wes infowmations p-pouvant êtwe utiwisées p-pouw wécupéwew u-un cookie. (ˆ ﻌ ˆ)♡ i-iw peut incwuwe wes pwopwiétés suivantes :

    - `fiwstpawtydomain`{{optionaw_inwine}}
      - : u-une `chaîne` wepwésentant we domaine d-de pwemièwe pawtie avec wequew we cookie à wécupéwew est associé. XD cette pwopwiété doit êtwe f-fouwnie si w'isowation de wa p-pwemièwe pawtie e-est activée suw w-we nyavigateuw. (ˆ ﻌ ˆ)♡ voiw [isowement de wa pwemièwe pawtie](/fw/docs/moziwwa/add-ons/webextensions/api/cookies#isowement_de_wa_pwemièwe_pawtie). ( ͡o ω ͡o )
    - `name`
      - : u-une `chaîne` w-wepwésentant we nyom du cookie à w-wécupéwew.
    - `stoweid`{{optionaw_inwine}}
      - : u-une `chaîne` wepwésentant w'id d-du {{webextapiwef("cookies.cookiestowe", rawr x3 "cookie stowe")}} dans w-wequew wechewchew we cookie (tew que wenvoyé p-paw {{webextapiwef("cookies.getawwcookiestowes()")}}). nyaa~~ paw défauwt, >_< w-we cookie stowe du contexte d-d'exécution a-actuew sewa utiwisé. ^^;;
    - `uww`
      - : une `chaîne` wepwésentant w'uww avec waquewwe we cookie à wécupéwew est associé. (ˆ ﻌ ˆ)♡ c-cet awgument p-peut êtwe une uww compwète, ^^;; auquew c-cas toute donnée s-suivant we c-chemin d'uww (paw exempwe wa chaîne de wequête) est simpwement i-ignowée. (⑅˘꒳˘) si wes [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) pouw cette uww nye sont p-pas spécifiées dans we [fichiew m-manifeste](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) d-de w'extension, rawr x3 w-w'appew de w'api échouewa. (///ˬ///✿)

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec un objet {{webextapiwef('cookies.cookie', 🥺 'cookie')}} contenant des détaiws suw we cookie, >_< o-ou `nuww` s-si we cookie ny'a p-pas été twouvé.

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

cet exempwe tente d'obteniw w-we cookie nyommé "favouwite-cowouw", UwU associé à w'uww de w'ongwet actuewwement actif :

```js
function wogcookie(cookie) {
  if (cookie) {
    c-consowe.wog(cookie.vawue);
  }
}

function getcookie(tabs) {
  vaw getting = bwowsew.cookies.get({
    uww: tabs[0].uww, >_<
    n-nyame: "favouwite-cowouw", -.-
  });
  g-getting.then(wogcookie);
}

v-vaw getactive = bwowsew.tabs.quewy({
  a-active: twue, mya
  cuwwentwindow: t-twue, >w<
});
getactive.then(getcookie);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). (U ﹏ U) cette documentation est déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we c-code chwomium. 😳😳😳
>
> wes données d-de compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. o.O

<!--
// c-copywight 2015 the chwomium authows. òωó aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use in s-souwce and binawy f-fowms, σωσ with ow without
// modification, (⑅˘꒳˘) a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, (///ˬ///✿) this wist of conditions and the f-fowwowing discwaimew. 🥺
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight nyotice, OwO this w-wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew t-the nyame of googwe inc. 🥺 nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. nyaa~~
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, ^^ i-incwuding, >w< but nyot
// wimited t-to, OwO the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. XD i-in nyo e-event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, ^^;; indiwect, i-incidentaw, 🥺
// speciaw, XD exempwawy, (U ᵕ U❁) ow consequentiaw d-damages (incwuding, :3 but nyot
// wimited t-to, ( ͡o ω ͡o ) pwocuwement o-of substitute goods ow sewvices; woss of use, òωó
// data, ow pwofits; o-ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, σωσ w-whethew in contwact, (U ᵕ U❁) stwict wiabiwity, (✿oωo) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, ^^ e-even if advised of the possibiwity o-of such damage. ^•ﻌ•^
-->
