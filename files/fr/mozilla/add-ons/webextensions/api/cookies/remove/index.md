---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
---

{{AddonSidebar()}}

La méthode **`remove()`** de l'API {{WebExtAPIRef("cookies")}} supprime un cookie, compte tenu de son nom et de son URL.

L'appel réussit uniquement si vous incluez la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "cookies" dans votre fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json), ainsi que les [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour l'URL indiquée dans son manifest.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.cookies.remove(
  details, // object
);
```

### Paramètres

- `details`

  - : Un `objet` contenant des informations permettant d'identifier le cookie à supprimer. Il contient les propriétés suivantes :

    - `firstPartyDomain`{{optional_inline}}
      - : Une `chaîne` représentant le domaine de première partie avec lequel le cookie sera associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Voir [Isolement de la première partie](/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie).
    - `name`
      - : Une `chaîne` représenant le nom du cookie à supprimer.
    - `storeId`{{optional_inline}}
      - : Une `chaîne` représentant l'ID du cookie store pour trouver le cookie. Si elle n'est pas spécifiée, le cookie est recherché par défaut dans le cookie store du contexte d'exécution actuel.
    - `url`
      - : Une `chaîne` représentant l'URL associée au cookie. Si l'extension n'a pas de [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour cette URL, l'appel de l'API échouera.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('cookies.Cookie')}} contenant des détails sur le cookie qui a été supprimé. Si un cookie correspondant au paramètre `details` n'a pas pu être trouvé, la promesse est remplie avec `null`. Si l'appel échoue pour une raison quelconque, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple tente de supprimer le cookie nommé "favourite-colour", dont l'URL correspond à l'URL du document hébergé par l'onglet actuellement actif :

```js
function onRemoved(cookie) {
  console.log(`Removed: ${cookie}`);
}

function onError(error) {
  console.log(`Error removing cookie: ${error}`);
}

function removeCookie(tabs) {
  var removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "favourite-colour",
  });
  removing.then(onRemoved, onError);
}

var getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(removeCookie);
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
