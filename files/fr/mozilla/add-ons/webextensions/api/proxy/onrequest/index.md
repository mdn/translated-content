---
title: proxy.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Proxy
  - Reference
  - WebExtensions
  - onRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy/onRequest
---
{{AddonSidebar()}}

Déclenché lorsqu'une requête Web est sur le point d'être effectuée, pour donner à l'extension la possibilité de l'utiliser comme proxy.

Cet événement est étroitement modélisé sur les événements définis dans l'API  [`webRequest`](/fr/Add-ons/WebExtensions/API/webRequest) Comme ces événements, sa fonction `addListener()` prend trois arguments :

- l'écouteur qui sera appelé lorsque l'événement est déclenché.
- Un objet [`RequestFilter`](/fr/Add-ons/WebExtensions/API/webRequest/RequestFilter) contrôlant quelles requêtes provoquent le déclenchement de l'événement.
- un tableau de chaînes pour contrôler d'autres aspects du comportement de l'événement.

L'événement est déclenché avant l'un des événements `webRequest` pour la même demande.

Lorsque l'événement est déclenché, l'écouteur est appelé avec un objet contenant des informations sur la requête. L'écouteur renvoie un objet {{WebExtAPIRef("proxy.ProxyInfo")}} représentant un proxy à utiliser (ou un tableau de tels objets, permettant au navigateur de basculer si un proxy est inaccessible).

Pour utiliser `proxy.onRequest`, une extension doit avoir la [permission API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "proxy" , ainsi que la [permission d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour les URL des requêtes qu'elle intercepte - ela signifie essentiellement que les modèles de correspondance de l'argument `filter` doivent être un sous-ensemble de l'extension autorisations de l'hôte.

## Syntaxe

```js
browser.proxy.onRequest.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.proxy.onRequest.removeListener(listener)
browser.proxy.onRequest.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener, filter, extraInfoSpec)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `listener`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction passera un seul argument, qui est un objet {{WebExtAPIRef("proxy.RequestDetails")}} contenant les détails de la requête.

    L'écouteur peut renvoyer l'un des éléments suivants:

    - un objet {{WebExtAPIRef("proxy.ProxyInfo")}}
    - un tableau d'objets `proxy.ProxyInfo`
    - Une `Promise` qui se résout en un objet `ProxyInfo`
    - Une `Promise` qui résout en un tableau d'objets `ProxyInfo`.

    Si l'écouteur renvoie un tableau, ou une Promesse qui se résout en un tableau, alors tous les objets`ProxyInfo` après le premier représentent les basculements: si le proxy à la position N dans le tableau n'est pas accessible quand son `ProxyInfo.failoverTimeout` alors le navigateur essayez le proxy à la position N+1.

    S'il y a une erreur spécifiant les objets `proxy.ProxyInfo` objects, alors {{WebExtAPIRef("proxy.onError")}} sera appelé.

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. Un ensemble de filtres qui limite les événements qui seront envoyés à cet écouteur.
- `extraInfoSpec` {{optional_inline}}
  - : `array` de `string`. Options supplémentaires pour l'événement. Vous pouvez passer une seule valeur, `"requestHeaders"`, pour inclure les en-têtes de demande dans l'objet de `details` transmis à l'écouteur.

## Compatibilité du navigateur

{{Compat("webextensions.api.proxy.onRequest", 10)}}

## Exemples

Ce code intercepte les requêtes à `<all_urls>`, et les envoie par procuration si elles ne sont pas destinées à un cadre de premier niveau.

```js
function shouldProxyRequest(requestInfo) {
  return requestInfo.parentFrameId != -1;
}

function handleProxyRequest(requestInfo) {
  if (shouldProxyRequest(requestInfo)) {
    console.log(`Proxying: ${requestInfo.url}`);
    return {type: "http", host: "127.0.0.1", port: 65535};
  }
  return {type: "direct"};
}

browser.proxy.onRequest.addListener(handleProxyRequest, {urls: ["<all_urls>"]});
```

{{WebExtExamples}}
