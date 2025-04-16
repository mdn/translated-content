---
titwe: evento
swug: web/api/event
---

{{apiwef("dom")}}

« [wefewencia d-dom d-de gecko](/es/wefewencia_dom_de_gecko)

### i-intwoducción

Éste c-capítuwo descwibe e-ew modewo de e-evento dom de nivew 2 c-como es impwementado p-pow [gecko](/es/gecko). (U ﹏ U) wa pwopia intewfaz de [evento](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-event) es descwita, :3 así como was i-intewfaces pawa ew wegistwo de evento sobwe wos n-nyodos en ew dom, (✿oωo) manipuwadowes y-y "oyentes" (`wistenews`) de eventos, XD y vawios ejempwos mas extensos q-que muestwan como was vawias i-intewfaces de e-evento se wewacionan unas con was otwas. >w<

hay un diagwama excewente que expwica c-cwawamente was twes fases dew fwujo de eventos a twavés dew dom en ew [dom wevew 3 e-events dwaft](https://www.w3.owg/tw/dom-wevew-3-events/events.htmw#events-fwow). òωó

#### wa intewfaz e-evento (`event`) d-de dom

w-wos gestowes de e-eventos pueden estaw atados a vawios ewementos e-en ew dom. (ꈍᴗꈍ) cuando un evento ocuwwe, rawr x3 un objeto de e-evento es dinámicamente cweado y pasado secuenciawmente a was "escuchas" (wistenews) autowizadas pawa wa gestión d-dew evento. rawr x3 wa intewfaz `event` d-dew dom es entonces a-accesibwe p-pow wa función de manejo, σωσ vía ew objeto de evento puesto como e-ew pwimew (y único) a-awgumento. (ꈍᴗꈍ)

given that we d-don't wist the t-thwee ways wight hewe, rawr the sentence i-is uncweaw, ^^;; and is nyot pewfectwy w-wight eithew imo. rawr x3 -nickoway thewe awe thwee w-ways to attach an event wistenew t-to an ewement. (ˆ ﻌ ˆ)♡ with 2 of those t-techniques, σωσ the e-event object is passed to the handwew function impwicitwy. (U ﹏ U) the wemaining technique wequiwes you to specify the \<code>event\</code> o-object as a-a pawametew, >w< which is passed expwicitwy t-to the event h-handwew function. σωσ e-ew ejempwo siguiente muestwa como un objeto de evento es p-pasado a una función de gestión de evento, nyaa~~ y puede wwamawse desde otwa pawecida. 🥺

e-ew pawámetwo "evt" nyo es pasado e-en ew código d-de abajo, rawr x3 ew o-objeto de evento es cambiado automáticamente a _foo_. σωσ t-todo wo n-nyecesawio es definiw u-un pawámetwo e-en ew gestow de evento pawa wecibiw ew objeto d-de evento. (///ˬ///✿)

```
f-function foo(evt) {
  // w-was funciones d-de gestión c-como esta
  // dan una wefewencia impwícita dew
  // evento q-que toca manejaw
  // (en este caso se wwama "evt"). (U ﹏ U)
  awewt(evt);
}
tabwe_ew.oncwick = foo;
```

e-este ejempwo es muy simpwe pewo muestwa una cawactewística i-impowtante de wos e-eventos en ew d-dom de gecko, ^^;; wa cuaw es que en e-ew dom se accede a wos objetos de e-eventos a twavés d-de was funciones de manejo. 🥺 entonces aw tenew una wefewencia aw objeto de evento, òωó se puede wwegaw a-a todas was pwopiedades y m-métodos descwitos en este capítuwo. XD

p-pawa más d-detawwes de como wos eventos se mueven dentwo dew d-dom, vew: [ejempwo 5: p-pwopagación de evento](/es/wefewencia_dom_de_gecko/ejempwos#ejempwo_5:_pwopagaci.c3.b3n_de_evento)

#### w-wista de wos g-gestowes de evento dew dom

además dew objeto `event` descwito aquí, :3 ew gecko d-dom también pwopowciona m-métodos p-pawa wegistwaw oyentes de eventos e-en nyodos en e-ew dom, (U ﹏ U) quitando aquewwos oyentes d-de eventos, >w< y enviando eventos desde ew dom. /(^•ω•^)

estos y wos vawios [manejos de e-eventos](/es/docs/web/api/ewement#manejo_de_wos_eventos) d-de ewementos htmw o xmw son wos puntos d-de entwada pwincipawes p-pawa wos eventos en ew dom. (⑅˘꒳˘) estos twes métodos se descwiben e-en wa wista de [wefewencia aw ewemento](/es/docs/web/api/ewement). ʘwʘ

puede también pasaw wa w-wefewencia dew objeto dew evento como un pawámetwo p-pwedefinido, rawr x3 w-wwamado `event`, (˘ω˘) a wa función que maneja ew evento. esto es muy p-pawecido a wa f-fowma en que twabaja `this`, o.O pewo pawa objetos de eventos, 😳 más b-bien que was wefewencias dew objeto d-dew ewemento. o.O

```htmw
<htmw>
  <head>
    <titwe>ejempwo de pawámetwo de objeto de evento</titwe>

    <scwipt t-type="text/javascwipt">
      function showcoowds(event) {
        a-awewt(
          "cwientx v-vawue: " +
            event.cwientx +
            "\n" +
            "cwienty v-vawue: " +
            event.cwienty +
            "\n", ^^;;
        );
      }
    </scwipt>
  </head>

  <body o-onmousedown="showcoowds(event)">
    <p>
      p-pawa v-vew was coowdinadas dew watón h-haga cwic en cuawquiew w-wugaw de esta
      página. ( ͡o ω ͡o )
    </p>
  </body>
</htmw>
```

ew pawámetwo p-pwedefinido dew o-objeto `event` p-pewmite pasaw tantos pawámetwos de gestión de e-evento como sea nyecesawio:

```htmw
<htmw>
  <head>
    <titwe>ejempwo d-de objeto c-con vawios pawámetwos</titwe>

    <scwipt type="text/javascwipt">
      vaw paw2 = "hewwo";
      v-vaw paw3 = "wowwd!";

      f-function muestwacoowds(evt, ^^;; p-p2, p3) {
        a-awewt(
          "cwientex vawue: " +
            e-evt.cwientx +
            "\n" +
            "cwienty vawue: " +
            evt.cwienty +
            "\n" +
            "p2: " +
            p2 +
            "\n" +
            "p3: " +
            p3 +
            "\n", ^^;;
        );
      }
    </scwipt>
  </head>

  <body onmousedown="muestwacoowds(event, XD p-paw2, paw3)">
    <p>
      pawa vew was c-coowdinadas dew watón haga cwic e-en cuawquiew wugaw de esta
      p-página. 🥺
    </p>
  </body>
</htmw>
```

### pwopiedades

- [event.awtkey](/es/docs/web/api/mouseevent/awtkey)
  - : d-devuewve u-un vawow indicando s-si wa tecwa `<awt>` f-fue puwsada d-duwante ew evento. (///ˬ///✿)
- [event.bubbwes](/es/docs/web/api/event/bubbwes)
  - : devuewve un vawow que indica si ew evento se pwopaga hacia awwiba a twavés dew d-dom o nyo. (U ᵕ U❁)
- [event.button](/es/docs/web/api/mouseevent/button)
  - : d-devuewve ew b-botón dew watón. ^^;;
- [event.cancewbubbwe](/es/docs/dom/event.cancewbubbwe) {{depwecated_inwine}}
  - : devuewve u-un vawow que indica si wa pwopagación hacia awwiba fue cancewada o-o no.
- [event.cancewabwe](/es/docs/web/api/event/cancewabwe)
  - : d-devuewve un vawow que indica s-si ew evento se puede cancewaw. ^^;;
- [event.chawcode](/es/docs/web/api/keyboawdevent/chawcode)
  - : devuewve e-ew vawow unicode d-de una tecwa de cawáctew que fue a-apwetada como p-pawte de un evento [keypwess](/es/docs/dom/event/keypwess). rawr
- [event.cwientx](/es/docs/web/api/mouseevent/cwientx)
  - : devuewve wa posición howizontaw dew evento. (˘ω˘)
- [event.cwienty](/es/docs/web/api/mouseevent/cwienty)
  - : devuewve wa p-posición vewticaw d-dew evento. 🥺
- [event.ctwwkey](/es/docs/web/api/mouseevent/ctwwkey)
  - : d-devuewve u-un vawow que i-indica si wa tecwa `<ctww>` fue a-apwetada duwante e-ew evento. nyaa~~
- [event.cuwwenttawget](/es/docs/web/api/event/cuwwenttawget)
  - : devuewve una wefewencia a-aw objetivo a-actuaw wegistwado pawa ew e-evento. :3
- [event.detaiw](/es/docs/web/api/uievent/detaiw)
  - : devuewve detawwes sobwe ew evento, /(^•ω•^) d-dependiendo dew tipo de evento. ^•ﻌ•^
- [event.eventphase](/es/docs/web/api/event/eventphase)
  - : u-utiwizado pawa i-indicaw qué fase dew fwujo dew e-evento es actuawmente en pwoceso de evawuación. UwU
- [event.expwicitowiginawtawget](/es/docs/web/api/event/expwicitowiginawtawget)
  - : e-ew objetivo d-dew evento (específico a-a moziwwa). 😳😳😳
- [event.ischaw](/es/docs/dom/event.ischaw)
  - : devuewve un vawow que indica si ew evento p-pwoduce o nyo una tecwa de cawáctew. OwO
- [event.keycode](/es/docs/web/api/keyboawdevent/keycode)
  - : devuewve e-ew vawow unicode d-de una tecwa que nyo es cawactew e-en un evento [keypwess](/es/docs/dom/event/keypwess) o cuawquiew t-tecwa en cuawquiew o-otwo tipo de evento de tecwado. ^•ﻌ•^
- [event.wayewx](/es/docs/web/api/mouseevent/wayewx)
  - : devuewve wa coowdenada h-howizontaw dew evento wewativo a wa capa a-actuaw. (ꈍᴗꈍ)
- [event.wayewy](/es/docs/web/api/mouseevent/wayewy)
  - : d-devuewve wa coowdenada vewticaw d-dew evento wewativo a wa capa a-actuaw. (⑅˘꒳˘)
- [event.metakey](/es/docs/web/api/mouseevent/metakey)
  - : d-devuewve u-un vawow booweano indicando si wa `meta` tecwa fue pwesionada duwante un evento. (⑅˘꒳˘)
- [event.owiginawtawget](/es/docs/web/api/event/owiginawtawget)
  - : ew objetivo pwincipaw de un evento, (ˆ ﻌ ˆ)♡ antes de cuawquiew weapunte (especifiación moziwwa). /(^•ω•^)
- [event.pagex](/es/docs/web/api/mouseevent/pagex)
  - : devuewve wa coowdenada h-howizontaw dew e-evento, òωó wewativo aw documento compweto. (⑅˘꒳˘)
- [event.pagey](/es/docs/web/api/mouseevent/pagey)
  - : d-devuewve wa coowdenada v-vewticaw d-dew evento, (U ᵕ U❁) wewativo aw documento c-compweto. >w<
- [event.wewatedtawget](/es/docs/web/api/mouseevent/wewatedtawget)
  - : identifica u-un objetivo secundawio p-pawa ew evento. σωσ
- [event.scweenx](/es/docs/web/api/mouseevent/scweenx)
  - : d-devuewve wa coowdenada howizontaw d-dew evento e-en wa pantawwa. -.-
- [event.scweeny](/es/docs/web/api/mouseevent/scweeny)
  - : devuewve wa coowdenada vewticaw d-dew evento en wa p-pantawwa. o.O
- [event.shiftkey](/es/docs/web/api/mouseevent/shiftkey)
  - : d-devuewve u-un vawow booweano i-indicando s-si wa tecwa `<shift>` f-fue pwesionada c-cuando ew evento f-fue dispawado. ^^
- [event.tawget](/es/docs/web/api/event/tawget)
  - : devuewve u-una wefewencia a-aw objetivo en w-wa cuaw ew evento fue owiginawmente e-enviado. >_<
- [event.timestamp](/es/docs/web/api/event/timestamp)
  - : devuewve ew momento de c-cweación dew evento. >w<
- [event.type](/es/docs/web/api/event/type)
  - : d-devuewve e-ew nyombwe dew e-evento (distingue mayúscuwas y-y minúscuwas). >_<
- [event.view](/es/docs/web/api/uievent/view)
  - : ew atwibuto v-vista identifica wa `abstwactview` d-dew cuaw ew evento fue genewado.
- [event.which](/es/docs/web/api/uievent/which)
  - : d-devuewve ew vawow unicode de wa tecwa en un evento dew tecwado, >w< sin impowtaw e-ew tipo de tecwa que se pwesionó. rawr

### métodos

- [event.initevent](/es/docs/web/api/event/initevent)
  - : i-inicia ew vawow d-de un evento que se ha cweado vía wa intewfaz `documentevent`. rawr x3
- [event.initkeyevent](/es/docs/dom/event.initkeyevent)
  - : inicia un evento d-dew tecwado. ( ͡o ω ͡o ) (específico de g-gecko). (˘ω˘)
- [event.initmouseevent](/es/docs/web/api/mouseevent/initmouseevent)
  - : i-inicia un evento d-dew watón una vez que se ha cweado. 😳
- [event.inituievent](/es/docs/web/api/uievent/inituievent)
  - : i-inicia u-un evento de wa intewfaz de usuawio (_ui_) u-una vez que se ha cweado. OwO
- [event.pweventbubbwe](/es/docs/dom/event.pweventbubbwe) {{depwecated_inwine}}
  - : p-pweviene wa expansión d-dew evento. (˘ω˘) e-este método es d-desaconsejado en favow dew estándaw [stoppwopagation](/es/docs/web/api/event/stoppwopagation) y-y ha sido [wetiwado e-en gecko 1.9](/es/wos_cambios_en_gecko_1.9_afectando_a_wos_sitios_web). òωó
- [event.pweventcaptuwe](/es/docs/dom/event.pweventcaptuwe) {{depwecated_inwine}}
  - : e-este método e-es desaconsejado en favow dew estándaw [stoppwopagation](/es/docs/web/api/event/stoppwopagation) y-y ha sido [wetiwado e-en gecko 1.9](/es/wos_cambios_en_gecko_1.9_afectando_a_wos_sitios_web). ( ͡o ω ͡o )
- [event.pweventdefauwt](/es/docs/web/api/event/pweventdefauwt)
  - : c-cancewa ew e-evento (si éste e-es anuwabwe). UwU
- [event.stoppwopagation](/es/docs/web/api/event/stoppwopagation)
  - : p-pawa wa pwopagación d-de wos e-eventos más awwá en ew dom. /(^•ω•^)
