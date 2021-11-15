---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onBeforeRequest
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
---
{{AddonSidebar()}}

Cet événement est déclenché lorsqu'une demande est sur le point d'être faite et avant que les en-têtes ne soient disponibles. C'est un bon endroit pour écouter si vous voulez annuler ou rediriger la demande.

Pour annuler ou rediriger la requête, incluez d'abord `"blocking"` dans l'argument tableau `extraInfoSpec` pour `addListener()`. Ensuite, dans la fonction Listener, retournez un objet {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}, en définissant la propriété appropriée :

- pour annuler la demande, inclure une propriété `cancel` avec la valeur `true`.
- pour rediriger la requête, inclure une propriété `redirectUrl` avec la valeur fixée à l'URL vers laquelle vous voulez rediriger.

Si une extension veut rediriger une URL publique (par exemple HTTPS) ver une [page d'extension](/fr/Add-ons/WebExtensions/user_interface/Extension_pages), de l'extension doit contenir une clé [web_accessible_resources](/fr/Add-ons/WebExtensions/manifest.json/web_accessible_resources) qui liste l'URL de la page d'extension.

Lorsque plusieurs gestionnaires de blocage modifient une requête, une seule série de modifications prend effet. Les redirections et les annulations ont la même priorité. Ainsi, si vous avez annulé une requête, vous pouvez voir une autre requête avec la même  `requestId` à nouveau si un autre gestionnaire de blocage a redirigé la requête.

A partir de Firefox 52, au lieu de renvoyer `BlockingResponse`, l'auditeur peut renvoyer une  [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue avec un `BlockingResponse`. Ceci permet à l'auditeur de traiter la demande de manière asynchrone.

Si vous utilisez le `"blocking"`, vous devez avoir la [permission de l'API "webRequestBlocking"](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) dans votre manifest.json.

## Syntaxe

```js
browser.webRequest.onBeforeRequest.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRequest.removeListener(listener)
browser.webRequest.onBeforeRequest.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback, filter, extraInfoSpec)`
  - : Ajoute un auditeur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de l'`écouteur` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `l'écouteur` est inscrit à cet événement. Renvoie `true` s'il est à l'écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produira. La fonction sera passée les arguments suivants :

    - `details`
      - : [`object`](#details). Détails sur la demande. Voir les [`details`](#details) ci-dessous.

    Les retours : {{WebExtAPIRef('webRequest.BlockingResponse')}}. Si `"blocking"`est spécifié dans le paramètre `extraInfoSpec`, l'auditeur d'événement doit retourner un objet `BlockingResponse`, et peut définir soit son `annulation`, soit ses propriétés  `redirectUrl`. A partir de Firefox 52, au lieu de renvoyer `BlockingResponse`,l'auditeur peut renvoyer une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue avec un `BlockingResponse`. Ceci permet à l'auditeur de traiter la demande de manière asynchrone.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Un filtre qui restreint les événements qui seront envoyés à cet auditeur.
- `extraInfoSpec`{{optional_inline}}

  - : `array` de `string`. Options supplémentaires pour l'événement. Vous pouvez passer n'importe laquelle des valeurs suivantes :

    - `"blocking"`: rendre la requête synchrone, de sorte que vous pouvez annuler ou rediriger la requête
    - `"requestBody"`: include `requestBody` dans l'objet `details` transmis à l'auditeur

## Objets supplémentaires

### détails

- `documentUrl`
  - : `string`. URL du document dans lequel la ressource sera chargée. Par exemple, si la page web "https\://example.com" contient une image ou un iframe, alors le `documentUrl` pour l'image ou l'iframe sera "https\://example.com". Pour un document de niveau supérieur, `documentUrl` n'est pas défini.
- `frameAncestors`

  - : `array`. Contient des informations pour chaque document dans la hiérarchie des cadres jusqu'au document de niveau supérieur. Le premier élément du tableau contient des informations sur le parent immédiat du document demandé, et le dernier élément contient des informations sur le document de niveau supérieur. Si la charge est réellement pour le document de niveau supérieur, alors ce tableau est vide.

    - `url`
      - : `string`. URL à partir de laquelle le document a été chargé.
    - `frameId`
      - : `integer`. Le `frameId` du document. `details.frameAncestors[0].frameId` est le même que `details.parentFrameId`.

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

- `requestBody`{{optional_inline}}

  - : `object`. Contient les données du corps de la requête HTTP. Seulement si `extraInfoSpec` contient `"requestBody"`.

    - `error`{{optional_inline}}
      - : `string`. Ce paramètre est défini si des erreurs ont été rencontrées lors de l'obtention des données du corps de la demande.
    - `formData`{{optional_inline}}

      - : `object`. Cet objet est présent si la méthode de requête est POST et que le corps est une séquence de paires clé-valeur codées en UTF-8 sous la forme "multipart/form-data" ou "application/x-www-form-urlencoded".

        Il s'agit d'un dictionnaire dans lequel chaque clé contient la liste de toutes les valeurs de cette clé. Par exemple: `{'key': ['value1', 'value2']}`. Si les données sont d'un autre type de support, ou si elles sont malformées, l'objet n'est pas présent.

    - `raw`{{optional_inline}}
      - : `array` of `{{WebExtAPIRef('webRequest.UploadData')}}`. Si la méthode de requête est PUT ou POST, et que le corps n'est pas déjà analysé dans `formData`, alors ce tableau contient les éléments de corps de requête non analysés.

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

{{Compat("webextensions.api.webRequest.onBeforeRequest", 10)}}

### Ordre de résolution DNS lorsque BlockingResponse est utilisé

En ce qui concerne la résolution DNS lorsque BlockingResponse est utilisé avec  OnBeforeRequest : Dans le canal HTTP, avec réponse de blocage se produit avant la résolution DNS et avant la connexion spéculative. Pour les autres canaux, une connexion spéculative peut provoquer des requêtes DNS avant onBeforeRequest. Cet ordre n'est pas quelque chose sur quoi un développeur d'extension devrait se fier, car il peut varier d'un navigateur à l'autre, et encore moins d'une version de navigateur à l'autre, et encore moins d'un canal de requête à l'autre. Référez-vous [à la clarification du problème de BugZilla fournie par les développeurs Mozilla sur la commande de la résolution DNS](https://bugzilla.mozilla.org/show_bug.cgi?id=1466099)

## Exemples

Ce code enregistre l'URL de chaque ressource demandée qui correspond au modèle  [\<all_urls>](/fr/Add-ons/WebExtensions/Match_patterns#<all_urls>) :

```js
function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
```

Ce code annule les demandes d'images qui sont faites aux URLs sous "https\://mdn.mozillademos.org/" (pour voir l'effet, visitez n'importe quelle page de MDN qui contient des images, comme [Firefox Developer Edition](/fr/docs/Mozilla/Firefox/Developer_Edition)):

```js
// match pattern for the URLs to redirect
var pattern = "https://mdn.mozillademos.org/*";

// cancel function returns an object
// which contains a property `cancel` set to `true`
function cancel(requestDetails) {
  console.log("Canceling: " + requestDetails.url);
  return {cancel: true};
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  {urls: [pattern], types: ["image"]},
  ["blocking"]
);
```

Ce code remplace, par redirection, toutes les demandes de réseau pour des images qui sont faites à des URLs sous "https\://mdn.mozillademos.org/" (pour voir l'effet, visitez n'importe quelle page de MDN qui contient des images, comme [Firefox Developer Edition](/fr/docs/Mozilla/Firefox/Developer_Edition)) :

```js
// match pattern for the URLs to redirect
var pattern = "https://mdn.mozillademos.org/*";

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);
```

Ce code est exactement comme l'exemple précédent, sauf que l'auditeur traite la requête de manière asynchrone. Il renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui définit une minuterie et se résout avec l'URL de redirection lorsque la minuterie expire :

```js
// match pattern for the URLs to redirect
var pattern = "https://mdn.mozillademos.org/*";

// URL we will redirect to
var redirectUrl = "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif";

// redirect function returns a Promise
// which is resolved with the redirect URL when a timer expires
function redirectAsync(requestDetails) {
  console.log("Redirecting async: " + requestDetails.url);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve({redirectUrl});
    }, 2000);
  });
}

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  {urls: [pattern], types: ["image"]},
  ["blocking"]
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
