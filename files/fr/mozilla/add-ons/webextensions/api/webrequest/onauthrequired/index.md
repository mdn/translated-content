---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
tags:
  - API
  - Addons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onAuthRequired
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
---
{{AddonSidebar()}}

Mise en place quand le serveur envoie un code status 401 ou 407 : c'est-à-dire lorsque le serveur demande au client de fournir des informations d'authentification telles qu'un nom d'utilisateur et un mot de passe.

L'auditeur peut répondre de l'une des quatre façons suivantes :

**Ne rien faire** : l'auditeur ne peut rien faire, il suffit d'observer la demande. Si cela se produit, cela n'aura aucun effet sur le traitement de la demande, et le navigateur demandera probablement simplement à l'utilisateur de se connecter.

**Annuler la demande** : l'auditeur peut annuler la demande. S'ils le font, l'authentification échouera et l'utilisateur ne sera pas invité à se connecter. Les prolongations peuvent annuler les demandes comme suit :

- dans addListener, passez `"blocking"` dans le paramètre `extraInfoSpec`
- dans l'écouteur lui-même, retourne un objet avec une propriété `cancel` définie à  `true`

**Fournir des informations d'identification de manière synchrone** : si les informations d'identification sont disponibles de manière synchrone, l'extension peut les fournir de manière synchrone. Si l'extension fait cela, le navigateur tentera de se connecter avec les informations d'identification données.
L'auditeur peut fournir des informations d'identification de manière synchrone comme suit :

- dans addListener, passez `"blocking"` dans le paramètre `extraInfoSpec`
- dans l'auditeur, retourner un objet avec une propriété `authCredentials` définie sur les informations d'identification à fournir

**Fournir les informations d'identification de manière asynchrone** : l'extension peut avoir besoin de récupérer les informations d'identification de manière asynchrone. Par exemple, l'extension peut avoir besoin d'extraire les informations d'identification du stockage ou de demander à l'utilisateur. Dans ce cas, l'auditeur peut fournir des informations d'identification de manière asynchrone comme suit :

- dans addListener, passez `"blocking"` dans le paramère `extraInfoSpec`
- dans l'auditeur, retourner une `Promise` qui est résolue avec un objet contenant une propriété `authCredentials`, définie sur les credentials à fournir.

Voir [Exemples](/fr/Add-ons/WebExtensions/API/webRequest/onAuthRequired#Examples).

Si vous utilisez le `"blockage"` vous devez avoir la [permission de l'API "webRequestBlocking"](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) dans votre manifest.json.

Si votre poste fournit de mauvaises informations d'identification, l'auditeur sera rappelé. Pour cette raison, veillez à ne pas entrer dans une boucle infinie en fournissant à plusieurs reprises de mauvaises informations d'identification.

## Autorisation de proxy

En général, Firefox ne déclenche pas d'événements `webRequest` pour les requêtes système, telles que les mises à jour de navigateur ou d'extension, ou les requêtes des moteurs de recherche. Pour permettre à l'autorisation de proxy de fonctionner sans problème pour les requêtes système, à partir de la version 57 Firefox implémente une exception à cette règle.

Si une extension a les permissions "webRequest", "webRequestBlocking", "proxy", et "\<all_urls>", alors elle pourra utiliser `onAuthRequired` pour fournir des informations d'identification pour l'autorisation de proxy (mais pas pour l'autorisation web normale).  L'auditeur ne sera pas en mesure d'annuler les demandes du système ou d'apporter d'autres modifications aux demandes du système.

## Syntaxe

```js
browser.webRequest.onAuthRequired.addListener(
  listener,                    // function
  filter,                      //  object
  extraInfoSpec                //  optional array of strings
)
browser.webRequest.onAuthRequired.removeListener(listener)
browser.webRequest.onAuthRequired.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback, filter, extraInfoSpec)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `écouteur` est enregistré à cet événement. Retourne `true` s'il est à l'écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Une fonction qui sera appelée lorsque cet événement se produira. La fonction sera passée les arguments suivants :

    - `details`
      - : [`object`](#details). Détails sur la demande. Voir les [`détails`](#details) ci-dessous.

    Retourne : {{WebExtAPIRef('webRequest.BlockingResponse')}} ou une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

    - Pour traiter la requête de manière synchrone, inclure`"blocking"` dans le paramètre `extraInfoSpec` et retourner un objet `BlockingResponse`, avec son `cancel` ou ses propriétés `authCredentials`.
    - Pour traiter la requête de manière asynchrone, inclure `"blocking"` dans le paramètre `extraInfoSpec` et retourner une `Promise` qui est résolue avec un objet  `BlockingResponse`, avec son `cancel` ou ses propriétés `authCredentials`.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Un filtre qui restreint les événements qui seront envoyés à cet auditeur.
- `extraInfoSpec`{{optional_inline}}

  - : `array` de `string`. Options supplémentaires pour l'événement. Vous pouvez passer n'importe laquelle des valeurs suivantes :

    - `"blocking"`: faire le blocage de la demande, afin que vous puissiez annuler la demande ou fournir des informations d'authentification.
    - ` "``responseHeaders``" `: inclure `responseHeaders` dans l'objet `details` transmis à l'auditeur

## Objets supplémentaires

### détails

- `challenger`

  - : `object`. Le serveur demandant l'authentification. C'est un objet avec les propriétés suivantes :

    - `host`
      - : `string`. Le [nom d'hôte](https://en.wikipedia.org/wiki/Hostname#Internet_hostnames) du serveur.
        **Warning**: Contrairement à chrome, Firefox retournera l'hôte demandé au lieu du proxy demandant l'authentification, même si `isProxy` est `true`.
    - `port`
      - : `integer`. Le numéro de port du serveur.

- `frameId`
  - : `integer`. Zéro si la requête se produit dans le cadre principal ; une valeur positive est l'ID d'une sous-trame dans laquelle la requête se produit. Si le document d'un (sous-)cadre est chargé (`type` is `main_frame` or `sub_frame`), `frameId` indique l'ID de ce cadre et non l'ID du cadre extérieur. Les ID de trame sont uniques dans un onglet.
- `isProxy`
  - : `boolean`. `true` pour Proxy-Authenticate, `false` pour WWW-Authenticate. **Note**: `webRequest.onAuthRequired` n'est appelé que pour les serveurs proxy HTTP et HTTPS/SSL nécessitant une authentification, et non pour les serveurs proxy SOCKS nécessitant une authentification.
- `method`
  - : `string`. Méthode HTTP standard : par exemple, "GET" ou "POST".
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
      - : `integer`. Délai d'attente de basculement en secondes. Si la connexion ne parvient pas à connecter le serveur proxy après ce nombre de secondes, le serveur proxy suivant dans le tableau renvoyé par [FindProxyForURL()](</fr/docs/Add-ons/WebExtensions/API/proxy#FindProxyForURL()_return_value>) sera utilisé.

- `realm`{{optional_inline}}
  - : `string`. La zone d'authentification [realm](https://tools.ietf.org/html/rfc1945#section-11) fournie par le serveur, s'il y en a un.
- `requestId`
  - : `string`. L'ID de la demande. Les ID de requête sont uniques au sein d'une session de navigateur, de sorte que vous pouvez les utiliser pour relier différents événements associés à la même requête.
- `responseHeaders`{{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Les en-têtes de réponse HTTP qui ont été reçus avec cette réponse.
- `scheme`
  - : `string`. Le schéma d'authentification : `"basic"` ou `"digest`".
- `statusCode`
  - : `integer`. Code d'état HTTP standard renvoyé par le serveur.
- `statusLine`
  - : `string`. Status d'état HTTP de la réponse ou la chaîne 'HTTP/0.9 200 OK' pour les réponses HTTP/0.9 (c'est-à-dire les réponses qui n'ont pas de ligne d'état) ou une chaîne vide s'il n'y a pas d'en-têtes
- `tabId`
  - : `integer`. ID de l'onglet dans lequel la demande a lieu. Définir à -1 si la requête n'est pas liée à un onglet.
- `timeStamp`
  - : `number`. L'heure à laquelle cet événement s'est déclenché, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Le type de ressource demandée : par exemple, "image", "script", "stylesheet".
- `url`
  - : `string`. Cible de la demande.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest.onAuthRequired", 10)}}

## Exemples

Ce code n'observe que les demandes d'authentification pour l'URL cible :

```js
var target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log("observing: " + requestDetails.requestId);
}

browser.webRequest.onAuthRequired.addListener(
  observe,
  {urls: [target]}
);
```

Ce code annule les demandes d'authentification pour l'URL cible :

```js
var target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log("canceling: " + requestDetails.requestId);
  return {cancel: true};
}

browser.webRequest.onAuthRequired.addListener(
  cancel,
  {urls: [target]},
  ["blocking"]
);
```

Ce code fournit les informations d'identification de manière synchrone. Il doit garder une trace des demandes en suspens, pour s'assurer qu'il n'essaie pas à plusieurs reprises de soumettre de mauvaises références :

```js
var target = "https://intranet.company.com/";

var myCredentials = {
  username: "me@company.com",
  password: "zDR$ERHGDFy"
}

var pendingRequests = [];

// A request has completed.
// We can stop worrying about it.
function completed(requestDetails) {
  console.log("completed: " + requestDetails.requestId);
  var index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsSync(requestDetails) {
  // If we have seen this request before, then
  // assume our credentials were bad, and give up.
  if (pendingRequests.indexOf(requestDetails.requestId) != -1) {
    console.log("bad credentials for: " + requestDetails.requestId);
    return {cancel:true};
  }
  pendingRequests.push(requestDetails.requestId);
  console.log("providing credentials for: " + requestDetails.requestId);
  return {authCredentials: myCredentials};
}

browser.webRequest.onAuthRequired.addListener(
    provideCredentialsSync,
    {urls: [target]},
    ["blocking"]
  );

browser.webRequest.onCompleted.addListener(
  completed,
  {urls: [target]}
);

browser.webRequest.onErrorOccurred.addListener(
  completed,
  {urls: [target]}
);
```

Ce code fournit les informations d'identification de manière asynchrone, en les récupérant à partir du stockage. Il doit également assurer le suivi des demandes en suspens, afin de s'assurer qu'il n'essaie pas à plusieurs reprises de soumettre de mauvaises références :

```js
var target = "https://httpbin.org/basic-auth/*";

var pendingRequests = [];

/*
A request has completed. We can stop worrying about it.
*/
function completed(requestDetails) {
  console.log("completed: " + requestDetails.requestId);
  var index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsAsync(requestDetails) {
  // If we have seen this request before,
  // then assume our credentials were bad,
  // and give up.
  if (pendingRequests.indexOf(requestDetails.requestId) != -1) {
    console.log("bad credentials for: " + requestDetails.requestId);
    return {cancel: true};

  } else {
    pendingRequests.push(requestDetails.requestId);
    console.log("providing credentials for: " + requestDetails.requestId);
    // we can return a promise that will be resolved
    // with the stored credentials
    return browser.storage.local.get(null);
  }
}

browser.webRequest.onAuthRequired.addListener(
    provideCredentialsAsync,
    {urls: [target]},
    ["blocking"]
  );

browser.webRequest.onCompleted.addListener(
  completed,
  {urls: [target]}
);

browser.webRequest.onErrorOccurred.addListener(
  completed,
  {urls: [target]}
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
