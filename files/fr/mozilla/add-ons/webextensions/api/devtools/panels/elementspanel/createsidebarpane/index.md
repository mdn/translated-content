---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
---

{{AddonSidebar()}}

Ajoute un nouveau volet à la barre latérale dans l'inspecteur HTML / CSS.

L'inspecteur HTML / CSS, appelé l'[inspecteur de page](/fr/docs/Outils/Inspecteur) dans Firefox et le [panneau éléments](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/) dans Chrome, affiche la page DOM dans la partie principale de sa fenêtre et possède une barre latérale qui affiche divers autres aspects de la page HTML / CSS dans une interface à onglets. Par exemple, dans Firefox, la barre latérale peut afficher les règles CSS pour l'élément sélectionné, ou ses polices, ou son modèle de boîte.

La fonction `createSidebarPane()` ajoute un nouveau volet à la barre latérale. ar exemple, la capture d'écran ci-dessous montre un nouveau volet intitulé "My pane", qui affiche un objet JSON :

![](inspector-sidebar.png)

Cette fonction prend un argument, qui est une chaîne représentant le titre du volet. Il renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui se résout en un objet [`ExtensionSidebarPane`](/fr/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane) représentant le nouveau volet. Vous pouvez utiliser cet objet pour définir le contenu et le comportement du volet.

## Syntaxe

```js
var creating = browser.devtools.panels.elements.createSidebarPane(
  title, // string
);
```

### Paramètres

- `title`
  - : `string`. Cela apparaîtra dans la rangée d'onglets en haut de la barre latérale, et c'est la principale façon pour l'utilisateur d'identifier votre panneau.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet [`ExtensionSidebarPane`](/fr/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane) représentant le nouveau volet.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Créez un nouveau volet et remplissez-le avec un objet JSON. Vous pouvez exécuter ce code dans un script chargé par la [page devtools](/fr/Add-ons/WebExtensions/manifest.json/devtools_page).

```js
function onCreated(sidebarPane) {
  sidebarPane.setObject({
    someBool: true,
    someString: "hello there",
    someObject: {
      someNumber: 42,
      someOtherString: "this is my pane's content",
    },
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).

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
