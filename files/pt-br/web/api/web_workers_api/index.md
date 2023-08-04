---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** são mecanismos que permitem que uma operação de um dado script seja executado em uma thread diferente da thread principal da aplicação Web. Permitindo que cálculos laboriosos sejam processados sem que ocorra bloqueio da thread principal (geralmente associado à interface).

## Web Workers: conceitos e uso

Um "worker" é um objeto criado através da utilização do construtor (ex {{domxref("Worker.Worker", "Worker()")}}) que executa um dado arquivo Javascript — o código contido em tal arquivo é executado no thread do worker; e tais workers são executados em um contexto diferente do principal {{domxref("window")}}. O contexto dos workers é representado pelo objeto {{domxref("DedicatedWorkerGlobalScope")}} no caso de workers dedicados (workers padrões são utilizados por um único script; workers compartilhados utilizam {{domxref("SharedWorkerGlobalScope")}}).

O thread do worker roda qualquer trecho de código, mas é importante ressaltar que esse trecho não poderá manipular o DOM, ou usar alguns métodos e propriedades do objeto {{domxref("window")}}. Mas, é permitido usar um grande número de itens fornecidos pelo objeto window, incluindo [WebSockets](/pt-BR/docs/WebSockets), mecanismos de data storage tais como [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API), Firefox OS-only [Data Store API](/pt-BR/docs/Web/API/Data_Store_API). Para mais detalhes veja [Funções e classes disponíveis para os workers](/pt-BR/docs/Web/API/Worker/Functions_and_classes_available_to_workers).

O thread principal e os threads dos workers comunicam-se entre si enviando dados através do sistema de mensagens — ambos os lados enviam mensagens usando o método `postMessage()`, e respondem as mensagens via o manipulador de eventos `onmessage` (a mensagem está contida no atributo `data` do evento {{event("Message")}}). É importante ressaltar que os dados são copiados, e não compartilhados.

Workers podem, por sua vez, gerar novos workers, desde que esses workers sejam hospedados na mesma origem que a página principal. Além disso, workers podem usar [`XMLHttpRequest`](/pt-BR/DOM/XMLHttpRequest) para network I/O, com a exceção de que os atributos `responseXML` e `channel` do `XMLHttpRequest` sempre retornam nulo.

Além dos workers dedicados, existem outros tipos de workers:

- Shared Workers são workers que podem ser utilizados por diversos scripts que estão sendo executados em diferentes janelas, IFrames, etc., desde que eles estejam no mesmo domínio. Eles são ligeiramente mais complexos que workers dedicados — os scripts se comunicam através de uma porta ativa. Veja {{domxref("SharedWorker")}} para mais detalhes.
- [ServiceWorkers](/pt-BR/docs/Web/API/ServiceWorker_API) essencialmente atuam como servidores proxy enquadram entre aplicativos da web e o navegador e a rede (quando disponível). Eles destinam-se (entre outras coisas) a habilitar a criação de experiências off-line efetivas, interceptando solicitações de rede e tomando as ações adequadas com base na disponibilidade da rede e atualização de ativos no servidor. Eles também permitirão o acesso a notificações push e APIs de sincronização em background.
- Chrome Workers são um Firefox-only tipo de worker que você pode usar caso esteja desenvolvendo um add-ons e quer usar workers em extensão e ter acesso a [js-ctypes](/pt-BR/js-ctypes) na sua worker. Veja {{domxref("ChromeWorker")}} para mais detalhes.
- [Audio Workers](/pt-BR/docs/Web/API/Web_Audio_API#Audio_Workers) fornecem a capacidade de processamento de áudio direcionado direto para ser feito dentro do contexto de um web worker.

## Interfaces Web Worker

- {{domxref("AbstractWorker")}}
  - : Propriedades Abstratas e métodos comuns a todos tipos de workers (i.e. {{domxref("Worker")}} ou {{domxref("SharedWorker")}}).
- {{domxref("Worker")}}
  - : Representa a worker thread em execução, permitindo que você passe mensagens para o código em execução.
- {{domxref("SharedWorker")}}
  - : Representa um tipo específico de worker que pode ser _acessado_ a partir de vários contextos de navegação, sendo várias janelas, iframes ou mesmo workers.
- {{domxref("WorkerGlobalScope")}}
  - : Representa o escopo genérico de qualquer worker (fazendo o mesmo trabalho como {{domxref("Window")}} para conteúdo normal da web). Diferentes tipos de workers têm objetos de escopo que herdam desta interface e adicionam recursos mais específicos.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : Representa o escopo de um dedicated worker, herdado de {{domxref("WorkerGlobalScope")}} e adicionam recursos mais específicos.
- {{domxref("SharedWorkerGlobalScope")}}
  - : Representa o escopo de um shared worker, herdado de {{domxref("WorkerGlobalScope")}} e adicionam recursos mais específicos.
- {{domxref("WorkerNavigator")}}
  - : Representa a identidade e estado do user agent (o cliente):

## Exemplos

Criamos algumas demonstrações simples para mostrar o uso básico:

- [Exemplo básico de dedicated worker](https://github.com/mdn/simple-web-worker) ([executar dedicated worker](http://mdn.github.io/simple-web-worker/)).
- [Exemplo básico de shared worker](https://github.com/mdn/simple-shared-worker) ([executar shared worker](http://mdn.github.io/simple-shared-worker/)).

Você pode descobrir mais informações sobre como essas demonstrações funcionam em [Usando web workers](/pt-BR/docs/Web/API/Web_Workers_API/Using_web_workers).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using Web Workers](/pt-BR/docs/Web/API/Web_Workers_API/basic_usage)
- [Worker Interface](/pt-BR/docs/Web/API/Worker)
- [SharedWorker interface](/pt-BR/docs/Web/API/SharedWorker)
- [ServiceWorker API](/pt-BR/docs/Web/API/ServiceWorker_API)
- [Functions and classes available to workers](/pt-BR/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Advanced concepts and examples](/pt-BR/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples)
- [ChromeWorker](/pt-BR/docs/Web/API/ChromeWorker): para usar workers em código privilegiado/chrome.
