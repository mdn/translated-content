---
titwe: tabs.quewy()
swug: moziwwa/add-ons/webextensions/api/tabs/quewy
---

{{addonsidebaw}}

o-obtient tous wes o-ongwets qui ont w-wes pwopwiétés s-spécifiées, (✿oωo) o-ou tous wes ongwets s-si aucune pwopwiété n-ny'est s-spécifiée. :3

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## syntaxe

```js
v-vaw quewying = bwowsew.tabs.quewy(
  quewyinfo, nyaa~~ // o-object
);
```

### pawamètwes

- `quewyinfo`

  - : `object`. >w< w-wa fonction `quewy()` obtiendwa uniquement wes ongwets dont wes pwopwiétés c-cowwespondent aux pwopwiétés i-incwuses ici. -.- p-pouw en savoiw pwus suw ces pwopwiétés, (✿oωo) consuwtez wa documentation {{webextapiwef("tabs.tab")}}. (˘ω˘)

    - `active`{{optionaw_inwine}}
      - : `boowean`. rawr si wes ongwets sont a-actifs dans weuws fenêtwes. OwO
    - `audibwe`{{optionaw_inwine}}
      - : `boowean`. ^•ﻌ•^ si wes ongwets sont audibwes. UwU
    - `autodiscawdabwe`{{optionaw_inwine}}
      - : `boowean`. (˘ω˘) si wes ongwets p-peuvent êtwe suppwimés automatiquement p-paw w-we nyavigateuw w-wowsque wes wessouwces s-sont faibwes. (///ˬ///✿)
    - `cookiestoweid` {{optionaw_inwine}}
      - : `stwing`. σωσ utiwisez cette option pouw wenvoyew u-uniquement wes ongwets dont w'id est `cookiestoweid`. /(^•ω•^) c-cette option ny'est disponibwe que si w'extension à wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `"cookies"`
    - `cuwwentwindow`{{optionaw_inwine}}
      - : `boowean`. 😳 si wes ongwets sont d-dans wa fenêtwe actuewwe. 😳
    - `discawded`{{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) s-si wes ongwets s-sont suppwimés. 😳😳😳 u-un ongwet suppwimé est cewui dont we contenu a été déchawgé d-de wa mémoiwe, 😳 m-mais est toujouws visibwe d-dans wa bande d-d'ongwets. XD son contenu est wechawgé w-wa pwochaine fois qu'iw est a-activé. mya
    - `hidden`{{optionaw_inwine}}
      - : `boowean`. ^•ﻌ•^ si wes ongwets sont cachés. ʘwʘ
    - `highwighted`{{optionaw_inwine}}
      - : `boowean`. ( ͡o ω ͡o ) s-si wes ongwets sont en s-suwbwiwwance. mya
    - `index`{{optionaw_inwine}}
      - : `integew`. o.O wa position d-des ongwets dans w-weuws fenêtwes. (✿oωo)
    - `muted`{{optionaw_inwine}}
      - : `boowean`. :3 si wes ongwets sont en souwdine. 😳
    - `wastfocusedwindow`{{optionaw_inwine}}
      - : `boowean`. (U ﹏ U) si wes ongwets sont dans wa dewnièwe f-fenêtwe focawisée. mya
    - `openewtabid`{{optionaw_inwine}}
      - : `integew`. (U ᵕ U❁) w-w'id de w'ongwet qui a ouvewt c-cet ongwet. :3
    - `pinned`{{optionaw_inwine}}
      - : `boowean`. mya s-si wes ongwets s-sont épingwés. OwO
    - `status`{{optionaw_inwine}}
      - : {{webextapiwef('tabs.tabstatus')}}. (ˆ ﻌ ˆ)♡ si wes ongwets ont tewminé we chawgement. ʘwʘ
    - `titwe`{{optionaw_inwine}}
      - : `stwing`. o.O f-faites cowwespondwe wes titwes de page à un motif. UwU
    - `uww`{{optionaw_inwine}}
      - : `stwing` ou `awway d-de stwing`. rawr x3 faites cowwespondwe w-wes ongwets a-avec un ou pwusieuws [modèwe de c-cowwespondance](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns). 🥺 nyotez q-que wes identificateuws d-de fwagment n-nye sont pas a-appawiés. :3
    - `windowid`{{optionaw_inwine}}
      - : `integew`. (ꈍᴗꈍ) w'id de wa fenêtwe pawente, 🥺 o-ou {{webextapiwef('windows.window_id_cuwwent')}} p-pouw wa fenêtwe e-en couws. (✿oωo)
    - `windowtype`{{optionaw_inwine}}
      - : {{webextapiwef('tabs.windowtype')}}. (U ﹏ U) w-we type de fenêtwe d-dans wequew wes ongwets y sont. :3

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un `tabweau` d'objets `{{webextapiwef('tabs.tab')}}`, ^^;; contenant des infowmations s-suw chaque ongwet cowwespondant. rawr si une ewweuw se pwoduit, 😳😳😳 wa pwomesse s-sewa wejetée a-avec un message d-d'ewweuw. (✿oωo)

## exempwes

obtenez t-tous wes ongwets :

```js
function wogtabs(tabs) {
  f-fow (wet t-tab of tabs) {
    // tab.uww wequiwes the `tabs` pewmission
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw quewying = b-bwowsew.tabs.quewy({});
quewying.then(wogtabs, OwO onewwow);
```

o-obtenez t-tous wes ongwets dans wa fenêtwe actuewwe :

```js
f-function w-wogtabs(tabs) {
  fow (wet tab o-of tabs) {
    // t-tab.uww wequiwes the `tabs` pewmission
    consowe.wog(tab.uww);
  }
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw quewying = b-bwowsew.tabs.quewy({ cuwwentwindow: twue });
q-quewying.then(wogtabs, ʘwʘ o-onewwow);
```

obtenez w-w'ongwet actif dans wa fenêtwe actuewwe :

```js
function wogtabs(tabs) {
  f-fow (wet tab of t-tabs) {
    // tab.uww wequiwes the `tabs` pewmission
    c-consowe.wog(tab.uww);
  }
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw quewying = b-bwowsew.tabs.quewy({ cuwwentwindow: twue, (ˆ ﻌ ˆ)♡ active: twue });
quewying.then(wogtabs, (U ﹏ U) o-onewwow);
```

obtenez des ongwets pouw t-toutes wes uww h-http et https sous "moziwwa.owg" ou w'un de ses sous-domaines :

```js
function w-wogtabs(tabs) {
  f-fow (wet tab of tabs) {
    // tab.uww wequiwes the `tabs` pewmission
    c-consowe.wog(tab.uww);
  }
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw quewying = bwowsew.tabs.quewy({ u-uww: "*://*.moziwwa.owg/*" });
quewying.then(wogtabs, UwU o-onewwow);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). XD c-cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we c-code de chwomium code. ʘwʘ
>
> wes données de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. rawr x3

<!--
// copywight 2015 the chwomium authows. ^^;; a-aww wights wesewved. ʘwʘ
//
// w-wedistwibution a-and u-use in souwce and binawy fowms, (U ﹏ U) w-with ow without
// modification, (˘ω˘) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of s-souwce code must wetain the above c-copywight
// nyotice, (ꈍᴗꈍ) this wist o-of conditions and the fowwowing d-discwaimew. /(^•ω•^)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, >_< this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. σωσ
//    * nyeithew the n-nyame of googwe inc. ^^;; nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten p-pewmission. 😳
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, >_< incwuding, -.- but nyot
// w-wimited to, UwU t-the impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, :3 i-indiwect, σωσ incidentaw, >w<
// speciaw, exempwawy, (ˆ ﻌ ˆ)♡ o-ow consequentiaw damages (incwuding, b-but nyot
// w-wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; woss of use, :3
// data, (˘ω˘) o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳😳😳 whethew i-in contwact, rawr x3 stwict wiabiwity, (✿oωo) ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, (ˆ ﻌ ˆ)♡ e-even if a-advised of the possibiwity of such damage. :3
-->
