---
title: runtime.onUpdateAvailable
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUpdateAvailable
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onUpdateAvailable
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/onUpdateAvailable
---
{{AddonSidebar()}}

Déclenché quand une mise à jour de l'extension est disponible. Cet événement permet à une extension de retarder une mise à jour : par exemple, car elle est au milieu d'une opération qui ne doit pas être interrompue.

Si l'extension n'écoute pas cet événement lorsqu'une mise à jour est disponible, l'extension est rechargée immédiatement et la mise à jour est appliquée. Si l'extension est à l'écoute, la mise à jour sera appliquée la prochaine fois que l'extension sera rechargée. Cela arrive si :

- Le navigateur est redémarré
- L'extension est désactivée et réactivée
- L'extension se recharge explicitement en appelant {{WebExtAPIRef('runtime.reload()')}}.

## Syntaxe

```js
browser.runtime.onUpdateAvailable.addListener()
browser.runtime.onUpdateAvailable.removeListener(listener)
browser.runtime.onUpdateAvailable.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajouter un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument`listener` est un écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie que l'`écouteur` est enregistré pour cet événement. Retourne `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée quand cet événement se produit. La fonction recevra les arguments suivants :

    - `details`
      - : `object`. Contient une seule propriété, une chaîne nommée `version`, qui représente le numéro de version de la mise à jour.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.onUpdateAvailable")}}

## Exemples

Ecoutez les événements `UpdateAvailable`:

```js
function handleUpdateAvailable(details) {
  console.log(details.version);
}

browser.runtime.onUpdateAvailable.addListener(handleUpdateAvailable);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
