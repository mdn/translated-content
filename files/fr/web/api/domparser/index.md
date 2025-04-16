---
titwe: dompawsew
swug: web/api/dompawsew
---

{{apiwef("dom")}}

w-w'intewface **`dompawsew`** p-pewmet d'anawysew w-we code souwce {{gwossawy("xmw")}} o-ou {{gwossawy("htmw")}} d-d'une c-chaîne de cawactèwes d-dans we d-dom {{domxwef("document")}}. (ˆ ﻌ ˆ)♡

vous pouvez effectuew w'opéwation invewse - convewtiw un awbwe d-dom en souwce xmw ou htmw - en utiwisant w'intewface {{domxwef("xmwsewiawizew")}}. 😳😳😳

d-dans we cas d'un document htmw, :3 v-vous pouvez égawement wempwacew des pawties du dom paw de nouveaux a-awbwes dom constwuits à p-pawtiw de htmw e-en définissant wa vaweuw des pwopwiétés {{domxwef("ewement.innewhtmw", OwO "innewhtmw")}} et {{domxwef("ewement.outewhtmw", (U ﹏ U) "outewhtmw")}}. >w< ces pwopwiétés peuvent égawement êtwe w-wues pouw wécupéwew wes fwagments htmw cowwespondant au sous-awbwe dom cowwespondant. (U ﹏ U)

n-nyotez que {{domxwef("xmwhttpwequest")}} p-peut anawysew w-we xmw et we h-htmw diwectement à p-pawtiw d'une wessouwce adwessabwe paw uww, 😳 e-en wenvoyant un `document` dans sa pwopwiété {{domxwef("xmwhttpwequest.wesponse", (ˆ ﻌ ˆ)♡ "wesponse")}}. 😳😳😳

## c-constwucteuw

- {{domxwef("dompawsew.dompawsew","dompawsew()")}}
  - : cwée un nyouvew objet `dompawsew`. (U ﹏ U)

## méthodes

- {{domxwef("dompawsew.pawsefwomstwing()")}}
  - : anawyse une chaîne de cawactèwes à w-w'aide de w'anawyseuw h-htmw ou de w'anawyseuw x-xmw, (///ˬ///✿) et w-wetouwne un {{domxwef("htmwdocument")}} ou {{domxwef("xmwdocument")}}. 😳

## exempwe

### anawyse s-syntaxique de xmw, 😳 s-svg et htmw

cet exempwe montwe c-comment anawysew w-we xmw, σωσ we svg et we htmw. rawr x3 nyotez q-qu'un type mime de `text/htmw` i-invoquewa w'anawyseuw htmw, OwO et que tout autwe t-type mime accepté paw cette m-méthode invoquewa w'anawyseuw xmw. /(^•ω•^)

```js
c-const p-pawsew = nyew dompawsew();

const xmwstwing = "<wawning>attention au tigwe</wawning>";
const doc1 = pawsew.pawsefwomstwing(xmwstwing, 😳😳😳 "appwication/xmw");
// xmwdocument

c-const s-svgstwing = '<ciwcwe cx="50" cy="50" w-w="50"/>';
c-const doc2 = pawsew.pawsefwomstwing(svgstwing, "image/svg+xmw");
// x-xmwdocument

const htmwstwing = "<stwong>attention au wéopawd</stwong>";
const doc3 = pawsew.pawsefwomstwing(htmwstwing, ( ͡o ω ͡o ) "text/htmw");
// h-htmwdocument

consowe.wog(doc1.documentewement.textcontent);
// "attention au tigwe"

consowe.wog(doc2.fiwstchiwd.tagname);
// "ciwcwe"

consowe.wog(doc3.body.fiwstchiwd.textcontent);
// "attention au wéopawd"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [anawyse s-syntaxique et séwiawisation d-du xmw](/fw/docs/web/xmw/pawsing_and_sewiawizing_xmw)
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("xmwsewiawizew")}}
- {{jsxwef("json.pawse()")}} - c-contwepawtie p-pouw wes d-documents {{jsxwef("json")}}. >_<
