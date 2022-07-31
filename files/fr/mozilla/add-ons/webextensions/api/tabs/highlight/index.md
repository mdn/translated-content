---
title: tabs.highlight()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - highlight
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
---
{{AddonSidebar()}}Met en évidence (sélectionné) un ou plusieurs onglets. Les onglets sont spécifiés à l'aide d'un identifiant de fenêtre et d'une plage d'indices de tabulation.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntaxe

```js
var highlighting = browser.tabs.highlight(
  highlightInfo         // object
)
```

### Paramètres

- `highlightInfo`

  - : `object`.

    - `windowId`{{optional_inline}}
      - : `integer`. ID de la fenêtre contenant les onglets.
    - `populate`{{optional_inline}}

      - : `boolean`. Par défaut la valeur est `true`. S'il est défini sur `false`, l'objet {{WebExtAPIRef('windows.Window')}} n'aura pas de propriété `tabs` contenant une liste d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les onglets ouverts dans la fenêtre.

        > **Note :** Remplir la fenêtre (le comportement par défaut) peut être une opération coûteuse s'il y a beaucoup d'onglets. Pour de meilleures performances, il est recommandé de définir manuellement configuré `populate` à `false` si vous n'avez pas besoin des détails de l'onglet.

    - `tabs`
      - : `array` de valeurs entières spécifiant un ou plusieurs onglets à mettre en évidence. Les onglets surlignés précédemment qui ne sont pas inclus dans les `onglets` cesseront d'être surlignés. Le premier onglet des `onglets` devient actif.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)  qui sera remplie avec un objet  {{WebExtAPIRef('windows.Window')}} contenant des détails sur la fenêtre dont les onglets ont été mis en surbrillance. Si la fenêtre n'a pas pu être trouvée ou qu'une autre erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.highlight",2)}}

{{WebExtExamples}}

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
