---
title: Symbol
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Symbol
---

Esse termo do glossário descreve tanto o tipo de dados chamado "**symbol**", quando a função/classe "{{jsxref("Symbol")}}`()`", que entre outras coisas, cria instâncias do tipo de dados **symbol**.

O tipo de dados "**symbol**" é qualificado como um primitivo, onde valores desse tipo podem ser usados para fazer propriedades de objetos anônimos. Ele pode ser usado como chave de uma propriedade de objeto quando este tem a intenção de ser privada, para uso interno da classe ou do tipo do objeto em questão. Como exemplo, chaves do tipo **symbol** existem em vários objetos internos do JavaScript. Da mesma forma, pode-se construir classes que tenham membros privados usando essa técnica. O tipo de dados **symbol** é de propósito altamente especializado, o que o torna pouco versátil; uma instância de **Symbol** pode ser atribuída à um L-value, e pode ter sua identidade examinada, nada mais; nenhuma outra operação poderá ser aplicada, o que contrasta, por exemplo, com uma instância de Number para um inteiro cujo valor é 42, que por sua vez tem diversas operações para comparar, combinar com outros tipos de dados, etc.

Um valor do tipo de dados "symbol" pode ser referenciado como um "valor symbol". Em JavaScript, um valor symbol é criado através da função `Symbol()`, que dinamicamente produz um valor único e anônimo. A única utilização sensata para para essa construção é armazená-la em uma variável que será utilizada como chave para uma propriedade de objeto cujo objetivo é torná-lo anônimo.

O exemplo abaixo guarda um valor symbol em uma variável `myPrivateMethod` para usar como chave do objeto `this`:

```js
let myPrivateMethod = Symbol();
this[myPrivateMethod] = function() {...};
```

Quando um valor de um **symbol** é usado como o identificador em uma atribuição de propriedade, a propriedade (como o **symbol**) é anônima; e também é não-enumerável. Como a propriedade não é enumerável, ela não será mostrada como um membro na construção de loop "`for( ... in ...)"` e, como a propriedade é anônima, ela não será mostrada no **array** de resultados de "`Object.getOwnPropertyNames()`". A propriedade pode ser acessada usando o **symbol** original que a criou ou iterando o **array** de resultados de "`Object.getOwnPropertySymbols()` ". No exemplo de código anterior, o acesso à propriedade será através do valor armazenado na variável `myPrivateMethod`.

The built-in function "{{jsxref("Symbol")}}`()`" is an incomplete class that returns a symbol value when called as a function, that throws an error upon attempts to use it as a constructor with the syntax "`new Symbol()`", that has static methods for accessing JavaScript's global symbol table, and that has static properties for addressing certain symbols that are present in commonly used objects. The creation of symbol values by the `Symbol()` function was explained above. The throwing of an error upon attempts to use `Symbol()` as a constructor is explained as a precaution against the accidental creation of an object that might cause confusion. The methods that access the global symbol registry are "`Symbol.for()`" and "`Symbol.keyFor()`"; these mediate between the global symbol table (or "registry") and the run-time environment. The symbol registry is mostly built by JavaScript's compiler infrastructure, and the symbol registry's content is not available to JavaScript's run-time infrastructure, except through these reflective methods. The method _`Symbol.for("tokenString")`_ returns a symbol value from the registry, and _`Symbol.keyFor(symbolValue)`_ returns a token string from the registry; each is the other's inverse, so the following is true:

```js
Symbol.keyFor(Symbol.for("tokenString"))=="tokenString";  // true
```

The **Symbol** class has some static properties that have the ironic effect of naming the anonymous. There are only a few of these; they are for some so-called "well known" symbols. These are symbols for some selected method properties that are found in certain built-in objects. The exposure of these symbols makes it possible to have direct access to these behaviors; such access might be useful, for example, in the definition of a custom class. Examples of well-known symbols are: "`Symbol.iterator`" for array-like objects, and "`Symbol.search`" for string objects.

The `Symbol()` function and the symbol values it creates might be useful to programers designing a custom class. Symbol values provide a way by which custom classes can create private members, and maintain a symbol registry that pertains just to that class. A custom class can use symbol values to create "own" properties that are shielded from unwanted, casual discovery. Within the class definition, the dynamically created symbol value is saved to a scoped variable, available only privately within the class definition. There is no token string; the scoped variable plays the equivalent role of a token.

In some programming languages the symbol data type is referred to as an "atom."

In {{Glossary("JavaScript")}}, Symbol is a {{Glossary("Primitive", "primitive value")}}.

Symbol can have an optional description, but for debugging purposes only.

Symbol type is a new feature in ECMAScript 2015 and there is no ECMAScript 5 equivalent for symbol.

```js
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ Symbol(), Symbol() ]
```

## Learn more

### General knowledge

- [Symbol (programming)](<https://en.wikipedia.org/wiki/Symbol_(programming)>) on Wikipedia
- [JavaScript data types and data structures](/pt-BR/docs/Web/JavaScript/Data_structures)
- [Symbols in ECMAScript 6](http://2ality.com/2014/12/es6-symbols.html)
