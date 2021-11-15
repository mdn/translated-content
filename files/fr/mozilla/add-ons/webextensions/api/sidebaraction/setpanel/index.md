---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - setPanel
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
---
{{AddonSidebar()}}

Définit le panneau de la barre latérale: c'est-à-dire le document HTML qui définit le contenu de cette barre latérale.

## Types de panneau

Les barres latérales ont toujours un _"panneau manifest"_, qui est le panneau défini dans la clé de manifest [`sidebar_action`](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action).

Si vous définissez un nouveau panneau à l'aide de `setPanel()`, et incluez l'option `tabId` le panneau est défini uniquement pour l'onglet donné. Ce panneau est appelé  _"tab-specific panel"_.

Si vous définissez un nouveau panneau en utilisant `setPanel()`, et incluez l'option `windowId`, alors le panneau n'est défini que pour la fenêtre donnée.  Ce panneau est appelé _"panneau spécifique à la fenêtre"_, et apparaîtra dans tous les onglets de cette fenêtre qui n'ont pas d'ensemble de panneaux spécifiques aux onglets.

Si vous définissez un nouveau panneau en utilisant `setPanel()`, et omettez les options `tabId` et `windowId`, alors ceci définit le _"panneau global"_. Le panneau global apparaîtra alors dans tous les onglets qui n'ont pas d'ensemble de panneaux spécifiques aux onglets et dont la fenêtre n'a pas de panneau spécifique à une fenêtre.

## Syntaxe

```js
browser.sidebarAction.setPanel(
  details // object
)
```

### Paramètres

- `details`

  - : `object`. Un objet avec les propriétés suivantes :

    - `panel`

      - : `string` ou `null`. Le panneau à charger dans la barre latérale, spécifié comme une URL pointant vers un document HTML, ou `null`, ou une chaîne vide.

        Ceci peut pointer vers un fichier empaqueté dans l'extension (for exemple, créé à l'aide de {{WebExtAPIRef("runtime.getURL")}}), ou un document distant (par exemple `https://example.org/`). Il doit s'agir d'une URL valide.

        Si `panel` est `null` ou `""`,alors un panneau précédemment défini sera supprimé, de sorte que :

        - Si `tabId` est spécifié, et que l'onglet a un jeu de panneaux spécifiques aux onglets, alors l'onglet héritera du panneau à partir de la fenêtre à laquelle il appartient.
        - Si `windowId` est spécifié, et que la fenêtre a un jeu de panneaux spécifiques à la fenêtre, alors la fenêtre héritera du panneau global.
        - Sinon, le panneau global sera réinitialisé au panneau manifest.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit le panneau uniquement pour l'onglet donné.
    - `windowId` {{optional_inline}}
      - : `integer`. Définit le panneau uniquement pour la fenêtre donnée.

<!---->

- Si `windowId` et `tabId` sont tous les deux spécifiés, la fonction échoue et le panneau n'est pas défini.
- Si `windowId` et `tabId` sont tous les deux omis, le panneau global est défini.

## Exemples

Ce code bascule le document de la barre latérale lorsque l'utilisateur clique sur une action du navigateur :

```js
var thisPanel = browser.runtime.getURL("/this.html");
var thatPanel = browser.runtime.getURL("/that.html");

function toggle(panel) {
  if (panel === thisPanel) {
    browser.sidebarAction.setPanel({panel: thatPanel});
  } else {
    browser.sidebarAction.setPanel({panel: thisPanel});
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.sidebarAction.getPanel({}).then(toggle);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.sidebarAction.setPanel",2)}}

> **Note :**
>
> Cette API est basée sur l'API Opera [`chrome.sidebarAction`](https://dev.opera.com/extensions/sidebar-action-api/).
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
