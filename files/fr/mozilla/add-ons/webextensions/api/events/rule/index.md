---
title: events.Rule
slug: Mozilla/Add-ons/WebExtensions/API/events/Rule
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Rule
  - Type
  - WebExtensions
  - events
translation_of: Mozilla/Add-ons/WebExtensions/API/events/Rule
---
{{AddonSidebar()}}

Description d'une règle déclarative pour la gestion des événements.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `id`{{optional_inline}}
  - : `string`. Identifiant facultatif permettant de référencer cette règle.
- `tags`{{optional_inline}}
  - : `array` of `string`. Les balises peuvent être utilisées pour annoter des règles et effectuer des opérations sur des ensembles de règles.
- `conditions`
  - : `array` de `any`. Liste des conditions qui peuvent déclencher les actions.
- `actions`
  - : `array` de `any`. Liste des actions qui sont déclenchées si l'une des conditions est remplie.
- `priority`{{optional_inline}}
  - : `integer`. Priorité optionnelle de cette règle. Par défaut à 100.

## Compatibilité du navigateur

{{Compat("webextensions.api.events.Rule")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.events`](https://developer.chrome.com/extensions/events). Cette documentation est dérivée de [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) dans le code Chromium.
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
