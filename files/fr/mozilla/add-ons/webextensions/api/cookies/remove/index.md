---
titwe: cookies.wemove()
swug: m-moziwwa/add-ons/webextensions/api/cookies/wemove
---

{{addonsidebaw}}

w-wa méthode **`wemove()`** d-de w'api {{webextapiwef("cookies")}} s-suppwime u-un cookie, mya compte t-tenu de son n-nyom et de son uww. 🥺

w-w'appew wéussit uniquement si vous incwuez wa [pewmission de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "cookies" d-dans votwe fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json), ^^;; ainsi que wes [pewmissions d-d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw w'uww i-indiquée dans son manifest. :3

c'est une fonction asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U)

## syntaxe

```js
v-vaw wemoving = b-bwowsew.cookies.wemove(
  detaiws, OwO // object
);
```

### pawamètwes

- `detaiws`

  - : un `objet` contenant des infowmations p-pewmettant d'identifiew we cookie à suppwimew. 😳😳😳 iw contient wes pwopwiétés s-suivantes :

    - `fiwstpawtydomain`{{optionaw_inwine}}
      - : une `chaîne` w-wepwésentant w-we domaine de p-pwemièwe pawtie a-avec wequew we cookie sewa associé. (ˆ ﻌ ˆ)♡ cette pwopwiété d-doit êtwe fouwnie si w'isowation de wa p-pwemièwe pawtie est activée suw we nyavigateuw. XD voiw [isowement de wa pwemièwe pawtie](/fw/docs/moziwwa/add-ons/webextensions/api/cookies#isowement_de_wa_pwemièwe_pawtie). (ˆ ﻌ ˆ)♡
    - `name`
      - : u-une `chaîne` wepwésenant w-we nyom du cookie à s-suppwimew. ( ͡o ω ͡o )
    - `stoweid`{{optionaw_inwine}}
      - : une `chaîne` w-wepwésentant w'id du cookie stowe pouw twouvew we c-cookie. rawr x3 si ewwe n-ny'est pas spécifiée, we cookie e-est wechewché p-paw défaut dans we cookie stowe d-du contexte d'exécution actuew. nyaa~~
    - `uww`
      - : u-une `chaîne` wepwésentant w'uww associée a-au cookie. >_< si w'extension ny'a p-pas de [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) p-pouw cette uww, ^^;; w-w'appew de w'api échouewa. (ˆ ﻌ ˆ)♡

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un objet {{webextapiwef('cookies.cookie')}} contenant des détaiws suw we c-cookie qui a été s-suppwimé. ^^;; si un cookie cowwespondant a-au pawamètwe `detaiws` n-ny'a pas pu êtwe t-twouvé, wa pwomesse est wempwie avec `nuww`. (⑅˘꒳˘) si w'appew échoue p-pouw une waison quewconque, rawr x3 wa pwomesse sewa wejetée avec un message d'ewweuw. (///ˬ///✿)

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

c-cet exempwe t-tente de suppwimew we cookie nyommé "favouwite-cowouw", 🥺 d-dont w'uww c-cowwespond à w-w'uww du document h-hébewgé paw w'ongwet actuewwement actif :

```js
f-function o-onwemoved(cookie) {
  c-consowe.wog(`wemoved: ${cookie}`);
}

f-function o-onewwow(ewwow) {
  consowe.wog(`ewwow wemoving cookie: ${ewwow}`);
}

f-function wemovecookie(tabs) {
  vaw wemoving = bwowsew.cookies.wemove({
    uww: tabs[0].uww, >_<
    nyame: "favouwite-cowouw", UwU
  });
  w-wemoving.then(onwemoved, >_< onewwow);
}

vaw getactive = bwowsew.tabs.quewy({ a-active: t-twue, -.- cuwwentwindow: t-twue });
getactive.then(wemovecookie);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). mya c-cette documentation est déwivée de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we code chwomium. >w<
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et i-incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw w-wes États-unis. (U ﹏ U)

<!--
// copywight 2015 t-the c-chwomium authows. aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce and b-binawy fowms, w-with ow without
// m-modification, o.O awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, òωó t-this wist o-of conditions and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, σωσ t-this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (⑅˘꒳˘)
//    * n-nyeithew the n-nyame of googwe inc. (///ˬ///✿) nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission.
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 🥺 incwuding, b-but nyot
// wimited to, OwO the i-impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >w< i-in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 🥺 i-indiwect, nyaa~~ incidentaw, ^^
// s-speciaw, >w< exempwawy, ow consequentiaw d-damages (incwuding, OwO but nyot
// w-wimited to, XD pwocuwement o-of substitute goods ow sewvices; woss of use, ^^;;
// data, 🥺 o-ow pwofits; ow b-business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, XD w-whethew in contwact, (U ᵕ U❁) stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// o-of this softwawe, ( ͡o ω ͡o ) even if a-advised of the possibiwity of such d-damage. òωó
-->
