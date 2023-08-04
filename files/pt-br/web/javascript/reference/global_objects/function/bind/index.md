---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef}}

O método **`bind()`** cria uma nova função que, quando chamada, tem sua palavra-chave `this` definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## Sintaxe

```
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

### Parâmetros

- `thisArg`
  - : O valor a ser passado como parâmetro `this` para a função de destino quando a função vinculada é chamada. O valor é ignorado se a função ligada é construída usando o operador {{jsxref("Operators/new", "new")}}.
- `arg1, arg2, ...`
  - : Argumentos que precedem outros argumentos fornecidos para a função vinculada ao invocar a função de destino.

### Valor de retorno

Uma cópia da função fornecida com o valor `this` especificado e argumentos iniciais.

## Descrição

A função `bind()` cria uma nova **função vinculada** (_bound function_). Uma função vinculada é um **objeto de função exótico** (termo da **ECMAScript 2015**) que encapsula o objeto de função original. Chamar uma função vinculada geralmente resulta na execução de sua **função encapsulada**.

Uma função vinculada tem as seguintes propriedades internas:

- **\[\[BoundTargetFunction]]** - o objeto de função encapsulado;
- **\[\[BoundThis]]** - o valor que sempre é passado como `this` quando se chama a função encapsulada;
- **\[\[BoundArguments]]** - uma lista de valores cujos elementos são usados como os primeiros argumentos para qualquer chamada da função encapsulada;
- **\[\[Call]]** - executa código associado com este objeto. Invocado através de uma expressão de chamada de função. Os argumentos para o método interno são um valor `this` e uma lista contendo os argumentos passados para a função por uma expressão de chamada.

Quando a função vinculada é chamada, ela chama seu método interno **\[\[Call]]** na **\[\[BoundTargetFunction]],** na forma `Call(boundThis, args)`, onde `boundThis` é **\[\[BoundThis]]** e `args` é **\[\[BoundArguments]]** seguido pelos argumentos passados pela chamada de função.

Uma função vinculada também pode ser construída usando-se o operador {{jsxref("Operators/new", "new")}}; ao fazê-lo, o resultado é o mesmo que seria se a função alvo tivesse sido construída. O valor de `this` fornecido é ignorado, porém os argumentos precedentes são fornecidos à função emulada.

## Exemplos

### Criando uma função vinculada

O uso mais simples de `bind()` é fazer com que uma função que, independentemente da chamada, é chamada com um determinado valor `this`. Um erro comum para programadores JavaScript novatos é extrair um método de um objeto e, em seguida, chamar essa função e esperar que ele use o objeto original como o seu `this` (por exemplo, usando esse método num código baseado em _callback_). Sem a devida atenção, no entanto, o objeto original é normalmente perdido. Criar uma função vinculada a partir da função, usando o objeto original, resolve perfeitamente esse problema:

```js
this.x = 9; //this aqui se refere ao objeto global "window" do navegador
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// retorna 9 - a função foi invocada no escopo global

// Criando uma nova função com 'this' vinculada ao módulo
// Programadores novatos podem confundir a variável x
// global com a propriedade x do módulo
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

### Funções parcialmente aplicadas

O próximo uso mais simples de `bind()` é criar uma função com argumentos iniciais pré-especificados. Esses argumentos (caso existam) acompanham o valor `this` fornecido e então são inseridos no início dos argumentos passados para a função alvo, seguidos pelos argumentos passados para a função vinculada, sempre que a função vinculada é chamada.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Cria uma função com um argumento principal predefinido
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]
```

### Com `setTimeout`

Por padrão, dentro de {{domxref("window.setTimeout()")}} a palavra-chave `this` vai ser definida com o objeto {{ domxref("window") }} (ou com o objeto `global`). Ao trabalhar com métodos de classes que requerem que `this` se refira à instâncias de classes, você pode vincular `this` explicitamente à função de _callback_, de modo a manter a instância.

```js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declarar bloom depois de um intervalo de 1 segundo
LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};

var flower = new LateBloomer();
flower.bloom();
// depois de 1 segundo, ativa o método 'declare'
```

### Funções vinculadas usadas como construtores

> **Aviso:** Esta seção demonstra capacidades do JavaScript e documenta alguns casos de borda do método `bind()`. Os métodos mostrados abaixo não são os melhores jeitos de se fazer as coisas e provavelmente não deveriam ser usados em nenhum ambiente produtivo.

Funções vinculadas são automaticamente adequadas para uso com o operador {{jsxref("Operators/new", "new")}} para construir novas instâncias criadas pela função alvo. Quando uma função vinculada é usada para construir um valor, o `this` fornecido é ignorado. Porém, argumentos fornecidos ainda são prefixados à chamada do construtor:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

// não suportado no polyfill abaixo,
// funciona bem com o bind nativo:

var YAxisPoint = Point.bind(null, 0 /*x*/);

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
```

Note que você não precisa fazer nada de especial para criar uma função vinculada para usar com {{jsxref("Operators/new", "new")}}. O corolário é que você não precisa fazer nada de especial para criar uma função vinculada que será chamada de forma clara, mesmo que você preferisse que a função vinculada fosse somente chamada usando-se {{jsxref("Operators/new", "new")}}.

```js
// Exemplo pode ser executado diretamente no seu console JavaScript
// ...continuando o exemplo acima

// Ainda pode ser chamada como uma função normal
// (apesar de que isso geralmente não é desejado)
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y;
// >  '0,13'
```

Se você quer suportar o uso de uma função vinculada somente através de {{jsxref("Operators/new", "new")}}, ou somente a chamando, a função alvo deve impor essa restrição.

### Criando atalhos

`bind()` itambém é útil em casos onde você quer criar um atalho para uma função que requer um valor específico de `this`.

Tome por exemplo {{jsxref("Array.prototype.slice")}}, que você quer usar para converter um objeto _array-like_ em um vetor verdadeiro. Você poderia criar um atalho assim:

```js
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

Com `bind()`, isso pode ser simplificado. No seguinte trecho de código, `slice` é uma função vinculada à função {{jsxref("Function.prototype.apply()", "apply()")}} de {{jsxref("Function.prototype")}}, com o valor `this` definido com a função {{jsxref("Array.prototype.slice()", "slice()")}} de {{jsxref("Array.prototype")}}. Isso significa que chamadas adicionais de `apply()` podem ser eliminadas:

```js
// mesmo que "slice" no exemplo anterior
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## Polyfill

A função `bind` é uma adição à ECMA-262, 5ª. edição; como tal, pode não estar presente em todos os navegadores. Você pode contornar isso parcialmente inserindo o seguinte código no começo de seus _scripts_, permitindo o uso de muita parte da funcionalidade de `bind()` em implementações que não a suportam nativamente.

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // mais próximo possível da função interna
      // IsCallable da ECMAScript 5
      throw new TypeError(
        "Function.prototype.bind - what is trying to be bound is not callable",
      );
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(
          this instanceof fNOP ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)),
        );
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

Algumas das muitas diferenças (é bem possível que haja outras, já que esta lista não pretende seriamente ser completa) entre este algoritmo e o algoritmo especificado são:

- Esta implementação parcial depende dos métodos internos {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}} e {{jsxref("Function.prototype.apply()")}} possuírem seus valores originais.
- Esta implementação parcial cria funções que não tem um {{jsxref("Function.caller", "caller")}} imutável como "mecanismo de defesa" e propriedades `arguments` que lançam um {{jsxref("Global_Objects/TypeError", "TypeError")}} ao usar _get_, _set_, ou ao deletar. (Isto pode ser adicionado se a implementação suporta {{jsxref("Object.defineProperty")}}, ou parcialmente implementado sem um comportamento _throw-on-delete_ se a implementação suporta as extensões [`Object.prototype.__defineGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) e [`Object.prototype.__defineSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__))
- Esta implementação parcial cria funções que tem uma propriedade `prototype`. (Funções vinculadas apropriadas não a tem.)
- Esta implementação parcial cria funções vinculadas cuja propriedade {{jsxref("Function.length", "length")}} não cumpre com a regra da ECMA-262: cria funções com comprimento zero, quando uma implementação completa, dependendo do comprimento da função alvo e do número de argumentos pre-especificados, pode retornar um comprimento não-nulo.

Se você escolher utilizar esta implementação parcial, **você não deve confiar em casos onde o comportamento é diferente da ECMA-262, 5ª. edição!** Porém, com algum cuidado (e talvez com modificação adicional para atender necessidades específicas), esta implementação parcial pode ser uma ponte razoável para quando `bind()` for amplamente implementada de acordo com a especificação.

## Especificações

| Especificação                                                                  | Status             | Comentário                                           |
| ------------------------------------------------------------------------------ | ------------------ | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.3.4.5', 'Function.prototype.bind')}}              | {{Spec2('ES5.1')}} | Definição inicial. Implementada no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-function.prototype.bind', 'Function.prototype.bind')}} | {{Spec2('ES6')}}   |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.bind")}}

## Veja também

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
