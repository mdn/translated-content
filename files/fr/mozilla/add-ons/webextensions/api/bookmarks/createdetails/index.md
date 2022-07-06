---
title: bookmarks.CreateDetails
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
tags:
  - API
  - Add-ons
  - Bookmarks
  - CreateDetails
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
---
{{AddonSidebar()}}

Le type `CreateDetails` est utilisé pour décrire les propriétés d'un nouveau, d'un signet, d'un dossier de signets ou d'un séparateur lors de l'appel de la méthode {{WebExtAPIRef("bookmarks.create()")}}.

## Type

Un {{jsxref("object")}} contenant une combinaison des champs suivants :

- `index` {{optional_inline}}
  - : Un entier {{jsxref("Number")}} qui spécifie la position à laquelle placer le nouveau signet sous son parent. Une valeur de 0 le placera en haut de la liste.
- `parentId` {{optional_inline}}
  - : Un {{jsxref("string")}} qui indique l'ID du dossier parent dans lequel placer le nouveau signet ou dossier de signets. Sur Chrome et Firefox, la valeur par défaut est le dossier "Autres signets" du menu Signets.
- `title` {{optional_inline}}
  - : Un {{jsxref("string")}} qui spécifie le titre du signet ou le nom du dossier à créer. Si ce n'est pas spécifié, le titre est `""`.
- `type`{{optional_inline}}
  - : Un objet {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}indiquant s'il s'agit d'un signet, d'un dossier ou d'un séparateur. La valeur par défaut est `"bookmark"` sauf si l'`url` est omise, auquel cas elle est par défaut `"folder"`.
- `url` {{optional_inline}}
  - : `string`. Un {{jsxref("string")}} qui spécifie l'URL de la page à mettre en signet. Si ceci est omis ou est `null`, un dossier est créé à la place d'un signet.

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.CreateDetails", 10)}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks). Cette documentation provient de  [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) dans le code Chromium.
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
