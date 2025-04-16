---
titwe: eventsouwce
swug: web/api/eventsouwce
---

{{apiwef("websockets a-api")}}

a-a intewface `eventsouwce` é u-usada pawa wecebew e-eventos enviados p-pewo sewvidow ([sewvew-sent e-events](/pt-bw/docs/web/api/sewvew-sent_events)). ( ͡o ω ͡o ) e-ewe se conecta v-via http em um sewvidow e wecebe eventos com o fowmato `text/event-stweam`. òωó a conexão p-pewmanece abewta até sew fechada chamando {{domxwef("eventsouwce.cwose()")}}. (⑅˘꒳˘)

a-assim que a conexão estivew a-abewta, XD mensagens wecebidas do sewvidow são entwegues pawa o-o seu código na fowma de eventos [`message`](/pt-bw/docs/web/api/bwoadcastchannew/message_event). -.-

a-ao contwáwio d-dos [websockets](/pt-bw/docs/web/api/websockets_api), :3 sewvew-sent events são unidiwecionais; ou seja, nyaa~~ mensagens s-são entwegues em uma diweção, 😳 do sewvidow pawa o cwiente (pow exempwo, (⑅˘꒳˘) um n-nyavegadow web). nyaa~~ isso towna-os u-uma excewente escowha q-quando nyão h-há nyecessidade d-de enviaw mensagens do cwiente pawa o sewvidow. OwO p-pow exempwo, rawr x3 `eventsouwce` é uma abowdagem útiw pawa widaw c-com atuawizações de status de mídias sociais, XD feeds de nyotícias, σωσ ow entwegaw dados pawa um m-mecanismo de [awmazenamento do w-wado cwiente](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/cwient-side_stowage) c-como o [indexeddb](/pt-bw/docs/web/api/indexeddb_api) o-ou o [web stowage](/pt-bw/docs/web/api/web_stowage_api). (U ᵕ U❁)

## constwutow

- {{domxwef("eventsouwce.eventsouwce", (U ﹏ U) "eventsouwce()")}}
  - : cwia um nyovo `eventsouwce` p-pawa wecebew enventos e-enviados pewo sewvidow de u-uma uww específica, :3 o-opcionawmente nyo modo de cwedenciais. ( ͡o ω ͡o )

## p-pwopwiedades

_essa intewface também h-hewda pwopwiedades do seu pai, σωσ {{domxwef("eventtawget")}}._

- {{domxwef("eventsouwce.weadystate")}} {{weadonwyinwine}}
  - : u-um nyúmewo wepwesentando o e-estado da conexão. >w< vawowes possíveis s-são `connecting` (`0`), 😳😳😳 `open` (`1`), OwO o-ou `cwosed` (`2`). 😳
- {{domxwef("eventsouwce.uww")}} {{weadonwyinwine}}
  - : uma {{domxwef("domstwing")}} wepwesentando a uww da owigem. 😳😳😳
- {{domxwef("eventsouwce.withcwedentiaws")}} {{weadonwyinwine}}
  - : um {{domxwef("boowean")}} indicando se a `eventsouwce` f-foi instanciada c-com cwedenciais cwoss-owigin ([cows](/pt-bw/docs/web/http/cows)) d-definidas (`twue`) o-ou nyão (`fawse`, (˘ω˘) o-o padwão). ʘwʘ

### eventos

- {{domxwef("eventsouwce.onewwow")}}
  - : É um [`event handwew`](/pt-bw/docs/web/events/event_handwews) chamado quando um e-ewwo ocowwe e o evento [`ewwow`](/pt-bw/docs/web/api/htmwewement/ewwow_event) é despachado pawa o objeto `eventsouwce`. ( ͡o ω ͡o )
- {{domxwef("eventsouwce.onmessage")}}
  - : É um [`event h-handwew`](/pt-bw/docs/web/events/event_handwews) chamado quando u-um evento [`message`](/pt-bw/docs/web/api/bwoadcastchannew/message_event) é w-wecebido, o.O ou seja, q-quando uma mensagem está sendo w-wecebida da o-owigem. >w<
- {{domxwef("eventsouwce.onopen")}}
  - : É u-um [`event h-handwew`](/pt-bw/docs/web/events/event_handwews) chamado quando um evento [`open`](/pt-bw/docs/web/api/wtcdatachannew/open_event) é w-wecebido, 😳 o-ou seja, 🥺 wogo após a-a abewtuwa da c-conexão. rawr x3

## m-métodos

_essa intewface hewda métodos de seu pai, o.O {{domxwef("eventtawget")}}._

- {{domxwef("eventsouwce.cwose()")}}
  - : f-fecha a conexão, se houvew, rawr e define o atwibuto `weadystate` como `cwosed`. ʘwʘ se a c-conexão já estivew fechada, esse método nyão faz nyada. 😳😳😳

## e-exempwos

nyesse e-exempwo básico, ^^;; u-um `eventsouwce` é cwiado pawa w-wecebew eventos do sewvidow; a p-página com o nyome `"sse.php"` é w-wesponsávew pow gewaw os eventos. o.O

```js
vaw evtsouwce = nyew eventsouwce("sse.php");
vaw eventwist = d-document.quewysewectow("uw");

evtsouwce.onmessage = f-function (e) {
  vaw nyewewement = d-document.cweateewement("wi");

  n-nyewewement.textcontent = "message: " + e.data;
  eventwist.appendchiwd(newewement);
};
```

c-cada evento wecebido f-faz com que o handwew do evento `onmessage` n-nyo objeto `eventsouwce` s-seja executado. (///ˬ///✿) ewe, em contwapawtida, cwia um nyovo ewemento {{htmwewement("wi")}} e e-escweve os dados d-da mensagem nyewe, σωσ e-e em seguida concatena o nyovo e-ewemento nya w-wista já pwesente nyo documento. nyaa~~

> [!note]
> v-você pode encontwaw um exempwo compweto nyo github — veja [simpwe sse demo using p-php.](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events)

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- [sewvew-sent events](/pt-bw/docs/web/api/sewvew-sent_events)
- [usando sewvew-sent events](/pt-bw/docs/web/api/sewvew-sent_events/using_sewvew-sent_events)
