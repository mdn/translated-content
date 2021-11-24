---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Update
  - WebExtensions
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/update
---
{{AddonSidebar()}}

Parcourez l'onglet vers une nouvelle URL ou modifiez d'autres propriétés de l'onglet.

Pour utiliser cette fonction, transmettez l'ID de l'onglet à mettre à jour et un objet `updateProperties` contenant les propriétés que vous souhaitez mettre à jour. Les propriétés qui ne sont pas spécifiées dans  `updateProperties` ne sont pas modifiées.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var updating = browser.tabs.update(
  tabId,              // optional integer
  updateProperties    // object
)
```

### Paramètres

- `tabId`{{optional_inline}}
  - : `integer`. Par défaut à l'onglet sélectionné de la fenêtre en cours.
- `updateProperties`

  - : `object`. L'ensemble des propriétés à mettre à jour pour cet onglet. Pour en savoir plus sur ces propriétés, consultez la documentation  {{WebExtAPIRef("tabs.Tab")}}.

    - `active`{{optional_inline}}
      - : `boolean`. Si l'onglet doit devenir actif. Ne modifie pas le focus de la fenêtre (voir {{WebExtAPIRef('windows.update')}}). Si `true`, les onglets surlignés non actifs cesseront d'être surlignés. Si `false`, ne fait rien.
    - `autoDiscardable`{{optional_inline}}
      - : `boolean`. Si l'onglet doit être supprimé automatiquement par le navigateur lorsque les ressources sont faibles.
    - `highlighted`{{optional_inline}}

      - : `boolean`. Ajoute ou supprime l'onglet de la sélection courante. Si `true` et que l'onglet n'est pas surligné, il deviendra actif par défaut.

        Si vous voulez seulement mettre en surbrillance l'onglet sans l'activer, Firefox accepte le réglage `highlighted` à `true` et `active` à `false`. D'autres navigateurs peuvent activer l'onglet même dans ce cas.

    - `loadReplace`{{optional_inline}}

      - : `boolean`. Si la nouvelle URL doit remplacer l'ancienne URL dans l'historique de navigation de l'onglet, accessible via le bouton "Retour".

        Par exemple, supposons que l'utilisateur crée un nouvel onglet en utilisant Ctrl + T. Par défaut, dans Firefox, cela chargerait "about:newtab". Si votre extension met alors à jour cette page en utilisant {{WebExtAPIRef("tabs.update")}}, sans `loadReplace`, le bouton "retour" sera activé et ramènera l'utilisateur à "about:newtab". Si l'extension définit `loadReplace`, le bouton "retour" sera désactivé et ce sera comme si l'URL fournie par l'extension était la première page visitée dans cet onglet.

        Notez cependant que l'URL d'origine apparaîtra toujours dans l'historique global du navigateur.

    - `muted`{{optional_inline}}
      - : `boolean`. Si l'onglet doit être coupé.
    - `openerTabId`{{optional_inline}}
      - : `integer`. L'ID de l'onglet qui a ouvert cet onglet. Si spécifié, l'onglet d'ouverture doit être dans la même fenêtre que cet onglet.
    - `pinned`{{optional_inline}}
      - : `boolean`. Si l'onglet doit être épinglé.
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`. Si l'onglet doit être sélectionné. Cette propriété a été remplacée par `active` et `highlighted`.
    - `successorTabId` {{optional_inline}}
      - : `integer`. L'identifiant de l'ID du successeur de l'onglet.
    - `url`{{optional_inline}}

      - : `string`. Une URL pour naviguer dans l'onglet.

        Pour des raisons de sécurité, dans Firefox, il se peut que ce ne soit pas une URL privilégiée. Le passage de l'une des URL suivantes échouera, avec {{WebExtAPIRef("runtime.lastError")}} étant défini sur un message d'erreur :

        - chrome: URLs
        - javascript: URLs
        - data: URLs
        - file: URLs (c'est-à-dire, fichiers sur le système de fichiers, cependant, pour utiliser un fichier empaqueté à l'intérieur de l'extension, voir ci-dessous)
        - confidentiel : URLs (par exemle, `about:config`, `about:addons`, `about:debugging`, `about:newtab`). Les URL non privilégiées (par exemple, `about:blank`) sont autorisées.

        Pour charger une page fournie avec votre extension, spécifiez une URL absolue à partir du fichier manifest.json de l'extension. Par exemple : '/path/to/my-page.html'. Si vous omettez le premier caractère '/', l'URL est traitée comme une URL relative et différents navigateurs peuvent construire différentes URL absolues.

### Valeur retournée

A [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('tabs.Tab')}} contenant des détails sur l'onglet mis à jour. L'objet {{WebExtAPIRef('tabs.Tab')}} ne contient pas d' `url`, `title` et `favIconUrl` sauf si la permission `"tabs"` a été demandée. Si l'onglet n'a pas pu être trouvé ou qu'une autre erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Naviguez dans l'onglet actif de la fenêtre en cours pour https\://developer.mozilla.org :

```js
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var updating = browser.tabs.update({url: "https://developer.mozilla.org"});
updating.then(onUpdated, onError);
```

Activez le premier onglet de la fenêtre actuelle et naviguez jusqu'à https\://developer.mozilla.org:

```js
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function updateFirstTab(tabs) {
  var updating = browser.tabs.update(tabs[0].id, {
    active: true,
    url: "https://developer.mozilla.org"
  });
  updating.then(onUpdated, onError);
}

var querying = browser.tabs.query({currentWindow:true});
querying.then(updateFirstTab, onError);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.update", 10)}}

> **Note :**
>
> Cette API est basée sur l’API [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript) de Chromium. Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
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
