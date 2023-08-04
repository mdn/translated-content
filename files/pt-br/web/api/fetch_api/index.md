---
title: Fetch API
slug: Web/API/Fetch_API
---

{{DefaultAPISidebar("Fetch API")}}{{ SeeCompatTable() }}

A Fetch API fornece uma interface para buscar recursos (por exemplo, em toda a rede). Parecerá familiar para qualquer pessoa que tenha usado XMLHttpRequest, porém a nova API oferece um conjunto de recursos mais poderoso e flexível.

## Conceitos e uso

O Fetch fornece uma definição genérica de objetos de {{domxref("Request")}} e {{domxref("Response")}} (e outras coisas envolvidas com solicitações de rede). Isso permitirá que eles sejam usados onde quer que sejam necessários no futuro, seja para service workers, Cache API e outras coisas similares que manipulam ou modifiquem pedidos e respostas ou qualquer tipo de caso de uso que possa exigir que você gere suas próprias responses programaticamente.

Ele também fornece uma definição para conceitos relacionados como CORS e a semântica de cabeçalho de origem HTTP, suplantando suas definições separadas em outro lugar.

Para fazer uma solicitação e buscar um recurso, use o método {{domxref("GlobalFetch.fetch")}} . Ele é implementado em várias interfaces, especificamente {{domxref("Window")}} e {{domxref("WorkerGlobalScope")}}. Isso torna disponível em praticamente qualquer contexto em que você possa querer obter recursos.

O método fetch () tem um argumento obrigatório, o caminho para o recurso que deseja obter. Ele retorna uma promessa que resolve a {{domxref("Response")}} para esta requisição, seja ele bem-sucedido ou não. Você também pode, opcionalmente, passar um objeto de opções de inicialização como o segundo argumento (consulte {{domxref("Request")}}).

Uma vez que uma {{domxref("Response")}} é recuperada, há uma série de métodos disponíveis para definir o conteúdo do corpo e como ele deve ser tratado (veja {{domxref("Body")}}.)

Você pode criar um pedido e uma resposta diretamente usando os construtores {{domxref("Request.Request","Request()")}} e {{domxref("Response.Response","Response()")}}, mas é improvável que você faça isso diretamente. Em vez disso, é mais provável que sejam criados como resultados de outras ações da API (por exemplo, {{domxref("FetchEvent.respondWith")}} de service workers).

> **Nota:** Encontre mais informações sobre os recursos do Fetch API em [Using Fetch](/pt-BR/docs/Web/API/Fetch_API/Using_Fetch), e conceitos para estudos em [Fetch basic concepts](/pt-BR/docs/Web/API/Fetch_API/Basic_concepts).

## Fetch Interfaces

- {{domxref("GlobalFetch")}}
  - : Contém o método `fetch()` usado para buscar um recurso.
- {{domxref("Headers")}}
  - : Representa cabeçalhos response/request, permitindo que você os consulte e faça diferentes ações dependendo dos resultados.
- {{domxref("Request")}}
  - : Representa um pedido de recursos.
- {{domxref("Response")}}
  - : Representa a resposta de uma requisição.

## Fetch mixin

- {{domxref("Body")}}
  - : Providencia métodos relacionados ao corpo da resposta/requisição, permitindo que você declare qual seu tipo de conteúdo e como ele deve ser tratado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/pt-BR/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/pt-BR/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/pt-BR/docs/Web/API/Fetch_API/Basic_concepts)
