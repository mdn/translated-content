---
title: devtools.panels.ExtensionSidebarPane.setObject()
slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
  - setObject
translation_of: >-
  Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/setObject
original_slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/setObject
---
{{AddonSidebar()}}

Affiche un objet JSON dans le volet de la barre latérale de l'extension.

L'objet est affiché en tant qu'arborescence extensible, comme dans le [JSON viewer](/fr/docs/Outils/JSON_viewer) dans Firefox. Vous pouvez éventuellement spécifier une chaîne `rootTitle` : elle sera affichée comme le titre de la racine de l'arbre.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var setting = browser.devtools.panels.setObject(
  jsonObject,       // string, array, or JSON object
  rootTitle         // string
)
```

### Paramètres

- `jsonObject`
  - : `String` ou `Array` ou `Object`. L'objet à afficher. S'il s'agit d'un objet JSON-serialized, donc les propriétés comme les fonctions seront omises.
- `rootTitle` {{optional_inline}}
  - : `String`. Le titre de la racine de l'arbre dans lequel l'objet est affiché.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera accomplie sans arguments, une fois l'objet défini.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.ExtensionSidebarPane.setObject", 10)}}

## Exemples

Créez un nouveau volet et remplissez-le avec un objet JSON. Vous pouvez exécuter ce code dans un script chargé par la [page devtools](/fr/Add-ons/WebExtensions/manifest.json/devtools_page). de votre extension

```js
function onCreated(sidebarPane) {
  sidebarPane.setObject({
    someBool: true,
    someString: "hello there",
    someObject: {
      someNumber: 42,
      someOtherString: "this is my pane's content"
    }
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).

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
