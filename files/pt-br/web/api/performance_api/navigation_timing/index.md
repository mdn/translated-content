---
title: Navigation Timing
slug: Web/API/Performance_API/Navigation_timing
---

A **API Navigation Timing** fornece dados que podem ser usados para medir a performance de um website. Diferente de outros mecanismos baseados em Javascript que já foram usados para o mesmo propósito, esta API pode fornecer dados sobre a latência do começo ao fim que podem ser mais precisas e relevantes.

O exemplo a seguir mostra como você pode medir o tempo de carregamento percebido:

```
function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("Tempo de carregamento percebido pelo usuário: " + page_load_time);
}
```

Existem muitos eventos medidos em milisegundos que podem ser acessados através da interface {{domxref("PerformanceTiming")}} interface. A lista de eventos na ordem em que ocorrem são:

- navigationStart
- unloadEventStart
- unloadEventEnd
- redirectStart
- redirectEnd
- fetchStart
- domainLookupStart
- domainLookupEnd
- connectStart
- connectEnd
- secureConnectionStart
- requestStart
- responseStart
- responseEnd
- domLoading
- domInteractive
- domContentLoadedEventStart
- domContentLoadedEventEnd
- domComplete
- loadEventStart
- loadEventEnd

O objeto `window.performance.navigation` guarda dois atributos que podem ser usados para saber se o carregamento da página é iniciada por um redirecionamento, pelo botão voltar/avançar ou pela URL mesmo.

window\.performance.navigation.type:

| Constante           | Valor | Descrição                                                                                                                                                                                                                                          |
| ------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TYPE_NAVIGATENEXT` | 0     | Navegação iniciada pelo clique em um link, ou pela entrada da URL na barra de endereços, ou envio de formulário, ou inicializada através da operação de um script diferente que os usados por TYPE_RELOAD e TYPE_BACK_FORWARD como listado abaixo. |
| `TYPE_RELOAD`       | 1     | Navegação através da operação de recarregamento ou pelo método location.reload().                                                                                                                                                                  |
| `TYPE_BACK_FORWARD` | 2     | Navegação através de uma operação de histórico.                                                                                                                                                                                                    |
| `TYPE_UNDEFINED`    | 255   | Qualquer tipo de navegação não definida pelos valores acima.                                                                                                                                                                                       |

`window.performance.navigation.redirectCount` indicará, se houver, quantos redirecionamentos aconteceram até que a página final seja alcançada.

A API Navigation Timing pode ser usada para colher dados da performance do lado do cliente enviado para um servidor via XHR tanto quanto os dados medidos que eram muito dificultosos de medir de outras maneiras como o tempo de "descarga" de uma página anterior, tempo de look up do dominio, tempo total do window\.onload total time, etc.

## Exemplos

Calculando o tempo total necessário para carregar uma página:

```
var perfData = window.performance.timing;
var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
```

Calculando os tempos de resposta da requisição:

```
var connectTime = perfData.responseEnd - perfData.requestStart;
```

### Links

- [Test Page](http://webtimingdemo.appspot.com/)
- <http://w3c-test.org/webperf/specs/NavigationTiming/>
- <https://www.w3.org/TR/navigation-timing/>

## Compatibillidade de Navegadores

{{Compat("api.PerformanceNavigationTiming")}}
