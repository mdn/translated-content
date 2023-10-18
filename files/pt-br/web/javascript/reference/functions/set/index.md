---
title: setter
slug: Web/JavaScript/Reference/Functions/set
---

{{jsSidebar("Functions")}}

A sintaxe **`set`** liga a propriedade da função para ser chamada quando existe uma tentativa de definir valor para essa propriedade.

## Sintaxe

```
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### Parâmetros

- `prop`
  - : Nome da propriedade ligada a função.
- `val`
  - : `Um apelido para variável que será atribuidada a prop.`
- expression
  - : Iniciando com ECMAScript 6, você pode usar também expressões para computar o nome da propriedade a ser definida na função.

## Descrição

Em JavaScript, um _setter_ pode ser usado para executar uma função sempre que se tenta mudar uma propriedade específica. _Setters_ são geralmente usados em conjunto com _getters_, para criar um tipo de pseudo-propriedade. No entanto é impossível ter-se um setter para uma propriedade que contenha um valor real.

Observe os seguintes itens ao trabalhar com a sintaxe _set_:

- Ele pode ter um identificador que é um número ou uma string;
- Deve ter exatamente um parâmetro (para mais informações, acesse: [Mudança do ES5 incompatível: funções getter e setter literais tem exatamemente zero ou um parâmetros](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/));
- Não deve ter a mesma nomenclatura seja ela para propriedades ou função.
  (`{ set x(v) { }, set x(v) { } }` e `{ x: ..., set x(v) { } }` é proibido.)

Um _setter_ pode ser deletado usando o operator [`delete`](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete).

## Exemplos

### Definindo um setter em new Objects no inicializador

Vai definir um pseudo-property _current_ para este objeto, quando atribuido um valor, vai mudar `log` com o valor passado:

```js
var o = {
  set current(str) {
    this.log[this.log.length] = str;
  },
  log: [],
};
```

Observe que _current_ não está definido e qualquer tentativa de acesso irá resultar em _undefined_.

### Removendo um setter com o operador `delete`

Se você deseja remover o _setter_, poderá usar somente o [`delete`](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete):

```js
delete o.current;
```

### Definindo um setter para um Object existente usando o `defineProperty`

Para adicionar um _setter_ para um Object existentem mais tarde, use {{jsxref("Object.defineProperty()")}}.

```js
var o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a); // 5
```

### Usando um nome de propriedade computada

> **Nota:** **Atenção:** Propriedades computadas são uma tecnologia experimental, parte da proposta ECMAScript 6, e não é amplamente suportada por todos os browsers ainda. Ele vai retornar um syntax error en ambientes que não tem suporte.

```js
var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // run the setter
console.log(obj.baz); // "baz"
```

## Expecificações

| Specification                                                            | Status               | Comment                        |
| ------------------------------------------------------------------------ | -------------------- | ------------------------------ |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}               | {{Spec2('ES5.1')}}   | Initial definition.            |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}     | Added computed property names. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                |

## Compatibilidade com navegadores

{{Compat("javascript.functions.set")}}

## SpiderMonkey-specific notes

- Starting with [JavaScript 1.8.1](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/1.8.1), setters are no longer called when setting properties in object and array initializers.
- From SpiderMonkey 38 on, a setter with a {{jsxref("Functions/rest_parameters", "rest parameter", "", 1)}} is a {{jsxref("SyntaxError")}} as per the ES6 specification.

## See also

- [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining Getters and Setters](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) in JavaScript Guide
