---
title: extension.getViews()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getViews
tags:
  - API
  - Add-ons
  - Extension
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - getViews
translation_of: Mozilla/Add-ons/WebExtensions/API/extension/getViews
---
{{AddonSidebar()}}

Renvoie un tableau des objets [Window](/fr/docs/Web/API/Window) pour chacune des pages exécutées dans l'extension en cours. Cela inclut, par exemple :

- la page d'arrière-plan, si une est définie
- toutes les pages contextuelles, si définies et chargées
- toutes les pages d'options, si définies et chargées
- les onglets du navigateur hébergeant le contenu fourni avec l'extension

Dans Firefox, si cette méthode est appelée à partir d'une page faisant partie d'une fenêtre de navigation privée, telle qu'une barre latérale dans une fenêtre privée ou une fenêtre ouverte à partir d'une fenêtre privée, sa valeur de retour n'inclut pas la page d'arrière-plan de l'extension.

## Syntaxe

```js
var windows = browser.extension.getViews(
  fetchProperties // optional object
)
```

### Paramètres

- `fetchProperties`{{optional_inline}}

  - : `object`.

    - `type`{{optional_inline}}
      - : `string`. Un {{WebExtAPIRef('extension.ViewType')}} indiquant le type de vue à obtenir. Si omis, cette fonction renvoie toutes les vues.
    - `windowId`{{optional_inline}}
      - : `integer`. La fenêtre pour restreindre la recherche. Si omis, cette fonction renvoie toutes les vues.

### Valeur retournée

`array` of `object`. Un tableau d'objets [Window](/fr/docs/Web/API/Window).

## Compatibilité du navigateur

{{Compat("webextensions.api.extension.getViews")}}

## Exemples

Obtenez toutes les fenêtres appartenant à cette extension et consignez leurs URL :

```js
var windows = browser.extension.getViews();

for (var extensionWindow of windows) {
  console.log(extensionWindow.location.href);
}
```

Obtenez uniquement des fenêtres dans les onglets du navigateur hébergeant du contenu fourni avec l'extension :

```js
var windows = browser.extension.getViews({type: "tab"});
```

Obtenir seulement des fenêtres dans les popups :

```js
var windows = browser.extension.getViews({type: "popup"});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.extension`](https://developer.chrome.com/extensions/extension). Cette documentation est dérivée de [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) dans le code Chromium.
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
