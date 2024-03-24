---
title: Want-Digest
slug: Web/HTTP/Headers/Want-Digest
---

{{HTTPSidebar}}

O cabeçalho HTTP **`Want-Digest`** é primordialmente usado em uma requisição HTTP, para pedir ao respondedor para prover uma digestão ({{Glossary("digest")}}) do recurso requisitado usando o cabeçalho de resposta [`Digest`](/pt-BR/docs/Web/HTTP/Headers/Digest).

O cabeçalho contém identificadores para um ou mais algoritmos de digestão que o remetente deseja que o respondedor use para criar a digestão. O remetente pode usar [valores de qualidade](/pt-BR/docs/Glossary/Quality_values) para indicar sua preferência ordenando dentre as escolhas que ele oferece.

Se `Want-Digest` não inclui nenhum algoritmo de digestão que aquele servidor suporta, o servidor pode responder com:

- uma digestão calculada usando outro algoritmo de digestão, ou
- um erro [`400 Bad Request`](/pt-BR/docs/Web/HTTP/Status/400), e inclui outro cabeçalho `Want-Digest` com a resposta, listando os algoritmos que ele suporta.

Veja a página do cabeçalho [`Digest`](/pt-BR/docs/Web/HTTP/Headers/Digest) para mais informações.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Want-Digest: <digest-algorithm>

// Múltiplos algoritmos, pesados com a sintaxe de qualidade de valor:
Want-Digest: <digest-algorithm><q-value>,<digest-algorithm><q-value>
```

## Diretivas

- `<digest-algorithm>`
  - : Algoritmos de digestão suportados são definidos na [RFC 3230](https://tools.ietf.org/html/rfc3230) e [RFC 5843](https://tools.ietf.org/html/rfc5843), e inclui `SHA-256` e `SHA-512`. Alguns algoritmos suportados, incluindo `unixsum` e `MD5` são sujeitos a colisões e não são apropriados para aplicações em que resistência à colisão é importante.
- `<q-value>`
  - : O [valor de qualidade](/pt-BR/docs/Glossary/Quality_values) para aplicar aquela opção.

## Exemplos

```
Want-Digest: sha-256
Want-Digest: SHA-512;q=0.3, sha-256;q=1, md5;q=0
```

### Operação básica

O remetente provém a lista de digestões que ele está preparado para aceitar, e o servidor usa um deles:

```
Request:

  GET /item
  Want-Digest: sha-256;q=0.3, sha;q=1

Response:

  HTTP/1.1 200 Ok
  Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

### Digestões não suportadas

O servidor não suporta nenhum do algoritmos de digestão requisitados, então ele usa um algoritmo diferente:

```
Request:

  GET /item
  Want-Digest: sha;q=1

Response:

  HTTP/1.1 200 Ok
  Digest: sha-256=X48E9qOokqqrvdts8nOJRJN3OWDUoyWxBf7kbu9DBPE=
```

O servidor não suporta nenhuma dos algoritmos de digestão requisitados, então responde com um erro 400 e inclui outro cabeçalho `Want-Digest`, listando os algoritmos que ele suporta:

```
Request:

  GET /item
  Want-Digest: sha;q=1

Response:

  HTTP/1.1 400 Bad Request
  Want-Digest: sha-256, sha-512
```

## Especificações

| Especificação                                                                                                  | Título                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [draft-ietf-httpbis-digest-headers-latest](https://datatracker.ietf.org/doc/draft-ietf-httpbis-digest-headers) | Resource Digests for HTTP |

Este cabeçalho foi originalmente definido na [RFC 3230](https://tools.ietf.org/html/rfc3230), mas a definição de "representação selecionada" na [RFC 7231](https://www.rfc-editor.org/info/rfc7231) fez a definição original ficar inconsistente com as atuais especificações HTTP. Quando lançado, o rascunho "Digestões de Recursos para HTTP" tornará a RFC 3230 obsoleta e vai atualizar o padrão para ficar consistente.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTTPHeader("Digest")}}
