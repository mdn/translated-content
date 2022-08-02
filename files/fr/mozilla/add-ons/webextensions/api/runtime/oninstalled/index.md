---
title: runtime.onInstalled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onInstalled
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
---
{{AddonSidebar()}}

Lancé lorsque l'extension est installée pour la première fois, lorsque l'extension est mise à jour vers une nouvelle version et lorsque le navigateur est mis à jour vers une nouvelle version.

Notez que `runtime.onInstalled` n'est pas la même chose  {{WebExtAPIRef("management.onInstalled")}}. L'événement  `runtime.onInstalled` est déclenché uniquement pour votre extension. L'événement `browser.management.onInstalled` est déclenché pour toutes les extensions.

## Syntaxe

```js
browser.runtime.onInstalled.addListener(listener)
browser.runtime.onInstalled.removeListener(listener)
browser.runtime.onInstalled.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajouterun écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écoutercet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si un `écouteur` est enregistré pour cet événement. Renvoie `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `function`

  - : La fonction de rappel appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `details`

      - : Un objet avec les propriétés suivantes :

        - `id`{{optional_inline}}
          - : `string`. L'ID de l'extension de module partagé importé mise à jour. Ceci n'est présent que si la valeur de `raison` est  `shared_module_update`.
        - `previousVersion`{{optional_inline}}
          - : `string`. La version précédente de l'extension vient d'être mise à jour. Ceci n'est pas présent si la valeur de `raison` est `mise à jour`.
        - `reason`
          - : Une valeur {{WebExtAPIRef('runtime.OnInstalledReason')}}, indiquant la raison pour laquelle cet événement est distribué.
        - `temporary`
          - : `boolean`. Vrai si le module complémentaire a été installé temporairement. Par exemple, en utilisant la page "about:debugging" dans Firefox ou en utilisant  [web-ext run](/fr/Add-ons/WebExtensions/Getting_started_with_web-ext). Sinon faux.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.onInstalled", 10)}}

## Exemples

Lorsque l'extensin est installé, connectez-vous à la raison de l'installon et ouvrez <https://www.reddit.com/r/CatGifs/>:

```js
function handleInstalled(details) {
  console.log(details.reason);
  browser.tabs.create({
    url: "http://chilloutandwatchsomecatgifs.com/"
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);
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
