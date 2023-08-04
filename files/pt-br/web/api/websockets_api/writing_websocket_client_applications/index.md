---
title: Escrevendo aplicações cliente WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
---

Aplicações cliente usam o [WebSocket API](/pt-BR/docs/Web/API/Websockets_API) para se comunicar com [WebSocket servers](/pt-BR/docs/Web/API/WebSockets_API/Writing_WebSocket_servers) sob o protocolo WebSocket.

{{AvailableInWorkers}}

> **Aviso:** O fragmento de código neste artigo foi tomado de um exemplo de chat usando WebSocket. [v](https://github.com/mdn/samples-server/tree/master/s/websocket-chat)eja o código, então experimente o exemplo. **O exemplo atual possui um bug; ele está tentando usar WebSockets inseguro e precisa ser atualizado para usar WebSocokets seguro. Iremos arrumar isso em breve!**

## Criando um objeto WebSocket

Para se comunicar utilizando o protocolo WebSocket, você precisa criar um objeto `WebSocket`, que automaticamente tentará abrir a conexão com o servidor.

O construtor WebSocket aceita dois campos, um obrigatório e um opcional:

```
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);
```

- `url`
  - : A URL para se conectar. Esta deve ser a URL para qual o WebSocket irá responder.
- `protocols` {{ optional_inline() }}
  - : Uma única string indicando o protocolo ou uma _array_ de strings de protocolos. Estas strings são usadas para indicar sub-protocolos, de forma que um único servidor pode implementar múltiplos sub-protocolos WebSocket (por exemplo, você pode querer que um servidor seja capaz de lidar com diferentes tipos de interações a depender do `protocol` especificado). Se não especificar uma string de protocolo, uma string vazia é assumida.

O construtor lançará a exceção **`SECURITY_ERR`** se o destino não permitir acesso. Isso pode acontecer se você tentar utilizar uma conexão insegura (a maioria dos {{Glossary("user agent", "user agents")}} agora necessitam de um link seguro para todas as conexões WebSocket, a menos que estejam no mesmo dispositivo ou na mesma rede).

### Erros de Conexão

Se um erro ocorrer durante a tentativa de conexão, primeiro um simpes evento com o nome "error" é enviado ao objeto [`WebSocket`](/pt-BR/WebSockets/WebSockets_reference/WebSocket) (invocando, assim, seu manipulador `onerror`), e então o [`CloseEvent`](/pt-BR/WebSockets/WebSockets_reference/CloseEvent) é enviado ao objeto [`WebSocket`](/pt-BR/WebSockets/WebSockets_reference/WebSocket) (invocando o manipulador `onclose`) para indicar a razão pela qual a conexão foi fechada.

O browser pode exibir uma descrição de erro mais detalhada na saída do console, ou mesmo um código de encerramento conforme definido na [RFC 6455, Section 7.4](http://tools.ietf.org/html/rfc6455#section-7.4) através do [`CloseEvent`](/pt-BR/WebSockets/WebSockets_reference/CloseEvent). Está implementado a partir do Firefox 11.

### Exemplos

Neste simples exemplo, criaremos um novo WebSocket, conectando ao servidor em `ws://www.example.com/socketserver`. Neste exemplo utilizaremos um protocolo customizado denominado "protocolOne", embora possa ser omitido.

```js
var exampleSocket = new WebSocket(
  "ws://www.example.com/socketserver",
  "protocolOne",
);
```

No retorno, `exampleSocket.readyState` está como `CONNECTING`. O `readyState` se tornará `OPEN` quando a conexão estiver pronta para transferir dados.

Se quiser abrir uma conexão e for flexível quanto aos protocolos suportados, você pode especificar um array de protocolos:

```js
var exampleSocket = new WebSocket("ws://www.example.com/socketserver", [
  "protocolOne",
  "protocolTwo",
]);
```

Uma vez que a conexão for estabelecida (isso é, `readyState` está `OPEN`), `exampleSocket.protocol` informará qual protocolo o servidor selecionou.

Nos exemplos acima, `ws` foi substituído por `http`, de forma similar `wss` substitui `https`. Estabelecer uma conexão WebSocket depende do [Mecanismo de Aprimoramento HTTP](/pt-BR/docs/Web/HTTP/Protocol_upgrade_mechanism), de forma que o pedido para atualização de protocolo está implícito quando endereçamos o servidor HTTP como `ws://www.example.com` ou `wss://www.example.com`.

## Enviando dados ao servidor

Uma vez a conexão aberta, você pode iniciar a transmisão de dados ao servidor. Para tanto, chame o método [`send()`](</en/WebSockets/WebSockets_reference/WebSocket#send()> "en/WebSockets/WebSockets reference/WebSocket#send()") do `WebSocket` para cada mensagem que queira enviar:

```js
exampleSocket.send(
  "Aqui vai algum texto que o servidor esteja aguardando urgentemente!",
);
```

Você pode enviar dados como uma string, {{ domxref("Blob") }}, ou um [`ArrayBuffer`](/pt-BR/JavaScript_typed_arrays/ArrayBuffer).

> **Nota:** Nas versões anteriores à 11, o Firefox suporta apenas o envio de dados como string.

Visto que estabelecer uma conexão funciona de forma assícrona e, consequentemente, propensa a erros, não há garantia de sucesso ao chamar o método `send()` imediatamente após criar um objeto WebSocket. Podemos, pelo menos, ter certeza de que a tentativa de envio dos dados apenas ocorre quando uma conexão é estabelecida definindo um manipulador de eventos `onopen`:

```js
exampleSocket.onopen = function (event) {
  exampleSocket.send(
    "Aqui vai algum texto que o servidor esteja aguardando urgentemente!",
  );
};
```

### Utilizando JSON para transmitir objetos

Uma forma conveniente é usar [JSON](/pt-BR/JSON) para enviar dados razoavelmente complexos ao servidor. Por exemplo, um aplicação de chat pode interagir com o servidor empregando um protocolo que utilize pacotes de dados JSON encapsulados:

```js
// Enviar texto para todos os usuarios atraves do servidor
function sendText() {
  // Construir um objeto do tipo msg contendo o dado que o servidor precisa processar a partir do cliente de chat.
  var msg = {
    type: "message",
    text: document.getElementById("text").value,
    id: clientID,
    date: Date.now(),
  };

  // Enviar o objeto msg como um JSON em formato de string.
  exampleSocket.send(JSON.stringify(msg));

  // Esvaziar o campo input do elemento text, pronto pra receber a próxima linha de texto do usuário.
  document.getElementById("text").value = "";
}
```

## Recebendo mensagens do servidor

A API WebSockets é dirigida por [eventos](/pt-BR/docs/Web/Guide/Events/Overview_of_Events_and_Handlers); quando mensagens são recebidas, um evento de "mensagem" é entregue à função `onmessage`. Para começar a ouvir os dados de entrada, você pode fazer algo conforme o exemplo abaixo:

```js
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};
```

### Recebendo e interpretando objetos JSON

Vamos considerar que a aplicação cliente de chat remete o envio de dados [Utilizando JSON para transmitir objetos](#utilizando_json_para_transmitir_objetos). Existem diversos tipos de pacotes de dados que o cliente pode receber, tais como:

- Handshake de login
- Messagem de texto
- Atualizações da lista de usuários

O código que interpreta as mensagens de entrada se parecerá com esse:

```js
exampleSocket.onmessage = function (event) {
  var f = document.getElementById("chatbox").contentDocument;
  var text = "";
  var msg = JSON.parse(event.data);
  var time = new Date(msg.date);
  var timeStr = time.toLocaleTimeString();

  switch (msg.type) {
    case "id":
      clientID = msg.id;
      setUsername();
      break;
    case "username":
      text =
        "<b>User <em>" +
        msg.name +
        "</em> signed in at " +
        timeStr +
        "</b><br>";
      break;
    case "message":
      text = "(" + timeStr + ") <b>" + msg.name + "</b>: " + msg.text + "<br>";
      break;
    case "rejectusername":
      text =
        "<b>Seu usuario foi configurado como <em>" +
        msg.name +
        "</em> porque o nome que você escolheu está em uso.</b><br>";
      break;
    case "userlist":
      var ul = "";
      for (i = 0; i < msg.users.length; i++) {
        ul += msg.users[i] + "<br>";
      }
      document.getElementById("userlistbox").innerHTML = ul;
      break;
  }

  if (text.length) {
    f.write(text);
    document.getElementById("chatbox").contentWindow.scrollByPages(1);
  }
};
```

Aqui utilizamos [`JSON.parse()`](/pt-BR/JavaScript/Reference/Global_Objects/JSON/parse) para conveter o objeto JSON de volta ao objeto original, em seguida, examine e aja de acordo com seu conteúdo.

### Formato de dados de texto

O formato de Texto recebido através de uma conexão WebSocket está no formato UTF-8.

## Fechando a conexão

Quando finalizar o uso da conexão WebSocket, invoque o método [`close()`](</en/WebSockets/WebSockets_reference/WebSocket#close()> "en/WebSockets/WebSockets reference/WebSocket#close()"):

```js
exampleSocket.close();
```

Pode ser útil examinar o atributo `bufferedAmount` do socket antes de tentar fechar a conexão para determinar se qualquer dado ainda está pendente de transmissão na rede.

## Considerações de segurança

WebSockets não devem ser utilizados em um contexto de um ambiente misto, isto é, você não deveria abrir uma conexão não-segura a partir de uma página previamente carregada utilizando HTTPS, ou vice-versa. A maioria dos browsers atuamente apenas permitem conexões seguras pelo Websocket, e não mais suportam contextos diferentes desse.
