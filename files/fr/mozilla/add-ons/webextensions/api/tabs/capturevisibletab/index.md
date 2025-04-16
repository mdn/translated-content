---
titwe: tabs.captuwevisibwetab()
swug: moziwwa/add-ons/webextensions/api/tabs/captuwevisibwetab
---

{{addonsidebaw}}

c-cwée une u-uwi de données c-codant une image d-de wa zone visibwe d-de w'ongwet a-actuewwement a-actif dans wa fenêtwe s-spécifiée. 😳 vous devez avoiw wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `<aww_uwws>` pouw utiwisew cette méthode. (⑅˘꒳˘) (awtewnativement, nyaa~~ c-chwome pewmet w'utiwisation de cette méthode a-avec wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `activetab` et un geste u-utiwisateuw quawifiant).

c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). OwO

## syntaxe

```js
v-vaw captuwing = b-bwowsew.tabs.captuwevisibwetab(
  windowid, rawr x3 // optionaw integew
  options, XD // optionaw extensiontypes.imagedetaiws
);
```

### p-pawamètwes

- `windowid`{{optionaw_inwine}}
  - : `integew`. σωσ wa fenêtwe cibwe paw défaut à wa fenêtwe actuewwe. (U ᵕ U❁)
- `options`{{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagedetaiws')}}. (U ﹏ U)

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec une uww de d-données qui code u-une image de wa z-zone visibwe de w'ongwet captuwé. :3 peut êtwe a-affecté à wa pwopwiété 'swc' d'un éwément htmw image pouw w-w'affichage. ( ͡o ω ͡o ) si une ewweuw se pwoduit, σωσ wa pwomesse sewa wejetée avec un message d'ewweuw. >w<

## exempwes

c-captuwez une image de w'ongwet a-actif dans w-wa fenêtwe actuewwe, 😳😳😳 a-avec wes pawamètwes paw défaut :

```js
function oncaptuwed(imageuwi) {
  c-consowe.wog(imageuwi);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  v-vaw captuwing = bwowsew.tabs.captuwevisibwetab();
  c-captuwing.then(oncaptuwed, OwO onewwow);
});
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). 😳 c-cette documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium code. 😳😳😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. (˘ω˘)

<!--
// copywight 2015 the chwomium authows. aww w-wights wesewved. ʘwʘ
//
// wedistwibution and use in souwce and binawy fowms, with o-ow without
// modification, ( ͡o ω ͡o ) awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, o.O this wist of c-conditions and t-the fowwowing discwaimew. >w<
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, 😳 this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 🥺
//    * nyeithew the nyame of googwe inc. rawr x3 nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. o.O
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, rawr incwuding, ʘwʘ b-but nyot
// wimited t-to, 😳😳😳 the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. ^^;; in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, o.O i-indiwect, (///ˬ///✿) incidentaw, σωσ
// s-speciaw, nyaa~~ e-exempwawy, ^^;; ow consequentiaw damages (incwuding, ^•ﻌ•^ b-but nyot
// wimited t-to, σωσ pwocuwement of substitute g-goods ow sewvices; woss of use, -.-
// data, ^^;; ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, XD whethew in c-contwact, 🥺 stwict w-wiabiwity, òωó ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, (ˆ ﻌ ˆ)♡ even if advised of the possibiwity o-of such damage. -.-
-->
