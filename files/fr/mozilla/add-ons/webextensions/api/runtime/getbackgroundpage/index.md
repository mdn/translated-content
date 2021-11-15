---
title: runtime.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - getBackgroundPage
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage
---
{{AddonSidebar()}}

Récupère l'objet [`Window`](/fr/docs/Web/API/Window) pour la page d'arrière-plan qui s'exécute dans l'extension en cours.

Cela consiste un moyen pratique pour d'autres scripts d'extension privilégiés d'accéder directement à la portée du script d'arrière plan. Cela leur permet d'accéder aux variables ou aux fonctions d'appel définies dans cette portée. Le "script privilégié" inclut ici les scripts s'exécutant dans les  [pages d'options](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages), ou les scripts s'exécutant dans les fenêtres d'[action du navigateur](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions_2) ou d'[action page](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Page_actions), mais n'inclut pas les [scripts de contenu](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts).

Notez que les variables déclarées à l'aide de [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const) ou [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) n'apparaissaient pas dans l'objet window retourné par cette fonction.

**Notez également que cette méthode ne peut pas être utilisée dans une fenêtre privée dans Firefox**—Elle renvoie toujours `null`. Pour plus d'informations voir le [bug lié à bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=1329304).

Si la page d'arrière plan est une page événement, le système s'assuera qu'il est chargé avant de résoudre la promise.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingPage = browser.runtime.getBackgroundPage()
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec l'objet [Window](/fr/docs/User%3Amaybe/webidl_mdn/Window) pour la page d'arrière plan, s'il y en a une. Si l'extension n'inclut pas de page d'arrière-plan, la promise est rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.getBackgroundPage")}}

## Exemples

Supposons un [script d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts) définisse une fonction `foo()`:

```js
// background.js

function foo() {
  console.log("I'm defined in background.js");
}
```

Un script exécuté dans un [popup](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions_2) peut appeler cette fonction directement comme ceci :

```js
// popup.js

function onGot(page) {
  page.foo();
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
>
> <div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
> //
> // Redistribution and use in source and binary forms, with or without
> // modification, are permitted provided that the following conditions are
> // met:
> //
> //    * Redistributions of source code must retain the above copyright
> // notice, this list of conditions and the following disclaimer.
> //    * Redistributions in binary form must reproduce the above
> // copyright notice, this list of conditions and the following disclaimer
> // in the documentation and/or other materials provided with the
> // distribution.
> //    * Neither the name of Google Inc. nor the names of its
> // contributors may be used to endorse or promote products derived from
> // this software without specific prior written permission.
> //
> // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
> // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
> // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
> // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
> // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
> // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
> // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
> // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
> // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
> // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
> </pre></div>
