---
title: storage.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - Storage
  - WebExtensions
  - onChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsqu'un ou plusieurs éléments changent.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.storage.onChanged.addListener(callback)
browser.storage.onChanged.removeListener(listener)
browser.storage.onChanged.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions:</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si <code>listener</code> est enregistré pour cet événement. Renvoie <code>true</code>s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>changes</code></dt>
  <dd><code>object</code>. Objet décrivant le changement. Cela contient une propriété pour chaque clé qui a changé. Le nom de la propriété est le nom de la clé qui a changé, et sa valeur est un objet {{WebExtAPIRef('storage.StorageChange')}} décrivant la modification apportée à cet élément.</dd>
 </dl>

 <dl>
  <dt><code>areaName</code></dt>
  <dd><code>string</code>. Le nom de la zone de stockage (<code>"sync"</code>, <code>"local"</code> or <code>"managed"</code>) auquel les modifications ont été apportées.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.storage.onChanged")}}</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">/*
Log the storage area that changed,
then for each item changed,
log its old value and its new value.
*/
function logStorageChange(changes, area) {
  console.log("Change in storage area: " + area);

  var changedItems = Object.keys(changes);

  for (var item of changedItems) {
    console.log(item + " has changed:");
    console.log("Old value: ");
    console.log(changes[item].oldValue);
    console.log("New value: ");
    console.log(changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> dans le code de Chromium.</p>

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
