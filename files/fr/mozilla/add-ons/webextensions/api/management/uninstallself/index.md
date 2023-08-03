---
title: management.uninstallSelf()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf
---

{{AddonSidebar()}}

Désinstalle l'appel de l'extension.

Cette API _ne requiert pas_ la [permission API](/fr/Add-ons/WebExtensions/manifest.json/permissions) "management"

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var uninstallingSelf = browser.management.uninstallSelf(
  options, // object
);
```

### Paramètres

- `options{{optional_inline}}`

  - : `object`. L'objet qui peut comporter deux propriétés, toutes deux facultatives :

    - `showConfirmDialog{{optional_inline}}`
      - : Boolean. Si `showConfirmDialog` est `true`, le navigateur affiche la boite de dialogue demandant à l'utilisateur de confirmer que le complément doit être désinstallé. Par défaut à `false`.
    - `dialogMessage{{optional_inline}}`
      - : String. Un message supplémentaire qui sera affiché dans la boite de dialogue de confirmation.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera rejetée avec un message d'erreur si l'utilisateur a annulé la désinstallation.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Désinsallez l'extension, en demandant à l'utilisateur de confirmer. Dans le rappel, vérifiez si l'utilisateur a annulé la désinstallation.

Notez que n'avons pas passé un gestionnaire d'éxécution, car si la desinstallation réussit, l'extension n'est plus disponible pour le gérer.

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

var uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
});

uninstalling.then(null, onCanceled);
```

Le même, mais aussi l'ajout d'un message personnalisé à la boite de dialogue :

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

var uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
  dialogMessage: "Testing self-uninstall",
});

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
