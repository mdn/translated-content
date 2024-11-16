---
title: Beacon API
slug: Web/API/Beacon_API
---

{{DefaultAPISidebar("Beacon")}}

A **`Beacon`** API é usada para enviar um request assíncrono e não bloqueante para um servidor web. O request não espera por uma resposta. Ao contrário de requests feitos utilizando {{domxref("XMLHttpRequest")}} ou {{domxref("Fetch")}}, o navegador garante que irá iniciar e aguardar a conclusão do request antes da página ser desmontada.

O principal caso de uso da Beacon API é enviar dados de análise, como eventos do lado do cliente ou dados da sessão para o servidor. Historicamente, os sites costumavam usar {{domxref("XMLHttpRequest")}} para isso, mas os navegadores não garantem o envio de solicitações assíncronas em algumas circunstâncias (por exemplo, se a página vai ser desmontada). Para evitar esses problemas, os sites usam diversas técnicas, como enviar o request síncrono, mas isso tem um efeito colateral ruim na responsividade. Como beacon requests são assíncronos quanto garantidas de serem enviados, elas combinam desempenho e confiabilidade.

Para mais detalhes sobre a motivação e uso dessa API, veja a documentação sobre o método {{domxref("navigator.sendBeacon()")}}

> [!NOTE]
> essa API _não está disponível_ nos [Web Workers](/pt-BR/docs/Web/API/Web_Workers_API) (não é exposta através do {{domxref("WorkerNavigator")}}).

## Interface

Essa API define apenas um método: {{domxref("navigator.sendBeacon()")}}.

O método recebe dois argumentos, a URL e os dados que serão enviados no request. Os dados são opcionais e seu tipo pode ser um {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("Blob")}}, uma string ou objeto, ou um objeto {{domxref("FormData")}}. Se o navegador colocar na fila o request para ser executado com sucesso o método retornará `true`; se não retornará `false`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Beacon standard](https://w3c.github.io/beacon/)
- [Beacon CanIUse data](https://caniuse.com/#search=beacon)
- [Intercepting beacons through service workers](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in Practice](https://calendar.perfplanet.com/2020/beaconing-in-practice/)
