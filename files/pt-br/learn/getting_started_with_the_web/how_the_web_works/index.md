---
title: Como a Web funciona
slug: Learn/Getting_started_with_the_web/How_the_Web_works
---

{{LearnSidebar}}

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

_Como a Web funciona_ oferece uma visão simplificada do que acontece quando você vê uma página em um navegador, no seu computador ou telefone.

Essa teoria não é essencial para escrever códigos em curto prazo, mas em pouco tempo você vai se beneficiar ao entender o que está acontecendo em segundo plano.

## Clientes e servidores

Computadores conectados à web são chamados **clientes** e **servidores**. Um diagrama simplificado de como eles interagem pode ter essa aparência:

![Two circles representing client and server. An arrow labelled request is going from client to server, and an arrow labelled responses is going from server to client](simple-client-server.png)

- Clientes são os típicos dispositivos conectados à internet dos usuários da web (por exemplo, seu computador conectado ao seu Wi-Fi ou seu telefone conectado à sua rede móvel) e programas de acesso à Web disponíveis nesses dispositivos (geralmente um navegador como Firefox ou Chrome).
- Servidores são computadores que armazenam páginas, sites ou aplicativos. Quando o dispositivo de um cliente quer acessar uma página, uma cópia dela é baixada do servidor para a máquina do cliente para ser apresentada no navegador web do usuário.

## As outras partes da caixa de ferramentas

O cliente e o servidor que descrevemos acima não contam toda a história. Existem muitas outras partes envolvidas, e vamos descrevê-las abaixo.

Por enquanto, vamos imaginar que a web é uma estrada. Em um extremo da estrada, temos o cliente, que é como sua casa. No extremo oposto, temos o servidor, que é como uma loja onde você quer comprar algo.

![](road.jpg)

Além do cliente e do servidor, também precisamos dizer oi para:

- **Sua conexão de Internet**: permite que você mande e receba dados na web. É basicamente como a rua entre sua casa e a loja.
- **TCP/IP**: Protocolo de Controle de Transmissão e Protocolo de Internet (_Transmission Control Protocol_ e _Internet Protocol_) são protocolos de comunicação que definem como os dados trafegam pela web. São como os mecanismos de transporte que te permitem ir ao shopping, fazer um pedido e comprar seus produtos. Em nosso exemplo, é como um carro ou uma bicicleta (ou qualquer outra coisa que você possa usar).
- **DNS**: Servidor de Nome de Domínio (_Domain Name Servers_) são como um catálogo de endereços para sites. Quando você digita um endereço web no seu navegador, o navegador procura no servidor de DNS para localizar o endereço real do site, antes que ele possa recuperar o site. O navegador precisa encontrar em qual servidor web a página está hospedada para que ele possa mandar mensagens HTTP ao lugar certo (veja abaixo). Isso é como pesquisar o endereço da loja para que você possa entrar em contato.
- **HTTP**: Protocolo de Transferência de Hypertexto (_Hypertext Transfer Protocol_) é um {{Glossary("Protocol" , "protocolo de aplicação")}} que define uma linguagem para clientes e servidores se comunicarem entre si. É como a linguagem que você usa para encomendar seus produtos.
- **Arquivos componentes**: um website é feito de muitos arquivos diferentes, que são como as diferentes partes dos produtos que você comprou na loja. Esses arquivos são divididos em dois tipos principais:

  - **Arquivos de Código**: os sites são feitos principalmente de HTML, CSS e JavaScript, embora você possa conhecer outras tecnologias mais tarde.
  - **Recursos**: esse é o nome coletivo para todas as outras coisas que compõem um site, como imagens, música, vídeos, documentos do Word e PDFs.

## Então, o que acontece, exatamente?

Quando você digita um endereço da web no seu navegador (pela nossa analogia é como ir andando até a loja):

1. O navegador vai para o servidor de DNS e encontra o endereço verdadeiro de onde o site está hospedado (você encontra o endereço da loja).
2. O navegador manda uma mensagem de requisição HTTP para o servidor, pedindo que envie uma cópia do site ao cliente (você vai até a loja e pede suas mercadorias). Esta mensagem e todos os outros dados enviados entre o cliente e o servidor são enviados pela sua conexão à internet usando TCP/IP.
3. Se o servidor aprovar a requisição do cliente, o servidor enviará ao cliente uma mensagem "200 OK", que significa "Claro que você pode ver esse site! Aqui está" e então começa a enviar os arquivos do site para o navegador como uma série de pequenos pedaços chamados pacotes de dados (a loja dá a você as suas mercadorias e você as traz para sua casa).
4. O navegador monta os pequenos pedaços em um site completo e o mostra a você (as mercadorias chegam à sua porta — novas coisas brilhantes e incríveis!).

## DNS explicado

Endereços web verdadeiros não são sequências de textos boas e fáceis de lembrar que você digita na sua barra de endereços para encontrar seus sites favoritos. Eles são números especiais que se parecem com isso: `63.245.215.20`.

Isso é chamado {{Glossary("IP Address", "endereço IP")}} e representa um local único na web. No entanto, não é muito fácil de lembrar, é? É por isso que o Servidor de Nome de Domínio foi inventado. Esses são servidores especiais que relacionam o endereço da web que você digita no seu navegador (como "mozilla.org") com o endereço real do site (IP).

Sites podem ser acessados diretamente pelo seu endereço IP. Você pode encontrar o endereço IP de um site, digitando seu domínio em uma ferramenta como o [DNS lookup](https://www.nslookup.io/website-to-ip-lookup/).

## Pacotes explicados

Anteriormente, usamos o termo "pacotes" para descrever o formato no qual os dados são enviados do servidor para o cliente. O que nós queremos dizer? Basicamente, quando os dados são enviados pela web, eles são enviados como milhares de pequenos blocos, para que muitos usuários diferentes possam baixar o mesmo site ao mesmo tempo. Se os websites fossem enviados como um grande bloco, somente um usuário por vez poderia baixá-los, o que, obviamente, tornaria a web muito ineficiente e não muito divertida de usar.

## Veja também

- [Como a Internet funciona](/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona)
- [HTTP — uma Aplicação a Nível de Protocolo](https://dev.opera.com/articles/http-basic-introduction/)
- [HTTP: Vamos Começar!](https://dev.opera.com/articles/http-lets-get-it-on/)
- [HTTP: Códigos de resposta](https://dev.opera.com/articles/http-response-codes/)

## Créditos

Foto da rua: [Street composing](https://www.flickr.com/photos/kdigga/9110990882/in/photolist-cXrKFs-c1j6hQ-mKrPUT-oRTUK4-7jSQQq-eT7daG-cZEZrh-5xT9L6-bUnkip-9jAbvr-5hVkHn-pMfobT-dm8JuZ-gjwYYM-pREaSM-822JRW-5hhMf9-9RVQNn-bnDMSZ-pL2z3y-k7FRM4-pzd8Y7-822upY-8bFN4Y-kedD87-pzaATg-nrF8ft-5anP2x-mpVky9-ceKc9W-dG75mD-pY62sp-gZmXVZ-7vVJL9-h7r9AQ-gagPYh-jvo5aM-J32rC-ibP2zY-a4JBcH-ndxM5Y-iFHsde-dtJ15p-8nYRgp-93uCB1-o6N5Bh-nBPUny-dNJ66P-9XWmVP-efXhxJ), por [Kevin D](https://www.flickr.com/photos/kdigga/).

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
