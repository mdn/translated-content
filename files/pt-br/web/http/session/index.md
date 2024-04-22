---
title: Uma típica sessão HTTP
slug: Web/HTTP/Session
---

{{HTTPSidebar}}

Em protocolos cliente-servidor, como o HTTP, sessões consistem de três partes:

1. O cliente estabelece uma conexão TCP (ou a conexão apropriada caso o protocolo TCP não seja o protocolo usado na camada de transporte).
2. O cliente envia sua requisição, e então aguarda por uma resposta.
3. O servidor processa a requisição, enviando de volta sua resposta, fornecendo um "status code" (código de status), e os dados apropriados.

Na versão HTTP/1.1 a conexão não é mais fechada após a terceira etapa completar-se, mas é garantida ao cliente uma nova requisição, implicando na possibilidade da segunda e terceira etapa serem novamente realizadas quantas vezes forem desejadas.

## Estabelecendo uma conexão

Em protocolos cliente-servidor é o cliente quem estabelece as conexões. Abrir uma conexão HTTP significa iniciar uma conexão na camada de transporte subjacente, geralmente uma conexão usando o protocolo TCP.

Usando o protocolo TCP, a porta padrão para um servidor HTTP em um computador é a porta 80, porém outras portas podem ser utilizadas, como a 8000 ou 8080.
A URL da página a se requisitar contém o nome do domínio e o número da porta, embora este último pode ser omitido caso a porta seja a 80. Leia [Identificando recursos na Web](/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/Identifying_resources_on_the_Web) para mais informações.

> **Nota:** O modelo cliente-servidor não permite o servidor enviar dados ao cliente sem uma requisição explícita. Para contornar esse problema, os desenvolvedores Web usam várias técnicas: executar ping no servidor periodicamente por meio das APIs {{domxref ("XMLHTTPRequest")}}, {{domxref ("Fetch")}}, usando a [WebSockets API](/pt-BR/docs/WebSockets) ou protocolos semelhantes.

## Enviando uma requisição de cliente

Depois que a conexão é estabelecida, o _user-agent_ pode enviar a solicitação (um _user-agent_ normalmente é um navegador Web, podendo ser também qualquer outra coisa, como um _crawler_, por exemplo). Uma solicitação de cliente consiste em diretivas de texto, separadas por quebras de linhas (CRLF), divididas em três blocos:

1. A primeira linha contém um método de requisição seguido por seus parâmetros:

   - o caminho do documento, ou seja, uma URL absoluta sem o protocolo ou nome de domínio
   - a versão do protocolo HTTP

2. As linhas subsequentes representam um cabeçalho HTTP, fornecendo ao servidor informações sobre o tipo de dado apropriado (por exemplo, qual o idioma, quais os tipos MIME) ou outros dados que alteram seu comportamento (por exemplo, não enviando uma resposta se já estiver em cache). Esses cabeçalhos HTTP formam um bloco que termina com uma linha vazia.
3. O bloco final é um bloco de dados opcional, que pode conter dados adicionais usados principalmente pelo método POST.

### Exemplos de requisições

Buscando a página raiz do developer.mozilla.org ([http://developer.mozilla.org/](/)), e dizendo ao servidor que o _user-agent_ preferiria a página em francês, se possível:

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

Observe que a linha final vazia separa o bloco de dados do bloco de cabeçalho. Como não há nenhum `Content-Length` fornecido em um cabeçalho HTTP, esse bloco de dados é apresentado vazio, marcando o final dos cabeçalhos, permitindo que o servidor processe a solicitação no momento em que recebe essa linha vazia.

Por exemplo, enviando o resultado de um formulário::

```
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### Métodos de requisição

HTTP define um conjunto de [métodos de requisição](/pt-BR/docs/Web/HTTP/Methods) indicando a ação desejada a ser executada em um recurso. Embora eles também possam ser substantivos, essas solicitações são às vezes chamadas de verbos HTTP. As requisições mais comuns são `GET` e `POST`:

- O método {{HTTPMethod("GET")}} solicita uma representação de dados do recurso especificado. Requisições usando GET só devem retornar dados.
- O método {{HTTPMethod("POST")}} envia dados para um servidor para que possa alterar seu estado. Esse é o método geralmente usado para [formulários HTML](/pt-BR/docs/Web/Guide/HTML/Forms).

## Estrutura de uma resposta do servidor

Depois que o agente conectado envia sua solicitação, esta é processada pelo servidor, que por fim, retorna uma resposta. Semelhante a uma requisição do cliente, uma resposta do servidor é formada por diretivas de texto, separadas por quebras de linhas, embora divididas em três blocos:

1. A primeira linha, a linha de status, consiste em uma confirmação da versão HTTP usada, seguida por uma requisição de status (e seu breve significado em texto legível por humanos).
2. As linhas subsequentes representam cabeçalhos HTTP específicos, fornecendo ao cliente informações sobre os dados enviados (por exemplo, tipo, tamanho dos dados, algoritmo de compressão usado, dicas sobre armazenamento em cache). Da mesma forma que o bloco de cabeçalhos HTTP para uma requisição do cliente, esses cabeçalhos HTTP formam um bloco que termina com uma linha vazia.
3. O bloco final é um bloco de dados, que contém os dados opcionais.

### Exemplo de respostas

Resposta de página da web bem-sucedida:

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vem os 29769 bytes da página web solicitada)
```

Notificação de que o recurso solicitado foi movido permanentemente:

```
HTTP/1.1 301 Moved Permanently
Server: Apache/2.2.3 (Red Hat)
Content-Type: text/html; charset=iso-8859-1
Date: Sat, 09 Oct 2010 14:30:24 GMT
Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
X-Cache-Info: caching
X-Cache-Info: caching
Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>301 Moved Permanently</title>
</head><body>
<h1>Moved Permanently</h1>
<p>The document has moved <a href="https://developer.mozilla.org/">here</a>.</p>
<hr>
<address>Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80</address>
</body></html>
```

Notificação de que o recurso solicitado não existe:

```
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept-Ranges: bytes
Content-Length: 10732
Content-Type: text/html

<!DOCTYPE html... (contém uma página customizada do site ajudando o usuário a localizar o recurso ausente)
```

### Códigos de status de resposta

[Códigos de status de respostas HTTP](/pt-BR/docs/Web/HTTP/Status) (HTTP _response status codes_) indicam se uma requisição HTTP específica foi concluída com sucesso. As respostas são agrupadas em cinco classes: respostas informativas, respostas bem-sucedidas, redirecionamentos, erros de clientes e erros de servidores.

- {{HTTPStatus(200)}}: _OK_. A requisição foi bem sucedida.
- {{HTTPStatus(301)}}: _Moved Permanently_. Esse código de resposta significa que o URI do recurso solicitado foi alterado.
- {{HTTPStatus(404)}}: _Not Found_. O servidor não pode encontrar o recurso solicitado.

## Veja também

- [Identificando recursos na web](/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/Identifying_resources_on_the_Web)
- [Cabeçalhos HTTP](/pt-BR/docs/Web/HTTP/Headers)
- [Métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Methods)
- [HTTP response status codes](/pt-BR/docs/Web/HTTP/Status)
