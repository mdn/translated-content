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

| Especificação                                                        | Status             | Comentário                                   |
| -------------------------------------------------------------------- | ------------------ | -------------------------------------------- |
| {{SpecName('ES6', '#sec-debugger-statement', 'Debugger statement')}} | {{Spec2('ES6')}}   |                                              |
| {{SpecName('ES5.1', '#sec-12.15', 'Debugger statement')}}            | {{Spec2('ES5.1')}} | Definição Inicial                            |
| {{SpecName('ES3', '#sec-7.5.3', 'Debugger statement')}}              | {{Spec2('ES3')}}   |                                              |
| {{SpecName('ES1', '#sec-7.4.3', 'Debugger statement')}}              | {{Spec2('ES1')}}   | Apenas mencioado como uma palavra reservada. |

## Compatibilidade com navegadores

{{Compat("javascript.statements.debugger")}}

## Veja também

- [Depurando JavaScript](/pt-BR/docs/Debugging_JavaScript)
- [O Depurador nas Ferramentas de Desenvolvedor do Firefox](/pt-BR/docs/Tools/Debugger)
