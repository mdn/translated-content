---
title: Operadores
slug: Web/JavaScript/Reference/Operators
---

{{jsSidebar("Operadores")}}

Este capítulo documenta todos os operadores, expressões e keywords da linguagem JavaScript .

## Expressões e operadores por categoria

Para uma lista alfabética ver a barra lateral à esquerda.

### Expressões primárias

Palavras-chave e expressões básicas em JavaScript.

- {{jsxref("Operators/this", "this")}}
  - : A palavra-chave `this` refere-se ao contexto de execução da função.
- {{jsxref("Operators/function", "function")}}
  - : A palavra-chave `function` define uma função.
- {{experimental_inline}} {{jsxref("Operators/class", "class")}}
  - : A palavra-chave `class` define uma classe.
- {{experimental_inline}} {{jsxref("Operators/function*", "function*")}}
  - : A palavra-chave `function*` define um gerador de função.
- {{experimental_inline}} {{jsxref("Operators/yield", "yield")}}
  - : Pausa e retorma uma função de gerador
- {{experimental_inline}} {{jsxref("Operators/yield*", "yield*")}}
  - : Delegar a outra função gerador ou objeto iterável.
- {{jsxref("Global_Objects/Array", "[]")}}
  - : Array initializer/literal syntax.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Object initializer/literal syntax.
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : Regular expression literal syntax.
- {{experimental_inline}} {{jsxref("Operators/Array_comprehensions", "[for (x of y) x]")}}
  - : Array comprehensions.
- {{experimental_inline}} {{jsxref("Operators/Generator_comprehensions", "(for (x of y) y)")}}
  - : Generator comprehensions.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Grouping operator.

### Left-hand-side expressions

Left values are the destination of an assignment.

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
  - : Member operators provide access to a property or method of an object
    (`object.property` and `object["property"]`).
- {{jsxref("Operators/new", "new")}}
  - : The `new` operator creates an instance of a constructor.
- {{experimental_inline}} {{jsxref("Operators/super", "super")}}
  - : The `super` keyword calls the parent constructor.
- {{experimental_inline}} {{jsxref("Operators/Spread_operator", "...obj")}}
  - : The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### Incremento e decremento

Operadores sufixo/prefixo para incremento e sufixo/prefixo para decremento.

- {{jsxref("Operators/Arithmetic_Operators", "A++", "#Increment")}}
  - : Operador sufixo para incremento.
- {{jsxref("Operators/Arithmetic_Operators", "A--", "#Decrement")}}
  - : Operador sufixo para decremento.
- {{jsxref("Operators/Arithmetic_Operators", "++A", "#Increment")}}
  - : Operador prefixo para incremento.
- {{jsxref("Operators/Arithmetic_Operators", "--A", "#Decrement")}}
  - : Operador prefixo para decremento.

### Unary operators

A unary operation is operation with only one operand.

- {{jsxref("Operators/delete", "delete")}}
  - : The `delete` operator deletes a property from an object.
- {{jsxref("Operators/void", "void")}}
  - : The `void` operator discards an expression's return value.
- {{jsxref("Operators/typeof", "typeof")}}
  - : The `typeof` operator determines the type of a given object.
- {{jsxref("Operators/Arithmetic_Operators", "+", "#Unary_plus")}}
  - : The unary plus operator converts its operand to Number type.
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Unary_negation")}}
  - : The unary negation operator converts its operand to Number type and then negates it.
- {{jsxref("Operators/Bitwise_Operators", "~", "#Bitwise_NOT")}}
  - : Bitwise NOT operator.
- {{jsxref("Operators/Logical_Operators", "!", "#Logical_NOT")}}
  - : Logical NOT operator.

### Operadores aritméticos

Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

- {{jsxref("Operators/Arithmetic_Operators", "+", "#Addition")}}
  - : Operador de soma.
- {{jsxref("Operators/Arithmetic_Operators", "-", "#Subtraction")}}
  - : Operador de subtração.
- {{jsxref("Operators/Arithmetic_Operators", "/", "#Division")}}
  - : Operador de divisão.
- {{jsxref("Operators/Arithmetic_Operators", "*", "#Multiplication")}}
  - : Operador de multiplicação.
- {{jsxref("Operators/Arithmetic_Operators", "%", "#Remainder")}}
  - : Remainder operator.

### Operadores relacionais

A comparison operator compares its operands and returns a `Boolean` value based on whether the comparison is true.

- {{jsxref("Operators/in", "in")}}
  - : The `in` operator determines whether an object has a given property.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : The `instanceof` operator determines whether an object is an instance of another object.
- {{jsxref("Operators/Comparison_Operators", "&lt;", "#Less_than_operator")}}
  - : Operador "menor que".
- {{jsxref("Operators/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
  - : Operador "maior que".
- {{jsxref("Operators/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
  - : Operador "menor ou igual que".
- {{jsxref("Operators/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}
  - : Operador "maior ou igual que".

### Operadores de igualdade

O resultador de um operador de igualdade é do tipo `Booleano` baseado que a comparação seja verdadeira.

- {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}
  - : Operadores de igualdade.
- {{jsxref("Operators/Comparison_Operators", "!=", "#Inequality")}}
  - : Inequality operator.
- {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}
  - : Identity operator.
- {{jsxref("Operators/Comparison_Operators", "!==", "#Nonidentity")}}
  - : Nonidentity operator.

### Bitwise shift operators

Operations to shift all bits of the operand.

- {{jsxref("Operators/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
  - : Bitwise left shift operator.
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
  - : Bitwise right shift operator.
- {{jsxref("Operators/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}
  - : Bitwise unsigned right shift operator.

### Binary bitwise operators

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

- {{jsxref("Operators/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
  - : Bitwise AND.
- {{jsxref("Operators/Bitwise_Operators", "|", "#Bitwise_OR")}}
  - : Bitwise OR.
- {{jsxref("Operators/Bitwise_Operators", "^", "#Bitwise_XOR")}}
  - : Bitwise XOR.

### Operadores Lógicos Binários

Operadores lógicos são normalmente usados com boolean (logical) valores, e quando eles são, eles retornam um valor Boolean.

- {{jsxref("Operators/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
  - : AND.
- {{jsxref("Operators/Logical_Operators", "||", "#Logical_OR")}}
  - : OR.

### Operador de Condicional (ternário)

- {{jsxref("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : O operador condicional retorna um dos dois valores baseado no valor lógico da condição.

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

- {{jsxref("Operators/Assignment_Operators", "=", "#Assignment")}}
  - : Assignment operator.
- {{jsxref("Operators/Assignment_Operators", "*=", "#Multiplication_assignment")}}
  - : Multiplication assignment.
- {{jsxref("Operators/Assignment_Operators", "/=", "#Division_assignment")}}
  - : Division assignment.
- {{jsxref("Operators/Assignment_Operators", "%=", "#Remainder_assignment")}}
  - : Remainder assignment.
- {{jsxref("Operators/Assignment_Operators", "+=", "#Addition_assignment")}}
  - : Addition assignment.
- {{jsxref("Operators/Assignment_Operators", "-=", "#Subtraction_assignment")}}
  - : Subtraction assignment
- {{jsxref("Operators/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
  - : Left shift assignment.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
  - : Right shift assignment.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
  - : Unsigned right shift assignment.
- {{jsxref("Operators/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
  - : Bitwise AND assignment.
- {{jsxref("Operators/Assignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
  - : Bitwise XOR assignment.
- {{jsxref("Operators/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
  - : Bitwise OR assignment.
- {{experimental_inline}} {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{experimental_inline}} {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.

### Comma operator

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

### Non-standard features

- {{non-standard_inline}} {{jsxref("Operators/Legacy_generator_function", "Legacy generator function", "", 1)}}
  - : The `function` keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contains at least one {{jsxref("Operators/yield", "yield")}} expression.
- {{non-standard_inline}} {{jsxref("Operators/Expression_closures", "Expression closures", "", 1)}}
  - : The expression closure syntax is a shorthand for writing simple function.

## Specifications

| Specification                                                                                   | Status             | Comment                                                                                                          |
| ----------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| ECMAScript 1st Edition.                                                                         | Standard           | Definição inicial.                                                                                               |
| {{SpecName('ES5.1', '#sec-11', 'Expressions')}}                                                 | {{Spec2('ES5.1')}} |                                                                                                                  |
| {{SpecName('ES6', '#sec-ecmascript-language-expressions', 'ECMAScript Language: Expressions')}} | {{Spec2('ES6')}}   | Novo: Spread operator, destructuring assignment, `super` keyword, Array comprehensions, Generator comprehensions |

## Veja também

- [Operator precedence](/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
