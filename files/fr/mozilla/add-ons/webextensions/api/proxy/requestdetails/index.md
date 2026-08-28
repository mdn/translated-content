---
title: proxy.RequestDetails
slug: Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Contient des informations sur une requête Web que le navigateur est sur le point de faire. Une instance de cet objet est passée dans l'écouteur {{WebExtAPIRef("proxy.onRequest")}}.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes&nbsp;:

- `cookieStoreId`
  - : `string`. L'ID de magasin de cookies du contexte actuel.
- `documentId` {{Optional_Inline}}
  - : `string`. L'UUID du document effectuant la requête. Voir l'article [Travailler avec `documentId`](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) pour plus d'informations.
- `documentUrl`
  - : `string`. URL de la page dans laquelle la ressource demandée est chargée.
- `frameId`
  - : `integer`. Zéro si la requête se produit dans le cadre principal; une valeur positive est l'ID d'une sous-trame dans laquelle la requête se produit. Si le document d'une (sous-)frame est chargé (`type` est `main_frame` ou `sub_frame`), `frameId` indique l'ID de cette trame, pas l'ID de la trame externe. Les ID de cadre sont uniques dans un onglet.
- `fromCache`
  - : `boolean`. Indique si cette réponse est récupérée du cache disque.
- `incognito`
  - : `boolean` `true` pour les demandes de navigation privées
- `ip`
  - : L'adresse IP du serveur à laquelle la demande est envoyée. Notez qu'il peut s'agir d'une adresse IPv6 littérale.
- `method`
  - : `string`. Méthode HTTP standard: par exemple, `"GET"` ou `"POST"`.
- `originUrl`
  - : `string`. URL de la ressource qui a déclenché cette demande. Notez que ceci peut ne pas être le même que l'URL de la page dans laquelle la ressource demandée est chargée. Par exemple, si un document déclenche un chargement dans une fenêtre différente [l'attribut cible d'un lien](/fr/docs/Web/HTML/Reference/Elements/a#target), ou d'un document CSS inclut une image utilisant la [notation fonctionnelle `url()`](/fr/docs/Web/CSS/docs/Web/CSS/url_function), alors ce est l'URL du document original ou du document CSS, respectivement.
- `parentDocumentId` {{Optional_Inline}}
  - : `string`. Un UUID du document parent auquel appartient le cadre. Non défini s'il n'y a pas de document parent. Pour plus d'informations, consultez l'article [Travailler avec `documentId`](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId).
- `parentFrameId`
  - : `integer`. ID de l'image qui contient l'image qui a envoyé la demande. Défini sur -1 si aucun cadre parent n'existe.
- `requestId`
  - : `string`. L'ID de la demande Les ID de demande sont uniques dans une session de navigateur, vous pouvez donc les utiliser pour associer différents évènements associés à la même demande.
- `requestHeaders`{{Optional_Inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. Les en-têtes de requête HTTP qui vont être envoyés avec cette requête. Notez que ceci n'est inclus que si l'option `"requestHeaders"` a été passée dans `addListener()`.
- `tabId`
  - : `integer`. ID de l'onglet dans lequel la requête a lieu. Défini sur -1 si la requête n'est pas liée à un onglet.
- `timeStamp`
  - : `number`. L'heure à laquelle cet évènement s'est déclenché, en [millisecondes depuis l'époque](https://fr.wikipedia.org/wiki/Heure_Unix).
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. Le type de ressource demandé&nbsp;: par exemple, `"image"`, `"script"`, `"stylesheet"`.
- `url`
  - : `string`. Cible de la demande.

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}
