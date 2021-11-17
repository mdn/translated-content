---
title: storage.StorageChange
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageChange
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Storage
  - StorageChange
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageChange
---
{{AddonSidebar()}}`StorageChange` est un objet représentant une modification d'une zone de stockage.

## Type

Les objets `StorageChange` contiennent les propriétés suivantes :

- `oldValue`{{optional_inline}}
  - : L'ancienne valeur de l'article, s'il y avait une ancienne valeur. Cela peut être n'importe quel type de données.
- `newValue`{{optional_inline}}
  - : La nouvelle valeur de l'article, s'il y a une nouvelle valeur. Cela peut être n'importe quel type de données.

## Compatibilité du navigateur

{{Compat("webextensions.api.storage.StorageChange")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
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
