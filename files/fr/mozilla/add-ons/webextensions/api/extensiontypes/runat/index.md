---
title: extensionTypes.RunAt
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/RunAt
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - RunAt
  - Type
  - WebExtensions
  - extensionTypes
translation_of: Mozilla/Add-ons/WebExtensions/API/extensionTypes/RunAt
---
{{AddonSidebar()}}

Le plus tot que le Javascript ou CSS sera injecté dans l'onglet.

## Type

Les valeurs de ce type sont des chaines. Les valeurs possibles sont : `"document_start"`, `"document_end"`, `"document_idle"`.

- `"document_start"`: corresponds au `chargement`. Le DOM est toujours en cours de chargement.
- `"document_end"`: corresponds à l'`interactif`. Le DOM a fini de charger, mais des ressources telles que des scripts et des images peuvent toujours être en cours de chargement.
- `"document_idle"`: corresponds à  `complete`. Le document et toutes ses ressources ont terminé le changement.

La valeur par défaut est `"document_idle"`.

## Compatibilité du navigateur

{{Compat("webextensions.api.extensionTypes.RunAt")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basé sur l'API Chromium [`chrome.extensionTypes`](https://developer.chrome.com/extensions/extensionTypes) . Cette documentation provient de [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
