---
title: Mensagens HTTP
slug: Web/HTTP/Messages
tags:
  - Guía
  - HTTP
  - Protocolos
translation_of: Web/HTTP/Messages
original_slug: Web/HTTP/Mensagens
---
<div>{{HTTPSidebar}}</div>

<p class="summary">Dados são trocados entre servidor e cliente por meio de mensagens HTTP. Há dois tipos de mensagens: <em>requisições </em>(requests) enviadas pelo cliente para disparar uma ação no servidor, e <em>respostas</em> (responses), a réplica do servidor.</p>

<p>Mensagens HTTP são compostas de informação textual codificada em ASCII, e se espalham por multiplas linhas. Em HTTP/1.1, e versões anteriores do protocolo, estas mensagens eram abertamente enviadas através da conexão. Em HTTP/2, a mensagem antes legível por humanos é agora dividida em quadros HTTP, resultando em otimização e melhora de desempenho.</p>

<p>Desenvolvedores Web, ou webmasters, raramente lidam com essas mensagens textuais diretamente: um programa, um navegador, um proxy, ou um servidor Web, executam essa ação. Eles proveem mensagens HTTP por meio de arquivos de configuração (para  proxys ou servidores), APIs (para navegadores) ou outras interfaces.</p>

<p><img alt="From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent." src="https://mdn.mozillademos.org/files/13825/HTTPMsg2.png" style="height: 538px; width: 1174px;"></p>

<p>O mecanismo de enquadramento binário foi projetado de modo a não requerer qualquer alteração das APIs ou arquivos de configuração aplicados: ele é transparente para o usuário.</p>

<p>Requisições e respostas HTTP compartilham estrutura similar e são compostas de:</p>

<ol>
 <li>Uma <em>linha inicial</em> (<em>start-line)</em> que descreve as requisições a serem implementadas, ou seu status de sucesso ou falha. Esta linha inicial é sempre uma única.</li>
 <li>Um conjunto opcional de cabeçalhos HTTP especificando a requisição, ou descrevendo o corpo incluso na mensagem.</li>
 <li>Uma linha em branco (<em>empty line</em>) indicando que toda meta-informação para a requisição já foi enviada.</li>
 <li>Um <em>corpo</em> (<em>body</em>) contendo dados associados à requisição (como o conteúdo de um formulário HTML), ou o documento associado à resposta. A presença do corpo e seu tamanho são especificados pela linha inicial e os cabeçalhos HTTP.</li>
</ol>

<p>A linha inicial e os cabeçalhos HTTP da mensagem HTTP são conjuntamente chamados de <em>cabeça </em>(<em>head</em>) da requisição, enquanto o que ela carrega, a sua carga, é conhecida como corpo.</p>

<p><img alt="Requests and responses share a common structure in HTTP" src="https://mdn.mozillademos.org/files/13827/HTTPMsgStructure2.png" style="height: 368px; width: 1239px;"></p>

<h2 id="Requisições_HTTP">Requisições HTTP</h2>

<h3 id="Linha_inicial">Linha inicial</h3>

<p>Requisições HTTP são mensagens enviadas pelo cliente para iniciar uma ação no servidor. Suas linhas iniciais contêm três elementos:</p>

<ol>
 <li>Um <em><a href="/en-US/docs/Web/HTTP/Methods">método HTTP</a></em>, um verbo (como {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} ou {{HTTPMethod("POST")}}) ou um nome (como {{HTTPMethod("HEAD")}} ou {{HTTPMethod("OPTIONS")}}), que descrevem a ação a ser executada. Por exemplo, <code>GET</code> indica que um recurso deve ser obtido ou <code>POST</code> significa que dados são inseridos no servidor (criando ou modificando um recurso, ou gerando um documento temporário para mandar de volta).</li>
 <li>O <em>alvo da requisição</em>, normalmente um {{glossary("URL")}}, ou o caminho absoluto do protocolo, porta e domínio são em geral caracterizados pelo contexto da requisição. O formato deste alvo varia conforme o método HTTP. Pode ser
  <ul>
   <li>Um caminho absoluto, seguido de um <code>'?'</code> e o texto da consulta. Esta é a forma mais comum, conhecida como a <em>forma original</em>, e é usada com os métodos <code>GET</code>, <code>POST</code>, <code>HEAD</code>, e <code>OPTIONS</code>.<br>
    <code>POST / HTTP/1.1<br>
    GET /background.png HTTP/1.0<br>
    HEAD /test.html?query=alibaba HTTP/1.1<br>
    OPTIONS /anypage.html HTTP/1.0</code></li>
   <li>Uma URL completa, conhecida como a <em>forma absoluta</em>, usada principalmente com <code>GET</code> quando conectado a um proxy.<br>
    <code>GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1</code></li>
   <li>O componente autoridade de um URL, que consiste no nome do domínio e opcionalmente uma porta (prefixada por <code>':'</code>), chamada de <em>forma autoridade</em>. Só usada com <code>CONNECT</code> ao estabelecer um túnel HTTP.<br>
    <code>CONNECT developer.mozilla.org:80 HTTP/1.1</code></li>
   <li>A  <em>forma asterisco</em>, um simples asterisco (<code>'*'</code>), usada com <code>OPTIONS</code>. Representa o servidor como um todo.<br>
    <code>OPTIONS * HTTP/1.1</code></li>
  </ul>
 </li>
 <li>A  <em>versão HTTP</em>, que define a estrutura do restante da mensagem, atuando como um indicador da versão esperada para uso na resposta.</li>
</ol>

<h3 id="Cabeçalhos">Cabeçalhos</h3>

<p><a href="/en-US/docs/Web/HTTP/Headers">Cabeçalhos HTTP</a> de uma requisição seguem a mesma estrutura básica de um cabeçalho HTTP: uma cadeia de caracteres insensível à caixa seguida de dois pontos (<code>':'</code>) e um valor cuja estrutura depende do cabeçalho. O cabeçalho inteiro, incluindo o valor, consiste em uma única linha, que pode ser bem grande.</p>

<p>Há numerosos cabeçalhos de requisição disponíveis. Eles podem ser divididos em vários grupos:</p>

<ul>
 <li><em>Cabeçalhos gerais</em>, como {{HTTPHeader("Via")}},  se aplicam à mensagem como um todo.</li>
 <li><em>Cabeçalhos de requisição</em>, como {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Accept-Type")}}, modificam a requisição, especificando-a mais (como {{HTTPHeader("Accept-Language")}}), dando-a contexto (como {{HTTPHeader("Referer")}}), ou restringindo-a condicionalmente (como {{HTTPHeader("If-None")}}).</li>
 <li><em>Cabeçalhos de entidade</em>, como {{HTTPHeader("Content-Length")}} que se aplicam ao corpo da mensagem. Obviamente este cabeçalho não será transmitido se não houver corpo na requisição.</li>
</ul>

<p><img alt="Example of headers in an HTTP request" src="https://mdn.mozillademos.org/files/13821/HTTP_Request_Headers2.png" style="height: 280px; width: 872px;"></p>

<h3 id="Corpo">Corpo</h3>

<p>A parte final da requisição é o corpo. Nem todas as requisições tem um: as que pegam recursos, como <code>GET</code>, <code>HEAD</code>, DELETE, ou OPTIONS, usualmente não precisam de um. Algumas requisições enviam dados ao servidor a fim de atualizá-lo: é o caso frequente de requisições <code>POST</code> (contendo dados de formulário HTML).</p>

<p>Corpos podem ser divididos, a grosso modo, em duas categorias:</p>

<ul>
 <li>Corpos de recurso-simples, consistindo em um único arquivo, definido pelos dois cabeçalhos: {{HTTPHeader("Content-Type")}} e {{HTTPHeader("Content-Length")}}.</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">Corpos de recurso-múltiplo</a>, consistindo em um corpo de múltiplas partes, cada uma contendo uma porção diferente de informação. Este é tipicamente associado à <a href="/en-US/docs/Web/Guide/HTML/Forms">Formulários HTML</a>.</li>
</ul>

<h2 id="Respostas_HTTP">Respostas HTTP</h2>

<h3 id="Linha_de_status">Linha de status</h3>

<p>A linha inicial de uma resposta HTTP, chamada de <em>linha de status</em>, contém a seguinte informação:</p>

<ol>
 <li>A versão do <em>protocolo</em>, normalmente <code>HTTP/1.1</code>.</li>
 <li>Um <em>código de status</em>, indicando o sucesso ou falha da requisição. Códigos de status comuns são {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, ou {{HTTPStatus("302")}}</li>
 <li>Um texto de status. Uma descrição textual breve, puramente informativa, do código de status a fim de auxiliar o entendimento da mensagem HTTP por humanos.</li>
</ol>

<p>Uma linha de status típica se parece com: <code>HTTP/1.1 404 Not Found.</code></p>

<h3 id="Cabeçalhos_2">Cabeçalhos</h3>

<p><a href="/en-US/docs/Web/HTTP/Headers">Cabeçalhos HTTP</a> para respostas seguem a mesma estrutura de qualquer outro cabeçalho: uma cadeia de caracteres insensível à caixa seguida de dois pontos (<code>':'</code>) e um valor cuja estrutura depende do tipo de cabeçalho. O cabeçalho inteiro, incluindo o valor, consiste em uma única linha.</p>

<p>Há numerosos cabeçalhos de resposta disponíveis. Eles podem ser divididos em vários grupos:</p>

<ul>
 <li><em>Cabeçalhos gerais</em>, como {{HTTPHeader("Via")}}, aplicam-se à toda mensagem.</li>
 <li><em>Cabeçalhos de resposta</em>, como {{HTTPHeader("Vary")}} e {{HTTPHeader("Accept-Ranges")}}, dão informação adicional sobre o servidor, que não cabe na linha de status.</li>
 <li><em>Cabeçalhos de entidade</em>, como {{HTTPHeader("Content-Length")}}, aplicam-se ao corpo da resposta. Obviamente este cabeçalho não será transmitido se não houver corpo na resposta.</li>
</ul>

<p><img alt="Example of headers in an HTTP response" src="https://mdn.mozillademos.org/files/13823/HTTP_Response_Headers2.png" style="height: 344px; width: 805px;"></p>

<h3 id="Corpo_2">Corpo</h3>

<p>A última parte de uma resposta é o corpo. Nem toda resposta tem um: aquelas com código de status {{HTTPStatus("201")}} ou {{HTTPStatus("204")}} normalmente não tem.</p>

<p>Corpos podem ser divididos, a grosso modo, em três categorias:</p>

<ul>
 <li>Corpos de recurso simples que consistem em um único arquivo de tamanho conhecido, definido pelos dois cabeçalhos: {{HTTPHeader("Content-Type")}} e {{HTTPHeader("Content-Length")}}.</li>
 <li>Corpos de recurso simples que consistem em um único arquivo de tamanho desconhecido, codificado aos pedaços com {{HTTPHeader("Transfer-Encoding")}} ajustado para <code>chunked</code>.</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">Corpos de recurso múltiplo</a>, que consiste em um corpo com múltiplas partes, cada uma contendo diferentes seções de informação. Estes são relativamente raros.</li>
</ul>

<h2 id="Quadros_HTTP2">Quadros HTTP/2</h2>

<p>Mensagens HTTP/1.x têm algumas desvantagens quanto ao desempenho:</p>

<ul>
 <li>Os cabeçalhos, ao contrário dos corpos, não são compactados.</li>
 <li>Cabeçalhos com frequência são similares entre uma mensagem e a seguinte, ainda assim são repetidos entre conexões.</li>
 <li>Nenhuma multiplexação pode ser feita. É necessário abrir várias conexões no mesmo servidor: e conexões TCP quentes são mais eficientes que frias.</li>
</ul>

<p>HTTP/2 introduz um passo extra: ele divide mensagens HTTP/1.x em quadros que são embutidos em um fluxo. Quadros de dados e de cabeçalho são separados, isto permite a compressão do cabeçalho. Muitos fluxos podem ser conjugados, um processo chamado de multiplexação, permitindo mais eficiência nas conexões TCP subjacentes.</p>

<p><img alt="HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization." src="https://mdn.mozillademos.org/files/13819/Binary_framing2.png" style="height: 735px; width: 810px;"></p>

<pre class="brush: html line-numbers  language-html"><code class="language-html">Connection</code></pre>

<p>Quadros HTTP agora são transparentes aos desenvolvedores web. Isso é um passo adicional no HTTP/2, entre mensagens HTTP/1.1 e o protocolo de transporte subjacente. Nenhuma mudança é necessária nas API usadas pelo desenvolvedor web para utilizar quadros; quando disponível tanto no navegador quanto no servidor, HTTP/2 é ativado e usado.</p>

<h2 id="Conclusão">Conclusão</h2>

<p>Mensagens HTTP são a chave ao usar HTTP; sua estrutura é simples e elas são altamente extensíveis. O mecanismo de enquadramento do HTTP/2 adiciona uma nova camada intermediária entre a sintaxe HTTP/1.x e o protocolo de transporte subjacente, sem modificá-lo fundamentalmente: construído sobre mecanismos provados.</p>
