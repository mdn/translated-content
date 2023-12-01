---
title: tabs.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/detectLanguage
---

{{AddonSidebar()}}

Détecte la langue principale du contenu dans un onglet, en utilisant le [détecteur de langue compact](https://github.com/CLD2Owners/cld2) (CLD).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var detecting = browser.tabs.detectLanguage(
  tabId, // optional integer
  callback, // optional function
);
```

### Paramètres

- `tabId` {{optional_inline}}
  - : `integer`. Par défaut à l'onglet actif de la fenêtre en cours.
- `callback` {{optional_inline}}
  - : `function`. Actuellement, si un `tabId` est spécifié, cette méthode utilise ce rappel pour renvoyer les résultats au lieu de renvoyer une promesse. Le rappel reçoit comme seul paramètre d'entrée une chaîne de caractères contenant le code de langue détecté `en` ou `fr`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise)qui sera remplie avec une chaîne représentant un code de langue ISO tel que `en` ou `fr`. Pour une liste complète des langues prises en charge par cette méthode, see [kLanguageInfoTable](https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc#l23). Pour une langue inconnue, `"und"` sera retourné (mais voir [bug 1288263](https://bugzilla.mozilla.org/show_bug.cgi?id=1288263)). Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Détecter et enregistrer la langue de l'onglet actif lorsque l'utilisateur clique sur une action du navigateur :

```js
function onLanguageDetected(lang) {
  console.log(`Language is: ${lang}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function () {
  var detecting = browser.tabs.detectLanguage();
  detecting.then(onLanguageDetected, onError);
});
```

Détecter et enregistrer la langue de chaque onglet ouvert lorsque l'utilisateur clique sur une action du navigateur (notez que cet exemple nécessite l [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions)) :

```js
function onLanguageDetected(url, lang) {
  console.log(`Language in ${url} is: ${lang}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function detectLanguages(tabs) {
  for (tab of tabs) {
    var onFulfilled = onLanguageDetected.bind(null, tab.url);
    var detecting = browser.tabs.detectLanguage(tab.id);
    detecting.then(onFulfilled, onError);
  }
}

browser.browserAction.onClicked.addListener(function () {
  var querying = browser.tabs.query({});
  querying.then(detectLanguages, onError);
});
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript) de Chromium. Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
