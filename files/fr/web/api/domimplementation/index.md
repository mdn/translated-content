---
title: DOMImplementation
slug: Web/API/DOMImplementation
tags:
  - API
  - DOM
  - Interface
  - Reference
translation_of: Web/API/DOMImplementation
---
{{ ApiRef("DOM") }}

L'interface **`DOMImplementation`** représente un objet fournissant des méthodes qui ne dépendent pas d'un document particulier. Un tel objet est renvoyé par la propriété {{domxref("Document.implementation")}}.

## Propriété

_Cette interface n'a pas de propriété spécifique et n'en hérite aucune._

## Méthodes

_Pas de méthode héritée._

- {{domxref("DOMImplementation.createDocument()")}}
  - : Crée et retourne un {{domxref("XMLDocument")}}.
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : Crée et retourne un {{domxref("DocumentType")}}.
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : Crée et retourne un {{domxref("Document")}} HTML.
- {{domxref("DOMImplementation.hasFeature()")}}
  - : Retourne un {{domxref("Boolean")}} indiquant si une caractéristique donnée est supportée ou non. Cette fonction n'est pas fiable et est conservée uniquement à des fins de compatibilité : à l'exception des requêtes liées au SVG, elle renvoie toujours la valeur `true` _(vrai)._ Les anciens navigateurs sont très incohérents dans leur comportement.

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#domimplementation', 'DOMImplementation')}}             | {{Spec2('DOM WHATWG')}} | Supprime la méthode `getFeature()`. Ajoute la méthode `createHTMLDocument()`. Modifie le type de retour de `createDocument()` de {{domxref("Document")}} à {{domxref("XMLDocument")}}. |
| {{SpecName('DOM3 Core', 'core.html#ID-102161490', 'DOMImplementation')}}         | {{Spec2('DOM3 Core')}}     | Ajoute la méthode `getFeature()` (jamais implémentée par un agent utilisateur).                                                                                                                           |
| {{SpecName('DOM2 Core', 'core.html#ID-102161490', 'DOMImplementation')}}         | {{Spec2('DOM2 Core')}}     | Ajoute les méthodes `createDocument()` et `createDocumentType()`.                                                                                                                                         |
| {{SpecName('DOM1', 'level-one-core.html#ID-102161490', 'DOMImplementation')}} | {{Spec2('DOM1')}}         | Définition initial.                                                                                                                                                                                       |

## Compatibilité des navigateurs

{{Compat("api.DOMImplementation")}}

## Voir aussi

- [Référence du DOM.](/fr/docs/Web/API/Document_Object_Model)
