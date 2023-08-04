---
title: Allow
slug: Web/HTTP/Headers/Allow
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Allow`** lista um conjunto de métodos suportados pelo recurso.

O cabeçalho deve ser enviado se o servidor responde com um código de resposta {{HTTPStatus("405")}} `Method Not Allowed`, para indicar quais métodos de requisição podem ser utilizados. Um cabeçalho `Allow` vazio indica que o recurso não permite cabeçalhos de requisição, o que pode acontecer temporariamente para um dado recurso, por exemplo.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Allow: <métodos-http>
```

## Diretivas

- \<métodos-http>
  - : Uma lista de [métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Methods) separados por vírgula.

## Exemplos

```
Allow: GET, POST, HEAD
```

## Especificações

| Especificação                     | Título                                                        |
| --------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Allow", "7.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Veja também

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
