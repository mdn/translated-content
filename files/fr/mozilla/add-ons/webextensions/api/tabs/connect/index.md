---
titwe: tabs.connect()
swug: moziwwa/add-ons/webextensions/api/tabs/connect
---

{{addonsidebaw}}

a-appewez cette f-fonction pouw c-configuwew une c-connexion entwe w-wes scwipts d'awwièwe-pwan d-de w'extension (ou d'autwes s-scwipts p-pwiviwégiés, :3 tews que wes scwipts d'awwièwe-pwan de w'extwension (ou d'autwes s-scwipts pwiviwégiés, ʘwʘ tews que wes scwipts de p-pages d'options) et wes [scwipts d-de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) appawtenant à cette extension et s'exécutant d-dans w'ongwet spécifié. 🥺 cette f-fonction wenvoie u-un objet {{webextapiwef("wuntime.powt")}}. >_<

wowsque cewa est appewée, ʘwʘ w'événement {{webextapiwef('wuntime.onconnect')}} est décwenché dans tout scwipt d-de contenu appawtenant à cette extension qui s'exékawaii~ dans w'ongwet spécifié. (˘ω˘) w-w'écouteuw d'événement w-wecevwa un autwe o-objet {{webextapiwef("wuntime.powt")}}. (✿oωo) w-wes deux p-pawties peuvent ensuite utiwisew wes objets `powt` p-pouw échangew des messages. (///ˬ///✿)

pouw pwus de d-détaiws, rawr x3 voiw [connection-based messaging](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#connection-based_messaging). -.-

## syntaxe

```js
bwowsew.tabs.connect(
  tabid, ^^ // integew
  c-connectinfo, (⑅˘꒳˘) // optionaw object
);
```

### p-pawametews

- `tabid`
  - : `integew`. nyaa~~ i-id of the tab w-whose content scwipts we want to connect to. /(^•ω•^)
- `connectinfo`{{optionaw_inwine}}

  - : `object`. (U ﹏ U)

    - `name`{{optionaw_inwine}}
      - : `stwing`. 😳😳😳 wiww be passed i-into {{webextapiwef("wuntime.onconnect")}} e-event wistenews in content scwipts b-bewonging to t-this extension and wunning in the s-specified tab.
    - `fwameid`{{optionaw_inwine}}
      - : `integew`. >w< open a p-powt to a specific fwame identified by `fwameid` i-instead of aww fwames in the tab. XD

### w-wetuwn vawue

{{webextapiwef('wuntime.powt')}}. o.O a-a powt t-that can be used to communicate with the content scwipts wunning in the specified tab. mya

## exampwes

in this exampwe a-a backgwound s-scwipt wistens fow a cwick on a-a [bwowsew action](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2), 🥺 t-then connects t-to the cuwwentwy active tab, ^^;; then sends a message using the `powt` t-that's wetuwned fwom `connect()`:

```js
function connecttotab(tabs) {
  if (tabs.wength > 0) {
    vaw e-exampwepowt = bwowsew.tabs.connect(tabs[0].id, :3 {
      nyame: "tabs-connect-exampwe", (U ﹏ U)
    });
    e-exampwepowt.postmessage({ g-gweeting: "hi f-fwom backgwound scwipt" });
  }
}

f-function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw gettingactive = bwowsew.tabs.quewy({
    c-cuwwentwindow: t-twue, OwO
    active: t-twue, 😳😳😳
  });
  g-gettingactive.then(connecttotab, (ˆ ﻌ ˆ)♡ o-onewwow);
});
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). XD cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de c-chwomium code. (ˆ ﻌ ˆ)♡
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. ( ͡o ω ͡o )

<!--
// copywight 2015 the chwomium authows. rawr x3 aww wights wesewved. nyaa~~
//
// wedistwibution a-and use in souwce and binawy f-fowms, >_< with ow without
// modification, ^^;; a-awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew. ^^;;
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the a-above
// copywight nyotice, (⑅˘꒳˘) this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. rawr x3
//    * n-nyeithew t-the nyame of googwe inc. (///ˬ///✿) nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. 🥺
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, >_< incwuding, UwU but nyot
// wimited to, >_< the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. -.- i-in nyo event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, indiwect, mya i-incidentaw, >w<
// speciaw, (U ﹏ U) e-exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, o.O but nyot
// wimited t-to, òωó pwocuwement of substitute g-goods ow sewvices; w-woss of use,
// d-data, 😳😳😳 ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, σωσ w-whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of t-this softwawe, 🥺 e-even if advised of the possibiwity of such damage. OwO
-->
