---
title: Cabeçalhos HTTP
slug: Web/HTTP/Headers
---

{{HTTPSidebar}}Os cabeçalhos HTTP permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. Um cabeçalho de solicitação é composto por seu nome _case-insensitive_ (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha). Espaços em branco antes do valor serão ignorados.

Cabeçalhos proprietários personalizados podem ser adicionados usando o prefixo 'X-', mas essa convenção foi descontinuada em Junho de 2012, devido aos inconvenientes que causou quando os campos não-padronizados tornaram-se padronizados na [RFC 6648](https://tools.ietf.org/html/rfc6648); outros estão listados em um [registro IANA](http://www.iana.org/assignments/message-headers/perm-headers.html), cujo o conteúdo original foi definido na [RFC 4229](http://tools.ietf.org/html/rfc4229). O IANA também mantém o [registro das propostas de novas mensagens de cabeçalhos HTTP](http://www.iana.org/assignments/message-headers/prov-headers.html).

Cabeçalhos podem ser classificados de acordo com os seus contextos:

- {{Glossary("General header" ,"Cabeçalho genérico")}}: Cabeçalhos que podem ser usados tanto em solicitações quanto em respostas, porém sem relação com os dados eventualmente transmitidos no corpo da mensagem.
- {{Glossary( "Request header" ,"Cabeçalho de solicitação")}}: Cabeçalhos contendo mais informação sobre o recurso a ser obtido ou sobre o próprio cliente.
- {{Glossary( "Response header" ,"Cabeçalho de resposta")}}: Cabeçalhos contendo informação adicional sobre a solicitação, como a sua localização ou sobre o servidor.
- {{Glossary( "Entity header" ,"Cabeçalho de entidade")}}: Cabeçalhos contendo mais informação sobre o conteúdo da entidade, como o tamanho do conteúdo ou o seu _MIME-type_.

Cabeçalhos também podem ser classificados de acordo com a forma que são manipulados por _proxies_.

- End-to-end headers
  - : Esses cabeçalhos devem ser transmitidos para o destinatário final da mensagem; isso é, o servidor em caso de solicitação ou o cliente caso resposta. _Proxies_ intermediários devem reenviar cabeçalhos de _end-to-end_ sem alterações e caches devem armazená-los.
- Hop-by-hop headers
  - : Esses cabeçalhos são significativos apenas para uma única conexão a nível de transporte e não devem ser reenviados por _proxies_ ou armazenados em cache. Tais cabeçalhos são: {{ httpheader("Connection") }}, {{ httpheader("Keep-Alive") }}, {{ httpheader("Proxy-Authenticate") }}, {{ httpheader("Proxy-Authorization") }}, {{ httpheader("TE") }}, {{ httpheader("Trailer") }}, {{ httpheader("Transfer-Encoding") }} and {{ httpheader("Upgrade") }}. Observe que apenas cabeçalhos _hop-by-hop_ podem ser definidos utilizando o cabeçalho genérico {{ httpheader("Connection") }}.

A lista a seguir resume os cabeçalhos HTTP pela categoria de uso. Para uma lista alfabética, utilize o menu à esquerda.

## Autenticação

- {{HTTPHeader("WWW-Authenticate")}}
  - : Define o método de autenticação que deve ser utilizado para conseguir acesso ao recurso.
- {{HTTPHeader("Authorization")}}
  - : Contém as credenciais para autenticar um User-Agent com o servidor.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Define o método de autenticação que deve ser utilizado para conseguir acesso ao recurso por trás de um servidor Proxy.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Contém as credenciais para autenticar um User-Agent com o servidor Proxy.

## Caching

- {{HTTPHeader("Age")}}
  - : O tempo em segundos em que o objeto esteve em um cache de proxy.
- {{HTTPHeader("Cache-Control")}}
  - : Especifica diretivas para mecanismos de cache em requisições e respostas.
- {{HTTPHeader("Expires")}}
  - : A data/hora depois que a resposta é considerada obsoleta.
- {{HTTPHeader("Pragma")}}
  - : Cabeçalho específico da implementação que pode ter varios efeitos em qualquer lugar ao longo da sequência de requisição-resposta. Usado para compatibilidade de versões anteriores com caches HTTP/1.0 onde o header Cache-Control ainda não está presente.
- {{HTTPHeader("Warning")}}
  - : Um campo de alerta geral contendo informações sobre possíveis problemas.

## Client hints

O recurso HTTP [Client hints](/pt-BR/docs/Glossary/Client_hints) ainda está em desenvolvimento. A documentação está disponível no site do [HTTP working group.](https://httpwg.org/http-extensions/client-hints.html)

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : Os servidores podem dar suporte para o [Client hints](/pt-BR/docs/Glossary/Client_hints) usando o campo de cabeçalho Accept-CH ou um elemento HTML \<meta> equivalente com atributo http-equiv (\[HTML5]).
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}}
  - : Os servidores podem solicitar ao cliente que lembre-se do conjunto de [Client hints](/pt-BR/docs/Glossary/Client_hints) que o servidor dá suporte por um período de tempo especificado, para permitir a entrega de [Client hints](/pt-BR/docs/Glossary/Client_hints) em solicitações seguidas ao servidor de origem(\[RFC6454]).
- {{HTTPHeader("Content-DPR")}} {{experimental_inline}}
  - : Um número que indica a proporção entre pixels físicos sobre pixels CSS da resposta de imagem selecionada.
- {{HTTPHeader("DPR")}} {{experimental_inline}}
  - : Um número que indica o Device Pixel Ratio (DPR) atual do cliente, que é a proporção dos pixels físicos sobre os pixels CSS (Seção 5.2 de [\[CSSVAL\]](https://httpwg.org/http-extensions/client-hints.html#CSSVAL)) do viewport do layout (Seção 9.1.1 do [\[CSS2\]](https://httpwg.org/http-extensions/client-hints.html#CSS2)) no dispositivo.
- {{HTTPHeader("Device-Memory")}} {{experimental_inline}}
  - : Tecnicamente uma parte da API de Memória do Dispositivo (Device Memory API), este cabeçalho representa uma quantidade aproximada de RAM que o cliente possui.
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Um boleano que indica a preferência do agente do usuário pelo uso reduzido de dados.
- {{HTTPHeader("Viewport-Width")}} {{experimental_inline}}

  - : Um número que indica a largura em pixels do viewport do layout em pixels CSS. O valor em pixels disponibilizado é um número arredondado do menor inteiro seguinte. (i.e. valor ceiling).

    Se `Viewport-Width` ocorrer em uma mensagem mais de uma vez, o último valor irá sobrescrever todas as ocorrências anteriores.

- {{HTTPHeader("Width")}} {{experimental_inline}}

  - : O campo `Width` no cabeçalho da requisição é um número que indica a largura desejada do recurso em pixels físicos (i.e. tamanho intrínseco da imagem). O valor do pixel provido é um número arredondado para o menor inteiro seguinte.

    Se a largura do recurso desejada não for conhecida no momento da solicitação ou o recurso não tiver uma largura de exibição, o campo `Width` poderá ser omitido do cabeçalho. Se `Width` ocorrer em uma mensagem mais de uma vez, o último valor irá sobrescrever todas as ocorrências anteriores.

## Condicionais

- {{HTTPHeader("Last-Modified")}}
  - : É um validador, a última data de modificação de um recurso, usado para comparar várias versões de um mesmo recurso. É menos preciso que o {{HTTPHeader("ETag")}}, mas é mais fácil calcular em alguns ambientes. Requisições condicionais usando {{HTTPHeader("If-Modified-Since")}} e {{HTTPHeader("If-Unmodified-Since")}} usam esse valor para modificar o comportamento da requisição.
- {{HTTPHeader("ETag")}}
  - : É um validador, uma string única identificando a versão do recurso. Requisições condicionais usando {{HTTPHeader("If-Match")}} e {{HTTPHeader("If-None-Match")}} usam esse valor para modificar o comportamento da requisição.
- {{HTTPHeader("If-Match")}}
  - : Faz a requisição condicional e aplica o método apenas se o recurso armazenado corresponder a uma das ETags fornecidas.
- {{HTTPHeader("If-None-Match")}}
  - : Faz a requisição condicional e aplica o método apenas se o recurso armazenado não corresponder a nenhuma das ETags fornecidas. É usado para atualizar caches ( para requisições seguras), ou para prevenir o upload de um novo recurso quando este já existe.
- {{HTTPHeader("If-Modified-Since")}}
  - : Faz a requisição condicional e espera a entidade ser transmitida somente se tiver sido modificada após a data especificada. É usado para transmitir dados somente se o cache estiver desatualizado.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Faz a requisição condicional e espera a entidade ser transmitida somente se **não** tiver sido modificada após a data especificada. É usado para garantir a coerência de um novo fragmento de um intervalo específico com os anteriores, ou para implementar um Sistema de Controle de concorrência otimista ao modificar os documentos existentes.

## Gerenciamento de Conexão

- {{HTTPHeader("Connection")}}
  - : Controla se uma conexão de rede continua ou não aberta após o término da transação atual.
- {{HTTPHeader("Keep-Alive")}}
  - : Controla por quanto tempo uma conexão persistente deve permanecer aberta.

## Negociação de conteúdo

- {{HTTPHeader("Accept")}}
  - : Informa ao servidor sobre os tipos de dados que podem ser enviados de volta. Isto é MIME-type.
- {{HTTPHeader("Accept-Charset")}}
  - : Informa ao servidor sobre qual conjunto de caracter o cliente é capaz de entender.
- {{HTTPHeader("Accept-Encoding")}}
  - : Informa ao servidor sobre o algoritmo de codificação, geralmente um algoritmo de compressão, isto pode ser usado no recurso enviado de volta.
- {{HTTPHeader("Accept-Language")}}
  - : Informa ao servidor sobre a linguagem que é esperada que o servidor envie de volta. Esta é uma dica e não está necessariamente sob controle total do usuário: o servidor deve sempre prestar atenção para não sobrepor uma escolha explícita do usuário (como selecionar uma linguagem em uma lista suspensa).

## Controles

- {{HTTPHeader("Expect")}}
  - : Indica expectativas que precisam ser atendidas pelo servidor para lidar adequadamente com a solicitação.
- {{HTTPHeader("Max-Forwards")}}
  - : ...

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Contém [cookies](/pt-BR/docs/Web/HTTP/Cookies) HTTP armazenados previamente enviados pelo servidor com o cabeçalho {{HTTPHeader("Set-Cookie")}}.
- {{HTTPHeader("Set-Cookie")}}
  - : Envia cookies do servidor para o agente de usuário.
- {{HTTPHeader("Cookie2")}}
  - : Contém um cookie HTTP enviado anteriormente pelo servidor com o cabeçalho {{HTTPHeader("Set-Cookie2")}}, mas se tornou obsoleto pela especificação. Use {{HTTPHeader("Cookie")}} em vez disso.
- {{HTTPHeader("Set-Cookie2")}}
  - : Envia cookies do servidor para o agente-usuário, mas se tornou obsoleto pela especificação. Use {{HTTPHeader("Set-Cookie")}} em vez disso.

## CORS

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indica se a resposta pode ser compartilhada.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indica se a resposta a requisição pode ou não ser exposta quando a flag de crendenciais é verdadeira.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Usado na resposta para uma solicitação de comprovação ({{Glossary("Preflight_request", "preflight request")}}) para indicar quais cabeçalhos HTTP podem ser usados ao fazer a solicitação real.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Especifica o método, ou métodos, permitido ao acessar o recurso em resposta à solicitação de comprovação ({{Glossary("Preflight_request", "preflight request")}}).
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indica quais cabeçalhos podem ser expostos como parte da resposta listando seus nomes.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indica por quanto tempo os resultados de uma solicitação de comprovação ({{Glossary("Preflight_request", "preflight request")}}) podem ser armazenados em cache.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Utilizado ao emitr uma solicitação de comprovação ({{Glossary("Preflight_request", "preflight request")}}) para informar ao servidor quais cabeçalhos HTTP serão usados quando a solicitação real for realizada.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Utilizado ao emitir uma solicitação de comprovação ({{Glossary("Preflight_request", "preflight request")}}) para informar ao servidor qual [método HTTP](/pt-BR/docs/Web/HTTP/Methods) será usado quando a solicitação real for realizada.
- {{HTTPHeader("Origin")}}
  - : Inddica de onde uma busca se origina.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Especifica as origens que tem permissão para ver valores de atributos recuperados por meio de recursos da API de Tempo de Recurso ([Resource Timing API](/pt-BR/pt-BR/docs/Web/API/Resource_Timing_API)) que, de outra forma, seriam relatados como zero devido a restrições de origem cruzada (cross-origin restrictions).

## Do Not Track

- {{HTTPHeader("DNT")}}
  - : Usado para expressas a preferência de rastreamento do usuário
- {{HTTPHeader("Tk")}}
  - : Indica o status de rastreamento aplicado à requisição correspondente.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Indica se o recurso transmitido deve ser mostrado em linha (inline - comportamento padrão sem o cabeçalho), ou se deve apresentar uma caixa de diálogo "Salvar como".

## Informações do corpo da mensagem

- {{HTTPHeader("Content-Length")}}
  - : Indica o tamanho do corpo da mensagem, em decimal, enviado ao destinatário
- {{HTTPHeader("Content-Type")}}
  - : Indica o tipo de mídia do recurso.
- {{HTTPHeader("Content-Encoding")}}
  - : Usado para especificar o algoritmo de compressão.
- {{HTTPHeader("Content-Language")}}
  - : Descreve a linguagem destinada ao público, para permitir que um usuário se diferencie de acordo com o idioma preferido dele.
- {{HTTPHeader("Content-Location")}}
  - : Indica um local alternativo para os dados retornados.

## Roteamento de mensagens (Proxies)

- {{HTTPHeader("Forwarded")}}
  - : Contém informações do lado do cliente dos servidores _proxy_ que é alterado ou perdido quando um _proxy_ é envolvido no caminho de uma solicitação.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifica os endereços de IP de origem de um cliente que se conecta a um servidor web por meio de um _proxy_ HTTP ou balanceador de carga.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifica o host original que um cliente usou para se conectar ao _proxy_ ou balanceador de carga.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifica o protocolo (HTTP ou HTTPS) que um cliente usou para se conectar ao seu _proxy_ ou balanceador de carga.
- {{HTTPHeader("Via")}}
  - : Adicionado por _proxies,_ ambos _proxies_ de encaminhamento _(forward)_ e reverso _(reverse), e pode aparecer nos cabeçalhos de solicitação e de resposta._

## Redirecionamentos

- {{HTTPHeader("Location")}}
  - : Indica a URL para redirecionar uma página.

## Contexto da requisição

- {{HTTPHeader("From")}}
  - : Contém um endereço de e-mail da internet para um usuário humano que controla o agente do usuário solicitante.
- {{HTTPHeader("Host")}}
  - : Especifica o nome de domínio do servidor (para hospedagem virtual), e (opcionalmente) o número da porta TCP na qual o servidor está ouvindo.
- {{HTTPHeader("Referer")}}
  - : The address of the previous web page from which a link to the currently requested page was followed.
- {{HTTPHeader("Referrer-Policy")}}
  - : Governs which referrer information sent in the {{HTTPHeader("Referer")}} header should be included with requests made.
- {{HTTPHeader("User-Agent")}}
  - : Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the [Firefox user agent string reference](/pt-BR/docs/Web/HTTP/Headers/User-Agent/Firefox).

## Contexto da resposta

- {{HTTPHeader("Allow")}}
  - : Lista o conjunto de métodos de requisição HTTP suportados por um recurso.
- {{HTTPHeader("Server")}}
  - : Contém informações a respeito do programa utilizado pelo servidor de origem para lidar com a requisição.

## Requisições Range

- {{HTTPHeader("Accept-Ranges")}}
  - : Indica se o servidor suporta solicitações de intervalo, se sim, em qual unidade o intervalo pode ser expresso.
- {{HTTPHeader("Range")}}
  - : Indica a parte de um documento que o servidor deve retornar.
- {{HTTPHeader("If-Range")}}
  - : Cria uma solicitação de intervalo condicional que é atendida se a etag ou data fornecida no parâmetro corresponde ao recurso remoto. Usado para impedir o download de dois intervalos da versão incompatível do recurso.
- {{HTTPHeader("Content-Range")}}
  - : Indica onde uma parte da mensagem faz parte de uma mensagem inteira de corpo.

## Segurança

- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Controls resources the user agent is allowed to load for a given page.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Allows web developers to experiment with policies by monitoring (but not enforcing) their effects. These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP `POST` request to the specified URI.
- {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}})
  - : Associates a specific cryptographic public key with a certain web server to decrease the risk of {{Glossary("MITM")}} attacks with forged certificates.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Force communication using HTTPS instead of HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the {{CSP("upgrade-insecure-requests")}} directive.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Disables MIME sniffing and forces browser to use the type given in {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Indicates whether or not a browser should be allowed to render a page in a {{HTMLElement("frame")}}, {{HTMLElement("iframe")}} or {{HTMLElement("object")}}
- {{HTTPHeader("X-XSS-Protection")}}
  - : Enables cross-site scripting filtering.

## Server-sent events

- {{HTTPHeader("Ping-From")}}
  - : ...
- {{HTTPHeader("Ping-To")}}
  - : ...
- {{HTTPHeader("Last-Event-ID")}}
  - : ...

## Transfer coding

- {{HTTPHeader("Transfer-Encoding")}}
  - : Specifies the the form of encoding used to safely transfer the entity to the user.
- {{HTTPHeader("TE")}}
  - : Specifies the transfer encodings the user agent is willing to accept.
- {{HTTPHeader("Trailer")}}
  - : Allows the sender to include additional fields at the end of chunked message.

## WebSockets

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : ...

## Outros

- {{HTTPHeader("Date")}}
  - : Contém a data e hora em que a mensagem foi produzida.
- {{HTTPHeader("Link")}}
  - : ...
- {{HTTPHeader("Retry-After")}}
  - : Indica quanto tempo o User-Agent deve esperar antes de realizar uma requisição de acompanhamento.
- {{HTTPHeader("Upgrade")}}
  - : This is a Proposed Internet Standard. To view a comprehensive list of all Official and Proposed Internet Standards with detailed information about each, [visit this Internet Standards reference](https://www.rfc-editor.org/standards), which is updated daily. The relevant RFC document for the [Upgrade header field standard is RFC 7230, section 6.7](https://tools.ietf.org/html/rfc7230#section-6.7). The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Niether party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field [please see section 6.1 of the aforementioned RFC](https://tools.ietf.org/html/rfc7230#section-6.1).
- {{HTTPHeader("Vary")}}
  - : Determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.
- {{HTTPHeader("X-Content-Duration")}}
  - : ...
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.
- {{HTTPHeader("X-Requested-With")}}
  - : ...
- {{HTTPHeader("X-UA-Compatible")}}
  - : ...

## Veja também

- [Wikipedia page on List of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html)
