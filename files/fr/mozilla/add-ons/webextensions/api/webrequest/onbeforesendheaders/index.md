---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standardn
  - Reference
  - WebExtensions
  - onBeforeSendHeaders
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
---
{{AddonSidebar()}}

Cet événement est déclenché avant l'envoi de données HTTP, mais après que tous les en-têtes HTTP soient disponibles. C'est un bon endroit pour écouter si vous voulez modifier les en-têtes de requête HTTP.

Pour que les en-têtes de requête soient passés dans l'écouteur avec le reste des données de requête, passez `"requestHeaders"` dans un tableau `extraInfoSpec`.

Pour modifier les en-têtes de façon synchrone : passez `"blocking"` dans `extraInfoSpec`, puis dans votre événement écouté, retournez un [`BlockingResponse`](/fr/Add-ons/WebExtensions/API/webRequest/BlockingResponse 'An object of this type is returned by event listeners that have set "blocking" in their extraInfoSpec argument.') avec une propriété nommée `requestHeaders`, dont la valeur est l'ensemble des en-têtes de requête à envoyer.

Pour modifier les en-têtes de façon asynchrone : passez `"blocking"` dans `extraInfoSpec`, puis dans votre event listener, retournez une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue avec une `BlockingResponse`.

Si vous utilisez le `"blocking"`, vous devez avoir la ["permission de l'API "webRequestBlocking"](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) dans votre manifest.json.

Il est possible d'étendre le conflit ici. Si deux extensions écoutent `onBeforeSendHeaders` pour la même requête, le deuxième auditeur verra les modifications apportées par le premier auditeur et pourra annuler les modifications apportées par le premier auditeur. Par exemple, si le premier auditeur ajoute un en-tête `Cookie`, et que le deuxième auditeur supprime tous les en-têtes `Cookie`, les modifications apportées par le premier auditeur seront perdues. Si vous voulez voir les en-têtes qui sont effectivement envoyés, sans risque qu'une autre extension les modifie par la suite, utilisez {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}, bien que vous ne puissiez pas modifier les en-têtes sur cet événement.

Tous les en-têtes réellement envoyés ne sont pas toujours inclus dans `requestHeaders`. En particulier, les en-têtes liés à la mise en cache (par exemple, `Cache-Control`, `If-Modified-Since`, `If-None-Match`) ne sont jamais envoyés. De plus, le comportement peut différer d'un navigateur à l'autre.

Selon la spécification, les noms d'en-tête sont insensibles à la casse. Cela signifie que pour être sûr de faire correspondre un en-tête particulier, l'auditeur devrait minuscules le nom avant de le comparer :

```js
for (let header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

Le navigateur conserve la casse originale du nom de l'en-tête tel qu'il a été généré par le navigateur. Si l'auditeur de l'extension change la casse, ce changement ne sera pas conservé.

## Syntaxe

```js
browser.webRequest.onBeforeSendHeaders.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeSendHeaders.removeListener(listener)
browser.webRequest.onBeforeSendHeaders.hasListener(listener)
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
      - : [`object`](#details). Détails de la demande. Ceci inclura les en-têtes de demande si vous avez inclus `"requestHeaders"` dans `extraInfoSpec`.

    Retourne : {{WebExtAPIRef('webRequest.BlockingResponse')}}. si `"blocking"` est spécifié dans le paramètre `extraInfoSpec`, l'auditeur d'événement doit retourner un objet `BlockingResponse`, et peut définir sa propriété `requestHeaders`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Un ensemble de filtres qui restreint les événements qui seront envoyés à cet auditeur.
- `extraInfoSpec`{{optional_inline}}

  - : `array` de `string`. Options supplémentaires pour l'événement. Vous pouvez passer n'importe laquelle des valeurs suivantes :

    - `"blocking"`: rendre la requête synchrone, ce qui vous permet de modifier les en-têtes de requête
    - `"requestHeaders"`: inclure les en-têtes de requête dans l'objet `details`  transmis à l'auditeur

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

- `requestHeaders`{{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Les en-têtes de réponse HTTP qui ont été reçus avec cette réponse.
- `requestId`
  - : `string`. L'ID de la demande. Les ID de requête sont uniques au sein d'une session de navigateur, de sorte que vous pouvez les utiliser pour relier différents événements associés à la même requête.
- `tabId`
  - : `integer`. ID de l'onglet dans lequel la demande a lieu. Définir à -1 si la requête n'est pas liée à un onglet.
- `timeStamp`
  - : `number`. L'heure à laquelle cet événement s'est déclenché, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Le type de ressource demandée : par exemple, "image", "script", "stylesheet".
- `url`
  - : `string`. Cible de la demande.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.onBeforeSendHeaders", 10)}}

## Exemples

Ce code modifie l'en-tête "User-Agent" pour que le navigateur s'identifie comme étant Opera 12.16, mais uniquement lors de la visite des pages sous "https\://httpbin.org/".

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
var targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
var ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeader(e) {
  for (var header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  }
  return {requestHeaders: e.requestHeaders};
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
);
```

Ce code est exactement comme l'exemple précédent, sauf que l'auditeur est asynchrone, retournant une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue avec les nouveaux en-têtes :

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
var targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
var ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeaderAsync(e) {
  var asyncRewrite = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      for (var header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value = ua;
        }
      }
      resolve({requestHeaders: e.requestHeaders});
    }, 2000);
  });

  return asyncRewrite;
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeaderAsync,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
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
