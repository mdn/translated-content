---
title: history.onVisited
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisited
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - History
  - Non-standard
  - Reference
  - WebExtensions
  - onVisited
translation_of: Mozilla/Add-ons/WebExtensions/API/history/onVisited
---
{{AddonSidebar()}}

Mise en place à chaque fois que l'utilisateur visite une page. Un objet {{WebExtAPIRef("history.HistoryItem")}} est transmis à l'écouteur. Cet événement se déclenche avant que la page ne soit chargée.

## Syntaxe

```js
browser.history.onVisited.addListener(listener)
browser.history.onVisited.removeListener(listener)
browser.history.onVisited.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `result`

      - : {{WebExtAPIRef('history.HistoryItem')}}. Un objet représentant l'élément dans l'historique du navigateur.

        Au moment où cet événement est envoyé, le navigateur ne connaît pas encore le titre de la page. Si le navigateur a déjà visité cette page et s'est souvenu de son ancien titre, l'objet `HistoryItem.title` contiendra l'ancien titre de la page. Si le navigateur n'a pas d'enregistrement de l'ancien titre de la page, alors `HistoryItem.title` sera vide. Pour obtenir les titres des pages dès qu'ils sont connus, écoutez  {{WebExtAPIRef("history.onTitleChanged")}}.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.onVisited")}}

## Exemples

Écoutez les visites et consignez l'URL et l'heure de visite.

```js
function onVisited(historyItem) {
  console.log(historyItem.url);
  console.log(new Date(historyItem.lastVisitTime));
}

browser.history.onVisited.addListener(onVisited);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.history`](https://developer.chrome.com/extensions/history). Cette documentation est dérivée de [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) dans le code de Chromium.
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
