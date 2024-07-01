---
title: Escrevendo um servidor WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
---

Um servidor de WebSocket é uma aplicação TCP que escuta uma porta de um servidor que segue um protocolo específico, simples assim. A tarefa de criar um servidor personalizado costuma assustar as pessoas; no entanto, pode ser fácil implementar um simples servidor WebSocket na sua plataforma de escolha.

Um servidor WebSocket pode ser escrito em qualquer linguagem de programação server-side que é capaz de utilizar [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets), tais como C(++) , ou Python, ou mesmo o [PHP](/pt-BR/docs/PHP) e o [server-side JavaScript](/pt-BR/docs/Web/JavaScript/Server-Side_JavaScript). Esse não é um tutorial em uma linguagem de programação específica, mas serve como guia para facilitar a escrita do seu próprio servidor.

Você precisará saber como o HTTP funciona e ter uma experiência média com programação.

Dependendo do suporte da linguagem, pode ser necessário o conhecimento sobre soquetes TCP. O escopo deste guia é apresentar o conhecimento mínimo que você precisa para escrever um servidor WebSocket.

> **Nota:** Leia a útlima especificação sobre WebSockets, a [RFC 6455](http://datatracker.ietf.org/doc/rfc6455/?include_text=1). As seções 1 e 4-7 são especialmente interessantes para implementadores de servidores. A seção 10 discute assuntos sobre segurança que você definitivamente deveria examinar antes de expor seu servidor.

Um servidor de WebSocket é explicado de maneira bem simples aqui. Servidores de WebSocket geralmente são servidores separados e especializados (para balanceamento de carga ou outras razões práticas), então, geralmente você irá usar um proxy reverso (como um servidor HTTP comum) para detectar a solicitação de handshakes do WebSocket, pré-processá-los e enviar esses clientes para um servidor WebSocket real. Isso significa que você não precisa encher seu código com cookies e manipuladores de autenticação (por exemplo).

O _Handshake_ ("aperto de mão") do WebSocket

Primeiro de tudo, o servidor deve ouvir as conexões socket recebidas usando um socket TCP padrão. Dependendo da sua plataforma, isso pode já ter sido tratado previamente. Por exemplo, vamos assumir que seu servidor está ouvindo example.com, porta 8000, e seu servidor socket responde às requisições GET em `/chat`.

> **Aviso:** O servidor pode ouvir qualquer porta que escolher, mas se escolher qualquer porta diferente de 80 e 443, podem ocorrer problemas relacionados aos firewalls e/ou proxies. Conexões na porta 443 tendem a ter mais sucesso com mais frequência, isso requer uma conexão segura (TLS/SSL). Também, note que a maioria dos browsers (notavelmente o Firefox 8+) não permite conexões de servidores WebSocket de páginas seguras.

O handshake é a "Web" no WebSockets. É a ponte do HTTP para o Websocket. No handshake, detalhes da conexão são negociados, e qualquer uma das partes pode voltar antes da conclusão se os termos são desfavoráveis. O servidor deve ser cuidadoso para entender tudo que o cliente perguntar, caso contrário, serão introduzidas questões de segurança.

### Requisição Handshake do Cliente

Mesmo que você esteja construindo um servidor, um cliente ainda precisa iniciar o processo de handshake do WebSocket. Então você deve saber como interpretar a requisição do cliente. O cliente vai enviar uma requisição HTTP padrão que é parecida com isso (a versão do HTTP **deve** ser 1.1 ou maior, e o método **deve** ser um `GET`):

```
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

O cliente pode solicitar extensões e/ou subprotocolos aqui; veja [Miscellaneous](#Miscellaneous) para mais detalhes. Também, cabeçalhos comuns como `User-Agent`, `Referer`, `Cookie`, ou cabeçalhos de autenticação poderiam estar bem aqui. Faça o que você quiser com eles; eles não pertencem diretamente ao WebSocket. Também é seguro ignora-los. Em muitas configurações comuns, um proxy reverso ja tratou deles.

Se qualquer cabeçalho não foi entendido ou conter um valor incorreto, o servidor deve enviar um erro "[400 Bad Request](/pt-BR/docs/HTTP/Response_codes#400)" e fechar o socket imediatamente. É comum, também dar a razão pelo qual o handshake falhou no body da resposta do HTTP, mas muitas mensages nunca serão mostradas (os browsers não mostram isso). Se o servidor não reconhecer a versão do WebSockets, deve enviar um cabeçalho `Sec-WebSocket-Version` que contenha a(s) versão(versões) que o mesmo entenda. (Esse guia explica o v13, o mais novo). Agora, vamos continuar para o cabeçalho mais curioso, o `Sec-WebSocket-Key`.

> **Nota:** **Dica:** Todos os browsers vão enviar um [`Origin` header](/pt-BR/docs/HTTP/Access_control_CORS#Origin). Você pode usar esse cabeçalho por segurança (verifique pelo de mesma origem, whitelisting/ blacklisting, etc.) e envie uma [403 Forbidden](/pt-BR/docs/HTTP/Response_codes#403) se você não gostou do que viu. Sobretanto, fique ciente que os agentes non-browser podem apenas enviar uma falsa `Origin`. Muitas aplicações vão rejeitar requisições sem cabeçalho.

> **Nota:** **Dica:** A request-uri (`/chat` aqui) não tem significado definido na especificação. Muitas pessoas utilizam habilmente para que servidores lidem com muiltíplas aplicações WebSocket. Por exemplo, `example.com/chat` deve invocar um app de chat com multiplos usuários, enquanto `/game` no mesmo servidor poderia invocar um jogo multiplayer.

> **Nota:** [Regular HTTP status codes](/pt-BR/docs/HTTP/Response_codes) podem apenas ser usados antes do handshake. Depois que o handshake sucede, você deve usar um conjunto de códigos diferentes (definidos na seção 7.4 da especificação).

### Resposta Handshake do Servidor

Quanto o servidor receber a requisição de handshake, ele deve enviar um resposta especifica (odd-looking) que indica que o protocolo está sendo alterado de HTTP para WebSocket. Essa resposta se parece com isso (lembre-se cada final do cabeçalho com `\r\n` e coloque um `\r\n` extra depois do último):

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Adicionalmente, o servidor pode decidir sobre os pedidos de extensão/subprotocolo aqui; veja [Miscellaneous](#Miscellaneous) para mais detalhes. O `Sec-WebSocket-Accept` é uma parte interessante. O servidor deve deriva-lo do `Sec-WebSocket-Key` que o cliente enviou. Para obte-lo, concatene o `Sec-WebSocket-Key` do cliente e a string "`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`" juntos (isso é uma "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), pegue o [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1) do resultado, e retorne o codigo [base64](https://en.wikipedia.org/wiki/Base64) do hash.

> **Nota:** **FYI:** Esse processo, aparentemente complicado existe para que seja óbvio para o cliente se o servidor suporta ou não o WebSockets. Isso é importante por causa de problemas com segurança que aparecem se o servidor aceita a conexão WebSocket mas interpreta que os dados são uma requisição HTTP.

Então se a chave foi "`dGhlIHNhbXBsZSBub25jZQ==`", o cabeçalho `Sec-WebSocket-Accept` aceito será "`s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`". Uma vez que o servidor envie estes cabeçalhos, o handshake esta completo e você pode começar a trocar dados!

> **Nota:** O servidor pode enviar outros cabeçalhos como Set-Cookie, ou perguntar por autenticação ou redirecionar via outros códigos de status, antes enviando a resposta do handshake.

### Acompanhamento dos clientes

Isso não está diretamente relacionado ao protocolo de WebSocket, mas vale apena mencionar aqui: seu servidor terá que acompanhar os soquetes dos clientes para que você não tenho que fazer o handshake novamente com clientes que já concluiram o handshake. O mesmo endereço IP do cliente pode tentar se conectar varias vezes (mas o servidor pode negar se tentarem fazer muitas conexões em razão de se defender de [ataques de negação de serviço](https://pt.wikipedia.org/wiki/Ataque_de_negação_de_serviço)).

## Trocando Data Frames

Tanto o cliente quanto o servidor podem enviar mensagens a qualquer momento — essa é a mágia do WebSocket. Entretanto, extrair informações desses chamados "frames" de dados não é um experiencia tão magica assim. Apesar de todos os _frames_ seguirem um mesmo formato, os dados do cliente são enviados criptografados para o servidor, usando [criptografia XOR](https://en.wikipedia.org/wiki/XOR_cipher) (com uma chave de 32 bits). A [seção 5 da especificação](http://tools.ietf.org/html/rfc6455#section-5) do [protocolo de WebSocket](https://datatracker.ietf.org/doc/rfc6455/) descreve isso em detalhes.

### Formato

Cada _data frame_ (do cliente para o servidor ou vice-versa) segue o mesmo formato:

```
Frame format:

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
     +---------------------------------------------------------------+
```

O bit de MASK simplesmente diz se a mensagem está codificada. Mensagens do cliente devem estar mascaradas, então seu servidor deve esperar que o valor de MASK seja 1. De fato, a [seção 5.1 da especificação](http://tools.ietf.org/html/rfc6455#section-5.1) diz que seu servidor deve se desconectar de um cliente se este cliente enviar mensagens que não estão mascaradas. Quando enviando um _frame_ para o cliente, não mascare a mensagem e não defina o bit MASK. Explicaremos o mascaramento mais tarde.

> **Nota:** Você tem que mascarar as mensagens mesmo quando usando secure socket (SSL).
> Os campos RSV de 1 à 3 do cabeçalho podem ser ignorados, eles são para extenções.

O campo `opcode` define como interpretar o `payload data`: <kbd>0x0</kbd> para continuo, <kbd>0x1</kbd> para texto (que sempre está codificadao em UTF-8), <kbd>0x2</kbd> para binário, e outros conhecidos como "control codes" seram discutidos posteriormente. Nessa versão de WebSockets, <kbd>0x3</kbd>, a <kbd>0x7</kbd> e <kbd>0xB</kbd> a <kbd>0xF</kbd> tem o mesmo significado.

O bit FIN disso se é a ultima mensagem da serie. Se for <kbd>0</kbd>, então o servidor irá continuar esperando por mair partes da mensagem; caso contrário, o servidor pode considerar a mensagem como enviada.

Se falará mais sobre isso depois.

### Decodificando o Payload Length

Para ler o `payload data`, você deve saber quando parar de ler. Por isso é importante saber o tamanho do payload (payload length). Infelizmente, conseguir essa informação é de certa forma complicado. Para obte-lá, seguimos esses passos:

1. Ler os bits 9-15 (inclusivo) e interpretar como um unsigned integer. Se o valor for de 125 ou menor, esse é o tamanho; temos a resposta. Se o valor é igual a 126, então vai para o passo 2, ou se for 127, então vai para o passo 3.
2. Ler os próximos 16 bits e interpretar como um unsined integer, esse é o tamanho; temos a resposta
3. Ler os próximos 64 bits e interpretar como um unsigned integer (o bit mais significante DEVE ser 0), esse é o tamanho; temos a resposta.

### Lendo e Desmascarando o Dado

Se o bit `MASK` for definido (e deve estar, para mensagens cliente-para-servidor), leia os próximos 4 octetos (32 bits); isso é a chave da mascara. Uma vez que o `payload length` e o `masking key` são decodificados, você pode seguir em frente e ler o número de bytes do socket.

Vamos chamar os dados de **ENCODED**, e a chave de **MASK**.

Para conseguir o **DECODED**, faça um loop sobre os octetos de **ENCODED** e um XOR do (i módulo 4) ezimo octeto de **MASK**. Em pseudo-código (isso é para ser valida em JavaScript):

```
var DECODED = "";
for (var i = 0; i < ENCODED.length; i++) {
    DECODED[i] = ENCODED[i] ^ MASK[i % 4];
}
```

Agora você pode descobrir o que DECODED significa, dependendo da sua aplicação.

### Fragmentação de Mensagens

Os campos `FIN` e `opcode` trabalham juntos para enviar uma mensagens quebradas em mais de um _frame_. Isso é chamado de fragmentação. Fragmentação está disponível apenas sobre `opcode` <kbd>0x0</kbd> a <kbd>0x2</kbd>.

Lembre que o `opcode` diz o que o _frame_ deve fazer. Se for <kbd>0x1</kbd>, o payload um é texto. Se for <kbd>0x2</kbd>, o payload são dados binários. Entretanto, se for <kbd>0x0</kbd>, o _frame_ é um*frame de continuação*. Isso significa que o servidor deve concatenar o _frame_ de payload com o último frame recebido do cliente.

Aqui está um exemplo, de como o servidor reage a um cliente enviando uma mensagem de texto. A primeira mensagem é enviada em um frame unico, enquanto a segunda mensagem é enviada através de tres frames. Os detalhes de `FIN` e `opcode` são mostrados apenas para o cliente:

```
Client: FIN=1, opcode=0x1, msg="hello"
Server: (process complete message immediately) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (process complete message) Happy new year to you too!
```

Note que o primeiro _frame_ que contém a mensagem inteira tem o `FIN igual a 1` e o `opcode igual a 0x1`, entao o servidor pode processar ou responder como achar melhor.
O segundo frame enviado pelo cliente é uma mensagem de texto com payload `opcode igual a 0x1`, mas a mensagem inteira ainda não chegou (`FIN=0`). Todos as partes restantes da mensagem são enviados em frames continuos (`opcode=0x0`), e o frame final da mensagem é marcado com `FIN=1`. [Seção 5.4 da especificação](http://tools.ietf.org/html/rfc6455#section-5.4) descreve a fragmentação de mensagens.

## Pings e Pongs: O Heartbeat do WebSockets

Em qualquer momento do handshake, tanto o cliente quanto o servidor podem enviar um ping para a outra parte. Quando o ping é rescebido, o destinatário deve responder com um pong assim que possível. Você pode usar isso para garantir que o cliente está conectado, por exemplo.

Um ping ou um pong é um frame comum, entretanto é usado para controle. Pings tem o valor de opcode <kbd>0x9</kbd>, enquanto que pongs tem o opcode <kbd>0xA</kbd>. Quando você recebe um ping, envia de volta um pong com o mesmo exato `payload data` do ping (para pings e pongs, o `payload length` máximo é 125). Você também pode ter um pong sem nunca receber um ping; ignore isso caso ocorra.

> **Nota:** Se você receber mais de um ping antes de ter a chance de enviar um pong, você envia apenas um pong.

## Fechando a conexão

Para fechar a conexão tanto cliente quanto servidor podem enviar um frame de controle com dados contendo a sequencia de controles especifica para iniciar o fim do handshake (detalhado na seção 5.5.1). Assim que receber esse tipo de frame, a outra parte envia um frame de fechamento em resposta. A primeira parte então fecha a conexão. Quais quer outros dados recebidos depois de fechar a conexão é descartado.

## Diversos

> **Nota:** Códigos WebSocket, extensões, subprotocols, etc. são registrados na [IANA WebSocket Protocol Registry](http://www.iana.org/assignments/websocket/websocket.xml).

As extensões e subprotocolos do WebSocket são negociados via headers durante the handshake. Algumas vezes extensões e subprotocolos paracem muito similares para serem coisas diferentes, mas eles tem claras distinções. Extensões controlam os **frame** do WebSocket e **modificam** o payload, enquanto os subprotocolos estruturam o **payload** do WebSocket e **nunca modificam** nada. Extensões são opcionais e generalizadas (como comporessam); subprotocolos são mandatórios e localizados (como os usados para chat e para jogos MMORPG).

### Extensões

> **Nota:** **Essa sessão precisa ser mais desenvolvida. Por favor edite se você tiver conhecimento sobre.**

Imagine um extensão que comprime um arquivo antes de ser enviado em um e-mail para alguem. Independente do que você faça, está enviando o _mesmo_ dado de formas diferentes. O destinatário eventualmente terá os mesmos dados que a cópia local que você tem, mas foram enviadas de formas diferentes. Isso é o que extensões fazem. WebSockets definem um protocolo e um forma simples de envio de dados, mas uma extensão como um compressor pode enviar o mesmo dado em um formado menor.

> **Nota:** Extensões são explicadas nas sessões 5.8, 9, 11.3.2 e 11.4 da especificação.

### Subprotocols

Pense em um subprotocolo como um [esquema XML](https://pt.wikipedia.org/wiki/XML) personalizado ou [doctype declaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Você ainda está usando XML e sua sintaxe, mas também é restringido por uma estrutura em que concordou. Os subprotocolo WebSocket são exatamente assim. Eles não apresentam nada sofisticado, apenas estabelecem estrutura. Como um doctype ou esquema, ambas as partes devem concordar com o subprotocolo; diferente de um doctype ou esquema, o subprotocolo é implementado no servidor e não pode ser referenciado externamente pelo cliente.

> **Nota:** Subprotocolos são explicados nas sessões 1.9, 4.2, 11.3.4 e 11.5 da especificação.

Um cliente precisa solicitar um subprotocolo específico. Para fazer isso, ele enviará algo como isso **como parte do handshake original**:

```
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

ou, equivalentemente:

```
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Agora, o servidor deve escolher um dos protocolos que o cliente sugeriu e suporta. Se houver mais de um, envie o primeiro que o cliente enviou. Imagine que nosso servidor possa usar `soap` e `wamp`. Em seguida, no handshake de resposta, ele enviará:

```
Sec-WebSocket-Protocol: soap
```

> **Aviso:** O servidor não pode enviar mais de um cabeçalho `Sec-Websocket-Protocol`.
> Se o servidor não quiser usar nenhum subprotocolo, **ele não deverá enviar nenhum cabeçalho `Sec-WebSocket-Protocol`**. O envio de um cabeçalho em branco está incorreto.
> O cliente pode fechar a conexão se não conseguir o subprotocolo desejado.

Se você deseja que seu servidor obedeça a certos subprotocolo, então naturalmente precisará de código extra no servidor. Vamos imaginar que estamos usando um subprotocolo `json`. Neste subprotocolo, todos os dados são transmitidos como JSON. Se o cliente solicitar esse protocolo e o servidor quiser usá-lo, o servidor precisará ter um analisador JSON. Na prática, isso fará parte de uma biblioteca, mas o servidor precisará transmitir os dados.

> **Nota:** **Tip:** Para evitar o conflito de nomes, recomenda-se que o subprotocolo seja nomeado como parte da string do domínio. Se você está desenvolvendo um aplicativo de bate-papo personalizado que usa um formato proprietário exclusivo da Exemplo Inc., então você pode usar isso: `Sec-WebSocket-Protocol: chat.example.com`. Note que isso não é necessário, é apenas uma convenção opcional, e você pode usar qualquer string que desejar.

## Relacionado

- [Biblioteca para o "_aperto de mão"_ do WebSocket em C++](https://github.com/alexhultman/libwshandshake)
- [Tutorial: Servidor Websocket em C#](/pt-BR/docs/WebSockets/Writing_WebSocket_server)
- [Escrevendo aplicações WebSocket do cliente](/pt-BR/docs/WebSockets/Writing_WebSocket_client_applications)
- [Tutorial: Servidor Websocket em VB.NET](/pt-BR/docs/WebSockets/WebSocket_Server_Vb.NET)
- [Especificação do protocolo (RFC 6455)](https://datatracker.ietf.org/doc/rfc6455/)
