---
title: tabs.discard()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/discard
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - WebExtensions
  - discard
  - onglets
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/discard
---
{{AddonSidebar()}}

Rejette un ou plusieurs onglets.

Certains navigateurs "suppriment" automatiquement les onglets dont ils ne pensent pas qu'ils seront bientôt utiles à l'utilisateur. L'onglet reste visible dans la bande d'onglets et le navigateur se souvient de son état, donc si l'utilisateur sélectionne un onglet qui a été supprimé, il est immédiatement restauré.

Les détails de ce qui est supprimé sont spécifiques au navigateur, mais en général, l'abandon d'un onglet permet au navigateur de libérer une partie de la mémoire occupée par cet onglet.

L'API {{WebExtAPIRef("tabs.discard()")}} permet à une extension d'ignorer un ou plusieurs onglets. Il n'est pas possible de supprimer l'onglet actuellement actif ou un onglet dont le document contient un programme d'écoute [`beforeunload`](/fr/docs/Web/Events/beforeunload) qui afficherait une invite.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var discarding = browser.tabs.discard(
  tabIds          // integer or integer array
)
```

### Paramètres

- `tabIds`
  - : `integer` or `array` of `integer`. Les ID de l'onglet ou des onglets à ignorer.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument lorsque tous les onglets spécifiés ont été supprimés. Si une erreur se produit (par exemple, ID d'onglet non valide), la promesse sera rejetée avec un message d'erreur.Si l'ID de l'onglet actif est transmis, il ne sera pas supprimé, mais la promesse sera satisfaite et tous les autres onglets transférés seront supprimés.

## Exemples

Supprimer un seul onglet :

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var discarding = browser.tabs.discard(2);
discarding.then(onDiscarded, onError);
```

Ignorer plusieurs onglets :

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var discarding = browser.tabs.discard([15, 14, 1]);
discarding.then(onDiscarded, onError);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.discard", 10)}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript).

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
