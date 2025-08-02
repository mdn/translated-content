---
title: webNavigation.onCommitted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCommitted
---

{{AddonSidebar}}

Lancé lorsqu'une navigation est validée. Au moins une partie du nouveau document a été reçue du serveur et le navigateur a décidé de passer au nouveau document.

## Syntaxe

```js
browser.webNavigation.onCommitted.addListener(
  listener, // function
  filter, // optional object
);
browser.webNavigation.onCommitted.removeListener(listener);
browser.webNavigation.onCommitted.hasListener(listener);
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
  - : `object`. Un objet contenant une seule propriété url, qui est un `tableau` d'objets {{WebExtAPIRef("events.UrlFilter")}}. Si vous incluez ce paramètre, l'événement se déclenchera uniquement pour les transitions vers les URL qui correspondent à au moins un `UrlFilter` dans le tableau. Si vous omettez ce paramètre, l'événement se déclenchera pour toutes les transitions.

## Objets supplémentaires

### Détails

- `tabId`
  - : `integer`. L'ID de l'onglet dans lequel la navigation est sur le point de se produire.
- `url`
  - : `string`. L'URL à laquelle le cadre donné va naviguer.
- `processId`
  - : `integer`. L'ID du processus dans lequel cet onglet est rendu.
- `frameId`
  - : `integer`. Frame dans lequel la navigation aura lieu. 0 indique que la navigation se déroule dans le contexte de navigation de niveau supérieur de l'onglet, et non dans un [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué. A positive value indicates that navigation happens in a nested iframe. Les ID de frame sont uniques pour un onglet et un processus donnés.
- `parentFrameId`
  - : `integer`. ID du parent de cette image. Réglez à -1 s'il s'agit d'un cadre de niveau supérieur.
- `timeStamp`
  - : `number`. L'heure à laquelle la navigation a été validée, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `transitionType`
  - : `{{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}`. La raison de la navigation : par exemple, `"link"` si l'utilisateur a cliqué sur un lien, ou `"reload"` si l'utilisateur a rechargé la page.
- `transitionQualifiers`
  - : `Array` de `{{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}`. Informations supplémentaires sur la navigation : par exemple, s'il existait une redirection de serveur ou de client.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Logs les URL cibles et les informations de transition supplémentaires pour `onCommitted`, si le nom d'hôte de l'URL cible contient "example.com" ou commence avec "developer".

```js
var filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCommitted(details) {
  console.log("target URL: " + details.url);
  console.log("transition type: " + details.transitionType);
  console.log("transition qualifiers: " + details.transitionQualifiers);
}

browser.webNavigation.onCommitted.addListener(logOnCommitted, filter);
```

{{WebExtExamples}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.

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
