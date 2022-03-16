---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
tags:
  - Add-ons
  - Extensions
  - Proxy
  - RequestDetails
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
---
{{AddonSidebar()}}

Contient des informations sur une requête Web que le navigateur est sur le point de faire. Une instance de cet objet est passée dans l'écouteur  {{WebExtAPIRef("proxy.onRequest")}}.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `cookieStoreId`
  - : `string`. L'ID de magasin de cookies du contexte actuel.
- `documentUrl`
  - : `string`. URL de la page dans laquelle la ressource demandée sera chargée.
- `frameId`
  - : `integer`. Zéro si la requête se produit dans le cadre principal; une valeur positive est l'ID d'une sous-trame dans laquelle la requête se produit. Si le document d'une  (sous-)frame est chargé (`type` est `main_frame` ou `sub_frame`), `frameId` indique l'ID de cette trame, pas l'ID de la trame externe. Les ID de cadre sont uniques dans un onglet.
- `fromCache`
  - : `boolean`. Indique si cette réponse sera récupérée du cache disque.
- `incognito`
  - : `boolean` `true` pour les demandes de navigation privées
- `ip`
  - : L'adresse IP du serveur à laquelle la demande sera envoyée. Notez qu'il peut s'agir d'une adresse IPv6 littérale.
- `method`
  - : `string`. Méthode HTTP standard: par exemple, "GET" ou "POST".
- `originUrl`
  - : `string`. URL de la ressource qui a déclenché cette demande. Notez que ceci peut ne pas être le même que l'URL de la page dans laquelle la ressource demandée sera chargée. Par exemple, si un document déclenche un chargement dans une fenêtre différente l'[attribut cible d'un lien](/fr/docs/Web/HTML/Element/a#attr-target), ou d'un document CSS inclut une image utilisant la  [`notation fonctionnelle url()`](</fr/docs/Web/CSS/url#The_url()_functional_notation>), alors ce sera l'URL du document original ou du document CSS, respectivement.
- `parentFrameId`
  - : `integer`. ID de l'image qui contient l'image qui a envoyé la demande. Défini sur -1 si aucun cadre parent n'existe.
- `requestId`
  - : `string`. L'ID de la demande Les ID de demande sont uniques dans une session de navigateur, vous pouvez donc les utiliser pour associer différents événements associés à la même demande.
- `requestHeaders`{{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Les en-têtes de requête HTTP qui vont être envoyés avec cette requête. Notez que ceci n'est inclus que si l'option  `"requestHeaders"` a été passée dans `addListener()`.
- `tabId`
  - : `integer`. ID de l'onglet dans lequel la requête a lieu. Défini sur -1 si la requête n'est pas liée à un onglet.
- `timeStamp`
  - : `number`. L'heure à laquelle cet événement s'est déclenché, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Le type de ressource demandé : par exemple, "image", "script", "stylesheet".
- `url`
  - : `string`. Cible de la demande.

## Compatibilité du navigateur

{{Compat("webextensions.api.proxy.RequestDetails")}}

{{WebExtExamples}}
