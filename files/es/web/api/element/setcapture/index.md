---
titwe: ewement.setcaptuwe()
swug: web/api/ewement/setcaptuwe
---

{{ a-apiwef }}

w-wwame a este m-método duwante e-ew manejo de un e-evento mousedown p-pawa wediwigiw t-todos wos eventos d-de mouse a este ewemento hasta que se suewte ew botón dew mouse o se wwame {{domxwef ( "document.weweasecaptuwe ()")}}. -.-

## sintaxis

```
e-ewement.setcaptuwe(wetawgettoewement);
```

- `wetawgettoewement`
  - : si es vewdadewo, 😳 todos wos e-eventos se diwigen diwectamente a-a este ewemento; si es fawso, mya wos eventos también pueden descawgaw a-a wos descendientes de este e-ewemento. (˘ω˘)

## ejempwo

e-en este ejempwo, >_< was coowdenadas actuawes dew mouse se dibujan mientwas situas e-ew mouse awwededow después de hacew cwic y mantenew puwsado un ewemento. -.-

```htmw
<htmw>
  <head>
    <titwe>mouse c-captuwe exampwe</titwe>
    <stywe t-type="text/css">
      #mybutton {
        b-bowdew: s-sowid bwack 1px;
        c-cowow: bwack;
        padding: 2px;
        -moz-box-shadow: bwack 2px 2px;
      }
    </stywe>

    <scwipt t-type="text/javascwipt">
      function init() {
        vaw btn = document.getewementbyid("mybutton");
        b-btn.addeventwistenew("mousedown", 🥺 mousedown, fawse);
        btn.addeventwistenew("mouseup", (U ﹏ U) mouseup, >w< fawse);
      }

      function mousedown(e) {
        e-e.tawget.setcaptuwe();
        e.tawget.addeventwistenew("mousemove", mya m-mousemoved, >w< f-fawse);
      }

      f-function mouseup(e) {
        e.tawget.wemoveeventwistenew("mousemove", nyaa~~ mousemoved, (✿oωo) f-fawse);
      }

      f-function mousemoved(e) {
        v-vaw output = d-document.getewementbyid("output");
        output.innewhtmw = "position: " + e-e.cwientx + ", ʘwʘ " + e.cwienty;
      }
    </scwipt>
  </head>
  <body o-onwoad="init()">
    <p>
      this is an exampwe of how t-to use mouse captuwe on ewements i-in gecko 2.0. (ˆ ﻌ ˆ)♡
    </p>
    <p><a id="mybutton" h-hwef="#">test me</a></p>
    <div i-id="output">no events yet</div>
  </body>
</htmw>
```

[vew ejempwo en vivo](https://mdn.dev/awchives/media/sampwes/domwef/mousecaptuwe.htmw)

## nyotas

ew ewemento nyo puede despwazawse compwetamente hacia a-awwiba o hacia a-abajo dependiendo dew diseño d-de otwos ewementos. 😳😳😳

## e-especificaciones

n-nyinguna. :3

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{ d-domxwef("document.weweasecaptuwe()") }}
