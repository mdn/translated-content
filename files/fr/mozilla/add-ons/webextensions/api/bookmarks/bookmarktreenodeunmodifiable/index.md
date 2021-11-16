---
title: bookmarks.BookmarkTreeNodeUnmodifiable
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable
tags:
  - API
  - Add-ons
  - BookmarkTreeNodeUnmodifiable
  - Bookmarks
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable
---
{{AddonSidebar()}}

Un type **`bookmarks.BookmarkTreeNodeUnmodifiable`** est utilisé pour indiquer la raison pour laquelle un nœud de l'arborescence de signets (où chaque nœud est un signet ou un dossier de signets) ne peut pas être modifié. Ceci est utilisé comme valeur du champ {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "bookmarks.BookmarkTreeNode.unmodifiable", "unmodifiable")}} sur les nœuds de signets.

## Type

`bookmarks.BookmarkTreeNodeUnmodifiable` est un {{jsxref("string")}} qui ne peut actuellement avoir qu'une seule valeur : `"managed"`. Cela indique que le nœud de signet a été configuré par un administrateur ou par le dépositaire d'un utilisateur supervisé (tel qu'un parent, dans le cas des contrôles parentaux).

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.BookmarkTreeNodeUnmodifiable")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks). Cette documentation provient de  [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) dans le code Chromium.
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
