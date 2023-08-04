---
title: Call stack (Pilha de chamadas)
slug: Glossary/Call_stack
---

A pilha de chamadas **(call stack)** é um mecanismo do interpretador de uma linguagem que organiza o funcionamento do script quando são chamadas muitas funções, qual função está sendo executada no momento, e quais serão chamadas dentro de alguma função, etc.

- Quando o script chama a função, ela é adicionada à pilha de chamadas, e então é iniciado o carregamento da função.
- Qualquer função chamada por essa função será adicionada à pilha de chamadas uma acima da outra.
- Quando a função termina a execução, o interpretador retira a função da pilha e continua a execução do programa de onde parou.
- Caso a pilha ocupar mais espaço do que foi separado a ela, será exibido um erro "stack overflow" (estouro de pilha).

## Exemplo

```js
function saudacao() {
  // [1] Algum código aqui
  digaOi();
  // [2] Algum código aqui
}
function digaOi() {
  return "Olá!";
}

// Chamando a função `saudacao`
saudacao();

// [3] Algum código aqui
```

O código acima será executado desta forma pelo interpretador:

1. Todas as funções serão ignoradas, até chegar na chamada da função `saudacao()`.
2. Adiciona a função `saudacao()` para a pilha de chamadas.

   > **Nota:** Pilha de chamadas:
   > \- saudacao

3. Executa todas as linhas de código da função `saudacao()`.
4. Chama a função `digaOi()`.
5. Adiciona a função `digaOi()` na pilha de chamadas.

   > **Nota:** Pilha de chamadas:
   > \- `saudacao` > \- digaOi

6. Executa todas as linhas de código da função `digaOi()` até o final.
7. Retorna a execução na linha onde foi chamada a função `digaOi()` e continua a execução do resto da função `saudacao()`.
8. Deleta a função `digaOi()` da pilha de chamadas.

   > **Nota:** Pilha de chamadas:
   > \- `saudacao`

9. Quando todas as linhas da função `saudacao()` forem executadas, retorna para a linha onde a função foi invocada, e continua a execução do resto do código.
10. Deleta a função `saudacao()` da Pilha de chamadas.

    > **Nota:** Pilha de chamadas:
    > EMPTY

Começamos com uma pilha de chamadas vazia, e sempre que chamamos uma função, ela é automaticamente adicionada à pilha de chamadas, e depois de todas as linhas serem executadas, é automaticamente removida da pilha de chamadas. No final, a pilha está vazia novamente.

## Veja mais

### General knowledge

- [Call stack](https://pt.wikipedia.org/wiki/Pilha_de_chamada) on Wikipedia
- [MDN Web Docs Glossary](/pt-BR/docs/Glossary)

  - {{Glossary("Call stack")}}
  - {{Glossary("Function")}}
