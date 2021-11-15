---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - remove
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies/remove
---
<div>{{AddonSidebar()}}</div>

<p>La méthode <strong><code>remove()</code></strong> de l'API {{WebExtAPIRef("cookies")}} supprime un cookie, compte tenu de son nom et de son URL.</p>

<p>L'appel réussit uniquement si vous incluez la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permission de l'API</a> "cookies" dans votre fichier <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a>, ainsi que les <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">permissions d'hôte</a> pour l'URL indiquée dans son manifest.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var removing = browser.cookies.remove(
  details               // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>details</code></dt>
 <dd><p>Un <code>objet</code> contenant des informations permettant d'identifier le cookie à supprimer. Il contient les propriétés suivantes :</p>
 <dl>
  <dt><code>firstPartyDomain</code>{{optional_inline}}</dt>
  <dd>Une <code>chaîne</code> représentant le domaine de première partie avec lequel le cookie sera associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Voir <a href="/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie">Isolement de la première partie</a>.</dd>
  <dt><code>name</code></dt>
  <dd>Une <code>chaîne</code> représenant le nom du cookie à supprimer.</dd>
  <dt><code>storeId</code>{{optional_inline}}</dt>
  <dd>Une<code> chaîne</code> représentant l'ID du cookie store pour trouver le cookie. Si elle n'est pas spécifiée, le cookie est recherché par défaut dans le cookie store du contexte d'exécution actuel.</dd>
  <dt><code>url</code></dt>
  <dd>Une <code>chaîne</code> représentant l'URL associée au cookie. Si l'extension n'a pas de <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">permissions d'hôte</a> pour cette URL, l'appel de l'API échouera.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un objet  {{WebExtAPIRef('cookies.Cookie')}} contenant des détails sur le cookie qui a été supprimé. Si un cookie correspondant au paramètre <code>details</code> n'a pas pu être trouvé, la promesse est remplie avec <code>null</code>.  Si l'appel échoue pour une raison quelconque, la promesse sera rejetée avec un message d'erreur.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.cookies.remove")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple tente de supprimer le cookie nommé "favourite-colour", dont l'URL correspond à l'URL du document hébergé par l'onglet actuellement actif :</p>

<pre class="brush: js">function onRemoved(cookie) {
  console.log(`Removed: ${cookie}`);
}

function onError(error) {
  console.log(`Error removing cookie: ${error}`);
}

function removeCookie(tabs) {
  var removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "favourite-colour"
  });
  removing.then(onRemoved, onError);
}

var getActive = browser.tabs.query({active: true, currentWindow: true});
getActive.then(removeCookie);</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/cookies"><code>chrome.cookies</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json"><code>cookies.json</code></a> dans le code Chromium.</p>

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
