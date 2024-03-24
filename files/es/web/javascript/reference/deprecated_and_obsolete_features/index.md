---
title: Características en desuso y obsoletas
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---

{{JsSidebar("More")}}

Esta página enumera las características de JavaScript que están en desuso (es decir, todavía están disponibles pero se planea eliminarlas) y obsoletas (es decir, que ya no se pueden usar).

## Características en desuso

Estas características desaconsejadas aún se pueden usar, pero se deben usar con precaución porque se espera que se eliminen por completo en el futuro. Deberías trabajar para sustituirlas con las versiones recomendadas en tu código.

### Propiedades de RegExp

las siguientes propiedades están en desuso. Esto no afecta su uso en el {{jsxref("String.replace", "reemplazo de cadenas", "", 1)}}:

| Propiedad                                         | Descripción                                                                                                                                                                                         |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.n", "$1-$9")}}                   | Coincidencias de subcadenas entre paréntesis, si las hay. **Precaución:** El uso de estas propiedades puede generar problemas, ya que las extensiones del navegador pueden modificarlas. ¡Evítalas! |
| {{jsxref("RegExp.input", "$_")}}                  | Consulta `entrada`.                                                                                                                                                                                 |
| {{jsxref("RegExp.multiline", "$*")}}              | Consulta `multiline`.                                                                                                                                                                               |
| {{jsxref("RegExp.lastMatch", "$&amp;")}}          | Consulta `lastMatch`.                                                                                                                                                                               |
| {{jsxref("RegExp.lastParen", "$+")}}              | Consulta `lastParen`.                                                                                                                                                                               |
| {{jsxref("RegExp.leftContext", "$`")}}            | Consulta `leftContext`.                                                                                                                                                                             |
| {{jsxref("RegExp.rightContext", "$'")}}           | Consulta `rightContext`.                                                                                                                                                                            |
| {{jsxref("RegExp.input", "input")}}               | La cadena contra la que se compara una expresión regular.                                                                                                                                           |
| {{jsxref("RegExp.lastMatch", "lastMatch")}}       | Los últimos caracteres coincidentes.                                                                                                                                                                |
| {{jsxref("RegExp.lastParen", "lastParen")}}       | La última coincidencia de subcadena entre paréntesis, si la hubiera.                                                                                                                                |
| {{jsxref("RegExp.leftContext", "leftContext")}}   | La subcadena que precede a la coincidencia más reciente.                                                                                                                                            |
| {{jsxref("RegExp.rightContext", "rightContext")}} | La subcadena que sigue a la coincidencia más reciente.                                                                                                                                              |

Las siguientes ahora son propiedades de instancias de `RegExp`, ya no del objeto `RegExp`:

| Propiedad                                     | Descripción                                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.global", "global")}}         | Si se debe probar o no la expresión regular con todas las posibles coincidencias en una cadena, o solo con la primera. |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | Si se deben o no ignorar las mayúsculas/minúsculas al intentar una coincidencia en una cadena.                         |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}   | El índice en el que comenzará la siguiente coincidencia.                                                               |
| {{jsxref("RegExp.multiline", "multiline")}}   | Si buscar o no en cadenas de varias líneas.                                                                            |
| {{jsxref("RegExp.source", "source")}}         | El texto del patrón.                                                                                                   |

### Métodos RegExp

- El método {{jsxref("RegExp.compile", "compile()")}} está en desuso.
- El método `valueOf` ya no está especializado para `RegExp`. Usa {{jsxref ("Object.valueOf()")}}.

### Propiedades de función

- Las propiedades {{jsxref("Global_Objects Function/caller", "caller")}} y {{jsxref("Global_Objects/Function/argument", "argument")}} están obsoletas porque filtran la función llamadora. En lugar de la propiedad arguments, debes usar el objeto {{jsxref("Functions/arguments", "arguments")}} dentro de los cierres de funciones.

### Generador heredado

- La {{jsxref("Statements/Legacy_generator_function", "Declaración de función del generador heredado")}} y {{jsxref("Operators/Legacy_generator_function", "Expresión de función del generador heredado")}} están en desuso. En su lugar usa {{jsxref("Statements/function*", "declaraciones function*")}} y {{jsxref ("Operators/function *", "expresión function*")}}.
- {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 Array comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} y {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 Generator comprehension", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} están en desuso.

### Iterador

- {{jsxref("Global_Objects/StopIteration", "StopIteration")}} está en desuso.
- {{jsxref("Global_Objects/Iterator", "Iterator")}} está en desuso.

### Métodos de objeto

- {{jsxref("Object.watch", "watch")}} y {{jsxref("Object.unwatch", "unwatch")}} están en desuso. En su lugar usa {{jsxref("Proxy")}}.
- `__iterator__` está en desuso.
- `Object.prototype.__noSuchMethod__` está en desuso. En su lugar usa {{jsxref("Proxy")}}.

### Métodos de `Date`

- {{jsxref("Global_Objects/Date/getYear", "getYear")}} y {{jsxref("Global_Objects/Date/setYear", "setYear")}} se ven afectados por el problema del año 2000 y se han subsumido por {{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} y {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}}.
- En nuevo código, debes usar {{jsxref("Global_Objects/Date/toISOString", "toISOString")}} en lugar del método en desuso {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}}.
- {{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} está en desuso.

### Funciones

- Las {{jsxref ("Operadores/Expression_closures", "expresiones closure", "", 1)}} están en desuso. En su lugar, utiliza {{jsxref("Operators/function", "funciones")}} o {{jsxref("Functions/Arrow_functions", "funciones de flecha", "", 1)}} normales.

### Proxy

- [Proxy.create](/es/docs/Archive/Web/Old_Proxy_API) y [Proxy.createFunction](/es/docs/Archive/Web/Old_Proxy_API) están en desuso. En su lugar usa {{jsxref("Proxy")}}.
- Las siguientes trampas están obsoletas:

  - `hasOwn` ([bug 980565](https://bugzilla.mozilla.org/show_bug.cgi?id=980565), Firefox 33).
  - `getEnumerablePropertyKeys` ([bug 783829](https://bugzilla.mozilla.org/show_bug.cgi?id=783829), Firefox 37)
  - `getOwnPropertyNames` ([bug 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)
  - `keys` ([bug 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)

### Secuencias de escape

- Las secuencias de escape octales (\ seguida de uno, dos o tres dígitos octales) están en desuso en los literales de cadenas y expresiones regulares.
- Las funciones {{jsxref("Global_Objects/escape", "escape")}} y {{jsxref("Global_Objects/unescape", "unescape")}} están en desuso. Usa {{jsxref("Global_Objects/encodeURI", "encodeURI")}}, {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Global_Objects/decodeURI", "decodeURI")}} o {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} para codificar y decodificar secuencias de escape para caracteres especiales.

### Métodos de cadena

- [Métodos de envoltura HTML](/es/docs/tag/HTML%20wrapper%20methods) tal como {{jsxref("String.prototype.fontsize")}} y {{jsxref("String.prototype.big")}}.
- {{jsxref("String.prototype.quote")}} se eliminó desde Firefox 37.
- el parámetro no estándar `flags` en {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}} y {{jsxref("String.prototype.replace ")}} están en desuso.
- {{jsxref("String.prototype.substr")}} probablemente no se eliminará pronto, pero está definido en el [Anexo B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr) del estándar ECMA-262, cuya [introducción](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) dice: "... Los programadores no deben usar o asumir la existencia de estas características y comportamientos al escribir un nuevo código ECMAScript. ..."

## Características obsoletas

Estas características obsoletas se han eliminado por completo de JavaScript y ya no se pueden utilizar a partir de la versión indicada de JavaScript.

### Objeto

| Propiedad                 | Descripción                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| `__count__`               | Devuelve el número de propiedades enumerables directamente en un objeto definido por el usuario. |
| `__parent__`              | Apunta al contexto de un objeto.                                                                 |
| `Object.prototype.eval()` | Evalúa una cadena de código JavaScript en el contexto del objeto especificado.                   |
| `Object.observe()`        | Observar de forma asincrónica los cambios en un objeto.                                          |
| `Object.unobserve()`      | Elimina observadores.                                                                            |
| `Object.getNotifier()`    | Crea un objeto que permite desencadenar sintéticamente un cambio.                                |

### Función

| Propiedad                                            | Descripción                    |
| ---------------------------------------------------- | ------------------------------ |
| {{jsxref("Global_Objects/Function/arity", "arity")}} | Número de argumentos formales. |

### Array

| Propiedad                       | Descripción                                         |
| ------------------------------- | --------------------------------------------------- |
| {{jsxref("Array.observe()")}}   | Observación asincrónica de cambios en los arreglos. |
| {{jsxref("Array.unobserve()")}} | Elimina observadores.                               |

### Número

- {{jsxref("Number.toInteger()")}}

### ParallelArray

- {{jsxref("ParallelArray")}}

### Declaraciones

- {{jsxref("Statements/for_each...in", "for each...in")}} está obsoleta. En su lugar utiliza {{jsxref("Statements/for...of", "for...of")}}.
- La desestructuración {{jsxref("Statements/for...in", "for...in")}} está obsoleta. En su lugar utiliza {{jsxref("Statements/for...of", "for...of")}}.
- los bloques let y la expresiones let están obsoletas.

### E4X

Consulta [E4X](/es/docs/Archive/Web/E4X) para obtener más información.

### Variables nítidas

Consulta [Variables nítidas en JavaScript](/es/docs/Archive/Web/Sharp_variables_in_JavaScript) para obtener más información.
