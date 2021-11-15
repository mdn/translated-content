---
title: history.onTitleChanged
slug: Mozilla/Add-ons/WebExtensions/API/history/onTitleChanged
tags:
  - API
  - Add-ons
  - Event
  - History
  - Reference
  - WebExtensions
  - onTitleChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/history/onTitleChanged
---
{{AddonSidebar()}}Lancé lorsque le titre d'une page visitée par l'utilisateur est enregistré.Pour écouter les visites d'une page, vous pouvez utiliser {{WebExtAPIRef("history.onVisited")}}. Cependant, le {{WebExtAPIRef("history.HistoryItem")}} que cet événement passe à son écouteur n'inclut pas le titre de la page, car le titre de la page n'est généralement pas connu au moment où `history.onVisited` est envoyé.Au lieu de cela, {{WebExtAPIRef("history.HistoryItem")}} stocké est mis à jour avec le titre de la page après le chargement de la page, une fois le titre connu. L'événement history.onTitleChanged est déclenché à ce moment-là. Donc, si vous avez besoin de connaître les titres des pages telles qu'elles sont visitées, écoutez `history.onTitleChanged`.

## Syntaxe

```js
browser.history.onTitleChanged.addListener(listener)
browser.history.onTitleChanged.removeListener(listener)
browser.history.onTitleChanged.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` argument est l'écouteur à supprimer
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Function that will be called when this event occurs. The function will be passed an object with the following properties:

    - `url`
      - : `String`. URL of the page visited.
    - `title`
      - : `String`. Title of the page visited.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.onTitleChanged")}}

## Exemples

Écoutez les événements de changement de titre et consignez l'URL et le titre des pages visitées

```js
function handleTitleChanged(item) {
  console.log(item.title);
  console.log(item.url);
}

browser.history.onTitleChanged.addListener(handleTitleChanged);
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
