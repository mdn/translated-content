---
title: Window.performance
slug: Web/API/performance_property
---

{{APIREf}}A API Web Performance permite páginas da web acessarem algumas funções para medir a performance de páginas e aplicações da web, incluindo a API Navigation Timing e dados de tempo de alta resolução.

## Métodos

- {{domxref("Performance.mark()", "performance.mark()")}}
  - : Mapeia um {{domxref("DOMHighResTimeStamp")}} para o nome especificado representando a quantidade de milissegundos passados desde um momento de referência.
- {{domxref("Performance.now()", "performance.now()")}}
  - : Retorna um {{domxref("DOMHighResTimeStamp")}} representando a quantidade de milissegundos passados desde um momento de referência.

## Propriedades

- {{domxref("Performance.timing", "performance.timing")}}
  - : É um objeto {{domxref("PerformanceTiming")}} contendo informações de performance relacionadas a latência.
- {{domxref("Performance.navigation", "performance.navigation")}}
  - : É um objeto {{domxref("PerformanceNavigation")}} representando o tipo de navegação que ocorre no contexto de navegação dado, como a quantidade de redirecionamentos necessários para buscar o recurso.
- [performance.memory](https://docs.webplatform.org/wiki/apis/timing/properties/memory)
  - : Uma extensao não-padrão adicionada ao Chrome.
