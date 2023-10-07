---
title: while
slug: Web/JavaScript/Reference/Statements/while
---

{{jsSidebar("Statements")}}

A **declaração while** cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

## Syntax

```
while (condição) {
  rotina
}
```

- `condição`
  - : Uma expressão avaliada antes de cada passagem através do laço. Se essa condição for avaliada como verdadeira, a rotina é executada. Quando a condição for avaliada como falsa, a execução continua na declaração depois do laço `while`.
- rotina
  - : Uma declaração que é executada enquanto a condição é avaliada como verdadeira. Para executar multiplas declarações dentro de um laço, use uma declaração em [bloco](/pt-BR/docs/JavaScript/Reference/Statements/block) (`{ ... }`) para agrupar essas declarações.

## Exemplos

O seguinte laço `while` itera enquanto n é menor que três.

```js
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

Cada iteração, o laço incrementa n e soma à x. Portanto, x e n assumem os seguintes valores:

- Depois da primeira passagem: n = 1 e x = 1
- Depois da segunda passagem: n = 2 e x = 3
- Depois da terceira passagem: n = 3 e x = 6

Depois de completar a terceira passagem, a condição n < 3 não é mais verdadeira, então o laço termina.

## Especificações

| Specification                                                      | Status               | Comment           |
| ------------------------------------------------------------------ | -------------------- | ----------------- |
| {{SpecName('ESDraft', '#sec-while-statement', 'while statement')}} | {{Spec2('ESDraft')}} |                   |
| {{SpecName('ES6', '#sec-while-statement', 'while statement')}}     | {{Spec2('ES6')}}     |                   |
| {{SpecName('ES5.1', '#sec-12.6.2', 'while statement')}}            | {{Spec2('ES5.1')}}   |                   |
| {{SpecName('ES3', '#sec-12.6.2', 'while statement')}}              | {{Spec2('ES3')}}     |                   |
| {{SpecName('ES1', '#sec-12.6.1', 'while statement')}}              | {{Spec2('ES1')}}     | Definição inicial |

## Compatibilidade com navegadores

{{Compat("javascript.statements.while")}}

## Veja Também

- [`do...while`](/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while)
- {{jsxref("Statements/for", "for")}}
