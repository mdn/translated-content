---
title: get()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - Types
  - WebExtensions
  - get
translation_of: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get
---
{{AddonSidebar()}}

La méthode  `BrowserSetting.get()` obtient la valeur actuelle du paramètre du navigateur et une énumération indiquant comment la valeur du paramètre est actuellement controléee..

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = setting.get(
  details     // object
)
```

### Paramètres

- `détails`
  - : Un objet vide.

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet avec les propriétés suivantes :

- `value`
  - : La valeur du paramètre. Le type de cette propriété est déterminé par le paramètre particulier.
- `levelOfControl`
  - : `string`. Cela représente la façon dont la paramètre est actuellement controllé. Vous pouvez l'utiliser pour vérifier si vous pouvez modifier le paramètre. Voir [`BrowserSetting.set()`](/fr/Add-ons/WebExtensions/API/privacy/BrowserSetting/set) pour plus détails. Sa valeur peut-être l'une des suivantes :<table class="standard-table">
      <tbody>
        <tr>
          <td><code>"not_controllable"</code></td>
          <td>Les extensions ne sont pas autorisées à modifier le paramètre.</td>
        </tr>
        <tr>
          <td><code>"controlled_by_other_extensions"</code></td>
          <td>
            Une autre extension qui a été installée après celle-ci a modifié ce
            paramètre
          </td>
        </tr>
        <tr>
          <td><code>"controllable_by_this_extension"</code></td>
          <td>Cette extension est autorisée à modifier le paramètre.</td>
        </tr>
        <tr>
          <td><code>"controlled_by_this_extension"</code></td>
          <td>Cette extensions a déjà modifi le paramètre.</td>
        </tr>
      </tbody>
    </table>

## Compatibilité du navigateur

Voir {{WebExtAPIRef("types.BrowserSetting")}}.

## Exemple

Enregitrez la valeur et le niveau de contrôle de la propriété `networkPredictionEnabled` de l'objet {{WebExtAPIRef("privacy.network")}}, pour les fenêtres de navigations privées. Notez que cela nécessite la permission du navigateur "privacy".

```js
var getting = browser.privacy.network.networkPredictionEnabled.get({});

getting.then((got) => {
  console.log(`Value: ${got.value}`);
  console.log(`Control: ${got.levelOfControl}`);
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.types`](https://developer.chrome.com/extensions/types).
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
