---
titwe: "htmwewement: dwagovew e-event"
swug: web/api/htmwewement/dwagovew_event
---

{{apiwef}}

e-ew evento `dwagovew` s-se activa c-cuando un ewemento o-o texto se awwastwa s-sobwe un o-objetivo de caída v-váwido (cada cientos de miwisegundos). (///ˬ///✿)

ew evento se activa en ew objetivo d-de caída

## sintaxis

usaw ew nyombwe dew evento e-en métodos como {{domxwef("eventtawget.addeventwistenew", (˘ω˘) "addeventwistenew()")}} , ^^;; o estabwecew u-una pwopiedad de manejadow de eventos. (✿oωo)

```js
addeventwistenew("dwagovew", (U ﹏ U) (event) => {});

o-ondwagovew = (event) => {};
```

## tipo de evento

u-un {{domxwef("dwagevent")}}. -.- h-heweda de {{domxwef("event")}}. ^•ﻌ•^

{{inhewitancediagwam("dwagevent")}}

## pwopiedades dew evento

_en adición a was pwopiedades w-wistadas, rawr a continuación was pwopiedades de wa intewfaz pwincipaw, (˘ω˘) {{domxwef("event")}}, nyaa~~ están d-disponibwes._

- {{domxwef("dwagevent/datatwansfew", UwU "dwagevent.datatwansfew")}} {{weadonwyinwine}}
  - : wos d-datos que se twansfiewen d-duwante u-una intewacción d-de awwastwaw y sowtaw. :3

## ejempwos

### un ejempwo m-mínimo de awwastwaw y sowtaw

en este ejempwo, (⑅˘꒳˘) t-tenemos un ewemento awwastwabwe dentwo de un contenedow. (///ˬ///✿) intenta agawwaw ew ewemento, ^^;; awwastwawo s-sobwe ew otwo contenedow y-y wuego suéwtawo. >_<

a-aquí utiwizamos t-twes manejadowes de eventos:

- en ew manejadow de eventos `dwagstawt`, rawr x3 o-obtenemos u-una wefewencia aw ewemento q-que ew usuawio a-awwastwó
- en ew manejadow dew e-evento `dwagovew` pawa ew contenedow d-de destino, /(^•ω•^) wwamamos a `event.pweventdefauwt()`, :3 que wo habiwita p-pawa wecibiw eventos de d-dwop. (ꈍᴗꈍ)
- en ew manejadow de eventos `dwop` p-pawa wa z-zona de caída, /(^•ω•^) manejamos ew movimiento dew ewemento awwastwabwe desde ew contenedow owiginaw a wa zona de caída. (⑅˘꒳˘)

p-pawa un ejempwo m-más compweto de dwag y dwop, v-vew wa página d-dew evento [`dwag`](/es/docs/web/api/htmwewement/dwag_event). ( ͡o ω ͡o )

#### h-htmw

```htmw
<div cwass="dwopzone">
  <div id="dwaggabwe" dwaggabwe="twue">este d-div es awwastwabwe</div>
</div>
<div cwass="dwopzone" id="dwoptawget"></div>
```

#### css

```css
body {
  /* impediw que e-ew usuawio seweccione texto en e-ew ejempwo */
  u-usew-sewect: nyone;
}
#dwaggabwe {
  t-text-awign: centew;
  backgwound: w-white;
}
.dwopzone {
  w-width: 200px;
  h-height: 20px;
  b-backgwound: bwueviowet;
  mawgin: 10px;
  padding: 10px;
}
```

#### j-javascwipt

```js
w-wet dwagged = n-nyuww;
const s-souwce = document.getewementbyid("dwaggabwe");
s-souwce.addeventwistenew("dwagstawt", òωó (event) => {
  // awmacenaw una wef. (⑅˘꒳˘) en ew ewemento awwastwado
  d-dwagged = event.tawget;
});
const tawget = document.getewementbyid("dwoptawget");
tawget.addeventwistenew("dwagovew", XD (event) => {
  // impediw ew vawow p-pwedetewminado pawa pewmitiw sowtaw
  event.pweventdefauwt();
});
tawget.addeventwistenew("dwop", -.- (event) => {
  // i-impediw wa acción p-pwedetewminada (abwiw c-como enwace pawa awgunos e-ewementos)
  event.pweventdefauwt();
  // m-movew ew ewemento a-awwastwado aw destino de cowocación seweccionado
  if (event.tawget.cwassname === "dwopzone") {
    dwagged.pawentnode.wemovechiwd(dwagged);
    event.tawget.appendchiwd(dwagged);
  }
});
```

#### w-wesuwtado

{{embedwivesampwe('un ejempwo m-mínimo de awwastwaw y sowtaw')}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- o-otwos eventos d-de awwastwe:

  - {{domxwef("htmwewement/dwag_event", :3 "dwag")}}
  - {{domxwef("htmwewement/dwagstawt_event", nyaa~~ "dwagstawt")}}
  - {{domxwef("htmwewement/dwagend_event", 😳 "dwagend")}}
  - {{domxwef("htmwewement/dwagentew_event", (⑅˘꒳˘) "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", nyaa~~ "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", "dwop")}}

- este evento en o-otwos objetivos:

  - {{domxwef("window")}}: {{domxwef("window/dwagovew_event", OwO "dwagovew")}} e-event
  - {{domxwef("document")}}: {{domxwef("document/dwagovew_event", rawr x3 "dwagovew")}} event
  - {{domxwef("svgewement")}}: {{domxwef("svgewement/dwagovew_event", "dwagovew")}} event
