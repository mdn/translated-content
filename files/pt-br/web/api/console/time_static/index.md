---
title: Console.time()
slug: Web/API/console/time_static
---

{{ APIRef("Console API") }}{{Non-standard_header}}

## Sumário

Inicia um cronômetro que você pode usar para monitorar quanto tempo uma operação leva. Você dá para cada cronômetro um nome único, e deve ter no máximo 10.000 deles sendo executados na página. Quando você chama {{ domxref("console.timeEnd()") }} com o mesmo nome, o navegador mostrará o tempo, em milisegundos, que se passou desde que o cronômetro iniciou.

Veja [Timers](/pt-BR/docs/DOM/console#timers) na documentação {{ domxref("console") }} para detalhes e exemplos.

{{AvailableInWorkers}}

## Sintaxe

```
console.time(label);
```

## Parâmetros

- `label`
  - : O nome para dar ao novo cronômetro. Ele identificará o cronômetro; use o mesmo quando chamar {{ domxref("console.timeEnd()") }} para parar o cronômetro e obter o tempo na saída do console.

## Especificação

[API do objeto Console](/pt-BR/docs/Web/API/console)

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ domxref("Console.timeEnd()") }}
- [Opera Dragonfly documentation: Console](https://www.opera.com/dragonfly/documentation/console/)
