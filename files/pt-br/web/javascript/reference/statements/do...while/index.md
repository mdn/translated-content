---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

A declaração **`do...while`** cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

## Sintaxe

```
do
   statement
while (condition);
```

- `declarações`
  - : A declaração é executada pelo menos uma vez e re-executada cada vez que a condição (`condition`) for avaliada como verdadeira (true). Para executar múltiplas declarações dentro do laço, use um {{jsxref("declaração/block", "block")}} declaração (`{ ... }`) ao grupo dessas declarações.
- `condição`
  - : Uma expressão é validade depois de cada passagem pelo laço. Se a condição `(condition)` é avaliada como verdadeira (true) o bloco de código é executado novamente. Quando a condição `(condition)` é avaliada como falsa (false), o controle passa para a instrução seguinte ao laço **do...while**.

## Exemplos

### Usando `do...while`

No exemplo seguinte, o laço **do...while** soma pelo menos uma vez e executa novamente até `i` não ser menor que 5.

### Conteúdo HTML

```html
<div id="exemplo"></div>
```

### Conteúdo JavaScript

```js
var resultado = "";
var i = 0;
do {
  i += 1;
  resultado += i + " ";
} while (i < 5);
document.getElementById("exemplo").innerHTML = resultado;
```

### Resultado

{{ EmbedLiveSample('Exemplos') }}

## Especificações

| Specification                                                        | Status             | Comment                                           |
| -------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 3rd Edition.                                              | Standard           | Initial definition. Implemented in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-12.6.1', 'do-while statement')}}           | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-do-while-statement', 'do-while statement')}} | {{Spec2('ES6')}}   | Trailing ; is now optional.                       |

## Compatibilidade com navegadores

{{Compat("javascript.statements.do_while")}}

## Veja também

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
