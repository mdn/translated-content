---
title: Deprecated and obsolete features
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - Depreciado
  - Obsoleto
translation_of: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---
{{JsSidebar("More")}}

Esta página lista funcionalidades do JavaScript que foram descontinuadas (ou seja, continuam disponíveis mas têm remoção planejada) e obsoletas (ou seja, não estão mais disponíveis).

## _Funcionalidades_ descontinuadas

Estas _features_ descontinuadas ainda podem ser usadas, mas com cautela, porque espera-se que sejam removidas por completo no futuro. Aconselha-se que remova-as do seu código.

### Propriedades RegExp

As propriedades a seguir foram descontinuadas. Isto não afeta o uso delas em {{jsxref("String.replace", "replacement strings", "", 1)}}:

| Propriedade                                                      | Descrição                                                                                                                                                                |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.n", "$1-$9")}}                         | Encontra _substrings_ dentro de parênteses. **Atenção:** Usar estas propriedades pode resultar em problemas, porque extensões do navegador podem modifica-las. Evite-as! |
| {{jsxref("RegExp.input", "$_")}}                     | Ver `input`.                                                                                                                                                             |
| {{jsxref("RegExp.multiline", "$*")}}                 | Ver `multiline`.                                                                                                                                                         |
| {{jsxref("RegExp.lastMatch", "$&amp;")}}             | Ver `lastMatch`.                                                                                                                                                         |
| {{jsxref("RegExp.lastParen", "$+")}}                 | Ver `lastParen`.                                                                                                                                                         |
| {{jsxref("RegExp.leftContext", "$`")}}             | Ver `leftContext`.                                                                                                                                                       |
| {{jsxref("RegExp.rightContext", "$'")}}             | Ver `rightContext`.                                                                                                                                                      |
| {{jsxref("RegExp.input", "input")}}                 | A string encontrada por uma expressão regular.                                                                                                                           |
| {{jsxref("RegExp.lastMatch", "lastMatch")}}         | Os últimos caracteres encontrados.                                                                                                                                       |
| {{jsxref("RegExp.lastParen", "lastParen")}}         | A última _substring_ entre parênteses que foi encontrada.                                                                                                                |
| {{jsxref("RegExp.leftContext", "leftContext")}} | A penúltima _substring_ encontrada.                                                                                                                                      |
| {{jsxref("RegExp.rightContext", "rightContext")}} | A _substring_ que segue a que foi encontrada por último.                                                                                                                 |

As propriedades a seguir pertencem a instâncias de um `RegExp`, não mais ao objeto `RegExp`:

| Propriedades                                                 | Descrição                                                                                                                    |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.global", "global")}}             | Determina se deve ou não testar a expressão regular com todas as combinações possíveis em uma _string_ ou só com a primeira. |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | Determina se deve ou não ignorar a capitalização ao tentar encontrar uma combinação em uma _string_.                         |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}     | O índince que aponta o começo da próxima combinação.                                                                         |
| {{jsxref("RegExp.multiline", "multiline")}}     | Determina se deve ou não procurar por _strings_ em várias linhas diferentes.                                                 |
| {{jsxref("RegExp.source", "source")}}             | O texto do padrão.                                                                                                           |

### Métodos RegExp

- O método {{jsxref("RegExp.compile", "compile()")}} foi descontinuado.
- O método `valueOf` não é mais especializado para `RegExp`. Use {{jsxref("Object.valueOf()")}}.

### Propriedades de Função

- As propriedades {{jsxref("Global_Objects/Function/caller", "caller")}} e {{jsxref("Global_Objects/Function/arguments", "arguments")}} foram descontinuadas, porque elas estouram o chamador de funções. Ao invés da propriedade _arguments_, deve-se usar o objeto {{jsxref("Functions/arguments", "arguments")}} dentro dos fechamentos da função.

### Legacy generator

- {{jsxref("Statements/Legacy_generator_function", "Legacy generator function statement")}} e {{jsxref("Operators/Legacy_generator_function", "Legacy generator function expression")}} foram descontinuados. No lugar deles, use {{jsxref("Statements/function*", "function* statement")}} e {{jsxref("Operators/function*", "function* expression")}}.
- O {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} e o {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} foram descontinuados.

### Iterador

- {{jsxref("Global_Objects/StopIteration", "StopIteration")}} foi descontinuado.
- {{jsxref("Global_Objects/Iterator", "Iterator")}} foi descontinuado.

### Métodos de objeto

- {{jsxref("Object.watch", "watch")}} e {{jsxref("Object.unwatch", "unwatch")}} foram descontinuados. No lugar deles, use {{jsxref("Proxy")}} .
- `__iterator__` foi descontinuado.
- {{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} foi descontinuado. Use {{jsxref("Proxy")}} em seu lugar.

### Métodos de data

- {{jsxref("Global_Objects/Date/getYear", "getYear")}} e {{jsxref("Global_Objects/Date/setYear", "setYear")}} foram afetados pelo Bug do Milênio e foram reagrupados em {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} e {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.
- Deve-se usar {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} ao invés do método descontinuado {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} em códigos novos.
- {{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} foi descontinuado.

### Funções

- {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}} foram descontinuadas. Use {{jsxref("Operators/function", "functions")}} normais ou {{jsxref("Functions/Arrow_functions", "arrow functions", "", 1)}} no lugar delas.

### Proxy

- [Proxy.create](/pt-BR/docs/Archive/Web/Old_Proxy_API) e [Proxy.createFunction](/pt-BR/docs/Archive/Web/Old_Proxy_API) foram descontinuadas. Use {{jsxref("Proxy")}} no lugar delas.
- As armadilhas a seguir ficaram obsoletas:

  - `hasOwn` ({{bug(980565)}}, Firefox 33).
  - `getEnumerablePropertyKeys` ({{bug(783829)}}, Firefox 37)
  - `getOwnPropertyNames` ({{bug(1007334)}}, Firefox 33)
  - `keys` ({{bug(1007334)}}, Firefox 33)

### let

- {{jsxref("Statements/let", "let blocks", "#let_block")}} e {{jsxref("Statements/let", "let expressions", "#let_expressions")}} foram descontinuados.

### Sequências de escape

- Sequências de escape octais (\ seguido por um, dois ou três dígitos octais) foram descontinuadas em literais _string_ e expressões regulares.
- As funções {{jsxref("Global_Objects/escape", "escape")}} e {{jsxref("Global_Objects/unescape", "unescape")}} foram descontinuadas. Use {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} ou {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} para codificar e decodificar sequências de escape para caracteres especiais.

### Métodos de _string_

- [HTML wrapper methods](/pt-BR/docs/tag/HTML%20wrapper%20methods) como {{jsxref("String.prototype.fontsize")}} e {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.quote")}} foi removido do Firefox 37.
- parâmetros flag não padrões em {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, e {{jsxref("String.prototype.replace")}} foram depreciados.

## _Features_ obsoletas

Estas _features_ obsoletas foram totamente removidas do JavaScript e não podem ser usadas a partir da versão indicada do JavaScript.

### Object

| Property                                                                                 | Description                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| {{jsxref("Global_Objects/Object/count", "__count__")}}                 | Returns the number of enumerable properties directly on a user-defined object. |
| {{jsxref("Global_Objects/Object/Parent", "__parent__")}}             | Points to an object's context.                                                 |
| {{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}} | Evaluates a string of JavaScript code in the context of the specified object.  |
| {{jsxref("Object.observe()")}}                                                 | Asynchronously observing the changes to an object.                             |
| {{jsxref("Object.unobserve()")}}                                             | Remove observers.                                                              |
| {{jsxref("Object.getNotifier()")}}                                             | Creates an object that allows to synthetically trigger a change.               |

### Function

| Property                                                             | Description                 |
| -------------------------------------------------------------------- | --------------------------- |
| {{jsxref("Global_Objects/Function/arity", "arity")}} | Number of formal arguments. |

### Array

| Property                                 | Description                                 |
| ---------------------------------------- | ------------------------------------------- |
| {{jsxref("Array.observe()")}} | Asynchronously observing changes to Arrays. |
| {{jsxref("Array.unobserve()")}} | Remove observers.                           |

### Number

- {{jsxref("Number.toInteger()")}}

### ParallelArray

- {{jsxref("ParallelArray")}}

### Statements

- {{jsxref("Statements/for_each...in", "for each...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.
- Destructuring {{jsxref("Statements/for...in", "for...in")}} is deprecated. Use {{jsxref("Statements/for...of", "for...of")}} instead.

### E4X

See [E4X](/pt-BR/docs/Archive/Web/E4X) for more information.

### Sharp variables

See [Sharp variables in JavaScript](/pt-BR/docs/Archive/Web/Sharp_variables_in_JavaScript) for more information.
