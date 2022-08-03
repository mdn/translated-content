---
title: devtools.panels.ElementsPanel.setExpression()
slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
  - setExpression
translation_of: >-
  Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/setExpression
original_slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/setExpression
---
{{AddonSidebar()}}

Evalue une expression dans le contexte de la page inspectée et affiche le résultat dans le volet de la barre latérale d'extension.

Le contexte d'exécution de l'expression est le même que celui de [`inspectedWindow.eval()`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval).

Les objets JSON et les noeuds DOM sont affichés en tant qu'arborescence extensible, comme dans la [visionneuse jSON](/fr/docs/Outils/JSON_viewer) dans Firefox. Vous pouvez éventuellement spécifier une chaîne `rootTitle` : elle sera affichée comme le titre de la racine de l'arbre.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var evaluating = browser.devtools.panels.setExpression(
  expression,       // string
  rootTitle         // string
)
```

### Paramètres

- `expression`
  - : `string`. L'expression à évaluer.
- `rootTitle` {{optional_inline}}
  - : string. Le titre de la racine de l'arbre dans lequel les résultats sont affichés.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera remplie sans arguments, une fois l'expression évaluée.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.ExtensionSidebarPane.setExpression", 10)}}

## Exemples

Ce code crée un volet de barre latérale qui affiche le [`tagName`](/fr/docs/Web/API/Element/tagName) de l'élément actuellement sélectionné :

```js
function onCreated(sidebarPane) {

  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    const exp = "$0 && $0.tagName";
    const title = "Selected Element tagName";
    sidebarPane.setExpression(exp, title);
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
