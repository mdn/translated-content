---
title: topSites
slug: Mozilla/Add-ons/WebExtensions/API/topSites
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - topSites
translation_of: Mozilla/Add-ons/WebExtensions/API/topSites
---
{{AddonSidebar}}

Utilisez l'API topSites pour obtenir un tableau contenant les pages que l'utilisateur a visitées  fréquemment.

Les navigateurs maintiennent ceci pour aider l'utilisateur à retourner à ces endroits facilement. Par exemple, Firefox fournit par défaut une liste des pages les plus visitées dans la page "Nouvel onglet".

Pour utiliser l'API topSites, vous devez disposez de l' [API permission](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "topSites".

## Types

- {{WebExtAPIRef("topSites.MostVisitedURL")}}
  - : Un objet contenant le titre et l'URL d'un site web.

## Méthodes

- {{WebExtAPIRef("topSites.get()")}}
  - : Obtient un tableau contenant tous les sites répertoriés dans la page "Nouvel onglet" du navigateur. Notez que le nombre de sites renvoyés ici est spécifique au navigateur, et les sites particuliers retournés seront probablement spécifiques à l'utilisateur, en fonction de leur historique de navigation.

## Compatibilité du Navigateur

{{Compat("webextensions.api.topSites")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.topSites`](https://developer.chrome.com/extensions/topSites).
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
