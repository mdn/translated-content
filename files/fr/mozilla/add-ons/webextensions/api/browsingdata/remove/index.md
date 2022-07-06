---
title: browsingData.remove()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - browsingData
  - remove
  - supprimer
translation_of: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
---
{{AddonSidebar()}}

Supprime les données de navigation spécifiées.

Les données de navigation à supprimer sont spécifiées dans l'option  `dataTypes`, qui est un objet  {{WebExtAPIRef("browsingData.DataTypeSet")}}.

Vous pouvez utiliser l'option `removalOptions`, qui est un objet {{WebExtAPIRef("browsingData.RemovalOptions")}}, pour contrôler à quelle distance remonter dans le temps pour supprimer des données et supprimer les données uniquement à partir de pages Web normales ou pour supprimer des données hébergées d'applications et extensions aussi.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.browsingData.remove(
  removalOptions,            // RemovalOptions object
  dataTypes                  // DataTypeSet object
)
```

### Paramètres

- `removalOptions`
  - : `object`. Un objet {{WebExtAPIRef("browsingData.RemovalOptions")}}, qui peut être utilisé pour contrôler à quelle distance remonter dans le temps pour supprimer des données, et si vous souhaitez supprimer des données des applications Web hébergées et des extensions ou simplement des pages Web normales.
- `dataTypes`
  - : `object`. Un objet {{WebExtAPIRef("browsingData.DataTypeSet")}}, décrit les types de données à supprimer (par exemple, historique, les téléchargements,...).

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument lorsque la suppression est terminée. Si une erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.browsingData.remove")}}

## Exemples

Supprimer l'historique des téléchargements et de l'histoire de navigation de la semaine dernière :

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

var oneWeekAgo = (new Date()).getTime() - weekInMilliseconds();

browser.browsingData.remove(
  {since: oneWeekAgo},
  {downloads: true, history: true}).
then(onRemoved, onError);
```

Supprimer tout l'historique de téléchargement et de navigation :

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.remove({},
  {downloads: true, history: true}).
then(onRemoved, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browsingData`](https://developer.chrome.com/extensions/browsingData).
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
