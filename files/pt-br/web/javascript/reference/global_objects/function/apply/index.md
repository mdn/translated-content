---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
---

{{JSRef}}

O método **`apply()`** chama uma função com um dado valor `this` e `arguments` providos como uma array (ou um objeto parecido com um array).

> **Nota:** A sintaxe desta função é quase idêntica a essa da {{jsxref("Function.call", "call()")}}, a diferença é que `call()` aceita uma **lista de** **argumentos**, enquanto `apply()` aceita um **array de argumentos**.

## Sintaxe

```
fun.apply(thisArg, [argsArray])
```

### Parâmetros

- `thisArg`
  - : O valor de `this` é fornecido para a chamada de _fun._ Note que isso talvez não seja o valor real visto pelo método: se um método é uma função em código {{jsxref("Functions/Strict_mode", "non-strict mode", "", 1)}} , {{jsxref("null")}} e {{jsxref("undefined")}} serão substituidos com o objeto global, e os valores primitivos serão embalados.
- `argsArray`
  - : Um objeto parecido com um array (array-like), especificando os argumentos com os quais _fun_ deve ser chamado, ou {{jsxref("null")}} ou {{jsxref("undefined")}} se não houverem argumentos que possam ser passados para a função. Começando com ECMAScript5 esses argumentos podem ser um objeto genérico array-like ao invés de um array. Veja abaixo a informação de [compatibilidade de browsers](#browser_compatibility).

## Descrição

Você pode atribuir um objeto _`this`_ diferente quando chamar uma função existente. _`this`_ refere-se ao objeto atual, o objeto da chamada. Com _`apply`_, você pode escrever um método apenas uma vez e então herdá-lo em outro objeto, sem ter que reescrever o método para o novo objeto.

`apply` é muito parecido com {{jsxref("Function.call", "call()")}}, exceto pelo tipo de argumentos que ele suporta. Você pode usar um array de argumentos em vez de conjunto de parâmetros nomeados. Com `apply`, você pode usar um array literal, por exemplo, `fun.apply(this, ['comer', 'bananas'])`, ou um objeto {{jsxref("Array")}}, por exemplo `fun.apply(this, new Array('comer', 'bananas')).`

Você pode também usar {{jsxref("Functions/arguments", "arguments")}} para o parâmetro `argsArray`. `arguments`é uma variável local de uma função. Ele pode ser utilizado para todos os argumentos não especificados do objeto chamado. Assim, você não tem que saber os argumentos do objeto chamado quando você usa o método `apply`. Você pode usar `arguments` para passar todos os argumentos para o objeto da chamada. O objeto chamado fica então responsável por manipular os argumentos.

Desde a 5a versão do ECMAScript você pode utilizar qualquer tipo de objeto que é parecido com um array (array-like), então na prática isso significa que ele vai ter uma propriedade `length` e propriedades inteiras no intervalor (`0... length`). Como um exemplo, você pode agora usar um {{domxref("NodeList")}} ou um objeto personalizado como `{ 'length': 2, '0': 'comer', '1': 'bananas' }`.

> **Nota:** Muitos navegadores, incluindo o Chrome 14 e o Internet Explorer 9, ainda não aceitam objetos parecidos com array e irão lançar uma exceção.

## Exemplos

### Usando `apply` para cadeia de construtores

Você pode usar `apply` para encadear {{jsxref("Operators/new", "construtores", "", 1)}} em um objeto, similar ao Java. No exemplo seguinte nós iremos criar um método de {{jsxref("Global_Objects/Function", "Função")}} global chamado `construct`, que fará você capaz de usar um objeto parecido com um array com um construtor ao invés de uma lista de argumentos

```js
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

> **Nota:** O método `Object.create()` usado acima é relativamente novo. Para um método alternativo utilizando closures, por favor considere a seguinte alternativa.
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   var fConstructor = this,
>     fNewConstr = function () {
>       fConstructor.apply(this, aArgs);
>     };
>   fNewConstr.prototype = fConstructor.prototype;
>   return new fNewConstr();
> };
> ```

Exemplo de uso:

```js
function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1); // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor); // logs 'MyConstructor'
```

> **Nota:** Este método não nativo `Function.construct` não irá funcionar com alguns construtores nativos (como {{jsxref("Date")}}, por exemplo). Nestes casos você tem que usar o método {{jsxref("Function.prototype.bind")}} (por exemplo, imagine ter um array como o seguinte, para ser usado com o construtor {{jsxref("Global_Objects/Date", "Date")}}: `[2012, 11, 4]`; Neste caso você tem que escrever algom como: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` - de qualquer maneira essa não é a melhor forma de fazer as coisas e provavelmente não deve ser utilizado em qualquer ambiente de produção.

### Usando `apply` e funções embutidas

A forma inteligente com que `apply` é utilizado permite à você usar funções nativas que de outra forma provavelmente teriam que ser escritas iterando sobre um array de valores. Aqui, como exemplo, iremos utilizar `Math.max`/`Math.min` para achar o valor máximo/mínimo value em um array.

```js
/* número min/max em um array */
var numbers = [5, 6, 2, 3, 7];

/* utilizando Math.min/Math.max apply */
var max = Math.max.apply(
  null,
  numbers,
); /* Isso está prestes a ser igual a Math.max(numbers[0], ...)
                                            ou Math.max(5, 6, ...) */
var min = Math.min.apply(null, numbers);

/* vs. algoritmo simples baseado em loop */
(max = -Infinity), (min = +Infinity);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

Mas tome cuidado: ao utilizar o `apply` desta forma, você corre o risco de exceder o limite de argumentos do JavaScript. As consequências de fazer applying em uma função com muitos argumentos (pense em algo como dezenas de centenas de argumentos) varia de acordo com os engines (JavaScriptCore tem um [limite de argumentos de 65536](https://bugs.webkit.org/show_bug.cgi?id=80797) hard-coded), visto que o limite (na verdade, até mesmo a natureza de qualquer comportamento de um stack excessivamente grande) não é especificado. Algumas engines irão jogar uma excessão. De uma forma mais incisiva, outras engines irão limitar de forma arbitrária o número de argumentos que poderção ser aplicados à função. (Para ilustrar esse último caso: se uma engine dessas tem um limite de quatro argumentos \[obviamente, os limites atuais são significativamente maiores], isso seria como se os argumentos `5, 6, 2, 3` do exemplo anterior fossem passados ao `apply`, ao invés do array completo.) Se o valor do seu array puder crescer à casa das dezenas de centenas, use uma estratégia híbrida: aplique suas funções em cada bloco de array por vez:

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### Usando apply em "monkey-patching"

Apply pode ser a melhor forma de monkey-patch uma função nativa do Firefox, ou de bibliotecas em JS. Dada uma função `someobject.foo`, você poderá modificar a função de uma maneira hackeresca, como por exemplo:

```js
var originalfoo = someobject.foo;
someobject.foo = function () {
  // Faça coisas antes de chamar a função
  console.log(arguments);
  // Chama a função como se ela estivesse sido chamada normalmente:
  originalfoo.apply(this, arguments);
  // Rode as coisas que vem depois, aqui.
};
```

Esse método é especialmente útil quando você quer fazer debug de eventos, ou interagir com algo que não tem nenhuma API como os diversos eventos `.on([event]...` events, por exemplo aqueles utilizáveis no [Devtools Inspector](/pt-BR/docs/Tools/Page_Inspector#Developer_API)).

## Especificações

| Especificação                                                                    | Status             | Comentário                                         |
| -------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 3º Edição.                                                            | Padrão             | Definição inicial, implementado no JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.3.4.3', 'Function.prototype.apply')}}               | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-function.prototype.apply', 'Function.prototype.apply')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.apply")}}

## Veja também

- Objeto {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Funções e escopo de funções", "", 1)}}
