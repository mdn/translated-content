---
title: webNavigation.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onErrorOccurred
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
---
{{AddonSidebar()}}

Lancé lorsqu'une erreur se produit et que la navigation est annulée. Cela peut se produire si une erreur réseau s'est produite ou si l'utilisateur a interrompu la navigation.

## Syntaxe

```js
browser.webNavigation.onErrorOccurred.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onErrorOccurred.removeListener(listener)
browser.webNavigation.onErrorOccurred.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il est écouté, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants:

    - `details`
      - : [`object`](#details). Détails sur l'événement de navigation.

- `filter`{{optional_inline}}
  - : `object`. Un objet contenant une seule propriété `url`, qui est un `tableau` d'objets  {{WebExtAPIRef("events.UrlFilter")}}. Si vous incluez ce paramètre, l'événement se déclenchera uniquement pour les transitions vers les URL qui correspondent à au moins un `UrlFilter` dans un tableau. Si vous omettez ce paramètre, l'événement se déclenchera pour toutes les transitions.

## Objets supplémentaires

### details

- `tabId`
  - : `integer`. L'ID de l'onglet dans lequel la navigation se passait.
- `url`
  - : `string`. L'URL à laquelle le cadre donné naviguait.
- `processId`
  - : `integer`. L'ID du processus dans lequel cet onglet est rendu.
- `frameId`
  - : `integer`. Cadre dans lequel la navigation se passait. 0 indique que la navigation s'est déroulée dans le contexte de navigation de niveau supérieur de l'onglet,et non dans un [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué. Une valeur positive indique que la navigation s'est déroulée dans un iframe imbriqué. Les ID de cadre sont uniques pour un onglet et un processus donnés.
- `timeStamp`
  - : `number`. L'heure à laquelle l'erreur s'est produite, en [milliseconde depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `error`
  - : `string`. Le code d'erreur. Il s'agit d'un code d'erreur interne qui n'est pas garanti pour rester identique ou être cohérent d'un navigateur à l'autre.

## Compatibilité du navigateur

{{Compat("webextensions.api.webNavigation.onErrorOccurred")}}

## Exemples

Logs les URL cibles de `onErrorOccurred`, si le nom d'hôte de l'URL cible contient  "example.com" ou commence par "developer".

```js
var filter = {
  url:
  [
    {hostContains: "example.com"},
    {hostPrefix: "developer"}
  ]
}

function logOnErrorOccurred(details) {
  console.log("onErrorOccurred: " + details.url);
  console.log(details.error);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.
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
