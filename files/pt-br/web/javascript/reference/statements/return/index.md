---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

A **declaração `return`** finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.

## Sintaxe

```
return [[expression]];
```

- `expression`
  - : A expressão cujo valor será retornado. Se omitido, `undefined` é retornado.

## Descrição

Quando uma declaração `return` é usada em um corpo de função, a execução dessa função é parada. Se especificado, um dado valor é retornado à quem chamou a função. Se a expressão for omitida, `undefined` será retornado. Todas as declarações return a seguir param a execução da função:

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### Inserção Automática de Ponto-e-Vírgula

A declaração `return` é afetada pela [inserção automática de ponto e vírgula (ASI)](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion). Nenhum terminador de linha é permitido entre a palavra-chave `return` e a expressão.

```js-nolint
return
a + b;
```

é transformado pelo ASI em:

```
return;
a + b;
```

O console irá alertar "unreachable code after return statement" (código inacessível após a declaração return).

> **Nota:** A partir do Gecko 40, um alerta é mostrado no console se um código inacessível é encontrado após uma declaração `return`.

## Exemplos

### return

A função a seguir retorna o quadro do seu argumento, `x`, quando `x` é um número.

```js
function square(x) {
  return x * x;
}
```

### Interrompendo uma função

Uma função para imediatamente no ponto em que `return` é chamado.

```js
function counter() {
  for (var count = 1; ; count++) {
    // loop infinito
    console.log(count + "A"); // até 5
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // até 4
  }
  console.log(count + "C"); // nunca aparece
}

counter();

// Saída:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### Retornando uma função

Veja também o artigo sobre [Closures](/pt-BR/docs/Web/JavaScript/Closures).

```js
function magic(x) {
  return function calc(x) {
    return x * 42;
  };
}

var answer = magic();
answer(1337); // 56154
```

## Especificações

| Especificação                                                        | Situação             | Comentário         |
| -------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES1')}}                                                  | {{Spec2('ES1')}}     | Definição inicial. |
| {{SpecName('ES5.1', '#sec-12.9', 'Return statement')}}               | {{Spec2('ES5.1')}}   |                    |
| {{SpecName('ES6', '#sec-return-statement', 'Return statement')}}     | {{Spec2('ES6')}}     |                    |
| {{SpecName('ESDraft', '#sec-return-statement', 'Return statement')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.statements.return")}}

## Veja também

- [Funções](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope)
- [Closures](/pt-BR/docs/Web/JavaScript/Closures)
