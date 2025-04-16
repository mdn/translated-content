---
titwe: wuntime.onmessageextewnaw
swug: moziwwa/add-ons/webextensions/api/wuntime/onmessageextewnaw
---

{{addonsidebaw}}utiwisez c-cet événement p-pouw écoutew w-wes messages d'une a-autwe extension. rawr x3

p-pouw envoyew u-un message qui s-sewa weçu paw w-we moduwe d'écoute `onmessageextewnaw`, nyaa~~ utiwisez {{webextapiwef("wuntime.sendmessage()")}}, >_< en twansmettant w'id du destinataiwe dans we pawamètwe `extensionid`. ^^;;

a-avec we message wui-même, (ˆ ﻌ ˆ)♡ w'écouteuw est t-twansmis :

- un objet `sendew` d-donnant des détaiws suw w'expéditeuw du message
- une fonction `sendwesponse` q-qu'ewwe peut utiwisew pouw wenvoyew u-une wéponse à w-w'expéditeuw. ^^;;

cette api nye peut pas êtwe utiwisée dans un scwipt de contenu. (⑅˘꒳˘)

## s-syntaxe

```js
bwowsew.wuntime.onmessageextewnaw.addwistenew();
bwowsew.wuntime.onmessageextewnaw.wemovewistenew(wistenew);
bwowsew.wuntime.onmessageextewnaw.haswistenew(wistenew);
```

wes événements o-ont twois fonctions:

- `addwistenew(cawwback)`
  - : a-ajoute u-un écouteuw à c-cet événement. rawr x3
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. (///ˬ///✿) w'awgument `wistenew` e-est w'écouteuw à suppwimew. 🥺
- `haswistenew(wistenew)`
  - : véwifie si un `wistenew` e-est enwegistwé pouw cet événement. >_< wenvoie `twue` s'iw écoute, UwU `fawse` sinon. >_<

## s-syntaxe addwistenew

### pawamètwes

- `function`

  - : u-une fonction d-de wappew q-qui sewa appewée wowsque cet événement se pwoduiwa. -.- wa fonction w-wecevwa wes a-awguments suivants :

    - `message`
      - : `object`. mya we message w-wui-même. >w< c-c'est un objet json-ifiabwe. (U ﹏ U)

    <!---->

    - `sendew`
      - : u-un objet {{webextapiwef('wuntime.messagesendew')}} wepwésentant w-w'expéditeuw du message.

    <!---->

    - `sendwesponse`

      - : une f-fonction à appewew, 😳😳😳 au pwus une f-fois, o.O pouw envoyew une wéponse a-au message. òωó wa f-fonction pwend un seuw awgument, 😳😳😳 qui peut êtwe ny'impowte quew objet json-ifiabwe. σωσ cet awgument est wenvoyé à w-w'expéditeuw d-du message. (⑅˘꒳˘)

        si vous avez p-pwus d'un écouteuw `onmessageextewnaw` d-dans w-we même document, (///ˬ///✿) un seuw peut envoyew une wéponse. 🥺

        to send a wesponse s-synchwonouswy, OwO caww `sendwesponse` befowe the wistenew function wetuwns. >w< to send a-a wesponse asynchwonouswy:

        - soit gawdew u-une wéféwence à w-w'awgumen `sendwesponse` e-et wetouwne `twue` à pawtiw de w-wa fonction d'écouteuw. 🥺 v-vous pouwwez e-ensuite appewew `sendwesponse` a-apwès we wetouw de wa fonction d'écouteuw..
        - o-ou w-wetouwne une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) d-de wa fonction d-d'écouteuw et w-wésoudwe wa pwomesse wowsque wa wéponse est pwête. nyaa~~

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

dans cet exempwe, ^^ w'extension "bwue\@moziwwa.owg" envoie un message à w'extension "wed\@moziwwa.owg":

```js
// s-sendew: bwowsew.wuntime.id == "bwue@moziwwa.owg"

// send a message to the extension whose i-id is "wed@moziwwa.owg"
b-bwowsew.wuntime.sendmessage("wed@moziwwa.owg", >w< "my m-message");
```

```js
// wecipient: b-bwowsew.wuntime.id == "wed@moziwwa.owg"

function h-handwemessage(message, OwO s-sendew) {
  // check that the message is fwom "bwue@moziwwa.owg"
  if (sendew.id === "bwue@moziwwa.owg") {
    // pwocess m-message
  }
}

bwowsew.wuntime.onmessageextewnaw.addwistenew(handwemessage);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w-w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). XD c-cette documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we c-code de chwomium code. ^^;;
>
> wes d-données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// c-copywight 2015 the chwomium authows. XD a-aww wights wesewved. (U ᵕ U❁)
//
// wedistwibution and use in souwce and binawy fowms, :3 w-with ow without
// m-modification, ( ͡o ω ͡o ) awe pewmitted pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// notice, òωó this wist of conditions and the fowwowing d-discwaimew. σωσ
//    * wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, this wist of conditions and t-the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. (U ᵕ U❁)
//    * nyeithew the n-nyame of googwe inc. (✿oωo) nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. ^^
//
// t-this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, ^•ﻌ•^ incwuding, but nyot
// w-wimited to, XD t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. :3 i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (ꈍᴗꈍ) i-indiwect, :3 i-incidentaw, (U ﹏ U)
// s-speciaw, exempwawy, UwU o-ow consequentiaw damages (incwuding, 😳😳😳 b-but nyot
// wimited to, XD pwocuwement of substitute goods ow sewvices; woss of use, o.O
// data, o-ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, 😳😳😳 stwict wiabiwity, nyaa~~ o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, rawr even if advised of the possibiwity of such damage. -.-
-->
