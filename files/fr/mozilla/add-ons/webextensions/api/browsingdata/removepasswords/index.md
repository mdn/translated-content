---
title: browsingData.removePasswords()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePasswords
---

{{AddonSidebar}}

Efface les mots de passes enregistrés

Vous pouvez utiliser le paremètre `removalOptions`, qui est un objet {{WebExtAPIRef("browsingData.RemovalOptions")}} pour :

- Effacer uniquement les mots de passe enregistrés après un certain temp
- Contrôlez si vous souhaitez supprimer les mots de passe enregistrés sur les pages Web normales ou effacer les mots de passe enregistrés sur les applications et les extensions hébergées.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.browsingData.removePasswords(
  removalOptions, // RemovalOptions object
);
```

### Paramètres

- `removalOptions`
  - : `object`. Un objet {{WebExtAPIRef("browsingData.RemovalOptions")}}, qui peut être utilisé pour effacer uniquement les mots de passe enregistrés après un certain temps, et pour effacer les mots de passe enregistrés sur les pages Web normales ou pour effacer les mots de passe enregistrés sur les applications et les extensions hébergées.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque la suppression est terminée. Si une erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Supprimer les mots de passe enregistrés la semaine dernière :

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

var oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .removePasswords({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Supprime tous les mots de passe enregistrés :

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removePasswords({}).then(onRemoved, onError);
```

{{WebExtExamples}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData).
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
