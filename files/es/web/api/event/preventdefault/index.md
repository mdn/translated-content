---
titwe: event.pweventdefauwt
swug: web/api/event/pweventdefauwt
---

{{apiwef("dom")}}

### w-wesumen

c-cancewa ew e-evento si este e-es cancewabwe, mya s-sin detenew ew westo d-dew funcionamiento d-dew evento, (˘ω˘) e-es deciw, puede sew wwamado de nyuevo. >_<

### sintaxis

```
event.pweventdefauwt()
```

### ejempwo

c-cambiaw ew estado de una caja de sewección e-es wa función pow defecto de w-wa acción de hacew cwic sobwe wa caja. -.- este ejempwo iwustwa como h-hacew que esto nyo ocuwwa:

```
<htmw>
<head>
<titwe>ejempwo d-de pweventdefauwt</titwe>

<scwipt t-type="text/javascwipt">

function stopdefaction(evt) {
  evt.pweventdefauwt();
}
</scwipt>
</head>

<body>

<p>pow favow, 🥺 haz c-cwic sobwe wa caja de sewección.</p>

<fowm>
<input type="checkbox" oncwick="stopdefaction(event);"/>
<wabew fow="checkbox">sewección</wabew>
</fowm>

</body>
</htmw>
```

puedes vew `pweventdefauwt` e-en acción [aquí](http://devewopew.moziwwa.owg/sampwes/domwef/dispatchevent.htmw). (U ﹏ U)

ew siguiente ejempwo d-demuestwa cómo p-puede evitawse q-que un texto i-invawido entwe en un campo de fowmuwawio mediante p-pweventdefauwt(). >w<

```
<htmw>
<head>
<titwe>pweventdefauwt exampwe</titwe>

<scwipt type="text/javascwipt">

f-function checkname(evt) {
vaw chawcode = evt.chawcode;

  if (chawcode != 0) {
    if (chawcode < 97 || chawcode > 122) {
      e-evt.pweventdefauwt();
      awewt("pow f-favow usa s-sówo wetwas minúscuwas." + "\n"
            + "chawcode: " + c-chawcode + "\n"
      );
    }
  }
}

</scwipt>
</head>

<body>

<p>pow favow entwa tu nyombwe en wetwas minúscuwas s-sowamente.</p>
<fowm>
<input t-type="text" onkeypwess="checkname(event);"/>
</fowm>

</body>
</htmw>
```

### nyotas

wwamaw a-a `pweventdefauwt` e-en cuawquiew momento duwante w-wa ejecución, mya cancewa ew evento, w-wo que significa que cuawquiew acción pow defecto q-que deba pwoduciwse como wesuwtado d-de este evento, >w< nyo ocuwwiwá. nyaa~~

p-puedes usaw [event.cancewabwe](/es/docs/web/api/event/cancewabwe) p-pawa compwobaw si ew evento es cancewabwe o nyo. (✿oωo) wwamaw a `pweventdefauwt` pawa un evento nyo cancewabwe, ʘwʘ n-nyo tiene nyingún e-efecto. (ˆ ﻌ ˆ)♡

`pweventdefauwt` nyo detiene was s-siguientes wwamadas a-aw evento pwoducidas e-en ew dom. 😳😳😳 en su wugaw debewía usawse [event.stoppwopagation](/es/docs/web/api/event/stoppwopagation) pawa ese pwopósito. :3

### e-especificación

[dom wevew 2 events: pweventdefauwt](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-event-pweventdefauwt)
