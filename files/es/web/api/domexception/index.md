---
title: DOMException
slug: Web/API/DOMException
---

{{ APIRef("DOM") }}

La interfaz **`DOMException`** representa un evento anormal (llamado **excepción**) que ocurre como el resultado de llamar a un método o acceder a una propiedad de una API web. Asi es como las condiciones de error se describen en las API web.

Cada excepción tiene un **nombre** (_name_), el cual es una cadena corta de estilo "PascalCase" que identifica el error o la condición anormal.

`DOMException` es un {{Glossary("Serializable object","Objeto serializable")}}, por lo que puede ser clonado con {{domxref("structuredClone()")}} o copiado entre [`Workers`](/es/docs/Web/API/Worker) usando {{domxref("Worker.postMessage()", "postMessage()")}}.

## Constructor

- {{domxref("DOMException.DOMException()", "DOMException()")}} {{experimental_inline}}
  - : Retorna un objeto `DOMException` con un mensaje y nombre específico.

## Propiedades

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{readOnlyInline}}
  - : Retorna una de las constantes de código de error heredado, o `0` si ninguna coincide.
- {{domxref("DOMException.message")}} {{readOnlyInline}}
  - : Retorna una cadena que representa un mensaje o descripción asociado con el [nombre de error](#nombres_de_errores) dado.
- {{domxref("DOMException.name")}} {{readOnlyInline}}
  - : Retorna una cadena que contiene una de las cadenas asociadas con un [nombre de error](#nombres_de_errores).

## Nombres de errores

Los nombres comunes de errores son listados aqui. Algunas API definen sus propios conjuntos de nombres, por lo tanto esta no es un lista completa necesariamente.

Tenga en cuenta que los siguientes errores históricos obsoletos no tienen un nombre de error pero en cambio tiene solo un valor de código constante heredado y un nombre de constante heredado:

- Valor de código heredado: `2`, nombre de constante heredado: `DOMSTRING_SIZE_ERR`
- Valor de código heredado: `6`, nombre de constante heredado: `NO_DATA_ALLOWED_ERR`
- Valor de código heredado: `16`, nombre de constante heredado: `VALIDATION_ERR`

> [!NOTE]
> Debido a que históricamente los errores estaban identificados por un valor numérico que correspondía con un nombre de variable definida para tener ese valor, algunas de las entradas a continuación indican el valor de código heredado y el nombre constante que se usó en el pasado.

- `IndexSizeError`
  - : El índice no está en el rango permitido. Por ejemplo, esto podría ser arrojado por el objeto {{ domxref("Range") }}. (Valor de código heradado: `1` y nombre de constante heredado: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : La jerarquía del árbol de nodos no es correcta. (Valor de código heredado: `3` y nombre de constante heredado: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : El objeto esta en el {{ domxref("Document") }} incorrecto. (Valor de código heredado: `4` y nombre de constante heredado: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : La cadena contiene caracteres inválidos. (Valor de código heredado: `5` y nombre de constante heredado: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : El objeto no pudo ser modificado. (Valor de código heredado: `7` y nombre de constante heredado: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : El objeto no pudo ser encontrado aquí. (Valor de código heredado: `8` y nombre de constante heredado: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : La operación no es compatible. (Valor de código heredado: `9` y nombre de constante heredado: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : El objeto esta en un estado inválido. (Valor de código heredado: `11` y nombre de constante heredado: `INVALID_STATE_ERR`)
- `InUseAttributeError`
  - : El atributo esta en uso. (Valor de código heredado: `10` y nombre de constante heredado: `INUSE_ATTRIBUTE_ERR`)
- `SyntaxError`
  - : La cadena no coincide con el patrón esperado. (Valor de código heredado: `12` y nombre de constante heredado: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : El objeto no puede ser modificado de esta manera. (Valor de código heredado: `13` y nombre de constante heredado: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : La operación no esta permitida por el {{Glossary("Namespace","espacio de nombres")}} en el XML. (Valor de código heredado: `14` y nombre de constante heredado: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : El objeto no admite la operación o el argumento. (Valor de código heredado: `15` y nombre de constante heredado: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : El tipo de objeto no coincide con el tipo esperado. (Valor de código heredado: `17` y nombre de constante heredado: `TYPE_MISMATCH_ERR`) Este valor esta obsoleto; ahora se genera la excepción de Javascript {{jsxref("TypeError")}} en lugar de una `DOMException` con este valor.
- `SecurityError`
  - : La operación es insegura. (Valor de código heredado: `18` y nombre de constante heredado: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ocurrió un error en la red. (Valor de código heredado: `19` y nombre de constante heredado: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : La operación fue abortada. (Valor de código heredado: `20` y nombre de constante heredado: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : La URL dada no coincide con otra URL. (Valor de código heredado: `21` y nombre de constante heredado: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : La cuota ha sido excedida. (Valor de código heredado: `22` y nombre de constante heredado: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : Se agotó el tiempo de espera de la operación. (Valor de código heredado: `23` y nombre de constante heredado: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : El nodo es incorrecto o tiene un ancestro incorrecto para esta operación. (Valor de código heredado: `24` y nombre de constante heredado: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : El objeto no pudo ser clonado. (Valor de código heredado: `25` y nombre de constante heredado: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : La operación de codificación o decodificación falló (Sin valor de código heredado ni nombre de constante).
- `NotReadableError` {{experimental_inline}}
  - : La operación de lectura de entrada/salida falló (Sin valor de código heredado ni nombre de constante).
- `UnknownError` {{experimental_inline}}
  - : La operación fallo por una razón desconocida transitoria (p.ej. memoria agotada) (Sin valor de código heredado ni nombre de constante).
- `ConstraintError` {{experimental_inline}}
  - : Una operación de mutación falló en una transacción porque no se cumplió una restricción (Sin valor de código heredado ni nombre de constante).
- `DataError` {{experimental_inline}}
  - : Los datos proporcionados son inadecuados (Sin valor de código heredado ni nombre de constante).
- `TransactionInactiveError` {{experimental_inline}}
  - : Una solicitud fue realizada hacia una transacción que esta actualmente inactiva o finalizada (Sin valor de código heredado ni nombre de constante).
- `ReadOnlyError` {{experimental_inline}}
  - : La operación de mutación se intentó en una transacción de "solo lectura" (Sin valor de código heredado ni nombre de constante).
- `VersionError` {{experimental_inline}}
  - : Se intentó abrir una base de datos usando una version anterior que la versión existente (Sin valor de código heredado ni nombre de constante).
- `OperationError` {{experimental_inline}}
  - : La operación fallo por un motivo específico de la operación (Sin valor de código heredado ni nombre de constante).
- `NotAllowedError`
  - : La solicitud no esta permitida por el agente de usuario o la plataforma en el contexto actual, posiblemente porque el usuario denegó el permiso (Sin valor de código heredado ni nombre de constante).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase tambien

- [Un polyfill de `DOMException`](https://github.com/zloirock/core-js#domexception) esta disponible en [`core-js`](https://github.com/zloirock/core-js)
- {{ domxref("DOMError") }}
