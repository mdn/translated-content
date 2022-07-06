---
title: XMLDocument
slug: Web/API/XMLDocument
tags:
  - API
  - DOM
  - Experimental
translation_of: Web/API/XMLDocument
---
{{ ApiRef("DOM") }} {{SeeCompatTable}}

L'interface XMLDocument représente un document XML. Elle hérite du {{domxref("Document")}} générique et ne lui ajoute aucune méthode ou propriété spécifique : néanmoins, plusieurs algorithmes se comportent différemment avec les deux types de documents.

## Propriété

_Cette interface n'a pas de propriété spécifique et n'en hérite aucune._

## Méthodes

_Cette interface n'ajoute aucune nouvelle méthode._

- {{domxref("XMLDocument.load()")}}
  - : Charge un document XML.

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire                                                      |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", 'dom.html#xmldocument', "Extension to XMLDocument")}}             | {{Spec2('HTML WHATWG')}} | Pas de changement par rapport à {{SpecName("HTML5 W3C")}} |
| {{SpecName("HTML5 W3C", "dom.html#loading-xml-documents", "Extension to XMLDocument")}} | {{Spec2('HTML5 W3C')}}     | Ajoute la méthode `load()`.                                      |
| {{SpecName('DOM WHATWG', '#xmldocument', 'XMLDocument')}}                                         | {{Spec2('DOM WHATWG')}} | Définition initiale.                                             |

## Compatibilité des navigateurs

{{Compat("api.XMLDocument")}}

## Voir aussi

- [Référence du DOM](/fr/docs/Web/API/Document_Object_Model)
