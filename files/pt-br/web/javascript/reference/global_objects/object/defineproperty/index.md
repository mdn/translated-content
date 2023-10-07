---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

O método **`Object.defineProperty()`** define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.

> **Nota:** Você invoca este método diretamente no construtor do {{jsxref("Object")}} ao invés de invocar em uma instância do tipo `Object`.

## Sintaxe

```
Object.defineProperty(obj, prop, descriptor)
```

### Parâmetros

- `obj`
  - : O objeto no qual será definida a propriedade.
- `prop`
  - : O nome da propriedade que será definida ou modificada.
- `descriptor`
  - : O descritor para a propriedade que será definida ou modificada.

### Valor de retorno

O objeto que foi passado à função.

## Descrição

Esse método permite uma precisa inclusão ou modificação de uma propriedade em um objeto. Enquanto a inclusão de propriedades através de atribuição cria propriedades que são visíveis durante a enumeração (por repetições {{jsxref("Statements/for...in", "for...in")}} ou pelo método {{jsxref("Object.keys")}}), e cujos valores podem ser alterados e {{jsxref("Operators/delete", "deletados", "", 1)}}, esse método permite a modificação deste comportamento padrão. Por padrão, valores incluídos utilizando `Object.defineProperty()` são imutáveis.

Os descritores de propriedades presentes nos objetos se apresentam em duas variedades: descritores de dados e descritores de assessores. Um _descritor de dado_ é uma propriedade que contém um valor, podendo este ser gravável ou não. Um _descritor de assessor_ é uma propriedade definida como um par de funções getter-setter. Um descritor deve ser de uma destas variedades; não pode ser de ambas.

Ambos os descritores de dados e de assessor são objetos. Eles compartilham as seguintes chaves obrigatórias:

- `configurable`
  - : `true` se e somente se o tipo deste descritor de propriedade pode ser alterado e se a propriedade pode ser deletada do objeto correspondente.
    **Valor padrão é `false`.**
- `enumerable`
  - : `true` se e somente se esta propriedade aparece durante enumeração das propriedades no objeto correspondente.
    **Valor padrão é `false`.**

Um descritor de dados também possui as seguintes chaves opcionais:

- `value`
  - : O valor associado com a propriedade. Pode ser qualquer valor válido em Javascript (número, objeto, função, etc).
    **Valor padrão é {{jsxref("undefined")}}.**
- `writable`
  - : `true` se e somente se o valor associado com a propriedade pode ser modificada com um {{jsxref("Operators/Assignment_Operators", "operador de atribuição", "", 1)}}.
    **Valor padrão é `false`.**

Um descritor de assessor também possui as seguintes chaves opcionais:

- `get`
  - : Uma função que servirá como um getter da propriedade, ou {{jsxref("undefined")}} se não houver getter. Quando a propriedade é acessada, esta função é chamada sem argumentos e com `this` define para o objeto no qual a propriedade é acessada (este pode não ser o objeto sobre o qual a propriedade está definida devido a herança). O valor retornado será usado como valor da propriedade.
    **Valor padrão é {{jsxref("undefined")}}.**
- `set`
  - : A função que servirá como um setter para a propriedade, ou {{jsxref("undefined")}} se não houver setter. Quando a propriedade é atribuída, esta função é chamada com um argumento (o valor sendo atribuído para a propriedade) e com `this` configura o objeto através do qual a propriedade é atribuída.
    **Valor padrão é {{jsxref("undefined")}}.**

Se um descritor tem nenhum das chaves `value`, `writable`, `get` e `set`, ele é tratado como um descritor de dados. Se um descritor tem ambas chaves `value` ou `writable` e `get` ou `set` keys, uma exceção é lançada.

Tenha em mente que estes atributos não são necessariamente as propriedades do próprio descritor. Propriedades herdadas serão consideradas também. Para garantir que estes padrões sejam preservados, você pode congelar o {{jsxref("Object.prototype")}} previamente, declarar todas as opções explicitamente, ou apontar para {{jsxref("null")}} com {{jsxref("Object.create", "Object.create(null)")}}.

```js
// usando __proto__
var obj = {};
var descriptor = Object.create(null); // não herdar propriedades
// não enumerável, não configurável, não gravável por padrão
descriptor.value = "static";
Object.defineProperty(obj, "key", descriptor);

// declarando explicitamente
Object.defineProperty(obj, "key", {
  enumerable: false, // não enumerável
  configurable: false, // não configurável
  writable: false, // não gravável
  value: "static",
});

// reciclando um mesmo objeto
function withValue(value) {
  var d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null,
    });
  d.value = value;
  return d;
}

// ... e ...
Object.defineProperty(obj, "key", withValue("static"));

// se o método freeze estiver disponível, prevenir as propriedades
// (value, get, set, enumerable, writable, configurable) de serem
// incluídas ou removidas do protótipo do objeto
(Object.freeze || Object)(Object.prototype);
```

## Exemplos

Se você deseja utilizar o método `Object.defineProperty` com uma sintaxe estilo _flags-binárias_, veja os [exemplos adicionais](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples).

### Criando uma propriedade

Quando a propriedade especificada não existe no objeto, `Object.defineProperty()` cria uma nova propriedade conforme descrito anteriormente. Campos podem ser omitidos no descritor, e os valores padrão para esses campos serão introduzidos.

Todos os campos do tipo Boolean possuem como valor padrão `false`. Os campos `value`, `get`, e `set` possuem como padrão {{jsxref("undefined")}}. Uma propriedade que é definida sem os valores para `get`/`set`/`value`/`writable` é dita "genérica" e classificada como um descritor de dados.

```js
var o = {}; // Criar um novo objeto

// Exemplo de propriedade de objeto inserida através
// de defineProperty com descritor do tipo dado
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// A propriedade 'a' existe no objeto com valor 37

// Exemplo de propriedade de objeto inserida através
// de defineProperty com descritor do tipo assessor
var bValue = 38;

Object.defineProperty(o, "b", {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});

o.b; // 38
// A propriedade 'b' existe no objeto com valor 38
// O valor de o.b será sempre idêntico a bValue, a
// menos que o.b seja redefinido

// Você não pode combinar ambos os tipos:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// lança um TypeError: value existe apenas em descritores
// de dado, get existe apenas em descritores de assessor
```

### Modificando uma propriedade

Quando uma propriedade já existe, `Object.defineProperty()` tenta modificá-la de acordo com os valores do descritor e a configuração atual do objeto. Se o descritor antigo possuía seu atributo `configurable` como `false` a propriedade é chamada "não configurável" e nenhum atributo pode ser alterado (exceto a alteração irreversível de _writable_ para _false_). Não é possível alternar o tipo de uma propriedade entre dados e assessor quando esta for não-configurável.

Um {{jsxref("TypeError")}} é lançado quando são realizadas tentativas de se alterar propriedades não-configuráveis (exceto o atributo `writable`) a menos que o valor atual e o novo sejam os mesmos.

#### O atributo writable

Quando o atributo `writable` de uma propriedade é definido como `false`, a propriedade é dita "não-gravável". Seu valor não poderá ser alterado.

```js
var o = {}; // Cria um novo objeto

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // escreve 37

o.a = 25; // Nenhum erro é lançado (no modo strict seria
// lançado mesmo que o valor fosse o mesmo)

console.log(o.a); // escreve 37. A atribuição não teve efeito.
```

Como visto no exemplo, tentativas de escrita em uma propriedade não-gravável não alteram seu valor, mas também não lançam erros.

#### O atributo enumerable

O atributo `enumerable` de uma propriedade define se ela deve ser exibida em uma repetição {{jsxref("Statements/for...in", "for...in")}} e por {{jsxref("Object.keys()")}} ou não.

```js
var o = {};

Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});

Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});

Object.defineProperty(o, "c", {
  value: 3,
}); // o valor padrão para enumerable é false

o.d = 4; // o valor padrão para enumerable é true quando
// a propriedade é criada em uma atribuição

for (var i in o) {
  console.log(i);
}
// escreve 'a' e 'd' (em ordem indefinida)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
```

#### O atributo configurable

O atributo `configurable` controla ao mesmo se uma propriedade pode ser deletada do objeto, e se seus atributos (exceto a mudança de `writable` para `false`) podem ser alterados.

```js
var o = {};

Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // lança um TypeError

Object.defineProperty(o, "a", {
  enumerable: true,
}); // lança um TypeError

Object.defineProperty(o, "a", {
  set: function () {},
}); // lança um TypeError (o atributo set já estava definido)

Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
}); // lança um TypeError
// (mesmo o novo get fazendo exatamente a mesma coisa)

Object.defineProperty(o, "a", {
  value: 12,
}); // lança um TypeError

console.log(o.a); // escreve 1
delete o.a; // Nada acontece
console.log(o.a); // escreve 1
```

Se o atributo `configurable` de `o.a` fosse `true`, nenhum dos erros seria lançado e a propriedade estaria deletada ao final.

### Incluindo propriedades e valores padrão

É importante considerar a forma como os valores padrão para atributos são aplicados. Normalmente existe diferença entre usar a notação por ponto para atribuir um valor e usar `Object.defineProperty()`, como pode ser visto no exemplo abaixo:

```js
var o = {};

o.a = 1;

// é equivalente a:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// Por outro lado,
Object.defineProperty(o, "a", { value: 1 });

// é equivalente a:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Setters e getters customizados

O exemplo abaixo mostra como implementar um objeto auto-arquivável. Quando a propriedade `temperature` é atribuída, o array `archive` recebe uma nova entrada de log.

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

Neste exemplo, um getter sempre retorna o mesmo valor.

```js
var pattern = {
  get: function () {
    return (
      "Eu sempre retorno esta string, " + "não importa o que você atribuiu"
    );
  },
  set: function () {
    this.myname = "esta string é meu nome";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = "test";

console.log(instance.myproperty);
// Eu sempre retorno esta string, não importa o que você atribuiu

console.log(instance.myname); // esta string é meu nome
```

### Propriedades de Herança

Se uma propriedade de acessor é herdada, métodos `get` e `set` serão chamados quando a propriedade é acessada e modificada sobre os objetos descendentes. Se estes métodos usam uma variável para armazenar o valor, este valor será compartilhada por todos os objetos.

```
function myclass() {
}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1
```

Isto pode ser corrigido armazenando o valor em outra propriedade. Em métodos `get` e `set`, `this` aponta para o objeto no qual é usado para acessar ou modificar a propriedade.

```
function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined
```

Ao contrário das propriedades do acessor, propriedades do valor serão sempre configuradas sobre o próprio objeto, não sobre um protótipo. Entretanto, se uma propriedade de valor não-gravável é herdada, ele ainda previne de modicação a propriedade do objeto.

```
function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignorado, lança no modo strict
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
```

## Especificações

| Especificação                                                                  | Status               | Comentários                                          |
| ------------------------------------------------------------------------------ | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.6', 'Object.defineProperty')}}                | {{Spec2('ES5.1')}}   | Definição inicial. Implementada no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.defineproperty', 'Object.defineProperty')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.defineproperty', 'Object.defineProperty')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.defineProperty")}}

## Notas de compatibilidade

### Redefinindo a propriedade `length` de um objeto `Array`

É possível redefinir a propriedade {{jsxref("Array.length", "length")}} de arrays, sujeita às restrições de redefinição usuais. (A propriedade {{jsxref("Array.length", "length")}} é inicialmente não configurável, não enumerável, mas gravável. Assim, em um array que não foi modificado, é possível alterar o valor da propriedade {{jsxref("Array.length", "length")}} ou torná-la não-gravável. Não é permitido alterar sua enumerabilidade ou configurabilidade, ou quando se encontrar não-gravável, alterar seu valor ou torná-la gravável novamente.) Entretanto, nem todos os browsers permitem esta redefinição.

Das versões 4 até 22 do Firefox, um {{jsxref("TypeError")}} é lançado em qualquer tentativa (seja ela permitida ou não) de redefinir a propriedade {{jsxref("Array.length", "length")}} de um array.

Versões do Chrome que implementam `Object.defineProperty()` em algumas circunstâncias ignoram um valor para _length_ diferente do valor atual da propriedade {{jsxref("Array.length", "length")}} do array. Em algumas circustâncias, alterar o atributo `writable` falha de forma silenciosa (sem lançar uma exceção). Além disso, alguns métodos que modificam o array como {jsxref("Array.prototype.push")}} não respeitam uma propriedade _length_ não-gravável.

Versões do Safari que implementam `Object.defineProperty()` ignoram um valor para `length` diferente do valor atual da propriedade {{jsxref("Array.length", "length")}}, e tentantivas de alterar o atributo `writable` executam sem erros embora não modifiquem seu comportamento.

Apenas o Internet Explorer 9 a posteriores, e o Firefox 23 e posteriores, parecem implementar total e corretamente a redefinição da propriedade {{jsxref("Array.length", "length")}} de arrays. Por enquanto, não confie que a redefinição da propriedade {{jsxref("Array.length", "length")}} vá funcionar, mesmo que de uma forma particular. E mesmo quando você _puder_ confiar, [existem boas razões para não fazer isso](http://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/).

### Notas específicas para o Internet Explorer 8

O Internet Explorer 8 implementa o método `Object.defineProperty()` para uso [apenas em objetos DOM](https://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx). Algumas observações:

- Tentativas de usar `Object.defineProperty()` em objetos nativos lançam um erro.
- Todos os atributos da propriedade devem ter seu valor definido. Os atributos `configurable`, `enumerable` e `writable` devem ser `true` para um descritor do tipo dado, e `true` para `configurable` e `false` para `enumerable` em descritores do tipo assessor. (?) Qualquer tentativa de usar outros valores (?) resultará no lançamento de um erro.
- Reconfigurar uma propriedade exige que ela seja deletada anteriormente. Se a propriedade não for deletada, ela permanecerá inalterada após a tentativa de reconfiguração.

## Veja também

- [Enumerabilidade and posse de propriedades](/pt-BR/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.prototype.watch()")}}
- {{jsxref("Object.prototype.unwatch()")}}
- {{jsxref("Operators/get", "get")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.create()")}}
- [Exemplos adicionais de `Object.defineProperty`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples)
- {{jsxref("Reflect.defineProperty()")}}
