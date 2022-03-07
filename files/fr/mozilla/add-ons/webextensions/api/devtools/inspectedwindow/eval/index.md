---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
tags:
  - API
  - Add-ons
  - Devtools.inspectedWindows
  - Extensions
  - Reference
  - WebExtensions
  - eval
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval
---
{{AddonSidebar()}}

Exécute JavaScript dans la fenêtre à laquelle les devtools sont attachés.

C'est un peu comme utiliser {{WebExtAPIRef("tabs.executeScript()")}} pour joindre un script de contenu, mais avec deux différences principales:

Tout d'abord, le JavaScript peut utiliser un ensemble de [commandes spéciales que les navigateurs fournissent généralement dans leur implémentation de console devtools](#Helpers)&nbsp;: par exemple, en utilisant "$0" pour designer l'élément actuellement sélectionné dans l'inspecteur.

Deuxièmement, le JavaScript que vous exécutez peut voir les modifications apportées à la page par des scripts que la page a chargés. Cela contraste avec les scripts de contenu, qui voient la page [telle qu'elle existerait si aucun script de page n'était pas chargé](/fr/Add-ons/WebExtensions/Content_scripts#DOM_access). Cependant, notez que l'isolement fourni par les scripts de contenu est une fonction de sécurité délibérée, destinée à rendre plus difficile la confusion ou la subversion des WebExtensions par des pages web malveillantes ou simplement non coopératives en redéfinissant les fonctions et les propriétés du DOM. Cela signifie que vous devez être très prudent si vous renoncez à cette protection en utilisant eval(), et devrait utiliser les scripts de contenu, sauf si vous devez utiliser eval().

Le script est évalué par défaut dans le cadre principal de la page. Le script doit évaluer une valeur qui peut être représentée comme JSON (ce qui signifie que, par exemple, il peut ne pas évaluer une fonction ou un objet contenant des fonctions). Par défaut, le script ne voit pas les scripts de contenu attachés à la page.

Vous ne pouvez pas appeler eval() sur les fenêtres de navigateur privilégiées telles que "about: addons".

Vous pouvez éventuellement fournir un paramètre d'options, qui comprend des options pour évaluer le script dans une image différente ou dans le contexte des scripts de contenu attachés. Notez que Firefox ne supporte pas encore le paramètre d'options.

La fonction eval() renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui résout le résultat évalué du script ou une erreur.

## Aides

Le script accède à un certain nombre d'objets qui aident le script injecté à interagir avec les outils du développeur. Les assistants suivants sont actuellement pris en charge:

- `$0`
  - : Contient une référence à l'élément actuellement sélectionné dans l'inspecteur Devtools.
- `inspect()`
  - : Etant donné un objet, s'il s'agit d'un élément DOM dans la page, sélectionnez-le dans l'inspecteur devtools, sinon il crée un aperçu de l'objet dans la webconsole.

[Voir quelques exemples.](#Examples)

## Syntaxe

```js
var evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
```

### Paramètres

- `expression`
  - : `string`. L'expression JavaScript à évaluer. La chaîne doit évaluer un objet qui peut être représenté comme JSON, ou une exception sera lancée. Par exemple, l'expression ne doit pas évaluer une fonction.
- `options`{{optional_inline}}

  - : `object`. Options pour la fonction  (Notez que Firefox ne supporte pas encore cette option), comme suit :

    - `frameURL`{{optional_inline}}
      - : `string`. L'URL du cadre dans lequel à évaluer l'expression. Si cela est supprimé, l'expression est évaluée dans la trame principale de la fenêtre.
    - `useContentScriptContext`{{optional_inline}}
      - : `boolean`. Si c'est vrai, évaluez l'expression dans le contexte des scripts de contenu que cette extension a attachée à la page. Si vous définissez cette option, vous devez d'abord attacher certains scripts de contenu à la page ou une erreur Devtools sera lancée.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Evaluez l'expression dans le contexte d'un script de contenu attaché par une extension différente, dont l'origine correspond à la valeur donnée ici. Ces remplacements sont `useContentScriptContext`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau contenant deux éléments.

Si aucune erreur n'est survenue, l'élément 0 contiendra le résultat de l'évaluation de l'expression et l'élément 1 sera indéfini.

Si une erreur s'est produite, l'élément 0 sera indéfini et l'élément 1 contiendra un objet donnant des détails sur l'erreur. Deux types différents d'erreurs sont distingués :

- Des erreurs rencontrées lors de l'évaluation du JavaScript (par exemple, des erreurs de syntaxe dans l'expression). Dans ce cas, l'élément 1 contiendra :

  - Une propriété boolean isException, définie sur true
  - Une valeur de propriété de chaîne, en donnant plus de détails.

- D'autres erreurs (par exemple, une expression qui évalue sur un objet qui ne peut pas être représenté comme JSON). Dans ce cas, l'élément 1 contiendra:

  - Une propriété booléenne isError, définie sur true
  - Un code de propriété de chaîne contenant un code d'erreur.

## Compatibilité des navigateurs

{{Compat("webextensions.api.devtools.inspectedWindow.eval")}}

## Exemples

Ceci teste si jQuery est défini dans la fenêtre inspectée et enregistre le résultat. Notez que cela ne fonctionnerait pas dans un script de contenu, car même si jQuery était défini, le script de contenu ne le verrait pas.

```js
function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  console.log(result);
  if (result[0] !== undefined) {
    console.log(`jQuery: ${result[0]}`);
  } else if (result[1]) {
    handleError(result[1]);
  }
}

const checkjQuery = "typeof jQuery != 'undefined'";

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(checkjQuery)
    .then(handleResult);
});
```

### Exemples d'aide

Cela utilise l'aide de `$0` pour définir la couleur d'arrière-plan de l'élément, actuellement sélectionné dans l'inspecteur :

```js
const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(evalString)
    .then(handleResult);
});
```

Cela utilise l'assistant l'inspection() pour sélectionner le premier élément \<h1> dans la page:

```js
const inspectButton = document.querySelector("#inspect");
const inspectString = "inspect(document.querySelector('h1'))";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

inspectButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(inspectString)
    .then(handleResult);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools`](https://developer.chrome.com/extensions/devtools).
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
