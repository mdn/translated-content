---
title: bookmarks.getSubTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
tags:
  - API
  - Add-ons
  - Bookmarks
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getSubTree
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
---
<div>{{AddonSidebar()}}</div>

<p>La méthode <strong><code>bookmarks.getSubTree()</code></strong> récupère de façon asynchrone un {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}, étant donné son ID.</p>

<p>Si l'élément est un dossier, vous pouvez accéder à tous ses descendants de manière récursive en utilisant sa propriété <code>children</code> et la propriété <code>children</code> de ses descendants, s'ils sont eux-mêmes des dossiers.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var gettingSubTree = browser.bookmarks.getSubTree(
  id                     // string
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>id</code></dt>
 <dd>Un {{jsxref("string")}} spécifiant l'ID de la racine du sous-arbre à récupérer.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un tableau contenant un objet unique, un objet {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}, représentant l'élément avec l'ID donné.Si un nœud correspondant à <code>id</code> n'a pas pu être trouvé, la promesse sera rejetée avec un message d'erreur.</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple imprime récursivement le sous-arbre sous un noeud donné :</p>

<pre class="brush: js">function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(makeIndent(indent) + "Folder: " + bookmarkItem.id);
    indent++;
  }
  if (bookmarkItem.children) {
    for (var child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
}

function logSubTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var subTreeID = "root_____";

var gettingSubTree = browser.bookmarks.getSubTree(subTreeID);
gettingSubTree.then(logSubTree, onRejected);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.bookmarks.getSubTree")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/bookmarks"><code>chrome.bookmarks</code></a>. Cette documentation provient de  <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json"><code>bookmarks.json</code></a> dans le code Chromium.</p>

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
