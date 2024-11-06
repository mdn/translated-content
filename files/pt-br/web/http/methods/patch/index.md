---
title: PATCH
slug: Web/HTTP/Methods/PATCH
---

{{HTTPSidebar}}

O **método de requisição HTTP PATCH** aplica modificações parciais a um recurso.

O método HTTP {{HTTPMethod("PUT")}} permite apenas substituições completas de um documento. Em contraste ao `PUT`, o método `PATCH` não é idempotente, ou seja, requisições sucessivas idênticas _podem_ obter efeitos distintos. Todavia, é possível realizar requisições `PATCH` de modo a serem idempotentes.

`PATCH` (assim como `PUT`) podem ter efeitos colaterais em outros recursos.

Para descobrir se um servidor dá suporte a `PATCH`, um servidor pode divulgar seu suporte adicionando tal suporte à lista no cabeçalho de resposta HTTP {{HTTPHeader("Allow")}} ou {{HTTPHeader("Access-Control-Allow-Methods")}} (para CORS).

Outra indicação (implícita) da permissão de PATCH é a presença do cabeçalho {{HTTPHeader("Accept-Patch")}}, que especifica o formato do documento patch aceito pelo servidor.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Requisição possui corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Resposta sucedida possui corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido em
        <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulários HTML</a>
      </th>
      <td>Não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
PATCH /file.txt HTTP/1.1
```

## Exemplo

### Requisição

```http
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[descrição das mudanças]
```

### Resposta

Uma resposta sucedida é indicada pelo _status_ de resposta {{HTTPStatus("204")}}, visto que a resposta não carrega um corpo de mensagem.

```http
HTTP/1.1 204 No Content
Content-Location: /arquivo.txt
ETag: "e0023aa4f"
```

## Especificações

| Especificação            | Título                |
| ------------------------ | --------------------- |
| {{RFC("5789", "PATCH")}} | PATCH Method for HTTP |

## Veja também

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – Especifica o documento patch aceito pelo servidor.
