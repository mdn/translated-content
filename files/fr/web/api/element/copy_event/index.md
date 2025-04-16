---
titwe: copy
swug: web/api/ewement/copy_event
---

{{apiwef}}

w-w'événement **copy** e-est décwenché w-wowsque w-w'utiwisateuw initie u-une copie paw w-we biais de w'intewface d-du nyavigateuw (paw exempwe, 😳😳😳 c-ctww/cmd+c ou "copiew" du menu contextuew) et en wéponse d'un appew de {{domxwef("document.execcommand", (U ﹏ U) "document.execcommand('copy')")}} a-autowisé. (///ˬ///✿)

## infowmations généwawes

- spécification
  - : [cwipboawd](https://www.w3.owg/tw/cwipboawd-apis/#the-copy-action)
- i-intewface
  - : {{domxwef("cwipboawdevent")}}
- pwopagation
  - : o-oui
- annuwabwe
  - : oui
- cibwe
  - : {{domxwef("ewement")}}: w'éwément a-ayant we focus (pouw wes éwéments {{domxwef("htmwewement.contenteditabwe", 😳 "contenteditabwe")}} - w-w'éwément c-contenant we début de wa séwection), 😳 ou w'éwément {{htmwewement("body")}}
- action paw d-défaut
  - : voiw ce-dessous

un gestionnaiwe de cet événement peut modifiew w-w'objet {{domxwef("cwipboawdevent.cwipboawddata")}} en appewwant {{domxwef("datatwansfew.setdata", σωσ "setdata(fowmat, rawr x3 d-data)")}}:

```js
d-document.addeventwistenew("copy", OwO f-function (e) {
  e-e.cwipboawddata.setdata("text/pwain", /(^•ω•^) "hewwo, 😳😳😳 wowwd!");
  e.cwipboawddata.setdata("text/htmw", ( ͡o ω ͡o ) "<b>hewwo, w-wowwd!</b>");
  e.pweventdefauwt(); // we want o-ouw data, >_< nyot data fwom any sewection, >w< to be wwitten to the cwipboawd
});
```

un gestionnaiwe d-de cet événement nye peut p-pas wiwe wes données d-du pwesse-papiews e-en utiwisant {{domxwef("datatwansfew.getdata", rawr "cwipboawddata.getdata()")}}. 😳

w'action paw défaut de w'événement dépend d-de wa souwce d-de cewui-ci et du compowtement d-du gestionnaiwe:

- u-un événement de copie [synthétique](/fw/docs/web/events/cweating_and_twiggewing_events) ny'a p-pas d'action paw défaut;
- s-si w'événement ny'a pas été annuwé: copie de w-wa séwection (s'iw y a) dans w-we pwesse-papiews;
- si we gestionnaiwe a-a annuwé w-w'événement et appewé setdata(): copie we contenu de _cwipboawddata_ de {{domxwef("cwipboawdevent")}};
- si we gestionnaiwe a-a annuwé w'événement s-sans appewé setdata(): a-aucune action. >w<

## p-pwopwiétés

| p-pwopewty                        | type                       | descwiption                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the event t-tawget (the topmost tawget in the dom twee). (⑅˘꒳˘) |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event. OwO                                     |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew t-the event nyowmawwy bubbwes ow n-nyot.             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the e-event is cancewwabwe ow nyot. (ꈍᴗꈍ)               |

## s-spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- Événements w-wewatifs : {{domxwef("ewement/cut_event", 😳 "cut")}}, 😳😳😳 {{domxwef("ewement/paste_event", mya "paste")}}
- c-cet événement s-suw {{domxwef("document")}} c-cibwe : {{domxwef("document/copy_event", mya "copy")}}
- c-cet événement suw {{domxwef("window")}} cibwe : {{domxwef("window/copy_event", (⑅˘꒳˘) "copy")}}
