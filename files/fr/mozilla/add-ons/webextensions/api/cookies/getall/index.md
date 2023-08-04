---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
---

{{AddonSidebar()}}

La méthode **`getAll()`** de l'API {{WebExtAPIRef("cookies")}} récupère tous les cookies d'un seul cookie store qui correspondent aux informations fournies.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.cookies.getAll(
  details, // object
);
```

### Paramètres

- `details`

  - : Un `object` contenant des détails pouvant être utilisés pour faire correspondre les cookies à extraire. Les propriétés incluses sont les suivantes (voir [type de cookie](/fr/Add-ons/WebExtensions/API/cookies/Cookie#Type) pour plus d'informations sur celles-ci ) :

    - `domain`{{optional_inline}}
      - : Une `chaîne` représentant un domaine auquel les cookies doivent être associés (ils peuvent être associés soit à ce domaine exact, soit à l'un de ses sous-domaines).
    - `firstPartyDomain`{{optional_inline}}
      - : Une `chaîne` représentant le domaine de première partie avec lequel le cookie à récupérer est associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Vous pouvez cependant passer `null` dans cette situation. Si vous faites cela, alors les cookies avec n'importe quelle valeur pour `firstPartyDomain`, ainsi que les cookies qui n'ont pas de set `firstPartyDomain` , seront inclus dans les résultats. Voir [Isolement de la première partie](/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie).
    - `name`{{optional_inline}}
      - : Une `chaîne` représentant un nom que les cookies devraient avoir.
    - `path`{{optional_inline}}
      - : Une `chaîne` représentant un chemin - le chemin des cookies doit être identique à celui-ci.
    - `secure`{{optional_inline}}
      - : Un `booléen` — filtre les cookies par leur propriété `sécurisée`, vous permettant de filtrer les cookies sécurisés contre les cookies non sécurisés.
    - `session`{{optional_inline}}
      - : Un `booléen` — filtre les cookies en fonction de leur propriété de `session`, ce qui vous permet de filtrer les cookies de session par rapport aux cookies persistants.
    - `storeId`{{optional_inline}}
      - : Une `chaîne` représentant le magasin de cookies pour récupérer les cookies. S'il est omi, le cookie store du contexte d'exécution actuel sera utilisé.
    - `url`{{optional_inline}}
      - : Une `chaîne` représentant une URL à laquelle les cookies récupérés doivent être associés.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau d'objets `{{WebExtAPIRef('cookies.Cookie')}}` correspondant aux propriétés données dans le paramètre `details`. Seuls les cookies non expirés sont renvoyés. Les cookies retournés seront triés par longueur de chemin, du plus long au plus court. Si plusieurs cookies ont la même longueur de chemin, ceux dont l'heure de création est la plus proche seront les premiers.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Dans l'extrait suivant, nous appelons pour obtenir tous les cookies que le navigateur a actuellement stockés qui ont un nom de "favourite-colour". Lorsque le résultat est renvoyé, nous imprimons la valeur de chaque résultat à la console.

```js
function logCookies(cookies) {
  for (let cookie of cookies) {
    console.log(cookie.value);
  }
}

var gettingAll = browser.cookies.getAll({
  name: "favourite-colour",
});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Cette documentation est dérivée de [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) dans le code Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
