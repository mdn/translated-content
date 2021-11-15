---
title: devtools.panels.ExtensionPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel
---
<div>{{AddonSidebar()}}</div>

<p>Une <code>ExtensionPanel</code> représente un panneau ajouté aux devtools. C'est la résolution de la <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> renvoyé par <code><a href="/fr/Add-ons/WebExtensions/API/devtools.panels/create">browser.devtools.panels.create()</a></code>.</p>

<h2 id="Type">Type</h2>

<p>Les valeurs de ce type sont des objets. Définissez deux événements, <code>onShown</code> et <code>onHidden</code>.</p>

<ul>
 <li><code>onShown</code> est émis lorsque le panneau est affiché dans les devtools (par exemple, quand l'utilisateur a cliqué sur le panneau dans la fenêtre des  devtools).</li>
 <li><code>onHidden</code> est émis lorsque le panneau est caché (par exemple, quand l'utilisateur a basculé sur un onglet différent dans la fenêtre devtools).</li>
</ul>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.devtools.panels.ExtensionPanel")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Ce code crée un nouveau panneau, puis ajoute des gestionnaires pour ces événements <code>onShown</code> et <code>onHidden</code>.</p>

<pre class="brush: js">function handleShown(e) {
  console.log(e);
  console.log("panel is being shown");
}

function handleHidden(e) {
  console.log(e);
  console.log("panel is being hidden");
}

browser.devtools.panels.create(
  "My Panel",                 // title
  "icons/star.png",           // icon
  "devtools/panel/panel.html" // content
).then((newPanel) =&gt; {
  newPanel.onShown.addListener(handleShown);
  newPanel.onHidden.addListener(handleHidden);
});</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/devtools_panels"><code>chrome.devtools.panels</code></a>.</p>

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
