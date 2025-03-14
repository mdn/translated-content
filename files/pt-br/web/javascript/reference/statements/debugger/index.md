---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

A **declaração debug** invoca qualquer funcionalidade de depuração disponivel, como definir um breakpoint. Se nenhuma funcionalidade de depuração estiver disponivel, essa declaração não tem nenhum efeito.

## Sintaxe

```
debugger;
```

## Exemplos

O exemplo a seguir mostra o código onde uma declaração debugger foi inserida para invocar um depurador (se um existir) quando a função for chamada.

```js
function codigoPotencialmenteBugado() {
  debugger;
  // faça atividades de depuração como examinar, pular um passo etc.
}
```

Quando o depurador é invocado, a execução é parada na declaração debugger. É como um breakpoint no código-fonte.

[![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)](screen_shot_2014-02-07_at_9.14.35_am.png)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Depurando JavaScript](/pt-BR/docs/Debugging_JavaScript)
- [O Depurador nas Ferramentas de Desenvolvedor do Firefox](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
