---
title: Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
original_slug: Web/HTTP/Headers/Content-Digest
---

O cabeçalho de resposta HTTP **`Digest`** provém uma {{Glossary("digest")}} do recurso requisitado.

Nos termos da [RFC 7231](https://tools.ietf.org/html/rfc7231) esta é a _representação selecionada_ de um recurso. A representação selecionada depende dos valores dos cabeçalhos [`Content-Type`](/pt-BR/docs/Web/HTTP/Reference/Headers/Content-Type) e [`Content-Encoding`](/pt-BR/docs/Web/HTTP/Reference/Headers/Content-Encoding): então um único recurso pode ter diversos valores de "digestão".

A "digestão" é calculada através da representação inteira. A representação em si pode ser:

- totalmente contida no corpo da mensagem de resposta
- não contida no corpo da mensagem (por exemplo, na resposta para uma requisição [`HEAD`](/pt-BR/docs/Web/HTTP/Reference/Methods/HEAD))
- parcialmente contido no corpo da mensagem (por exemplo, em uma resposta para uma [requisição de intervalo](/pt-BR/docs/Web/HTTP/Range_requests)).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo do cabeçalho</th>
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
Digest: <digest-algorithm>=<digest-value>

Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## Diretivas

- `<digest-algorithm>`
  - : Algoritmos de digestão suportados são definidos na [RFC 3230](https://tools.ietf.org/html/rfc3230) e [RFC 5843](https://tools.ietf.org/html/rfc5843), e incluem `SHA-256` e `SHA-512`. Alguns dos algoritmos suportados, incluindo `unixsum` e `MD5` são sujeitos a colisões e não são recomendados para aplicações onde resistência à colisções é importante.
- `<digest-value>`
  - : O resultado de aplicação do algoritmo de digestão na representação do recurso e codificando o resultado. A escolha do algoritmo de digestão também determina a codificação a ser usada: por exemplo `SHA-256` usa codificação _base64_.

## Exemplos

```
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=,unixsum=30637
```

## Especificações

| Especificação                                                                                                  | Título                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [draft-ietf-httpbis-digest-headers-latest](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers) | Resource Digests for HTTP |

Este cabeçalho foi originalmente definido na [RFC 3230](https://tools.ietf.org/html/rfc3230), mas a definição de "representação selecionada" na [RFC 7231](https://www.rfc-editor.org/info/rfc7231) fez com que a definição original ficasse inconsistente com as especificações atuais do HTTP. Quando lançado, o rascunho de "Digestão de recursos para HTTP" tornará a RFC 3230 obsoleta e atualizará o padrão para ser consistente.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Want-Digest")}}
- [Requisições de intervalo HTTP](/pt-BR/docs/Web/HTTP/Range_requests)
- [`206 Partial Content`](/pt-BR/docs/Web/HTTP/Reference/Status/206)
