---
title: Códigos de status de respostas HTTP
slug: Web/HTTP/Reference/Status
original_slug: Web/HTTP/Status
---

Os códigos de status de resposta HTTP indicam se uma solicitação [HTTP](/pt-BR/docs/Web/HTTP) específica foi concluída com êxito.
As respostas são agrupadas em cinco classes:

1. [Respostas Informativas](#respostas_informativas) (`100` – `199`)
2. [Respostas bem-sucedidas](#respostas_bem-sucedidas) (`200` – `299`)
3. [Mensagens de redirecionamento](#mensagens_de_redirecionamento) (`300` – `399`)
4. [Respostas de erro do cliente](#respostas_de_erro_do_cliente) (`400` – `499`)
5. [Respostas de erro do servidor](#respostas_de_erro_do_servidor) (`500` – `599`)

Os códigos de status listados abaixo são definidos por [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes).

> [!NOTE]
> Se você receber uma resposta que não esteja [nesta lista](#respostas_informativas), é uma resposta não padrão, possivelmente personalizada para o software do servidor.

## Respostas informativas

- {{HTTPStatus(100, "100 Continue")}}
  - : Essa resposta provisória indica que o cliente deve continuar a solicitação ou ignorar a resposta se a solicitação já estiver concluída.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Esse código é enviado em resposta a um cabeçalho de solicitação {{HTTPHeader ("Upgrade")}} do cliente e indica o protocolo para o qual o servidor está mudando.
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})
  - : Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.
- {{HTTPStatus(103, "103 Early Hints")}} {{experimental_inline}}
  - : Este código de status destina-se principalmente a ser usado com o cabeçalho {{HTTPHeader("Link")}}, permitindo que o agente do usuário inicie o [pré-carregamento](/pt-BR/docs/Web/HTML/Attributes/rel/preload) recursos enquanto o servidor prepara uma resposta.

## Respostas bem-sucedidas

- {{HTTPStatus(200, "200 OK")}}
  - : A solicitação foi bem-sucedida. O significado do resultado de "sucesso" depende do método HTTP:
    - `GET`: O recurso foi obtido e transmitido no corpo da mensagem.
    - `HEAD`: Os cabeçalhos de representação são incluídos na resposta sem nenhum corpo de mensagem.
    - `PUT` ou `POST`: O recurso que descreve o resultado da ação é transmitido no corpo da mensagem.
    - `TRACE`: O corpo da mensagem contém a mensagem de requisição recebida pelo servidor.

- {{HTTPStatus(201, "201 Created")}}
  - : A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é normalmente a resposta enviada após as solicitações `POST` ou algumas solicitações `PUT`.
- {{HTTPStatus(202, "202 Accepted")}}
  - : A solicitação foi recebida, mas ainda não foi atendida.
    É sem compromisso, pois não há como no HTTP enviar posteriormente uma resposta assíncrona indicando o resultado da solicitação.
    Destina-se a casos em que outro processo ou servidor manipula a solicitação ou processamento em lote.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Esse código de resposta significa que os metadados retornados não são exatamente os mesmos que estão disponíveis no servidor de origem, mas são coletados de uma cópia local ou de terceiros.
    Isso é usado principalmente para espelhos ou backups de outro recurso.
    Exceto para esse caso específico, a resposta `200 OK` é preferida a este status.
- {{HTTPStatus(204, "204 No Content")}}
  - : Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis.
    O agente do usuário pode atualizar seus cabeçalhos em cache para este recurso com os novos.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Diz ao agente do usuário para redefinir o documento que enviou esta solicitação.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Este código de resposta é usado quando o cabeçalho {{HTTPHeader("Range")}} é enviado do cliente para solicitar apenas parte de um recurso.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Transmite informações sobre vários recursos, para situações em que vários códigos de status podem ser apropriados.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV")}})
  - : Usado dentro de um elemento de resposta `<dav:propstat>` para evitar enumerar repetidamente os membros internos de várias ligações para a mesma coleção.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : O servidor atendeu a uma solicitação `GET` para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.

## Mensagens de redirecionamento

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : A solicitação tem mais de uma resposta possível. O agente do usuário ou usuário deve escolher um deles. (Não há uma maneira padronizada de escolher uma das respostas, mas links HTML para as possibilidades são recomendados para que o usuário possa escolher).
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : A URL do recurso solicitado foi alterada permanentemente. A nova URL é fornecida na resposta.
- {{HTTPStatus(302, "302 Found")}}
  - : Este código de resposta significa que o URI do recurso solicitado foi alterado _temporariamente_.
    Outras alterações no URI podem ser feitas no futuro. Portanto, esta mesma URI deve ser utilizada pelo cliente em requisições futuras.
- {{HTTPStatus(303, "303 See Other")}}
  - : O servidor enviou esta resposta para direcionar o cliente a obter o recurso solicitado em outro URI com uma solicitação GET.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : É usado para fins de cache.
    Ele informa ao cliente que a resposta não foi modificada, portanto, o cliente pode continuar a usar a mesma versão em cache da resposta.
- `305 Use Proxy` {{deprecated_inline}}
  - : Definido em uma versão anterior da especificação HTTP para indicar que uma resposta solicitada deve ser acessada por um proxy.
    Foi descontinuado devido a questões de segurança em relação à configuração em banda de um proxy.
- `306 unused` {{deprecated_inline}}
  - : Esse código de resposta não é mais usado, é apenas reservado. Foi usado em uma versão anterior da especificação HTTP/1.1.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : O servidor envia esta resposta para direcionar o cliente a obter o recurso solicitado em outra URI com o mesmo método usado na solicitação anterior.
    Tem a mesma semântica do código de resposta HTTP `302 Found`, com a exceção de que o agente do usuário _não deve_ alterar o método HTTP usado: se um `POST` foi usado na primeira solicitação, um `POST` deve ser usado no segundo pedido.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Isso significa que o recurso agora está permanentemente localizado em outro URI, especificado pelo cabeçalho de resposta HTTP `Location:`.
    Isso tem a mesma semântica que o código de resposta HTTP `301 Moved Permanently`, com a exceção de que o agente do usuário _não deve_ alterar o método HTTP usado: se um `POST` foi usado na primeira solicitação, um `POST` deve ser usado no segundo pedido.

## Respostas de erro do cliente

- {{HTTPStatus(400, "400 Bad Request")}}
  - : O servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente (por exemplo, sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválida ou roteamento de solicitação enganosa).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated".
    Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : Este código de resposta está reservado para uso futuro.
    O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento, no entanto, este código de status é usado raramente e não existe nenhuma convenção padrão.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : O cliente não tem direitos de acesso ao conteúdo; ou seja, não é autorizado, portanto o servidor está se recusando a fornecer o recurso solicitado.
    Ao contrário do `401 Unauthorized`, a identidade do cliente é conhecida pelo servidor.
- {{HTTPStatus(404, "404 Not Found")}}
  - : O servidor não pode encontrar o recurso solicitado.
    No navegador, isso significa que o URL não é reconhecido.
    Em uma API, isso também pode significar que o endpoint é válido, mas o próprio recurso não existe.
    Os servidores também podem enviar esta resposta em vez de `403 Forbidden` para ocultar a existência de um recurso de um cliente não autorizado.
    Este código de resposta é provavelmente o mais conhecido devido à sua ocorrência frequente na web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : O método de solicitação é conhecido pelo servidor, mas não é suportado pelo recurso de destino.
    Por exemplo, uma API pode não permitir chamar `DELETE` para remover um recurso.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Esta resposta é enviada quando o servidor web, após realizar [negociação de conteúdo orientada pelo servidor](/pt-BR/docs/Web/HTTP/Guides/Content_negotiation#negociação_baseada_no_servidor), não encontra nenhum conteúdo que esteja em conformidade com os critérios fornecidos por o agente do usuário.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : É semelhante a `401 Unauthorized`, mas a autenticação precisa ser feita por um proxy.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Esta resposta é enviada por alguns servidores em uma conexão ociosa, mesmo sem qualquer requisição prévia pelo cliente.
    Isso significa que o servidor gostaria de desligar esta conexão não utilizada.
    Essa resposta é muito mais usada, pois alguns navegadores, como Chrome, Firefox 27+ ou IE9, usam mecanismos de pré-conexão HTTP para acelerar a navegação.
    Observe também que alguns servidores simplesmente encerram a conexão sem enviar esta mensagem.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Esta resposta será enviada quando uma requisição conflitar com o estado atual do servidor.
- {{HTTPStatus(410, "410 Gone")}}
  - : Esta resposta é enviada quando o conteúdo solicitado foi excluído permanentemente do servidor, sem endereço de encaminhamento.
    Espera-se que os clientes removam seus caches e links para o recurso.
    A especificação HTTP pretende que esse código de status seja usado para "serviços promocionais por tempo limitado".
    As APIs não devem se sentir compelidas a indicar recursos que foram excluídos com esse código de status.
- {{HTTPStatus(411, "411 Length Required")}}
  - : O servidor rejeitou a solicitação porque o campo de cabeçalho `Content-Length` não está definido e o servidor o exige.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : O cliente indicou nos seus cabeçalhos pré-condições que o servidor não atende.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : A entidade requisição é maior do que os limites definidos pelo servidor.
    O servidor pode fechar a conexão ou retornar um campo de cabeçalho `Retry-After`.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : O URI solicitado pelo cliente é mais longo do que o servidor está disposto a interpretar.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : O formato de mídia dos dados requisitados não é suportado pelo servidor, portanto, o servidor está rejeitando a requisição.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : O intervalo especificado pelo campo de cabeçalho `Range` na solicitação não pode ser atendido.
    É possível que o intervalo esteja fora do tamanho dos dados do URI de destino.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Este código de resposta significa que a expectativa indicada pelo campo de cabeçalho de solicitação `Expect` não pode ser atendida pelo servidor.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : O servidor recusa a tentativa de coar café num bule de chá.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : A requisição foi direcionada a um servidor inapto a produzir a resposta.
    Pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade inclusas na URI da requisição.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV")}})
  - : A solicitação foi bem formada, mas não pôde ser atendida devido a erros semânticos.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : O recurso que está sendo acessado está bloqueado.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : A solicitação falhou devido à falha de uma solicitação anterior.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Indica que o servidor não está disposto a correr o risco de processar uma solicitação que pode ser repetida.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : O servidor se recusa a executar a solicitação usando o protocolo atual, mas pode estar disposto a fazê-lo depois que o cliente atualizar para um protocolo diferente.
    O servidor envia um cabeçalho {{HTTPHeader("Upgrade")}} em uma resposta 426 para indicar os protocolos necessários.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : O servidor de origem exige que a solicitação seja condicional.
    Esta resposta destina-se a prevenir o problema de 'atualização perdida', onde um cliente pega (`GET`) o estado de um recurso, o modifica e o coloca (`PUT`) de volta no servidor, quando entretanto um terceiro modificou o estado no servidor, levando a um conflito.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : O usuário enviou muitas requisições num dado tempo ("limitação de frequência").
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes.
    A solicitação pode ser reenviada após reduzir o tamanho dos campos do cabeçalho da solicitação.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : O agente do usuário solicitou um recurso que não pode ser fornecido legalmente, como uma página da Web censurada por um governo.

## Respostas de erro do servidor

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : O servidor encontrou uma situação com a qual não sabe lidar.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos que servidores devem suportar (e portanto não devem retornar este código) são `GET` e `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Essa resposta de erro significa que o servidor, enquanto trabalhava como um gateway para obter uma resposta necessária para lidar com a solicitação, obteve uma resposta inválida.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : O servidor não está pronto para manipular a requisição
    Causas comuns são um servidor em manutenção ou sobrecarregado.
    Note que junto a esta resposta, uma página amigável explicando o problema deveria ser enviada.
    Esta resposta deve ser usada para condições temporárias e o cabeçalho HTTP `Retry-After` deverá, se possível, conter o tempo estimado para recuperação do serviço.
    O webmaster deve também tomar cuidado com os cabeçalhos relacionados com o cache que são enviados com esta resposta, já que estas respostas de condições temporárias normalmente não deveriam ser postas em cache.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Essa resposta de erro é fornecida quando o servidor está atuando como um gateway e não consegue obter uma resposta a tempo.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : A versão HTTP usada na requisição não é suportada pelo servidor.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : O servidor tem um erro de configuração interna: o recurso variante escolhido está configurado para se envolver em negociação de conteúdo transparente e, portanto, não é um ponto final adequado no processo de negociação.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV")}})
  - : O método não pôde ser executado no recurso porque o servidor não pode armazenar a representação necessária para concluir a solicitação com êxito.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : O servidor detectou um loop infinito ao processar a solicitação.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Extensões adicionais à solicitação são necessárias para que o servidor a atenda.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Indica que o cliente precisa se autenticar para obter acesso à rede.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Lista de códigos de status na Wikipedia](https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP)
- [Registro oficial IANA de códigos de status HTTP](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
