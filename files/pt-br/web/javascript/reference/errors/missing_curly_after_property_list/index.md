---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: missing } after property list
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que deu errado?

Aconteceu um engano na sintaxe do [inicializador do objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer) em algum lugar. Pode ser que você esqueceu de colocar uma chave, mas também pode ser uma vírgula que foi esquecida, por exemplo. Verifique também se alguma chave de finalização ou parêntesis estão em algum lugar que não deveriam estar. Indente ou formate o código de uma maneira legível pode te ajudar a enxergar no meio dessa selva.

## Exemplos

### Vírgula esquecida

Muitas vezes esquecemos uma vígula no inicializador de objeto:

```js example-bad
var obj = {
  a: 1,
  b: { minhaProp: 2 }
  c: 3
};
```

O código correto deve ser:

```js example-good
var obj = {
  a: 1,
  b: { minhaProp: 2 },
  c: 3,
};
```

## Veja também

- [Inicializador de objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer)
