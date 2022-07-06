---
title: history.HistoryItem
slug: Mozilla/Add-ons/WebExtensions/API/history/HistoryItem
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - HistoryItem
  - Non-standard
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/history/HistoryItem
---
{{AddonSidebar()}}

Un objet `HistoryItem` fournit des informations sur une page dans l'historique du navigateur.

## Type

C'est un objet avec les propriétés suivantes :

- `id`
  - : `string`. Identifiant unique pour l'article.
- `url` {{optional_inline}}
  - : `string`. L'URL de la page.
- `title` {{optional_inline}}
  - : `string`. Le titre de la page.
- `lastVisitTime` {{optional_inline}}
  - : `number`. Date et heure du dernier chargement de la page, représentée en millisecondes depuis l'époque.
- `visitCount` {{optional_inline}}
  - : `number`. Le nombre de fois que l'utilisateur a visité la page.
- `typedCount` {{optional_inline}}
  - : `number`. Le nombre de fois que l'utilisateur a navigué sur cette page en tapant l'adresse.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.HistoryItem")}}

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
