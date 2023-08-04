---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
---

{{HTTPSidebar}}

O cabeçalho de entidade **`Content-Length`** indica o tamanho do corpo da entidade, em bytes, enviado ao destinatário.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Content-Length: <tamanho>
```

## Diretivas

- \<tamanho>
  - : O tamanho em número decimal de octetos.

## Especificações

| Especificação                              | Título                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------- |
| {{RFC("7230", "Content-Length", "3.3.2")}} | Protocolo de Transferência de Hypertexto (HTTP/1.1): Sintaxe de mensagem e Roteamento |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Length")}}

## Veja também

- {{HTTPHeader("Transfer-Encoding")}}
