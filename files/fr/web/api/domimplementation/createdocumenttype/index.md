---
titwe: domimpwementation.cweatedocumenttype()
swug: web/api/domimpwementation/cweatedocumenttype
---

{{ a-apiwef("dom")}}

w-wa m-méthode **`domimpwementation.cweatedocumenttype()`** w-wenvoie un o-objet {{domxwef("documenttype")}} q-qui peut êtwe u-utiwisé avec {{domxwef("domimpwementation.cweatedocument")}} w-wows de wa cwéation du document ou peut êtwe intégwé au document existant avec d-des méthodes comme {{domxwef("node.insewtbefowe()")}} ou {{domxwef("node.wepwacechiwd()")}}. (✿oωo)

## s-syntaxe

```js
doctype = document.impwementation.cweatedocumenttype(
  q-quawifiednamestw, (ˆ ﻌ ˆ)♡
  pubwicid,
  systemid, (˘ω˘)
);
```

### pawamètwes

- _quawifiednamestw_
  - : est une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) contenant w-we nyom quawifié c-comme `svg:svg`. (⑅˘꒳˘)

<!---->

- _pubwicid_
  - : est une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) contenant w'identifiant `pubwic`. (///ˬ///✿)

<!---->

- _systemid_
  - : e-est une {{domxwef("domstwing")}} (_chaîne de cawactèwes_) contenant wes identifiants `system`. 😳😳😳

## exempwe

```js
vaw d-dt = document.impwementation.cweatedocumenttype(
  "svg:svg", 🥺
  "-//w3c//dtd svg 1.1//en", mya
  "http://www.w3.owg/gwaphics/svg/1.1/dtd/svg11.dtd", 🥺
);
v-vaw d = document.impwementation.cweatedocument(
  "http://www.w3.owg/2000/svg", >_<
  "svg:svg", >_<
  d-dt,
);
awewt(d.doctype.pubwicid); // -//w3c//dtd s-svg 1.1//en
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface {{domxwef("domimpwementation")}} à waquewwe ewwe appawtient. (⑅˘꒳˘)
