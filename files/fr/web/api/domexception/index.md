---
title: DOMException
slug: Web/API/DOMException
---

{{ APIRef("DOM") }}

L'interface **`DOMException`** représente un évènement anormal (appelé **exception**) qui appraît suite à l'appel d'une méthode ou à l'accès à une propriété d'une API web. C'est essentiellement lié à la façon dont les conditions d'erreur sont décrites dans les API web.

Chaque exception a un **nom**, qui est une courte chaîne identifiant l'erreur ou la condition anormale.

## Constructeur

- {{domxref("DOMException.DOMException()", "DOMException()")}} {{experimental_inline}}
  - : Retourne un objet `DOMException` avec un message et un nom spécifiés.

## Propriétés

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{readOnlyInline}}
  - : Renvoie un court message qui contient l'un des [constantes de code d'erreur](#noms_derreur) ou 0 si aucun ne correspond. Ce champ est utilisé pour des raisons historiques. Les nouvelles exceptions DOM ne l'utilisent plus : elles mettent cette information dans l'attribut {{domxref("DOMException.name")}}.
- {{domxref("DOMException.message")}} {{readOnlyInline}}
  - : Returne une {{domxref("DOMString")}} (_chaîne de caractères_) représentant un message ou une description associé avec le [nom d'erreur](/fr/docs/Web/API/DOMException#Error_names) donné.
- {{domxref("DOMException.name")}} {{readOnlyInline}}
  - : Retourne une {{domxref("DOMString")}} (_chaîne de caractères_) qui contient l'une des chaînes associées à un [nom d'erreur](#Error_names).

## Noms d'erreur

Les noms d'erreurs courants sont répertoriés ici. Certaines API définissent leurs propres ensembles de noms, il ne s'agit donc pas ici nécessairement d'une liste complète.

> **Note :** Parce qu'historiquement les erreurs ont été identifiées par une valeur numérique qui correspondait à une variable nommée définie pour avoir cette valeur, certaines des entrées ci-dessous indiquent la valeur de code héritée et le nom de constante qui ont été utilisés dans le passé.

- `IndexSizeError`
  - : L'index n'est pas dans la plage autorisée. Par exemple, cela peut être lancé par un objet {{ domxref("Range") }}. (Valeur de code héritée : `1` et nom de la constante héritée : `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : La hiérarchie de l'arborescence des nœuds est incorrecte. ( Valeur de code héritée&nbsp;: `3` et nom de la constante héritée : `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : L'objet est dans le mauvais {{ domxref("Document") }}. ( Valeur de code héritée&nbsp;: `4` et nom de la constante héritée : `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : La chaîne contient des caractères non valides. (Valeur de code héritée&nbsp;: `5` et nom de la constante héritée : `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : L'objet ne peut être modifié. (Valeur de code héritée&nbsp;: `7` et nom de la constante héritée : `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : L'objet ne peut être trouvé ici. (Valeur de code héritée&nbsp;: `8` et nom de la constante héritée : `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : L'opération n'est pas supportée. (Valeur de code héritée&nbsp;: `9` et nom de la constante héritée : `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : L'objet est dans un état non valide. (Valeur de code héritée&nbsp;: `11` et nom de la constante héritée : `INVALID_STATE_ERR`)
- `SyntaxError`
  - : La chaîne ne correspond pas au modèle attendu. (Valeur de code héritée&nbsp;: `12` et nom de la constante héritée : `SYNTAX_ERR`)
- `InvalidModificationError`
  - : L'objet ne peut pas être modifié de cette manière. (Valeur de code héritée&nbsp;: `13` et nom de la constante héritée : `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : L'opération n'est pas autorisée par Namespaces en XML. (Valeur de code héritée&nbsp;: `14` et nom de la constante héritée : `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : L'objet ne prend pas en charge l'opération ou l'argument. (Valeur de code héritée&nbsp;: `15` et nom de la constante héritée : `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Le type de l'objet ne correspond pas au type attendu. (Valeur de code héritée&nbsp;: `17` et nom de la constante héritée : `TYPE_MISMATCH_ERR`). Cette valeur est dépéciée, l'exception {{jsxref("TypeError")}} JavaScript est maintenant utilisée à la place d'une `DOMException` avec cette valeur.
- `SecurityError` {{experimental_inline}}
  - : L'opération n'est pas sécurisée. (Valeur de code héritée&nbsp;: `18` et nom de la constante héritée : `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Une erreur réseau s'est produite. (Valeur de code héritée&nbsp;: `19` et nom de la constante héritée : `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : L'opération a été annulée (Valeur de code héritée&nbsp;: `20` et nom de la constante héritée : `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : L'URL donnée ne correspond pas à une autre URL. (Valeur de code héritée&nbsp;: `21` et nom de la constante héritée : `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : Le quota a été dépassé. (Valeur de code héritée&nbsp;: `22` et nom de la constante héritée : `QUOTA_EXCEEDED_ERR`)
- `TimeoutError` {{experimental_inline}}
  - : Le temps est dépassé. (Valeur de code héritée&nbsp;: `23` et nom de la constante héritée : `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Le noeud est incorrect ou a un ancêtre incorrect pour cette opération. (Valeur de code héritée&nbsp;: `24` et nom de la constante héritée : `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : L'objet ne peut pas être cloné. ( Valeur de code héritée&nbsp;: `25` et nom de la constante héritée : `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : L'opération de codage ou de décodage a échoué (Pas de valeur de code ni de nom de constante hérités).
- `NotReadableError` {{experimental_inline}}
  - : L'opération de lecture entrée / sortie a échoué (Pas de valeur de code ni de nom de constante hérités).
- `UnknownError` {{experimental_inline}}
  - : L'opération a échoué pour une raison transitoire inconnue (par exemple dépassement de mémoire) (Pas de valeur de code ni de nom de constante hérités) .
- `ConstraintError` {{experimental_inline}}
  - : Une opération de mutation dans une transaction a échoué car une contrainte n'a pas été satisfaite (Pas de valeur de code ni de nom de constante hérités) .
- `DataError` {{experimental_inline}}
  - : Provided data is inadequate (No legacy code value and constant name).
- `TransactionInactiveError` {{experimental_inline}}
  - : Une demande a été placée contre une transaction qui n'est actuellement pas active ou qui est terminée (Pas de valeur de code ni de nom de constante hérités).
- `ReadOnlyError` {{experimental_inline}}
  - : L'opération de mutation a été tentée dans une transaction "en lecture seule" (Pas de valeur de code ni de nom de constante hérités).
- `VersionError` {{experimental_inline}}
  - : Une tentative a été faite pour ouvrir une base de données en utilisant une version inférieure à la version existante (Pas de valeur de code ni de nom de constante hérités).
- `OperationError` {{experimental_inline}}
  - : L'opération a échoué pour une raison spécifique à l'opération (Pas de valeur de code ni de nom de constante hérités).
- `NotAllowedError` {{experimental_inline}}
  - : La demande n'est pas autorisée par l'agent utilisateur ou la plateforme dans le contexte actuel, peut-être parce que l'utilisateur a refusé la permission (Pas de valeur de code ni de nom de constante hérités).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ domxref("DOMError") }}
