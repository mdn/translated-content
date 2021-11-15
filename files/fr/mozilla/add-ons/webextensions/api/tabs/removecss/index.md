---
title: tabs.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS
tags:
  - API
  - Add-ons
  - Extensions
  - Mehod
  - Non-standard
  - Reference
  - WebExtensions
  - removeCSS
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS
---
{{AddonSidebar()}}

Supprime d'une page CSS précédemment injectée par un appel à {{WebExtAPIRef("tabs.insertCSS()")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

    var removing = browser.tabs.removeCSS(
      tabId,           // optional integer
      details          // object
    )

### Paramètres

- `tabId` {{optional_inline}}
  - : `integer`. L'ID de l'onglet à partir duquel supprimer le CSS. Par défaut à l'onglet actif de la fenêtre en cours.
- `details`

  - : Un objet décrivant le CSS à retirer de la page. Il contient les propriétés suivantes :

    - `allFrames`{{optional_inline}}

      - : `boolean`. si `true`, le code sera supprimé de toutes les images de la page en cours. si c'est `false`, le code est seulement retiré du cadre supérieur. Par défaut à `false`.

    - `code`{{optional_inline}}
      - : `string`. CSS à supprimer, en tant que chaîne de texte. Cela doit correspondre exactement à une chaîne CSS précédemment insérée dans la page en utilisant {{WebExtAPIRef("tabs.insertCSS()")}}.
    - `cssOrigin`{{optional_inline}}
      - : `string`. Cela peut prendre l'une des deux valeurs suivantes : "user", pour CSS ajouté en tant que feuille de style utilisateur, ou "author" pour CSS ajouté en tant que feuille de style auteur. Si cette option a été définie précédemment par  {{WebExtAPIRef("tabs.insertCSS()")}}, elle doit correspondre exactement.
    - `file`{{optional_inline}}
      - : `string`. Chemin d'accès à un fichier contenant le CSS à supprimer. Cela doit correspondre exactement à un fichier CSS préalablement inséré dans la page en utilisant {{WebExtAPIRef("tabs.insertCSS()")}}.
    - `frameId`{{optional_inline}}
      - : `integer`. Le cadre à partir duquel supprimer le CSS. La valeur par défaut est `0` (l'image de niveau supérieur).
    - `matchAboutBlank`{{optional_inline}}
      - : `boolean`. si `true`, le CSS sera supprimé des cadres "about:blank" et "about:srcdoc" intégrés si votre extension a accès à leur document parent. Par défaut à `false`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments lorsque tous les CSS ont été supprimés. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Cet exemple ajoute du code CSS en utilisant {{WebExtAPIRef("tabs.insertCSS")}}, puis le supprime à nouveau lorsque l'utilisateur clique sur une action du navigateur :

```js
var css = "body { border: 20px dotted pink; }";

function onError(error) {
  console.log(`Error: ${error}`);
}

var insertingCSS = browser.tabs.insertCSS(2, {code: css});
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  var removing = browser.tabs.removeCSS(2, {code: css});
  removing.then(null, onError);
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.removeCSS")}}

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
