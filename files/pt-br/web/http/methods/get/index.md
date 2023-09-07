---
title: GET
slug: Web/HTTP/Methods/GET
---

{{HTTPSidebar}}O **método HTTP GET** solicita uma representação do recurso especificado. Solicitações usando GET só devem recuperar dados.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Requisição tem corpo</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">Resposta bem-sucedida tem corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Safe"
          >Seguro</a
        >
      </th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent"
          >Idempotente</a
        >
      </th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Cacheable"
          >Cacheável</a
        >
      </th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Permitido em formulários HTML</th>
      <td>SIm</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
GET /index.html
```

## Especificações

| Especificação                   | Título                                                        |
| ------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "GET", "4.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.methods.GET")}}

## Veja também

- {{HTTPHeader("Range")}}
