---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
---

{{jsSidebar("Statements")}}

Uma **declaração vazia** é usada para fornecer nenhuma declaração, embora a sintaxe do JavaScript esperasse uma.

{{EmbedInteractiveExample("pages/js/statement-empty.html")}}

## Sintaxe

```
;
```

## Descrição

A instrução vazia é um ponto-e-vírgula (;) indicando que nenhuma instrução será executada, mesmo se a sintaxe do JavaScript exigir uma.

O comportamento oposto, em que você deseja várias instruções, mas o JavaScript permite apenas uma única, é possível usando uma [instrução de bloco](/pt-BR/docs/Web/JavaScript/Reference/Statements/block) ; combina várias declarações em uma única.

## Exemplos

A instrução vazia às vezes é usada com instruções de loop. Veja o exemplo a seguir com um corpo de loop vazio:

```js
var arr = [1, 2, 3];

// Assign all array values to 0
for (i = 0; i < arr.length; arr[i++] = 0 /* empty statement */);

console.log(arr);
// [0, 0, 0]
```

**Nota:** É uma boa ideia comentar o uso intencional da declaração vazia, pois não é realmente óbvio distinguir entre um ponto e vírgula normal. No exemplo a seguir, o uso provavelmente não é intencional:

```js-nolint
if (condition) // Caution, this "if" does nothing!
  killTheUniverse(); // So this gets always executed!!!
```

Outro Exemplo: Uma declaração [`if...else`](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) declaração sem chaves ({ }). Se três for verdadeiro, nada acontecerá, quatro não importa e também a função launchRocket ( ) no caso contrário não será executada.

```js
if (one) doOne();
else if (two) doTwo();
else if (three) // nothing here
else if (four) doFour();
else launchRocket();
```

## Especificações

| Especificações                                                     |
| ------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-empty-statement', 'Empty statement')}} |

## Browsers compatíveis

{{Compat("javascript.statements.empty")}}

## Veja também

- {{jsxref("Statements/block", "Block statement")}}
