---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
---

{{jsSidebar("Errors")}}

## Mensagem

```
ReferenceError: reference to undefined property "x" (Firefox)
```

## Tipo de Erro

(Apenas no Firefox) O aviso {{jsxref("ReferenceError")}} é reportado somente se a preferência `javascript.options.strict` está definida como `true`.

## O que está errado?

O script tentou acessar uma propriedade de objeto que não existe. Existem duas maneiras de acessar propriedades; veja a página de referência {{jsxref ("Operators / Property_Accessors", "property accessors", 0, 1)}} para saber mais sobre eles.

## Exemplos

### Errado

Neste caso, a propriedade `bar` é uma propriedade não definida, assim, ocorrerá um `ReferenceError`.

```js example-bad
var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### Certo

Para evitar o erro, você precisa adicionar uma definição de `bar` ao objeto ou verificar a existência da propriedade `bar` antes de tentar acessá-la; Uma maneira de fazer isso é usar o método {{jsxref ("Object.prototype.hasOwnProperty ()")}}, desta forma:

```js example-good
var foo = {};

// Define a propriedade bar

foo.bar = "moon";
console.log(foo.bar); // "moon"

// Teste para ter certeza se bar existe antes de acessa-lo

if (foo.hasOwnProperty("bar")) {
  console.log(foo.bar);
}
```

## Veja também

- {{jsxref("Operators/Property_Accessors", "property accessors", 0, 1)}}
