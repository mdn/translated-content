---
title: TRACE
slug: Web/HTTP/Methods/TRACE
---

{{HTTPSidebar}}

O **método** **HTTP `TRACE` **realiza um teste de loopback enviando uma mensagem por todo o caminho até o recurso alvo no qual foi destinado, provendo um mecanismo útil para debug.

O destinatário final deve responder a mensagem recebida, excluindo alguns campos descritos abaixo, de volta para o client com um status code 200 (OK) e um cabeçalho {{httpheader("Content-Type")}}. O destinatário final pode ser o servidor de origem ou o primeiro servidor a receber a requisição com o cabeçalho {{httpheader("Max-Forwards")}} com valor 0.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Requisição possui body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Resposta com sucesso possui body</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Seguro")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheavel")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Permitido nos formatos HTML</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
TRACE /index.html
```

## Especificações

| Specification                     | Title                                                         |
| --------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "TRACE", "4.3.8")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.methods.TRACE")}}

## Veja também

- [HTTP methods](/pt-BR/docs/Web/HTTP/Methods)
