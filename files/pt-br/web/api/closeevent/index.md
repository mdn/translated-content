---
title: CloseEvent
slug: Web/API/CloseEvent
---

{{APIRef("Websockets API")}}

Um `CloseEvent` é enviado aos clientes que usam {{Glossary("WebSockets")}} quando a conexão está fechada (closed). Ele é enviado ao ouvinte(listener) pelo atributo `onclose` do objeto `WebSocket`.

## Construtor

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : Cria um `CloseEvent` novo.

## Propriedades

_Esta interface também herda as propriedades de seu objeto pai, {{domxref("Event")}}._

- {{domxref("CloseEvent.code")}} {{readOnlyInline}}

  - : Retorna um valor `unsigned short` contendo o código de encerramento enviado pelo servidor. Os seguintes valores são status de códigos permitidos. As definições seguintes são originadas da página da IANA \[[Ref](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number)]. Observe que os códigos 1xxx são exclusivamente Websockets internos e não para os mesmos propósitos dos dados enviados (como quando o protocolo da camada de aplicação é invalido). Os únicos códigos que permitem especificação no Firefox são o 1000 e do 3000 ao 4999 \[[Source](https://searchfox.org/mozilla-central/rev/bf81d741ff5dd11bb364ef21306da599032fd479/dom/websocket/WebSocket.cpp#2533), [Bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1467107)].

    | Código de Status | Nome                   | Descrição                                                                                                                                                                                                                             |
    | ---------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `0`–`999`        |                        | **Reservado e não utilizado.**                                                                                                                                                                                                        |
    | `1000`           | `CLOSE_NORMAL`         | Encerramento normal. A conexão foi completada com sucesso sempre que o propósito para o qual ela foi criada tenha sido atingida.                                                                                                      |
    | `1001`           | `CLOSE_GOING_AWAY`     | O "endpoint" desapareceu, por causa de uma falha no servidor ou por que o navegador navegou para fora da página que abriu a conexão.                                                                                                  |
    | `1002`           | `CLOSE_PROTOCOL_ERROR` | O "endpoint" finalizou a conexão devido a um erro de protocolo.                                                                                                                                                                       |
    | `1003`           | `CLOSE_UNSUPPORTED`    | A conexão está sendo finalizada por causa de o dado do "endpoint" recebido ser de um tipo que não pode ser aceito (por exemplo, um "text-only endpoint" recebido como dado binário).                                                  |
    | `1004`           |                        | **Reservado.** Um significado pode ser definido futuramente.                                                                                                                                                                          |
    | `1005`           | `CLOSE_NO_STATUS`      | **Reservado.** Indica que um código "no status" foi fornecido mesmo que qualquer outro código seja esperado.                                                                                                                          |
    | `1006`           | `CLOSE_ABNORMAL`       | **Reservado.** Usado para indicar que uma conexão foi fechada anormalmente (isto é, sem o "close frame" ter sido enviado) quando um "status code" é esperado.                                                                         |
    | `1007`           | Unsupported Data       | O "endpoint" está finalizando a conexão por causa da mensagem ter sido recebida com dados inconsistentes (por exemplo, dados que não estejam no padrão UTF-8, dentro de uma mensagem de texto).                                       |
    | `1008`           | Policy Violation       | O "endpoint" está finalizando a conexão por causa dele ter recebido uma mensagem que viola sua política. Este é um código de status genérico, usado quando o código 1003 e o código 1009 não sejam adequados.                         |
    | `1009`           | `CLOSE_TOO_LARGE`      | O "endpoint" está finalizando a conexão por causa de que o "data frame" recebido é muito grande.                                                                                                                                      |
    | `1010`           | Missing Extension      | O cliente está fechando a conexão por causa de que navegador espera o servidor negociar uma ou mais extensões esperadas, o servidor não responde corretamente.                                                                        |
    | `1011`           | Internal Error         | O servidor está finalizando uma conexão por causa de que ele encontrou uma condição inesperada que o impediu de cumprir a solicitação.                                                                                                |
    | `1012`           | Service Restart        | O servidor está finalizando uma conexão por que ele está em processo de "restar". \[[Ref](https://www.ietf.org/mail-archive/web/hybi/current/msg09670.html)]                                                                          |
    | `1013`           | Try Again Later        | O servidor está finalizando a conexão devido a uma condição temporária, por exemplo, ele estar sobrecarregado e estar rejeitando alguns dos seus clientes. \[[Ref](https://www.ietf.org/mail-archive/web/hybi/current/msg09670.html)] |
    | `1014`           |                        | **Reservado para o futuro uso de um padrão WebSocket.**                                                                                                                                                                               |
    | `1015`           | TLS Handshake          | **Reservado.** Indica que a conexão foi fechada devido a uma falha para executar um " TLS handshake" (por exemplo, o certificado do servidor não pode ser verificado).                                                                |
    | `1016`–`1999`    |                        | **Reservado para o futuro uso de um padrão WebSocket.**                                                                                                                                                                               |
    | `2000`–`2999`    |                        | **Reservado para uso de "WebSocket extensions".**                                                                                                                                                                                     |
    | `3000`–`3999`    |                        | Disponível para uso de bibliotecas e frameworks. **Não pode** ser usado para aplicações. Disponível para registro em "IANA via first-come, first-serve".                                                                              |
    | `4000`–`4999`    |                        | Disponível para uso em aplicações.                                                                                                                                                                                                    |

- {{domxref("CloseEvent.reason")}} {{readOnlyInline}}
  - : Retorna um {{domxref("DOMString")}} indicando a razão do porquê o servidor fechou uma conexão. Isto é especifico para um servidor e sub-protocolo particular.
- {{domxref("CloseEvent.wasClean")}} {{readOnlyInline}}
  - : Retorna um {{jsxref("Boolean")}} indicando se a conexão está ou não está claramente fechada.

## Métodos

_Esta interface também herda as propriedades de seu objeto pai,_ _{{domxref("Event")}}._

- {{domxref("CloseEvent.initCloseEvent()")}} {{Non-standard_inline}}
  - : Inicializa o valor de um `CloseEvent` criado. Se o evento já tenha sido enviado, este método não realiza nada. Não use este método mais, use o construtor {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} em vez disso.

## Compatibilidade com navegadores

{{Compat("api.CloseEvent")}}

## Veja também

- [`WebSocket`](/pt-BR/docs/Web/API/WebSocket)
