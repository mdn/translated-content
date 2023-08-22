---
title: webNavigation.onBeforeNavigate
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onBeforeNavigate
---

{{AddonSidebar()}}

Lancé lorsque le navigateur est sur le point de démarrer un événement de navigation.

## Syntaxe

```js
browser.webNavigation.onBeforeNavigate.addListener(
  listener, // function
  filter, // optional object
);
browser.webNavigation.onBeforeNavigate.removeListener(listener);
browser.webNavigation.onBeforeNavigate.hasListener(listener);
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

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `details`
      - : [`object`](#details). Détails sur l'événement de navigation.

- `filter`{{optional_inline}}
  - : `object`. Un objet contenant une seule propriété `url`, qui est un `tableau` d'objets {{WebExtAPIRef("events.UrlFilter")}} objects.Un objet contenant une seule propriété qui correspondent à au moins un `UrlFilter` dans le tableau. Si vous omettez ce paramètre, l'événement se déclenchera pour toutes les transitions.

## Objets supplémentaires

### Détails

- `tabId`
  - : `integer`. L'ID de l'onglet dans lequel la navigation est sur le point de se produire.
- `url`
  - : `string`. L'URL à laquelle le cadre donné va naviguer.
- `processId`
  - : `integer`. L'ID du processus dans lequel cet onglet est rendu (Cette propriété **n'est pas pris en charge sur Firefox** et c'est **déprécié sur Chrome**).
- `frameId`
  - : `integer`. Cadre dans lequel la navigation est sur le point de se produire. 0 indique que la navigation se déroule dans le contexte de navigation de niveau supérieur de l'onglet, et non dans un [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué. Une valeur positive indique que la navigation se déroule dans un iframe imbriqué. Les ID de cadre sont uniques pour un onglet et un processus donnés.
- `parentFrameId`
  - : `integer`. ID du parent de cette image. Défini à -1 s'il s'agit d'un cadre de niveau supérieur.
- `timeStamp`
  - : `number`. L'heure à laquelle le navigateur est sur le point de démarrer la navigation, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Logs les URL cibles de `onBeforeNavigate`, si le nom d'hôte de la cible contient "example.com" ou commence avec "developer".

```js
var filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnBefore(details) {
  console.log("onBeforeNavigate to: " + details.url);
}

browser.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.
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
