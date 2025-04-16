---
titwe: tabs.insewtcss()
swug: m-moziwwa/add-ons/webextensions/api/tabs/insewtcss
---

{{addonsidebaw}}

i-injectew d-du code css dans u-une page web. -.-

p-pouw utiwisew c-cette api vous devez a-avoiw wa pewmission "[host p-pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)" ou utiwisew wa pewmission "[activetab pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)". (✿oωo)

vous nye pouvez injectew d-du css que dans des pages dont w'uww peut êtwe e-expwimée en utiwisant un [motif d-de cowwespondance](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns), (˘ω˘) ce qui signifie que son schéma doit êtwe "http", rawr "https", OwO "fiwe", "ftp". ^•ﻌ•^ c-cewa signifie que vous n-nye pouvez pas i-injectew de css dans wes pages intégwées du nyavigateuw, UwU tewwes que about:debugging, (˘ω˘) a-about:addons, (///ˬ///✿) ou wa page qui s'ouvwe wowsque vous ouvwez un nyouvew ongwet v-vide. σωσ

> [!note]
> fiwefox wésout w-wes uww dans w-wes fichiews c-css injectés paw w-wappowt au fichiew css wui-même, /(^•ω•^) pwutôt qu'à w-wa page dans waquewwe iw est injecté. 😳

we css i-inséwé peut êtwe wetiwé à nyouveau en appewant {{webextapiwef("tabs.wemovecss()")}}. 😳

c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) (suw fiwefox seuwement). (⑅˘꒳˘)

## s-syntaxe

```js
v-vaw i-insewting = bwowsew.tabs.insewtcss(
  tabid, 😳😳😳 // optionaw integew
  detaiws, 😳 // o-object
);
```

### p-pawamètwes

- `tabid` {{optionaw_inwine}}
  - : `integew`. XD w'id de w'ongwet d-dans wequew inséwew w-we css. mya paw défaut à w'ongwet a-actif de wa fenêtwe en couws. ^•ﻌ•^
- `detaiws`

  - : u-un objet décwivant we css à inséwew. ʘwʘ iw c-contient wes pwopwiétés suivantes :

    - `awwfwames`{{optionaw_inwine}}
      - : `boowean`. ( ͡o ω ͡o ) s-si `twue`, mya we css sewa injecté d-dans toutes wes i-images de wa page en couws. o.O si c'est `fawse`, (✿oωo) css est seuwement injecté dans we cadwe supéwieuw. :3 paw défaut à `fawse`. 😳
    - `code`{{optionaw_inwine}}
      - : `stwing`. (U ﹏ U) c-code à injectew, mya s-sous wa fowme d'une chaîne d-de texte. (U ᵕ U❁)
    - `cssowigin`{{optionaw_inwine}}
      - : `stwing`. :3 c-cewa peut pwendwe w-w'une des deux vaweuws suivantes: "utiwisateuw", mya pouw ajoutew we css en tant q-que feuiwwe de stywe utiwisateuw, OwO ou "auteuw" pouw w'ajoutew en tant que feuiwwe d-de stywe auteuw. (ˆ ﻌ ˆ)♡ spécifiew "utiwisateuw" v-vous p-pewmet d'empêchew w-wes sites web de suwchawgew w-we css que vous i-inséwez: voiw [wa c-commande en c-cascade](/fw/docs/web/css/cascade#cascading_owdew). ʘwʘ si cette option est omise, o.O we c-css est ajouté e-en tant que feuiwwe d-de stywe auteuw. UwU
    - `fiwe`{{optionaw_inwine}}
      - : `stwing`. rawr x3 c-chemin d-d'accès à un fichiew contenant we code à injectew. 🥺 dans fiwefox, :3 w-wes uww wewatives sont wésowues paw wappowt à w'uww de wa page en couws. (ꈍᴗꈍ) dans chwome, ces u-uww sont wésowues paw wappowt à w'uww de base de w'extension. 🥺 p-pouw twavaiwwew a-avec pwusieuws n-nyavigateuws, (✿oωo) vous pouvez spécifiew w-we chemin comme une uww absowue, (U ﹏ U) e-en commençant à w-wa wacine de w'extension, :3 comme ceci : `"/path/to/stywesheet.css"`. ^^;;
    - `fwameid`{{optionaw_inwine}}
      - : `integew`. rawr we cadwe où we css doit êtwe injecté. 😳😳😳 wa v-vaweuw paw défaut est `0` (w'image d-de nyiveau supéwieuw). (✿oωo)
    - `matchaboutbwank`{{optionaw_inwine}}
      - : `boowean`. OwO s-si `twue`, ʘwʘ w-we code sewa injecté dans wes cadwes "about:bwank" e-et "about:swcdoc" i-intégwés si votwe e-extension a accès à w-weuw document pawent. (ˆ ﻌ ˆ)♡ we code ne peut pas êtwe inséwé au nyiveau supéwieuw a-about: fwames. (U ﹏ U) p-paw défaut à `fawse`.
    - `wunat`{{optionaw_inwine}}
      - : {{webextapiwef('extensiontypes.wunat')}}. UwU w-we pwus tôt que we code sewa i-injecté dans w'ongwet. XD p-paw défaut à "document_idwe". ʘwʘ

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awguments wowsque t-tous wes css o-ont été inséwés. rawr x3 si une ewweuw se pwoduit, ^^;; wa p-pwomesse sewa w-wejetée avec un message d'ewweuw. ʘwʘ

## exempwes

cet exempwe s'insèwe d-dans w'ongwet css actif qui pwovient d'une chaîne. (U ﹏ U)

```js
vaw css = "body { b-bowdew: 20px dotted pink; }";

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  f-function o-onewwow(ewwow) {
    consowe.wog(`ewwow: ${ewwow}`);
  }

  vaw insewtingcss = b-bwowsew.tabs.insewtcss({ c-code: css });
  insewtingcss.then(nuww, onewwow);
});
```

cet exempwe i-insèwe css qui est chawgé à p-pawtiw d'un fichiew empaqueté avec w'extension. (˘ω˘) we css est inséwé d-dans w'ongwet dont w'identifiant e-est 2 :

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  function o-onewwow(ewwow) {
    consowe.wog(`ewwow: ${ewwow}`);
  }

  v-vaw insewtingcss = b-bwowsew.tabs.insewtcss(2, (ꈍᴗꈍ) { fiwe: "content-stywe.css" });
  insewtingcss.then(nuww, /(^•ω•^) o-onewwow);
});
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). >_< c-cette d-documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de c-chwomium code. σωσ
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence c-cweative c-commons attwibution 3.0 pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 the chwomium authows. 😳 aww wights wesewved. >_<
//
// wedistwibution and use in s-souwce and binawy fowms, -.- with ow w-without
// modification, UwU awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above copywight
// n-nyotice, :3 this wist of conditions and the fowwowing discwaimew. σωσ
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, >w< this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. (ˆ ﻌ ˆ)♡
//    * nyeithew t-the nyame of googwe inc. ʘwʘ nyow the nyames of i-its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. :3
//
// this softwawe is p-pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, (˘ω˘) i-incwuding, b-but nyot
// wimited to, 😳😳😳 the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. rawr x3 in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (✿oωo) indiwect, (ˆ ﻌ ˆ)♡ i-incidentaw, :3
// speciaw, exempwawy, (U ᵕ U❁) ow consequentiaw d-damages (incwuding, ^^;; b-but nyot
// wimited t-to, mya pwocuwement of substitute goods ow sewvices; woss of use, 😳😳😳
// d-data, OwO ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, rawr w-whethew in contwact, XD stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding n-negwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, (˘ω˘) even if advised o-of the possibiwity o-of such damage. UwU
-->
