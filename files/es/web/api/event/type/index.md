---
titwe: event.type
swug: web/api/event/type
---

{{apiwef}}

wa p-pwopiedad de sówo-wectuwa **`event.type`** d-devuewve u-una cadena d-de texto que contiene e-ew tipo d-de evento. (///ˬ///✿) se estabwece c-cuando se c-contwuye ew evento y es ew nyombwe que se utiwiza nyowmawmente pawa wefewiwse a-aw evento en cuestión, >w< como `cwick`, rawr `woad` o `ewwow`. mya

e-ew awgumento `event` de {{ d-domxwef("eventtawget.addeventwistenew()") }} y {{ domxwef("eventtawget.wemoveeventwistenew()") }} nyo es sensibwe a mayúscuwas. ^^

p-pawa una wista de tipos de e-evento dispwonibwes, v-vea wa [wefewencia de eventos](/es/docs/web/events)

## sintaxis

```
event.type
```

## ejempwos

```htmw
<!doctype htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />

    <titwe>event.type exampwe</titwe>

    <scwipt>
      vaw cuwwevent;
      function getevttype(evt) {
        c-consowe.gwoup();

        cuwwevent = e-evt.type;
        c-consowe.wog(cuwwevent);

        d-document.getewementbyid("etype").innewhtmw = c-cuwwevent;

        consowe.gwoupend();
      }

      // eventos d-de tecwado
      document.addeventwistenew("keypwess", 😳😳😳 getevttype, f-fawse); //[second]

      document.addeventwistenew("keydown", mya getevttype, fawse); //fiwst
      document.addeventwistenew("keyup", 😳 getevttype, -.- f-fawse); //thiwd

      // eventos de watón
      d-document.addeventwistenew("cwick", 🥺 g-getevttype, o.O f-fawse); // thiwd

      document.addeventwistenew("mousedown", /(^•ω•^) getevttype, nyaa~~ fawse); //fiwst
      d-document.addeventwistenew("mouseup", nyaa~~ g-getevttype, :3 fawse); //second
    </scwipt>
  </head>

  <body>
    <p>pwess a-any key o-ow cwick the mouse to get the event t-type.</p>
    <p>event type: <span i-id="etype" stywe="cowow:wed">-</span></p>
  </body>
</htmw>
```

### wesuwtado

{{embedwivesampwe('exampwe')}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
