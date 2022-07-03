---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/history
---
{{AddonSidebar}}

Utilisez l'API `historique` pour interargir avec l'historique du navigateur.

Si vous recherchez des informations sur l'historique de session du navigateur, consultez l'[interface historique](/fr/docs/Web/API/History).

> **Note :** Les téléchargements sont traités comme des objets [`HistoryItem`](/fr/Add-ons/WebExtensions/API/history/HistoryItem). Par conséquent, des événements tels que [`history.onVisited`](/fr/Add-ons/WebExtensions/API/history/onVisited) seront également déclenchés pour les téléchargements.

L'historique du navigateur est un enregistrement chronologique des pages que l'utilisateur a visitées. l'API d'historique vous permet de :

- [Recherchez dans des pagesqui apparaissent dans l'historique du navigateur](/fr/Add-ons/WebExtensions/API/history/search)
- [Supprimer des pages individuelles de l'historique du navigateur](/fr/Add-ons/WebExtensions/API/history/deleteUrl)
- [Ajouter des pages à l'historique du navigateur](/fr/Add-ons/WebExtensions/API/history/addUrl)
- [Supprimer toutes les pages de l'historique du navigateur](/fr/Add-ons/WebExtensions/API/history/deleteAll).

Cependant, l'utilisateur peut avoir visité une seule page, plusieurs fois, de sorte que l'API a également le concept de"visites". Vous pouvez également utiliser cette API pour :

- [Récupérer l'ensemble des visites effectuées par l'utilisateur sur une page particulière](/fr/Add-ons/WebExtensions/API/history/getVisits)
- [Supprimer les visites à toutes les pages faites pendant une période de temps](/fr/Add-ons/WebExtensions/API/history/deleteRange).

Pour utiliser cette API, une extension doit demander la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "history" dans le fichier  [`manifest.json`](/fr/Add-ons/WebExtensions/manifest.json).

## Types

- {{WebExtAPIRef("history.TransitionType")}}
  - : Décrit comment le navigateur a navigué vers une page particulière.
- {{WebExtAPIRef("history.HistoryItem")}}
  - : Fournit des informations sur une page particulière dans l'historique du navigateur.
- {{WebExtAPIRef("history.VisitItem")}}
  - : Décrit une seule visite sur une page.

## Fonctions

- {{WebExtAPIRef("history.search()")}}
  - : Recherche dans l'historique du navigateur les objets [`history.HistoryItem`](/fr/Add-ons/WebExtensions/API/History/HistoryItem) correspondant aux critères donnés.
- {{WebExtAPIRef("history.getVisits()")}}
  - : Récupère des informations sur les visites sur une page donnée.
- {{WebExtAPIRef("history.addUrl()")}}
  - : Ajoute un enregistrement à l'historique du navigateur d'une visite sur la page donnée.
- {{WebExtAPIRef("history.deleteUrl()")}}
  - : Supprime toutes les visites à l'URL donnée de l'historique du navigateur.
- {{WebExtAPIRef("history.deleteRange()")}}
  - : Supprime toutes les visites aux pages que l'utilisateur a effectuées pendant la période donnée.
- {{WebExtAPIRef("history.deleteAll()")}}
  - : Supprime toutes les visites de l'historique du navigateur.

## Evénements

- {{WebExtAPIRef("history.onTitleChanged")}}
  - : Lancé lorsque le titre d'une page visitée par l'utilisateur est enregistré.
- {{WebExtAPIRef("history.onVisited")}}
  - : Lancé chaque fois que l'utilisateur visite une page, en fournissant les données {{WebExtAPIRef("history.HistoryItem")}} pour cette page.
- {{WebExtAPIRef("history.onVisitRemoved")}}
  - : Lancé lorsqu'une URL est complètement supprimée de l'historique du navigateur.

## Compatibilité du navigateur

{{Compat("webextensions.api.history")}}

{{WebExtExamples("h2")}}

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
