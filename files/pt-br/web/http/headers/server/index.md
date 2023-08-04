---
title: Server
slug: Web/HTTP/Headers/Server
---

{{HTTPSidebar}}

O cabeçalho **`Server`** contem informação sobre o software usado pelo servidor de origem para manipular a solicitação.

Valores excessivamente longos e detalhados do Servidor devem ser evitados, já que eles potencialmente revelam detalhes internos de implementação que podem tornar (um pouco) mais fácil para os invasores encontrarem e explorarem falhas de segurança conhecidas.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Server: <product>
```

## Diretivas

- \<product>
  - : O nome do software ou (sub) produto que manipula as solicitações.

## Exemplos

```
Server: Apache/2.4.1 (Unix)
```

## Especificações

| Specification                      | Title                                                        |
| ---------------------------------- | ------------------------------------------------------------ |
| {{RFC("7231", "Server", "7.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semântica e Conteúdo |

## Compatibilidade com navegadores

{{Compat("http.headers.Server")}}

## Veja também

- {{HTTPHeader("Allow")}}
