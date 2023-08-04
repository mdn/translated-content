---
title: pageAction.show()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/show
---

{{AddonSidebar()}}

Affiche l'action de la page pour un onglet donné. L'action de la page est affichée chaque fois que l'onglet donné est l'onglet actif.

`show()` remplace la correspondance de motifs, de sorte que l'action page sera affichée dans l'onglet spécifié même si [`show_matches`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) e correspond pas à l'URL ou si [`hide_matches`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) ne correspond pas.

Notez que l'appel à `show()` n'a aucun effet sur un onglet sans contenu chargé.

## Syntaxe

```js
browser.pageAction.show(
  tabId, // integer
);
```

### Paramètres

- `tabId`
  - : `integer`. L'ID de l'onglet pour lequel vous souhaitez afficher l'action de la page.

### Valeur renvoyée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec `undefined`.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cette exemple montre l'action de la page pour l'onglet actif lorsque l'utilisateur sélectionne un élément de menu contextuel. Notez que vous aurez besoin de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) `contextMenus` dans votre [manifest](/fr/Add-ons/WebExtensions/manifest.json) pour créer des éléments de menu contextuel.

```js
browser.contextMenus.create({
  id: "show",
  title: "Show page action",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "show") {
    browser.pageAction.show(tab.id);
  }
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.pageAction`](https://developer.chrome.com/extensions/pageAction). Cette documentation est dérivée de [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

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
