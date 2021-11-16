---
title: webRequest.onSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onSendHeaders
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
---
{{AddonSidebar()}}

Cet événement est déclenché juste avant l'envoi des en-têtes. Si votre extension ou une autre extension a modifié les en-têtes dans  `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}`, vous verrez la version modifiée ici.

Cet événement est à titre d'information seulement.

## Syntaxe

```js
browser.webRequest.onSendHeaders.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onSendHeaders.removeListener(listener)
browser.webRequest.onSendHeaders.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback, filter, extraInfoSpec)`
  - : Ajouter un auditeur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'auditeur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré à cet événement. Retourne `true` s'il est écouté, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produira. La fonction sera passée les arguments suivants :

    - `details`
      - : [`object`](#details). Détails sur la demande. Voir les [`details`](#details) ci-dessous.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Un filtre qui restreint les événements qui seront envoyés à cet auditeur.
- `extraInfoSpec`{{optional_inline}}

  - : `array` de `string`. Options supplémentaires pour l'événement. Vous ne pouvez passer qu'une seule valeur ici :

    - `"requestHeaders"`: inclure les en-têtes de requête dans l'objet détails transmis à l'auditeur

## Objets supplémentaires

### détails

- `documentUrl`
  - : `string`. URL du document dans lequel la ressource sera chargée. Par exemple, si la page web "https\://example.com" contient une image ou un iframe, alors le `documentUrl` pour l'image ou l'iframe sera "https\://example.com". Pour un document de niveau supérieur, `documentUrl` n'est pas défini.
- `frameId`
  - : `integer`. Zéro si la requête se produit dans le cadre principal ; une valeur positive est l'ID d'une sous-trame dans laquelle la requête se produit. Si le document d'un (sous-)cadre est chargé (`type` is `main_frame` or `sub_frame`), `frameId` indique l'ID de ce cadre et non l'ID du cadre extérieur. Les ID de trame sont uniques dans un onglet.
- `method`
  - : `string`. Méthode HTTP standard : par exemple, "GET" ou "POST".
- `originUrl`

  - : `string`. URL de la ressource qui a déclenché la requête. Par exemple, si "https\://example.com" contient un lien, et que l'utilisateur clique sur le lien, alors `originUrl` de la requête résultante est "https\://example.com".

    L'`originUrl` est souvent mais pas toujours la même chose que `documentUrl`.Par exemple, si une page contient une iframe, et que l'iframe contient un lien qui charge un nouveau document dans l'iframe, alors le `documentUrl` pour la requête résultante sera le document parent de l'iframe, mais l'`originUrl` sera l'URL du document dans l'iframe qui contenait le lien.

- `parentFrameId`
  - : `integer`. de la trame qui contient la trame qui a envoyé la requête. Réglé à -1 s'il n'existe pas de l'iframe parent.
- `proxyInfo`

  - : `object`. Cette propriété n'est présente que si la demande est proxied. Il contient les propriétés suivantes :

    - `host`
      - : `string`. Le nom d'hôte du serveur proxy.
    - `port`
      - : `integer`. Le numéro de port du serveur proxy.
    - `type`

      - : `string`. Le type de serveur proxy. L'un des :

        - "http": proxy HTTP (ou SSL CONNECT pour HTTPS)
        - "https": proxy HTTP sur connexion TLS vers proxy
        - "socks": SOCKS v5 proxy
        - "socks4": SOCKS v4 proxy
        - "direct": pas de proxy
        - "unknown": proxy inconnu

    - `username`
      - : `string`. Nom d'utilisateur pour le service proxy.
    - `proxyDNS`
      - : `boolean`. Vrai si le proxy exécutera une résolution de nom de domaine basée sur le nom d'hôte fourni, ce qui signifie que le client ne doit pas faire sa propre recherche DNS.
    - `failoverTimeout`
      - : `integer`. Délai d'attente de basculement en secondes. Si la connexion par proxy échoue, le proxy ne sera pas utilisé à nouveau pendant cette période.

- `requestId`
  - : `string`. L'ID de la demande. Les ID de requête sont uniques au sein d'une session de navigateur, de sorte que vous pouvez les utiliser pour relier différents événements associés à la même requête.
- `requestHeaders`{{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Les en-têtes de réponse HTTP qui ont été reçus avec cette réponse.
- `tabId`
  - : `integer`. ID de l'onglet dans lequel la demande a lieu. Définir à -1 si la requête n'est pas liée à un onglet.
- `timeStamp`
  - : `number`. L'heure à laquelle cet événement s'est déclenché, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Le type de ressource demandée : par exemple, "image", "script", "stylesheet".
- `url`
  - : `string`. Cible de la demande.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.onSendHeaders", 10)}}

## Exemples

Ce code enregistre tous les cookies qui seront envoyés en faisant des demandes au [modèle de match](/fr/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) cible :

```js
// The target match pattern
var targetPage = "*://*.google.ca/*";

// Log cookies sent with this request
function logCookies(e) {
  for (var header of e.requestHeaders) {
    if (header.name == "Cookie") {
      console.log(header.value);
    }
  }
}

// Listen for onSendHeaders, and pass
// "requestHeaders" so we get the headers
browser.webRequest.onSendHeaders.addListener(
  logCookies,
  {urls: [targetPage]},
  ["requestHeaders"]
);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest). Cette documentation est dérivée de [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) dans le code Chromium.
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
