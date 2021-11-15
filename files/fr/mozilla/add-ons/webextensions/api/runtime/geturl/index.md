---
title: runtime.getURL()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getURL
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - getURL
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/getURL
---
<div>{{AddonSidebar()}}</div>

<div>Etant donné un chemin relatif de <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a> à une ressource empaquetée avec l'extension, renvoyez une URL complète.</div>

<div></div>

<div>Cette fonction ne vérifie pas que la ressource existe réellement à cette URL.</div>

<div></div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.runtime.getURL(
  path // string
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>path</code></dt>
 <dd><code>string</code>. Un chemin relatif de <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a> à une ressource empaquetée avec l'extension.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p><code>string</code>. L'URL complète de la ressource.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.runtime.getURL")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Etant donné un fichier empaqueté avec l'extension "beasts/frog.html", obtenez l'URL complète comme ceci :</p>

<pre class="brush: js">var fullURL = browser.runtime.getURL("beasts/frog.html");
console.log(fullURL);
// Returns something like:
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/frog.html</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/runtime#event-onConnect"><code>chrome.runtime</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json"><code>runtime.json</code></a> dans le code de Chromium code.</p>

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
