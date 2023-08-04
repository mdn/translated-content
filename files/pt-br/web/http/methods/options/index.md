---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
---

{{HTTPSidebar}}

O **método HTTP `OPTIONS` **é utilizado para que um cliente possa descobrir quais as opções de requisição permitidas para um determinado recurso em um servidor. O cliente pode especificar uma URL específica no método `OPTIONS` ou um asterisco(\*) indicando que se refere ao servidor como um todo para sanar suas dúvidas em relação as opções de requisição permitidas.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request possui corpo</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">Resposta bem sucedida possui corpo</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Seguro")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheável")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">Permitido em formulários HTML</th>
      <td>Não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## Exemplos

### Descobrindo quais tipos de requisição são permitidas

Para descobrir quais tipos de requisição um servidor suporta, é possível utilizar o curl e enviar uma requisição OPTIONS:

```
curl -X OPTIONS http://example.org -i
```

A resposta terá um cabeçalho {{HTTPHeader("Allow")}} com os métodos permitidos:

```
HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
Content-Length: 0
```

### Requisições Preflighted no CORS

No [CORS](/pt-BR/docs/Web/HTTP/Access_control_CORS), uma requisição preflight com o método OPTIONS é enviada para que o servidor possa indicar se é possível enviar uma requisição específica com os parâmetros informados. No exemplo abaixo, o cabeçalho {{HTTPHeader("Access-Control-Request-Method")}} indica para o servidor que quando a requisição específica for enviada, ela será enviada como uma requisição POST. O cabeçalho {{HTTPHeader("Access-Control-Request-Headers")}} indica para o servidor que quando a requisição específica for enviada, ela será enviada com os cabeçalhos customizados `X-PINGOTHER` e `Content-Type`. A partir desta requisição com o método OPTIONS, o servidor possui a oportunidade de indicar se a requisição específica será aceita da forma como foi indicada pelos parâmetros supracitados (o método POST e os dois cabeçalhos customizados).

```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

Em nosso exemplo, o servidor responde com {{HTTPHeader("Access-Control-Allow-Methods")}} indicando que os métodos `POST`, `GET`, e `OPTIONS` são permitidos para utilização em relação ao recurso em questão. Este cabeçalho é similar ao cabeçalho de resposta {{HTTPHeader("Allow")}} , no entanto ele somente é utilizado no contexto do CORS.

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

## Especificações

| Especificação                       | Título                                                        |
| ----------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "OPTIONS", "4.3.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.methods.OPTIONS")}}

## Veja também

- {{HTTPHeader("Allow")}} header
- [CORS](/pt-BR/docs/Web/HTTP/Access_control_CORS)
