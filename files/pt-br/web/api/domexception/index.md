---
title: DOMException
slug: Web/API/DOMException
---

{{ APIRef("DOM") }}

A interface **DOMException** representa um evento anormal (denominado de **exceção**) durante a chamada ou a espera de um resultado do metodo ou uma solicitação a uma web API. Basicamente, falando, é o tratamento dos erros e condições, dos mesmos, nos processos web.

Cada exceção tem um **nome**, que é uma pequena string de estilo "CamelCase" que identifica o erro ou condição anormal.

## Constructor

- {{domxref("DOMException.DOMException()", "DOMException()")}} {{experimental_inline}}
  - : Returns a `DOMException` object with a specified message and name.

## Properties

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{readOnlyInline}}
  - : Returns a `short` that contains one of the [error code constants](#error_codes), or `0` if none match. This field is used for historical reasons. New DOM exceptions don't use this anymore: they put this info in the {{domxref("DOMException.name")}} attribute.
- {{domxref("DOMException.message")}} {{readOnlyInline}}
  - : Returns a {{ domxref("DOMString") }} representing a message or description associated with the given [error name](/pt-BR/docs/Web/API/DOMException#Error_names).
- {{domxref("DOMException.name")}} {{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} that contains one of the strings associated with an [error name](#Error_names).

## Error names

Common error names are listed here. Some APIs define their own sets of names, so this is not necessarily a complete list.

> **Nota:** Because historically the errors were identified by a numeric value which corresponded with a named variable defined to have that value, some of the entries below indicate the legacy code value and constant name that were used in the past.

- `IndexSizeError`
  - : The index is not in the allowed range. For example, this can be thrown by the {{ domxref("Range") }} object. (Legacy code value: `1` and legacy constant name: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : The node tree hierarchy is not correct. (Legacy code value: `3` and legacy constant name: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : The object is in the wrong {{ domxref("Document") }}. (Legacy code value: `4` and legacy constant name: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : The string contains invalid characters. (Legacy code value: `5` and legacy constant name: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : The object cannot be modified. (Legacy code value: `7` and legacy constant name: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : The object cannot be found here. (Legacy code value: `8` and legacy constant name: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : The operation is not supported. (Legacy code value: `9` and legacy constant name: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : The object is in an invalid state. (Legacy code value: `11` and legacy constant name: `INVALID_STATE_ERR`)
- `SyntaxError`
  - : The string did not match the expected pattern. (Legacy code value: `12` and legacy constant name: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : The object cannot be modified in this way. (Legacy code value: `13` and legacy constant name: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : The operation is not allowed by Namespaces in XML. (Legacy code value: `14` and legacy constant name: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : The object does not support the operation or argument. (Legacy code value: `15` and legacy constant name: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : The type of the object does not match the expected type. (Legacy code value: `17` and legacy constant name: `TYPE_MISMATCH_ERR`) This value is deprecated; the JavaScript {{jsxref("TypeError")}} exception is now raised instead of a `DOMException` with this value.
- `SecurityError`
  - : The operation is insecure. (Legacy code value: `18` and legacy constant name: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : A network error occurred. (Legacy code value: `19` and legacy constant name: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : The operation was aborted. (Legacy code value: `20` and legacy constant name: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : The given URL does not match another URL. (Legacy code value: `21` and legacy constant name: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : The quota has been exceeded. (Legacy code value: `22` and legacy constant name: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : The operation timed out. (Legacy code value: `23` and legacy constant name: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : The node is incorrect or has an incorrect ancestor for this operation. (Legacy code value: `24` and legacy constant name: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : The object can not be cloned. (Legacy code value: `25` and legacy constant name: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : The encoding or decoding operation failed (No legacy code value and constant name).
- `NotReadableError` {{experimental_inline}}
  - : The input/output read operation failed (No legacy code value and constant name).
- `UnknownError` {{experimental_inline}}
  - : The operation failed for an unknown transient reason (e.g. out of memory) (No legacy code value and constant name).
- `ConstraintError` {{experimental_inline}}
  - : A mutation operation in a transaction failed because a constraint was not satisfied (No legacy code value and constant name).
- `DataError` {{experimental_inline}}
  - : Provided data is inadequate (No legacy code value and constant name).
- `TransactionInactiveError` {{experimental_inline}}
  - : A request was placed against a transaction which is currently not active, or which is finished (No legacy code value and constant name).
- `ReadOnlyError` {{experimental_inline}}
  - : The mutating operation was attempted in a "readonly" transaction (No legacy code value and constant name).
- `VersionError` {{experimental_inline}}
  - : An attempt was made to open a database using a lower version than the existing version (No legacy code value and constant name).
- `OperationError` {{experimental_inline}}
  - : The operation failed for an operation-specific reason (No legacy code value and constant name).
- `NotAllowedError`
  - : The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission (No legacy code value and constant name).

## Specifications

| Specification                                                           | Status                 | Comment                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('WebIDL', '#idl-DOMException', 'constructor')}}              | {{Spec2('WebIDL')}}    | Adds the constructor for the `DOMException` class. Adds the `NotReadableError`, `UnknownError`, `ConstraintError`, `DataError`, `TransactionInactiveError`, `ReadOnlyError`, `VersionError`, `OperationError`, and `NotAllowedError` values.             |
| {{SpecName('DOM4', '#exception-domexception', 'DOMException')}}         | {{Spec2('DOM4')}}      | Added `SECURITY_ERR`, `NETWORK_ERR`, `ABORT_ERR`, `URL_MISMATCH_ERR`, `QUOTA_EXCEEDED_ERR`, `TIMEOUT_ERR`, `INVALID_NODE_TYPE_ERR`, and `DATA_CLONE_ERR`. The property `code` has been deprecated for exception values. The `EncodingError` value added. |
| {{SpecName('DOM3 Core', 'core.html#ID-17189187', 'DOMException')}}      | {{Spec2('DOM3 Core')}} | Added of `VALIDATION_ERR` and `TYPE_MISMATCH_ERR`.                                                                                                                                                                                                       |
| {{SpecName('DOM2 Core', 'core.html#ID-17189187', 'DOMException')}}      | {{Spec2('DOM2 Core')}} | Added of `INVALID_STATE_ERR`, `SYNTAX_ERR`, `INVALID_MODIFICATION_ERR`, `NAMESPACE_ERR`, and `INVALID_ACCESS_ERR`.                                                                                                                                       |
| {{SpecName('DOM1', 'level-one-core.html#ID-17189187', 'DOMException')}} | {{Spec2('DOM1')}}      | Initial definition.                                                                                                                                                                                                                                      |

## Compatibilidade com navegadores

{{Compat("api.DOMException")}}

## See also

- {{ domxref("DOMError") }}
