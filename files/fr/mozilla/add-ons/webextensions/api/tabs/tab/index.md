---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Tab
  - Type
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
---
{{AddonSidebar()}}

Le type **`tabs.Tab`** contient des informations sur un onglet. Cela donne accès à des informations sur le contenu de l'onglet, la taille du contenu, les états spéciaux ou les restrictions en vigueur, etc.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `active`

  - : `boolean`. Si l'onglet est actif dans sa fenêtre. Ceci peut être vrai même si la fenêtre de l'onglet n'est pas actuellement focalisée.

    L'onglet actif est généralement l'onglet sélectionné. Cependant, sur Firefox pour Android, les popups d'extension s'ouvrent dans un nouvel onglet. Lorsque cet onglet popup est sélectionné, l'onglet actif sera plutôt celui dans lequel le popup s'est ouvert.

- `attention` {{optional_inline}}
  - : `boolean`. Indique si l'onglet attire l'attention. Par exemple, lorsque l'onglet affiche un dialogue modal, `attention` sera à `true`.
- `audible` {{optional_inline}}
  - : `boolean`. Si l'onglet n'est pas coupé: si l'onglet produit du son. Si l'onglet est coupé: si l'onglet produit un son, s'il n'est pas muet.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Si l'onglet peut être supprimé automatiquement par le navigateur lorsque les ressources sont faibles.
- `cookieStoreId` {{optional_inline}}
  - : `string`. Le magasin de cookies de l'onglet. Si différents onglets peuvent avoir différents magasins de cookies (par exemple, pour prendre en charge l'[identitié contextuelle](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)), vous pouvez passer cette option `storeId` dans différentes méthodes de l'API {{WebExtAPIRef("cookies")}}, pour définir et obtenir des cookies associés à Le magasin de cookies de cet onglet. Seulement présent si l'extension a la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"cookies".`
- `discarded` {{optional_inline}}
  - : `boolean`. Si l'onglet est ignoré. Un onglet supprimé est celui dont le contenu a été déchargé de la mémoire, mais est toujours visible dans la bande d'onglets. Son contenu est rechargé la prochaine fois qu'il est activé.
- `favIconUrl` {{optional_inline}}
  - : `string`. L'URL de la favicon de l'onglet. Seulement présent si l'extension a la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"tabs"`. Il peut également s'agir d'une chaîne vide si l'onglet est en cours de chargement.
- `height` {{optional_inline}}
  - : `integer`. La hauteur de l'onglet en pixels.
- `hidden`
  - : `boolean`. Si l'onglet est caché.
- `highlighted`

  - : `boolean`. Si l'onglet est en surbrillance, c'est-à-dire une partie de la sélection de l'onglet en cours. Un onglet actif est toujours mis en surbrillance, mais certains navigateurs peuvent permettre de mettre en surbrillance des onglets supplémentaires, par exemple en cliquant dessus tout en maintenant les touches <kbd>Ctrl</kbd>, <kbd>Shift</kbd> ou <kbd>⌘ Command</kbd> .

    Firefox pour Android ne prend pas en charge la mise en surbrillance de plusieurs onglets, et le bureau Firefox nécessite la préférence  `browser.tabs.multiselect` (activé par défaut).

- `id` {{optional_inline}}
  - : `integer`. L'ID de l'onglet. Les ID d'onglet sont uniques dans une session de navigateur. L'ID d'onglet peut également être défini sur  {{WebExtAPIRef('tabs.TAB_ID_NONE')}} pour les fenêtres de navigateur qui n'hébergent pas d'onglets de contenu (par exemple, les fenêtres devtools).
- `incognito`
  - : `boolean`. Si l'onglet est dans une fenêtre de navigation privée.
- `index`
  - : `integer`. L'indice de base zéro de l'onglet dans sa fenêtre.
- `isArticle`
  - : `boolean`. Vrai si l'onglet peut être [rendu en mode lecteur](/fr/Add-ons/WebExtensions/API/tabs/toggleReaderMode), sinon faux.
- `isInReaderMode`
  - : `boolean`. Vrai si l'onglet en cours de [rendu en mode lecteur](/fr/Add-ons/WebExtensions/API/tabs/toggleReaderMode), sinon faux.
- `lastAccessed`
  - : `double`. Heure à laquelle l'onglet a été accédé pour la dernière fois, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. L'état en sourdine actuel pour l'onglet et la raison du dernier changement d'état.
- `openerTabId` {{optional_inline}}
  - : `integer`. L'ID de l'onglet qui a ouvert cet onglet, le cas échéant. Cette propriété n'est présente que si l'onglet d'ouverture existe toujours.
- `pinned`
  - : `boolean`. Si l'onglet est épinglé.
- `selected` {{deprecated_inline}}
  - : `boolean`. Si l'onglet est sélectionné. Cette propriété a été remplacée par `active` et `highlighted`.
- `sessionId` {{optional_inline}}
  - : `string`. L'identifiant de session utilisé pour identifier de façon unique un `onglet`  obtenu à partir de l'API {{WebExtAPIRef('sessions')}}.
- `status` {{optional_inline}}
  - : `string`. Soit _charger_ ou _compléter_.
- `successorId` {{optional_inline}}
  - : `integer` L'ID du successeur de l'onglet.
- `title` {{optional_inline}}
  - : `string`. Le titre de l'onglet. Seulement présent si l'extension à la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"tabs".`
- `url` {{optional_inline}}
  - : `string`. L'URL du document que l'onglet affiche. Seulement présent si l'extension à la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"tabs"`.
- `width` {{optional_inline}}
  - : `integer`. La largeur de l'onglet en pixels
- `windowId`
  - : `integer`. L'ID de la fenêtre qui héberge cet onglet.

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.Tab", 10)}}

{{WebExtExamples}}

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
