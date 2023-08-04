---
title: HEAD
slug: Web/HTTP/Methods/HEAD
---

{{HTTPSidebar}}

O **método HTTP `HEAD`** solicita os cabeçalhos retornados de um recurso específico que foi requisitado por um método HTTP {{HTTPMethod("GET")}}. Tal solicitação pode ser feita antes de baixar um grande recurso para economizar largura de banda, por exemplo.

Uma resposta para um método `HEAD` não deve ter um corpo. Se tiver, deve ser ignorado. Mesmo assim, {{glossary("Entity header", "entity headers")}} (cabeçalhos de entidade) descrevendo o conteúdo do corpo (como {{HTTPHeader("Content-Length")}}) podem ser incluidos na resposta. Eles não se relacionam com o corpo da resposta `HEAD`, que deve estar vazio, e sim com o corpo de solicitação relacionado, usando o método {{HTTPMethod("GET")}} que teria retornado como resposta.

Se a resposta de uma solicitação `HEAD` mostrar que um recurso armazenado em cache após uma requisição {{HTTPMethod("GET")}} está desatualizado, o cache é invalidado, mesmo se nenhuma solicitação `GET` tiver sido feita.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Solicitação tem um corpo</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">A resposta bem sucedida tem um corpo</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido em
        <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulário HTML</a>
      </th>
      <td>Não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
HEAD /index.html
```

## Especificações

| Especificação                    | Título                                                       |
| -------------------------------- | ------------------------------------------------------------ |
| {{RFC("7231", "HEAD", "4.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semântica e Conteúdo |

## Compatibilidade com navegadores

{{Compat("http.methods.HEAD")}}

## Veja também

- {{HTTPMethod("GET")}}
