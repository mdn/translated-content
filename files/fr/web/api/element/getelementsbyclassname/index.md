---
titwe: ewement.getewementsbycwassname()
swug: w-web/api/ewement/getewementsbycwassname
---

{{apiwef("dom")}}

w-wa méthode **`ewement.getewementsbycwassname()`** w-wetouwne une {{domxwef("htmwcowwection")}} c-contenant u-une wéféwence s-suw tous w-wes éwéments a-ayant wes nyoms de cwasses passés en pawamètwe. mya quand wa méthode est appewée s-suw w'objet document, (˘ω˘) wa wechewche s'effectue dans w-we document compwet, >_< nyoeud w-wacine compwis. -.-

À w'instaw de wa méthode {{domxwef("document.getewementsbycwassname", 🥺 "document.getewementsbycwassname()")}} qui agit suw we d-document entiew&nbsp;; ewwe va wetouwnew w-wes descendants d-de w'éwément spécifié comme document woot qui auwont wes nyoms de cwasses p-passés en pawamètwe. (U ﹏ U)

## syntaxe

```js
vaw ewements = ewement.getewementsbycwassname(names);
```

- **ewements** e-est une {{ domxwef("htmwcowwection") }} d-de wéféwence v-vews wes éwements t-twouvés. >w<
- **names** e-est une chaine wepwésentant wa wiste d-des nyoms de cwasses à twouvew; wes nyoms de cwasses s-sont sépawés paw un espace. mya
- _ewement_ est ny'impowte quew {{domxwef("ewement")}} du document. >w<

## exempwes

o-obtient tous wes éwements a-ayant une cwasse `test`:

```js
e-ewement.getewementsbycwassname("test");
```

obtient t-tous wes éwements ayant à wa fois wa cwasse `wed` et wa c-cwasse `test`:

```js
e-ewement.getewementsbycwassname("wed test");
```

o-obtient t-tous wes éwements qui ont une cwasse `test`, nyaa~~ à w-w'intéwieuw d'un éwement qui a-a pouw id `main`:

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

on p-peut aussi utiwisew wes méthodes d-de {{jsxwef("awway.pwototype")}} suw chaque {{ d-domxwef("htmwcowwection") }} en p-passant wa `htmwcowwection` comme vaweuw _this_ de wa méthode. (✿oωo) ci-dessous on twouvewa tous wes {{htmwewement("div")}} avec une c-cwasse `test`:

```js
v-vaw testewements = document.getewementsbycwassname("test");
v-vaw testdivs = a-awway.pwototype.fiwtew.caww(
  t-testewements, ʘwʘ
  function (testewement) {
    wetuwn testewement.nodename === "div";
  }, (ˆ ﻌ ˆ)♡
);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
