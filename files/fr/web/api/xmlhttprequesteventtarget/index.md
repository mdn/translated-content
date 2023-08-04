---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
---

{{APIRef("XMLHttpRequest")}}

`XMLHttpRequestEventTarget` est l'interface qui décrit les gestionnaires d'événements que vous pouvez implémenter dans un objet qui gérera les événements pour un {{ domxref("XMLHttpRequest") }}.

{{InheritanceDiagram}}

## Propriétés

- {{ domxref("XMLHttpRequestEventTarget.onabort") }}
  - : Contient la fonction à appeler lorsqu'une demande est abandonnée et que l'événement [`abort`](/fr/docs/Web/API/XMLHttpRequest/abort_event) est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onerror") }}
  - : Contient la fonction à appeler lorsqu'une demande rencontre une erreur et que l'événement [`error`](/fr/docs/Web/API/XMLHttpRequest/error_event) est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onload") }}
  - : Contient la fonction à appeler lorsqu'une requête HTTP revient après avoir récupéré le contenu avec succès et que l'événement [`load`](/fr/docs/Web/API/XMLHttpRequest/load_event) est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onloadstart") }}
  - : Contient la fonction qui est appelée lorsque la requête HTTP commence à charger des données et que l'événement [`loadstart`](/fr/docs/Web/API/XMLHttpRequest/loadstart_event) est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onprogress") }}
  - : Contient la fonction qui est appelée périodiquement avec des informations sur l'avancement de la demande et l'événement [`progress`](/fr/docs/Web/API/XMLHttpRequest/progress_event) est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.ontimeout") }}
  - : Contient la fonction qui est appelée si l'événement expire et que l'événement [`timeout`](/fr/docs/Web/API/XMLHttpRequest/timeout_event) est reçu par cet objet ; cela ne se produit que si un délai d'attente a été préalablement établi en définissant la valeur de l'attribut timeout de l'objet XMLHttpRequest.
- {{ domxref("XMLHttpRequestEventTarget.onloadend") }}
  - : Contient la fonction qui est appelée lorsque le chargement est terminé, même si la demande a échoué, et que l'événement [`loadend`](/fr/docs/Web/API/XMLHttpRequest/loadend_event) est reçu par cet objet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ domxref("XMLHttpRequest") }}
- [Using XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
