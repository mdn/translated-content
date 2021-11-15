---
title: tabs.onAttached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onAttached
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onAttached
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/onAttached
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsqu'un onglet est attaché à une fenêtre, par exemple parce qu'il a été déplacé entre les fenêtres.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.tabs.onAttached.addListener(listener)
browser.tabs.onAttached.removeListener(listener)
browser.tabs.onAttached.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>CVérifiez si <code>listener</code> est enregistré pour cet événement. Renvoie <code>true</code> s'il écoute, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>tabId</code></dt>
  <dd><code>integer</code>. ID de l'onglet qui a été attaché à une nouvelle fenêtre..</dd>
 </dl>

 <dl>
  <dt><code>attachInfo</code></dt>
  <dd><a href="#attachInfo"><code>object</code></a>. ID de la nouvelle fenêtre, et index de l'onglet à l'intérieur.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Objets_supplémentaires">Objets supplémentaires</h2>

<h3 id="attachInfo">attachInfo</h3>

<dl>
 <dt><code>newWindowId</code></dt>
 <dd><code>integer</code>. ID de la nouvelle fenêtre.</dd>
 <dt><code>newPosition</code></dt>
 <dd><code>integer</code>. Position de l'index que l'onglet a dans la nouvelle fenêtre.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Écoutez les événements attachés et consignez les informations :</p>

<pre class="brush: js">function handleAttached(tabId, attachInfo) {
  console.log("Tab: " + tabId + " attached");
  console.log("New window: " + attachInfo.newWindowId);
  console.log("New index: " + attachInfo.newPosition);
}

browser.tabs.onAttached.addListener(handleAttached);</pre>

<p>{{WebExtExamples}}</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.tabs.onAttached")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/tabs#method-executeScript"><code>chrome.tabs</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json"><code>tabs.json</code></a> dans le code de Chromium code.</p>

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
