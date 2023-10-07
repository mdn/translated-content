---
title: in operator
slug: Web/JavaScript/Reference/Operators/in
---

{{jsSidebar("Operators")}}

O **operador** **`in`** retorna `true` se a propriedade especificada estiver no objeto especificado ou na sua cadeia de protótipo (prototype chain) desde objeto.

## Sintaxe

```
prop in object
```

### Parâmetros

- `prop`
  - : Um string ou símbolo representando o nome de uma propriedade ou o índice de um array (não-símbolos serão trazidos para strings).
- `object`
  - : Objeto para verificar se este (ou sua cadeia de protótipo) contém a propriedade com o nome especificado.

## Descrição

Os exemplos a seguir mostram alguns usos do operador `in`.

```js
// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // retorna true
3 in trees; // retorna true
6 in trees; // retorna false
"bay" in trees; // retorna false (você precisa especificar o
// número do índice, não o valor naquele índice)
"length" in trees; // retorna true (length é uma propridade do Array)
Symbol.iterator in trees; // retorna true (arrays são iteráveis, funciona apenas na ES2015+)

// Objetos predefinidos
"PI" in Math; // retorna true

// Objetos personalizados
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // retorna true
"model" in mycar; // retorna true
```

Você precisa especificar um objeto no lado direito do operador `in`. Por exemplo, você pode especifica um string criado com o construtor `String`, mas você não pode especificar um string literal.

```js
var color1 = new String("green");
"length" in color1; // retorna true

var color2 = "coral";
// gera um erro (color2 não é um objeto String)
"length" in color2;
```

### Usando `in` com propriedade removida ou undefined

Se você remover uma propriedade com o operador [`delete`](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete) , o operador `in` retorna `false` para essa propriedade.

```js
var mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // retorna false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // retorna false
```

Se você definir uma propriedade como {{jsxref("Global_Objects/undefined", "undefined")}}, mas não a remover, o operador `in` retorna `true` para essa propriedade.

```js
var mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // retorna true
```

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // retorna true
```

### Propriedades herdadas

O operador `in` retorna `true` para propriedades que estão na cadeida de protótipo (prototype chain).

```js
"toString" in {}; // retorna true
```

## Especificações

| Especificação                                                                | Situação             | Comentário                                         |
| ---------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES2015', '#sec-relational-operators', 'Relational Operators')}}  | {{Spec2('ES2015')}}  |                                                    |
| {{SpecName('ES5.1', '#sec-11.8.7', 'The in Operator')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES3', '#sec-11.8.7', 'The in Operator')}}                        | {{Spec2('ES3')}}     | Definição inicial. Implementado no JavaScript 1.4. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.in")}}

## Ver também

- [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerability and ownership of properties](/pt-BR/docs/Enumerability_and_ownership_of_properties)
