---
title: WebSocket
slug: Web/API/WebSocket
---

{{APIRef("Web Sockets API")}}{{SeeCompatTable}}

O objeto `WebSocket` provê uma API para criação e gerenciamento de uma conexão [WebSocket](/pt-BR/docs/Web/API/WebSockets_API) com um servidor, bem como o envio e recebimento de dados através dessa conexão.

O construtor do WebSocket aceita um parâmetro obrigatório e um opcional:

```
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);

WebSocket WebSocket(
  in DOMString url,
  in optional DOMString[] protocols
);
```

- `url`
  - : A URL da devida conexão; esta deve ser a URL da qual o servidor WebSocket irá responder.
- `protocols` {{optional_inline}}
  - : Um único protocolo em formato texto ou uma lista de textos de protocolo. Estes textos são usados para indicar sub-protocolos, assim então um único servidor pode implementar múltiplos sub-protocolos WebSocket (por exemplo, você pode querer um servidor capaz de manipular diferentes tipos de interações dependendo do protocolo especificado). se você não especificar um protocolo em texto, será assumido um texto vazio.

O construtor pode lançar exceções:

- `SECURITY_ERR`
  - : A porta a qual a conexão está sendo executada está bloqueada.

## Visão Geral do método

| `void close(É opcional: unsigned long code, É opcional: DOMString reason);` |
| --------------------------------------------------------------------------- |
| `void send(in DOMString data);`                                             |

## Atributos

| Attributo        | Tipo                         | Descrição                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `binaryType`     | {{DOMXref("DOMString")}}     | Uma string indica o tipo de dado binário que está sendo transmitido pela conexão. Este deve ser tanto "blob" se o objeto DOM {{domxref("Blob")}} estiver sendo usado ou "arraybuffer" se os objetos {{jsxref("ArrayBuffer")}} estiver sendo usada                                                                                               |
| `bufferedAmount` | `unsigned long`              | O número de bites de dados que tem sid consultado usando chamadas para [send](#send) mas não ainda para a rede.Estes valor reseta para zero uma vez que todos os dados tem sido mandados.Este valor não reseta para zero quando a conexão está fechada, se você continuar chamando [send](#send), isto continuará escalando. **Leitura online** |
| `extensions`     | {{DOMXref("DOMString")}}     | As extensões selecionadas pelo servidor. Este é atualmente apenas a string vazia ou uma lista de extensões negociadas pela conexão.                                                                                                                                                                                                             |
| `onclose`        | {{domxref("EventListener")}} | Um event listener para ser chamado quando o `readyState` da conexão do WebSocket mudar para `CLOSED`. O listener recebe um [`CloseEvent`](/pt-BR/docs/Web/API/CloseEvent) "close".                                                                                                                                                              |
| `onerror`        | {{domxref("EventListener")}} | Um event listener para ser chamado quando ocorrer um erro. Este é um evento simples chamado "erro".                                                                                                                                                                                                                                             |
| `onmessage`      | {{domxref("EventListener")}} | Um event listener para ser chamado quando uma mensagem é recebida do servidor. O listener recebe um [`MessageEvent`](/pt-BR/docs/Web/API/MessageEvent) "message".                                                                                                                                                                               |
| `onopen`         | {{domxref("EventListener")}} | Um event listener para ser chamado quando o `readyState` da conexão do WebSocket mudar para `OPEN`, isso indica que a conexão está pronta para enviar e receber dados. O evento é simples, com o nome "open".                                                                                                                                   |
| `protocol`       | {{DOMXref("DOMString")}}     | Uma sequência de caracteres que indica o nome do sub-protocolo selecionado pelo servidor, este será um dos parâmetros especificados no `protocolo` ao criar o objeto WebSocket.                                                                                                                                                                 |
| `readyState`     | `unsigned short`             | O estado atual da conexão, este é um dos [Ready state constants](#ready_state_constants). **Apenas leitura.**                                                                                                                                                                                                                                   |
| `url`            | {{DOMXref("DOMString")}}     | O URL resolvido pelo construtor. Este é sempre um URL absoluto. **Apenas leitura.**                                                                                                                                                                                                                                                             |

## Constantes

### Estados de constantes prontas

Essas constantes são usadas pelo atributo `readyState` para descrever o estado da conexão do WebSocket.

| Constante    | Valor | Descrição                                         |
| ------------ | ----- | ------------------------------------------------- |
| `CONNECTING` | `0`   | A conexão ainda não está aberta.                  |
| `OPEN`       | `1`   | A conexão está aberta e pronta para se comunicar. |
| `CLOSING`    | `2`   | A conexão está em processo de fechamento.         |
| `CLOSED`     | `3`   | A conexão está fechada ou não foi possível abrir. |

## Métodos

### close()

Fecha a conexão do WebSocket ou a tentativa de conexão, se houver. Se a conexão já for `CLOSED`, este método não faz nada.

```
void close(
  É opcional: unsigned short code,
  É opcional: DOMString reason
);
```

#### Parametros

- `code` {{optional_inline}}
  - : Um valor numérico que indica o código de status explicando por que a conexão está sendo fechada. Se esse parâmetro não for especificado, é assumido um valor padrão de 1000 (indicando um fechamento "completo da transação"). Veja a [lista de status de códigos](/pt-BR/docs/Web/API/CloseEvent#Status_codes) na [`CloseEvent`](/pt-BR/docs/Web/API/CloseEvent) página de valores permitidos.
- `reason` {{optional_inline}}
  - : Uma string legível para humanos que explica por que a conexão está se fechando. Esta seqüência de caracteres não deve ter mais de 123 bytes de texto UTF-8 (**não** caracteres).

#### Exceções lançadas

- `INVALID_ACCESS_ERR`
  - : Foi especificado um `código`inválido.
- `SYNTAX_ERR`
  - : A string `reason é muito longa ou contém substitutos não comparados.`

> **Nota:** `Note: No Gecko, este método não suporta nenhum parâmetro antes do Gecko 8.0.`

### `send()`

`Transmite dados para o servidor através da conexão WebSocket.`

```

void send(
  in DOMString data
);

void send(
  in ArrayBuffer data
);

void send(
  in Blob data
);
```

#### `Parametros`

- `data`
  - : `Uma sequência de texto para enviar para o servidor.`

#### `Exceções lançadas`

- `INVALID_STATE_ERR`
  - : `A conexão não está atualmente OPEN .`
- `SYNTAX_ERR`
  - : `Os dados são uma string que tem substituto não comparado.`

> **Nota:** `Nota: A implementação do método send () de Gecko difere um pouco da especificação em Gecko 6.0. Gecko retorna um boolean indicando se a conexão ainda está aberta (por extensão, ou os dados estão em fila ou transmitidos com sucesso). Isso é corrigido em Gecko 8.0.`
>
> `A partir de Gecko 11.0, o suporte para {{jsxref ("ArrayBuffer")}} está implementado, mas não {{domxref("Blob")}} tipos de dados.`

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## `Veja também`

- [`Escrevendo aplicativos clientes do WebSocket`](/pt-BR/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
