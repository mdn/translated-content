---
title: ExtensionInfo
slug: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
tags:
  - API
  - Add-ons
  - ExtensionInfo
  - Extensions
  - Reference
  - Type
  - WebExtensions
  - management
translation_of: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
---
<div>{{AddonSidebar()}}</div>

<p>Un objet <code>ExtensionInfo</code> contenant les informations sur l'extension.</p>

<h2 id="Type">Type</h2>

<p>Il s'agit d'un objet avec les propriétés suivantes :</p>

<dl>
 <dt><code>description</code></dt>
 <dd><code>string</code>. La description de l'extension, prise à partir de la clé de <a href="/fr/Add-ons/WebExtensions/manifest.json/description">description</a> du manifest.json.</dd>
 <dt><code>disabledReason</code></dt>
 <dd><code>string</code>. Si l'extension est désactivée, la raison pour laquelle il a été désactivé. L'une des "inconnnues' or "permissions_increase".</dd>
 <dt><code>enabled</code></dt>
 <dd><code>boolean</code>. Que l'extension soit activée ou pas.</dd>
 <dt><code>homepageUrl</code></dt>
 <dd><code>string</code>. L'URL de la page d'accueil de l'extension, prise en compte de la clé  <a href="/fr/Add-ons/WebExtensions/manifest.json/homepage_url">homepage_url</a> du fichier manifest.json.</dd>
 <dt><code>hostPermissions</code></dt>
 <dd><code>ensemble</code> de <code>chaîne</code>. Les <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions">permissions d'hôtes</a> de l'extension.</dd>
 <dt><code>icons</code></dt>
 <dd><p><code>array</code> of <code>object</code>. les informations sur les icônes des extensions. Un tableau d'objets, un par chaque icône. Chaque objet contient deux propriétés :</p>
 <ul>
  <li><code>size</code>: un entier représentant la largeur et la hauteur de l'icônes en pixels.</li>
  <li><code>url</code>: une chaîne contenant l'url relative de l'icône, en commençant par la racine de l'extensions.</li>
 </ul>
 </dd>
 <dt><code>id</code></dt>
 <dd><code>string</code>. l'ID de l'extension.</dd>
 <dt><code>installType</code></dt>
 <dd><p><code>string</code>. Une chaîne décriantn comme l'extension a été ajouté. Une des options suivantes :</p>
 <ul>
  <li>"admin": l'extension a été installé en raison d'une politique administrative.</li>
  <li>"development": l'extension a été installé décompressé sur le disque.</li>
  <li>"normal": l'extension a été installé normalement à partir du package d'installation.</li>
  <li>"sideload": l'extension a été installé par un autre logiciel sur l'ordinateur de l'utilisateur.</li>
  <li>"other": l'extension a été installé d'une autre manière.</li>
 </ul>
 </dd>
 <dt><code>mayDisable</code></dt>
 <dd><code>boolean</code>. Que cette extensions a été désactivé ou désinstallé par l'utilisateur.</dd>
 <dt><code>name</code></dt>
 <dd><code>string</code>. Le nom de l'extension, pris à partir de la clé <a href="/fr/Add-ons/WebExtensions/manifest.json/name">name</a> du manifest.json.</dd>
 <dt><code>offlineEnabled</code></dt>
 <dd><code>boolean</code>. Que les demandes de l'extensions soient prises en charge hors connexion.</dd>
 <dt><code>optionsUrl</code></dt>
 <dd><code>string</code>. l'URL pour la <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages">page d'options</a> de l'élément, s'il y en a un. Il s'agit d'une URL relative, à partir de la racine de l'extension.</dd>
 <dt><code>permissions</code></dt>
 <dd><code>array</code> of <code>string</code>. les <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">permissions de l'API</a> de l'extension.</dd>
 <dt><code>shortName</code></dt>
 <dd><code>string</code>. Une courte version du nom de l'extension, prise à partir de la clé  <a href="/fr/Add-ons/WebExtensions/manifest.json/short_name">short_name</a> du manifest.json.</dd>
 <dt><code>type</code></dt>
 <dd><p><code>string</code>. Chaîne décrivant le type d'extension. Ceci permet de distinguer les extensions des applications et des thèmes. Il peut prendre l'une des valeurs suivantes :</p>
 <ul>
  <li>"extension": le type d'extension la plus courante.</li>
  <li>"hosted_app"</li>
  <li>"packaged_app"</li>
  <li>"legacy_packaged_app"</li>
  <li>"theme"</li>
 </ul>
 </dd>
 <dt><code>updateUrl</code></dt>
 <dd><code>string</code>. URL pour la mise à jour de l'extension, tiré de la clé <a href="/fr/Add-ons/WebExtensions/manifest.json/applications">applications</a> de manifest.json.</dd>
 <dt><code>version</code></dt>
 <dd><code>string</code>. La version de l'extension, tiré de la clé <a href="/fr/Add-ons/WebExtensions/manifest.json/version">version</a> du manifest.json</dd>
 <dt><code>versionName</code></dt>
 <dd><code>string</code>. Le nom descriptif pour la version de l'extension, tiré de la clé  <a href="/fr/Add-ons/WebExtensions/manifest.json/version_name">version_name</a> du manifest.json.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.management.ExtensionInfo")}}</p>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/management"><code>chrome.management</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json"><code>management.json</code></a> dans le code de Chromium code.</p>

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
