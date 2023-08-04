---
title: Sintaxe de Espalhamento
slug: Web/JavaScript/Reference/Operators/Spread_syntax
---

{{jsSidebar("Operators")}}**Sintaxe de Espalhamento (Spread syntax)** permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays _literais_) são esperados, ou que um objeto seja expandido onde zero ou mais pares _propriedade:valor_ (para objetos _literais_) são esperados.{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Sintaxe

Para chamada de funções:

```
myFunction(...iterableObj);
```

Para arrays literais ou strings:

```
[...iterableObj, '4', 'five', 6];
```

Para objetos literais (novo em ECMAScript 2018; stage 3 draft):

```
let objClone = { ...obj };
```

## Exemplos

### Espalhamento e chamadas de funções

#### Substituindo apply

É comum usar {{jsxref( "Function.prototype.apply")}} em casos onde você quer usar os elementos de um array como argumentos para uma função.

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);
```

Com a sintaxe de espalhamento, o código acima pode ser escrito assim:

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);
```

Qualquer argumento numa lista de argumentos pode usar a sintaxe de espalhamento e pode ser usado mais de uma vez.

```js
function myFunction(v, w, x, y, z) {}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Apply para new

Quando um construtor é chamado com `new`, não é possivel usar diretamente um array e `apply` (`apply` executa o `[[Call]]` e não o `[[Construct]]`). No entanto, um array pode facilmente ser usado com `new` graças ao operador de espalhamento:

```js
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
```

Para usar o `new` com array de parâmetros sem a sintaxa de espalhamento, você teria que fazer isso **indiretamente** por meio da aplicação parcial:

```js
function applyAndNew(constructor, args) {
  function partial() {
    return constructor.apply(this, args);
  }
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}

function myConstructor() {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1 = "val1";
  this.prop2 = "val2";
}

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments());
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Espalhamento em arrays literais

#### Um array literal mais poderoso

Criar um novo array usando um array existente como parte dele, não é possível utilizando apenas a sintaxe de array literal. O código imperativo deve ser usado ao invés da combinação de `push`, `splice`, `concat`, etc. Com a sintaxe de espalhamento isso se torna muito mais sucinto:

```js
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]
```

Assim como espalhar a lista de argumentos, `...` pode ser usado em qualquer lugar em um array literal e pode ser usado multiplas vezes.

#### Copiando um array

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

**Nota:** A sintaxe de espalhamento efetivamente vai um nível mais profundo quando se copia um array. Assim sendo, pode ser inadequado para copiar arrays multidimensionais como o exemplo a seguir mostra (é o mesmo com {{jsxref("Object.assign()")}} e a sintaxe de espalhamento).

```js
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]
```

#### Uma maneira melhor de concatenar arrays

{{jsxref("Array.concat")}} é frequentemente usado para concatenar um array no final de um array existente. Sem a sintaxe de espalhamento é feito assim:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Com a sintaxe de espalhamento se torna isso:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

{{jsxref("Array.unshift")}} é frequentemente usado para inserir um array de valores no inicio de um array existente. Sem a sintaxe de espalhamento é feito assim:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2); // arr1 is now [3, 4, 5, 0, 1, 2]
```

Com a _sintaxe de espalhamento_ isso se torna _\[Note, no entanto, que isso cria um novo `arr1` array. Ao contrário de {{jsxref("Array.unshift")}}, isso não modifica o array original `arr1` array]_:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
```

### Espalhamento em objetos literais

A proposta [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (stage 3) adiciona espalhamento de propriedades para [objetos literais](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer). Este copia as propriedades enumeráveis de um objeto informado em um novo objeto.

**Cópia-rasa (Shallow-cloning)** (excluindo o protótipo) ou fusão (**merge**) de objetos agora é possivel usando uma sintaxe mais curta que {{jsxref("Object.assign()")}}.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Note que {{jsxref("Object.assign()")}} chamada os [setters](/pt-BR/docs/Web/JavaScript/Reference/Functions/set) e a _sintaxe de espalhamento_ não.

### Apenas para iteráveis

A sintaxe de espalhamento (diferente de propriedades espalhadas) só pode ser utilizada com objetos iteráveis.

```js
var obj = { key1: "value1" };
var array = [...obj]; // TypeError: obj is not iterable
```

### Espalhamento com muitos valores

Quando usar a sintaxe de espalhamento para chamada de funções, esteja ciente da possibilidade de exceder tamanho máximo de argumentos do motor do Javascript. Veja [`apply()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) para mais detalhes.

## Sintaxe Rest (parâmetros)

A _sintaxe rest_ se parece exatamente como a _sintaxe de espalhamento_, mas esta é usada para desestruturar arrays e objetos. De certa forma, a _sintaxe rest_ é o oposto da _sintaxe de espalhamento_: A _sintaxe de espalhamento (spread)_ 'expande' um array em vários elementos, enquanto a _sintaxe rest_ coleta multiplos elementos e 'condensa' eles em um único elemento. Veja [parâmetros rest.](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters)

## Especificações

| Specification                                                                                | Status               | Comment                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-array-initializer')}}                                             | {{Spec2('ES2015')}}  | Defined in several sections of the specification: [Array Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), [Argument Lists](http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists) |
| {{SpecName('ESDraft', '#sec-array-initializer')}}                                            | {{Spec2('ESDraft')}} | No changes.                                                                                                                                                                                                                        |
| [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) | Draft                | Stage 3 draft.                                                                                                                                                                                                                     |

## Compatibilidade com navegadores

{{Compat("javascript.operators.spread")}}

## Veja também

- [Parâmetros Rest](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters) (also '`...`')
