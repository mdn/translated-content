---
title: DOMError
slug: Web/API/DOMError
tags:
  - API
  - DOM
  - Erreurs
  - Interface
  - Reference
translation_of: Web/API/DOMError
---
{{ APIRef("DOM") }}{{deprecated_header}}

L'interface **`DOMError`**  décrit un objet d'erreur contenant le nom de l'erreur.

## Propriétés

- {{domxref("DOMError.name")}} {{readOnlyInline}}
  - : Retourne une {{ domxref("DOMString") }} _(chaîne de caractères)_ représentant l'un des noms de type d'erreur (voir ci-dessous).
- {{domxref("DOMError.message")}} {{readOnlyInline}}
  - : Retourne une {{ domxref("DOMString") }} _(chaîne de caractères)_ représentant un message ou une description associée avec le nom de type d'erreur.

## Type d'erreurs

| Type                         | Description                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | L'index n'est pas dans l'étendue autorisée (par exemple, déclenché dans un objet {{ domxref("range") }}). |
| `HierarchyRequestError`      | La hiérarchie de l'arbre de noeud est incorrecte.                                                               |
| `WrongDocumentError`         | L'objet est dans le mauvais {{ domxref("document") }}.                                                   |
| `InvalidCharacterError`      | La chaîne de caractères contient des caractères non valides.                                                    |
| `NoModificationAllowedError` | L'objet ne peut pas être modifié.                                                                               |
| `NotFoundError`              | L'objet ne peut pas être trouvé.                                                                                |
| `NotSupportedError`          | Cette opération n'est pas supportée.                                                                            |
| `InvalidStateError`          | L'objet est dans un état non valide.                                                                            |
| `SyntaxError`                | La chaîne de caractère ne correspond pas au motif attendu.                                                      |
| `InvalidModificationError`   | L'objet ne peut pas être modifié de cette façon.                                                                |
| `NamespaceError`             | Cette opération n'est pas autorisée par les Namespaces en XML.                                                  |
| `InvalidAccessError`         | L'objet ne supporte pas cette opération ou cet argument.                                                        |
| `TypeMismatchError`          | Le type de l'objet ne correspond pas au type attendu.                                                           |
| `SecurityError`              | L'opération n'est pas sécurisée.                                                                                |
| `NetworkError`               | Une erreur réseau est survenue.                                                                                 |
| `AbortError`                 | L'opération a été annulée.                                                                                      |
| `URLMismatchError`           | L'URL fournie ne correspond pas à une autre URL.                                                                |
| `QuotaExceededError`         | Le quota a été dépassé.                                                                                         |
| `TimeoutError`               | L'opération a dépassé le temps autorisé. (Time Out)                                                             |
| `InvalidNodeTypeError`       | Le noeud est incorrect ou a un ancêtre incorrect pour cette opération.                                          |
| `DataCloneError`             | L'objet n'a pas pu être cloné.                                                                                  |

## Spécifications

| Spécification                                                            | Statut                   | Commentaire          |
| ------------------------------------------------------------------------ | ------------------------ | -------------------- |
| {{SpecName('DOM4', '#interface-domerror', 'DOMError')}} | {{Spec2('DOM4')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DOMError")}}

## Voir aussi

- {{ domxref("DOMException") }}
