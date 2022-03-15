---
title: cookies.get()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/get
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies/get
---
{{AddonSidebar()}}

La méthode **`get()`** de l'API {{WebExtAPIRef("cookies")}} récupère les informations d'un seul cookie, par son nom et son URL.

Si plus d'un cookie portant le même nom existent pour une URL donnée, celui contenant le chemin le plus long sera retourné. Pour les cookies ayant la même longueur de chemin, le plus ancien cookie sera retourné. Si aucun cookie ne correspond alors `null` est retourné.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.cookies.get(
  details                // object
)
```

### Paramètres

- `details`

  - : Un `objet` contenant les informations pouvant être utilisées pour récupérer un cookie. Il peut inclure les propriétés suivantes :

    - `firstPartyDomain`{{optional_inline}}
      - : Une `chaîne` représentant le domaine de première partie avec lequel le cookie à récupérer est associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Voir [Isolement de la première partie](/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie).
    - `name`
      - : Une `chaîne` représentant le nom du cookie à récupérer.
    - `storeId`{{optional_inline}}
      - : Une `chaîne` représentant l'ID du {{WebExtAPIRef("cookies.CookieStore", "cookie store")}} dans lequel rechercher le cookie (tel que renvoyé par  {{WebExtAPIRef("cookies.getAllCookieStores()")}}). Par défault, le cookie store du contexte d'exécution actuel sera utilisé.
    - `url`
      - : Une `chaîne` représentant l'URL avec laquelle le cookie à récupérer est associé. Cet argument peut être une URL complète, auquel cas toute donnée suivant le chemin d'URL (par exemple la chaîne de requête) est simplement ignorée. Si les [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions) pour cette URL ne sont pas spécifiées dans le [fichier manifeste](/fr/Add-ons/WebExtensions/manifest.json) de l'extension, l'appel de l'API échouera.

### Valeur retournée

Une [`Promise`](fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('cookies.Cookie', 'Cookie')}} contenant des détails sur le cookie, ou `null` si le cookie n'a pas été trouvé.

## Compatibilité du navigateur

{{Compat("webextensions.api.cookies.get")}}

## Exemples

Cet exemple tente d'obtenir le cookie nommé "favourite-colour", associé à l'URL de l'onglet actuellement actif :

```js
function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  var getting = browser.cookies.get({
    url: tabs[0].url,
    name: "favourite-colour"
  });
  getting.then(logCookie);
}

var getActive = browser.tabs.query({
  active: true,
  currentWindow: true
});
getActive.then(getCookie);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Cette documentation est dérivée de [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) dans le code Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
