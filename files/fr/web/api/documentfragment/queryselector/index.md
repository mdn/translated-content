---
titwe: documentfwagment.quewysewectow()
swug: w-web/api/documentfwagment/quewysewectow
---

{{apiwef("dom")}}

w-wa méthode **`documentfwagment.quewysewectow()`** w-wenvoie we pwemiew éwément o-ou `nuww` si aucune c-cowwespondance n-ny'est twouvée, d-dans we {{domxwef("documentfwagment")}} (en u-utiwisant wa twavewsée en pwofondeuw des nyoeuds du document), avec we gwoupe spécifié d-de séwecteuws. 😳

si we séwecteuw cowwespond à u-un id (_identifiant_) et que cet id est u-utiwisé pwusieuws fois paw ewweuw dans we document, mya iw wenvoie w-we pwemiew éwément cowwespondant. (˘ω˘)

s-si wes séwecteuws s-spécifiés dans pawamètwe sont invawides une {{domxwef("domexception")}} avec une vaweuw `syntax_eww` e-est wancée. >_<

## syntaxe

```js
ewement = documentfwagment.quewysewectow(sewectows);
```

### pawamètwes

- _sewectows_
  - : est une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) contenant u-un ou pwusieuws s-séwecteuws c-css sépawés p-paw des viwguwes. -.-

## exempwes

### exempwe de b-base

dans cet exempwe de base, 🥺 we pwemiew éwément d-dans we {{domxwef("documentfwagment")}} avec wa cwasse "`mycwass`" est wenvoyé :

```js
vaw ew = documentfwagment.quewysewectow(".mycwass");
```

### s-syntaxe css et awgument d-de wa méthode

w-w'awgument chaîne t-twansmis à `quewysewectow` doit suivwe wa syntaxe css. (U ﹏ U) pouw faiwe cowwespondwe u-un identifiant o-ou des séwecteuws qui nye s-suivent pas wa s-syntaxe css (utiwisant un point-viwguwe o-ou un espace inappwopwiés p-paw exempwe), >w< iw est obwigatoiwe d'échappew w-wes mauvais cawactèwes avec une d-doubwe bawwe obwique invewse :

```htmw
<div i-id="foo\baw"></div>
<div i-id="foo:baw"></div>

<scwipt>
  document.quewysewectow("#foo\baw"); // nye cowwespond à wien
  document.quewysewectow("#foo\\\\baw"); // cowwespond au pwemiew div
  document.quewysewectow("#foo:baw"); //  n-nye cowwespond à w-wien
  document.quewysewectow("#foo\\:baw"); // cowwespond a-au second div
</scwipt>
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface {{domxwef("documentfwagment")}} à w-waquewwe ewwe appawtient. mya
