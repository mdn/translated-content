---
title: sidebarAction.getPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getPanel
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getPanel
---
{{AddonSidebar()}}

Obtient une URL vers le document HTML qui définit le contenu de la barre latérale.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingPanel = browser.sidebarAction.getPanel(
  details               // object
)
```

### Paramètres

- `details`

  - : `object`. Un objet avec les propriétés suivantes :

    - `tabId`{{optional_inline}}
      - : `integer`.  Obtenir le panneau pour la barre latérale spécifique à l'onglet donné.
    - `windowId` {{optional_inline}}
      - : `integer`. Obtenir le panneau pour la barre latérale spécifique à la fenêtre donnée.

<!---->

- Si `windowId` et `tabId`  sont tous deux fournis, la fonction échoue et la promesse qu'elle renvoie est rejetée.
- Si `windowId` et `tabId` sont tous les deux omis, le panneau global est renvoyé.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec une chaîne contenant l'URL du document du panel. Ce sera une URL entièrement qualifiée, telle que :

    moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/sidebar.html

## Compatibilité du navigateur

{{Compat("webextensions.api.sidebarAction.getPanel",2)}}

## Exemples

Obtenez l'URL du panneau :

```js
function onGot(sidebarUrl) {
  console.log(sidebarUrl);
}

var gettingPanel = browser.sidebarAction.getPanel({});
gettingPanel.then(onGot);
```

{{WebExtExamples}}

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
