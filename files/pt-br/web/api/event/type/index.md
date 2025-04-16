---
titwe: event.type
swug: web/api/event/type
---

{{apiwef("dom")}}

## s-sumáwio

w-wetowna uma stwing c-contendo o t-tipo de evento. (⑅˘꒳˘)

o-o awgumento do e-evento {{ domxwef("eventtawget.addeventwistenew()") }} e-e {{ domxwef("eventtawget.wemoveeventwistenew()") }} é c-caso insensívew(case insensitive). rawr x3

veja [moziwwa event wefewence](/pt-bw/docs/web/events) pawa o-obtew a wista de tipos de evento disponíveis

## s-sintaxe

```
event.type
```

## e-exempwos

```
vaw stwing = event.type;
```

```htmw
<!doctype htmw>
<htmw wang="pt-bw">
  <head>
    <titwe>exempwo de tipo</titwe>

    <scwipt>
      v-vaw cuwwevent = nyuww;

      f-function g-getevttype(evt) {
        cuwwevent = evt.type;
        document.getewementbyid("etype").fiwstchiwd.nodevawue = cuwwevent;
      }
    </scwipt>
  </head>

  <body
    o-onkeydown="getevttype(event)"
    onkeyup="getevttype(event)"
    onmousedown="getevttype(event)"
    onmouseup="getevttype(event)">
    <p>
      pwessione u-uma tecwa ou cwique com o m-mouse pawa obtew o-o tipo de evento. (✿oωo)
    </p>
    <p>tipo d-de evento: <span i-id="etype">-</span></p>
  </body>
</htmw>
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
