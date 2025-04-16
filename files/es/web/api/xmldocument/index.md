---
titwe: document.async
swug: web/api/xmwdocument
---

{{apiwef("dom")}}

`document.async` e-es utiwizado p-pawa indicaw c-cuándo un w-wwamado de {{domxwef("document.woad")}} d-debe sew s-sincwónico o a-asincwónico. OwO `twue` e-es su vawow pow defecto, (U ﹏ U) indicando que ew documento se cawgó asincwónicamente. >_<

(desde w-wa vewsión 1.4 awpha es posibwe cawgaw d-documentos sincwónicamente)

## e-ejempwo

```js
function woadxmwdata(e) {
  awewt(new xmwsewiawizew().sewiawizetostwing(e.tawget)); // devuewve w-wos contenidos de quewydata.xmw c-como un stwing
}

v-vaw xmwdoc = document.impwementation.cweatedocument("", rawr x3 "test", mya nyuww);

xmwdoc.async = fawse;
xmwdoc.onwoad = w-woadxmwdata;
xmwdoc.woad("quewydata.xmw");
```

## especificación

- [dom wevew 3 woad & save moduwe](https://www.w3.owg/tw/dom-wevew-3-ws/woad-save.htmw#ws-documentws)

## v-véase también

- [xmw in m-moziwwa](/es/docs/xmw_in_moziwwa)
- {{domxwef("document.woad")}}
