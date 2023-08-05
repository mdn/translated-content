---
title: management.uninstall()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstall
---

{{AddonSidebar()}}

Désinstalle une extension, compte tenu de son ID.

Cette API requiert l'[API de permission](/fr/Add-ons/WebExtensions/manifest.json/permissions). "management"

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var uninstalling = browser.management.uninstall(
  id, // string
  options, // object
);
```

### Paramètres

- `id`
  - : `string`. ID de l'extensions à désinstaller.
- `options{{optional_inline}}`

  - : `object`. l'objet qui peut contenir une propriété unique, `showConfirmDialog`. Si `showConfirmDialog` est `true`, le navigateur affiche une boie de dialogue demandant à l'utilisateur de confirmer que le complément doit être désinstallé.

    - Si `id` est l'ID de l'extension appelant, `showConfirmDialog` est par défaut à `false`.
    - Si `id` est l'ID d'une extension différente, cette option est ignorée et la boite de dialogue de confirmation s'affche toujours.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera rejetée avec un message d'erreur si l'utilisateur a annulé la désintallatiion.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Désinstallez l'extension dont l'ID est "my-addon-id", en demandant à l'utilisateur de confirmer. Dans le rappel, vérifiez si l'utilisateur a annué la désinstallation.

Notez que nous n'avons réussi un gestionnaire d'exécution, car si la désinstallation réussit, l'extension n'est plus disponible pour le gérer.

```js
var id = "my-addon-id";

function onCanceled(error) {
  console.log(`Uninstall canceled: ${error}`);
}

var uninstalling = browser.management.uninstall(id);
uninstalling.then(null, onCanceled);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
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
