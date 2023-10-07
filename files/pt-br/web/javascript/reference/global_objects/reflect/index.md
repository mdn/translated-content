---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**Reflect** é um objeto nativo que provê métodos para operações JavaScript interceptáveis. Os métodos são os mesmos que o dos [manipuladores de Proxy](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy). `Reflect` não é um objeto de função, então não é construtível.

## Descrição

Ao contrário da maioria dos objetos globais, `Reflect` não é um construtor. Você não pode usá-lo com o [operador new](/pt-BR/docs/Web/JavaScript/Reference/Operators/new) ou invocar o objeto `Reflect` como uma função. Todas as propriedades e métodos do `Reflect` são estáticos (igual o objeto {{jsxref("Math")}}).

O objeto `Reflect` provê as seguintes funções estáticas as quais tem os mesmos nomes usados pelos métodos [manipuladores de Proxy](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

Alguns deste métodos são também os mesmos correspondentes aos métodos em {{jsxref("Object")}}, embora eles tenham diferenças sutis entre eles.

## Métodos

- {{jsxref("Reflect.apply()", "Reflect.apply(<var>target</var>, <var>thisArgument</var>, <var>argumentsList</var>)")}}
  - : Chama uma função de destino com os argumentos, conforme especificado pelo parâmetro _`argumentsList`_. Veja também {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()", "Reflect.construct(<var>target</var>, <var>argumentsList</var>[, <var>newTarget</var>])")}}
  - : O [operador new](/pt-BR/docs/Web/JavaScript/Reference/Operators/new) como uma função. Equivalente a chamada `new target(...args)`. Também possui a opção de especificar um `prototype` diferente
- {{jsxref("Reflect.defineProperty()", "Reflect.defineProperty(<var>target</var>, <var>propertyKey</var>, <var>attributes</var>)")}}
  - : Similar ao {{jsxref("Object.defineProperty()")}}. Retorna um {{jsxref("Boolean")}} com o valor `true` _se a propriedade foi definida com sucesso_.
- {{jsxref("Reflect.deleteProperty()", "Reflect.deleteProperty(<var>target</var>, <var>propertyKey</var>)")}}
  - : O [operador delete](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete) como uma função. Equivalente a chamada `delete target[name]`.
- {{jsxref("Reflect.get()")}}, "Reflect.get(_target_, _propertyKey_[, _receiver_])"}}
  - : Uma função que retorna o valor da propriedade. Funciona como obter uma propriedade de um objeto (`target[propertyKey]`) como uma função.
- {{jsxref("Reflect.getOwnPropertyDescriptor()", "Reflect.getOwnPropertyDescriptor(<var>target</var>, <var>propertyKey</var>)")}}
  - : Similar ao {{jsxref("Object.getOwnPropertyDescriptor()")}}. Retorna um descritor de propriedade da propriedade dada se existir no objeto, {{jsxref ("undefined")}} caso contrário.
- {{jsxref("Reflect.getPrototypeOf()", "Reflect.getPrototypeOf(<var>target</var>)")}}
  - : Igual ao {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()", "Reflect.has(<var>target, propertyKey</var>)")}}
  - : O [operador in](/pt-BR/docs/Web/JavaScript/Reference/Operators/in) como função. Retorna um {{jsxref("Boolean")}} indicando se existe uma propriedade própria ou herdada.
- {{jsxref("Reflect.isExtensible()", "Reflect.isExtensible(<var>target</var>)")}}
  - : Igual ao {{jsxref("Object.isExtensible()")}}. Retorna um {{jsxref("Boolean")}} com o valor `true` se o destino (parâmetro target) for extensível.
- {{jsxref("Reflect.ownKeys()", "Reflect.ownKeys(<var>target</var>)")}}
  - : Retorna uma matriz das chaves de propriedade do próprio objeto de destino (não herdadas).
- {{jsxref("Reflect.preventExtensions()", "Reflect.preventExtensions(<var>target</var>)")}}
  - : Similar ao {{jsxref("Object.preventExtensions()")}}. Retorna um {{jsxref("Boolean")}} com o valor `true` se a atualização foi bem sucedida.
- {{jsxref("Reflect.set()", "Reflect.set(<var>target</var>, <var>propertyKey</var>, <var>value</var>[, <var>receiver</var>])")}}
  - : Uma função que atribui valores a propriedades. Retorna um {{jsxref ("Boolean")}} com o valor `true` se a atualização foi bem sucedida.
- {{jsxref("Reflect.setPrototypeOf()", "Reflect.setPrototypeOf(<var>target</var>, <var>prototype</var>)")}}
  - : Uma função que define o [protótipo de um objeto](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype). Retorna um {{jsxref ("Boolean")}} com o valor `true` se a atualização foi bem sucedida.

## Exemplos

### Verificando se um objeto contém determinadas propriedades

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting: function () {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### Retornando as próprias chaves do objeto

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### Adicionando uma nova propriedade ao objeto

```js
Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

## Especificações

| Especificação                                             | Situação             | Comentário                      |
| --------------------------------------------------------- | -------------------- | ------------------------------- |
| {{SpecName('ES6', '#sec-reflect-object', 'Reflect')}}     | {{Spec2('ES6')}}     | Definição Inicial               |
| {{SpecName('ESDraft', '#sec-reflect-object', 'Reflect')}} | {{Spec2('ESDraft')}} | Reflect.enumerate foi removido. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Reflect")}}

## Veja também

- The {{jsxref("Proxy")}} global object.
- The {{jsxref("Proxy.handler", "handler")}} object.
