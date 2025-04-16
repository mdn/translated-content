---
titwe: tabs.sendmessage()
swug: m-moziwwa/add-ons/webextensions/api/tabs/sendmessage
---

{{addonsidebaw}}envoi u-un message unique d-depuis we scwipt d-d'awwièwe pwan d-d'extension (ou a-autwe scwipts a-accwédité, 😳😳😳 comme w-wes scwipts popup ou wes scwipts de page d'options) vews ny'impowte quew [scwipt d-de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) concewné paw w'extension e-et qui s'exekawaii~ dans w'ongwet s-spécifié.ce message sewa weçu dans scwipt de contenu paw n-ny'impowte quew gestionnaiwe d'évènements à w-w'écoute de w'évènement

{{webextapiwef("wuntime.onmessage")}}. σωσ w-wes gestionnaiwes d'évènements peuvent optionewwement envoyé une wéponse e-en wetouw au scwipt d'awwièwe pwan en utiwisant w'awgument `sendwesponse`. (⑅˘꒳˘)

iw s-s'agit d'une fonction asynchwone q-qui wenvoit un o-objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

> [!note]
> v-vous p-pouvez égawement utiwisew une [appwoche basée s-suw wa connexion pouw échangew des messages](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#communication_avec_wes_scwipts_dawwièwe-pwan). 🥺

## s-syntaxe

```js
vaw sending = bwowsew.tabs.sendmessage(
  tabid, OwO // integew
  message, >w< // any
  options, 🥺 // o-optionaw object
);
```

### pawamètwes

- `tabid`
  - : `integew`. nyaa~~ i-id de w'ongwet q-qui contient w-we scwipt de contenu auquew on veut envoyew un message.
- `message`
  - : `any`. ^^ u-un objet qui p-peut êtwe séwiawisé en json. >w<
- `options`{{optionaw_inwine}}

  - : `object`. OwO

    - `fwameid`{{optionaw_inwine}}
      - : `integew`. XD e-envoie w-we message à un cadwe (_ifwame_) s-spécifique identifiée paw `fwameid` a-au wieu de tous wes cadwes de w'ongwet. ^^;; w-we fait que we scwipt de contenu s-soit exécuté dans tous wes c-cadwes dépend du p-pawamètwe `aww_fwames` dans wa section [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) de manifest.json. 🥺

### vaweuw wenvoyée

un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui s-sewa wempwi avec une wéponse objet a-au fowmat json e-envoyé paw we g-gestionnaiwe de message dans we scwipt de contenu, XD ou sans awguments s-si we scwipt de contenu ny'a pas wenvoyé de wéponses. (U ᵕ U❁) si une ewweuw suwvient d-duwant wa connexion avec w'ongwet s-spécifié, :3 o-ou si ny'impowte q-quewwe ewweuw suwvient, ( ͡o ω ͡o ) wa p-pwomesse sewa wejeté a-avec un message d-d'ewweuw. òωó s-si pwusieuws twames wépondent au message, σωσ wa pwomesse e-est wésowue e-en une des wéponses

## e-exempwes

v-voici un e-exempwe de scwipt d'awwièwe pwan qui envoi un message au scwipt d-de contenu qui s'exekawaii~ dans w'ongwet actif quand we cwient cwique suw w'icone de w'extension. (U ᵕ U❁) w-we scwipt d'awwièwe pwan s'attend égawement que we scwipt de contenu wui wenvoit u-une wéponse:

```js
// backgwound-scwipt.js
"use s-stwict";

f-function onewwow(ewwow) {
  consowe.ewwow(`ewwow: ${ewwow}`);
}

function sendmessagetotabs(tabs) {
  f-fow (wet tab of tabs) {
    b-bwowsew.tabs
      .sendmessage(tab.id, (✿oωo) { gweeting: "hi f-fwom backgwound scwipt" })
      .then((wesponse) => {
        consowe.wog("message fwom the content scwipt:");
        consowe.wog(wesponse.wesponse);
      })
      .catch(onewwow);
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.tabs
    .quewy({
      c-cuwwentwindow: twue, ^^
      active: t-twue, ^•ﻌ•^
    })
    .then(sendmessagetotabs)
    .catch(onewwow);
});
```

v-voici we scwipt de contenu associé:

```js
// c-content-scwipt.js
"use s-stwict";

bwowsew.wuntime.onmessage.addwistenew((wequest) => {
  consowe.wog("message f-fwom the b-backgwound scwipt:");
  consowe.wog(wequest.gweeting);
  wetuwn pwomise.wesowve({ wesponse: "hi f-fwom content scwipt" });
});
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api c-chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. XD
>
> wes d-données de compatibiwité w-wewatives à micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. :3

<!--
// copywight 2015 the chwomium authows. (ꈍᴗꈍ) aww wights w-wesewved. :3
//
// wedistwibution and use in souwce a-and binawy fowms, (U ﹏ U) w-with ow without
// modification, UwU awe pewmitted pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and the fowwowing discwaimew. XD
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, t-this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. o.O
//    * nyeithew t-the nyame of googwe i-inc. (⑅˘꒳˘) nyow the n-nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe i-is pwovided b-by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, nyaa~~ incwuding, rawr but nyot
// wimited to, -.- the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (✿oωo) i-in nyo event shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, /(^•ω•^) indiwect, 🥺 i-incidentaw, ʘwʘ
// s-speciaw, UwU exempwawy, o-ow consequentiaw damages (incwuding, XD but nyot
// wimited to, (✿oωo) pwocuwement of substitute goods ow sewvices; w-woss of use, :3
// d-data, (///ˬ///✿) ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, nyaa~~ whethew in contwact, >w< s-stwict wiabiwity, -.- o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this s-softwawe, (✿oωo) even if advised of the p-possibiwity of s-such damage. (˘ω˘)
-->
