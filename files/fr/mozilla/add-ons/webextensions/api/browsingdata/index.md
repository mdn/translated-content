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
{{AddonSidebar}}

Permet aux extensions d'effacer les données accumulées pendant la navigation de l'utilisateur.

Dans l'API `browsingData`, les données de navigations sont divisées en types :

- cache du navigateur
- cookies
- Téléchargements
- historique
- stockage local
- données du plugin
- données de formulaire enregistrées
- Mots de passe enregistrés

Vous pouvez utiliser la fonction {{WebExtAPIRef("browsingData.remove()")}} pour supprimer toute combinaison de ces types. Il existe également des fonctions dédiées pour supprimer chaque type particulier de données, comme {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} etc.

Toutes les fonctions `browsingData.remove[X]()` prennent un objet  {{WebExtAPIRef("browsingData.RemovalOptions")}} que vous pouvez utiliser pour contrôler deux autres aspects de la suppression des données :

- dans quelle mesure remonter dans le temps pour supprimer des données
- qu'il s'agisse de supprimer des données uniquement de pages Web normales ou d'applications Web hébergées et de modules complémentaires. Notez que cette option n'est pas encore supportée dans Firefox.

Enfin, cette API vous donne une fonction {{WebExtAPIRef("browsingData.settings()")}} qui vous donne la valeur actuelle des paramètres de la fonction "Effacer l'historique" du navigateur.

Pour utiliser cette API, vous devez disposer de l'[API permission](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "browseData".

## Types

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : Objet utilisé pour spécifier le type de données à supprimer: par exemple, l'historique, les téléchargements, les mots de passe, etc.
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : Objet utilisé pour spécifier le retour arrière des données, et la suppression des données ajoutées par le biais de la navigation Web normale, des applications hébergées ou des modules complémentaires.

## Méthodes

- {{WebExtAPIRef("browsingData.remove()")}}
  - : Supprime les données de navigation pour les types de données spécifiés.
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : Efface le cache du navigateur.
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : Supprime les cookies
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : Supprime la liste des fichiers téléchargés.
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : Efface les données de formulaire enregistrées.
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : Efface l'historique du navigateur.
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : Efface tout [stockage local](/fr/docs/Web/API/Window/localStorage) créé par des sites web.
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : Efface les mots de passe enregistrés.
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : Efface les données associées aux plugins.
- {{WebExtAPIRef("browsingData.settings()")}}
  - : Obtient la valeur actuelle des paramètres dans la fonction "Effacer l'historique" du navigateur

## Compatibilité du navigateur

{{Compat("webextensions.api.browsingData", 2)}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browsingData`](https://developer.chrome.com/extensions/browsingData).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
