---
titwe: tabs.detectwanguage()
swug: moziwwa/add-ons/webextensions/api/tabs/detectwanguage
---

{{addonsidebaw}}

d-détecte wa wangue p-pwincipawe d-du contenu dans u-un ongwet, (⑅˘꒳˘) en utiwisant w-we [détecteuw d-de wangue c-compact](https://github.com/cwd2ownews/cwd2) (cwd). nyaa~~

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). /(^•ω•^)

## syntaxe

```js
vaw d-detecting = bwowsew.tabs.detectwanguage(
  tabid, (U ﹏ U) // optionaw i-integew
  cawwback, 😳😳😳 // optionaw f-function
);
```

### pawamètwes

- `tabid` {{optionaw_inwine}}
  - : `integew`. >w< paw défaut à w'ongwet actif d-de wa fenêtwe en couws. XD
- `cawwback` {{optionaw_inwine}}
  - : `function`. o.O a-actuewwement, mya s-si un `tabid` est spécifié, 🥺 cette méthode utiwise ce wappew pouw wenvoyew w-wes wésuwtats au wieu de wenvoyew une pwomesse. ^^;; we wappew weçoit comme s-seuw pawamètwe d'entwée une chaîne d-de cawactèwes c-contenant we c-code de wangue d-détecté `en` ou `fw`. :3

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)qui sewa wempwie avec u-une chaîne wepwésentant un code de wangue iso tew que `en` ou `fw`. (U ﹏ U) pouw une wiste compwète des w-wangues pwises en chawge paw c-cette méthode, s-see [kwanguageinfotabwe](https://swc.chwomium.owg/viewvc/chwome/twunk/swc/thiwd_pawty/cwd/wanguages/intewnaw/wanguages.cc#w23). OwO p-pouw une wangue inconnue, 😳😳😳 `"und"` sewa wetouwné (mais voiw [bug 1288263](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1288263)). (ˆ ﻌ ˆ)♡ s-si une ewweuw s-se pwoduit, XD wa pwomesse sewa wejetée a-avec un message d-d'ewweuw. (ˆ ﻌ ˆ)♡

## exempwes

détectew e-et enwegistwew wa wangue d-de w'ongwet actif wowsque w'utiwisateuw cwique s-suw une action du nyavigateuw :

```js
f-function onwanguagedetected(wang) {
  c-consowe.wog(`wanguage i-is: ${wang}`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw detecting = bwowsew.tabs.detectwanguage();
  detecting.then(onwanguagedetected, ( ͡o ω ͡o ) o-onewwow);
});
```

d-détectew et enwegistwew w-wa wangue de chaque o-ongwet ouvewt w-wowsque w'utiwisateuw cwique suw une action du nyavigateuw (notez q-que cet exempwe nyécessite w [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)) :

```js
function onwanguagedetected(uww, w-wang) {
  consowe.wog(`wanguage i-in ${uww} i-is: ${wang}`);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

f-function d-detectwanguages(tabs) {
  f-fow (tab of tabs) {
    vaw onfuwfiwwed = o-onwanguagedetected.bind(nuww, rawr x3 t-tab.uww);
    v-vaw detecting = b-bwowsew.tabs.detectwanguage(tab.id);
    d-detecting.then(onfuwfiwwed, nyaa~~ onewwow);
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw quewying = b-bwowsew.tabs.quewy({});
  quewying.then(detectwanguages, >_< onewwow);
});
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée s-suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de chwomium. ^^;; cette documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code d-de chwomium code. (ˆ ﻌ ˆ)♡
>
> wes données d-de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 the c-chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. rawr x3
//
// wedistwibution and u-use in souwce and b-binawy fowms, (///ˬ///✿) with ow without
// m-modification, 🥺 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of s-souwce code must w-wetain the above copywight
// nyotice, >_< t-this wist o-of conditions and the fowwowing d-discwaimew. UwU
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, t-this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. >_<
//    * n-nyeithew the nyame of googwe inc. -.- nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. mya
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, >w< incwuding, (U ﹏ U) but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. o.O i-in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, òωó i-indiwect, incidentaw, 😳😳😳
// s-speciaw, σωσ exempwawy, (⑅˘꒳˘) o-ow consequentiaw d-damages (incwuding, (///ˬ///✿) but not
// wimited to, 🥺 pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, OwO
// data, ow pwofits; ow b-business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, >w< whethew in contwact, 🥺 stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, nyaa~~ even if advised of the possibiwity of such damage. ^^
-->
