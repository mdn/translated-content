---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - query
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/query
---
{{AddonSidebar()}}

Obtient tous les onglets qui ont les propriétés spécifiées, ou tous les onglets si aucune propriété n'est spécifiée.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var querying = browser.tabs.query(
  queryInfo             // object
)
```

### Paramètres

- `queryInfo`

  - : `object`. La fonction `query()` obtiendra uniquement les onglets dont les propriétés correspondent aux propriétés incluses ici. Pour en savoir plus sur ces propriétés, consultez la documentation {{WebExtAPIRef("tabs.Tab")}}.

    - `active`{{optional_inline}}
      - : `boolean`. Si les onglets sont actifs dans leurs fenêtres.
    - `audible`{{optional_inline}}
      - : `boolean`. Si les onglets sont audibles.
    - `autoDiscardable`{{optional_inline}}
      - : `boolean`. Si les onglets peuvent être supprimés automatiquement par le navigateur lorsque les ressources sont faibles.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Utilisez cette option pour renvoyer uniquement les onglets dont l'ID est `cookieStoreId`. Cette option n'est disponible que si l'extension à la  [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"cookies"`
    - `currentWindow`{{optional_inline}}
      - : `boolean`. Si les onglets sont dans la fenêtre actuelle.
    - `discarded`{{optional_inline}}
      - : `boolean`. Si les onglets sont supprimés. Un onglet supprimé est celui dont le contenu a été déchargé de la mémoire, mais est toujours visible dans la bande d'onglets. Son contenu est rechargé la prochaine fois qu'il est activé.
    - `hidden`{{optional_inline}}
      - : `boolean`. Si les onglets sont cachés.
    - `highlighted`{{optional_inline}}
      - : `boolean`. Si les onglets sont en surbrillance.
    - `index`{{optional_inline}}
      - : `integer`. La position des onglets dans leurs fenêtres.
    - `muted`{{optional_inline}}
      - : `boolean`. Si les onglets sont en sourdine.
    - `lastFocusedWindow`{{optional_inline}}
      - : `boolean`. Si les onglets sont dans la dernière fenêtre focalisée.
    - `openerTabId`{{optional_inline}}
      - : `integer`. L'ID de l'onglet qui a ouvert cet onglet.
    - `pinned`{{optional_inline}}
      - : `boolean`. Si les onglets sont épinglés.
    - `status`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Si les onglets ont terminé le chargement.
    - `title`{{optional_inline}}
      - : `string`. Faites correspondre les titres de page à un motif.
    - `url`{{optional_inline}}
      - : `string` ou `array de string`. Faites correspondre les onglets avec un ou plusieurs [modèle de correspondance](/fr/Add-ons/WebExtensions/Match_patterns). Notez que les identificateurs de fragment ne sont pas appariés.
    - `windowId`{{optional_inline}}
      - : `integer`. L'ID de la fenêtre parente, ou  {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} pour la fenêtre en cours.
    - `windowType`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. Le type de fenêtre dans lequel les onglets y  sont.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un `tableau` d'objets `{{WebExtAPIRef('tabs.Tab')}}`, contenant des informations sur chaque onglet correspondant. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Obtenez tous les onglets :

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({});
querying.then(logTabs, onError);
```

Obtenez tous les onglets dans la fenêtre actuelle :

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({currentWindow: true});
querying.then(logTabs, onError);
```

Obtenez l'onglet actif dans la fenêtre actuelle :

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({currentWindow: true, active: true});
querying.then(logTabs, onError);
```

Obtenez des onglets pour toutes les URL HTTP et HTTPS sous "mozilla.org" ou l'un de ses sous-domaines :

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({url: "*://*.mozilla.org/*"});
querying.then(logTabs, onError);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.query")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
