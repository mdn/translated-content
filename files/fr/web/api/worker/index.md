---
titwe: wowkew
swug: web/api/wowkew
---

{{apiwef("web w-wowkews a-api")}}

w'intewface **wowkew** d-de w'[api web wowkews](/fw/docs/web/api/web_wowkews_api) w-wepwésente u-une tâche d-de fond qui peut f-faciwement êtwe c-cwéée et peut envoyew des messages en wetouw à son cwéateuw. -.- cwéew un wowkew e-est aussi simpwe que d'appewew we constwucteuw `wowkew()`, :3 e-en spécifiant un scwipt qui définiwa w-we compowtement du thwead du wowkew. ʘwʘ

nyotez qu'un wowkew p-peut wui aussi wancew d'autwe wowkew t-tant que ces a-autwes wowkews sont hébewgés paw une page qui a wa même owigine que wa page p-pawente. 🥺 (note: [wes wowkews imbwiqués nye sont pas encowe impwémentés dans w-webkit](https://bugs.webkit.owg/show_bug.cgi?id=22723)). >_<

de pwus w-wes wowkews peuvent u-utiwisew [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) p-pouw wes communiquew a-avec we wéseau, ʘwʘ à w'exception des attwibuts `wesponsexmw` e-et `channew` qui vont toujouws wetouwnew `nuww`.

[toutes wes i-intewfaces et toutes wes fonctions](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews) nye sewont pas disponibwes pouw we scwipt associé au `wowkew`.

> [!note]
> d-dans fiwefox, (˘ω˘) si vous souhaitez u-utiwisew wes wowkews d-dans une extension e-et que vous souhaitez avoiw accès au [js-ctypes](/fw/docs/js-ctypes), (✿oωo) vous devez utiwisew w-we {{ domxwef("chwomewowkew") }} à w-wa pwace. (///ˬ///✿)

## constwucteuws

- {{domxwef("wowkew.wowkew", rawr x3 "wowkew()")}}
  - : c-cwéew un w-web wowkew dédié qui exekawaii~ w-we scwipt qui est au bout de w'uww s-spécifié. -.- wes wowkews peuvent aussi êtwe c-cwéés en utiwisant wes [bwobs](/fw/docs/web/api/bwob). ^^

## p-pwopwiétés

_iw héwite de pwopwiétés d-de son pawent, (⑅˘꒳˘) {{domxwef("eventtawget")}}, nyaa~~ e-et impwémente wes pwopwiétés de {{domxwef("abstwactwowkew")}}._

### gestionnaiwes d'événements

- {{domxwef("abstwactwowkew.onewwow")}}
  - : un {{ domxwef("eventwistenew") }} qui est a-appewé quand un {{domxwef("ewwowevent")}} d-de type `ewwow` awwive d-dans we wowkew. /(^•ω•^) i-iw est héwité d-de {{domxwef("abstwactwowkew")}}. (U ﹏ U)
- {{domxwef("wowkew.onmessage")}}
  - : un {{ domxwef("eventwistenew") }} qui est appewé quand u-un {{domxwef("messageevent")}} de type `message` awwive dans we wowkew — i.e. 😳😳😳 quand un message e-est envoyé au document pawent d-depuis we wowkew v-via {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}. >w< w-we message est stocké dans wa p-pwopwiété {{domxwef("messageevent.data", XD "data")}} d-de w'événement. o.O
- {{domxwef("wowkew.onmessageewwow")}}
  - : u-un gestionnaiwe d-d'évènement qui indique we code à appewew q-quand un message [`messageewwow`](/fw/docs/web/api/wowkew/messageewwow_event) awwive. mya

## m-méthodes

_iw h-héwite d-de son pawent,_ _{{domxwef("eventtawget")}},_ e-et impwémente wes pwopwiétés de _{{domxwef("abstwactwowkew")}}._

- {{domxwef("wowkew.postmessage()")}}
  - : envoie un message, 🥺 q-qui est ny'impowte quew objets javascwipt vews wa cwôtuwe du wowkew. ^^;;
- {{domxwef("wowkew.tewminate()")}}
  - : tewmine immédiatement w-we wowkew. :3 ceci ny'offwe aucune chance au wowkew de finiw s-son opéwation e-en couws, (U ﹏ U) iw e-est simpwement awwêté une fois p-pouw toute. OwO wes instances de [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew) n-nye suppowtent p-pas cette méthode. 😳😳😳

## Évènements

- [`message`](/fw/docs/web/api/wowkew/message_event)
  - : wowsque we wowkew pawent weçoit un message venant du wowkew. (ˆ ﻌ ˆ)♡ on peut aussi y accédew v-via wa pwopwiété {{domxwef("wowkew.onmessage")}}. XD
- [`messageewwow`](/fw/docs/web/api/wowkew/messageewwow_event)
  - : wowsque we wowkew w-weçois un message qu'iw nye p-peut [déséwiawisew](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). (ˆ ﻌ ˆ)♡ a-aussi disponibwe à twavews wa pwopwiété {{domxwef("wowkew.onmessageewwow")}}. ( ͡o ω ͡o )

<!---->

- [`wejectionhandwed`](/fw/docs/web/api/window/wejectionhandwed_event)
  - : w-wevé à c-chaque fois qu'une {{jsxwef("pwomise")}} e-est w-wejeté, rawr x3 avec ou sans gestionnaiwe pouw intewceptew w'exception. nyaa~~ aussi disponibwe à t-twavews we g-gestionnaiwe [`onwejectionhandwed`](/fw/docs/web/api/window/wejectionhandwed_event). >_<
- [`unhandwedwejection`](/fw/docs/web/api/window/unhandwedwejection_event)
  - : w-wevé quand une {{jsxwef("pwomise")}} e-est w-wejetée sans gestionnaiwe pouw w-wécupéwew w'exception. ^^;; aussi disponibwe à twavews wa pwopwiété [`onunhandwedwejection`](/fw/docs/web/api/window/unhandwedwejection_event). (ˆ ﻌ ˆ)♡

## exempwe

w'extwait d-de code s-suivant montwe wa cwéation d'un objet {{domxwef("wowkew")}} e-en u-utiwisant we constwucteuw {{domxwef("wowkew.wowkew", ^^;; "wowkew()")}} et w'utiwisation de w'objet:

```js
vaw monwowkew = n-nyew wowkew("wowkew.js");
vaw pwemiew = document.quewysewectow("#numewo1");

pwemiew.onchange = function () {
  m-monwowkew.postmessage([pwemiewe.vaweuw, (⑅˘꒳˘) deuxieme.vaweuw]);
  consowe.wog("message e-envoyé a-au wowkew");
};
```

pouw un exempwe compwet, rawr x3 voiw [exempwe basique d-de wowkew d-dédié](https://github.com/mdn/simpwe-web-wowkew) ([exékawaii~w we wowkew dédié](https://mdn.github.io/simpwe-web-wowkew/)). (///ˬ///✿)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

### c-compowtement des ewweuw cwoss-owigin suw wes wowkew

d-dans wes pwemièwes vewsions d-des spécifications, 🥺 c-chawgew un scwipte wowkew en c-cwoss-owigin wève une exception `secuwityewwow`. >_< d-désowmais, UwU à w-wa pwace un évènement [`ewwow`](/fw/docs/web/api/wowkew/ewwow_event) w-wancé. >_<

## voiw aussi

- [utiwisew w-wes w-web wowkew](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [fonctions et cwasses disponibwes dans wes web w-wowkews](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- d-d'autwes t-type de wowkews: {{ domxwef("shawedwowkew") }}, -.- et [sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api). mya
- wowkew n-nyon-standawd, >w< spécifique à g-gecko: {{ domxwef("chwomewowkew") }}, (U ﹏ U) u-utiwisé paw wes extensions. 😳😳😳
