---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
---

{{JSRef}}

O método **`Object.setPrototypeOf()`** configura o 'prototype' (i.e., a propriedade interna `[[Prototype]]`) de um objeto específico para outro objeto ou {{jsxref("null")}}.

> **Aviso:** **Atenção:** Mudar o `[[Prototype]]` de um objeto é, pela natureza de como os modernos mecanismos JavaScript otimizam os acessos de propriedade, uma operação muito lenta, em **_todos_** navegadores e mecanismos JavaScript. O efeito sobre o desempenho de alterar a herança são sutis e vastas e não se limitam simplesmente ao tempo gasto em `obj.__proto__ = ...` statement, mas pode estender a **_qualquer_** código que tem acesso a **_qualquer_** objeto cujo `[[Prototype]]` foi alterado. Se você se preocupa com desempenho, você deveria evitar configurar o `[[Prototype]]` de um objeto. Em vez disso, crie um novo objeto com o `[[Prototype]] desejado usando` {{jsxref("Object.create()")}}.

## Sintaxe

```
Object.setPrototypeOf(obj, prototype);
```

### Parâmetros

- `obj`
  - : O objeto que deve ter seu 'prototype' definido.
- `prototype`
  - : O novo 'prototype' do objeto (um objeto ou {{jsxref("null")}}).

### Valor de retorno

O objeto especificado.

## Descrição

Gera uma exceção {{jsxref("TypeError")}} se o objeto cujo `[[Prototype]]` é para ser modificado não for extensível de acordo com {{jsxref("Object.isExtensible()")}}. Não faz nada se o parâmetro '`prototype'` não for um objeto ou {{jsxref("null")}} (ex., número, texto, boleano, ou {{jsxref("undefined")}}). Caso contrário, este método muda o `[[Prototype]]` do `obj` para um novo valor.

`Object.setPrototypeOf() é uma especificação` ECMAScript 2015. É geralmente considerada a maneira correta de definir o 'prototype' de um objeto, em relação à propriedade mais controversa [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

## Exemplos

```js
var dict = Object.setPrototypeOf({}, null);
```

## Polyfill

Usando a propriedade mais antiga [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), nós podemos facilmente definir `Object.setPrototypeOf` se já não estiver disponível:

```js
// Funciona somente no Chrome e FireFox, não funciona no IE:
Object.setPrototypeOf =
  Object.setPrototypeOf ||
  function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  };
```

## Adicionando 'Prototype' em cadeia

Uma combinação de `Object.getPrototypeOf()` e [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) permite anexar toda uma cadeia de 'prototype' a um novo objeto 'prototype':

```js
/**
 *** Object.appendChain(@object, @prototype)
 *
 * Acrescente o primeiro 'prototype' não nativo de uma cadeia a um novo 'prototype'.
 * Retorna @object (se for um valor primitivo, será transformado em um objeto).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 * Adicione o primeiro 'prototype' não nativo de uma cadeia ao objeto nativo Function.prototype, então anexar a nova função
 * Function(["@arg"(s)], "@function_body") àquela cadeia.
 * Retorna a função.
 *
 **/

Object.appendChain = function (oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError("Object.appendChain - Argumentos insuficientes");
  }
  if (typeof oProto !== "object" && typeof oProto !== "string") {
    throw new TypeError(
      "segundo argumento de Object.appendChain deve ser um objeto ou uma string",
    );
  }

  var oNewProto = oProto,
    oReturn =
      (o2nd =
      oLast =
        oChain instanceof this ? oChain : new oChain.constructor(oChain));

  for (
    var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype && o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
};
```

### Exemplos

#### Primeiro exemplo: Adicionar uma cadeia a um 'prototype'

```js
function Mammal() {
  this.isMammal = "yes";
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies("Felis");

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = "yes";
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
```

#### Segundo exemplo: Transformar um valor primitivo em uma instância de seu construtor e anexar sua cadeia a um 'prototype'

```js
function MySymbol() {
  this.isSymbol = "yes";
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
```

#### Terceiro exemplo: Anexar uma cadeia ao objeto Function.prototype e anexar uma nova função a essa cadeia

```js
function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(
  new Person("George"),
  'console.log("Hello guys!!");',
);

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
```

## Especificações

| Especificação                                                                 | Situação             | Comentário         |
| ----------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-object.setprototypeof', 'Object.setProtoypeOf')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-object.setprototypeof', 'Object.setProtoypeOf')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.setPrototypeOf")}}

## Veja também

- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
