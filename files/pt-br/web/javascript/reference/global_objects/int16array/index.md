---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
---

{{JSRef}}

A matriz do tipo **`Int16Array`** representa uma matriz de inteiros assinados de 16 bits com dois complementos na ordem de bytes da plataforma. Se o controle sobre a ordem de bytes for necessário, use {{jsxref ("DataView")}}. O conteúdo é inicializado em 0. Uma vez estabelecido, você pode fazer referência a elementos na matriz usando os métodos do objeto ou usando a sintaxe de índice da matriz padrão (ou seja, usando a notação de colchetes).

## Sintaxe

```
new Int16Array(); // novo no ES2017
new Int16Array(length);
new Int16Array(typedArray);
new Int16Array(object);
new Int16Array(buffer [, byteOffset [, length]]);
```

Para obter mais informações sobre a sintaxe do construtor e os parâmetros, consulte _[TypedArray](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Propriedades

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Retorna um valor numérico do tamanho do elemento. `2` no caso de um `Int16Array`.
- Int16Array.length
  - : Propriedade de comprimento estático cujo valor é 0. Para o comprimento real (número de elementos), consulte {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int16Array.name")}}
  - : Retorna o valor da string do nome do construtor. No caso do tipo `Int16Array`: "Int16Array".
- {{jsxref("TypedArray.prototype", "Int16Array.prototype")}}
  - : Protótipo para os objetos TypedArray.

## Métodos

- {{jsxref("TypedArray.from", "Int16Array.from()")}}
  - : Cria um novo `Int16Array` de um objeto semelhante a uma matriz ou iterável. Veja também {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int16Array.of()")}}
  - : Cria um novo `Int16Array` com um número variável de argumentos. Veja também {{jsxref("Array.of()")}}.

## `Int16Array` prototype

Todos `Int16Array` objetos herdam de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriedades

- `Int16Array.prototype.constructor`
  - : Retorna a função que criou o protótipo de uma instância. Este é o construtor `Int16Array` por padrão.
- {{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}} {{readonlyInline}}
  - : Retorna o {{jsxref("ArrayBuffer")}} referenciado pelo `Int16Array` Fixado em tempo de construção e **apenas leitura**.
- {{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}} {{readonlyInline}}
  - : Retorna o tamanho (em bytes) de um `Int16Array` desde o ínicio {{jsxref("ArrayBuffer")}}. Fixado em tempo de construção e **apenas leitura**.
- {{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Retorna o deslocamento (em bytes) de um `Int16Array` desde o ínicio {{jsxref("ArrayBuffer")}}. Fixado em tempo de construção e **apenas leitura**.
- {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}} {{readonlyInline}}
  - : Retorna o número de elementos em um `Int16Array`. Fixado em tempo de construção e **apenas leitura**.

### Métodos

- {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}
  - : Copia uma sequência de elementos da matriz dentro da matriz. Veja também {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}
  - : Retorna um novo `Array Iterator` objeto que contém os pares de chave / valor para cada índice na matriz. Veja também {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}
  - : Testa se todos os elementos na matriz passam no teste fornecido por uma função. Veja também {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}
  - : Preenche todos os elementos de uma matriz de um índice inicial para um índice final com um valor estático. Veja também {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}
  - : Cria uma nova matriz com todos os elementos dessa matriz para os quais a função de filtragem fornecida retorna true. Veja também {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}
  - : Retorna o valor encontrado na matriz, se um elemento na matriz satisfizer a função de teste fornecida ou `undefined` se não encontrado. Veja também {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}
  - : Retorna o índice encontrado na matriz, se um elemento na matriz satisfizer a função de teste fornecida ou -1, se não for encontrado. Veja também {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}
  - : Chama uma função para cada elemento na matriz. Veja também {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}} {{experimental_inline}}
  - : Determina se uma matriz tipificada inclui um determinado elemento, retornando `true` ou `false`. Veja também {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}
  - : Retorna o primeiro (menos) índice de um elemento dentro da matriz igual ao valor especificado ou -1 se nenhum for encontrado. Veja também {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}
  - : Junta todos os elementos de um array em uma string. Veja também {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}
  - : Retorna um novo `Array Iterator` que contém uma chave para cada índice no array. Veja também {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}
  - : Retorna o último (maior) índice de um elemento dentro da matriz igual ao valor especificado ou -1 se nenhum for encontrado. Veja também {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}
  - : Cria uma nova matriz com os resultados da chamada de uma função fornecida em todos os elementos dessa matriz. Veja também {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int16Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Versão não-padrão anterior de {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}
  - : Aplique uma função contra um acumulador e cada valor da matriz (da esquerda para a direita) para reduzi-lo a um único valor. Veja também {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}
  - : Aplique uma função contra um acumulador e cada valor da matriz (da direita para a esquerda) para reduzi-lo a um único valor. Veja também {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}
  - : Inverte a ordem dos elementos de um array - o primeiro torna-se o último e o último torna-se o primeiro. Veja também {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}
  - : Armazena vários valores na matriz tipada, lendo valores de entrada de uma matriz especificada.
- {{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}
  - : Extrai uma seção de uma matriz e retorna uma nova matriz. Veja também {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}
  - : Retorna true se pelo menos um elemento nessa matriz satisfizer a função de teste fornecida. Veja também {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}
  - : Classifica os elementos de uma matriz e retorna a matriz. Veja também {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}
  - : Retorna um novo `Int16Array` a partir do índice de elemento inicial e final fornecido.
- {{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}
  - : Retorna um novo objeto `Array Iterator` que contém os valores para cada índice na matriz. Veja também {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}
  - : Retorna uma string localizada representando a matriz e seus elementos. Veja também {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}
  - : Retorna uma string representando a matriz e seus elementos. Veja também {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}
  - : Retorna um novo objeto `Array Iterator` que contém os valores para cada índice na lista.

## Exemplos

Diferentes opções de criar um `Int16Array`:

```js
// De um tamanho
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// De uma array
var arr = new Int16Array([21, 31]);
console.log(arr[1]); // 31

// De um outro TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// De um ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);

// De um interável
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var int16 = new Int16Array(iterable);
// Int16Array[1, 2, 3]
```

## Especificações

| Especificação                                                   | Status                   | Comentário                                                                                                             |
| --------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                     | {{Spec2('Typed Array')}} | Substituído pelo ECMAScript 2015.                                                                                      |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}}  | {{Spec2('ES2015')}}      | Definição inicial em um padrão ECMA. Especificado `new` como requerido.                                                |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 mudou o construtor `Int16Array` para usar a operação `ToIndex` e permitir construtores sem argumentos. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Int16Array")}}

## Notas de compatibilidade

A partir do ECMAScript 2015, os construtores `Int16Array` precisam ser construídos com um operador {{jsxref("Operators/new", "new")}}. Chamar um construtor `Int16Array` como uma função sem o `new`, irá resultar em {{jsxref("TypeError")}}.

```js example-bad
var dv = Int16Array([1, 2, 3]);
// TypeError: calling a builtin Int16Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int16Array([1, 2, 3]);
```

## Ver também

- [JavaScript typed arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
