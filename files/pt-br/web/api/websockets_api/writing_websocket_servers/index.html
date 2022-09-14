---
title: Escrevendo um servidor WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
tags:
  - Guía
  - HTML5
  - Tutorial
  - WebSocket
  - WebSockets
translation_of: Web/API/WebSockets_API/Writing_WebSocket_servers
original_slug: WebSockets/Writing_WebSocket_servers
---
<p><span class="seoSummary">Um servidor de WebSocket  é uma aplicação TCP que escuta uma porta de um servidor que segue um protocolo específico, simples assim. A tarefa de criar um servidor personalizado costuma assustar as pessoas; no entanto, pode ser fácil implementar um simples servidor WebSocket na sua plataforma de escolha. </span></p>

<p>Um servidor WebSocket pode ser escrito em qualquer linguagem de programação server-side  que é capaz de utilizar <a href="https://en.wikipedia.org/wiki/Berkeley_sockets">Berkeley sockets</a>,  tais como C(++) , ou Python, ou mesmo o <a href="/en-US/docs/PHP">PHP</a> e o <a href="/en-US/docs/Web/JavaScript/Server-Side_JavaScript">server-side JavaScript</a>. Esse não é um tutorial em uma linguagem de programação específica, mas serve como guia para facilitar a escrita do seu próprio servidor.</p>

<p>Você precisará saber como o HTTP funciona e ter uma experiência média com programação.</p>

<p>Dependendo do suporte da linguagem, pode ser necessário o conhecimento sobre soquetes TCP. O escopo deste guia é apresentar o conhecimento mínimo que você precisa para escrever um servidor WebSocket.</p>

<div class="note">
<p>Leia a útlima especificação sobre WebSockets, a <a href="http://datatracker.ietf.org/doc/rfc6455/?include_text=1">RFC 6455</a>. As seções 1 e 4-7 são especialmente interessantes para implementadores de servidores. A seção 10 discute assuntos sobre segurança que você definitivamente deveria examinar antes de expor seu servidor.</p>
</div>

<p>Um servidor de WebSocket é explicado de maneira bem simples aqui. Servidores de WebSocket geralmente são servidores separados e especializados (para balanceamento de carga ou outras razões práticas), então, geralmente você irá usar um proxy reverso (como um servidor HTTP comum) para detectar a solicitação de handshakes do WebSocket, pré-processá-los e enviar esses clientes para um servidor WebSocket real. Isso significa que você não precisa encher seu código com cookies e manipuladores de autenticação (por exemplo).</p>

<p><a name="Handshake">O <em>Handshake</em> ("aperto de mão") do WebSocket</a></p>

<p>Primeiro de tudo, o servidor deve ouvir as conexões socket recebidas usando um socket TCP padrão. Dependendo da sua plataforma, isso pode já ter sido tratado previamente. Por exemplo, vamos assumir que seu servidor está ouvindo example.com, porta 8000, e seu servidor socket responde às requisições  GET em <code>/chat</code>.</p>

<div class="warning">
<p><strong>Aviso:</strong> O servidor pode ouvir qualquer porta que escolher, mas se escolher qualquer porta diferente de 80 e 443, podem ocorrer problemas relacionados aos firewalls e/ou proxies. Conexões na porta 443 tendem a ter mais sucesso com mais frequência, isso requer uma conexão segura (TLS/SSL). Também, note que a maioria dos browsers (notavelmente o  Firefox 8+) não permite conexões de servidores WebSocket de páginas seguras.</p>
</div>

<p>O handshake é a "Web" no WebSockets. É a ponte do HTTP para o Websocket. No handshake, detalhes da conexão são negociados, e qualquer uma das partes pode voltar antes da conclusão se os termos são desfavoráveis. O servidor deve ser cuidadoso para entender tudo que o cliente perguntar,  caso contrário, serão introduzidas questões de segurança.</p>

<h3 id="Requisição_Handshake_do_Cliente">Requisição Handshake do Cliente</h3>

<p>Mesmo que você esteja construindo um servidor, um cliente ainda precisa iniciar o processo de handshake do WebSocket. Então você deve saber como interpretar a requisição do cliente. O cliente vai enviar uma requisição HTTP padrão que é parecida com isso (a versão do HTTP <strong>deve</strong> ser 1.1 ou maior, e o método <strong>deve</strong> ser um <code>GET</code>):</p>

<pre>GET /chat HTTP/1.1
Host: example.com:8000
<strong>Upgrade: websocket</strong>
<strong>Connection: Upgrade</strong>
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

</pre>

<p>O cliente pode solicitar extensões e/ou subprotocolos aqui; veja <a href="#Miscellaneous">Miscellaneous</a> para mais detalhes. Também, cabeçalhos comuns como <code>User-Agent</code>, <code>Referer</code>, <code>Cookie</code>, ou cabeçalhos de autenticação poderiam estar bem aqui. Faça o que você quiser com eles; eles não pertencem diretamente ao WebSocket. Também é seguro ignora-los. Em muitas configurações comuns, um proxy reverso ja tratou deles.</p>

<p>Se qualquer cabeçalho não foi entendido ou conter um valor incorreto, o servidor deve enviar um erro "<a href="https://developer.mozilla.org/en-US/docs/HTTP/Response_codes#400">400 Bad Request</a>" e fechar o socket imediatamente. É comum, também dar a razão pelo qual o handshake falhou no body da resposta do HTTP, mas muitas mensages nunca serão mostradas (os browsers não mostram isso). Se o servidor não reconhecer a versão do WebSockets, deve enviar um cabeçalho <code>Sec-WebSocket-Version</code> que contenha a(s) versão(versões) que o mesmo entenda. (Esse guia explica o v13, o mais novo). Agora, vamos continuar para o cabeçalho mais curioso, o <code>Sec-WebSocket-Key</code>.</p>

<div class="note">
<p><strong>Dica:</strong> Todos os browsers  vão enviar um <a href="https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS#Origin"><code>Origin</code> header</a>. Você pode usar esse cabeçalho por segurança (verifique pelo de mesma origem, whitelisting/ blacklisting, etc.) e envie uma <a href="https://developer.mozilla.org/en-US/docs/HTTP/Response_codes#403">403 Forbidden</a> se você não gostou do que viu. Sobretanto, fique ciente que os agentes non-browser podem apenas enviar uma falsa <code>Origin</code>. Muitas aplicações vão rejeitar requisições sem cabeçalho.</p>
</div>

<div class="note">
<p><strong>Dica:</strong> A request-uri (<code>/chat</code> aqui) não tem significado definido na especificação. Muitas pessoas utilizam habilmente para que servidores lidem com muiltíplas aplicações WebSocket. Por exemplo, <code>example.com/chat</code> deve invocar um app de chat com multiplos usuários, enquanto <code>/game</code> no mesmo servidor poderia invocar um jogo multiplayer.</p>
</div>

<div class="note">
<p><strong>Nota:</strong> <a href="https://developer.mozilla.org/en-US/docs/HTTP/Response_codes">Regular HTTP status codes</a> podem apenas ser usados antes do handshake. Depois que o handshake sucede, você deve usar um conjunto de códigos diferentes (definidos na seção 7.4 da especificação).</p>
</div>

<h3 id="Resposta_Handshake_do_Servidor">Resposta Handshake do Servidor</h3>

<p>Quanto o servidor receber a requisição de handshake, ele deve enviar um resposta especifica (odd-looking) que indica que o protocolo está sendo alterado de HTTP para WebSocket. Essa resposta se parece com isso (lembre-se cada final do cabeçalho com <code>\r\n</code> e coloque um <code>\r\n</code> extra depois do último):</p>

<pre><strong>HTTP/1.1 101 Switching Protocols</strong>
Upgrade: websocket
Connection: Upgrade
<strong>Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

</strong></pre>

<p>Adicionalmente, o servidor pode decidir sobre os pedidos de extensão/subprotocolo aqui; veja <a href="#Miscellaneous">Miscellaneous</a> para mais detalhes. O <code>Sec-WebSocket-Accept</code> é uma parte interessante. O servidor deve deriva-lo do <code>Sec-WebSocket-Key</code> que o cliente enviou. Para obte-lo, concatene <span style="line-height: 1.5em;">o </span><code style="font-size: 14px;">Sec-WebSocket-Key</code><span style="line-height: 1.5em;"> do cliente e a string "</span><code style="font-size: 14px;">258EAFA5-E914-47DA-95CA-C5AB0DC85B11</code><span style="line-height: 1.5em;">" juntos (isso é uma "</span><a href="https://en.wikipedia.org/wiki/Magic_string" style="line-height: 1.5em;">magic string</a><span style="line-height: 1.5em;">"), pegue o </span><a href="https://en.wikipedia.org/wiki/SHA-1" style="line-height: 1.5em;">SHA-1 hash</a><span style="line-height: 1.5em;"> do resultado, e retorne o</span><span style="line-height: 1.5em;"> codigo </span><a href="https://en.wikipedia.org/wiki/Base64" style="line-height: 1.5em;">base64</a><span style="line-height: 1.5em;"> do hash.</span></p>

<div class="note">
<p><strong>FYI:</strong> Esse processo, aparentemente complicado existe para que seja óbvio para o cliente se o servidor suporta ou não o WebSockets. Isso é importante por causa de problemas com segurança que aparecem se o servidor aceita a conexão WebSocket mas interpreta que os dados são uma requisição HTTP.</p>
</div>

<p>Então se a chave foi "<code>dGhlIHNhbXBsZSBub25jZQ==</code>", o cabeçalho <code>Sec-WebSocket-Accept</code> aceito será "<code>s3pPLMBiTxaQ9kYGzzhZRbK+xOo=</code>". Uma vez que o servidor envie estes cabeçalhos, o handshake esta completo e você pode começar a trocar dados!</p>

<div class="note">
<p>O servidor pode enviar outros cabeçalhos como Set-Cookie, ou perguntar por autenticação ou redirecionar via outros códigos de status, antes enviando  a resposta do handshake.</p>
</div>

<h3 id="Acompanhamento_dos_clientes">Acompanhamento dos clientes</h3>

<p>Isso não está diretamente relacionado ao protocolo de WebSocket, mas vale apena mencionar aqui: seu servidor terá que acompanhar os soquetes dos clientes para que você não tenho que fazer o handshake novamente com clientes que já concluiram o handshake. O mesmo endereço IP do cliente pode tentar se conectar varias vezes (mas o servidor pode negar se tentarem fazer muitas conexões em razão de se defender de <a href="https://pt.wikipedia.org/wiki/Ataque_de_negação_de_serviço">ataques de negação de serviço</a>).</p>

<h2 id="Trocando_Data_Frames">Trocando Data Frames</h2>

<p>Tanto o cliente quanto o servidor podem enviar mensagens a qualquer momento — essa é a mágia do WebSocket. Entretanto, extrair informações desses chamados "frames" de dados não é um experiencia tão magica assim. Apesar de todos os <em>frames </em>seguirem um mesmo formato, os dados do cliente são enviados criptografados para o servidor, usando <a href="https://en.wikipedia.org/wiki/XOR_cipher">criptografia XOR</a> (com uma chave de 32 bits). A <a href="http://tools.ietf.org/html/rfc6455#section-5">seção 5 da especificação</a> do <a href="https://datatracker.ietf.org/doc/rfc6455/">protocolo de WebSocket</a> descreve isso em detalhes.</p>

<h3 id="Formato">Formato</h3>

<p>Cada <em>data frame</em> (do cliente para o servidor ou vice-versa) segue o mesmo formato:</p>

<pre>Frame format:
​​
      0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
     |N|V|V|V|       |S|             |   (if payload len==126/127)   |
     | |1|2|3|       |K|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     Extended payload length continued, if payload len == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |Masking-key, if MASK set to 1  |
     +-------------------------------+-------------------------------+
     | Masking-key (continued)       |          Payload Data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     Payload Data continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     Payload Data continued ...                |
     +---------------------------------------------------------------+</pre>

<p>O bit de MASK simplesmente diz se a mensagem está codificada. Mensagens do cliente devem estar mascaradas, então seu servidor deve esperar que o valor de MASK seja 1. De fato, a <a href="http://tools.ietf.org/html/rfc6455#section-5.1">seção 5.1 da especificação</a> diz que seu servidor deve se desconectar de um cliente se este cliente enviar mensagens que não estão mascaradas. Quando enviando um <em>frame</em> para o cliente, não mascare a mensagem e não defina o bit MASK. Explicaremos o mascaramento mais tarde.</p>

<div class="blockIndicator note">
<p>Você tem que mascarar as mensagens mesmo quando usando secure socket (SSL).<br>
 Os campos RSV de 1 à 3 do cabeçalho podem ser ignorados, eles são para extenções.</p>
</div>

<p>O campo <code>opcode</code> define como interpretar o <code>payload data</code>: <kbd>0x0</kbd> para continuo, <kbd>0x1</kbd> para texto (que sempre está codificadao em UTF-8), <kbd>0x2</kbd> para binário, e outros conhecidos como "control codes" seram discutidos posteriormente. Nessa versão de WebSockets, <kbd>0x3</kbd>, a <kbd>0x7</kbd> e <kbd>0xB</kbd> a <kbd>0xF</kbd> tem o mesmo significado.</p>

<p>O bit FIN disso se é a ultima mensagem da serie. Se for <kbd>0</kbd>, então o servidor irá continuar esperando por mair partes da mensagem;  caso contrário, o servidor pode considerar a mensagem como enviada.</p>

<p>Se falará mais sobre isso depois.</p>

<h3 id="Decodificando_o_Payload_Length">Decodificando o Payload Length</h3>

<p>Para ler o <code>payload data</code>, você deve saber quando parar de ler. Por isso é importante saber o tamanho do payload (payload length). Infelizmente,  conseguir essa informação é de certa forma complicado. Para obte-lá, seguimos esses passos:</p>

<ol>
 <li>Ler os bits 9-15 (inclusivo) e interpretar como um unsigned integer. Se o valor for de 125 ou menor, esse é o tamanho; temos a resposta. Se o valor é igual a 126, então vai para o passo 2, ou se for 127, então vai para o passo 3.</li>
 <li>Ler os próximos 16 bits e interpretar como um unsined integer, esse é o tamanho; temos a resposta</li>
 <li>Ler os próximos 64 bits e interpretar como um unsigned integer (o bit mais significante DEVE ser 0), esse é o tamanho; temos a resposta.</li>
</ol>

<h3 id="Lendo_e_Desmascarando_o_Dado">Lendo e Desmascarando o Dado</h3>

<p>Se o bit <code>MASK</code> for definido (e deve estar, para mensagens cliente-para-servidor), leia os próximos 4 octetos (32 bits); isso é a chave da mascara. Uma vez que o <code>payload length</code> e o <code>masking key</code> são decodificados, você pode seguir em frente e ler o número de bytes do socket.</p>

<p>Vamos chamar os dados de <strong>ENCODED</strong>, e a chave de <strong>MASK</strong>.</p>

<p>Para conseguir o <strong>DECODED</strong>, faça um loop sobre os octetos de <strong>ENCODED</strong> e um XOR do (i módulo 4) ezimo octeto de <strong>MASK</strong>. Em pseudo-código (isso é para ser valida em JavaScript):</p>

<pre>var DECODED = "";
for (var i = 0; i &lt; ENCODED.length; i++) {
    DECODED[i] = ENCODED[i] ^ MASK[i % 4];
<span style="line-height: 1.5;">}</span></pre>

<p>Agora você pode descobrir o que DECODED significa, dependendo da sua aplicação.</p>

<h3 id="Fragmentação_de_Mensagens">Fragmentação de Mensagens</h3>

<p>Os campos <code>FIN</code> e <code>opcode</code> trabalham juntos para enviar uma mensagens quebradas em mais de um <em>frame</em>. Isso é chamado de fragmentação. Fragmentação está disponível apenas sobre <code>opcode</code> <kbd>0x0</kbd> a <kbd>0x2</kbd>.</p>

<p>Lembre que o <code>opcode</code> diz o que o <em>frame</em> deve fazer. Se for <kbd>0x1</kbd>, o payload um é texto. Se for <kbd>0x2</kbd>, o payload são dados binários. Entretanto, se for <kbd>0x0</kbd>, o <em>frame</em> é um<em>frame de continuação</em>. Isso significa que o servidor deve concatenar o <em>frame</em> de payload com o último frame recebido do cliente.</p>

<p>Aqui está um exemplo, de como o servidor reage a um cliente enviando uma mensagem de texto. A primeira mensagem é enviada em um frame unico, enquanto a segunda mensagem é enviada através de tres frames. Os detalhes de <code>FIN</code> e <code>opcode</code> são mostrados apenas para o cliente:</p>

<pre style="font-size: 14px;"><strong>Client:</strong> FIN=1, opcode=0x1, msg="hello"
<strong>Server:</strong> <em>(process complete message immediately) </em>Hi.
<strong>Client:</strong> FIN=0, opcode=0x1, msg="and a"
<strong>Server:</strong> <em>(listening, new message containing text started)</em>
<strong>Client:</strong> FIN=0, opcode=0x0, msg="happy new"
<strong>Server:</strong> <em>(listening, payload concatenated to previous message)</em>
<strong>Client:</strong> FIN=1, opcode=0x0, msg="year!"
<strong>Server:</strong> <em>(process complete message) </em>Happy new year to you too!</pre>

<p>Note que o primeiro <em>frame</em> que contém a mensagem inteira tem o <code>FIN igual a 1</code> e o <code>opcode igual a 0x1</code>, entao o servidor pode processar ou responder como achar melhor.<br>
 O segundo frame enviado pelo cliente é uma mensagem de texto com payload <code>opcode igual a 0x1</code>, mas a mensagem inteira ainda não chegou (<code>FIN=0</code>). Todos as partes restantes da mensagem são enviados em frames continuos (<code>opcode=0x0</code>), e o frame final da mensagem é marcado com <code>FIN=1</code>. <a href="http://tools.ietf.org/html/rfc6455#section-5.4">Seção 5.4 da especificação</a> descreve a fragmentação de mensagens.</p>

<h2 id="Pings_e_Pongs_O_Heartbeat_do_WebSockets">Pings e Pongs: O Heartbeat do WebSockets</h2>

<p>Em qualquer momento do handshake, tanto o cliente quanto o servidor podem enviar um ping para a outra parte. Quando o ping é rescebido, o destinatário deve responder com um pong assim que possível. Você pode usar isso para garantir que o cliente está conectado, por exemplo.</p>

<p>Um ping ou um pong é um frame comum, entretanto é usado para controle. Pings tem o valor de opcode <kbd>0x9</kbd>, enquanto que pongs tem o opcode <kbd>0xA</kbd>. Quando você recebe um ping, envia de volta um pong com o mesmo exato <code>payload data</code> do ping (para pings e pongs, o <code>payload length</code> máximo é 125). Você também pode ter um pong sem nunca receber um ping; ignore isso caso ocorra.</p>

<div class="blockIndicator note">
<p>Se você receber mais de um ping antes de ter a chance de enviar um pong, você envia apenas um pong.</p>
</div>

<h2 id="Fechando_a_conexão">Fechando a conexão</h2>

<p>Para fechar a conexão tanto cliente quanto servidor podem enviar um frame de controle com dados contendo a sequencia de controles especifica para iniciar o fim do handshake (detalhado na seção 5.5.1). Assim que receber esse tipo de frame, a outra parte envia um frame de fechamento em resposta. A primeira parte então fecha a conexão. Quais quer outros dados recebidos depois de fechar a conexão é descartado. </p>

<h2 id="Diversos"><a name="Miscellaneous">Diversos</a></h2>

<div class="note">
<p>Códigos WebSocket, extensões, subprotocols, etc. são registrados na <a href="http://www.iana.org/assignments/websocket/websocket.xml">IANA WebSocket Protocol Registry</a>.</p>
</div>

<p>As extensões e subprotocolos do WebSocket são negociados via headers durante the handshake. Algumas vezes extensões e subprotocolos paracem muito similares para serem coisas diferentes, mas eles tem claras distinções. Extensões controlam os <strong>frame</strong> do WebSocket e <strong>modificam</strong> o payload, enquanto os subprotocolos estruturam o <strong>payload</strong> do WebSocket e <strong>nunca modificam</strong> nada. Extensões são opcionais e generalizadas (como comporessam); subprotocolos são mandatórios e localizados (como os usados para chat e para jogos MMORPG).</p>

<h3 id="Extensões">Extensões</h3>

<div class="note">
<p><strong>Essa sessão precisa ser mais desenvolvida. Por favor edite se você tiver conhecimento sobre.</strong></p>
</div>

<p>Imagine um extensão que comprime um arquivo antes de ser enviado em um e-mail para alguem. Independente do que você faça, está enviando o <em>mesmo</em> dado de formas diferentes. O destinatário eventualmente terá os mesmos dados que a cópia local que você tem, mas foram enviadas de formas diferentes. Isso é o que extensões fazem. WebSockets definem um protocolo e um forma simples de envio de dados, mas uma extensão como um compressor pode enviar o mesmo dado em um formado menor.</p>

<div class="note">
<p>Extensões são explicadas nas sessões 5.8, 9, 11.3.2 e 11.4 da especificação.</p>
</div>

<h3 id="Subprotocols">Subprotocols</h3>

<p>Pense em um subprotocolo como um <a href="https://pt.wikipedia.org/wiki/XML">esquema XML</a> personalizado ou <a href="https://en.wikipedia.org/wiki/Document_Type_Definition">doctype declaration</a>. Você ainda está usando XML e sua sintaxe, mas também é restringido por uma estrutura em que concordou. Os subprotocolo WebSocket são exatamente assim. Eles não apresentam nada sofisticado, apenas estabelecem estrutura. Como um doctype ou esquema, ambas as partes devem concordar com o subprotocolo; diferente de um doctype ou esquema, o subprotocolo é implementado no servidor e não pode ser referenciado externamente pelo cliente.</p>

<div class="note">
<p>Subprotocolos são explicados nas sessões 1.9, 4.2, 11.3.4 e 11.5 da especificação.</p>
</div>

<p>Um cliente precisa solicitar um subprotocolo específico. Para fazer isso, ele enviará algo como isso <strong>como parte do handshake original</strong>:</p>

<pre>GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp

</pre>

<p>ou, equivalentemente:</p>

<pre>...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp

</pre>

<p>Agora, o servidor deve escolher um dos protocolos que o cliente sugeriu e suporta. Se houver mais de um, envie o primeiro que o cliente enviou. Imagine que nosso servidor possa usar <code>soap</code> e <code>wamp</code>. Em seguida, no handshake de resposta, ele enviará:</p>

<pre>Sec-WebSocket-Protocol: soap

</pre>

<div class="warning">
<p>O servidor não pode enviar mais de um cabeçalho <code>Sec-Websocket-Protocol</code>.<br>
 Se o servidor não quiser usar nenhum subprotocolo, <strong>ele não deverá enviar nenhum cabeçalho <code>Sec-WebSocket-Protocol</code></strong>. O envio de um cabeçalho em branco está incorreto.<br>
 O cliente pode fechar a conexão se não conseguir o subprotocolo desejado.</p>
</div>

<p>Se você deseja que seu servidor obedeça a certos subprotocolo, então naturalmente precisará de código extra no servidor. Vamos imaginar que estamos usando um subprotocolo <code>json</code>. Neste subprotocolo, todos os dados são transmitidos como JSON. Se o cliente solicitar esse protocolo e o servidor quiser usá-lo, o servidor precisará ter um analisador JSON. Na prática, isso fará parte de uma biblioteca, mas o servidor precisará transmitir os dados.</p>

<div class="note">
<p><strong>Tip:</strong> Para evitar o conflito de nomes, recomenda-se que o subprotocolo seja nomeado como parte da string do domínio. Se você está desenvolvendo um aplicativo de bate-papo personalizado que usa um formato proprietário exclusivo da Exemplo Inc., então você pode usar isso: <code>Sec-WebSocket-Protocol: chat.example.com</code>. Note que isso não é necessário, é apenas uma convenção opcional, e você pode usar qualquer string que desejar.</p>
</div>

<h2 id="Relacionado">Relacionado</h2>

<ul>
 <li><a href="https://github.com/alexhultman/libwshandshake">Biblioteca para o "<em>aperto de mão"</em> do WebSocket em C++</a></li>
 <li><a href="/en-US/docs/WebSockets/Writing_WebSocket_server" title="/en-US/docs/WebSockets/Writing_WebSocket_server">Tutorial: Servidor Websocket em C#</a></li>
 <li><a href="/en-US/docs/WebSockets/Writing_WebSocket_client_applications">Escrevendo aplicações WebSocket do cliente</a></li>
 <li><a href="/en-US/docs/WebSockets/WebSocket_Server_Vb.NET">Tutorial: Servidor Websocket em VB.NET</a></li>
 <li><a href="https://datatracker.ietf.org/doc/rfc6455/">Especificação do protocolo (RFC 6455)</a></li>
</ul>
