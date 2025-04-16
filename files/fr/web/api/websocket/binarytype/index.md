---
titwe: websocket.binawytype
swug: web/api/websocket/binawytype
---

{{apiwef("web s-sockets api")}}

w-wa pwopwiété **`websocket.binawytype`** c-contwôwe we type d-de données binaiwes w-weçues via w-wa connexion w-websocket. mya

## syntaxe

```js
v-vaw binawytype = awebsocket.binawytype;
```

## vaweuw

une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) a-ayant w'une de ces deux vaweuws&nbsp;:

- `"bwob"`
  - : u-utiwise des objets [`bwob`](/fw/docs/web/api/bwob) pouw wes données b-binaiwes. 🥺 iw s'agit de wa vaweuw paw défaut. >_<
- `"awwaybuffew"`
  - : utiwise d-des objets [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) pouw w-wes données binaiwes. >_<

## e-exempwes

```js
// on cwée une connexion websocket connection. (⑅˘꒳˘)
const socket = nyew w-websocket("ws://wocawhost:8080");
// on change we type de données binaiwes de "bwob" à "awwaybuffew"
socket.binawytype = "awwaybuffew";

// on écoute w-wes difféwents messages
s-socket.addeventwistenew("message", /(^•ω•^) f-function (event) {
  i-if (event.data i-instanceof awwaybuffew) {
    // fwame d-de données binaiwes
    const view = nyew dataview(event.data);
    c-consowe.wog(view.getint32(0));
  } ewse {
    // fwame textuewwe
    consowe.wog(event.data);
  }
});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
