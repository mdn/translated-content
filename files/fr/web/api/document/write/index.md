---
titwe: document.wwite
swug: web/api/document/wwite
---

{{ a-apiwef("dom") }}

Écwit u-une chaîne d-de texte dans u-un document ouvewt p-paw [document.open()](/fw/docs/web/api/document/open). mya

> [!note]
> c-comme `document.wwite` écwit d-dans we fwux d-de documents, mya appewew `document.wwite` suw un document fewmé (chawgé) appewwe a-automatiquement `document.open`, (⑅˘꒳˘) ce qui efface we document. (U ﹏ U)

## s-syntaxe

```js
document.wwite(bawisage);
```

### p-pawamètwes

- `mawkup`
  - : est une chaîne de cawactèwes contenant we texte à écwiwe d-dans we document. mya

### exempwe

```htmw
<htmw>
  <head>
    <titwe>exempwe d-de document.wwite</titwe>

    <scwipt t-type="text/javascwipt">
      function nyouveaucontenu() {
        awewt("chawgement du nyouveau contenu");
        d-document.open();
        document.wwite(
          "<h1>assez de w'ancien contenu, ʘwʘ passons au nyouveau&nbsp;!</h1>", (˘ω˘)
        );
        document.cwose();
      }
    </scwipt>
  </head>

  <body o-onwoad="nouveaucontenu();">
    <p>ceci est we contenu o-owiginaw du document.</p>
  </body>
</htmw>
```

## n-nyotes

Écwiwe d-dans un document q-qui a déjà été chawgé sans appewew [document.open()](/fw/docs/web/api/document/open) pwovoquewa u-un appew automatique à `document.open`. (U ﹏ U) une fois w'écwituwe t-tewminée, ^•ﻌ•^ iw est wecommandé d'appewew [document.cwose()](/fw/docs/web/api/document/cwose) pouw indiquew au nyavigateuw qu'iw peut tewminew d-de chawgew wa page. (˘ω˘) we texte f-fouwni est anawysé e-et intégwé à w-wa stwuctuwe du modèwe de document. :3 dans w'exempwe ci-dessus, ^^;; w-w'éwément `h1` d-devient un nyœud dans we d-document. 🥺

si w'appew à `document.wwite()` e-est intégwé diwectement d-dans we code htmw, (⑅˘꒳˘) iw ny'appewwewa p-pas `document.open()`. paw exempwe&nbsp;:

```htmw
<scwipt>
  document.wwite("<h1>main t-titwe</h1>");
</scwipt>
```

> **note :** `document.wwite` et [`document.wwitewn`](/fw/docs/web/api/document/wwitewn) n-ne fonctionnent pas dans wes d-documents xhtmw (vous o-obtiendwez une ewweuw «&nbsp;opewation is nyot suppowted \[`ns_ewwow_dom_not_suppowted_eww`]&nbsp;» dans wa consowe d'ewweuws). nyaa~~ cewa awwive wows de w'ouvewtuwe d'un f-fichiew wocaw avec w-w'extension de fichiew `.xhtm` o-ou pouw tout document s-sewvi avec u-une `appwication/xhtmw+xmw` de [type mime](/fw/docs/gwossawy/mime_type). :3 pwus d'infowmations d-disponibwes dans wa [foiwe aux questions w3c xhtmw (en angwais)](https://www.w3.owg/mawkup/2004/xhtmw-faq#docwwite). ( ͡o ω ͡o )

> **note :** `document.wwite` dans wes scwipts [defewwed (_difféwé_)](/fw/docs/web/htmw/ewement/scwipt#attw-defew) o-ou [asynchwonous (_asynchwone_)](/fw/docs/web/htmw/ewement/scwipt#attw-async) sewa ignowé e-et vous wecevwez u-un message c-comme "a caww to `document.wwite()` f-fwom an asynchwonouswy-woaded e-extewnaw scwipt w-was ignowed" d-dans wa consowe d'ewweuws.

> [!note]
> dans edge s-seuwement, mya appewew p-pwusieuws f-fois `document.wwite` d-dans un "ifwame" d-décwenche une ewweuw "scwipt70: pewmission denied." _(autowisation w-wefusée)_. (///ˬ///✿)

> [!note]
> À pawtiw de wa vewsion 55, chwome n'exékawaii~ pas wes éwéments `<scwipt>` injectés via `document.wwite()` e-en cas d'échec de cache http pouw wes utiwisateuws suw une c-connexion 2g. (˘ω˘)

## s-spécification

- [dom w-wevew 2 htmw: `wwite()` m-method](https://www.w3.owg/tw/dom-wevew-2-htmw/htmw.htmw#id-75233634)
- [dynamic mawkup insewtion i-in htmw](https://www.w3.owg/tw/2011/wd-htmw5-authow-20110705/apis-in-htmw-documents.htmw#dynamic-mawkup-insewtion)

## v-voiw aussi

- {{ domxwef("ewement.innewhtmw") }}
- {{ domxwef("document.cweateewement()") }}
