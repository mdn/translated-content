---
title: bookmarks.onImportBegan
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
tags:
  - API
  - Add-ons
  - Bookmarks
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onImportBegan
translation_of: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsque le navigateur a commencé à importer un ensemble de signet.</p>

<p>Pendant l'importation d'un ensemble de signets, {{WebExtAPIRef("bookmarks.onCreated", "onCreated")}} peut déclencher plusieurs fois. Si votre extension écoute <code>onCreated</code>, et que l'écouteur est cher, vous devez également écouter <code>onImportBegan</code> et {{WebExtAPIRef("bookmarks.onImportEnded", "onImportEnded")}}. Lorsque vous recevez <code>onImportBegan</code>, ignorez <code>onCreated</code> jusqu'à ce que vous receviez <code>onImportEnded</code>. Vous pouvez gérer toutes les autres notifications comme d'habitude.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.bookmarks.onImportBegan.addListener(listener)
browser.bookmarks.onImportBegan.removeListener(listener)
browser.bookmarks.onImportBegan.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si <code>listener</code> est enregistré pour cet événement. Renvoie <code>true</code> s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. Il n'y a pas de paramètres.</p>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.bookmarks.onImportBegan")}}</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">function handleImportBegan() {
  console.log("Importing...");
}

function handleImportEnded() {
  console.log("...finished.");
}

function handleClick() {
  browser.bookmarks.onImportBegan.addListener(handleImportBegan);
  browser.bookmarks.onImportEnded.addListener(handleImportEnded);
}

browser.browserAction.onClicked.addListener(handleClick);
</pre>

<p>{{WebExtExamples}}</p>

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
