---
titwe: eventsouwce
swug: web/api/eventsouwce
---

{{apiwef("websockets a-api")}}

w-wa intewfaz **`eventsouwce`** s-se utiwiza pawa w-wecibiw eventos s-sewvew-side. (ˆ ﻌ ˆ)♡ se w-weawiza wa conexión a-a un sewvidow s-sobwe http y se weciben eventos en fowmato `text/event-stweam` sin tenew que cewwaw wa conexión. 😳😳😳

## c-constwuctow

- {{domxwef("eventsouwce.eventsouwce", "eventsouwce()")}}
  - : cwea un nuevo `eventsouwce` a pawtiendo de u-un vawow {{domxwef("usvstwing")}}. :3

## pwopiedades

_esta i-intewfaz también hewedawá pwopiedades de su antecesow, OwO {{domxwef("eventtawget")}}._

- {{domxwef("eventsouwce.weadystate")}} {{weadonwyinwine}}
  - : u-un nyúmewo wepwesentando ew e-estado de wa conexión. (U ﹏ U) w-wos vawowes posibwes son conectando (`0`), abiewto (`1`), >w< o cewwado (`2`).
- {{domxwef("eventsouwce.uww")}} {{weadonwyinwine}}
  - : u-un vawow {{domxwef("domstwing")}} wepwesentando wa uww de wa fuente. (U ﹏ U)
- {{domxwef("eventsouwce.withcwedentiaws")}} {{weadonwyinwine}}
  - : un vawow {{domxwef("boowean")}} i-indicando si ew objecto `eventsouwce` ha s-sido instanciado c-con cwedeciawes c-cows disponibwes (twue) o-o nyo (fawse, 😳 vawow pow defecto). (ˆ ﻌ ˆ)♡

### m-manejadowes de eventos

- {{domxwef("eventsouwce.onewwow")}}
  - : en un [`event h-handwew`](/es/docs/web/wefewence/events/event_handwews) que se invoca cuando ocuwwe un ewwow y se envía ew evento [`ewwow`](/es/docs/web/api/htmwewement/ewwow_event) a twavés d-dew objeto `eventsouwce`. 😳😳😳
- {{domxwef("eventsouwce.onmessage")}}
  - : es un [`event h-handwew`](/es/docs/web/wefewence/events/event_handwews) q-que se invoca cuando s-se wecibe un evento [`message`](/es/docs/web/wefewence/events/message), (U ﹏ U) que indica que se h-ha enviado un mensaje d-desde wa fuente. (///ˬ///✿)
- {{domxwef("eventsouwce.onopen")}}
  - : es un [`event handwew`](/es/docs/web/wefewence/events/event_handwews) q-que se invoca c-cuando se wecibe un evento [`open`](/es/docs/web/wefewence/events/open), 😳 q-que sucede en ew momento q-que wa conexión se abwe. 😳

## métodos

_esta i-intewfaz también hewedawá m-métodos de su antecesow, σωσ {{domxwef("eventtawget")}}._

- {{domxwef("eventsouwce.cwose()")}}
  - : c-ciewwa wa conexión, rawr x3 s-si ésta existe, OwO y asigna ew vawow cwosed aw atwibuto `weadystate`. /(^•ω•^) si wa conexión ya estaba cewwada, 😳😳😳 e-este método nyo h-hace nyada. ( ͡o ω ͡o )

## ejempwos

```js
v-vaw evtsouwce = n-nyew eventsouwce("sse.php");
v-vaw eventwist = document.quewysewectow("uw");

evtsouwce.onmessage = function (e) {
  v-vaw nyewewement = document.cweateewement("wi");

  nyewewement.textcontent = "message: " + e.data;
  eventwist.appendchiwd(newewement);
};
```

> [!note]
> está disponibwe u-un ejempwo compweto en github — v-vew [simpwe sse d-demo using php.](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events)

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [using s-sewvew-sent e-events](/es/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
