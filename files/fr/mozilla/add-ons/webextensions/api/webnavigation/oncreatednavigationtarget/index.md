---
title: webNavigation.onCreatedNavigationTarget
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onCreatedNavigationTarget
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCreatedNavigationTarget
---
{{AddonSidebar()}}

Lancé lorsqu'une nouvelle fenêtre ou un nouvel onglet dans une fenêtre existante est créé pour héberger la cible d'une navigation. Par exemple, cet événement est envoyé lorsque :

- l'utilisateur ouvre un lien dans un nouvel onglet ou une nouvelle fenêtre
- une page Web charge une ressource dans un nouvel onglet ou une nouvelle fenêtre en utilisant [`window.open()`](/fr/docs/Web/API/Window/open) (mais notez que l'événement n'est pas envoyé si le bloqueur de popup du navigateur bloque le chargement).

L'événement n'est pas envoyé si un onglet ou une fenêtre est créé sans cible de navigation (par exemple, si l'utilisateur ouvre un nouvel onglet en appuyant sur Ctrl+T).

Si cet événement est déclenché, il sera déclenché avant  {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}.

## Syntaxe

```js
browser.webNavigation.onCreatedNavigationTarget.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCreatedNavigationTarget.removeListener(listener)
browser.webNavigation.onCreatedNavigationTarget.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il est écouté, sinon `false`.

## addListener syntax

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `details`
      - : [`object`](#details). Détails sur l'événement de navigation Voir les [détails](#details) ci-dessous.

- `filter`{{optional_inline}}
  - : `object`. Un objet contenant une seule propriété `url`, qui est un `Array` d'objets {{WebExtAPIRef("events.UrlFilter")}}.  Si vous incluez ce paramètre, l'événement se déclenchera uniquement pour les transitions vers les URL qui correspondent à au moins un `UrlFilter` dans le tableau. Si vous omettez ce paramètre, l'événement se déclenchera pour toutes les transitions. Notez que le `filtre`n'est pas supporté dans Firefox.

## Objets supplémentaires

### détails

- `sourceFrameId`
  - : `integer`. ID de l'image à partir de laquelle la navigation est initiée. 0 indique que le cadre est le contexte de navigation de niveau supérieur de l'onglet, et non un [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué. Une valeur positive indique que la navigation est initiée à partir d'un iframe imbriqué. Les ID de cadre sont uniques pour un onglet et un processus donnés.
- `sourceProcessId`
  - : `integer`. L'ID du processus à partir duquel la navigation est initiée.
- `sourceTabId`
  - : `integer`. L'ID de l'onglet à partir duquel la navigation est initiée. Par exemple, si l'utilisateur ouvre un lien dans un nouvel onglet, ce sera l'identifiant de l'onglet contenant le lien.
- `tabId`
  - : integer: L'ID de l'onglet nouvellement créé.
- `timeStamp`
  - : `number`. L'heure à laquelle le navigateur a créé la cible de navigation, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `url`
  - : `string`. L'URL qui sera chargée dans le nouvel onglet.
- `windowId`
  - : number. L'ID de la fenêtre dans laquelle le nouvel onglet est créé.

## Compatibilité du navigateur

{{Compat("webextensions.api.webNavigation.onCreatedNavigationTarget")}}

## Exemples

Logs l'URL cible, l'ID de la table source et l'ID de la trame source pour `onCreatedNavigationTarget`, si le nom d'hôte de la cible contient "example.com" ou commence par "developer".

```js
var filter = {
  url:
  [
    {hostContains: "example.com"},
    {hostPrefix: "developer"}
  ]
}

function logOnCreatedNavigationTarget(details) {
  console.log("onCreatedNavigationTarget: " + details.url);
  console.log(details.sourceTabId);
  console.log(details.sourceFrameId);
}

browser.webNavigation.onCreatedNavigationTarget.addListener(logOnCreatedNavigationTarget, filter);
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
