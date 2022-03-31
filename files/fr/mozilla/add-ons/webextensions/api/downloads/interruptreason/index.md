---
title: downloads.InterruptReason
slug: Mozilla/Add-ons/WebExtensions/API/downloads/InterruptReason
tags:
  - API
  - Add-ons
  - Extensions
  - InterruptReason
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/InterruptReason
---
{{AddonSidebar()}}

Le type `InteruptReason` de l'API {{WebExtAPIRef("downloads")}} définit un ensemble de raisons possibles pour lesquelles un téléchargement a été interrompu.

Une propriété {{WebExtAPIRef('downloads.DownloadItem')}} d'`erreur` contiendra une chaîne tirée des valeurs définies dans ce type.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont divisées en catégories, chaque ensemble ayant la même sous-chaîne au début:

Erreurs liées au fichier :

- `"FILE_FAILED"`
- `"FILE_ACCESS_DENIED"`
- `"FILE_NO_SPACE"`
- `"FILE_NAME_TOO_LONG"`
- `"FILE_TOO_LARGE"`
- `"FILE_VIRUS_INFECTED"`
- `"FILE_TRANSIENT_ERROR"`
- `"FILE_BLOCKED"`
- `"FILE_SECURITY_CHECK_FAILED"`
- `"FILE_TOO_SHORT"`

Erreurs liées au réseau :

- `"NETWORK_FAILED"`
- `"NETWORK_TIMEOUT"`
- `"NETWORK_DISCONNECTED"`
- `"NETWORK_SERVER_DOWN"`
- `"NETWORK_INVALID_REQUEST"`

Erreurs liées au serveur :

- `"SERVER_FAILED"`
- `"SERVER_NO_RANGE"`
- `"SERVER_BAD_CONTENT"`
- `"SERVER_UNAUTHORIZED"`
- `"SERVER_CERT_PROBLEM"`
- `"SERVER_FORBIDDEN"`

Erreurs liées à l'utilisateur :

- `"USER_CANCELED"`
- `"USER_SHUTDOWN"`

Divers :

- `"CRASH"`

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.InterruptReason")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
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
