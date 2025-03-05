---
title: Console.timeStamp()
slug: Web/API/console/timeStamp_static
---

{{ APIRef("Console API") }}{{Non-standard_header}}

## Sumário

Adiciona um marcador simples para as ferramentas [Timeline](https://developer.chrome.com/docs/devtools/performance/timeline-reference) ou [Waterfall](https://profiler.firefox.com/docs/) do navegador. Ele deixa você relacionar um ponto no seu código com os outros eventos gravados na linha do tempo, como um evento de layout ou de pintura.

Opcionalmente, você pode fornecer um argumento como rótulo do carimbo de hora, e esse rótulo será então mostrado juntamente com a marcação.

> [!NOTE]
> essa funcionalidade está disponível em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

## Sintaxe

```
console.timeStamp(rotulo);
```

## Parâmetros

- `rotulo`
  - : Rótulo para o carimbo de hora. Opcional.

## Especificação

[API do objeto Console](https://github.com/DeveloperToolsWG/console-object/blob/master/api.md#consoletimestamplabel)

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ domxref("Console.time()") }}
- {{ domxref("Console.timeEnd()") }}
- [Adding timestamps to the Waterfall](https://profiler.firefox.com/docs/#timestamp_markers)
