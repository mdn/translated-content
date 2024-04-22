---
title: Sentencias
slug: Web/JavaScript/Reference/Statements
---

{{jsSidebar("Statements")}}

Las aplicaciones JavaScript se componen de sentencias con una sintaxis propia. Una sentencia puede estar formada por múltiples líneas. Puede haber varias sentencias en una sola línea si separamos cada una de las sentencias por un punto y coma. No es una palabra clave, sino un grupo de palabras clave.

## Sentencias y declaraciones por categoría

Puedes encontrarlas por orden alfabético en la columna de la izquierda .

### Control de flujo

- {{jsxref("Sentencias/block", "Block")}}
  - : Un bloque de sentencias se utiliza para agrupar cero o mas sentencias. El bloque se delimita por un par de llaves.
- {{jsxref("Sentencias/break", "break")}}
  - : Finaliza la sentencia actual loop, switch, o label y transfiere el control del programa a la siguiente sentencia de la sentencia finalizada.
- {{jsxref("Sentencias/continue", "continue")}}
  - : Finaliza la ejecucion de las sentencias dentro de la iteracion actual del actual bucle, y continua la ejecucion del bucle con la siguiente iteracion.
- {{jsxref("Sentencias/Empty", "Empty")}}
  - : Una sentencia vacía se utiliza para proveer una "no sentencia", aunque la sintaxis de JavaScript esperaba una.
- {{jsxref("Sentencias/if...else", "if...else")}}
  - : Ejecuta una sentencia si una condición especificada es true. Si la condición es false, otra sentencia puede ser ejecutada.
- {{jsxref("Sentencias/switch", "switch")}}
  - : Evalua una expresión, igualando el valor de la expresión a una clausula case y ejecuta las sentencias asociadas con dicho case.
- {{jsxref("Sentencias/throw", "throw")}}
  - : Lanza una excepción definida por el usuario.
- {{jsxref("Sentencias/try...catch", "try...catch")}}
  - : Marca un bloque de sentencias para ser probadas (try) y especifica una respuesta, en caso de que se lance una excepción.

### Declaraciones

- {{jsxref("Sentencias/var", "var")}}
  - : Declara una variable, opcionalmente inicializándola a un valor.
- {{jsxref("Sentencias/let", "let")}}
  - : Declara una variable local de ambito de bloque, opcionalmente inicializándola a un valor.
- {{jsxref("Sentencias/const", "const")}}
  - : Declara una constante de solo lectura.

### Funciones

- {{jsxref("Sentencias/function", "function")}}
  - : Declara una función con los parámetros especificados.
- {{jsxref("Sentencias/function*", "function*")}}
  - : Los generadores de funciones permiten escribir {{jsxref("Iteration_protocols", "iteradores")}} con mas facilidad.
- {{experimental_inline}} {{jsxref("Statements/async_function", "async function")}}
  - : Declara una función asíncrona con los parámetros especificados.
- {{jsxref("Statements/return", "return")}}
  - : Especifica el valor a ser retornado por una función.
- {{jsxref("Statements/class", "class")}}
  - : Declara una clase.

### Iteraciones

- {{jsxref("Sentencias/do...while", "do...while")}}
  - : Crea un bucle que ejecuta una instrucción especificada hasta que la condición de prueba se evalúa como falsa. La condición se evalúa después de ejecutar la instrucción, lo que da como resultado que la instrucción especificada se ejecute al menos una vez.
- {{jsxref("Sentencias/for", "for")}}
  - : Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
- {{deprecated_inline()}} {{non-standard_inline()}}{{jsxref("Sentencias/for_each...in", "for each...in")}}
  - : Itera una variable especificada sobre todos los valores de las propiedades del objeto. Para cada propiedad distinta, se ejecuta una instrucción especificada.
- {{jsxref("Sentencias/for...in", "for...in")}}
  - : Itera sobre las propiedades enumerables de un objeto, en orden albitrario. Para cada propiedad distinta, las instrucciones pueden ser ejecutadas.
- {{jsxref("Sentencias/for...of", "for...of")}}
  - : Iterates over iterable objects (including {{jsxref("Array", "array")}}, array-like objects, [iterators and generators](/es/docs/JavaScript/Guide/Iterators_and_Generators)), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- {{jsxref("Sentencias/while", "while")}}
  - : Crea un bucle que ejecuta la instrucción especificada siempre que la condición de prueba se evalúe como verdadera. La condición se evalúa antes de ejecutar la instrucción.

### Otros

- {{jsxref("Sentencias/debugger", "debugger")}}
  - : Invoca cualquier funcionalidad de depuración disponible. Si no hay funcionalidad de depuración disponible, esta isntrucción no tiene efecto.
- {{jsxref("Sentencias/export", "export")}}
  - : Usada para permitir a un script firmada proveer propiedades, funciones y objetos a otros scripts firmada o sin firmar. Esta antigua funcionalidad de Netscape ha sido removida y será redefinida por los modulos de ECMAScript 6
- {{jsxref("Sentencias/import", "import")}}
  - : Usada para permitir a un escript importar propiedades, funciones y objetos desde otro script firmado que ha exportado su información. Esta antigua funcionalidad de Netscape ha sido removida y será redefinida por los modulos de ECMAScript 6.
- {{jsxref("Sentencias/label", "label")}}

  - : Provee una instrucción con un identificador que puedes referir usando una instrucción `break` o `continue` .

- {{deprecated_inline()}} {{jsxref("Sentencias/with", "with")}}
  - : Extiende la cadena de alcance para una instrucción.

## Especificaciones

{{Specifications}}

## Vea También

- [Operadores](/es/docs/Web/JavaScript/Referencia/Operadores)
