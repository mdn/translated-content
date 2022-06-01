---
title: browserAction.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeTextColor
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Reference
  - WebExtensions
  - browserAction
  - setBadgeTextColor
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeTextColor
---
{{AddonSidebar()}}

Définit la couleur du texte du badge de l'action du navigateur. Les onglets sans couleur de texte de badge spécifique hériteront de la couleur globale du texte de badge.

## Syntaxe

```js
browser.browserAction.setBadgeTextColor(
  details // object
)
```

### Paramètres

- `details`

  - : `object`

    - `color`

      - : La couleur, spécifiée comme l'une des couleurs :

        - une chaîne : toute valeur CSS [\<color>](/fr/docs/Web/CSS/color_value), par exemple `"red"`, `"#FF0000"`, ou `"rgb(255,0,0)"`. Si la chaîne n'est pas une couleur valide, la promesse retournée sera rejetée et la couleur du texte ne sera pas modifiée.
        - Un objet `{{WebExtAPIRef('browserAction.ColorArray')}}`.
        - `null`. Si un `tabId` est spécifié, il supprime la couleur du texte du badge spécifique à l'onglet afin que l'onglet hérite de la couleur globale du texte du badge. Dans le cas contraire, la couleur globale du texte du badge est ramenée à la valeur par défaut.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit la couleur du texte du badge uniquement pour l'onglet donné. La couleur est réinitialisée lorsque l'utilisateur navigue dans cet onglet vers une nouvelle page.
    - `windowId`{{optional_inline}}
      - : `integer`. Définit la couleur du texte du badge uniquement pour l'onglet donné.

<!---->

- Si `windowId` et `tabId` sont tous deux fournis, la fonction échoue et la couleur n'est pas définie.
- Si `windowId` et `tabId` sont tous deux omis, la couleur globale du texte du badge est définie à la place.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.setBadgeTextColor",2)}}

## Exemples

Une couleur de texte de badge qui commence par le rouge et passe au vert lorsque l'on clique sur l'action du navigateur :

```js
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeTextColor({color: "red"});

browser.browserAction.onClicked.addListener(()=> {
  browser.browserAction.setBadgeTextColor({color: "green"});
});
```

Définissez la couleur du texte du badge uniquement pour l'onglet actif :

```js
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeTextColor({color: "red"});

browser.browserAction.onClicked.addListener((tab)=> {
  browser.browserAction.setBadgeTextColor({
    color: "green",
    tabId: tab.id
  });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.

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
