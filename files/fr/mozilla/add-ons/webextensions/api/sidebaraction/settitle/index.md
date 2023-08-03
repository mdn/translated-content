---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
---

{{AddonSidebar()}}

Définit le titre de la barre latérale. Le titre est affiché n'importe où dans les barres latérales du navigateur. Par exemple, Firefox l'affichera dans le menu "Affichage > Barre latérale". Il est également affiché en haut de la barre latérale lorsque la barre latérale est ouverte.

## Types de titres

Votre extension doit spécifier un titre pour la barre latérale dans la clé de manifest [sidebar_action](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action). C'est ce qu'on appelle le _"titre du manifest"_. Si vous ne spécifiez pas le titre du manifest, il sera par défaut le nom de l'extension

Si vous définissez un nouveau titre à l'aide de `setTitle()`, et incluez l'option `tabId` le titre est défini uniquement pour l'onglet donné. Ce titre est appelé _"titre spécifique à l'onglet"_.

Si vous définissez un nouveau titre à l'aide de `setTitle()`, et incluez l'option `windowId`, alors le titre est défini uniquement pour la fenêtre donnée. Ce titre est appelé _"titre spécifique à la fenêtre"_, et apparaîtra dans tous les onglets de cette fenêtre qui n'ont pas de titre spécifique à un onglet.

Si vous définissez un nouveau titre à l'aide de `setTitle()`, et omettre les options `tabId` et `windowId`, alors ceci définit le _"titre global"_. Le titre global apparaîtra alors dans tous les onglets qui n'ont pas de titre spécifique à un onglet et dont la fenêtre n'a pas de titre spécifique à une fenêtre.

## Syntaxe

```js
browser.sidebarAction.setTitle(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Un objet avec les propriétés suivantes .

    - `title`

      - : `string` ou `null`. Le nouveau titre de la barre latérale.

        si le `titre` est une chaîne vide, le titre utilisé sera le nom de l'extension, mais {{WebExtAPIRef("sidebarAction.getTitle")}} fournira toujours la chaîne vide.

        Si le `titre` est `null`, alors un titre précédemment défini sera supprimé, de sorte que :

        - Si `tabId` est spécifié, et que l'onglet a un jeu de titres spécifiques aux onglets, alors l'onglet héritera du titre de la fenêtre à laquelle il appartient.
        - Si `windowId` est spécifié et que la fenêtre a un titre spécifique à la fenêtre, alors la fenêtre héritera du titre global.
        - Sinon, le titre global sera réinitialisé au titre du manifest.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit le titre uniquement pour l'onglet donné.
    - `windowId`{{optional_inline}}
      - : `integer`. Définit le titre uniquement pour la fenêtre donnée.

<!---->

- Si `windowId` et `tabId` sont tous deux fournis, la fonction échoue et le titre n'est pas défini.
- SI `windowId` et `tabId` sont tous les deux omis, le titre global est définit.

## Exemples

Ce code modifie le titre de la barre latérale lorsque l'utilisateur clique sur une action du navigateur, mais uniquement pour l'onglet en cours :

```js
var title = "A different title";

function setTitleForTab(tab) {
  browser.sidebarAction.setTitle({ title, tabId: tab.id });
}

browser.browserAction.onClicked.addListener(setTitleForTab);
```

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Opera [`chrome.sidebarAction`](https://dev.opera.com/extensions/sidebar-action-api/).

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
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
-->
