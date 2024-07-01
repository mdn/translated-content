---
title: Expresiones y operadores
slug: Web/JavaScript/Reference/Operators
---

{{jsSidebar("Operators", "Operadores")}}

Este capítulo documenta todos los operadores, expresiones y palabras clave del lenguaje JavaScript.

## Expresiones y operadores por categoría

Para obtener una lista alfabética, consulta la barra lateral de la izquierda.

### Expresiones primarias

Palabras clave básicas y expresiones generales en JavaScript.

- {{jsxref("Operators/this", "this")}}
  - : La palabra clave `this` se refiere a una propiedad especial de un contexto de ejecución.
- {{jsxref("Operators/function", "function")}}
  - : La palabra clave `function` define una expresión de función.
- {{jsxref("Operators/class", "class")}}
  - : La palabra clave `class` define una expresión de clase.
- {{jsxref("Operators/function", "function")}}
  - : La palabra clave `function*` define una expresión de función generadora.
- {{jsxref("Operators/yield", "yield")}}
  - : Pausar y reanudar una función generadora.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegar a otra función generadora u objeto iterable.
- {{jsxref("Operators/async_function", "async function")}}
  - : La `async function` define una expresión de función asíncrona.
- {{jsxref("Operators/await", "await")}}
  - : Pausa y reanuda una función asíncrona y espera la resolución/rechazo de la promesa.
- {{jsxref("Global_Objects/Array", "[]")}}
  - : Iniciador de arreglo/sintaxis literal.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Iniciador de objeto/sintaxis literal.
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : Sintaxis de expresión regular literal.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Operador de agrupación.

### Expresiones del lado izquierdo

Los valores de la izquierda son el destino de una asignación.

- {{jsxref("Operators/Property_accessors", "Propiedad accessors", "", 1)}}
  - : Los operadores miembro proporcionan acceso a una propiedad o método de un objeto
    (`object.property` y `object["property"]`).
- {{jsxref("Operators/new", "new")}}
  - : El operador `new` crea una instancia auxiliado por un constructor.
- {{jsxref("Operators/new%2Etarget", "new.target")}}
  - : En los constructores, `new.target` se refiere al constructor que fue invocado por {{jsxref("Operators/new", "new")}}.
- {{jsxref("Operators/super", "super")}}
  - : La palabra clave `super` llama al constructor padre.
- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : La sintaxis de extensión permite expandir una expresión en lugares donde se esperan múltiples argumentos (para llamadas a funciones) o múltiples elementos (para arreglos literales).

### Incremento y decremento

Operadores de incremento sufijo/prefijo y decremento sufijo/prefijo.

- {{jsxref("Operators/Increment", "A++")}}
  - : Operador de incremento sufijo.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Operador de decremento sufijo.
- {{jsxref("Operators/Increment", "++A")}}
  - : Operador de incremento prefijo.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Operador de decremento prefijo.

### Operadores unarios

Una operación unaria es una operación con un solo operando.

- {{jsxref("Operators/delete", "delete")}}
  - : El operador `delete` elimina una propiedad de un objeto.
- {{jsxref("Operators/void", "void")}}
  - : El operador `void` descarta el valor de retorno de una expresión.
- {{jsxref("Operators/typeof", "typeof")}}
  - : El operador `typeof` determina el tipo de un objeto dado.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : El operador unario `más` convierte su operando al tipo `Number`.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : El operador unario de negación convierte su operando al tipo `Number` y luego lo niega.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Operador `NOT` bit a bit.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Operador `NOT` lógico.

### Operadores aritméticos

Los operadores aritméticos toman valores numéricos (ya sean literales o variables) como sus operandos y devuelven un solo valor numérico.

- {{jsxref("Operators/Addition", "+")}}
  - : Operador de adición o suma.
- {{jsxref("Operators/Subtraction", "-")}}
  - : Operador de sustracción o resta.
- {{jsxref("Operators/Division", "/")}}
  - : Operador de división.
- {{jsxref("Operators/Multiplication", "*")}}
  - : Operador de multiplicación.
- {{jsxref("Operators/Remainder", "%")}}
  - : Operador de residuo.
- {{jsxref("Operators/Exponentiation", "**")}}
  - : Operador de exponenciación.

### Operadores relacionales

Un operador de comparación compara sus operandos y devuelve un valor `Boolean` basado en si la comparación es verdadera o no.

- {{jsxref("Operators/in", "in")}}
  - : El operador `in` determina si un objeto tiene una determinada propiedad.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : El operador `instanceof` determina si un objeto es una instancia de otro objeto.
- {{jsxref("Operators/Less_than", "&lt;")}}
  - : Operador menor que.
- {{jsxref("Operators/Greater_than", "&gt;")}}
  - : Operador mayor que.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Operador menor o igual a.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Operador mayor o igual a.

> **Nota:** `=>` no es un operador, sino la notación para {{jsxref("Functions/Arrow_functions", "Funciones de flecha")}}.

### Operadores de igualdad

El resultado de evaluar un operador de igualdad siempre es de tipo `Boolean` basado en si la comparación es verdadera.

- {{jsxref("Operators/Equality", "==")}}
  - : Operador de igualdad.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Operador de desigualdad.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Operador de igualdad estricta.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Operador de desigualdad estricta.

### Operadores de desplazamiento de bits

Operaciones para cambiar todos los bits del operando.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Operador de desplazamiento bit a bit a la izquierda.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Operador de desplazamiento bit a bit a la derecha.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Operador de desplazamiento bit a bit a la derecha sin signo.

### Operadores binarios bit a bit

Los operadores bit a bit tratan a sus operandos como un conjunto de 32 bits (ceros y unos) y devuelven valores numéricos estándar de JavaScript.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : `AND` bit a bit.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : `OR` bit a bit.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : `XOR` bit a bit.

### Operadores lógicos binarios

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : `AND` lógico.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : `OR` lógico.

### Operador condicional (ternario)

- {{jsxref("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : El operador condicional devuelve uno de dos valores según el valor lógico de la condición.

### Operadores de asignación

Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.

- {{jsxref("Operators/Assignment", "=")}}
  - : Operador de asignación.
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : Asignación de multiplicación.
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : Asignación de división.
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : Asignación de residuo.
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : Asignación de suma.
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : Asignación de sustracción
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Asignación de desplazamiento a la izquierda.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Asignación de desplazamiento a la derecha.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Asignación de desplazamiento a la derecha sin signo.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Asignación de `AND` bit a bit.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Asignación de `XOR` bit a bit.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Asignación de `OR` bit a bit.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Asignación de `AND` lógico.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Asignación de `OR` lógico.
- {{jsxref("Operators/Logical_nullish_assignment", "??=")}}
  - : Asignación de anulación lógica.
- {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : La desestructuración te permite asignar las propiedades de un arreglo u objeto a variables utilizando una sintaxis que se parece a los arreglos u objetos literales.

### Operador coma

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : El operador `coma` permite evaluar múltiples expresiones en una sola declaración y devuelve el resultado de la última expresión.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Operators/Operator_Precedence", "Operator de precedencia")}}
