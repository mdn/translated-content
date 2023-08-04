---
title: EventSource
slug: Web/API/EventSource
---

{{APIRef("Websockets API")}}

A interface `EventSource` é usada para receber eventos enviados pelo servidor ([server-sent events](/pt-BR/docs/Web/API/Server-sent_events)). Ele se conecta via HTTP em um servidor e recebe eventos com o formato `text/event-stream`. A conexão permanece aberta até ser fechada chamando {{domxref("EventSource.close()")}}.

Assim que a conexão estiver aberta, mensagens recebidas do servidor são entregues para o seu código na forma de eventos {{event("message")}}.

Ao contrário dos [WebSockets](/pt-BR/docs/Web/API/WebSockets_API), server-sent events são unidirecionais; ou seja, mensagens são entregues em uma direção, do servidor para o cliente (por exemplo, um navegador web). Isso torna-os uma excelente escolha quando não há necessidade de enviar mensagens do cliente para o servidor. Por exemplo, `EventSource` é uma abordagem útil para lidar com atualizações de status de mídias sociais, feeds de notícias, or entregar dados para um mecanismo de [armazenamento do lado cliente](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) como o [IndexedDB](/pt-BR/docs/Web/API/IndexedDB_API) ou o [web storage](/pt-BR/docs/Web/API/Web_Storage_API).

## Construtor

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Cria um novo `EventSource` para receber enventos enviados pelo servidor de uma URL específica, opcionalmente no modo de credenciais.

## Propriedades

_Essa interface também herda propriedades do seu pai, {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : Um número representando o estado da conexão. Valores possíveis são `CONNECTING` (`0`), `OPEN` (`1`), ou `CLOSED` (`2`).
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : Uma {{domxref("DOMString")}} representando a URL da origem.
- {{domxref("EventSource.withCredentials")}} {{readonlyinline}}
  - : Um {{domxref("Boolean")}} indicando se a `EventSource` foi instanciada com credenciais cross-origin ([CORS](/pt-BR/docs/Web/HTTP/CORS)) definidas (`true`) ou não (`false`, o padrão).

### Eventos

- {{domxref("EventSource.onerror")}}
  - : É um {{event("Event_handlers", "event handler")}} chamado quando um erro ocorre e o evento {{event("error")}} é despachado para o objeto `EventSource`.
- {{domxref("EventSource.onmessage")}}
  - : É um {{event("Event_handlers", "event handler")}} chamado quando um evento {{event("message")}} é recebido, ou seja, quando uma mensagem está sendo recebida da origem.
- {{domxref("EventSource.onopen")}}
  - : É um {{event("Event_handlers", "event handler")}} chamado quando um evento {{event("open")}} é recebido, ou seja, logo após a abertura da conexão.

## Métodos

_Essa interface herda métodos de seu pai, {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Fecha a conexão, se houver, e define o atributo `readyState` como `CLOSED`. Se a conexão já estiver fechada, esse método não faz nada.

## Exemplos

Nesse exemplo básico, um `EventSource` é criado para receber eventos do servidor; a página com o nome `"sse.php"` é responsável por gerar os eventos.

```js
var evtSource = new EventSource("sse.php");
var eventList = document.querySelector("ul");

evtSource.onmessage = function (e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

Cada evento recebido faz com que o handler do evento `onmessage` no objeto `EventSource` seja executado. Ele, em contrapartida, cria um novo elemento {{HTMLElement("li")}} e escreve os dados da mensagem nele, e em seguida concatena o novo elemento na lista já presente no documento.

> **Nota:** Você pode encontrar um exemplo completo no GitHub — veja [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Server-sent events](/pt-BR/docs/Web/API/Server-sent_events)
- [Usando server-sent events](/pt-BR/docs/Web/API/Server-sent_events/Using_server-sent_events)
