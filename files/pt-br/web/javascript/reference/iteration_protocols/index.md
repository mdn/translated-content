---
title: Iteration protocols
slug: Web/JavaScript/Reference/Iteration_protocols
---

{{jsSidebar("More")}}Algumas adições do ECMAScript 2015 não são novos _built-ins_ ou uma nova sintaxe, mas protocolos. Estes protocolos podem ser implementados por qualquer objeto desde que respeitando algumas convenções.Existem dois protocolos: O _protocolo iterável_ ([iterable protocol](#the_iterable_protocol)) e o _protocolo iterador_ ([iterator protocol](#the_iterator_protocol)).

## O protocolo iterável (iterable protocol)

O protocolo **iterável** permite que objetos JavaScript definam ou personalizem seu comportamento de iteração, como valores em um loop do construtor {{jsxref("Statements/for...of", "for..of")}}. Alguns tipos _built-in_ são _[built-in iterables](#built-in_iterables)_ com um comportamento de iteração padrão, tal como {{jsxref("Array")}} ou {{jsxref("Map")}}, enquanto outros tipos (como {{jsxref("Object")}}) não são assim.

Para ser **iterável**, um objeto deve implementar o método **@@iterator**, o que significa que o objeto (ou um dos objetos acima de sua [cadeia de protótipos](/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) deve ter uma propriedade com uma chave **@@iterator** que está disponível via constante `{{jsxref("Symbol.iterator")}}`:

| Property            | Value                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[Symbol.iterator]` | Uma função de zero argumentos que retorna um objeto, em conformidade com o [protocolo iterador](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols). |

Sempre que um objeto precisa ser iterado (como no início de um loop `for..of`), o método `@@iterator` é chamado sem argumentos e o retorno do **iterador** é usado para obter os valores a serem iterados.

## O protocolo iterador (iterator protocol)

O protocolo **iterador** define uma maneira padrão de produzir uma sequência de valores (finito ou infinito).

Um objeto é um iterador quando implementa um método **`next()`** com a semântica adiante:

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Propriedade</th>
      <th scope="col">Valor</th>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>
        <p>
          Uma função sem argumentos que retorna um objeto com duas propriedades:
        </p>
        <ul>
          <li>
            <code>done</code> (boolean)
            <ul>
              <li>
                Tem o valor <code>true</code> se o iterador ultrapassar o final
                da sequência iterada. Nesse caso
                <code>value</code> opcionalmente especifica o valor de retorno
                do iterador.
              </li>
              <li>
                Tem o valor <code>false</code> se o iterador foi capaz de
                produzir o próximo valor na sequência. Isso é equivalente a não
                especificar a propriedade <code>done</code>.
              </li>
            </ul>
          </li>
          <li>
            <code>value</code> - qualquer valor JavaScript retornado pelo
            iterador. Pode ser omitido quando <code>done</code> é
            <code>true</code>.
          </li>
        </ul>
        <p>
          O método <code>next</code> sempre retorna um objeto com propriedades
          apropriadas, incluindo <code>done</code> e <code>value</code>. Se um
          valor não-objeto é retornado (tal como <code>false</code> ou
          <code>undefined</code>), será lançado um
          {{jsxref("TypeError")}} ("iterator.next() retorna o valor de
          um não-objeto").
        </p>
      </td>
    </tr>
  </tbody>
</table>

> **Nota:** Não é possível saber de forma reflexiva se um determinado objeto implementa o protocolo do iterador, no entanto, é fácil criar um objeto que satisfaça tanto o iterador quanto os protocolos iteráveis (como mostrado no exemplo abaixo). Fazer isso permite que um iterador seja consumido pelas várias sintaxes que iteráveis esperam. Assim, raramente é desejável implementar o protocolo do iterador sem também implementar iteráveis.
>
> ```js
> var myIterator = {
>   next: function () {
>     // ...
>   },
>   [Symbol.iterator]: function () {
>     return this;
>   },
> };
> ```

## Exemplos de uso do protocolo de iteração

Uma {{jsxref("String")}} é um exemplo de um objeto iterable built-in:

```js
var someString = "hi";
typeof someString[Symbol.iterator]; // "function"
```

[O iterador padrão](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) de uma string retorna as posições dos caracteres de uma string um por um:

```js
var iterator = someString[Symbol.iterator]();
iterator + ""; // "[object String Iterator]"

iterator.next(); // { value: "h", done: false }
iterator.next(); // { value: "i", done: false }
iterator.next(); // { value: undefined, done: true }
```

Alguns construtores built-in, como _[spread syntax](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)_, usam o mesmo protocolo de iteração interiormente:

```js
[...someString]; // ["h", "i"]
```

Podemos redefinir o comportamento de iteração fornecendo nosso próprio `@@iterator`:

```
var someString = new String('hi');           // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function() {
  return { // this is the iterator object, returning a single element, the string "bye"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: 'bye', done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
```

Observe como redefinir `@@iterator` afeta o comportamento built-in que faz uso do protocolo de iteração:

```js
[...someString]; // ["bye"]
someString + ""; // "hi"
```

## Exemplos de Iteráveis

### Iteráveis Built-in

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} and {{jsxref("Set")}} são todos iteráveis internos, porque cada um dos seus objetos protótipos implementa um método `@@iterator`.

### Iteráveis definidos pelo usuário

Nós podemos fazer nossos próprios iterables assim:

```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### Built-in APIs que aceitam iteráveis

Existem muitas APIs que aceitam iteráveis, por exemplo: {{jsxref("Map", "Map([iterable])")}}, {{jsxref("WeakMap", "WeakMap([iterable])")}}, {{jsxref("Set", "Set([iterable])")}} e {{jsxref("WeakSet", "WeakSet([iterable])")}}:

```
var myObj = {};
new Map([[1, 'a'], [2, 'b'], [3, 'c']]).get(2);               // "b"
new WeakMap([[{}, 'a'], [myObj, 'b'], [{}, 'c']]).get(myObj); // "b"
new Set([1, 2, 3]).has(3);                               // true
new Set('123').has('2');                                 // true
new WeakSet(function* () {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);                                         // true
```

Veja também {{jsxref("Promise.all", "Promise.all(iterable)")}}, {{jsxref("Promise.race", "Promise.race(iterable)")}} e {{jsxref("Array.from", "Array.from()")}}.

### Sintaxe que espera iteráveis

Some statements and expressions expect iterables, for example the [`for-of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) loops, [spread operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator), [`yield*`](/pt-BR/docs/Web/JavaScript/Reference/Operators/yield*), and [destructuring assignment](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```
for(let value of ['a', 'b', 'c']){
    console.log(value);
}
// "a"
// "b"
// "c"

[...'abc']; // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c'];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(['a', 'b', 'c']);
a // "a"
```

### Iteráveis não bem formados

If an iterable's `@@iterator` method doesn't return an iterator object, then it's a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:

```
var nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] is not a function
```

## Iterator examples

### Simple iterator

```
function makeIterator(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```

### Infinite iterator

```
function idMaker() {
    var index = 0;

    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = idMaker();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
```

### Com um gerador

```
function* makeSimpleGenerator(array) {
    var nextIndex = 0;

    while (nextIndex < array.length) {
        yield array[nextIndex++];
    }
}

var gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true



function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
// ...
```

### Com uma classe ES2015

```
class SimpleClass {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {value: this.data[this.index++], done: false};
        } else {
          this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
          return {done: true};
        }
      }
    };
  }
}

const simple = new SimpleClass([1,2,3,4,5]);

for (const val of simple) {
  console.log(val);  //'0' '1' '2' '3' '4' '5'
}
```

## Um objeto gerador um iterador ou iterável?

Um objeto gerador é tanto iterador quanto iterável:

```
var aGeneratorObject = function* () {
    yield 1;
    yield 2;
    yield 3;
}();
typeof aGeneratorObject.next;
// "function", because it has a next method, so it's an iterator
typeof aGeneratorObject[Symbol.iterator];
// "function", because it has an @@iterator method, so it's an iterable
aGeneratorObject[Symbol.iterator]() === aGeneratorObject;
// true, because its @@iterator method returns itself (an iterator), so it's an well-formed iterable
[...aGeneratorObject];
// [1, 2, 3]
```

## Especificações

| Especificação                                          | Status               | Comentário         |
| ------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-iteration', 'Iteration')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-iteration', 'Iteration')}} | {{Spec2('ESDraft')}} |                    |

## Veja também

- Para mais informações sobre _generators_ ES2015, consulte [a documentação de function\*.](/pt-BR/docs/Web/JavaScript/Reference/Statements/function*)
