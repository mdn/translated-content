---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
---

{{JSRef}}

A função **`Math.min()`** retorna o menor valor passado como parâmetro, ou {{jsxref("NaN")}} se o parâmetro não é ou não pode ser convertido para um número.

## Syntax

```
Math.min([valor1[, valor2[, ...]]])
```

### Parâmetros

- `valor1, valor2, ...`
  - : Números.

## Descrição

Por que `min()` é um método estático de `Math`, você sempre usa como `Math.min()`, e não como um método de um objeto `Math` que você criou (`Math` não é um construtor).

Se nenhum argumento for dado, o resultado é {{jsxref("Infinity")}}.

Se pelo menos um dos argumentos não pode ser convertido para um número, o resultado é {{jsxref("NaN")}}.

## Exemplos

### Usando `Math.min()`

Este encontra o min de `x` e `y` e atribui a `z` :

```
var x = 10, y = -20;
var z = Math.min(x, y);
```

### Cortando um valor com `Math.min()`

`Math.min()` é muitas vezes usado para cortar um valor sempre menor do que ou igual a um limite. Por exemplo, este.

```
var x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

pode ser escrita como este

```
var x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} pode ser usado de uma maneira semelhante ao corte de um valor na outra extremidade.

## Especificações

| Especificação                                        | Estato               | Comentário                                         |
| ---------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}     | definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.12', 'Math.min')}}  | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-math.min', 'Math.min')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-math.min', 'Math.min')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade do navegador

{{Compat("javascript.builtins.Math.min")}}

## Veja Também

- {{jsxref("Math.max()")}}
