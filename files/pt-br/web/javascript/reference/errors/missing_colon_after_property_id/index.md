---
title: "Erro de Sintaxe: faltando : depois da propriedade id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---

{{jsSidebar("Errors")}}

## Mensagem

```
SyntaxError: missing : after property id
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que deu errado?

Ao criar objetos com a sintaxe do [iniciador do objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer), dois pontos (`:`) separam chaves e valores para as propriedades do objeto.

```js
var obj = { propertyKey: "value" };
```

## Exemplos

### Dois-pontos contra sinal de igualdade

Este código falha, pois o sinal de igualdade não pode ser usado dessa maneira nesta sintaxe do iniciador do objeto.

```js example-bad
var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
```

Correto seria usar um dois-pontos, ou usar colchetes para atribuir uma nova propriedade depois que o objeto já foi criado.

```js example-good
var obj = { propertyKey: "value" };

// or alternatively

var obj = {};
obj["propertyKey"] = "value";
```

### Propriedades vazia

Você não pode criar propriedades vazias como esta:

```js example-bad
var obj = { propertyKey; };
// SyntaxError: missing : after property id
```

Se você precisa definir uma propriedade sem um valor, você pode usar {{jsxref("null")}} como um valor.

```js example-good
var obj = { propertyKey: null };
```

### Propriedades computadas

Se você criar uma chave de propriedade de uma expressão, você precisa usar colchetes. Caso contrário, o nome da propriedade não pode ser computado:

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
```

Coloque a expressão entre parênteses `[]`:

```js example-good
var obj = { ["b" + "ar"]: "foo" };
```

## Veja também

- [Inicializador de objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer)
