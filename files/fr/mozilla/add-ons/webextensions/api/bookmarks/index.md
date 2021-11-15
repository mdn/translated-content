---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks
---
<div>{{AddonSidebar}}</div>

<p>L’API de la <a href="/fr/docs/Mozilla/Add-ons/WebExtensions">WebExtensions</a> {{WebExtAPIRef("bookmarks")}} permet à une extension d’interagir et de manipuler le système de Bookmarking du navigateur. Vous pouvez l’utiliser pour enregistrer des marque-pages, récupérer des marque-pages existants et éditer, supprimer ou organiser des marque-pages.</p>

<p>Pour utiliser cette API, une extension doit demander la <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> « bookmarks » dans son fichier <code><a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a></code>.</p>

<p>Les extensions ne peuvent pas créer, modifier ou supprimer des signets dans le nœud racine de l'arborescence de signets. Cela provoquerait une erreur avec le message: <em>"La racine du signet ne peut pas être modifiée"</em></p>

<h2 id="Les_Types">Les Types</h2>

<dl>
 <dt>{{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}</dt>
 <dd>Représente un marque-page ou un dossier dans l'arborescence des marque-pages.</dd>
 <dt>{{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}</dt>
 <dd>Un énumérateur {{jsxref("String")}} qui décrit si un nœud de l’arbre est un marque-page, un dossier ou un séparateur.</dd>
 <dt>{{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}</dt>
 <dd>Un {{jsxref("String")}} énumère ce qui spécifie pourquoi un marque-page ou un dossier n’est pas possible.</dd>
 <dt>{{WebExtAPIRef("bookmarks.CreateDetails")}}</dt>
 <dd>Contient des informations passées à la fonction {{WebExtAPIRef("bookmarks.create()")}} lors de la création d’un nouveau marque-page.</dd>
</dl>

<h2 id="Les_fonctions">Les fonctions</h2>

<dl>
 <dt>{{WebExtAPIRef("bookmarks.create()")}}</dt>
 <dd>Créer un marque-page ou un dossier.</dd>
 <dt>{{WebExtAPIRef("bookmarks.get()")}}</dt>
 <dd>Récupère un ou plusieurs {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}s, compte tenu d’un identifiant de marque-page ou d’un ensemble d’identifiants de marque-pages.</dd>
 <dt>{{WebExtAPIRef("bookmarks.getChildren()")}}</dt>
 <dd>Récupère les enfants spécifiés {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}.</dd>
 <dt>{{WebExtAPIRef("bookmarks.getRecent()")}}</dt>
 <dd>Récupère un nombre demandé de marque-page récemment ajoutés.</dd>
 <dt>{{WebExtAPIRef("bookmarks.getSubTree()")}}</dt>
 <dd>Récupère un nombre demandé de favoris récemment ajoutés.</dd>
 <dt>{{WebExtAPIRef("bookmarks.getTree()")}}</dt>
 <dd>Récupère l’intégralité de l’arborescence des marques pages dans un tableau d’objets  {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}.</dd>
 <dt>{{WebExtAPIRef("bookmarks.move()")}}</dt>
 <dd>Déplace le {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} vers un nouvel emplacement dans l’arborescence de marque-pages.</dd>
 <dt>{{WebExtAPIRef("bookmarks.remove()")}}</dt>
 <dd>Supprime un marque page ou un dossier de marque-pages vide, en fonction de l’ID du noeud.</dd>
 <dt>{{WebExtAPIRef("bookmarks.removeTree()")}}</dt>
 <dd>Supprime de manière récursive un dossier de marque-pages ; c’est-à-dire, étant donné l’ID d’un noeud de dossier, supprime ce noeud et tous ses descendants.</dd>
 <dt>{{WebExtAPIRef("bookmarks.search()")}}</dt>
 <dd>Recherche {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} une correspondant à un ensemble de critères spécifié.</dd>
 <dt>{{WebExtAPIRef("bookmarks.update()")}}</dt>
 <dd>Met à jour le titre et/ou l’URL d’un marque-page, ou un nom de dossier de marque-pages, en fonction de l’ID d’un marque-page.</dd>
</dl>

<h2 id="Events">Events</h2>

<dl>
 <dt>{{WebExtAPIRef("bookmarks.onCreated")}}</dt>
 <dd>Déclenché lorsqu’un marque-page ou un dossier est créé.</dd>
 <dt>{{WebExtAPIRef("bookmarks.onRemoved")}}</dt>
 <dd>Déclenché lorsqu’un marque-page ou un dossier est supprimé. Lorsqu’un dossier est supprimé de manière récursive, une seule notification est envoyée pour le dossier et aucune pour son contenu.</dd>
 <dt>{{WebExtAPIRef("bookmarks.onChanged")}}</dt>
 <dd>Déclenché lorsqu’un marque-page ou un dossier change. Actuellement, seuls les changements de titre et d’URL déclenchent ce type d’événement.</dd>
 <dt>{{WebExtAPIRef("bookmarks.onMoved")}}</dt>
 <dd>Déclenché lorsqu’un marque-page ou un dossier est déplacé vers un dossier parent différent ou vers un nouveau décalage dans son dossier.</dd>
 <dt>{{WebExtAPIRef("bookmarks.onChildrenReordered")}}</dt>
 <dd>Déclenché lorsque l’utilisateur a trié les enfants d’un dossier dans l’interface utilisateur du navigateur. Ceci n’est pas déclenché par un appel {{WebExtAPIRef("bookmarks.move", "move()")}}.</dd>
 <dt>{{WebExtAPIRef("bookmarks.onImportBegan")}}</dt>
 <dd>Déclenché lorsqu’une session d’importation de marque-pages est commencée. Les observateurs coûteux doivent ignorer les {{WebExtAPIRef("bookmarks.onCreated")}} mises à jour jusqu’à ce que {{WebExtAPIRef("bookmarks.onImportEnded")}} soit déclenché. Les observateurs doivent toujours gérer d’autres notifications immédiatement.</dd>
 <dt>{{WebExtAPIRef("bookmarks.onImportEnded")}}</dt>
 <dd>Déclenché lorsqu’une session d’importation de marque-pages est terminée.</dd>
</dl>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("webextensions.api.bookmarks")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l’API Chromium <a href="https://developer.chrome.com/extensions/bookmarks"><code>chrome.bookmarks</code></a>. Cette documentation provient de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> dans le code Chromium.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
