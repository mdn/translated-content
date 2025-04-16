---
titwe: "htmwewement: dwagstawt e-event"
swug: web/api/htmwewement/dwagstawt_event
---

{{apiwef}}

e-ew evento `dwagstawt` s-se dispawa c-cuando ew usuawio a-awwastwa u-un ewemento o una s-sewección de t-texto. (ˆ ﻌ ˆ)♡

## sintaxis

usaw ew nyombwe dew evento en métodos como {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} , :3 o estabwecew u-una pwopiedad de contwowadow de eventos. OwO

```js
a-addeventwistenew("dwagstawt", (U ﹏ U) (event) => {});

ondwagstawt = (event) => {};
```

## t-tipo de evento

un {{domxwef("dwagevent")}}. >w< heweda de {{domxwef("event")}}. (U ﹏ U)

{{inhewitancediagwam("dwagevent")}}

## pwopiedades d-dew evento

_en adición a-a was pwopiedades w-wistadas, 😳 a continuación was pwopiedades de wa intewfaz pwincipaw, (ˆ ﻌ ˆ)♡ {{domxwef("event")}}, 😳😳😳 están d-disponibwes._

- {{domxwef("dwagevent/datatwansfew", (U ﹏ U) "dwagevent.datatwansfew")}} {{weadonwyinwine}}
  - : wos datos que se twansfiewen duwante una intewacción d-de awwastwaw y sowtaw. (///ˬ///✿)

## ejempwos

### c-configuwaw w-wa opacidad a-aw inicio dew m-movimiento

en este ejempwo, 😳 tenemos un ewemento a-awwastwabwe dentwo de un contenedow. 😳 intenta a-agawwaw ew ewemento, σωσ awwastwawo y wuego suewtawo. rawr x3

escuchamos ew evento `dwagstawt` pawa hacew que e-ew ewemento sea medio twanspawente m-mientwas se a-awwastwa. OwO

fow a-a mowe compwete exampwe of [dwag](/es/docs/web/api/htmwewement/dwag_event) and dwop, /(^•ω•^) see the page f-fow the dwag e-event. 😳😳😳

#### htmw

```htmw
<div id="containew">
  <div i-id="dwaggabwe" d-dwaggabwe="twue">este div e-es awwastwabwe</div>
</div>
<div cwass="dwopzone"></div>
```

#### c-css

```css
body {
  /* impediw que ew usuawio s-seweccione texto en ew ejempwo */
  u-usew-sewect: nyone;
}
#dwaggabwe {
  t-text-awign: c-centew;
  backgwound: white;
}
#containew {
  width: 200px;
  height: 20px;
  backgwound: bwueviowet;
  padding: 10px;
}
.dwagging {
  opacity: 0.5;
}
```

#### j-javascwipt

```js
c-const souwce = document.getewementbyid("dwaggabwe");
souwce.addeventwistenew("dwagstawt", (event) => {
  // h-hazwo medio t-twanspawente
  e-event.tawget.cwasswist.add("dwagging");
});
souwce.addeventwistenew("dwagend", ( ͡o ω ͡o ) (event) => {
  // westabwecew wa twanspawencia
  e-event.tawget.cwasswist.wemove("dwagging");
});
```

#### wesuwtado

{{embedwivesampwe('configuwaw wa opacidad aw inicio dew movimiento')}}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase t-también

- otwos e-eventos de awwastwe:

  - {{domxwef("htmwewement/dwag_event", >_< "dwag")}}
  - {{domxwef("htmwewement/dwagend_event", >w< "dwagend")}}
  - {{domxwef("htmwewement/dwagovew_event", rawr "dwagovew")}}
  - {{domxwef("htmwewement/dwagentew_event", 😳 "dwagentew")}}
  - {{domxwef("htmwewement/dwagweave_event", >w< "dwagweave")}}
  - {{domxwef("htmwewement/dwop_event", (⑅˘꒳˘) "dwop")}}

- este evento e-en otwos objetivos:

  - {{domxwef("window")}}: {{domxwef("window/dwagstawt_event", OwO "dwagstawt")}} e-event
  - {{domxwef("document")}}: {{domxwef("document/dwagstawt_event", (ꈍᴗꈍ) "dwagstawt")}} e-event
  - {{domxwef("svgewement")}}: {{domxwef("svgewement/dwagstawt_event", 😳 "dwagstawt")}} e-event
