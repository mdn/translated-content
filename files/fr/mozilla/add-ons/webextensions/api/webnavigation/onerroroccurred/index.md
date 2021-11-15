---
title: webNavigation.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onErrorOccurred
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsqu'une erreur se produit et que la navigation est annulée. Cela peut se produire si une erreur réseau s'est produite ou si l'utilisateur a interrompu la navigation.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.webNavigation.onErrorOccurred.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onErrorOccurred.removeListener(listener)
browser.webNavigation.onErrorOccurred.hasListener(listener)
</pre>

<p>Les événements ont trois fonctions :</p>

<dl>
 <dt><code>addListener(callback)</code></dt>
 <dd>Ajoute un écouteur à cet événement.</dd>
 <dt><code>removeListener(listener)</code></dt>
 <dd>Arrêtez d'écouter cet événement. L'argument <code>listener</code> est l'écouteur à supprimer.</dd>
 <dt><code>hasListener(listener)</code></dt>
 <dd>Vérifiez si <code>listener</code> est enregistré pour cet événement. Renvoie <code>true</code> s'il est écouté, sinon <code>false</code>.</dd>
</dl>

<h2 id="Syntaxe_addListener">Syntaxe addListener</h2>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants:</p>

 <dl>
  <dt><code>details</code></dt>
  <dd><a href="#details"><code>object</code></a>. Détails sur l'événement de navigation.</dd>
 </dl>
 </dd>
 <dt><code>filter</code>{{optional_inline}}</dt>
 <dd>
 <p><code>object</code>. Un objet contenant une seule propriété <code>url</code>, qui est un <code>tableau</code> d'objets  {{WebExtAPIRef("events.UrlFilter")}}. Si vous incluez ce paramètre, l'événement se déclenchera uniquement pour les transitions vers les URL qui correspondent à au moins un <code>UrlFilter</code> dans un tableau. Si vous omettez ce paramètre, l'événement se déclenchera pour toutes les transitions.</p>
 </dd>
</dl>

<h2 id="Objets_supplémentaires">Objets supplémentaires</h2>

<h3 id="details">details</h3>

<dl>
 <dt><code>tabId</code></dt>
 <dd><code>integer</code>. L'ID de l'onglet dans lequel la navigation se passait.</dd>
 <dt><code>url</code></dt>
 <dd><code>string</code>. L'URL à laquelle le cadre donné naviguait.</dd>
 <dt><code>processId</code></dt>
 <dd><code>integer</code>. L'ID du processus dans lequel cet onglet est rendu.</dd>
 <dt><code>frameId</code></dt>
 <dd><code>integer</code>. Cadre dans lequel la navigation se passait. 0 indique que la navigation s'est déroulée dans le contexte de navigation de niveau supérieur de l'onglet,et non dans un <a href="/fr/docs/Web/HTML/Element/iframe">iframe</a> imbriqué. Une valeur positive indique que la navigation s'est déroulée dans un iframe imbriqué. Les ID de cadre sont uniques pour un onglet et un processus donnés.</dd>
 <dt><code>timeStamp</code></dt>
 <dd><code>number</code>. L'heure à laquelle l'erreur s'est produite, en <a href="https://en.wikipedia.org/wiki/Unix_time">milliseconde depuis l'époque</a>.</dd>
 <dt><code>error</code></dt>
 <dd><code>string</code>. Le code d'erreur. Il s'agit d'un code d'erreur interne qui n'est pas garanti pour rester identique ou être cohérent d'un navigateur à l'autre.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webNavigation.onErrorOccurred")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Logs les URL cibles de <code>onErrorOccurred</code>, si le nom d'hôte de l'URL cible contient  "example.com" ou commence par "developer".</p>

<pre class="brush: js">var filter = {
  url:
  [
    {hostContains: "example.com"},
    {hostPrefix: "developer"}
  ]
}

function logOnErrorOccurred(details) {
  console.log("onErrorOccurred: " + details.url);
  console.log(details.error);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/webNavigation"><code>chrome.webNavigation</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json"><code>web_navigation.json</code></a> dans le code de Chromium code.</p>

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
