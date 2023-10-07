---
title: Worker
slug: Web/API/Worker
---

{{APIRef("Web Workers API")}}

A interface **Worker** da [API do Web Worker](/pt-BR/docs/Web/API/Web_Workers_API) representa uma tarefa em background (segundo plano) que pode ser facilmente criada e emitir mensagens de volta ao seu criador. Criar um worker é possível chamando o construtor `Worker("path/to/worker/script")` e especificando um script para ser executado em sua própria thread.

Um worker pode, por sua vez, gerar outros workers, contanto que estes estejam hospedados na mesma [origem](/pt-BR/docs/Web/Security/Same-origin_policy) da página principal (Nota: workers aninhados [não estão atualmente implementados no Blink](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5R3B4RN4GHU)). Além disso, workers podem utilizar [XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest) para E/S de rede, desde que seja estipulado que os atributos `responseXML` e `channel` em `XMLHttpRequest` retornem sempre `null`.

[Não são todas as interfaces e funções que estão disponíveis](/En/DOM/Worker/Functions_available_to_workers) para o script associado a um `Worker`.

> **Nota:** No Firefox, se você deseja utilizar workers em extensões e gostaria de ter acesso a [js-ctypes](/pt-BR/js-ctypes), você deveria utilizar o objeto {{ domxref("ChromeWorker") }} .

## Construtores

- {{domxref("Worker.Worker", "Worker()")}}
  - : Cria um worker dedicado da web que executa o script especificado na URL. Workers também podem ser construídos usando [Blobs](/pt-BR/docs/Web/API/Blob).

## Propriedades

_Herda as propriedades do pai, {{domxref("EventTarget")}}, e implementa as propriedades que compõem o {{domxref("AbstractWorker")}}._

### Manipuladores de Eventos

- {{domxref("AbstractWorker.onerror")}}
  - : Um {{ domxref("EventListener") }} é chamado sempre quando um {{domxref("ErrorEvent")}} do tipo `error` é passado através do worker. Este é herdado pelo {{domxref("AbstractWorker")}}.
- {{domxref("Worker.onmessage")}}
  - : Um {{ domxref("EventListener") }} é chamado sempre quando um {{domxref("MessageEvent")}} do tipo `message` é passado através do worker — ou seja, quando uma mensagem é enviada para o documento pai do worker via {{domxref("DedicatedWorkerGlobalScope.postMessage")}}. A mensagem é armazenada na propriedade de dados do evento {{domxref("MessageEvent.data", "data")}}.

## Métodos

_Os métodos são herdados de seu pai. {{domxref("EventTarget")}}, e implementa os métodos de {{domxref("AbstractWorker")}}._

- {{domxref("Worker.postMessage()")}}
  - : Envia uma mensagem — qual pode consistir de qualquer objeto do JavaScript — para o escopo interno do worker.
- {{domxref("Worker.terminate()")}}
  - : Imediatamente encerra o worker. Isso não oferece ao worker a oportunidade de concluir suas operações; imediatamente o interrompe. `ServiceWorker` não suportam esse método.

## Eventos

- [`message`](/pt-BR/docs/Web/API/Worker/message_event)
  - : O evento é disparado quando o script pai do worker recebe uma mensagem do mesmo.
    Também é disponibilizado via `onmessage.`
- [`messageerror`](/pt-BR/docs/Web/API/Worker/messageerror_event)
  - : Dispara quando um Worker recebe uma mensagem que não pode ser [deserializada](/pt-BR/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
    Também é disponibilizado via `onmessageerror.`
- [`rejectionhandled`](/pt-BR/docs/Web/API/Window/rejectionhandled_event)
  - : Dispara sempre que um {{jsxref("Promise")}} é rejeitado, indenpendentemente de haver ou não um manipulador para capturar sua rejeição.
    Também é disponibilizado via `onrejectionhandled.`
- [`unhandledrejection`](/pt-BR/docs/Web/API/Window/unhandledrejection_event)
  - : Dispara sempre que um {{jsxref ("Promise")}} rejeita, independentemente de haver ou não um manipulador para capturar a rejeição. Também disponível por meio da propriedade do manipulador de eventos `onunhandledrejection.`

## Exemplos

The following code snippet shows creation of a {{domxref("Worker")}} object using the {{domxref("Worker.Worker", "Worker()")}} constructor and usage of the object:

```js
var myWorker = new Worker("worker.js");
var first = document.querySelector("#number1");
var second = document.querySelector("input#number2");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- [Using web workers](/En/Using_web_workers)
- [Functions available to workers](/En/DOM/Worker/Functions_available_to_workers)
- Other kind of workers: {{ domxref("SharedWorker") }} and [ServiceWorker](/pt-BR/docs/Web/API/ServiceWorker_API).
- Non-standard, Gecko-specific workers: {{ domxref("ChromeWorker") }}, used by extensions.
