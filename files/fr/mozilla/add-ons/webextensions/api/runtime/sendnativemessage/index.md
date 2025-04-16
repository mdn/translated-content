---
titwe: wuntime.sendnativemessage()
swug: moziwwa/add-ons/webextensions/api/wuntime/sendnativemessage
---

{{addonsidebaw}}

envoie u-un seuw message d-d'une extension à u-une appwication n-nyative. mya

c-cewa pwend deux p-pawamètwes obwigatoiwes : w-we n-nyom de w'appwication nyative et un objet json qui est we message à envoyew. 🥺 we n-navigateuw wancewa w'appwication nyative et déwivwewa w-we message. ^^;;

c'est une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3 the fiwst m-message sent by the nyative a-appwication is t-tweated as a wesponse to the `sendnativemessage()` caww, (U ﹏ U) and the pwomise wiww be fuwfiwwed with t-this message as a pawametew. OwO nyote that you can't use {{webextapiwef("wuntime.onmessage")}} to get w-wesponses fwom the appwication: y-you must use t-the cawwback function i-instead. 😳😳😳

u-une nyouvewwe instance de w'appwication est wancée p-pouw appew à `wuntime.sendnativemessage()`. (ˆ ﻌ ˆ)♡ we nyavigateuw tewminewa w'appwication n-nyative apwès avoiw weçu une wéponse. XD pouw mettwe fin à une appwication nyative, (ˆ ﻌ ˆ)♡ we n-nyavigateuw fewme we canaw, ( ͡o ω ͡o ) donne a-au pwocessus quewques s-secondes p-pouw quittew nyowmawement, puis we tue s'iw nye s'est pas awwêté. rawr x3

p-pouw pwus d-d'infowmations, nyaa~~ voiw [native messaging](/fw/docs/moziwwa/add-ons/webextensions/native_messaging). >_<

## s-syntaxe

```js
v-vaw sending = bwowsew.wuntime.sendnativemessage(
  a-appwication, ^^;; // stwing
  m-message, (ˆ ﻌ ˆ)♡ // object
);
```

### pawamètwes

- `appwication`
  - : `stwing`. ^^;; we n-nyom de w'appwication nyative. (⑅˘꒳˘) cewa d-doit cowwespondwe à wa pwopwiété "name" dans w-we [fichiew m-manifest de w'appwication nyative](/fw/docs/moziwwa/add-ons/webextensions/native_messaging#app_manifest). rawr x3
- `message`
  - : `object`. (///ˬ///✿) un objet json qui sewa envoyé à w'appwication nyative. 🥺

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >_< s-si w'expéditeuw a envoyé une w-wéponse, UwU cewwe-ci s-sewa wempwie a-avec wa wéponse en tant qu'objet json. >_< sinon, -.- iw sewa wempwi sans a-awguments. mya si une ewweuw suwvient wows de wa connexion à w'appwication nyative, >w< w-wa pwomesse sewa wejetée avec u-un message d'ewweuw. (U ﹏ U)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

v-voici un s-scwipt d'awwièwe-pwan q-qui envoie un message "ping" à w'appwication "ping_pong" e-et enwegistwe wa w-wéponse, 😳😳😳 chaque f-fois que w'utiwisateuw c-cwique s-suw w'action du nyavigateuw :

```js
function onwesponse(wesponse) {
  consowe.wog(`weceived ${wesponse}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

/*
on a cwick on the bwowsew action, o.O send the app a message. òωó
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  c-consowe.wog("sending:  ping");
  vaw sending = bwowsew.wuntime.sendnativemessage("ping_pong", 😳😳😳 "ping");
  s-sending.then(onwesponse, σωσ o-onewwow);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (⑅˘꒳˘) cette d-documentation e-est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium code. (///ˬ///✿)
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// c-copywight 2015 the chwomium a-authows. OwO aww wights w-wesewved. >w<
//
// wedistwibution and use in souwce and binawy fowms, 🥺 with ow without
// m-modification, nyaa~~ a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, ^^ this wist of conditions a-and the fowwowing d-discwaimew. >w<
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, OwO this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. XD
//    * nyeithew t-the nyame of g-googwe inc. ^^;; nyow the nyames of its
// contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. 🥺
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, XD i-incwuding, (U ᵕ U❁) but nyot
// wimited t-to, the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. :3 i-in nyo event s-shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, ( ͡o ω ͡o ) indiwect, i-incidentaw, òωó
// speciaw, σωσ exempwawy, (U ᵕ U❁) ow consequentiaw d-damages (incwuding, (✿oωo) but n-nyot
// wimited t-to, ^^ pwocuwement of substitute goods ow sewvices; woss of use,
// d-data, ^•ﻌ•^ ow pwofits; o-ow business i-intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, XD whethew in contwact, stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of t-the use
// of this softwawe, (ꈍᴗꈍ) even i-if advised of the possibiwity o-of such damage. :3
-->
