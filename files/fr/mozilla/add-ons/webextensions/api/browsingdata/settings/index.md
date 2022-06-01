---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
tags:
  - API
  - Extensions
  - Method
  - Reference
  - Settings
  - WebExtensions
  - add-on
  - browsingData
translation_of: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
---
{{AddonSidebar()}}

Les navigateurs disposent d'une fonction "Effacer l'historique" intégrée, qui permet à l'utilisateur d'effacer différents types de données de navigation. Cela a une interface utilisateur qui permet à l'utilisateur de sélectionner le type de données à supprimer (par exemple l'historique, les téléchargements, ...) et à quelle distance remonter dans le temps pour supprimer des données.

Cette fonction renvoie la valeur actuelle de ces paramètres.

Notez que tous les types de données ne peuvent pas toujours être supprimés via l'interface utilisateur et certaines options d'interface utilisateur peuvent correspondre à plusieurs types de données.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getSettings = browser.browsingData.settings()
```

### Paramètres

Aucun.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet contenant les informations sur les paramètres. Cet objet a trois propriétés :

- `options`
  - : `{{WebExtAPIRef("browsingData.RemovalOptions")}}`. Un objet  `RemovalOptions` décrivant les options de suppression actuellement sélectionnées.
- `dataToRemove`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. Cela contiendra une propriété pour chaque type de données pouvant être basculé dans l'interface utilisateur du navigateur. Chaque propriété aura une valeur `true` si ce type est sélectionné pour la suppression et `false` dans le cas contraire.
- `dataRemovalPermitted`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. Cela contiendra une propriété pour chaque type de données pouvant être basculé dans l'interface utilisateur du navigateur. Chacune aura la valeur  `true` si l'administrateur du périphérique a autorisé l'utilisateur à supprimer ce type, et `false` dans le cas contraire.

Si une erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.browsingData.settings")}}

## Exemples

Paramètres des Logs courrants :

```js
function onGotSettings(settings) {
  console.log(settings.options);
  console.log(settings.dataToRemove);
  console.log(settings.dataRemovalPermitted);
}

function onError(error) {
  console.error(error);
}

browser.browsingData.settings().then(onGotSettings, onError);
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
