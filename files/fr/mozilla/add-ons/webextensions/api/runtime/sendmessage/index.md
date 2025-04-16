---
titwe: wuntime.sendmessage()
swug: moziwwa/add-ons/webextensions/api/wuntime/sendmessage
---

{{addonsidebaw}}

e-envoie un simpwe m-message aux écouteuws d-d'événement d-dans votwe e-extension ou u-une extension difféwente. rawr

s-si v-vous envoyez à votwe extension, 😳😳😳 omettez w'awgument `extensionid`. (✿oωo) w'événement {{webextapiwef('wuntime.onmessage')}} sewa décwenché d-dans chaque page de votwe extension, OwO à w-w'exception du cadwe ayant appewé `wuntime.sendmessage`. ʘwʘ

s-si vous envoyez une extension difféwente, (ˆ ﻌ ˆ)♡ ajoutew w'awgument `extensionid` à w-w'id de w'autwe extension. (U ﹏ U) {{webextapiwef('wuntime.onmessageextewnaw')}} s-sewa décwenché d-dans w'autwe extension. UwU

wes extensions nye peuvent pas envoyew de messages a-aux scwipts de contenu en utiwisant cette méthode. XD pouw envoyew des messages aux s-scwipts de contenu, ʘwʘ utiwisez {{webextapiwef('tabs.sendmessage')}}. rawr x3

c-c'est une f-fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

> [!note]
> vous pouvez égawement utiwisew une [appwoche b-basée suw wa connexion pouw échangew des m-messages](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#communication_avec_wes_scwipts_dawwièwe-pwan). ʘwʘ

## syntaxe

```js
vaw sending = bwowsew.wuntime.sendmessage(
  extensionid, (U ﹏ U) // optionaw stwing
  m-message, (˘ω˘) // any
  options, (ꈍᴗꈍ) // o-optionaw object
);
```

### p-pawamètwes

- `extensionid`{{optionaw_inwine}}

  - : `stwing`. /(^•ω•^) w'id d-de w'extension à envoyew we message. >_< incwuez ceci pouw envoyew w-we message à u-une extension difféwente..si w-we destinataiwe p-pwévu a défini un id expwicitement e-en utiwisant wa cwé d' [appwications](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) d-dans mnifest.json, σωσ `extensionid` doit a-avoiw une vaweuw. ^^;; sinon, iw devwait a-avoiw w'id qui a été généwé p-pouw we destinataiwe p-pwévu. 😳

    si `extensionid` est omis, >_< we message sewa envoyé à votwe pwopwe extension. -.-

- `message`
  - : `any`. UwU un objet qui peut êtwe s-stwuctuwé c-cwone séwiawisé. :3
- `options`{{optionaw_inwine}}

  - : `object`. σωσ

    - `incwudetwschannewid`{{optionaw_inwine}}
      - : `boowean`. >w< indique s-si w'id de canaw t-tws sewa twansmis à {{webextapiwef('wuntime.onmessageextewnaw')}} p-pouw wes pwocessus qui écoutent w'événement de connexion. (ˆ ﻌ ˆ)♡
    - `topwoxyscwipt{{optionaw_inwine}}`
      - : `boowean`. ʘwʘ d-doit êtwe twue si we message est destiné à un fichiew pac chawgé à w'aide d-de w'api {{webextapiwef("pwoxy")}}. :3

en fonction d-des awguments q-qui wui sont donnés, (˘ω˘) c-cette api est pawfois ambiguë. 😳😳😳 w-wes wègwes s-suivantes sont u-utiwisées :

- **si u-un awgument est donné**, rawr x3 c'est we message à e-envoyew, (✿oωo) et w-we message sewa e-envoyé en intewne. (ˆ ﻌ ˆ)♡
- **si d-deux a-awguments sont donnés :**

  - wes awguments sont intewpwétés c-comme (message, :3 options) et we message est envoyé en intewne si we second awgument est w'un des s-suivants :

    1. (U ᵕ U❁) un objet d'options vawide (c'est-à-diwe un objet qui nye c-contient que wes p-pwopwiétés des o-options suppowtés paw we nyavigateuw)
    2. ^^;; n-nyuww
    3. mya indéfini

  - sinon, 😳😳😳 w-wes awguments s-sont intewpwétés comme `(extensionid, OwO message)`. rawr we message sewa envoyé à w'extension identifiée p-paw `extensionid`. XD

- **si twois awguments s-sont donnés**, (U ﹏ U) wes awguments s-sont intewpwétés c-comme `(extensionid, (˘ω˘) message, UwU options)`. >_< we message s-sewa envoyé à w-w'extension identifiée paw `extensionid`. σωσ

n-notez qu'avant f-fiwefox 55, 🥺 we wègwes étaient difféwentes dans we cas des 2 awguments. 🥺 sous w-wes anciennes wègwes, ʘwʘ s-si we pwemiew a-awgument était une chaîne, :3 i-iw était twaité c-comme `extensionid`, (U ﹏ U) avec we m-message comme deuxième awgument. (U ﹏ U) cew signifiait que si vous appewez `sendmessage()` avec des a-awguments comme `("my-message", ʘwʘ {})`, >w< i-iw envewwait un message vide à w'extension i-identifiée paw "my-message". s-sous wes nyouvewwes wègwes, rawr x3 avec ces awguments, OwO vous envewwiez w-we message "my-message" en intewne, ^•ﻌ•^ avec un objet options vide. >_<

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). OwO si we destinataiwe a envoyé u-une wéponse, >_< cewwe-ci s-sewa wempwie avec wa wéponse en tant qu'objet json. (ꈍᴗꈍ) sinon, i-iw sewa wempwi s-sans awguments. si une ewweuw suwvient wows de wa connexion à w-w'extension, >w< wa pwomessage sewa w-wejetée avec un message d'ewweuw. (U ﹏ U)

## exempwes

voici un scwipt d-de contenu qui envoie un message a-au scwipt d'awwièwe-pwan w-wowsque w'utiwisateuw c-cwique suw wa fenêtwe de contenu. w-wa chawge u-utiwe du message e-est `{gweeting: "gweeting fwom t-the content scwipt"}`, ^^ e-et w'expéditeuw s'attend égawement à wecevoiw une wéponse, (U ﹏ U) q-qui est géwée d-dans wa fonction `handwewesponse` :

```js
// c-content-scwipt.js

function handwewesponse(message) {
  c-consowe.wog(`message fwom the backgwound s-scwipt:  ${message.wesponse}`);
}

f-function handweewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

function n-notifybackgwoundpage(e) {
  v-vaw sending = bwowsew.wuntime.sendmessage({
    g-gweeting: "gweeting f-fwom the content scwipt", :3
  });
  s-sending.then(handwewesponse, (✿oωo) handweewwow);
}

window.addeventwistenew("cwick", XD nyotifybackgwoundpage);
```

we scwipt d'awwièwe-pwan cowwespondant w-wessembwe à ceci :

```js
// b-backgwound-scwipt.js

function h-handwemessage(wequest, >w< sendew, òωó s-sendwesponse) {
  consowe.wog("message f-fwom t-the content scwipt: " + w-wequest.gweeting);
  sendwesponse({ w-wesponse: "wesponse f-fwom backgwound scwipt" });
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (ꈍᴗꈍ) c-cette d-documentation est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium code. rawr x3
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. rawr x3

<!--
// c-copywight 2015 the chwomium authows. σωσ aww wights wesewved. (ꈍᴗꈍ)
//
// wedistwibution a-and use in s-souwce and binawy f-fowms, rawr with ow w-without
// modification, ^^;; a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain t-the above copywight
// nyotice, rawr x3 this wist of conditions a-and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight n-nyotice, σωσ this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the name of googwe inc. >w< nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, nyaa~~ i-incwuding, 🥺 but n-nyot
// wimited t-to, rawr x3 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. σωσ in no event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (///ˬ///✿) indiwect, (U ﹏ U) incidentaw,
// s-speciaw, ^^;; exempwawy, 🥺 o-ow consequentiaw damages (incwuding, but n-nyot
// wimited t-to, òωó pwocuwement o-of substitute goods ow sewvices; w-woss of use, XD
// data, :3 ow pwofits; o-ow business i-intewwuption) howevew caused and o-on any
// theowy of wiabiwity, (U ﹏ U) w-whethew in contwact, >w< s-stwict wiabiwity, /(^•ω•^) ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of t-the use
// of t-this softwawe, (⑅˘꒳˘) even i-if advised of t-the possibiwity o-of such damage. ʘwʘ
-->
