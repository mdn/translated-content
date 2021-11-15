---
title: storage.managed
slug: Mozilla/Add-ons/WebExtensions/API/storage/managed
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Property
  - Reference
  - Storage
  - WebExtensions
  - managed
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/managed
---
{{AddonSidebar()}}

Un objet {{WebExtAPIRef("storage.StorageArea")}} qui représente la zone de stockage gérée. Les éléments de stockage `géré` sont définis par l'administrateur du domaine ou d'autres applications natives installées sur l'ordinateur de l'utilisateur et sont en lecture seule pour l'extension. Essayer de modifier cette zone de stockage entraîne une erreur.

## Provisionnement du stockage géré

La procédure de provisionnement du stockage géré est différente selon les navigateurs. Firefox a sa propre méthode mais (à partir de Firefox 67) peut aussi utiliser la fonction Storage.managed de Chrome qui supporte un fichier `.json`. ((Voir Stockage Chrome géré ci-dessous.)

### manifestes natives

Pour Firefox, vous devez créer un fichier manifest JSON dans un format spécifique, dans un emplacement spécifique. Pour plus de détails sur la syntaxe et l'emplacement du manifeste, voir [manifests natifs](/fr/Add-ons/WebExtensions/Native_manifests).

Voici un exemple de manifest :

```json
{
  "name": "favourite-color-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data":
  {
    "color": "management thinks it should be blue!"
  }
}
```

Compte tenu de ce manifeste, l'extension "favourite-color-examples\@mozilla.org" pourrait accéder aux données en utilisant un code comme celui-ci :

```js
var storageItem = browser.storage.managed.get('color');
storageItem.then((res) => {
  console.log(`Managed colur is: ${res.color}`);
});
```

### Gestion de stockage dans Chrome

Firefox et Chrome supportent tous deux l'utilisation d'un manifeste pour les zones de stockage.

La zone de stockage gérée est configurée à l'aide d'un schéma JSON, qui est strictement validé par Chrome et Firefox 67 ou supérieur. Stockez le schéma dans un fichier.json et pointez-le depuis la propriété "managed_schema" de la clé de manifeste "storage" de l'extension web. Le fichier json déclare les stratégies d'entreprise supportées par l'extension.

Les stratégies définissent les options qui ont été configurées par un administrateur système au lieu de l'utilisateur. La gestion du stockage permet de préconfigurer une extension pour tous les utilisateurs d'une organisation.

C'est à l'extension d'appliquer les stratégies configurées par l'administrateur. L'extension peut lire les stratégies à l'aide de l'API storage.managed.

#### manifest.json

```js
{
  "name": "chrome-storage-managed-examples@mozilla.org",
  "storage": {
      "managed_schema": "schema.json"
  },
}
```

Le fichier json ressemblerait à ceci :

```json
{
  "type": "object",
  // "properties" maps an optional key of this object to its schema. At the
  // top-level object, these keys are the policy names supported.
  "properties": {
    // "title" and "description" are optional and are used to show a
    // user-friendly name and documentation to the administrator.
    "bookmarks": {
      "id": "DevTeamBookmarks",
      "title": "Dev Team bookmarks.",
      "description": "A set of bookmarks particularly useful to the dev team.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
        "title": { "type": "string" },
        "url": { "type": "string" },
        "children": { "$ref": "ListOfBookmarks" }
      }
    }
  }
}
```

Pour plus d'informations, voir l'article de Chrome pour les zones de stockage [Manifeste pour les zones de stockage](https://developer.chrome.com/extensions/manifest/storage).

## Compatibilité du navigateur

{{Compat("webextensions.api.storage.managed")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.

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
