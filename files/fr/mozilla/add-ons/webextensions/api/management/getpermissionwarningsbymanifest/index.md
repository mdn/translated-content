---
title: management.getPermissionWarningsByManifest()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsByManifest
tags:
  - API
  - Add-ons
  - Méthode
  - Reference
  - WebExtensions
  - getPermissionWarningsByManifest
  - management
translation_of: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsByManifest
---
{{AddonSidebar()}}Lorsque l'utilisateur installe ou met à jour une extension, la navigateur peut avertir l'utilisateur des [permissions](/fr/Add-ons/WebExtensions/manifest.json/permissions) obligatoires. Toutes les permissions ne donnent pas lieu à des avertissements, et cela n'est pas normalisé dans les navigateurs.

Compte tenu du texte du fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json), cette fonction retourne les avertisseurs de permissions qui seraient donnés pour l'extension comme un ensemble de chaines.

Cette API _ne requière pas_ l'[API de permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "management".

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingWarnings = browser.management.getPermissionWarningsByManifest(
  manifestString      // string
)
```

### Paramètres

- `manifestString`
  - : `string`. Chaîne contenant le fichier manifest. Cela doit être un manifest valide : par exemple, il doit contenir toutes les clés obligatoires du manifest..

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera rempli avec un ensemble de chaînes, chacune contenant le texte un avertisseur de permission.

## Compatibilité du navigateur

{{Compat("webextensions.api.management.getPermissionWarningsByManifest")}}

## Exemples

Enregistrez les avertissements de permissions dans le fichier manifest donné :

```js
var manifest = {
  "manifest_version": 2,
  "name": "test",
  "version": "1.0",
  "permissions": ["management", "<all_urls>"]
}

var manifestString = JSON.stringify(manifest);

function gotWarnings(warnings) {
  console.log(warnings);
}

function gotError(error) {
  console.log(`Error: ${error}`);
}

var gettingWarnings = browser.management.getPermissionWarningsByManifest(manifestString);
gettingWarnings.then(gotWarnings, gotError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
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
