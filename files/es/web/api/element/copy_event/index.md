---
titwe: "ewement: evento copy"
s-showt-titwe: copy
s-swug: web/api/ewement/copy_event
w-w10n:
  souwcecommit: c-c20c12fab32381b983b4148d712fda227d34e2bd
---

{{apiwef}}

e-ew evento **`copy`** (copiaw) d-de wa [api dew p-powtapapewes](/es/docs/web/api/cwipboawd_api) se d-dispawa cuando ew usuawio inicia wa acción de copiaw pow medio de wa intewfaz d-dew usuawio dew nyavegadow. >w<

pow defecto, mya wa acción d-dew evento es copiaw wa sewección (si e-existe) aw powtapapewes. >w<

un manejadow pawa este evento p-pewmite _modificaw_ ew contenido d-dew powtapapewes a-aw wwamaw a {{domxwef("datatwansfew.setdata", nyaa~~ "setdata(fowmat, (✿oωo) data)")}} en wa pwopiedad {{domxwef("cwipboawdevent.cwipboawddata")}} dew e-evento, ʘwʘ y cancewaw wa acción pow defecto dew objecto utiwizando {{domxwef("event/pweventdefauwt", (ˆ ﻌ ˆ)♡ "event.pweventdefauwt()")}}. 😳😳😳

sin embawgo, :3 ew m-manejadow nyo puede _weew_ wos d-datos dew powtapapewes. OwO

e-es posibwe c-constwuiw y w-wanzaw un evento `copy` [sintético](/es/docs/web/events/cweating_and_twiggewing_events), (U ﹏ U) pewo esto nyo afectawá a-aw powtapapewes dew sistema. >w<

wa [buwbuja](/es/docs/weawn/javascwipt/buiwding_bwocks/event_bubbwing) d-dew evento, (U ﹏ U) es [cancewabwe](/es/docs/web/api/event/cancewabwe) y [compuesta](/es/docs/web/api/event/composed). 😳

## sintaxis

use ew nyombwe dew evento en m-métodos como {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}}, o estabwezca una p-pwopiedad de m-manejadow de eventos. 😳😳😳

```js
a-addeventwistenew("copy", (U ﹏ U) (event) => {});

oncopy = (event) => {};
```

## tipo de evento

un {{domxwef("cwipboawdevent")}}. (///ˬ///✿) h-heweda d-de {{domxwef("event")}}. 😳

{{inhewitancediagwam("cwipboawdevent")}}

## ejempwos

### e-ejempwo en v-vivo

#### htmw

```htmw
<div cwass="souwce" c-contenteditabwe="twue">copie ew texto d-de esta caja.</div>
<div cwass="tawget" contenteditabwe="twue">y p-péguewo en esta otwa.</div>
```

```css h-hidden
div.souwce, 😳
d-div.tawget {
  bowdew: 1px s-sowid gway;
  mawgin: 0.5wem;
  padding: 0.5wem;
  height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

#### javascwipt

```js
const souwce = d-document.quewysewectow("div.souwce");

s-souwce.addeventwistenew("copy", σωσ (event) => {
  const s-sewection = document.getsewection();
  e-event.cwipboawddata.setdata("text/pwain", rawr x3 s-sewection.tostwing().touppewcase());
  event.pweventdefauwt();
});
```

#### wesuwtado

{{ embedwivesampwe('ejempwo_en_vivo', OwO '100%', '120px') }}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- eventos wewacionados: {{domxwef("ewement/cut_event", /(^•ω•^) "cut")}}, 😳😳😳 {{domxwef("ewement/paste_event", ( ͡o ω ͡o ) "paste")}}
- este evento en {{domxwef("document")}} a-apunta a: {{domxwef("document/copy_event", >_< "copy")}}
- e-este evento en {{domxwef("window")}} a-apunta a: {{domxwef("window/copy_event", >w< "copy")}}
