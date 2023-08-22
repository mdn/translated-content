---
title: Access-Control-Allow-Headers
slug: Web/HTTP/Headers/Access-Control-Allow-Headers
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Access-Control-Allow-Headers`** é usado na resposta à uma {{glossary("preflight request")}} na qual incluí o cabeçalho {{HTTPHeader("Access-Control-Request-Headers")}} para indicar quais cabeçalhos HTTP podem ser utilizados durante a requisição efetiva.

Este cabeçalho é obrigatório se a requisição tem um cabeçalho {{HTTPHeader("Access-Control-Request-Headers")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Access-Control-Allow-Headers: <nome-do-cabeçalho>[, <nome-do-cabeçalho>]*
Access-Control-Allow-Headers: *
```

## Diretivas

- `<nome-do-cabeçalho>`
  - : O nome de um cabeçalho suportado. O cabeçalho pode listar qualquer quantidade de cabeçalhos, desde que sejam separados por vírgula.
- `*` (coringa)
  - : O valor "`*`" só conta como um valor coringa para requisições sem credenciais (requisições sem [cookies HTTP](/pt-BR/docs/Web/HTTP/Cookies) ou informação de autenticação HTTP). Em requisições com credenciais, isso é tratado como o nome de cabeçalho literal "`*`" sem qualquer semântica especial. Note que o cabeçalho {{HTTPHeader("Authorization")}} não pode utilizar um coringa e sempre precisa ser listado explicitamente.

Os cabeçalhos {{glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} são sempre permitidos e não precisam ser listados por este cabeçalho necessariamente. Entretanto, note que restrições adicionais são aplicadas com estes cabeçalhos envolvidos por listar estes cabeçalhos no cabeçalho `Access-Control-Allow-Headers` também.

## Exemplos

### Um cabeçalho customizado

Aqui está um exemplos de como um cabeçalho `Access-Control-Allow-Headers` pode se parecer. Isso indica que em adição aos _CORS-safelisted request headers_, um cabeçalho customizado chamado `X-Custom-Header` é suportado por requisições CORS pelo servidor.

```
Access-Control-Allow-Headers: X-Custom-Header
```

### Múltiplos cabeçalhos

Este exemplo mostra o cabeçalho `Access-Control-Allow-Headers` quando é especificado para suportar diversos cabeçalhos.

```
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Burlando restrições adicionais

Apesar de que {{glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} são sempre permitidos e geralmente não precisam ser listados no cabeçalho `Access-Control-Allow-Headers`, listá-los de qualquer forma irá envolver as [restrições adicionais](/pt-BR/docs/Glossary/CORS-safelisted_request_header#Additional_restrictions) que são aplicadas.

```
Access-Control-Allow-Headers: Accept
```

### Exemplo de requisição pré-vôo

Vamos dar uma olhada em um exemplo de requisição pré-vôo envolvendo o cabeçalho `Access-Control-Allow-Headers`.

#### Requisição

Primeiro, a requisição. A requisição pré-vôo é uma requisição {{HTTPMethod("OPTIONS")}} que inclui algumas combinações de três cabeçalhos de requisições pré-vôo: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}}, e {{HTTPHeader("Origin")}}, como por exemplo:

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

#### Resposta

Se o servidor permite requisições CORS para usar o método {{HTTPMethod("DELETE")}}, ele responde com um cabeçalho de resposta {{HTTPHeader("Access-Control-Allow-Methods")}}, no qual lista `DELETE` junto à outros métodos suportados:

```
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

Se o método requisitado não é suportado, o servidor irá responder com um erro.

## Especificações

| Especificação                                                                              | Status             | Comentário        |
| ------------------------------------------------------------------------------------------ | ------------------ | ----------------- |
| {{SpecName('Fetch','#http-access-control-allow-headers', 'Access-Control-Allow-Headers')}} | {{Spec2("Fetch")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Allow-Headers")}}

## Veja também

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
