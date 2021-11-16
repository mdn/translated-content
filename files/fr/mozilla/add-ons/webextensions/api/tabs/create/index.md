---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/create
---
{{AddonSidebar()}}

Crée un nouvel onglet

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var creating = browser.tabs.create(
  createProperties   // object
)
```

### Paramètres

- `createProperties`

  - : `object`.Propriétés pour donner le nouvel onglet. Pour en savoir plus sur ces propriétés, consultez la documentation {{WebExtAPIRef("tabs.Tab")}}.

    - `active`{{optional_inline}}
      - : `boolean`. Si l'onglet doit devenir l'onglet actif dans la fenêtre. Si elle est `false`, elle n'a aucun effet. N'affecte pas si la fenêtre est mise au point (voir {{WebExtAPIRef('windows.update')}}). Par défaut à  `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Utilisez-le pour créer un onglet dont l'ID de cookie estCette option n'est disponible que si l'extension a  la  [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `"cookies".`
    - `index`{{optional_inline}}
      - : `integer`. La position que l'onglet devrait prendre dans la fenêtre. La valeur fournie sera comprise entre zéro et le nombre d'onglets dans la fenêtre.
    - `openerTabId`{{optional_inline}}
      - : `integer`. L'ID de l'onglet qui a ouvert cet onglet. Si spécifié, l'onglet d'ouverture doit être dans la même fenêtre que l'onglet nouvellement créé.
    - `openInReaderMode`{{optional_inline}}
      - : `boolean`. si `true`, ouvrez cet onglet en [mode lecture](/fr/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Par défaut à  `false`.
    - `pinned`{{optional_inline}}
      - : `boolean`. Si l'onglet doit être épinglé. Par défaut à `false`.
    - `selected`{{optional_inline}}

      - : `boolean`. Si l'onglet doit devenir l'onglet sélectionné dans la fenêtre. Par défaut à `true`.

        > **Attention :** Cette propriété est obsolète et n'est pas prise en charge dans Firefox. Utilisez  `actif` à la place.

    - `url`{{optional_inline}}

      - : `string`. 'URL permettant de naviguer dans l'onglet initialement. Par défaut à la page Nouvel onglet.

        Les URL complètes doivent inclure un schéma (i.e. 'http\://www\.google.com', par 'www\.google.com').

        Pour des raisons de sécurité, dans Firefox, il se peut que ce ne soit pas une URL privilégiée. Le passage de l'une des URL suivantes échouera :

        - chrome: URLs
        - javascript: URLs
        - data: URLs
        - file: URLs (c'est-à-dire, fichiers sur le système de fichiers, cependant, pour utiliser un fichier empaqueté à l'intérieur de l'extension, voir ci-dessous)
        - privileged about: URLs (par exemple, `about:config`, `about:addons`, `about:debugging`). Les URL non privilégiées (e.g., `about:blank`) sont autorisés.
        - La page Nouvel onglet (`about:newtab`) peut être ouverte si aucune valeur n'est fournie pour l'URL.

        Pour charger une page fournie avec votre extension, spécifiez une URL absolue à partir du fichier manifest.json de l'extension. Par exemple :  '/path/to/my-page.html'. Si vous omettez le premier caractère '/', l'URL est traitée comme une URL relative et différents navigateurs peuvent construire différentes URL absolues.

    - `windowId`{{optional_inline}}
      - : `integer`. La fenêtre pour créer le nouvel onglet. Par défaut à la fenêtre actuelle.

### Valeur retournée

A [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) that will be fulfilled with a {{WebExtAPIRef('tabs.Tab')}} object containing details about the created tab. If the tab could not be created (for example, because `url` used a privileged scheme) the promise will be rejected with an error message.

## Exemples

Ouvre "https\://example.org" dans un nouvel onglet :

```js
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  var creating = browser.tabs.create({
    url:"https://example.org"
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.create", 10)}}

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
