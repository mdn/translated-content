---
title: Console.timeStamp()
slug: Web/API/console/timeStamp
---

{{ APIRef("Console API") }}{{Non-standard_header}}

## Sumário

Adiciona um marcador simples para as ferramentas [Timeline](https://developer.chrome.com/devtools/docs/timeline) ou [Waterfall](/pt-BR/docs/Tools/Performance/Waterfall) do navegador. Ele deixa você relacionar um ponto no seu código com os outros eventos gravados na linha do tempo, como um evento de layout ou de pintura.

Opcionalmente, você pode fornecer um argumento como rótulo do carimbo de hora, e esse rótulo será então mostrado juntamente com a marcação.

> **Nota:** essa funcionalidade está disponível em [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API).

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

{{Compat("api.console.timeStamp")}}

## Veja também

- {{ domxref("Console.time()") }}
- {{ domxref("Console.timeEnd()") }}
- [Adding timestamps to the Waterfall](/pt-BR/docs/Tools/Performance/Waterfall#Timestamp_markers)
