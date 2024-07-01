---
title: "ReferenceError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---

{{jsSidebar("Errors")}}

## Mensagem

```
ReferenceError: invalid assignment left-hand side
```

## Tipo do erro

{{jsxref("ReferenceError")}}.

## O que deu errado?

Ouve uma declaração inesperada em algum lugar. Isso pode ocorrer devido a uma confusão entre um [Operador de atribuição](/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators) e um [Operador de comparação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), por exemplo. Enquanto um `"="` define uma variavel, `"=="` ou `"==="` são usados para fazer uma comparação entre valores.

## Exemplos

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('de modo algum!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Olá, '
+= 'sou eu '
+= 'que você está procurando?';
// ReferenceError: invalid assignment left-hand side
```

Na declaração `if` você deve usar um operador de comparação ("=="), e para a atribuição da string, apenas o operador mais ("+") é necessario

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log("de modo algum!");
}

var str = "Olá, " + "do " + "outro lado!";
```

## Veja também

- [Operadores de atribuição](/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
- [Operadores de comparação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
