---
title: getter
slug: Web/JavaScript/Reference/Functions/get
---

{{jsSidebar("Functions")}}A sintaxe de **get** associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.

## Sintaxe

```
{get prop() { ... } }
{get [expression]() { ... } }
```

### Parâmetros

- `prop`
  - : O nome da propriedade à qual a função dada será associada.
- expression
  - : A partir do ECMAScript 6, você pode também utilizar expressões para um nome computado de uma propriedade para associar à função dada.

## Descrição

Às vezes é desejável que se permita acesso a uma propriedade que retorna um valor computado dinamicamente, ou você pode querer refletir o status de uma variável interna sem requerer o uso de chamadas de método explícitas. Em Javascript, isso pode ser feito com o uso de um _getter_. Não é possível simultaneamente ter um getter associado a uma propriedade e a mesma possuir um valor, embora seja possível usar um getter e um setter em conjunto para criar algo como uma pseudo-propriedade.

Note o seguinte quando for trabalhar com a sintaxe _get_:

- Pode haver um identificador que seja um número ou uma string;
- Deve haver exatamente zero parâmetros (veja [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) para mais informações)
- Não deve haver mais de um getter para a mesma propriedade nem uma propriedade comum como o mesmo nome do getter (`{ get x() { }, get x() { } }` and `{ x: ..., get x() { } }` são proibidos).

Um getter pode ser removido usando o operador `delete.`

## Exemplos

### Definindo um getter em novos objetos em inicializadores de objetos

O exemplo abaixo irá criar a pseudo-propriedade `latest` para o objeto `obj`, que irá retornar o último item do array em `log`.

```js
var log = ["test"];
var obj = {
  get latest() {
    if (log.length == 0) return undefined;
    return log[log.length - 1];
  },
};
console.log(obj.latest); // Retornará "test".
```

Note que a tentativa de atribuir um valor a `latest não irá alterá-la.`

### Removendo um getter usando o operador `delete`

Se você quer remover um getter, você pode apenas utilizar `delete.`

```js
delete obj.latest;
```

### Definindo um getter em objetos existentes usando `defineProperty`

Para adicionar um getter a um objeto existente a qualquer momento, use {{jsxref("Object.defineProperty()")}}.

```js
var o = { a: 0 };

Object.defineProperty(o, "b", {
  get: function () {
    return this.a + 1;
  },
});

console.log(o.b); // Executa o getter, que retornará a + 1 (que é 1)
```

### Usando uma propriedade com nome computado

> **Nota:** Propriedades com nome computado são uma tecnologia experimenta, parte da proposta do ECMAScript 6 e não é amplamente suportada pelos navegadores ainda. O exemplo abaixo irá disparar um `SyntaxError em ambientes sem suporte.`

```js
var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### Smart / self-overwriting / lazy getters

Getters lhe dão uma maneira de definir uma propriedade de um objeto, mas eles não calculam o valor da propriedade até que sejam acessados. Um getter adia o custo de cálculo do valor até que o valor seja necessário e, se nunca o for, você não precisa pagar esse custo.

Uma técnica de otimização adicional para atrasar o cálculo do valor de uma propriedade e cacheá-lo para acesso futuro são os **smart ou [memoized](https://en.wikipedia.org/wiki/Memoization) getters**. O valor é calculado na primeira vez que o getter é invocado, sendo então cacheado para que acessos subsequentes retornem o valor em cache sem recalculá-lo. Isso é util nas seguintes situações:

- Se o cálculo da propriedade é caro (usa muita RAM ou CPU, cria um worker, retorna um arquivo remoto, etc).
- Se o valor não é necessário agora. Ele será utilizado depois ou, em alguns casos, nem mesmo o será.
- Se for utilizado, ele será acessado diversas vezes e não há necessidade de recalcular um valor que nunca será alterado, ou não deveria ser recalculado.

Isso significa que você não deveria utilizar um lazy getter para uma propriedade cujo valor você espera mudar, porque o getter nunca irá recalcular o valor.

No exemplo a seguir, o objeto tem um getter como uma propriedade própria (own property). Ao tentar obter essa propriedade que foi removida, ela será readicionada, mas implicitamente como uma propriedade comum desta vez. Finalmente, o valor será retornado.

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById("bookmarked-notification-anchor");
},
```

Para o Firefox, veja também o código do módulo XPCOMUtils.jsm, que define a função [defineLazyGetter()](</pt-BR/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()>).

## Especificações

| Especificação                                                            | Status               | Comentário                                   |
| ------------------------------------------------------------------------ | -------------------- | -------------------------------------------- |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}               | {{Spec2('ES5.1')}}   | Definição inicial.                           |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}     | Adicionado nomes de propriedades computadas. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                              |

## Compatibilidade com navegadores

{{Compat("javascript.functions.get")}}

## Veja também

- [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining Getters and Setters](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) in JavaScript Guide
