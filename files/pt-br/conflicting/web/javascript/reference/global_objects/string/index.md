---
title: DOMString
slug: conflicting/Web/JavaScript/Reference/Global_Objects/String
---

{{APIRef("DOM")}}

**`DOMString`** é uma String UTF-16. Como o JavaScript já usa tais strings, uma `DOMString` é mapeada diretamente a uma {{jsxref("String")}}.

Passando [`null`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/null) para um método ou parâmetro que aceite uma `DOMString`, tal valor é convertido para a string `"null"`.

## Especificações

| Specification                                                                                | Status                       | Comment                                                        |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------- |
| {{SpecName('WebIDL', '#idl-DOMString', 'DOMString')}}                     | {{Spec2('WebIDL')}}     | Reformulação da definição para remover alguns casos estranhos. |
| {{SpecName('DOM3 Core', 'core.html#DOMString', 'DOMString')}}             | {{Spec2('DOM3 Core')}} | Nenhuma mudança da {{SpecName('DOM2 Core')}}            |
| {{SpecName('DOM2 Core', 'core.html#ID-C74D1578', 'DOMString')}}         | {{Spec2('DOM2 Core')}} | Nenhuma mudança da {{SpecName('DOM1')}}                |
| {{SpecName('DOM1', 'level-one-core.html#ID-C74D1578', 'DOMString')}} | {{Spec2('DOM1')}}     | Definição inicial.                                             |

## Veja também

- [String](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String "/pt-BR/docs/Web/API/DOMString")
- {{domxref("USVString")}}
- {{domxref("CSSOMString")}}
- [`StringView` – a C-like representation of strings based on typed arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays/String_view)
- [Binary strings](/pt-BR/docs/Web/API/DOMString/Binary)
