---
title: Uma simples amostra de RTCDataChannel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
---

{{DefaultAPISidebar("WebRTC")}}

A interface {{domxref("RTCDataChannel")}} é um recurso da [WebRTC API](/pt-BR/docs/Web/API/WebRTC_API) que permite abrir um canal entre dois pares sobre os quais você pode enviar e receber dados arbitrários. A API é intencionalmente semelhante à [WebSocket API](/pt-BR/docs/Web/API/WebSocket_API), de modo que o mesmo modelo de programação pode ser usado para ambos.

Neste exemplo, abriremos um {{domxref("RTCDataChannel")}} para realizar a conexão entre dois elementos na mesma página. Embora seja obviamente um cenário artificial, é útil para demonstrar o fluxo de conexão entre dois pares. Vamos cobrir a mecânica necessária para conectar, transmitir e receber dados, mas vamos deixar para outro exemplo os detalhes sobre como localizar e se conectar a um computador remoto.

## O HTML

Primeiro, vamos dar uma olhada rápida no [HTML que é necessário](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/index.html). Não há nada incrivelmente complicado aqui. Primeiro, temos um par de botões para estabelecer e fechar a conexão:

```html
<button id="connectButton" name="connectButton" class="buttonleft">
  Conectar
</button>
<button
  id="disconnectButton"
  name="disconnectButton"
  class="buttonright"
  disabled>
  Desconectar
</button>
```

Depois, há uma caixa que contém o campo de _input_ no qual o usuário pode digitar uma mensagem para transmitir, com um botão para enviar o texto digitado. Este {{HTMLElement("div")}} será o primeiro ponto (peer) no canal.

```html
<div class="messagebox">
  <label for="message"
    >Insira a mensagem:
    <input
      type="text"
      name="message"
      id="message"
      placeholder="Texto da mensagem"
      inputmode="latin"
      size="60"
      maxlength="120"
      disabled />
  </label>
  <button id="sendButton" name="sendButton" class="buttonright" disabled>
    Enviar
  </button>
</div>
```

Finalmente, há uma pequena caixa na qual vamos inserir as mensagens. Este bloco {{HTMLElement("div")}} será o segundo ponto do par (peer).

```html
<div class="messagebox" id="receivebox">
  <p>Mensagens recebidas:</p>
</div>
```

## O código JavaScript

Como você pode simplesmente [ver o próprio código no GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/main.js), abaixo, analisaremos as partes do código que fazem o trabalho pesado.

A WebRTC API faz um intenso uso de {{jsxref("Promise")}}s. Que tornam muito fácil encadear as etapas do processo de conexão; Se você ainda não leu sobre esta funcionalidade do [ECMAScript 2015](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla), você deveria ler sobre eles. Da mesma forma, este exemplo usa [arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) para simplificar a sintaxe.

### Começando

Quando o script é executado, configuramos um {{event("load")}} ouvinte de eventos (event listener), De modo que, uma vez que a página esteja totalmente carregada, nossa função `startup()` seja chamada.

```js
function startup() {
  connectButton = document.getElementById("connectButton");
  disconnectButton = document.getElementById("disconnectButton");
  sendButton = document.getElementById("sendButton");
  messageInputBox = document.getElementById("message");
  receiveBox = document.getElementById("receivebox");

  // Define os ouvintes de eventos para os elementos da interface do usuário

  connectButton.addEventListener("click", connectPeers, false);
  disconnectButton.addEventListener("click", disconnectPeers, false);
  sendButton.addEventListener("click", sendMessage, false);
}
```

Isso é bastante direto. Pegamos referências de todos os elementos da página que precisaremos acessar e, em seguida, configuramos {{domxref("EventListener", "event listeners")}} nos três botões.

### Estabelecendo uma conexão

Quando o usuário clica no botão "Conectar", o método `connectPeers()` é chamado. Para que fique mais claro, iremos quebrar o código em mais partes, e analisar um pouco de cada vez.

> **Nota:** Mesmo que ambas as extremidades da nossa conexão estejam na mesma página, vamos nos referir ao ponto que inicia a conexão como "local", e ao outro como sendo o "remoto".

#### Configurando o ponto local (local peer)

```js
localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
```

O primeiro passo é criar o ponto "local" da conexão. Este é o ponto que enviará o pedido de conexão. O próximo passo é criar o {{domxref("RTCDataChannel")}} chamando {{domxref("RTCPeerConnection.createDataChannel()")}} e configurando ouvintes de eventos (event listeners) para monitorar o canal, e para que possamos saber quando ele for aberto e fechado (isto é, quando o canal está conectado ou desconectado dentro dessa conexão entre pares (peer connection)).

É importante ter em mente que cada extremidade do canal tem seu próprio objeto {{domxref("RTCDataChannel")}} .

#### Configurando o ponto remoto (remote peer)

```js
remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;
```

O ponto remoto está configurado de forma semelhante, exceto que não precisamos nós mesmos criar explicitamente um {{domxref("RTCDataChannel")}} , uma vez que vamos ser conectados através do canal estabelecido acima. Em vez disso, criamos um {{event("datachannel")}} manipulador de eventos (event handler); Isso será chamado quando o canal de dados (data channel) for aberto; Este manipulador (handler) receberá um objeto `RTCDataChannel`; você verá isso abaixo.

#### Configurando ICE candidates

O próximo passo é configurar cada conexão com os ouvintes do ICE que serão chamados quando houver um novo candidato ICE para comunicar com o outro lado.

> **Nota:** Em um cenário do mundo real em que os dois pares não estão sendo executados no mesmo contexto, o processo é um pouco mais complexo; Cada lado fornece, um de cada vez, um sugestão sobre como conectar (por exemplo, UDP, UDP com um relay, TCP, etc.) chamando {{domxref("RTCPeerConnection.addIceCandidate()")}}, e eles vão de um lado para outro até chegarem a um acordo. Mas aqui, acabamos de aceitar a primeira oferta de cada lado, uma vez que não existe uma rede real envolvida.

```js
localConnection.onicecandidate = (e) =>
  !e.candidate ||
  remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);

remoteConnection.onicecandidate = (e) =>
  !e.candidate ||
  localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
```

Configuramos cada {{domxref("RTCPeerConnection")}} para ter um manipulador de eventos (event handler) para o evento {{event("icecandidate")}} .

#### Iniciando a tentativa de conexão

A última coisa que precisamos fazer para começar a conectar nossos pares é criar uma oferta de conexão.

```js
localConnection
  .createOffer()
  .then((offer) => localConnection.setLocalDescription(offer))
  .then(() =>
    remoteConnection.setRemoteDescription(localConnection.localDescription),
  )
  .then(() => remoteConnection.createAnswer())
  .then((answer) => remoteConnection.setLocalDescription(answer))
  .then(() =>
    localConnection.setRemoteDescription(remoteConnection.localDescription),
  )
  .catch(handleCreateDescriptionError);
```

Vamos passar por isto linha por linha e decifrar o que significa.

1. Primeiro chamamos {{domxref("RTCPeerConnection.createOffer()")}} método para criar um resumo {{Glossary("SDP")}} (Session Description Protocol) descrevendo a conexão que queremos fazer. Este método aceita, opcionalmente, um objeto com restrições a serem suportadas pela conexão para atender às suas necessidades, como no caso da conexão precisar suportar áudio, vídeo ou ambos. Em nosso exemplo simples, não temos restrições.
2. Se a oferta for criada com sucesso, passamos o resumo junto ao método de conexões locais {{domxref("RTCPeerConnection.setLocalDescription()")}} . Isso configura o ponto local da conexão.
3. O próximo passo é conectar o ponto local ao remoto comunicando ao ponto remoto sobre ele. Isso é feito chamando `remoteConnection.`{{domxref("RTCPeerConnection.setRemoteDescription()")}}. Agora o `remoteConnection` conhece a conexão que está sendo construída.
4. Isso significa que é hora do ponto remoto responder. Ele faz isso chamando o método {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} . Isso gera um resumo de SDP que descreve a conexão que o ponto remoto está disposto e capaz de estabelecer. Essa configuração está em algum lugar na união das opções que ambos os pares podem suportar.
5. Uma vez que a resposta foi criada, ela é passada para o _remoteConnection_ chamando {{domxref("RTCPeerConnection.setLocalDescription()")}}. Isso estabelece o ponto remoto da conexão (que, para o ponto remoto, é o ponto local. Isso pode parecer confuso, mas você irá se acostumar com isso.
6. Finalmente, a descrição local das conexões remotas está configurada para se referir ao ponto remoto, chamando localConnection's {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
7. O `catch()` chama uma rotina que lida com os erros que ocorrem.

> **Nota:** Mais uma vez, esse processo não é uma implementação do mundo real; No uso normal, há dois pedaços de código executados em duas máquinas, interagindo e negociando a conexão.

#### Manipulação da conexão de pares bem sucedida

Como cada lado da conexão peer-to-peer é conectado com sucesso, o evento correspondente {{domxref("RTCPeerConnection")}}'s {{event("icecandidate")}} é disparado. Esses manipuladores podem fazer o que for necessário, mas, neste exemplo, tudo o que precisamos fazer é atualizar a interface do usuário:

```js
function handleLocalAddCandidateSuccess() {
  connectButton.disabled = true;
}

function handleRemoteAddCandidateSuccess() {
  disconnectButton.disabled = false;
}
```

A única coisa que fazemos aqui é desativar o botão "Conectar" quando o ponto local estiver conectado e ativar o botão "Desconectar" quando o ponto remoto se conectar.

#### Conectando o canal de dados

Uma vez que o {{domxref("RTCPeerConnection")}} é aberto, o evento {{event("datachannel")}} é enviado para o ponto remoto para completar o processo de abertura do canal de dados; Isso invoca nosso método `receiveChannelCallback()`, que se parece com isso:

```js
function receiveChannelCallback(event) {
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
}
```

O evento{{event("datachannel")}} inclui, em sua propriedade de canal, uma referência a um {{domxref("RTCDataChannel")}} Representando o ponto remoto do canal. Isso é salvo, e nós configuramos, no canal, ouvintes de eventos para os eventos que queremos manipular. Uma vez feito isso, nosso método `handleReceiveMessage()` Será chamado cada vez que os dados são recebidos pelo ponto remoto, e o método `handleReceiveChannelStatusChange()` será chamado sempre que mudar o estado da conexão do canal, para que possamos reagir quando o canal estiver totalmente aberto e quando ele for fechado.

### Lidando com as mudanças de status do canal

Ambos nossos pontos locais e remotos usam um único método para lidar com eventos que indicam alguma alteração no status da conexão do canal.

Quando o ponto local experimenta um evento aberto ou fechado, o método`handleSendChannelStatusChange()` é chamado:

```js
function handleSendChannelStatusChange(event) {
  if (sendChannel) {
    var state = sendChannel.readyState;

    if (state === "open") {
      messageInputBox.disabled = false;
      messageInputBox.focus();
      sendButton.disabled = false;
      disconnectButton.disabled = false;
      connectButton.disabled = true;
    } else {
      messageInputBox.disabled = true;
      sendButton.disabled = true;
      connectButton.disabled = false;
      disconnectButton.disabled = true;
    }
  }
}
```

Se o estado do canal mudou para "open", isso indica que terminamos de estabelecer o link entre os dois pares. A interface do usuário é atualizada de forma correspondente: ativando o elemento de input de texto para a mensagem a ser enviada, focando este elemento de input para que o usuário comece imediatamente a digitar, habilitando os botões "Enviar" e "Desconectar", que são agora utilizáveis, E desativando o botão "Conectar", uma vez que não é necessário quando a conexão está aberta.

Se o estado do canal mudou para "closed", ocorre o conjunto oposto de ações: a caixa de entrada de texto e o botão "Enviar" estão desativados, o botão "Conectar" está habilitado para que o usuário possa abrir uma nova conexão se desejar, e o botão "Desconectar" está desativado, uma vez que não é útil quando não existe conexão.

Nosso exemplo de par remoto, por outro lado, ignora os eventos de alteração de status, exceto para registrar o evento no console:

```js
function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      "Receive channel's status has changed to " + receiveChannel.readyState,
    );
  }
}
```

O método `handleReceiveChannelStatusChange()` recebe como parâmetro de entrada o evento que ocorreu; Este será um {{domxref("RTCDataChannelEvent")}}.

### Enviando mensagens

Quando o usuário pressiona o botão "Enviar", o método sendMessage() que estabelecemos como o manipulador para o evento do botão {{event("click")}} é chamado. Esse método é bastante simples:

```js
function sendMessage() {
  var message = messageInputBox.value;
  sendChannel.send(message);

  messageInputBox.value = "";
  messageInputBox.focus();
}
```

Primeiro, o texto da mensagem é obtido dos atributos do elemento de _input_ [`value`](/pt-BR/docs/Web/HTML/Element/input#value) . Isso é enviado para o ponto remoto, ligando para {{domxref("RTCDataChannel.send", "sendChannel.send()")}}. E está tudo aí! O resto deste método é apenas um pouco de açúcar para experiência do usuário - a caixa de entrada é esvaziada e re-focada para que o usuário comece imediatamente a digitar outra mensagem.

### Recebendo mensagens

Quando ocorre um evento de "mensagem" no canal remoto, nosso método `handleReceiveMessage()` é chamado como o manipulador de eventos.

```js
function handleReceiveMessage(event) {
  var el = document.createElement("p");
  var txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

Este método simplesmente executa alguns injeções básicas {{Glossary("DOM")}} ; cria um novo {{HTMLElement("p")}} (paragraph) elemento, então cria um novo nó {{domxref("Text")}} contendo o texto da mensagem, que é recebido na propriedade de dados do evento. Este nó de texto é anexado como um filho do novo elemento, que é então inserido no bloco _receiveBox_, fazendo com que ele desenhe na janela do navegador.

### Desconectando os pares (peers)

Quando o usuário clica no botão "Desconectar", o método `disconnectPeers()` previamente configurado como o manipulador desse botão é chamado.

```js
function disconnectPeers() {
  // Close the RTCDataChannels if they're open.

  sendChannel.close();
  receiveChannel.close();

  // Close the RTCPeerConnections

  localConnection.close();
  remoteConnection.close();

  sendChannel = null;
  receiveChannel = null;
  localConnection = null;
  remoteConnection = null;

  // Update user interface elements

  connectButton.disabled = false;
  disconnectButton.disabled = true;
  sendButton.disabled = true;

  messageInputBox.value = "";
  messageInputBox.disabled = true;
}
```

Isso começa por fechar cada par {{domxref("RTCDataChannel")}}, então, de forma semelhante, cada um {{domxref("RTCPeerConnection")}}. Então, todas as referências salvas desses objetos são definidas como null para evitar a reutilização acidental, e a interface do usuário é atualizada para refletir o fato de que a conexão foi fechada.

## Próximos passos

Você poderia [tentar este exemplo](https://mdn-samples.mozilla.org/s/webrtc-simple-datachannel) e dar uma olhada no código fonte [webrtc-simple-datachannel](https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel), disponível no GitHub.
