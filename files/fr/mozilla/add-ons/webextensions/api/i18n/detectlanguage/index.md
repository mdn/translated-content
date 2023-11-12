---
title: i18n.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
---

{{AddonSidebar()}}

Détecte la langue du texte fourni à l'aide du [détecteur de langue compact](https://github.com/CLD2Owners/cld2) (CLD).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var detectingLanguages = browser.i18n.detectLanguage(
  text, // string
);
```

### Paramètres

- `text`
  - : `string`. Chaîne d'entrée de l'utilisateur à traduire.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet résultat. L'objet résultat a deux propriétés :

- `isReliable`
  - : `boolean`. Si la langue a été détectée de manière fiable.
- `languages`

  - : `array` d'objets, dont chacun a deux propriétés:

    - `language`
      - : {{WebExtAPIRef('i18n.LanguageCode')}}. La langue détectée.
    - `percentage`
      - : `integer`. Le pourcentage de la chaîne d'entrée qui était dans la langue détectée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function onLanguageDetected(langInfo) {
  for (lang of langInfo.languages) {
    console.log("Le langage est : " + lang.language);
    console.log("Le pourcentage est : " + lang.percentage);
  }
}

var text = "L'homme est né libre, et partout il est dans les fers.";

var detecting = browser.i18n.detectLanguage(text);
detecting.then(onLanguageDetected);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.i18n`](https://developer.chrome.com/extensions/i18n). Cette documentation est dérivée de [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) dans le code de Chromium code.
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
