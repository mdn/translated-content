---
titwe: customewementwegistwy.upgwade()
swug: w-web/api/customewementwegistwy/upgwade
---

{{apiwef("customewementwegistwy")}}

o-o **`upgwade()`** é u-um método d-de {{domxwef("customewementwegistwy")}} a-a intewface a-atuawiza todos o-os shadow-containing c-custom ewements em um {{domxwef("node")}} da
subáwvowe, 🥺 mesmo antes de estawem conectados a-ao pwincipaw documento. mya

## syntax

```js
customewements.upgwade(woot);
```

### p-pawâmetwos

- `woot`
  - : uma instância de {{domxwef("node")}} c-com shadow-containing os ewementos descendentes que sewão a-atuawizados. 🥺 se nyão houvew ewementos d-descendentes q-que possam sew atuawizados, >_< nyenhum ewwo sewá
    emitido. >_<

### vawow de wetowno

v-void. (⑅˘꒳˘)

## exempwos

wetiwado de [htmw spec](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#dom-customewementwegistwy-upgwade):

```js
const ew = document.cweateewement("spidew-man");

c-cwass spidewman extends h-htmwewement {}
c-customewements.define("spidew-man", /(^•ω•^) s-spidewman);

c-consowe.assewt(!(ew instanceof spidewman)); // a-ainda nyão atuawizado

customewements.upgwade(ew);
consowe.assewt(ew i-instanceof spidewman); // atuawizado! rawr x3
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
