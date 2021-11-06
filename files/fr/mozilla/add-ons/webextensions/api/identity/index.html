---
title: identity
slug: Mozilla/Add-ons/WebExtensions/API/identity
tags:
  - API
  - Add-ons
  - Extensions
  - Identity
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/identity
---
<div>{{AddonSidebar}}</div>

<p>Utilisez l'API d'identité pour obtenir un code d'autorisation ou un jeton d'accès <a href="https://oauth.net/2/">OAuth2</a>, qu'une extension peut ensuite utiliser pour accéder aux données utilisateur d'un service prenant en charge l'accès à OAuth2 (tel qu'un compte Google ou Facebook).</p>

<p>Les détails du fonctionnement du flux OAuth2 diffèrent d'un fournisseur de services à l'autre. Pour utiliser cette API avec un fournisseur de services particulier, vous devez consulter leur documentation. Par exemple :</p>

<ul>
 <li><a href="https://developers.google.com/identity/protocols/OAuth2UserAgent">https://developers.google.com/identity/protocols/OAuth2UserAgent</a></li>
 <li><a href="https://developer.github.com/v3/oauth/">https://developer.github.com/v3/oauth/</a></li>
</ul>

<p>L'API d'identité fournit la fonction {{WebExtAPIRef("identity.launchWebAuthFlow()")}}. Cela authentifie l'utilisateur avec le service, si nécessaire, et demande à l'utilisateur d'autoriser l'extension à accéder aux données, si nécessaire. La fonction se termine par un jeton d'accès ou un code d'autorisation, selon le fournisseur.</p>

<p>L'extension termine alors le flux OAuth2 pour obtenir un jeton d'accès validé, et peut ensuite l'utiliser dans les requêtes HTTP pour accéder aux données de l'utilisateur en fonction de l'autorisation donnée par l'utilisateur.</p>

<p>Pour utiliser cette API, vous devez posséder la <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permission de l'API </a>"identity"</p>

<h2 id="Installer">Installer</h2>

<p>Il y a une certaine configuration que vous devez faire avant de publier votre extension.</p>

<h3 id="Obtenir_l'URL_de_redirection">Obtenir l'URL de redirection</h3>

<p>L'<a href="https://www.oauth.com/oauth2-servers/redirect-uris/">URL de redirection</a> représente le point final de {{WebExtAPIRef("identity.launchWebAuthFlow()")}}, dans lequel le jeton d'accès ou le code d'autorisation est remis à l'extension..</p>

<p>Vous pouvez obtenir une URL de redirection en appelant {{WebExtAPIRef("identity.getRedirectURL()")}}. Cette fonction dérive une URL de redirection à partir de l'ID du module, donc si vous voulez l'utiliser, vous devez probablement définir explicitement l'ID de votre module en utilisant la clé des <code><a href="/fr/Add-ons/WebExtensions/manifest.json/applications">applications</a></code> (sinon, chaque fois que vous <a href="/fr/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">installez temporairement le module complémentaire</a>, vous obtiendrez une URL de redirection différente).</p>

<p>Vous n'avez pas besoin d'utiliser l'URL de redirection retournée par  <code>identity.getRedirectURL()</code>: vous pouvez fournir la vôtre, et cela peut être tout ce que le service redirigera. Cependant, il devrait utiliser un domaine que vous contrôlez.</p>

<p>Vous utiliserez l'URL de redirection à deux endroits :</p>

<ul>
 <li>Fournissez-le lors de l'enregistrement de votre extension en tant que client OAuth2</li>
 <li>Transmettez-le dans <code>identity.launchWebAuthFlow()</code>, en tant que paramètre d'URL ajouté à l'argument <code>url</code> de cette fonction.</li>
</ul>

<h3 id="Enregistrement_de_votre_extension">Enregistrement de votre extension</h3>

<p>Avant de pouvoir utiliser OAuth2 avec un fournisseur de services, vous devez enregistrer l'extension auprès du fournisseur en tant que client OAuth2.</p>

<p>Cela aura tendance à être spécifique au fournisseur de services, mais en général cela signifie créer une entrée pour votre extension sur le site Web du fournisseur. Dans ce processus, vous fournirez votre URL de redirection, et recevrez un identifiant de client (et parfois aussi un secret). Vous devrez passer les deux dans  {{WebExtAPIRef("identity.launchWebAuthFlow()")}}.</p>

<h2 id="Fonctions">Fonctions</h2>

<dl>
 <dt>{{WebExtAPIRef("identity.getRedirectURL()")}}</dt>
 <dd>Obtient l'URL de redirection.</dd>
 <dt>{{WebExtAPIRef("identity.launchWebAuthFlow()")}}</dt>
 <dd>Lancement WAF.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.identity")}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/identity"><code>chrome.identity</code></a>.</p>

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
