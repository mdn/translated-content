---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - set
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies/set
---
<div>{{AddonSidebar()}}</div>

<p>La méthode <strong><code>set()</code></strong> de l'API {{WebExtAPIRef("cookies")}} définit un cookie contenant des données précises de cookie. Cette méthode équivaut à l'émission d'un en-tête HTTP <code>Set-Cookie</code> lors d'une requête à une URL donnée.</p>

<p>L'appel réussit uniquement si vous incluez la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permission de l'API</a> "cookies" dans votre fichier <a href="/fr/Add-ons/WebExtensions/manifest.json">manifest.json</a>, ainsi que les <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">permissions d'hôte</a> pour l'URL indiquée dans son manifest. L’URL donnée a également besoin des permissions nécessaires pour créer un cookie avec les paramètres donnés.</p>

<p>C'est une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var setting = browser.cookies.set(
  details               // object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>details</code></dt>
 <dd>Un <code>objet</code> contenant les détails du cookie que vous souhaitez définir. Il peut avoir les propriétés suivantes :</dd>
 <dt><code>domain</code>{{optional_inline}}</dt>
 <dd>Une <code>chaîne</code> représentant le domaine du cookie. S’il est omis, le cookie devient un cookie hôte uniquement.</dd>
 <dt><code>expirationDate</code>{{optional_inline}}</dt>
 <dd>Un <code>nombre</code> qui représente la date d'expiration du cookie en tant que nombre de secondes écoulées depuis l'époque UNIX. S’il est omis, le cookie devient un cookie de session.</dd>
 <dt><code>firstPartyDomain</code>{{optional_inline}}</dt>
 <dd>Une <code>chaîne</code> représentant le domaine de première partie avec lequel le cookie sera associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Voir <a href="/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie">Isolement de la première partie</a>.</dd>
 <dt><code>httpOnly</code>{{optional_inline}}</dt>
 <dd>Un <code>booléen</code> qui spécifie si le cookie doit être marqué comme  HttpOnly (<code>true</code>), ou pas (false). S’il est omis, la valeur par défaut est <code>false</code>.</dd>
 <dt><code>name</code>{{optional_inline}}</dt>
 <dd>Une <code>chaîne</code> représentant le nom du cookie. S’il est omis, il est vide par défaut.</dd>
 <dt><code>path</code>{{optional_inline}}</dt>
 <dd>Une <code>chaîne</code> représentant le chemin du cookie. S’il est omis, la valeur par défaut est la partie du chemin du paramètre de l'URL.</dd>
 <dt><code>sameSite{{optional_inline}}</code></dt>
 <dd>Une valeur {{WebExtAPIRef("cookies.SameSiteStatus")}} qui indique l’état SameSite du cookie. Si omis, la valeur par défaut 0, 'no_restriction'.</dd>
 <dt><code>secure</code>{{optional_inline}}</dt>
 <dd>Un <code>booléen</code> qui spécifie si le cookie doit être marqué comme sécurisé (<code>true</code>), ou pas (false). S’il est omis, la valeur par défaut est <code>false</code>.</dd>
 <dt><code>storeId</code>{{optional_inline}}</dt>
 <dd>Une <code>chaîne</code> représentant l’ID du cookie store dans lequel défini le cookie. S’il est omiS, le cookie est défini par défaut dans le cookie store du contexte d'exécution actuel.</dd>
 <dt><code>url</code></dt>
 <dd>Une <code>chaîne</code> représentant l'URI de requête à associer au cookie. Cette valeur peut affecter les valeurs par défaut du cookie créé. Si les autorisations d'hôte pour cette URL ne sont pas spécifiées dans le fichier manifest, l’appel de la méthode échouera.</dd>
 <dt><code>value</code>{{optional_inline}}</dt>
 <dd>Une <code>chaîne</code> représentant la valeur du cookie. S’il est omis, c’est vide par défaut.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un objet  {{WebExtAPIRef('cookies.Cookie')}} contenant les détails sur le cookie qui a été défini. Si l'appel échoue pour une quelconque raison, la promesse sera rejetée avec un message d’erreur.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.cookies.set")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple définit un cookie pour le document hébergé par l'onglet actuellement actif :</p>

<pre class="brush: js">var getActive = browser.tabs.query({active: true, currentWindow: true});
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favourite-colour",
    value: "red"
  });
}
</pre>

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
