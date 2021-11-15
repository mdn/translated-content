---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
tags:
  - API
  - Add-ons
  - BookmarkTreeNode
  - Bookmarks
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
---
{{AddonSidebar()}}

Un objet de type `bookmarks.BookmarkTreeNode` représente un nœud dans l'arborescence de signets, où chaque nœud est un signet, un dossier de signet ou un séparateur. Les noeuds enfants sont classés par `index` dans leurs dossiers parents respectifs.

## Type

Un {{jsxref("object")}} avec les propriétés suivantes :

- `children` {{optional_inline}}
  - : Un {{jsxref("array")}} d'objets {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} qui représentent les enfants du noeud. La liste est classée dans la liste dans laquelle les enfants apparaissent dans l'interface utilisateur. Ce champ est omis si le noeud n'est pas un dossier.
- `dateAdded` {{optional_inline}}
  - : Un nombre représentant la date de création du noeud en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `dateGroupModified` {{optional_inline}}
  - : Un nombre représentant la date et l'heure de la dernière modification du contenu de ce dossier, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `id`
  - : Un {{jsxref("string")}} qui identifie le nœud de manière unique. Chaque ID est unique dans le profil de l'utilisateur et reste inchangé dans les redémarrages du navigateur.
- `index` {{optional_inline}}
  - : Un nombre qui représente la position zéro de ce noeud dans son dossier parent, où zéro représente la première entrée.
- `parentId` {{optional_inline}}
  - : Un {{jsxref("string")}} qui spécifie l'ID du dossier parent. Cette propriété n'est pas présente dans le noeud racine.
- `title`
  - : Un {{jsxref("string")}} qui contient le texte affiché pour le nœud dans les menus et les listes de signets.
- `type`{{optional_inline}}
  - : Un objet {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} indiquant s'il s'agit d'un signet, d'un dossier ou d'un séparateur. La valeur par défaut est `"bookmark"` sauf si l'`url` est omise, auquel cas elle est par défaut `"folder"`.
- `unmodifiable` {{optional_inline}}
  - : Un {{jsxref("string")}} comme décrit par le type  {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}}. Représente la raison pour laquelle le noeud ne peut pas être modifié. Si le nœud peut être changé, ceci est omis.
- `url` {{optional_inline}}
  - : Un {{jsxref("string")}} qui représente l'URL du signet. Si le nœud représente un dossier, cette propriété est omise.

## Compatibilité du navigateur

{{Compat("webextensions.api.bookmarks.BookmarkTreeNode", 10)}}

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
