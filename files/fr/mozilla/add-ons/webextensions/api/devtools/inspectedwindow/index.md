---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
tags:
  - API
  - Add-ons
  - Devtools.inspectedWindows
  - Extensions
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow
---
<div>{{AddonSidebar}}</div>

<div class="note">
<p><strong>Note :</strong> Cette page décrit les API de développement de WebExtensions telles qu'elles existent dans Firefox 54. Bien que les API soient basées sur les <a href="https://developer.chrome.com/extensions/devtools">APIs de devtools de Chrome</a>, il existe encore de nombreuses fonctionnalités qui ne sont pas encore implémentées dans Firefox et ne sont donc pas documentées ici. Pour voir les fonctionnalités actuellement manquantes, regarder  <a href="/fr/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs">Limitations des APIs devtools</a>.</p>
</div>

<p>L'API <code>devtools.inspectedWindow</code> permet à un extension de devtools d'interagir avec la fenêtre sur laquelle les outils de développement sont attachés.</p>

<p>Comme toutes les APIs de <code>devtools</code>, cette API n'est disponible que pour exécuter le code dans le document défini dans la clé <a href="/fr/Add-ons/WebExtensions/manifest.json/devtools_page">devtools_page</a> du manifest.json, où dans d'autres documents devtools créés par l'extension (tels que le document hébergé par un panneau, l'extension créée). Voir <a href="/fr/Add-ons/WebExtensions/Extending_the_developer_tools">Extension des outils de développement </a> pour plus d'informations.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId">devtools.inspectedWindow.tabId</a></code></dt>
 <dd>L'ID de la fenêtre sur laquelle sont attachés les outils du développeur.</dd>
</dl>

<h2 id="Fonctions">Fonctions</h2>

<dl>
 <dt><code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval">devtools.inspectedWindow.eval()</a></code></dt>
 <dd>Evaluez certains JavaScript dans la fenêtre de destination.</dd>
 <dt><code><a href="/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/reload">devtools.inspectedWindow.reload()</a></code></dt>
 <dd>Rechargez le document de la fenêtre destination.</dd>
</dl>

<h2 id="Comptatibilité_navigateur">Comptatibilité navigateur</h2>

<p>{{Compat("webextensions.api.devtools.inspectedWindow")}}</p>

<p>{{WebExtExamples("h2")}}</p>



<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/devtools_inspectedWindow"><code>chrome.devtools.inspectedWindow</code></a>.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>

<div class="hidden">
<p>// Copyright 2015 The Chromium Authors. All rights reserved.<br>
 //<br>
 // Redistribution and use in source and binary forms, with or without<br>
 // modification, are permitted provided that the following conditions are<br>
 // met:<br>
 //<br>
 //    * Redistributions of source code must retain the above copyright<br>
 // notice, this list of conditions and the following disclaimer.<br>
 //    * Redistributions in binary form must reproduce the above<br>
 // copyright notice, this list of conditions and the following disclaimer<br>
 // in the documentation and/or other materials provided with the<br>
 // distribution.<br>
 //    * Neither the name of Google Inc. nor the names of its<br>
 // contributors may be used to endorse or promote products derived from<br>
 // this software without specific prior written permission.<br>
 //<br>
 // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS<br>
 // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT<br>
 // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR<br>
 // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT<br>
 // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,<br>
 // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT<br>
 // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,<br>
 // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY<br>
 // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT<br>
 // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE<br>
 // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>
</div>
