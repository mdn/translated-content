---
title: Usando eventos enviados pelo servidor
slug: Web/API/Server-sent_events/Using_server-sent_events
---

{{DefaultAPISidebar("Server Sent Events")}}

O desenvolvimento de um aplicativo da Web que usa [eventos enviados pelo servidor](/pt-BR/docs/Web/API/Server-sent_events) é simples. Você precisará de um pouco de código no servidor para transmitir eventos para o front-end, mas o código do lado do cliente funciona quase de forma idêntica a [websockets](/pt-BR/docs/Web/API/WebSockets_API) em parte do tratamento eventos de entrada. Esta é uma conexão unidirecional, portanto, você não pode enviar eventos de um cliente para um servidor.

## Recebendo eventos do servidor

A API de eventos enviados pelo servidor está contida na interface {{domxref("EventSource")}}; para abrir uma conexão com o servidor para começar a receber eventos dele, crie um novo objeto `EventSource` com a URL de um script que gera os eventos. Por exemplo:

```js
const evtSource = new EventSource("ssedemo.php");
```

Se o script do gerador de eventos estiver hospedado em uma origem diferente, um novo objeto `EventSource` deve ser criado com a URL e um dicionário de opções. Por exemplo, supondo que o script do cliente esteja em `example.com`:

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

Depois de instanciar a origem do evento, você pode começar a ouvir as mensagens do servidor anexando um manipulador para o evento {{domxref("EventSource.message_event", "message")}}:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

Este código escuta as mensagens recebidas (ou seja, avisos do servidor que não possuem um campo `event`) e anexa o texto da mensagem a uma lista no HTML do documento.

Você também pode escutar eventos com `addEventListener()`:

```js
evtSource.addEventListener("ping", (evento) => {
  const novoElemento = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping em ${time}`;
  eventList.appendChild(newElement);
});
```

Este código é semelhante, exceto que será chamado automaticamente sempre que o servidor enviar uma mensagem com o campo `event` definido como "ping"; ele então analisa o JSON no campo `data` e gera essa informação.

> **Aviso:** quando **não usado em HTTP/2**, o SSE sofre de uma limitação ao número máximo de conexões abertas, o que pode ser especialmente doloroso ao abrir várias guias, pois o limite é _por navegador_ e é definido para um número muito baixo (6). O problema foi marcado como "Não será corrigido" no [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=275955) e no [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896). Esse limite é por navegador + domínio, o que significa que você pode abrir 6 conexões SSE em todas as guias para `www.example1.com` e outras 6 conexões SSE para `www.example2.com` (por [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Ao usar HTTP/2, o número máximo de _streams HTTP_ simultâneos é negociado entre o servidor e o cliente (o padrão é 100).

## Enviando eventos do servidor

O script do lado do servidor que envia eventos precisa responder usando o tipo MIME `text/event-stream`. Cada notificação é enviada como um bloco de texto finalizado por um par de novas linhas. Para obter detalhes sobre o formato do fluxo de eventos, consulte [Formato do fluxo de eventos](#event_stream_format).

O código {{Glossary("PHP")}} para o exemplo que estamos usando aqui segue:

```php
date_default_timezone_set("America/New_York");
header("Cache-Control: no-store");
header("Content-Type: text/event-stream");

$counter = rand(1, 10);
while (true) {
  // A cada segundo, envia um evento "ping".

  echo "evento: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Envia uma mensagem simples em intervalos aleatórios.

  $counter--;

  if (!$counter) {
    echo 'data: Esta é uma mensagem no momento ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  ob_end_flush();
  flush();

  // Interrompe o loop se o cliente abortou a conexão (fechou a página)

  if (connection_aborted()) break;

  sleep(1);
}
```

O código acima gera um evento a cada segundo, com o tipo de evento "ping". Os dados de cada evento são um objeto JSON contendo o carimbo de data/hora ISO 8601 correspondente à hora em que o evento foi gerado. Em intervalos aleatórios, uma mensagem simples (sem tipo de evento) é enviada.
O loop continuará funcionando independentemente do status da conexão, portanto, uma verificação é incluída
para quebrar o loop se a conexão foi fechada (por exemplo, o cliente fecha a página).

> **Observação:** você pode encontrar um exemplo completo que usa o código mostrado neste artigo no GitHub — veja [Simple SSE demo using PHP](<https://github.com/mdn/dom-examples/tree/main> /servidor-enviados-eventos).

## Manipulação de erros

Quando ocorrem problemas (como um tempo limite de rede ou problemas relacionados a [controle de acesso](/pt-BR/docs/Web/HTTP/CORS)), um evento de erro é gerado. Você pode agir sobre isso programaticamente implementando o retorno de chamada `onerror` no objeto `EventSource`:

```js
evtSource.onerror = (err) => {
  console.error("EventSource falhou:", err);
};
```

## Fechando streams de eventos

Por padrão, se a conexão entre o cliente e o servidor for fechada, a conexão será reiniciada. A conexão é finalizada com o método `.close()`.

```js
evtSource.close();
```

## Formato do fluxo de eventos

O fluxo de eventos é um fluxo simples de dados de texto que deve ser codificado usando [UTF-8](/pt-BR/docs/Glossary/UTF-8). As mensagens no fluxo de eventos são separadas por um par de caracteres de nova linha. Dois pontos como o primeiro caractere de uma linha é essencialmente um comentário e é ignorado.

> **Nota:** A linha de comentário pode ser usada para evitar que as conexões atinjam o tempo limite; um servidor pode enviar um comentário periodicamente para manter a conexão ativa.

Cada mensagem consiste em uma ou mais linhas de texto listando os campos dessa mensagem. Cada campo é representado pelo nome do campo, seguido por dois pontos, seguido pelos dados de texto para o valor desse campo.

### Campos

Cada mensagem recebida tem alguma combinação dos seguintes campos, um por linha:

- `event`
  - : Uma string que identifica o tipo de evento descrito. Se isso for especificado, um evento será despachado no navegador para o ouvinte para o nome do evento especificado; o código-fonte do site deve usar `addEventListener()` para ouvir eventos nomeados. O manipulador `onmessage` é chamado se nenhum nome de evento for especificado para uma mensagem.
- `data`
  - : O campo de dados para a mensagem. Quando o `EventSource` recebe várias linhas consecutivas que começam com `data:`, [ele as concatena](https://www.w3.org/TR/eventsource/#dispatchMessage), inserindo um caractere de nova linha entre cada uma. As novas linhas à direita são removidas.
- `id`
  - : o ID do evento para definir o último valor do ID do evento do objeto [`EventSource`](/pt-BR/docs/Web/API/EventSource).
- `retry`
  - : O tempo de reconexão. Se a conexão com o servidor for perdida, o navegador aguardará o tempo especificado antes de tentar se reconectar. Deve ser um número inteiro, especificando o tempo de reconexão em milissegundos. Se um valor não inteiro for especificado, o campo será ignorado.

Todos os outros nomes de campo são ignorados.

> **Nota:** se uma linha não contiver dois pontos, a linha inteira será tratada como o nome do campo com uma string de valor vazia.

### Exemplos

#### Mensagens somente de dados

No exemplo a seguir, há três mensagens enviadas. O primeiro é apenas um comentário, pois começa com dois pontos. Como mencionado anteriormente, isso pode ser útil como um mecanismo de manutenção se as mensagens não forem enviadas regularmente.

A segunda mensagem contém um campo de dados com o valor "algum texto". A terceira mensagem contém um campo de dados com o valor "outra mensagem\ncom duas linhas". Observe o caractere especial de nova linha no valor.

```bash
: este é um fluxo de teste

dados: algum texto

dados: outra mensagem
dados: com duas linhas
```

#### Eventos nomeados

Este exemplo envia eventos nomeados. Cada um tem um nome de evento especificado pelo campo `event` e um campo `data` cujo valor é uma string JSON apropriada com os dados necessários para que o cliente atue no evento. O campo `data` pode, é claro, ter qualquer string de dados; não precisa ser JSON.

```bash
evento: userconnect
data: {"username": "bobby", "time": "02:33:48"}

evento: mensagem do usuário
data: {"username": "bobby", "time": "02:34:11", "text": "Olá a todos."}

evento: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

evento: mensagem do usuário
data: {"username": "sean", "time": "02:34:36", "text": "Tchau, bobby."}
```

#### Misturando e combinando

Você não precisa usar apenas mensagens sem nome ou eventos digitados; você pode misturá-los em um único fluxo de eventos.

```bash
evento: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Aqui está uma mensagem do sistema de algum tipo que será usada
dados: para realizar alguma tarefa.

evento: mensagem do usuário
data: {"username": "bobby", "time": "02:34:11", "text": "Olá a todos."}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
