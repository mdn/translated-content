---
title: Método de requisição QUERY
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
l10n:
  sourceCommit: 2a973f388561148f5a8001e572dac8143c5a5914
---

O método HTTP `QUERY` inicia uma consulta no lado do servidor. Ele solicita que o recurso de destino processe o conteúdo da requisição de maneira segura e idempotente, retornando o resultado na resposta.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Requisição tem corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Resposta bem-sucedida tem corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Seguro")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cacheável")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido em <a href="/pt-BR/docs/Learn_web_development/Extensions/Forms">formulários HTML</a>
      </th>
      <td>Não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```http
QUERY <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifica o recurso de destino que processará a consulta, quando combinado com as informações fornecidas no cabeçalho {{HTTPHeader("Host")}}.
    É um caminho absoluto (por exemplo, `/path/to/resource`) em requisições a um servidor de origem, e uma URL absoluta em requisições a proxies (por exemplo, `https://example.com/path/to/resource`).
- `<query>` {{optional_inline}}
  - : Um componente de consulta de URI opcional, precedido por um ponto de interrogação (`?`).
    Ele ajuda a identificar o recurso consultado; o conteúdo da requisição e seu tipo de mídia definem a consulta propriamente dita.

## Descrição

O método `QUERY` pede ao recurso de destino que execute uma operação de consulta dentro do seu próprio escopo e retorne o resultado. Isso contrasta com o {{HTTPMethod("GET")}}, que pede uma representação do recurso identificado pela URI de destino.
O conteúdo da requisição e seu {{HTTPHeader("Content-Type")}} definem a consulta; o recurso de destino determina sobre o que a consulta é executada, por exemplo uma tabela de banco de dados, um índice de busca ou uma coleção exposta por uma API.

Como a consulta trafega no conteúdo da requisição e não na URI, ela não está sujeita aos limites de tamanho e de codificação que se aplicam a um componente de consulta de URI.
Ela também fica menos exposta do que uma consulta na URI; veja [Considerações de segurança](#considerações_de_segurança) para mais detalhes.

`QUERY` não substitui o `GET` em todos os casos.
Quando uma consulta é pequena o suficiente para caber na URI, `GET` continua sendo uma boa escolha: ele produz uma URL que pode ser salva nos favoritos, referenciada por links e armazenada em cache sem trabalho adicional.
`QUERY` é particularmente útil quando a URI se torna impraticável, como em consultas grandes ou estruturadas — uma instrução SQL ou uma expressão JSONPath, por exemplo —, ou em consultas que não devem ficar expostas na URI.

Por carregar conteúdo, `QUERY` se assemelha ao {{HTTPMethod("POST")}}, mas, diferentemente do `POST`, ele é explicitamente {{Glossary("Safe/HTTP", "seguro")}} e {{Glossary("Idempotent", "idempotente")}}.
O cliente não solicita nem espera nenhuma alteração no recurso de destino; portanto, você pode repetir requisições `QUERY` após uma falha de conexão sem se preocupar com efeitos adicionais.

### Descobrindo o suporte

Um recurso anuncia o `QUERY` como qualquer outro método, por meio do método {{HTTPMethod("OPTIONS")}} e do cabeçalho de resposta {{HTTPHeader("Allow")}}.

Um cliente pode consultar as opções de um recurso assim:

```http
OPTIONS /contacts HTTP/1.1
Host: example.org
```

O recurso pode responder assim para indicar que aceita requisições `QUERY`:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
```

Um cliente pode enviar a requisição `QUERY` sem saber se ela é suportada.
O servidor irá processá-la ou responder com {{HTTPStatus("405", "405 Method Not Allowed")}}, junto com um cabeçalho `Allow` listando os métodos que ele suporta.

Os _formatos_ de consulta que um recurso aceita são anunciados separadamente, por meio do cabeçalho de resposta {{HTTPHeader("Accept-Query")}}.
O cliente pode ler os formatos aceitos no cabeçalho `Accept-Query`.

Por exemplo, um recurso pode anunciar os formatos que aceita assim:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
Accept-Query: application/x-www-form-urlencoded, application/sql
```

O cliente pode então enviar uma requisição `QUERY` em um desses formatos:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/sql
Accept: application/json

SELECT surname, email FROM contacts LIMIT 10
```

Como alternativa, o cliente pode enviar a requisição `QUERY` no formato desejado e ler os tipos de mídia suportados no cabeçalho {{HTTPHeader("Accept")}} da resposta {{HTTPStatus("415", "415 Unsupported Media Type")}} resultante.

### Tipos de mídia e respostas de erro

Um servidor deve rejeitar uma requisição `QUERY` cujo {{HTTPHeader("Content-Type")}} esteja ausente ou seja inconsistente com o conteúdo da requisição.
Servidores não podem adivinhar o tipo de mídia a partir do próprio conteúdo. A resposta depende de como a requisição está malformada:

- {{HTTPStatus("400", "400 Bad Request")}}: A requisição não traz nenhuma informação de tipo de mídia, ou o tipo de mídia declarado é inconsistente com o conteúdo real.
- {{HTTPStatus("415", "415 Unsupported Media Type")}}: O tipo de mídia não é suportado pelo recurso. Isso inclui os casos em que o tipo é compreendido de modo geral, mas não tem significado como consulta para esse recurso.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: O tipo de mídia é compreendido e o conteúdo corresponde a ele, mas a consulta em si não pode ser processada — por exemplo, uma consulta SQL sintaticamente válida que referencia uma tabela inexistente.
- {{HTTPStatus("406", "406 Not Acceptable")}}: O cliente pediu, por meio do {{HTTPHeader("Accept")}}, um tipo de mídia de resposta que o recurso não consegue produzir.

### Recursos equivalentes

O _recurso equivalente_ de uma requisição `QUERY` é um recurso que responde a `GET` e representa a requisição `QUERY`, incluindo seu destino e seu conteúdo.
Seu propósito é permitir que um cliente repita a mesma consulta mais tarde com uma requisição `GET` simples, sem reenviar o conteúdo da consulta.
Na prática, é o recurso ao qual o `QUERY` se dirige, com o conteúdo da requisição incorporado à sua identidade.

O recurso equivalente sempre existe conceitualmente, mas os servidores não são obrigados a lhe atribuir uma URI.
Quando um servidor o representa em uma URI, uma resposta bem-sucedida a uma requisição `QUERY` pode apontar para ele, e para uma cópia armazenada do resultado, por meio de dois cabeçalhos diferentes:

- {{HTTPHeader("Content-Location")}}: Identifica um recurso que contém **o resultado da consulta que acabou de ser executada**.
  Um `GET` nessa URI recupera os mesmos resultados novamente.
- {{HTTPHeader("Location")}}: Identifica o recurso equivalente, que **executa novamente a mesma consulta**.
  Um `GET` nessa URI repete a operação sobre os dados atuais sem reenviar o conteúdo da consulta; portanto, o resultado pode ser diferente da resposta original.

Não há garantia de que nenhum dos dois recursos seja permanente.
Se uma requisição posterior a um deles falhar, o cliente pode recorrer à repetição da requisição `QUERY` original com seu conteúdo original.

Como essas URIs fazem as vezes de uma consulta, um servidor que lida com conteúdo de requisição sensível deve gerá-las sem embutir nenhuma parte sensível do conteúdo.
Caso contrário, a consulta volta a ficar em uma URI, e perde-se o benefício de menor exposição descrito em [Considerações de segurança](#considerações_de_segurança).

### Redirecionamento

Um servidor pode responder a um `QUERY` indiretamente, redirecionando o cliente.
Com {{HTTPStatus("301", "301 Moved Permanently")}}, {{HTTPStatus("308", "308 Permanent Redirect")}}, {{HTTPStatus("302", "302 Found")}} ou {{HTTPStatus("307", "307 Temporary Redirect")}}, espera-se que o cliente envie uma requisição `QUERY` semelhante à URI informada em {{HTTPHeader("Location")}}.
Historicamente, clientes que seguem um redirecionamento {{HTTPStatus("301")}} ou {{HTTPStatus("302")}} têm permissão para transformar uma requisição `POST` em uma requisição `GET`.
Isso **não** se aplica ao `QUERY`: para os quatro códigos de status acima, a requisição redirecionada continua sendo uma requisição `QUERY` com o mesmo conteúdo.

Uma resposta {{HTTPStatus("303", "303 See Other")}} significa que a consulta pode ser atendida por um `GET` simples na URI em `Location`.
A resposta `303` em si não inclui um resultado de consulta, o que permite ao servidor devolver um recurso equivalente sem calcular a resposta na hora.

### Requisições condicionais

A representação selecionada de uma requisição `QUERY` é a mesma de um `GET` no seu recurso equivalente.
Um `QUERY` condicional, portanto, se comporta como esperado: os resultados da consulta só são retornados se a condição em cabeçalhos como {{HTTPHeader("If-None-Match")}} ou {{HTTPHeader("If-Modified-Since")}} for satisfeita; caso contrário, é retornado um {{HTTPStatus("304", "304 Not Modified")}}.
Isso permite que um cliente execute novamente uma consulta custosa evitando o custo de transferir um resultado que não mudou.

### Cache

Respostas a `QUERY` são {{Glossary("cacheable", "cacheáveis")}}, mas a chave de cache deve incorporar o conteúdo da requisição e os metadados associados a ele, porque a URI da requisição sozinha já não identifica a consulta.
Um cache precisa, portanto, ler todo o conteúdo da requisição antes de conseguir encontrar uma resposta armazenada correspondente, o que torna o cache de requisições `QUERY` mais trabalhoso do que o de requisições `GET`.
Servidores cujas respostas dependem do conteúdo da requisição indicam isso com o cabeçalho {{HTTPHeader("Vary")}}.
O `Vary` informa aos caches que a resposta depende de mais do que a URI. No exemplo a seguir, uma resposta armazenada só pode ser reutilizada para uma requisição cujos valores dos campos de cabeçalho listados coincidam.

```http
Vary: Accept-Query, Content-Encoding, Content-Type
```

Para melhorar sua taxa de acertos, os caches podem normalizar diferenças semanticamente insignificantes no conteúdo da requisição antes de derivar a chave, como remover uma codificação de conteúdo.
Essa normalização só é segura se corresponder à forma como o próprio recurso interpreta o conteúdo.
Um cache que normaliza incorretamente, ou de uma forma que difere significativamente da do recurso, pode tratar duas requisições como equivalentes quando não são e servir a resposta errada.
Um cliente que precise impedir a normalização pode enviar {{HTTPHeader("Cache-Control")}} com a diretiva `no-transform`, embora a diretiva seja apenas uma recomendação.

Quando uma resposta fornece um cabeçalho `Location` identificando um recurso equivalente, os clientes podem passar a usar `GET` nas requisições seguintes e contar com o cache comum de `GET`.

### Considerações de segurança

`QUERY` carrega sua entrada no conteúdo da requisição, e não na URI.
É mais provável que uma URI seja registrada em logs ou processada de alguma outra forma por intermediários do que o conteúdo da requisição; por isso, tirar a consulta da URI reduz o quanto ela fica exposta.
Por esse motivo, deve-se considerar o `QUERY` em vez do `GET` para consultas confidenciais.

O benefício só se mantém se o restante da troca o preservar; observe as restrições sobre as [URIs de recursos equivalentes](#recursos_equivalentes) e a [normalização em caches](#cache) descritas acima.

## Exemplos

### Consultando uma coleção

A requisição a seguir consulta uma coleção de contatos.
O conteúdo da requisição seleciona três campos, limita a resposta a dez resultados e filtra os contatos pelo endereço de e-mail:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenName,email&limit=10&email=%2A%40example.%2A
```

Uma resposta bem-sucedida inclui o resultado da consulta no conteúdo da resposta:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenName": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

### Reutilizando um resultado e repetindo uma consulta

Um servidor pode retornar tanto {{HTTPHeader("Content-Location")}} quanto {{HTTPHeader("Location")}} junto com o resultado, oferecendo dois recursos diferentes acessíveis via `GET`: uma cópia armazenada desse resultado e o [recurso equivalente](#recursos_equivalentes), que executa a consulta novamente:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Location: /contacts/stored-results/17
Location: /contacts/stored-queries/42
Last-Modified: Sat, 25 Aug 2012 23:34:45 GMT

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenName": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

Um `GET` na URI de `Content-Location` retorna o resultado armazenado daquela consulta específica, sem alterações:

```http
GET /contacts/stored-results/17 HTTP/1.1
Host: example.org
Accept: application/json
```

Já um `GET` na URI de `Location` executa a consulta novamente, de modo que o resultado reflete os dados atuais.
Aqui, um contato foi removido desde a requisição original, e a resposta traz um {{HTTPHeader("ETag")}} para uso em requisições condicionais posteriores:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Last-Modified: Sun, 17 Nov 2024 16:12:01 GMT
ETag: "42-1"

[
  {
    "surname": "Smith",
    "givenName": "John",
    "email": "smith@example.org"
  }
]
```

Uma requisição `GET` condicional posterior que envie `If-None-Match: "42-1"` resultará em {{HTTPStatus("304", "304 Not Modified")}} se o resultado não tiver mudado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

A compatibilidade com navegadores não é relevante para este método.
Os navegadores não têm suporte de integração específico para o `QUERY`: ele não é enviado em ações iniciadas pelo usuário, como o envio de formulários HTML, e os navegadores não o enviam automaticamente em resposta a outros cabeçalhos ou mecanismos.

Desenvolvedores podem emitir uma requisição `QUERY` usando [`fetch()`](/pt-BR/docs/Web/API/Window/fetch).
Observe que, como `QUERY` não é um dos métodos da lista segura do CORS (_CORS-safelisted_), requisições entre origens disparam uma requisição {{HTTPMethod("OPTIONS")}} de comprovação ({{Glossary("Preflight_request", "preflight")}}) do [CORS](/pt-BR/docs/Web/HTTP/Guides/CORS), da mesma forma que os demais métodos não simples.

## Veja também

- [Métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Reference/Methods)
- {{HTTPHeader("Accept-Query")}}
- {{HTTPMethod("GET")}} e {{HTTPMethod("POST")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}} e {{HTTPHeader("Location")}}
- {{HTTPHeader("Allow")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
