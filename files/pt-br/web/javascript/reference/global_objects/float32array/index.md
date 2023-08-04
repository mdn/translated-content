---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
---

{{JSRef}}

A array tipada **`Float32Array`** representa uma array de 32-bits contendo floats (correspondendo ao tipo de dados `float` em C) na ordem dos bytes da plataforma. Se o controle sobre a ordem dos bytes for precisa, use {{jsxref("DataView")}}. Os conteúdos iniciam em `0`. Uma vez estabelecido, você pode referenciar os elementos na array usando os métodos do objeto ou usando a síntaxe padrão das arrays (Isto é, usando colchetes)

## Síntaxe

```
new Float32Array(); // novo no ES2017
new Float32Array(length);
new Float32Array(typedArray);
new Float32Array(object);
new Float32Array(buffer [, byteOffset [, length]]);
```

Para mais informações sobre a síntaxe de construção e os parâmetros, veja _[TypedArray](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Propriedades

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Retorna um número valor do tamanho do elemento. `4` no caso de uma `Float32Array`.
- Float32Array.length
  - : Método estático cujo o valor é `0`. Para o tamanho atual (número de elementos), veja {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float32Array.name")}}
  - : Retorna o valor em string do nome do constructor. No caso de `Float32Array` é "Float32Array".
- {{jsxref("TypedArray.prototype", "Float32Array.prototype")}}
  - : Prototype para os objetos _TypedArray_.

## Métodos

- {{jsxref("TypedArray.from", "Float32Array.from()")}}
  - : Cria uma nova `Float32Array` de um array-like ou um objeto iterável. Veja também {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float32Array.of()")}}
  - : Cria uma nova `Float32Array` with um número variável de argumentos. Veja também {{jsxref("Array.of()")}}.

## `Float32Array` prototype

Todos os objetos `Float32Array` herdam de {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Propriedades

- `Float32Array.prototype.constructor`
  - : Retorna a função cujo criou o protótipo da instância. Este é o construtor padrão da Array `Float32Array`.
- {{jsxref("TypedArray.prototype.buffer", "Float32Array.prototype.buffer")}} {{readonlyInline}}
  - : Retorna os {{jsxref("ArrayBuffer")}} referenciado pela Array `Float32Array` fixada na hora de sua construção e é **somente leitura**.
- {{jsxref("TypedArray.prototype.byteLength", "Float32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Retorna o tamanho (em bytes) da Array `Float32Array` do começo de seu {{jsxref("ArrayBuffer")}}. Fixado na hora de sua construção e é **somente leitura**.
- {{jsxref("TypedArray.prototype.byteOffset", "Float32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Retorna o deslocamento (em bytes) da Array `Float32Array` do começo de seu {{jsxref("ArrayBuffer")}}. Fixado na hora de sua construção e é **somente leitura**.
- {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}} {{readonlyInline}}
  - : Retorna o número de elementos na Array `Float32Array` do começo de seu {{jsxref("ArrayBuffer")}}. Fixado na hora de sua construção e é **somente leitura**.

### Métodos

- {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}
  - : Copia a sequência dos elementos dentro da Array. Veja também {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float32Array.prototype.entries()")}}
  - : Retorna um novo objeto `Array Iterator` que contém os pares chave/valor para cada índex na array. Veja também {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float32Array.prototype.every()")}}
  - : Testa quando todos os elementos na array passam no teste proveniente de uma função. Veja também {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float32Array.prototype.fill()")}}
  - : Preenche todos os elementos de uma array do índex inicial ao índex final com um valor estático. Veja também {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float32Array.prototype.filter()")}}
  - : Cria uma nova array com todos os elementos dessa array para a função de filtragem que retornar `true`. Veja também {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float32Array.prototype.find()")}}
  - : Retorna o valor na array encontrado, se um elemento na array satizfaz o teste proveniente de uma função de teste ou `undefined` se não for encontrado. Veja também {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float32Array.prototype.findIndex()")}}
  - : Retorna o index encontrado na array, se um elemento na array satizfaz o teste proveniente de uma função de teste ou -1 se não for encontrado. Veja também {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float32Array.prototype.forEach()")}}
  - : Chama uma função para cada elemento na array. Veja também {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float32Array.prototype.includes()")}} {{experimental_inline}}
  - : Determina quando a array tipada inclui um certo elemento, retornando `true` ou `false` como apropriado. Veja também {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float32Array.prototype.indexOf()")}}
  - : Retorna o primeiro (menor) index de um elemento dentro de uma array igual ao valor expecificado, ou -1 se nenhum for encontrado. Veja também {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float32Array.prototype.join()")}}
  - : Junta todos os elementos de uma array em uma string. Veja também {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float32Array.prototype.keys()")}}
  - : Retorna um novo `Array Iterator` cujo contem as chaves para cada index na array. Veja também {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float32Array.prototype.lastIndexOf()")}}
  - : Retorna o último (maior) índex de um elemento dentro da array igual ao valor especificado, ou -1 se nenhum for encontrado. Veja também {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float32Array.prototype.map()")}}
  - : Cria uma nova array com os resultados da função chamada em cada elemento nesta array. Veja também {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Versão antiga não padrão de {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float32Array.prototype.reduce()")}}
  - : Aplica uma função contra um acumulador e cada valor na array (da esquerda para a direita) com o intuito de reduzí-la a um único valor. Veja também {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float32Array.prototype.reduceRight()")}}
  - : Aplica uma função contra um acumulador e cada valor na array (da direita para a esquerda) como o intuito de reduzí-la a um único valor. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Float32Array.prototype.reverse()")}}
  - : Reverte a ordem se todos os elementos em uma array - o primeiro se torna o último, e o último de torna o primeiro. Veja também {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float32Array.prototype.set()")}}
  - : Armazena múltiplos valores na array tipada, lendo os valores de entrada de uma array especificada.
- {{jsxref("TypedArray.slice", "Float32Array.prototype.slice()")}}
  - : Extrai uma seção de uma array e retorna uma nova array. Veja também {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float32Array.prototype.some()")}}
  - : Retorna true se pelo menos um elemento nesta array satisfazer a função de teste proveniente de uma função de teste. Veja também {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Float32Array.prototype.sort()")}}
  - : Classifica os elementos de uma array no lugar e retorna a array. Veja também {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float32Array.prototype.subarray()")}}
  - : Retorna uma nova Array `Float32Array` a partir de um ponto inicial e um fim pelo índex do elemento.
- {{jsxref("TypedArray.values", "Float32Array.prototype.values()")}}
  - : Retorna um novo objeto `Array Iterator` que contém os valores para cada índex na Array. Veja também {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float32Array.prototype.toLocaleString()")}}
  - : Retorna uma string localizada representando a array e seus elementos. Veja também {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float32Array.prototype.toString()")}}
  - : Retorna uma string representando a array e seus elementos. Veja também {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float32Array.prototype[@@iterator]()")}}
  - : Retorna um novo objeto `Array Iterator` que contém os valores para cada índex na Array.

## Exemplos

Diferentes modos de criar uma Array `Float32Array`:

```js
// Pelo seu tamanho
var float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// Por uma array
var arr = new Float32Array([21, 31]);
console.log(arr[1]); // 31

// Por uma outra TypedArray
var x = new Float32Array([21, 31]);
var y = new Float32Array(x);
console.log(y[0]); // 21

// Por um ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Float32Array(buffer, 0, 4);

// Por um iterável
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var float32 = new Float32Array(iterable);
// Float32Array[1, 2, 3]
```

## Especificações

| Especificação                                                   | Status                   | Comment                                                                                                                              |
| --------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('Typed Array')}}                                     | {{Spec2('Typed Array')}} | Suplantada pelo ECMAScript 2015.                                                                                                     |
| {{SpecName('ES6', '#table-49', 'TypedArray constructors')}}     | {{Spec2('ES6')}}         | Definição inicial no padrão ECMA. Especificado que o `new` é requerido.                                                              |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | O ECMAScript 7 mudou o construtor da Array `Array32Float` para o uso da operação `ToIndex` e ajudar nos construtores sem argumentos. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Float32Array")}}

## Notas de compatibilidade

Começando com o ECMAScript 2015, construtores da Array `Float32Array` requerem o uso do operador {{jsxref("Operators/new", "new")}}. Chamando o construtor da Array `Float32Array` como uma função, sem o `new`, irá gerar um erro {{jsxref("TypeError")}} de agora em diante.

```js example-bad
var dv = Float32Array([1, 2, 3]);

// TypeError: chamando o construtor da função interna Float32Array
// sem o new é proibido
```

```js example-good
var dv = new Float32Array([1, 2, 3]);
```

## Veja também

- [JavaScript arrays tipadas](/pt-BR/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
