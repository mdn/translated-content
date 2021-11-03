---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
tags:
  - AJAX
  - API
  - NeedsBrowserCompatibility
  - NeedsContent
  - Reference
  - TopicStub
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequestEventTarget
---
{{APIRef("XMLHttpRequest")}}

`XMLHttpRequestEventTarget` est l'interface qui décrit les gestionnaires d'événements que vous pouvez implémenter dans un objet qui gérera les événements pour un {{ domxref("XMLHttpRequest") }}.

{{InheritanceDiagram}}

## Propriétés

- {{ domxref("XMLHttpRequestEventTarget.onabort") }}
  - : Contient la fonction à appeler lorsqu'une demande est abandonnée et que l'événement {{event('abort')}} est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onerror") }}
  - : Contient la fonction à appeler lorsqu'une demande rencontre une erreur et que l'événement {{event('error')}} est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onload") }}
  - : Contient la fonction à appeler lorsqu'une requête HTTP revient après avoir récupéré le contenu avec succès et que l'événement {{event('load')}} est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onloadstart") }}
  - : Contient la fonction qui est appelée lorsque la requête HTTP commence à charger des données et que l'événement {{event('loadstart')}} est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.onprogress") }}
  - : Contient la fonction qui est appelée périodiquement avec des informations sur l'avancement de la demande et l'événement {{event('progress')}} est reçu par cet objet.
- {{ domxref("XMLHttpRequestEventTarget.ontimeout") }}
  - : Contient la fonction qui est appelée si l'événement expire et que l'événement {{event("timeout")}} est reçu par cet objet ; cela ne se produit que si un délai d'attente a été préalablement établi en définissant la valeur de l'attribut timeout de l'objet XMLHttpRequest.
- {{ domxref("XMLHttpRequestEventTarget.onloadend") }}
  - : Contient la fonction qui est appelée lorsque le chargement est terminé, même si la demande a échoué, et que l'événement {{event('loadend')}} est reçu par cet objet.

## Spécifications

| Spécification                            | Statut                               | Commentaire            |
| ---------------------------------------- | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilité des navigateurs

{{Compat("api.XMLHttpRequestEventTarget")}}

## Voir aussi

- {{ domxref("XMLHttpRequest") }}
- [Using XMLHttpRequest](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest)
