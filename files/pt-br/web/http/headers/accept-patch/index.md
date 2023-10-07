---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Accept-Patch`** indica qual tipo de mídia o servidor está apto a entender.

**`Accept-Patch`** na resposta de qualquer método significa que o PATCH é permitido no recurso identificado pela Request-URI. Dois casos comuns que levam a isso:

O servidor recebendo uma requisição PATCH com um tipo de mídia não suportado pode responder com {{HTTPStatus("415")}} `Unsupported Media Type` e um cabeçalho Accept-Patch referenciando um ou mais tipos de mídia suportados.

> **Nota:** **Notas:**- Um registro da IANA mantém [uma lista oficial completa das codificações de conteúdo](http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).
>
> - Duas outras codificações de conteúdo, `bzip` e `bzip2`, são algumas vezes utilizadas, entretanto não são o padrão. Elas implementam o algoritmo usado por estes dois programas UNIX. Note que o primeiro foi descontinuado por problemas de patente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## Diretivas

Nenhuma.

## Exemplos

```
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## Especificações

| Specification                          | Título     |
| -------------------------------------- | ---------- |
| {{RFC("5789", "Accept-Patch", "3.1")}} | HTTP PATCH |

## Compatibilidade com navegadores

{{Compat("http.headers.Accept-Patch")}}

## Veja também

- Método HTTP {{HTTPMethod("PATCH")}}
- Semântica e contexto HTTP {{RFC("7231", "PUT", "4.3.4")}}
