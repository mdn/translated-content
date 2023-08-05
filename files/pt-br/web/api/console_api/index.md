---
title: Console API
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}

O Console API traz funcionalidades que permitem desenvolvedores realizar tarefas de debug, como registrar mensagens or os valores das variáveis em sertoes pontos do código, or cronometrar quanto tempo uma operação leva para concluir.

## Conceitos e uso

O Console API começou como uma API proprietária, com diferentes navegadores a implementando. [A especificação do Console API](https://console.spec.whatwg.org/) foi criado para definir um comportamento consistente, e todos o navegadores atuais ventualmente foram implementando a funconalidade — Apsar de algumas implementações ainda terem funções adicionais proprietárias. Veja mais sobre isso em:

- [Google Chrome DevTools implementação](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari DevTools implementação](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

Uso é bastante simples — o objeto {{domxref("console")}} — disponível via {{domxref("window.console")}}, ou {{domxref("WorkerGlobalScope.console")}} em workers; acessível apenas usando `console` — contém vários métodos que você pode chamar para executar tarefas de depuração, geralmente focado no registro de vários valores no navegador [Web Console](/pt-BR/docs/Tools/Web_Console).

De longe o método mais comum usado é o {{domxref("console.log")}}, que é usado para mostrar o valor atual contido em uma variável específica.

## Interfaces

- {{domxref("console")}}
  - : Provides rudimentary debugging functionality, including logging, stack traces, timers, and counters.

## Examples

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

See the [Console reference page](/pt-BR/docs/Web/API/Console#Usage) for more examples.

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Tools](/pt-BR/docs/Tools)
- [Web Console](/pt-BR/docs/Tools/Web_Console) — how the Web Console in Firefox handles console API calls
- [Remote debugging](/pt-BR/docs/Tools/Remote_Debugging) — how to see console output when the debugging target is a mobile device
