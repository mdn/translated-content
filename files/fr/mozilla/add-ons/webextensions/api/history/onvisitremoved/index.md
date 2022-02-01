---
title: history.onVisitRemoved
slug: Mozilla/Add-ons/WebExtensions/API/history/onVisitRemoved
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - History
  - Non-standard
  - Reference
  - WebExtensions
  - onVisitRemoved
translation_of: Mozilla/Add-ons/WebExtensions/API/history/onVisitRemoved
---
{{AddonSidebar()}}

Lancé lorsqu'une page est complètement supprimée de l'historique du navigateur.

- Si toutes les visites d'une seule page sont supprimées (par exemple, en utilisant {{WebExtAPIRef("history.deleteUrl")}}), cet événement est déclenché une fois.
- Si une série de visites est supprimée (par exemple, en utilisant {{WebExtAPIRef("history.deleteRange")}} ou une fonctionnalité de navigateur telle que "Effacer l'historique récent"), alors il est tiré une fois pour chaque page _dont les visites tombent toutes dans la plage autorisée_.
- Si l'historique complet du navigateur est effacé (par exemple, en utilisant {{WebExtAPIRef("history.deleteAll")}}), il est déclenché une seule fois.

## Syntaxe

```js
browser.history.onVisitRemoved.addListener(listener)
browser.history.onVisitRemoved.removeListener(listener)
browser.history.onVisitRemoved.hasListener(listener)
```

Les événements ont trois fonctions:

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction sera passée l'argument suivant :

    - `removed`

      - : `object`. Détails de l'enlèvement. C'est un objet contenant deux propriétés: un booléen `allHistory` et un tableau `urls`.

        - Si cet événement se déclenche parce qu'il est clair, `allHistory` sera `true` et `urls` sera un tableau vide.
        - Dans le cas contraire,  `allHistory` sera `false` et `urls` contiendront un qui est l'URL de la page supprimée.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.onVisitRemoved")}}

## Exemples

```js
function onRemoved(removed) {
  if (removed.allHistory) {
    console.log("All history removed");
  } else if (removed.urls.length) {
    console.log("URL removed: " + removed.urls[0]);
  }
}

browser.history.onVisitRemoved.addListener(onRemoved);
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
