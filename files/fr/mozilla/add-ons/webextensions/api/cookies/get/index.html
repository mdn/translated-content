---
title: cookies.get()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/get
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies/get
---
<div>{{AddonSidebar()}}</div>

<p>La méthode <strong><code>get()</code></strong> de l'API {{WebExtAPIRef("cookies")}} récupère les informations d'un seul cookie, par son nom et son URL.</p>

<p>Si plus d'un cookie portant le même nom existent pour une URL donnée, celui contenant le chemin le plus long sera retourné. Pour les cookies ayant la même longueur de chemin, le plus ancien cookie sera retourné. Si aucun cookie ne correspond alors <code>null</code> est retourné.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var getting = browser.cookies.get(
  details                // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>details</code></dt>
 <dd><p>Un <code>objet</code> contenant les informations pouvant être utilisées pour récupérer un cookie. Il peut inclure les propriétés suivantes :</p>
 <dl>
  <dt><code>firstPartyDomain</code>{{optional_inline}}</dt>
  <dd>Une <code>chaîne</code> représentant le domaine de première partie avec lequel le cookie à récupérer est associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Voir <a href="/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie">Isolement de la première partie</a>.</dd>
  <dt><code>name</code></dt>
  <dd>Une <code>chaîne</code> représentant le nom du cookie à récupérer.</dd>
  <dt><code>storeId</code>{{optional_inline}}</dt>
  <dd>Une <code>chaîne</code> représentant l'ID du {{WebExtAPIRef("cookies.CookieStore", "cookie store")}} dans lequel rechercher le cookie (tel que renvoyé par  {{WebExtAPIRef("cookies.getAllCookieStores()")}}). Par défault, le cookie store du contexte d'exécution actuel sera utilisé.</dd>
  <dt><code>url</code></dt>
  <dd>Une <code>chaîne</code> représentant l'URL avec laquelle le cookie à récupérer est associé. Cet argument peut être une URL complète, auquel cas toute donnée suivant le chemin d'URL (par exemple la chaîne de requête) est simplement ignorée. Si les  <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions"> permissions d'hôte</a> pour cette URL ne sont pas spécifiées dans le <a href="/fr/Add-ons/WebExtensions/manifest.json">fichier manifeste</a> de l'extension, l'appel de l'API échouera.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un objet {{WebExtAPIRef('cookies.Cookie', 'Cookie')}} contenant des détails sur le cookie, ou <code>null</code> si le cookie n'a pas été trouvé.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.cookies.get")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple tente d'obtenir le cookie nommé "favourite-colour", associé à l'URL de l'onglet actuellement actif :</p>

<pre class="brush: js">function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  var getting = browser.cookies.get({
    url: tabs[0].url,
    name: "favourite-colour"
  });
  getting.then(logCookie);
}

var getActive = browser.tabs.query({
  active: true,
  currentWindow: true
});
getActive.then(getCookie);</pre>

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
