---
title: DOMError
slug: Web/API/DOMError
---

{{ APIRef("DOM") }}

La interfaz **`DOMError`** describe un objeto de error que contiene un nombre de error.

## Propiedades

- {{domxref("DOMError.name")}} {{readOnlyInline}}
  - : Devuelve un {{ domxref("DOMString") }} representando uno de los tipos de errores listados a continuación.

## Tipos de errores

| Type                         | Description                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| `IndexSizeError`             | Indice fuera de rango (Ej:. en un objeto {{ domxref("range") }}). |
| `HierarchyRequestError`      | El árbol de jerarquías del nodo no es correcto.                   |
| `WrongDocumentError`         | El objeto está en un {{ domxref("document") }} incorrecto.        |
| `InvalidCharacterError`      | El string contiene caracteres inválidos.                          |
| `NoModificationAllowedError` | El objeto no puede modificarse.                                   |
| `NotFoundError`              | El objeto no puede hallarse.                                      |
| `NotSupportedError`          | La operación no está permitida/soportada.                         |
| `InvalidStateError`          | El objeto está inválido.                                          |
| `SyntaxError`                | El string no coincide con el patrón dado.                         |
| `InvalidModificationError`   | El objeto no puede modificarse de esta manera.                    |
| `NamespaceError`             | La operación no está permitida por Namespaces de XML.             |
| `InvalidAccessError`         | El objeto no soporta la operación o el argumento.                 |
| `TypeMismatchError`          | El tipo de objeto no es el esperado.                              |
| `SecurityError`              | La operación es insegura.                                         |
| `NetworkError`               | Error de red.                                                     |
| `AbortError`                 | La operación fue abortada.                                        |
| `URLMismatchError`           | La URL dada no coincide con otra URL a comparar.                  |
| `QuotaExceededError`         | La quota ha sido excedida.                                        |
| `TimeoutError`               | La operación ha alcanzado su timeout.                             |
| `InvalidNodeTypeError`       | El nodo (o uno de sus antecedentes) es incorrecto.                |
| `DataCloneError`             | El objeto no puede clonarse.                                      |

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{ domxref("DOMException") }}
