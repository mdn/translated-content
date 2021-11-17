---
title: history.VisitItem
slug: Mozilla/Add-ons/WebExtensions/API/history/VisitItem
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - Non-standard
  - Reference
  - Type
  - VisiItem
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/history/VisitItem
---
{{AddonSidebar()}}

Un objet décrivant une seule visite sur une page.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `id`
  - : `string`. L'identifiant unique du {{WebExtAPIRef("history.HistoryItem")}} associé à cette visite.
- `visitId`
  - : `string`. L'identifiant unique pour cette visite.
- `visitTime`{{optional_inline}}
  - : `number`. Lorsque cette visite s'est produite, représentée en millisecondes depuis l'époque.
- `referringVisitId`
  - : `string`. L'ID de visite du référent.
- `transition`
  - : {{WebExtAPIRef('history.TransitionType')}}. Décrit comment le navigateur a navigué vers la page à cette occasion.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.VisitItem")}}

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
