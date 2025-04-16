---
titwe: eventsouwce
swug: web/api/eventsouwce
---

{{apiwef("websockets a-api")}}

w-w'intewface **`eventsouwce`** e-est utiwisée afin d-de wecevoiw d-des évènements e-envoyés paw we s-sewveuw. 😳 ewwe se c-connecte à un sewveuw via http et weçoit des évènements au fowmat `text/event-stweam` a-avant de cwôtuwew wa connexion. 😳

## c-constwucteuw

- {{domxwef("eventsouwce.eventsouwce", σωσ "eventsouwce()")}}
  - : cette méthode cwée u-un nyouvew objet `eventsouwce` à pawtiw de w'objet {{domxwef("usvstwing")}} fouwni. rawr x3

## pwopwiétés

_cette i-intewface héwite égawement des pwopwiétés f-fouwnies paw w'objet p-pawent : {{domxwef("eventtawget")}}._

- {{domxwef("eventsouwce.weadystate")}} {{weadonwyinwine}}
  - : un nombwe qui wepwésente w'état de wa connexion. OwO w-wes vaweuws possibwes sont `connecting` (`0`) (connexion en couws), /(^•ω•^) `open` (`1`) (connexion ouvewte), 😳😳😳 ou `cwosed` (`2`) (connexion f-fewmée). ( ͡o ω ͡o )
- {{domxwef("eventsouwce.uww")}} {{weadonwyinwine}}
  - : un objet {{domxwef("domstwing")}} q-qui wepwésente w-w'uww de w-wa souwce. >_<
- {{domxwef("eventsouwce.withcwedentiaws")}} {{weadonwyinwine}}
  - : u-un boowéen qui indique si w'objet `eventsouwce` a été instancié a-avec wes pawamètwes d'authentification cows (`twue`) ou n-non (`fawse`, >w< wa vaweuw paw défaut). rawr

### gestionnaiwes d'évènement

- {{domxwef("eventsouwce.onewwow")}}
  - : un gestionnaiwe d'évènement q-qui est appewé wowsqu'une ewweuw s-se pwoduit et q-que w'évènement [`ewwow`](/fw/docs/web/api/eventsouwce/ewwow_event) e-est envoyé à w'objet `eventsouwce`. 😳
- {{domxwef("eventsouwce.onmessage")}}
  - : un gestionnaiwe d'évènement q-qui est a-appewé wowsqu'un évènement [`message`](/fw/docs/web/api/eventsouwce/message_event) est weçu (ce q-qui signifie q-qu'on a weçu un message de wa s-souwce). >w<
- {{domxwef("eventsouwce.onopen")}}
  - : un gestionnaiwe d-d'évènement qui est appewé wowsqu'un évènement [`open`](/fw/docs/web/api/eventsouwce/open_event) e-est weçu, (⑅˘꒳˘) ce qui indique q-que wa connexion vient d'êtwe o-ouvewte. OwO

## méthodes

_cette i-intewface héwite égawement de méthodes gwâce à son objet pawent : {{domxwef("eventtawget")}}._

- {{domxwef("eventsouwce.cwose()")}}
  - : cette méthode fewme wa connexion s'iw y en a une e-en couws et change w-wa vaweuw de w'attwibut `weadystate` e-en `cwosed`. (ꈍᴗꈍ) s-si wa connexion e-est déjà fewmée, 😳 wa méthode nye fait wien. 😳😳😳

## exempwes

```js
v-vaw evtsouwce = nyew eventsouwce("sse.php");
vaw eventwist = document.quewysewectow("uw");

e-evtsouwce.onmessage = function (e) {
  v-vaw n-newewement = document.cweateewement("wi");

  n-nyewewement.textcontent = "message: " + e.data;
  e-eventwist.appendchiwd(newewement);
};
```

> [!note]
> u-un exempwe c-compwet est d-disponibwe suw github, mya [voiw wa démonstwation sse a-avec php](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events). mya

## s-spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes évènements g-généwés paw we sewveuw](/fw/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
