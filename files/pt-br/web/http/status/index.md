---
title: Códigos de status de respostas HTTP
slug: Web/HTTP/Status
tags:
  - Códigos de status
  - HTTP
  - Web
translation_of: Web/HTTP/Status
---
{{HTTPSidebar}}

Os códigos de _status_ das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. As respostas são agrupadas em cinco classes:

1. Respostas de informação (`100`-`199`),
2. Respostas de sucesso (`200`-`299`),
3. Redirecionamentos (`300`-`399`)
4. Erros do cliente (`400`-`499`)
5. Erros do servidor (`500`-`599`).

Os status abaixo são definidos pela [seção 10 da RFC 2616](https://tools.ietf.org/html/rfc2616#section-10). Você pode encontrar uma versão atualizada da especificação na [RFC 7231](https://tools.ietf.org/html/rfc7231#section-6.5.1).

> **Nota:** Se você receber uma resposta que não está nesta lista, é uma resposta não padrão, provavelmente personalizada pelo software do servidor.

## Respostas informativas

- {{HTTPStatus(100, "100 Continue")}}
  - : Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria.
- {{HTTPStatus(101, "101 Switching Protocol")}}
  - : Esse código é enviado em resposta a um cabeçalho de solicitação {{HTTPHeader ("Upgrade")}} pelo cliente, e indica o protocolo a que o servidor está alternando.
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})
  - : Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Este código tem principalmente o objetivo de ser utilizado com o cabeçalho {{HTTPHeader("Link")}}, indicando que o agente deve iniciar a [pré-carregar](/pt-BR/docs/Web/HTML/Preloading_content) recursos enquanto o servidor prepara uma resposta.

## Respostas de sucesso

- `GET`: O recurso foi buscado e transmitido no corpo da mensagem.
- `HEAD`: Os cabeçalhos da entidade estão no corpo da mensagem.
- `PUT` ou `POST`: O recurso descrevendo o resultado da ação é transmitido no corpo da mensagem.
- `TRACE`: O corpo da mensagem contém a mensagem de requisição recebida pelo servidor.

<!---->

- {{HTTPStatus(200, "200 OK")}}
  - : Estas requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP:
- {{HTTPStatus(201, "201 Created")}}
  - : A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST.
- {{HTTPStatus(202, "202 Accepted")}}
  - : A requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto é uma requisição não-comprometedora, o que significa que não há nenhuma maneira no HTTP para enviar uma resposta assíncrona indicando o resultado do processamento da solicitação. Isto é indicado para casos onde outro processo ou servidor lida com a requisição, ou para processamento em lote.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Esse código de resposta significa que o conjunto de meta-informações retornadas não é o conjunto exato disponível no servidor de origem, mas coletado de uma cópia local ou de terceiros. Exceto essa condição, a resposta de `200 OK` deve ser preferida em vez dessa resposta.
- {{HTTPStatus(204, "204 No Content")}}
  - : Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Esta requisição é enviada após realizanda a solicitação para informar ao _user agent_ redefinir a visualização do documento que enviou essa solicitação.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Esta resposta é usada por causa do cabeçalho de intervalo enviado pelo cliente para separar o download em vários fluxos.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Uma resposta Multi-Status transmite informações sobre vários recursos em situações em que vários códigos de status podem ser apropriados.
- {{HTTPStatus(208, "208 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Usado dentro de um elemento de resposta `<dav:propstat>` para evitar enumerar os membros internos de várias ligações à mesma coleção repetidamente.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://tools.ietf.org/html/rfc3229))
  - : O servidor cumpriu uma solicitação `GET` para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.

## Mensagens de redirecionamento

- {{HTTPStatus(300, "300 Multiple Choice")}}
  - : A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.
- {{HTTPStatus(302, "302 Found")}}
  - : Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.
- {{HTTPStatus(303, "303 See Other")}}
  - : O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.
- `305 Use Proxy` {{deprecated_inline}}
  - : Foi definida em uma versão anterior da especificação HTTP para indicar que uma resposta deve ser acessada por um proxy. Foi depreciada por questões de segurança em respeito a configuração em banda de um proxy.
- `306 unused` {{deprecated_inline}}
  - : Esse código de resposta não é mais utilizado, encontra-se reservado. Foi usado numa versão anterior da especificação HTTP 1.1.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : O servidor mandou essa resposta direcionando o cliente a buscar o recurso requisitado em outra URI com o mesmo método que foi utilizado na requisição original. Tem a mesma semântica do código `302 Found`, com a exceção de que o user-agent _não deve_ mudar o método HTTP utilizado: se um `POST` foi utilizado na primeira requisição, um `POST` deve ser utilizado na segunda.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Esse código significa que o recurso agora está permanentemente localizado em outra URI, especificada pelo cabeçalho de resposta `Location`. Tem a mesma semântica do código de resposta HTTP `301 Moved Permanently` com a exceção de que o user-agent _não deve_ mudar o método HTTP utilizado: se um `POST` foi utilizado na primeira requisição, um `POST` deve ser utilizado na segunda.

## Respostas de erro do Cliente

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento porém ele não está sendo usado atualmente.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.
- {{HTTPStatus(404, "404 Not Found")}}
  - : O servidor não pode encontrar o recurso solicitado. Este código de resposta talvez seja o mais famoso devido à frequência com que acontece na web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Essa resposta é enviada quando o servidor da Web após realizar a negociação de conteúdo orientada pelo servidor, não encontra nenhum conteúdo seguindo os critérios fornecidos pelo agente do usuário.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Semelhante ao **401** porem é necessário que a autenticação seja feita por um proxy.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Esta resposta é enviada por alguns servidores em uma conexão ociosa, mesmo sem qualquer requisição prévia pelo cliente. Ela significa que o servidor gostaria de derrubar esta conexão em desuso. Esta resposta é muito usada já que alguns navegadores, como Chrome, Firefox 27+, ou IE9, usam mecanismos HTTP de pré-conexão para acelerar a navegação. Note também que alguns servidores meramente derrubam a conexão sem enviar esta mensagem.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Esta resposta será enviada quando uma requisição conflitar com o estado atual do servidor.
- {{HTTPStatus(410, "410 Gone")}}
  - : Esta resposta será enviada quando o conteúdo requisitado foi permanentemente deletado do servidor, sem nenhum endereço de redirecionamento. É experado que clientes removam seus caches e links para o recurso. A especificação HTTP espera que este código de status seja usado para "serviços promocionais de tempo limitado". APIs não devem se sentir obrigadas a indicar que recursos foram removidos com este código de status.
- {{HTTPStatus(411, "411 Length Required")}}
  - : O servidor rejeitou a requisição porque o campo `Content-Length` do cabeçalho não está definido e o servidor o requer.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : O cliente indicou nos seus cabeçalhos pré-condições que o servidor não atende.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : A entidade requisição é maior do que os limites definidos pelo servidor; o servidor pode fechar a conexão ou retornar um campo de cabeçalho `Retry-After`.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : A URI requisitada pelo cliente é maior do que o servidor aceita para interpretar.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.
- {{HTTPStatus(416, "416 Requested Range Not Satisfiable")}}
  - : O trecho especificado pelo campo `Range` do cabeçalho na requisição não pode ser preenchido; é possível que o trecho esteja fora do tamanho dos dados da URI alvo.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Este código de resposta significa que a expectativa indicada pelo campo `Expect` do cabeçalho da requisição não pode ser satisfeita pelo servidor.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : O servidor recusa a tentativa de coar café num bule de chá.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : A requisição foi direcionada a um servidor inapto a produzir a resposta. Pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema ("scheme") e autoridade inclusas na URI da requisição.
- {{HTTPStatus(422, "422 Unprocessable Entity")}} ({{Glossary("WebDAV")}})
  - : A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : O recurso sendo acessado está travado.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : A requisição falhou devido a falha em requisição prévia.
- {{HTTPStatus(425, "425 Too Early")}}
  - : Indica que o servidor não está disposto a arriscar processar uma requisição que pode ser refeita.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : O servidor se recusa a executar a requisição usando o protocolo corrente mas estará pronto a fazê-lo após o cliente atualizar para um protocolo diferente. O servidor envia um cabeçalho {{HTTPHeader("Upgrade")}} numa resposta `426` para indicar o(s) protocolo(s) requeridos.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : O servidor de origem requer que a resposta seja condicional. Feito para prevenir o problema da 'atualização perdida', onde um cliente pega o estado de um recurso (GET) , modifica-o, e o põe de volta no servidor (PUT), enquanto um terceiro modificou o estado no servidor, levando a um conflito.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : O usuário enviou muitas requisições num dado tempo ("limitação de frequência").
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : O servidor não quer processar a requisição porque os campos de cabeçalho são muito grandes. A requisição PODE ser submetida novemente depois de reduzir o tamanho dos campos de cabeçalho.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : O usuário requisitou um recurso ilegal, tal como uma página censurada por um governo.

## Respostas de erro do Servidor

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : O servidor encontrou uma situação com a qual não sabe lidar.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são `GET` e `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : O servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado. Note que junto a esta resposta, uma página amigável explicando o problema deveria ser enviada. Estas respostas devem ser usadas para condições temporárias e o cabeçalho HTTP `Retry-After:` deverá, se possível, conter o tempo estimado para recuperação do serviço. O webmaster deve também tomar cuidado com os cabeçalhos relacionados com o cache que são enviados com esta resposta, já que estas respostas de condições temporárias normalmente não deveriam ser postas em cache.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Esta resposta de erro é dada quando o servidor está atuando como um gateway e não obtém uma resposta a tempo.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : A versão HTTP usada na requisição não é suportada pelo servidor.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : O servidor tem um erro de configuração interno: a negociação transparente de conteúdo para a requisição resulta em uma referência circular.
- {{HTTPStatus(507, "507 Insufficient Storage")}}
  - : O servidor tem um erro interno de configuração: o recurso variante escolhido está configurado para entrar em negociação transparente de conteúdo com ele mesmo, e portanto não é uma ponta válida no processo de negociação.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : O servidor detectou um looping infinito ao processar a requisição.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Exigem-se extensões posteriores à requisição para o servidor atendê-la.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : O código de status 511 indica que o cliente precisa se autenticar para ganhar acesso à rede.

## Veja também

- [Lista de códigos de status na Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [Registro oficial IANA de códigos de status HTTP](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
- [HTTP status codes](https://www.exai.com/blog/http-status-codes-cheat-sheet)
