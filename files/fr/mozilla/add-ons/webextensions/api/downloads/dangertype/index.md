---
title: downloads.DangerType
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DangerType
tags:
  - API
  - Add-ons
  - DangerType
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/DangerType
---
{{AddonSidebar()}}

Le type `DangerType` de l'API {{WebExtAPIRef("downloads")}} définit un ensemble de raisons possibles pour lesquelles un fichier téléchargeable peut être considéré comme dangereux..

Une propriété de `danger` {{WebExtAPIRef('downloads.DownloadItem')}} contiendra une chaîne tirée des valeurs définies dans ce type.

> **Note :** Ces constantes de chaîne ne changeront jamais, mais l'ensemble de DangerTypes peut changer.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont :

- `file`
  - : Le nom de fichier du téléchargement est suspect.
- `url`
  - : L'URL du téléchargement est connue pour être malveillante.
- `content`
  - : Le fichier téléchargé est connu pour être malveillant.
- `uncommon`
  - : L'URL du téléchargement n'est pas généralement téléchargée.
- `host`
  - : Le téléchargement provenait d'un hôte connu pour distribuer des binaires malveillants.
- `unwanted`
  - : Le téléchargement est potentiellement indésirable ou dangereux..
- `safe`
  - : Le téléchargement ne présente aucun danger connu pour l'ordinateur de l'utilisateur.
- `accepted`
  - : L'utilisateur a accepté le téléchargement dangereux.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.DangerType")}}

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
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIEen-S, INCLUDING, BUT NOT
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
