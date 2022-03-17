---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onUpdated
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
---
C'est déclenché lorsqu'un onglet est mis à jour.

Lorsque l'utilisateur navigue vers une nouvelle URL dans un onglet, cela génère généralement plusieurs événements `onUpdated` au fur et à mesure que diverses propriétés de l'objet {{WebExtAPIRef("tabs.Tab")}} sont mises à jour. Ceci inclut l' `url`, mais aussi potentiellement le `title` et les propriétés `favIconUrl`. La propriété du  `status` passe par le `"loading"` et `"complete"`.

Cet événement sera également déclenché pour les modifications des propriétés d'un onglet qui n'impliquent pas de navigation, comme le pinning et le débrochage (qui met à jour la propriété `pinned`) et le muting ou le unmuting (qui met à jour les propriétés  `audible` et `mutedInfo`).

Vous pouvez filtrer cet événement, en le rendant uniquement valable pour les onglets dont les urls correspondent à des [patterns](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) spécifiques, ou pour les modifications de propriétés spécifiques, ou pour les modifications d'un onglet ou d'une fenêtre spécifique, ou toute combinaison de ces restrictions.

## Syntaxe

```js
browser.tabs.onUpdated.addListener(listener[, extraParameters])
browser.tabs.onUpdated.removeListener(listener)
browser.tabs.onUpdated.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback[, extraParameters])`
  - : Ajoute un écouteur à cet événement
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produira. La fonction sera passée les arguments suivants :

    - `tabId`
      - : `integer`. ID de l'onglet qui a été mis à jour.
    - `changeInfo`
      - : [`object`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated$edit#changeInfo). ontient les propriétés des propriétés de l'onglet qui ont été modifiées. Voir [`changeInfo`](/fr/Add-ons/WebExtensions/API/tabs/onUpdated#changeInfo) ci-dessous.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Le nouvel état de l'onglet.

- `extraParameters`{{optional_inline}}

  - : `object`. Un ensemble de filtres qui restreint les événements qui seront envoyés à cet auditeur. C'est un objet qui peut avoir une ou plusieurs des propriétés suivantes. Les événements ne seront envoyés que s'ils satisfont à tous les filtres donnés.

    - `urls`
      - : `Array`. Un tableau [match patterns](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Ne déclenchez l'événement que pour les onglets dont la propriété de l'`url` courante correspond à l'un des motifs.
    - `properties`

      - : `Array`. un tableau de chaîne de caractères,  qui sont les noms des propriétés de l'objet {{WebExtAPIRef("tabs.Tab")}}. Ne déclenchez cet événement seulement pour les changement apportées à l'une des propriétés nommées dans ce tableau. Les propriétés suivantes peuvent être listées ici :

        - "attention"
        - "audible"
        - "discarded"
        - "favIconUrl"
        - "hidden"
        - "isArticle"
        - "mutedInfo"
        - "pinned"
        - "sharingState"
        - "status"
        - "title"

    - `tabId`
      - : `Integer`. Ne déclenchez cet événement que pour l'onglet identifié par cet ID.
    - `windowId`
      - : `Integer`. N'activez cet événement que pour les onglets qui se trouvent actuellement dans la fenêtre identifiée par cet ID.

## Objets supplémentaires

### changeInfo

Répertorie les modifications apportées à l'état de l'onglet mis à jour. Pour en savoir plus sur ces propriétés, consultez la documentation {{WebExtAPIRef("tabs.Tab")}}.

- `attention` {{optional_inline}}
  - : `boolean`. Indique si l'onglet attire l'attention. Par exemple, lorsque l'onglet affiche un dialogue modal, `attention` sera `true`.
- `audible`{{optional_inline}}
  - : `boolean`. Nouvel état audible de l'onglet.
- `discarded` {{optional_inline}}
  - : `boolean`. Si l'onglet est ignoré. Un onglet supprimé est celui dont le contenu a été déchargé de la mémoire, mais est toujours visible dans la bande d'onglets. Son contenu est rechargé la prochaine fois qu'il est activé.
- `favIconUrl`{{optional_inline}}
  - : `string`. Nouvelle URL de favicon de l'onglet.
- `mutedInfo`{{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Le nouvel état muet de l'onglet et la raison du changement.
- `pinned`{{optional_inline}}
  - : `boolean`. Nouvel état épinglé de l'onglet.
- `status`{{optional_inline}}
  - : `string`. Le statut de l'onglet. Peut être soit _chargé_ ou _complet_.
- `title`{{optional_inline}}
  - : `string`. Le nouveau titre de l'onglet.
- `url`{{optional_inline}}
  - : `string`. L'URL de l'onglet s'il a changé.

## Exemples

Écoutez et connectez toutes les informations de changement et nouvel état:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log("Updated tab: " + tabId);
  console.log("Changed attributes: ");
  console.log(changeInfo);
  console.log("New tab Info: ");
  console.log(tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

Consigner les modifications dans les URL :

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log("Tab: " + tabId +
                " URL changed to " + changeInfo.url);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

### Filtering examples

Le journal ne change que pour les onglets dont la propriété `url` est [matched](/fr/Add-ons/WebExtensions/Match_patterns) par "https\://developer.mozilla.org/\*" ou "https\://twitter.com/mozdevnet":

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://twitter.com/mozdevnet";

const filter = {
  urls: [pattern1, pattern2]
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Le journal ne change que la propriété `épinglée` des onglets (c'est-à-dire les actions d'épinglage et de déblocage) :

```js
const filter = {
  properties: ["pinned"]
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Combiner les deux filtres précédents : changements de journal seulement :

- A la propriété `épinglée` des onglets
- Dont la propriété `url` est [matched](/fr/Add-ons/WebExtensions/Match_patterns) par "https\://developer.mozilla.org/\*" ou "https\://twitter.com/mozdevnet":

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://twitter.com/mozdevnet";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"]
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(
  handleUpdated,
  filter);
```

Changements dans le journal seulement :

- A la propriété `épinglée` des onglets
- Dont la propriété `url` est [matched](/fr/Add-ons/WebExtensions/Match_patterns) par "https\://developer.mozilla.org/\*" ou "https\://twitter.com/mozdevnet"
- et qui font partie de la fenêtre actuelle du navigateur au moment où l'événement de mise à jour est déclenché :

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://twitter.com/mozdevnet";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(
  handleUpdated,
  filter);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.onUpdated", 10)}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.

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

{{AddonSidebar}}
