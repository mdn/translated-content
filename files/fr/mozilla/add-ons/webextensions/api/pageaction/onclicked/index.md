---
title: pageAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onCliecked
  - pageAction
translation_of: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
---
<div>{{AddonSidebar}}</div>

<p>Lancé quand l'icône de la page action est cliquée. Cet événement ne se déclenchera pas si l'action de la page comporte une fenêtre contextuelle.</p>

<p>Pour définir une action de clic droit, utilisez l'API {{WebExtAPIRef('contextMenus')}} avec l'élément "page_action" {{WebExtAPIRef('contextMenus/ContextType', 'context type', '', 'nocode')}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.pageAction.onClicked.addListener(listener)
browser.pageAction.onClicked.removeListener(listener)
browser.pageAction.onClicked.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez l'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifie si un <code>listener</code> est enregistré pour cet événement. Retourne <code>true</code> s'il écoute, <code>false</code> sinon.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Une fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>tab</code></dt>
  <dd>Un objet {{WebExtAPIRef('tabs.Tab')}} représentant l'onglet dont l'action de la page a été cliquée.</dd>
 </dl>
 </dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.pageAction.onClicked")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Lorsque l'utilisateur clique sur l'action de la page, masquez-là et naviguez dans l'onglet actif pour "<a href="http://chilloutandwatchsomecatgifs.com/">http://chilloutandwatchsomecatgifs.com/</a>" :</p>

<pre class="brush: js">var CATGIFS = "http://chilloutandwatchsomecatgifs.com/";

browser.pageAction.onClicked.addListener((tab) =&gt; {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({url: CATGIFS});
});

browser.pageAction.onClicked.addListener(function () {
});</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/pageAction"><code>chrome.pageAction</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json"><code>page_action.json</code></a> dans le code de Chromium code.</p>

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
