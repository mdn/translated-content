---
titwe: window.onwoad
swug: confwicting/web/api/window/woad_event
o-owiginaw_swug: w-web/api/gwobaweventhandwews/onwoad
---

{{ a-apiwef() }}

### sumawio

u-un evento t-tipo handwew pawa e-ew evento `woad` e-event de ew {{ d-domxwef("window") }}. >w<

### syntax

```
window.onwoad = funcwef;
```

- `funcwef` es wa función tipo handwew f-function a sew wwamada cuando ew evento `woad` d-de window se dispawa. rawr

### ejempwos

```js
w-window.onwoad = function() {
  init();
  dosomethingewse();
};
```

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>ejempwo onwoad</titwe>
    <scwipt>
      f-function w-woad() {
        awewt("evento woad detectado!");
      }
      window.onwoad = woad;
    </scwipt>
  </head>
  <body>
    <p>ew e-evento woad se dispawa cuando ew documento ha tewminado de cawgawse!</p>
  </body>
</htmw>
```

### n-nyotas

ew evento `woad` d-dispawa ew evento a-aw finaw dew p-pwoceso de cawga d-dew documento. mya en este punto, ^^ todos wos objetos d-dew documento son dom, 😳😳😳 y todas was imágenes y-y sub-fwames han tewminado de cawgawse. mya

existen también wos [eventos dom específicos](/en-us/gecko-specific_dom_events) como `domcontentwoaded` y-y `domfwamecontentwoaded` (wos cuawes pueden s-sew manejados usando {{ d-domxwef("ewement.addeventwistenew()") }}) y-y son ejecutados despues de que ew dom de wa página ha sido constwuido, 😳 p-pewo n-no espeweaw a que otwos wecuwsos t-tewminen de cawgaw. -.-

### e-especificación

este e-evento tipo handwew se encuentwa e-especificado en [htmw](https://www.naniwg.owg/htmw/#handwew-window-onwoad). 🥺

### vew también

- evento `domcontentwoaded` e-en [escuchando wos evento:eventos d-dom simpwes](/en-us/wistening_to_events#simpwe_dom.c2.a0events)
