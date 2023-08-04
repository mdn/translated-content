---
title: AbortSignal
slug: Web/API/AbortSignal
---

{{APIRef("DOM")}}{{SeeCompatTable}}

A interface **`AbortSignal`** representa o sinal de um objeto que permite a você se comunicar com uma Requisição de DOM (como Fetch) e aborta-la se necessário via um objeto {{domxref("AbortController")}}

## Propriedades

_A interface AbortSignal também herda propriedades de sua interface pai, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : Um {{domxref("Boolean")}} que indica quando a(s) Request(s) com a qual o sinal está se comunicando está/estão abortadas(`true`) ou não(`false`).

### Handlers de Eventos

- {{domxref("AbortSignal.onabort")}}
  - : Invocado quando um {{event("abort_(dom_abort_api)", "abort")}} evento dispara, ex: quando as requests do DOM que o sinal estão se comunicando são/estão abortadas.

## Métodos

_A interface AbortSignal também herda métodos de sua interface pai, {{domxref("EventTarget")}}._

## Exemplos

No exemplo de código a seguir, nós vamos focar em fazer download de um vídeo usando a [Fetch API](/pt-BR/docs/Web/API/Fetch_API).

Nós primeiro criaremos um controller usando o construtor do {{domxref("AbortController.AbortController","AbortController()")}}, e então pegar a referência de seu objeto {{domxref("AbortSignal")}} associado usando a propriedade {{domxref("AbortController.signal")}}.

Quando a [requisição Fetch](/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/fetch) é iniciada, nós passamos o `AbortSignal` como uma opção dentro do objeto de opções da request (veja `{signal}`, abaixo). Isso associa o sinal e o controller com a requisição fetch e nos permite aborta-la chamando {{domxref("AbortController.abort()")}}, como visto abaixo no segundo `event listener`.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **Nota:** Quando `abort()` é chamado, a promessa do `fetch()` é rejeitada com um `AbortError`.

Você pode encontrar um exemplo completo no GitHub — veja [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) ([see it running live also](https://mdn.github.io/dom-examples/abort-api/)).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- [Fetch API](/pt-BR/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
