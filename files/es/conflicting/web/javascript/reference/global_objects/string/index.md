---
title: DOMString
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String
tags:
  - API
  - DOM
  - Referencia
  - Referencia DOM Gecko
  - Referência DOM
  - String
  - WebAPI
translation_of: Web/API/DOMString
original_slug: Web/API/DOMString
---
{{APIRef("DOM")}}

**`DOMString`** es un String UTF-16. Dado que JavaScript ya usa estos strings, se mapea `DOMString` directamente a {{jsxref("String")}}.

Pasarle [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) a un método o parámetro que acepte un`DOMString` suele convertirse a texto como `"null"`.

## Especificaciones

| Especificación                                                                               | Estado                       | Comentarios                                              |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------- |
| {{SpecName('WebIDL', '#idl-DOMString', 'DOMString')}}                     | {{Spec2('WebIDL')}}     | Reescritura de la definición que elimina casos extraños. |
| {{SpecName('DOM3 Core', 'core.html#DOMString', 'DOMString')}}             | {{Spec2('DOM3 Core')}} | Sin cambios desde {{SpecName('DOM2 Core')}}       |
| {{SpecName('DOM2 Core', 'core.html#ID-C74D1578', 'DOMString')}}         | {{Spec2('DOM2 Core')}} | Sin cambios desde {{SpecName('DOM1')}}           |
| {{SpecName('DOM1', 'level-one-core.html#ID-C74D1578', 'DOMString')}} | {{Spec2('DOM1')}}     | Definición inicial.                                      |

## Ver también

- [String](/es/docs/Web/JavaScript/Reference/Global_Objects/String)
- {{domxref("USVString")}}
- {{domxref("CSSOMString")}}
- [`StringView` – una representación en C de los strings basados en arrays tipados](/es/docs/Web/JavaScript/Typed_arrays/String_view)
- [Strings binarios](/es/docs/Web/API/DOMString/Binary)
