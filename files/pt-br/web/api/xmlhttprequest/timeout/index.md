---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
---

{{APIRef('XMLHttpRequest')}}

A propriedade **`XMLHttpRequest.timeout`** é um `unsigned long` que representa o número de milisegundos que uma requisição deve esperar até ser automaticamente terminada. O valor padrão para essa propriedade é 0, o que significa que o navegador deverá esperar uma resposta indefinidamente. A propriedade Timeout não deveria ser usada para requisições XMLHttpRequests síncronas em um {{Glossary('document environment')}} ou uma exceção do tipo `InvalidAccessError` será lançada. Quando um timeout ocorre, o evento [timeout](/pt-BR/docs/Web/Events/timeout) é disparado.

> **Nota:** Você não pode usar um timeout para requisições síncronas dentro de uma janela.

[Utilizando um timeout com uma requisição assíncrona](/pt-BR/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_using_a_timeout)

No Internet Explorer, a propriedade timeout pode ser usada apenas depois de o método [open()](/pt-BR/docs/Web/API/XMLHttpRequest/open) ter sido invocado e antes de se chamar o método [send()](/pt-BR/docs/Web/API/XMLHttpRequest/send).

## Exemplo

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // tempo em milisegundos

xhr.onload = function () {
  // Requisição finalizada. O processamento deve ser colocado aqui.
};

xhr.ontimeout = function (e) {
  // Timeout na chamada XMLHttpRequest. Ação de timeout aqui.
};

xhr.send(null);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
