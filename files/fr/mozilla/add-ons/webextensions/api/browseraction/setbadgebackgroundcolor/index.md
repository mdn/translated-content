---
title: browserAction.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
tags:
  - API
  - Add-ons
  - Extensions
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
  - setBadgeBackgroundColor
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeBackgroundColor
---
{{AddonSidebar()}}

Définit la couleur de fond du badge. Les onglets sans couleur de fond de badge spécifique hériteront de la couleur de fond de badge globale, qui par défaut est `[217, 0, 0, 255]` dans Firefox.

A partir de Firefox 63, à moins que la couleur du texte du badge ne soit explicitement définie à l'aide de {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}, la couleur du texte du badge sera automatiquement définie en noir ou blanc afin d'optimiser le contraste avec la couleur de fond du badge spécifié. Par exemple, si vous définissez la couleur de fond du badge sur blanc, la couleur par défaut du texte du badge sera définie sur noir, et vice versa.

D'autres navigateurs utilisent toujours une couleur de texte blanche, il est donc préférable d'utiliser un fond foncé pour assurer la lisibilité du texte

## Syntaxe

```js
browser.browserAction.setBadgeBackgroundColor(
  details // object
)
```

### Paramètres

- `details`

  - : `object`

    - `color`

      - : La couleur, spécifiée comme l'un des suivants :

        - une chaîne : toute valeur CSS [\<color>](/fr/docs/Web/CSS/color_value) , par exemple `"red"`, `"#FF0000"`, ou `"rgb(255,0,0)"`. Si la chaîne n'est pas une couleur valide, la promesse renvoyée sera rejetée et la couleur d'arrière-plan ne sera pas modifiée.
        - Un objet `{{WebExtAPIRef('browserAction.ColorArray')}}`.
        - `null`. Si un `tabId` est spécifié, il supprime la couleur d'arrière-plan du badge spécifique à l'onglet pour que l'onglet hérite de la couleur d'arrière-plan du badge global. Sinon, la couleur d'arrière-plan du badge global revient à la valeur par défaut.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit la couleur d'arrière-plan du badge uniquement pour l'onglet donné. La couleur est réinitialisée lorsque l'utilisateur navigue sur cet onglet vers une nouvelle page.
    - `windowId`{{optional_inline}}
      - : `integer`. Définit la couleur d'arrière-plan du badge uniquement pour l'onglet donné.

<!---->

- Si `windowId` et `tabId` sont tous deux fournis, la fonction échoue et la couleur n'est pas définie.
- Si `windowId` et `tabId` sont tous deux omis, la couleur d'arrière-plan du badge global est définie à la place.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.setBadgeBackgroundColor",2)}}

La couleur par défaut dans Firefox est : `[217, 0, 0, 255]`.

## Exemples

Une couleur d'arrière plan qui commence en rouge et devient  verte lorsque l'action du navigateur est cliquée :

```js
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeBackgroundColor({color: "red"});

browser.browserAction.onClicked.addListener(()=> {
  browser.browserAction.setBadgeBackgroundColor({color: "green"});
});
```

Réglez la couleur d'arrière-plan du badge uniquement pour l'onget actif :

```js
browser.browserAction.setBadgeText({text: "1234"});
browser.browserAction.setBadgeBackgroundColor({color: "red"});

browser.browserAction.onClicked.addListener((tab)=> {
  browser.browserAction.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id
  });
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.
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
