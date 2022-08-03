---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - insertCSS
  - onglets
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
---
{{AddonSidebar()}}

Injecter du code CSS dans une page web.

Pour utiliser cette API vous devez avoir la permission "[host permission](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)" ou utiliser la permission "[activeTab permission](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission)".

Vous ne pouvez injecter du CSS que dans des pages dont l'URL peut être exprimée en utilisant un [motif de correspondance](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns),  ce qui signifie que son schéma doit être "http", "https", "file", "ftp". Cela signifie que vous ne pouvez pas injecter de CSS dans les pages intégrées du navigateur, telles que about:debugging, about:addons, ou la page qui s'ouvre lorsque vous ouvrez un nouvel onglet vide.

> **Note :** Firefox résout les URL dans les fichiers CSS injectés par rapport au fichier CSS lui-même, plutôt qu'à la page dans laquelle il est injecté.

Le CSS inséré peut être retiré à nouveau en appelant  {{WebExtAPIRef("tabs.removeCSS()")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) (sur Firefox seulement).

## Syntaxe

```js
var inserting = browser.tabs.insertCSS(
  tabId,           // optional integer
  details          // object
)
```

### Paramètres

- `tabId` {{optional_inline}}
  - : `integer`. L'ID de l'onglet dans lequel insérer le CSS. Par défaut à l'onglet actif de la fenêtre en cours.
- `details`

  - : Un objet décrivant le CSS à insérer. Il contient les propriétés suivantes :

    - `allFrames`{{optional_inline}}
      - : `boolean`. Si `true`, le CSS sera injecté dans toutes les images de la page en cours. Si c'est `false`, CSS est seulement injecté dans le cadre supérieur. Par défaut à `false`.
    - `code`{{optional_inline}}
      - : `string`. Code à injecter, sous la forme d'une chaîne de texte.
    - `cssOrigin`{{optional_inline}}
      - : `string`. Cela peut prendre l'une des deux valeurs suivantes: "utilisateur", pour ajouter le CSS en tant que feuille de style utilisateur, ou "auteur" pour l'ajouter en tant que feuille de style auteur. Spécifier "utilisateur" vous permet d'empêcher les sites Web de surcharger le CSS que vous insérez: voir [la commande en cascade](/fr/docs/Web/CSS/Cascade#Cascading_order). Si cette option est omise, le CSS est ajouté en tant que feuille de style auteur.
    - `file`{{optional_inline}}
      - : `string`. Chemin d'accès à un fichier contenant le code à injecter. Dans Firefox, les URL relatives sont résolues par rapport à l'URL de la page en cours. Dans Chrome, ces URL sont résolues par rapport à l'URL de base de l'extension. Pour travailler avec plusieurs navigateurs, vous pouvez spécifier le chemin comme une URL absolue, en commençant à la racine de l'extension, comme ceci : `"/path/to/stylesheet.css"`.
    - `frameId`{{optional_inline}}
      - : `integer`. Le cadre où le CSS doit être injecté. La valeur par défaut est `0` (l'image de niveau supérieur).
    - `matchAboutBlank`{{optional_inline}}
      - : `boolean`. Si`true`, le code sera injecté dans les cadres "about:blank" et "about:srcdoc" intégrés si votre extension a accès à leur document parent. Le code ne peut pas être inséré au niveau supérieur about: frames. Par défaut à `false`.
    - `runAt`{{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Le plus tôt que le code sera injecté dans l'onglet. Par défaut à "document_idle".

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui sera remplie sans arguments lorsque tous les CSS ont été insérés. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Cet exemple s'insère dans l'onglet CSS actif qui provient d'une chaîne.

```js
var css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = browser.tabs.insertCSS({code: css});
  insertingCSS.then(null, onError);
});
```

Cet exemple insère CSS qui est chargé à partir d'un fichier empaqueté avec l'extension. Le CSS est inséré dans l'onglet dont l'identifiant est 2 :

```js
browser.browserAction.onClicked.addListener(() => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = browser.tabs.insertCSS(2, {file: "content-style.css"});
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.insertCSS")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
