---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - browsingData
translation_of: Mozilla/Add-ons/WebExtensions/API/browsingData
---
<div>{{AddonSidebar}}</div>

<p>Permet aux extensions d'effacer les données accumulées pendant la navigation de l'utilisateur.</p>

<p>Dans l'API <code>browsingData</code>, les données de navigations sont divisées en types :</p>

<ul>
 <li>cache du navigateur</li>
 <li>cookies</li>
 <li>Téléchargements</li>
 <li>historique</li>
 <li>stockage local</li>
 <li>données du plugin</li>
 <li>données de formulaire enregistrées</li>
 <li>Mots de passe enregistrés</li>
</ul>

<p>Vous pouvez utiliser la fonction {{WebExtAPIRef("browsingData.remove()")}} pour supprimer toute combinaison de ces types. Il existe également des fonctions dédiées pour supprimer chaque type particulier de données, comme {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} etc.</p>

<p>Toutes les fonctions <code>browsingData.remove[X]()</code> prennent un objet  {{WebExtAPIRef("browsingData.RemovalOptions")}} que vous pouvez utiliser pour contrôler deux autres aspects de la suppression des données :</p>

<ul>
 <li>dans quelle mesure remonter dans le temps pour supprimer des données</li>
 <li>qu'il s'agisse de supprimer des données uniquement de pages Web normales ou d'applications Web hébergées et de modules complémentaires. Notez que cette option n'est pas encore supportée dans Firefox.</li>
</ul>

<p>Enfin, cette API vous donne une fonction {{WebExtAPIRef("browsingData.settings()")}} qui vous donne la valeur actuelle des paramètres de la fonction "Effacer l'historique" du navigateur.</p>

<p>Pour utiliser cette API, vous devez disposer de l'<a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">API permission</a> "browseData".</p>

<h2 id="Types">Types</h2>

<dl>
 <dt>{{WebExtAPIRef("browsingData.DataTypeSet")}}</dt>
 <dd>Objet utilisé pour spécifier le type de données à supprimer: par exemple, l'historique, les téléchargements, les mots de passe, etc.</dd>
 <dt>{{WebExtAPIRef("browsingData.RemovalOptions")}}</dt>
 <dd>Objet utilisé pour spécifier le retour arrière des données, et la suppression des données ajoutées par le biais de la navigation Web normale, des applications hébergées ou des modules complémentaires.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{WebExtAPIRef("browsingData.remove()")}}</dt>
 <dd>Supprime les données de navigation pour les types de données spécifiés.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeCache()")}}</dt>
 <dd>Efface le cache du navigateur.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeCookies()")}}</dt>
 <dd>Supprime les cookies</dd>
 <dt>{{WebExtAPIRef("browsingData.removeDownloads()")}}</dt>
 <dd>Supprime la liste des fichiers téléchargés.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeFormData()")}}</dt>
 <dd>Efface les données de formulaire enregistrées.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeHistory()")}}</dt>
 <dd>Efface l'historique du navigateur.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeLocalStorage()")}}</dt>
 <dd>Efface tout <a href="/fr/docs/Web/API/Window/localStorage">stockage local</a> créé par des sites web.</dd>
 <dt>{{WebExtAPIRef("browsingData.removePasswords()")}}</dt>
 <dd>Efface les mots de passe enregistrés.</dd>
 <dt>{{WebExtAPIRef("browsingData.removePluginData()")}}</dt>
 <dd>Efface les données associées aux plugins.</dd>
 <dt>{{WebExtAPIRef("browsingData.settings()")}}</dt>
 <dd>Obtient la valeur actuelle des paramètres dans la fonction "Effacer l'historique" du navigateur</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>



<p>{{Compat("webextensions.api.browsingData", 2)}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/browsingData"><code>chrome.browsingData</code></a>.</p>

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
