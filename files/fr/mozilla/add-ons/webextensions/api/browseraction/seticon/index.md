---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - setIcon
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
---
{{AddonSidebar()}}

Définit l'icône pour l'action du navigateur.

Vous pouvez spécifier une seule icône comme chemin d'accès à un fichier ou un objet {{WebExtAPIRef('browserAction.ImageDataType')}} .

Vous pouvez spécifier plusieurs icônes dans différentes tailles en fournissant un dictionnaire contenant plusieurs chemins ou des objets  `ImageData`. Cela signifie que l'icône ne doit pas être mise à l'échelle pour un périphérique avec une densité de pixels différente.

Les onglets sans icône spécifique hériteront de l'icône globale, qui par défaut est  [`default_icon`](/fr/Add-ons/WebExtensions/manifest.json/browser_action) specifié dans le manifest.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var settingIcon = browser.browserAction.setIcon(
  details         // object
)
```

### Paramètres

- `details`

  - : `object`. Un objet contenant des propriétés `imageData` ou `path`, et éventuellement une propriété `tabId` .

    - `imageData`{{optional_inline}}

      - : `{{WebExtAPIRef('browserAction.ImageDataType')}}` ou `object`. Il s'agit soit d'un seul objet `ImageData` ou un dictionnaire d'objet.

        Utilisez un dictionnaire d'objet pour spécifier plusieurs objets `ImageData` dans différentes tailles, de sorte que l'icône ne doit pas être mise à l'échelle pour un périphérique avec une densité de pixel différentes. Si `imageData` est un dictionnaire, la valeur de chaque propriété est un objet`ImageData`, et son nom est sa taille, comme ceci :

        ```json
        {
          16: image16,
          32: image32
        }
        ```

        Le navigateur choisira l'image à utiliser en fonction de la densité de pixels de l'écran. Voir [Choix de la tailles d'icônes](/fr/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes) pour plus d'informations à ce sujet.

    - `path`{{optional_inline}}

      - : `string` or `object`. Il s'agit du chemin relatif d'un fichier d'icône ou d'un objet de dictionnaire.

        Utilisez un dictionnaire d'objet pour spécifier plusieurs fichiers d'icônes dans différentes tailles, de sorte que l'icône ne doit pas être mise à l'échelle pour un périphérique avec une densité de pixels différentes. Si `path` est un dictionnaire, la valeur de chaque propriété est un chemin relatif , et son nom est sa taille, comme ceci :

        ```json
        {
          16: "path/to/image16.jpg",
          32: "path/to/image32.jpg"
        }
        ```

        Le navigateur choisira l'image à utiliser en fonction de la densité de pixels de l'écran. Voir [Choix de la tailles d'icônes](/fr/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes) pour plus d'informations à ce sujet.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit l'icône uniquement pour l'onglet donné. L'icône est réinitialisée lorsque l'utilisateur navigue dans cet onglet vers une nouvelle page.
    - `windowId`{{optional_inline}}
      - : `integer`. Définit l'icône de la fenêtre donnée.

<!---->

- si `windowId` et `tabId` sont tous deux fournis, la fonction échoue et l'icône n'est pas définie.
- si `windowId` et `tabId` sont tous les deux omis, l'icône globale est définie.

Si chaque `imageData` et `path` est un objet `undefined`, `null` ou vide :

- si `tabId` est spécifié, et que l'onglet a un jeu d'icônes spécifique à l'onglet, alors l'onglet héritera de l'icône de la fenêtre à laquelle il appartient.
- si `windowId` est spécifié et que la fenêtre a un jeu d'icônes spécifiques à la fenêtre, alors la fenêtre héritera de l'icône globale.
- Sinon, l'icône globale sera réinitialisée à l'icône du manifest.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments une fois que l'icône a été définie.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.setIcon",2)}}

## Exemples

Le code ci-dessous utilise une action du navigateur pour basculer un auditeur pour {{WebExtAPIRef("webRequest.onHeadersReceived")}}, et utilise `setIcon()` pour indiquer si l'écoute est activée ou désactivée :

```js
function logResponseHeaders(requestDetails) {
  console.log(requestDetails);
}

function startListening() {
  browser.webRequest.onHeadersReceived.addListener(
    logResponseHeaders,
    {urls: ["<all_urls>"]},
    ["responseHeaders"]
  );
  browser.browserAction.setIcon({path: "icons/listening-on.svg"});
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.browserAction.setIcon({path: "icons/listening-off.svg"});
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.browserAction.onClicked.addListener(toggleListener);
```

Le code ci-dessous définit l'icône à l'aide d'un objet[`ImageData`](/fr/docs/Web/API/ImageData) :

```js
function getImageData() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setIcon({imageData: getImageData()});
});
```

L'extrait suivant met à jour l'icône lorsque l'utilisateur clique, mais uniquement pour l'onglet actif :

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setIcon({
    tabId: tab.id, path: "icons/updated-48.png"
  });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.
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
