---
title: DOMImplementation
slug: Web/API/DOMImplementation
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référence du DOM.](/fr/docs/Web/API/Document_Object_Model)
