---
title: Pragma
slug: Web/HTTP/Headers/Pragma
---

{{HTTPSidebar}}

O cabeçalho genérico HTTP/1.0 **`Pragma`** é um cabeçalho de implementação específica que pode ter vários efeitos ao longo da cadeia de requisição e resposta. Ele é usado para compatibilidade retroativa com caches do HTTP/1.0 onde o cabeçalho HTTP/1.1 `Cache-Control` ainda não está presente.

> **Nota:** `Pragma` não é especificado para respostas HTTP e por isso não é uma substituição confiável para o cabeçalho genérico HTTP/1.1 `Cache-Control`, apesar de ele ter o mesmo comportamento que `Cache-Control: no-cache`, se o cabeçalho `Cache-Control` for omitido na requisição. Use `Pragma` somente para compatibilidade retroativa com clientes HTTP/1.0.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>
        {{Glossary("General header")}}, mas o comportamente de
        resposta não é especificado e portanto específico de implementação.
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Pragma: no-cache
```

## Diretivas

- no-cache
  - : O mesmo que `Cache-Control: no-cache`. Força os caches a mandarem uma requisição ao servidor de origem para validação antes de liberar a versão cacheada.

## Exemplos

```
Pragma: no-cache
```

## Especificações

| Especificação                    | Título                                          |
| -------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Pragma", "5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Compatibilidade com navegadores

{{Compat("http.headers.Pragma")}}

## Veja também

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
