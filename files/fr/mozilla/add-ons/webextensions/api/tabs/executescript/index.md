---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - executeScript
  - onglets
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
---
{{AddonSidebar()}}

Injecte du code JavaScript dans une page.

Vous pouvez injecter du code dans des pages dont l'URL peut être exprimée à l'aide d'un [modèle de correspondance](/fr/Add-ons/WebExtensions/Match_patterns)&nbsp;: son schéma doit être "http", "https", "file", "ftp". Pour ce faire, vous devez disposer de la permission pour l'URL de la page, soit explicitement en tant que [permission d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions), ou via la [permission activeTab](/fr/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).

Vous pouvez également injecter du code dans des pages empaquetées avec votre propre extension :

```js
browser.tabs.create({url: "/my-page.html"}).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`
  });
});
```

Vous n'avez pas besoin de permissions spéciales pour le faire.

Vous _ne pouvez pas_ injecter de code dans les pages intégrées du navigateur, par exemple : about:debugging, about:addons, ou sur la page qui s'ouvre lorsque vous ouvrez un nouvel onglet vide.

Les scripts que vous injectez s’appellent des scripts de contenu. [En savoir plus sur les scripts de contenu](/fr/Add-ons/WebExtensions/Content_scripts).

Il s’agit d’une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var executing = browser.tabs.executeScript(
  tabId,                 // optional integer
  details                // object
)
```

### Paramètres

- `tabId` {{optional_inline}}
  - : `integer`. L’ID de l’onglet dans lequel exécuter le script. Par défaut, l’onglet actif de la fenêtre en cours.
- `details`

  - : Un objet décrivant le script à exécuter. Il contient les propriétés suivantes :

    - `allFrames` {{optional_inline}}
      - : `boolean`. Si `true`, le code sera injecté dans toutes les cadres de la page courante. Si `true` et `frameId` est défini, alors il y aura une erreur, frameId et allFrames sont mutuellement exclusifs. Si c'est `false`, le code n'est injecté que dans le cadre supérieur. La valeur par défaut est `false`.
    - `code` {{optional_inline}}
      - : `string`. Code à injecter, sous la forme d’une chaine de texte. **Attention :** n’utilisez pas cette propriété pour interpoler des données non sûres dans JavaScript, car cela pourrait introduire une faille de sécurité.
    - `file` {{optional_inline}}
      - : `string`. Chemin d’accès à un fichier contenant le code à injecter. Dans Firefox, les URL relatives ne commençant pas à la racine de l'extension sont résolues par rapport à l'URL de la page en cours. Dans Chrome, ces URL sont résolues par rapport à l’URL de base de l’extension. Pour travailler avec plusieurs navigateurs, vous pouvez spécifier le chemin comme une URL relative, en commençant à la racine de l’extension, comme ceci : `"/path/to/script.js"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Le cadre où le code doit être injecté. La valeur par défaut est `0` (le cadre de niveau supérieur).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Si `true`, le code sera injecté dans des cadres `about:blank` et `about:srcdoc` inclus depuis une page si votre extension a accès à leur document parent. Le code ne peut pas être inséré dans les cadres `about:` de niveau supérieur. Par défaut, `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Le moment le plus tôt auquel le code sera injecté dans l’onglet. Par défaut, `document_idle`.

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) résolue avec un tableau d’objets représentant le résultat du script dans chaque cadre où le script a été injecté.

Le résultat du script est la dernière instruction évaluée, ce qui est similaire à ce qui serait produit (les résultats, pas les affichages de `console.log()`) si vous exécutiez le script dans la [Console Web](/fr/docs/Outils/Console_Web). Par exemple, considérez un script comme celui-ci :

```js
var foo='my result';foo;
```

Ici, le tableau des résultats contiendra la chaîne `"my result"` en tant qu’élément. Les valeurs de résultat doivent être [clonables tructurées](/fr/docs/Web/API/Web_Workers_API/algorithme_clonage_structure). La dernière déclaration peut également être une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), mais cette fonctionnalité n'est pas supportée par la bibliothèque [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript).
Si une erreur se produit, la promesse sera rejetée avec un message d’erreur.

## Exemples

Cet exemple exécute un extrait de code d’une ligne dans l’onglet actuellement actif :

```js
function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var makeItGreen = 'document.body.style.border = "5px solid green"';

var executing = browser.tabs.executeScript({
  code: makeItGreen
});
executing.then(onExecuted, onError);
```

L’exemple suivant exécute un script à partir d’un fichier empaqueté avec l’extension appelé `content-script.js`. Le script est exécuté dans l’onglet actuellement actif. Le script est exécuté dans les sous-cadres ainsi que dans le document principal :

```js
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true
});
executing.then(onExecuted, onError);
```

L’exemple suivant exécute un script à partir d’un fichier empaqueté avec l’extension appelé `content-script.js`. Le script est exécuté dans l’onglet ayant l’ID 2 :

```js
function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var executing = browser.tabs.executeScript(
  2, {
    file: "/content-script.js"
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat("webextensions.api.tabs.executeScript")}}

> **Note :**
>
> Cette API est basée sur l’API [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript) de Chromium. Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.

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
