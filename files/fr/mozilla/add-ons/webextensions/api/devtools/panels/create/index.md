---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
---

{{AddonSidebar()}}

Ajoute un nouveau panneau aux devtools.

Cette fonction prend : un titre, une URL vers un fichier d'icône et une URL vers un fichier HTML. Il crée un nouveau panneau dans les devtools, dont le contenu est spécifié par le fichier HTML. Il renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui résout un objet [`ExtensionPanel`](/fr/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel) représentant le nouveau panneau.

## Syntaxe

```js
var creating = browser.devtools.panels.create(
  title, // string
  iconPath, // string
  pagePath, // string
);
```

### Parametères

- `title`
  - : `string`. Le titre du panneau. Cela apparaitra dans la rangée des onglets le long du haut de la fenêtre des devtools, et c'est la principale façon dont l'utilisateur pourra identifier votre panneau.
- `iconPath`
  - : `string`. Spécifie une icône qui sera affichée à côté du titre. Il est fourni sous forme d'URL vers un fichier image qui a été fourni avec votre extension. L'URL est résolue par rapport à la page d'extension courante (sauf si elle est exprimée en url absolue, par exemple "/icons/panel.png").
- `pagePath`
  - : string. Spécifie un fichier HTML qui définit le contenu réel du panneau. Il est fourni sous la forme d'une URL d'un fichier HTML qui a été regroupé avec votre extension. L'URL est résolue par rapport à la page d'extension courante (sauf si elle est exprimée en url absolue, par exemple "/devtools/panel.html"). Le fichier HTML peut include des fichiers CSS et JavaScript, juste comme une page web normale. Le JavaScript en cours d'éxécution dans le panneau pourra utiliser les API devtools. Voir [Extention des outils de développement](/fr/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet [`ExtensionPanel`](/fr/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel) représentant le nouveau panneau.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Créer un nouveau panneau, et ajoute des auditeurs à ces événements onShown et onHidden :

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).
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
