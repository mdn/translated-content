---
title: Uma simples amostra de RTCDataChannel
slug: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
translation_of: Web/API/WebRTC_API/Simple_RTCDataChannel_sample
original_slug: Web/API/WebRTC_API/Simples_RTCDataChannel_amostra
---
<p>{{WebRTCSidebar}}</p>

<p>A interface {{domxref("RTCDataChannel")}} é um recurso da <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC API</a> que permite abrir um canal entre dois pares sobre os quais você pode enviar e receber dados arbitrários. A API é intencionalmente semelhante à <a href="/en-US/docs/Web/API/WebSocket_API">WebSocket API</a>, de modo que o mesmo modelo de programação pode ser usado para ambos.</p>

<p>Neste exemplo, abriremos um {{domxref("RTCDataChannel")}} para realizar a conexão entre dois elementos na mesma página. Embora seja obviamente um cenário artificial, é útil para demonstrar o fluxo de conexão entre dois pares. Vamos cobrir a mecânica necessária para conectar, transmitir e receber dados, mas vamos deixar para outro exemplo os detalhes sobre como localizar e se conectar a um computador remoto.</p>

<h2 id="O_HTML">O HTML</h2>

<p>Primeiro, vamos dar uma olhada rápida no <a class="external" href="https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/index.html" rel="noopener">HTML que é necessário</a>. Não há nada incrivelmente complicado aqui. Primeiro, temos um par de botões para estabelecer e fechar a conexão:</p>

<pre class="brush: html">&lt;button id="connectButton" name="connectButton" class="buttonleft"&gt;
  Conectar
&lt;/button&gt;
&lt;button id="disconnectButton" name="disconnectButton" class="buttonright" disabled&gt;
  Desconectar
&lt;/button&gt;</pre>

<p>Depois, há uma caixa que contém o campo de <em>input </em>no qual o usuário pode digitar uma mensagem para transmitir, com um botão para enviar o texto digitado. Este {{HTMLElement("div")}} será o primeiro ponto (peer) no canal.</p>

<pre class="brush: html">  &lt;div class="messagebox"&gt;
    &lt;label for="message"&gt;Insira a mensagem:
      &lt;input type="text" name="message" id="message" placeholder="Texto da mensagem"
              inputmode="latin" size=60 maxlength=120 disabled&gt;
    &lt;/label&gt;
    &lt;button id="sendButton" name="sendButton" class="buttonright" disabled&gt;
      Enviar
    &lt;/button&gt;
  &lt;/div&gt;</pre>

<p>Finalmente, há uma pequena caixa na qual vamos inserir as mensagens. Este bloco {{HTMLElement("div")}} será o segundo ponto do par (peer).</p>

<pre class="brush: html">&lt;div class="messagebox" id="receivebox"&gt;
  &lt;p&gt;Mensagens recebidas:&lt;/p&gt;
&lt;/div&gt;</pre>

<h2 id="O_código_JavaScript">O código JavaScript</h2>

<p>Como você pode simplesmente <a class="external" href="https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel/main.js" rel="noopener">ver o próprio código no GitHub</a>, abaixo, analisaremos as partes do código que fazem o trabalho pesado.</p>

<p>A WebRTC API faz um intenso uso de {{jsxref("Promise")}}s. Que tornam muito fácil encadear as etapas do processo de conexão; Se você ainda não leu sobre esta funcionalidade do <a href="/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla">ECMAScript 2015</a>, você deveria ler sobre eles. Da mesma forma, este exemplo usa <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a> para simplificar a sintaxe.</p>

<h3 id="Começando">Começando</h3>

<p>Quando o script é executado, configuramos um {{event("load")}} ouvinte de eventos (event listener), De modo que, uma vez que a página esteja totalmente carregada, nossa função <code>startup()</code> seja chamada.</p>

<pre class="brush: js">function startup() {
  connectButton = document.getElementById('connectButton');
  disconnectButton = document.getElementById('disconnectButton');
  sendButton = document.getElementById('sendButton');
  messageInputBox = document.getElementById('message');
  receiveBox = document.getElementById('receivebox');

  // Define os ouvintes de eventos para os elementos da interface do usuário

  connectButton.addEventListener('click', connectPeers, false);
  disconnectButton.addEventListener('click', disconnectPeers, false);
  sendButton.addEventListener('click', sendMessage, false);
}</pre>

<p>Isso é bastante direto. Pegamos referências de todos os elementos da página que precisaremos acessar e, em seguida, configuramos {{domxref("EventListener", "event listeners")}} nos três botões.</p>

<h3 id="Estabelecendo_uma_conexão">Estabelecendo uma conexão</h3>

<p>Quando o usuário clica no botão "Conectar", o método <code>connectPeers()</code> é chamado. Para que fique mais claro, iremos quebrar o código em mais partes, e analisar um pouco de cada vez.</p>

<div class="note">
<p><strong>Nota:</strong> Mesmo que ambas as extremidades da nossa conexão estejam na mesma página, vamos nos referir ao ponto que inicia a conexão como "local", e ao outro como sendo o "remoto".</p>
</div>

<h4 id="Configurando_o_ponto_local_(local_peer)">Configurando o ponto local (local peer)</h4>

<pre class="brush: js">localConnection = new RTCPeerConnection();

sendChannel = localConnection.createDataChannel("sendChannel");
sendChannel.onopen = handleSendChannelStatusChange;
sendChannel.onclose = handleSendChannelStatusChange;
</pre>

<p>O primeiro passo é criar o ponto "local" da conexão. Este é o ponto que enviará o pedido de conexão. O próximo passo é criar o {{domxref("RTCDataChannel")}} chamando {{domxref("RTCPeerConnection.createDataChannel()")}} e configurando ouvintes de eventos (event listeners) para monitorar o canal, e para que possamos saber quando ele for aberto e fechado (isto é, quando o canal está conectado ou desconectado dentro dessa conexão entre pares (peer connection)).</p>

<p>É importante ter em mente que cada extremidade do canal tem seu próprio objeto {{domxref("RTCDataChannel")}} .</p>

<h4 id="Configurando_o_ponto_remoto_(remote_peer)">Configurando o ponto remoto (remote peer)</h4>

<pre class="brush: js">remoteConnection = new RTCPeerConnection();
remoteConnection.ondatachannel = receiveChannelCallback;</pre>

<p>O ponto remoto está configurado de forma semelhante, exceto que não precisamos nós mesmos criar explicitamente um {{domxref("RTCDataChannel")}} , uma vez que vamos ser conectados através do canal estabelecido acima. Em vez disso, criamos um {{event("datachannel")}} manipulador de eventos (event handler); Isso será chamado quando o canal de dados (data channel) for aberto; Este manipulador (handler) receberá um objeto <code>RTCDataChannel</code>; você verá isso abaixo.</p>

<h4 id="Configurando_ICE_candidates">Configurando  ICE candidates</h4>

<p>O próximo passo é configurar cada conexão com os ouvintes do ICE que serão chamados quando houver um novo candidato ICE para comunicar com o outro lado.</p>

<div class="note">
<p><strong>Nota:</strong> Em um cenário do mundo real em que os dois pares não estão sendo executados no mesmo contexto, o processo é um pouco mais complexo; Cada lado fornece, um de cada vez, um sugestão sobre como conectar (por exemplo, UDP, UDP com um relay, TCP, etc.) chamando {{domxref("RTCPeerConnection.addIceCandidate()")}}, e eles vão de um lado para outro até chegarem a um acordo. Mas aqui, acabamos de aceitar a primeira oferta de cada lado, uma vez que não existe uma rede real envolvida.</p>
</div>

<pre class="brush: js">    localConnection.onicecandidate = e =&gt; !e.candidate
        || remoteConnection.addIceCandidate(e.candidate)
        .catch(handleAddCandidateError);

    remoteConnection.onicecandidate = e =&gt; !e.candidate
        || localConnection.addIceCandidate(e.candidate)
        .catch(handleAddCandidateError);</pre>

<p>Configuramos cada {{domxref("RTCPeerConnection")}} para ter um manipulador de eventos (event handler) para o evento {{event("icecandidate")}} .</p>

<h4 id="Iniciando_a_tentativa_de_conexão">Iniciando a tentativa de conexão</h4>

<p>A última coisa que precisamos fazer para começar a conectar nossos pares é criar uma oferta de conexão.</p>

<pre class="brush: js">    localConnection.createOffer()
    .then(offer =&gt; localConnection.setLocalDescription(offer))
    .then(() =&gt; remoteConnection.setRemoteDescription(localConnection.localDescription))
    .then(() =&gt; remoteConnection.createAnswer())
    .then(answer =&gt; remoteConnection.setLocalDescription(answer))
    .then(() =&gt; localConnection.setRemoteDescription(remoteConnection.localDescription))
    .catch(handleCreateDescriptionError);</pre>

<p>Vamos passar por isto linha por linha e decifrar o que significa.</p>

<ol>
 <li>Primeiro chamamos {{domxref("RTCPeerConnection.createOffer()")}} método para criar um resumo {{Glossary("SDP")}} (Session Description Protocol) descrevendo a conexão que queremos fazer. Este método aceita, opcionalmente, um objeto com restrições a serem suportadas pela conexão para atender às suas necessidades, como no caso da conexão precisar suportar áudio, vídeo ou ambos. Em nosso exemplo simples, não temos restrições.</li>
 <li>Se a oferta for criada com sucesso, passamos o resumo junto ao método de conexões locais {{domxref("RTCPeerConnection.setLocalDescription()")}} . Isso configura o ponto local da conexão.</li>
 <li>O próximo passo é conectar o ponto local ao remoto comunicando ao ponto remoto sobre ele. Isso é feito chamando <code>remoteConnection.</code>{{domxref("RTCPeerConnection.setRemoteDescription()")}}. Agora o <code>remoteConnection</code> conhece a conexão que está sendo construída.</li>
 <li>Isso significa que é hora do ponto remoto responder. Ele faz isso chamando o método {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} . Isso gera um resumo de SDP que descreve a conexão que o ponto remoto está disposto e capaz de estabelecer. Essa configuração está em algum lugar na união das opções que ambos os pares podem suportar.</li>
 <li>Uma vez que a resposta foi criada, ela é passada para o <em>remoteConnection </em>chamando {{domxref("RTCPeerConnection.setLocalDescription()")}}. Isso estabelece o ponto remoto da conexão (que, para o ponto remoto, é o ponto local. Isso pode parecer confuso, mas você irá se acostumar com isso.</li>
 <li>Finalmente, a descrição local das conexões remotas está configurada para se referir ao ponto remoto, chamando localConnection's {{domxref("RTCPeerConnection.setRemoteDescription()")}}.</li>
 <li>O <code>catch()</code> chama uma rotina que lida com os erros que ocorrem.</li>
</ol>

<div class="note">
<p><strong>Nota:</strong> Mais uma vez, esse processo não é uma implementação do mundo real; No uso normal, há dois pedaços de código executados em duas máquinas, interagindo e negociando a conexão.</p>
</div>

<h4 id="Manipulação_da_conexão_de_pares_bem_sucedida">Manipulação da conexão de pares bem sucedida</h4>

<p>Como cada lado da conexão peer-to-peer é conectado com sucesso, o evento correspondente {{domxref("RTCPeerConnection")}}'s {{event("icecandidate")}} é disparado. Esses manipuladores podem fazer o que for necessário, mas, neste exemplo, tudo o que precisamos fazer é atualizar a interface do usuário:</p>

<pre class="brush: js">  function handleLocalAddCandidateSuccess() {
    connectButton.disabled = true;
  }

  function handleRemoteAddCandidateSuccess() {
    disconnectButton.disabled = false;
  }</pre>

<p>A única coisa que fazemos aqui é desativar o botão "Conectar" quando o ponto local estiver conectado e ativar o botão "Desconectar" quando o ponto remoto se conectar.</p>

<h4 id="Conectando_o_canal_de_dados">Conectando o canal de dados</h4>

<p>Uma vez que o {{domxref("RTCPeerConnection")}} é aberto, o evento {{event("datachannel")}} é enviado para o ponto remoto para completar o processo de abertura do canal de dados; Isso invoca nosso método <code>receiveChannelCallback()</code>, que se parece com isso:</p>

<pre class="brush: js">  function receiveChannelCallback(event) {
    receiveChannel = event.channel;
    receiveChannel.onmessage = handleReceiveMessage;
    receiveChannel.onopen = handleReceiveChannelStatusChange;
    receiveChannel.onclose = handleReceiveChannelStatusChange;
  }</pre>

<p>O evento{{event("datachannel")}} inclui, em sua propriedade de canal, uma referência a um {{domxref("RTCDataChannel")}} Representando o ponto remoto do canal. Isso é salvo, e nós configuramos, no canal, ouvintes de eventos para os eventos que queremos manipular. Uma vez feito isso, nosso método <code>handleReceiveMessage()</code> Será chamado cada vez que os dados são recebidos pelo ponto remoto, e o método <code>handleReceiveChannelStatusChange()</code> será chamado sempre que mudar o estado da conexão do canal, para que possamos reagir quando o canal estiver totalmente aberto e quando ele for fechado.</p>

<h3 id="Lidando_com_as_mudanças_de_status_do_canal">Lidando com as mudanças de status do canal</h3>

<p>Ambos nossos pontos locais e remotos usam um único método para lidar com eventos que indicam alguma alteração no status da conexão do canal.</p>

<p>Quando o ponto local experimenta um evento aberto ou fechado, o método<code>handleSendChannelStatusChange()</code> é chamado:</p>

<pre class="brush: js">  function handleSendChannelStatusChange(event) {
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
  }</pre>

<p>Se o estado do canal mudou para "open", isso indica que terminamos de estabelecer o link entre os dois pares. A interface do usuário é atualizada de forma correspondente: ativando o elemento de input de texto para a mensagem a ser enviada, focando este elemento de input para que o usuário comece imediatamente a digitar, habilitando os botões "Enviar" e "Desconectar", que são agora utilizáveis, E desativando o botão "Conectar", uma vez que não é necessário quando a conexão está aberta.</p>

<p>Se o estado do canal mudou para "closed", ocorre o conjunto oposto de ações: a caixa de entrada de texto e o botão "Enviar" estão desativados, o botão "Conectar" está habilitado para que o usuário possa abrir uma nova conexão se desejar, e o botão "Desconectar" está desativado, uma vez que não é útil quando não existe conexão.</p>

<p>Nosso exemplo de par remoto, por outro lado, ignora os eventos de alteração de status, exceto para registrar o evento no console:</p>

<pre class="brush: js">  function handleReceiveChannelStatusChange(event) {
    if (receiveChannel) {
      console.log("Receive channel's status has changed to " +
                  receiveChannel.readyState);
    }
  }</pre>

<p>O método <code>handleReceiveChannelStatusChange()</code> recebe como parâmetro de entrada o evento que ocorreu; Este será um {{domxref("RTCDataChannelEvent")}}.</p>

<h3 id="Enviando_mensagens">Enviando mensagens</h3>

<p>Quando o usuário pressiona o botão "Enviar", o método sendMessage() que estabelecemos como o manipulador para o evento do botão {{event("click")}} é chamado. Esse método é bastante simples:</p>

<pre class="brush: js">  function sendMessage() {
    var message = messageInputBox.value;
    sendChannel.send(message);

    messageInputBox.value = "";
    messageInputBox.focus();
  }</pre>

<p>Primeiro, o texto da mensagem é obtido dos atributos do elemento de <em>input </em>{{htmlattrxref("value", "input")}} . Isso é enviado para o ponto remoto, ligando para {{domxref("RTCDataChannel.send", "sendChannel.send()")}}. E está tudo aí! O resto deste método é apenas um pouco de açúcar para experiência do usuário - a caixa de entrada é esvaziada e re-focada para que o usuário comece imediatamente a digitar outra mensagem.</p>

<h3 id="Recebendo_mensagens">Recebendo mensagens</h3>

<p>Quando ocorre um evento de "mensagem" no canal remoto, nosso método <code>handleReceiveMessage()</code> é chamado como o manipulador de eventos.</p>

<pre class="brush: js">  function handleReceiveMessage(event) {
    var el = document.createElement("p");
    var txtNode = document.createTextNode(event.data);

    el.appendChild(txtNode);
    receiveBox.appendChild(el);
  }</pre>

<p>Este método simplesmente executa alguns injeções básicas {{Glossary("DOM")}} ; cria um novo {{HTMLElement("p")}} (paragraph) elemento, então cria um novo nó {{domxref("Text")}} contendo o texto da mensagem, que é recebido na propriedade de dados do evento. Este nó de texto é anexado como um filho do novo elemento, que é então inserido no bloco <em>receiveBox</em>, fazendo com que ele desenhe na janela do navegador.</p>

<h3 id="Desconectando_os_pares_(peers)">Desconectando os pares (peers)</h3>

<p>Quando o usuário clica no botão "Desconectar", o método <code>disconnectPeers()</code> previamente configurado como o manipulador desse botão é chamado.</p>

<pre class="brush: js">  function disconnectPeers() {

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
</pre>

<p>Isso começa por fechar cada par {{domxref("RTCDataChannel")}}, então, de forma semelhante, cada um {{domxref("RTCPeerConnection")}}. Então, todas as referências salvas desses objetos são definidas como null para evitar a reutilização acidental, e a interface do usuário é atualizada para refletir o fato de que a conexão foi fechada.</p>

<h2 id="Próximos_passos">Próximos passos</h2>

<p>Você poderia <a href="https://mdn-samples.mozilla.org/s/webrtc-simple-datachannel">tentar este exemplo</a> e dar uma olhada no código fonte <a href="https://github.com/mdn/samples-server/tree/master/s/webrtc-simple-datachannel">webrtc-simple-datachannel</a>, disponível no GitHub.</p>
