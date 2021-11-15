---
title: windows.get()
slug: Mozilla/Add-ons/WebExtensions/API/windows/get
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Référence(2)
  - WebExtensions
  - Windows
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/get
---
<div>{{AddonSidebar()}}</div>

<p>Obtient les détails sur une fenêtre, compte tenu de son identifiant. Les détails sont transmis à un rappel.</p>

<p>Il s'agit d'une fonction asynchrone qui renvoit une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var getting = browser.windows.get(
  windowId,              // integer
  getInfo                // optional object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>windowId</code></dt>
 <dd><code>integer</code>. L'ID de l'objet de fenêtre souhaité est retourné.</dd>
 <dt><code>getInfo</code>{{optional_inline}}</dt>
 <dd><p><code>object</code>. Contient des options pour filtrer le type de fenêtre.</p>
 <dl>
  <dt><code>populate</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. Si c'est vrai, l'objet {{WebExtAPIRef('windows.Window')}} aura une propriété de tabulation qui contient une liste d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les onglets ouverts dans la fenêtre. Les objets Tab ne contiennent que les propriétés <code>url</code>, <code>title</code> et <code>favIconUrl</code>  i le fichier manifeste de l'extension comprend la permission <code>"tabs"</code>.</dd>
  <dt><code>windowTypes</code>{{optional_inline}}</dt>
  <dd><code>Ensemble d'objets</code> {{WebExtAPIRef('windows.WindowType')}}. Si défini, le retour de {{WebExtAPIRef('windows.Window')}} sera filtré en fonction de son type. Si désactivé, le filtre par défaut est réglé sur <code>['normal', 'panel', 'popup']</code>, avec des types de fenêtres <code>'panel'</code> qui sont limités aux propres fenêtres de l'extension.</dd>
 </dl>
 </dd>
</dl>

<div class="note"><p><strong>Note :</strong></p>

<p>Si fourni, le composant <code>windowTypes</code> de <code>getInfo</code> est ignoré. L'utilisation de  <code>windowTypes</code> a été dépréciée à partir de Firefox 62.</p>
</div>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code> qui sera remplie avec un objet {{WebExtAPIRef('windows.Window')}} contenant les détails de la fenêtre. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.windows.get",2)}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Cet exemple obtient la fenêtre actuelle et enregistre les URL des onglets qu'il contient. Notez que vous aurez besoin des <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permission</a> "onglets" pour accéder aux URL des onglets.</p>

<div class="note">
<p><strong>Note :</strong> Cet exemple est un peu irréaliste: dans cette situation, vous utiliserez probablement  {{WebExtAPIRef("windows.getCurrent()")}}.</p>
</div>

<pre class="brush: js">function logTabs(windowInfo) {
  for (tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) =&gt; {
  var getting = browser.windows.get(tab.windowId, {populate: true});
  getting.then(logTabs, onError);
});
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API de Chromnium <a href="https://developer.chrome.com/extensions/windows"><code>chrome.windows</code></a>. Cette documentation provient de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json"><code>windows.json</code></a> dans le code de Chromium.</p>

<p>Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.</p>
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
