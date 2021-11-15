---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Fenêtre
  - Méthode
  - Non-standard
  - WebExtensions
  - Windows
translation_of: Mozilla/Add-ons/WebExtensions/API/windows/create
---
{{AddonSidebar()}}

Crée une nouvelle fenêtre.

Lorsque vous créez la fenêtre, vous pouvez :

- Chargez un ou plusieurs nouveaux onglets dans la fenêtre.
- Déplacez un onglet d'une fenêtre existante dans la nouvelle fenêtre.
- Réglez la taille et la position de la fenêtre.
- Créez une fenêtre de style "panneau" qui, dans ce contexte, désigne une fenêtre sans l'interface utilisateur UI (barre d'adresse, barre d'outils, etc.).
- Définissez différentes propriétés de la fenêtre, par exemple, qu'elle soit concentrée ou privée.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var creating = browser.windows.create(
  createData            // optional object
)
```

### Paramètres

- `createData`{{optional_inline}}

  - : `object`.

    - `allowScriptsToClose` {{optional_inline}}

      - : `boolean`. Lorsque la fenêtre est ouverte, elle contiendra un seul onglet, ou plus d'un onglet si `url` est donnée et comprendra un tableau contenant plus d'une URL. Par défaut, les scripts s'exécutant dans ces pages ne sont pas autorisés à fermer leur onglet en utilisant [`window.close()`](/fr/docs/Web/API/Window/close). Si vous incluez `allowScriptsToClose` et le mettez à `true` ,  alors ce comportement par défaut est modifié, de sorte que les scripts peuvent fermer leurs onglets. Notez cela :

        - Ceci ne s'applique qu'aux onglets qui ont été ouverts lors de la création de la fenêtre. Si l'utilisateur ouvre plus d'onglets dans cette fenêtre, les scripts ne pourront pas fermer ces nouveaux onglets.
        - Si la ou les url(s) donnée(s) dans `url` pointent vers les [pages d'extension](/fr/Add-ons/WebExtensions/user_interface/Bundled_web_pages) (c'est-à-dire qu'il s'agit de pages incluses avec cette extension et chargées avec le protocole "moz-extension:") alors les scripts _sont_ par défaut autorisés à fermer ces onglets.

    - `cookieStoreId` {{optional_inline}}
      - : `integer`. S'il est présent, spécifie le `CookieStoreId` pour tous les onglets qui seront créés lorsque la fenêtre sera ouverte.
    - `focused` {{optional_inline}}
      - : `boolean`. Si c'est vrai, la nouvelle fenêtre sera concentrée. Si c'est `false`, la nouvelle fenêtre sera ouverte en arrière-plan et la fenêtre actuellement concentrée restera concentrée. Le paramètre par défaut est `true`.
    - `height` {{optional_inline}}
      - : `integer`. Hauteur en pixels de la nouvelle fenêtre, y compris dans une frame. Si elle n'est pas spécifiée, par défaut une hauteur naturel.
    - `incognito` {{optional_inline}}
      - : `boolean`. Que la nouvelle fenêtre soit une fenêtre privée. Notez que si vous spécifiez `incognito` et `tabId`, c'est-à-dire, vous ne pouvez pas déplacer un onglet privé dans une fenêtre privée.
    - `left` {{optional_inline}}
      - : `integer`. Nombre de pixels pour positionner la nouvelle fenêtre à partir du bord gauche de l'écran. Si elle n'est pas spécifiée, la nouvelle fenêtre est décalée naturellement à partir de la dernière fenêtre ciblée. Cette valeur est ignorée pour les panneaux. (Dans Firefox, cette valeur est actuellement ignorée pour les popups  (bug 1271047) mais peut être définie en utilisant browser.windows.update().)
    - `state` {{optional_inline}}
      - : Une valeur {{WebExtAPIRef('windows.WindowState')}}. L'état initial de la fenêtre. Les états minimisés, maximisés et plein écran ne peuvent pas être combinés avec la gauche, le haut, la largeur ou la hauteur.
    - `tabId` {{optional_inline}}
      - : `integer`. Si inclus, déplace un onglet de l'ID spécifié d'une fenêtre existante dans la nouvelle fenêtre.
    - `titlePreface` {{optional_inline}}
      - : `string`. Utilisez ceci pour ajouter une chaîne au début du titre de la fenêtre du navigateur. Selon le système d'exploitation sous-jacent, cela pourrait ne pas fonctionner sur les fenêtres du navigateur qui n'ont pas de titre (comme  about:blank dans Firefox).
    - `top` {{optional_inline}}
      - : `integer`. Le nombre de pixels pour positionner la nouvelle fenêtre à partir du bord supérieur de l'écran. Si elle n'est pas spécifiée, la nouvelle fenêtre est naturellement décalée à partir de la dernière fenêtre ciblée. Cette valeur est ignorée pour les panneaux. (Dans Firefox, cette valeur est actuellement ignorée pour les popups  (bug 1271047) mais peut être définie en utilisant browser.windows.update().)
    - `type` {{optional_inline}}
      - : Une valeur {{WebExtAPIRef('windows.CreateType')}} spécifie le type de fenêtre du navigateur à créer. Spécifié le `panneau` ou la `fenêtre contextuelle` ici pour ouvrir une fenêtre sans l'interface utilisateur (barre d'adresse, barre d'outils, etc).
    - `url` {{optional_inline}}
      - : `string` ou `array` of `string`s. Une URL ou un tableau d'URL à ouvrir comme onglets dans une fenêtre. Les URL hautement qualifiées doivent inclure un schéma (c'est à dire `http://www.google.com`, et non `www.google.com`). Les URL relatives seront relatives à la page actuelle dans l'extension. Par défaut, la nouvelle page d'onglet.
    - `width` {{optional_inline}}
      - : `integer`. La largeur en pixels de la nouvelle fenêtre, y compris le cadre. Si elle n'est pas spécifiée par défaut, vous avez une largeur naturelle.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('windows.Window')}} contenant les détails de la nouvelle fenêtre. Cet objet de fenêtre aura toujours son ensemble de propriétés d'onglets, contrairement aux objets de fenêtre retournés à partir de {{WebExtAPIRef("windows.get()")}} et d'API similaires, qui contiennent uniquement des onglets si l'option de remplissage est passée. Si une erreur survient, la promesse sera rejetée avec un message d'erreur.

## Exemples

Ouvrir une fenêtre contenant deux onglets :

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    url: ["https://developer.mozilla.org",
          "https://addons.mozilla.org"]
  });
  creating.then(onCreated, onError);
});
```

Ouvrez une fenêtre lorsque l'utilisateur clique sur une action du navigateur et déplacez l'onglet actif actuellement :

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    tabId: tab.id
  });
  creating.then(onCreated, onError);
});
```

Ouvrez une petite fenêtre de style panneau et chargez-en un fichier local:

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {

  var popupURL = browser.extension.getURL("popup/popup.html");

  var creating = browser.windows.create({
    url: popupURL,
    type: "popup",
    height: 200,
    width: 200
  });
  creating.then(onCreated, onError);

});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.windows.create", 10)}}

> **Note :**
>
> Cette API est basée sur l'API de Chromnium [`chrome.windows`](https://developer.chrome.com/extensions/windows). Cette documentation provient de [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
