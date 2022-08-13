---
title: Operatory
slug: Web/JavaScript/Reference/Operators
tags:
  - JavaScript
  - Operators
translation_of: Web/JavaScript/Reference/Operators
original_slug: Web/JavaScript/Referencje/Operatory
---
{{jsSidebar("Operators")}}

This chapter documents all the JavaScript language operators, expressions and keywords.

## Wyrażenia i operatory w podziale na  kategorie

##  

## Lista operatorów w kolejności alfabetycznej znajduje sie w pasku bocznym po lewej stronie.

### Wyrażenia podstawowe

Podstawowe słowa kluczowe i wyrażenia w  JavaScript.

- {{jsxref("Operator/this", "this")}}
  - : Słowo `this` odnosi się do kontekstu wywołania.
- {{jsxref("Operator/function", "function")}}
  - : Słowo `function` umożliwia zdefniowanie wyrażenia funkcji .
- {{experimental_inline}} {{jsxref("Operatory/class", "class")}}
  - : Słowo `class` definiuje wyrażenie klasy.
- {{experimental_inline}} {{jsxref("Operatory/function*", "function*")}}
  - : The `function*` keyword defines a generator function expression.
- {{experimental_inline}} {{jsxref("Operatory/yield", "yield")}}
  - : Pause and resume a generator function
- {{experimental_inline}} {{jsxref("Operatory/yield*", "yield*")}}
  - : Delegate to another generator function or iterable object.
- {{jsxref("Global_Objecty/Array", "[]")}}
  - : Array initializer/literal syntax.
- {{jsxref("Operatory/Object_initializer", "{}")}}
  - : Object initializer/literal syntax.
- {{jsxref("RegExp", "/ab+c/i")}}
  - : Regular expression literal syntax.
- {{experimental_inline}} {{jsxref("Operatory/Array_comprehensions", "[for (x of y) x]")}}
  - : Array comprehensions.
- {{experimental_inline}} {{jsxref("Operatory/Generator_comprehensions", "(for (x of y) y)")}}
  - : Generator comprehensions.
- {{jsxref("Operatory/Grouping", "( )")}}
  - : Grouping operator.

### Left-hand-side expressions

Left values are the destination of an assignment.

- {{jsxref("Operatory/Property_accessors", "Property accessors", "", 1)}}
  - : Member operators provide access to a property or method of an object
    (`object.property` and `object["property"]`).
- {{jsxref("Operatory/new", "new")}}
  - : The `new` operator creates an instance of a constructor.
- {{experimental_inline}} {{jsxref("Operatory/super", "super")}}
  - : The `super` keyword calls the parent constructor.
- {{experimental_inline}} {{jsxref("Operatory/Spread_operator", "...obj")}}
  - : The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

### Increment and decrement

Postfix/prefix increment and postfix/prefix decrement operators.

- {{jsxref("Operatory/Operatory_arytmetyczne", "A++", "#Inkrementacja")}}
  - : Postfix increment operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "A--", "#Dekrementacja")}}
  - : Postfix decrement operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "++A", "#Inkrementacja")}}
  - : Prefix increment operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "--A", "#Dekrementacja")}}
  - : Prefix decrement operator.

### Unary operators

A unary operation is operation with only one operand.

- {{jsxref("Operatoryy/delete", "delete")}}
  - : The `delete` operator deletes a property from an object.
- {{jsxref("Operatory/void", "void")}}
  - : The `void` operator discards an expression's return value.
- {{jsxref("Operatory/typeof", "typeof")}}
  - : The `typeof` operator determines the type of a given object.
- {{jsxref("Operatory/Operatory_arytmetyczne", "+", "#Unary_plus")}}
  - : The unary plus operator converts its operand to Number type.
- {{jsxref("Operatory/Operatory_arytmetyczne", "-", "#Unary_negation")}}
  - : The unary negation operator converts its operand to Number type and then negates it.
- {{jsxref("Operatory/Bitwise_Operators", "~", "#Bitwise_NOT")}}
  - : Bitwise NOT operator.
- {{jsxref("Operatory/Logical_Operators", "!", "#Logical_NOT")}}
  - : Logical NOT operator.

### Operatory arytmetyczne

### Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

- {{jsxref("Operatory/Operatory_arytmetyczne", "+", "#Addition")}}
  - : Addition operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "-", "#Subtraction")}}
  - : Subtraction operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "/", "#Division")}}
  - : Division operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "*", "#Multiplication")}}
  - : Multiplication operator.
- {{jsxref("Operatory/Operatory_arytmetyczne", "%", "#Remainder")}}
  - : Remainder operator.

### Operatory porównania

Operator porównania, jak nazwa wskazuje, porównuje operandy  i zwraca wartość logiczną zależną od tego, czy wartość porównania jest prawdziwa.

- {{jsxref("Operatory/in", "in")}}
  - : Operator `in` ustala, czy obiekt posiada daną właściwość.
- {{jsxref("Operatory/instanceof", "instanceof")}}
  - : Operator `instanceof` ustala czy obiekt jest instancją innego obiektu.
- {{jsxref("Operatory/Comparison_Operators", "&lt;", "#Less_than_operator")}}
  - : Less than operator.
- {{jsxref("Operatory/Comparison_Operators", "&gt;", "#Greater_than_operator")}}
  - : Greater than operator.
- {{jsxref("Operatory/Comparison_Operators", "&lt;=", "#Less_than_or_equal_operator")}}
  - : Less than or equal operator.
- {{jsxref("Operatory/Comparison_Operators", "&gt;=", "#Greater_than_or_equal_operator")}}
  - : Greater than or equal operator.

### Equality operators

The result of evaluating an equality operator is always of type `Boolean` based on whether the comparison is true.

- {{jsxref("Operatory/Comparison_Operators", "==", "#Equality")}}
  - : Equality operator.
- {{jsxref("Operatory/Comparison_Operators", "!=", "#Inequality")}}
  - : Inequality operator.
- {{jsxref("Operatory/Comparison_Operators", "===", "#Identity")}}
  - : Identity operator.
- {{jsxref("Operatory/Comparison_Operators", "!==", "#Nonidentity")}}
  - : Nonidentity operator.

### Bitwise shift operators

Operations to shift all bits of the operand.

- {{jsxref("Operatory/Bitwise_Operators", "&lt;&lt;", "#Left_shift")}}
  - : Bitwise left shift operator.
- {{jsxref("Operatory/Bitwise_Operators", "&gt;&gt;", "#Right_shift")}}
  - : Bitwise right shift operator.
- {{jsxref("Operatory/Bitwise_Operators", "&gt;&gt;&gt;", "#Unsigned_right_shift")}}
  - : Bitwise unsigned right shift operator.

### Binary bitwise operators

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

- {{jsxref("Operatory/Bitwise_Operators", "&amp;", "#Bitwise_AND")}}
  - : Bitwise AND.
- {{jsxref("Operatory/Bitwise_Operators", "|", "#Bitwise_OR")}}
  - : Bitwise OR.
- {{jsxref("Operatory/Bitwise_Operators", "^", "#Bitwise_XOR")}}
  - : Bitwise XOR.

### Binary logical operators

Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.

- {{jsxref("Operatory/Logical_Operators", "&amp;&amp;", "#Logical_AND")}}
  - : Logical AND.
- {{jsxref("Operatory/Logical_Operators", "||", "#Logical_OR")}}
  - : Logical OR.

### Conditional (ternary) operator

- {{jsxref("Operatory/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : The conditional operator returns one of two values based on the logical value of the condition.

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

- {{jsxref("Operatory/Assignment_Operators", "=", "#Assignment")}}
  - : Assignment operator.
- {{jsxref("Operatory/Assignment_Operators", "*=", "#Multiplication_assignment")}}
  - : Multiplication assignment.
- {{jsxref("Operatory/Assignment_Operators", "/=", "#Division_assignment")}}
  - : Division assignment.
- {{jsxref("Operatory/Assignment_Operators", "%=", "#Remainder_assignment")}}
  - : Remainder assignment.
- {{jsxref("Operatory/Assignment_Operators", "+=", "#Addition_assignment")}}
  - : Addition assignment.
- {{jsxref("Operatory/Assignment_Operators", "-=", "#Subtraction_assignment")}}
  - : Subtraction assignment
- {{jsxref("Operatory/Assignment_Operators", "&lt;&lt;=", "#Left_shift_assignment")}}
  - : Left shift assignment.
- {{jsxref("Operatory/Assignment_Operators", "&gt;&gt;=", "#Right_shift_assignment")}}
  - : Right shift assignment.
- {{jsxref("Operators/Assignment_Operators", "&gt;&gt;&gt;=", "#Unsigned_right_shift_assignment")}}
  - : Unsigned right shift assignment.
- {{jsxref("Operatory/Assignment_Operators", "&amp;=", "#Bitwise_AND_assignment")}}
  - : Bitwise AND assignment.
- {{jsxref("OperatorsyAssignment_Operators", "^=", "#Bitwise_XOR_assignment")}}
  - : Bitwise XOR assignment.
- {{jsxref("Operatory/Assignment_Operators", "|=", "#Bitwise_OR_assignment")}}
  - : Bitwise OR assignment.
- {{experimental_inline}} {{jsxref("Operatory/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{experimental_inline}} {{jsxref("Operatory/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.

### Comma operator

- {{jsxref("Operatory/Comma_Operator", ",")}}
  - : The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

### Non-standard features

- {{non-standard_inline}} {{jsxref("Operatory/Legacy_generator_function", "Legacy generator function", "", 1)}}
  - : The `function` keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contains at least one {{jsxref("Operators/yield", "yield")}} expression.
- {{non-standard_inline}} {{jsxref("Operatory/Expression_closures", "Expression closures", "", 1)}}
  - : The expression closure syntax is a shorthand for writing simple function.

## Specifications

| Specification                                                                                                                    | Status                   | Comment                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| ECMAScript 1st Edition.                                                                                                          | Standard                 | Initial definition.                                                                                             |
| {{SpecName('ES5.1', '#sec-11', 'Expressions')}}                                                                 | {{Spec2('ES5.1')}} |                                                                                                                 |
| {{SpecName('ES6', '#sec-ecmascript-language-expressions', 'ECMAScript Language: Expressions')}} | {{Spec2('ES6')}}     | New: Spread operator, destructuring assignment, `super` keyword, Array comprehensions, Generator comprehensions |

## See also

- [Operator precedence](/pl/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
