---
title: management.getPermissionWarningsById()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById
tags:
  - API
  - Add-ons
  - Méthode
  - Reference
  - WebExtensions
  - getPermissionWarningsById
  - management
translation_of: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsById
---
{{AddonSidebar()}}Lorsque l'utilisateur installe ou met à jour une extension, le navigateur peut avertir l'utilisateur des [permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) particulièrement puissantes que l'extension a demandée. Toutes les permissions ne donnent pas lieu à des alertes et ce comportement n'est pas normalisé dans les navigateurs.

Compte tenu de l'ID d'une extension, cette fonction retourne les avertisseurs de permissions comme un tableau de chaînes.

Cette API requière l'[API permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "management"

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingWarnings = browser.management.getPermissionWarningsById(
  id                  // string
)
```

### Paramètres

- `id`
  - : `string`. ID de l'extension dont vous souhaitez récupérer les avertisseurs de permissions.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un ensemble de chaînes, chacune contenant un texte d'un avertissement de permissions.

## Compatibilité du navigateur

{{Compat("webextensions.api.management.getPermissionWarningsById")}}

## Exemples

Enregistrez les avertissements de permissions pour l'extension dont l'ID est "my-add-on" :

```js
var id = "my-add-on";

function gotWarnings(warnings) {
  for (warning of warnings) {
    console.log(warning);
  }
}

var gettingWarnings = browser.management.getPermissionWarningsById(id);
gettingWarnings.then(gotWarnings);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
>
> <div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
> //
> // Redistribution and use in source and binary forms, with or without
> // modification, are permitted provided that the following conditions are
> // met:
> //
> //    * Redistributions of source code must retain the above copyright
> // notice, this list of conditions and the following disclaimer.
> //    * Redistributions in binary form must reproduce the above
> // copyright notice, this list of conditions and the following disclaimer
> // in the documentation and/or other materials provided with the
> // distribution.
> //    * Neither the name of Google Inc. nor the names of its
> // contributors may be used to endorse or promote products derived from
> // this software without specific prior written permission.
> //
> // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
> // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
> // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
> // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
> // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
> // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
> // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
> // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
> // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
> // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
> </pre></div>
