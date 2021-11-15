---
title: webNavigation.onCreatedNavigationTarget
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onCreatedNavigationTarget
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
---
<div>{{AddonSidebar()}}</div>

<p>Lancé lorsqu'une nouvelle fenêtre ou un nouvel onglet dans une fenêtre existante est créé pour héberger la cible d'une navigation. Par exemple, cet événement est envoyé lorsque :</p>

<ul>
 <li>l'utilisateur ouvre un lien dans un nouvel onglet ou une nouvelle fenêtre</li>
 <li>une page Web charge une ressource dans un nouvel onglet ou une nouvelle fenêtre en utilisant <code><a href="/fr/docs/Web/API/Window/open">window.open()</a></code> (mais notez que l'événement n'est pas envoyé si le bloqueur de popup du navigateur bloque le chargement).</li>
</ul>

<p>L'événement n'est pas envoyé si un onglet ou une fenêtre est créé sans cible de navigation (par exemple, si l'utilisateur ouvre un nouvel onglet en appuyant sur Ctrl+T).</p>

<p>Si cet événement est déclenché, il sera déclenché avant  {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">browser.webNavigation.onCreatedNavigationTarget.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCreatedNavigationTarget.removeListener(listener)
browser.webNavigation.onCreatedNavigationTarget.hasListener(listener)
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

<h2 id="addListener_syntax">addListener syntax</h2>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>
 <p>Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :</p>

 <dl>
  <dt><code>details</code></dt>
  <dd><a href="#details"><code>object</code></a>. Détails sur l'événement de navigation Voir les <a href="#details">détails</a> ci-dessous.</dd>
 </dl>
 </dd>
 <dt><code>filter</code>{{optional_inline}}</dt>
 <dd>
 <p><code>object</code>. Un objet contenant une seule propriété <code>url</code>, qui est un <code>Array</code> d'objets {{WebExtAPIRef("events.UrlFilter")}}.  Si vous incluez ce paramètre, l'événement se déclenchera uniquement pour les transitions vers les URL qui correspondent à au moins un <code>UrlFilter</code> dans le tableau. Si vous omettez ce paramètre, l'événement se déclenchera pour toutes les transitions. Notez que le <code>filtre</code>n'est pas supporté dans Firefox.</p>
 </dd>
</dl>

<h2 id="Objets_supplémentaires">Objets supplémentaires</h2>

<h3 id="détails">détails</h3>

<dl>
 <dt><code>sourceFrameId</code></dt>
 <dd><code>integer</code>. ID de l'image à partir de laquelle la navigation est initiée. 0 indique que le cadre est le contexte de navigation de niveau supérieur de l'onglet, et non un <a href="/fr/docs/Web/HTML/Element/iframe">iframe</a> imbriqué. Une valeur positive indique que la navigation est initiée à partir d'un iframe imbriqué. Les ID de cadre sont uniques pour un onglet et un processus donnés.</dd>
 <dt><code>sourceProcessId</code></dt>
 <dd><code>integer</code>. L'ID du processus à partir duquel la navigation est initiée.</dd>
 <dt><code>sourceTabId</code></dt>
 <dd><code>integer</code>. L'ID de l'onglet à partir duquel la navigation est initiée. Par exemple, si l'utilisateur ouvre un lien dans un nouvel onglet, ce sera l'identifiant de l'onglet contenant le lien.</dd>
 <dt><code>tabId</code></dt>
 <dd>integer: L'ID de l'onglet nouvellement créé.</dd>
 <dt><code>timeStamp</code></dt>
 <dd><code>number</code>. L'heure à laquelle le navigateur a créé la cible de navigation, en <a href="https://en.wikipedia.org/wiki/Unix_time">millisecondes depuis l'époque</a>.</dd>
 <dt><code>url</code></dt>
 <dd><code>string</code>. L'URL qui sera chargée dans le nouvel onglet.</dd>
 <dt><code>windowId</code></dt>
 <dd>number. L'ID de la fenêtre dans laquelle le nouvel onglet est créé.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.webNavigation.onCreatedNavigationTarget")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Logs l'URL cible, l'ID de la table source et l'ID de la trame source pour <code>onCreatedNavigationTarget</code>, si le nom d'hôte de la cible contient "example.com" ou commence par "developer".</p>

<pre class="brush: js">var filter = {
  url:
  [
    {hostContains: "example.com"},
    {hostPrefix: "developer"}
  ]
}

function logOnCreatedNavigationTarget(details) {
  console.log("onCreatedNavigationTarget: " + details.url);
  console.log(details.sourceTabId);
  console.log(details.sourceFrameId);
}

browser.webNavigation.onCreatedNavigationTarget.addListener(logOnCreatedNavigationTarget, filter);
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
