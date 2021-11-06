---
title: sessions.getRecentlyClosed()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getRecentlyClosed
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed
---
<div>{{AddonSidebar()}}</div>

<p>Renvoie un ensemble d'objets {{WebExtAPIRef("sessions.Session", "Session")}}, représentant des fenêtres et des onglets qui ont été fermés dans la session du navigation actuelle (c'est à dire l'heure écoulée depuis le démarrage du navigateur).</p>

<p>Il s'agit d'une fonction asynchrone qui renvoie une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var gettingSessions = browser.sessions.getRecentlyClosed(
  filter             // optional object
)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>filter</code>{{optional_inline}}</dt>
 <dd><code>object</code>. Un objet {{WebExtAPIRef("sessions.Filter")}} qui limite l'ensemble des sessions renvoyées.</dd>
</dl>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Promise</a></code>. Cela sera rempli avec un ensemble d'objets {{WebExtAPIRef("sessions.Session", "Session")}}, un pour chacun des derniers onglets fermés ou des fenêtres dans la session de navigation actuelle, jusqu'à  {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} ou le nombre inclus dans l'argument du filtre, le plus petit qui soit. Le tableau est donné à l'inverse de l'ordre dans lequel les onglets ou fenêtres ont été fermés, de sorte que le plus récemment fermé sera à l'index 0.</p>

<p>Si une erreur survient, la promesse sera rejetée avec un message d'erreur.</p>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.sessions.getRecentlyClosed")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code restaure la session la plus récemment fermée, qu'il s'agisse d'un onglet ou d'une fenêtre :</p>

<pre class="brush: js">function restoreMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found")
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.restore(sessionInfo.tab.sessionId);
  } else {
    browser.sessions.restore(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.browserAction.onClicked.addListener(function() {
  var gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1
  });
  gettingSessions.then(restoreMostRecent, onError);
});
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/sessions"><code>chrome.sessions</code></a>.</p>

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
